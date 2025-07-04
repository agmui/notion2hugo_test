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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEWD2E%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD9fLHLvWhELv2C8wtUoE74DO4NTFyz4C6TamsBD8DLNAIgaor2CshW25rqPPMBriUIcnVW26Du5b3V999L4hxgogoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIUx1anDB9aprj0DqSrcA4GNX90N29nbu2w0NXhOd1uWS%2FgzpkQeA7gsIbKMTHwUdKj629JFFuNqCrnubtN%2FSMAJHMvMCF4RE5J63dy5imWe35vf6CGOTpIheoq2fOvyMfvf6rGkGsChQGJIrQo1pD37voQLf7V7mQdrmQ8iXoDujE81TZbeSyMOx%2FRIKDzsM2Bu8eQ7BSBjKzPALmMPxHGN1KxMG5IvlTy9J5TXRCXOijcY5NBjDQcWGTwhtN2MwAGlDMqhmaJGJtH6UhfM%2FaPA0TOtC6wwomqkkKRa3pUU%2FP0EtrXd6elxx%2B7yetrfhcgeIjqEKT68GwbDIw3nEV1BZ6SJJytZEMoukwL45%2Fiq4KwmXButx%2BHmmykupbxUAFtpPsxcHjomOiR17I7sOJJ3dWu6H72UcFbXx4PArL%2BWT8mT85Uv36Yv7wUhPEKqWiW68l1BvxTPa9bDb7i%2BAaLfAiwxWoJcO8R0FJsD%2Fbs7beXDP7CckmhgHDaRGwjiw5ppOJXM2jBG1idY6IlmcZ6rmdtAu9%2BPzgBay4%2BXgQIr7xBL7hdLjF5qPzJvL%2F85mewEpylk9ydDoucFZscD7V4B5N7fRtx09rYH8gTe6h8IOaX2UG6MOMlJc34ZP76ZYfXtKA%2FoDHJ2PrvoMLHynsMGOqUBwUFFzMytHBu%2BOUiGc1Zsqcujh07tT0vPfYOYZWyl%2BGZ0WMo4ib1Ed2c%2BFYqbWeplXhDTxmgoe1S5P7clrqnQZWJPgrJEsypEqPWUJf36hl5dybTaoAnSCa9C%2BhV5c4ONFbVxBXqZutbwPmvpYodvjkPikjqHOItdCgsljcrxEY0zpawqduoyHqFncJN7r1bYvhk5GYenNqgDowsGEKXDhTBf%2F8Ix&X-Amz-Signature=00b4993eb4b44bdbbea11c4928f0e55bc4f12fb21df7ca722d7b765cd7868edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDEWD2E%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD9fLHLvWhELv2C8wtUoE74DO4NTFyz4C6TamsBD8DLNAIgaor2CshW25rqPPMBriUIcnVW26Du5b3V999L4hxgogoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIUx1anDB9aprj0DqSrcA4GNX90N29nbu2w0NXhOd1uWS%2FgzpkQeA7gsIbKMTHwUdKj629JFFuNqCrnubtN%2FSMAJHMvMCF4RE5J63dy5imWe35vf6CGOTpIheoq2fOvyMfvf6rGkGsChQGJIrQo1pD37voQLf7V7mQdrmQ8iXoDujE81TZbeSyMOx%2FRIKDzsM2Bu8eQ7BSBjKzPALmMPxHGN1KxMG5IvlTy9J5TXRCXOijcY5NBjDQcWGTwhtN2MwAGlDMqhmaJGJtH6UhfM%2FaPA0TOtC6wwomqkkKRa3pUU%2FP0EtrXd6elxx%2B7yetrfhcgeIjqEKT68GwbDIw3nEV1BZ6SJJytZEMoukwL45%2Fiq4KwmXButx%2BHmmykupbxUAFtpPsxcHjomOiR17I7sOJJ3dWu6H72UcFbXx4PArL%2BWT8mT85Uv36Yv7wUhPEKqWiW68l1BvxTPa9bDb7i%2BAaLfAiwxWoJcO8R0FJsD%2Fbs7beXDP7CckmhgHDaRGwjiw5ppOJXM2jBG1idY6IlmcZ6rmdtAu9%2BPzgBay4%2BXgQIr7xBL7hdLjF5qPzJvL%2F85mewEpylk9ydDoucFZscD7V4B5N7fRtx09rYH8gTe6h8IOaX2UG6MOMlJc34ZP76ZYfXtKA%2FoDHJ2PrvoMLHynsMGOqUBwUFFzMytHBu%2BOUiGc1Zsqcujh07tT0vPfYOYZWyl%2BGZ0WMo4ib1Ed2c%2BFYqbWeplXhDTxmgoe1S5P7clrqnQZWJPgrJEsypEqPWUJf36hl5dybTaoAnSCa9C%2BhV5c4ONFbVxBXqZutbwPmvpYodvjkPikjqHOItdCgsljcrxEY0zpawqduoyHqFncJN7r1bYvhk5GYenNqgDowsGEKXDhTBf%2F8Ix&X-Amz-Signature=332cbe48104d5bcb22a38f1a3d30064903ad6c63b895db56f96f1e7916f876ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
