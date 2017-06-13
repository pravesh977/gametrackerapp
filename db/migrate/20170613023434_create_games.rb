class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :gamename
      t.text :summary
      t.integer :rating
      t.string :imageurl
      t.references :status, foreign_key: true

      t.timestamps
    end
  end
end
