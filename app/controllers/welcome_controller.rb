class WelcomeController < ApplicationController
  def index
  	@homestate = 'Arizona'
  	@countries = ['Canada', 'United States', 'Mexico']
  	@images = ['Victoria.jpeg', 'US.jpeg', 'Mexico.jpeg']
  end

  def about
  	@color = params[:color]
  	@size = params[:size]
  end

  def contact
  	
  end
end
