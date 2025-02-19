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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2HLTZQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCBL3otKgM2zhLd%2Bkwdb4z38fWJomt9jfIVTo6augZJ9wIhANvzTmxaGRTxU1h4hfAuHvw5M1mAe3VmBDmfBVspKipHKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUopiS%2FyksrslvwWcq3AORt3g9TO5lQVdr%2BG1fKZpV%2FujXqZWo2CQGZzEH%2BZqSgRZajl8vX%2FKUjpZAnQlntPIW%2FtdsV8HBLeB%2FuCQHE7cNwUjQwv%2F8Rqt4RaS6dzLaJRSpOs3gmrOXA%2BwoqfRA%2BTpM7C93NWggEXMNgcu847QmM%2BD0j1Jap%2FDlYgpn5VJqonyuyg6o5nT6ZXciASHv0fclrca0XUzss%2FsQX7HHrCLTcteE8%2BHHQ%2BXqDN4zdrrSFt4trBsnUO0FrS1crfdV8uMcO2BcBKRk05ilkZ6HCMiVUMGN4aN3pWg6Y31t%2BAvSZDGS6VUqputtjdRCG%2BiyFo4dJLvUO6ZZ0JXrFCBkn6MhWEELSge3RCOG5c1jKJCZZT7I1ETT86lQFV5zyDORdFooVMUjbjDiYIM223MzYgxxakhUhlrUwC7HpYNxm9w1wqdUnL5X968ySFHUn75WDO6JEJwDJw1SKEiusX7saWoHwfdLqxwgL8YMp%2Bh1J6VtYnnnOR261u2bp1fUEYzewCzF9IkTAULNxqutIaisWUZDYDFYiDJ9870Old896gaNTAhw%2FgbKa6PSE%2FaZeHKRQ7%2BfZMh7SyAYRByk8jKUTxXOyraYPCtONVo8vpyuS00FxLgUDoXsdir%2FncBkgTDZ%2Bta9BjqkATppC9trtpQMypK5IF5Uo7SRwBlqp2%2BSINAmSmmPLteFIM7gEOqwpiB32fjRh2VGin2cwdnUwOutJ0d1bXyE7TXMPmZ1TpwbsvrARgyXvHDoR3OKgoagtA7YBiUEjJ%2FgMfoW2qdrs4KLSqIVa0lWbCFSmeI8vj06chJFjujnKZHj3NvXI2GDlHINV6fElV51HbG%2FSxBTvH2OLRpjfMU3vf%2BeDpJl&X-Amz-Signature=ee1ed49084e7441af264193c32c65aa6787006585d587096a7fbbe86cafebd7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2HLTZQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCBL3otKgM2zhLd%2Bkwdb4z38fWJomt9jfIVTo6augZJ9wIhANvzTmxaGRTxU1h4hfAuHvw5M1mAe3VmBDmfBVspKipHKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUopiS%2FyksrslvwWcq3AORt3g9TO5lQVdr%2BG1fKZpV%2FujXqZWo2CQGZzEH%2BZqSgRZajl8vX%2FKUjpZAnQlntPIW%2FtdsV8HBLeB%2FuCQHE7cNwUjQwv%2F8Rqt4RaS6dzLaJRSpOs3gmrOXA%2BwoqfRA%2BTpM7C93NWggEXMNgcu847QmM%2BD0j1Jap%2FDlYgpn5VJqonyuyg6o5nT6ZXciASHv0fclrca0XUzss%2FsQX7HHrCLTcteE8%2BHHQ%2BXqDN4zdrrSFt4trBsnUO0FrS1crfdV8uMcO2BcBKRk05ilkZ6HCMiVUMGN4aN3pWg6Y31t%2BAvSZDGS6VUqputtjdRCG%2BiyFo4dJLvUO6ZZ0JXrFCBkn6MhWEELSge3RCOG5c1jKJCZZT7I1ETT86lQFV5zyDORdFooVMUjbjDiYIM223MzYgxxakhUhlrUwC7HpYNxm9w1wqdUnL5X968ySFHUn75WDO6JEJwDJw1SKEiusX7saWoHwfdLqxwgL8YMp%2Bh1J6VtYnnnOR261u2bp1fUEYzewCzF9IkTAULNxqutIaisWUZDYDFYiDJ9870Old896gaNTAhw%2FgbKa6PSE%2FaZeHKRQ7%2BfZMh7SyAYRByk8jKUTxXOyraYPCtONVo8vpyuS00FxLgUDoXsdir%2FncBkgTDZ%2Bta9BjqkATppC9trtpQMypK5IF5Uo7SRwBlqp2%2BSINAmSmmPLteFIM7gEOqwpiB32fjRh2VGin2cwdnUwOutJ0d1bXyE7TXMPmZ1TpwbsvrARgyXvHDoR3OKgoagtA7YBiUEjJ%2FgMfoW2qdrs4KLSqIVa0lWbCFSmeI8vj06chJFjujnKZHj3NvXI2GDlHINV6fElV51HbG%2FSxBTvH2OLRpjfMU3vf%2BeDpJl&X-Amz-Signature=5a977806215e855f14fb281464635f4ee4b3470f978699858d30b3f18200a8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
