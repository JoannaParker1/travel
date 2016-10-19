class WelcomeController < ApplicationController
  def index
  	@homestate = 'Arizona'
  	@countries = ['Canada', 'United States', 'Mexico']
  	@images = ['Victoria.jpeg', 'US.jpeg', 'Mexico.jpeg']
  	@united_states = {"capital city" => "Washington, DC", 
                     "favorite city" => "Asheville, NC", 
                     "favorite state" => "Oregon", 
                     "flag colors" => ["red", "white", "blue"]}
  end

  def about
  	@color = params[:color]
  	@size = params[:size]
  end

  def contact
  end

end
