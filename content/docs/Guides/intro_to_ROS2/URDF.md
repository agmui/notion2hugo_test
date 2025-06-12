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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626R46YYV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHGScB4t%2FZl24lbm1rbmtz5F0SXLhn%2BpZQ30GJzWNy3VAiBUNmBqqMz%2B7EG%2F2QiFuY%2BLiwTwRN6iyHZfkstAyiOZyyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSlspVt0ZhOKgEzrpKtwDEpCWsTyE486oJtC59gmu%2ByASMRg5Jx64D%2FlGvDDcpsUKEgaxpL8mxddtmTU%2BwG8vJqo7FoYaJYe2mUg8HPVzdryw4Hw8cBUQjTau4MavMoxx9DttHth0AdZxycOG%2FwqLinNwvH1UDOpr3ObiuzwEUKEVwc%2Byj%2BKKsgjBX55ts5RL%2Fb9w2k2izdDCs5KduZsaISjEp6zZ9d03XVQ9uuWsDUS8DL9tC3gQa0dOC9C1mt9ttTRIGpwu2yh9poPH1IOx%2BnMBpt1ytZFhgk%2Bf09Jmdm6i8frgia98GfWIFqa4zWX%2BqNSl2DYZtFR6vuAhEjKdgdis9IUBHojrFd8K5i%2BPQuX%2BiLusVbeLflM%2F41RutTttlHEtXcL2vNOIaf%2BozXe%2Brq4mv5gm4A5u8BxbrDZluIh4ISv%2F4Le94TNWJelDL3fmALbUZfXPh%2FlniDIpwAPyPEegBGN9%2Fvo8l1SzQRNabA%2FMFrL7aGY65cshnkvCsFsHjm29%2F5qFmvOh2sU6ZdHDeJmHJo8rqMfwSNWVO2CPqG9xrOWd%2B8QqArcYBcl48wZAJLTo2At4XMqamhf4CM8YNApeq03%2BvcSRjdxK0m62Ei5Hyy%2BkIqw8EXJOv3DVuUxMZ%2F1NMOEab8%2BVh20wlvGowgY6pgEcbkYYtRi4rkHSgNd1y6TsHkb0oWx0VzBcZ8BzqNz2vqrx0VObo4qmffWPHt8zQ5CvC8kU%2FN7CIEb1Tjrg3BjG3T9p3exB6Q8bFmupHNcKyNQs%2BvbGmZS7%2BYSGZ6h4ObwolG%2FZuVl9hcEQ%2FFJH9PQYucxFCXFYLTm0ZADMlCgehLbqnGTf9dzfq0jJfQcARVzBNNpeMxstOBZ3MWT%2FjrhLUfVBWQAw&X-Amz-Signature=3bb92447d79c29ed144bedf4db7d681d155214e03ef8b4547a932b5d9a82204e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626R46YYV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHGScB4t%2FZl24lbm1rbmtz5F0SXLhn%2BpZQ30GJzWNy3VAiBUNmBqqMz%2B7EG%2F2QiFuY%2BLiwTwRN6iyHZfkstAyiOZyyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSlspVt0ZhOKgEzrpKtwDEpCWsTyE486oJtC59gmu%2ByASMRg5Jx64D%2FlGvDDcpsUKEgaxpL8mxddtmTU%2BwG8vJqo7FoYaJYe2mUg8HPVzdryw4Hw8cBUQjTau4MavMoxx9DttHth0AdZxycOG%2FwqLinNwvH1UDOpr3ObiuzwEUKEVwc%2Byj%2BKKsgjBX55ts5RL%2Fb9w2k2izdDCs5KduZsaISjEp6zZ9d03XVQ9uuWsDUS8DL9tC3gQa0dOC9C1mt9ttTRIGpwu2yh9poPH1IOx%2BnMBpt1ytZFhgk%2Bf09Jmdm6i8frgia98GfWIFqa4zWX%2BqNSl2DYZtFR6vuAhEjKdgdis9IUBHojrFd8K5i%2BPQuX%2BiLusVbeLflM%2F41RutTttlHEtXcL2vNOIaf%2BozXe%2Brq4mv5gm4A5u8BxbrDZluIh4ISv%2F4Le94TNWJelDL3fmALbUZfXPh%2FlniDIpwAPyPEegBGN9%2Fvo8l1SzQRNabA%2FMFrL7aGY65cshnkvCsFsHjm29%2F5qFmvOh2sU6ZdHDeJmHJo8rqMfwSNWVO2CPqG9xrOWd%2B8QqArcYBcl48wZAJLTo2At4XMqamhf4CM8YNApeq03%2BvcSRjdxK0m62Ei5Hyy%2BkIqw8EXJOv3DVuUxMZ%2F1NMOEab8%2BVh20wlvGowgY6pgEcbkYYtRi4rkHSgNd1y6TsHkb0oWx0VzBcZ8BzqNz2vqrx0VObo4qmffWPHt8zQ5CvC8kU%2FN7CIEb1Tjrg3BjG3T9p3exB6Q8bFmupHNcKyNQs%2BvbGmZS7%2BYSGZ6h4ObwolG%2FZuVl9hcEQ%2FFJH9PQYucxFCXFYLTm0ZADMlCgehLbqnGTf9dzfq0jJfQcARVzBNNpeMxstOBZ3MWT%2FjrhLUfVBWQAw&X-Amz-Signature=d4fc929a07a0345823e2bf6b631edbadb38e0fe8b7e74ba3164afa876d0a2398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
