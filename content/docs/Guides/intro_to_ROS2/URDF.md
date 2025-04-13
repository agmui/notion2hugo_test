---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7LT7OF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDa1Zby677HIxbnLkelLwT7wKlQ8ZjcRe1IZoo%2FtwrFlAiEA1aqUqWuZ%2BZCnh2EqxAEPRd8heZspvycqOaYzRjmIN5MqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDppDNlGOK%2Byjr9nCCrcA7PcF6CjWG8fv6mIg4MOo3Sn8Eewtnoh9DYU4tuKeWst%2F2P8ML1QdT0dkA45vsYyFki%2FobTy5hKjm3Gl1XvPozgJpIidYvJdmuOLB44hC7oVCbLsxVyFkuVE8LSkrLOIn%2BxGYprJl6FINb1%2BrQhkm8WwIFrBDvD91%2FneV%2BpIJzOd4odRw6uOJAtsNtEwAUhEua8jH9e0JGGyMSEj4XgMRL9X6MzFTszPYfvAnlU9Mef%2BoqtQI4E788Qix15IVNsmgmJYQ4z261L77ubxduQHlVY%2F8cg2AG0k14uxLNu26Wzdm%2BsqwmoT7zHPfYBAyjq6FLxSOYmGXxDq1VSZE8gepMr%2B2Y%2FJTKisrAxaxHr3SEr5M9jq57qwTA4yVsobmuG%2F2LW7y248tOf3CoP91KoslXmjq%2BuZSYv7g0LjJ9LABzsDy3ZI06W2VqN1MpQc6VZpPKFmMAdafAbqXjGskRBUmLoSjX9CxXwL3bIR8gfHNsPgpsWXD1QmeSpi%2F%2FAIE8iH%2Bh9C69AbaMTeyGwFhOfrGnBnJwGXykY6VirI4HXKQmbuiIfAmDAfB1aAKxRDiYT6jvUgLFxKMfw80woeFG1kYYz2pJY%2F5ycTiDV9qz6COoRl3sbsrR5X6UDdQT0WMJ%2BO7b8GOqUBpgXoCk12spf%2BiA1QBD9Mv5F8NPwquHJMHwpwiTbthrNg%2FBbsVn%2F6vHH71lh1xKp8HqRqb7tsnmWFztN2A3m8R%2FeHfefCLBgFQcettVtUXidgoeRB9PvrDfOylqUG1KTOy0idRIGQXZjxLVFajkzNPiPMtY9SVzIzdii4rRkL3ZEMI1X0SQee4D0Vdqet7%2FiOLyAbZX7kSrimXWU3vpHRIiu%2FtmGL&X-Amz-Signature=9b066353e925b785c5097cb2cb8d6740ea0010b7dfaa758901b0eb2efa5d7759&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7LT7OF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDa1Zby677HIxbnLkelLwT7wKlQ8ZjcRe1IZoo%2FtwrFlAiEA1aqUqWuZ%2BZCnh2EqxAEPRd8heZspvycqOaYzRjmIN5MqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDppDNlGOK%2Byjr9nCCrcA7PcF6CjWG8fv6mIg4MOo3Sn8Eewtnoh9DYU4tuKeWst%2F2P8ML1QdT0dkA45vsYyFki%2FobTy5hKjm3Gl1XvPozgJpIidYvJdmuOLB44hC7oVCbLsxVyFkuVE8LSkrLOIn%2BxGYprJl6FINb1%2BrQhkm8WwIFrBDvD91%2FneV%2BpIJzOd4odRw6uOJAtsNtEwAUhEua8jH9e0JGGyMSEj4XgMRL9X6MzFTszPYfvAnlU9Mef%2BoqtQI4E788Qix15IVNsmgmJYQ4z261L77ubxduQHlVY%2F8cg2AG0k14uxLNu26Wzdm%2BsqwmoT7zHPfYBAyjq6FLxSOYmGXxDq1VSZE8gepMr%2B2Y%2FJTKisrAxaxHr3SEr5M9jq57qwTA4yVsobmuG%2F2LW7y248tOf3CoP91KoslXmjq%2BuZSYv7g0LjJ9LABzsDy3ZI06W2VqN1MpQc6VZpPKFmMAdafAbqXjGskRBUmLoSjX9CxXwL3bIR8gfHNsPgpsWXD1QmeSpi%2F%2FAIE8iH%2Bh9C69AbaMTeyGwFhOfrGnBnJwGXykY6VirI4HXKQmbuiIfAmDAfB1aAKxRDiYT6jvUgLFxKMfw80woeFG1kYYz2pJY%2F5ycTiDV9qz6COoRl3sbsrR5X6UDdQT0WMJ%2BO7b8GOqUBpgXoCk12spf%2BiA1QBD9Mv5F8NPwquHJMHwpwiTbthrNg%2FBbsVn%2F6vHH71lh1xKp8HqRqb7tsnmWFztN2A3m8R%2FeHfefCLBgFQcettVtUXidgoeRB9PvrDfOylqUG1KTOy0idRIGQXZjxLVFajkzNPiPMtY9SVzIzdii4rRkL3ZEMI1X0SQee4D0Vdqet7%2FiOLyAbZX7kSrimXWU3vpHRIiu%2FtmGL&X-Amz-Signature=376077e469acdf4a0d017602a46ec7b712f69671145eb436795353100b36fbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
