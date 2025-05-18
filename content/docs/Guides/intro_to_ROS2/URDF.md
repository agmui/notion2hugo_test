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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYOESBJU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkjboFPf%2FGk%2BOZEXV3iYIvLQ8uDaM7nMc8rVfr1733xAiAPQT1GpyqchEu5YEWV%2FHdRJF68%2BZNf5vCkhuXLQqaBbCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM6JdKTkJ9%2BE6hd8uNKtwD8DwehKXSxa5LImtrIl0bmC4ZePS8MlK3rcijFDIZyrwK65A8it48ZsbY1doyKh%2BZthXVk%2Bjk3J3vX28LO%2BDnLD4sjBBlAYdiH1rvy1rXR5gD5pd7%2BmzPYhlokfNl8NVOlNOVPjzlF9dWMrY799vv9Xg%2FdqV0Apk4RfZyfDviGARwE0qyA25LRVqGgHQy%2Bd%2FQyp%2F8GKlnfZ0p8Cf6SPS4TP7WAuHjN%2FkqaJzn%2FFpzgkTYUD1%2FRiB9YekajcIEdFF%2FLaR1tHbaN6HDEbhFOgYifZYhR4WLvW5p736A%2FbIdWkD950wzKyjFVnEet0ZKQjwydOaBZ%2FpIzI2z0p2qZox0sTTICb3JvkPbbX8vOVSTkYoQaliAWOU8ubGxiKgAFJtoENsY56JpWVGT7d0NFWQ6YP2Dj9gA4hggOt580ay8c7%2BbZN%2FFmtpzNl25Mx8nIqfesy%2BGmFHXsX5vgFxgkLuy8am1ax0472oG0%2FUgoa3GSXYN8IDSSRF24Kvtv5577RUSfcA89a2gOnoAzTfMlpLQ17gTJm0sBJaaVL0HPLFlDK1hBgy9YD0Drl%2BSvEt7BuHvErMgts1Jb%2BGtN%2BKkAr0%2FoC4z%2Bqd0NMjad8e%2B0Az8fl7fUYbAkvoOtbgXboow%2FeaowQY6pgF%2FwQujLETeKsqTlRmxtpmvI%2F7zpNvi7OaszQa9Oje3WHan31dQPImUio91TKOEMpt8xjlq8nGvva1IXe3%2B%2Blp6elH6qGQEnhhjoIxtm2H7s0ZFC%2B%2Fi5YIoBtWisU0eRekCmPD9AZw39bdp%2BRh1AqNQcN8%2FqOkp7YxlFWCbVdVPfUoS%2BaRvv%2BuDvjbN4%2FTA2LXN9O5yRV7zG70Ei07mhHCYR6LC2bOM&X-Amz-Signature=f8dcbf9da92f1c1d786d9ee5bb69eae69507b05c8c2a8085379a6d7775788e58&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYOESBJU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkjboFPf%2FGk%2BOZEXV3iYIvLQ8uDaM7nMc8rVfr1733xAiAPQT1GpyqchEu5YEWV%2FHdRJF68%2BZNf5vCkhuXLQqaBbCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM6JdKTkJ9%2BE6hd8uNKtwD8DwehKXSxa5LImtrIl0bmC4ZePS8MlK3rcijFDIZyrwK65A8it48ZsbY1doyKh%2BZthXVk%2Bjk3J3vX28LO%2BDnLD4sjBBlAYdiH1rvy1rXR5gD5pd7%2BmzPYhlokfNl8NVOlNOVPjzlF9dWMrY799vv9Xg%2FdqV0Apk4RfZyfDviGARwE0qyA25LRVqGgHQy%2Bd%2FQyp%2F8GKlnfZ0p8Cf6SPS4TP7WAuHjN%2FkqaJzn%2FFpzgkTYUD1%2FRiB9YekajcIEdFF%2FLaR1tHbaN6HDEbhFOgYifZYhR4WLvW5p736A%2FbIdWkD950wzKyjFVnEet0ZKQjwydOaBZ%2FpIzI2z0p2qZox0sTTICb3JvkPbbX8vOVSTkYoQaliAWOU8ubGxiKgAFJtoENsY56JpWVGT7d0NFWQ6YP2Dj9gA4hggOt580ay8c7%2BbZN%2FFmtpzNl25Mx8nIqfesy%2BGmFHXsX5vgFxgkLuy8am1ax0472oG0%2FUgoa3GSXYN8IDSSRF24Kvtv5577RUSfcA89a2gOnoAzTfMlpLQ17gTJm0sBJaaVL0HPLFlDK1hBgy9YD0Drl%2BSvEt7BuHvErMgts1Jb%2BGtN%2BKkAr0%2FoC4z%2Bqd0NMjad8e%2B0Az8fl7fUYbAkvoOtbgXboow%2FeaowQY6pgF%2FwQujLETeKsqTlRmxtpmvI%2F7zpNvi7OaszQa9Oje3WHan31dQPImUio91TKOEMpt8xjlq8nGvva1IXe3%2B%2Blp6elH6qGQEnhhjoIxtm2H7s0ZFC%2B%2Fi5YIoBtWisU0eRekCmPD9AZw39bdp%2BRh1AqNQcN8%2FqOkp7YxlFWCbVdVPfUoS%2BaRvv%2BuDvjbN4%2FTA2LXN9O5yRV7zG70Ei07mhHCYR6LC2bOM&X-Amz-Signature=0f1c8b144250c0ff7cf1daa03f3b435df0081881ebd6084ad065d4953145da44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
