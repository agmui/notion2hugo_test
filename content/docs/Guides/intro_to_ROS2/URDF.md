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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIT4V3YL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFuy2Q5SpGtZWBGK7ohWH0e0AuARI2bzWob6oMo4q04qAiEAiNuhf0rkM7h7To1bKpttxFFFCp06veyUHHbFudJ%2FuxgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOSBTLfzo7RtUbF%2BircA0lRCQqskZaY3xmoedcOCK2f7RwWWYTykPUm8CC8WA1mf82F9dxmcJG5%2BE4xLMNgTceCqpf7w118RgecSyXbnhH4QYdUM%2BJeZpYof5fWZzS2K5p3mRgDYmnuk3kDTi44hxy9p6%2ByJWavzJJZRD9z1acdFCSd8S4dIvhawqKHxwlYaVfnjuLTAHUZheG4u8UWh4n0aEFEUtcqWtjKlET7mRlI%2Fd1knRp8vsGdEMT%2FSV%2FN0X5NBaLigqC36M%2BHJ3W%2B5BP2SQc5ymiFWLglNV95TGWdJuhM8S8apSQaEKIMbTzFGuoycDeZUV%2F%2Fl2BmV2%2FuL00MtqYyE5iIlfOHUngn%2FMfvZIoq31eJaGSjLwJ%2FE0tg133z2ARfqBVfvvS%2Ft1vnK7MjY5I6LynCczG9kd3mK2mg%2Fh7GzDekMqik9pxugtwr44uRMgf9fmUX3KelPIJyXpGGZZRtpK0zmW4Ugk5H2A4t7QXFu49FO4RjVKYDbQ1Kh9amlh6xQ8DtU31kmqmXs0uhFU2WAONvcxMR5QCY3ie8SCSttsXyyoV1zy%2BmRilxGv7DPxwBSXdBCRRlKX%2BQ0Hhq3%2BpEqX9he8jS1uKwrz5o1Sp3rIQOM768bGn%2BQBA7vRm3CeMkE5rqqg9jMLLq2MQGOqUBOtQudELnfdVhAS4tKYHtY8hfr9oiym2BBuHidTkIgKRlZzpbOmoSp9p1xyvU6uBfTNP2zEf65q2mYkS6Ky3WqzpdHKOvcW9%2B7DiskUngvN%2F7PiSyZ%2FwmhQ0SPWXsTZxdwe%2FOeQQgMHOoW4WpaksLW9DWxdc230A9bHVAYUYyQI2dA3l%2FSfTRSMJS%2FjOHk%2BcJQ158vMaE9338ClsGe7pnUjCEu7Q%2B&X-Amz-Signature=85c9a2d4b3e580ca57162413fd9e2ceecbb56aedcc3c7d78f6df8dac328bab45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIT4V3YL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFuy2Q5SpGtZWBGK7ohWH0e0AuARI2bzWob6oMo4q04qAiEAiNuhf0rkM7h7To1bKpttxFFFCp06veyUHHbFudJ%2FuxgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOSBTLfzo7RtUbF%2BircA0lRCQqskZaY3xmoedcOCK2f7RwWWYTykPUm8CC8WA1mf82F9dxmcJG5%2BE4xLMNgTceCqpf7w118RgecSyXbnhH4QYdUM%2BJeZpYof5fWZzS2K5p3mRgDYmnuk3kDTi44hxy9p6%2ByJWavzJJZRD9z1acdFCSd8S4dIvhawqKHxwlYaVfnjuLTAHUZheG4u8UWh4n0aEFEUtcqWtjKlET7mRlI%2Fd1knRp8vsGdEMT%2FSV%2FN0X5NBaLigqC36M%2BHJ3W%2B5BP2SQc5ymiFWLglNV95TGWdJuhM8S8apSQaEKIMbTzFGuoycDeZUV%2F%2Fl2BmV2%2FuL00MtqYyE5iIlfOHUngn%2FMfvZIoq31eJaGSjLwJ%2FE0tg133z2ARfqBVfvvS%2Ft1vnK7MjY5I6LynCczG9kd3mK2mg%2Fh7GzDekMqik9pxugtwr44uRMgf9fmUX3KelPIJyXpGGZZRtpK0zmW4Ugk5H2A4t7QXFu49FO4RjVKYDbQ1Kh9amlh6xQ8DtU31kmqmXs0uhFU2WAONvcxMR5QCY3ie8SCSttsXyyoV1zy%2BmRilxGv7DPxwBSXdBCRRlKX%2BQ0Hhq3%2BpEqX9he8jS1uKwrz5o1Sp3rIQOM768bGn%2BQBA7vRm3CeMkE5rqqg9jMLLq2MQGOqUBOtQudELnfdVhAS4tKYHtY8hfr9oiym2BBuHidTkIgKRlZzpbOmoSp9p1xyvU6uBfTNP2zEf65q2mYkS6Ky3WqzpdHKOvcW9%2B7DiskUngvN%2F7PiSyZ%2FwmhQ0SPWXsTZxdwe%2FOeQQgMHOoW4WpaksLW9DWxdc230A9bHVAYUYyQI2dA3l%2FSfTRSMJS%2FjOHk%2BcJQ158vMaE9338ClsGe7pnUjCEu7Q%2B&X-Amz-Signature=7336bfb7ebc49e8102053c207ff039dc481742baa3524c59750c11e70dda1270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
