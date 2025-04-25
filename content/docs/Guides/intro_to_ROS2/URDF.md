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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OG7ZYNM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0eEW77WDT0DeUF2ak8dfkqbsJ2BYyyYJRkdS4UqsP0gIhAMXZuZ3XKAGLU8BGhyx%2Fc870hyEBGGJSPfkjYKF8pbB5Kv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2BOVgfz0b6LaR1lM8q3AP8pLhweWIZ8K8IUuNO54q9KywBsuEDDn0QXjGa826i4eAsITROraH0ucImY9JgLwsXggH033KGKdUFJrxpMXvA9vUEqYNV8t3qSPYgkThu6Bu9qRtE0YQrrMJ7K%2FRGcW44Lmrm2mf1YRf06wgWKK5wLUiJ%2FYE4fkCtBQogKUjijYOPUaE%2BXvWf6ZejOBR%2Fbz23%2F1lZRzD2nJmfXiekYDvd4FULAqfploTTvOFjrVLKYAkg2RSxp9wep%2B4vSnA5pnDw2pLSnG0E2dvvRLVWgJuhvyn51eOpFtdHrah2oSpG5zlZ6QvMcT5PiAq9ckut68ht2dRhPUYFYuz9CB%2BxbGAp1xrMiF4lX4bKa8j%2FeDlvS5LP1QbR3Xn%2FRMgGi%2F8e8uA%2FgYqwZg%2FguTEVTnVX0B0jyS9wG%2B1gN5iZcyj7FGV0RREv7DV2FJLQX3GwYb64onABiRi1ACDr5x37tvpW0JbwrIdk8xlxK%2FVmitrNZEnyA2RenvOAuM6P35FTuaIiPE5tHktxSQr9ElSEWSJfRzp0dT8lSHzYuX5cFXjBC0L1VAhbMCBHI0oT0dwr%2FwA%2FK0%2BmFxrXvs%2FqRA5m6YNE7Ir8nIw0P27X7oCV8oIATCdCJiW1Mvxq5uz623zJNzDU66%2FABjqkAdmnfznHpvs4p4XepdYaLN8yvRSH6TGybwhfS83T1V5acbOWOlOUbG%2Bgm2hUcuFWI%2FhBmmVtBnkUGS%2Bw6UxAH1nrqn9aW1RFiBNXtz7gRDOxb2U5UBcu%2BRaRKnJAysViefDVDY3hR0w073tIPKq1p78v1H8MPdrkIpXhKBRcAl%2FP8AoNapab5eh3CLsLOaWFikcVEY3y61LRwZtU8c4EGTIPCeOu&X-Amz-Signature=0303044a3506128637523ee6a52e42d9848e38d4d14c46740062bd0c57c7dc6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OG7ZYNM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0eEW77WDT0DeUF2ak8dfkqbsJ2BYyyYJRkdS4UqsP0gIhAMXZuZ3XKAGLU8BGhyx%2Fc870hyEBGGJSPfkjYKF8pbB5Kv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2BOVgfz0b6LaR1lM8q3AP8pLhweWIZ8K8IUuNO54q9KywBsuEDDn0QXjGa826i4eAsITROraH0ucImY9JgLwsXggH033KGKdUFJrxpMXvA9vUEqYNV8t3qSPYgkThu6Bu9qRtE0YQrrMJ7K%2FRGcW44Lmrm2mf1YRf06wgWKK5wLUiJ%2FYE4fkCtBQogKUjijYOPUaE%2BXvWf6ZejOBR%2Fbz23%2F1lZRzD2nJmfXiekYDvd4FULAqfploTTvOFjrVLKYAkg2RSxp9wep%2B4vSnA5pnDw2pLSnG0E2dvvRLVWgJuhvyn51eOpFtdHrah2oSpG5zlZ6QvMcT5PiAq9ckut68ht2dRhPUYFYuz9CB%2BxbGAp1xrMiF4lX4bKa8j%2FeDlvS5LP1QbR3Xn%2FRMgGi%2F8e8uA%2FgYqwZg%2FguTEVTnVX0B0jyS9wG%2B1gN5iZcyj7FGV0RREv7DV2FJLQX3GwYb64onABiRi1ACDr5x37tvpW0JbwrIdk8xlxK%2FVmitrNZEnyA2RenvOAuM6P35FTuaIiPE5tHktxSQr9ElSEWSJfRzp0dT8lSHzYuX5cFXjBC0L1VAhbMCBHI0oT0dwr%2FwA%2FK0%2BmFxrXvs%2FqRA5m6YNE7Ir8nIw0P27X7oCV8oIATCdCJiW1Mvxq5uz623zJNzDU66%2FABjqkAdmnfznHpvs4p4XepdYaLN8yvRSH6TGybwhfS83T1V5acbOWOlOUbG%2Bgm2hUcuFWI%2FhBmmVtBnkUGS%2Bw6UxAH1nrqn9aW1RFiBNXtz7gRDOxb2U5UBcu%2BRaRKnJAysViefDVDY3hR0w073tIPKq1p78v1H8MPdrkIpXhKBRcAl%2FP8AoNapab5eh3CLsLOaWFikcVEY3y61LRwZtU8c4EGTIPCeOu&X-Amz-Signature=7995d3c1095abac16fbad73560bdb8722bb7a8398b888728e7fc7a2ad7f1c168&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
