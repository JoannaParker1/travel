class AddPopulationToDestination < ActiveRecord::Migration[5.0]
  def change
    add_column :destinations, :population, :integer
  end
end
