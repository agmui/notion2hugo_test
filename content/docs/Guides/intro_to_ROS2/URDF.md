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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCEYBX4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0UVmOsb%2FR8AN2N9LOOZcOq3ijZdnCVKofGOlZr9gE5AiA%2BhvYI%2Fu07pRqI%2B7bYu%2FM%2F4HYiYHVz826RJ%2BxIt8EHICr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMUFQ38ca1uEPdzHznKtwDYjIU7qsFXsDlK8WFsopaSra9kl%2FZghcCvo8uZ0Y7Es7%2Bdxs5dAGD5c27vIuyZoVvk7FKUlD0%2BvpMuRpFfLRePXJtThbHx9zP1IiNnzZZJ%2Fu%2Fnkki7BMG9Ln57U42aMYQS7fUSeERjpiYydiIk4jLfJIkKYla2Qv1%2FhMnI0JIrUgeiOTUK%2B7ICRg8kXqXtK4%2BAVJkWxiBekKVbBCXewk5a2C45OArlkhdE6axOPN1VChF8ROWvOeqcIgAACCfITmZb1jQGy7fPwxU5pZ0ormRPoofpEg2P9zubrHU0PWbFuR65W4gPBb1VMTGLbWhrbE6rGeJ5%2FH61nU2DM7yscWc6jUVvbHpkziBYSxEqMa4EykkJY3mCMkcX9f2ktB0YI2u6Ie3GGKsEZFhism5AYA6OvQBaOPcYSXzILoDcRvgwbsSxnEhf0qIkGnBo4IOdhSsgRNyk%2FyK%2BzqcZSe0ABoE%2FuMRyMpf2EQBTqjVT3bghXfRGwquHgvaPLpLhZo2BicWblWkgFPhC8jpzG6RSUZVjSNVoGlP2FIZJBHrOgzT9Q%2BXIk9xsBH%2F85lT1Vf51GljMFDoqU05GYSJZuusgyKoeRqCTFHZDZt%2FaY40bR9Wl5L%2BDLJi8FqLJolpxrAw5fqBwAY6pgFuFzHzQQWZgl7z8h1n1gb023BGDR4HM9Cq%2Bon2hkhuUiVajYw5AmG6NUl0huB7LS63qDV6Cfd%2BJxbopXybMNpdN7meoPM7KlbmWF%2F8K4%2FC1Z0iPP4gTJLqRjhk5sFrMJ%2F3nCNJYkKdrSXOAnzd2ddeK9fhUf%2FhMKOTRLqC5lRLb1vTjm7F1oL6iKjxacFDNGASmrhe%2B5BBQJ6H1oJEjRoq6axxmyVK&X-Amz-Signature=a94eaaccb2c4df7ceecbe2ac3b835a6e0468c70ac1f0e42fa5a68ee13c1ed0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOCEYBX4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0UVmOsb%2FR8AN2N9LOOZcOq3ijZdnCVKofGOlZr9gE5AiA%2BhvYI%2Fu07pRqI%2B7bYu%2FM%2F4HYiYHVz826RJ%2BxIt8EHICr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMUFQ38ca1uEPdzHznKtwDYjIU7qsFXsDlK8WFsopaSra9kl%2FZghcCvo8uZ0Y7Es7%2Bdxs5dAGD5c27vIuyZoVvk7FKUlD0%2BvpMuRpFfLRePXJtThbHx9zP1IiNnzZZJ%2Fu%2Fnkki7BMG9Ln57U42aMYQS7fUSeERjpiYydiIk4jLfJIkKYla2Qv1%2FhMnI0JIrUgeiOTUK%2B7ICRg8kXqXtK4%2BAVJkWxiBekKVbBCXewk5a2C45OArlkhdE6axOPN1VChF8ROWvOeqcIgAACCfITmZb1jQGy7fPwxU5pZ0ormRPoofpEg2P9zubrHU0PWbFuR65W4gPBb1VMTGLbWhrbE6rGeJ5%2FH61nU2DM7yscWc6jUVvbHpkziBYSxEqMa4EykkJY3mCMkcX9f2ktB0YI2u6Ie3GGKsEZFhism5AYA6OvQBaOPcYSXzILoDcRvgwbsSxnEhf0qIkGnBo4IOdhSsgRNyk%2FyK%2BzqcZSe0ABoE%2FuMRyMpf2EQBTqjVT3bghXfRGwquHgvaPLpLhZo2BicWblWkgFPhC8jpzG6RSUZVjSNVoGlP2FIZJBHrOgzT9Q%2BXIk9xsBH%2F85lT1Vf51GljMFDoqU05GYSJZuusgyKoeRqCTFHZDZt%2FaY40bR9Wl5L%2BDLJi8FqLJolpxrAw5fqBwAY6pgFuFzHzQQWZgl7z8h1n1gb023BGDR4HM9Cq%2Bon2hkhuUiVajYw5AmG6NUl0huB7LS63qDV6Cfd%2BJxbopXybMNpdN7meoPM7KlbmWF%2F8K4%2FC1Z0iPP4gTJLqRjhk5sFrMJ%2F3nCNJYkKdrSXOAnzd2ddeK9fhUf%2FhMKOTRLqC5lRLb1vTjm7F1oL6iKjxacFDNGASmrhe%2B5BBQJ6H1oJEjRoq6axxmyVK&X-Amz-Signature=9f7b1b1fd638d0d86682d0deb1e68194dd5815daed9a0483efaea407b859b68f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
