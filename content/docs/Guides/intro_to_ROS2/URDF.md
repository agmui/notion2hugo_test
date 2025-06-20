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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PPCDYP%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdXIvLvgbS2%2B01tHBh27wQMlYcAZlh1RXqu5UGH9DE%2FAiAHxt3HeqTpshoJMS59dYAtXM1r5M5Ws3uDAfSBAJrlTSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FbfTOQgobTylOgpKtwDgpPNhYQuZluNdx3U5jPCVq6I73L08h7772AEkL%2BtVJ675JE6tTB%2BCooo%2FpP4jx8%2Bj3oh2zGriUQ%2B1Ao38IgLKP2fxowSWt3nCSJ7cek2K9WrugXx9W2fG7uCIyqazDeXf9XkaJ%2BqG%2BDLAdGpw7tFQXLyNyOdAnqX5%2BCxkTllMzlNQ6CwDE4M4T95Gap225NlbmbujgseaJzIbdop%2BBwEwpAR0tIh%2FxJa5Dk4K1LH5LpxG7iJfsHifPhPDCkVLdmsB5Tn67fo2eE%2BuggNa9pQFyx1etOE05ADxNwTTk5Fx%2FGl7PdPKcF2zN2wTdutqzpthoMBnm5vmPur41vMqNqKM9%2FKACf3pttPj16FiXM0MMFWEf00FU6bv96vG8UIZXZe4Fa4Lc2d5by8MSpKg6GSq95auF%2FYhz5uUXq3Wl88jrpMmv3N0FYyefJmlrGhXP6yQQgwvTgeEciEpnzV37I7p%2BUkOWxsynCo6hOZngAj6eBCkT6AvAiWtM%2FTKv8D5l3Aa0qzTDqVA0ZhTca7Spdwant257ylC97csgzG9cL%2FhkQyaBArj9trsp0CUMq5Ao0nfFBnVRGEs0O%2BaP9iXdKKf1GEIWqDAFWUVOERwuVgtykRv0lOtE2t2qvryHwwr%2FHUwgY6pgHVDvj1YDIZdAWHA6B4lOmob06wMItKfiZ1h%2BPB9%2FdRmZsNG7xyQ4GKZzafw6Kh9bzYe%2BY9%2FNqaJRh%2B%2BH3Yngx0yHQtTimVEq8kK3eA9z5C2ah4Lw%2FvgQ8f8Ar49nVc5n%2BDnOXSvFb6%2FhUg6PGBJpVV0lO4V7ANSE0jENXV7D9XzFyxWhOCCb4TQ77BuFQy3Ol%2FmrXaDWv5IyYtwxgj%2Fkpz4zhkBwNF&X-Amz-Signature=e1560559cd0bc92769c9a79fd93ffe9a31124a8ae7c38fb4b9be6770d5bf1e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PPCDYP%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdXIvLvgbS2%2B01tHBh27wQMlYcAZlh1RXqu5UGH9DE%2FAiAHxt3HeqTpshoJMS59dYAtXM1r5M5Ws3uDAfSBAJrlTSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FbfTOQgobTylOgpKtwDgpPNhYQuZluNdx3U5jPCVq6I73L08h7772AEkL%2BtVJ675JE6tTB%2BCooo%2FpP4jx8%2Bj3oh2zGriUQ%2B1Ao38IgLKP2fxowSWt3nCSJ7cek2K9WrugXx9W2fG7uCIyqazDeXf9XkaJ%2BqG%2BDLAdGpw7tFQXLyNyOdAnqX5%2BCxkTllMzlNQ6CwDE4M4T95Gap225NlbmbujgseaJzIbdop%2BBwEwpAR0tIh%2FxJa5Dk4K1LH5LpxG7iJfsHifPhPDCkVLdmsB5Tn67fo2eE%2BuggNa9pQFyx1etOE05ADxNwTTk5Fx%2FGl7PdPKcF2zN2wTdutqzpthoMBnm5vmPur41vMqNqKM9%2FKACf3pttPj16FiXM0MMFWEf00FU6bv96vG8UIZXZe4Fa4Lc2d5by8MSpKg6GSq95auF%2FYhz5uUXq3Wl88jrpMmv3N0FYyefJmlrGhXP6yQQgwvTgeEciEpnzV37I7p%2BUkOWxsynCo6hOZngAj6eBCkT6AvAiWtM%2FTKv8D5l3Aa0qzTDqVA0ZhTca7Spdwant257ylC97csgzG9cL%2FhkQyaBArj9trsp0CUMq5Ao0nfFBnVRGEs0O%2BaP9iXdKKf1GEIWqDAFWUVOERwuVgtykRv0lOtE2t2qvryHwwr%2FHUwgY6pgHVDvj1YDIZdAWHA6B4lOmob06wMItKfiZ1h%2BPB9%2FdRmZsNG7xyQ4GKZzafw6Kh9bzYe%2BY9%2FNqaJRh%2B%2BH3Yngx0yHQtTimVEq8kK3eA9z5C2ah4Lw%2FvgQ8f8Ar49nVc5n%2BDnOXSvFb6%2FhUg6PGBJpVV0lO4V7ANSE0jENXV7D9XzFyxWhOCCb4TQ77BuFQy3Ol%2FmrXaDWv5IyYtwxgj%2Fkpz4zhkBwNF&X-Amz-Signature=b368bd37e822e7153480957a706ca4b1bd4bf04ac2e754923b1291c353e4a2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
