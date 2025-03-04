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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JRUFMB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNIj2jf5tQueOn4fZWFi9M0oUb4LUNaQcKUO3a96M45AIgIotc2Gp0a%2FvjS1vZlvavoiYogzpNCD1vg2PCPJe6gkQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ5Pic3MqFIM7kkjCrcA1ZlS9ejmWOSE6macQDgolywh%2FglthSjjjGbRO0aSwScInNMhZM87F9LpV3vHgSzx8fsSivY7X3g8ZWZGTsbEmheLsLdiwqJZHthxJocVFdP7M9RwYk92tRroS%2BCMOCBg9xX%2BBZEgRj5gRdUXzaKXWJ6uLvBzRST071tT99ySANE5FLZvNLcrtaaE6T4uJ29%2BmMxpx9b5gow8FOBVbqoN0jhynz%2FXb9PlCKsMaX8qXx%2FuAF9DyePcg4cVGpcbBpGTOLGxjpC8fsoskNOO9BYJ%2FQPiArcDBIq45BUVdyioFAulDef38E9V%2ByksfYh2zL9nUqa7n%2FOsx%2F4Wa%2B7TPUePccAeJ4qBnanEFCU%2FEpoRCt6BGaI4X0ZkCpGDL8SeztQuq4Hj%2FjY832uVaPQZlIUOtKzjbQ0kgkV0ahVxLWntAfaC%2BXhHyqkobbHf7SgX8TdKWFKXLHmOdkyRPTWqColICG7wkRZ4DCxYJtsZN4y73PyJhC7y6UBWDSJweupcbqH7N4TmnXkHnoCGa93%2BHV8GL4K25%2BolfgHvHiv3d7ivv%2FQ%2FhYh10w0v8ocYRSo0LogOBVUCkrBD4J20IP%2FjyFPkWNpyKvE2LMzN0dJShmHZ1EtJj8hw903uNlx4bjiMIy6nb4GOqUBhdb2U%2FIzDaGQa3TuYwRfglYnTra0GDE67EsmAXwGPPqInRpSa%2Bw1iCRcao72c2uOFFClQlHyRBkuefeexHc4NRgM4SLIOwMNakJhPJFmv1aavVI3OOs7tINvXx%2F2xFWZbWY0kDNnGpw6VbzOT3cgnwWAsXT8SskWI2XBs0zrjtaDzd2xeJSSRcIuKxrbsuZ8Q0GOaO5BnwK4g8Mlhd%2BaZ%2F0LUCSt&X-Amz-Signature=0b7cc7e1cda4e9d50fa6f3d7293396a4fd6978be9d71b3ef243be948553d7276&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JRUFMB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNIj2jf5tQueOn4fZWFi9M0oUb4LUNaQcKUO3a96M45AIgIotc2Gp0a%2FvjS1vZlvavoiYogzpNCD1vg2PCPJe6gkQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ5Pic3MqFIM7kkjCrcA1ZlS9ejmWOSE6macQDgolywh%2FglthSjjjGbRO0aSwScInNMhZM87F9LpV3vHgSzx8fsSivY7X3g8ZWZGTsbEmheLsLdiwqJZHthxJocVFdP7M9RwYk92tRroS%2BCMOCBg9xX%2BBZEgRj5gRdUXzaKXWJ6uLvBzRST071tT99ySANE5FLZvNLcrtaaE6T4uJ29%2BmMxpx9b5gow8FOBVbqoN0jhynz%2FXb9PlCKsMaX8qXx%2FuAF9DyePcg4cVGpcbBpGTOLGxjpC8fsoskNOO9BYJ%2FQPiArcDBIq45BUVdyioFAulDef38E9V%2ByksfYh2zL9nUqa7n%2FOsx%2F4Wa%2B7TPUePccAeJ4qBnanEFCU%2FEpoRCt6BGaI4X0ZkCpGDL8SeztQuq4Hj%2FjY832uVaPQZlIUOtKzjbQ0kgkV0ahVxLWntAfaC%2BXhHyqkobbHf7SgX8TdKWFKXLHmOdkyRPTWqColICG7wkRZ4DCxYJtsZN4y73PyJhC7y6UBWDSJweupcbqH7N4TmnXkHnoCGa93%2BHV8GL4K25%2BolfgHvHiv3d7ivv%2FQ%2FhYh10w0v8ocYRSo0LogOBVUCkrBD4J20IP%2FjyFPkWNpyKvE2LMzN0dJShmHZ1EtJj8hw903uNlx4bjiMIy6nb4GOqUBhdb2U%2FIzDaGQa3TuYwRfglYnTra0GDE67EsmAXwGPPqInRpSa%2Bw1iCRcao72c2uOFFClQlHyRBkuefeexHc4NRgM4SLIOwMNakJhPJFmv1aavVI3OOs7tINvXx%2F2xFWZbWY0kDNnGpw6VbzOT3cgnwWAsXT8SskWI2XBs0zrjtaDzd2xeJSSRcIuKxrbsuZ8Q0GOaO5BnwK4g8Mlhd%2BaZ%2F0LUCSt&X-Amz-Signature=3d1ceb0cef73ba2cca1fa4468a163b15b16f40fedb7f610d1812c947ac5c6c83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
