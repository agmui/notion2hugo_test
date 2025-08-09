---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPBEA4QE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3C0NV8SCNGsr4xFOeUcrQXBvYlZ0zp3DT58rrZemhVwIhAMKYaOKNeuM2yoyxansCyfg%2Fo7j5N24YKc0ocRo95fmTKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzklM1VIZVYVyGkVcq3ANV5FhvzXcyBL35KB%2BvtNvIqksGelpQBYMhmitpycXzmNS4NdzT8Oi0B5y2oOvcfaeJ9ZJ98zUdFLvAT1BT0EoHg%2FU65q8HogAcYDoXJPJ%2BF08uQNAICpfx5b%2BjOFIJp17lAPpkxW8s2d%2FTHDUZruW%2BKU7F1N76sh4Z5LiMZ6VopEwfFV8DEBx78CiA25VJruiOR5LjpU9%2BaPBHAplFit2vKsyho%2BiSzohMI1mViSKCUcGfPlvE6pOoBynl4CYWVArwh4BDb3Ic9UC4GfcXH4uZ7fmHSD9F52j1jBFBKp4%2BTwQll1CG0r8kT4CPHyDfWS5Lfd8Ql1Nd5VERf4upuMLVuXnDeKdJ45f9CZankxFz1sae3j%2FpLbhrSy5ZFrO%2BO%2Biqh3%2F7umCcmtKQS71Gc%2BR4RQLY1WVrCU4Fcl%2Fy1MiHXtwOQ25C99FI%2Bmpl47hQhoWsbyCZmDu1BYiZk8Ugx7u9plgBEKwJLRDRPL7kRx5Ymlj0HS7ww5JHzplM5cLoeNPvfRRgO2xxu4gnAl3vOqv8k5egmmIjwgUiLA6zaR9tWrkPMWvXGMEL%2B60GKfLS0RFs0X591OHAmJn51ePJxsutAkYciYymTSZFg49KLMJZrwieSiEQGoxWV7CPTTCawt7EBjqkAe6a9v09aKb2tyWFrwlYfbfI1GMtYHy2WPGydn4ta%2FVHh78oz7rLoXrg2j0NDudNwlEXSKn130e8AhC%2B%2FAGWPpIpYsu60mg2ktgVvfKx9uzW1LSZFQfevPKPyKfZRK3sOTB%2B25%2FEV1zAqUlhgl1F9fJZ5XMDLoSwShxc13MZZxlRqeW6SO3GTnD5pq5X7DPlmL1yWAdyfvLYt9VF6uZu1zU%2FObbL&X-Amz-Signature=af10206519a74728f814566e7e6194223803f8a6c9931db05d039352f41551da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPBEA4QE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3C0NV8SCNGsr4xFOeUcrQXBvYlZ0zp3DT58rrZemhVwIhAMKYaOKNeuM2yoyxansCyfg%2Fo7j5N24YKc0ocRo95fmTKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzklM1VIZVYVyGkVcq3ANV5FhvzXcyBL35KB%2BvtNvIqksGelpQBYMhmitpycXzmNS4NdzT8Oi0B5y2oOvcfaeJ9ZJ98zUdFLvAT1BT0EoHg%2FU65q8HogAcYDoXJPJ%2BF08uQNAICpfx5b%2BjOFIJp17lAPpkxW8s2d%2FTHDUZruW%2BKU7F1N76sh4Z5LiMZ6VopEwfFV8DEBx78CiA25VJruiOR5LjpU9%2BaPBHAplFit2vKsyho%2BiSzohMI1mViSKCUcGfPlvE6pOoBynl4CYWVArwh4BDb3Ic9UC4GfcXH4uZ7fmHSD9F52j1jBFBKp4%2BTwQll1CG0r8kT4CPHyDfWS5Lfd8Ql1Nd5VERf4upuMLVuXnDeKdJ45f9CZankxFz1sae3j%2FpLbhrSy5ZFrO%2BO%2Biqh3%2F7umCcmtKQS71Gc%2BR4RQLY1WVrCU4Fcl%2Fy1MiHXtwOQ25C99FI%2Bmpl47hQhoWsbyCZmDu1BYiZk8Ugx7u9plgBEKwJLRDRPL7kRx5Ymlj0HS7ww5JHzplM5cLoeNPvfRRgO2xxu4gnAl3vOqv8k5egmmIjwgUiLA6zaR9tWrkPMWvXGMEL%2B60GKfLS0RFs0X591OHAmJn51ePJxsutAkYciYymTSZFg49KLMJZrwieSiEQGoxWV7CPTTCawt7EBjqkAe6a9v09aKb2tyWFrwlYfbfI1GMtYHy2WPGydn4ta%2FVHh78oz7rLoXrg2j0NDudNwlEXSKn130e8AhC%2B%2FAGWPpIpYsu60mg2ktgVvfKx9uzW1LSZFQfevPKPyKfZRK3sOTB%2B25%2FEV1zAqUlhgl1F9fJZ5XMDLoSwShxc13MZZxlRqeW6SO3GTnD5pq5X7DPlmL1yWAdyfvLYt9VF6uZu1zU%2FObbL&X-Amz-Signature=5661a6e0ff8a9e723ab9384fae8df7f61fb93668eb738b492d24c9fda34fafb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
