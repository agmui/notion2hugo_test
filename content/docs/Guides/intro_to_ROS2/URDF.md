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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRPXMIC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDAJ6BGzzZ7XFGnCsB0KEcX9pzD8gGgmsJPYeQKRukJMwIhAOFnXBcjJ2XmFuuxu8qFteCgteo9KHJUrFH0shpKosmGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQJWKLtWiRVtzETSsq3AP0HIYMt6%2BixTFaGEwkNFj8rVu4w7Qs1%2BJXnPpWdwEmnvEa7kVebBDeVivfV5UsEqlF4A43Z4xt7iPIcjZvaGM%2BrHY0V2OiGWy0ipdE%2F0riqEPpBF1UEWYPnUwD3NnWY%2BlteK3gJYc5fqw1Qwy6cb1yJ1GnbX7rA9s0mFJz8dWKQnSGXokVO6tjeH8MegLKYXugiQASAn%2BDZMoF3ysoavAhyp4EgncgopFY%2FKL8s4FYbvjuy7Rx2M%2BvbMZz37ue45L4QdUNZrd5yO6aUY%2Fxb2iUp8c1dS0gYV%2BJeIf6j5qrd97HD2Oy%2FdISDg3tup3cw0PvH27H9DWsKI5vp5BlxnKTRZycvYmU%2FGGKVEznEHsD%2B7UMNhRSlraieguAfzlfEdmewNEGoTemvIEG376cgVOESKZYu8aosJtZtZ7mamyaYxAvXCr1tpdPzWmjhnF7jxnnVbAj5dlivHuuNbM%2BNeT7YXFSkUQ%2FGRYt%2FqKGC5bH0nHOypBOLZRhKJnyaH7dw7xhM7dI3nXfa2%2BTKNFJ9CHjpGF7BA6maxFdjIbT07VjzLxHC1gZE1oQ1XQGnpQbDJ0DXYgrkheSit5ffR3s9ZSp5s1FJa4j7fR2scuIjPFH543GzmM2yqnm4fJp%2FjDqoOC%2FBjqkAQksTldcnjKMFefhG90ECVbTqmvz1psrDFZzNxoz3B0fv61mFoaA%2Brey3T%2BZ7t9Hkk6EDyJzPvjI3ZlmAR0ftm%2Bw3CDT7VjgY3V84Sn4oBtNNoy2jRRJaUbILq8SfdWEeW2uYvly2AGaX%2FlDcyAmN%2FO4j3yuZvDfGoN8fVFTYJFbX798Dl8kDZcbBbVTlg8kf8i9cjCuD1oi5ujQUkjC%2B7XNowhx&X-Amz-Signature=84f58b1dd4bdb6c73b897fd2fbfa94df6b20a40b2edac474a8c7c56f65a3fe8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRPXMIC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDAJ6BGzzZ7XFGnCsB0KEcX9pzD8gGgmsJPYeQKRukJMwIhAOFnXBcjJ2XmFuuxu8qFteCgteo9KHJUrFH0shpKosmGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQJWKLtWiRVtzETSsq3AP0HIYMt6%2BixTFaGEwkNFj8rVu4w7Qs1%2BJXnPpWdwEmnvEa7kVebBDeVivfV5UsEqlF4A43Z4xt7iPIcjZvaGM%2BrHY0V2OiGWy0ipdE%2F0riqEPpBF1UEWYPnUwD3NnWY%2BlteK3gJYc5fqw1Qwy6cb1yJ1GnbX7rA9s0mFJz8dWKQnSGXokVO6tjeH8MegLKYXugiQASAn%2BDZMoF3ysoavAhyp4EgncgopFY%2FKL8s4FYbvjuy7Rx2M%2BvbMZz37ue45L4QdUNZrd5yO6aUY%2Fxb2iUp8c1dS0gYV%2BJeIf6j5qrd97HD2Oy%2FdISDg3tup3cw0PvH27H9DWsKI5vp5BlxnKTRZycvYmU%2FGGKVEznEHsD%2B7UMNhRSlraieguAfzlfEdmewNEGoTemvIEG376cgVOESKZYu8aosJtZtZ7mamyaYxAvXCr1tpdPzWmjhnF7jxnnVbAj5dlivHuuNbM%2BNeT7YXFSkUQ%2FGRYt%2FqKGC5bH0nHOypBOLZRhKJnyaH7dw7xhM7dI3nXfa2%2BTKNFJ9CHjpGF7BA6maxFdjIbT07VjzLxHC1gZE1oQ1XQGnpQbDJ0DXYgrkheSit5ffR3s9ZSp5s1FJa4j7fR2scuIjPFH543GzmM2yqnm4fJp%2FjDqoOC%2FBjqkAQksTldcnjKMFefhG90ECVbTqmvz1psrDFZzNxoz3B0fv61mFoaA%2Brey3T%2BZ7t9Hkk6EDyJzPvjI3ZlmAR0ftm%2Bw3CDT7VjgY3V84Sn4oBtNNoy2jRRJaUbILq8SfdWEeW2uYvly2AGaX%2FlDcyAmN%2FO4j3yuZvDfGoN8fVFTYJFbX798Dl8kDZcbBbVTlg8kf8i9cjCuD1oi5ujQUkjC%2B7XNowhx&X-Amz-Signature=58f2de1e8add1004b736aeae9a6d7f61c566764427bda1e986862288e24b6ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
