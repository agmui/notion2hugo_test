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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GHZH3A4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDFi5dlJNvKBlMxrmXCzyuKoEoVRMQOP3MfBjviSpDLcwIgZHc2KA%2BxQ1%2B2dJ%2BI7vC%2BIOfGUeYwALsoquHVt%2FePoFAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDw6v7V5SqkcRMqqEircAzEY4zJ49N1h2L8h8sU6f0WRPwo7BmoyCNSQpWyAS3IPbUf3smNTwzHpI1JXkfWIJm5LT%2Fs9vDLNC%2BVIbeLzr%2BgytztnPu5ao%2F3Im4XDj5danAZQ6pim1vPdXDucdDpX4Y%2BG0ixsjg%2BfEwcKMPR99knGY9PyHQmL2S7JD1sVo5vO86Be7Ws2arogQ9RRX%2BxHDhciUauH9rkNUnwN3H%2BS%2FWYKL0vAsg2gVv3d9Enp3ooJB3tkT1EdW8DTBYZSDCiM3AbVU0nlsscqw5KttIsRkWlqDauqDw3TLVl8V1O3rgT677Gi%2Fkd0n9F6%2FAGFESOnwZAU5cu7hNAajqC3qTypez%2Fj0c6B%2Bi%2FYs8vrFPG3UWuUJoVsIVm6NUY4loQzIO%2FiI7mwRGY37ZxV0iuvKrR7Zwh7SowxBLqGfrvyRFhyIDIZ8cegxjHbl8YQL5M1Ftmv9Weo7FLrvaZkj37OFCbMkHXJvh03%2Fw%2Fsnn758EPMm%2F7bd3P2%2BqdcLO5HZqe1FintyQ%2BrukKpV66XHYEOILcuEsNnJhJkE9qI1G1OxVTagp6oO5BWGFebfcNmRG7COhbrFCghC1XEoCnZH9qICjiJtr24YYKLJZH8CRrRUfLQ3ak6u2LqtEbneaneRA27MOiU5r4GOqUB%2FWUV3I3YyytQ4ih36pYHoHlMPlk05KOxQuL0wZijC1qLz5RowfvcAadaPFek%2Bmf0%2F%2BujGWEJECO2KwMiucpHQPWAlakQxearETiBgPyEfWgSrqYfMERCmgUW6Bs915FA%2F2mpJjE9atlBxTpV%2BFUdnvxYg%2FFXKWNEfs0ZsHmGssgVapSyG1fi824FuTm3GJ%2ByUiFtgCBJzPi2h0yf%2F0ajntbX5QLx&X-Amz-Signature=1c2c7def3d74f1e79155e4c4bba6d2ecce470b751d660fdd9e21889cdf02f953&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GHZH3A4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDFi5dlJNvKBlMxrmXCzyuKoEoVRMQOP3MfBjviSpDLcwIgZHc2KA%2BxQ1%2B2dJ%2BI7vC%2BIOfGUeYwALsoquHVt%2FePoFAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDw6v7V5SqkcRMqqEircAzEY4zJ49N1h2L8h8sU6f0WRPwo7BmoyCNSQpWyAS3IPbUf3smNTwzHpI1JXkfWIJm5LT%2Fs9vDLNC%2BVIbeLzr%2BgytztnPu5ao%2F3Im4XDj5danAZQ6pim1vPdXDucdDpX4Y%2BG0ixsjg%2BfEwcKMPR99knGY9PyHQmL2S7JD1sVo5vO86Be7Ws2arogQ9RRX%2BxHDhciUauH9rkNUnwN3H%2BS%2FWYKL0vAsg2gVv3d9Enp3ooJB3tkT1EdW8DTBYZSDCiM3AbVU0nlsscqw5KttIsRkWlqDauqDw3TLVl8V1O3rgT677Gi%2Fkd0n9F6%2FAGFESOnwZAU5cu7hNAajqC3qTypez%2Fj0c6B%2Bi%2FYs8vrFPG3UWuUJoVsIVm6NUY4loQzIO%2FiI7mwRGY37ZxV0iuvKrR7Zwh7SowxBLqGfrvyRFhyIDIZ8cegxjHbl8YQL5M1Ftmv9Weo7FLrvaZkj37OFCbMkHXJvh03%2Fw%2Fsnn758EPMm%2F7bd3P2%2BqdcLO5HZqe1FintyQ%2BrukKpV66XHYEOILcuEsNnJhJkE9qI1G1OxVTagp6oO5BWGFebfcNmRG7COhbrFCghC1XEoCnZH9qICjiJtr24YYKLJZH8CRrRUfLQ3ak6u2LqtEbneaneRA27MOiU5r4GOqUB%2FWUV3I3YyytQ4ih36pYHoHlMPlk05KOxQuL0wZijC1qLz5RowfvcAadaPFek%2Bmf0%2F%2BujGWEJECO2KwMiucpHQPWAlakQxearETiBgPyEfWgSrqYfMERCmgUW6Bs915FA%2F2mpJjE9atlBxTpV%2BFUdnvxYg%2FFXKWNEfs0ZsHmGssgVapSyG1fi824FuTm3GJ%2ByUiFtgCBJzPi2h0yf%2F0ajntbX5QLx&X-Amz-Signature=34b68ace80dbe6f172697a7a71f3a7995eb2f18fd04e94db6826cd656751debe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
