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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZNH5SA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBmau11lbeN87AUkehhskC%2BTDBD64SkjazB0yKORNOF9AiEA%2FfyvaEe%2FJ6pAtMrUlGKs8naMpXAsvCxQ%2FkTWwxDiGEcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3zPJasbPS5LrasPyrcAwFRzNxUinKRQUKULu4vNeaHmsIBN4y3%2Fjf2ZM%2B5bpie4S4KzJ%2FvCZsrxQt7kSH%2BTSfD1JwrY7eu9DT%2FpTK7BgKXsN9OuOQhSXnsLqyRhzH%2BlU%2FxnG%2Bjc51BpHfLUbDegIVYEZ4P3VX9uo6nm0t%2FqPQLEBIJUNSMivmsERXzkjSvPoSFdX5jv0Pj3Yx1pVU9NhZT%2BECk4im4IVuZuLpvEEHc3H3TD%2BymhuDELQYRZdDzOQhWG1%2BDKBHCouaRE1Kp1vyhJ%2F70uTsng%2FZO%2B%2FqpjKthC8DuEd4glsg8Hbp0I3NDQBBvZFJFlJtSXwmCkKKl8GxqL5D01TdCXb%2BfXzVb043ckYXOfdANVOxg4QxEHqdcycnDscCVtVvAEwzFozKhX4wxuWpraOU%2FLfcRzYkrbWv3V0ixsZmRmOwlP%2FUd797wDnAWM4TXkbizicjv7A7Uuye9q8tKxPnk20ptno%2FQmy63FVJUzs0xE%2BXcoHCgciA0Wy5%2F1XzXoDxZ7igjoR2LbU5kOKKhNbbPJS2Xu%2F%2BJjtRbuETh5sCk0KEChRCGD5LZD%2FNp8MI2OFAndZTJXWPSqJCokPTi7aq6EnKzOdHdbwTHUmGL7zl5VQQTok6Osg%2BZwcwiDtYzWyiXMdkqMJahg8EGOqUBzK89yCxaxsc5bZ3jeygVeiW3WnZf08a%2BtcjOexqAUOv4%2B90PKEtBmobBj%2BLH9hVfyaTJk2VUpq7p1HwIrO0W0FzKPYDgrbbE4WTi8LXagxNfFQ1SeQbYiuvT7hYPq8g1NpRJb%2B1bi5JzmYrh%2BBiQd0x76Ne%2F6Rg%2FKNoKZUkfNs7%2BoFIVfJCuDX2w62DHEjnzwRTl3jHHrM%2FlSq5RXJpPmo7EJGH%2B&X-Amz-Signature=ad02b531589e751d74a6d1bce83cf811ab6f8bd624792b2f9f5777a5d603a6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZNH5SA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBmau11lbeN87AUkehhskC%2BTDBD64SkjazB0yKORNOF9AiEA%2FfyvaEe%2FJ6pAtMrUlGKs8naMpXAsvCxQ%2FkTWwxDiGEcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3zPJasbPS5LrasPyrcAwFRzNxUinKRQUKULu4vNeaHmsIBN4y3%2Fjf2ZM%2B5bpie4S4KzJ%2FvCZsrxQt7kSH%2BTSfD1JwrY7eu9DT%2FpTK7BgKXsN9OuOQhSXnsLqyRhzH%2BlU%2FxnG%2Bjc51BpHfLUbDegIVYEZ4P3VX9uo6nm0t%2FqPQLEBIJUNSMivmsERXzkjSvPoSFdX5jv0Pj3Yx1pVU9NhZT%2BECk4im4IVuZuLpvEEHc3H3TD%2BymhuDELQYRZdDzOQhWG1%2BDKBHCouaRE1Kp1vyhJ%2F70uTsng%2FZO%2B%2FqpjKthC8DuEd4glsg8Hbp0I3NDQBBvZFJFlJtSXwmCkKKl8GxqL5D01TdCXb%2BfXzVb043ckYXOfdANVOxg4QxEHqdcycnDscCVtVvAEwzFozKhX4wxuWpraOU%2FLfcRzYkrbWv3V0ixsZmRmOwlP%2FUd797wDnAWM4TXkbizicjv7A7Uuye9q8tKxPnk20ptno%2FQmy63FVJUzs0xE%2BXcoHCgciA0Wy5%2F1XzXoDxZ7igjoR2LbU5kOKKhNbbPJS2Xu%2F%2BJjtRbuETh5sCk0KEChRCGD5LZD%2FNp8MI2OFAndZTJXWPSqJCokPTi7aq6EnKzOdHdbwTHUmGL7zl5VQQTok6Osg%2BZwcwiDtYzWyiXMdkqMJahg8EGOqUBzK89yCxaxsc5bZ3jeygVeiW3WnZf08a%2BtcjOexqAUOv4%2B90PKEtBmobBj%2BLH9hVfyaTJk2VUpq7p1HwIrO0W0FzKPYDgrbbE4WTi8LXagxNfFQ1SeQbYiuvT7hYPq8g1NpRJb%2B1bi5JzmYrh%2BBiQd0x76Ne%2F6Rg%2FKNoKZUkfNs7%2BoFIVfJCuDX2w62DHEjnzwRTl3jHHrM%2FlSq5RXJpPmo7EJGH%2B&X-Amz-Signature=149e0e4bf9cf2995accadaae0847167536d457dcdff6afeffcdf808cf2219e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
