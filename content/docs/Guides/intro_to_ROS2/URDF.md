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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNRE5RVF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDYjAO1gWDb1xfkL6B1LKo%2BB32gLGoNUZ82MP0q6aLugAIhAM5YOVTi1WWyGc5S88yAPxh%2Fquc4jPgzUCrJoVYq3H97Kv8DCEUQABoMNjM3NDIzMTgzODA1Igwt6LP7McWPQUj5Nrkq3AOkxXlJ%2FCnYiGWgBQFBk0h%2FIhvpI085ofB6%2BciPTC6%2FFAoo9zdh%2BFQhK%2F%2B%2B%2BgTzkP0ZXYltIfoMKKAtYo1Z8OpaC836IBuBh7W0cURY68wrvQbnl5elGJU07VSA7xs%2FUOZR0%2BWmKTWdMCfnQAw6n01vEspEUBIPeNb8%2FlLgbJTcdx1rYE6wv8CR6CPCK9FXN9ICGxRpqeECi4ZsoauQwB7b1a6Pv84peKGuOJY6xwjzTKoK%2BuD6zT3m7s7UQT%2BUvpVsZ4P62faPpM0El3q0noWvwOlGovUn3aQm9cOsXVA7f9Lf3AwNVOo5WsmBQ9h6wZu%2B37lMItqcspUkj0Akd9vM7gKhhwxbcq4ykMK2eqsg8cF6OPOOBr3xbUrzlREBregMZspF%2B2%2Bbslv9I2fJ3cWdIYCIz0CGiCPq%2BTeAAodCLmZaTeWvezrHNzLRTZ8ggdBYBhjPfSuGectUAvkTlhBAleuQTI2FXxQGtsTsK4YIpvhbbVc5zlUuAPmWexHn7WhFwtYvqqICDmqMqx4kbENzseK08BuODy%2B3ou3wXvNpRDvFRFMdksW21C1GanyaOWAuo9U3O2Ygnp3CwG3BytF2J7PC1jJSrHUSqDNb5oLQy9Iye%2BwPtx2BE2HlGjCUjYbCBjqkAdjz2ZVl%2FyjaaY2XFDoZg6SBHre4nfJXGuP42GLvHXlO4G3v2s4eUzeVQlGnU3SMvx6eOQOmnPj0KuVpMAjY4hCbE9woMwq7U4YuAexBoOSm6rrlDOfYcixgvFsAivvfL%2F9p1SOivy1zukmV3Z1NXYfI7EiXuGGG4gd7eXEFoG%2BPV9Vypt%2FdpyymVG7SMAZITyCuR6E6REy911mCj5s2z%2Fkef8vb&X-Amz-Signature=bc1be8efb7a259df53281643c045b72102a90adcdd5d70424daf934b558d47e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNRE5RVF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDYjAO1gWDb1xfkL6B1LKo%2BB32gLGoNUZ82MP0q6aLugAIhAM5YOVTi1WWyGc5S88yAPxh%2Fquc4jPgzUCrJoVYq3H97Kv8DCEUQABoMNjM3NDIzMTgzODA1Igwt6LP7McWPQUj5Nrkq3AOkxXlJ%2FCnYiGWgBQFBk0h%2FIhvpI085ofB6%2BciPTC6%2FFAoo9zdh%2BFQhK%2F%2B%2B%2BgTzkP0ZXYltIfoMKKAtYo1Z8OpaC836IBuBh7W0cURY68wrvQbnl5elGJU07VSA7xs%2FUOZR0%2BWmKTWdMCfnQAw6n01vEspEUBIPeNb8%2FlLgbJTcdx1rYE6wv8CR6CPCK9FXN9ICGxRpqeECi4ZsoauQwB7b1a6Pv84peKGuOJY6xwjzTKoK%2BuD6zT3m7s7UQT%2BUvpVsZ4P62faPpM0El3q0noWvwOlGovUn3aQm9cOsXVA7f9Lf3AwNVOo5WsmBQ9h6wZu%2B37lMItqcspUkj0Akd9vM7gKhhwxbcq4ykMK2eqsg8cF6OPOOBr3xbUrzlREBregMZspF%2B2%2Bbslv9I2fJ3cWdIYCIz0CGiCPq%2BTeAAodCLmZaTeWvezrHNzLRTZ8ggdBYBhjPfSuGectUAvkTlhBAleuQTI2FXxQGtsTsK4YIpvhbbVc5zlUuAPmWexHn7WhFwtYvqqICDmqMqx4kbENzseK08BuODy%2B3ou3wXvNpRDvFRFMdksW21C1GanyaOWAuo9U3O2Ygnp3CwG3BytF2J7PC1jJSrHUSqDNb5oLQy9Iye%2BwPtx2BE2HlGjCUjYbCBjqkAdjz2ZVl%2FyjaaY2XFDoZg6SBHre4nfJXGuP42GLvHXlO4G3v2s4eUzeVQlGnU3SMvx6eOQOmnPj0KuVpMAjY4hCbE9woMwq7U4YuAexBoOSm6rrlDOfYcixgvFsAivvfL%2F9p1SOivy1zukmV3Z1NXYfI7EiXuGGG4gd7eXEFoG%2BPV9Vypt%2FdpyymVG7SMAZITyCuR6E6REy911mCj5s2z%2Fkef8vb&X-Amz-Signature=51229321d55c549620c3105cbc30b93a52c81109811a435e40ba44695a83ca30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
