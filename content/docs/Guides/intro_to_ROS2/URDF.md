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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXK3S7CB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BtZShZuJeh3IhYD8PEHkQJ%2FE54wWJbllAS9q1oXki9AIgX0HkSBmH%2FDHeI%2FmcOHJuYC1K0mzBVXbBaRPpmC%2FIO5gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ9RwaOgGTitufHayrcA1oDkKimdGm%2BdM0Os%2BAo8Tz8jBIaYaXsnqX5QD5%2BO0RQrsMVvcUPGwR%2FMcz%2F2tu9Ij3bhGSuXsCND2Gn%2FZ8DIhP2jSOcLaz50M6m6ADSbjupWpHNcV07L8aJsSOK5TDqPMLXL3aneE3R7pkMH63FPIcmcQBFX8uKOfZHslrmYrKdPQq6YEtj3w4HUIuSZrXbx1SU4lXJKtIUOimBQhRDOSMHDQNcvJ2P5Bu0WV3x3jr5DbAJ49AmBDm86%2FEhd9yQHRCUWM9hJ%2BoMAoC1ndrEuN%2BH%2Bt%2FaA%2F12JLfOefRWUcOlreI8HNZ50kx%2FN%2BpIPFEfRXTZyZyBV%2BWXXNNane2qS6CXnnJXmm4BC9mrIGaQIMUIqCbZ%2F8jbtglFGoWG53THBsgPsyc3%2B23zDtVH62ADHsRaDFOuep9ZDSTwT5j2kszdFt68jmLSdECF%2B7wPWiSlRuvOUOFmokTxyV5n0SIywQW9s%2FrZYqsxxq6FUCL5vxFhMwVP7uYU1iUEkXnYIOUgFbnTsF7ylzSfMW3fz2XvU8F6nhPDUANBmczcTbG%2BtxwpSzwayoqW0FYmGJC4JUjn%2FccKK%2F%2B%2B7HQhxX13tqEIUnSG93E4%2FRWZP%2Bd9h7YEFMYkwFT%2ByKbhSHkxguUyMI7SuMMGOqUB1sn56%2FZwbSDLD0L9aTp0f1icCoyXGsnxCCVDf52FKgG%2FWzz0beyf8pe36vgv8aZj24Jsinzq26OrmJmJOe%2BW0iaJRn%2B8mJYE8qi%2FL3iWQPnt%2Fu3LkQzlGlVQddz5gMK6UCcwNZwHy6YUzVA9x%2BD7i9pcGvNSLW4nbwFugStus3gMgnA8HKVxlCxnD%2FjQegBeTD1B%2BbFfvqIaIrW%2Fv8oEC%2BjEjDHq&X-Amz-Signature=aae4daab02ec630d5c8e1b598dd574568b83d5e638a5ba52a8f01171f257d149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXK3S7CB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BtZShZuJeh3IhYD8PEHkQJ%2FE54wWJbllAS9q1oXki9AIgX0HkSBmH%2FDHeI%2FmcOHJuYC1K0mzBVXbBaRPpmC%2FIO5gqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ9RwaOgGTitufHayrcA1oDkKimdGm%2BdM0Os%2BAo8Tz8jBIaYaXsnqX5QD5%2BO0RQrsMVvcUPGwR%2FMcz%2F2tu9Ij3bhGSuXsCND2Gn%2FZ8DIhP2jSOcLaz50M6m6ADSbjupWpHNcV07L8aJsSOK5TDqPMLXL3aneE3R7pkMH63FPIcmcQBFX8uKOfZHslrmYrKdPQq6YEtj3w4HUIuSZrXbx1SU4lXJKtIUOimBQhRDOSMHDQNcvJ2P5Bu0WV3x3jr5DbAJ49AmBDm86%2FEhd9yQHRCUWM9hJ%2BoMAoC1ndrEuN%2BH%2Bt%2FaA%2F12JLfOefRWUcOlreI8HNZ50kx%2FN%2BpIPFEfRXTZyZyBV%2BWXXNNane2qS6CXnnJXmm4BC9mrIGaQIMUIqCbZ%2F8jbtglFGoWG53THBsgPsyc3%2B23zDtVH62ADHsRaDFOuep9ZDSTwT5j2kszdFt68jmLSdECF%2B7wPWiSlRuvOUOFmokTxyV5n0SIywQW9s%2FrZYqsxxq6FUCL5vxFhMwVP7uYU1iUEkXnYIOUgFbnTsF7ylzSfMW3fz2XvU8F6nhPDUANBmczcTbG%2BtxwpSzwayoqW0FYmGJC4JUjn%2FccKK%2F%2B%2B7HQhxX13tqEIUnSG93E4%2FRWZP%2Bd9h7YEFMYkwFT%2ByKbhSHkxguUyMI7SuMMGOqUB1sn56%2FZwbSDLD0L9aTp0f1icCoyXGsnxCCVDf52FKgG%2FWzz0beyf8pe36vgv8aZj24Jsinzq26OrmJmJOe%2BW0iaJRn%2B8mJYE8qi%2FL3iWQPnt%2Fu3LkQzlGlVQddz5gMK6UCcwNZwHy6YUzVA9x%2BD7i9pcGvNSLW4nbwFugStus3gMgnA8HKVxlCxnD%2FjQegBeTD1B%2BbFfvqIaIrW%2Fv8oEC%2BjEjDHq&X-Amz-Signature=85853caf8b0ccda1cacd2639f5ab21c640b8078480d79fd084748f96a0a78e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
