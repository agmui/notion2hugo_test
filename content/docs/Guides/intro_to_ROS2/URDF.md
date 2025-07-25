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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVB3K7VO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIE0VzkjVzSi1pCsg2l%2Fl77wDj3fHftPJ6L9vdNEouR2nAiBy7VahAnXNu9q%2Bnitm7mYjzt4%2BQ6Gw5IeurA4iBchy%2BCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMLA3y9qMAEKUZPLuzKtwDiP%2BxuNQMhBJXWWJkbibdgN%2BotYh2N6Z%2BG1TxoqHNgigj3ObHpLurbeeonQwDlbJUbts9FvpT32CJ7jgzlArUVAzd3He9eR0eZ7ck2LCEbjrZVZri96Uj2vUNjrKh5DhjyGYfQ6BQo6PNd7mxqqCBfBy%2FyoXavbGgnFHTFj6YAsufEnJmuU%2Fk%2Bl5OOpt3uVWv7k0VVTbdr7gOiyKgzcpzK10WYMySpKRGz4FApEDATGi87b10kIWaPxZavL9bb2CxyPKyyB%2Bpw6sjmvZFN7z%2Bx1V9h%2FSj%2BujvNjo1LSHopkRveKnLS70G%2F1O7988wgsqDGedp2NZQSKRxNReEYOtMH9t2MjHsiUom2VAOxiu2IJzif2DHrSSnOsmgq4xPLOlciVzaKVsG2%2BcWHkgbM0502jaONyHqOMv4%2F1VAqJHnWCaHFdlYBgIS9ZY1q0J8uQW%2BjjoCIkRZ%2Bkc10rUdFrSv3lE6g%2B7oUbiDSxx9CbBoLsLIKAYd%2FYZvn65wPfwzRglDxYgJrcwZ8t08VdhKk1Gu4ip1AuI9mhrMFPJTyfVUsLheEfZbU4ZBb8s35H%2FZhRGAksL0ftNXE%2FyZHs8s%2FwKmWy1P3XZGsd7bqrTc8rzgBeK0fbbOvx2RtrzCAKQw1PeLxAY6pgHEid%2BB1L7Mm4wy5S9zdSTC9cm9gu2zHRTvW%2BCeUqvgqd3UCHBhe%2FmZyLbB7HqiA8I6mw11rrJBQMyyHRe2c67s7mm9WtMKcWgmTcfCewRXXlpurwaBkMsyq5Id0yjAHCghdV3OW5sqvYScnyvknFXpnTzsi%2BVdw%2FDhtOaB2lz5%2BpJtan14OEaS%2Fndj1mPinFkUNZqopsG1Eefkcs3gxuuikkiWKOhL&X-Amz-Signature=509d40a2786b9aa6d044461b93769ef9498121efb3f837bb5b6a757ffc899cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVB3K7VO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIE0VzkjVzSi1pCsg2l%2Fl77wDj3fHftPJ6L9vdNEouR2nAiBy7VahAnXNu9q%2Bnitm7mYjzt4%2BQ6Gw5IeurA4iBchy%2BCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMLA3y9qMAEKUZPLuzKtwDiP%2BxuNQMhBJXWWJkbibdgN%2BotYh2N6Z%2BG1TxoqHNgigj3ObHpLurbeeonQwDlbJUbts9FvpT32CJ7jgzlArUVAzd3He9eR0eZ7ck2LCEbjrZVZri96Uj2vUNjrKh5DhjyGYfQ6BQo6PNd7mxqqCBfBy%2FyoXavbGgnFHTFj6YAsufEnJmuU%2Fk%2Bl5OOpt3uVWv7k0VVTbdr7gOiyKgzcpzK10WYMySpKRGz4FApEDATGi87b10kIWaPxZavL9bb2CxyPKyyB%2Bpw6sjmvZFN7z%2Bx1V9h%2FSj%2BujvNjo1LSHopkRveKnLS70G%2F1O7988wgsqDGedp2NZQSKRxNReEYOtMH9t2MjHsiUom2VAOxiu2IJzif2DHrSSnOsmgq4xPLOlciVzaKVsG2%2BcWHkgbM0502jaONyHqOMv4%2F1VAqJHnWCaHFdlYBgIS9ZY1q0J8uQW%2BjjoCIkRZ%2Bkc10rUdFrSv3lE6g%2B7oUbiDSxx9CbBoLsLIKAYd%2FYZvn65wPfwzRglDxYgJrcwZ8t08VdhKk1Gu4ip1AuI9mhrMFPJTyfVUsLheEfZbU4ZBb8s35H%2FZhRGAksL0ftNXE%2FyZHs8s%2FwKmWy1P3XZGsd7bqrTc8rzgBeK0fbbOvx2RtrzCAKQw1PeLxAY6pgHEid%2BB1L7Mm4wy5S9zdSTC9cm9gu2zHRTvW%2BCeUqvgqd3UCHBhe%2FmZyLbB7HqiA8I6mw11rrJBQMyyHRe2c67s7mm9WtMKcWgmTcfCewRXXlpurwaBkMsyq5Id0yjAHCghdV3OW5sqvYScnyvknFXpnTzsi%2BVdw%2FDhtOaB2lz5%2BpJtan14OEaS%2Fndj1mPinFkUNZqopsG1Eefkcs3gxuuikkiWKOhL&X-Amz-Signature=17a99428e42e251bcd931a7774a011da705c1919b6355128a7e012d1fb22b3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
