---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOK4CJ2R%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArsQMvtokBBv8X8n3xQqgtBczRPguEJnU69zpe0tUkqAiEA%2FArnjPhhyryjTcRg9J4KDwHpGvdHumdtdqvG%2Fhgg%2BKYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKbSy2UZlco8jHuBXircA1psf7jH9o6KNfsgsrFdc11OKrbDwbY2eVLvGclYQF0JeHxp%2B%2B6ragYjjsp6wRZfYhPubijlwZotcqxZtC%2FX%2B6yvmuiUNc28rdBpa6gi%2BYnulC%2F9woWhdr1N3%2BLaVyZewreG9lgfwY1qtzjG2shm%2FsvoFNJDz%2FbzQBJc1nPb2xJFq3vm5CFWPMdVFkQyg%2BLO242UbCyeZTk5B9TAZzjTNeMc6%2BJY5rl8gKiaqsEJIYM7AbMAks7mWHUaG0VwXr0QCxl8g4Tb%2BgyHh4gCOEJMVmOOWq4HJ%2Fywbsvqf4U4S4b5eoSgHBrfQ0bbwG2qjo%2B6nNYf5W33WmnWnCeRJ6XfmvcSMugM80WBJCjDmejMVT8u03smE81UpdA3NQh8dj7DJG9TOb7PnO8eIU9%2F6%2BIk%2BwynOhEviZtTJY30WPKg06uuifInS%2BBAKx3gkj78hmnw9QAusDrV%2BL%2FqCiY2M0MUe3yZr4JNptYZUBVCrHmPtFKSRzloEoYxj9gJZAymvV9Ck2eGRnk6UOtnz7bJa3NV4luJJBkn5SPNrFi2Fcnp2Zmo9GhjCO38MY2xxHN9SIxtpo8KEzFNnXTQhHRO7gd9C%2Bh4i6Oxq%2F6d9kd%2FgnmdN1LIkNzEadE0fkdShLLeMIPHu84GOqUB3GiohZqDD0%2FdXv6jftvvOqYSXPjEGdsim4g2S6Zo%2FccSKQHZEq8520UBd4ozg%2Bm%2BdPLvJiGokX4GqtMzfYfh3DgHkNmMHrOekYBvWhnPa3hrqVBeOCFuxW5PNpf4azuOZN1kVOuWq6dIYFiJ6rPS9sPFopXxbtuJ%2B2GJ0G0mlMOxjLmYkGTFMOrJFJpz%2Fxj4lV1zDc4KSl5KHvKsDkBQzwUa52Dp&X-Amz-Signature=7e8852278546d20400bcc40efffb68522dfcda34b9b98cc8105d8b13a4096780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOK4CJ2R%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArsQMvtokBBv8X8n3xQqgtBczRPguEJnU69zpe0tUkqAiEA%2FArnjPhhyryjTcRg9J4KDwHpGvdHumdtdqvG%2Fhgg%2BKYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKbSy2UZlco8jHuBXircA1psf7jH9o6KNfsgsrFdc11OKrbDwbY2eVLvGclYQF0JeHxp%2B%2B6ragYjjsp6wRZfYhPubijlwZotcqxZtC%2FX%2B6yvmuiUNc28rdBpa6gi%2BYnulC%2F9woWhdr1N3%2BLaVyZewreG9lgfwY1qtzjG2shm%2FsvoFNJDz%2FbzQBJc1nPb2xJFq3vm5CFWPMdVFkQyg%2BLO242UbCyeZTk5B9TAZzjTNeMc6%2BJY5rl8gKiaqsEJIYM7AbMAks7mWHUaG0VwXr0QCxl8g4Tb%2BgyHh4gCOEJMVmOOWq4HJ%2Fywbsvqf4U4S4b5eoSgHBrfQ0bbwG2qjo%2B6nNYf5W33WmnWnCeRJ6XfmvcSMugM80WBJCjDmejMVT8u03smE81UpdA3NQh8dj7DJG9TOb7PnO8eIU9%2F6%2BIk%2BwynOhEviZtTJY30WPKg06uuifInS%2BBAKx3gkj78hmnw9QAusDrV%2BL%2FqCiY2M0MUe3yZr4JNptYZUBVCrHmPtFKSRzloEoYxj9gJZAymvV9Ck2eGRnk6UOtnz7bJa3NV4luJJBkn5SPNrFi2Fcnp2Zmo9GhjCO38MY2xxHN9SIxtpo8KEzFNnXTQhHRO7gd9C%2Bh4i6Oxq%2F6d9kd%2FgnmdN1LIkNzEadE0fkdShLLeMIPHu84GOqUB3GiohZqDD0%2FdXv6jftvvOqYSXPjEGdsim4g2S6Zo%2FccSKQHZEq8520UBd4ozg%2Bm%2BdPLvJiGokX4GqtMzfYfh3DgHkNmMHrOekYBvWhnPa3hrqVBeOCFuxW5PNpf4azuOZN1kVOuWq6dIYFiJ6rPS9sPFopXxbtuJ%2B2GJ0G0mlMOxjLmYkGTFMOrJFJpz%2Fxj4lV1zDc4KSl5KHvKsDkBQzwUa52Dp&X-Amz-Signature=88789b46d8d9f86a6a43f20fa76ea7973bc27050e445b8927277c7d68d841786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
