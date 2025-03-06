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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDINPIAT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJrB8D3wNu%2BTPV1pw4pbwfJOkMIDwxZf3coi1VhwO3wIhAN%2B0ZCVvRKJpDffpGBUJQzeF14s%2BnmMucsKHDuv5biAPKv8DCCUQABoMNjM3NDIzMTgzODA1Igxi32N4%2FTzxPFOSL5gq3ANO0bjN7s7tTKg4D22qQMsl5Zpu0Pu4EF8HH83fieui%2BoEKwUlWGc5Z%2FZWJcpthr4ULce0aBHDIoIwMu%2FS6aX3J60te3nqNl8eBCaR3JGHUlWze9hKN0Wdb0nsJdG5vCNmx95TKZ5EHwUIAg%2B8iEbdx9sr58KA%2BB9ML421p8hmSNqhTQzAjaEvWPd%2B79i9WL4l%2BpjaJBuek47K28dLTN%2FiAbJRqtdbEbNNAAemwcJ31Z4qdQEqMDM0yzsuhaX2prO6CittD2n9QtOVZbRLhjlcDcwVW38g2Ko16jmeFVzDJq5GM0hlULk8BR1RKtp%2BZNV%2By7kfhtOZScePaMumMUY6PiNB7ve32dJfzJeBd04OWtyDkVpe65jZ20CKpN%2BwrSSk9RzFTQgXhqUEzN4gVexOaOHNQ4ZTUszemh0%2BPOumRV0gZs%2FYUjUI%2F7L7yKqY%2F%2BseGEonZaqkBUiZmxSifvQ1hy8Htibpt9%2FVaw69dQKAUuM%2BgMozm5r7OT3gLZgEiVAYbpDGwW1DuPwoulUvGAk14525ur2ydlKNSgy7O9F%2FIMFiDAfcgllsqGIbdRkBnbf7SjGtmoJ3cH72UtYBR0QUO5y2guu8H%2FRwbJD%2BSeJXePBV8SvdAKpr94RxMJDDguaS%2BBjqkAaOkVukRAit3xSMhRYSq16FJdjWvOnBmLIFZSAKQdsZd%2FZA3aHw6rgXf%2BR0LKy2aW%2FHFAA2xoIRqgVaqCrYo0R%2Fe353MMFn7nxb7dnF6r8ldjXcuHX0JEfGOziexawgOpBFiG%2FNc5WnJxOTCPsjSZRrfu7USEvCcOboryb45aOm3P1CHzMybrBjCIUqgMLjdh5nQShWzfK5FT27oaussaiUVFKNM&X-Amz-Signature=c42ae4bc15725323e780327937bbd55124aabf084e138c40a5879cba2c1f572e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDINPIAT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJrB8D3wNu%2BTPV1pw4pbwfJOkMIDwxZf3coi1VhwO3wIhAN%2B0ZCVvRKJpDffpGBUJQzeF14s%2BnmMucsKHDuv5biAPKv8DCCUQABoMNjM3NDIzMTgzODA1Igxi32N4%2FTzxPFOSL5gq3ANO0bjN7s7tTKg4D22qQMsl5Zpu0Pu4EF8HH83fieui%2BoEKwUlWGc5Z%2FZWJcpthr4ULce0aBHDIoIwMu%2FS6aX3J60te3nqNl8eBCaR3JGHUlWze9hKN0Wdb0nsJdG5vCNmx95TKZ5EHwUIAg%2B8iEbdx9sr58KA%2BB9ML421p8hmSNqhTQzAjaEvWPd%2B79i9WL4l%2BpjaJBuek47K28dLTN%2FiAbJRqtdbEbNNAAemwcJ31Z4qdQEqMDM0yzsuhaX2prO6CittD2n9QtOVZbRLhjlcDcwVW38g2Ko16jmeFVzDJq5GM0hlULk8BR1RKtp%2BZNV%2By7kfhtOZScePaMumMUY6PiNB7ve32dJfzJeBd04OWtyDkVpe65jZ20CKpN%2BwrSSk9RzFTQgXhqUEzN4gVexOaOHNQ4ZTUszemh0%2BPOumRV0gZs%2FYUjUI%2F7L7yKqY%2F%2BseGEonZaqkBUiZmxSifvQ1hy8Htibpt9%2FVaw69dQKAUuM%2BgMozm5r7OT3gLZgEiVAYbpDGwW1DuPwoulUvGAk14525ur2ydlKNSgy7O9F%2FIMFiDAfcgllsqGIbdRkBnbf7SjGtmoJ3cH72UtYBR0QUO5y2guu8H%2FRwbJD%2BSeJXePBV8SvdAKpr94RxMJDDguaS%2BBjqkAaOkVukRAit3xSMhRYSq16FJdjWvOnBmLIFZSAKQdsZd%2FZA3aHw6rgXf%2BR0LKy2aW%2FHFAA2xoIRqgVaqCrYo0R%2Fe353MMFn7nxb7dnF6r8ldjXcuHX0JEfGOziexawgOpBFiG%2FNc5WnJxOTCPsjSZRrfu7USEvCcOboryb45aOm3P1CHzMybrBjCIUqgMLjdh5nQShWzfK5FT27oaussaiUVFKNM&X-Amz-Signature=e339b93b3efcea1770c071ba4abf9711f16354c0ae1d94eef51fb9b4a66cc8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
