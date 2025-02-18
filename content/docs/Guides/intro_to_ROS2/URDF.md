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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42OTIKC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEEP9nSDjep1abE4vXHE3S1J2Gv77PcV5tv7Gn4JxvNwAiEA7GQyDKrVoyj49ycpAj%2Be8iAZkDvLx50sk2AlZfZoHV4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBkcUCkzj6zQaApGCrcAwxtiaWoQvfC5InXmoB%2BhCgmNvtu09Qajjr%2FonwEcvi7p7%2BJDo7AmYZUAHngK093psIfQtcfHCwwHLiKl4qV6w7nNvTZCyFezxPA7xFQ%2Bhg72NT%2BXQh0cs6akbuQZSbwnYHzAdxnFeokQu0WWJ2VBntGo61z0dR7mYO7ARlfNEPrCe26lc%2F3h01bd%2BQyPr7zL697CUCjmSSn2m%2BL1%2FV90KEhLDlT%2FTx9zv3sP5ESjrtGio6UWxgXz%2FPYhzj1%2BcKctslVBjh8vuYB6exe7wUlB6W4UWMcBMRMCPUw%2Bsx36Ru07zPyT4XzdUceUz8mkSNRxx4uDedrv8afbuSXzOcBXYKP9iI45tV4WFx%2BBv29L3lQwzbGWSKFpfMKxDA2xNL7VJBWeoXrj4w%2FLp1dlJZ0N2ogwLPibL%2BNfMcosfn81WWboCU7wbtGUuH5O6VZHbjltvOPOlEVeAQWQsRe8F%2Bv7g1EOlWd%2BBpwIDNVZW1XHWO0ZTB5aSP3gy9dcpVfygs5jubl%2BRh3%2BwFL3vUwpLxnQui5jFbFg02T7ObJCGyUGYrlp3Tru9FVrd3bTTNTEGCYIIXm5d4v7jUbqePJBbXIRnLsozGXQ9ymbs2fzNTOl%2BKZM6xSSqdSCsa9UO51MIGy0r0GOqUBJZ%2FdnNA6w4gfYJEiaEb4WlSo%2BHXEV2oyhKLfrEBcW6wQ91R3FpJAxuwlNNFNXpphIfBsSnMm5gV9dKXrHObatHEK%2FfjjNfhqfMLWxXav8cD0WQlap4aJHvAITmpIiTbaEfYCjtlmGNl2FhocetRrmTtpH7Dcy0t8aG4mnTr5l5a9cm0XWlPjcaVr%2F5JT7shsKd%2BNu9ARieRAwuye0MEKHR6UfSRq&X-Amz-Signature=86faa7d1b6355ec4c971e363164ee23d2469b6340e527432a5a31f235c31a489&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S42OTIKC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEEP9nSDjep1abE4vXHE3S1J2Gv77PcV5tv7Gn4JxvNwAiEA7GQyDKrVoyj49ycpAj%2Be8iAZkDvLx50sk2AlZfZoHV4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBkcUCkzj6zQaApGCrcAwxtiaWoQvfC5InXmoB%2BhCgmNvtu09Qajjr%2FonwEcvi7p7%2BJDo7AmYZUAHngK093psIfQtcfHCwwHLiKl4qV6w7nNvTZCyFezxPA7xFQ%2Bhg72NT%2BXQh0cs6akbuQZSbwnYHzAdxnFeokQu0WWJ2VBntGo61z0dR7mYO7ARlfNEPrCe26lc%2F3h01bd%2BQyPr7zL697CUCjmSSn2m%2BL1%2FV90KEhLDlT%2FTx9zv3sP5ESjrtGio6UWxgXz%2FPYhzj1%2BcKctslVBjh8vuYB6exe7wUlB6W4UWMcBMRMCPUw%2Bsx36Ru07zPyT4XzdUceUz8mkSNRxx4uDedrv8afbuSXzOcBXYKP9iI45tV4WFx%2BBv29L3lQwzbGWSKFpfMKxDA2xNL7VJBWeoXrj4w%2FLp1dlJZ0N2ogwLPibL%2BNfMcosfn81WWboCU7wbtGUuH5O6VZHbjltvOPOlEVeAQWQsRe8F%2Bv7g1EOlWd%2BBpwIDNVZW1XHWO0ZTB5aSP3gy9dcpVfygs5jubl%2BRh3%2BwFL3vUwpLxnQui5jFbFg02T7ObJCGyUGYrlp3Tru9FVrd3bTTNTEGCYIIXm5d4v7jUbqePJBbXIRnLsozGXQ9ymbs2fzNTOl%2BKZM6xSSqdSCsa9UO51MIGy0r0GOqUBJZ%2FdnNA6w4gfYJEiaEb4WlSo%2BHXEV2oyhKLfrEBcW6wQ91R3FpJAxuwlNNFNXpphIfBsSnMm5gV9dKXrHObatHEK%2FfjjNfhqfMLWxXav8cD0WQlap4aJHvAITmpIiTbaEfYCjtlmGNl2FhocetRrmTtpH7Dcy0t8aG4mnTr5l5a9cm0XWlPjcaVr%2F5JT7shsKd%2BNu9ARieRAwuye0MEKHR6UfSRq&X-Amz-Signature=9451ca0122aab5252697b4f44646330d7c0d8301dbd393e2f2d1a40343e9f669&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
