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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBMN6UD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB39hBRWmey8XzCHcr61bux3Hvg3BqvRXe4GInJlqAVhAiEAzSz0a%2FD%2F4B32%2FAenH1AFSG%2Bdj4u3y9dK7K%2FcfnaGFw8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIWUc9oMh%2BfVCiLxMSrcA5irpWQSIjIwuDJZrIajasXgH9vC0PF%2Fj9Qkba%2FWQkk3X9PhekPd3AHuYMDILAjhzfReEyX9nJsHBoOCt9mJ9mmERXxONIY20gRoS3kPszGUJDluK18rji%2FhuEP3Va%2F2m7WDDhITmb4opHlalj%2BrVSqdvxesQzxpMeSWTHnJTlFx6A7mQHBGATLoSFn1%2F2HOAzYgIVTQhQMuIeVDgjZLuKljdYfzWzYN%2Bt5PCsbYNJhaySmsoMmtIJ4EtTKXzApOxEqtRYXpdNIqfDAxAi%2FNTQHuABGEL2eId5rjXp9gEzibfQKiwVDqoCLBR0Yv17H7ue39LjcnPEFtBJ7CZx4b6LnAwPWMpCvIovF3imhSlPH9N0pT9xRok3He%2FrroxWzLByUeiuEHMMDR3SDd3tyW1sCOu%2FllhdP%2BgeeDvOVZWjQYXYp0KrEKKfHvH0lRKMOVA2XgnX92CduWIYFJcBtU0QDw91kQF0rdr5zHCaKOErtm8kZ68s7G2W14W0Ill1%2BmTR3zgx7uZfC4i79Y2pfcK5GrMoT%2FPhjRk3wyhOe6vYkj2RmjCNly8UIiL18YQRrwEWEon6VMgGo8AhF%2BG0PaYFFEP4BbSPUpUAlQ86K2RB4QTCqYvGM6KvKJjmUoMPzl88AGOqUBMBCkTx8IisSnbtaVno8T23xAUaSlp4PvHMvEImPgRw1M%2FHZi2Nr2HX%2Fc7iMVQ4m6w6OgT8BVLt3OJzF8hsVERJqEsdj0jUJr7Vd%2BzadL3ieJUg7clIhIl3muKjPryFDGvxiXREor%2F6wUueR5G2FXrljnpLRqD38aHz6ioYUFmLS7Bexsh%2FW7DVdt1N4rg2JdxS9znFpf3Fk1RSn5off2MKsffeRS&X-Amz-Signature=4e8b62f9f216440f4dec38ff2c2f4a2e2510a985020b5fb60bcad6be870f1c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBMN6UD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB39hBRWmey8XzCHcr61bux3Hvg3BqvRXe4GInJlqAVhAiEAzSz0a%2FD%2F4B32%2FAenH1AFSG%2Bdj4u3y9dK7K%2FcfnaGFw8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIWUc9oMh%2BfVCiLxMSrcA5irpWQSIjIwuDJZrIajasXgH9vC0PF%2Fj9Qkba%2FWQkk3X9PhekPd3AHuYMDILAjhzfReEyX9nJsHBoOCt9mJ9mmERXxONIY20gRoS3kPszGUJDluK18rji%2FhuEP3Va%2F2m7WDDhITmb4opHlalj%2BrVSqdvxesQzxpMeSWTHnJTlFx6A7mQHBGATLoSFn1%2F2HOAzYgIVTQhQMuIeVDgjZLuKljdYfzWzYN%2Bt5PCsbYNJhaySmsoMmtIJ4EtTKXzApOxEqtRYXpdNIqfDAxAi%2FNTQHuABGEL2eId5rjXp9gEzibfQKiwVDqoCLBR0Yv17H7ue39LjcnPEFtBJ7CZx4b6LnAwPWMpCvIovF3imhSlPH9N0pT9xRok3He%2FrroxWzLByUeiuEHMMDR3SDd3tyW1sCOu%2FllhdP%2BgeeDvOVZWjQYXYp0KrEKKfHvH0lRKMOVA2XgnX92CduWIYFJcBtU0QDw91kQF0rdr5zHCaKOErtm8kZ68s7G2W14W0Ill1%2BmTR3zgx7uZfC4i79Y2pfcK5GrMoT%2FPhjRk3wyhOe6vYkj2RmjCNly8UIiL18YQRrwEWEon6VMgGo8AhF%2BG0PaYFFEP4BbSPUpUAlQ86K2RB4QTCqYvGM6KvKJjmUoMPzl88AGOqUBMBCkTx8IisSnbtaVno8T23xAUaSlp4PvHMvEImPgRw1M%2FHZi2Nr2HX%2Fc7iMVQ4m6w6OgT8BVLt3OJzF8hsVERJqEsdj0jUJr7Vd%2BzadL3ieJUg7clIhIl3muKjPryFDGvxiXREor%2F6wUueR5G2FXrljnpLRqD38aHz6ioYUFmLS7Bexsh%2FW7DVdt1N4rg2JdxS9znFpf3Fk1RSn5off2MKsffeRS&X-Amz-Signature=3ac71ad27ad53c216c574be96e2a2d6a96798f24480bf179daf9f6ba249adb65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
