class MessagesController < ApplicationController

  # GET /messages or /messages.json
  def index
    @messages = Message.all.sample
    render json: @message, status: 200
  end

end
