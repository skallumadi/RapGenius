# == Schema Information
#
# Table name: artists
#
#  id             :integer          not null, primary key
#  artistname     :string(255)
#  iq             :integer
#  about          :text
#  created_at     :datetime
#  updated_at     :datetime
#  image_url      :string(255)
#  filepicker_url :string(255)
#

class Artist < ActiveRecord::Base
  has_many(
    :tracks,
    :primary_key => :id,
    :foreign_key => :artist_id,
    :class_name => "Track"
  )
end
