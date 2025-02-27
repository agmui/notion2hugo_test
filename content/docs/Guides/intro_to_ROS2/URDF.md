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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6USFQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIH5Xooo4nKwsMQQY76e5UzgrBXjZqT3OJuz9hVLNYsChAiEA8Z7m3qwYxI76DbafpuV%2BjB%2FMHQm%2BAjKKUNlfXDa5qFUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNbwsur4qwLtV%2FodoircA2KMQdQVgClhS7t5t3hAlXwi5ZdNQZjQ%2BjzO0QM7YJae4ieQ2ZjIVuMl8IfPCDpVvPABnMelp1XwP5iOPyxSjInYnDpKA8hQN%2F4mo0kS7hcqVpWiBF923gaZYZ3VD7qP8iMzd4vwVwkulKU%2BG7lmzNOAjjOP%2BBRz4Tg3kvfgULPbYcWBh3LLdYmC%2BN5eTy6p7Q7w2wbiVKWnPmiDsvKQzxgYl6ogMd%2FFIYj%2FNF4hH4xaVw7NLmSJeJRnmgEcmMReF7QfsptFwJZdtDQZsM7QAsNQcJesrws%2BpKrIP1eWjRNtXduTGgm1QiKrDE7MHUNlrDA93pabm1HNeyB8pt2hlwCQ9zdRTy0s%2FK1JNXzdhxRKCp4UTJrqE4rSmUvpmNi%2FZnQYc113Pbtu3x3w9fHl8eTuP4mgLzUX6kuLRidoZPS8bYK6B1TsCq%2F%2FD91H5FObEn5%2BiJ0PHkqrWy9ke7rqvc%2FOs3yIk1cwXXwn3v50ypmcOfmIUsvhQNJypb6ZSxo8XXK5BFv0W%2B6nSp1uQmRh9S2WhiUpU%2FDzuo7gxjVV53djW7FEhM0p%2BdAaAWm6sHeMJO7EuW01Rl6IJ3bt4UpuZrP9PIqtwLBxCUrKu%2BSZR6b%2BLZe%2F0PK3gEzu2g7KMLW1gr4GOqUB29PWI1mm6EjLIubBrzyDlyZSOPAq4ShFQBLFInXsjGM4yt8PYnzW0QF0TqMjZPzGlMLjkD5sBRpWBP4wThuBmqjWKiE2PX%2FkRNe%2Fmr1cvDZwiMidLggcJvM9%2Fx%2FhqKBSEVw7ZP%2Fd4djpyTFpJSqZIGZ1CxrFc7OuiOI2S67jax%2FGz9hN7qs2t7fn2bMJ6C4x0V38a6Mzrsws4S%2BEHha5nacYyhUM&X-Amz-Signature=84bb9b90e7420b3ac9fbcabdd36c029aa5581d03ecd46d22a76a88e4c2c0bc1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF6USFQ2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIH5Xooo4nKwsMQQY76e5UzgrBXjZqT3OJuz9hVLNYsChAiEA8Z7m3qwYxI76DbafpuV%2BjB%2FMHQm%2BAjKKUNlfXDa5qFUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNbwsur4qwLtV%2FodoircA2KMQdQVgClhS7t5t3hAlXwi5ZdNQZjQ%2BjzO0QM7YJae4ieQ2ZjIVuMl8IfPCDpVvPABnMelp1XwP5iOPyxSjInYnDpKA8hQN%2F4mo0kS7hcqVpWiBF923gaZYZ3VD7qP8iMzd4vwVwkulKU%2BG7lmzNOAjjOP%2BBRz4Tg3kvfgULPbYcWBh3LLdYmC%2BN5eTy6p7Q7w2wbiVKWnPmiDsvKQzxgYl6ogMd%2FFIYj%2FNF4hH4xaVw7NLmSJeJRnmgEcmMReF7QfsptFwJZdtDQZsM7QAsNQcJesrws%2BpKrIP1eWjRNtXduTGgm1QiKrDE7MHUNlrDA93pabm1HNeyB8pt2hlwCQ9zdRTy0s%2FK1JNXzdhxRKCp4UTJrqE4rSmUvpmNi%2FZnQYc113Pbtu3x3w9fHl8eTuP4mgLzUX6kuLRidoZPS8bYK6B1TsCq%2F%2FD91H5FObEn5%2BiJ0PHkqrWy9ke7rqvc%2FOs3yIk1cwXXwn3v50ypmcOfmIUsvhQNJypb6ZSxo8XXK5BFv0W%2B6nSp1uQmRh9S2WhiUpU%2FDzuo7gxjVV53djW7FEhM0p%2BdAaAWm6sHeMJO7EuW01Rl6IJ3bt4UpuZrP9PIqtwLBxCUrKu%2BSZR6b%2BLZe%2F0PK3gEzu2g7KMLW1gr4GOqUB29PWI1mm6EjLIubBrzyDlyZSOPAq4ShFQBLFInXsjGM4yt8PYnzW0QF0TqMjZPzGlMLjkD5sBRpWBP4wThuBmqjWKiE2PX%2FkRNe%2Fmr1cvDZwiMidLggcJvM9%2Fx%2FhqKBSEVw7ZP%2Fd4djpyTFpJSqZIGZ1CxrFc7OuiOI2S67jax%2FGz9hN7qs2t7fn2bMJ6C4x0V38a6Mzrsws4S%2BEHha5nacYyhUM&X-Amz-Signature=424a3d639ce1f91ec884db17600ef565d2c7ccf308e4c99ba088e5370cfd4a50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
