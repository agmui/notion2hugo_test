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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZ6PT23%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2BpNSNCSxFw6wxf9yBCuWrvtsbud1zgRiTfSA0VFtxsAIgXtzjpxJBvr6aQWk5uEvwEyxh42eaeq06ab2aBIb%2FF5Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLWU7PcLMWAE67qhIyrcA25D0ri9U0pIkFofuHK8O6apUw39QEm5rkZiKzIpDfAA4cjsBB51TYSshHs7V74A0AnAzxnWBSxISv77jG4HNQdZ0hD1YkesEyPVJZTr%2F%2BsHMsxBjI9YGCUHYleurgXUnemdaiqkDo6fzpTgeEj4DIAKaw63vuv%2F1DUjSYcsLxs%2FCfZ80il5NSVxOQM4mo2FmNOFyleSfFIRVADTO2voI75x%2Bsh%2Fco%2FeWiJSrNBNMcjm0pxSvW9mI5ujbjJg%2FwLUbEb%2BLAKY4J2GzZFuyacpyO4BI3K4v4UbiwC2k4SD%2BY9c6YG5186o%2ByINkgmewgv%2FPLFFNfeBA5liKSGVMoMrEUzQ0LR8jGT422HqcMv8TN0I28dXIya0MDIOh6BtNdci%2FaBprXe5Ece5TVB0FHRU4CaEbYkcXpYuaJfwqk4kct0ziaU089OwIiAo9ZOcpTQDCKhic6VYErfUKHiHF46oKNQOMmtx5%2BFSIWMqpJZ1vJM7h5IeNaxAzDX%2BghwY2ncClMa78ivWPBSVZSN7Yn8clT3GkXoo4Am5%2BbnglWqai2e3rqvRPLkWS7jtjcVCrEVymzY88DgoYRZufzqOWaBoWeH2uiHKQn4AbrtJPJL88SiSbMpvTfpuZEb0Hz%2FLMOCArMMGOqUBC7p%2BW9RlEQq8il2aI3j%2FrU4eJGPx%2BjM3Lcpgu3u0e0lU%2Fcj%2Br%2FO598hU2kHDCjJHI5hL7HUeKdmfbKQ40Hxs95u0UoiO6ulq334F2ex2p8hR4HFZ7Q2z%2FxomjHnU7qNeKg%2FoyCjXCBHmB7jEFasoPTfRVcezKHXwIVMNryOtM5QqPhdFGHminbe%2BKO0fQIMn7Nf2dP8zXhRRqN%2FKCdsgEmVd%2BRNK&X-Amz-Signature=0e2a99d8461fd0d8395f4c2705da3cf5884120d7706e6a3506c2c8a1678a2233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZ6PT23%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2BpNSNCSxFw6wxf9yBCuWrvtsbud1zgRiTfSA0VFtxsAIgXtzjpxJBvr6aQWk5uEvwEyxh42eaeq06ab2aBIb%2FF5Mq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLWU7PcLMWAE67qhIyrcA25D0ri9U0pIkFofuHK8O6apUw39QEm5rkZiKzIpDfAA4cjsBB51TYSshHs7V74A0AnAzxnWBSxISv77jG4HNQdZ0hD1YkesEyPVJZTr%2F%2BsHMsxBjI9YGCUHYleurgXUnemdaiqkDo6fzpTgeEj4DIAKaw63vuv%2F1DUjSYcsLxs%2FCfZ80il5NSVxOQM4mo2FmNOFyleSfFIRVADTO2voI75x%2Bsh%2Fco%2FeWiJSrNBNMcjm0pxSvW9mI5ujbjJg%2FwLUbEb%2BLAKY4J2GzZFuyacpyO4BI3K4v4UbiwC2k4SD%2BY9c6YG5186o%2ByINkgmewgv%2FPLFFNfeBA5liKSGVMoMrEUzQ0LR8jGT422HqcMv8TN0I28dXIya0MDIOh6BtNdci%2FaBprXe5Ece5TVB0FHRU4CaEbYkcXpYuaJfwqk4kct0ziaU089OwIiAo9ZOcpTQDCKhic6VYErfUKHiHF46oKNQOMmtx5%2BFSIWMqpJZ1vJM7h5IeNaxAzDX%2BghwY2ncClMa78ivWPBSVZSN7Yn8clT3GkXoo4Am5%2BbnglWqai2e3rqvRPLkWS7jtjcVCrEVymzY88DgoYRZufzqOWaBoWeH2uiHKQn4AbrtJPJL88SiSbMpvTfpuZEb0Hz%2FLMOCArMMGOqUBC7p%2BW9RlEQq8il2aI3j%2FrU4eJGPx%2BjM3Lcpgu3u0e0lU%2Fcj%2Br%2FO598hU2kHDCjJHI5hL7HUeKdmfbKQ40Hxs95u0UoiO6ulq334F2ex2p8hR4HFZ7Q2z%2FxomjHnU7qNeKg%2FoyCjXCBHmB7jEFasoPTfRVcezKHXwIVMNryOtM5QqPhdFGHminbe%2BKO0fQIMn7Nf2dP8zXhRRqN%2FKCdsgEmVd%2BRNK&X-Amz-Signature=1bc3f732f2964a025635cf01ad45e195f8c895c2ebd4995843490f7458497636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
