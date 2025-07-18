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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAMC2GB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICYpg1tsXQ4c61vi4AT75TO093bcfuPeLSW4mEmmTwmGAiEAma0C5sYzAqWCDZDJlj94i5MZBv7AJFMkwpNAA7w6VhcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2An7UYPfT2DhWPVCrcA5cX9N%2B5lcbpGq%2F6J3JFhOyk6unVK5GWkAPBP6ilZ%2FmahL4w2lt4ZdoWO%2FWDBeasb%2BZfY8x6Td%2FrwwMqII2C%2FytGj3A2BQU%2BsSCqkAU6XElDuz2mTcSf%2FPyOgrZhONss6i%2Bb%2Bsxm7KErJLjcFjlhl59e1qUaZUcc%2BsvkQ%2FSzgRrrqccSjwIqz9YHEQN%2BOklvgeI%2BAmIHwtLyycJSCbWx3yMZvpZpEoTetM6RqsSHVhJtUDbu8pea8YliazoxeKvKzAj5pTBvvYBPvJwTClierxj%2F5HM1E%2Few4sa2adqw5UydzojHVdIJsKT%2FtOOHw2ZSvAkQR%2BUYZ5aG2SMJ8O1PpyrNvvi0YuUgWDtCOsJs%2BKnJK%2F3FE6%2FqlxhrnsTEXbGmWCOsGFJNMEpY0UNaRblfCALrh3A6QO9IOVdsJcr4qeZr9e26O89XCOwOto2p9LXH971jaVQge%2FU8QJt0RQyzxssbQ9jqbjuqvrkq30abbXcwJRgTGabswQiwTXueRPlBc8ytgkWHUiCaoDU1Sh3KzBO5H2INNb5B8hweLmhIvqWa4xXHkItpVAuMJ208vPkZE1OgY2PLXtSVvNh5nQBV6W%2BW0TQMGu%2BLN6IJJsp9wtetdSJpiWU4RqDMkCnPMMbP6MMGOqUBbnBZ9pq3ENGUsFPgklIjVP2BqCpKn5Agi6%2FVdOvaGZ9Pm5Ub1p3BtDluvSNBjQruEpVpP2r4hwsjVBEiFLUReMJxJjLOVc4H6tnzounZOwmjARAsxEcAkJi8Ya2V5hkBq1oK7AMDIBteVUDSyTp%2Bdjqy01njlZWPI0kdeT3Uivu9KzRTmvHH9cBlww9O91BcKBwCBW5y8XRe56qfz1Hv4RkwUGvM&X-Amz-Signature=43c00fc12afde0ef85991e77b4a8a985b44b5c700f2620e7abbe120fbf910c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CAMC2GB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICYpg1tsXQ4c61vi4AT75TO093bcfuPeLSW4mEmmTwmGAiEAma0C5sYzAqWCDZDJlj94i5MZBv7AJFMkwpNAA7w6VhcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2An7UYPfT2DhWPVCrcA5cX9N%2B5lcbpGq%2F6J3JFhOyk6unVK5GWkAPBP6ilZ%2FmahL4w2lt4ZdoWO%2FWDBeasb%2BZfY8x6Td%2FrwwMqII2C%2FytGj3A2BQU%2BsSCqkAU6XElDuz2mTcSf%2FPyOgrZhONss6i%2Bb%2Bsxm7KErJLjcFjlhl59e1qUaZUcc%2BsvkQ%2FSzgRrrqccSjwIqz9YHEQN%2BOklvgeI%2BAmIHwtLyycJSCbWx3yMZvpZpEoTetM6RqsSHVhJtUDbu8pea8YliazoxeKvKzAj5pTBvvYBPvJwTClierxj%2F5HM1E%2Few4sa2adqw5UydzojHVdIJsKT%2FtOOHw2ZSvAkQR%2BUYZ5aG2SMJ8O1PpyrNvvi0YuUgWDtCOsJs%2BKnJK%2F3FE6%2FqlxhrnsTEXbGmWCOsGFJNMEpY0UNaRblfCALrh3A6QO9IOVdsJcr4qeZr9e26O89XCOwOto2p9LXH971jaVQge%2FU8QJt0RQyzxssbQ9jqbjuqvrkq30abbXcwJRgTGabswQiwTXueRPlBc8ytgkWHUiCaoDU1Sh3KzBO5H2INNb5B8hweLmhIvqWa4xXHkItpVAuMJ208vPkZE1OgY2PLXtSVvNh5nQBV6W%2BW0TQMGu%2BLN6IJJsp9wtetdSJpiWU4RqDMkCnPMMbP6MMGOqUBbnBZ9pq3ENGUsFPgklIjVP2BqCpKn5Agi6%2FVdOvaGZ9Pm5Ub1p3BtDluvSNBjQruEpVpP2r4hwsjVBEiFLUReMJxJjLOVc4H6tnzounZOwmjARAsxEcAkJi8Ya2V5hkBq1oK7AMDIBteVUDSyTp%2Bdjqy01njlZWPI0kdeT3Uivu9KzRTmvHH9cBlww9O91BcKBwCBW5y8XRe56qfz1Hv4RkwUGvM&X-Amz-Signature=c3fdbb66ece9f1757e66bee472c07709946368520bb2c19901dabe93c7ea32f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
