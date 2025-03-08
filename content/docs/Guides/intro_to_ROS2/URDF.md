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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLK6ZOH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGbDgXUIHuH7oWMyRVKHNXirY30qMNcFq0SVQf9V1bY9AiBRu%2BOrftAeFrB8IULQEyM4Ei3sMvj4TATHJml6OZfUMCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFwbHnJDFfguEvfntKtwD58tLXWf9d8z8T6RuG%2FYq9QlBKYF1UKsmRl4EB7hjySk0dQU4bXKuEcJSN%2BXzWrLcV3um5KPG0p2W2dsNAPZoCc7T%2ByuApMGkqbFNTAg5ssi%2BniaxR0nel%2FhgPl16tbO3UHwai1M57qU6SoC6hNE3cI1cAfdhMPAfRIQU%2BjCbFm1%2BGlRbiEKwOm3Y1KJYLOWFWNjSMk4ZIaYSbf5EIOh4LfBVTT8SxhD3%2FquyUd4p0geOFAhPRHleeEFYOj7K%2FGkQIa5g6x9fFrj1BcZKX%2B3LpU5TScHiN3OzCe5ptKbZ93lV%2BPxkxbNgZf6tYw3H5r1dTMMMW7RkWNpyiUnc0eabgX8jqg0Mscv1Ofh03pyNWD1K1eVDY6zO3fCK88sVj02WH1AQedTZp%2F2B02xWQbI%2FmRQ7Axh3Upnt3AyGRW8phXqa7taPNsMXPUFykq5c%2Fx%2ByJybTbh4WdogOac2a7VFWBdA%2BRqPnRKuqr1WBYS7D3jKjfAjqnxGFRHo9M1o7upDAnG7zdIFSb0wjtIYx5q9Vpqaz8tuEt4w1Lt8rRDHpaDbW%2FMxs8ddfsbcC69%2FZ2EXc5CFBXCQuyXf9FvP6CaS9sy6TbvOYXIksE7e3mLfR4%2B6dy1cD4aMxGESbOlswpr2vvgY6pgHDbBL%2BUaewpp0%2BbljNLNBS5O44R8GLXRpBaY3%2FdkmEqgGtIuW5FEpUD5AQ9yVZpDDov6eyoiKq1zg3D5kKkfxew%2FVbE%2FVGAwK0d2cjE4UqKW7UIfBNSaL6XM0RAsNGd5q5Ii4gk7Z%2BzCovs01L1h94iTPgJItKwnvitQRcb%2BBLhCHkwiMZY6aJSGu%2BLUAYoy6WRct715I0XwIuH0sF7kgSErEQAGO7&X-Amz-Signature=334034af7dd0bf7defe76d1f276e44a15b7d20d484d58d897d3c993c0471611e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CLK6ZOH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGbDgXUIHuH7oWMyRVKHNXirY30qMNcFq0SVQf9V1bY9AiBRu%2BOrftAeFrB8IULQEyM4Ei3sMvj4TATHJml6OZfUMCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMFwbHnJDFfguEvfntKtwD58tLXWf9d8z8T6RuG%2FYq9QlBKYF1UKsmRl4EB7hjySk0dQU4bXKuEcJSN%2BXzWrLcV3um5KPG0p2W2dsNAPZoCc7T%2ByuApMGkqbFNTAg5ssi%2BniaxR0nel%2FhgPl16tbO3UHwai1M57qU6SoC6hNE3cI1cAfdhMPAfRIQU%2BjCbFm1%2BGlRbiEKwOm3Y1KJYLOWFWNjSMk4ZIaYSbf5EIOh4LfBVTT8SxhD3%2FquyUd4p0geOFAhPRHleeEFYOj7K%2FGkQIa5g6x9fFrj1BcZKX%2B3LpU5TScHiN3OzCe5ptKbZ93lV%2BPxkxbNgZf6tYw3H5r1dTMMMW7RkWNpyiUnc0eabgX8jqg0Mscv1Ofh03pyNWD1K1eVDY6zO3fCK88sVj02WH1AQedTZp%2F2B02xWQbI%2FmRQ7Axh3Upnt3AyGRW8phXqa7taPNsMXPUFykq5c%2Fx%2ByJybTbh4WdogOac2a7VFWBdA%2BRqPnRKuqr1WBYS7D3jKjfAjqnxGFRHo9M1o7upDAnG7zdIFSb0wjtIYx5q9Vpqaz8tuEt4w1Lt8rRDHpaDbW%2FMxs8ddfsbcC69%2FZ2EXc5CFBXCQuyXf9FvP6CaS9sy6TbvOYXIksE7e3mLfR4%2B6dy1cD4aMxGESbOlswpr2vvgY6pgHDbBL%2BUaewpp0%2BbljNLNBS5O44R8GLXRpBaY3%2FdkmEqgGtIuW5FEpUD5AQ9yVZpDDov6eyoiKq1zg3D5kKkfxew%2FVbE%2FVGAwK0d2cjE4UqKW7UIfBNSaL6XM0RAsNGd5q5Ii4gk7Z%2BzCovs01L1h94iTPgJItKwnvitQRcb%2BBLhCHkwiMZY6aJSGu%2BLUAYoy6WRct715I0XwIuH0sF7kgSErEQAGO7&X-Amz-Signature=8a148283a9e9900d45a03d79265d3f307b480c5664d88d9a4fd0fdd5c8bf19c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
