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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM5ILTQD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBsEaKXvkwS7ZXU6B3tjHSlRaljWSlyDZ8%2Bizj%2F7fiGUAiEAgLeCrno7BNFZSemTa5Ypcv9sLFOmSpFcMElsc8lm9G8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIwhYxS5wXkekN9I%2FyrcA5x%2FHr0emR7XUk6RCiy%2FFAMlSXFWwRKbi7GqBWsI9dVMU%2BQ0aAcPA%2FUirxbJXgJdsO9tmxOWJqC4oSNA6cCzhDnwvHOTpVF%2B3GSy7EoZnEOJjoyJMcFKLZ80PM%2B4GXXmt2A6BSF%2B%2FRIZEZkOziGrR1lVGEgY8oIIwtpaU9Nn3SqCYXS61KLAj1fynLTAtehiYe%2BoOVr1ix3dJzFwjX0Q9nLNSIj%2BFFK1HTedrRrPXJjgkXh8Qi5eHmNk0LkMWWtVzp%2B9Cw82HYJsrqup394tawHanEKSC3E4pbbs7l1E10nXqkH42af9wPsWOU8v6ycaKTrMuOGqMx11ZufSqCak6GrRkCz7bcUNVMofhPoEwjNP5l1N3byzPlEXTR0AinShltmc4pd5wE5Sg1lQENAeXEfRWSiss7dZlKjRzXrI44myjf5Q%2FLhXuPwMDHGYqQgbflTJhO64ZEdUGAdkqex%2Fz82Sgr8%2Bqi1WeoTwyWsY2J0iHeBCbm3XxHeT4jgASOBhZyWhk9hKI032UJ%2BT1rlhl%2FAHT3bJUlj9S8wWzoyM20Ep08cSZqPI40k5i6Ms%2FXKsZ5FSlzvsNJzyhQ%2BWCWUelLfayvtiwUUYvTlcKszFP9iVxS6NSv95zkeALZfzMODX0MEGOqUBIhUEWnH4l8Q70LseXjoQS8ft8GwYuVTDcuoXUyZzLfhcGFnfjA%2Fa4lIL04j0kxgljDx5pwi09%2FfGgLw76lg1cOrG%2BfKzcgiSHrJF1PP%2Bxvp6dQ1PXOLIQLiy3pcx8HVX2HLxCCzvnrwJ4zra0EYaVicFasWc4HMHIEyuC3eQ3Z9F3pQ50TsjqaPlVGI4wJpO7nyFiiuWi8xsUgGTDUd8F5wsUaDs&X-Amz-Signature=59d694e3593da18de9050c468ed48332e59ec2d37799f2beb998b5213dc64b49&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM5ILTQD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBsEaKXvkwS7ZXU6B3tjHSlRaljWSlyDZ8%2Bizj%2F7fiGUAiEAgLeCrno7BNFZSemTa5Ypcv9sLFOmSpFcMElsc8lm9G8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDIwhYxS5wXkekN9I%2FyrcA5x%2FHr0emR7XUk6RCiy%2FFAMlSXFWwRKbi7GqBWsI9dVMU%2BQ0aAcPA%2FUirxbJXgJdsO9tmxOWJqC4oSNA6cCzhDnwvHOTpVF%2B3GSy7EoZnEOJjoyJMcFKLZ80PM%2B4GXXmt2A6BSF%2B%2FRIZEZkOziGrR1lVGEgY8oIIwtpaU9Nn3SqCYXS61KLAj1fynLTAtehiYe%2BoOVr1ix3dJzFwjX0Q9nLNSIj%2BFFK1HTedrRrPXJjgkXh8Qi5eHmNk0LkMWWtVzp%2B9Cw82HYJsrqup394tawHanEKSC3E4pbbs7l1E10nXqkH42af9wPsWOU8v6ycaKTrMuOGqMx11ZufSqCak6GrRkCz7bcUNVMofhPoEwjNP5l1N3byzPlEXTR0AinShltmc4pd5wE5Sg1lQENAeXEfRWSiss7dZlKjRzXrI44myjf5Q%2FLhXuPwMDHGYqQgbflTJhO64ZEdUGAdkqex%2Fz82Sgr8%2Bqi1WeoTwyWsY2J0iHeBCbm3XxHeT4jgASOBhZyWhk9hKI032UJ%2BT1rlhl%2FAHT3bJUlj9S8wWzoyM20Ep08cSZqPI40k5i6Ms%2FXKsZ5FSlzvsNJzyhQ%2BWCWUelLfayvtiwUUYvTlcKszFP9iVxS6NSv95zkeALZfzMODX0MEGOqUBIhUEWnH4l8Q70LseXjoQS8ft8GwYuVTDcuoXUyZzLfhcGFnfjA%2Fa4lIL04j0kxgljDx5pwi09%2FfGgLw76lg1cOrG%2BfKzcgiSHrJF1PP%2Bxvp6dQ1PXOLIQLiy3pcx8HVX2HLxCCzvnrwJ4zra0EYaVicFasWc4HMHIEyuC3eQ3Z9F3pQ50TsjqaPlVGI4wJpO7nyFiiuWi8xsUgGTDUd8F5wsUaDs&X-Amz-Signature=dcdcd35908e9fee3f7b5435a5bb609c5a168f3a435db5da0d79a630089ee529a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
