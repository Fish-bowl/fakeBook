100.times do 
  Post.create(
    title: Faker::Book.title,
    author: Faker::FunnyName.name,
    body: Faker::RickAndMorty.quote
  )
  end
  puts 'seeded'