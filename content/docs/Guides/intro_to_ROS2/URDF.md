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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4OLDC5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDZxM%2FdekqO5sOHUGjbSulzbPU7Gs8NasEavCwRhZ5wpQIhAOMM2esv0%2Bgh3EmcSVL2NW1wfOR7yyQqc7o8JIyLW23LKv8DCGYQABoMNjM3NDIzMTgzODA1IgxNyxDqkDs655OTrWsq3APNE%2BqzO%2BcQ805WzsDhn9vzBWdoMrixy9nSN41NoBeiJXYnRWfodBJx82oxbaEzovTovmr5ITlfUsJEbY2AzEfibQsheiFAH3bOqKNeSYOVAXEusQMEGY1y2QfKtu7wSNLc6XqxO9%2B64mxB0tUgYd6YA8UtoMP9J2AUgj869euacdjV6UZFZDpN8FhHMvOOAqtInWRQ9948YVbvlN9qS8%2FsiD02NBpCDw0P1FDQUQb6Rn8N0EXIkexe0Xt2SpotE3pPbejORzhHrdb0loxrtA0JZfRKQaEn187Nz06HB4S3wpEetivfkm%2FizFOubI3T2GSdXziiVfpiGphE2LSSbZ6UcAyYC0DJSyHPxCkQSs%2BeOYrz7q55%2BsMzdX6XLTzk8vHkDcUOiqcHhsbHe9q7jkAYAv3mdl39s4JGk0b7kbcIlWYV7x5hjrkOXI6%2FtKyyM3oLwhhCai0wu%2FnMynmyj1McJ081VPxul94LqhxvsMBsLcZMIFDDhbZF%2BbWik6kwmX%2BJ4Xg6hHwLgToUnI1qhrdN8yuN8OEyEGlBYDkVKgqPhZTqG2KBAD6ZodBerJfTGBK0F6%2F0gItRAM1vcYYg3nDXUvuthghlQG0cY3zObdlcdsbjDp%2BYNIrWhJyeSTCxgP69BjqkAdzPmDTFSIBxRpitc83iBh%2B6eEz3vkmAsaMJOvGKIFd%2F61lfZrJGehByH0d8AIg3NA%2F5dRU0xud0YKuHUnolKRT0XCoi8RMRMaVnVAgvh4lC1wQyL3QA0Ul6SeLw6H%2B7OY%2FfOi%2FzP4HwO3lpd90RBG8eLLlVv%2Be5lDvWnYkDNlJP27yZEBxzCz1FRdwxqcAJUIJlC5Wr3IM4lM%2F%2FKeYmZ%2BgX01pR&X-Amz-Signature=13e5e048fabba1d3014f4b7fecb2899bb014e82d0fbfcd927fbcac1c24cd76a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4OLDC5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDZxM%2FdekqO5sOHUGjbSulzbPU7Gs8NasEavCwRhZ5wpQIhAOMM2esv0%2Bgh3EmcSVL2NW1wfOR7yyQqc7o8JIyLW23LKv8DCGYQABoMNjM3NDIzMTgzODA1IgxNyxDqkDs655OTrWsq3APNE%2BqzO%2BcQ805WzsDhn9vzBWdoMrixy9nSN41NoBeiJXYnRWfodBJx82oxbaEzovTovmr5ITlfUsJEbY2AzEfibQsheiFAH3bOqKNeSYOVAXEusQMEGY1y2QfKtu7wSNLc6XqxO9%2B64mxB0tUgYd6YA8UtoMP9J2AUgj869euacdjV6UZFZDpN8FhHMvOOAqtInWRQ9948YVbvlN9qS8%2FsiD02NBpCDw0P1FDQUQb6Rn8N0EXIkexe0Xt2SpotE3pPbejORzhHrdb0loxrtA0JZfRKQaEn187Nz06HB4S3wpEetivfkm%2FizFOubI3T2GSdXziiVfpiGphE2LSSbZ6UcAyYC0DJSyHPxCkQSs%2BeOYrz7q55%2BsMzdX6XLTzk8vHkDcUOiqcHhsbHe9q7jkAYAv3mdl39s4JGk0b7kbcIlWYV7x5hjrkOXI6%2FtKyyM3oLwhhCai0wu%2FnMynmyj1McJ081VPxul94LqhxvsMBsLcZMIFDDhbZF%2BbWik6kwmX%2BJ4Xg6hHwLgToUnI1qhrdN8yuN8OEyEGlBYDkVKgqPhZTqG2KBAD6ZodBerJfTGBK0F6%2F0gItRAM1vcYYg3nDXUvuthghlQG0cY3zObdlcdsbjDp%2BYNIrWhJyeSTCxgP69BjqkAdzPmDTFSIBxRpitc83iBh%2B6eEz3vkmAsaMJOvGKIFd%2F61lfZrJGehByH0d8AIg3NA%2F5dRU0xud0YKuHUnolKRT0XCoi8RMRMaVnVAgvh4lC1wQyL3QA0Ul6SeLw6H%2B7OY%2FfOi%2FzP4HwO3lpd90RBG8eLLlVv%2Be5lDvWnYkDNlJP27yZEBxzCz1FRdwxqcAJUIJlC5Wr3IM4lM%2F%2FKeYmZ%2BgX01pR&X-Amz-Signature=b6d45ae54d04ffc2e2771e4233c12abbe50a2663b22ae50b8fc813333095cb0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
