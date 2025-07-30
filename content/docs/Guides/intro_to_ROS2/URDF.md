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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7RHZU6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE04dBY6qrvqar35QxMI%2FwpXi1EH57tB9id7pz02mT5RAiA8C4qSoxh0RIAUCJX%2BVeJDGYps9GYNyINwKwsTwpxnCyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1BiXQuF1hUQHxdFqKtwDhGLcabn%2FxTrvn4Jz8rHy6a68uaOMp4MtY0Cb1z%2F3HC2bS%2FfNJAYk52k5d9Q1MY50Y56xP3yaAbOqKqE2wOmZH2GxQAbQ6BI0uigRF71erU5Biv8nE7N8mEGILDnaOkFmSEeScNJWFPyN5w4HqfjE1LDMEn9uitNPV06EnhovrFh4zljic5SYLIWtsFxcP2m%2Bfpjn7f3id0G0o29ljRJYxUd0vUYk1ngX5IvSwINq33v1czrfVEYgZJMQr%2BrYIwxqpQuLhGVHfYx84lFcSf%2FPTtG0vuDGW3H%2BR9RQXPGiyMpn%2BVZRLI20dV6IEWqT3Zm0DRSh23CuRC%2BmEwuoY%2BJ1eGmFhCMLHkXwBeye4x%2BpkgEzSOp%2BIKkacbj605UYdTjOvpbocuOylwBVsPQB70D8OK9XdUpYJ%2F2b5Zp16HFovGDLMi%2BQUQ%2FxVq2fhRAM3DEpFTJu3ib39ZAHt2rc5VHJpOC7Q3i%2BUSLpRa3Hrk%2FNeBelbOB5okR7MMAS5a39VVBhY%2BjDzCi1PP4wNr0IMXPkCGUvKC1PnDbdKyOzvI%2FFWtQKkFSLQbpxdsPB4nMqErraBrsCCyurN6mxUqCbNrBRC%2FOzddC%2FybbXLZnkxZ6S3XFgc8fhgc%2BeLRCf65sw2ounxAY6pgHlnD%2FzHxtZ7bvDQQuQCjClYfyktOJuZYiNdesFPS24gJ3H%2Fj%2BFZDu8Ph8W8VBKUwGF16KHBiMPU0Ghv%2FJ7V8O%2Bd7NpSluCIaiR2AZ9NobgyjABZrnsQsE7FzsGMhQ%2FxqubtzwQenTWqTQf%2Bu2P%2B2AiTmnPdxdAkMKIh17IPGxpBg8RZNBZrkyGYf4nO%2B%2BnTUSUGfOBDXHXgFAIOsaYlcgZBggcbkyd&X-Amz-Signature=792959a51ab52f1fc057638f0464656ccc1c5c76e067fc73c2556aadb574588f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB7RHZU6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE04dBY6qrvqar35QxMI%2FwpXi1EH57tB9id7pz02mT5RAiA8C4qSoxh0RIAUCJX%2BVeJDGYps9GYNyINwKwsTwpxnCyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1BiXQuF1hUQHxdFqKtwDhGLcabn%2FxTrvn4Jz8rHy6a68uaOMp4MtY0Cb1z%2F3HC2bS%2FfNJAYk52k5d9Q1MY50Y56xP3yaAbOqKqE2wOmZH2GxQAbQ6BI0uigRF71erU5Biv8nE7N8mEGILDnaOkFmSEeScNJWFPyN5w4HqfjE1LDMEn9uitNPV06EnhovrFh4zljic5SYLIWtsFxcP2m%2Bfpjn7f3id0G0o29ljRJYxUd0vUYk1ngX5IvSwINq33v1czrfVEYgZJMQr%2BrYIwxqpQuLhGVHfYx84lFcSf%2FPTtG0vuDGW3H%2BR9RQXPGiyMpn%2BVZRLI20dV6IEWqT3Zm0DRSh23CuRC%2BmEwuoY%2BJ1eGmFhCMLHkXwBeye4x%2BpkgEzSOp%2BIKkacbj605UYdTjOvpbocuOylwBVsPQB70D8OK9XdUpYJ%2F2b5Zp16HFovGDLMi%2BQUQ%2FxVq2fhRAM3DEpFTJu3ib39ZAHt2rc5VHJpOC7Q3i%2BUSLpRa3Hrk%2FNeBelbOB5okR7MMAS5a39VVBhY%2BjDzCi1PP4wNr0IMXPkCGUvKC1PnDbdKyOzvI%2FFWtQKkFSLQbpxdsPB4nMqErraBrsCCyurN6mxUqCbNrBRC%2FOzddC%2FybbXLZnkxZ6S3XFgc8fhgc%2BeLRCf65sw2ounxAY6pgHlnD%2FzHxtZ7bvDQQuQCjClYfyktOJuZYiNdesFPS24gJ3H%2Fj%2BFZDu8Ph8W8VBKUwGF16KHBiMPU0Ghv%2FJ7V8O%2Bd7NpSluCIaiR2AZ9NobgyjABZrnsQsE7FzsGMhQ%2FxqubtzwQenTWqTQf%2Bu2P%2B2AiTmnPdxdAkMKIh17IPGxpBg8RZNBZrkyGYf4nO%2B%2BnTUSUGfOBDXHXgFAIOsaYlcgZBggcbkyd&X-Amz-Signature=6c41d09fc31439a7b9ecf833799323d65b0174b9ccd0b1d6920f1f4f7f169aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
