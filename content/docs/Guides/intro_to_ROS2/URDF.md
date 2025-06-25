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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3K66WYQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFkm%2FP0lgP5z%2FyMJab6eMFq%2F36o3nvwPo7PGm9670OLfAiAJu6JI9F9zbwUkRbeg%2Bwgkrku9TO%2BTpJNfht4RkdL7GSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMnqeXIH%2F0awYhJxm3KtwD%2F%2FajGqfj%2BWZNokHP4PB9wqN1Pe1829Wz2hkwTFbE4cArfD45HD66FCMCD9Mlt8BvtYr3bhE0LBWULcaCiLe3OHE0%2FhkSximJmOYcoYew5Y6dhKYFbRR3J5e24%2BZEU6Ypz13xg0bQV1HGIiS1S67dFZTATLn05M9O0HhZBJAAkns7Z0VPX9P3cOoL4IV8EyN%2FWA40HV55mIzIb%2FtnrLkh1U01XZ1bxJULPlrh6nKsEKgOJwXMqKCtMtGFXC%2BGlBKOWvyWpxNAusnxs4QgE4uqYUvoI0rS%2FQPkkRAeTX1dIxEmefVkqvRuuXPd03kxzRCYQerD9nqh0qz3HLoVxj1GxZeuIrDLbsMeSDPCeNg40vbFXAbQbiJsGfa9m6B%2B9vHz0jxcJmpY2MRe9NfGFmX5faaJlC9fk8C0fqQJ4Btprx6OVrSCSeguqJ4SkFPkiSPCQXM6avfYOIPgTyDrv3%2F7eiCLpXWifW%2B8X1whshDp5yH9hUDewG7z7uncD3%2BwVr7s3MpY7WDeBA24BzivWER%2FD8%2Fo0OlgstxH%2BIHEpZnrRc6hiZjgHZ7ix0wR6DOgkOtdN4Vqz2XWUJUKS%2FwOPuqpbhI%2FWGsNka0Uf9uYxOUv7EApofmVs7UzppnK4t4wxozxwgY6pgF3O9Zv%2FSegz%2FrmAftyYOj228qgwVd6snySy6qsRWFGfV3ImWXBObOO9VB5AHQPZA6Y3kSY9C2Hykcva7fXX5fLC4upJLoqki%2BCHizvGPUiFg98xJokZVftQm%2FUtXwEgwX%2BktR3CzPDkO1lIfFmaO3cTWRYbheeuJR3YWEkeUU1TdZa7MqL68Vp%2F%2BQin4ZwxVubXR5CZVSiZovZNokC8krqlQ620Raq&X-Amz-Signature=30734741072ad4e5a813d4a3a7085433eb8b6e7f88760f5ecd54f65aa856d879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3K66WYQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFkm%2FP0lgP5z%2FyMJab6eMFq%2F36o3nvwPo7PGm9670OLfAiAJu6JI9F9zbwUkRbeg%2Bwgkrku9TO%2BTpJNfht4RkdL7GSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMnqeXIH%2F0awYhJxm3KtwD%2F%2FajGqfj%2BWZNokHP4PB9wqN1Pe1829Wz2hkwTFbE4cArfD45HD66FCMCD9Mlt8BvtYr3bhE0LBWULcaCiLe3OHE0%2FhkSximJmOYcoYew5Y6dhKYFbRR3J5e24%2BZEU6Ypz13xg0bQV1HGIiS1S67dFZTATLn05M9O0HhZBJAAkns7Z0VPX9P3cOoL4IV8EyN%2FWA40HV55mIzIb%2FtnrLkh1U01XZ1bxJULPlrh6nKsEKgOJwXMqKCtMtGFXC%2BGlBKOWvyWpxNAusnxs4QgE4uqYUvoI0rS%2FQPkkRAeTX1dIxEmefVkqvRuuXPd03kxzRCYQerD9nqh0qz3HLoVxj1GxZeuIrDLbsMeSDPCeNg40vbFXAbQbiJsGfa9m6B%2B9vHz0jxcJmpY2MRe9NfGFmX5faaJlC9fk8C0fqQJ4Btprx6OVrSCSeguqJ4SkFPkiSPCQXM6avfYOIPgTyDrv3%2F7eiCLpXWifW%2B8X1whshDp5yH9hUDewG7z7uncD3%2BwVr7s3MpY7WDeBA24BzivWER%2FD8%2Fo0OlgstxH%2BIHEpZnrRc6hiZjgHZ7ix0wR6DOgkOtdN4Vqz2XWUJUKS%2FwOPuqpbhI%2FWGsNka0Uf9uYxOUv7EApofmVs7UzppnK4t4wxozxwgY6pgF3O9Zv%2FSegz%2FrmAftyYOj228qgwVd6snySy6qsRWFGfV3ImWXBObOO9VB5AHQPZA6Y3kSY9C2Hykcva7fXX5fLC4upJLoqki%2BCHizvGPUiFg98xJokZVftQm%2FUtXwEgwX%2BktR3CzPDkO1lIfFmaO3cTWRYbheeuJR3YWEkeUU1TdZa7MqL68Vp%2F%2BQin4ZwxVubXR5CZVSiZovZNokC8krqlQ620Raq&X-Amz-Signature=e4752fa14ab505c74ed70c2f65d4614b36792d525879585011c6efbcbe435c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
