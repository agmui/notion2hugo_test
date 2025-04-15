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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XRMCFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUULKz2Mv8ijHZHjjr2RdYuLUih%2B91gMiOaETqa2PwvAiEA%2FAFKY8wIqdqKjTlFojyo1dsU3fn0yOS3kbnaUqyI9AUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDgLUxR5ZK582JLuzyrcA98g6ee9xCLQ7DbriWhaxNzokZDjZweKUXu%2FFDGmHy3YbwG9flefF2N4GyyusQTaafsam9VQJRQB%2FC4BqDG2Q9mgFM0WbDzFlpsm8T6rmL0OxC6N68RtGtCgVZFp%2F8g6BnojTgTULRFQQ4ua4ImaYlQwsFIm3KXooGj1od4lykNXKXXH3ZUXBTvwxIL3NEk6cKrsMEPxsy5MzxjiZI%2BPOU1ohxZCTdQ%2Fv5zYttp66YQ6DpncCld382BuVPcyowEoEq1UwcQ56%2FIqcaJbukD%2Fo4BJ8XYbJ1GalKAimH0PJzOmDeUde1HWFRgN%2FVxaDoGULI%2Bf8%2BAstE5sJK4oxKMc2rraL5PDqajam7SrmFR2gyND0qUA96l1ROJufLC%2B192IfR01N639lOKkrSmdNi8B9TM4baCWy4qjTBkHGwfTXb0SSUmmJu6Gmq6jo1pjK3axnMFAK0TPIuev3RcXr12KvpMAPfrL9NxNmAaimeqAy9uTMhxBvSyntOl94fYJUfkVyDacCz5ClDpw4ciBiywNTfvJ%2FeBvEDYu0w%2BM4HJhIKh%2FaUkyTkphqC1ckuso42gVnqkGMFcK6zdCSxV%2FKIw9eDrmW2TTjTLCGufO6i10vfuZbRBVLuAsaOqvR%2F85MIbW%2Br8GOqUB4Cb5OEwf5gXwGx15zKEP9TSQbk0mlAqsziG4nzV42TIHQOkqrmf87GJ%2FRdh%2FEdswGeqalGGhOiidzylLm%2F4eE%2Fb3miv23Q7wMHFeV01udMrsA%2F%2FkP4y2NJ94QzLVFTB9AKZ16ghlHCWcQjklKBaff1lfNYh4BSerDtftMTOLFb5sKmarTp6rkE9Mgw4hh9idiIRPT4a8tmfX76HlP3Oo3BsNa2kU&X-Amz-Signature=109bc73940c40ae1bf0dfd83f4c3ca9c809b988db489696b7868dc75af220206&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XRMCFX%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUULKz2Mv8ijHZHjjr2RdYuLUih%2B91gMiOaETqa2PwvAiEA%2FAFKY8wIqdqKjTlFojyo1dsU3fn0yOS3kbnaUqyI9AUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDgLUxR5ZK582JLuzyrcA98g6ee9xCLQ7DbriWhaxNzokZDjZweKUXu%2FFDGmHy3YbwG9flefF2N4GyyusQTaafsam9VQJRQB%2FC4BqDG2Q9mgFM0WbDzFlpsm8T6rmL0OxC6N68RtGtCgVZFp%2F8g6BnojTgTULRFQQ4ua4ImaYlQwsFIm3KXooGj1od4lykNXKXXH3ZUXBTvwxIL3NEk6cKrsMEPxsy5MzxjiZI%2BPOU1ohxZCTdQ%2Fv5zYttp66YQ6DpncCld382BuVPcyowEoEq1UwcQ56%2FIqcaJbukD%2Fo4BJ8XYbJ1GalKAimH0PJzOmDeUde1HWFRgN%2FVxaDoGULI%2Bf8%2BAstE5sJK4oxKMc2rraL5PDqajam7SrmFR2gyND0qUA96l1ROJufLC%2B192IfR01N639lOKkrSmdNi8B9TM4baCWy4qjTBkHGwfTXb0SSUmmJu6Gmq6jo1pjK3axnMFAK0TPIuev3RcXr12KvpMAPfrL9NxNmAaimeqAy9uTMhxBvSyntOl94fYJUfkVyDacCz5ClDpw4ciBiywNTfvJ%2FeBvEDYu0w%2BM4HJhIKh%2FaUkyTkphqC1ckuso42gVnqkGMFcK6zdCSxV%2FKIw9eDrmW2TTjTLCGufO6i10vfuZbRBVLuAsaOqvR%2F85MIbW%2Br8GOqUB4Cb5OEwf5gXwGx15zKEP9TSQbk0mlAqsziG4nzV42TIHQOkqrmf87GJ%2FRdh%2FEdswGeqalGGhOiidzylLm%2F4eE%2Fb3miv23Q7wMHFeV01udMrsA%2F%2FkP4y2NJ94QzLVFTB9AKZ16ghlHCWcQjklKBaff1lfNYh4BSerDtftMTOLFb5sKmarTp6rkE9Mgw4hh9idiIRPT4a8tmfX76HlP3Oo3BsNa2kU&X-Amz-Signature=000a4f0cac9cc8651ba49afdcf94ecb6ac53fd3008339576a2efdf435351a36f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
