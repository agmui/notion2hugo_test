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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FFTAFE6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHhZpacyyYkuwGWTuK2XaZVjvuDe6PIzkEX43q6CmihwAiBf9e%2BiBkUe9Lr8OaJ2oBE%2BwqfxmR%2FE%2B4q9wIuTNb1bBSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMkheJKMkZ8jvclbjiKtwD0N9yQ3Q8u%2B%2F2voMEwIvABz90crebwJo9wLwXVKhT5fCNLfiI5iGVw2r7lZtE0D7CPc8pTCeqfYS5lC9Q0yvwe356KiO1B9Mqt7wcxQaZa8uTb7ZQrekq7g1iHmevhRSx%2FzLSKJAykcj7N9M6kHZaY%2FNZVdNC3md%2FWl7D6ceLRLiE5Hy8HYHZvSSzC%2Bsw7vo1tfj163sd86Pa5WEdpiBnZf2%2FRlNSilE%2BP5XszRgvbrE2pO8BkD84K0Nxr2FxMbiS9AlCSVVg6%2Fv9vl7VsBuXd%2ByWAOuFMxvD%2FmAFIF7HQiCMH4dGatH0rDz0d9vggF5h7JUbB5uWlDjND11K2Xzt1Vo9zrCOd1Mcw0y%2BUbUKzzzg9IyV1XLKoE7H2s6S2pMT4b5AGNvWV3S8F9b355xqanmXhKoudhnB4JtcebgVdhvMhi8v%2BBpctgAnpf2GCIWrSqLte1KaEjcXNt0lFuEPhfcBJRrUROIV%2BJ%2FENX%2FOJCOG28sfelWAxPXD42FzCmtOthV8oRjQiMRGKILg2ILwsLLON33iSfHc%2FFLSQu%2BdRkb31nD08boGPB83Sdkp3Ms7ZPLkXtezJowUta2uSVnDhX%2FcVMrDm84HXL%2BiUOCOB4kGrNeGsXY4EG%2B5n%2FEwyLuWxAY6pgFkjRHyYjjt9h8F7CoGFvo76z5lISzLM1M53oW4COozoTmMsGYBd4ljGHP%2B%2FEPj14CXXFdXuZd973xFmHuvElJUXWN0DCbmibgn%2Fyf%2B63AFnlqdeH17jT1GZGvTsmxeJp8%2BxUw1CJx7m7er1L1XpZl37fmv6oRazjFlz1sOEvxk0zgikXTht3RZbMMRDsDYXPtF8T48pxLeoEoUL%2F%2BTd%2FoUl3jkkXDU&X-Amz-Signature=27f6dbb50608c4260bf698450dc6b0f8fb5c7ecb26b05bad2d4e8ae37305fc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FFTAFE6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHhZpacyyYkuwGWTuK2XaZVjvuDe6PIzkEX43q6CmihwAiBf9e%2BiBkUe9Lr8OaJ2oBE%2BwqfxmR%2FE%2B4q9wIuTNb1bBSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMkheJKMkZ8jvclbjiKtwD0N9yQ3Q8u%2B%2F2voMEwIvABz90crebwJo9wLwXVKhT5fCNLfiI5iGVw2r7lZtE0D7CPc8pTCeqfYS5lC9Q0yvwe356KiO1B9Mqt7wcxQaZa8uTb7ZQrekq7g1iHmevhRSx%2FzLSKJAykcj7N9M6kHZaY%2FNZVdNC3md%2FWl7D6ceLRLiE5Hy8HYHZvSSzC%2Bsw7vo1tfj163sd86Pa5WEdpiBnZf2%2FRlNSilE%2BP5XszRgvbrE2pO8BkD84K0Nxr2FxMbiS9AlCSVVg6%2Fv9vl7VsBuXd%2ByWAOuFMxvD%2FmAFIF7HQiCMH4dGatH0rDz0d9vggF5h7JUbB5uWlDjND11K2Xzt1Vo9zrCOd1Mcw0y%2BUbUKzzzg9IyV1XLKoE7H2s6S2pMT4b5AGNvWV3S8F9b355xqanmXhKoudhnB4JtcebgVdhvMhi8v%2BBpctgAnpf2GCIWrSqLte1KaEjcXNt0lFuEPhfcBJRrUROIV%2BJ%2FENX%2FOJCOG28sfelWAxPXD42FzCmtOthV8oRjQiMRGKILg2ILwsLLON33iSfHc%2FFLSQu%2BdRkb31nD08boGPB83Sdkp3Ms7ZPLkXtezJowUta2uSVnDhX%2FcVMrDm84HXL%2BiUOCOB4kGrNeGsXY4EG%2B5n%2FEwyLuWxAY6pgFkjRHyYjjt9h8F7CoGFvo76z5lISzLM1M53oW4COozoTmMsGYBd4ljGHP%2B%2FEPj14CXXFdXuZd973xFmHuvElJUXWN0DCbmibgn%2Fyf%2B63AFnlqdeH17jT1GZGvTsmxeJp8%2BxUw1CJx7m7er1L1XpZl37fmv6oRazjFlz1sOEvxk0zgikXTht3RZbMMRDsDYXPtF8T48pxLeoEoUL%2F%2BTd%2FoUl3jkkXDU&X-Amz-Signature=30e0e594fc0e0fc22ab0a84b1275f929c6edf459ed53f75759ab3c76770c592b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
