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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4JWILS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqpwdbl5L5J5E59N8zgHcMD%2FbhqXm4J9w1sy1unW9mgAiBhJ8AmbOKelfpk44IsV4gsD%2FU6rmJmfhs%2B9aqhBPHc%2FiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoKZy6GCpCl4LiRQKtwDCQDbW94KehFkdI%2B%2BxCsGUK5mrfbLnYprOAwIDIgSEDTQpXr36AysrqqJ4p9T84CXpPAjxAM6lOmOwStraQ%2FK7jTC7qTWgelEjNPL8UklwLRjzKYAQagaWcvSptmBueo%2BO9%2FZpAuOrlJvANKWeEb3P%2BdeSdJtilsz82rNci%2BJQ0eUcZ1p4I2z6ZdAu0m4UR6g5k7ttTaderioH%2Fa4Jf4xGdvr%2B21vz%2B4T5Vu2sPaBCxKTJyopW8%2B53LeMVBmMOVteXQIwsrAoWGB3r5YruFDIc%2BsAPGuJrALeVwaqCYk49Nj0ZSSWyqMU%2Bht3WBMM1NIc7ZSesbZ0cOokF5SAldSarJ69qrX5w3QjzFGN4sqAZOdISYceTpJ0m%2BKE85dVNOpdh%2F7aTCZtTxdKubWNdG7xGLVTCV9zjp7GXoVdwwf94KxEOELm16e7kxC5SFgE6lACZFRnO5JXhGdrTOhtyxTet9z%2FR9fkGumndMDcSrGbjJ4QPX1ZdttsTEq42PqgeD59Q7E05WIFqrmWvy7IS90lCmU36DJrbAfHIgWEG7Avu8Hy2tJYic1NB0PkzWGByYLak1dhCIDvTLRNL7d8KleR03fP8t96tiASbW4L3%2B8BQL1%2FMbMoU9O%2Bk9aNRIQwuIG%2BwwY6pgFfdBlj2FSC9IiNUCM2mmWuQQSQeWm7C3t3Xd7x3OAIKe3NUhhoH6O%2FqWiDoSgwPpGCIRvhco%2F3vL%2BRo22xMr1Y5%2Fr%2Fgnhha%2FLkCRayW48I5V1zcKlE0rjg17bUaLvU0owDAYDD1A67c7uwVw1GjtqKtIhaQYLmCqy0J44tPrVzn1uOTlLfci67%2B4skM2P%2FI2IdsChTaUS3x2ARBPFEvhIJt6TiiI3o&X-Amz-Signature=5593731f196acd45490b98f7eceba3e3159527d4553ed0237347954e08fe125f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4JWILS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqpwdbl5L5J5E59N8zgHcMD%2FbhqXm4J9w1sy1unW9mgAiBhJ8AmbOKelfpk44IsV4gsD%2FU6rmJmfhs%2B9aqhBPHc%2FiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXoKZy6GCpCl4LiRQKtwDCQDbW94KehFkdI%2B%2BxCsGUK5mrfbLnYprOAwIDIgSEDTQpXr36AysrqqJ4p9T84CXpPAjxAM6lOmOwStraQ%2FK7jTC7qTWgelEjNPL8UklwLRjzKYAQagaWcvSptmBueo%2BO9%2FZpAuOrlJvANKWeEb3P%2BdeSdJtilsz82rNci%2BJQ0eUcZ1p4I2z6ZdAu0m4UR6g5k7ttTaderioH%2Fa4Jf4xGdvr%2B21vz%2B4T5Vu2sPaBCxKTJyopW8%2B53LeMVBmMOVteXQIwsrAoWGB3r5YruFDIc%2BsAPGuJrALeVwaqCYk49Nj0ZSSWyqMU%2Bht3WBMM1NIc7ZSesbZ0cOokF5SAldSarJ69qrX5w3QjzFGN4sqAZOdISYceTpJ0m%2BKE85dVNOpdh%2F7aTCZtTxdKubWNdG7xGLVTCV9zjp7GXoVdwwf94KxEOELm16e7kxC5SFgE6lACZFRnO5JXhGdrTOhtyxTet9z%2FR9fkGumndMDcSrGbjJ4QPX1ZdttsTEq42PqgeD59Q7E05WIFqrmWvy7IS90lCmU36DJrbAfHIgWEG7Avu8Hy2tJYic1NB0PkzWGByYLak1dhCIDvTLRNL7d8KleR03fP8t96tiASbW4L3%2B8BQL1%2FMbMoU9O%2Bk9aNRIQwuIG%2BwwY6pgFfdBlj2FSC9IiNUCM2mmWuQQSQeWm7C3t3Xd7x3OAIKe3NUhhoH6O%2FqWiDoSgwPpGCIRvhco%2F3vL%2BRo22xMr1Y5%2Fr%2Fgnhha%2FLkCRayW48I5V1zcKlE0rjg17bUaLvU0owDAYDD1A67c7uwVw1GjtqKtIhaQYLmCqy0J44tPrVzn1uOTlLfci67%2B4skM2P%2FI2IdsChTaUS3x2ARBPFEvhIJt6TiiI3o&X-Amz-Signature=c85532098e55b401ebb8521959b598d004322427d9ee3ed471c963607547ae9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
