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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3HWJDF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6U%2FxRyt8d%2FzgOkTtzn3qlVNVlx2ms8Tmt%2Bau5r3ItJAiEApAE1EILyyFl%2B5%2Bryof%2F0Bh27LFZ1UilBBd3hqfHYq3wqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLG6%2FlrkMMAiFoa1CrcA08XI%2B1Gj6YGJofXIO377gD7knHWTuOGde4JtZKCpQAzxvXIiu5jHG%2FbtWWfnj2MQsiQNO5hby1K86PXDLFrFwyTGUZIEA7DA1ByNaE8k1ESlNHUyVHzpvy2EKQX%2BaJAffGjNJZjSvsMrz8nxwm2UYl%2BX3OLcqpXExPMkAJj5zwdSNxR1T6OQW9vDhm2O3NrgHyzj1NvargWKjF5VVmNsXpvTD3BkXMby1LNxoFpYd%2FuPSgRLsH5nigOaMq78q44FivwMONP2jaxAEQYPgPR6tESXvDBUNCl68LyizP3deg%2FJU0ANqCJ8gw%2FgnM6RhgQBXLhzeaH%2FwKHZ8Im83K0Gv1KB5qQsOf%2BwdjFwdCAI4mQ2ySYfyfhi6QFntGyBBz3uiO%2FmqOqYJFAuOSjlS%2FlrIbyRJ9Q54G5Nzs6D1xvpU7WC5JQEBjRpBRG4GO4NIjA0lERmyVJT7ZeTLYI3Mx%2BPBotE7YZcauRdfzocY3e7w75LptTNFPNCPIIk71WxOCLkUXOv46xb3%2B1Sp26GxDd5Rg9HqQdVpaFRMKM5kEkWes0IChDKK%2FDqciABi3fgPys9yskFvVymyuacoQhh%2B1thaP%2FaZnMTGQdyM7%2BXK4oAKtWviwGp5eBtkqn2HZAMPKT8cMGOqUBFESQKr2XcErI0zJQXbtErZWUQwEGtmguwtu2g8QcawzKgm7dP5%2BBsygjflSvqxajGZMUVIiJylypA%2BdQ02D7CNViSCPPiCcaexETx%2B%2BQgOxFysqY3drTTwNX9s5Dm%2Fp89G3Nc1h2Cl5kcXnGk%2BAT2yF61E2qz3dDs8gqoQvHqzQohPaQjG0f2dZVNvZ9T1f8Py%2BY8VUxmH2u2gwSkENWvbf66jas&X-Amz-Signature=666abdb48dc913be3f2df3daebe26a84a544d1cdcdbdba8290d813abfe27e331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3HWJDF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6U%2FxRyt8d%2FzgOkTtzn3qlVNVlx2ms8Tmt%2Bau5r3ItJAiEApAE1EILyyFl%2B5%2Bryof%2F0Bh27LFZ1UilBBd3hqfHYq3wqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLG6%2FlrkMMAiFoa1CrcA08XI%2B1Gj6YGJofXIO377gD7knHWTuOGde4JtZKCpQAzxvXIiu5jHG%2FbtWWfnj2MQsiQNO5hby1K86PXDLFrFwyTGUZIEA7DA1ByNaE8k1ESlNHUyVHzpvy2EKQX%2BaJAffGjNJZjSvsMrz8nxwm2UYl%2BX3OLcqpXExPMkAJj5zwdSNxR1T6OQW9vDhm2O3NrgHyzj1NvargWKjF5VVmNsXpvTD3BkXMby1LNxoFpYd%2FuPSgRLsH5nigOaMq78q44FivwMONP2jaxAEQYPgPR6tESXvDBUNCl68LyizP3deg%2FJU0ANqCJ8gw%2FgnM6RhgQBXLhzeaH%2FwKHZ8Im83K0Gv1KB5qQsOf%2BwdjFwdCAI4mQ2ySYfyfhi6QFntGyBBz3uiO%2FmqOqYJFAuOSjlS%2FlrIbyRJ9Q54G5Nzs6D1xvpU7WC5JQEBjRpBRG4GO4NIjA0lERmyVJT7ZeTLYI3Mx%2BPBotE7YZcauRdfzocY3e7w75LptTNFPNCPIIk71WxOCLkUXOv46xb3%2B1Sp26GxDd5Rg9HqQdVpaFRMKM5kEkWes0IChDKK%2FDqciABi3fgPys9yskFvVymyuacoQhh%2B1thaP%2FaZnMTGQdyM7%2BXK4oAKtWviwGp5eBtkqn2HZAMPKT8cMGOqUBFESQKr2XcErI0zJQXbtErZWUQwEGtmguwtu2g8QcawzKgm7dP5%2BBsygjflSvqxajGZMUVIiJylypA%2BdQ02D7CNViSCPPiCcaexETx%2B%2BQgOxFysqY3drTTwNX9s5Dm%2Fp89G3Nc1h2Cl5kcXnGk%2BAT2yF61E2qz3dDs8gqoQvHqzQohPaQjG0f2dZVNvZ9T1f8Py%2BY8VUxmH2u2gwSkENWvbf66jas&X-Amz-Signature=d186283a7e2e9bdd26c3dbac17efe376932a56e303dac79e210a8511473239d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
