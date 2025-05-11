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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B4LYPXR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCnFbHGr3D9Q3Xy71uD%2B0V3QTD8xI0jDlSN%2BMX5pZ7uSwIgM3DJXLuRTlnItsxFv5aFq0VwvRmPhEtmbfcueEWllrgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOydEIFiY9TDNFnhSCrcA8UaXa1sI1EhnLPg6ywt%2BKAV%2BTSV1QxBm7ZH2VxuU1cjeNX0Y5xycOVP8rbPCHS8CUJiSgw8AcZgSACHERmnoXGiDmoQ206e%2F5kCMDbJkwvUzQzctxzlWxQyf41aJ9NF6QMqUl%2BZG8xCsP%2BI39vW%2By1CAvY8pxvQCAZNCa0aN4IadPcilWbUaeTUI1Sgkf36EBB9T7yG69B17GVw%2FjjDFSY6de0wMgQoB45hJ%2BjKmVjhh0ySMPgMy0IjELHqiq7bd4xmcHTJNG5DgdwJUtM5LyJFTW3KGi7x6N0RiZrk0GqXrEN7PNyJfP%2F4N5COKzzwsMxbAyMhg8QkLRnhh%2F%2FtHak%2F30iantcUXgwNX02L6KxKgPVyoJGMcDvNfsorY%2F5KmoASzH3KAokzDRGA5PEiYrGosB71JTOwxs%2BNB2mTRLgfqkDPuDdr7yJ5caWPFefEz%2BD%2B%2Fp2r%2BX5KCAZ6m6NNTF0iMu5aaVZCAGvPew2ym6eqEZaEPufPqQ0BG1uNRK6rW4KBnVErlPtz0DnYGz%2Ff%2FN%2BZhdLUb979AZtdG%2BAtDwqi93yfQ1%2BA5XJwU%2FCEumLxBKkX8AFszoET8VPvWFyBuDjAzB2xt3P55oobMnimMPJbOwdT5V%2Bd2pSN%2FPiDMNq5gcEGOqUBsicuhyan7HEMFyh7bjU68Ye69cWsasQTwF51To%2Bjc23elzIBrAp14sct1rJ%2B3lREOrSfdEdFIZ9FvUuvs51q2dRX9wUlG0Zh4Gdfhzx9QpzYWfI7ImrBO1C4nvbFWJLABFP05OmWM9rZNbIVGiDEMymX7IGarvD8vjIouiW%2F0llm3ws1yS%2B4humZQe%2Br8ItVjS%2B9DpwIyhkLMqxxxQOpdP7MGsZK&X-Amz-Signature=66e3ebfdddd83c0e26b720c948209aa6b2853dd4c63d4649fdd5f8347f6fc664&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B4LYPXR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCnFbHGr3D9Q3Xy71uD%2B0V3QTD8xI0jDlSN%2BMX5pZ7uSwIgM3DJXLuRTlnItsxFv5aFq0VwvRmPhEtmbfcueEWllrgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOydEIFiY9TDNFnhSCrcA8UaXa1sI1EhnLPg6ywt%2BKAV%2BTSV1QxBm7ZH2VxuU1cjeNX0Y5xycOVP8rbPCHS8CUJiSgw8AcZgSACHERmnoXGiDmoQ206e%2F5kCMDbJkwvUzQzctxzlWxQyf41aJ9NF6QMqUl%2BZG8xCsP%2BI39vW%2By1CAvY8pxvQCAZNCa0aN4IadPcilWbUaeTUI1Sgkf36EBB9T7yG69B17GVw%2FjjDFSY6de0wMgQoB45hJ%2BjKmVjhh0ySMPgMy0IjELHqiq7bd4xmcHTJNG5DgdwJUtM5LyJFTW3KGi7x6N0RiZrk0GqXrEN7PNyJfP%2F4N5COKzzwsMxbAyMhg8QkLRnhh%2F%2FtHak%2F30iantcUXgwNX02L6KxKgPVyoJGMcDvNfsorY%2F5KmoASzH3KAokzDRGA5PEiYrGosB71JTOwxs%2BNB2mTRLgfqkDPuDdr7yJ5caWPFefEz%2BD%2B%2Fp2r%2BX5KCAZ6m6NNTF0iMu5aaVZCAGvPew2ym6eqEZaEPufPqQ0BG1uNRK6rW4KBnVErlPtz0DnYGz%2Ff%2FN%2BZhdLUb979AZtdG%2BAtDwqi93yfQ1%2BA5XJwU%2FCEumLxBKkX8AFszoET8VPvWFyBuDjAzB2xt3P55oobMnimMPJbOwdT5V%2Bd2pSN%2FPiDMNq5gcEGOqUBsicuhyan7HEMFyh7bjU68Ye69cWsasQTwF51To%2Bjc23elzIBrAp14sct1rJ%2B3lREOrSfdEdFIZ9FvUuvs51q2dRX9wUlG0Zh4Gdfhzx9QpzYWfI7ImrBO1C4nvbFWJLABFP05OmWM9rZNbIVGiDEMymX7IGarvD8vjIouiW%2F0llm3ws1yS%2B4humZQe%2Br8ItVjS%2B9DpwIyhkLMqxxxQOpdP7MGsZK&X-Amz-Signature=e19c66f3f7ad3c54a7cbf331274174242e63ef300fa0a8083f6ff9668abbe17a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
