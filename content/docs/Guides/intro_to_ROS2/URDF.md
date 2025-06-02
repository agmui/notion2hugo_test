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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6ZQ3M7R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFhOd5b68m3dD1qAXNHuKre1LRBDOYUjQJITB%2BAstREWAiEA0MujLy73j9%2BxjF1rxJ%2BRFdkT2o6fGnMI4GPJBELWgegqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4x0ROLKgnvNGHgNyrcA0R8TDcGmG37Lm9vhu%2F11fSPAqtH%2F70kjwgOxE5Ow9VRGHLa6cYODAu30rzy%2BfikUoh7VfCmNjUDeaWMoMJlooYml0ig1QLDiTtTBLTOUCxrt9%2BkARl0IXvRrnLjghpH1cdmZJjhtChls%2FlE18m0n%2B9cNkKmoJmecuDaDXFUGKYkGqwwM8ja0Fe5AMid7oP%2B1L2hgu4yhh5U0MPzZo4MpiZ3VH43%2FJ5uMAJIdAP4Ei2i6iSVolz1EKqeDLPzSreUez%2FbtmG3Lb7hyrp%2F8Jh7VsVexbmZvAfbnXP0%2F0SB42h%2BfPYPC1q%2B7CNbkIoa87iHfYJjXXp5AbBj2mfVxjoNH96I0QevyB3lbKdgpU8asN64qHpPjWV7BaSNVfC0mNeLoo2PQA771brHtKMfsrionR%2BE9XaSdG07rF0Pg6Hcge51zuJCtUbLo1WZtOmM75eIst%2BxjnzWxiLmuXhTiI3kY8gqNtBohzjAGSulHYSA%2BKn3bF4BOKhhR7W5Gf4VF52AfV93McM%2BryAiGWY1JtkkRtVuF1lqDzhCAVFQ6Q0DC6qymaHz4zCVtYk1KOOZF4kBRW59VOTkW1Fc05aklWhHLenTCWhhUbZcQux2SYNdkvP6raZ1D0Y5%2BQfN0kooMMnC9cEGOqUBTTGMDwwO5YL6GWCuUd9Nmt02cVbldp4dXaT%2BPM%2BYMhUZsd9ICy%2F0aSCGSUDtRrD%2Bc72DVY%2FcH3fpLC0zJg96Co2VLVlNYcXSZIRUsXAh0znzzzY5Lm3xQylqFeEAQvaGlKSFgc8v%2BJNeOtF8IxfWq1aA9QjcmxEYVlyRds66MEaPBrSTS9DSgl5N9IRNApyYLLkMpYbNWy0Tb9QOp6M6Bil0AZxg&X-Amz-Signature=dcf971b1fa5671e19e087b96225f62cc6a1b9798c846228cfd55d55acad72a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6ZQ3M7R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFhOd5b68m3dD1qAXNHuKre1LRBDOYUjQJITB%2BAstREWAiEA0MujLy73j9%2BxjF1rxJ%2BRFdkT2o6fGnMI4GPJBELWgegqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4x0ROLKgnvNGHgNyrcA0R8TDcGmG37Lm9vhu%2F11fSPAqtH%2F70kjwgOxE5Ow9VRGHLa6cYODAu30rzy%2BfikUoh7VfCmNjUDeaWMoMJlooYml0ig1QLDiTtTBLTOUCxrt9%2BkARl0IXvRrnLjghpH1cdmZJjhtChls%2FlE18m0n%2B9cNkKmoJmecuDaDXFUGKYkGqwwM8ja0Fe5AMid7oP%2B1L2hgu4yhh5U0MPzZo4MpiZ3VH43%2FJ5uMAJIdAP4Ei2i6iSVolz1EKqeDLPzSreUez%2FbtmG3Lb7hyrp%2F8Jh7VsVexbmZvAfbnXP0%2F0SB42h%2BfPYPC1q%2B7CNbkIoa87iHfYJjXXp5AbBj2mfVxjoNH96I0QevyB3lbKdgpU8asN64qHpPjWV7BaSNVfC0mNeLoo2PQA771brHtKMfsrionR%2BE9XaSdG07rF0Pg6Hcge51zuJCtUbLo1WZtOmM75eIst%2BxjnzWxiLmuXhTiI3kY8gqNtBohzjAGSulHYSA%2BKn3bF4BOKhhR7W5Gf4VF52AfV93McM%2BryAiGWY1JtkkRtVuF1lqDzhCAVFQ6Q0DC6qymaHz4zCVtYk1KOOZF4kBRW59VOTkW1Fc05aklWhHLenTCWhhUbZcQux2SYNdkvP6raZ1D0Y5%2BQfN0kooMMnC9cEGOqUBTTGMDwwO5YL6GWCuUd9Nmt02cVbldp4dXaT%2BPM%2BYMhUZsd9ICy%2F0aSCGSUDtRrD%2Bc72DVY%2FcH3fpLC0zJg96Co2VLVlNYcXSZIRUsXAh0znzzzY5Lm3xQylqFeEAQvaGlKSFgc8v%2BJNeOtF8IxfWq1aA9QjcmxEYVlyRds66MEaPBrSTS9DSgl5N9IRNApyYLLkMpYbNWy0Tb9QOp6M6Bil0AZxg&X-Amz-Signature=0366b023461ceeba93d39d1143ff819034c66dcfd1bc639272aab5ab5237c8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
