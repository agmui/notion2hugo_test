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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD4LBONK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrk8e8bci1W%2BrVOCXIL1IdXhah%2BuALI%2Fnke3y3xt82VAiArtmVYsEJnzrR9HnLkX%2FzFgMSvqv2FiaFOr57ft5wBLyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWXXWccq5K8zAjTVRKtwDPfATMDEVzTCG2EwzpgH%2BLRMXR1C74yg6F7Qy%2B6jgoDxHE9GYr%2FQPUy9ICc8KnZrcA%2FJikElXEpUNygG7DRSzUM0YXjwT%2FPQvzDRaadQ1GCy5j7Myv5PsjGZzR8MnDxAFmbiqMdpKJFbPJ0i3NudBNncX3t9o6YxQ%2BXzz7muhBiLs6kqsODJkYfdpcuD5xvmOIqXXDacUvOAAiBGjBQaTlZPbgXJvUWfdkfBDt%2Bah8PFYyvdKqp5nAhuCIryldLgwwieFrVolMKEIKLSBJ2bGMVVWhtQwtZZoLqbhbAC9Y%2BbhmftaJf1GQrFHOrgc2LUpgm%2BOHRw0ysS0tvAM6gYbynb48T5HOHdnjuqQZ4BxxTS7Yg5jo4StSQZBBO0mrzgZ9nwO8475%2FpUm0VHDICg6fosImtu%2F27Kf%2FxtzppJwi%2FnbKsA9PU6eiQW%2BaeH2w%2BEPdskt52KYm4PWxeVoWbSEu3MylyjxRZ1zLBdglj%2FUZJ9CqtRJ8gQzrDCC66nSt4%2BIj1Y8XZgqj2k9%2Bn043xS3GCGu37KUaBVj2z%2BVX7DLsl1OJvXtrpaVPHvDcS%2FFuupN3z0yoU%2BZ%2FdDIjIvlaJDLWuiuOOWceKNgFXWOj%2BrggmS1rVrL9k%2FDeIJpI7cwr%2BKXwgY6pgE45Si737BALBj52PancPTMv5dpRe%2FaVcrdOBk2GbGetRbWgd5epmShnXnFcPsXN60FytTdK0z%2BFsWML1idrgPt8vCnC%2FIokVqQmO4lOCjtigSepTXLdCtiaKU9zLhe9JtLTmsD%2FthAvSxv07SfgiptqNNFX5SnIDPZEkix%2Bmt08hXWbHzgkAOwAOpVtpVqWf6FwzTL0AOgTEkHGjqM15kaZG2g5mh5&X-Amz-Signature=bcb2979db62da40d6082fd0d64e0d99122ed24e75f6b5c88b56589fac7407836&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD4LBONK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrk8e8bci1W%2BrVOCXIL1IdXhah%2BuALI%2Fnke3y3xt82VAiArtmVYsEJnzrR9HnLkX%2FzFgMSvqv2FiaFOr57ft5wBLyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWXXWccq5K8zAjTVRKtwDPfATMDEVzTCG2EwzpgH%2BLRMXR1C74yg6F7Qy%2B6jgoDxHE9GYr%2FQPUy9ICc8KnZrcA%2FJikElXEpUNygG7DRSzUM0YXjwT%2FPQvzDRaadQ1GCy5j7Myv5PsjGZzR8MnDxAFmbiqMdpKJFbPJ0i3NudBNncX3t9o6YxQ%2BXzz7muhBiLs6kqsODJkYfdpcuD5xvmOIqXXDacUvOAAiBGjBQaTlZPbgXJvUWfdkfBDt%2Bah8PFYyvdKqp5nAhuCIryldLgwwieFrVolMKEIKLSBJ2bGMVVWhtQwtZZoLqbhbAC9Y%2BbhmftaJf1GQrFHOrgc2LUpgm%2BOHRw0ysS0tvAM6gYbynb48T5HOHdnjuqQZ4BxxTS7Yg5jo4StSQZBBO0mrzgZ9nwO8475%2FpUm0VHDICg6fosImtu%2F27Kf%2FxtzppJwi%2FnbKsA9PU6eiQW%2BaeH2w%2BEPdskt52KYm4PWxeVoWbSEu3MylyjxRZ1zLBdglj%2FUZJ9CqtRJ8gQzrDCC66nSt4%2BIj1Y8XZgqj2k9%2Bn043xS3GCGu37KUaBVj2z%2BVX7DLsl1OJvXtrpaVPHvDcS%2FFuupN3z0yoU%2BZ%2FdDIjIvlaJDLWuiuOOWceKNgFXWOj%2BrggmS1rVrL9k%2FDeIJpI7cwr%2BKXwgY6pgE45Si737BALBj52PancPTMv5dpRe%2FaVcrdOBk2GbGetRbWgd5epmShnXnFcPsXN60FytTdK0z%2BFsWML1idrgPt8vCnC%2FIokVqQmO4lOCjtigSepTXLdCtiaKU9zLhe9JtLTmsD%2FthAvSxv07SfgiptqNNFX5SnIDPZEkix%2Bmt08hXWbHzgkAOwAOpVtpVqWf6FwzTL0AOgTEkHGjqM15kaZG2g5mh5&X-Amz-Signature=5505dcbfdfe2bad472bd45a8bba4145869525e713eb53b2450e40e28037d4ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
