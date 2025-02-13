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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNKUGXB2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaxNjpyhC6bQWe5KGysCP7LMJSa7jtiZR8dGXncMzkvwIgbdLxrFPONhuDl0idJFxqOuK9tqhc30ounc9gViwfkBEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJFjopEYFJwOyof7FircA7hAcnKbhTUAcENage7gpHhiXnvMk0%2FRTn5UNfp6jeb2va%2BcZyueT8tUf3ta0s9OkD1zHJRSiyBFJme4Y6yu1asCPv%2Fc95aswYhjB02gOkrzs7kf59H2HLfg5VRqzzHKyi3oEenc5UCU1sqf7%2B%2BbDtB01JNi7AsBm59FIEbNb3X47ytBA0Pvp1EcLHJiOwcf1VgHjs70C8964cPqxNIKeDz3Wbz7h9wSk65jPnMtDOGI4LPSWH4vS85fIJNm6ck8H7U4pF0Q4Va5hcsjByr8jJCd1q60P1AIko6Gy6h7aXAWtuu%2Bs%2FUJSLf3mZ7xq3OwA0NNlaLFvicB4xJBhJWbiw7aC7Pi6RSJ%2F4ROjChfCwvE954d1EF%2BW2EiBxa59NayUm7cxa6Ky4iMhaqTOTTblnsOFzX0g0y3j1FrUp2CZrpAvrbyTwW7CP%2Bhj%2BYntErx45edZq415NH2cUTrjJlzobsTtGly00mMf61zrKfh2s4sZ5uNygLRurU6LZoAAnhDA%2Bal6xKcbyDPDNrxUH6AIyyNBFKd5X16A9vYkjn3FliPk7qBaHZcz%2Fv1TgOmZY32HUwzzGLGf0Jwx9SagWmpfD3%2FYL247uotRl6gLjkw%2Fl7HB2Yfm7EAm8d5f4LFMKGFub0GOqUBGXGIQuT0YtEFWIzCHWgBQzzmB5vf3Y52dsaM%2FQEAyOxwIhkBhplG08iI8nFpNBHatzAwN24c80hcCFUu4GSOzyc0pFkkHxhtNhlLJnNz5ZG0FtwBlaKgQ6IRQUhWFQ2pvb8HApG7M%2Fdo%2BGKdqj6hrKc%2B6Ne%2BkkwHBA5wZWTbO8v93SKO8nFMdt8sc1dfWsVuJxq2P6%2BS20OQzV2f6zV3cC4M2aYI&X-Amz-Signature=dd83b82ca83a0df32be582b59a6ec45f3e3544e6f27f3b90496402065dfe7223&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNKUGXB2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaxNjpyhC6bQWe5KGysCP7LMJSa7jtiZR8dGXncMzkvwIgbdLxrFPONhuDl0idJFxqOuK9tqhc30ounc9gViwfkBEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJFjopEYFJwOyof7FircA7hAcnKbhTUAcENage7gpHhiXnvMk0%2FRTn5UNfp6jeb2va%2BcZyueT8tUf3ta0s9OkD1zHJRSiyBFJme4Y6yu1asCPv%2Fc95aswYhjB02gOkrzs7kf59H2HLfg5VRqzzHKyi3oEenc5UCU1sqf7%2B%2BbDtB01JNi7AsBm59FIEbNb3X47ytBA0Pvp1EcLHJiOwcf1VgHjs70C8964cPqxNIKeDz3Wbz7h9wSk65jPnMtDOGI4LPSWH4vS85fIJNm6ck8H7U4pF0Q4Va5hcsjByr8jJCd1q60P1AIko6Gy6h7aXAWtuu%2Bs%2FUJSLf3mZ7xq3OwA0NNlaLFvicB4xJBhJWbiw7aC7Pi6RSJ%2F4ROjChfCwvE954d1EF%2BW2EiBxa59NayUm7cxa6Ky4iMhaqTOTTblnsOFzX0g0y3j1FrUp2CZrpAvrbyTwW7CP%2Bhj%2BYntErx45edZq415NH2cUTrjJlzobsTtGly00mMf61zrKfh2s4sZ5uNygLRurU6LZoAAnhDA%2Bal6xKcbyDPDNrxUH6AIyyNBFKd5X16A9vYkjn3FliPk7qBaHZcz%2Fv1TgOmZY32HUwzzGLGf0Jwx9SagWmpfD3%2FYL247uotRl6gLjkw%2Fl7HB2Yfm7EAm8d5f4LFMKGFub0GOqUBGXGIQuT0YtEFWIzCHWgBQzzmB5vf3Y52dsaM%2FQEAyOxwIhkBhplG08iI8nFpNBHatzAwN24c80hcCFUu4GSOzyc0pFkkHxhtNhlLJnNz5ZG0FtwBlaKgQ6IRQUhWFQ2pvb8HApG7M%2Fdo%2BGKdqj6hrKc%2B6Ne%2BkkwHBA5wZWTbO8v93SKO8nFMdt8sc1dfWsVuJxq2P6%2BS20OQzV2f6zV3cC4M2aYI&X-Amz-Signature=1abdf01e33ec2e15aa8548b2d58ad0da28ee47202481d9c185405808d779f2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
