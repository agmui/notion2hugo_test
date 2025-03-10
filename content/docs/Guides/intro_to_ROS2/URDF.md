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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YXMF4P%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGu%2BTaVKtT9lgRjkjNmrg9MVTms9i45OwnERft9JVO2MAiEA62vwuWH8e3h5bpjkE2FK66IWDfWMnmJYcDrbclvol%2FkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7rWtdlAvhrEzzAdyrcAzDyQr%2BVL54O3LnypGzjTodnY2ZXuAPiDwbF9siikRpIgDE3gpZuHQGKckWxF2%2BrjBHbyKX4ZMp4%2Fsd1xsfjMhWNQVYrefHcB8vvb6HYsgHimLu9noar3BiwZoBBf%2FJfsobKkxHD6TuFI18Y9PNFfhke7Irc3EXENDmUBo9GMaeccYwJnegV9%2BNLHDlaOrHaGIL%2Fsd4XiKpXmc1Ag6Kwdx5qC8Us7i7Lyuv%2B9TloZcyNOpCDmdI03djjMQq2VyP28bduy7H%2F3Gmqn%2BBIlAhvK55AyDUZsfQT%2BvNGvLRKLFm1%2BTFM03cXz4JBK%2BKxmlEt0UBExQOn5iKrqAcr0OyM2epl%2BsWTEzfiiLPPBRhs7jWlMORAPURLw1VA5WNwXulUk2Q%2F2awZvdhbU%2Bk6wpi7W1zue7Cjd1yHYJ8cN7iT2H8%2Bc%2BggllxMo2bMnnifwCX8iVd6QSEX%2FV3hsNsSMznwHTLhvyoEACsVKFt%2FpPIfeopp2wsPP0NquWdsQzLUS5w3P5vEc6W5Ihal%2BLT75Kz2rr9OGhAUsCfkfW0EgCGKfDGQrBpmSF70waU3R%2FhWmVP5L7ajSHgnoo%2FUTiwy8mST4ej7mc6U2yOspo8ddTRG4mo3%2FalSIccEVqKBULeFMNvLvL4GOqUBrWi1bi32bS4HAa%2FD0u%2B%2FSO2YTCeHjiOAn9ISmOZAov3thL%2B0SLFZ2Ve97GG4LSATcbTnYxDpiAIrJRoEWOaj%2B%2FBjYHtX85RXrgOjcKXRRZWAs2UZegnY7uXPD8IjZeSfCYol8clpFOmxuo%2FgWREde2PjUle7hiyESytNfUtbQPensAf3bF1MmV0hDDr3urNAze%2FFnDUntTvxb93N%2FWBwUJiKMH6U&X-Amz-Signature=b59ddefe3e47a74fc1dbf97be46022fdc5a8fddb8f197c352ad61b7fbaf955e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YXMF4P%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGu%2BTaVKtT9lgRjkjNmrg9MVTms9i45OwnERft9JVO2MAiEA62vwuWH8e3h5bpjkE2FK66IWDfWMnmJYcDrbclvol%2FkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7rWtdlAvhrEzzAdyrcAzDyQr%2BVL54O3LnypGzjTodnY2ZXuAPiDwbF9siikRpIgDE3gpZuHQGKckWxF2%2BrjBHbyKX4ZMp4%2Fsd1xsfjMhWNQVYrefHcB8vvb6HYsgHimLu9noar3BiwZoBBf%2FJfsobKkxHD6TuFI18Y9PNFfhke7Irc3EXENDmUBo9GMaeccYwJnegV9%2BNLHDlaOrHaGIL%2Fsd4XiKpXmc1Ag6Kwdx5qC8Us7i7Lyuv%2B9TloZcyNOpCDmdI03djjMQq2VyP28bduy7H%2F3Gmqn%2BBIlAhvK55AyDUZsfQT%2BvNGvLRKLFm1%2BTFM03cXz4JBK%2BKxmlEt0UBExQOn5iKrqAcr0OyM2epl%2BsWTEzfiiLPPBRhs7jWlMORAPURLw1VA5WNwXulUk2Q%2F2awZvdhbU%2Bk6wpi7W1zue7Cjd1yHYJ8cN7iT2H8%2Bc%2BggllxMo2bMnnifwCX8iVd6QSEX%2FV3hsNsSMznwHTLhvyoEACsVKFt%2FpPIfeopp2wsPP0NquWdsQzLUS5w3P5vEc6W5Ihal%2BLT75Kz2rr9OGhAUsCfkfW0EgCGKfDGQrBpmSF70waU3R%2FhWmVP5L7ajSHgnoo%2FUTiwy8mST4ej7mc6U2yOspo8ddTRG4mo3%2FalSIccEVqKBULeFMNvLvL4GOqUBrWi1bi32bS4HAa%2FD0u%2B%2FSO2YTCeHjiOAn9ISmOZAov3thL%2B0SLFZ2Ve97GG4LSATcbTnYxDpiAIrJRoEWOaj%2B%2FBjYHtX85RXrgOjcKXRRZWAs2UZegnY7uXPD8IjZeSfCYol8clpFOmxuo%2FgWREde2PjUle7hiyESytNfUtbQPensAf3bF1MmV0hDDr3urNAze%2FFnDUntTvxb93N%2FWBwUJiKMH6U&X-Amz-Signature=becb79e66741936c15d740515194690b1e118d83fec2ee4650a97d7ce9f8b098&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
