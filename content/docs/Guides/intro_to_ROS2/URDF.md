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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=45a01afa1ce2264f2e62f0adc412af5eac3f80514ed6a183f821d37ca4b27734&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=b433462a74f059c2297934065dc2bf14cf3b220f88f226886a766bf5a9acc461&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
