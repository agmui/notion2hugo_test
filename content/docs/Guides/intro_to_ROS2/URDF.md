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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXP6HJ2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCFqzu%2FmyNJCfoPwTNhqLshfyHhmXaVU5I7OqdR%2F6PHyAIhAM8hDPaKFDhpNuaW%2Fy2WBVaVjet3CkXkNhxp5siyYkXRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUS4efIBArWgZ5zM8q3ANOHFQlpFnKyIb6pEfKsEsSHZXS4iD7JGhJLBlAQUOmMKTbztwAw5gDhdkNTSqA8FpbiDbA5M13vOrFPpv4TBSOy7vD82mInFtH6iVCgACitENnzAMbsftzqXgeRwug5HB1yC6FIwbjwCISJy3v4TMNCpi9duN7UnCaOfRCAdGMNHmNZdHgDEQE7C9y7I9g1dDeyJKI5CkoeZxji%2BT30X1f7v%2F8ZHIe94apDUk1vT3OiD0Hj6Khz1jDfF64Ah9WOOAay30Y8mmmFqmIRKlHfBxQpEiVYP92P8MGeZJ7CrbeQxRimdArlndzyhTVocI2ntLmJLwF6LnfhAncBAXlJpEPFSmq7KpFbLapuRuSJsAKJi4tOnk56OM5bG6tLdPfcpeofSL%2F%2B12UuN1Tx2kZ4WhNGgRiu1ckhrE4Ap2dhCVdXVVxQp%2BU%2BSAtgg68PUVK2R4HHeipzQHmP1K3UiBhu8J%2FPmBG%2BPt%2FVvRmXTgEkW%2BC90qalwjpiv6vuhelySx1WVABN7b%2BCWU%2Bi8BNb7i09kCDnomK9gFQrGuFJO1Q%2BT5nUrB1BB6aqHeLnsUuHjE7Hl4WOA3XXGEC8s6lUC9ZaBCB4qucvewdGts%2FtJx0Z8RxoB%2F8BRjmk5N0zRtkmDCL2%2Fa%2BBjqkAVZmHSBivdTV4%2Fcqn6ocAdiUBbL3DFigCHX1K1XNOtBY2J%2FGOh9ujJDicz7y8FF6YG9L8SfMB2KHktuDKYM10W8P%2FyoNqGApqB8F5BwE0GOk6a5WnGRRgGceb0l16I7XZkfgTsPDfDlfiTU69wVttyFdHxArjJ4nS2kARjDB2C6PoxThG9bDXvGTswR%2FQgCIrAb6IyQosAqT4GSs1eaytZO6IOcC&X-Amz-Signature=9ce80cfb4c09be97e40885154869fecd788051f84bfe297ceb46d90259e0fe70&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXP6HJ2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCFqzu%2FmyNJCfoPwTNhqLshfyHhmXaVU5I7OqdR%2F6PHyAIhAM8hDPaKFDhpNuaW%2Fy2WBVaVjet3CkXkNhxp5siyYkXRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUS4efIBArWgZ5zM8q3ANOHFQlpFnKyIb6pEfKsEsSHZXS4iD7JGhJLBlAQUOmMKTbztwAw5gDhdkNTSqA8FpbiDbA5M13vOrFPpv4TBSOy7vD82mInFtH6iVCgACitENnzAMbsftzqXgeRwug5HB1yC6FIwbjwCISJy3v4TMNCpi9duN7UnCaOfRCAdGMNHmNZdHgDEQE7C9y7I9g1dDeyJKI5CkoeZxji%2BT30X1f7v%2F8ZHIe94apDUk1vT3OiD0Hj6Khz1jDfF64Ah9WOOAay30Y8mmmFqmIRKlHfBxQpEiVYP92P8MGeZJ7CrbeQxRimdArlndzyhTVocI2ntLmJLwF6LnfhAncBAXlJpEPFSmq7KpFbLapuRuSJsAKJi4tOnk56OM5bG6tLdPfcpeofSL%2F%2B12UuN1Tx2kZ4WhNGgRiu1ckhrE4Ap2dhCVdXVVxQp%2BU%2BSAtgg68PUVK2R4HHeipzQHmP1K3UiBhu8J%2FPmBG%2BPt%2FVvRmXTgEkW%2BC90qalwjpiv6vuhelySx1WVABN7b%2BCWU%2Bi8BNb7i09kCDnomK9gFQrGuFJO1Q%2BT5nUrB1BB6aqHeLnsUuHjE7Hl4WOA3XXGEC8s6lUC9ZaBCB4qucvewdGts%2FtJx0Z8RxoB%2F8BRjmk5N0zRtkmDCL2%2Fa%2BBjqkAVZmHSBivdTV4%2Fcqn6ocAdiUBbL3DFigCHX1K1XNOtBY2J%2FGOh9ujJDicz7y8FF6YG9L8SfMB2KHktuDKYM10W8P%2FyoNqGApqB8F5BwE0GOk6a5WnGRRgGceb0l16I7XZkfgTsPDfDlfiTU69wVttyFdHxArjJ4nS2kARjDB2C6PoxThG9bDXvGTswR%2FQgCIrAb6IyQosAqT4GSs1eaytZO6IOcC&X-Amz-Signature=1bc5ef9b2eba703de7c252e3278b431fc2090a0b5f892a9b81ee3165fcf890e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
