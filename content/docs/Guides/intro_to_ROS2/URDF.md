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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKOO5VU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9AWRn7MGrRX0oaM7DY%2BnJhVgQSdRQvEyIlBkQDujQAIgJpEYs%2FvzPKXCpRPQ5%2Fw9FmWQ0r2blnL7twDTjAYBIe4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHHrl0eVwoJd%2F8p6TyrcA9vS1LBOPwRqt%2FddOXKl0NYdURaB0kAa4HlGFQ%2F1uMBRdfJHGjVbS%2BDG0IAe5JRUTtDGE%2FQModl%2FsOPiarC9kZi%2By9l%2B9JLUCFsflZ41dDET9%2BsnHPHw%2Fdu7Uwp3FuJD43zPsOhg7eI1fTTwt85D0hVINKbnsqBP9yBhYrHeLbcFTIJtLeicxXzCdoif%2BHemp3QEBRfofFvjNmUwlmkmsz7zvO8nTrBhpfu8erRZHVLHj%2BdHmGbt73QODkmTAkuT5fHY0fRAPabMRlQ7JDWUAEKPfud7p8y3ttX%2BGAUofZpHYS8iJUlKOVAke4s3V41GHdAE%2BIZHfWCPiAFD1O3SCe39v2cVJRfZ3sJF5zP9lEmPu7Fng2A9lyejEtpKGPKKxH87Gv4VD2xRwGMhQu8xvK6O5G21T5ZXddRimTmlT33qnwNOvCqjzTCOQOixKr5bTJlPQHBFB7%2BBXidZmE9zXxaJohNC1mVZmm7VWOdc5lCKmqkL%2FSM%2FGZYYjTE1WUZ%2Bc0FQitMZb4YJ2po%2BkN4QsLbbmqQfVg5sGSmbnROdHpQgXv5NhVhmLEq6X8y%2FgLVzO1DX9qhcG9SDdafohBrCIgSMSQqzA3KP1z8xEypM%2Bkwm7uVp4CfFlXb6jr0gMLrMlb8GOqUB07scPgqYknRCV75nvLGmay7fw8NOZfhMheFqGSCfRXrUZhZgdtgMRW%2BiBawmGiU17p48UNvKFGmTZ0xr9%2B9mATe7JfInTMs56TokUeE0%2BUl6T%2B7CuRUC6mJvk%2F%2FtIGg29OFhD2bTti14yPzX3d0i3IpiTY1W6VMiL5R9g02R0gkfhX0GbK%2F8WqUKCFQxBIYEVL7%2BKGgrdViumb46rDAHxAuzCk4i&X-Amz-Signature=0388e4b926b84437b74cc430663fc211ffe2594ba9d31694aeaad70f18b622a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKOO5VU%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9AWRn7MGrRX0oaM7DY%2BnJhVgQSdRQvEyIlBkQDujQAIgJpEYs%2FvzPKXCpRPQ5%2Fw9FmWQ0r2blnL7twDTjAYBIe4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHHrl0eVwoJd%2F8p6TyrcA9vS1LBOPwRqt%2FddOXKl0NYdURaB0kAa4HlGFQ%2F1uMBRdfJHGjVbS%2BDG0IAe5JRUTtDGE%2FQModl%2FsOPiarC9kZi%2By9l%2B9JLUCFsflZ41dDET9%2BsnHPHw%2Fdu7Uwp3FuJD43zPsOhg7eI1fTTwt85D0hVINKbnsqBP9yBhYrHeLbcFTIJtLeicxXzCdoif%2BHemp3QEBRfofFvjNmUwlmkmsz7zvO8nTrBhpfu8erRZHVLHj%2BdHmGbt73QODkmTAkuT5fHY0fRAPabMRlQ7JDWUAEKPfud7p8y3ttX%2BGAUofZpHYS8iJUlKOVAke4s3V41GHdAE%2BIZHfWCPiAFD1O3SCe39v2cVJRfZ3sJF5zP9lEmPu7Fng2A9lyejEtpKGPKKxH87Gv4VD2xRwGMhQu8xvK6O5G21T5ZXddRimTmlT33qnwNOvCqjzTCOQOixKr5bTJlPQHBFB7%2BBXidZmE9zXxaJohNC1mVZmm7VWOdc5lCKmqkL%2FSM%2FGZYYjTE1WUZ%2Bc0FQitMZb4YJ2po%2BkN4QsLbbmqQfVg5sGSmbnROdHpQgXv5NhVhmLEq6X8y%2FgLVzO1DX9qhcG9SDdafohBrCIgSMSQqzA3KP1z8xEypM%2Bkwm7uVp4CfFlXb6jr0gMLrMlb8GOqUB07scPgqYknRCV75nvLGmay7fw8NOZfhMheFqGSCfRXrUZhZgdtgMRW%2BiBawmGiU17p48UNvKFGmTZ0xr9%2B9mATe7JfInTMs56TokUeE0%2BUl6T%2B7CuRUC6mJvk%2F%2FtIGg29OFhD2bTti14yPzX3d0i3IpiTY1W6VMiL5R9g02R0gkfhX0GbK%2F8WqUKCFQxBIYEVL7%2BKGgrdViumb46rDAHxAuzCk4i&X-Amz-Signature=73af9048c22b36ed7ebe9cbf5c2ddaee23667bee4f910fc2e89902203dc30847&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
