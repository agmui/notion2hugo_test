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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLZ4UYM%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAd5XkxOk469EbaQfbtTfK51C439V2nIUo66i3kCi2gUAiEAz73%2F6RvazSCRqF3cmpqsd26rjpic9KMhndGc5GY1I5gq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMkH1wUkwUV%2FwYHF4ircAwIQ7N9Cfj9vOSzfOt9acEm%2F4%2BLFpoUxf5SfE2QJNwueBdiJzxYdSwGFbGg%2B5nWYjwGoQ6d2J2Jb6kEvTzRIrMEjJLu8Araac4luAYEYNMwTwcNTTzQKmD5u8v77U3c4mf9kXkMsyHoBqaqOqCHJFGBMSEZIy94d7yF1%2Bt2vT7nYBRugka4n3ihStpbyxHC5cwrgmwaQ0pZ4KIS%2Bxe0g%2FdUec%2BjJzD%2F%2FCBJMTJSyFuu7XqCl9hpo%2F1%2B32TA%2B7z3Bqe2I%2BAB3sNXRseqDVkZFWngh9dZhFu99wYNO2dG8B99YZUdwtt2CCYqMwBo7jakniNnVVAIuxA8j3H7Q%2Bb1jXNpZo82CgQ%2FO58BvKoplTS11Ue3NFqrI4nhvRGVdnOPrWaPjO9qSr2S4yk5Lz%2FCwlQZujNlN5SsSDlQzTjB5YjcLoDILiGxdPEbGeAtjDoVX4qH75gXgqkAyk5bc5ivoAobnDC8bxIP%2FSb9JKe2repteQM3Yrya7F5n6wyrtPhD1MxcivoBDFX7icg7fHWuqbwLr2%2BSs2CxWCLIGXqNtbwNZ%2BSWIfdsLBtHAVt6BSkc7R7%2FaY%2Bb90tF8IwOL5IEMsIFExQDFgeUZ1E12nJWzh1q%2BLGfVbIlE2hD30rLmMJuG%2FcEGOqUB6eWUXSOTFgwoDJFZ%2FIQsKyGfyQ2chPPBTDx0kTpA4rqZh8h8jYekzMb91RjAShfzBidY42MrHM6kc7cJ5tZSXcFwMdwkPFx2g8rmxlGbEXRyPFkT9h%2FK3chSYK7v4IfwA8OCYtGSQZu7vi7JTnleYFQOxdt3gCtNowB%2BWvERKVwPuMjValpyWZiRKlIqD2tSkvYfwxh%2BJ0DcKJuKwJcM2Gsolx2w&X-Amz-Signature=03a8b315a6e04a8c2bbb8f770f0294b3c8c5a42883d206b186a2e0b0b8bfe580&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLZ4UYM%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAd5XkxOk469EbaQfbtTfK51C439V2nIUo66i3kCi2gUAiEAz73%2F6RvazSCRqF3cmpqsd26rjpic9KMhndGc5GY1I5gq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDMkH1wUkwUV%2FwYHF4ircAwIQ7N9Cfj9vOSzfOt9acEm%2F4%2BLFpoUxf5SfE2QJNwueBdiJzxYdSwGFbGg%2B5nWYjwGoQ6d2J2Jb6kEvTzRIrMEjJLu8Araac4luAYEYNMwTwcNTTzQKmD5u8v77U3c4mf9kXkMsyHoBqaqOqCHJFGBMSEZIy94d7yF1%2Bt2vT7nYBRugka4n3ihStpbyxHC5cwrgmwaQ0pZ4KIS%2Bxe0g%2FdUec%2BjJzD%2F%2FCBJMTJSyFuu7XqCl9hpo%2F1%2B32TA%2B7z3Bqe2I%2BAB3sNXRseqDVkZFWngh9dZhFu99wYNO2dG8B99YZUdwtt2CCYqMwBo7jakniNnVVAIuxA8j3H7Q%2Bb1jXNpZo82CgQ%2FO58BvKoplTS11Ue3NFqrI4nhvRGVdnOPrWaPjO9qSr2S4yk5Lz%2FCwlQZujNlN5SsSDlQzTjB5YjcLoDILiGxdPEbGeAtjDoVX4qH75gXgqkAyk5bc5ivoAobnDC8bxIP%2FSb9JKe2repteQM3Yrya7F5n6wyrtPhD1MxcivoBDFX7icg7fHWuqbwLr2%2BSs2CxWCLIGXqNtbwNZ%2BSWIfdsLBtHAVt6BSkc7R7%2FaY%2Bb90tF8IwOL5IEMsIFExQDFgeUZ1E12nJWzh1q%2BLGfVbIlE2hD30rLmMJuG%2FcEGOqUB6eWUXSOTFgwoDJFZ%2FIQsKyGfyQ2chPPBTDx0kTpA4rqZh8h8jYekzMb91RjAShfzBidY42MrHM6kc7cJ5tZSXcFwMdwkPFx2g8rmxlGbEXRyPFkT9h%2FK3chSYK7v4IfwA8OCYtGSQZu7vi7JTnleYFQOxdt3gCtNowB%2BWvERKVwPuMjValpyWZiRKlIqD2tSkvYfwxh%2BJ0DcKJuKwJcM2Gsolx2w&X-Amz-Signature=56bbf1e917d8990d2298a08f6cc202e59c470def1e32faf9cb991f6c2a9a91a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
