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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKTNYKE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCbDsYp%2FWNYuMwWkdrdpRzU3nJSjHPYdsoOjCbXqY2VdgIgTxN0J%2FoTFIt7uP33NzBCtZwL78TfLGFQXcwcbrl1Ys4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMjPcKj21G7Yh7OuACrcAwkjFPlZbvphH9ydOr9%2FSiv9Q5rP4uLWIUPTdvPsm3LSrvNYuBqbcj9qM2YlLGO1uKEMv49HFun9lpX5rPg%2F62aBvPSuhlRe65RCpqH7vwhL4JUg0XFd4p6su3B22UaOLe9P54fslaqm1CzNsD%2F3Vwr%2FxyTOeIiRdJiHyUgWlJOidSifpkOOaTdQRwPvFXTCwqdrropl8HBuaWO6Eyl4Tu%2FYNDtwWrEr9JI6UmdlYFAi9q8eMn%2BXGXavuRSrtpsOfG1S8GKLv1%2BsOxRUgc8Rlmu66ihmu14EJBcV32BAPSAhK4sb1hXHC9zCcn6QH3aE5uRV1G8lWkqIW2q42ojo8C8MM0SalYljytr9buXpirW%2FgJOdnze6qMPMkFfYVzQP7NIO1X9fLXB7PvuoSQ%2FhXaMkz84DyI3MiaOb6HBVEO%2BdHlcf1qiYyIRrB7Q8YO5Gq9XYTmopzto%2BspinaHx530WyI75OjKwXqHwfUXdioFgqM6kNeCPKUwqxEuuhmvBytCYPXmyL6vnTya%2FmVXbwNntrpUErczFAIOO1usZtZFL3ZadjDvMjan7ldq7KG%2BM8dIbpNFVGY%2FMRQk25Ub4bgWhShJ7ey9hRVwpSnky8y2pixb2xNeEXBMgsekKAMIf2zb0GOqUB4DZID2M4Nkal7l0h0Hqvo7b%2Fja395%2BTjZK5WtYKkqc6B%2BZsSGVN26oo8V0OYpfYaob5ZY%2FS0iZOLM9rn7UvYco8pHafxXieH4S0u%2FLZO4pU9xOb6yxbWTlER9CKsdDfLVHHqjUFcNpk0TVKpdK5HUZ%2BWcW65fEziAtgvHAkzvlJVf9wqUfUlLKLM6XGS428addEK1u0iR95cEKAlvCwTSlWySApL&X-Amz-Signature=1727c14a0e79f7187a646c749e1c4d152e7d0c9c0339d3896129b3b1045330d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKTNYKE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCbDsYp%2FWNYuMwWkdrdpRzU3nJSjHPYdsoOjCbXqY2VdgIgTxN0J%2FoTFIt7uP33NzBCtZwL78TfLGFQXcwcbrl1Ys4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMjPcKj21G7Yh7OuACrcAwkjFPlZbvphH9ydOr9%2FSiv9Q5rP4uLWIUPTdvPsm3LSrvNYuBqbcj9qM2YlLGO1uKEMv49HFun9lpX5rPg%2F62aBvPSuhlRe65RCpqH7vwhL4JUg0XFd4p6su3B22UaOLe9P54fslaqm1CzNsD%2F3Vwr%2FxyTOeIiRdJiHyUgWlJOidSifpkOOaTdQRwPvFXTCwqdrropl8HBuaWO6Eyl4Tu%2FYNDtwWrEr9JI6UmdlYFAi9q8eMn%2BXGXavuRSrtpsOfG1S8GKLv1%2BsOxRUgc8Rlmu66ihmu14EJBcV32BAPSAhK4sb1hXHC9zCcn6QH3aE5uRV1G8lWkqIW2q42ojo8C8MM0SalYljytr9buXpirW%2FgJOdnze6qMPMkFfYVzQP7NIO1X9fLXB7PvuoSQ%2FhXaMkz84DyI3MiaOb6HBVEO%2BdHlcf1qiYyIRrB7Q8YO5Gq9XYTmopzto%2BspinaHx530WyI75OjKwXqHwfUXdioFgqM6kNeCPKUwqxEuuhmvBytCYPXmyL6vnTya%2FmVXbwNntrpUErczFAIOO1usZtZFL3ZadjDvMjan7ldq7KG%2BM8dIbpNFVGY%2FMRQk25Ub4bgWhShJ7ey9hRVwpSnky8y2pixb2xNeEXBMgsekKAMIf2zb0GOqUB4DZID2M4Nkal7l0h0Hqvo7b%2Fja395%2BTjZK5WtYKkqc6B%2BZsSGVN26oo8V0OYpfYaob5ZY%2FS0iZOLM9rn7UvYco8pHafxXieH4S0u%2FLZO4pU9xOb6yxbWTlER9CKsdDfLVHHqjUFcNpk0TVKpdK5HUZ%2BWcW65fEziAtgvHAkzvlJVf9wqUfUlLKLM6XGS428addEK1u0iR95cEKAlvCwTSlWySApL&X-Amz-Signature=1afa8db9241fbb6a5a946c31902c89174b7020bde6e980b3dcb2cb5c665db024&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
