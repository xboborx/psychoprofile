class WelcomeController < ApplicationController
  def index
    @groups = Group.all

    p @groups

  end
end
