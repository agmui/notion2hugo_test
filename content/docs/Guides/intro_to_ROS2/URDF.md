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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRG6PXSL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEslNEjWD9Uk%2FMeMcy7AFGVIh6SqBeh1jD6DBXYgsczOAiEAlapez9%2BKyr8nviVqY9iagVXU1sGDxgTCReP9CWNnOFYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0zXpbhuj6GG5D1eircA7iaE09ka6Wtm4Pgwwok55Ezrr7lmvDRtkFHWSuC9pCuFBLhsEZ2B9gsqoJJKo6Gle9gwG7JnInu6w5dECZzF4v3Eq004pA1RQGRRveRea%2B1c8VuDGWgaToJWmZltBOveqrOO7OMWYmkJXLsfuIx51MLDVBjr90uwoYksUF%2F4nBnPsc3Ch1rlfl6VjgR%2F5ZgM56UMXfZvDo584RY9PEGm41yck79T305eJYRFjCzGEvNqbeGMsh3D9jY7R6gjY4Ew%2BxGg%2F1mwTz9MJ9Ro3kCm7jupx4Digb58Wqppf3TnH%2BjY%2BRCHNdg1yQXgnptyPJecng9fkSg2xp4L93TRaWH0m5NKT6u0U3EBNHJc76zcUT3cSKZPvlK8VByYqGfT3peghdEzBNtDR7PUveNpcuVqeTVx%2BKoqVN0ohN0ONsjfoRMcOSlpF4cNG5Hade9W1xLJNBKSlonwLrwDTNUhMZUPDLcqfM90El6M17mtiGZ3gKmaWWPqsCN%2BHZE1pDMNlx1gdfrD4iPZqhbr%2B9j7bWCkjQwKVl5mzmAa5ndoG0OxoXrrI1No1LX8mfK1jnxpVo9M5eDWGoh7KWVti6zFZwfKLBTkVSE9kQPIaybOJGSjzyDXloHbjHhJZ%2F04Zc6MP2UjL4GOqUBE5Pzid6AaTzyW7B1X8ENlEb2wPKyOJSK%2BgAD7KRyRb34QBpJjls5%2FvlCsr6rzF4WSZJIZf2BDxxgbj2ElhD%2BcQF50%2B2EjwbTdbzCjtys5fG0xYfLyisHyhORgU3aVmlaLNkRy0qULRtNejPLAipK%2F8t4on43RJSWWvrj28jmSrHvAdBA8aPeAdZpfYm7PtkK%2FLWCpMJcaB3pS345LL8TCF7ni2Fr&X-Amz-Signature=b139802dc2be54bdc42a6bcea62e9ba9024d8382877687428d57cb7496517fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRG6PXSL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEslNEjWD9Uk%2FMeMcy7AFGVIh6SqBeh1jD6DBXYgsczOAiEAlapez9%2BKyr8nviVqY9iagVXU1sGDxgTCReP9CWNnOFYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0zXpbhuj6GG5D1eircA7iaE09ka6Wtm4Pgwwok55Ezrr7lmvDRtkFHWSuC9pCuFBLhsEZ2B9gsqoJJKo6Gle9gwG7JnInu6w5dECZzF4v3Eq004pA1RQGRRveRea%2B1c8VuDGWgaToJWmZltBOveqrOO7OMWYmkJXLsfuIx51MLDVBjr90uwoYksUF%2F4nBnPsc3Ch1rlfl6VjgR%2F5ZgM56UMXfZvDo584RY9PEGm41yck79T305eJYRFjCzGEvNqbeGMsh3D9jY7R6gjY4Ew%2BxGg%2F1mwTz9MJ9Ro3kCm7jupx4Digb58Wqppf3TnH%2BjY%2BRCHNdg1yQXgnptyPJecng9fkSg2xp4L93TRaWH0m5NKT6u0U3EBNHJc76zcUT3cSKZPvlK8VByYqGfT3peghdEzBNtDR7PUveNpcuVqeTVx%2BKoqVN0ohN0ONsjfoRMcOSlpF4cNG5Hade9W1xLJNBKSlonwLrwDTNUhMZUPDLcqfM90El6M17mtiGZ3gKmaWWPqsCN%2BHZE1pDMNlx1gdfrD4iPZqhbr%2B9j7bWCkjQwKVl5mzmAa5ndoG0OxoXrrI1No1LX8mfK1jnxpVo9M5eDWGoh7KWVti6zFZwfKLBTkVSE9kQPIaybOJGSjzyDXloHbjHhJZ%2F04Zc6MP2UjL4GOqUBE5Pzid6AaTzyW7B1X8ENlEb2wPKyOJSK%2BgAD7KRyRb34QBpJjls5%2FvlCsr6rzF4WSZJIZf2BDxxgbj2ElhD%2BcQF50%2B2EjwbTdbzCjtys5fG0xYfLyisHyhORgU3aVmlaLNkRy0qULRtNejPLAipK%2F8t4on43RJSWWvrj28jmSrHvAdBA8aPeAdZpfYm7PtkK%2FLWCpMJcaB3pS345LL8TCF7ni2Fr&X-Amz-Signature=4cfd605d81f29ffcdbc45c95bd14c72e0d40a2872550ced85575111431209aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
