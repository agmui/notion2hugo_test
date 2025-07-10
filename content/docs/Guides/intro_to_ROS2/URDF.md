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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGULIJX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj3ppCa685Nr5v9drpnYl8GQ5ohn74GzlYWAHYqdmEAiA%2BgOik%2FRuatGur0pA2z4%2BW2%2BP%2BOUQHsT4F8GYGmT40OSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk4HJZN7t3EHYKDsKtwDnsWyu1IXZbEA8QKAeDxivIuTbksA%2BD4Yt0%2BTyrTSd281vW7AGfanc9UL6hiP9Dq0RgD5s4azkkno836Qfy6bNTvI3yp4v6a3aiw2KthgEZseiSXditQtpXHkZqvfHlXbBSYZ2xoguwRq1J%2FM5k%2BT%2FZ2miGIO7AAnDbHfYD8gZ4qvyKAAFh2l6KMpdW28Ibuqw9is2UKwVVfAHeyo6%2FHfG2KM64sQpjzxcBeugZTAzIw9i70wiM59WCRPRCPyml04Cp78lidyxliPKP9pB6wxmBM9yzt%2FpggvqkEBgu4pqkb9EcXHviAIdF%2B5VqGAR1dOBY8mS2IZQDPCw16LFg89qFaE52OJxVWW3rUl7sSB9P6KdU%2BjraPVKy30%2Fe1SRs2oCDsjpSqZGaM1GDpAWzmmVvjafa0IrvxMQzbNQ03fjIiYLBCkZv71VDB4dV%2FGcCI67JoDjBc3mHYN9gGVjXw44FAatSxLjfqGpMqlOZCMU2IH4l1a3GdBY4ReSdwYWmKKsDwOvkd84fOSSetKshixQx13aWm%2Bbhj454EQa4fMvss9yi743IxyGE0t0nmJO%2BX9KrnfGVle2Tq7sZ7b4aKUvmhfFqqwyM6DZMRLkStL09opYMcKbT5kOObgIjIw2%2Fi%2FwwY6pgFZJ%2FZUMrlkITG0Ju8d4Xhyq7Uzk8xwOWHjgHG%2Fq24focYm%2BIL368%2Bjmtbe%2FEHZAV%2B01u91XqinWhmVyXSaWXBGUcP%2F4WPWuVDm37Usp%2Fp%2FRwFqvy0i2Fmu2VNS%2Bdgzm7qrBie6gV0eJ%2Bxjhf0MYH%2FiJgS8ftCRyjUH%2BahIvwrKIRszkCFcd1w0ovepjx4YgfX4kIquORExDjGKl7sf6mulKQ4kjMBx&X-Amz-Signature=e7c53117524aca53e85ec55a33fffbdd7632c23b1e637c4fa20be4be51927961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGULIJX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj3ppCa685Nr5v9drpnYl8GQ5ohn74GzlYWAHYqdmEAiA%2BgOik%2FRuatGur0pA2z4%2BW2%2BP%2BOUQHsT4F8GYGmT40OSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk4HJZN7t3EHYKDsKtwDnsWyu1IXZbEA8QKAeDxivIuTbksA%2BD4Yt0%2BTyrTSd281vW7AGfanc9UL6hiP9Dq0RgD5s4azkkno836Qfy6bNTvI3yp4v6a3aiw2KthgEZseiSXditQtpXHkZqvfHlXbBSYZ2xoguwRq1J%2FM5k%2BT%2FZ2miGIO7AAnDbHfYD8gZ4qvyKAAFh2l6KMpdW28Ibuqw9is2UKwVVfAHeyo6%2FHfG2KM64sQpjzxcBeugZTAzIw9i70wiM59WCRPRCPyml04Cp78lidyxliPKP9pB6wxmBM9yzt%2FpggvqkEBgu4pqkb9EcXHviAIdF%2B5VqGAR1dOBY8mS2IZQDPCw16LFg89qFaE52OJxVWW3rUl7sSB9P6KdU%2BjraPVKy30%2Fe1SRs2oCDsjpSqZGaM1GDpAWzmmVvjafa0IrvxMQzbNQ03fjIiYLBCkZv71VDB4dV%2FGcCI67JoDjBc3mHYN9gGVjXw44FAatSxLjfqGpMqlOZCMU2IH4l1a3GdBY4ReSdwYWmKKsDwOvkd84fOSSetKshixQx13aWm%2Bbhj454EQa4fMvss9yi743IxyGE0t0nmJO%2BX9KrnfGVle2Tq7sZ7b4aKUvmhfFqqwyM6DZMRLkStL09opYMcKbT5kOObgIjIw2%2Fi%2FwwY6pgFZJ%2FZUMrlkITG0Ju8d4Xhyq7Uzk8xwOWHjgHG%2Fq24focYm%2BIL368%2Bjmtbe%2FEHZAV%2B01u91XqinWhmVyXSaWXBGUcP%2F4WPWuVDm37Usp%2Fp%2FRwFqvy0i2Fmu2VNS%2Bdgzm7qrBie6gV0eJ%2Bxjhf0MYH%2FiJgS8ftCRyjUH%2BahIvwrKIRszkCFcd1w0ovepjx4YgfX4kIquORExDjGKl7sf6mulKQ4kjMBx&X-Amz-Signature=1430e4063ab6ca9fad955d5c324709b79fe8e3db558d284a2797389bef1d2229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
