json.extract! message, :id, :message, :created_at, :updated_at
json.url message_url(message, format: :json)
