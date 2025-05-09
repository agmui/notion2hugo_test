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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GTTKAUQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtRVK6as%2BQjVRtiIxVZcez4JBQkaMkm3yiGG%2F2AonDPAiBgl4HqB8V%2F9QLp1nus8lUvS0vZzzRjT0VPRQbO4y8bfCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6f0BsJyusm1crOFKtwDgTD4amOvE7Zzb1OnE6uxaOexVnMDZxdMgrGiqT1sEQX8EcARA1Qx04LFHLq4RHijqh1yEvjd9XX1xrf9Y69TWRcwiRWApUi%2FgjcpoAQLqZGfxkU4D63t7O6P68nKEc%2FBV%2Be4%2FRRdLywRDLXz7flTb9a5c8S9cLOx12sKBekX5rE8LmiGevgN8b3BGZ4Cs3zVEYXwenJVyzwY9Xl0k6iHLMXhib%2BrVdv2Afl%2FVQ%2BLih2IpXPAkWxsAOou%2BA0TM%2Bt3fKiETNUfV5Eam9kshbm1XqJnnlsJrpUE8X6uL4cpACgycnuDKhVGFB0rPM7nvC59YFjrzF0%2Fnf6e4JT%2BzHl63k4AaTlbX18YKv2EUnrXYse60v9htnhEityuRxidiceUAACNoRbeGwkxaiogQ1YQxToSzMJTyDRfmrsDXvZYpHPO80n43X5FEUdOXMqrF92AbZqL%2B0rdNTvf9EM1NHODcMILREFkgyAQFZggStx4VkztFUC53jR3DxvRpsEWvSEctMPQyp9SDF%2BMSfE4RkLKGGQQ8Bg43cuv9HEQyml4GVrKPBFIRkH6eaw84Nbr2%2FzVk1BhO9lPSpltegcWoapiNMT3BedRRFsuvgN79xHUO%2B7f2c2yy%2Fcl4qDoaaMwyOP0wAY6pgGvxakZGMdlgxgHv1yb6N3e%2B4fcQ2%2BqG%2FLCU6POdozryOBMvclZ1aof%2FB%2B4JH0hHu5yIykKfbyZSgb9eyMb87T76PxHuPvMQkxuITM33ABIM6ztbWD9248wmzgQoIUeodcEuzhQx9KtT3smrgcFBli483GZ5w5xUmdzOQrE0gbAzRppP38Uwp8gkFYowfl9xtvy85SVX2xP2l8lMX3j4KY0eHYHxhpm&X-Amz-Signature=220a294bfd0a177393b5284de93d152dd74dfef29d088692e0e987a8b1e1e052&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GTTKAUQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtRVK6as%2BQjVRtiIxVZcez4JBQkaMkm3yiGG%2F2AonDPAiBgl4HqB8V%2F9QLp1nus8lUvS0vZzzRjT0VPRQbO4y8bfCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6f0BsJyusm1crOFKtwDgTD4amOvE7Zzb1OnE6uxaOexVnMDZxdMgrGiqT1sEQX8EcARA1Qx04LFHLq4RHijqh1yEvjd9XX1xrf9Y69TWRcwiRWApUi%2FgjcpoAQLqZGfxkU4D63t7O6P68nKEc%2FBV%2Be4%2FRRdLywRDLXz7flTb9a5c8S9cLOx12sKBekX5rE8LmiGevgN8b3BGZ4Cs3zVEYXwenJVyzwY9Xl0k6iHLMXhib%2BrVdv2Afl%2FVQ%2BLih2IpXPAkWxsAOou%2BA0TM%2Bt3fKiETNUfV5Eam9kshbm1XqJnnlsJrpUE8X6uL4cpACgycnuDKhVGFB0rPM7nvC59YFjrzF0%2Fnf6e4JT%2BzHl63k4AaTlbX18YKv2EUnrXYse60v9htnhEityuRxidiceUAACNoRbeGwkxaiogQ1YQxToSzMJTyDRfmrsDXvZYpHPO80n43X5FEUdOXMqrF92AbZqL%2B0rdNTvf9EM1NHODcMILREFkgyAQFZggStx4VkztFUC53jR3DxvRpsEWvSEctMPQyp9SDF%2BMSfE4RkLKGGQQ8Bg43cuv9HEQyml4GVrKPBFIRkH6eaw84Nbr2%2FzVk1BhO9lPSpltegcWoapiNMT3BedRRFsuvgN79xHUO%2B7f2c2yy%2Fcl4qDoaaMwyOP0wAY6pgGvxakZGMdlgxgHv1yb6N3e%2B4fcQ2%2BqG%2FLCU6POdozryOBMvclZ1aof%2FB%2B4JH0hHu5yIykKfbyZSgb9eyMb87T76PxHuPvMQkxuITM33ABIM6ztbWD9248wmzgQoIUeodcEuzhQx9KtT3smrgcFBli483GZ5w5xUmdzOQrE0gbAzRppP38Uwp8gkFYowfl9xtvy85SVX2xP2l8lMX3j4KY0eHYHxhpm&X-Amz-Signature=89f8d7aa94591b75066d86d2c03f33c8cfd36001fe191d0caf1e4aece7e4658b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
