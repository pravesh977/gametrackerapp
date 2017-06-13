class GamesController < ApplicationController
  
  def index
    @games = Game.all
    render json: {message: "okay", gamedata: @games}
  end
  
  def show
    @game = Game.find(params[:id])
    render json: {message: "okay", gamedata: @game}
  end
  
end
