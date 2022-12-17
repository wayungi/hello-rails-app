class MessagesController < ApplicationController

  # GET /messages
  def index
    @message = Message.all.sample
    render json: @message, status: 200
  end

end
