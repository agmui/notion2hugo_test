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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7VWVSP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCHaCA0TgK9QXxta3fW%2Fzt2MDmCufpr73Vn5R%2BUe0V3HQIhAIMplc4%2FS4s01BRFsbcA4hOFbdIMjtBDUhjSwlmxwB3HKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye04hdeQOKWad1oMIq3AM18kiFiqH2tgs4h9mQikFoGd44GsTQ47JEP7Ue5m32DfqgyvJkd1ChzkZ5L7gHBHBdyWmtRgRf1aYLEf62oYJLKtmv2ITy%2BI9WwnI5QFBb7SGeALLuKeI57eDtkG5eNvZw9PvOC2kbYmuRCwSXaATBBoYi3gBv63erAOXR1CGJnV26iQC49XdtDc2evzkMyDNAQB4d3J2I67pGy63hlfpD7AHKtKvuRx26fGYEBUvrl3daRslwJcH6utWULmfDCID6qO3LrwnaOrgBSbiEyT%2FC3IYNKJTHe8dgx1%2FpEiZq4wNJ%2FvIZGH5jR0RywIEvC9CcaV3cYW9C3RQQri65iMliAFhjx1%2FqCJ4KqChtlBKS4Q8%2FEYWaFffp1%2FdHuquzXGvSZcvtOfsMGB8Sf1lXiNRwC%2FkmRNQMTMiqEcsadqueKQuUci64TGN6DZ5zbYTORHD562zhyjtiwAnwJxhsS7YcvXqhludlBqM%2B118cCAzZJTI10Lga0q8bJXGNoGWzJWmKP7l4DRxlCXblZcNC7paUEhdBQBmFDcRTRjzMTrvXN8l7g399%2BNRZp2jBN%2FMbGS0%2BJZr8Drdy3alFaMjnpR%2BAzp%2F%2FJ7%2B6wGWujlmRUkoZ36%2Fjc0%2BP7EQuHscUdjDj%2BPK%2BBjqkAZlnATnY79F5%2Flhyf19nAML9AcuqjnuoWtvNWTfYR5jl1vchqaLymoJuzh4sjnvN09TjnUI3%2BPvJGM4W2DeL1hBF4zb2h6LQRGqYviNDsHmHeHJBru9ifpkjIFT6B9bxe1FYgevDnrtCZFx%2Bnxt9sPjy2ecmRLEqRI3JnTlp8FnxdbH8jAwL%2B850TNcMmsBnljC%2BbvNrtqBFhznOP3W5v442L5MQ&X-Amz-Signature=d7a95322c1ee7796d20748fd00486cda33945d0ceba97c615eb13aa07285a4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z7VWVSP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCHaCA0TgK9QXxta3fW%2Fzt2MDmCufpr73Vn5R%2BUe0V3HQIhAIMplc4%2FS4s01BRFsbcA4hOFbdIMjtBDUhjSwlmxwB3HKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye04hdeQOKWad1oMIq3AM18kiFiqH2tgs4h9mQikFoGd44GsTQ47JEP7Ue5m32DfqgyvJkd1ChzkZ5L7gHBHBdyWmtRgRf1aYLEf62oYJLKtmv2ITy%2BI9WwnI5QFBb7SGeALLuKeI57eDtkG5eNvZw9PvOC2kbYmuRCwSXaATBBoYi3gBv63erAOXR1CGJnV26iQC49XdtDc2evzkMyDNAQB4d3J2I67pGy63hlfpD7AHKtKvuRx26fGYEBUvrl3daRslwJcH6utWULmfDCID6qO3LrwnaOrgBSbiEyT%2FC3IYNKJTHe8dgx1%2FpEiZq4wNJ%2FvIZGH5jR0RywIEvC9CcaV3cYW9C3RQQri65iMliAFhjx1%2FqCJ4KqChtlBKS4Q8%2FEYWaFffp1%2FdHuquzXGvSZcvtOfsMGB8Sf1lXiNRwC%2FkmRNQMTMiqEcsadqueKQuUci64TGN6DZ5zbYTORHD562zhyjtiwAnwJxhsS7YcvXqhludlBqM%2B118cCAzZJTI10Lga0q8bJXGNoGWzJWmKP7l4DRxlCXblZcNC7paUEhdBQBmFDcRTRjzMTrvXN8l7g399%2BNRZp2jBN%2FMbGS0%2BJZr8Drdy3alFaMjnpR%2BAzp%2F%2FJ7%2B6wGWujlmRUkoZ36%2Fjc0%2BP7EQuHscUdjDj%2BPK%2BBjqkAZlnATnY79F5%2Flhyf19nAML9AcuqjnuoWtvNWTfYR5jl1vchqaLymoJuzh4sjnvN09TjnUI3%2BPvJGM4W2DeL1hBF4zb2h6LQRGqYviNDsHmHeHJBru9ifpkjIFT6B9bxe1FYgevDnrtCZFx%2Bnxt9sPjy2ecmRLEqRI3JnTlp8FnxdbH8jAwL%2B850TNcMmsBnljC%2BbvNrtqBFhznOP3W5v442L5MQ&X-Amz-Signature=c5740f342f2ddf4778993207296bd8237a6b8dd5f36cffd2261101d8789f8105&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
