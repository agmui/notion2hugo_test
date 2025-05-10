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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDNICPF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdweEOc8O6uTf36sN3kc6OgZDj9P%2FPbg9D3loyrBITZAiEA64w4riahkOXBHUrLjITCtbnvnKPmyEYPTgXweaDWaZ0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2guvRkYgpcDaXXtSrcA7CkuCASJACwnAk5gAtaRazhuzl3jwxlITfDO4ttcitwcfa4uGx3P53jK80lF0qsQQclcbw6N1ERJvr%2BAH0y4kW2Y4trl37E0KPf4ioGONOrc5rfYjBgPbJlxRoSvtirUmbwi5%2BSththn4xLHxw5iEjGRYl%2BfrBwQk5BTCX%2F1d3AxnVQqYEpD%2FYpUW5tCxs3uc4JJ1ccpc6vHUpXyjvYHplMQT%2Bkp7cpG2%2FbYaE%2BO3W8xYeZFLgeQEYygtgWflsMK%2Bdb1BdR9HTSofG6lvF9PWEfL292wN7O4SjR2POXUEeshKKxtaGjTLWkgjAlOhCxIUr8SxvT7sTSSmfscmoH0lBTqSaLJJKw9LHtSXLj6FlEfg3SZ2dM4SXZj%2FFV5OoO2QuWhbpQX6CSRz3QDJV8W66ydoRNb5COiMXmEWYk7Bn2QZNz5lNpiuhcV%2FYenZp8FrWC%2BC9bi5NPDybposwDQDiPFV8zReK7YziVtnL0HRkbZG8afsTsECvGKsxS2UcY6mxey0nQg1j65IhZ5%2BZVApE6smOuqJXGZvSpXFAhxFLtQj0bmzPYkVrXWSgaq5nG4FFlLmatfdeCIIEJGhm06FCetg8%2BO0XG%2Bz9skkj5fbtIqoLUmwdCwGDCxO1uMOeG%2FcAGOqUBDUjZxtbzDc%2B84bepofqUdgEuW36b%2FbM%2FjKmivwkOTnc9qgXqESG3lLZKnX5x4jKFIi5iP3uSloGwTM1dBeix9qZW2st5a7FPVEbo73R3EjrUVcIFibjqSgd7kzHrY9m606p4MA0sUk5oc9PTsecb167Ev2YwmTfXV8e%2FKucsuHUkZuy0npF%2BCbC2w%2F8hEYun%2FBA135uXeAF2sAupzDG4mKbKGI84&X-Amz-Signature=79b8e7676474a5add04e1d18c76699a878216250b3a3142404c7f95e3f13e4d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDNICPF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdweEOc8O6uTf36sN3kc6OgZDj9P%2FPbg9D3loyrBITZAiEA64w4riahkOXBHUrLjITCtbnvnKPmyEYPTgXweaDWaZ0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2guvRkYgpcDaXXtSrcA7CkuCASJACwnAk5gAtaRazhuzl3jwxlITfDO4ttcitwcfa4uGx3P53jK80lF0qsQQclcbw6N1ERJvr%2BAH0y4kW2Y4trl37E0KPf4ioGONOrc5rfYjBgPbJlxRoSvtirUmbwi5%2BSththn4xLHxw5iEjGRYl%2BfrBwQk5BTCX%2F1d3AxnVQqYEpD%2FYpUW5tCxs3uc4JJ1ccpc6vHUpXyjvYHplMQT%2Bkp7cpG2%2FbYaE%2BO3W8xYeZFLgeQEYygtgWflsMK%2Bdb1BdR9HTSofG6lvF9PWEfL292wN7O4SjR2POXUEeshKKxtaGjTLWkgjAlOhCxIUr8SxvT7sTSSmfscmoH0lBTqSaLJJKw9LHtSXLj6FlEfg3SZ2dM4SXZj%2FFV5OoO2QuWhbpQX6CSRz3QDJV8W66ydoRNb5COiMXmEWYk7Bn2QZNz5lNpiuhcV%2FYenZp8FrWC%2BC9bi5NPDybposwDQDiPFV8zReK7YziVtnL0HRkbZG8afsTsECvGKsxS2UcY6mxey0nQg1j65IhZ5%2BZVApE6smOuqJXGZvSpXFAhxFLtQj0bmzPYkVrXWSgaq5nG4FFlLmatfdeCIIEJGhm06FCetg8%2BO0XG%2Bz9skkj5fbtIqoLUmwdCwGDCxO1uMOeG%2FcAGOqUBDUjZxtbzDc%2B84bepofqUdgEuW36b%2FbM%2FjKmivwkOTnc9qgXqESG3lLZKnX5x4jKFIi5iP3uSloGwTM1dBeix9qZW2st5a7FPVEbo73R3EjrUVcIFibjqSgd7kzHrY9m606p4MA0sUk5oc9PTsecb167Ev2YwmTfXV8e%2FKucsuHUkZuy0npF%2BCbC2w%2F8hEYun%2FBA135uXeAF2sAupzDG4mKbKGI84&X-Amz-Signature=e250af4e18f4cad6aab4c3c84a7caa0cf2614b2317631e0ceadfbcd4b7420eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
