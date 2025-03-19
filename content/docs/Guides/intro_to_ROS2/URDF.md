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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7QDMF2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEfdBO6myfg76eifoPVY2bnLdUz088%2B2HOGPPxKEMKFFAiEA%2BqBGgqqC0GiarUuavAVuuL2d77qClA7Zv4tWPzyj3fAq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKWn%2BnZ%2Bkrl7zIHoNyrcA%2BiRDMQrA%2FCusXkh87lT4Z8zy3wkd0coQo7ckDA6dln%2BdcOK7hT0uViKA%2FvJz11G4qx8FybO5FXaLMay5%2Bg%2BJTDmQvSRbJ6W7nmGDNR6yLwH5Pl4uvi2pMjNS3kAc4kbfoxlCYNRVzu6K2PWjZI4b5zcHipkn0OiRk%2FpAkfy%2FVa0sbDjtgR27s2b2Heyeh07UQnikCke2sPj4iaDWVR0%2FLR%2FAIZbSM5kp0YCOP8EdwuInZa0pL7kFuX%2BRbpubm%2F7CwJiQPf%2FIBkSAnPq3XPoAy7jnkfGL3kiHh7ieBREgGmon%2FFCI3epF3Av9wuQn%2FR1arpWpaU8Yo%2Fg3JvMmftOJ7VOtBvr3QwagoVUmOMtZDOqf6%2FQG2X8g1oF69Hj3d%2B7c4K3h1j3957z11GJuZoEfkh6FZeVs1eq6Fz9LaVsiRUExbz93lmHuq%2FvZRJFGBkZFgpstAtIHi2SPpv8rRJsVyByl6xcmtisw%2FnR7YHj1fzXYAfAnRlRgKk5M3aQDyZ7pbMPEU%2BBE5gtT9kmOInSmaWjD7tvpYmE8KFqDJnZVs7l9M2yXANOrvo%2BLZoDUhsJSComxne0hkXIqSZNRTAjTs5SFni2DzGDGfrxTDmZp7hLCpaxmQQNja1AXjjxMJq96L4GOqUBxqOyjDBX5Rz2T5W4%2FgbhFHc601lhZm65Kt928Wo9MgLAU44tnoJUFWhx%2FDKZ%2Fs0pwAPtdU6Ks%2B1klN5pR6iSkT8gISV%2BfvpkKu6bF0ULL0l0N9Xu4u5QUtGlvT0sXU4uigJi9ztMrQURZN88lGlwyM4xZtbZ%2Bh0btpLWsu8zvSAIomcGR8s%2BdtdOitu3P7hNRVKhW8HVGD%2B82nHPfRq8TSSgR%2Brf&X-Amz-Signature=ea7858b756aeea96af6cdab7e737b6c01d2d03a91638696e258f39bfcaf4e224&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT7QDMF2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEfdBO6myfg76eifoPVY2bnLdUz088%2B2HOGPPxKEMKFFAiEA%2BqBGgqqC0GiarUuavAVuuL2d77qClA7Zv4tWPzyj3fAq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKWn%2BnZ%2Bkrl7zIHoNyrcA%2BiRDMQrA%2FCusXkh87lT4Z8zy3wkd0coQo7ckDA6dln%2BdcOK7hT0uViKA%2FvJz11G4qx8FybO5FXaLMay5%2Bg%2BJTDmQvSRbJ6W7nmGDNR6yLwH5Pl4uvi2pMjNS3kAc4kbfoxlCYNRVzu6K2PWjZI4b5zcHipkn0OiRk%2FpAkfy%2FVa0sbDjtgR27s2b2Heyeh07UQnikCke2sPj4iaDWVR0%2FLR%2FAIZbSM5kp0YCOP8EdwuInZa0pL7kFuX%2BRbpubm%2F7CwJiQPf%2FIBkSAnPq3XPoAy7jnkfGL3kiHh7ieBREgGmon%2FFCI3epF3Av9wuQn%2FR1arpWpaU8Yo%2Fg3JvMmftOJ7VOtBvr3QwagoVUmOMtZDOqf6%2FQG2X8g1oF69Hj3d%2B7c4K3h1j3957z11GJuZoEfkh6FZeVs1eq6Fz9LaVsiRUExbz93lmHuq%2FvZRJFGBkZFgpstAtIHi2SPpv8rRJsVyByl6xcmtisw%2FnR7YHj1fzXYAfAnRlRgKk5M3aQDyZ7pbMPEU%2BBE5gtT9kmOInSmaWjD7tvpYmE8KFqDJnZVs7l9M2yXANOrvo%2BLZoDUhsJSComxne0hkXIqSZNRTAjTs5SFni2DzGDGfrxTDmZp7hLCpaxmQQNja1AXjjxMJq96L4GOqUBxqOyjDBX5Rz2T5W4%2FgbhFHc601lhZm65Kt928Wo9MgLAU44tnoJUFWhx%2FDKZ%2Fs0pwAPtdU6Ks%2B1klN5pR6iSkT8gISV%2BfvpkKu6bF0ULL0l0N9Xu4u5QUtGlvT0sXU4uigJi9ztMrQURZN88lGlwyM4xZtbZ%2Bh0btpLWsu8zvSAIomcGR8s%2BdtdOitu3P7hNRVKhW8HVGD%2B82nHPfRq8TSSgR%2Brf&X-Amz-Signature=3324934b000ab589866c482d9ad45d212fba346c5caec7fd8164de946d73e72b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
