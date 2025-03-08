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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XDFT5FX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAG%2FldeHTFOFNq405fIzRsOsSqMeOihY3H2TcmoZhl3MAiEArtz2xyJYx12LIWMcNvOJK4VlhQJS0wlQ6cpF%2Bg%2F1ok0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2FfRHQlH%2FFEBf4DNircA1B22Wj8DMdEOrMzLe8rCj8xTrFshpLchoy2H8gANalktQUx%2FitawBb88DuGSiXLPho767mlCTgAaMiSTFaSzOGozO5FL21USuYVjYohx9yTTXU6%2F1MKroSzxwOGCDwzxY%2FZxPVYoR%2Fu2LbUdBGj0MMbWEhb%2FyNN8nvz%2BnvW2Yg5K3c9Mvy2jZOCo%2FkvgceeqyZ2HTnZHtWA99s5SxksaE5HKurpt6lcSbud1ohgI%2FLnJ7FI%2BImLflmJcZVy8jRQvIiEp4VPJi0L4%2FR8Pj%2FI6i%2FevpR6DLWcfHN83lmxsfGEjZQA2sfn%2B43VOZ%2BrHL0jzu6vonx%2BCWuxlvJaUgwpFlMGbL0B04FXOztVdNgWP%2BlXw13%2B7UVHiC8FWPLotzKOH4QJPOrTCKF4bB59KUdG8IgKSS3jXUg3tdUrWQzzP8QsoH4sSj8U%2BELnoCJejr5LU%2BfD0%2Fr%2FPVeZeOdDdZ4fcdeDX8Q0WK7%2BUee6LqkCEOUs7oZhntCm%2BnKrOw1uH%2BrALEwfIOpr7QILTWfrBkiBassfhxcTPNw9xGqvF2U2LP2FurPbF0MxQg6oDXsFdoEv%2Ft%2BWuYZr9anZSJJbpDqjqp5G8PP5YFfz0nJGH4ITdX%2BM1Al8mc95bITMW4aLMPq8rr4GOqUBgShlidaO5jr6fmUQQPZHou%2FItUeG4VWV8Z3vONvcQoWzgumILUfY6h4SSdg7FNbRqMPqYVmBfVnfBi8eU7A%2B1BZiywhlLQD0eGG5QtMv33P2RlnImHKnwlVLuezthCM4QB95ym%2Fr%2F%2BNizkM2zhBEC75KRN%2F24z%2BBi0MgYPmpHgnqcXSbxUIYeYLfDzwsL56taKAkOdTWTqrBLPvNHNnmxPODDGTR&X-Amz-Signature=083f67d31994a40c1a3e954295dbd8c7c5e1de11478bf3f4ea41ec5894baf11a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XDFT5FX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAG%2FldeHTFOFNq405fIzRsOsSqMeOihY3H2TcmoZhl3MAiEArtz2xyJYx12LIWMcNvOJK4VlhQJS0wlQ6cpF%2Bg%2F1ok0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2FfRHQlH%2FFEBf4DNircA1B22Wj8DMdEOrMzLe8rCj8xTrFshpLchoy2H8gANalktQUx%2FitawBb88DuGSiXLPho767mlCTgAaMiSTFaSzOGozO5FL21USuYVjYohx9yTTXU6%2F1MKroSzxwOGCDwzxY%2FZxPVYoR%2Fu2LbUdBGj0MMbWEhb%2FyNN8nvz%2BnvW2Yg5K3c9Mvy2jZOCo%2FkvgceeqyZ2HTnZHtWA99s5SxksaE5HKurpt6lcSbud1ohgI%2FLnJ7FI%2BImLflmJcZVy8jRQvIiEp4VPJi0L4%2FR8Pj%2FI6i%2FevpR6DLWcfHN83lmxsfGEjZQA2sfn%2B43VOZ%2BrHL0jzu6vonx%2BCWuxlvJaUgwpFlMGbL0B04FXOztVdNgWP%2BlXw13%2B7UVHiC8FWPLotzKOH4QJPOrTCKF4bB59KUdG8IgKSS3jXUg3tdUrWQzzP8QsoH4sSj8U%2BELnoCJejr5LU%2BfD0%2Fr%2FPVeZeOdDdZ4fcdeDX8Q0WK7%2BUee6LqkCEOUs7oZhntCm%2BnKrOw1uH%2BrALEwfIOpr7QILTWfrBkiBassfhxcTPNw9xGqvF2U2LP2FurPbF0MxQg6oDXsFdoEv%2Ft%2BWuYZr9anZSJJbpDqjqp5G8PP5YFfz0nJGH4ITdX%2BM1Al8mc95bITMW4aLMPq8rr4GOqUBgShlidaO5jr6fmUQQPZHou%2FItUeG4VWV8Z3vONvcQoWzgumILUfY6h4SSdg7FNbRqMPqYVmBfVnfBi8eU7A%2B1BZiywhlLQD0eGG5QtMv33P2RlnImHKnwlVLuezthCM4QB95ym%2Fr%2F%2BNizkM2zhBEC75KRN%2F24z%2BBi0MgYPmpHgnqcXSbxUIYeYLfDzwsL56taKAkOdTWTqrBLPvNHNnmxPODDGTR&X-Amz-Signature=e23793d29c8254760e6a88037b4a302fa7144182517393b72fbe76ec5ae8a619&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
