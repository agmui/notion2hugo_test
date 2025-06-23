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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4JAGCN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDTYcrQXtcLHrAvi89B1CX7RqbYJVpHznLQXCKRwyUeAwIgfKxNKxGQ7YB7FPtE5W2%2BCXEkFcQy80q5fzQl3%2BNzdCEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL89LerhVku2ZsvPQyrcA6Sb1j7mL7bDjR2HYAD2EggkaTvmxhb4l9X%2FAmd7g7BIQoaH%2B2o1wTXf4fo8wop80qIMgw3YPQ1t%2BiTSxS5287ClDS%2FL1KyQ9BaVcehupxAjbhqKIp1byhafEURuWY1ctzjKWgfif0JqJ6hv0Yi%2FppKSj9z3wMU9lhRywTRbdZAXKMUfPg%2FdfC2PCx7OJPu2Qrdb3DVn67XYzpNAewcSFnbDZJ0WgnbFGumsApGWihcpYb9s8EEOelVzI6UKMjn3AkKlY8wcWNumTt%2B0A%2BYNL6DLiWjaQGygV2QtFYs9N0Hcv6elcygQv2Nd%2Fzrl0FQubNUTCS2othbo85OQLZdv6%2BXf8Rk7UDeu9lGgLtcjZ2DTEuxAqtbh5n6m2QNGnxQzqorJD5A1YDwtcw7V7o0lro3Pm0hRZ%2B5OkX0WlALt62O5NQSn4AvOAOrNGinAbjH%2BiLv%2BdN8OAK6ibcsxeHxkkROeHhPuMmvYvX5DCTdsnkCGmXCBczQWsd8RWSkWPpVNdpga%2Fvl4e0cnYg77jpAipMTnGUhx5OlBdE5CkJfG8LIQ8ys6tb9WhAQABt8mlWe4MxkAKWcbnAXPArBZGzSkFDzqsnTRx3%2Be7esCUalMnSGUdo%2FBOC%2BOIp%2B1072rMPGm4sIGOqUBO6x4BE8Gf4Pjq%2FSM%2BUIE1aucqvABbAmqACElYeT1%2FEHtrDHYMuQOelT4G3gjvbUfCjrR37BMXsHyYGMRr64B7LBC3HdQ7BI9iGDfHtkK7SFepXmwrsbEnGjaHsuCjEvYCT50q%2Fz9NPnoRQeMnYU0TqcjcTGbADM64q8ylQVA7%2F5RtQ7UAzOnnzCLM%2F%2FzgBeiaE%2F3tko2iJG8UgOW29lTh94lb3N6&X-Amz-Signature=0db8c38521b116750b90c1a23bf38fa1f4f054ae1d88bc565059a0c47bd5041e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4JAGCN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDTYcrQXtcLHrAvi89B1CX7RqbYJVpHznLQXCKRwyUeAwIgfKxNKxGQ7YB7FPtE5W2%2BCXEkFcQy80q5fzQl3%2BNzdCEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL89LerhVku2ZsvPQyrcA6Sb1j7mL7bDjR2HYAD2EggkaTvmxhb4l9X%2FAmd7g7BIQoaH%2B2o1wTXf4fo8wop80qIMgw3YPQ1t%2BiTSxS5287ClDS%2FL1KyQ9BaVcehupxAjbhqKIp1byhafEURuWY1ctzjKWgfif0JqJ6hv0Yi%2FppKSj9z3wMU9lhRywTRbdZAXKMUfPg%2FdfC2PCx7OJPu2Qrdb3DVn67XYzpNAewcSFnbDZJ0WgnbFGumsApGWihcpYb9s8EEOelVzI6UKMjn3AkKlY8wcWNumTt%2B0A%2BYNL6DLiWjaQGygV2QtFYs9N0Hcv6elcygQv2Nd%2Fzrl0FQubNUTCS2othbo85OQLZdv6%2BXf8Rk7UDeu9lGgLtcjZ2DTEuxAqtbh5n6m2QNGnxQzqorJD5A1YDwtcw7V7o0lro3Pm0hRZ%2B5OkX0WlALt62O5NQSn4AvOAOrNGinAbjH%2BiLv%2BdN8OAK6ibcsxeHxkkROeHhPuMmvYvX5DCTdsnkCGmXCBczQWsd8RWSkWPpVNdpga%2Fvl4e0cnYg77jpAipMTnGUhx5OlBdE5CkJfG8LIQ8ys6tb9WhAQABt8mlWe4MxkAKWcbnAXPArBZGzSkFDzqsnTRx3%2Be7esCUalMnSGUdo%2FBOC%2BOIp%2B1072rMPGm4sIGOqUBO6x4BE8Gf4Pjq%2FSM%2BUIE1aucqvABbAmqACElYeT1%2FEHtrDHYMuQOelT4G3gjvbUfCjrR37BMXsHyYGMRr64B7LBC3HdQ7BI9iGDfHtkK7SFepXmwrsbEnGjaHsuCjEvYCT50q%2Fz9NPnoRQeMnYU0TqcjcTGbADM64q8ylQVA7%2F5RtQ7UAzOnnzCLM%2F%2FzgBeiaE%2F3tko2iJG8UgOW29lTh94lb3N6&X-Amz-Signature=fde33dea14148ba5b67eff246d3203cbb3d3ba7bdd2c45b8ad5efea4821c3250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
