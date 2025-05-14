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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYPYBPQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyiUYeEvC3hvbcf%2Ffwzd1nPvyki04uV3nBAlcSgMQUHAIgGXpEsd0DbhTViEbn0Y2PlNfVsix686EeJwtgb6Mmpi8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB0KR%2Byi1WuL3SP7BircA4DD0HIu0ehkVxe7ToMYCEXOsW3u3HKwG3XY0rNXbf36Duj9mYiWsGxmye1G8%2BtxizH%2Fkq7KF%2F3x1Z632vXwczFyeYM6WGi%2F%2Bldl4P20GBIXq4uXEqlgAPjVc%2BEdHCjI0uU%2B6%2B6uOC8oNFE7zrPLb2CV%2Bv1Lhs%2FoJIaXpACN0IDC22d%2Fak01mbLEaJfgZBrz%2BmiI4uYV98rd8u0pHVip2tY3tfdaCI%2F8riAhQGG3ooQVHOce5rJLNHv8%2FdSaj20wxaEGQe%2B28rIP5w0A8F1zy2I1dMSJA7Ioo0VYVDPvbSqjd7XfmtvQMm6JqBADOg2zVLkPm85xlDGXKtNEXoIJUA%2FEeUtxpAjDOqJ54tA4cFTwWvalce61E64K2wz055zFWiNSGUMCcVRQwWUlCcT8PStPJcYRQ8gcEp%2FCo4F86FaTF4svVPtfkYY4t84SwtHcqkzF%2B8461qKX0AvZ1%2B%2BN7u%2FMQQseCHsxBk1gNQ1mwrdEilTfEN5ZSbdYHdhzYumkFBAUrEUDQs4QIV6GoYW8NTCvd4i7a6OG0gRJMeY7IAAaynWYPGlFzMa%2BrzhobRm9KoRD4rL%2B2pASl9wOxPCfBmLWHwYg3SBxZqUmIGaaIfqBcyw%2BvImH7hqBQPcNMLvPk8EGOqUBnBfDS8Xge4FL0oA23mfmIV%2BrgayCwljhA1MQqBEt5xu5S8QZKCLbiMVi1WgqALhsGGTMxFVhFjTOkWdkWZU1VlDpPx1btgaKhSJkLeq%2FUnzM8RhgehsW%2B9T8lOwUQkb%2FM%2FdubTNMM55rselpQkd%2FTEq%2BxU4UMKQUhne5u5%2F5dExMSS0cKITQVWYZ6385HA9cXv9hMzE8BFQXxvB1w%2BBmJG2h0uza&X-Amz-Signature=dc210fc72ceb1623633cf9034a069c3bcc7a48e5e14bc7e44aa3612d35d85295&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYPYBPQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyiUYeEvC3hvbcf%2Ffwzd1nPvyki04uV3nBAlcSgMQUHAIgGXpEsd0DbhTViEbn0Y2PlNfVsix686EeJwtgb6Mmpi8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB0KR%2Byi1WuL3SP7BircA4DD0HIu0ehkVxe7ToMYCEXOsW3u3HKwG3XY0rNXbf36Duj9mYiWsGxmye1G8%2BtxizH%2Fkq7KF%2F3x1Z632vXwczFyeYM6WGi%2F%2Bldl4P20GBIXq4uXEqlgAPjVc%2BEdHCjI0uU%2B6%2B6uOC8oNFE7zrPLb2CV%2Bv1Lhs%2FoJIaXpACN0IDC22d%2Fak01mbLEaJfgZBrz%2BmiI4uYV98rd8u0pHVip2tY3tfdaCI%2F8riAhQGG3ooQVHOce5rJLNHv8%2FdSaj20wxaEGQe%2B28rIP5w0A8F1zy2I1dMSJA7Ioo0VYVDPvbSqjd7XfmtvQMm6JqBADOg2zVLkPm85xlDGXKtNEXoIJUA%2FEeUtxpAjDOqJ54tA4cFTwWvalce61E64K2wz055zFWiNSGUMCcVRQwWUlCcT8PStPJcYRQ8gcEp%2FCo4F86FaTF4svVPtfkYY4t84SwtHcqkzF%2B8461qKX0AvZ1%2B%2BN7u%2FMQQseCHsxBk1gNQ1mwrdEilTfEN5ZSbdYHdhzYumkFBAUrEUDQs4QIV6GoYW8NTCvd4i7a6OG0gRJMeY7IAAaynWYPGlFzMa%2BrzhobRm9KoRD4rL%2B2pASl9wOxPCfBmLWHwYg3SBxZqUmIGaaIfqBcyw%2BvImH7hqBQPcNMLvPk8EGOqUBnBfDS8Xge4FL0oA23mfmIV%2BrgayCwljhA1MQqBEt5xu5S8QZKCLbiMVi1WgqALhsGGTMxFVhFjTOkWdkWZU1VlDpPx1btgaKhSJkLeq%2FUnzM8RhgehsW%2B9T8lOwUQkb%2FM%2FdubTNMM55rselpQkd%2FTEq%2BxU4UMKQUhne5u5%2F5dExMSS0cKITQVWYZ6385HA9cXv9hMzE8BFQXxvB1w%2BBmJG2h0uza&X-Amz-Signature=86dd71a61200ef0cc74c852e6fb14b6689cc82399d37a0527a469dc7a057aaa5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
