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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO54VCB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV4VowsjWS1X6IFMZ1W6Tun9FVTQkMH4SO2DXyX77GmAiEAhaGksa%2B4GW4iuDmLiR59WvTulYX6070jb2TuCpu7FyAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjkM%2BF2zEQR7P8XQircAwdL22eX1R%2BEcS8ZQ%2FArm3E%2FEJbP7C6v3rqEYN3bB2mNjNOkRMUl%2BekBcSgXYtTnVWRjJhjz3Xv9wloifWbW10n1BhCaWmnK8PVQh7%2FSIesBxKJpWzwfiqyeuNnZHsswax5MKxm4OSwmUeNYW7i5fDg6q65ws9EEzK81HrxCPyOn1mtPmhI7POMwzX02HhddUB1YZosLf1F1yafDkk6Hr0aaNCP%2Fiz0n6CcJdwj%2B5P7Ij7sHLV4AtDtbWiTbMFLiGRKwMtUF8a3m1jUFU45sDgSX3%2FwLPGLSktZCOWMA8pvZUvRGI%2FT9eMG4W9%2F5kWA47IQGz0ZOMozKoeKyx4f90rBtD7POwbn4eovLtKcxkxgdZTN3ITcJu4uaUxsA2hYqdqrPoaahwKVE78Jlj66OYKZqlK9QYnnpUV0xKLf%2FzjksKXZCsps29EcYlTcsL%2Booj07312XOnvOG27P7ISvYVkt%2FkB3vpTmBC4RNQcHQkSSLQTbhPSO9Mpq2PkMTje4rqL1k5pcG73Y%2F7pUtersy02nhea6NJm7YCFDStRnh7xPYL7x1k3u9flv4ezLmLQ41XgVaYsCjTeySGF2%2BAHJwQt2sF6DeEgSLZ9S%2F8jdqupvZY3nRWH3dCzeIUczvMJuEqL0GOqUBgwpteflUswz%2BxYXhqbTPeqgxsBuHFYbe1NhFwxkTuVRBF4o3IooOQPIIBsRhenqXenZ9sVB7LARM9bf8I8Oru50P751knOdPiSc1Z1CtZUDsZZBh1xhou1aHgb362D8MJE28osqy18ob4VLCeIMwze0sF1nT8nbk%2B%2F0DanmN29M5tSg0%2FreG2iCiUujvL6RRGuxxQBrkWBW4ErwsgdHotnk4%2F5zW&X-Amz-Signature=9ba26cd6bc52029d4090067d4af3dfe600df4705482556e17af98df16fbac9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GO54VCB%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV4VowsjWS1X6IFMZ1W6Tun9FVTQkMH4SO2DXyX77GmAiEAhaGksa%2B4GW4iuDmLiR59WvTulYX6070jb2TuCpu7FyAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjkM%2BF2zEQR7P8XQircAwdL22eX1R%2BEcS8ZQ%2FArm3E%2FEJbP7C6v3rqEYN3bB2mNjNOkRMUl%2BekBcSgXYtTnVWRjJhjz3Xv9wloifWbW10n1BhCaWmnK8PVQh7%2FSIesBxKJpWzwfiqyeuNnZHsswax5MKxm4OSwmUeNYW7i5fDg6q65ws9EEzK81HrxCPyOn1mtPmhI7POMwzX02HhddUB1YZosLf1F1yafDkk6Hr0aaNCP%2Fiz0n6CcJdwj%2B5P7Ij7sHLV4AtDtbWiTbMFLiGRKwMtUF8a3m1jUFU45sDgSX3%2FwLPGLSktZCOWMA8pvZUvRGI%2FT9eMG4W9%2F5kWA47IQGz0ZOMozKoeKyx4f90rBtD7POwbn4eovLtKcxkxgdZTN3ITcJu4uaUxsA2hYqdqrPoaahwKVE78Jlj66OYKZqlK9QYnnpUV0xKLf%2FzjksKXZCsps29EcYlTcsL%2Booj07312XOnvOG27P7ISvYVkt%2FkB3vpTmBC4RNQcHQkSSLQTbhPSO9Mpq2PkMTje4rqL1k5pcG73Y%2F7pUtersy02nhea6NJm7YCFDStRnh7xPYL7x1k3u9flv4ezLmLQ41XgVaYsCjTeySGF2%2BAHJwQt2sF6DeEgSLZ9S%2F8jdqupvZY3nRWH3dCzeIUczvMJuEqL0GOqUBgwpteflUswz%2BxYXhqbTPeqgxsBuHFYbe1NhFwxkTuVRBF4o3IooOQPIIBsRhenqXenZ9sVB7LARM9bf8I8Oru50P751knOdPiSc1Z1CtZUDsZZBh1xhou1aHgb362D8MJE28osqy18ob4VLCeIMwze0sF1nT8nbk%2B%2F0DanmN29M5tSg0%2FreG2iCiUujvL6RRGuxxQBrkWBW4ErwsgdHotnk4%2F5zW&X-Amz-Signature=da1fde6bde2ba67380e70603e701a06b2591b9826384fcc9c0f35fe0e7f78812&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
