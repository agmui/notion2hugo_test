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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCYL6WKG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCDKDXtTqJB1cgwDGiX8d8DhHVgm3KjTCbsjYdbTN%2FZ4AIhAICK977C2%2BMHimb8yPxN098Q5uTbdN5sRDW8z8Kl335WKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2FoNHMTwZxECXxIsq3AOmPEZswc0j3dl5CLmv6pOS2fMtzeALW40Ic3js3d7I4TNbVjl0tF316NSBC4IrK0jkO0P1InsZ8YLD3peTerhYmY%2FLvkJ2iQrmxE9uR4S7Vg3IBs5srwHk4oRIWL2TP8P2qN8CviWsmQzAh4cxGQq0f5xbV17qlB2um40OIa0fg0rLaK%2F4srxQ7%2BX7pRGh0p6utSXtFcTNk28LEVh%2BfRjHMAa2CPThfw4JFD1XZPgIL0tSD9kWyMX%2FPRbA5L%2BPvOfnMJHo8h1FmaNEw%2BNJVwDqW5K6wZ%2FNDbMJTEiLM0F4hqBjXd5dsqlTBOyDf9JOiqmBuQeFORvwmWrVM1HxEghUOnCo30nPVgHgeX38qMt6MGoNfoNotHK5%2Bc4qXbr2Sk2QIj7sAA0Udvuzd%2FcC61F%2FKdkC0F1uk2UtZVGgJUto7YTQJXE%2FiTaJZM4tbaX6G75KY4dUZc7Jy%2BIztD5mytxmi4O6W%2FCRBkGawljgVKzlZa73CTqrXFrK%2BZY2J9G23MAIUkW8xPzJbOXXFhWAtsuiHbJDyJIaV2kQ5CYio1RLCMzuGPdj6Fhk1rYGIgfpwnvQcc2h%2BrjZpdw1Sz8eC%2B163qH%2BMSBprmx45n6G%2FWyQ%2Ftu9AAPi8lxn5SwTdDDo6aK%2FBjqkAZNwIORaXQLoLJORbkb1dyP%2BlJHgzNPO6PSfP3xruH%2FrWSsbGcIOIgZ6JQSwArTdAs2OJuoWuDPtQzRtZZGbOCm1d9bkCi%2B%2Fu29KVZHErDNMq23K%2Fhf1pECCa2cFuMEBKHXpoUX4%2F2r13ODfB1QTCoxmEHJAxQNrohKqOeuZP%2FF1hDOPulb8JzmxUJMvglzbTHxcpWrVugZ3LhDaQ4TAWvyePNO%2B&X-Amz-Signature=211467e0c95b4f09c5452967c494acf71c9710ab5a7f12e367d93284f18c59ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCYL6WKG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCDKDXtTqJB1cgwDGiX8d8DhHVgm3KjTCbsjYdbTN%2FZ4AIhAICK977C2%2BMHimb8yPxN098Q5uTbdN5sRDW8z8Kl335WKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP%2FoNHMTwZxECXxIsq3AOmPEZswc0j3dl5CLmv6pOS2fMtzeALW40Ic3js3d7I4TNbVjl0tF316NSBC4IrK0jkO0P1InsZ8YLD3peTerhYmY%2FLvkJ2iQrmxE9uR4S7Vg3IBs5srwHk4oRIWL2TP8P2qN8CviWsmQzAh4cxGQq0f5xbV17qlB2um40OIa0fg0rLaK%2F4srxQ7%2BX7pRGh0p6utSXtFcTNk28LEVh%2BfRjHMAa2CPThfw4JFD1XZPgIL0tSD9kWyMX%2FPRbA5L%2BPvOfnMJHo8h1FmaNEw%2BNJVwDqW5K6wZ%2FNDbMJTEiLM0F4hqBjXd5dsqlTBOyDf9JOiqmBuQeFORvwmWrVM1HxEghUOnCo30nPVgHgeX38qMt6MGoNfoNotHK5%2Bc4qXbr2Sk2QIj7sAA0Udvuzd%2FcC61F%2FKdkC0F1uk2UtZVGgJUto7YTQJXE%2FiTaJZM4tbaX6G75KY4dUZc7Jy%2BIztD5mytxmi4O6W%2FCRBkGawljgVKzlZa73CTqrXFrK%2BZY2J9G23MAIUkW8xPzJbOXXFhWAtsuiHbJDyJIaV2kQ5CYio1RLCMzuGPdj6Fhk1rYGIgfpwnvQcc2h%2BrjZpdw1Sz8eC%2B163qH%2BMSBprmx45n6G%2FWyQ%2Ftu9AAPi8lxn5SwTdDDo6aK%2FBjqkAZNwIORaXQLoLJORbkb1dyP%2BlJHgzNPO6PSfP3xruH%2FrWSsbGcIOIgZ6JQSwArTdAs2OJuoWuDPtQzRtZZGbOCm1d9bkCi%2B%2Fu29KVZHErDNMq23K%2Fhf1pECCa2cFuMEBKHXpoUX4%2F2r13ODfB1QTCoxmEHJAxQNrohKqOeuZP%2FF1hDOPulb8JzmxUJMvglzbTHxcpWrVugZ3LhDaQ4TAWvyePNO%2B&X-Amz-Signature=d166e6fc8a349b6dd35b75485c7c1ccbb03e21fdd20517f1162780bdc3484dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
