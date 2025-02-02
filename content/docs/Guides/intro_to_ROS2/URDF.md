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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K3PRC57%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArozBJU1suDYH3JW8J8ttDVrr9G%2FX%2FX%2Fjo4koNhovnAAiAQK2RFeEVbdQmmkzoHMjSzUPZdTEUEOJl8vvRZxqojDSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMAaSWzp6P%2FJcVHnNKtwDm1KbkyIrX5sp82%2Bq8zd%2FRp0QtVROwRG8x30kZlBRR71TEEkk4Xd5605V2ci%2FP26vB0ezvWlEf6zDkCG2d0WwP20FA%2F1HcPkUPS5ZMVfE2T%2FDh%2FBaYNCBsVqoes3Nv9kl5FR9Dc%2FuToT305pnM2eq3x8O9X5qPtSCBdYFkzp9WjQr9gsieFLKUW%2BzDL1%2FP6DN%2FbX1%2BZ6cnfATSlR6Yr5n9gyKUaMyeCks3e50pZDTQeDBP9gadArrWEH5yaqSCpCTT33tYaVuyNj1HH%2FyMRH71xh%2BURzeIHinJJmJrfEBWSMASRsw7yXlRL65CsH%2FnEhVmAcj3Qcw31b00g9Vw%2FGYb9xzbg1fKZME6zzrBqJf7wpoEytaA5jVKR8FK8DCbD59c2D1rRQD4vpnEsf8StUpkJbbga9oWAEr0DHGz0dgjQD%2F%2BoehqoicoExAwvDitfa8ZMY9tGnSVVLL706pKo7q6VdJokFMR5ZzXx6AW8EEqbFdpYAjxnd91ga3fkZXR81M6oVUiecf0HFB34fw2i7yfJA3CYJq6Hl1ADkF7KiflOYUiquMm4LnbkLcciCbz96eQf0R32JZukior2fk6hk67FV%2FkEl9HqhtPQisKABhggVBOUSUr8O2QJn%2F8MkwuNv%2BvAY6pgF51DwyYmHY2NCE5a0CBCO9l4AQt7bFR37Kj9NZmEcfk%2FW0q8RRWhoyk3j51Z7zp839pc0wnvrGRTf5VV6%2FK5SzqfUmADKNWRsjwK9YXU2qFIVuUEGRMsqx69xQ7MMXMKQ%2Fo%2BFR%2FqhpI%2F0iLaMsuH0cb6MlcnTu2iEXYO%2FV0LtIyfGh%2F7syTOdx%2FWH7LeSSiAe1EnOWixN80l3jNoYp283E49Kpi1SD&X-Amz-Signature=9176b8a2c95d97a035db7693f1baa59b60003bef69f6972cf817bd08998d8ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K3PRC57%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArozBJU1suDYH3JW8J8ttDVrr9G%2FX%2FX%2Fjo4koNhovnAAiAQK2RFeEVbdQmmkzoHMjSzUPZdTEUEOJl8vvRZxqojDSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMAaSWzp6P%2FJcVHnNKtwDm1KbkyIrX5sp82%2Bq8zd%2FRp0QtVROwRG8x30kZlBRR71TEEkk4Xd5605V2ci%2FP26vB0ezvWlEf6zDkCG2d0WwP20FA%2F1HcPkUPS5ZMVfE2T%2FDh%2FBaYNCBsVqoes3Nv9kl5FR9Dc%2FuToT305pnM2eq3x8O9X5qPtSCBdYFkzp9WjQr9gsieFLKUW%2BzDL1%2FP6DN%2FbX1%2BZ6cnfATSlR6Yr5n9gyKUaMyeCks3e50pZDTQeDBP9gadArrWEH5yaqSCpCTT33tYaVuyNj1HH%2FyMRH71xh%2BURzeIHinJJmJrfEBWSMASRsw7yXlRL65CsH%2FnEhVmAcj3Qcw31b00g9Vw%2FGYb9xzbg1fKZME6zzrBqJf7wpoEytaA5jVKR8FK8DCbD59c2D1rRQD4vpnEsf8StUpkJbbga9oWAEr0DHGz0dgjQD%2F%2BoehqoicoExAwvDitfa8ZMY9tGnSVVLL706pKo7q6VdJokFMR5ZzXx6AW8EEqbFdpYAjxnd91ga3fkZXR81M6oVUiecf0HFB34fw2i7yfJA3CYJq6Hl1ADkF7KiflOYUiquMm4LnbkLcciCbz96eQf0R32JZukior2fk6hk67FV%2FkEl9HqhtPQisKABhggVBOUSUr8O2QJn%2F8MkwuNv%2BvAY6pgF51DwyYmHY2NCE5a0CBCO9l4AQt7bFR37Kj9NZmEcfk%2FW0q8RRWhoyk3j51Z7zp839pc0wnvrGRTf5VV6%2FK5SzqfUmADKNWRsjwK9YXU2qFIVuUEGRMsqx69xQ7MMXMKQ%2Fo%2BFR%2FqhpI%2F0iLaMsuH0cb6MlcnTu2iEXYO%2FV0LtIyfGh%2F7syTOdx%2FWH7LeSSiAe1EnOWixN80l3jNoYp283E49Kpi1SD&X-Amz-Signature=ffb80183827426948fffdb8e41a179724c9e5d997eeed6c7b6385e482910f98d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
