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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYLEHQM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFk0j1o4yMZzJXEk2unEqtRYSWsN%2BuX8GLdE46XDWnn8AiEAlwz4XQz5zynhLYtrs5mDBBm8dtGJlRhMvxOJutNqW5kqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzJ5fM8t26eBp5%2FWyrcA4K%2BT2fErCipSn8pkGZSD3HvJs770TusLU37g1cKPU72vlEhbf%2FrBh5zx5nXjYyrt6RmKpQh2J%2B9yUqCNOcl5DD5Zayt9mo%2BF2l5XGLNLLj%2BelzHVxh%2FHfaB%2BJT96Z5e7v1K0bcndBDRjBq2vNq5ELUeYYalAhHjMVEcge7GJ%2FtH7t6p8YkSOS1902QG7o02cMzXkztXkJ5%2F4ejR8By7wNz2HPJnHbgN5Vl79hTdlWaNvK7cyMGhEGd69m2%2FBL9mB%2Bc58AzEeN9xAn%2FjwzETpQdpS2uuuax%2BkHvSqKfPK53UVUXPuIMX0kclTcCtcK%2Bkgyryx3FY%2B2maqV3b7thSoCqp%2FXTVoEWnHJraHQTnpQnTqTQNj2xYBnkbtWY24VEjxr2u0QluezxSw%2FzGx2ngqeLOt3mKgH5aVkCNftkSn1kiTZ3qRhiQQ80sbgpfTn%2BJfFEtbfW2487ghDeQN3owru%2Bnq5m%2B0mhko3UHqI%2F75NgejRUT9qb%2B%2F9s00fdxFcCCuXyXLte5mM5ft5fykJr5SA2GAQhPeIk%2BBRlvl4wgZ5gsmezJbWf2Gb7Prqeg0ORD3DN%2FavGGNcAQIEuxbCLzVZVh6h5YM9%2BVvflD2a5rpD9RgW%2BGchng%2B%2Bjl4x3gMNyZnb4GOqUB3bv7tRLgAohTaD%2FLmJR8S9vepG1eddh5lrC3Nts6mzIsZKgfFxdMwGFCZnE%2FZyMAdp7uGejSd%2BKbblmpjr2rHF51d7MPMX%2BWVFhxo11sfA3XnCXk3TIrYnBaDZ30P1fdy5vtvHaf%2BYH%2FZ%2F1Z%2FNAuTLdhf8UYb3uoTPK4C2w25NkHykoE3EqSr60t3Ut9J8uK7K%2BoO9LuPDgI9reWZGPFaA3AM8w6&X-Amz-Signature=bf1c4fc8a8ef1093e839822ad5ea8dc28032be1252e867834def2d2253e1c6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYLEHQM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFk0j1o4yMZzJXEk2unEqtRYSWsN%2BuX8GLdE46XDWnn8AiEAlwz4XQz5zynhLYtrs5mDBBm8dtGJlRhMvxOJutNqW5kqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzJ5fM8t26eBp5%2FWyrcA4K%2BT2fErCipSn8pkGZSD3HvJs770TusLU37g1cKPU72vlEhbf%2FrBh5zx5nXjYyrt6RmKpQh2J%2B9yUqCNOcl5DD5Zayt9mo%2BF2l5XGLNLLj%2BelzHVxh%2FHfaB%2BJT96Z5e7v1K0bcndBDRjBq2vNq5ELUeYYalAhHjMVEcge7GJ%2FtH7t6p8YkSOS1902QG7o02cMzXkztXkJ5%2F4ejR8By7wNz2HPJnHbgN5Vl79hTdlWaNvK7cyMGhEGd69m2%2FBL9mB%2Bc58AzEeN9xAn%2FjwzETpQdpS2uuuax%2BkHvSqKfPK53UVUXPuIMX0kclTcCtcK%2Bkgyryx3FY%2B2maqV3b7thSoCqp%2FXTVoEWnHJraHQTnpQnTqTQNj2xYBnkbtWY24VEjxr2u0QluezxSw%2FzGx2ngqeLOt3mKgH5aVkCNftkSn1kiTZ3qRhiQQ80sbgpfTn%2BJfFEtbfW2487ghDeQN3owru%2Bnq5m%2B0mhko3UHqI%2F75NgejRUT9qb%2B%2F9s00fdxFcCCuXyXLte5mM5ft5fykJr5SA2GAQhPeIk%2BBRlvl4wgZ5gsmezJbWf2Gb7Prqeg0ORD3DN%2FavGGNcAQIEuxbCLzVZVh6h5YM9%2BVvflD2a5rpD9RgW%2BGchng%2B%2Bjl4x3gMNyZnb4GOqUB3bv7tRLgAohTaD%2FLmJR8S9vepG1eddh5lrC3Nts6mzIsZKgfFxdMwGFCZnE%2FZyMAdp7uGejSd%2BKbblmpjr2rHF51d7MPMX%2BWVFhxo11sfA3XnCXk3TIrYnBaDZ30P1fdy5vtvHaf%2BYH%2FZ%2F1Z%2FNAuTLdhf8UYb3uoTPK4C2w25NkHykoE3EqSr60t3Ut9J8uK7K%2BoO9LuPDgI9reWZGPFaA3AM8w6&X-Amz-Signature=3a69d9c43c09040e60b915f56bb8a3479954ab982f1e402b7768269578be3ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
