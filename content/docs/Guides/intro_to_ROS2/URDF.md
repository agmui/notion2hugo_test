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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHT5FKBT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD3mlQTnZcgiyFZbumVpyaxhIuma8H86ejEN7dkE35SegIgSDU4CVxwHlP2i0v98FRS2PMeJ9YOOa9r%2BoD84IDmU9Eq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDK6GKeeLfCUZWr2wVSrcAx%2F5dGkAHy8jwMrtG9Y7JrA1F3kiZxs3Tg8nb7VFlGQhZxw7Z8SD2V4hzY7hDqFOn7Bd7VC2MX%2F%2B8FiOTrvHcVjqHJEAioYJk7vuMgm8WLM%2Fy1Kpm5TkpryOpVKheMkwPEnYGN5utaHsWQuABcXUWwFNle%2BUSVv8udby0WwZXtW1k5B%2Fr133WFSWJ3Jn3TyagVeu034%2BZ540bU9fC38fX5jAdFdSGQmRrMaeHuFYY06wc3cW3jTo16cakotGeuRGfs1pBvEsWc9Nn%2Bc57HTsNQWFVsOsjclVyZYx3b72OKHIAI6QOPxm2XCI30upTo4b3byjHKTcVqzeGFncTaXoPUi4GLqRyXTJftJupAJoPe2jw5EraDf0HDZUTdBcYeeebJ2FFh2pH2IANnK1UyFePenU60V5H%2Bpnm0bR2eJRhvO%2FzMqtfKZqh7VsN5HGhuWGCkW6BlPhMGHpOGGHQFgDk4CTLUBKUyLF0EjMWBXzRGd9g0jbBCQZUAqL9Ki9RG2C6%2BP%2F5xCvTH5LSD46h94IDDuHlhWTJE0%2B%2FOmbAJVo8%2BQ0rH%2F6Iv9Dkei0E228INnA%2FUxYbZt7DFYXBFMBtvJqLiF1LlTHKFEVd2vj42afp259y2iSPSak%2FjIp2od1MN33usIGOqUBzlchfkdGEXBnt8RwzAVozCJTlexH66Wcfei5YnVjYL%2BSparsl1Uggvr%2Fz2XfL8WLg1XUXn2mCwO%2BiE3IMsbaO8%2BsMn9fAXGg3RUHmyRpjSrASXXsE8wN%2BFNPno1FaGq06bou%2FIYFR5qY8bvLL0iVN4FPb41M09JIXZ5vMTjF1ApJnvDvNSe%2Fo7dtwf3mRPy%2BHPjNH18WavUk5%2BO00irTwKwHNoD3&X-Amz-Signature=e34b036899516787f5195c1d75ff01d26e08fa459be617a6e0ed5c402e7a40ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHT5FKBT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD3mlQTnZcgiyFZbumVpyaxhIuma8H86ejEN7dkE35SegIgSDU4CVxwHlP2i0v98FRS2PMeJ9YOOa9r%2BoD84IDmU9Eq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDK6GKeeLfCUZWr2wVSrcAx%2F5dGkAHy8jwMrtG9Y7JrA1F3kiZxs3Tg8nb7VFlGQhZxw7Z8SD2V4hzY7hDqFOn7Bd7VC2MX%2F%2B8FiOTrvHcVjqHJEAioYJk7vuMgm8WLM%2Fy1Kpm5TkpryOpVKheMkwPEnYGN5utaHsWQuABcXUWwFNle%2BUSVv8udby0WwZXtW1k5B%2Fr133WFSWJ3Jn3TyagVeu034%2BZ540bU9fC38fX5jAdFdSGQmRrMaeHuFYY06wc3cW3jTo16cakotGeuRGfs1pBvEsWc9Nn%2Bc57HTsNQWFVsOsjclVyZYx3b72OKHIAI6QOPxm2XCI30upTo4b3byjHKTcVqzeGFncTaXoPUi4GLqRyXTJftJupAJoPe2jw5EraDf0HDZUTdBcYeeebJ2FFh2pH2IANnK1UyFePenU60V5H%2Bpnm0bR2eJRhvO%2FzMqtfKZqh7VsN5HGhuWGCkW6BlPhMGHpOGGHQFgDk4CTLUBKUyLF0EjMWBXzRGd9g0jbBCQZUAqL9Ki9RG2C6%2BP%2F5xCvTH5LSD46h94IDDuHlhWTJE0%2B%2FOmbAJVo8%2BQ0rH%2F6Iv9Dkei0E228INnA%2FUxYbZt7DFYXBFMBtvJqLiF1LlTHKFEVd2vj42afp259y2iSPSak%2FjIp2od1MN33usIGOqUBzlchfkdGEXBnt8RwzAVozCJTlexH66Wcfei5YnVjYL%2BSparsl1Uggvr%2Fz2XfL8WLg1XUXn2mCwO%2BiE3IMsbaO8%2BsMn9fAXGg3RUHmyRpjSrASXXsE8wN%2BFNPno1FaGq06bou%2FIYFR5qY8bvLL0iVN4FPb41M09JIXZ5vMTjF1ApJnvDvNSe%2Fo7dtwf3mRPy%2BHPjNH18WavUk5%2BO00irTwKwHNoD3&X-Amz-Signature=598712e17ef1c86ff2b8080ed724c477e3a5bdb993fe452d7f4fc8871daad750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
