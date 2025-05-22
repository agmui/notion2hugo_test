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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YFER7CF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCzAJxObAyA7pGUAaf1Qv6Nn95Sji5BEb7BTFJJS3VL%2FwIge%2FywtGHjgZE3UktzjDv%2FkiNPJu8d7affTaJAdxw2dGkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVWxRGPDx7bSvq2sircAy6rHGoxT5P8bqHSI86L78xST0c9aj8t7dVlH4i0v%2BFc7brL4ZHAo%2BKeH6Jh1MtBlROyv4vy9dQ7Dg3ROMWGlubQj45rHQtHuujLxksAC8E0ZALxWZZZlnGSJfi5ZsnMArqrkoGVuEk0Tp65fH8GrP9KGwCZ6mTHyG%2Bvr1kLab5EXnDq8yiA8NDEBZd03gEJHTmG2m9V3TNyG4oqgZ%2BmLzUKycO8VPY0jWcm17MooDwtpYGq6REwlJdgmRK3bcRnldSIN8b9ml%2BakF8dyIiCQy9wA26HSnZqLOLpAKcEcI9mKFS8G3p9BmxVJyCqQ4D9WdivInew%2BtXXz1hh9IvdGTq%2F%2FAgyG%2BN9woPt7f7Lvuzzq9kS0DP9sLZMk8k4K3V%2FuJhmDWcYYelmi%2FrSyZMH8N09gTaMoZ9v7dzLBbu2cdZpIztGNkSuz3Ui2qTonzeL6bv9JgpUTUVNyUXEuz6T3PlDgh8TlkaPBudLi0um%2B2fG%2BQqQe1EvQ7GcXFcjt0PgHHklpbRfUpGDHW6dQsNRtxUJ8Z4NyQVUY7UEtzMimCG06k4vA%2BPxExvIjPzbFWVxCoWu7Z%2BbeENwUfrwmqnfFtIPKS9F%2Bh%2FfYMC9XrrIvXcquiqFmp8QyKQxcS0rMLSUusEGOqUBI19t%2BHpiISLBf0YUbK73mKx4qWPgrdHekTWy8g17m3ky3Vkh%2FkHusk4mMyVktCoJziI33wMe9f6adIRb3RAy7mf1aVFmHySNf9bv0U3aTurDlYy%2BcXrObSrFtHLdIDYpoWwVSkvkBdN6a9OM2JoCpPQfK9%2FSaow0ahYECUBRmFBCFjpc7OTlYa%2FHBlHk8fYmv%2FE0s%2F4biG8h3u8ltn%2BDS%2FehqQY4&X-Amz-Signature=a3dfd40b9f744b3d6ba1d20e23b7f34114a344175a327fa5d22cfd8833df042b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YFER7CF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCzAJxObAyA7pGUAaf1Qv6Nn95Sji5BEb7BTFJJS3VL%2FwIge%2FywtGHjgZE3UktzjDv%2FkiNPJu8d7affTaJAdxw2dGkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVWxRGPDx7bSvq2sircAy6rHGoxT5P8bqHSI86L78xST0c9aj8t7dVlH4i0v%2BFc7brL4ZHAo%2BKeH6Jh1MtBlROyv4vy9dQ7Dg3ROMWGlubQj45rHQtHuujLxksAC8E0ZALxWZZZlnGSJfi5ZsnMArqrkoGVuEk0Tp65fH8GrP9KGwCZ6mTHyG%2Bvr1kLab5EXnDq8yiA8NDEBZd03gEJHTmG2m9V3TNyG4oqgZ%2BmLzUKycO8VPY0jWcm17MooDwtpYGq6REwlJdgmRK3bcRnldSIN8b9ml%2BakF8dyIiCQy9wA26HSnZqLOLpAKcEcI9mKFS8G3p9BmxVJyCqQ4D9WdivInew%2BtXXz1hh9IvdGTq%2F%2FAgyG%2BN9woPt7f7Lvuzzq9kS0DP9sLZMk8k4K3V%2FuJhmDWcYYelmi%2FrSyZMH8N09gTaMoZ9v7dzLBbu2cdZpIztGNkSuz3Ui2qTonzeL6bv9JgpUTUVNyUXEuz6T3PlDgh8TlkaPBudLi0um%2B2fG%2BQqQe1EvQ7GcXFcjt0PgHHklpbRfUpGDHW6dQsNRtxUJ8Z4NyQVUY7UEtzMimCG06k4vA%2BPxExvIjPzbFWVxCoWu7Z%2BbeENwUfrwmqnfFtIPKS9F%2Bh%2FfYMC9XrrIvXcquiqFmp8QyKQxcS0rMLSUusEGOqUBI19t%2BHpiISLBf0YUbK73mKx4qWPgrdHekTWy8g17m3ky3Vkh%2FkHusk4mMyVktCoJziI33wMe9f6adIRb3RAy7mf1aVFmHySNf9bv0U3aTurDlYy%2BcXrObSrFtHLdIDYpoWwVSkvkBdN6a9OM2JoCpPQfK9%2FSaow0ahYECUBRmFBCFjpc7OTlYa%2FHBlHk8fYmv%2FE0s%2F4biG8h3u8ltn%2BDS%2FehqQY4&X-Amz-Signature=6f1d40238f1cef199b9a7b9f2752dc80e273cb33de1440b89b7437c204d9b660&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
