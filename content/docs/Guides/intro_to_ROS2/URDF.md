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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCH6EDPY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCd4m%2B0i0K9hJgDnZSHk5qaQw%2Fb%2FV%2FCqBw18xj5w3U3RwIhAO5A82mN5yzeuu0Kav1qlrwuCXYthceaNsM3UVwQpWohKv8DCFQQABoMNjM3NDIzMTgzODA1Igxg4UmKVcv48aGpGuQq3AOTae8TLomFgLW9DV%2B87rfX2wdYF9fe7%2Fn2hl9tjKGCjT8ZsnBwaxZfIF7p3GdGK1NXXXV1OMwgKwt1UGFeFJtZ8aKkw%2BeH3XmH%2BGIDGgOM3Ix2dD8FGmbGay3zOKZwJn00g%2FF9nTZNUKyJ4%2FLc6kJMVSOxfvT%2BArKh3K6HZXjJcpeoAXTN4fT4Q9LpQMZ06XoAsClvE6ew8m99HhF20GrSxJXgdOZyKJHGgX61OMMIdEny0%2BHeH6FJkbm5xv99sq04r1DabqJ%2F7NQkuXAwEij9m6Wikpla4Anb4J%2F3byXqBbLTjv8AwAPSODIvmVZqeqmYyDOVwu2zTBsNwLxZdsANDL4hS9Hq5voQtmcoutnUkpWGvZAZ68V40IuaC7lMCcrPG%2BhdwvmvDI8eX0kFxffMsjvldfjPA5Vxq3US1YFofgygk2wAhzQoIhSkTzgSikkd1XDQoj9lS0xjzFV3ND1SDK%2BLjRBlD%2Fa9eaMbWoNYAy5MCr4rZFGGXA0tIeXIzxh5zixcAcllgm2Kmp%2FJe9z1N%2F66r1ncwNDqByJoVelgJb7q83oBHXtSxrK3Tp2dU0K1c9i8mlN66To3enAk%2F931DuHdYW29WebnhpTnuK429b7QHMCzzQ4DPya8fTDaqcW9BjqkAdoDPCOBCBEbV0qM%2Fni%2F7JeYJpnDyquFgOtgi7sT1qpa4tGMZjEbAcGfLeMQpL1srLKRn%2FlnsdKactrdchlI46GFCEF2CMDKMcc1YA1KEnQyd7KKJJqDU1d7%2F5eytgerKuWjYiHBYI0duiJsIYn5t7Tiv%2BaOMr7B62c%2BPgx6HR8wMuo9OjVgqAX%2BHgvueIQqogE1Wg%2F8BM%2BoNDvAOt2O1ow7wEdF&X-Amz-Signature=0b9f36edd120efad52011f47222ad8c423d0378686bd37e225b8ae7b93ae9f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCH6EDPY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCd4m%2B0i0K9hJgDnZSHk5qaQw%2Fb%2FV%2FCqBw18xj5w3U3RwIhAO5A82mN5yzeuu0Kav1qlrwuCXYthceaNsM3UVwQpWohKv8DCFQQABoMNjM3NDIzMTgzODA1Igxg4UmKVcv48aGpGuQq3AOTae8TLomFgLW9DV%2B87rfX2wdYF9fe7%2Fn2hl9tjKGCjT8ZsnBwaxZfIF7p3GdGK1NXXXV1OMwgKwt1UGFeFJtZ8aKkw%2BeH3XmH%2BGIDGgOM3Ix2dD8FGmbGay3zOKZwJn00g%2FF9nTZNUKyJ4%2FLc6kJMVSOxfvT%2BArKh3K6HZXjJcpeoAXTN4fT4Q9LpQMZ06XoAsClvE6ew8m99HhF20GrSxJXgdOZyKJHGgX61OMMIdEny0%2BHeH6FJkbm5xv99sq04r1DabqJ%2F7NQkuXAwEij9m6Wikpla4Anb4J%2F3byXqBbLTjv8AwAPSODIvmVZqeqmYyDOVwu2zTBsNwLxZdsANDL4hS9Hq5voQtmcoutnUkpWGvZAZ68V40IuaC7lMCcrPG%2BhdwvmvDI8eX0kFxffMsjvldfjPA5Vxq3US1YFofgygk2wAhzQoIhSkTzgSikkd1XDQoj9lS0xjzFV3ND1SDK%2BLjRBlD%2Fa9eaMbWoNYAy5MCr4rZFGGXA0tIeXIzxh5zixcAcllgm2Kmp%2FJe9z1N%2F66r1ncwNDqByJoVelgJb7q83oBHXtSxrK3Tp2dU0K1c9i8mlN66To3enAk%2F931DuHdYW29WebnhpTnuK429b7QHMCzzQ4DPya8fTDaqcW9BjqkAdoDPCOBCBEbV0qM%2Fni%2F7JeYJpnDyquFgOtgi7sT1qpa4tGMZjEbAcGfLeMQpL1srLKRn%2FlnsdKactrdchlI46GFCEF2CMDKMcc1YA1KEnQyd7KKJJqDU1d7%2F5eytgerKuWjYiHBYI0duiJsIYn5t7Tiv%2BaOMr7B62c%2BPgx6HR8wMuo9OjVgqAX%2BHgvueIQqogE1Wg%2F8BM%2BoNDvAOt2O1ow7wEdF&X-Amz-Signature=e4d650a41c65378112fb01ebeb75fca5de78b3d61a0a78002c273d88bcb16e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
