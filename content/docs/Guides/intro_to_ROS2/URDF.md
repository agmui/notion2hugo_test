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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOEP7PPM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDJfkn9X%2FFJR0DPrbjbonfx1A%2FVaPMksJvWLsj05M1vhAIhAPbTHg08mSMLmwdzZCexRwYa5PbAjUjeNcYQcy5b1GtvKv8DCFgQABoMNjM3NDIzMTgzODA1IgyPJLpI3qIe2qQEG8gq3ANPebQRUWoirMz9kMA51awFQz7kBEww7NjCPWegYFcwZsA1BC0lODp74TU5X1bSe%2BHMlRMTuPF0LEwVW1JlRx6hMKaOLYA8GxhJ%2FXsswPej5NN5kwpAz1Xm9WU5DB3Gc5JbjW57S1VzVYLfPpTZonsoZK3dkOWDHOqnheU9wFBy1MmLPrWEAhHCauPd0582hytcGXWcfBz8Y0pUDYjEEPxGtUYxz5wnkBAwEWPw8yZHCrrw9Qxf6NwBQNOzDlqjsdKIgygoigiTwb9hNqogO4jgJ4r5xUDqvnVCAZOefPpgHrZedYuPZXO1l5GP7Me7SckHYoFAWVlrHY%2FO3oAy1mlXgt67mcdxFHzY8xjkdoT7%2FYBniCAfjxxImgE3FHJiXDbo%2B1gAWZ%2BxHzaljHgUnKmKcxTsuMQOh9I0GmtYVwbA195j0AWkHyXyFDLQ7gW2gAOgjYkE4as3BYnq4P96FYfVkUoGWXf%2FT4uPTF%2FB7%2B1Tfy53dMt31NDN12MblK5goERAaXp%2BiC5pXxoM%2FeBrC17srh%2BQ0%2BwmMNseQRMyzSr1jk0p7wFggbhCWtSiTRCsLTSA5hgXngL9CFcp9YrKsdbIriIzxsN1ING3ZcITSRpQ%2FpvHESYaqYOy4bzDczDOgPu9BjqkATX%2BlzK%2BNsQL6cjot3IVXvJ5lT991NQCfT%2BOjWVDYlIHYLbG8zunH0imIc0c0JeknPUXg7d3ILdzOaX0P9QEABMBvdeX6CHpfojSEmqmIWWme4%2BwYF%2BLhN71RdimyjYYbid8oCNEO3MulSxL5DKbNneeCuAmRUOr36xKUEeuoSQmaqvFzrdV1vVgI2PDhoahUu11EFP5UE7jzt9jKmiBDvezSpnk&X-Amz-Signature=e84a11e08be5a4ea9cad2aa68ae0619a4b32e03052bfc97a7f91c4e21f02502e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOEP7PPM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDJfkn9X%2FFJR0DPrbjbonfx1A%2FVaPMksJvWLsj05M1vhAIhAPbTHg08mSMLmwdzZCexRwYa5PbAjUjeNcYQcy5b1GtvKv8DCFgQABoMNjM3NDIzMTgzODA1IgyPJLpI3qIe2qQEG8gq3ANPebQRUWoirMz9kMA51awFQz7kBEww7NjCPWegYFcwZsA1BC0lODp74TU5X1bSe%2BHMlRMTuPF0LEwVW1JlRx6hMKaOLYA8GxhJ%2FXsswPej5NN5kwpAz1Xm9WU5DB3Gc5JbjW57S1VzVYLfPpTZonsoZK3dkOWDHOqnheU9wFBy1MmLPrWEAhHCauPd0582hytcGXWcfBz8Y0pUDYjEEPxGtUYxz5wnkBAwEWPw8yZHCrrw9Qxf6NwBQNOzDlqjsdKIgygoigiTwb9hNqogO4jgJ4r5xUDqvnVCAZOefPpgHrZedYuPZXO1l5GP7Me7SckHYoFAWVlrHY%2FO3oAy1mlXgt67mcdxFHzY8xjkdoT7%2FYBniCAfjxxImgE3FHJiXDbo%2B1gAWZ%2BxHzaljHgUnKmKcxTsuMQOh9I0GmtYVwbA195j0AWkHyXyFDLQ7gW2gAOgjYkE4as3BYnq4P96FYfVkUoGWXf%2FT4uPTF%2FB7%2B1Tfy53dMt31NDN12MblK5goERAaXp%2BiC5pXxoM%2FeBrC17srh%2BQ0%2BwmMNseQRMyzSr1jk0p7wFggbhCWtSiTRCsLTSA5hgXngL9CFcp9YrKsdbIriIzxsN1ING3ZcITSRpQ%2FpvHESYaqYOy4bzDczDOgPu9BjqkATX%2BlzK%2BNsQL6cjot3IVXvJ5lT991NQCfT%2BOjWVDYlIHYLbG8zunH0imIc0c0JeknPUXg7d3ILdzOaX0P9QEABMBvdeX6CHpfojSEmqmIWWme4%2BwYF%2BLhN71RdimyjYYbid8oCNEO3MulSxL5DKbNneeCuAmRUOr36xKUEeuoSQmaqvFzrdV1vVgI2PDhoahUu11EFP5UE7jzt9jKmiBDvezSpnk&X-Amz-Signature=22e3218f26713fefea92764113727bf789cbe883bff49fb116583794e39ee460&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
