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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSDG2QN%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD87IbrUtXK3OSNLgVCbpsPtE2T5idw9RSxqm96XmqeowIgTo62x8aIuKfDLyOCcPVg8haD1FlnLfC%2B4ypqasJ3vdgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLK1qi076JNu%2Fu6KGyrcA5Rshj11tuLFQ%2FGo7CV7AMC2KkAlKerFO2i5xIqrxcYRinAhtbE6shkZf3VMTr2tn9Vvfo3fNhh3oddPWDdEqoMp%2Bb4I%2FApzl6v%2FUIhWyBYqNhn%2B1bRT%2F39YkCSd6n2kwqLtL%2FFreyMFSc36Y9RYP6h21BHaX9QISvIrgN5pUgGYgFhL7WNZgYcMwumY%2BfPDHrCoe3IW9QSR4e5m3375%2BeAzrW5CSxRKSnYB7Ayge%2BM%2FhhaacWsdi3Z3s8G1rE4MOE0SK0HplX4jeeY6rAHJPWiAEvtn2s2c7Ixo34Npu6fL64s8xd84z%2FOUoJi6yIpAN1bAKxAb4SmshQ1hai6W85URnGSpUNPrn3NzDrNRljcg3x846rhJ8IeU9Hus2J2HQeBWeJG7nKxXcIdIIKUf%2FuLYU4%2Fzqwv7H5%2Fry%2FdhIBvGAF99yPrhAY6ZJigFcg%2FUiB2YDXSpCOfv7Ep7dK69o2NqJCvDARoYIawv0wBel7nCESmZY8QbEuou%2Fc8BJ0aV3lK9FNEBSUdnQAM4xmaUtMdUzqXjuimuZIbcW%2FPrWE0%2BYcalDY7b41ZhvURoGQ7Z9lWkhixpoFU38HHfw%2FAItpSJltDK6o8PjBMdxHbf1u9Ky5rq3G9uPDLphKK8MMPVysEGOqUBfvH%2FfamQNe9ZC7C7vEQLIWAhVbd2Y8O0c3Mr8aAoIe8Oa9oPPpfOq%2B%2FxZh%2FxXiELaupUFajjcQ0bWGP7LaO%2BkLqisAFMfPrqIpKf%2BPg2C6EsQHIfnMrk2JwegeimW%2BWEwtTrAkb4OZt%2FLCIs9%2BCjSPuUw3CJRyjSOEOwsX3q3xqlfjUKamuaiwtcpiCClT2ghIG6wtra6t7ff2Y6QfSV6QuYc%2FZP&X-Amz-Signature=41a86ed83cb91ddc1971146d053d797359744fdcc7adc657bd33b46db2faeae1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSDG2QN%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD87IbrUtXK3OSNLgVCbpsPtE2T5idw9RSxqm96XmqeowIgTo62x8aIuKfDLyOCcPVg8haD1FlnLfC%2B4ypqasJ3vdgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLK1qi076JNu%2Fu6KGyrcA5Rshj11tuLFQ%2FGo7CV7AMC2KkAlKerFO2i5xIqrxcYRinAhtbE6shkZf3VMTr2tn9Vvfo3fNhh3oddPWDdEqoMp%2Bb4I%2FApzl6v%2FUIhWyBYqNhn%2B1bRT%2F39YkCSd6n2kwqLtL%2FFreyMFSc36Y9RYP6h21BHaX9QISvIrgN5pUgGYgFhL7WNZgYcMwumY%2BfPDHrCoe3IW9QSR4e5m3375%2BeAzrW5CSxRKSnYB7Ayge%2BM%2FhhaacWsdi3Z3s8G1rE4MOE0SK0HplX4jeeY6rAHJPWiAEvtn2s2c7Ixo34Npu6fL64s8xd84z%2FOUoJi6yIpAN1bAKxAb4SmshQ1hai6W85URnGSpUNPrn3NzDrNRljcg3x846rhJ8IeU9Hus2J2HQeBWeJG7nKxXcIdIIKUf%2FuLYU4%2Fzqwv7H5%2Fry%2FdhIBvGAF99yPrhAY6ZJigFcg%2FUiB2YDXSpCOfv7Ep7dK69o2NqJCvDARoYIawv0wBel7nCESmZY8QbEuou%2Fc8BJ0aV3lK9FNEBSUdnQAM4xmaUtMdUzqXjuimuZIbcW%2FPrWE0%2BYcalDY7b41ZhvURoGQ7Z9lWkhixpoFU38HHfw%2FAItpSJltDK6o8PjBMdxHbf1u9Ky5rq3G9uPDLphKK8MMPVysEGOqUBfvH%2FfamQNe9ZC7C7vEQLIWAhVbd2Y8O0c3Mr8aAoIe8Oa9oPPpfOq%2B%2FxZh%2FxXiELaupUFajjcQ0bWGP7LaO%2BkLqisAFMfPrqIpKf%2BPg2C6EsQHIfnMrk2JwegeimW%2BWEwtTrAkb4OZt%2FLCIs9%2BCjSPuUw3CJRyjSOEOwsX3q3xqlfjUKamuaiwtcpiCClT2ghIG6wtra6t7ff2Y6QfSV6QuYc%2FZP&X-Amz-Signature=576d7f7ca7d8bc2dbc68d9250b0ac3fc037d8a68dc6851688d838487a8c43546&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
