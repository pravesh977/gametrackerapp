# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

['Plan to Buy', 'Playing', 'Completed', 'Dropped'].each do |stuff|
  Status.create(mygamestat: stuff)
  end

[
  {
  gamename: "GTA: San Andreas",
  summary: "Returning after his mother's murder to the semi-fictional city of Los Santos (based on Los Angeles), Carl Johnson, a former gang banger, must take back the streets for his family and friends by gaining respect and once again gaining control over the city. However, a story filled with plots, lies and corruption will lead him to trudge the entire state of San Andreas (based on California and Nevada) to get revenge",
    rating: 93,
    imageurl: "https://images.igdb.com/igdb/image/upload/t_thumb/h0byhm1o9j8maqfhxd91.jpg",
    status_id: 2
},
 {
    gamename: "Yakuza 0",
    summary: "Yakuza 0 is a prequel set in 1988 to the Yakuza series of games developed by Sega, taking place before the first Yakuza game. Like in the previous games, the game's main setting is the fictional town of Kamurocho in Tokyo",
    rating: 85.83,
    imageurl: "https://images.igdb.com/igdb/image/upload/t_thumb/xnqjqplrkaovii0pc2ud.jpg",
    status_id: 1
  }
].each do |stuff|
Game.create(stuff)
end