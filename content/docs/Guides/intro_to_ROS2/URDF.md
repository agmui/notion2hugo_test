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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY4LPIJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDuIe2FxoIofWxZZi6uyKT5lvoPPHp9GmMs8ntqD2gsIgIgFvgv2ABpoxdgCfcvIjcvxa5P%2B5XxIfOL%2BaQbUPQ2BQMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANUaTIehpLxi70iYSrcA5vyprVD7Pbyw%2BKaSZ%2Fv9qSYXfiS8BaP%2BvtnnlkaxBF%2FyY5EsmYQPeLP%2FIpoaSaKZ3no%2BlT0tsfSUDOKGOIdqsdkmRVEATjpFjXPzOO0kD6OQvySny9ZJpm3s%2BVSc%2FyuSWaGFlAa1Y6g6lzZVZ14Tlv5XLllCW7ufWwD20vIVek0jiTyGOm%2FEcsTMtK3zUuypFN0rAc8z8mrrqBE%2BDrF42ppaqjSgOC3HFfXDdr05uBHTWhhjrqqdBvtZMkhiUXOK8uYPmULAT5lEkhVVRyKq3wTYMM7ygyGtgU8maA7R0RWJQB2R35eoVa9N4VzlWu5KObo9j4%2FR3blW4pNN2A1SKdpkP3o35V0soa%2Bx0i5wdWSXCHs51sloatHMhNtkeqPFpNut3UAUCgLvvDDOxIUYV01nqu%2Fj2Ih%2BkLfp%2BasXfDo1YNu54kxAFtdUg5ImeGCy6QtRe%2BBArhNWIlq7Ax%2B%2BTy4mXCFMBDHj3vPO4Xmxl26RQ0W4rXV61u6KfEfYoNTGa3jRI7mUOb5m11kHRtFpjgDI7Oddf3MsIjlrsHmKS4AJ1sevod8TliwCiLQREZJn9yeJEkZ38en8MehD%2F5qYK7H1Sz3MGRbG6E3%2BYsa44rAVurJLdHzyiDShwKPMLnemr0GOqUBBxdiuVt6JYY4cFm%2BkKx%2FJcmxln1uKzYxO%2Fp%2FOVcUZv83161Jbv7OIyxRRZV8%2FWH%2BhYE%2Fqtudoe%2BDvN004iHbsIi4js0ubYPlhPgQKj%2FdeCLUHevZXO3sy8qGFzaOpZ9ReAWj3EJBJcYMNvjSTdfoWqtv4DDWkksMHR4WBvrp3AlBxX0iHAoyHorc9Grtkt0ID6r4%2Fi1HctmES6sn20IXcBr0VaGK&X-Amz-Signature=2ca5d1a89e993fdd1ac1914f50b08e96db4ab93cf559de7184b6e3ca37476908&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY4LPIJH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDuIe2FxoIofWxZZi6uyKT5lvoPPHp9GmMs8ntqD2gsIgIgFvgv2ABpoxdgCfcvIjcvxa5P%2B5XxIfOL%2BaQbUPQ2BQMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANUaTIehpLxi70iYSrcA5vyprVD7Pbyw%2BKaSZ%2Fv9qSYXfiS8BaP%2BvtnnlkaxBF%2FyY5EsmYQPeLP%2FIpoaSaKZ3no%2BlT0tsfSUDOKGOIdqsdkmRVEATjpFjXPzOO0kD6OQvySny9ZJpm3s%2BVSc%2FyuSWaGFlAa1Y6g6lzZVZ14Tlv5XLllCW7ufWwD20vIVek0jiTyGOm%2FEcsTMtK3zUuypFN0rAc8z8mrrqBE%2BDrF42ppaqjSgOC3HFfXDdr05uBHTWhhjrqqdBvtZMkhiUXOK8uYPmULAT5lEkhVVRyKq3wTYMM7ygyGtgU8maA7R0RWJQB2R35eoVa9N4VzlWu5KObo9j4%2FR3blW4pNN2A1SKdpkP3o35V0soa%2Bx0i5wdWSXCHs51sloatHMhNtkeqPFpNut3UAUCgLvvDDOxIUYV01nqu%2Fj2Ih%2BkLfp%2BasXfDo1YNu54kxAFtdUg5ImeGCy6QtRe%2BBArhNWIlq7Ax%2B%2BTy4mXCFMBDHj3vPO4Xmxl26RQ0W4rXV61u6KfEfYoNTGa3jRI7mUOb5m11kHRtFpjgDI7Oddf3MsIjlrsHmKS4AJ1sevod8TliwCiLQREZJn9yeJEkZ38en8MehD%2F5qYK7H1Sz3MGRbG6E3%2BYsa44rAVurJLdHzyiDShwKPMLnemr0GOqUBBxdiuVt6JYY4cFm%2BkKx%2FJcmxln1uKzYxO%2Fp%2FOVcUZv83161Jbv7OIyxRRZV8%2FWH%2BhYE%2Fqtudoe%2BDvN004iHbsIi4js0ubYPlhPgQKj%2FdeCLUHevZXO3sy8qGFzaOpZ9ReAWj3EJBJcYMNvjSTdfoWqtv4DDWkksMHR4WBvrp3AlBxX0iHAoyHorc9Grtkt0ID6r4%2Fi1HctmES6sn20IXcBr0VaGK&X-Amz-Signature=3fe9e771743d6f42c089fd0463c0c7997e0da0c0cabc5e5a8b6f4e1b0584c774&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
