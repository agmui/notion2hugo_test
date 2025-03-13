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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W4U45MH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtMWvGBZ1UNod8%2FCQJ7lueZ8bTSKVRNWpsOHo8aWU7awIhAPZy4voxVSgjzyqoLYKZh2vxGwIrzvFxoPWTIKIiS0pNKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwATzA705PIEwx%2Fclwq3AMQ0OkAbF5FB%2FMPW7UWOQ7%2FRaefF%2Bru7%2B%2BK5g6Qask8zlEoyWh1DseUIg6zZniIJ8O2a7Kn4M%2BexJottatrcucbafIbYYYmFpad30Wm4qPWjBFeCvPcix4ZdUWpXWsOzkAIL%2BUTydWg%2Fk67A4u9GMZAYUT3yHRdu9GyKLrtkRHvfl76HZI0Fy3O5Rk0Fv2rmb0SDe0n5KMEr9%2BEkTZhWxK4owvKUXXmxx9FjBhJoLLLuYtvlJI3%2BVvv3Dcy0dz6iHAqVLfWphcXzo9Gzf6j6rErJJwmz6PfNYfeK7D%2B2jXm7tMoWoGICqeehJ8TKGqwhdJ8TJ%2FR1c%2BjCMFiqUZAcSUcIpZbZjvFrfpBJfl107jftoTgqvWcp2uhBj39P23OpD8SO1jTqNxsyVxLcDAolJ1mQyTBqCXfBxU0Pg6m4HKUO8bOse5Q62gico9AvjbcQiG4CI3m8hgdJMT8wFl12MnW%2Bwwr%2BVTq4DuM5wCG7fS31lSOnMWQEvGK79yIeNRyIaOyLsku%2FyE7UxDbOel8SfCgzhbG437CtRtnwtrT%2FnqEXTzoRRmMgkbWUDYovFuL8kcMYPejf3rAQUIyNiRa7qJPMVY0b7t6894YbaIDPUc%2FYAe1qe9WLBnxFaAtcDC%2Fk82%2BBjqkAbrULutKvDMn3h7lXQUzJEc2wEBAxvKm2ZK4xDNSnAqRwGdi9lQ%2FqmKXPNkLYIpY9nTEgnnMERZcKnTAzYEBm9oGpgF0MAsBirV498y9qM%2Fos2dGXPvdnIkyiRb1T7gePTEtMlqNLiZd83UtkvK4%2BOfSKab2EMqu7zADOVI7csOVEoBVmaMnINzLZasAybYjtWs%2Fk43EwF7LEhkc10ukMFTF3FAe&X-Amz-Signature=7c8b4c6a02a090d8371ca7a0377a189d89b34cde5f69a6dc75607fd9423b7953&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W4U45MH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtMWvGBZ1UNod8%2FCQJ7lueZ8bTSKVRNWpsOHo8aWU7awIhAPZy4voxVSgjzyqoLYKZh2vxGwIrzvFxoPWTIKIiS0pNKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwATzA705PIEwx%2Fclwq3AMQ0OkAbF5FB%2FMPW7UWOQ7%2FRaefF%2Bru7%2B%2BK5g6Qask8zlEoyWh1DseUIg6zZniIJ8O2a7Kn4M%2BexJottatrcucbafIbYYYmFpad30Wm4qPWjBFeCvPcix4ZdUWpXWsOzkAIL%2BUTydWg%2Fk67A4u9GMZAYUT3yHRdu9GyKLrtkRHvfl76HZI0Fy3O5Rk0Fv2rmb0SDe0n5KMEr9%2BEkTZhWxK4owvKUXXmxx9FjBhJoLLLuYtvlJI3%2BVvv3Dcy0dz6iHAqVLfWphcXzo9Gzf6j6rErJJwmz6PfNYfeK7D%2B2jXm7tMoWoGICqeehJ8TKGqwhdJ8TJ%2FR1c%2BjCMFiqUZAcSUcIpZbZjvFrfpBJfl107jftoTgqvWcp2uhBj39P23OpD8SO1jTqNxsyVxLcDAolJ1mQyTBqCXfBxU0Pg6m4HKUO8bOse5Q62gico9AvjbcQiG4CI3m8hgdJMT8wFl12MnW%2Bwwr%2BVTq4DuM5wCG7fS31lSOnMWQEvGK79yIeNRyIaOyLsku%2FyE7UxDbOel8SfCgzhbG437CtRtnwtrT%2FnqEXTzoRRmMgkbWUDYovFuL8kcMYPejf3rAQUIyNiRa7qJPMVY0b7t6894YbaIDPUc%2FYAe1qe9WLBnxFaAtcDC%2Fk82%2BBjqkAbrULutKvDMn3h7lXQUzJEc2wEBAxvKm2ZK4xDNSnAqRwGdi9lQ%2FqmKXPNkLYIpY9nTEgnnMERZcKnTAzYEBm9oGpgF0MAsBirV498y9qM%2Fos2dGXPvdnIkyiRb1T7gePTEtMlqNLiZd83UtkvK4%2BOfSKab2EMqu7zADOVI7csOVEoBVmaMnINzLZasAybYjtWs%2Fk43EwF7LEhkc10ukMFTF3FAe&X-Amz-Signature=1f62069761cfcc1976703514bb0cd4f25e2507fff8a9aef2d743ade38e5aca49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
