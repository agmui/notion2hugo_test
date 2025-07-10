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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7G74OSN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJDm3FM%2FgWURRQ%2FsizBPPq5c%2F61GVRwn8bnBkgKZqI2AiEAqmJjeAxksZ1HtAg7N0%2BWjpBkK9O%2BmiDK3iq7kkzSpTgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHu432CCeew11rzHSrcA%2BmAtZdAbjhzQsDap%2F7CNuFMWOpWEFrcXEBqWSTMOKciA3huQqlOQcwiYkNMD9oF9oL9XfnlhyMFFVYB0SLVaCXN6NcuQP%2FIWoO3FmF%2FtGlTJ7fyv%2FPJc9BdfUkFNqv%2B%2BqUbg6%2BDXsMn67fUdjokhm4vt30E9bzzrJJm4kogTpADYXJkH%2FMO%2F6Se%2FDocde18CBKzU0njvMTRy0%2BuUYXrLcVYQSWyP8pC2l5zaB2mpU7ZS2yCg8DVFMBB6l9mlPFANMiI%2F54f3RqIU5v41yeUj7ACBU%2BWMWJGdjF%2B29izjgBgsOaWQq7kpLBKcgx1n7fa3H3uPhvE5LKhy8ZD0yTplsTU6ljQBs8ajNyR7yn%2BWpvIYjkFAmixIeEmMtxTS2R%2FBg5D%2Baqbi0UW0O%2F5aBen0Ya4rIwm71GGdKqLnbvHR2BaWPVEG8GBw%2B3VgyU4AmIa3PlUg8%2BIi%2FOFMKBnCz1RodXpX08GCrqWv3%2Fpr%2Fu3B4DiP%2BxDvvJX1VbDWgu42lQ4%2Fw%2FpsljdaWGMsL9P4hzI%2F%2Bt7H6N7sf6Bw4VRtGxgF6mgi1f4SsN%2Fa7ABtklGr3pNXicOd7%2FfNRtlMJ%2FcO5w2qcDcf83DABUMOkAzfQuWv6pUa98JECEe2T5uMt5fMPyovcMGOqUBVn%2B1PMHZ0YSWmq81sOp%2BQPWOn4LYzGF0xgjpCWJxEtmUwkpHUQsfdS9wTBfRtoHs7i0P4fodEEADotqw9yyoIImHw%2FXo9AJdkb5e0lh5%2Fz17OXSgD8XKjqBTkhS60aF22dTL%2Fzl1aECFY95xGbNH20Z2dGKn%2Bc5rvcaBOvhmCBg61%2FwZm4Srr81OngmfF2vVSixmQepP%2F8U%2B%2BSlxg3RnU0dLf2AM&X-Amz-Signature=2da57f26b17c51b73147de799a47a5e98dde9479e7e588958daa7d3b4a2a8ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7G74OSN%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJDm3FM%2FgWURRQ%2FsizBPPq5c%2F61GVRwn8bnBkgKZqI2AiEAqmJjeAxksZ1HtAg7N0%2BWjpBkK9O%2BmiDK3iq7kkzSpTgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHu432CCeew11rzHSrcA%2BmAtZdAbjhzQsDap%2F7CNuFMWOpWEFrcXEBqWSTMOKciA3huQqlOQcwiYkNMD9oF9oL9XfnlhyMFFVYB0SLVaCXN6NcuQP%2FIWoO3FmF%2FtGlTJ7fyv%2FPJc9BdfUkFNqv%2B%2BqUbg6%2BDXsMn67fUdjokhm4vt30E9bzzrJJm4kogTpADYXJkH%2FMO%2F6Se%2FDocde18CBKzU0njvMTRy0%2BuUYXrLcVYQSWyP8pC2l5zaB2mpU7ZS2yCg8DVFMBB6l9mlPFANMiI%2F54f3RqIU5v41yeUj7ACBU%2BWMWJGdjF%2B29izjgBgsOaWQq7kpLBKcgx1n7fa3H3uPhvE5LKhy8ZD0yTplsTU6ljQBs8ajNyR7yn%2BWpvIYjkFAmixIeEmMtxTS2R%2FBg5D%2Baqbi0UW0O%2F5aBen0Ya4rIwm71GGdKqLnbvHR2BaWPVEG8GBw%2B3VgyU4AmIa3PlUg8%2BIi%2FOFMKBnCz1RodXpX08GCrqWv3%2Fpr%2Fu3B4DiP%2BxDvvJX1VbDWgu42lQ4%2Fw%2FpsljdaWGMsL9P4hzI%2F%2Bt7H6N7sf6Bw4VRtGxgF6mgi1f4SsN%2Fa7ABtklGr3pNXicOd7%2FfNRtlMJ%2FcO5w2qcDcf83DABUMOkAzfQuWv6pUa98JECEe2T5uMt5fMPyovcMGOqUBVn%2B1PMHZ0YSWmq81sOp%2BQPWOn4LYzGF0xgjpCWJxEtmUwkpHUQsfdS9wTBfRtoHs7i0P4fodEEADotqw9yyoIImHw%2FXo9AJdkb5e0lh5%2Fz17OXSgD8XKjqBTkhS60aF22dTL%2Fzl1aECFY95xGbNH20Z2dGKn%2Bc5rvcaBOvhmCBg61%2FwZm4Srr81OngmfF2vVSixmQepP%2F8U%2B%2BSlxg3RnU0dLf2AM&X-Amz-Signature=5a56154bffded25d980d6ea44c65104d94dba96d63e2a38bd50cc82f8c21d579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
