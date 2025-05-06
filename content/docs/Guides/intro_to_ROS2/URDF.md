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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUIP4JO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlblEex04RbQS0pVI61ZGhu6bnUYlSsSAMkNi90S6DjgIhAMAU1Qp4qAuiT3WBT2eYJU9hWiryV%2BVekriG2KaTT03JKv8DCEMQABoMNjM3NDIzMTgzODA1IgyrTgAJWeSW7OEvK6oq3APMXbJEmrf%2FyhStEZd6hBnZsgesL63njXipmTSwKn7uSZHhI2NF3uMWu7tVkrObOatfw0oBNYY7AX5HPJ0t0iNUL6skZcYHZUCi2YRWhZn2HUwdmIKJFrpTiHgYxtjWgnPiy1OHXKfwnoids13yrp3Ucl7P3ix2xTlPeZP9vwCUKWUSFal1Jf9GFCHWvsIs5FPe4zQUkEv1F%2FkpbphmvlLZpDBAlsTMF1ZxuiCM4hQP7HkUcBCvQ1RGlQYhVmrYgw7i%2FMz%2B2ThyTjWRYiK1VlKRRozba8OWvaSc1c07IGJzu3WkZ9KZsTbmXk4koNXVY6j1%2F2rFepgimLODOpk8j7Es6THpHHEG01ulUVt%2Bc1FwhxvdxDJI1i9RwA9TR1wK6d1%2FN3E292ttSCHVv9%2BEdfXeKE3PuMMWLpLDoXIuGPQvFTAmMxA41qvMFppKEeO%2FM6jRxYK16i2CCR0qRi1isRCJByhLZjfGm6Rn4fS6VWOdJFtqgMk0kUWQR2y8eRs4eU%2FgCgL9bxBMPdS0Vo0ez0HJDQW0LBNYqdcAnDgQFxzYKfJ7o%2FyBqzjp%2B9AhqpjED78vY16h%2BbNe8xJ6q3%2FyNIp9dPTOQNgv4kb%2BCYLtK%2BOTDxT%2B5wrmrn4HKtmIMzDgtufABjqkAfqAlZFI0t0zFFADuLuWXF3G%2BoGGImwFPGKe6%2BoZq%2FPUPxebJ0oZEcGXvViI2TkY3xUvNzEe%2FZSMJ%2BO%2F3CE9laAubaMN%2BLsWaoDVUArKOr0PgncXM3i5z2%2BpRV7Tm%2Fe%2F5%2BTpP5gKXA%2B3amN9KHcMxiVbgaTGOiWXrdDF0oQiALG2iLHMch8uEO7L9P8ZXUlcUTw2kjUM0BDRH7YpelJ5pSLGgaQV&X-Amz-Signature=eb50c6befd1af90e609f7e90d48e6ef63c4fbb08e13b446cc26556114d1ddb01&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUIP4JO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlblEex04RbQS0pVI61ZGhu6bnUYlSsSAMkNi90S6DjgIhAMAU1Qp4qAuiT3WBT2eYJU9hWiryV%2BVekriG2KaTT03JKv8DCEMQABoMNjM3NDIzMTgzODA1IgyrTgAJWeSW7OEvK6oq3APMXbJEmrf%2FyhStEZd6hBnZsgesL63njXipmTSwKn7uSZHhI2NF3uMWu7tVkrObOatfw0oBNYY7AX5HPJ0t0iNUL6skZcYHZUCi2YRWhZn2HUwdmIKJFrpTiHgYxtjWgnPiy1OHXKfwnoids13yrp3Ucl7P3ix2xTlPeZP9vwCUKWUSFal1Jf9GFCHWvsIs5FPe4zQUkEv1F%2FkpbphmvlLZpDBAlsTMF1ZxuiCM4hQP7HkUcBCvQ1RGlQYhVmrYgw7i%2FMz%2B2ThyTjWRYiK1VlKRRozba8OWvaSc1c07IGJzu3WkZ9KZsTbmXk4koNXVY6j1%2F2rFepgimLODOpk8j7Es6THpHHEG01ulUVt%2Bc1FwhxvdxDJI1i9RwA9TR1wK6d1%2FN3E292ttSCHVv9%2BEdfXeKE3PuMMWLpLDoXIuGPQvFTAmMxA41qvMFppKEeO%2FM6jRxYK16i2CCR0qRi1isRCJByhLZjfGm6Rn4fS6VWOdJFtqgMk0kUWQR2y8eRs4eU%2FgCgL9bxBMPdS0Vo0ez0HJDQW0LBNYqdcAnDgQFxzYKfJ7o%2FyBqzjp%2B9AhqpjED78vY16h%2BbNe8xJ6q3%2FyNIp9dPTOQNgv4kb%2BCYLtK%2BOTDxT%2B5wrmrn4HKtmIMzDgtufABjqkAfqAlZFI0t0zFFADuLuWXF3G%2BoGGImwFPGKe6%2BoZq%2FPUPxebJ0oZEcGXvViI2TkY3xUvNzEe%2FZSMJ%2BO%2F3CE9laAubaMN%2BLsWaoDVUArKOr0PgncXM3i5z2%2BpRV7Tm%2Fe%2F5%2BTpP5gKXA%2B3amN9KHcMxiVbgaTGOiWXrdDF0oQiALG2iLHMch8uEO7L9P8ZXUlcUTw2kjUM0BDRH7YpelJ5pSLGgaQV&X-Amz-Signature=e909776b03f602c697905196a37c3b236e5ebe2d8fd17f12b41ce4a10212e4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
