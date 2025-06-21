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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGRL3FYD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcMmbyXRCncliePWdfkHbjIVVawhebmVQmHLEPA3YCeQIhAOv%2F8hIPJp2VNbkPDNS0%2FbDUYvPmm2amaQyEjki5RJ7FKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMO2L%2B%2BhBN8QrOhqQq3AMg7UxFkt1Fggw0Nn9vmARg%2FeIhHc5vkkfb4uZiuZk671tmjb73G9PeyoYqDZSn1%2BqZTsCSxkbieR3K6PZChV2i8tCHBZBvfAqRs%2FY5uSE%2Bk5Zh2TpK85snhJZxnmT5%2FQu%2FB6Ro06Fp4iHJTYZWoGNpArvX3un%2FTCJPyQzHerbUfWda5%2F%2FqRnuB6%2Fu3GQibUIr2%2Fe8yPvPNZdenOVBHuUPnd%2By6Qv2mbg1RyjO2d8eMLa7DgkMKkZYYDqUQkwJn8aP5HF%2FoVqZtTaSOYj6MXBz4pn2T6OegPtWuo8DK2T1RyEzf55vNz9HiIqKq%2Bea%2B2O96%2FqmwaMjvoX6St8pB3FPwGvUp4%2FbvM3U5q%2F2UUhJqrquYmD72ca8lMov6MwnUrpwUYhw3j5HKSU7VNl1T%2FMZMffB%2Fcs9gvylm1Nh03YTKNF33PRt8ufWT1oojpnaO4G6HKR6Bpva8%2BCHg66%2FMy2AivmwPWwIJsx1lPTEJTuTPq6fE6ZRMcMLcGyA2tt7ND8swOYaXxrZFsV0JhekDLvPurZYKt4vD%2BwQO3ywMGZbr0bEqDwtmjw0SxWzUhXH5pQdxfgIzNtd2Tmt%2B3A97Ow1zgH3A0KfYiyD3IY%2Bmho%2F5%2FvQ1rf0iZNYhI0UVHDDvr9jCBjqkAdExEwxiu0r1U77rwXsc%2FRJ4hdiFMoyOY1eCmOG8OygDVaIxGwrpkeEvrzPLq4kNU%2F5ktJ09Oxjvsgo4Kycq8bdWyhAZqqknq0MUtLOnjp467mDx9AJjuh1b0qao5CQsjvWd8C%2BqjLHVzhZalJAn%2FQVEqWfxm2Cn%2Fg6o3VBe56x1OfjBKwvSHjOSrx7zK4JYTee%2BEowgezywOIQTbrEJ51nSfd%2F%2F&X-Amz-Signature=f7cda0866ad3d4be6d8934d79c428218060e26e9d4d4cda4c7ba73c886ea053b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGRL3FYD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcMmbyXRCncliePWdfkHbjIVVawhebmVQmHLEPA3YCeQIhAOv%2F8hIPJp2VNbkPDNS0%2FbDUYvPmm2amaQyEjki5RJ7FKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMO2L%2B%2BhBN8QrOhqQq3AMg7UxFkt1Fggw0Nn9vmARg%2FeIhHc5vkkfb4uZiuZk671tmjb73G9PeyoYqDZSn1%2BqZTsCSxkbieR3K6PZChV2i8tCHBZBvfAqRs%2FY5uSE%2Bk5Zh2TpK85snhJZxnmT5%2FQu%2FB6Ro06Fp4iHJTYZWoGNpArvX3un%2FTCJPyQzHerbUfWda5%2F%2FqRnuB6%2Fu3GQibUIr2%2Fe8yPvPNZdenOVBHuUPnd%2By6Qv2mbg1RyjO2d8eMLa7DgkMKkZYYDqUQkwJn8aP5HF%2FoVqZtTaSOYj6MXBz4pn2T6OegPtWuo8DK2T1RyEzf55vNz9HiIqKq%2Bea%2B2O96%2FqmwaMjvoX6St8pB3FPwGvUp4%2FbvM3U5q%2F2UUhJqrquYmD72ca8lMov6MwnUrpwUYhw3j5HKSU7VNl1T%2FMZMffB%2Fcs9gvylm1Nh03YTKNF33PRt8ufWT1oojpnaO4G6HKR6Bpva8%2BCHg66%2FMy2AivmwPWwIJsx1lPTEJTuTPq6fE6ZRMcMLcGyA2tt7ND8swOYaXxrZFsV0JhekDLvPurZYKt4vD%2BwQO3ywMGZbr0bEqDwtmjw0SxWzUhXH5pQdxfgIzNtd2Tmt%2B3A97Ow1zgH3A0KfYiyD3IY%2Bmho%2F5%2FvQ1rf0iZNYhI0UVHDDvr9jCBjqkAdExEwxiu0r1U77rwXsc%2FRJ4hdiFMoyOY1eCmOG8OygDVaIxGwrpkeEvrzPLq4kNU%2F5ktJ09Oxjvsgo4Kycq8bdWyhAZqqknq0MUtLOnjp467mDx9AJjuh1b0qao5CQsjvWd8C%2BqjLHVzhZalJAn%2FQVEqWfxm2Cn%2Fg6o3VBe56x1OfjBKwvSHjOSrx7zK4JYTee%2BEowgezywOIQTbrEJ51nSfd%2F%2F&X-Amz-Signature=f9809fced6cf7dc18d7e0494afc40741bf2efa83032b8e944d0935b1f640ecf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
