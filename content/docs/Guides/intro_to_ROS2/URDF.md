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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRN3SRY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz2gu9kx%2Byl2ivX9fJg8FW2qn2ZoCZWElM6SruJ4cSTAIhAOCj50MadIYeXI7Bzh0SEoDkhAcgrH0sRmLSoyESK2cwKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3F9Hl2fLQD1qGSEwq3AP1NGUh4yCG5chg348W0oRM7cg9RbsTMr4CUNmMyWz9EVG4lKgHAlcCCHCZfXFGg3DVFqAyibQjCOxMeciJ3IRzjZPZY8ytLJa8yl7ZIZuJvWeW40GeSoLWunIlgH9j03zZIGjLLfN4rCnJFayrnJUNPlOmzg6wJyAj4hRKoCKQw6RGrl85jGSlFLeztyem8P9Sq6BcQovhxlnRrnHH2nq9iZ0Au%2F%2F%2B81iZ%2BkQWauIeRarT%2BALXtI3PAqevv56KB05%2BDWM4rK3rvNpI4sznNvlS4I1OTVNAE6ZR8ANcu7OpLFnlbMoYikFPpobUB3A9UDj6Pyo7TcoDTBV7rvYxWiVYP3evY4we9VXeWSiLIFyaX17JOVPVzZCkXoNrFgUvJB8COQnRyLzgDbkFapSEP%2F0wbNYy4DS462yICpaRvMNh2sKPl2duZSR%2BEtPgD5vXmFkqS1yj2rJ4NX0rQ3KppB8c3C%2FAwZKIj40Y7Y%2BEwZFHTE90wJWT%2BVtsHR6wwAxjz5dJASlzEyQIrJtP5npXtrWRbpGvl3wIKdUR6MMcwRcIJLjdc1q4AhGnt5i%2FtB0ux2UpQSaRFfjBJIzH3nHlitG87AxT%2BXduc3N4z9lmKxmuYSmQF2xBVSY8fHlICDCL2qbEBjqkAXkY5gqluD%2FvU%2BFhC%2FSHGb2KfasGO9qcd8JkLcuHTpMRski82QgTBP8wPSlZG0lcdXb8PK%2BTPiG%2FThYP0DF%2F%2FWZFzaS15LiMGqWiAf2rDPjyuM8YyrROR0c6iVpevplDrlIqwJyrlUQ2NLngwZP8if6ykHevsdi48xuJU2CzYzVInDXVPbGoIswo7V7IsR%2FBhiaFch5G3k4jqDzUpvkPKy%2BzI4L2&X-Amz-Signature=fb93d45bf027800b3e89c9b6b6282da7cddaa079e21f8a7d84119357bdcd5ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRN3SRY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz2gu9kx%2Byl2ivX9fJg8FW2qn2ZoCZWElM6SruJ4cSTAIhAOCj50MadIYeXI7Bzh0SEoDkhAcgrH0sRmLSoyESK2cwKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3F9Hl2fLQD1qGSEwq3AP1NGUh4yCG5chg348W0oRM7cg9RbsTMr4CUNmMyWz9EVG4lKgHAlcCCHCZfXFGg3DVFqAyibQjCOxMeciJ3IRzjZPZY8ytLJa8yl7ZIZuJvWeW40GeSoLWunIlgH9j03zZIGjLLfN4rCnJFayrnJUNPlOmzg6wJyAj4hRKoCKQw6RGrl85jGSlFLeztyem8P9Sq6BcQovhxlnRrnHH2nq9iZ0Au%2F%2F%2B81iZ%2BkQWauIeRarT%2BALXtI3PAqevv56KB05%2BDWM4rK3rvNpI4sznNvlS4I1OTVNAE6ZR8ANcu7OpLFnlbMoYikFPpobUB3A9UDj6Pyo7TcoDTBV7rvYxWiVYP3evY4we9VXeWSiLIFyaX17JOVPVzZCkXoNrFgUvJB8COQnRyLzgDbkFapSEP%2F0wbNYy4DS462yICpaRvMNh2sKPl2duZSR%2BEtPgD5vXmFkqS1yj2rJ4NX0rQ3KppB8c3C%2FAwZKIj40Y7Y%2BEwZFHTE90wJWT%2BVtsHR6wwAxjz5dJASlzEyQIrJtP5npXtrWRbpGvl3wIKdUR6MMcwRcIJLjdc1q4AhGnt5i%2FtB0ux2UpQSaRFfjBJIzH3nHlitG87AxT%2BXduc3N4z9lmKxmuYSmQF2xBVSY8fHlICDCL2qbEBjqkAXkY5gqluD%2FvU%2BFhC%2FSHGb2KfasGO9qcd8JkLcuHTpMRski82QgTBP8wPSlZG0lcdXb8PK%2BTPiG%2FThYP0DF%2F%2FWZFzaS15LiMGqWiAf2rDPjyuM8YyrROR0c6iVpevplDrlIqwJyrlUQ2NLngwZP8if6ykHevsdi48xuJU2CzYzVInDXVPbGoIswo7V7IsR%2FBhiaFch5G3k4jqDzUpvkPKy%2BzI4L2&X-Amz-Signature=d0e56339ac177e12abcee58b8e8f3cb7288af8fa36e42459b9c487233ce96006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
