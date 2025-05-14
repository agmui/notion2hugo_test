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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNJZMHL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEer85Eno8OZBE1x6un5quSQH%2BzCzKhuOJykq9YqHZnlAiApnBva5yW1y7YJfg7ne8w2Wtdiz%2Fn7VIUCyDfQ0%2FpNxCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMA0RgySEk8uXZHZSKKtwDW3UR3HZFMWD6HAH3iLCwa36YFzGH4hjJSP%2FHviLrW2gA4VZs95XfBVFhdTTOlqU08J8Sm4cQHtOFAk%2Bx%2BeuPy%2B8IEfMc18gD%2FaBBUYsgCORG4WloOV7j8gxWRYm%2F3%2BWZ%2F%2FGFvLHv4fmpoUpbiSM2CLLDxKHHbMDcErM72nmUd5zurJ9UQUDm2mIzZ7W3TQWnZ95gt4KWcuqvBH2InZTO8kq%2BbsJw9x5vMi1PjR8q1isaMx9MzqsnAjHAcAxRr3HHqXkBupVdBPz4k5PKaPR7hutAEWRzlKw9eXvB6kYHISuj2wNwOOMeNLuuYF66MirM0q6CmVmKj2LuISYhnaQiYrvkFQebx6PYoOFtBUH9Kodq6aRdD2X3IegyLcZEJj05w6vdN9jr0zuK9V7Mc14guGxhPb7u0VCA3E7eEk%2FmLaE9WGazDDt17HFXKrk4JOz543LePGKXfGdR3DNVchVsAZ3DTWrWflZaRZrwGpQ17bTjS25jWB3SN3FGdzq5oAxnj2FO41VBQ1LXdcbW7ZuHP0cVWrh%2B%2FaFH%2BFqZ6rIVTamQxw9zLvebxFhJ6fDtGvCXj1rTZsVWpVkYEi1ytHwCqFm96XlKbNR83l8gAFhXgzA9ZfgGLLTpCjV%2FLVIwsM%2BTwQY6pgH8i9J0FbDjxC4y9%2Bew5HDGq02MJRIo%2BCM0QVV1ubgCyegUBlKX2BHOHgLWrPyxrbhwvOVjWBJhnJ7fUYlFpspurthIIvZx8ND5Jz3J%2BOs8UrWO9FxPO5j9a27mzCvzjrR5nriMxWVt7e6MsgJjAjr3aLzftD8At14z0eytokAnLC7m8giYYsJyhPXKdSXUMeo9Urc%2Fm1cOtX8Upa1yAo6XKs%2B%2BqK6c&X-Amz-Signature=2db26eef802fc2fc0b5efcb618ad2cc26f83dbfdcfc60bd40ba8a3e1504f74bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RNJZMHL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEer85Eno8OZBE1x6un5quSQH%2BzCzKhuOJykq9YqHZnlAiApnBva5yW1y7YJfg7ne8w2Wtdiz%2Fn7VIUCyDfQ0%2FpNxCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMA0RgySEk8uXZHZSKKtwDW3UR3HZFMWD6HAH3iLCwa36YFzGH4hjJSP%2FHviLrW2gA4VZs95XfBVFhdTTOlqU08J8Sm4cQHtOFAk%2Bx%2BeuPy%2B8IEfMc18gD%2FaBBUYsgCORG4WloOV7j8gxWRYm%2F3%2BWZ%2F%2FGFvLHv4fmpoUpbiSM2CLLDxKHHbMDcErM72nmUd5zurJ9UQUDm2mIzZ7W3TQWnZ95gt4KWcuqvBH2InZTO8kq%2BbsJw9x5vMi1PjR8q1isaMx9MzqsnAjHAcAxRr3HHqXkBupVdBPz4k5PKaPR7hutAEWRzlKw9eXvB6kYHISuj2wNwOOMeNLuuYF66MirM0q6CmVmKj2LuISYhnaQiYrvkFQebx6PYoOFtBUH9Kodq6aRdD2X3IegyLcZEJj05w6vdN9jr0zuK9V7Mc14guGxhPb7u0VCA3E7eEk%2FmLaE9WGazDDt17HFXKrk4JOz543LePGKXfGdR3DNVchVsAZ3DTWrWflZaRZrwGpQ17bTjS25jWB3SN3FGdzq5oAxnj2FO41VBQ1LXdcbW7ZuHP0cVWrh%2B%2FaFH%2BFqZ6rIVTamQxw9zLvebxFhJ6fDtGvCXj1rTZsVWpVkYEi1ytHwCqFm96XlKbNR83l8gAFhXgzA9ZfgGLLTpCjV%2FLVIwsM%2BTwQY6pgH8i9J0FbDjxC4y9%2Bew5HDGq02MJRIo%2BCM0QVV1ubgCyegUBlKX2BHOHgLWrPyxrbhwvOVjWBJhnJ7fUYlFpspurthIIvZx8ND5Jz3J%2BOs8UrWO9FxPO5j9a27mzCvzjrR5nriMxWVt7e6MsgJjAjr3aLzftD8At14z0eytokAnLC7m8giYYsJyhPXKdSXUMeo9Urc%2Fm1cOtX8Upa1yAo6XKs%2B%2BqK6c&X-Amz-Signature=46c292e0e3180140f80938bd436c3682404545c0d8eafbbfcde9b886d70cb200&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
