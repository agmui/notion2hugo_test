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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFGSCOW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEiFSHdPp0OB5exmae5xlQVuEAbeWI7icSWCFf4ft7TAiEAoaHO6qND6KnbTSa1P2iVrcaa%2B0i7s8gh5st2RQNok6Eq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC2y7Mh58cx4kryvdSrcA1MbW8%2BBQSlnp8qybLzGShyOBYYJPr3KS4c%2FDkymRI3QF9ZZ5t3wODPwPrPE%2BmxvnadcArC0W%2FvHRazVuDnq9NRdihmMMP4C4vtwPLQ4XHgNJ2yZpJJNOvgPSr05kRccRXYTz5NdeQx31%2FDuH434M%2FkHdDpgcYJUT8WyTfG%2BgDVIdxnAuiXc%2F4hQodZLv%2B9TFu3Uz6Bs7bwS6tvOL0Is0AwMLmFfHR0lnS462MlAIMNl6EUwoqdTm1GAtyj9tcEFSdRpmYYsFFjxX0Hv%2FpePpVAmvEC8N7XTNS5kiKR1oxr%2BPc5xMLHCZ50bvo%2Faf9Geq%2FnQTzzeDKQr99gsfLS5a7LBl6OO6CtH3kh1PQdbwg3Nw7zI7%2FUc4dpPLOiC8lvUCqrn6qkHz%2BetCEtpI3HQqhbOM4r%2F5QxSfLm5VVzpm6c%2FUwT8hXu6itx4hlw2FuZ2YcJKoP0X9U8%2FaBe9l4KHKls8iGD3CQFu9Pf84alE8gTmXupaswRLM4JXNgi5ORzVOtayEgv3%2F4uQjlRMMwuT7tGXmSmut4wBAKQEB9msLM9djYk0MbxwyS8kItd5L661aRqBT1WwaMi%2FMxG2IMSGOL8Qt%2FUAyE67PDM2yepXIbxrBjRZKqOaEB743FZzMJ69274GOqUB3oxRn74L3VPuCpMiWZ3JmTIWFFbRmrGo0eK%2BKMmayXO%2BY1ICfH%2Bu6dzdBX7MmJ%2BKfWOosVpEmLiDrwSbvqzJGg4EAs3jJsEX1zO7R6J9dlZAvDP7KwRfuqr62y9rPVR9tAhP9lII4tOTSNM4n5teNFRzGmo0rap1%2FVsJMtUK%2FTkFi352AoPhXf8rSzDtP9KtPsUuVfv2i3URRIJDbyCYJ5lM4dzr&X-Amz-Signature=bba8cb9fa6f056dc11057da336fc313f1dc3a539207de4306df379e4c18ca49d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFGSCOW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEiFSHdPp0OB5exmae5xlQVuEAbeWI7icSWCFf4ft7TAiEAoaHO6qND6KnbTSa1P2iVrcaa%2B0i7s8gh5st2RQNok6Eq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC2y7Mh58cx4kryvdSrcA1MbW8%2BBQSlnp8qybLzGShyOBYYJPr3KS4c%2FDkymRI3QF9ZZ5t3wODPwPrPE%2BmxvnadcArC0W%2FvHRazVuDnq9NRdihmMMP4C4vtwPLQ4XHgNJ2yZpJJNOvgPSr05kRccRXYTz5NdeQx31%2FDuH434M%2FkHdDpgcYJUT8WyTfG%2BgDVIdxnAuiXc%2F4hQodZLv%2B9TFu3Uz6Bs7bwS6tvOL0Is0AwMLmFfHR0lnS462MlAIMNl6EUwoqdTm1GAtyj9tcEFSdRpmYYsFFjxX0Hv%2FpePpVAmvEC8N7XTNS5kiKR1oxr%2BPc5xMLHCZ50bvo%2Faf9Geq%2FnQTzzeDKQr99gsfLS5a7LBl6OO6CtH3kh1PQdbwg3Nw7zI7%2FUc4dpPLOiC8lvUCqrn6qkHz%2BetCEtpI3HQqhbOM4r%2F5QxSfLm5VVzpm6c%2FUwT8hXu6itx4hlw2FuZ2YcJKoP0X9U8%2FaBe9l4KHKls8iGD3CQFu9Pf84alE8gTmXupaswRLM4JXNgi5ORzVOtayEgv3%2F4uQjlRMMwuT7tGXmSmut4wBAKQEB9msLM9djYk0MbxwyS8kItd5L661aRqBT1WwaMi%2FMxG2IMSGOL8Qt%2FUAyE67PDM2yepXIbxrBjRZKqOaEB743FZzMJ69274GOqUB3oxRn74L3VPuCpMiWZ3JmTIWFFbRmrGo0eK%2BKMmayXO%2BY1ICfH%2Bu6dzdBX7MmJ%2BKfWOosVpEmLiDrwSbvqzJGg4EAs3jJsEX1zO7R6J9dlZAvDP7KwRfuqr62y9rPVR9tAhP9lII4tOTSNM4n5teNFRzGmo0rap1%2FVsJMtUK%2FTkFi352AoPhXf8rSzDtP9KtPsUuVfv2i3URRIJDbyCYJ5lM4dzr&X-Amz-Signature=c5749c49b40ac27cf251d7d182df058af3befc5bb0990157d9055878970d62c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
