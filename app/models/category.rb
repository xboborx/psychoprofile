class Category < ActiveRecord::Base
  belongs_to :group
  has_many :questions
end
