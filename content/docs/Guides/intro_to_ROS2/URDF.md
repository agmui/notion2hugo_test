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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WPKOHE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIA%2FT9SoRyaXu0lKaNKB72qJNfYO93Er7KFyCeKMcSrGpAiBl6hf%2BpM3KdYfV1iKz5ySf9p%2BB0l%2BH6RvqiYOJsjYppSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMZ0OUpF%2F4W1AgOU6GKtwDuo1ns3WKhlFqDD4rflCoajtUR%2BMl%2FIuo2ik2n5hW8nHQ9rBElpt8hjAY9Z9wPZ3cXvE1oMyaMtDnauU7cxTSL7nzwloBvFwZrSZScdnNFGRZjFlwmPMTmr6Ob2Zb15dUDlU%2BR%2BAUX5QJCmS6goGPik547YdQmpDRGOy5jvmn7nQBX9Vi3uvlPyreTXytiQTs7VqmnK5F8pH19vI2Q328fUjrTh7FXI5MY2xU0txYcG1rp31aTr3zUX0QGIRNYlaeq88Vq%2F8CKezW8W%2BPN8e%2BnS1q6XLW2Ho6x7%2BinDX2U%2FZOZv5BgaLsgUTwSiFzK%2FClMVJyGT5jbp1GwHtvnCf7g5PFI18C7gyPvCzHkFX6qRz99ABNjAtnVW92vI56LDO1wF7JgboLK48UR%2B%2FC5U1GvNR3s%2BO%2BsJsHa52UjoZWbzuGX61qWq%2Fm1GzBccShuUC1bV8AvDkkXqVmQqK3dznBEwSnFdvQuaDRpfISWXxyKl2pBjoTh8EarS4ED%2FL6PMgOnZ%2BiDMP8ykH9h7YOliD%2B%2FY5D8f6nQdCZIbCSUfi5V9FBwzxpNL%2Bn62MZc1bnwQ09GanVe%2BR8eAFk96VWAjMIRWu1akbX%2Fgatd5QY5UqdSCaUIY109l%2F0gAZ9Q14wqIDGwQY6pgFsOqVzg56XH0WpZpwWUNBMT4KoBusS2jjIWnFdZ39NadAHuyrC08M0oUJ5OgVjK1X%2FM%2FaKwqETpnZHV5%2BtSEvX6Aqm%2Fda4UQyKPGkuHig54h05fxR2xEAWMUDr2owuWdYmSMd%2BimRO8NhPFHSVoWNR%2Fpm6NFjGBsUeM7kXqxSln6QaQ8G5rynsQ9M5%2FcS%2B%2Fwr4OjZ5joZxCh1I%2FjhFzjtEniMdZfpz&X-Amz-Signature=9a210644871bce08d546a351c0c0224db82fdac80f88ae39c23672a2f87219bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6WPKOHE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIA%2FT9SoRyaXu0lKaNKB72qJNfYO93Er7KFyCeKMcSrGpAiBl6hf%2BpM3KdYfV1iKz5ySf9p%2BB0l%2BH6RvqiYOJsjYppSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMZ0OUpF%2F4W1AgOU6GKtwDuo1ns3WKhlFqDD4rflCoajtUR%2BMl%2FIuo2ik2n5hW8nHQ9rBElpt8hjAY9Z9wPZ3cXvE1oMyaMtDnauU7cxTSL7nzwloBvFwZrSZScdnNFGRZjFlwmPMTmr6Ob2Zb15dUDlU%2BR%2BAUX5QJCmS6goGPik547YdQmpDRGOy5jvmn7nQBX9Vi3uvlPyreTXytiQTs7VqmnK5F8pH19vI2Q328fUjrTh7FXI5MY2xU0txYcG1rp31aTr3zUX0QGIRNYlaeq88Vq%2F8CKezW8W%2BPN8e%2BnS1q6XLW2Ho6x7%2BinDX2U%2FZOZv5BgaLsgUTwSiFzK%2FClMVJyGT5jbp1GwHtvnCf7g5PFI18C7gyPvCzHkFX6qRz99ABNjAtnVW92vI56LDO1wF7JgboLK48UR%2B%2FC5U1GvNR3s%2BO%2BsJsHa52UjoZWbzuGX61qWq%2Fm1GzBccShuUC1bV8AvDkkXqVmQqK3dznBEwSnFdvQuaDRpfISWXxyKl2pBjoTh8EarS4ED%2FL6PMgOnZ%2BiDMP8ykH9h7YOliD%2B%2FY5D8f6nQdCZIbCSUfi5V9FBwzxpNL%2Bn62MZc1bnwQ09GanVe%2BR8eAFk96VWAjMIRWu1akbX%2Fgatd5QY5UqdSCaUIY109l%2F0gAZ9Q14wqIDGwQY6pgFsOqVzg56XH0WpZpwWUNBMT4KoBusS2jjIWnFdZ39NadAHuyrC08M0oUJ5OgVjK1X%2FM%2FaKwqETpnZHV5%2BtSEvX6Aqm%2Fda4UQyKPGkuHig54h05fxR2xEAWMUDr2owuWdYmSMd%2BimRO8NhPFHSVoWNR%2Fpm6NFjGBsUeM7kXqxSln6QaQ8G5rynsQ9M5%2FcS%2B%2Fwr4OjZ5joZxCh1I%2FjhFzjtEniMdZfpz&X-Amz-Signature=27e17e993312653f26cca61e020e97da64f01c06dba2c0983467dd0a7d88e412&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
