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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK2L56V4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDyEYOBydtjjS9q0NvVQZLVAlHZHh7NEY%2FPP%2Flyodpy8AIhAKmHUIjWXOdLjqipJLIrdxuHOJ2A%2BJq6ZjE8towHDJuLKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzis7IDxjYvcmFcR0sq3ANvL5TyVsnn%2B%2BU09OzaOMANZVKxOUZ8TDZbdZHhBARE66GMg2oXPYhRPSoBeF9VQitI7Rsuykui%2BEyv5ollNzjYXZJ%2FD7AdNvOxspeV4Llz1vsRCc7CEO2AkZ7seUCnO9fBG2siwogkkIDCAQMKQBmI6MK9UVuUSv4LfkSi7QvM1R4iyUSruWrEYiJWdUbpJ30iHNCP%2FHZDhjkcpx7inSzpkqKidEBpEoN9CD1t3yxEKC2kDCxS2v36f7lvWv7ikc6Vqm6nsNuieFmdDcqGJEGTCY5WjiiAPFcCpo2sUQxJj62flzPo0jX1S9p9KyT1z0yz9dx9ATKH87sV%2BV5B5J51ipQU5dQ8NO8whbfO0V7TIyEMUzgNcvKae3Oew2%2BQt9Wb5xYG6KD%2F9wbPMqPUaQ%2Bev%2BdDhppjBxF37cs9sXVn7rsfeF%2FCmFBx9rlnko%2F8aR8J6R3RK1%2FCHk4yffqxwIJssN4Las21NK3VSA0XkpWWlCY6GU8Pr3c1is3tCJWLTNQrvH2tQiUPoB%2FcJpeHuVpXTl622ivoV3EdjTtepyyUluq%2F%2BHsEihFysOnaq13oZZs417wdJI%2B7DGWBqCTkEAxVNlmQZ5ued55%2BnQppevpF%2B8cq6xjqMdqQX8TRPjDY8eS%2FBjqkAXA1Q6b%2BdQw%2FuxKb5NxyCaOxUwXKNkgVkPYDlVbeQa8fKWjh4jJH2KztaU5GyKuIOnV%2Fyi7qC2PsJTRVlmyWSMjHG6USvMP8bSkC6kxVuMFLgm8%2BxY769ihOW8KCPofq7QSaC4u7KIoBrT4Tz6KeZbjHwK%2FjXcQiVEO060GHK3sscx10wjJiIUEVxg0xPceWn9YdegwdduWMGW6U84NgN7OdXrkx&X-Amz-Signature=f154b7afbdd0ad610946e883c8d66e309350c7e479435a21a90ef15f2fd7a38e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK2L56V4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDyEYOBydtjjS9q0NvVQZLVAlHZHh7NEY%2FPP%2Flyodpy8AIhAKmHUIjWXOdLjqipJLIrdxuHOJ2A%2BJq6ZjE8towHDJuLKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzis7IDxjYvcmFcR0sq3ANvL5TyVsnn%2B%2BU09OzaOMANZVKxOUZ8TDZbdZHhBARE66GMg2oXPYhRPSoBeF9VQitI7Rsuykui%2BEyv5ollNzjYXZJ%2FD7AdNvOxspeV4Llz1vsRCc7CEO2AkZ7seUCnO9fBG2siwogkkIDCAQMKQBmI6MK9UVuUSv4LfkSi7QvM1R4iyUSruWrEYiJWdUbpJ30iHNCP%2FHZDhjkcpx7inSzpkqKidEBpEoN9CD1t3yxEKC2kDCxS2v36f7lvWv7ikc6Vqm6nsNuieFmdDcqGJEGTCY5WjiiAPFcCpo2sUQxJj62flzPo0jX1S9p9KyT1z0yz9dx9ATKH87sV%2BV5B5J51ipQU5dQ8NO8whbfO0V7TIyEMUzgNcvKae3Oew2%2BQt9Wb5xYG6KD%2F9wbPMqPUaQ%2Bev%2BdDhppjBxF37cs9sXVn7rsfeF%2FCmFBx9rlnko%2F8aR8J6R3RK1%2FCHk4yffqxwIJssN4Las21NK3VSA0XkpWWlCY6GU8Pr3c1is3tCJWLTNQrvH2tQiUPoB%2FcJpeHuVpXTl622ivoV3EdjTtepyyUluq%2F%2BHsEihFysOnaq13oZZs417wdJI%2B7DGWBqCTkEAxVNlmQZ5ued55%2BnQppevpF%2B8cq6xjqMdqQX8TRPjDY8eS%2FBjqkAXA1Q6b%2BdQw%2FuxKb5NxyCaOxUwXKNkgVkPYDlVbeQa8fKWjh4jJH2KztaU5GyKuIOnV%2Fyi7qC2PsJTRVlmyWSMjHG6USvMP8bSkC6kxVuMFLgm8%2BxY769ihOW8KCPofq7QSaC4u7KIoBrT4Tz6KeZbjHwK%2FjXcQiVEO060GHK3sscx10wjJiIUEVxg0xPceWn9YdegwdduWMGW6U84NgN7OdXrkx&X-Amz-Signature=3799b143e0e2d6ae0d03aa28cd24d5bfaa743d4e4fecbc403256a9b510b8c465&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
