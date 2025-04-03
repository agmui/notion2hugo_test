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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XSWBML%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcUO%2BCEoc7WmPmrL5wT8XN3GyoSmiNWmjCs83mZJOkwAIgNQHrt01SYK1T18Eb9aH2mSKVIBkc48Q8%2BWAqCbqUx3UqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYt4pFH%2BjpQkUulHCrcA384X0%2FYMJSQPrdQcWxPsmFSwAoaghOcIBWnOafMPvYVYt6rVgYLnh%2FWn6CGTgB0t64jM87cDVjsEha5MYnT7yK1HVtnIqMY78hXZeOucimLVduKSZ0SltDFJkpZkqveLzS1BWFAupp%2FHUen7xK5Qq%2FfoR2YyRs1OVMcjtWA1M8OJG9izA0azLM4xgueSSZ2wWiQAFjZCl4HBXRRnhp8CP7wVOeFzEJP%2FrCVgpxEZuR6t%2BFECKPJ0a4AFloP8%2BzRjEElYuMTVtg4P9t%2Bk9GYcF9X%2FAlJF1q2TysSNZ%2FYPP0scXWxEsLu4Y1sqQ5GnqtcxIXhOzhNuckuN5blVfgrwHrU4eJOV938Ff2bmN8IJvXnf%2BZa6r5L%2FV3N39o4EYCStf41DNGEPRpQ9w8P64rAAVEGglekquKLRm4jJrfeiU1rL%2FRQSydzigjEbnHMy9g3OfintjFzVFryh8v34fifnJF56oCsD94%2BxLALfTyzmXvVsifCGOeGFDDMqKFc%2Fn8UZ49mQev6X16IHvO7a%2FlghOejW7yNM%2BbsbstQEQ7Od4JxvhnwPN0HPaLWpSbrlOCFLdiN576XLx3ZuUffHF54wN05a8flYHFfRxacmincdI2ILuufCJExzA07CT%2BYMMSyur8GOqUB7IkpBHWM80hTl5lKE0cnY%2BrPedQs18zWunPEc6agaL2iWyw5JSn2w%2FFBksziqw%2F4TKbV7o1gi2Ae2cyBkDEFo9pGHtRrGYLKhyF%2BsOYcF1FH1GmNwYZellsMObIlbIJmieGfIYmot9ybLzZyxu6mfq2%2Bx4Dgp5n%2BkIWjxqcw%2B39QCv%2FEIOvxfr8FJRJeXRaawv0DqhSxPUFTA6Bqnjizn64tgbCm&X-Amz-Signature=970f9bcf8feb810e5395b62b5c176d61ff290f52b2751bc82700b5b9aaf86927&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XSWBML%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcUO%2BCEoc7WmPmrL5wT8XN3GyoSmiNWmjCs83mZJOkwAIgNQHrt01SYK1T18Eb9aH2mSKVIBkc48Q8%2BWAqCbqUx3UqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYt4pFH%2BjpQkUulHCrcA384X0%2FYMJSQPrdQcWxPsmFSwAoaghOcIBWnOafMPvYVYt6rVgYLnh%2FWn6CGTgB0t64jM87cDVjsEha5MYnT7yK1HVtnIqMY78hXZeOucimLVduKSZ0SltDFJkpZkqveLzS1BWFAupp%2FHUen7xK5Qq%2FfoR2YyRs1OVMcjtWA1M8OJG9izA0azLM4xgueSSZ2wWiQAFjZCl4HBXRRnhp8CP7wVOeFzEJP%2FrCVgpxEZuR6t%2BFECKPJ0a4AFloP8%2BzRjEElYuMTVtg4P9t%2Bk9GYcF9X%2FAlJF1q2TysSNZ%2FYPP0scXWxEsLu4Y1sqQ5GnqtcxIXhOzhNuckuN5blVfgrwHrU4eJOV938Ff2bmN8IJvXnf%2BZa6r5L%2FV3N39o4EYCStf41DNGEPRpQ9w8P64rAAVEGglekquKLRm4jJrfeiU1rL%2FRQSydzigjEbnHMy9g3OfintjFzVFryh8v34fifnJF56oCsD94%2BxLALfTyzmXvVsifCGOeGFDDMqKFc%2Fn8UZ49mQev6X16IHvO7a%2FlghOejW7yNM%2BbsbstQEQ7Od4JxvhnwPN0HPaLWpSbrlOCFLdiN576XLx3ZuUffHF54wN05a8flYHFfRxacmincdI2ILuufCJExzA07CT%2BYMMSyur8GOqUB7IkpBHWM80hTl5lKE0cnY%2BrPedQs18zWunPEc6agaL2iWyw5JSn2w%2FFBksziqw%2F4TKbV7o1gi2Ae2cyBkDEFo9pGHtRrGYLKhyF%2BsOYcF1FH1GmNwYZellsMObIlbIJmieGfIYmot9ybLzZyxu6mfq2%2Bx4Dgp5n%2BkIWjxqcw%2B39QCv%2FEIOvxfr8FJRJeXRaawv0DqhSxPUFTA6Bqnjizn64tgbCm&X-Amz-Signature=b8db0dacd2b451d72d2b260a0f280bf15b0e56732ed30293889df920b1e601d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
