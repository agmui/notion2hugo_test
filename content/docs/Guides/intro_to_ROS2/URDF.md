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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZXSY33%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQmC%2F%2FiDWtjd%2FmCW%2BQigY6QzWC9A74y8gdodhx2835iAiEA7CYYEEQtLrXDBfjeH8KHz%2FS0QN1yp%2F2bg9P%2BuUP6ZFEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG1cB4pk%2BUSgL9xtircA9i8SX%2F0Va%2BNUyqybh1TkQNzs5rbF6nDytvXQdcR4QYW1jeXqP3ofKPhHhPvt%2BwxUztDurxq4xXQXyNQozcyU5T%2FhFccayawJd8AKVyFCjvx%2Bra9jIiA1ijYq938IWK9r9PVBuSleSe80fpmx8cExqwuL9dYEWfbA%2BLaBvd8x0Zs3tEd9d9wspq3MY%2B2gazfQ1FTpHBQWxMQ7IA9gzO68FU7d19FRv7W%2F08HbAgyG6QjMtAV9dVDWywDQa8mjmqJgcBaklaub2xMgb3cjF2IB1JbIJ3BfvXyprhn7oRcyHsJywJSKBGJx1kimvxqtVhjxND%2FkZ0tdV%2BWm8GG6IHTwBPyYd9tpsDXsO9bcpkc5KSc%2B7rgDjMJK8vfgfdjzuQg9vmNZ2cp0PE8sICHHL6v9Tgdbozcf%2BC7d%2BcJbCzFYVuly1BinYyBAd%2B0WT6cjPrDtVxn3x9j2eSzQli7C6jcJvZ6NeSZMh03wALa%2F28Ysd0sly6w0RmcGGaILIqVd4HxxG2%2Fdue0dLnxLqFqMeVhNKBO7cHx7i9tOhNKGPVVboPJ%2FoMbUfxinrwxVr0QSthRkmYE%2B7A%2Fk%2BPXVKk3Ul88uwyI4AdqCfJz%2FjV7ifEFrxha0mSTGsQe9PTNt2y1MJX6%2FcIGOqUBPIa3AJgtKo6r5xcmZBsivNXrSv0rjf6FA4eF3Nttk0MaaKofO2eI1aVreCoODZB1p7qQaGTTvgle1GXaRQVCOIxuBHi9yZcTdMEK4wtFzQGpQTKs8pZnnez0iOj05Xj%2FIpgnbjTcEBxQBm5iHeOJg09ZXS96h4GKn2O6vM%2BtDvwoovAwsIau7jCW6atPGpqM0xJJDBUITI9a0Zvwo2O4ZIhC1mlf&X-Amz-Signature=1f9c10ac4ac1054a31bd8f0e838d3e2727f174b24889ea7a1f45f02dc83c8cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZXSY33%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQmC%2F%2FiDWtjd%2FmCW%2BQigY6QzWC9A74y8gdodhx2835iAiEA7CYYEEQtLrXDBfjeH8KHz%2FS0QN1yp%2F2bg9P%2BuUP6ZFEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG1cB4pk%2BUSgL9xtircA9i8SX%2F0Va%2BNUyqybh1TkQNzs5rbF6nDytvXQdcR4QYW1jeXqP3ofKPhHhPvt%2BwxUztDurxq4xXQXyNQozcyU5T%2FhFccayawJd8AKVyFCjvx%2Bra9jIiA1ijYq938IWK9r9PVBuSleSe80fpmx8cExqwuL9dYEWfbA%2BLaBvd8x0Zs3tEd9d9wspq3MY%2B2gazfQ1FTpHBQWxMQ7IA9gzO68FU7d19FRv7W%2F08HbAgyG6QjMtAV9dVDWywDQa8mjmqJgcBaklaub2xMgb3cjF2IB1JbIJ3BfvXyprhn7oRcyHsJywJSKBGJx1kimvxqtVhjxND%2FkZ0tdV%2BWm8GG6IHTwBPyYd9tpsDXsO9bcpkc5KSc%2B7rgDjMJK8vfgfdjzuQg9vmNZ2cp0PE8sICHHL6v9Tgdbozcf%2BC7d%2BcJbCzFYVuly1BinYyBAd%2B0WT6cjPrDtVxn3x9j2eSzQli7C6jcJvZ6NeSZMh03wALa%2F28Ysd0sly6w0RmcGGaILIqVd4HxxG2%2Fdue0dLnxLqFqMeVhNKBO7cHx7i9tOhNKGPVVboPJ%2FoMbUfxinrwxVr0QSthRkmYE%2B7A%2Fk%2BPXVKk3Ul88uwyI4AdqCfJz%2FjV7ifEFrxha0mSTGsQe9PTNt2y1MJX6%2FcIGOqUBPIa3AJgtKo6r5xcmZBsivNXrSv0rjf6FA4eF3Nttk0MaaKofO2eI1aVreCoODZB1p7qQaGTTvgle1GXaRQVCOIxuBHi9yZcTdMEK4wtFzQGpQTKs8pZnnez0iOj05Xj%2FIpgnbjTcEBxQBm5iHeOJg09ZXS96h4GKn2O6vM%2BtDvwoovAwsIau7jCW6atPGpqM0xJJDBUITI9a0Zvwo2O4ZIhC1mlf&X-Amz-Signature=cd9be1ea663c0ceea39d7d1397b9af3b1d3c014b909e599bbb7a3a4d46b844ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
