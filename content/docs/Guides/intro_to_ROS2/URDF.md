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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2CNJSC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZvPYviiJf1g0yTM9E5iF46N6TUebVA%2FIL7WJ9q83K6AiB6qsMZdae5EiL3tZ9aK6rmIPVOdnRykfdWQ%2B70xQDOuCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdPAcjZhsecmfVK2pKtwDPPIre%2FqtzYhujKtVHdKWtghjqsXT2l6TzdkFmwmwgX9lztHjW4PYXYy1B%2BkWxePwuB0A7QJYNc5EPDaa7zeJx7dAtRW7P9XiQB2xia1w%2FrL2VzvKA%2Bvr0PXA8DKb5VQdKOnPF0peudt17trE0pc1wCt7AHKhRZOfmBXUHrrttKQbkK5wiq%2Fx0ZB5h8MgNoK5U02Nj%2Bfk2x5pcGy9Pj71P4Aiw%2B2YuV0eLju1tALI3vSmjWbb9unH%2BncdYlcOxchaoCBxZnTvguzKehFDNWyHn2zTiDgcEtyWQf9pVFZsTtqtqcpVoLcWq%2BtJAbu%2FXl0x0re7vp6Rh8I3VqWUc6tdDfVNCHqfIPcP9LsfVWdLD0NZzRnOMOhKTlVJj%2FPsH%2F8xL8Ng%2Bbi1fiMDAK%2BtqhU9p%2BOdYjFVscTCzFtB3wtpSoElhpHZSqNBR2OOxRcE4sFhldiMDKpQCdygZSn3q2KIQ5Z%2BpdW%2BxK4ToZ%2F3gdKddGS89M1dTZTuaEEvvT3fpDd0ezyPsoh3Aurdk2Uhq8jzx5SN1ukpuR7JQgaYCGXJRlH%2BptGo1Tf2ssdJvozph4WFSFYti7tMt1nTtjNgJxp31kIY0JshcEaFEnASQDsRIQvw2sckQMKocVzqfxUw4uOq0wY6pgHQ9ug1i7E%2BI7RfnDUJcNebyEQCQvhj7pYKevGvQLFugfz3BQsfBMY%2BZvTdtwNH4RYKhj54RmIIsz%2B6OZUaXywEkuP8tsr8uFO2JrIPQd57I6tO7U6eb1LaNitaFbV7YSJyIkDzmyLE47Y1I8FyDjfnpL8qE4MteX5%2BLH9K7%2Bpm6muugLfPzjfx353VKGaQHq1eJnMEL7bGu%2FWtdVI5TFLsxeq%2FLWK1&X-Amz-Signature=31d91be3c51ea29b7001d4807b147f35cc506016f6f5ba4281a95b622e13088e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2CNJSC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZvPYviiJf1g0yTM9E5iF46N6TUebVA%2FIL7WJ9q83K6AiB6qsMZdae5EiL3tZ9aK6rmIPVOdnRykfdWQ%2B70xQDOuCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdPAcjZhsecmfVK2pKtwDPPIre%2FqtzYhujKtVHdKWtghjqsXT2l6TzdkFmwmwgX9lztHjW4PYXYy1B%2BkWxePwuB0A7QJYNc5EPDaa7zeJx7dAtRW7P9XiQB2xia1w%2FrL2VzvKA%2Bvr0PXA8DKb5VQdKOnPF0peudt17trE0pc1wCt7AHKhRZOfmBXUHrrttKQbkK5wiq%2Fx0ZB5h8MgNoK5U02Nj%2Bfk2x5pcGy9Pj71P4Aiw%2B2YuV0eLju1tALI3vSmjWbb9unH%2BncdYlcOxchaoCBxZnTvguzKehFDNWyHn2zTiDgcEtyWQf9pVFZsTtqtqcpVoLcWq%2BtJAbu%2FXl0x0re7vp6Rh8I3VqWUc6tdDfVNCHqfIPcP9LsfVWdLD0NZzRnOMOhKTlVJj%2FPsH%2F8xL8Ng%2Bbi1fiMDAK%2BtqhU9p%2BOdYjFVscTCzFtB3wtpSoElhpHZSqNBR2OOxRcE4sFhldiMDKpQCdygZSn3q2KIQ5Z%2BpdW%2BxK4ToZ%2F3gdKddGS89M1dTZTuaEEvvT3fpDd0ezyPsoh3Aurdk2Uhq8jzx5SN1ukpuR7JQgaYCGXJRlH%2BptGo1Tf2ssdJvozph4WFSFYti7tMt1nTtjNgJxp31kIY0JshcEaFEnASQDsRIQvw2sckQMKocVzqfxUw4uOq0wY6pgHQ9ug1i7E%2BI7RfnDUJcNebyEQCQvhj7pYKevGvQLFugfz3BQsfBMY%2BZvTdtwNH4RYKhj54RmIIsz%2B6OZUaXywEkuP8tsr8uFO2JrIPQd57I6tO7U6eb1LaNitaFbV7YSJyIkDzmyLE47Y1I8FyDjfnpL8qE4MteX5%2BLH9K7%2Bpm6muugLfPzjfx353VKGaQHq1eJnMEL7bGu%2FWtdVI5TFLsxeq%2FLWK1&X-Amz-Signature=958ae85c7f4f512de3aea1b978e9162441338f62707ceccdf9debefa93393809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
