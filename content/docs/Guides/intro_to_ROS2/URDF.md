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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTUX3GZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCoR81HrMcXEVoCVX8WsWSGUrmbof4mFZr0r41Tts%2BK0wIgYXE%2FtMGcrfef8KUKeOltb%2BCNbjy1qFtty4433axkS0wqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1jtpyIIAYuctR1YyrcAy1%2BSI9qd3VtaSVL3gQyOfELwb%2BgYQT%2Fz2S96YmU7GXsSNYEkvg3Tf8g4DR12%2BZBi2LgwzVbl76B6EFWWWUEqbx1aHqJo6AEN66zH6QB%2FcXjENb6jv5ImMb5Bd7kfe0PvoTDyEXRyjzBbc5e6OKmYCrXC%2BGTDW5h8x6Z7mbDUj0oqvQPQkvdtcYZNhQVnD8R9zVfgHnQh9uDl00DgOthpcn1AUZn0shZcMCMvnWtAHxVfe4K3Tcd0vMvSL%2BL%2B6EVQRFxQhExMawgj%2BzIxCltHRkODIkdAvE5XmXt%2FY%2FrHS%2FQPLzCnUBDvHAY3uRTlQbJPRSgSAt0PHDlgD2FrqxQOYjrLLJOKOFS2cLkwDMuT67HUvPk84wUG8k60Zxdd8yFM9GrlmBYBrhLYUSNngkPXQTZQ8yzRqzxyUCR%2BXLfmgxBhsE2%2B3D4%2BY8uoBhg7BrsooTHDHCona5D3NIlaNc%2FyI1%2BhdLoqtp4CWx1ANKyFf8cieRRRE9lb1XvGwPNEpGgBkuu8SenrMQWqxruS%2FROYc5tF0l06F8CxBaemu1Z9A0GNdD5LKAhoE7W%2F6Ofac3PjchmWwuuUoF8zXEZimif0cA7WXSNhmz2XY8wOCJbZDxi%2Bs257vuYzkzvMp9nMOT%2B0L0GOqUB66bAh8fmiyj2N%2FJXa%2FlPQPCKR3w5hN2QQqCXSgD%2FpAw8aZMRwPTYVtRF92zKUIGJ6jOyM0QXQfQpROqBC04AB0h8xEofxjzyIWjnqpaHQxVANgRP2DKiPN61A%2BB94TDh%2F%2FBuct0XGQCK7urL1tHFIsUZ9nmHaJRuOjWe43D3mRBN03gIgbwZYz4YyytIvIhz1vGCnk2wcNk8jvyuEV7u%2BhhNA3gt&X-Amz-Signature=04b39e8c69fbfa7b5d0fa9fa334405a6297b96d333db90a7c0069a62e8889a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTUX3GZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCoR81HrMcXEVoCVX8WsWSGUrmbof4mFZr0r41Tts%2BK0wIgYXE%2FtMGcrfef8KUKeOltb%2BCNbjy1qFtty4433axkS0wqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1jtpyIIAYuctR1YyrcAy1%2BSI9qd3VtaSVL3gQyOfELwb%2BgYQT%2Fz2S96YmU7GXsSNYEkvg3Tf8g4DR12%2BZBi2LgwzVbl76B6EFWWWUEqbx1aHqJo6AEN66zH6QB%2FcXjENb6jv5ImMb5Bd7kfe0PvoTDyEXRyjzBbc5e6OKmYCrXC%2BGTDW5h8x6Z7mbDUj0oqvQPQkvdtcYZNhQVnD8R9zVfgHnQh9uDl00DgOthpcn1AUZn0shZcMCMvnWtAHxVfe4K3Tcd0vMvSL%2BL%2B6EVQRFxQhExMawgj%2BzIxCltHRkODIkdAvE5XmXt%2FY%2FrHS%2FQPLzCnUBDvHAY3uRTlQbJPRSgSAt0PHDlgD2FrqxQOYjrLLJOKOFS2cLkwDMuT67HUvPk84wUG8k60Zxdd8yFM9GrlmBYBrhLYUSNngkPXQTZQ8yzRqzxyUCR%2BXLfmgxBhsE2%2B3D4%2BY8uoBhg7BrsooTHDHCona5D3NIlaNc%2FyI1%2BhdLoqtp4CWx1ANKyFf8cieRRRE9lb1XvGwPNEpGgBkuu8SenrMQWqxruS%2FROYc5tF0l06F8CxBaemu1Z9A0GNdD5LKAhoE7W%2F6Ofac3PjchmWwuuUoF8zXEZimif0cA7WXSNhmz2XY8wOCJbZDxi%2Bs257vuYzkzvMp9nMOT%2B0L0GOqUB66bAh8fmiyj2N%2FJXa%2FlPQPCKR3w5hN2QQqCXSgD%2FpAw8aZMRwPTYVtRF92zKUIGJ6jOyM0QXQfQpROqBC04AB0h8xEofxjzyIWjnqpaHQxVANgRP2DKiPN61A%2BB94TDh%2F%2FBuct0XGQCK7urL1tHFIsUZ9nmHaJRuOjWe43D3mRBN03gIgbwZYz4YyytIvIhz1vGCnk2wcNk8jvyuEV7u%2BhhNA3gt&X-Amz-Signature=e56ad3e5fb3653604fcb5c9046564bb94535fa0eb744363fa8648d191f342baa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
