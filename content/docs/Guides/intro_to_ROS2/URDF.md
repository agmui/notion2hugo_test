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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQH4ENNP%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD3hmMDmZFzjF9nG6aBlq7TAMiJvc5Q6QRwJcagsCLVzgIgJ5dViUU6GIRehTJ%2FGGzanqSBGmFI4TF5ZUX0I9QAi9Eq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF49TTtD6ItJKDXwZircA96m1h8pTlQJ2KpRFf1zAGri4ZiSnefvSeCdLH00FOSll6uwdgR7UyWum2rk%2Fxz0Chm%2BqLXBYfuittbgOid6QDSxrvrBPtPqOO4CN4JiGZBEt92TP89%2B2KqTGXmyUnqjV4KIXu4LETRrS8F5XF38is4%2BvsDnWTQNWv1pWOJ4UZ%2FFvd1BaVbjuBl9Ti8RQZmkRdKS3XLy3ON1H3MIEeszNdM%2Flif%2B0YNW90ctNT%2BRtPeCOf0sGW0a7987PP0g26Jyf7dWi2h3brBg6SNXcJDtyQPcoenbgKqAWy0i%2BLKB0W35mYpoV%2BfcebbVW9vBjPsKAEjocOyRmN7O3BFkXzDM7PH4G%2B83Pot621Fa1uGBToBHfdhW%2F1T%2B61PfobqTLDzn8vIMK%2BLGgk05%2B3ZLlvPFrIRKxXHSRqbqVtsL0BvXgmHTdI5u8l9ReJilZIQpi8H9roBolc5j%2FgEEs9htbsafuhYJVcdlYDht6rNItHPysOixSuoADZDeDFefo%2B4oK6%2FqWDLksY%2FGF2s60ssTrD8ZhLKz4puwzjM5jFKiLGrlNDDlye33JsM6O5CBfLkyrsC1zcDg9%2B5ngv5uaYoeEzqbQcAaOdMOp%2FQsOC%2FpNRzXuX4s%2F1w6umkWvtyUTNh5MLbFzcEGOqUB3pQaWVOtdfwWPOwQ0uxGxr%2F1ulvZdy0YOJE0EVYnk%2BuzBtn0ED9h%2FQW137MaoEsfjHgS0q1N5h8G%2FwDfmSP8iSO0aeswKGQ%2B2fXn5bL9kCw6Brvm7S7icjGdhDQYrYB0deVftnuCru%2BUUkRkp1Z%2Bb2BYGxi%2FUYQZG64zrXPYpaJHhq8UjnA14Ns%2Bt5OMGTGboa7katbduxXgKN4izzvgJFHjfRpb&X-Amz-Signature=e6791915c1524b31793d9ced4a23058189507c3db2365e7f53fcb51ecb3a82e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQH4ENNP%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD3hmMDmZFzjF9nG6aBlq7TAMiJvc5Q6QRwJcagsCLVzgIgJ5dViUU6GIRehTJ%2FGGzanqSBGmFI4TF5ZUX0I9QAi9Eq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDF49TTtD6ItJKDXwZircA96m1h8pTlQJ2KpRFf1zAGri4ZiSnefvSeCdLH00FOSll6uwdgR7UyWum2rk%2Fxz0Chm%2BqLXBYfuittbgOid6QDSxrvrBPtPqOO4CN4JiGZBEt92TP89%2B2KqTGXmyUnqjV4KIXu4LETRrS8F5XF38is4%2BvsDnWTQNWv1pWOJ4UZ%2FFvd1BaVbjuBl9Ti8RQZmkRdKS3XLy3ON1H3MIEeszNdM%2Flif%2B0YNW90ctNT%2BRtPeCOf0sGW0a7987PP0g26Jyf7dWi2h3brBg6SNXcJDtyQPcoenbgKqAWy0i%2BLKB0W35mYpoV%2BfcebbVW9vBjPsKAEjocOyRmN7O3BFkXzDM7PH4G%2B83Pot621Fa1uGBToBHfdhW%2F1T%2B61PfobqTLDzn8vIMK%2BLGgk05%2B3ZLlvPFrIRKxXHSRqbqVtsL0BvXgmHTdI5u8l9ReJilZIQpi8H9roBolc5j%2FgEEs9htbsafuhYJVcdlYDht6rNItHPysOixSuoADZDeDFefo%2B4oK6%2FqWDLksY%2FGF2s60ssTrD8ZhLKz4puwzjM5jFKiLGrlNDDlye33JsM6O5CBfLkyrsC1zcDg9%2B5ngv5uaYoeEzqbQcAaOdMOp%2FQsOC%2FpNRzXuX4s%2F1w6umkWvtyUTNh5MLbFzcEGOqUB3pQaWVOtdfwWPOwQ0uxGxr%2F1ulvZdy0YOJE0EVYnk%2BuzBtn0ED9h%2FQW137MaoEsfjHgS0q1N5h8G%2FwDfmSP8iSO0aeswKGQ%2B2fXn5bL9kCw6Brvm7S7icjGdhDQYrYB0deVftnuCru%2BUUkRkp1Z%2Bb2BYGxi%2FUYQZG64zrXPYpaJHhq8UjnA14Ns%2Bt5OMGTGboa7katbduxXgKN4izzvgJFHjfRpb&X-Amz-Signature=811b45c937332e2bd23681dcea269c983e8742502e9cce99e660de0e7c9dd544&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
