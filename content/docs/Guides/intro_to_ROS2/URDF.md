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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBHVTSY%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA7eeli8YZjjLqSJrEmxlOvOtQh%2BDNkkCH59Mzg6klcmAiEAqEXMupvRlZZF2h5MHw%2BHIfuwlCaNewjxRoj%2BsXAxt1kqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmTndjpRRsutluJTyrcA6yj4sPTQZ0A722sJm%2FwK2qCDItaAkcEkkMb00N5enyCkGEN%2F37C1FAK7vSVsZK%2FDYJMnNBaUn5hHeIUHzqvsbYrg0srHloECQctXJU4u6qYkc5oUaT6HtXjMlM59QZrhCNEVGWDxCPHSLttoqbyj2vL6X%2FX%2B83XQjsS57armhDVGJ1wUq3hzTit%2BOsN6h3EYVqzhCOY%2BzYVtLRH64YYNeiMydtm72KBHJlK8%2FrC6go4KARD3HQNN%2B%2BkEAHRrA9BrOzqmkNB0201lJhAkw%2BqgCMzp2NJyn4M6Y3OX%2FVTeHzVoNplhR8EXetNzwWIgRG5ujHYWmzJ7InXe13naYtI8ocEpAr2xZPk9Cd0M9%2FWB7Z79VRxsQy6wHR9mAF1P7UNFE58hkcVhJVcY8TKYrcaZZp%2BBey%2Fke8rdXA8xnN5nQKITkIttfTyCwt7V973t6p3uAtqPz17PWWZwI%2BK8bRz477yH348ZrQn7X5vmK3M54mVpxsmKPtAfsdabW97pNdUWbN499W3ZguPyZaJisuVn5uCoi%2FV76PXRs469TxAYmfHzZEiIbOSviwcCFrghsD8MFVF44X3k3fySSnf%2B4HE9GrRZdTnprkptkWNNhJ9LtwgxBJ6vghp7WxJXXo9MOqLvb4GOqUBOiblUwpG4z9b5RkmNTvfkKH2axqUg6GZc4YwarxcF6wkBiaG2l%2BbXME1Fz%2B8ABPDbDsGqh%2BazVVsNSyZ8HI%2BBjYEHqIJW1%2FXIoM%2BuMiNLg2FPCReSfZqayw5vki%2FvQf83SxsWKYLQ4ne58Ra0OzBMwJHhNyW6lotE6uVkOTCAxm0Ksv4snpBFoe4OIRZknxUKVCzIYZINxV8KiFRGv9SIwj8%2B3ij&X-Amz-Signature=20446c717e9107172fcc8d0864828c8ddf894a338b217ed7ddf20b48de15c70a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBHVTSY%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIA7eeli8YZjjLqSJrEmxlOvOtQh%2BDNkkCH59Mzg6klcmAiEAqEXMupvRlZZF2h5MHw%2BHIfuwlCaNewjxRoj%2BsXAxt1kqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmTndjpRRsutluJTyrcA6yj4sPTQZ0A722sJm%2FwK2qCDItaAkcEkkMb00N5enyCkGEN%2F37C1FAK7vSVsZK%2FDYJMnNBaUn5hHeIUHzqvsbYrg0srHloECQctXJU4u6qYkc5oUaT6HtXjMlM59QZrhCNEVGWDxCPHSLttoqbyj2vL6X%2FX%2B83XQjsS57armhDVGJ1wUq3hzTit%2BOsN6h3EYVqzhCOY%2BzYVtLRH64YYNeiMydtm72KBHJlK8%2FrC6go4KARD3HQNN%2B%2BkEAHRrA9BrOzqmkNB0201lJhAkw%2BqgCMzp2NJyn4M6Y3OX%2FVTeHzVoNplhR8EXetNzwWIgRG5ujHYWmzJ7InXe13naYtI8ocEpAr2xZPk9Cd0M9%2FWB7Z79VRxsQy6wHR9mAF1P7UNFE58hkcVhJVcY8TKYrcaZZp%2BBey%2Fke8rdXA8xnN5nQKITkIttfTyCwt7V973t6p3uAtqPz17PWWZwI%2BK8bRz477yH348ZrQn7X5vmK3M54mVpxsmKPtAfsdabW97pNdUWbN499W3ZguPyZaJisuVn5uCoi%2FV76PXRs469TxAYmfHzZEiIbOSviwcCFrghsD8MFVF44X3k3fySSnf%2B4HE9GrRZdTnprkptkWNNhJ9LtwgxBJ6vghp7WxJXXo9MOqLvb4GOqUBOiblUwpG4z9b5RkmNTvfkKH2axqUg6GZc4YwarxcF6wkBiaG2l%2BbXME1Fz%2B8ABPDbDsGqh%2BazVVsNSyZ8HI%2BBjYEHqIJW1%2FXIoM%2BuMiNLg2FPCReSfZqayw5vki%2FvQf83SxsWKYLQ4ne58Ra0OzBMwJHhNyW6lotE6uVkOTCAxm0Ksv4snpBFoe4OIRZknxUKVCzIYZINxV8KiFRGv9SIwj8%2B3ij&X-Amz-Signature=94f1ff75b552422cd8f2b9ba693070087cb9d6e30316cc2cfdcb7fd5995ce35f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
