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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV7EF2LP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDO4of%2BSPVKebVZQTSRZAczS2sQqJ0K3%2FhuSuciR2eqUQIhAJTlAk3%2FdJSg5U7UA8GVhENfKx%2FOt9ykcURGVOb%2Bct7nKv8DCCMQABoMNjM3NDIzMTgzODA1IgzrisboE8OEFS%2FIerUq3ANJwm3Z%2B6TM8FEo%2FPnUk%2B4u5CYB6jRl3cxqLz%2FxU2fkYBVa%2BpIrBmxzy3AvVOit1ka4rncjwvaNnzXxpEkli2N2OxccD1GG52AlEpYlyNrB%2FtHXUNnn7zk89hEPADtz560UgRw4YXybxNDSvLC8QcGs7ufPd7JOFoA0n8PGdX3R0gTm9gU34A4%2BHRZ0jj%2BjYvNwpqz2m2QEofd%2B05S2Hsk3SbUfXdjY5E10B6OcwHjp05LOiqJiVLwIyt9ToaEEZzRKHUsNtUBF60gbounJ7Y%2FGV49%2F%2FmwQ6sdQExQCGY0q7t2Ase3PuNnUf0oiW7FR2k4Bjv1ik7oMeomT0p5zW7iAt4fhJtrompefX7FTisu1N1kn1p7ZrbrQvDBMmEBIkMhQZ%2BFfh6SJnJecRUVt7FR1Vk4meJc3yuNc6GYbpZFoDInAouHrpENX0Ls0%2BAHs0HqAiHXqneViFirXV%2FSfpP6A6nM4c74OJDfoAgRhQON82wsK7VYPo4jr0T015lPNytFYW%2Fgp5gWR8O3FLhsByN6AyMATD8ssC4W%2BrZ3hw4tyuaVzVbCIYJwBKIIdUJFVo4gBB3tPBATHdHwtq2ObOCqMzQMSlBnpNQuz3WPlNbdH%2BIqLV50YmihOofML3jCM5ZzDBjqkAa2rZUnjsZR%2BKaSaP%2FRAXk%2F9MlqnJUNCPFH%2BLmIWTFFLh38axbcOkt8h%2Fpb5UJ%2F9XcSRUwTpu5dSqCOAaNd9PBi%2Frn58Jy%2Bs%2B6u4mB9XcAieESw6YDDUn3QdLlpSw63DdZ4fXiZIRk8t2cr4vQNnJqUnCzoGb7NB1el%2FVd8L8eSbCiAOBSAb6ZQMIhaaqJ8t6g2jtrM8qTz92TnOivBxnwyc5Dek&X-Amz-Signature=c7df95ab58cc8e24555d0b03a1ec1ab4c8a1cf76ddf43c5d4bd8ecf7ddc18d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV7EF2LP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDO4of%2BSPVKebVZQTSRZAczS2sQqJ0K3%2FhuSuciR2eqUQIhAJTlAk3%2FdJSg5U7UA8GVhENfKx%2FOt9ykcURGVOb%2Bct7nKv8DCCMQABoMNjM3NDIzMTgzODA1IgzrisboE8OEFS%2FIerUq3ANJwm3Z%2B6TM8FEo%2FPnUk%2B4u5CYB6jRl3cxqLz%2FxU2fkYBVa%2BpIrBmxzy3AvVOit1ka4rncjwvaNnzXxpEkli2N2OxccD1GG52AlEpYlyNrB%2FtHXUNnn7zk89hEPADtz560UgRw4YXybxNDSvLC8QcGs7ufPd7JOFoA0n8PGdX3R0gTm9gU34A4%2BHRZ0jj%2BjYvNwpqz2m2QEofd%2B05S2Hsk3SbUfXdjY5E10B6OcwHjp05LOiqJiVLwIyt9ToaEEZzRKHUsNtUBF60gbounJ7Y%2FGV49%2F%2FmwQ6sdQExQCGY0q7t2Ase3PuNnUf0oiW7FR2k4Bjv1ik7oMeomT0p5zW7iAt4fhJtrompefX7FTisu1N1kn1p7ZrbrQvDBMmEBIkMhQZ%2BFfh6SJnJecRUVt7FR1Vk4meJc3yuNc6GYbpZFoDInAouHrpENX0Ls0%2BAHs0HqAiHXqneViFirXV%2FSfpP6A6nM4c74OJDfoAgRhQON82wsK7VYPo4jr0T015lPNytFYW%2Fgp5gWR8O3FLhsByN6AyMATD8ssC4W%2BrZ3hw4tyuaVzVbCIYJwBKIIdUJFVo4gBB3tPBATHdHwtq2ObOCqMzQMSlBnpNQuz3WPlNbdH%2BIqLV50YmihOofML3jCM5ZzDBjqkAa2rZUnjsZR%2BKaSaP%2FRAXk%2F9MlqnJUNCPFH%2BLmIWTFFLh38axbcOkt8h%2Fpb5UJ%2F9XcSRUwTpu5dSqCOAaNd9PBi%2Frn58Jy%2Bs%2B6u4mB9XcAieESw6YDDUn3QdLlpSw63DdZ4fXiZIRk8t2cr4vQNnJqUnCzoGb7NB1el%2FVd8L8eSbCiAOBSAb6ZQMIhaaqJ8t6g2jtrM8qTz92TnOivBxnwyc5Dek&X-Amz-Signature=38064cb295243b8a07bedc6533e4f583fad7b671030b13d01bbf3558ef7364f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
