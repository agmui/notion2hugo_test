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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRT4XT6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4IWQ3aRZDlBUVaZtZtu01tG3Smy%2B0uoZpX%2BnS7btt1AIhAPPdQww0XWICFxPz7Re5vnZdXXGhkAWUNmWC1cTcGh0TKv8DCCsQABoMNjM3NDIzMTgzODA1IgysNPNICObijiUHUq4q3AMTLauA0alzYWp6AvI6OGanE8hFZj%2F%2Bys8%2BgB6kUOO%2F2f4cNyQBpdFFfQrn%2Fvb%2BQQttvmdrf1Zk%2FT6WkSK9wCfnyK6xf6PHiE6n%2F4R%2BC%2B7l2%2F%2FO12gePxXd3GChcoady8Mj91vgUUoB7dWeoeHcf8brc2TDYK1fajesOY25wwb6Yq177nc5JCYJqr6a9IqWmFVdpuD%2F1j%2Bza52qIrVyJYMUCMnzR017HnOdrinDAC3Wbv3dtf8E0sPzoITO7a4m7YMLAXgcN2rbOdqZ4RBuI0twJTxLismfS8KgZlumEv3ifGfCyu3zcq5WI6IKRGt3fFpN6vEkWAmlCWsCwwdalhW%2B08zdsytdux4avmPtkRFiuWg1pf%2FffZlNH1CKgCU%2BUB3fmTYSIwA6usyYZo8oYyfaBpyAJsTiontbpBX1rfpHX3JrHMwLbn%2FkPFCO%2BHf7gqoUB%2FNHDMBt%2B89olbZlTmuWcvFiv5Hw7Wc7qNmsvcjc3bUI9JvS7b9EljHc5DcAiI6xplLsxWxG9170fCI99yyDQD6rhgiSPqG1e8Rpb6keB%2FUAmcUO6G3El0IdQ6%2FcFnqLlpjWgXD5tLhAjW%2FrowNzLfQDteKnfWs0vAd%2B9boiXY7ikkeCct%2BUWTqBLzD9leLABjqkAdSJ5nlQJFXszppN5D%2BXLQYCJEDd157zb47xROAF6YiPnGQ65Y%2BtsQ3yAS7DVVDKKu7%2B%2BPM1OJxqOrxR4ceYo8gG7JzZHHG8CjmyeHgzmYDqO%2FSIYbVQvfPAEzY%2F4cqBx22zvAdfB1ZcgTnOaOX3AwV4%2FQR4ch6TplKnPPIR2TjkxX0Dr9HHQytWsF3csdpI3J9bvdL6EMrYITJQgdudNAtlgJnL&X-Amz-Signature=63752a3d7babb5ea1de2a99f0955c0c9e268f4bad353e63d791ff66c6552138b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRT4XT6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4IWQ3aRZDlBUVaZtZtu01tG3Smy%2B0uoZpX%2BnS7btt1AIhAPPdQww0XWICFxPz7Re5vnZdXXGhkAWUNmWC1cTcGh0TKv8DCCsQABoMNjM3NDIzMTgzODA1IgysNPNICObijiUHUq4q3AMTLauA0alzYWp6AvI6OGanE8hFZj%2F%2Bys8%2BgB6kUOO%2F2f4cNyQBpdFFfQrn%2Fvb%2BQQttvmdrf1Zk%2FT6WkSK9wCfnyK6xf6PHiE6n%2F4R%2BC%2B7l2%2F%2FO12gePxXd3GChcoady8Mj91vgUUoB7dWeoeHcf8brc2TDYK1fajesOY25wwb6Yq177nc5JCYJqr6a9IqWmFVdpuD%2F1j%2Bza52qIrVyJYMUCMnzR017HnOdrinDAC3Wbv3dtf8E0sPzoITO7a4m7YMLAXgcN2rbOdqZ4RBuI0twJTxLismfS8KgZlumEv3ifGfCyu3zcq5WI6IKRGt3fFpN6vEkWAmlCWsCwwdalhW%2B08zdsytdux4avmPtkRFiuWg1pf%2FffZlNH1CKgCU%2BUB3fmTYSIwA6usyYZo8oYyfaBpyAJsTiontbpBX1rfpHX3JrHMwLbn%2FkPFCO%2BHf7gqoUB%2FNHDMBt%2B89olbZlTmuWcvFiv5Hw7Wc7qNmsvcjc3bUI9JvS7b9EljHc5DcAiI6xplLsxWxG9170fCI99yyDQD6rhgiSPqG1e8Rpb6keB%2FUAmcUO6G3El0IdQ6%2FcFnqLlpjWgXD5tLhAjW%2FrowNzLfQDteKnfWs0vAd%2B9boiXY7ikkeCct%2BUWTqBLzD9leLABjqkAdSJ5nlQJFXszppN5D%2BXLQYCJEDd157zb47xROAF6YiPnGQ65Y%2BtsQ3yAS7DVVDKKu7%2B%2BPM1OJxqOrxR4ceYo8gG7JzZHHG8CjmyeHgzmYDqO%2FSIYbVQvfPAEzY%2F4cqBx22zvAdfB1ZcgTnOaOX3AwV4%2FQR4ch6TplKnPPIR2TjkxX0Dr9HHQytWsF3csdpI3J9bvdL6EMrYITJQgdudNAtlgJnL&X-Amz-Signature=ebd63ecad17f89b7ddbb514aa5766de9b57e0b0d14f8c8ff3a1ada1020de1fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
