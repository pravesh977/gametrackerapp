require 'httparty'

class GamesController < ApplicationController


 
  def root
    render plain: "API Document"
  end

  # def root
  #   @response = HTTParty.get("http://api.stackexchange.com/2.2/questions?site=stackoverflow")
  #   render json: { data: @response }
  # end

  # def fetchingroute
  #   @response = HTTParty.get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&offset=0&order=release_dates.date%3Adesc&search=${this.state.inputgamesearch}")
  #       data: @response
  # end
  

  def index
    @games = Game.all
    # @games = Game.status(params[:status]) if params [:status].present?
    render json: {message: "okay", gamedata: @games}
  end


  def planning
    @games = Game.where(status_id: "1")
    # @game = Game.first
    render json: {message: "okay", gamedata: @games}
  end

  def playing
    @games = Game.where(status_id: "2")
    # @game = Game.first
    render json: {message: "okay", gamedata: @games}
  end

  def completed
    @games = Game.where(status_id: "3")
    # @game = Game.first
    render json: {message: "okay", gamedata: @games}
  end

  def dropped
    @games = Game.where(status_id: "4")
    # @game = Game.first
    render json: {message: "okay", gamedata: @games}
  end

  
    
  def show
    begin
    @game = Game.find(params[:id])
    render json: {message: "okay", gamedata: @game}
    rescue ActiveRecord::RecordNotFound
    render json: {message: "no games match that id"}, status: 404
    # rescue Exception
    # render json: {message: "some error occured :( "}, status: 500
    # not recommended to do rescue Exception
    end
  end
  
  def create
    begin
      @game = Game.new(game_params)
      @game.save
      @all_games = Game.order(:id)
      render json: {message: "You added a new game :)", gamedata: @all_games}
    rescue Exception
      render json: {message: "there was some kinda error here :("}, status: 500
    end  
  end

  def update
    begin
      @game = Game.find(params[:id])
      @game.update(game_params)
      @all_games = Game.order(:id)
      render json: {message: "Successfully updated :)", game_data: @all_games}
    rescue Exception
      render json: {message: "Could not update :("}
    end
  end
  
  def destroy
    begin
      @game = Game.find(params[:id])
      @game.destroy
      @all_games = Game.order(:id)
      render json: {message: "okay", game_data: @all_games}
    rescue ActiveRecord::RecordNotFound
      render json: {message: "no games match that id :("}
    rescue Exception
      render json: {message: "there was some kinda error here :("}
    end
  end
  
 

  private
    def game_params
      params.require(:game).permit(:gamename, :summary, :rating, :imageurl, :status_id)
    end
end