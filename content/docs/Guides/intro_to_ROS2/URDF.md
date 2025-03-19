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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXEF2CYQ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICPZvSYywcbCEH9Buyf2DO6xfUWpjvm2HuC4barecz0NAiEA%2FOvoIBH7QZH4nXdT%2FUIWPfcgzHP4rm%2BvtPmLkpC3q7Aq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEwwXqSpit2aAivhPircA0YYEeaCjW7Glei3QsZIg%2Bw2GPr6v4%2BwQp9hTj2Ee5rorhGBoL1%2Fo8ZRRxeKWbbt4w7wrsIUgyG6aEnGqDd4l93HlweXosu%2FaaiQFQO71yXOZ2YnlOEU3e5TPMfRjKjJFdNhhNYv%2Fi9cMzufd5VkXoTXTDL%2BAUNpELAn%2FDgPQsPEvNM4%2BZhga%2BP%2BwzPniIe%2BmwKZ9YYtLBHRkp1JZrHNRKRBlX6WuRNMVGUhyg3MLwRvprS9v0RmXcm9zC95ToAC%2BPfgmC8nEaKkGtdxUF0oRXBOVRM95l2RauqnOc8DsdD1ydqPEKAkMrxBNjpsEracMhLMcfdiGjwoqJhSCuVIkVzjoIYl8LA2tnc1vndKG0qcJeHp%2FwRrxtx8OaiVll40Yx5I610f9Iaz0rBtSXu%2BHVJciPcFMF96uk3DVIK8nxUTomcToEJLeubYZrUjWf3T%2BwEqOPd1AcafWi424%2F4Gdw72FeGTAB3Ts%2BMqGD%2FT%2FprS%2FF3bhKgx8RO7rqXVpsvY%2FNpx3TEWzdlHipIIm4uvacxVdqzwT%2BwUxWGG1h%2BN%2BGmsYZ67fJnub0rLcr8NNYzjuwRXhT81fi7i4ABEq7IcFQBVImXfWBwiUigOAf7oB8RyKybtuAhBXisIjJphMPv96L4GOqUBuQKdMMYZ9PkKC%2BDOl1T%2Bcg4ZVOSvZVAkyq1vcixG3ASM%2F7HlhZ4vY3RzQsJ%2FWz%2FHPrVHAHpoVj2d39cVtl7A2Ze0iQ4I7XCIP8xCe9JXjqs5zeQA6K76nSEtz0HeiyBfPR%2BI%2B3a%2BJ4uGo3eXOaMR6a0pnYklQlw41FD7P5c7x%2BI2iF2GOvqmbKOslQRkYah5VKIc5mQcF0TcBEF9CxzeSEnkAS4x&X-Amz-Signature=d43f5040487cd8b6eb0d058ff9e6bb34c793287d0cdff483ced796704451ecd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXEF2CYQ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICPZvSYywcbCEH9Buyf2DO6xfUWpjvm2HuC4barecz0NAiEA%2FOvoIBH7QZH4nXdT%2FUIWPfcgzHP4rm%2BvtPmLkpC3q7Aq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEwwXqSpit2aAivhPircA0YYEeaCjW7Glei3QsZIg%2Bw2GPr6v4%2BwQp9hTj2Ee5rorhGBoL1%2Fo8ZRRxeKWbbt4w7wrsIUgyG6aEnGqDd4l93HlweXosu%2FaaiQFQO71yXOZ2YnlOEU3e5TPMfRjKjJFdNhhNYv%2Fi9cMzufd5VkXoTXTDL%2BAUNpELAn%2FDgPQsPEvNM4%2BZhga%2BP%2BwzPniIe%2BmwKZ9YYtLBHRkp1JZrHNRKRBlX6WuRNMVGUhyg3MLwRvprS9v0RmXcm9zC95ToAC%2BPfgmC8nEaKkGtdxUF0oRXBOVRM95l2RauqnOc8DsdD1ydqPEKAkMrxBNjpsEracMhLMcfdiGjwoqJhSCuVIkVzjoIYl8LA2tnc1vndKG0qcJeHp%2FwRrxtx8OaiVll40Yx5I610f9Iaz0rBtSXu%2BHVJciPcFMF96uk3DVIK8nxUTomcToEJLeubYZrUjWf3T%2BwEqOPd1AcafWi424%2F4Gdw72FeGTAB3Ts%2BMqGD%2FT%2FprS%2FF3bhKgx8RO7rqXVpsvY%2FNpx3TEWzdlHipIIm4uvacxVdqzwT%2BwUxWGG1h%2BN%2BGmsYZ67fJnub0rLcr8NNYzjuwRXhT81fi7i4ABEq7IcFQBVImXfWBwiUigOAf7oB8RyKybtuAhBXisIjJphMPv96L4GOqUBuQKdMMYZ9PkKC%2BDOl1T%2Bcg4ZVOSvZVAkyq1vcixG3ASM%2F7HlhZ4vY3RzQsJ%2FWz%2FHPrVHAHpoVj2d39cVtl7A2Ze0iQ4I7XCIP8xCe9JXjqs5zeQA6K76nSEtz0HeiyBfPR%2BI%2B3a%2BJ4uGo3eXOaMR6a0pnYklQlw41FD7P5c7x%2BI2iF2GOvqmbKOslQRkYah5VKIc5mQcF0TcBEF9CxzeSEnkAS4x&X-Amz-Signature=74499792682054a346f62c584cccbd4259d44ea56445dbd27e4061362ea55113&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
