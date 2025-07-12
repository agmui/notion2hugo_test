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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTIPKMN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPupCCnGWkN6uJDmOydMWaJnMxvEyNrpNBGGbQH3JnGAiEA0WuP7B0sUQ0FTOLoOTN144wzYGuI8JZSQfF3YkaukMQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIC8QJcSjDPdQGaFircA9n4Tdb6btZxxl%2FxVWmyyAtn33pxls2PAdU6ghseaQKL310Cscnog356D1tDoN0Z5YWFAhCaxRWtkn%2FmoOzrWvfE1hyzfNYccVdT7dKFpaXcDLTZR2t%2FEMtthqAvBY1onL%2FfZYLIqy4gRex%2F7onZfMLPDeSxZbvnHpfIRoNgnP9opHC7v4OcAAu99GKa5SAvyddRS5XpjM%2FseYR2RAJd5TWyy8ffNCx3%2FzRRLCNjSnHOHIOrEjdUIkH1GTHrqkslBX945h9doW%2ByRTCmIhE649X720VeSN1av6ubqqq6DjjIZRM3pdQ%2BMlpoLt%2FhNXYW9R6arLn4r2WhP%2BseFgF%2Bo8M1tbSJspec9Y%2FGqxM0WP3gDw0hl%2F%2Ft3nTozIHHp3LzfYJlChRdE8hGOaz7edMq0hcMC%2F3NOLNcKMKNVmL4sli2vOjNknKwtz2lERHWE0xKe8P98nYfe66uREpi%2FNSib6ycoYnSuzEsfH%2FiwKH5MI9WPWnejqYmQ2OaTc0drwSY4XMQvoNiRJ50Mx8UMahuaQPFiSzFIt2fh6oa8g8892hcFxlIUGZni5XeuQ2hWs2cc8rmJDBmem4f8WeHloQ%2BL4HKumuiT8zIiJhuOisJuYag6BxzNQoeYia7ddqHMJXQx8MGOqUBddPIMtmA8wP9SfGpYD%2BVr2XA5Ih0PLRuvRxDcsZV6R8s0ofc3PyISIancT7YNG9zuoKvyOE3yWiuGu8iXgSjxP34IfNhGqEhuDSswRiWg9533P8MwW729kAx7fLIT6AGGHhN9Jlppaq4RWcptb5ubzW4Q6kaM%2BsgGCnDMEFQU8lctoLBFr1sZW34XmtNhDe95mCy8NibxVFZVelHzqP4S1ThToEC&X-Amz-Signature=e74133b95d0bd4d542941692d3c5206fb970fc701ee8c6eb6b9e43abf35fd48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTIPKMN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPupCCnGWkN6uJDmOydMWaJnMxvEyNrpNBGGbQH3JnGAiEA0WuP7B0sUQ0FTOLoOTN144wzYGuI8JZSQfF3YkaukMQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIC8QJcSjDPdQGaFircA9n4Tdb6btZxxl%2FxVWmyyAtn33pxls2PAdU6ghseaQKL310Cscnog356D1tDoN0Z5YWFAhCaxRWtkn%2FmoOzrWvfE1hyzfNYccVdT7dKFpaXcDLTZR2t%2FEMtthqAvBY1onL%2FfZYLIqy4gRex%2F7onZfMLPDeSxZbvnHpfIRoNgnP9opHC7v4OcAAu99GKa5SAvyddRS5XpjM%2FseYR2RAJd5TWyy8ffNCx3%2FzRRLCNjSnHOHIOrEjdUIkH1GTHrqkslBX945h9doW%2ByRTCmIhE649X720VeSN1av6ubqqq6DjjIZRM3pdQ%2BMlpoLt%2FhNXYW9R6arLn4r2WhP%2BseFgF%2Bo8M1tbSJspec9Y%2FGqxM0WP3gDw0hl%2F%2Ft3nTozIHHp3LzfYJlChRdE8hGOaz7edMq0hcMC%2F3NOLNcKMKNVmL4sli2vOjNknKwtz2lERHWE0xKe8P98nYfe66uREpi%2FNSib6ycoYnSuzEsfH%2FiwKH5MI9WPWnejqYmQ2OaTc0drwSY4XMQvoNiRJ50Mx8UMahuaQPFiSzFIt2fh6oa8g8892hcFxlIUGZni5XeuQ2hWs2cc8rmJDBmem4f8WeHloQ%2BL4HKumuiT8zIiJhuOisJuYag6BxzNQoeYia7ddqHMJXQx8MGOqUBddPIMtmA8wP9SfGpYD%2BVr2XA5Ih0PLRuvRxDcsZV6R8s0ofc3PyISIancT7YNG9zuoKvyOE3yWiuGu8iXgSjxP34IfNhGqEhuDSswRiWg9533P8MwW729kAx7fLIT6AGGHhN9Jlppaq4RWcptb5ubzW4Q6kaM%2BsgGCnDMEFQU8lctoLBFr1sZW34XmtNhDe95mCy8NibxVFZVelHzqP4S1ThToEC&X-Amz-Signature=244d7cdd707bf1a465af7f8bf183934e21df1157bef3526c8a4df06cb5e196e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
