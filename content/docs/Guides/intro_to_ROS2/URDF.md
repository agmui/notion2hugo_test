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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PTI4KK5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2dRT9SAgOA5HHXE9U1dnUGRrG%2Fg0%2FfOZnV4F0eVczYAiBQ9EQaFARJZkgUUgcOm132LFeWK0YwFsOFp3PVE0%2FlMiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEM6gYhPgIe%2FbGUbYKtwDhoOMpx2jNC3%2B30cnViaByd8%2Fuc9%2FZEWcrpcphBUvh9rfBKs6sJYF0VefpO1doHUoyzWOq61iUbm4Df4TlM8uZdS%2B1%2BcKKQlDZK21o0uLFDNnEAjYGLDhKf2ZLSR%2FzVjfbzb3uKfyMAL2Eeah4fDJx8ZvYft%2BwLuHl67YwH7Fnfl0tS8pfCj1w6qzmdz%2FvQ%2FhLIvB4bb7jIV5s48hdboHb1Ix0yVVTuX9dFRJVATZvXw2Mppmi2O9T7bsyGqCpGMu0lRDwMz7l0ed97%2BlNKe2twhDWQKJv1hDD1205pUOw5hADv7Mb7r6Ga0toPImrjHm5Dp8VP0ZyVxCtQCpeeJgBlId%2BOVeEDby4Vn64eGJNZZrR9tBC%2FUrnfs5fhXNTTwYWHgRBqTeqiGHIqTc7uzvVf%2FpmOHUCIdgDIMPDJCGflzjZ5SNUGYkvFCNkV8i4zcRSBMVMsepsMYvM3a9gXwt4rS9qlzba38ZbKWZRB7TpM2YcRgDR5IzYtbcqDeht0uP34SGMRzhIicV15%2BXLt8ItC%2FGX6mU%2FDbms0HszLFzt%2FGNPxoK%2FUe%2BeHubzKsniuQQLOmpAPTaidHOkzLXFrMEKEQlGYi1AlAsBoE9k77v5Pr6yQV5u6GJGnK6j9Ew1eT%2BvAY6pgHg4SN%2BQvVw16BeaxPK3Kc%2FuzBV5BEtKgq8a1n7d2Op5iVEjfrDA%2BwjgPWu8Aq9Q7K83dtJO2JzR2f9%2FUA9wegSCS5ckQSTRGbZy8GiHPImIoE1wRTU3QQrrNvHB6Qp4iWjvCd1uhdppDdCWs6l55%2FfaGyY5gcBe3lYL180doPNuOXFW%2FimrtS%2BmOs1Ii6jBPhN2X5vrpUbzhecnyDQIOHDo%2BmBKR6x&X-Amz-Signature=da672d8e33737d94eabe7d37660e3ce3ce44aaaa2fc7c164ca34244d9e1b6c10&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PTI4KK5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2dRT9SAgOA5HHXE9U1dnUGRrG%2Fg0%2FfOZnV4F0eVczYAiBQ9EQaFARJZkgUUgcOm132LFeWK0YwFsOFp3PVE0%2FlMiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEM6gYhPgIe%2FbGUbYKtwDhoOMpx2jNC3%2B30cnViaByd8%2Fuc9%2FZEWcrpcphBUvh9rfBKs6sJYF0VefpO1doHUoyzWOq61iUbm4Df4TlM8uZdS%2B1%2BcKKQlDZK21o0uLFDNnEAjYGLDhKf2ZLSR%2FzVjfbzb3uKfyMAL2Eeah4fDJx8ZvYft%2BwLuHl67YwH7Fnfl0tS8pfCj1w6qzmdz%2FvQ%2FhLIvB4bb7jIV5s48hdboHb1Ix0yVVTuX9dFRJVATZvXw2Mppmi2O9T7bsyGqCpGMu0lRDwMz7l0ed97%2BlNKe2twhDWQKJv1hDD1205pUOw5hADv7Mb7r6Ga0toPImrjHm5Dp8VP0ZyVxCtQCpeeJgBlId%2BOVeEDby4Vn64eGJNZZrR9tBC%2FUrnfs5fhXNTTwYWHgRBqTeqiGHIqTc7uzvVf%2FpmOHUCIdgDIMPDJCGflzjZ5SNUGYkvFCNkV8i4zcRSBMVMsepsMYvM3a9gXwt4rS9qlzba38ZbKWZRB7TpM2YcRgDR5IzYtbcqDeht0uP34SGMRzhIicV15%2BXLt8ItC%2FGX6mU%2FDbms0HszLFzt%2FGNPxoK%2FUe%2BeHubzKsniuQQLOmpAPTaidHOkzLXFrMEKEQlGYi1AlAsBoE9k77v5Pr6yQV5u6GJGnK6j9Ew1eT%2BvAY6pgHg4SN%2BQvVw16BeaxPK3Kc%2FuzBV5BEtKgq8a1n7d2Op5iVEjfrDA%2BwjgPWu8Aq9Q7K83dtJO2JzR2f9%2FUA9wegSCS5ckQSTRGbZy8GiHPImIoE1wRTU3QQrrNvHB6Qp4iWjvCd1uhdppDdCWs6l55%2FfaGyY5gcBe3lYL180doPNuOXFW%2FimrtS%2BmOs1Ii6jBPhN2X5vrpUbzhecnyDQIOHDo%2BmBKR6x&X-Amz-Signature=7a20c318bc5e4f95114ba7d4dbd17a855535beafe98ed8106cd1fd3a03020f22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
