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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHDIDJE3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsJg2IeAPYcDDK4UQ2OqAYyraEiKKuAKJM%2BoNWRWsTHAiBP5lj9lHTR7%2B9Hu3BCZzGgRjkI5apUnLYd8PyBKxR8gSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTmaBgbwkpeX1SzamKtwDjwgAfE%2FaGz%2Fc4A7lhQHkvS7JyLlW0hKGO5dhhM6UDmkhNEJV5wIMuE4xl%2ByDYnKeQPknGcz7%2FnE9ujFWHPY3FyO8P28wRzvYmgh8JziH7Uh65iMgEosLta0yvYUFB6HyXh4I8SMbbZqztFPYQXwGEwOOhofg03HZC9okM85XOtYn2qWUJWUsA0iI4q4xCHi%2BI529TKLAjnLNBdmGSIRxVTbK8K1rvoXv6ylcMqNEnaQ2671pCvgPtw77mxMoHIgnFMqVJzqgdct4g5Vi8jsjky%2FM%2BhZzKXb0Qu%2Fv22A8TXjo1DH6tLNQH19nhRlNmapYEnaXgZfnAuCK4qUR50zgTe42H0PJEiSijzfboSOMlwMWHnHmKAUrFjEB2LZPR%2FsQgjlZ1ip5wYgjM8iY3H6LspqWFQwQtyr4IuS2hFGM3ThNF86aariQYnGsE%2Bc2KH7C9vgz6xLWVyF8QjfGWvndzGHxXR6RA0kKNNAFQGEmVmqBY7f7Iflc3l3NZcNaaWv3rJ4Gk%2F7jxRCDKZaPfzwujMEI7LOd3ydEpPoVv%2BNtjD6K6cC9lqRl%2FmyPItyyhViscljSbzdHZrD9ZhZ%2FurptN6c0ZpQniFiuO2LMkOyjdx9AJ9uKj7F%2BMmfht70wpqHIwgY6pgF3pC6kH3Ea4N%2BYaKY45yoZSiuG6OMAKGphWlFDYjlFzeJnn2f3shlIq%2B%2F4nc1%2BFCi5fd4gbzdLfscWCnWdld2OfXxhXmgppaOZ9Spsx6cGwLlCDcR0qLt0ii80avob%2FTMhkoa4z9svj%2F65Fnjo%2BDxTfi2BAfH2ryKg3%2Fbw1zm7%2BERPehUjXL74xWR7k1Fs65AXm%2Bzr6pEKmAvp10tREsJuCbNqq5Ha&X-Amz-Signature=2271e4bf7815d3ffb305480e47187f81dca117b4e959d4a3bb51a1a1e147e3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHDIDJE3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsJg2IeAPYcDDK4UQ2OqAYyraEiKKuAKJM%2BoNWRWsTHAiBP5lj9lHTR7%2B9Hu3BCZzGgRjkI5apUnLYd8PyBKxR8gSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTmaBgbwkpeX1SzamKtwDjwgAfE%2FaGz%2Fc4A7lhQHkvS7JyLlW0hKGO5dhhM6UDmkhNEJV5wIMuE4xl%2ByDYnKeQPknGcz7%2FnE9ujFWHPY3FyO8P28wRzvYmgh8JziH7Uh65iMgEosLta0yvYUFB6HyXh4I8SMbbZqztFPYQXwGEwOOhofg03HZC9okM85XOtYn2qWUJWUsA0iI4q4xCHi%2BI529TKLAjnLNBdmGSIRxVTbK8K1rvoXv6ylcMqNEnaQ2671pCvgPtw77mxMoHIgnFMqVJzqgdct4g5Vi8jsjky%2FM%2BhZzKXb0Qu%2Fv22A8TXjo1DH6tLNQH19nhRlNmapYEnaXgZfnAuCK4qUR50zgTe42H0PJEiSijzfboSOMlwMWHnHmKAUrFjEB2LZPR%2FsQgjlZ1ip5wYgjM8iY3H6LspqWFQwQtyr4IuS2hFGM3ThNF86aariQYnGsE%2Bc2KH7C9vgz6xLWVyF8QjfGWvndzGHxXR6RA0kKNNAFQGEmVmqBY7f7Iflc3l3NZcNaaWv3rJ4Gk%2F7jxRCDKZaPfzwujMEI7LOd3ydEpPoVv%2BNtjD6K6cC9lqRl%2FmyPItyyhViscljSbzdHZrD9ZhZ%2FurptN6c0ZpQniFiuO2LMkOyjdx9AJ9uKj7F%2BMmfht70wpqHIwgY6pgF3pC6kH3Ea4N%2BYaKY45yoZSiuG6OMAKGphWlFDYjlFzeJnn2f3shlIq%2B%2F4nc1%2BFCi5fd4gbzdLfscWCnWdld2OfXxhXmgppaOZ9Spsx6cGwLlCDcR0qLt0ii80avob%2FTMhkoa4z9svj%2F65Fnjo%2BDxTfi2BAfH2ryKg3%2Fbw1zm7%2BERPehUjXL74xWR7k1Fs65AXm%2Bzr6pEKmAvp10tREsJuCbNqq5Ha&X-Amz-Signature=2f8f98ce13f565122f1a2dfbbe45ee2fa8a665d7a41ff0f2f80ae199703a5a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
