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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV5WRDC%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC3sfezk87RZPs0lWoHyZOHNr2z9hRBG4EONet1ysbCXgIhANvie3oYaRGOR5LueqeIzAFOxLS%2FKq%2Fqkp973T5yNUCvKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4YvJ7uvdEhlHDoGkq3AOhba%2BNEmhMRZcLiBHubthgXl44ggbZy3hiF4F8Nq2lknibQrzww9WK8fV0caIYF4Red2Dakmucj7mINGebfQZPqLlpI7zvvNOX88A%2BEs9ge2oqzN%2Flr%2FNHGhx%2F6P3O6W3vdQLG6EecVRnegQfNtcZ5A9%2Fv9wUTSO6qWsk5BiBdJYeaZpoj48LNsyo%2F9ECjLur3mGJOnffEmsWsrOJWUrmZYkJiBiNBAkzFMDwBdm%2FPyrpiucprlLRtCPuylrclrDGO0hWl2WBhv4ePpMUJqO2wjVgHj6voo%2BGz5WIyP6ssozvu6etx%2B8kWWz1YhlHhOYK8TP8dJvReAzCo6%2Fidhh2r8cK%2BiHTMM2TRM%2FOLv3jFlYANK8V%2FyaZWdtWRyW61zubKoBIcn0Oogimk4e%2BQAwpF75YEURSY1fSfUP2lHGjJnulf7%2FFE31yMljfBEm3VIr7Elkus41A6%2BYb8acoAj3fJqmeNyyXaYEkRcXovUbaSyd9zBq6rxq2PZ%2BgYVi4Jnr%2BEoQFzq8rUfN%2FsdgLDn5MzVAvmAp5Nkoeak%2Bt8gXYKfoWSnRlDkXll9%2Fw7vE9r%2F7MIZqe0mqiy6YZ2N5WIMt0pgmwYY5V1I8Ba%2FYs%2FZh2qaki8Rz%2BVyzvFcn7OtTDq1rC%2FBjqkARcXppAVcAzHfEDBEKOZn873To2WE%2BezIpl2m62qwyMRbvw6bvuC%2Ff5EglHQapReDrPdf1TVJIlJ6gRTK7xOmr%2BNcOGUVFRJky1Evo83gdYHkZzUoWgR1LlXyIzD%2FChEiYmc8CmQ4r9hyVsmR%2BOqnSB5qYEVYWYqUeOUFShABYaZmB5HTOOYFY1y8Z%2FjVdUTRtedn%2FIfsisFQygJLOCaWONbqoHe&X-Amz-Signature=ddd8ab0fef3cc6bad7cc15290809c486912256582ce54f8f997b0b806b013581&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV5WRDC%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC3sfezk87RZPs0lWoHyZOHNr2z9hRBG4EONet1ysbCXgIhANvie3oYaRGOR5LueqeIzAFOxLS%2FKq%2Fqkp973T5yNUCvKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4YvJ7uvdEhlHDoGkq3AOhba%2BNEmhMRZcLiBHubthgXl44ggbZy3hiF4F8Nq2lknibQrzww9WK8fV0caIYF4Red2Dakmucj7mINGebfQZPqLlpI7zvvNOX88A%2BEs9ge2oqzN%2Flr%2FNHGhx%2F6P3O6W3vdQLG6EecVRnegQfNtcZ5A9%2Fv9wUTSO6qWsk5BiBdJYeaZpoj48LNsyo%2F9ECjLur3mGJOnffEmsWsrOJWUrmZYkJiBiNBAkzFMDwBdm%2FPyrpiucprlLRtCPuylrclrDGO0hWl2WBhv4ePpMUJqO2wjVgHj6voo%2BGz5WIyP6ssozvu6etx%2B8kWWz1YhlHhOYK8TP8dJvReAzCo6%2Fidhh2r8cK%2BiHTMM2TRM%2FOLv3jFlYANK8V%2FyaZWdtWRyW61zubKoBIcn0Oogimk4e%2BQAwpF75YEURSY1fSfUP2lHGjJnulf7%2FFE31yMljfBEm3VIr7Elkus41A6%2BYb8acoAj3fJqmeNyyXaYEkRcXovUbaSyd9zBq6rxq2PZ%2BgYVi4Jnr%2BEoQFzq8rUfN%2FsdgLDn5MzVAvmAp5Nkoeak%2Bt8gXYKfoWSnRlDkXll9%2Fw7vE9r%2F7MIZqe0mqiy6YZ2N5WIMt0pgmwYY5V1I8Ba%2FYs%2FZh2qaki8Rz%2BVyzvFcn7OtTDq1rC%2FBjqkARcXppAVcAzHfEDBEKOZn873To2WE%2BezIpl2m62qwyMRbvw6bvuC%2Ff5EglHQapReDrPdf1TVJIlJ6gRTK7xOmr%2BNcOGUVFRJky1Evo83gdYHkZzUoWgR1LlXyIzD%2FChEiYmc8CmQ4r9hyVsmR%2BOqnSB5qYEVYWYqUeOUFShABYaZmB5HTOOYFY1y8Z%2FjVdUTRtedn%2FIfsisFQygJLOCaWONbqoHe&X-Amz-Signature=e3e64ea5409928aef43ad54d8b8d76a10451e6009241961f7e9b8a4b5287b8f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
