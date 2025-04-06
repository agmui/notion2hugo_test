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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD37LUTL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0E2TP3acX%2B90iYLlDmB5VUp%2BCiaOg5daSdf4056x4aQIgP%2BPWB1Ke2NKtYbgjiLp%2B0i7YAdHPUfCwGltGyLgtOp8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMgfgtbKyQECtXwXgCrcAyWOSudD4XkRInfqKPZQ5D4lhBJMdrAa7WOtBlF9w7G%2BuLalBI9elmJXDJ9LKggSSvOsveQuL8XqX%2FqQDr6w79FwnNjdwcc1wOofxir1NmhnXjjvQGwa4ikQL4mfhIXwhgX1v3yXAJH%2Br7Owsjwr1KQPsfgPEC84ORPc%2BsBVLJ4o0GUSy5sPVmqfWGUvhaAnb5ONf43Etf4TlIp1w0UYsfOl%2Flsny3e7gpqveZjEkbpRELjL%2FZxYfRt4A2jpkHr2dKdKi8TqWTs3BHUlHhzNoAwdVuOM4TW5d3Ok7iWn8M%2FcvzKiGEmmm1rUCXXJAWhY6yx5tzRGJYkph3Oi9fdeJJyaq8%2BuncBbmQHwltrN3cdT6L7twhFU%2Bj%2FVHz3d8tflQSoUl2TLTAaTvm1Zeg0%2FUAnt0kdEiNLU5JQsAU%2B1mLMCJGGEdSOWOScAvHU06rKdRP%2FUggECGRSXyf4Bx5jPRSZvfIxvpkjM1vdfxsLSBgUsS9UqwBhkAMCzMLCwdNw7Uenf1uG4iaO2Jm2Nrir9RMDburBuOZhpdgcaQCtIbVRbrD2O3YATMnaD18eU%2Bsrwih3vPG7fHcQhreA8P2QrJgREhs5TabeGw15Loz8ISElvLNbrr6agrh%2FQ8Vg2MK%2F%2ByL8GOqUBcTicz10eTbfwv3mPF%2BU0kz56jfutT3x%2FNA6tiQnj4fRcLwwEvruWndMYLXhxNq5jOX7sU4YNz9nCtMYt6xJ3V1KshYELSrbeswQAcLpbvDKknwGfW5hUjZ8o%2BlD1JK92msfio2TEsWgVqf%2B8REFsR0PwOZIP3eHq6R6iubxMiK5iQbjtNJxv%2BavA2kkste%2F6JN7aMjsC6yo1YDrX4JFmzSG8rM6W&X-Amz-Signature=4cbfd9f0fbc0d2a44c8d31054830d679b9cf43c2cb138d13d8f06bb7e724ec53&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD37LUTL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0E2TP3acX%2B90iYLlDmB5VUp%2BCiaOg5daSdf4056x4aQIgP%2BPWB1Ke2NKtYbgjiLp%2B0i7YAdHPUfCwGltGyLgtOp8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMgfgtbKyQECtXwXgCrcAyWOSudD4XkRInfqKPZQ5D4lhBJMdrAa7WOtBlF9w7G%2BuLalBI9elmJXDJ9LKggSSvOsveQuL8XqX%2FqQDr6w79FwnNjdwcc1wOofxir1NmhnXjjvQGwa4ikQL4mfhIXwhgX1v3yXAJH%2Br7Owsjwr1KQPsfgPEC84ORPc%2BsBVLJ4o0GUSy5sPVmqfWGUvhaAnb5ONf43Etf4TlIp1w0UYsfOl%2Flsny3e7gpqveZjEkbpRELjL%2FZxYfRt4A2jpkHr2dKdKi8TqWTs3BHUlHhzNoAwdVuOM4TW5d3Ok7iWn8M%2FcvzKiGEmmm1rUCXXJAWhY6yx5tzRGJYkph3Oi9fdeJJyaq8%2BuncBbmQHwltrN3cdT6L7twhFU%2Bj%2FVHz3d8tflQSoUl2TLTAaTvm1Zeg0%2FUAnt0kdEiNLU5JQsAU%2B1mLMCJGGEdSOWOScAvHU06rKdRP%2FUggECGRSXyf4Bx5jPRSZvfIxvpkjM1vdfxsLSBgUsS9UqwBhkAMCzMLCwdNw7Uenf1uG4iaO2Jm2Nrir9RMDburBuOZhpdgcaQCtIbVRbrD2O3YATMnaD18eU%2Bsrwih3vPG7fHcQhreA8P2QrJgREhs5TabeGw15Loz8ISElvLNbrr6agrh%2FQ8Vg2MK%2F%2ByL8GOqUBcTicz10eTbfwv3mPF%2BU0kz56jfutT3x%2FNA6tiQnj4fRcLwwEvruWndMYLXhxNq5jOX7sU4YNz9nCtMYt6xJ3V1KshYELSrbeswQAcLpbvDKknwGfW5hUjZ8o%2BlD1JK92msfio2TEsWgVqf%2B8REFsR0PwOZIP3eHq6R6iubxMiK5iQbjtNJxv%2BavA2kkste%2F6JN7aMjsC6yo1YDrX4JFmzSG8rM6W&X-Amz-Signature=bf3704f5593bd1b0f68b552f09ae00ac14e7cdb8d7ba905ee8ee1fced18a8978&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
