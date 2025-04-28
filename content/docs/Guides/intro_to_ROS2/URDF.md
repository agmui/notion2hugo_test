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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7AKEBTJ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOpP5FIvRE5U2os1fwNHsKCGmBc96Yg9IXEHEToPt%2BNAiEA9ad8cx4b7iutFRQCSmiVHGolpkwuFShvj2usdpbi6BIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFjE83GwRuUR9BOsXSrcA6HP9hQ3hygdmlslXvKHdFvAnwX2N7QlwM7fxt4fi3kDwpta1Kxp%2FTXpXj6iD3H5Jx4KfKwS5cOU96u%2F7OO52ZAWFm7M5NVyzh8cgU3PQpxnBifT9FrTQdoAflcoxo9htD0Id0iNAtolUqi8mXg6BU834cut9Tjpa%2FEjrXHJOgXRbCvFV%2Be4xqlVNeyaI4KBtkM9boFtBrfk0aZ2%2FkoUysy4%2BfdbHq7jtAdySKwViEduoJ1JMFjCa08qjs6MsXM2XXmGzpk34EQaPcbEhNkSfoXGJFeF5JCIqPhEYgJMBw08veePyFyPA1Yk3C7EJPPvfKQ0nnIsDj2h2AimCpyBhYozfY%2BFqvtQMBmPaL6dZSQkSMUGrMbZuhBD7YtLAhjwXuissOOFtY3KZ78VvhJtn1BLuPCWqE243GkWyAJsWyo8Nd33N8MY7%2BD%2BlDk2AMAnmOxxbLKAJGc7rc3nbJS2Mm3nCfC3Jz8nct8x5fOWBbfxuoEgkARS5OczgqRJYoo1xuSBMPIqXPg1IXChhOh8e%2Biw%2B7I9eFuo2g7imIl2HpLOPtTX6yXR89GJaXfPdAf%2BLhG4IJEOyoCSOnKrmIcend7dPw5iXbvSV40A4yIkJWag8JarlfhM0aptwnmPMKGiu8AGOqUBo5J%2BX5o54A%2BosCBM6rn2HkB9GqOcNrzDKYK%2FWiOceEm9Im%2FUfvkYzOXux3pqe1%2BVUgoX1b0ihw1BqoaKRH6SNDwbpmmECJhhFAELfrHgfmLqVFvT9AcCy965tXOhlDzVzzwsvnTmTSxwWrWH3hJqWg%2BWac2eAZ%2Fnhum1dhtF3qdAvaMXFeECJ10Kby5agwaCx6TH8eiFBu1T6LW%2FUW7ZpMnkIDpJ&X-Amz-Signature=e2aeb7f0ab3f68a5d61b922ead0a43a29f9b4043c1e85419f54aad17a36f2610&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7AKEBTJ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOpP5FIvRE5U2os1fwNHsKCGmBc96Yg9IXEHEToPt%2BNAiEA9ad8cx4b7iutFRQCSmiVHGolpkwuFShvj2usdpbi6BIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFjE83GwRuUR9BOsXSrcA6HP9hQ3hygdmlslXvKHdFvAnwX2N7QlwM7fxt4fi3kDwpta1Kxp%2FTXpXj6iD3H5Jx4KfKwS5cOU96u%2F7OO52ZAWFm7M5NVyzh8cgU3PQpxnBifT9FrTQdoAflcoxo9htD0Id0iNAtolUqi8mXg6BU834cut9Tjpa%2FEjrXHJOgXRbCvFV%2Be4xqlVNeyaI4KBtkM9boFtBrfk0aZ2%2FkoUysy4%2BfdbHq7jtAdySKwViEduoJ1JMFjCa08qjs6MsXM2XXmGzpk34EQaPcbEhNkSfoXGJFeF5JCIqPhEYgJMBw08veePyFyPA1Yk3C7EJPPvfKQ0nnIsDj2h2AimCpyBhYozfY%2BFqvtQMBmPaL6dZSQkSMUGrMbZuhBD7YtLAhjwXuissOOFtY3KZ78VvhJtn1BLuPCWqE243GkWyAJsWyo8Nd33N8MY7%2BD%2BlDk2AMAnmOxxbLKAJGc7rc3nbJS2Mm3nCfC3Jz8nct8x5fOWBbfxuoEgkARS5OczgqRJYoo1xuSBMPIqXPg1IXChhOh8e%2Biw%2B7I9eFuo2g7imIl2HpLOPtTX6yXR89GJaXfPdAf%2BLhG4IJEOyoCSOnKrmIcend7dPw5iXbvSV40A4yIkJWag8JarlfhM0aptwnmPMKGiu8AGOqUBo5J%2BX5o54A%2BosCBM6rn2HkB9GqOcNrzDKYK%2FWiOceEm9Im%2FUfvkYzOXux3pqe1%2BVUgoX1b0ihw1BqoaKRH6SNDwbpmmECJhhFAELfrHgfmLqVFvT9AcCy965tXOhlDzVzzwsvnTmTSxwWrWH3hJqWg%2BWac2eAZ%2Fnhum1dhtF3qdAvaMXFeECJ10Kby5agwaCx6TH8eiFBu1T6LW%2FUW7ZpMnkIDpJ&X-Amz-Signature=ce7628f193f54d4cc8cc139fdf8ad6c973947dbb6aa7dc179133fa133e545d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
