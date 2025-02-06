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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JS4OEIH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDYJmMNRAKQByqbPVJ2FswMoMuhmo%2FR87RCvCWoE7VrkgIhAK5Vc%2BkXIRdRuG2Iy9k81KYocdeLkhhFpAQROIMltAxsKv8DCFkQABoMNjM3NDIzMTgzODA1IgyNNIVYmXceicLXKPIq3AM3j49x169qDQOkth7FqlfoM%2F041VyREOTsZoehV64DY9ndcnyGooU4Zoq8IATuMzB8Pn7cGjyXMkeEJkswYXlasKimoga%2FGdnD6azyW02vRWIQLilYbWbR7dWzaIYgKIKHj2y4Mvsg1DAq53mnJdNeoJWdF%2BnPxbnd41v4Co9XTcmOt0%2B5u7sOm%2FjPVPNNgbn0fY%2B9Ptmrp%2FzeKS%2FAPKlWetwHVmEiJeKYbLiBgEzkJ8Hx2LlqTULz3ha0q0aX9N8LNJr5RkgDifh5N%2F9zCL62sBIDgVV%2BIalVYzFpqPjduo695eYmtFvygoLAJAbJ1ootM4b0X2YUBY47bHwizH1GFY1%2FKk0g7cqVtHbwG%2B0cJSbkBYBZyBRaHC%2FlopprK0pWPm%2FUEvqQLL9iWPT0uF0ksJ33JH2c%2FnVbBCg8O7eTrJCuWGbbYnzGK%2BuVVfZjzWBCMT%2B8LZmZWqI4RXYF%2FR9cQqfm5gOjnlBcgmjXyKIbxOko7%2F4lKjtnTfCbdihVXG8Zh9ndjBwuaaRgiMwTA31ezekyd9nwXRT1kKh7m00oi5Fkcq6uuiIglxlQ3tjkZl5LlpYz6kgF6EMjgHVXI8JVk%2Frn27SwBAnCKW7jYDMVcpax%2FWQq8EVsgI66vjC%2B1JG9BjqkAWzCRxFWO3GhQpvhfrjGZtuYakQYoBZc7aO5oRIyzJkyAHltq6YkTqHKlazCv%2FtQWKUzjJZJ2vHorpxjywWHSKj0%2BRmN2MEaifSKGNo7SWMLpcH14BlrGbd0WQjbj3MYQxdGaHs6vckwiZGgkfauPbXajaGHyEIiAjaqkRwexPy2URWpooSo%2BRKFBDeaSo1e3Zz5M7x2Sx9jypwZ3Ac62CvYFkej&X-Amz-Signature=0febbf74b5e782aa976d61f780daa05af28bfc336955d7c21ec1e0a3b22bd2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JS4OEIH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDYJmMNRAKQByqbPVJ2FswMoMuhmo%2FR87RCvCWoE7VrkgIhAK5Vc%2BkXIRdRuG2Iy9k81KYocdeLkhhFpAQROIMltAxsKv8DCFkQABoMNjM3NDIzMTgzODA1IgyNNIVYmXceicLXKPIq3AM3j49x169qDQOkth7FqlfoM%2F041VyREOTsZoehV64DY9ndcnyGooU4Zoq8IATuMzB8Pn7cGjyXMkeEJkswYXlasKimoga%2FGdnD6azyW02vRWIQLilYbWbR7dWzaIYgKIKHj2y4Mvsg1DAq53mnJdNeoJWdF%2BnPxbnd41v4Co9XTcmOt0%2B5u7sOm%2FjPVPNNgbn0fY%2B9Ptmrp%2FzeKS%2FAPKlWetwHVmEiJeKYbLiBgEzkJ8Hx2LlqTULz3ha0q0aX9N8LNJr5RkgDifh5N%2F9zCL62sBIDgVV%2BIalVYzFpqPjduo695eYmtFvygoLAJAbJ1ootM4b0X2YUBY47bHwizH1GFY1%2FKk0g7cqVtHbwG%2B0cJSbkBYBZyBRaHC%2FlopprK0pWPm%2FUEvqQLL9iWPT0uF0ksJ33JH2c%2FnVbBCg8O7eTrJCuWGbbYnzGK%2BuVVfZjzWBCMT%2B8LZmZWqI4RXYF%2FR9cQqfm5gOjnlBcgmjXyKIbxOko7%2F4lKjtnTfCbdihVXG8Zh9ndjBwuaaRgiMwTA31ezekyd9nwXRT1kKh7m00oi5Fkcq6uuiIglxlQ3tjkZl5LlpYz6kgF6EMjgHVXI8JVk%2Frn27SwBAnCKW7jYDMVcpax%2FWQq8EVsgI66vjC%2B1JG9BjqkAWzCRxFWO3GhQpvhfrjGZtuYakQYoBZc7aO5oRIyzJkyAHltq6YkTqHKlazCv%2FtQWKUzjJZJ2vHorpxjywWHSKj0%2BRmN2MEaifSKGNo7SWMLpcH14BlrGbd0WQjbj3MYQxdGaHs6vckwiZGgkfauPbXajaGHyEIiAjaqkRwexPy2URWpooSo%2BRKFBDeaSo1e3Zz5M7x2Sx9jypwZ3Ac62CvYFkej&X-Amz-Signature=0706ba79d4250029fe0e0eca2bfce20013c1ec5ee95deaf395191cdd0669139a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
