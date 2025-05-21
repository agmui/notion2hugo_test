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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663Q5GZBG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCDIehHAj5Duazz3BDleSQ2cRBo%2B3EXaf9NOYN3M0%2F5DwIhAKhLuQvYWwpgwkQtfp0X5WqfvjpLR8GaLPO%2FZauxj9HZKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBa%2FfQWKahv45WJy4q3AOcHC2CH%2FdaRdqpN4UvT%2BGe1U0F0NkkY2xln581VHnPI9QvxYJJR%2BA7gpu1hx4zDX%2BYWrYMGAltsv04bxOW8jGDTndMUIe5MTZsa6zMrkbk3w4bzjwFywwXTwo5QRMUHc7X5kTWqQNt14yOds%2BYAi2hmbyrl9hwgeHrkvB7XMARH7yW2HO%2Btc84MOln13i9MHnea7azhFLmhCCY45pNkb4FV8GEP6yyQrP%2Fh2a0VLBfvPaj1S7NzOZ9zyTA4HmYgoRO87arq5pqVbJIekvCgk3ynpk9Trg71i7aI8Nj%2BsrCzJ0DD3FxLhxm9c9J7gMgEwo43di3IIiJ9PRSoPolb1CQC7vB0hUdsz8L%2FVdTFuu7bmy%2FbeD7wYLxoK6kbxvXgTBiAUfdZz0qawCrhaLyI876soEG%2BPuPr9Gk%2BsW1FktgQJ7UaKWzi2yJ7SK1vil%2BngTRvlkEmqBFs9%2BFG36tEEexbpchnaqSxtbAvxNHaUiCJStrszgFGcWWdHI%2BiSx7F5qgMihMTKAzBhJGJVBMVdDfP%2B5L2tHtOZWX9I6fwPV3tmnSnDZ4P7gDaN1oANz%2FHs%2BUgA4eiAXziNcjqHdk7%2Bo6AqcXgADSFlvHd1sPG9qAmYfn01iIiwB9VXSi9TCujrjBBjqkAaq%2FylfjL345qOUwcQ38jABb0njZm%2BUd%2FSSlVaxqXCZmo8MxV%2BgHdVTcvF%2BiUghoQzStrr2%2FH1wOUXWSu0un1k6lqPIB5cof16w%2FWgRPYE%2B5hcbceRIscNrpEvXc4ldJVeYmmDtV%2BGuAEiQpy9n%2FRo1ifW21wVuGh8VkYI6W2V7ZZtcEOP3OAOFEDeiqp6X9XViA8Wfnn9ZM3BBfCLpwBiYRx4FC&X-Amz-Signature=073f74a6092f1ea1e04a5ded33b728d75dac1ae8e85b5c07cf3d574fc546226f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663Q5GZBG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCDIehHAj5Duazz3BDleSQ2cRBo%2B3EXaf9NOYN3M0%2F5DwIhAKhLuQvYWwpgwkQtfp0X5WqfvjpLR8GaLPO%2FZauxj9HZKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBa%2FfQWKahv45WJy4q3AOcHC2CH%2FdaRdqpN4UvT%2BGe1U0F0NkkY2xln581VHnPI9QvxYJJR%2BA7gpu1hx4zDX%2BYWrYMGAltsv04bxOW8jGDTndMUIe5MTZsa6zMrkbk3w4bzjwFywwXTwo5QRMUHc7X5kTWqQNt14yOds%2BYAi2hmbyrl9hwgeHrkvB7XMARH7yW2HO%2Btc84MOln13i9MHnea7azhFLmhCCY45pNkb4FV8GEP6yyQrP%2Fh2a0VLBfvPaj1S7NzOZ9zyTA4HmYgoRO87arq5pqVbJIekvCgk3ynpk9Trg71i7aI8Nj%2BsrCzJ0DD3FxLhxm9c9J7gMgEwo43di3IIiJ9PRSoPolb1CQC7vB0hUdsz8L%2FVdTFuu7bmy%2FbeD7wYLxoK6kbxvXgTBiAUfdZz0qawCrhaLyI876soEG%2BPuPr9Gk%2BsW1FktgQJ7UaKWzi2yJ7SK1vil%2BngTRvlkEmqBFs9%2BFG36tEEexbpchnaqSxtbAvxNHaUiCJStrszgFGcWWdHI%2BiSx7F5qgMihMTKAzBhJGJVBMVdDfP%2B5L2tHtOZWX9I6fwPV3tmnSnDZ4P7gDaN1oANz%2FHs%2BUgA4eiAXziNcjqHdk7%2Bo6AqcXgADSFlvHd1sPG9qAmYfn01iIiwB9VXSi9TCujrjBBjqkAaq%2FylfjL345qOUwcQ38jABb0njZm%2BUd%2FSSlVaxqXCZmo8MxV%2BgHdVTcvF%2BiUghoQzStrr2%2FH1wOUXWSu0un1k6lqPIB5cof16w%2FWgRPYE%2B5hcbceRIscNrpEvXc4ldJVeYmmDtV%2BGuAEiQpy9n%2FRo1ifW21wVuGh8VkYI6W2V7ZZtcEOP3OAOFEDeiqp6X9XViA8Wfnn9ZM3BBfCLpwBiYRx4FC&X-Amz-Signature=d88bded1cdcfc928a2d20174f15cd364c1b47bf987b04a96c516a7e305d6919c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
