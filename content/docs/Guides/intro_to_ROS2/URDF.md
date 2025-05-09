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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WARLTZZN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdhdzOCRUv8GFUrbutlViqfK2oODA12cZXaytUzHLV4AiEA%2BOI%2BhMkuhraZej9m4PSOr1zPGVPyj1QeyfWCQzPFfEUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfPqt2qJi%2Bi3A4VLyrcA%2FelI3eD0lrnoXPdZx7AMnN8Vi65fOmqSLAIEQmmL5Zitp2HRpllPj70rskVrk5UGjDoVGeiaWnsmw3qB3zIczg8sDYQ4rg2atKKe32M2CBP%2FKDRibQ18qf3vGrN1anhWDpiyufNBmLugpmRLdhslat93VwKWsSk1LkNfOZ%2FbIVZ%2FUERKGoxtn98SYcjigQs%2Fv6OnNoEbA6un0Nytlz0o87xxK2Ma3XPpYX0eenfs3N8D2oJA62XGM8dTqMN7V7IFpqkCgGEVPstizyH2iqXJdpz8JNc8ac3jO4ajYILtU719FoMCjGcFjXjuypZEIyIFvEooMjm8bvrSAwyH4wvmgBRJPceXvDI%2FzItUUre6FExPYmXq7aQ0TvOnUsziMhiuhgMXuLv5ZnBsWO11Lx7X3kgqZXIie318M0PTDTDNLZSEu1x82TPfKorI8V4%2FWbsRWVRU39dZe3MYAOyf%2Fg%2Fb%2BR%2Bj0T8M%2FrJ4TLzuw%2BjrhtClEZ%2BpnwBrma6ycgCyDw9KbGBKn7eRxPBBeUlERkskZ%2BBuva206LzobV328qJHl%2FYZIJLRZNOwfK4HbjQqM%2FVKm21HGEHwczVV55tDCc7l3oFSJ2YNiQb54bKIetDALWc2KVY%2F3pLVbiat46IMKWs98AGOqUBktZ3Iw2h59sgVQN3NOGJutpHr4HZIsPkUDt7bRUNyHKr1rD4i8i9UIMQbE4NZZ1SiiMrcvhhnZWWg3x82OST3zJE7lZVIn4JPJ8GnOm9k6yDj7osvX51cpk5j%2FPBrV8AI6bLRGi0pgZYM8u9jiQDhhMB%2BbASG%2BOrK1nqCxG4RQHi13ktF2gF3aa0fGSqa0bJyq%2BfYAcc1bjABF3UarpIcyXFwCTe&X-Amz-Signature=8218c90a4fd4facbd083ef1e2599f458846dd636d0319c14c24e274cdf812b87&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WARLTZZN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdhdzOCRUv8GFUrbutlViqfK2oODA12cZXaytUzHLV4AiEA%2BOI%2BhMkuhraZej9m4PSOr1zPGVPyj1QeyfWCQzPFfEUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfPqt2qJi%2Bi3A4VLyrcA%2FelI3eD0lrnoXPdZx7AMnN8Vi65fOmqSLAIEQmmL5Zitp2HRpllPj70rskVrk5UGjDoVGeiaWnsmw3qB3zIczg8sDYQ4rg2atKKe32M2CBP%2FKDRibQ18qf3vGrN1anhWDpiyufNBmLugpmRLdhslat93VwKWsSk1LkNfOZ%2FbIVZ%2FUERKGoxtn98SYcjigQs%2Fv6OnNoEbA6un0Nytlz0o87xxK2Ma3XPpYX0eenfs3N8D2oJA62XGM8dTqMN7V7IFpqkCgGEVPstizyH2iqXJdpz8JNc8ac3jO4ajYILtU719FoMCjGcFjXjuypZEIyIFvEooMjm8bvrSAwyH4wvmgBRJPceXvDI%2FzItUUre6FExPYmXq7aQ0TvOnUsziMhiuhgMXuLv5ZnBsWO11Lx7X3kgqZXIie318M0PTDTDNLZSEu1x82TPfKorI8V4%2FWbsRWVRU39dZe3MYAOyf%2Fg%2Fb%2BR%2Bj0T8M%2FrJ4TLzuw%2BjrhtClEZ%2BpnwBrma6ycgCyDw9KbGBKn7eRxPBBeUlERkskZ%2BBuva206LzobV328qJHl%2FYZIJLRZNOwfK4HbjQqM%2FVKm21HGEHwczVV55tDCc7l3oFSJ2YNiQb54bKIetDALWc2KVY%2F3pLVbiat46IMKWs98AGOqUBktZ3Iw2h59sgVQN3NOGJutpHr4HZIsPkUDt7bRUNyHKr1rD4i8i9UIMQbE4NZZ1SiiMrcvhhnZWWg3x82OST3zJE7lZVIn4JPJ8GnOm9k6yDj7osvX51cpk5j%2FPBrV8AI6bLRGi0pgZYM8u9jiQDhhMB%2BbASG%2BOrK1nqCxG4RQHi13ktF2gF3aa0fGSqa0bJyq%2BfYAcc1bjABF3UarpIcyXFwCTe&X-Amz-Signature=c90171791c6955a5bf2e1fe540a0c2b1c948872112f58259c529d043f9694c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
