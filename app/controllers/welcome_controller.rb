class WelcomeController < ApplicationController
  def index
    @groups = Group.all

    p @groups

  end

  def new
    p params


    dataFrontFace = params[:foo][:hiddenFFPhoto]

    File.open('test.png', 'wb') do|f|
      f.write(Base64.decode64(dataFrontFace['data:image/png;base64,'.length .. -1]))
    end
  end

end
