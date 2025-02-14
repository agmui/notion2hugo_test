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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IQQQ7WC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDg%2Bov%2FRXMFcToqnBd8HuiKsL7uGf1tTzfSUDOflD5ttwIgMuyV%2FfcAJOVaSlQssLHZeKIPPgTLzpP0uPxPez1xP4Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNfhr7iSMEjwWJHAUyrcAxeREJdhQ%2FLlY%2F%2FUhXHQH1IIx1gFmfabAB6o0OqWhlmQya9rZbcTpokvCkcUW%2BLOsNCKVKYAySbH2VKKohEOKR3a2L5tiIf5FOxcRIUQbm%2FmAHo8kJBDDEWor25Or%2FLaJn6BB0Akq34t4XWgfhdD3h86oTi5gJc6vnNVdBn0d2J0Iw3L6KpaqRX3%2BYwN4ToDESo7i9gZVIbXO1qjz6G96zsXLA0mZ48HcHx%2FjvBpZSwAKqfvq3XSAkKAIU6pBxkf5NbgrVYIX8JL1Um6qyxCjN2ICKd3DqIK5ZlWGLng%2F%2BncTFp4sorQUUdIs6fvy46fiNFuiPJl6A41lt508b%2FStSOztANe1S87v0ILdSq%2FT5vo81JWnWmUoBzkUhHoATyH1WmZtNQc3uPaHvd4uuALwMaCMq%2BstbJpKDCaItxnJpoOsh6KEn%2FPF9y6agFr7Y8FMP0byzDJ9FBu1vh50DRzH6hjIIY%2FsR%2BwVvTPAuecfjziyiJ9kbMP5HKO0E2gWCqeqH9spxFUkJD34Snk6Txg8t22R1WmNaX%2B9ljOlpdCdhtdUcbzppAJrAQADupIELQFdNbmS0SJ%2FeNlxAqblmbVyyClFdOey%2F1r54%2BFwdqyZhu1lH3xI6v1zaDjQQyfMMPpu70GOqUBd2diSPU62xmm%2FGyyuh6jROfL19LlkmeJt6W0HYCoekryStzkBwkMC6Z1tUBe2jjr6cNS%2FhgndIjeXpnCIEYQbbZJZzc2pPs25QT6zAQ3t5iHJNBYHHKyUuQmZbEnAvEaG3gH3lRCrnmztnptBelwEySCROQ7JDjpv%2FFneNvf%2BmpBEw7IAuCz7%2FpYhSFb1bysuKj%2FxMaX1A7Sagra2GrULCQrOy1M&X-Amz-Signature=a3c4a062ebaa6d8f70118e1a5332c369bfa318ed7caff261c3e5e066f84eec74&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IQQQ7WC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDg%2Bov%2FRXMFcToqnBd8HuiKsL7uGf1tTzfSUDOflD5ttwIgMuyV%2FfcAJOVaSlQssLHZeKIPPgTLzpP0uPxPez1xP4Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNfhr7iSMEjwWJHAUyrcAxeREJdhQ%2FLlY%2F%2FUhXHQH1IIx1gFmfabAB6o0OqWhlmQya9rZbcTpokvCkcUW%2BLOsNCKVKYAySbH2VKKohEOKR3a2L5tiIf5FOxcRIUQbm%2FmAHo8kJBDDEWor25Or%2FLaJn6BB0Akq34t4XWgfhdD3h86oTi5gJc6vnNVdBn0d2J0Iw3L6KpaqRX3%2BYwN4ToDESo7i9gZVIbXO1qjz6G96zsXLA0mZ48HcHx%2FjvBpZSwAKqfvq3XSAkKAIU6pBxkf5NbgrVYIX8JL1Um6qyxCjN2ICKd3DqIK5ZlWGLng%2F%2BncTFp4sorQUUdIs6fvy46fiNFuiPJl6A41lt508b%2FStSOztANe1S87v0ILdSq%2FT5vo81JWnWmUoBzkUhHoATyH1WmZtNQc3uPaHvd4uuALwMaCMq%2BstbJpKDCaItxnJpoOsh6KEn%2FPF9y6agFr7Y8FMP0byzDJ9FBu1vh50DRzH6hjIIY%2FsR%2BwVvTPAuecfjziyiJ9kbMP5HKO0E2gWCqeqH9spxFUkJD34Snk6Txg8t22R1WmNaX%2B9ljOlpdCdhtdUcbzppAJrAQADupIELQFdNbmS0SJ%2FeNlxAqblmbVyyClFdOey%2F1r54%2BFwdqyZhu1lH3xI6v1zaDjQQyfMMPpu70GOqUBd2diSPU62xmm%2FGyyuh6jROfL19LlkmeJt6W0HYCoekryStzkBwkMC6Z1tUBe2jjr6cNS%2FhgndIjeXpnCIEYQbbZJZzc2pPs25QT6zAQ3t5iHJNBYHHKyUuQmZbEnAvEaG3gH3lRCrnmztnptBelwEySCROQ7JDjpv%2FFneNvf%2BmpBEw7IAuCz7%2FpYhSFb1bysuKj%2FxMaX1A7Sagra2GrULCQrOy1M&X-Amz-Signature=01918b71fc9287de8a5bd38030a57ec0ced688e3f5eed8e247c9b823daf98a63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
