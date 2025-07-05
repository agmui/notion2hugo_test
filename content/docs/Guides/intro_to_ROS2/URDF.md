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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTATSN6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDRGW3fgdiZPgW7mysJfTleZDQbAXyl4WGuqDTFiO5aAQIhAJPhdyRT5cW1PKDEXW3dn2htYnqNO7058IdjBIRU8RZLKv8DCEcQABoMNjM3NDIzMTgzODA1IgzY8N8Ps06AHbPwQIkq3APVFxGBZZ7wbxoTKGzeu4Icf%2FpSXa1CJD4gX3EE2csi3WU9TXGTD0p8Z13otI1tOsrKoT0TQnZmLq22CTatraLlPOhWU%2BAYktG6jElhj6myfYqssMU7A7dwpYWYKyUOdLzN%2FeIPOkXknc9aBSu%2BhYAMeJmAj2GMEwuGuUb4gSFpGWZQSrxPgI3PXyXYwN1l8o3NCHsXBNW%2FVc6FlKSr2ljNEMAO7c7HN2hI7qdoLna58yXjl%2BEYQKJCt1ZnrgVMr0DVkgBBZ6VZFD6P97g3fZaW%2BrCz9r1m5NyU6QAdb2a4QAwZEukzMkfDbl9VSlMKA6fulve0pUdfq426J64%2FSKWKr5ckifft4tsHHxhcExp9fR1w1jYd%2Fl%2BMLIMaV0qrA2Wvb%2FE3ya3f7VusxrfQBdJVLGKies2sSh3B1QiwGs0dbvSnCPPnfLvJHTyfRIAq18QOtItL7G6iN5NWU1ybBhQglXE5rvcFD22VhjlDfwPZLdE3VsHUPk0WMeUgrz5Aat%2FwBtsx6%2FN8dNnBo5LHyUbzir8q51%2FvYJbcUDHZ%2FDpVJ5SHGJFZ367WS%2BDRhliRQiHyF%2FNFvbEqOI19N3He7XwCn7MZSqF3aIXRQkK6pTjzvvY7xylIKiT1dlvYzzC81KTDBjqkAcG83JgYhVuN2oueD3oGQ0d8%2BKd2m%2BqokRZqw%2FgTUZ5ckBKavL6RXIBkqvIQLkH%2BI6RTDeesYhE%2FebXjaTxH8KwcBTeYqMYwYIW0C5oDQeM0Za3LzEZIqTkyWVqzpWFiesaj0KJ2Xrf5UMp3bJroADX54kFeRET%2FFuTxusj1CPDVBB%2F8wKfUUmegbKZo6P4coy1g6g6cqSCs71hR96N2i29VuhBN&X-Amz-Signature=d749cdf93826eb7f909a4dbf8e9d089cf657031422eeaad1934217d38412c515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTATSN6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDRGW3fgdiZPgW7mysJfTleZDQbAXyl4WGuqDTFiO5aAQIhAJPhdyRT5cW1PKDEXW3dn2htYnqNO7058IdjBIRU8RZLKv8DCEcQABoMNjM3NDIzMTgzODA1IgzY8N8Ps06AHbPwQIkq3APVFxGBZZ7wbxoTKGzeu4Icf%2FpSXa1CJD4gX3EE2csi3WU9TXGTD0p8Z13otI1tOsrKoT0TQnZmLq22CTatraLlPOhWU%2BAYktG6jElhj6myfYqssMU7A7dwpYWYKyUOdLzN%2FeIPOkXknc9aBSu%2BhYAMeJmAj2GMEwuGuUb4gSFpGWZQSrxPgI3PXyXYwN1l8o3NCHsXBNW%2FVc6FlKSr2ljNEMAO7c7HN2hI7qdoLna58yXjl%2BEYQKJCt1ZnrgVMr0DVkgBBZ6VZFD6P97g3fZaW%2BrCz9r1m5NyU6QAdb2a4QAwZEukzMkfDbl9VSlMKA6fulve0pUdfq426J64%2FSKWKr5ckifft4tsHHxhcExp9fR1w1jYd%2Fl%2BMLIMaV0qrA2Wvb%2FE3ya3f7VusxrfQBdJVLGKies2sSh3B1QiwGs0dbvSnCPPnfLvJHTyfRIAq18QOtItL7G6iN5NWU1ybBhQglXE5rvcFD22VhjlDfwPZLdE3VsHUPk0WMeUgrz5Aat%2FwBtsx6%2FN8dNnBo5LHyUbzir8q51%2FvYJbcUDHZ%2FDpVJ5SHGJFZ367WS%2BDRhliRQiHyF%2FNFvbEqOI19N3He7XwCn7MZSqF3aIXRQkK6pTjzvvY7xylIKiT1dlvYzzC81KTDBjqkAcG83JgYhVuN2oueD3oGQ0d8%2BKd2m%2BqokRZqw%2FgTUZ5ckBKavL6RXIBkqvIQLkH%2BI6RTDeesYhE%2FebXjaTxH8KwcBTeYqMYwYIW0C5oDQeM0Za3LzEZIqTkyWVqzpWFiesaj0KJ2Xrf5UMp3bJroADX54kFeRET%2FFuTxusj1CPDVBB%2F8wKfUUmegbKZo6P4coy1g6g6cqSCs71hR96N2i29VuhBN&X-Amz-Signature=f691aeaa8b5a3a67d90e09509912a9e7d82f1d224656a78cf661cfb7e756df97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
