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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRFRDQR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVnollzaQo67ELGjsU6o%2Fj9tYWnXMnMkidLTJtfIJlgAIhAMymXcAIL8sQrIdHGc%2FEmBeX%2BBTh5ydJX2PyGmj9DOlfKv8DCCcQABoMNjM3NDIzMTgzODA1IgyXMARashINUXTVwRIq3AOhNlR91u3J7gJZ7Ex6Bqs4bAYU1Vsth5ivNYy%2B%2F6Xkkd3CLK1zNjy6603F6JwuhPOUbfuO9azHR1b%2BwBwJ7zCnZ%2FOg32FpJtSYJSV3kd1z%2FfkaPk%2BnpTMP8Yx%2Ft1fc9hu6%2Bl7ldZiwNoDnsd4nK3sNQWfp%2BgW3%2BOJzctymd93792WYMmY8e%2FMbnz%2Fp%2FjKZrTfP4Pa2yyvaouD4lUzdnmmilUnFbHAAdZ21mbh7hF0jxqZi2FxVvunmvLVHFxTC9UI3XsWEIdlwtuB89NDROZjdph61cJtFDyK2p6j1wxkZNU8taQg7bXC2g3yecdVaVTF9x9REuZF11UKKv%2BjfooJFcArHbe8eOdPtVI7zH54mrvtqbqub3ZwjldlLLk5zhX69KZFMp8pP84qTNv8pkdAiEwgb36L43mp1DWyySTvo4uhlIEkHVO7EEULdEfG5ock6IDuyMhIMZKtuF0aNSN9b8XTH198yoZJWyVC%2FAMw8kKKlBwClYuHSaSu3wzZhqQq2D9u8RAn2ZgZC2DbnAozp%2F34ZqYRzlRNo1FQSCjGB1l5CP265Gj59KNx0f2yPxWIbiThALvouw%2BWA2yUigEVrkYfTF0V4nb4udQafbH8x1LhRxOc9gNPq1efW2zDArY6%2FBjqkAV6hkyTQGAHpcXlMjThQ2AbH%2B1PUFPIbdub9MXGmzSQ4pNKMMRe2en8RZAveyPH%2FQdvmmrDOiPoglAQPeNBWJqINU9A4mn7kp9hnotmjSwdKNNFepKYHOtHNkwSAfYtZPI4YDKeO66z14AMfb%2BnJ78HW1Lq22DtKvMD%2FwaO5CuVU3JdCqS%2FoasCQeYaoNM65LrIGI1%2FZg8o0weVKxteqpKC43%2Fc5&X-Amz-Signature=3c583aea1c111c9809034291605e60566765ffcea41ba1a4feff360268eb916e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRFRDQR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVnollzaQo67ELGjsU6o%2Fj9tYWnXMnMkidLTJtfIJlgAIhAMymXcAIL8sQrIdHGc%2FEmBeX%2BBTh5ydJX2PyGmj9DOlfKv8DCCcQABoMNjM3NDIzMTgzODA1IgyXMARashINUXTVwRIq3AOhNlR91u3J7gJZ7Ex6Bqs4bAYU1Vsth5ivNYy%2B%2F6Xkkd3CLK1zNjy6603F6JwuhPOUbfuO9azHR1b%2BwBwJ7zCnZ%2FOg32FpJtSYJSV3kd1z%2FfkaPk%2BnpTMP8Yx%2Ft1fc9hu6%2Bl7ldZiwNoDnsd4nK3sNQWfp%2BgW3%2BOJzctymd93792WYMmY8e%2FMbnz%2Fp%2FjKZrTfP4Pa2yyvaouD4lUzdnmmilUnFbHAAdZ21mbh7hF0jxqZi2FxVvunmvLVHFxTC9UI3XsWEIdlwtuB89NDROZjdph61cJtFDyK2p6j1wxkZNU8taQg7bXC2g3yecdVaVTF9x9REuZF11UKKv%2BjfooJFcArHbe8eOdPtVI7zH54mrvtqbqub3ZwjldlLLk5zhX69KZFMp8pP84qTNv8pkdAiEwgb36L43mp1DWyySTvo4uhlIEkHVO7EEULdEfG5ock6IDuyMhIMZKtuF0aNSN9b8XTH198yoZJWyVC%2FAMw8kKKlBwClYuHSaSu3wzZhqQq2D9u8RAn2ZgZC2DbnAozp%2F34ZqYRzlRNo1FQSCjGB1l5CP265Gj59KNx0f2yPxWIbiThALvouw%2BWA2yUigEVrkYfTF0V4nb4udQafbH8x1LhRxOc9gNPq1efW2zDArY6%2FBjqkAV6hkyTQGAHpcXlMjThQ2AbH%2B1PUFPIbdub9MXGmzSQ4pNKMMRe2en8RZAveyPH%2FQdvmmrDOiPoglAQPeNBWJqINU9A4mn7kp9hnotmjSwdKNNFepKYHOtHNkwSAfYtZPI4YDKeO66z14AMfb%2BnJ78HW1Lq22DtKvMD%2FwaO5CuVU3JdCqS%2FoasCQeYaoNM65LrIGI1%2FZg8o0weVKxteqpKC43%2Fc5&X-Amz-Signature=5cbc40efbae29fdaaecf6a6cb9358969ff550458ebbb4677c4fd011d7df1cf3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
