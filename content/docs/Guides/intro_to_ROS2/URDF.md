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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFRWNMB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDx7tNIjyV4Y%2Foc1r9kqL8oZJeUMgEF%2BI2IhsNiVwkpkAiEAvFQEUUvzXfcolNKI1kidXAW6HhGBHzGq1Mx7s4wZX18q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHyt%2BcVZ9WZfFOoefyrcA1KvVnCJVcrLx%2BakDXSvG9KtmcPaz1FJQQ17zI8d7dI30LTWubIbcturEKu5dxuYKKtYiEC%2FX9k1EFRNkDz7XiTZYsYlQMylU%2Fbwi7MI7CTgGiqVRRGR%2BOWnMCbJ0P4Yfd8F1W7VHkZvJVq0vVdPO9%2F9a6bMCq6E5Rnn2m1%2Fr7NghxhbEYmPWTpnJD23ctbwmsgH1MHkys5xHDTDByTIrWgr8dmidScx6tWF7mNtEgrYB%2F8UV4MNkq4%2FMX2wNFu5Djd0wZYijtAUkgzsxo6OdhQAnFOPMqUjQuid27FkDO6TMuJrrxehUqLi4H%2FPrJ647rPnGGmIx1LeOYRssy93Up6cCIp%2B23m%2FMPryVnkDod0t%2Bpc2IZlAqGAKgpD35I03vRXv4ZSSh6d74OvJiyH1EUh498FT7sPLpgcilAV6pXtMiJKgGBXtq3XtAwFDdcrAbRWEI6a42xx3K6tQUahAFufRzV1H2Dng7lJHKYcXip9z235u6VcixirlOFsjmtsi3tdZPMmWK2BEeGFHtUQyConUE8YF8jXiTJW6pdlT2zFjhxNxeXiu1B5zLL5uDpMg6mnckQk%2BwnbOgLMLem0Iz5SVjuLvK5ewpWDVmuCq96sMbRunKoiXv684NqYmMNnaiMQGOqUBmgLZ1Wd8mYSVAA4DujYtLo0Wm7h3pRLMxzf5FzsAYtVNgFIoaMJ%2BeoP4rNllXqX8ceQgGHNlT0Ty%2FE4qa0pLw9uTjRonHj0%2F1f1%2Fl0rn5qoOw7xhTJE4AaXcSEl1bEzCNQvS7s1X7KVs1oARS2la%2BZQ6GXD1FpnphsrTz9F5n39Xoe43qSVZfzsQzAm7kP6TT5hWymA292oEtnRDSh0V31M4Ag1J&X-Amz-Signature=b15630ad1e3ae71923fc684a21d687c1a6667094d904951fb9f45279cf0c36ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFRWNMB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDx7tNIjyV4Y%2Foc1r9kqL8oZJeUMgEF%2BI2IhsNiVwkpkAiEAvFQEUUvzXfcolNKI1kidXAW6HhGBHzGq1Mx7s4wZX18q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHyt%2BcVZ9WZfFOoefyrcA1KvVnCJVcrLx%2BakDXSvG9KtmcPaz1FJQQ17zI8d7dI30LTWubIbcturEKu5dxuYKKtYiEC%2FX9k1EFRNkDz7XiTZYsYlQMylU%2Fbwi7MI7CTgGiqVRRGR%2BOWnMCbJ0P4Yfd8F1W7VHkZvJVq0vVdPO9%2F9a6bMCq6E5Rnn2m1%2Fr7NghxhbEYmPWTpnJD23ctbwmsgH1MHkys5xHDTDByTIrWgr8dmidScx6tWF7mNtEgrYB%2F8UV4MNkq4%2FMX2wNFu5Djd0wZYijtAUkgzsxo6OdhQAnFOPMqUjQuid27FkDO6TMuJrrxehUqLi4H%2FPrJ647rPnGGmIx1LeOYRssy93Up6cCIp%2B23m%2FMPryVnkDod0t%2Bpc2IZlAqGAKgpD35I03vRXv4ZSSh6d74OvJiyH1EUh498FT7sPLpgcilAV6pXtMiJKgGBXtq3XtAwFDdcrAbRWEI6a42xx3K6tQUahAFufRzV1H2Dng7lJHKYcXip9z235u6VcixirlOFsjmtsi3tdZPMmWK2BEeGFHtUQyConUE8YF8jXiTJW6pdlT2zFjhxNxeXiu1B5zLL5uDpMg6mnckQk%2BwnbOgLMLem0Iz5SVjuLvK5ewpWDVmuCq96sMbRunKoiXv684NqYmMNnaiMQGOqUBmgLZ1Wd8mYSVAA4DujYtLo0Wm7h3pRLMxzf5FzsAYtVNgFIoaMJ%2BeoP4rNllXqX8ceQgGHNlT0Ty%2FE4qa0pLw9uTjRonHj0%2F1f1%2Fl0rn5qoOw7xhTJE4AaXcSEl1bEzCNQvS7s1X7KVs1oARS2la%2BZQ6GXD1FpnphsrTz9F5n39Xoe43qSVZfzsQzAm7kP6TT5hWymA292oEtnRDSh0V31M4Ag1J&X-Amz-Signature=46974f9918f3229eca1b953f8cd292e6cfdc9577852037f39ea4efaee85cd68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
