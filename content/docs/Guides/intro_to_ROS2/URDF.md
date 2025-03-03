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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDKCOV2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2SfhV3EmDHmFUq8T4QzDWXzib7vaUxo%2FGCMNHPfOV0AiBmBvirtrbdmWz0idH1gSdPjna9DjPX1yDpU1M2xB9vsSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAt%2FSfhZOPNmhHIbbKtwDki9fO%2BKlkCDbqOCyQVJCWaKsvn5KfJVZxW8x%2BRREPpM0cjx7BN%2FuhrTT07sIkIFUYcfweVPwCfnSqnI9sM30JstvWrw8X%2Bj5k4ONecoXjUqifb6F0trgR95gfss0P%2B1WniWTCOpwuf6D9ehJAuYgPYicIHdk0aXeKhIctWJvH6PWUwyAlPP2u4dDhETzFMEVYM5sC%2FE4iZ9ajtQYEnPYwyT8m4CeRjNip4gEQ%2FYF%2Fzw5F7VE6zkqUgf3CUvAIxOcNN1maI4Xw%2B5PUjMT0DcNF9sHRC14LgNkloPOxwycqxEYT2BymeqLliK9HQQBYeeVtisP8PW14eXOZi8BwthO9GnfoPtjCNX4LGxYdAKeWJfk2NQRH%2BZ1273%2FIsmHz8SFtkIg%2FxeT%2BzH7uSp7LwoH9Ig6qChJcG%2BwUdgCBEXaiRmizFgLvVw099jfE4iwVIRpg0Ybwgxo5eBc2UwtI1qL4SmqPPmph40DfihgqRcZ5wQuEcnY%2FloO0tFUO4nK1hhRtHAfeeG%2B3wyJQWFBucDtdGn1kgmpcpLSn3mf%2FwQ7zo0ipHvJEuOBYH3HvHKdAT2KDw2C17vFxLo2utX3WkIV7CY2uPFlEaNi9RaYs5Rm3YOus2Xx%2F6DwOoCH7c4wvtmWvgY6pgEp19dwc7e54NNNlEC%2BgvAdT%2B8MIe6J7sAPUXifkFPPvTyayBUNyiQRPnSIGW24Gkqw2Fzqvb9tF1F7rTOXVfNPCi53ItSd%2BoPqQzNKnX%2B0F1ClvUyUzqNkfLPFCrKvu4fGjSq4f97AzbL%2BvYKOssFZnTN9K0h%2Flt%2F5iU0JcP6EBRon0vZ4vXXdAjnRWHZ4C8e%2BNhLtSkSRxGcTCO0BuUHEs%2B8fzRRt&X-Amz-Signature=8b9f5a0963bffdcb3d20a4c36e5284f4522f5adcd997f47da0a398b02b5d00c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDKCOV2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2SfhV3EmDHmFUq8T4QzDWXzib7vaUxo%2FGCMNHPfOV0AiBmBvirtrbdmWz0idH1gSdPjna9DjPX1yDpU1M2xB9vsSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAt%2FSfhZOPNmhHIbbKtwDki9fO%2BKlkCDbqOCyQVJCWaKsvn5KfJVZxW8x%2BRREPpM0cjx7BN%2FuhrTT07sIkIFUYcfweVPwCfnSqnI9sM30JstvWrw8X%2Bj5k4ONecoXjUqifb6F0trgR95gfss0P%2B1WniWTCOpwuf6D9ehJAuYgPYicIHdk0aXeKhIctWJvH6PWUwyAlPP2u4dDhETzFMEVYM5sC%2FE4iZ9ajtQYEnPYwyT8m4CeRjNip4gEQ%2FYF%2Fzw5F7VE6zkqUgf3CUvAIxOcNN1maI4Xw%2B5PUjMT0DcNF9sHRC14LgNkloPOxwycqxEYT2BymeqLliK9HQQBYeeVtisP8PW14eXOZi8BwthO9GnfoPtjCNX4LGxYdAKeWJfk2NQRH%2BZ1273%2FIsmHz8SFtkIg%2FxeT%2BzH7uSp7LwoH9Ig6qChJcG%2BwUdgCBEXaiRmizFgLvVw099jfE4iwVIRpg0Ybwgxo5eBc2UwtI1qL4SmqPPmph40DfihgqRcZ5wQuEcnY%2FloO0tFUO4nK1hhRtHAfeeG%2B3wyJQWFBucDtdGn1kgmpcpLSn3mf%2FwQ7zo0ipHvJEuOBYH3HvHKdAT2KDw2C17vFxLo2utX3WkIV7CY2uPFlEaNi9RaYs5Rm3YOus2Xx%2F6DwOoCH7c4wvtmWvgY6pgEp19dwc7e54NNNlEC%2BgvAdT%2B8MIe6J7sAPUXifkFPPvTyayBUNyiQRPnSIGW24Gkqw2Fzqvb9tF1F7rTOXVfNPCi53ItSd%2BoPqQzNKnX%2B0F1ClvUyUzqNkfLPFCrKvu4fGjSq4f97AzbL%2BvYKOssFZnTN9K0h%2Flt%2F5iU0JcP6EBRon0vZ4vXXdAjnRWHZ4C8e%2BNhLtSkSRxGcTCO0BuUHEs%2B8fzRRt&X-Amz-Signature=dc4702dd623b4df30e05a189457ac9f6991a476d3b2e076569e3f37fb26fe300&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
