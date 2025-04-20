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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUQAO7H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAUgEmaDab7qHl2izR6bFEsnNxM%2Bfuvn43x3dPkGe2V0AiAiYPh29WTsvLMISveMYQFiMLrqxj%2F3HxI7IIGCgehkYiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCjBhbGbx5PHTjM7LKtwDKH%2Bdl2RmgPth2Ec7qnFDFYJNlXUK8rX3jjrHa%2B7yAjJRRaProR4y1zsGovgJCRBA7Ri7JaCLDaeLgV3LT2uyRlUzP8RPfv8Y2usNKu9E%2B282VqI7WVmITQZNCpBZslGXujL7yhvFAjRbVeq8JCF6g70KKVR49audA0ej%2F7VbeGcxhtchppVM8SHTThD5s5yM4dkyLtONmIETI%2BliyyaWWvZzJ%2BTIrgEoBe0jNLSVbDvHU0xPCt%2BqfIDQ2YHQci40U4XXfvJ75gMwjB6pKgRzdn40BzGLw%2BZMwAk5vh4%2BrLjDSHxlE%2BdtgdOVxDdfqCyDkNVkSCbVYXRXtoVowPfiPWciqLoa8m5ARXxhzQZks6as7oYxDodQ77%2BBV8R9U2QpLy9%2FXZNAAEqDyb%2Fmew1eQArioMKbpwJdpEqOZmGO5RHubGYEC5ChO6UHCFszpwVGd7IvNadeqL4eTqcPvQFjy%2Bi4ohoWDSL8nYZ6f7Ib8iK3mp3fKK9LUTagzlg8qfmuwAHSiADyy4cszmNHx3eB3E8ufyjaCuZ1W9xCTVGry%2BQqDE7Aon5frSNmx7oqM1FtlYSxe3MjfOvy0MwHEmsZwzeW%2Fpscs8pFihyft5o3bs%2B5p57k%2BgyHDWO7WPgw2YGRwAY6pgHyGWTCdLfSWMp8MHCXIpv8dMqjpUz4n%2FgE4Baqz9xBiUPgNqmGq8qZQkV7%2BIf2v%2Ba0Mozx7br5Om4lRA8C7BkXUQyta6X3Yi1%2B67C1Uy0fGZ6%2BjFgIZFwAlF3RoJ27lW3o7%2FI7ls9GTVw1CCpQI6jSou3opXpIpU94HK6VGDS45iRCndiPFzNy5SEoEZ7zJ2olbZ3kuy%2BeEF6yR3s4i%2Fj8lWAvWCa6&X-Amz-Signature=4b65a2108af9f4a77b65e7ef8760727d7f2dc536e0063c5cfa17301e44de82a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUQAO7H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAUgEmaDab7qHl2izR6bFEsnNxM%2Bfuvn43x3dPkGe2V0AiAiYPh29WTsvLMISveMYQFiMLrqxj%2F3HxI7IIGCgehkYiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCjBhbGbx5PHTjM7LKtwDKH%2Bdl2RmgPth2Ec7qnFDFYJNlXUK8rX3jjrHa%2B7yAjJRRaProR4y1zsGovgJCRBA7Ri7JaCLDaeLgV3LT2uyRlUzP8RPfv8Y2usNKu9E%2B282VqI7WVmITQZNCpBZslGXujL7yhvFAjRbVeq8JCF6g70KKVR49audA0ej%2F7VbeGcxhtchppVM8SHTThD5s5yM4dkyLtONmIETI%2BliyyaWWvZzJ%2BTIrgEoBe0jNLSVbDvHU0xPCt%2BqfIDQ2YHQci40U4XXfvJ75gMwjB6pKgRzdn40BzGLw%2BZMwAk5vh4%2BrLjDSHxlE%2BdtgdOVxDdfqCyDkNVkSCbVYXRXtoVowPfiPWciqLoa8m5ARXxhzQZks6as7oYxDodQ77%2BBV8R9U2QpLy9%2FXZNAAEqDyb%2Fmew1eQArioMKbpwJdpEqOZmGO5RHubGYEC5ChO6UHCFszpwVGd7IvNadeqL4eTqcPvQFjy%2Bi4ohoWDSL8nYZ6f7Ib8iK3mp3fKK9LUTagzlg8qfmuwAHSiADyy4cszmNHx3eB3E8ufyjaCuZ1W9xCTVGry%2BQqDE7Aon5frSNmx7oqM1FtlYSxe3MjfOvy0MwHEmsZwzeW%2Fpscs8pFihyft5o3bs%2B5p57k%2BgyHDWO7WPgw2YGRwAY6pgHyGWTCdLfSWMp8MHCXIpv8dMqjpUz4n%2FgE4Baqz9xBiUPgNqmGq8qZQkV7%2BIf2v%2Ba0Mozx7br5Om4lRA8C7BkXUQyta6X3Yi1%2B67C1Uy0fGZ6%2BjFgIZFwAlF3RoJ27lW3o7%2FI7ls9GTVw1CCpQI6jSou3opXpIpU94HK6VGDS45iRCndiPFzNy5SEoEZ7zJ2olbZ3kuy%2BeEF6yR3s4i%2Fj8lWAvWCa6&X-Amz-Signature=744be712acc6b2130668f87fbde9b7b73ad8cde1fdd2ebc554bb176a67cffcdd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
