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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VAGMIJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIE1ehGs2UkWrVJnei9o%2Fqu18u0SV6klK2%2FqVC1deRJ4GAiA7iOuKtS7z2PMcNQJX79BOOHgVYYDf33Lh3Bfo41MORSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0j7XMPIyBiF5MISKtwD7VUBDNCLbr34RExboeMi3e7yy65%2Ba%2FZjc4UBd9uut2MgOnFvNJZY0J7gQH5llScDBHgxywrDbUUtfbQhtChOYb3VJeUrHa85TgGdTZ%2FhiK7Tp7JXiZBWlt82nI06jrgbFA0XDUm275ZHwrHnkAg66lx7hmOIqmj5A8EB88xgMMezrMn1Od%2B20pmmJ3Xd0QRf7cXV8r96G%2FBM4WH3BYEE6VFZLLedGdTV9eSgF0bpaB6inpsCPZSqgbDRDMG0QVvN5Wt5on1uaUB6Rs26XHT7njuaZYjWjYKYiYgc%2F%2ByQrbgtTj9EaK1VK%2F8RNEDe54YZBVe5uhcmvd96uXAkRsDBzr60K5bwliIf8dVLaeVQh1UR5W0EMqIyG%2FFr7u1e2vjXePGCNbDrGZ2UWp7XHZL7n5i5E3CEiHE99MBksr2awtr8FwF89nWKuEe7KMDLS95YjVixD39LX2D2oGpXYwPV6sDuEMD47SHxnUFq6hfZBWuxTH6Ca11C8jL%2Bu6QCz7ZfQJfKyDOjQHAtvwdm7HdWUm7f%2FrmSDxmmQdwt8V7HoWvlvqe39jex1Ws5%2B7sUZO1%2Bb1Y1FBQN4G2%2Bx%2B14v10Wl2R5O33Cg7z0zdPOqzBrWJxatp9FywQ16aV9gP0w1rfnvwY6pgGh4O1w78%2F3tFcY4QJjp5gXnO9ll3wngtOrNZKgdWAB85KD%2BVxWrTTPAotIHQyXeE8Fec0CWPZsxUU7k1sz3bn2pg8X20EezEmQCW7c8srM%2BGCCUBUpDbwVr2TIZcN6qRcmLRm2S5AWgDtBS%2F6m4UEqrjUr%2By4t7vElEiC4VaEml9RUx9TocA2kXJnmiw8j367NQIpqwNc1681ym6YmDiTH4putMqsb&X-Amz-Signature=49e2bd09430a7e9f50d3f055c9c1213a763d14fb2400358a3de39b79c2ec3c45&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VAGMIJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIE1ehGs2UkWrVJnei9o%2Fqu18u0SV6klK2%2FqVC1deRJ4GAiA7iOuKtS7z2PMcNQJX79BOOHgVYYDf33Lh3Bfo41MORSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe0j7XMPIyBiF5MISKtwD7VUBDNCLbr34RExboeMi3e7yy65%2Ba%2FZjc4UBd9uut2MgOnFvNJZY0J7gQH5llScDBHgxywrDbUUtfbQhtChOYb3VJeUrHa85TgGdTZ%2FhiK7Tp7JXiZBWlt82nI06jrgbFA0XDUm275ZHwrHnkAg66lx7hmOIqmj5A8EB88xgMMezrMn1Od%2B20pmmJ3Xd0QRf7cXV8r96G%2FBM4WH3BYEE6VFZLLedGdTV9eSgF0bpaB6inpsCPZSqgbDRDMG0QVvN5Wt5on1uaUB6Rs26XHT7njuaZYjWjYKYiYgc%2F%2ByQrbgtTj9EaK1VK%2F8RNEDe54YZBVe5uhcmvd96uXAkRsDBzr60K5bwliIf8dVLaeVQh1UR5W0EMqIyG%2FFr7u1e2vjXePGCNbDrGZ2UWp7XHZL7n5i5E3CEiHE99MBksr2awtr8FwF89nWKuEe7KMDLS95YjVixD39LX2D2oGpXYwPV6sDuEMD47SHxnUFq6hfZBWuxTH6Ca11C8jL%2Bu6QCz7ZfQJfKyDOjQHAtvwdm7HdWUm7f%2FrmSDxmmQdwt8V7HoWvlvqe39jex1Ws5%2B7sUZO1%2Bb1Y1FBQN4G2%2Bx%2B14v10Wl2R5O33Cg7z0zdPOqzBrWJxatp9FywQ16aV9gP0w1rfnvwY6pgGh4O1w78%2F3tFcY4QJjp5gXnO9ll3wngtOrNZKgdWAB85KD%2BVxWrTTPAotIHQyXeE8Fec0CWPZsxUU7k1sz3bn2pg8X20EezEmQCW7c8srM%2BGCCUBUpDbwVr2TIZcN6qRcmLRm2S5AWgDtBS%2F6m4UEqrjUr%2By4t7vElEiC4VaEml9RUx9TocA2kXJnmiw8j367NQIpqwNc1681ym6YmDiTH4putMqsb&X-Amz-Signature=b77515c3e7656f1b3d767c4ce7f014aaf3e27a12f03c112b46a9eb07348aa60a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
