---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOHM2HL%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCEYCy2Er50IsGN5ZAarJTZl5D7tTE3XqjVI%2Ftb%2FAt0TAIhAM39Mf2hLmCbU%2BgyYbEowKBC9bqF%2Fxd%2Fs1TQXFH%2BNfiEKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIDdE2AeXg%2BfI%2BFV0q3AP7i3Z%2FgIZZm1h%2FVuo%2Bu4CdNaEP9JrHgnNjdAO8eTmPGBdFxHnB44WANE0uoRwrTp1gE7ad3OvDPrr%2BVjSEzR%2FbwXUMy1Os526e6kXSEOO%2BV8XjjO%2Fwi2GRP64zilfvwaU4Yyf3%2Bo4ySzVIvc%2BZdIELdhzE0nw3bwFaFjmfr4ew3MarntXUkk%2BED6I45gC2OkT2TfDfh4YB1f4aeXDtcPXiCzVxhejeaZG3xQLbhGTym5%2F5aNvGdbHYGvqYiw6H%2BQR0hZZQrQq9L13x%2BIPApFd%2FhBMNlRbJOu3spurtGsjb2vw29Gwtc%2BpoMpJjmn%2BCTO292AKUsncj3VzeBiMK5K3RoJ7gM%2BBeptQeuC02wfx1ed%2BL%2FXENHVnVabxYzM8j7Y%2Ba5tyQrv04YODAlg4iM0%2F%2Be0tXqXmFMV79L2SD%2B0x2WmbFxTL4K5Sw7Fiy7a9emTTvGQbpjVbrdlmkrbgjItpKFPbFrNTVRCoBwpeu5yI5t3hqSIbRepUiEvbE0bGcSMwyTfCK83cBmUTZSChHykpMc0uZgIFVxiLkrpFahPQvxlJv2yuRbGHg1iidnhEQ1%2FVI8WpnkqolQBA5YblEn4ws73CDJozlTwClh%2Bali9r1O9pMh%2Byv9UW7OTSAJzDiiPLGBjqkAbx5MO1Jh7uGVZHlDEJOk5au1KZqGFPpJE%2BEqvpN14cz6M%2BItlP3Rbr2EvDkq3p0Yb8QtidHPxyAao0NjhY4k%2Bw%2F6Bkv%2F8OI0OGD72thYEH7TfKQPYGalheu9Z3LPhfbXqbVO41wLed%2B%2FbBGw3MVg6eotyvb414yqyhqLNruUEYij2OM%2BZKEjTpGRULKCmXctqwf4CR4i2K6wD4zSX1yy61UOqiB&X-Amz-Signature=9ed14f55b61e2964f8e47fd65b371497278d83bbee8d11653613289f6fd45e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOHM2HL%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCEYCy2Er50IsGN5ZAarJTZl5D7tTE3XqjVI%2Ftb%2FAt0TAIhAM39Mf2hLmCbU%2BgyYbEowKBC9bqF%2Fxd%2Fs1TQXFH%2BNfiEKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIDdE2AeXg%2BfI%2BFV0q3AP7i3Z%2FgIZZm1h%2FVuo%2Bu4CdNaEP9JrHgnNjdAO8eTmPGBdFxHnB44WANE0uoRwrTp1gE7ad3OvDPrr%2BVjSEzR%2FbwXUMy1Os526e6kXSEOO%2BV8XjjO%2Fwi2GRP64zilfvwaU4Yyf3%2Bo4ySzVIvc%2BZdIELdhzE0nw3bwFaFjmfr4ew3MarntXUkk%2BED6I45gC2OkT2TfDfh4YB1f4aeXDtcPXiCzVxhejeaZG3xQLbhGTym5%2F5aNvGdbHYGvqYiw6H%2BQR0hZZQrQq9L13x%2BIPApFd%2FhBMNlRbJOu3spurtGsjb2vw29Gwtc%2BpoMpJjmn%2BCTO292AKUsncj3VzeBiMK5K3RoJ7gM%2BBeptQeuC02wfx1ed%2BL%2FXENHVnVabxYzM8j7Y%2Ba5tyQrv04YODAlg4iM0%2F%2Be0tXqXmFMV79L2SD%2B0x2WmbFxTL4K5Sw7Fiy7a9emTTvGQbpjVbrdlmkrbgjItpKFPbFrNTVRCoBwpeu5yI5t3hqSIbRepUiEvbE0bGcSMwyTfCK83cBmUTZSChHykpMc0uZgIFVxiLkrpFahPQvxlJv2yuRbGHg1iidnhEQ1%2FVI8WpnkqolQBA5YblEn4ws73CDJozlTwClh%2Bali9r1O9pMh%2Byv9UW7OTSAJzDiiPLGBjqkAbx5MO1Jh7uGVZHlDEJOk5au1KZqGFPpJE%2BEqvpN14cz6M%2BItlP3Rbr2EvDkq3p0Yb8QtidHPxyAao0NjhY4k%2Bw%2F6Bkv%2F8OI0OGD72thYEH7TfKQPYGalheu9Z3LPhfbXqbVO41wLed%2B%2FbBGw3MVg6eotyvb414yqyhqLNruUEYij2OM%2BZKEjTpGRULKCmXctqwf4CR4i2K6wD4zSX1yy61UOqiB&X-Amz-Signature=0724b24c3a07471f596098ad46e8bc59b28b45ff2d876ac0f765b208ef6cb6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
