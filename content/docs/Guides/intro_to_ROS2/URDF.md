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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K254DZT%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnkwbkMMIfh3dzQ6pXV2trgkR92JpfgDDC47obqu0LRQIgNCQbp33tDDxXUH5BqyS%2FPThwalQtMPeZWubYwjGHz2cqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyW4qYFiNtAyyKTGircA7S%2Brbh3EfgRZNxSohAeCvbjaIxba9IEiQzjp%2FQk96OxbGrLeC%2B%2BJfWc9YfxV%2BaKH6uEWjmQrEoz7EJcWFOjUNWMwYtOIrDCcma5mRix6%2FO6ZF5ALtzP5Lo6IyB%2BpEEUTo38D4DCfytASaR%2BKHAtOQBzeDNKHIyuO%2F%2F9EPEi77H8Kmqv3r5vNQzNM1xyzy%2B2ZIJIYE6f7i%2FQ4gfXETqRw6VH7qJAxIfw4ZZ7aZ5XE3bb4m7K1Y6t71sgzjWeAeG9FRTch3f3BoDmKpHYCYInX8muMbzGhoDdYnFZpNsKXP3A39OP0Qp%2FceuDNrPNObMhd4Dl39xyrOOIxuxqcRuYM0WpaZ6fi2HmNXYwE2VNT3VadvoUn8sTwoA8OQX%2FEP8wY5bNV%2FGGbJDRqxigzTvldN0gLF6T27qDGDHvNkQS4wGVMc9%2Fas%2F0geCNfMo8UU1DZy1CjtaN%2FtOtjUl%2FGxRC8cBsg%2BYiFKvSo2mKElfrJE7CMYnFrC3a0Z4NgQvyzvKBmF9X3uyK8pTHZygOeP2aHYGvpwrYz1xoMNqktKnrm%2FM0Bm7Ti0L%2FZJSIId38l3TfMaJbYYoaxCDhVrXUjS7D%2BGyZA1t%2Bk%2FnzYCm4UKr0HC8KrGENjr13VqpugHWzMNn7l74GOqUBdtu1G4k34EpaLQN%2BscMMBnI3nVGH2yI8j5%2B0yXhSJuFIKW38hJ%2BukRvss36UXW4GGETpIxRLiwZfvmeVOeTxdpixm%2B4pAoGlNNz91ZbP6BewSoEJSi3fWZ4MPxGsRkWh9w8D600%2BVe6vo9QqfPQQN%2Bw8h%2FHz0JZ5m58VtjWilCYYEHP8pFT1hX1noErJd8xIzUqcgrvJRs76zMuljbvVPF84EVCR&X-Amz-Signature=eedc53197215f9ca851768ef28932c88037b6f0850b76bd95fe6d20332221b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K254DZT%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnkwbkMMIfh3dzQ6pXV2trgkR92JpfgDDC47obqu0LRQIgNCQbp33tDDxXUH5BqyS%2FPThwalQtMPeZWubYwjGHz2cqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyW4qYFiNtAyyKTGircA7S%2Brbh3EfgRZNxSohAeCvbjaIxba9IEiQzjp%2FQk96OxbGrLeC%2B%2BJfWc9YfxV%2BaKH6uEWjmQrEoz7EJcWFOjUNWMwYtOIrDCcma5mRix6%2FO6ZF5ALtzP5Lo6IyB%2BpEEUTo38D4DCfytASaR%2BKHAtOQBzeDNKHIyuO%2F%2F9EPEi77H8Kmqv3r5vNQzNM1xyzy%2B2ZIJIYE6f7i%2FQ4gfXETqRw6VH7qJAxIfw4ZZ7aZ5XE3bb4m7K1Y6t71sgzjWeAeG9FRTch3f3BoDmKpHYCYInX8muMbzGhoDdYnFZpNsKXP3A39OP0Qp%2FceuDNrPNObMhd4Dl39xyrOOIxuxqcRuYM0WpaZ6fi2HmNXYwE2VNT3VadvoUn8sTwoA8OQX%2FEP8wY5bNV%2FGGbJDRqxigzTvldN0gLF6T27qDGDHvNkQS4wGVMc9%2Fas%2F0geCNfMo8UU1DZy1CjtaN%2FtOtjUl%2FGxRC8cBsg%2BYiFKvSo2mKElfrJE7CMYnFrC3a0Z4NgQvyzvKBmF9X3uyK8pTHZygOeP2aHYGvpwrYz1xoMNqktKnrm%2FM0Bm7Ti0L%2FZJSIId38l3TfMaJbYYoaxCDhVrXUjS7D%2BGyZA1t%2Bk%2FnzYCm4UKr0HC8KrGENjr13VqpugHWzMNn7l74GOqUBdtu1G4k34EpaLQN%2BscMMBnI3nVGH2yI8j5%2B0yXhSJuFIKW38hJ%2BukRvss36UXW4GGETpIxRLiwZfvmeVOeTxdpixm%2B4pAoGlNNz91ZbP6BewSoEJSi3fWZ4MPxGsRkWh9w8D600%2BVe6vo9QqfPQQN%2Bw8h%2FHz0JZ5m58VtjWilCYYEHP8pFT1hX1noErJd8xIzUqcgrvJRs76zMuljbvVPF84EVCR&X-Amz-Signature=d303cae89480e67f8307b276c796542322eb169d76cd15acb9d1b192f5b843a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
