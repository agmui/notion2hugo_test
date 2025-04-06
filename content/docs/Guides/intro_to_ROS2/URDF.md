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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDMDDH7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA8P98DyrIQXbl2t87muswYbiEWUuRaltXtaROT9SopAiAjLCsj9CDpvGX2Yd9x4cdA5vLi03IrczJFwZWjlnHLayr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMtLvrg11GqSzP0W%2FOKtwD4h0KDCBT0HDG59gmX2LmjVUjLFfBqU8CYideUtHaCmBU2PQO5FVpAIsDnqReXmKS5on%2B9tNW98ln1DWhe5F84gnpEkaFay8BEwZPoBuR0UkHMCo07qUkgdMgaHkwWR9fQAM9VvJt%2B8JnpKyFs4UKLpp6lLVBH6duPhbyzyUciNqixreO6Akk8reHXPE4mgC8ee1Xg5s7aNy%2F7Dox5aqjjf1eMtZ8aVi8KNINBz%2BGqs5HXU4nyUugsETBQGFf2ZSJJgryJU4ctRLnO3B5gJNyNwBvDKkFSgmDswFKE%2FIfHV2583GxKGXQuwDPUUrVHEqEuR9sqOmaEXH71aZASnOVtlwWBl4JZMspC3%2FP19UfGkWANiLuiO6G1oYsaqE%2FvwTZ2KUmaOwjGA06hzt0FT2zPxuM2ms4qUgdsmXpHldm67c70CCT%2F14V3is3fFgPANS39c7rlbLmo2cGzahN4Ht7LoIOoRxCU9M7lckbg2JjJMvShGY57bFePTXEChVwMkkk4nvYG6XSG%2F8%2Ffg3dKbVNQDGLq2y16f29DE1RkVNq9OxtfmBg0z31pl1CK%2F1vBKNEq2iAZ1YWCbHnyT4FllP4jA9Uu7LTjHJGncvTop6%2B339HBA8kUNY5Z9vww58w3aPKvwY6pgEYzmH04RjG2NIu3AAfGU47KTMNZEKDsrQyAOEOc7h0g6UIsjJyKxmQLGWpL%2Fx1z08UFl3q75JzME2gNG9XS5EIv4YldL5cPRVwLfFxucSRyumDvB5gPMqdAkzVnZb1Z7tvNgMk%2BpEcFjgIrQMxVIeqEp9Gu%2Fv5lh%2FQBmePiUk3OnqnENUOnGZn8Kj1G0U45eOiMfI6%2BdjtRedthJsgg%2F5327iLMkzZ&X-Amz-Signature=644ee0580b12c4175970e219ecf462869378395e64cd16807f413344d8112636&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TDMDDH7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA8P98DyrIQXbl2t87muswYbiEWUuRaltXtaROT9SopAiAjLCsj9CDpvGX2Yd9x4cdA5vLi03IrczJFwZWjlnHLayr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMtLvrg11GqSzP0W%2FOKtwD4h0KDCBT0HDG59gmX2LmjVUjLFfBqU8CYideUtHaCmBU2PQO5FVpAIsDnqReXmKS5on%2B9tNW98ln1DWhe5F84gnpEkaFay8BEwZPoBuR0UkHMCo07qUkgdMgaHkwWR9fQAM9VvJt%2B8JnpKyFs4UKLpp6lLVBH6duPhbyzyUciNqixreO6Akk8reHXPE4mgC8ee1Xg5s7aNy%2F7Dox5aqjjf1eMtZ8aVi8KNINBz%2BGqs5HXU4nyUugsETBQGFf2ZSJJgryJU4ctRLnO3B5gJNyNwBvDKkFSgmDswFKE%2FIfHV2583GxKGXQuwDPUUrVHEqEuR9sqOmaEXH71aZASnOVtlwWBl4JZMspC3%2FP19UfGkWANiLuiO6G1oYsaqE%2FvwTZ2KUmaOwjGA06hzt0FT2zPxuM2ms4qUgdsmXpHldm67c70CCT%2F14V3is3fFgPANS39c7rlbLmo2cGzahN4Ht7LoIOoRxCU9M7lckbg2JjJMvShGY57bFePTXEChVwMkkk4nvYG6XSG%2F8%2Ffg3dKbVNQDGLq2y16f29DE1RkVNq9OxtfmBg0z31pl1CK%2F1vBKNEq2iAZ1YWCbHnyT4FllP4jA9Uu7LTjHJGncvTop6%2B339HBA8kUNY5Z9vww58w3aPKvwY6pgEYzmH04RjG2NIu3AAfGU47KTMNZEKDsrQyAOEOc7h0g6UIsjJyKxmQLGWpL%2Fx1z08UFl3q75JzME2gNG9XS5EIv4YldL5cPRVwLfFxucSRyumDvB5gPMqdAkzVnZb1Z7tvNgMk%2BpEcFjgIrQMxVIeqEp9Gu%2Fv5lh%2FQBmePiUk3OnqnENUOnGZn8Kj1G0U45eOiMfI6%2BdjtRedthJsgg%2F5327iLMkzZ&X-Amz-Signature=0087ee3982b10929fb1b28b3690ffe2c105582540592ccf3485f9fbd5f77353b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
