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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPFPY2X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB6eTpEhts0bXLbW6pvu70nVaPCGmASK9iKkU5Tyc7IgIgeQdpGmw8RDPign1CDGiTyuXJMIL5Po7RlpdZ20Xb63wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTYb2Z1gLGpvOdqvCrcAxAskKPIDfaNWQikFOGMCcKRkaHwWTuJDFOxR%2BTFbTHxk9WhuX366p9LrvmEp8DXkUnAJaS2ku2WRLV4yDCBm7VfL%2BDr5Ix3cJDUv4yyLS2BBId%2BBjPJ3%2BEF5wUxpC7S6ikK7xWiEK%2FMGOJMQrq0ygK559UUldcIA1St9CETDp01UMTuffrs6TUQSYj4oL7vhnTbtQO89RvKC7InIoRIUA%2Boa9IOi672CTsgtrrkHhGLUJ7FUrAvzyMM%2BzUxHZ7CXQMPCVnJ6hxxNIR1ZEUOp%2BCge9lgKtbTgUw34G9JRPQeW%2FcHKs8466iEtB%2FFXAqSzfA2swfSlW5eqMm8mYluz7r7zrJZ9w0iXFjqAHcTpuPlVD9eZIviO7PkPf5aXR9QHIQ2h8cIJEgJ02RI7Evnv6Nt6ZOmQME2I9vzA%2B70CRJ65jybPdcfwPZ3TL7NlFIOhZOzvnc2feFe9BDCWJWbKhva5U8rytvLmktV%2BPAJdxT2YQ02xV4bERxTDfDvAidO0Et7w9T5m1d9WY4gxrwQYUhK38Nk6oqjynctB7Qig%2FYm%2BtQaSCwpDVoGMOT9Cv%2BzSBoA0lXATplkC8vSEp8r7EKV4%2FlWj1jU%2Bjm34ZFT7YRmmD6t6uGiWH066ILpMPXMzr4GOqUB%2B1fKd83pOq%2FsE3G5RvUXN0xt2eO22fpgWudjo63ziwb9OklwyM5L0zjUCt63RMZUty9IApkf0uCLCbrjOGCTLSpiEWvScjhY%2FLWgFN3Gokpwit4li1b%2BZw4Z6XULdg37Z8VkPJTxHMLlLj%2B3WYcgYOVC0puT8j0I53aw1VgkkC9sBGfIXfK6w5tyI7l8rjnEuOYx83%2Bmt9Qa0rgoiyLJbbT1tDDf&X-Amz-Signature=7acce7356c03206db35071081e8fbf5322c18c9d29a32549e178c71b6d613938&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPFPY2X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB6eTpEhts0bXLbW6pvu70nVaPCGmASK9iKkU5Tyc7IgIgeQdpGmw8RDPign1CDGiTyuXJMIL5Po7RlpdZ20Xb63wqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTYb2Z1gLGpvOdqvCrcAxAskKPIDfaNWQikFOGMCcKRkaHwWTuJDFOxR%2BTFbTHxk9WhuX366p9LrvmEp8DXkUnAJaS2ku2WRLV4yDCBm7VfL%2BDr5Ix3cJDUv4yyLS2BBId%2BBjPJ3%2BEF5wUxpC7S6ikK7xWiEK%2FMGOJMQrq0ygK559UUldcIA1St9CETDp01UMTuffrs6TUQSYj4oL7vhnTbtQO89RvKC7InIoRIUA%2Boa9IOi672CTsgtrrkHhGLUJ7FUrAvzyMM%2BzUxHZ7CXQMPCVnJ6hxxNIR1ZEUOp%2BCge9lgKtbTgUw34G9JRPQeW%2FcHKs8466iEtB%2FFXAqSzfA2swfSlW5eqMm8mYluz7r7zrJZ9w0iXFjqAHcTpuPlVD9eZIviO7PkPf5aXR9QHIQ2h8cIJEgJ02RI7Evnv6Nt6ZOmQME2I9vzA%2B70CRJ65jybPdcfwPZ3TL7NlFIOhZOzvnc2feFe9BDCWJWbKhva5U8rytvLmktV%2BPAJdxT2YQ02xV4bERxTDfDvAidO0Et7w9T5m1d9WY4gxrwQYUhK38Nk6oqjynctB7Qig%2FYm%2BtQaSCwpDVoGMOT9Cv%2BzSBoA0lXATplkC8vSEp8r7EKV4%2FlWj1jU%2Bjm34ZFT7YRmmD6t6uGiWH066ILpMPXMzr4GOqUB%2B1fKd83pOq%2FsE3G5RvUXN0xt2eO22fpgWudjo63ziwb9OklwyM5L0zjUCt63RMZUty9IApkf0uCLCbrjOGCTLSpiEWvScjhY%2FLWgFN3Gokpwit4li1b%2BZw4Z6XULdg37Z8VkPJTxHMLlLj%2B3WYcgYOVC0puT8j0I53aw1VgkkC9sBGfIXfK6w5tyI7l8rjnEuOYx83%2Bmt9Qa0rgoiyLJbbT1tDDf&X-Amz-Signature=a8067ab929d8a8e150fd3003083bbb69eab6365f029286090ea1a471cb4bc6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
