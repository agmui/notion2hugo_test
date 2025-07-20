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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VESRXUUT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZME4Mf734abR8vvTXpcjcx2ZhynScxv%2FVzGi9a8%2B5uAiEAkI0Au3Nfbnobh%2BBCrpujMcA5%2FXQh86bemHsl3EzX644qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuxxSHpRfIvTboEByrcAyQ6yiDmxwtfET0qIVCMeu2fSakvZThPAWJDRhuOxh26Bhm3ez%2FOg8%2BhNsm8ZYp8BfVKSzjVpZjpBqwdvLpb6TTkAf6%2BfbxRcALatDWhTFJhp47f7MvZhJHrSrz7KUt0rDsDos0sPfaiJKOZscjesbJTefzR8IY1cEXSHxI4wCZ%2FWjTMZGPctZI2jWWW%2F4Aum1wfkSeIkf2BEacuVsHyqupvhSifAYABtEym8FHGninUfkT%2BSXlupZ5u5u4thPT%2BRg1PUQZPQIaxB7LatkRwPPdrNA6tEDp1mHZ6HfoYwB4U2HGOOpT2eNnzlV2nX%2BHTHuL84LFqMX3Jx0BQqatoTXbbj3r4gK%2FeKwquPYZRmu7JOf03Qp6osTRKGnwJWImF9u6km8XZOXa57Bfo%2BNx%2ByW%2BClpL3eZD3udukgokXLqMtYzze9PVlWMUD24DDr3ZgexdDVdhXb3uKuyeDfMx5jod8p5uUly4EGY5kcsrouYzDw8viL1Ghe89lo0awt1YNgqUEgBVsN4JWkfaV%2BTrH2deUhxTPBWlZTrSZlfrlDhj16wEOKFo%2FYRnndfnQzd4MyMIluWVgPdDNl6UH41Oo%2BjUYaZR7zk7tjfp2FNtcbxtg7A8WxigukPi19XNMMK2W8cMGOqUBlCgW1A7pg%2BN02W1fpDP2wLC8B05xOa%2Blnk8eEwTBUQYnpdbXpVQNFY5lnE%2BdcrN8Ynjwa1vpH2h0eFHkUXkopF%2BycEalAzgYZSorxQ916wsKgiT5IDwPs770%2FRZLmo%2FvlTHDYGtCv53Q0RqZ9fV7%2FhndboR%2F4n4y5sDm4yEY7lVRU2smZWY1DYTNDQF9DGOp0AZZfFFT1gMftyqiYtEwfv4ujGw2&X-Amz-Signature=d3a643b5de0df9026399605988d3220521488b766ceae02f9bf58ce7dbfa9031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VESRXUUT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZME4Mf734abR8vvTXpcjcx2ZhynScxv%2FVzGi9a8%2B5uAiEAkI0Au3Nfbnobh%2BBCrpujMcA5%2FXQh86bemHsl3EzX644qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuxxSHpRfIvTboEByrcAyQ6yiDmxwtfET0qIVCMeu2fSakvZThPAWJDRhuOxh26Bhm3ez%2FOg8%2BhNsm8ZYp8BfVKSzjVpZjpBqwdvLpb6TTkAf6%2BfbxRcALatDWhTFJhp47f7MvZhJHrSrz7KUt0rDsDos0sPfaiJKOZscjesbJTefzR8IY1cEXSHxI4wCZ%2FWjTMZGPctZI2jWWW%2F4Aum1wfkSeIkf2BEacuVsHyqupvhSifAYABtEym8FHGninUfkT%2BSXlupZ5u5u4thPT%2BRg1PUQZPQIaxB7LatkRwPPdrNA6tEDp1mHZ6HfoYwB4U2HGOOpT2eNnzlV2nX%2BHTHuL84LFqMX3Jx0BQqatoTXbbj3r4gK%2FeKwquPYZRmu7JOf03Qp6osTRKGnwJWImF9u6km8XZOXa57Bfo%2BNx%2ByW%2BClpL3eZD3udukgokXLqMtYzze9PVlWMUD24DDr3ZgexdDVdhXb3uKuyeDfMx5jod8p5uUly4EGY5kcsrouYzDw8viL1Ghe89lo0awt1YNgqUEgBVsN4JWkfaV%2BTrH2deUhxTPBWlZTrSZlfrlDhj16wEOKFo%2FYRnndfnQzd4MyMIluWVgPdDNl6UH41Oo%2BjUYaZR7zk7tjfp2FNtcbxtg7A8WxigukPi19XNMMK2W8cMGOqUBlCgW1A7pg%2BN02W1fpDP2wLC8B05xOa%2Blnk8eEwTBUQYnpdbXpVQNFY5lnE%2BdcrN8Ynjwa1vpH2h0eFHkUXkopF%2BycEalAzgYZSorxQ916wsKgiT5IDwPs770%2FRZLmo%2FvlTHDYGtCv53Q0RqZ9fV7%2FhndboR%2F4n4y5sDm4yEY7lVRU2smZWY1DYTNDQF9DGOp0AZZfFFT1gMftyqiYtEwfv4ujGw2&X-Amz-Signature=eec2afb06e39e754c9182b3d82b2c9f09dc544379aa3c890a8a269101734deb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
