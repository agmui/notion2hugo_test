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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3O74U3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4JEy08PgkZ7508IdtAlzBs8h3yO0ow1gR2txylnRhbAiEA6%2FMkgksaAFL3%2FV6udh%2FCtxCJHWfzTnVVEcqsR8NT%2BuEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNlsHzzdyLzJxc%2F6oyrcA8EHPMyyJwJGb6ETYIBHb%2FjOO92rR2yWGNXY5q6PwyBCVNFqipRN6KciuhhQ%2BuOnkk1DfcufuEYnDaRDDPImT8VWJ%2BVSXyFxpfEwyF7U4ky4P7YlFr23zgGaMU9%2FIPPmMhYdGEl3VH%2FA7d5zQZuohpAb1gDhJIXjgCbJCUd0rglOWKbi08xa2jVSoxdZqQX%2BcI20AL15BhI0Tj0EchnuIqS6NWtd1cLBCK%2FKlNcm7700BgNZJfxNGFKfZJMeu%2B1kz814a%2Bof%2Bn1g%2BeqowUt%2FojYlyhhmbUGLpl64iiloXChrZYEBgj6yQSLV%2Byxo9UJ1zS6B3cO3UIoeCwP3HK8oxv9Z1LE%2FhWNqqDx8RxHmsM%2BmYSZjVP%2BjSrPz7ETqHID0wQ07EgyIZBwwfb27Roc5OPeyNqdJuR3%2BGuaNoxLrRGxIeeQTEMXBpHvLW8VumTTT5%2BTgLUVnelP8GlvW1WnG%2BZRxYjU00oRvDuBF7MybwQ5mJMGKzKPTwkdCsFigsVUTDAjwWo72ebhYERlJk%2BofwLlJb5qtj2KusKkUjs1mM1z1hOz%2FxMS2oF6rZtboeTcE8Y%2BDcDV0ilEkqFEcS%2BdLIX5Ahcgo%2FTJhp5o4M0ToDxBezak2hI%2B0nKhulFbvML3IscAGOqUBiNEJY7v4kqPhey2u4JpORxXqAqohy5K3uM4yOjmPUcAfjLWElGteb3fthbJcSmtpvb%2BDWdxmzyXIniIJn%2FOm4W5RDZBa%2FeqkS9Zu1iMrjB7vrK9ZDXaLxEn0M%2BGf19IpfIpR04CFplkrq5TJiInbIjRZZ1aMXDPhNnLiCCdIpMDKgyNzYcy9e%2FXpbqUbjxy6nJZbvotX2tHGCOpVBB%2B3yjyhs2Zf&X-Amz-Signature=7ae55992ff6d4b1f935ff082ba263a41266c5253ca4ea6045d4ce78249e7d32e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3O74U3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4JEy08PgkZ7508IdtAlzBs8h3yO0ow1gR2txylnRhbAiEA6%2FMkgksaAFL3%2FV6udh%2FCtxCJHWfzTnVVEcqsR8NT%2BuEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNlsHzzdyLzJxc%2F6oyrcA8EHPMyyJwJGb6ETYIBHb%2FjOO92rR2yWGNXY5q6PwyBCVNFqipRN6KciuhhQ%2BuOnkk1DfcufuEYnDaRDDPImT8VWJ%2BVSXyFxpfEwyF7U4ky4P7YlFr23zgGaMU9%2FIPPmMhYdGEl3VH%2FA7d5zQZuohpAb1gDhJIXjgCbJCUd0rglOWKbi08xa2jVSoxdZqQX%2BcI20AL15BhI0Tj0EchnuIqS6NWtd1cLBCK%2FKlNcm7700BgNZJfxNGFKfZJMeu%2B1kz814a%2Bof%2Bn1g%2BeqowUt%2FojYlyhhmbUGLpl64iiloXChrZYEBgj6yQSLV%2Byxo9UJ1zS6B3cO3UIoeCwP3HK8oxv9Z1LE%2FhWNqqDx8RxHmsM%2BmYSZjVP%2BjSrPz7ETqHID0wQ07EgyIZBwwfb27Roc5OPeyNqdJuR3%2BGuaNoxLrRGxIeeQTEMXBpHvLW8VumTTT5%2BTgLUVnelP8GlvW1WnG%2BZRxYjU00oRvDuBF7MybwQ5mJMGKzKPTwkdCsFigsVUTDAjwWo72ebhYERlJk%2BofwLlJb5qtj2KusKkUjs1mM1z1hOz%2FxMS2oF6rZtboeTcE8Y%2BDcDV0ilEkqFEcS%2BdLIX5Ahcgo%2FTJhp5o4M0ToDxBezak2hI%2B0nKhulFbvML3IscAGOqUBiNEJY7v4kqPhey2u4JpORxXqAqohy5K3uM4yOjmPUcAfjLWElGteb3fthbJcSmtpvb%2BDWdxmzyXIniIJn%2FOm4W5RDZBa%2FeqkS9Zu1iMrjB7vrK9ZDXaLxEn0M%2BGf19IpfIpR04CFplkrq5TJiInbIjRZZ1aMXDPhNnLiCCdIpMDKgyNzYcy9e%2FXpbqUbjxy6nJZbvotX2tHGCOpVBB%2B3yjyhs2Zf&X-Amz-Signature=cfc38c3720bd8ccbc3fdb944f53e7d94aa1636eafd85ec329d7509a3e04c7a15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
