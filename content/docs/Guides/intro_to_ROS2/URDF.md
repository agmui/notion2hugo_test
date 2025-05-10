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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PTNBXNG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpjHk1sv%2F%2F6DscRMgfS13nUsKF2nFjB9ir77Ylr2ngcAIgOXVuJHBb8eowPh4nGAQOdxRIAoJnRxNzUpbHnuNh6yUqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeOWdX2S1tVI4cXlSrcA7KiJtJYBfL8zXoa2zi7nHD2HBXWMaTuhr%2Bcm6zQEIL2aYHTPQFl0VpkZ3216%2Bz%2BQZKB5ze5Bh1mI8Ku1oAAGrwFhCo0LxLLDdiTm%2BFv%2Bczh%2Bb8Eo3%2BrrYsDsKkU5YGVbe8IZNDtCWOBcBikbMaZ6O1nJnywdHmNc%2BBaV5l2ZGjkOvcwriaB18jICsvzNJKO08dYIP5np98PYftx0flFzprT2KUYlOXCKzMIPkoUSZGGdv7rxipTycVFpjeblLeze3IF7YqrjTTDGDwiMlCCgCsaLOIZx10qAF1dWNQxyZqC4THkYB3jWKkksr%2FEcdYdz9kHS5V1gn6Ye%2FNUQZPh8%2BJJG9AyMvSmxzr7eLs56UXYTooLI9FK8L6lUbQ1KbqqP%2FHCIouLtLoscoQkNJNXo6cGtOa6DrnqID7dV87Lu2%2Bv9ny%2FrUpb1mSfef263OJZ%2BBlcSflXIFpy1oloE61P%2BzpUhwzbh5ETo067Vq5eZlBgkoiMtxXzQeNKnTFP80iTKdHgtzFqhNbptUQy4QNtHP8xKXPi%2BBoOgXq4RKgQVuF8d3%2FLfyTOii4o%2Flu4%2Bar%2FSgGUWgjWfMG8At9m2tUmiKO%2FnB04FedzBspP4JpdJOCmS7N0Pq1St8Vrq9jkMMGP%2FMAGOqUBtLSKBt7rts4OXekNpRVSSFdQ5ipOb17m0%2BcAGeZMQWgQxM61YPflPukyOL14l093Bff%2B1S3SYTvk%2FhVAwlIbq2aCh1ofbArrp8x6tsGOPxIlinmQAT3Bkw86ZWgb5AUssqHg7Ug0mSca4hr1%2B8NoEuHuU3UIFKwsuYpnbWLIEGnnk0vaLoTCpmYomcZ2lXBsYVxV7LPfzJ8nmP3GmcHF%2BR0e94pw&X-Amz-Signature=e324b52bf9793ca025751e00ccc1e3b92ac964395f06661d80a8dca99bab4c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PTNBXNG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpjHk1sv%2F%2F6DscRMgfS13nUsKF2nFjB9ir77Ylr2ngcAIgOXVuJHBb8eowPh4nGAQOdxRIAoJnRxNzUpbHnuNh6yUqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeOWdX2S1tVI4cXlSrcA7KiJtJYBfL8zXoa2zi7nHD2HBXWMaTuhr%2Bcm6zQEIL2aYHTPQFl0VpkZ3216%2Bz%2BQZKB5ze5Bh1mI8Ku1oAAGrwFhCo0LxLLDdiTm%2BFv%2Bczh%2Bb8Eo3%2BrrYsDsKkU5YGVbe8IZNDtCWOBcBikbMaZ6O1nJnywdHmNc%2BBaV5l2ZGjkOvcwriaB18jICsvzNJKO08dYIP5np98PYftx0flFzprT2KUYlOXCKzMIPkoUSZGGdv7rxipTycVFpjeblLeze3IF7YqrjTTDGDwiMlCCgCsaLOIZx10qAF1dWNQxyZqC4THkYB3jWKkksr%2FEcdYdz9kHS5V1gn6Ye%2FNUQZPh8%2BJJG9AyMvSmxzr7eLs56UXYTooLI9FK8L6lUbQ1KbqqP%2FHCIouLtLoscoQkNJNXo6cGtOa6DrnqID7dV87Lu2%2Bv9ny%2FrUpb1mSfef263OJZ%2BBlcSflXIFpy1oloE61P%2BzpUhwzbh5ETo067Vq5eZlBgkoiMtxXzQeNKnTFP80iTKdHgtzFqhNbptUQy4QNtHP8xKXPi%2BBoOgXq4RKgQVuF8d3%2FLfyTOii4o%2Flu4%2Bar%2FSgGUWgjWfMG8At9m2tUmiKO%2FnB04FedzBspP4JpdJOCmS7N0Pq1St8Vrq9jkMMGP%2FMAGOqUBtLSKBt7rts4OXekNpRVSSFdQ5ipOb17m0%2BcAGeZMQWgQxM61YPflPukyOL14l093Bff%2B1S3SYTvk%2FhVAwlIbq2aCh1ofbArrp8x6tsGOPxIlinmQAT3Bkw86ZWgb5AUssqHg7Ug0mSca4hr1%2B8NoEuHuU3UIFKwsuYpnbWLIEGnnk0vaLoTCpmYomcZ2lXBsYVxV7LPfzJ8nmP3GmcHF%2BR0e94pw&X-Amz-Signature=06bd8ec0f0becb5e274c735da8560cfd9601a94aa0c8591215e4fb1428860fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
