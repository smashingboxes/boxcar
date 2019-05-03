# frozen_string_literal: true

shared_examples "a valid delayed job creation" do |count|
  before { Delayed::Worker.delay_jobs = true }

  after { Delayed::Worker.delay_jobs = false }

  it "creates a delayed job" do
    expect { subject }.to change { Delayed::Job.count }.by count
  end
end

shared_examples "a valid service run" do
  it "succeeds" do
    expect(subject).to be_valid
  end
end

shared_examples "a valid service run with object creation" do |value, count|
  it_behaves_like "a valid service run"

  it "creates new object(s)" do
    expect { subject }.to change { value.constantize.count }.by(count)
  end
end

shared_examples "a valid service run with object destruction" do |value, count|
  it_behaves_like "a valid service run with object creation", value, (-1 * count.abs)
end

shared_examples "an invalid service run with errors" do |keys, message|
  it "fails" do
    expect(subject).to_not be_valid
  end

  it "returns errors" do
    expect(subject.errors.messages).to include(
      keys.map do |val|
        { "#{val}": [message] }
      end.first
    )
  end
end

shared_examples "an object deletion service" do |object_class, count|
  it_behaves_like "a valid service run"

  it "deletes existing objects" do
    subject
    expect(object_class.constantize.count).to eq(count)
  end
end

shared_examples "a failed deletion" do |expected_error|
  let(:error_messages) { subject.errors.messages[:base] }
  it "returns an error" do
    expect(subject).to_not be_valid
    expect(error_messages).to include(expected_error)
  end
end

shared_examples "an object upsert service" do
  context "when deleting" do
    it "calls the delete service with expected params" do
      expect(delete_service).to receive(:run).with(params)
      subject
    end
  end

  context "when updating" do
    before { objects_params.delete(:_delete) }

    it "calls the update service with expected params" do
      expect(update_service).to receive(:run).with(params)
      subject
    end
  end

  context "when creating" do
    before do
      %i[_delete id].each { |k| objects_params.delete(k) }
      allow(create_service).to receive(:run).and_return_original
    end

    it "calls the create service with expected params" do
      subject
      expect(create_service).to have_received(:run).with(params)
    end
  end
end
