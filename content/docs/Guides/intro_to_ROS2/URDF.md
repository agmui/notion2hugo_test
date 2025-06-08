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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ETO36R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxj9ko3RM8VeGZDv4IsjdMBZ9WoeXXRjI2zd%2Fiygqm%2FAiBgVF4rIRZhX8eyl5TcxndGbR3jmQqGd%2BbDuHfD4%2B5ZpSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B76dslrbhDxv5gP5KtwDc1cJzR0XHIbAjdAGRrbWaIt4eoUaPSVfjhFuWBpW6lWBafKq3cmiA7937quctqXDqFxdK%2FBOibq%2Fk0ATOZ3gboJt3bOCcUVUdO1YXPQ6DE%2BWIkdyeSeHAOVeomEjm0JjpvEsvH1Q9xLXwEdN472SILvaUao0KQxXOOKukvnyneV7rQejGUH%2FTFTjYA%2Bb7RMAWVC4pkcSYFaQBma9wvIXdvC6YlBsngEEjgFql%2FUhf6DspIWR7bd2rSOWPlry1IvNpoAmOFSeqnsPTInfUmeGB0GSa%2F%2Bn3tqj6I%2BaB7FpgMz7bx1RMsViNdgi5r1ytuVhA2XE85%2BR%2F8%2FTlzbJ40DRHOr%2BZyPym1pItvh6E%2FX6tDL1UCLi5H3h1KUCAUn%2BOQJOdZYFG%2BLwQGyvIL8fW6dwhKn1L7zOiu35c1T66eZGg96Riepr0fOQ5bU4YVgtxIoFOjvjs8De7gvDFGOd1VyMH%2FNR4x6WQqce6fHEN71%2FNGTGISyslkTB1bGIfvabZuVBON7yIkCdptAftuf0PcYB0HEAsAS8%2BsHqpZ8uEu%2B1%2F8I8NrAg5m28Te1STMVEXR%2ByN5VId%2F4qHjSbNJqkbS9G948k8JynyeWBlnOaK1P0iM1MU5tEgeQL%2FmlDrYgwp7GUwgY6pgHZ6sy9g6ZkT37QaZoKqS1P02GNWM6CQqqM2ND5%2FYYQWgm9vb5wfn%2F9LzrZMpvqIGcG10hSH4ri66qdkNDbkVFh1757QCW%2FtJYEOI3BMlnD%2BThdpxAUsD2oi865tUlW4G7QXfpoDHXR0JjyfCwyDcvJzTmo2WIOtGscSnNv19foTZbczrUNHspgyNcShhYvbHHJ44eJrImbl2uPJPDGRI%2BIWTiWZhHx&X-Amz-Signature=9962b342fcd990d0883e7ed3c9f79ec396595625c2f60ddd5a5db3997a1568ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ETO36R%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxj9ko3RM8VeGZDv4IsjdMBZ9WoeXXRjI2zd%2Fiygqm%2FAiBgVF4rIRZhX8eyl5TcxndGbR3jmQqGd%2BbDuHfD4%2B5ZpSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B76dslrbhDxv5gP5KtwDc1cJzR0XHIbAjdAGRrbWaIt4eoUaPSVfjhFuWBpW6lWBafKq3cmiA7937quctqXDqFxdK%2FBOibq%2Fk0ATOZ3gboJt3bOCcUVUdO1YXPQ6DE%2BWIkdyeSeHAOVeomEjm0JjpvEsvH1Q9xLXwEdN472SILvaUao0KQxXOOKukvnyneV7rQejGUH%2FTFTjYA%2Bb7RMAWVC4pkcSYFaQBma9wvIXdvC6YlBsngEEjgFql%2FUhf6DspIWR7bd2rSOWPlry1IvNpoAmOFSeqnsPTInfUmeGB0GSa%2F%2Bn3tqj6I%2BaB7FpgMz7bx1RMsViNdgi5r1ytuVhA2XE85%2BR%2F8%2FTlzbJ40DRHOr%2BZyPym1pItvh6E%2FX6tDL1UCLi5H3h1KUCAUn%2BOQJOdZYFG%2BLwQGyvIL8fW6dwhKn1L7zOiu35c1T66eZGg96Riepr0fOQ5bU4YVgtxIoFOjvjs8De7gvDFGOd1VyMH%2FNR4x6WQqce6fHEN71%2FNGTGISyslkTB1bGIfvabZuVBON7yIkCdptAftuf0PcYB0HEAsAS8%2BsHqpZ8uEu%2B1%2F8I8NrAg5m28Te1STMVEXR%2ByN5VId%2F4qHjSbNJqkbS9G948k8JynyeWBlnOaK1P0iM1MU5tEgeQL%2FmlDrYgwp7GUwgY6pgHZ6sy9g6ZkT37QaZoKqS1P02GNWM6CQqqM2ND5%2FYYQWgm9vb5wfn%2F9LzrZMpvqIGcG10hSH4ri66qdkNDbkVFh1757QCW%2FtJYEOI3BMlnD%2BThdpxAUsD2oi865tUlW4G7QXfpoDHXR0JjyfCwyDcvJzTmo2WIOtGscSnNv19foTZbczrUNHspgyNcShhYvbHHJ44eJrImbl2uPJPDGRI%2BIWTiWZhHx&X-Amz-Signature=3e7602fa2bf0bb3b0b77cc94cdf6b4d9a0f4c30b658a8dd249373c43e2c81c00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
