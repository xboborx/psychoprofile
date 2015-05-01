class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title
      t.string :image
      t.string :function
      t.boolean :no_answer
      t.belongs_to :category
    end
  end
end
