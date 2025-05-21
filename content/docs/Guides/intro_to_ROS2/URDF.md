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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDAMUYC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCLv%2FmxAFz2epZjG2XBH%2FYMoaGiacXIIZ1BCPBxOdqm8QIhAMlU1hEMHNu3P%2BF2PdBEEE4n7%2BoNhPOK3pP1dlFaPWK4KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK9Q%2FheAGKEEzykbcq3AOTRFKxtkkrW7vFkqF9PXZGYygV%2F302LrMk2vrXgkGbuy%2FViNlznFYhqM6f1jYlDqSr1YNPrsWbzO6Ulhz%2FHqjc1QDxJm83U9Nsfk9bqMwfASjqp4hXsGei1DvemfU9Y6jVRhc%2BZa%2FD5XhKcEVrRbicxgOy0xMVQpgkBOmDNSuW9uyVnhFfywV5Ea4IiM7p1TRQPi4j2d7TObZ0dQ9wC70kdWoKsJeEBkQ43c7IZgJGHq7cjJJj2fNWxlBmqXGTSpgnDpw%2BJDqxkp4MMIevfgafZAo6CKpUdM7qMBxtz5vrYOTH8nu1lsTnR9FyqNCfAUROGgX6rx1pbqJ6Jw5Y4ROgHHOkuIlgzSylqKPBvR7Mv59HkDwO07P%2FiKD9etVpHeR4sOJFMarJV3XsUoXs6LVHEMgVW1WaZUOJyXewh5FqDT9sf5AZwm%2F9Md9KrLAmmfkYZjhww7Eh5DfQ0CTn7UU5HU5BvXtGBXCfNFYa6kuCIMUkuGKkUkHUvr3MeXa9nvAMa2EujnaJHU2dsKSmInCOdTWUpsHouiUCfM5Ep3xuSplx294OoFi9KTWRZRqYaJcPpUE2b3em13DfrzfgF0dYiFVMkUnZo3ERpAmELf0SWT9kfix9z%2FkSoL5K%2FDDA7rbBBjqkATOcV4S%2F092Du7Tc31lXNXUYq%2FUfFR25pU%2FQnQ2rqFtpdl7lOdU0CGPTBh7b5MGBJlwiwGV6%2FQUKswzfSjhU%2BuZN91Cp35VN4CukcDnDD1DBe9xr9DFaGX0kqnvqucJtUJhYaRXVi8rnPiG0%2BaVOxj%2Bo%2FD6kPCxzUQKkJ7sjonYNrf98JFPsJryusZKDaVPUmm0EfBHKfjvYmG0HJgobNIW9z8zL&X-Amz-Signature=53aebf8b7310c2372a051da0ae8b2cf6b3e5958bb63f95ce647613ab1883d885&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDAMUYC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCLv%2FmxAFz2epZjG2XBH%2FYMoaGiacXIIZ1BCPBxOdqm8QIhAMlU1hEMHNu3P%2BF2PdBEEE4n7%2BoNhPOK3pP1dlFaPWK4KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK9Q%2FheAGKEEzykbcq3AOTRFKxtkkrW7vFkqF9PXZGYygV%2F302LrMk2vrXgkGbuy%2FViNlznFYhqM6f1jYlDqSr1YNPrsWbzO6Ulhz%2FHqjc1QDxJm83U9Nsfk9bqMwfASjqp4hXsGei1DvemfU9Y6jVRhc%2BZa%2FD5XhKcEVrRbicxgOy0xMVQpgkBOmDNSuW9uyVnhFfywV5Ea4IiM7p1TRQPi4j2d7TObZ0dQ9wC70kdWoKsJeEBkQ43c7IZgJGHq7cjJJj2fNWxlBmqXGTSpgnDpw%2BJDqxkp4MMIevfgafZAo6CKpUdM7qMBxtz5vrYOTH8nu1lsTnR9FyqNCfAUROGgX6rx1pbqJ6Jw5Y4ROgHHOkuIlgzSylqKPBvR7Mv59HkDwO07P%2FiKD9etVpHeR4sOJFMarJV3XsUoXs6LVHEMgVW1WaZUOJyXewh5FqDT9sf5AZwm%2F9Md9KrLAmmfkYZjhww7Eh5DfQ0CTn7UU5HU5BvXtGBXCfNFYa6kuCIMUkuGKkUkHUvr3MeXa9nvAMa2EujnaJHU2dsKSmInCOdTWUpsHouiUCfM5Ep3xuSplx294OoFi9KTWRZRqYaJcPpUE2b3em13DfrzfgF0dYiFVMkUnZo3ERpAmELf0SWT9kfix9z%2FkSoL5K%2FDDA7rbBBjqkATOcV4S%2F092Du7Tc31lXNXUYq%2FUfFR25pU%2FQnQ2rqFtpdl7lOdU0CGPTBh7b5MGBJlwiwGV6%2FQUKswzfSjhU%2BuZN91Cp35VN4CukcDnDD1DBe9xr9DFaGX0kqnvqucJtUJhYaRXVi8rnPiG0%2BaVOxj%2Bo%2FD6kPCxzUQKkJ7sjonYNrf98JFPsJryusZKDaVPUmm0EfBHKfjvYmG0HJgobNIW9z8zL&X-Amz-Signature=7db40934df9789670bc793fcdf48553bc92c2064df617865ea54612900638a22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
