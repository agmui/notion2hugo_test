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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UVL5V6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl01CbdV4qRwI614HU48FQe5G%2BxW%2F3peBjBBrv6bei6AIhAJAiuoOKu86V2M8Eqofu%2BMeoWewzOJgI9cQs9LwmL9d0KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ0dKceQu%2BYYpPrAEq3APhJb6nHZ95fGrdWSatTDwB%2B1YKEYLS%2BW6PkOxKWmVFB%2F1OjmhzfeDQzJ4EwiO7HaoGyotYJDMfzLUu5Dd%2F9OPtDSIMElqVdHF27ImuofcuSnFgbiPool0Gx4V%2FmjMUXPeuVtk4CM2AfaL%2BuKdaIpWh0hsaMEFaBmI6NGLkNOrwSVtksxrd%2FmmARaXX5CIt2ln24iu9Le5NoRqR6Zd2wqd8R1TiEZbtJtzbIXtXXjuiL9Sadsp9ZgLdqcwF4Bot6lSTVAEttTknFMRUMLGHjKGHADjaC0mtXX4cLBLRwSwSHRE8nvS8ik0VVbcyG%2F7r1W1JCZmFvxKK8Oy6ThhRhgQaXUyclvcWEj7NpcATsg%2F%2B9x80qnqYxZ%2BCv0WVC6GQC5hSOtXaqH8hgs3b1SM3%2BRAewxeyfJDm%2FmlDsHkSayvwiM%2BoJrPwFS1l9HaiG62ba0IcO8u%2F0zwEpLOdMNx%2FZyy0mn1ScVqGHwXwQSeUPoVWMxjcL4n8fwjKyYj0jHwderjSsk029xKWl%2Fbbyhkma2G7ANZTWIj3NBs6Mc6F8CADkYA3wBLov5Ye7acO0UfowyDPMIgHqLCTi5RxQqNRtwxCkaXfLs1bHaAZgkSFJuIekgu3V8X%2Br%2BbxSGbI%2FTD1xrDBBjqkAWoFuKsoCptyq7QyTQKmRP3qG4WIE0vD4r7Xnjk4mM3Zbh4RecVbBjdPvKeoB9kZvdxtbbUbcEVyvTI1xRSdfRnsnVRfMPHcSt0JgYJ75UArg1%2BtHPMY3KVHivyTLnpz67vtliuZlDLAZL%2FeoYe%2BvlCnR4Ve6dBf2poXYJY33fiWdI6039bkHPMQnKatY%2BS%2BZhEsIG2ccVaCSL0TsXMNVFWxQK%2B5&X-Amz-Signature=0271b1603de596756c56a6c460777cbb43b7e6ca19e1a4eb7313face20e7e4ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UVL5V6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl01CbdV4qRwI614HU48FQe5G%2BxW%2F3peBjBBrv6bei6AIhAJAiuoOKu86V2M8Eqofu%2BMeoWewzOJgI9cQs9LwmL9d0KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ0dKceQu%2BYYpPrAEq3APhJb6nHZ95fGrdWSatTDwB%2B1YKEYLS%2BW6PkOxKWmVFB%2F1OjmhzfeDQzJ4EwiO7HaoGyotYJDMfzLUu5Dd%2F9OPtDSIMElqVdHF27ImuofcuSnFgbiPool0Gx4V%2FmjMUXPeuVtk4CM2AfaL%2BuKdaIpWh0hsaMEFaBmI6NGLkNOrwSVtksxrd%2FmmARaXX5CIt2ln24iu9Le5NoRqR6Zd2wqd8R1TiEZbtJtzbIXtXXjuiL9Sadsp9ZgLdqcwF4Bot6lSTVAEttTknFMRUMLGHjKGHADjaC0mtXX4cLBLRwSwSHRE8nvS8ik0VVbcyG%2F7r1W1JCZmFvxKK8Oy6ThhRhgQaXUyclvcWEj7NpcATsg%2F%2B9x80qnqYxZ%2BCv0WVC6GQC5hSOtXaqH8hgs3b1SM3%2BRAewxeyfJDm%2FmlDsHkSayvwiM%2BoJrPwFS1l9HaiG62ba0IcO8u%2F0zwEpLOdMNx%2FZyy0mn1ScVqGHwXwQSeUPoVWMxjcL4n8fwjKyYj0jHwderjSsk029xKWl%2Fbbyhkma2G7ANZTWIj3NBs6Mc6F8CADkYA3wBLov5Ye7acO0UfowyDPMIgHqLCTi5RxQqNRtwxCkaXfLs1bHaAZgkSFJuIekgu3V8X%2Br%2BbxSGbI%2FTD1xrDBBjqkAWoFuKsoCptyq7QyTQKmRP3qG4WIE0vD4r7Xnjk4mM3Zbh4RecVbBjdPvKeoB9kZvdxtbbUbcEVyvTI1xRSdfRnsnVRfMPHcSt0JgYJ75UArg1%2BtHPMY3KVHivyTLnpz67vtliuZlDLAZL%2FeoYe%2BvlCnR4Ve6dBf2poXYJY33fiWdI6039bkHPMQnKatY%2BS%2BZhEsIG2ccVaCSL0TsXMNVFWxQK%2B5&X-Amz-Signature=7bcb487804f29fe464742c6857bc57455b856d17bb426cf74f0b0119aab2c4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
