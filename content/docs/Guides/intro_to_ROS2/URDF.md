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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCZCPAA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5rB1Tm9DYajKO5yr5l0JXlETEKvNZLrJL%2B1esLQLORAiEA%2F6qHcDvDMeT%2FcGfnVeHCGSm7f%2FqcXJ%2BhzwijulRAv6Eq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMS%2FouFUPv9mFxgiFCrcAxxOOdYfz1HKVqJLZtN9N%2BI6sG2CkH%2FGGvc5fIdXF13or0ZsCoQIjvHjjc%2FytaMVJ8NU9SSescn%2Fgd%2FtDQ09TctZG3ndP5vDvp8GOAmCty6oRFBOiZrcqb3nXZDEI8gChu9N%2F9P0qcXmpqNcN9Vj%2Bgx3M44f7oqC%2BiQAoXq8XsIWEWuLyh4upciF9KYIrBTQ9sGxPHQH%2FLrSQyYc4LszAlmG%2F0FBILxXDsS5ANQ3I%2BZgkbAKMLeWqClClWJGrPv%2BQcnANfiTI0VUaz7fj32%2B0G%2BacIUjO7VcgX3EPmfWhhcRiYLOyaZE3Yuc0MCVuMajEf3MCsSmAAkTqoXSqwPYQ8IbS4C24ymsUwrR8xet7C3ndqbbxY9FYM0AYZ61KgnpYiNQqgzSdAv15BtxXk6a3hVXX90dv2IkFddOh0d30mo6wovVrRRyu6d9Xwd%2F9y0p91VvGpoasovAJXJjdXKaOnINDAoOS9k8n%2BffpQXMBtqVZDkpRUzlszz9quXJIBRlPe8TWhtA03nstHq4nDrFwp4F5W7sRdpXwp5oyuuVs6OzejfzrNz4n8M89hV0thYxPimz%2Bblhv7wItTfDvULo8FzAJmLjvTl60kk43mSZFN%2F65a7vrQ9HLjMumnFoMJL0m78GOqUBki2Pzy6l%2B3ZSW3jzuZTM2KxNxxoE7B2dHl7VgIPBoAmL7jHnDJyTRIKIxdTagkJLBe27IP%2BH0T5ANnqjPbLhOZ1DAvMfUYaaqNwPZMDXXupsK6kvVKM%2FXoHUMa9FHj6q3lArdqKfbMK%2F%2B957YuOPAI6XVYQ7toVVCLsg0wRBH4IBPa16V3ZrzsNkicoEuBOzHu3MLY%2FNKS6aUg1JAGyuNIr6IhjJ&X-Amz-Signature=80b916307a4dab504be972c908533049139933fc2ccdc56e59bc47b9cfcc8a54&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCZCPAA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5rB1Tm9DYajKO5yr5l0JXlETEKvNZLrJL%2B1esLQLORAiEA%2F6qHcDvDMeT%2FcGfnVeHCGSm7f%2FqcXJ%2BhzwijulRAv6Eq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMS%2FouFUPv9mFxgiFCrcAxxOOdYfz1HKVqJLZtN9N%2BI6sG2CkH%2FGGvc5fIdXF13or0ZsCoQIjvHjjc%2FytaMVJ8NU9SSescn%2Fgd%2FtDQ09TctZG3ndP5vDvp8GOAmCty6oRFBOiZrcqb3nXZDEI8gChu9N%2F9P0qcXmpqNcN9Vj%2Bgx3M44f7oqC%2BiQAoXq8XsIWEWuLyh4upciF9KYIrBTQ9sGxPHQH%2FLrSQyYc4LszAlmG%2F0FBILxXDsS5ANQ3I%2BZgkbAKMLeWqClClWJGrPv%2BQcnANfiTI0VUaz7fj32%2B0G%2BacIUjO7VcgX3EPmfWhhcRiYLOyaZE3Yuc0MCVuMajEf3MCsSmAAkTqoXSqwPYQ8IbS4C24ymsUwrR8xet7C3ndqbbxY9FYM0AYZ61KgnpYiNQqgzSdAv15BtxXk6a3hVXX90dv2IkFddOh0d30mo6wovVrRRyu6d9Xwd%2F9y0p91VvGpoasovAJXJjdXKaOnINDAoOS9k8n%2BffpQXMBtqVZDkpRUzlszz9quXJIBRlPe8TWhtA03nstHq4nDrFwp4F5W7sRdpXwp5oyuuVs6OzejfzrNz4n8M89hV0thYxPimz%2Bblhv7wItTfDvULo8FzAJmLjvTl60kk43mSZFN%2F65a7vrQ9HLjMumnFoMJL0m78GOqUBki2Pzy6l%2B3ZSW3jzuZTM2KxNxxoE7B2dHl7VgIPBoAmL7jHnDJyTRIKIxdTagkJLBe27IP%2BH0T5ANnqjPbLhOZ1DAvMfUYaaqNwPZMDXXupsK6kvVKM%2FXoHUMa9FHj6q3lArdqKfbMK%2F%2B957YuOPAI6XVYQ7toVVCLsg0wRBH4IBPa16V3ZrzsNkicoEuBOzHu3MLY%2FNKS6aUg1JAGyuNIr6IhjJ&X-Amz-Signature=5e6b8a615e5ec59336f880bff1ce67f4adc79a0820fef501a9310441bd10a6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
