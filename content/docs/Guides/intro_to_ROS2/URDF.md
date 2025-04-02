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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GKJ33A%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDDrFoaftm4xJDgmSR6wZUNrWQhKytg63CYJ3NeViKTsQIgf9BMEu9z%2BHM3vDEsMPA%2FZ4xgndXVFtnJb3G7bTXucUsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXmdfqcnE2lUdQhVyrcAyWmaEwPhzQupqeZpcTkieNmuhLJdhQa3o1rJ6Z4ELOhgJZwvXiYXD4UvMMgdfruLqaUXnDiDRbgBISRhtSvOolngl79VOSJRKOmE8r%2BDrxwu0aOI8HJ8k1SCqJQ5RJwchkpsgxX06igmJwY4WpDBktfoX%2F8trFKiJT6nXcJ6uazuCS%2Bx5y8yqd3AKbKDjfagd7oOPa5YmfgbUyukT56%2B4iHFY7rdARUcXbvuF%2F7ET6cT6sejgZd%2Bzp%2BxORPE2ECYl9To0n2rI23LOAjiaW%2FDO1k8c1ccG3fz9tIqJjo4gt0m4k%2FPe%2FTF1O3x7n3FjASKbrIfQNQs5J2%2FHpCHDVzzwSGL7ey%2BqhXUp54og3xjlbcf7IXzfgKeRsg%2F6p7IAli7OQKarTHr%2F7E8bSCvvOss1CGhI3ZO5sjHuxDChGYl5pIwd0W5BYmeay8y7MtKCyN0lvJM1ukhk%2Be8XfdsO%2FpyllPIcQjvYTQLLWCRGsds2xSaWnoMojKSRDgn3ULcQObsWCNiC6l1%2BKppoa84KCt6%2FHbtAgUHhLQbZVc1CcE8N26Y4ck8qGNvCrJaiINck1Amqxu%2Fo8BG%2B3q9eTfMoEpImV0k2mUdtQEGjEwXYkVq5vkKrPJvsF%2Be7z49QWnMLrQsr8GOqUBAQ9p74AaPDZwOY0feGubwH0lIahim0Hl6iYaBtwhnEX6ggTtNyARXy2QM1b5DskhVKHkZm3U%2BBCGzzJuVDL5TUbES55j8RHwgO60WYcfJjomubYJ%2BknQALHxeQ%2Bz%2BZZVm%2BoGMg9sXnrhHOluejccIRpPI3D8Lrl7OumDeQZjHnQ2SXZgy9P3p8aB7n7Fee7du7SmKPlnGTFhq6gqdmnfZf6hE3CD&X-Amz-Signature=ea0ef1a528193b63365870b7fb66a389aba2897d3f20db946d399fe6db0473e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GKJ33A%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDDrFoaftm4xJDgmSR6wZUNrWQhKytg63CYJ3NeViKTsQIgf9BMEu9z%2BHM3vDEsMPA%2FZ4xgndXVFtnJb3G7bTXucUsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXmdfqcnE2lUdQhVyrcAyWmaEwPhzQupqeZpcTkieNmuhLJdhQa3o1rJ6Z4ELOhgJZwvXiYXD4UvMMgdfruLqaUXnDiDRbgBISRhtSvOolngl79VOSJRKOmE8r%2BDrxwu0aOI8HJ8k1SCqJQ5RJwchkpsgxX06igmJwY4WpDBktfoX%2F8trFKiJT6nXcJ6uazuCS%2Bx5y8yqd3AKbKDjfagd7oOPa5YmfgbUyukT56%2B4iHFY7rdARUcXbvuF%2F7ET6cT6sejgZd%2Bzp%2BxORPE2ECYl9To0n2rI23LOAjiaW%2FDO1k8c1ccG3fz9tIqJjo4gt0m4k%2FPe%2FTF1O3x7n3FjASKbrIfQNQs5J2%2FHpCHDVzzwSGL7ey%2BqhXUp54og3xjlbcf7IXzfgKeRsg%2F6p7IAli7OQKarTHr%2F7E8bSCvvOss1CGhI3ZO5sjHuxDChGYl5pIwd0W5BYmeay8y7MtKCyN0lvJM1ukhk%2Be8XfdsO%2FpyllPIcQjvYTQLLWCRGsds2xSaWnoMojKSRDgn3ULcQObsWCNiC6l1%2BKppoa84KCt6%2FHbtAgUHhLQbZVc1CcE8N26Y4ck8qGNvCrJaiINck1Amqxu%2Fo8BG%2B3q9eTfMoEpImV0k2mUdtQEGjEwXYkVq5vkKrPJvsF%2Be7z49QWnMLrQsr8GOqUBAQ9p74AaPDZwOY0feGubwH0lIahim0Hl6iYaBtwhnEX6ggTtNyARXy2QM1b5DskhVKHkZm3U%2BBCGzzJuVDL5TUbES55j8RHwgO60WYcfJjomubYJ%2BknQALHxeQ%2Bz%2BZZVm%2BoGMg9sXnrhHOluejccIRpPI3D8Lrl7OumDeQZjHnQ2SXZgy9P3p8aB7n7Fee7du7SmKPlnGTFhq6gqdmnfZf6hE3CD&X-Amz-Signature=ac46e7b295391f327167acb2863dec50fd58c1e17456ae2093744c89a7e9f2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
