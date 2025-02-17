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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWI5DCGS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIE7klia0zGNn41mga5YAUF77MMQgEfzxj3ob9S2RR9e5AiAEjYDTDH%2FMye7hJC3s1LKOxB5OjT4258GjWo%2BWzVyiGyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMB00x1rOXHEV4LSXSKtwDM9QrRM9mZF3bY2tpssW5zRGTmzKFb6dPkswSFqTCMo66G4p5d38NYU9Rpx8r%2BBJGqwuGSStQtzTAYWGVSiIWpioMUDW0Go3EjuOmX%2F1MLq6ql7VGWICtfvXvSUGrfDN3WpKLmHUR3tLYCFJyLAzUJUhKmt1Ntk7s4J7%2FBLxYoy0xaoP3C9x8s%2BPyAGQuDOywYCehJQs3%2BRdiWfCtx61upK3b90Vn6Wq9tGktKokMuoZ9wSCDjaBBcQGxiUyoxCDKNeStJCGzOqiGka3iidXrCfBoPyNm7APN97j4KV5nNlxE28HCJcv53jngJDpPCbuhpR37RxFKgTnpqJuPe%2BdVurvid%2BclBffQHQEbbUl6WNZzo%2FusPLWtBhzNg5UvX18Tf4bhF0QUQ3vqxa6Q%2Bz8Yv22Ror5Oq1Ch%2FX2jZ2i9gNPtss9kko56A%2FwGuWFEInjDhXf9rO9r7Igt87OCzM3ixGEbvZegqSoTlEwgwfFFFMnI1rTx8%2BQuKTdpr1QII0pBhcbcGQON2RnV8tZGznqE6xsQfMZvfHKrF3l1ur2FHVt05b24zCOPipNrogPnpnr93f4Nl9YdQ5eH4dIZL55V4FGM6Siqvu5LN7ai9CLZijnQcQA5vDi9hdvnMQowmrDLvQY6pgGOcAAujhRLjQbW3Mn19T3M2612z4cEPt1MkUj7wFIZWJMBz7N9K%2FUYwMUKbzhuzBAQWp24m9m5RP4Wxr0FrQ6IQD1NFHKActdUdMTxD4zEYFUHg3LtY7easB9FSuJ3vSe%2Fjzal%2B481gTZyaR9Oudg5lshiKbK8ElzoZc0la8hVoZueL3KxUWLJVYeMs6sLnFhZQSwQVEhiJVX0UPWw7IAFtWEqb7EA&X-Amz-Signature=3200d437da216a7db062f7bdb3c22a67029613bdf2e191233b9bbdaba2dacab2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWI5DCGS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIE7klia0zGNn41mga5YAUF77MMQgEfzxj3ob9S2RR9e5AiAEjYDTDH%2FMye7hJC3s1LKOxB5OjT4258GjWo%2BWzVyiGyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMB00x1rOXHEV4LSXSKtwDM9QrRM9mZF3bY2tpssW5zRGTmzKFb6dPkswSFqTCMo66G4p5d38NYU9Rpx8r%2BBJGqwuGSStQtzTAYWGVSiIWpioMUDW0Go3EjuOmX%2F1MLq6ql7VGWICtfvXvSUGrfDN3WpKLmHUR3tLYCFJyLAzUJUhKmt1Ntk7s4J7%2FBLxYoy0xaoP3C9x8s%2BPyAGQuDOywYCehJQs3%2BRdiWfCtx61upK3b90Vn6Wq9tGktKokMuoZ9wSCDjaBBcQGxiUyoxCDKNeStJCGzOqiGka3iidXrCfBoPyNm7APN97j4KV5nNlxE28HCJcv53jngJDpPCbuhpR37RxFKgTnpqJuPe%2BdVurvid%2BclBffQHQEbbUl6WNZzo%2FusPLWtBhzNg5UvX18Tf4bhF0QUQ3vqxa6Q%2Bz8Yv22Ror5Oq1Ch%2FX2jZ2i9gNPtss9kko56A%2FwGuWFEInjDhXf9rO9r7Igt87OCzM3ixGEbvZegqSoTlEwgwfFFFMnI1rTx8%2BQuKTdpr1QII0pBhcbcGQON2RnV8tZGznqE6xsQfMZvfHKrF3l1ur2FHVt05b24zCOPipNrogPnpnr93f4Nl9YdQ5eH4dIZL55V4FGM6Siqvu5LN7ai9CLZijnQcQA5vDi9hdvnMQowmrDLvQY6pgGOcAAujhRLjQbW3Mn19T3M2612z4cEPt1MkUj7wFIZWJMBz7N9K%2FUYwMUKbzhuzBAQWp24m9m5RP4Wxr0FrQ6IQD1NFHKActdUdMTxD4zEYFUHg3LtY7easB9FSuJ3vSe%2Fjzal%2B481gTZyaR9Oudg5lshiKbK8ElzoZc0la8hVoZueL3KxUWLJVYeMs6sLnFhZQSwQVEhiJVX0UPWw7IAFtWEqb7EA&X-Amz-Signature=ab866b6c2f44323edccd7c54406eb659868152c3b9482c8d30532bc1648101b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
