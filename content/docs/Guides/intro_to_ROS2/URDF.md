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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YRGGKSG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUqfrMHijthkGb%2FMg6trMJ1krTcOSyQi1%2BMxc5x%2BG%2BzAiEA3S%2F8MPBsxIysHs0Ne%2FQNMAmZih3%2Bx56QYXetpehJwmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLWxVDCQs1NgyR9OQCrcAyKNIa2INsSfo2MrfQn67vbSNZMlyCnb9kha00PYLGrG4LqiOrq5BJe7dj2ZxM%2BxV%2BGEVs7J5HQpCMMd4Ov0spAx4OtlFUyn8Nzmd0BnZJJJM8NKAyVKQIrumMwiNI%2B4wGJRGBYF8rGCMj3h9c3c0z35pYSvICYMJbzRFXfygGsEYwA01YHJYz0yVMmaYh2XjX4EkSM0L8mve8wL%2B0lUrvzL5s0eABVpMrz%2Flp6%2BmvkQtmjHzxmaWLNf4WhITVX28HKPimDneKEv5E2NlhU%2Bq2RhO9UWBHaOOWa9rqzZ1Gyw1GhS3PzIuq20xjO2AmAbpXL40qiqmOLjYWjE9mNRGAVPCifkwo9NcYa2WUSFoNxiIjfyftKQ9yCX5SVVPiOLUZi%2F8VywzumGsWLrsuiwkYHzgJyyvjC2BVUCxG9ofIfmzpdL1Jc2595e8jhKZohCjhTDexli7XprrxcC%2FkkENU2XUDW56hCdw6r26rirv5ED3Cu436iDJ%2Fvd3KYrPbnt%2FOmK6WiqbG%2F2q1CsStgdCf8elgWBdVAmldvdVYC%2BV9Tl8jIRlFdHg3R%2FDEzCq3%2BnudEqUTNVzzZkBN2nVNLhWkeNF9HcX5FsdYfDUGJmmUtF%2FlcooEkU7YqiI%2F28MOrx7r0GOqUB55211tYlhZdPTzsOFqmaNwslhmVhmi3z7eASWeUl1tDm8UazPgiER7U1Mp8HN0sSu6t0980pxXQNjUlGvg91v2UCmR9zwdG6d2GgF0V3%2BVChOUE7g7UpN%2FaHHyMD%2BcojSvSm7kv3hOiPZuJofdIfPvebUvgSbP%2Fy2yatYl%2B5%2BZcGubGKPY7oLTsRnsLYy2iGrQxJzgKPBiDK7zREvwKXY7PvpJsu&X-Amz-Signature=8620fd8d551f9744fb854f74d9950cab08c9764c9665c69cfa5b1b9f72b5d96c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YRGGKSG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUqfrMHijthkGb%2FMg6trMJ1krTcOSyQi1%2BMxc5x%2BG%2BzAiEA3S%2F8MPBsxIysHs0Ne%2FQNMAmZih3%2Bx56QYXetpehJwmgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLWxVDCQs1NgyR9OQCrcAyKNIa2INsSfo2MrfQn67vbSNZMlyCnb9kha00PYLGrG4LqiOrq5BJe7dj2ZxM%2BxV%2BGEVs7J5HQpCMMd4Ov0spAx4OtlFUyn8Nzmd0BnZJJJM8NKAyVKQIrumMwiNI%2B4wGJRGBYF8rGCMj3h9c3c0z35pYSvICYMJbzRFXfygGsEYwA01YHJYz0yVMmaYh2XjX4EkSM0L8mve8wL%2B0lUrvzL5s0eABVpMrz%2Flp6%2BmvkQtmjHzxmaWLNf4WhITVX28HKPimDneKEv5E2NlhU%2Bq2RhO9UWBHaOOWa9rqzZ1Gyw1GhS3PzIuq20xjO2AmAbpXL40qiqmOLjYWjE9mNRGAVPCifkwo9NcYa2WUSFoNxiIjfyftKQ9yCX5SVVPiOLUZi%2F8VywzumGsWLrsuiwkYHzgJyyvjC2BVUCxG9ofIfmzpdL1Jc2595e8jhKZohCjhTDexli7XprrxcC%2FkkENU2XUDW56hCdw6r26rirv5ED3Cu436iDJ%2Fvd3KYrPbnt%2FOmK6WiqbG%2F2q1CsStgdCf8elgWBdVAmldvdVYC%2BV9Tl8jIRlFdHg3R%2FDEzCq3%2BnudEqUTNVzzZkBN2nVNLhWkeNF9HcX5FsdYfDUGJmmUtF%2FlcooEkU7YqiI%2F28MOrx7r0GOqUB55211tYlhZdPTzsOFqmaNwslhmVhmi3z7eASWeUl1tDm8UazPgiER7U1Mp8HN0sSu6t0980pxXQNjUlGvg91v2UCmR9zwdG6d2GgF0V3%2BVChOUE7g7UpN%2FaHHyMD%2BcojSvSm7kv3hOiPZuJofdIfPvebUvgSbP%2Fy2yatYl%2B5%2BZcGubGKPY7oLTsRnsLYy2iGrQxJzgKPBiDK7zREvwKXY7PvpJsu&X-Amz-Signature=0da21a6b0fd8f6dfbea2df795b3ecfd11e4a203a08440a704772896dc002c34f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
