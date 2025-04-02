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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UHZVBV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD8%2BQ2UCmC%2BXCJCYmoXSPdZotDwbVGYPuj3LvH4cSjSEQIhAPKiHRxSIy29dkDn8tbvFvaXt7gou2wXgmZRxNRWXKYvKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj4Dq%2BzNLBt59lrCoq3AML3euFiItCgQOkENG7nwXQujm9nCM%2FoHlKF8JErui5mzYHwetCWm%2BCdTHMkcPpoWMAJz6SwNmgV4AEVjjmXfs89w6XEwnlzo1BiP%2BgR4ypvyXu6OrCwuA9wfDCDEm%2BASLwujy6hfN4Hb23kzchHlfrpDbAD%2FB5tHU5ufz0fxpyHhS05NQxduTuOPJTur0OLAw1eQPz5y%2FGC8H2QWRAAue4eW01wwFikBq2gBd6avWIdRDPc7A37UENeUbF1QoYedOR7REppiaW%2FPe0U8aouL%2FuIEvCiCnNmPAPu%2BLZQ9Yn5umyocUciX9gnIbZpcml7onyj60U6iGL2Z360FXls0VCYfEzmmmRnhsUgUpSLmEGAINZThYobPXslsVHUWYvkKJYlx45mTEHS7jIJvM%2FUSBMOQYFiCxs5qXUPlFRwUALwzXA7UlyzkXJoB2s0srnv%2BKdReKWNfR1NBotpeBnuycFLenxodylUJHqbClwrgI3omWvXAxq9jYEJvngy6pHOFySNe0qJ9P%2Fk8%2BrOpyEV%2BuZPsZ7eagKyAOry1OyP7qX0lpqqoofT1TnFoj6kRfJEfA6a2PxWQOMuspOEgdSEiZdMmTbi0luy8dBp%2Bw8euKLFPNhQTSy76hNituyzTDjpLa%2FBjqkAVSBZkmNHJi71Av44ICjR5sUMBijO3pGf8P1gCeLTpU3zyNHEyYgemLNg%2FETw%2FAkh4RCOnvkbKAbzUdWqVF1ovNT1LC33hrLlOk57Xk%2BKywboEp7tSMPOVNxlpxv5jx0vDj9hRy6x12o1H9w4xwBLZMFHzllOLVEleJjKWy7jzjSm07PHMIugobLVSAE9EM35v9c%2FQ6pFdAnQN0%2Bzllt7XtH%2FINn&X-Amz-Signature=dc1921fc8d6fb36402d6c3a6f9a4cd258487ca0964acf51e9bf36dd18e9319d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UHZVBV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD8%2BQ2UCmC%2BXCJCYmoXSPdZotDwbVGYPuj3LvH4cSjSEQIhAPKiHRxSIy29dkDn8tbvFvaXt7gou2wXgmZRxNRWXKYvKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj4Dq%2BzNLBt59lrCoq3AML3euFiItCgQOkENG7nwXQujm9nCM%2FoHlKF8JErui5mzYHwetCWm%2BCdTHMkcPpoWMAJz6SwNmgV4AEVjjmXfs89w6XEwnlzo1BiP%2BgR4ypvyXu6OrCwuA9wfDCDEm%2BASLwujy6hfN4Hb23kzchHlfrpDbAD%2FB5tHU5ufz0fxpyHhS05NQxduTuOPJTur0OLAw1eQPz5y%2FGC8H2QWRAAue4eW01wwFikBq2gBd6avWIdRDPc7A37UENeUbF1QoYedOR7REppiaW%2FPe0U8aouL%2FuIEvCiCnNmPAPu%2BLZQ9Yn5umyocUciX9gnIbZpcml7onyj60U6iGL2Z360FXls0VCYfEzmmmRnhsUgUpSLmEGAINZThYobPXslsVHUWYvkKJYlx45mTEHS7jIJvM%2FUSBMOQYFiCxs5qXUPlFRwUALwzXA7UlyzkXJoB2s0srnv%2BKdReKWNfR1NBotpeBnuycFLenxodylUJHqbClwrgI3omWvXAxq9jYEJvngy6pHOFySNe0qJ9P%2Fk8%2BrOpyEV%2BuZPsZ7eagKyAOry1OyP7qX0lpqqoofT1TnFoj6kRfJEfA6a2PxWQOMuspOEgdSEiZdMmTbi0luy8dBp%2Bw8euKLFPNhQTSy76hNituyzTDjpLa%2FBjqkAVSBZkmNHJi71Av44ICjR5sUMBijO3pGf8P1gCeLTpU3zyNHEyYgemLNg%2FETw%2FAkh4RCOnvkbKAbzUdWqVF1ovNT1LC33hrLlOk57Xk%2BKywboEp7tSMPOVNxlpxv5jx0vDj9hRy6x12o1H9w4xwBLZMFHzllOLVEleJjKWy7jzjSm07PHMIugobLVSAE9EM35v9c%2FQ6pFdAnQN0%2Bzllt7XtH%2FINn&X-Amz-Signature=84a70408c9a10bf6b7354d5561ef75db3d269623a91d1f13f140084534bd3f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
