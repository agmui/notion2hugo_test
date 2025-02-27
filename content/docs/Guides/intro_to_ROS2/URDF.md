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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X27YXHQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDgoUZRK2CEHR8%2B7ghIfeNNzSt%2BTngSnZxBGfrDSaVLPgIgFLYcV5uebBPWKTgbVRuN8wKLtLotm8wu8TBRcaxI8B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNQTYg8%2BQDRapuwVPSrcAxzM8m3h1WyqWx3FGJcS2w3Wvu6B23UdoapKeZAq%2B%2FTZQ7RkpLWGwriAqNoSbVAjkluPFgniqKoBQLWHUtZKGIMicm1gELeZmqp8KxGXNcL27aqP3V9Y4al3o2ezXsA9lW1Y3WY4dFFUv7u211dc1Tuc8VsMnLTF2RVyZdit1L7bfTE9MLoS1N7HputTs0A6NfP3TrCBz5XcM51S%2Bc7eGFq57sQAND421lsNR%2BhzE5Kj1wIp8J3D6PU861KYtaa4rMjIqHpx6hYwsSEVP5RfJfp9qTM0z%2FloBAuM7hSvnLM3tpd4GShCF6DPUi6MjyaJYJ%2FbLedwEtJBFhijLe3fMJ6%2BzCNeUDTYvg%2FHIYyX8j7AEpoyLqfgsTy%2BCdyWlVC1jzgCf9IwoJ%2By04QWqzda2y9TgsyIO5E%2B9Gmlxu3TwpcGf4HIhQVP7Cs5aCbNK1pp0px4cJCK5e1iDx485AaCG9QmH4plajY%2BYrBTljdI6VL5tyD8G4Cxm1fkKGTMl7NtHe66WM%2BJJ6%2Fscb7IDJuufYWqwouo4fP421ow70YKjb8wSGefrxcmyk%2BMATwjv%2BM4i4I76Z98zdkZb%2FJ7kkKwouey2WP3BPy4eR4%2BFn7acVLYVGaAJs%2FNYQeeBR7dMNbRgL4GOqUBSf6vb57%2B056Ii%2Fagyy%2Fked9cwbvpuIM%2FIHEpLVG56Zltc7mLZcMsD2%2FKWNgJl5BIoUMPl9mL05KhcMxRiJjerQtMehz1vZy%2FZPIdjypDsNVHQ%2Bqfj5w5jrsjoO7%2Bnqu9U%2F99%2BffQ7MTM9zM9kCHWo0JQY9DbVZmQnn3%2FpPut21AyCScNSXgU3jbTf%2BzEMSDjfEg%2FjBH9vcnbkz9RE5D91%2F%2B8piTJ&X-Amz-Signature=61ef8b8ffa1a0ed0fd0c579c4ba50ad0709a19aa2de7ebf0fc248e84009febbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X27YXHQ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDgoUZRK2CEHR8%2B7ghIfeNNzSt%2BTngSnZxBGfrDSaVLPgIgFLYcV5uebBPWKTgbVRuN8wKLtLotm8wu8TBRcaxI8B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNQTYg8%2BQDRapuwVPSrcAxzM8m3h1WyqWx3FGJcS2w3Wvu6B23UdoapKeZAq%2B%2FTZQ7RkpLWGwriAqNoSbVAjkluPFgniqKoBQLWHUtZKGIMicm1gELeZmqp8KxGXNcL27aqP3V9Y4al3o2ezXsA9lW1Y3WY4dFFUv7u211dc1Tuc8VsMnLTF2RVyZdit1L7bfTE9MLoS1N7HputTs0A6NfP3TrCBz5XcM51S%2Bc7eGFq57sQAND421lsNR%2BhzE5Kj1wIp8J3D6PU861KYtaa4rMjIqHpx6hYwsSEVP5RfJfp9qTM0z%2FloBAuM7hSvnLM3tpd4GShCF6DPUi6MjyaJYJ%2FbLedwEtJBFhijLe3fMJ6%2BzCNeUDTYvg%2FHIYyX8j7AEpoyLqfgsTy%2BCdyWlVC1jzgCf9IwoJ%2By04QWqzda2y9TgsyIO5E%2B9Gmlxu3TwpcGf4HIhQVP7Cs5aCbNK1pp0px4cJCK5e1iDx485AaCG9QmH4plajY%2BYrBTljdI6VL5tyD8G4Cxm1fkKGTMl7NtHe66WM%2BJJ6%2Fscb7IDJuufYWqwouo4fP421ow70YKjb8wSGefrxcmyk%2BMATwjv%2BM4i4I76Z98zdkZb%2FJ7kkKwouey2WP3BPy4eR4%2BFn7acVLYVGaAJs%2FNYQeeBR7dMNbRgL4GOqUBSf6vb57%2B056Ii%2Fagyy%2Fked9cwbvpuIM%2FIHEpLVG56Zltc7mLZcMsD2%2FKWNgJl5BIoUMPl9mL05KhcMxRiJjerQtMehz1vZy%2FZPIdjypDsNVHQ%2Bqfj5w5jrsjoO7%2Bnqu9U%2F99%2BffQ7MTM9zM9kCHWo0JQY9DbVZmQnn3%2FpPut21AyCScNSXgU3jbTf%2BzEMSDjfEg%2FjBH9vcnbkz9RE5D91%2F%2B8piTJ&X-Amz-Signature=52f589024f7b8963113a3e812678750ab5d852ced1f4d0dfb68f37c5f9ade9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
