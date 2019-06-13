# GroupMe Story Bot Gerald V2
Just finished a complete rewrite.

It randomly combines story sections to generate unique stories when called in the groupme server. It can also host word based easteregg hunts, and prevent spam!

## Features
* cooldown timer for too many requests, to prevent chat spam
* text based easter egg hunt with score scoring in postgreSQL
* multiple group support
* keeps stats for how many stories were requested and can post to the group
* parses large story strings into multiple messages to avoid groupme character limitations.

## Requirements
* knowledge of postgreSQL
* setup bigint for s, t, timeout
* setup int for players if you want to use easteregg functions
* knowledge on how to get player ids

## To-do
* simplify adding story sections
* simplify adding easter egg hunts
* add more story sections
* re-add easteregg hunt (currently missing due to overhaul)
* add more fun interactions and triggers

## License
Now based on my own server code.

[GNU GPLv3 License](LICENSE.txt)
