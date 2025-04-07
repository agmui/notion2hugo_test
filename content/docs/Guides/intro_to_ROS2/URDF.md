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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQROVQTG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzVH5%2FlzhYIpT3l%2B6h6TO5TOqI1WERm5RPtAHH4eWuzAiBstEoTe1Yja0c20PVCTH%2F9rdIGbS8oX6OBuyLI8yFijSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMjn99hEJP4a2S%2FmjAKtwDcxydglSzFPgn8nC%2FRrbfaUkBoqX8NxIJ8rKcYnqR5CCc%2BSgbBKKyXZocbeTpN4MXmrfs98YWJHc%2FLzWHPT%2FZiO%2Fec9vVAAI93kVYEh0xG2hvjTaDZjy44jMbpAR2AtS1RprWddg%2FRGdH87%2BcHDAee3YBw%2FnhJHG72NLKiIfhnMzngFNUS2qwUF7nQOcVFkqT3MB32dKiDUjvmbCl%2BhwfXjfyQ6fHGtcyEHtMlauoCCT%2FrPGVKsQd9q3z0v3%2Fm1JVphUpI5GpFPkw%2BFeyhdB8WQsy%2Fv4TEcxUuTOJuDOzHcwWkcuO2scXPyEUGt4zGowoAjtxC%2F4vOnP1rzZGnJMh7z%2BKFCiFTbsMqtJ9rPWxMYeYuQrIUlqEzX1kLHCxmI0IwDeyec45eeCYCsfHMI7Opf9U59A3%2BYYfkyJbME56drZXpKDu%2FIHlH%2BLtZ8OObx7stre7THXu1pgiJQs3fMNnNeXsbhFlGfueFpdFoKr9iOLGoWzbhEhNWyHx8Yq4%2BXcpSk%2FViY7OVQ8kc%2BpQ6TpgasnN5SUbx%2FFvzsfxkcvZIrCKSM9nq7iCzxCoMhZTzi0tnDkvwcx3DS8WxV1V8HAdQds7x19bdNMgmwupCvLguh5m1v2TY1XN8FXYuhUw5ezOvwY6pgHxSOYHKNhbb9r1D74P%2Bfr6W%2FvlyKWeAuY6SBv14yaRUnrvi0hAIIPK5z2EnqFAMWl5YVn9LHuvLF1weIrtDLWnRHzabbvWzueyzSA7NU4MkoGimROzJtB6WorLQw657cAGL3z87POtz%2FcZ4cLk01FwIu7sY%2BzgNVZ%2BrkWZxnhGmlDsT2a2tXeiouzIzHp5T9HH2Y68C3ACmGIdsVnopYlT0UpCMZQ0&X-Amz-Signature=34f16df55aae98e137aeb51c76456b7bbb7491ff446563f8f4e30c2028edc52d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQROVQTG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzVH5%2FlzhYIpT3l%2B6h6TO5TOqI1WERm5RPtAHH4eWuzAiBstEoTe1Yja0c20PVCTH%2F9rdIGbS8oX6OBuyLI8yFijSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMjn99hEJP4a2S%2FmjAKtwDcxydglSzFPgn8nC%2FRrbfaUkBoqX8NxIJ8rKcYnqR5CCc%2BSgbBKKyXZocbeTpN4MXmrfs98YWJHc%2FLzWHPT%2FZiO%2Fec9vVAAI93kVYEh0xG2hvjTaDZjy44jMbpAR2AtS1RprWddg%2FRGdH87%2BcHDAee3YBw%2FnhJHG72NLKiIfhnMzngFNUS2qwUF7nQOcVFkqT3MB32dKiDUjvmbCl%2BhwfXjfyQ6fHGtcyEHtMlauoCCT%2FrPGVKsQd9q3z0v3%2Fm1JVphUpI5GpFPkw%2BFeyhdB8WQsy%2Fv4TEcxUuTOJuDOzHcwWkcuO2scXPyEUGt4zGowoAjtxC%2F4vOnP1rzZGnJMh7z%2BKFCiFTbsMqtJ9rPWxMYeYuQrIUlqEzX1kLHCxmI0IwDeyec45eeCYCsfHMI7Opf9U59A3%2BYYfkyJbME56drZXpKDu%2FIHlH%2BLtZ8OObx7stre7THXu1pgiJQs3fMNnNeXsbhFlGfueFpdFoKr9iOLGoWzbhEhNWyHx8Yq4%2BXcpSk%2FViY7OVQ8kc%2BpQ6TpgasnN5SUbx%2FFvzsfxkcvZIrCKSM9nq7iCzxCoMhZTzi0tnDkvwcx3DS8WxV1V8HAdQds7x19bdNMgmwupCvLguh5m1v2TY1XN8FXYuhUw5ezOvwY6pgHxSOYHKNhbb9r1D74P%2Bfr6W%2FvlyKWeAuY6SBv14yaRUnrvi0hAIIPK5z2EnqFAMWl5YVn9LHuvLF1weIrtDLWnRHzabbvWzueyzSA7NU4MkoGimROzJtB6WorLQw657cAGL3z87POtz%2FcZ4cLk01FwIu7sY%2BzgNVZ%2BrkWZxnhGmlDsT2a2tXeiouzIzHp5T9HH2Y68C3ACmGIdsVnopYlT0UpCMZQ0&X-Amz-Signature=9b1cc9d9391b3219aa4e48e658b90ff355a819d757bb85a302e6dbe761b11ded&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
