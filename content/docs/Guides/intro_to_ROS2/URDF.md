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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKVKPIN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCqacDrto9Z3eWdlKST9nFVefthKRqnDlQiIJXBD3DhxgIgdqxl1vS6K5m1AMA%2FKgtK%2FWHiGLdsWJLO8noXSAl3m%2FsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoCb67lwzl44lCqnSrcA97TSMiR6USZKSY3P9rB%2FUJuIxeXVtxSynQMJsqb3qMD%2FTtUg2%2Bf5mUs129jkfHEcVkQln4Lye%2F65DCGUgAzM%2BispU29%2FTr%2F61kPQwXQQLloIuabDhtG%2FUiw0lhTlDfqPxhvLqPtuTRD5uEkrC4bHZlj4URUTLlMgsyD%2F7j5uiSlIV3CpNoFJe5gVFCBR%2BhQkZc65yRAOZ2MOgg6Qi0jCNIAyuV%2BokrLEBU0djQRYOZTvEZDGfO5xDmzHNTfY7DkAKRIl8OCt96NXn4%2FVAdc6ziC0fk1MFvE5T%2F0wfuWgY2YkzWeLsI%2Fq6oqGpWTHWPYbOfB2kwfMI8l47wmN3EDlr%2BSrjwTN5oA6dBonvHANngNcz2yKsnISK%2FNvTLek86QI5Nuf%2FI84NviZwiwwaZOj0FiEMtkxb0C52Ag%2B%2B35COZLDog67scVw0%2BU4OXyguZpjZsIQCUnCXlcrh7K8dGnFLZ33jsoUXuRrTZzS5EK9e2EKzYemtMUBykvI32rT3yqNaR7oVr7cylWDYzhvguOE5bDTEBxry%2BSFnfQKHIwI6j9%2B75agD6k%2FcBj%2Bffez%2Bnfa%2F%2FtcBaFrXCRHcF6Kh2ziA%2Fom2vVSy9Hv97V1Djxq25eWHCbClFChlhnBSqfMP3gnr0GOqUBlrd4DCdbYM%2FDeJNw1g1r8vICyohmEz7xo1nRXT%2FyMHKuPzg3FMkcohZGo3tXLinxWJbs%2B9EQUAq7ifQwUSZLAIlCU6rX4a%2FbwvGsR0arxS%2BjbpfdetQyvs1EbFJHVvx0ArHNfHOJbHQsJaulrupinqx3%2BvZDxai2fRQCPC%2FEQfmOZR8d050gDURg6JqWvgqcfqBOjPEtAY%2FyjdpDWNuLwOafBcW7&X-Amz-Signature=d625084a5bee9ac2112a067a4f598a5553b55a8144695e2dba69513d0d01d4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKVKPIN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCqacDrto9Z3eWdlKST9nFVefthKRqnDlQiIJXBD3DhxgIgdqxl1vS6K5m1AMA%2FKgtK%2FWHiGLdsWJLO8noXSAl3m%2FsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoCb67lwzl44lCqnSrcA97TSMiR6USZKSY3P9rB%2FUJuIxeXVtxSynQMJsqb3qMD%2FTtUg2%2Bf5mUs129jkfHEcVkQln4Lye%2F65DCGUgAzM%2BispU29%2FTr%2F61kPQwXQQLloIuabDhtG%2FUiw0lhTlDfqPxhvLqPtuTRD5uEkrC4bHZlj4URUTLlMgsyD%2F7j5uiSlIV3CpNoFJe5gVFCBR%2BhQkZc65yRAOZ2MOgg6Qi0jCNIAyuV%2BokrLEBU0djQRYOZTvEZDGfO5xDmzHNTfY7DkAKRIl8OCt96NXn4%2FVAdc6ziC0fk1MFvE5T%2F0wfuWgY2YkzWeLsI%2Fq6oqGpWTHWPYbOfB2kwfMI8l47wmN3EDlr%2BSrjwTN5oA6dBonvHANngNcz2yKsnISK%2FNvTLek86QI5Nuf%2FI84NviZwiwwaZOj0FiEMtkxb0C52Ag%2B%2B35COZLDog67scVw0%2BU4OXyguZpjZsIQCUnCXlcrh7K8dGnFLZ33jsoUXuRrTZzS5EK9e2EKzYemtMUBykvI32rT3yqNaR7oVr7cylWDYzhvguOE5bDTEBxry%2BSFnfQKHIwI6j9%2B75agD6k%2FcBj%2Bffez%2Bnfa%2F%2FtcBaFrXCRHcF6Kh2ziA%2Fom2vVSy9Hv97V1Djxq25eWHCbClFChlhnBSqfMP3gnr0GOqUBlrd4DCdbYM%2FDeJNw1g1r8vICyohmEz7xo1nRXT%2FyMHKuPzg3FMkcohZGo3tXLinxWJbs%2B9EQUAq7ifQwUSZLAIlCU6rX4a%2FbwvGsR0arxS%2BjbpfdetQyvs1EbFJHVvx0ArHNfHOJbHQsJaulrupinqx3%2BvZDxai2fRQCPC%2FEQfmOZR8d050gDURg6JqWvgqcfqBOjPEtAY%2FyjdpDWNuLwOafBcW7&X-Amz-Signature=e1615bb28e228fb4f113be119bf461499ef9ee01bc04fa4feb5d178811f4b6da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
