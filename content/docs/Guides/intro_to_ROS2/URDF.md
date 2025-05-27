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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5YE4WL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb3aP70ZHEc1YTUoAiSeCSQvo3r5G5%2F0qn8cs7VehdIwIhAORTnNPsVO%2F6rWKYSLZ8o%2FHDf9F7vwd2PLLkT93hxsGIKv8DCF8QABoMNjM3NDIzMTgzODA1Igy8gF5%2B%2FDXtY7zCcpYq3ANJO%2FkIQaVkmzcH5KWcaEWuMpCyMUjodvQozNhb9D1s6pyIRqKTXsDZ%2BXBt9KJqcYEm0cMABYSyP4XnOMzjnG5LS6SSSxqdDC48lzOui9ZpLF0NoW0FrKjTUbbTpGGBji4O%2Fp8f9ED7COUMXJXqhok3b5etbvYawEJnUpJe60zv7U%2FFqWvCEKlXYUp4qM6jQU4tmYQy%2B22jmpynzK8XjLKiQ8ttKEUaEUqLscjvWOmvqoVpfM861ZNRoi%2FkJi8BbXfMzprskGnQ%2FPJGMIdyCoBATXLFzriBfixQ5Em%2FMJVwKEcQ21O3qTsWwAF%2FR2foQxeb%2B6uJ63xIwUHRELpeio6T7SpL2aCf9QVuSKTgQG1CHFm2vYtrcP%2BBovzEGApwXTtP5iWjK0O8pkrgz9efYLusSnjsUu9uHYfeaODNQZOzSLpOX4JhfBs98P9Z1koj3b%2FNjeSszRs9sFa5DRFrFp8qic2XXgd31ldatJHJdCeGKgQOC1OTKxHDSHEeubTQrPNO3MiFbyzCWlGvg7e1VvxCgKY6%2Babq0kVlqubaxrav2EGNIv404xK4bT1%2BtSSRmzPfzerSiINyB4WQc9mRPhBZD9eYi56EslluDYA%2FMd3s0uwqQkut2GMmxmfHyDC%2F%2FNbBBjqkATICXk%2BDcCMTkX2WQl3WkCTysDZ9zQSpxelFTHgdPvSYJXCNC%2Fun1E%2FFVZ1zpl0knOIVh5rEwzfBZ3by0OgILtb8C%2FzMPe1GiCduHtLHtaedYxmJnFiCploHgBU3hWed9bB6hsWcZP4S3HnyVUJmNc%2B4ei2b%2BDX9iPBHYcEnyT4kkcofHaTqRDtVzad%2B%2BWLaO6%2FGGO4a58Ufe%2B99Mj6XuAbXlKWW&X-Amz-Signature=81752360dffe18312ca600377a5c18c6088d6226cc38c381ffdd2eff7ac89993&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5YE4WL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb3aP70ZHEc1YTUoAiSeCSQvo3r5G5%2F0qn8cs7VehdIwIhAORTnNPsVO%2F6rWKYSLZ8o%2FHDf9F7vwd2PLLkT93hxsGIKv8DCF8QABoMNjM3NDIzMTgzODA1Igy8gF5%2B%2FDXtY7zCcpYq3ANJO%2FkIQaVkmzcH5KWcaEWuMpCyMUjodvQozNhb9D1s6pyIRqKTXsDZ%2BXBt9KJqcYEm0cMABYSyP4XnOMzjnG5LS6SSSxqdDC48lzOui9ZpLF0NoW0FrKjTUbbTpGGBji4O%2Fp8f9ED7COUMXJXqhok3b5etbvYawEJnUpJe60zv7U%2FFqWvCEKlXYUp4qM6jQU4tmYQy%2B22jmpynzK8XjLKiQ8ttKEUaEUqLscjvWOmvqoVpfM861ZNRoi%2FkJi8BbXfMzprskGnQ%2FPJGMIdyCoBATXLFzriBfixQ5Em%2FMJVwKEcQ21O3qTsWwAF%2FR2foQxeb%2B6uJ63xIwUHRELpeio6T7SpL2aCf9QVuSKTgQG1CHFm2vYtrcP%2BBovzEGApwXTtP5iWjK0O8pkrgz9efYLusSnjsUu9uHYfeaODNQZOzSLpOX4JhfBs98P9Z1koj3b%2FNjeSszRs9sFa5DRFrFp8qic2XXgd31ldatJHJdCeGKgQOC1OTKxHDSHEeubTQrPNO3MiFbyzCWlGvg7e1VvxCgKY6%2Babq0kVlqubaxrav2EGNIv404xK4bT1%2BtSSRmzPfzerSiINyB4WQc9mRPhBZD9eYi56EslluDYA%2FMd3s0uwqQkut2GMmxmfHyDC%2F%2FNbBBjqkATICXk%2BDcCMTkX2WQl3WkCTysDZ9zQSpxelFTHgdPvSYJXCNC%2Fun1E%2FFVZ1zpl0knOIVh5rEwzfBZ3by0OgILtb8C%2FzMPe1GiCduHtLHtaedYxmJnFiCploHgBU3hWed9bB6hsWcZP4S3HnyVUJmNc%2B4ei2b%2BDX9iPBHYcEnyT4kkcofHaTqRDtVzad%2B%2BWLaO6%2FGGO4a58Ufe%2B99Mj6XuAbXlKWW&X-Amz-Signature=b8217c50ed1bac6fe3d5e8d5483bb0f4510ce2c1f8983dd4aa2e63fa240064ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
