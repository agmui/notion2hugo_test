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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6XPDEW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIByzppZqv%2B7AsQkQyuvM8rLkA3QbOxXo3U%2Fp%2FhRWu%2BMRAiEA%2F44NkBk4Y0nEPrlZg3FNYSTARxdevihYtYGcx%2FzFafUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAvHJAciCIaU4IcQzircAw53nBoO69nS5N0svB%2BXYsi0q%2BB1j%2BOa%2F4Wx8n%2FPH7fYK3Vo7qshFWzR7TkiBBwfYTkT68ZqQBhc8S6Sr0BKuo0qMzFUY%2B8wZ3hdjSqCYRvtfHnlkArl4pbWc%2BnzHaz4IFOaELdy5kmoDcwQpS80Br6eug7Qlg18%2FmkSCaX2Me3TViQ3IK1b1CWYNlz81XYqff0%2BFB7N6zx1gNpM1l3YgSXMcwK7WwIcfMsZMSy3RvD6yZijIp00VrZ2b3szeU5kbomvVxEh5YoIJmCH1JkrhaZfijPEm3EoOZ39sJZ1fBtltsw5W0dwBNWrdnMzuxZxNUH2xSQMiyx6xlzl7%2Fj%2BQEn058fmLrmDJoM0PK29l6Bnamsw22bR1dhaqJAXGFeRDjRCTz%2Fc7G3OeEDrkZSzNX8QfAUh0mIcGAUP%2B1TwAyZfjaP3%2F17UJ2yimcsSZm6q3mjLIhmtgnn3e0nirnjjPrK%2FgI5nKs0cs55ozk0iljcQ5Odjrsrszs4t19%2FbGpM9EVwGKZE6ITT2ZJSoJ9VQZe3WzsMahkCFnrIXKa8e%2BMZlNw8txj3M8T5UxX%2BREvEcJRxrPm%2BuqcM8kKBbfPaAhPFLV%2F2pvwV1ys4URV99T8mRo004JhfhFNEi8bcrMNyH%2FL0GOqUBCA0rXu3UxRHyJ%2BaVbOcaHhHXrslPicyOhjldeYgrWoFvmYfoFFk8ryOJAHK9xi4Hd7nObl8ONcJ9BK%2FpOpUhRDg0%2BuKng3DppOquYDzUlguyA%2B713x9wzrwhQ4zW%2Bnukyh9rRLbXfdIYzpbyexT%2Fm7BBQIe8EK%2FVwXMcsTOvpg1FxhDR6oq2C%2BaXAeIwKQ9shzXRiCbR90DlCt%2FyE7Po5rzZGCgJ&X-Amz-Signature=c8ba44702c09e74a496cb86ebeb5fffe545942f6022e7dc6eaf263b52c74f9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6XPDEW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIByzppZqv%2B7AsQkQyuvM8rLkA3QbOxXo3U%2Fp%2FhRWu%2BMRAiEA%2F44NkBk4Y0nEPrlZg3FNYSTARxdevihYtYGcx%2FzFafUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAvHJAciCIaU4IcQzircAw53nBoO69nS5N0svB%2BXYsi0q%2BB1j%2BOa%2F4Wx8n%2FPH7fYK3Vo7qshFWzR7TkiBBwfYTkT68ZqQBhc8S6Sr0BKuo0qMzFUY%2B8wZ3hdjSqCYRvtfHnlkArl4pbWc%2BnzHaz4IFOaELdy5kmoDcwQpS80Br6eug7Qlg18%2FmkSCaX2Me3TViQ3IK1b1CWYNlz81XYqff0%2BFB7N6zx1gNpM1l3YgSXMcwK7WwIcfMsZMSy3RvD6yZijIp00VrZ2b3szeU5kbomvVxEh5YoIJmCH1JkrhaZfijPEm3EoOZ39sJZ1fBtltsw5W0dwBNWrdnMzuxZxNUH2xSQMiyx6xlzl7%2Fj%2BQEn058fmLrmDJoM0PK29l6Bnamsw22bR1dhaqJAXGFeRDjRCTz%2Fc7G3OeEDrkZSzNX8QfAUh0mIcGAUP%2B1TwAyZfjaP3%2F17UJ2yimcsSZm6q3mjLIhmtgnn3e0nirnjjPrK%2FgI5nKs0cs55ozk0iljcQ5Odjrsrszs4t19%2FbGpM9EVwGKZE6ITT2ZJSoJ9VQZe3WzsMahkCFnrIXKa8e%2BMZlNw8txj3M8T5UxX%2BREvEcJRxrPm%2BuqcM8kKBbfPaAhPFLV%2F2pvwV1ys4URV99T8mRo004JhfhFNEi8bcrMNyH%2FL0GOqUBCA0rXu3UxRHyJ%2BaVbOcaHhHXrslPicyOhjldeYgrWoFvmYfoFFk8ryOJAHK9xi4Hd7nObl8ONcJ9BK%2FpOpUhRDg0%2BuKng3DppOquYDzUlguyA%2B713x9wzrwhQ4zW%2Bnukyh9rRLbXfdIYzpbyexT%2Fm7BBQIe8EK%2FVwXMcsTOvpg1FxhDR6oq2C%2BaXAeIwKQ9shzXRiCbR90DlCt%2FyE7Po5rzZGCgJ&X-Amz-Signature=579e471f3f9fc5fe12737cec2401c01532e171d3e32cb144a27a0e612b0c2ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
