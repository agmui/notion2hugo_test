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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXOKWAF%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDJpBO7K6zDifeh7cam2JMWOKfDfsIRSyk9wR0E6sq5DAIhAMG3PQCIDCMYkfj1DBpWTvshXx%2BfJWAPts0VoD8g2LqYKv8DCFgQABoMNjM3NDIzMTgzODA1IgxfA03DSZt6bUsNQGIq3AOWowLbOhWeLIxx5ytowq99wKMsKlUSM%2FkI7eHEuH%2Fq8EzZZitV1xsVfEyBTL%2FTaEoEacdcO8F3DxOtLXIAxmhu%2BxLjK%2F00V5eoB0V6v%2FWT%2BXA7fl9ENY1o9eNPYPpqw7U9dOOybptpu3gbEBdifNuuTuW0rGvSMGPz167C920tnBxh1u3%2FgnSHqFvYmMZiSnUaUYJYISJ8xIVTQRKjcmEhBSMUTLrin3dHfQCAiG%2BUFEgc70ZuORijfrlrkK8HN2T5mHNCiq%2F7GmwfhzTs%2BR0JTkL1w3m1Ou2pyICuiitr%2BcZrwRXkXyXhINru186UhX3X32EwfPgXVDxhNW8EG0U3MBwrAi6mBSQ5zTDd3Mplzf5e3Zyay5XzzvUPmsBKHUsW715n1HrYAaQhESOLGaxzQgxY5EGxzxxEL1OJB1h5bnpUTx7UpVZUL8EwTfmCnB2fCk8SDz2xJ9bNNPvH%2FeD170dMK14sRBlx9MKtYOF1QkUsRmdTZzjc2dn01BNttP015z3PC76YiV83RngOWEFkSXq15KOjRmjJfYkm1pIbE7QLHILxRaGPEtUJaQQCZKkgQGXz1n2I2MEwqhUtI8CoIAJngTpujTrm4aNVOsudIR%2BgXQysiuXedUcuEDCp4K%2B%2BBjqkAUCidxIKLIB2cNSOxH3Ld76j5rLXKkjVY7U3LPZLBM7Ad8qWjFvg5drjy3Jnc01JYvaCFLIQkGSUpHg16tMjTjlU8jDkGHZCPOTXX%2BhxXKbIqFW0h8voXUpanAGOpMOp5W8vdBU%2FnVRYSFGP%2BjKt6mThoxL5hUG1wa2DRT8XlZfFWd%2Bxf9nHVRL6QAVYILBmQE9sqEiicuaGEXOPSa4Ncxo6lCeH&X-Amz-Signature=c644b509c997c6ad1ff744edaf8ee6a6991e4d1ca9aba0ffe0db6dc6cee99938&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXOKWAF%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDJpBO7K6zDifeh7cam2JMWOKfDfsIRSyk9wR0E6sq5DAIhAMG3PQCIDCMYkfj1DBpWTvshXx%2BfJWAPts0VoD8g2LqYKv8DCFgQABoMNjM3NDIzMTgzODA1IgxfA03DSZt6bUsNQGIq3AOWowLbOhWeLIxx5ytowq99wKMsKlUSM%2FkI7eHEuH%2Fq8EzZZitV1xsVfEyBTL%2FTaEoEacdcO8F3DxOtLXIAxmhu%2BxLjK%2F00V5eoB0V6v%2FWT%2BXA7fl9ENY1o9eNPYPpqw7U9dOOybptpu3gbEBdifNuuTuW0rGvSMGPz167C920tnBxh1u3%2FgnSHqFvYmMZiSnUaUYJYISJ8xIVTQRKjcmEhBSMUTLrin3dHfQCAiG%2BUFEgc70ZuORijfrlrkK8HN2T5mHNCiq%2F7GmwfhzTs%2BR0JTkL1w3m1Ou2pyICuiitr%2BcZrwRXkXyXhINru186UhX3X32EwfPgXVDxhNW8EG0U3MBwrAi6mBSQ5zTDd3Mplzf5e3Zyay5XzzvUPmsBKHUsW715n1HrYAaQhESOLGaxzQgxY5EGxzxxEL1OJB1h5bnpUTx7UpVZUL8EwTfmCnB2fCk8SDz2xJ9bNNPvH%2FeD170dMK14sRBlx9MKtYOF1QkUsRmdTZzjc2dn01BNttP015z3PC76YiV83RngOWEFkSXq15KOjRmjJfYkm1pIbE7QLHILxRaGPEtUJaQQCZKkgQGXz1n2I2MEwqhUtI8CoIAJngTpujTrm4aNVOsudIR%2BgXQysiuXedUcuEDCp4K%2B%2BBjqkAUCidxIKLIB2cNSOxH3Ld76j5rLXKkjVY7U3LPZLBM7Ad8qWjFvg5drjy3Jnc01JYvaCFLIQkGSUpHg16tMjTjlU8jDkGHZCPOTXX%2BhxXKbIqFW0h8voXUpanAGOpMOp5W8vdBU%2FnVRYSFGP%2BjKt6mThoxL5hUG1wa2DRT8XlZfFWd%2Bxf9nHVRL6QAVYILBmQE9sqEiicuaGEXOPSa4Ncxo6lCeH&X-Amz-Signature=b1f2b93f16c8dec64c06577e7ae13984377f160e07b4ea9e6bd86276af7675b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
