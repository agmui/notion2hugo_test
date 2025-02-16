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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZW57LT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID6KpFyzpDjeiMXwy58DWGacHb0LLn0GgsPJfJTsWm62AiAUyyZ9LxomiBl4mwi06zCUbgig6A31xb%2BPxh5QY155Nyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMSuUBAWckCPWvOYxpKtwDWJXrsQ98bUxeeNRM4vZux0zo7pZP0Onpw7MAijY3EWXkv1HFjpXf7OQe1%2F%2Br69uUoXgJ2mVP9O6kFKsWMhAUK3%2FtCuIRvLuZFF4aYmfufzNCcA5ngTvOXmi5kiCewyPDkUKwjyKrLvRe69%2FhLSkZkoGTyAUhaEuolC8IKwKnBWkIu7jKd3LlnNpc%2BAgEeEG7uZtxrFDzNbcnujx1NKSQgimzi3oBanJI2sypEzbniqfwvm6Ow7B7mk1cATHT9G3VjIYzvwBNe5%2FJUgiT9OXxpd27Dt9rVDkv4LNF6PuZ1CKqkxiIJ%2F8wAjxkEdonmx3ia%2FhB0XTXC%2Bi9iRW2dENOpmmpSA6Gr8vsqAc0cJOLiVi7pzL4Tp%2BSmsqN89D4qA5MLsYSgCQKpwte9qIYodIypJzeF0NZrhdpBUtxdhPjc5PBHM%2FHCT7DSxouT71L%2F7bLJiE49O4C6h6ETnEJ06tBO46DiNNcIumq2wXDovoh%2F3jUyW5lFAyZ1DKY1EsmLiTFmfAwzjj4wdFGLXVkMsiFaHbxQVmdk34O7VZ7fRBV%2BEX9Uhook%2FCR6zBWpP80cxEiXsxGeQDGyIeWY33cAhEiAzUaaI0rbycMLxdHg6nlbp%2BtZmVi11B8WpFZkycw8v3FvQY6pgFEx0Z0wl9bjRJSWLaQKAdA445Y4KZXk9YKC2TBAU25cS63m2uoaEg1zIGGeX7knrOZWEXNUvEMDem6haQZ%2Bo76wL6Dh9OBH3R258VBkW%2B4iPof1Wy9EK19rb9jGuNHVY6Zma23hyfrzE1XPGfmtI%2F5h%2F43pyoGVhUdTajgyR0UtAAn9x41G%2BGw6qqo8NjkUJAELgPtRBDmPcnLYWylNBCdXJE6sI7M&X-Amz-Signature=a864a27df8e93a35ad8ee4ec140ece8c3077382f332e485c2b80cb1adc1c876c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZW57LT%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCID6KpFyzpDjeiMXwy58DWGacHb0LLn0GgsPJfJTsWm62AiAUyyZ9LxomiBl4mwi06zCUbgig6A31xb%2BPxh5QY155Nyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMSuUBAWckCPWvOYxpKtwDWJXrsQ98bUxeeNRM4vZux0zo7pZP0Onpw7MAijY3EWXkv1HFjpXf7OQe1%2F%2Br69uUoXgJ2mVP9O6kFKsWMhAUK3%2FtCuIRvLuZFF4aYmfufzNCcA5ngTvOXmi5kiCewyPDkUKwjyKrLvRe69%2FhLSkZkoGTyAUhaEuolC8IKwKnBWkIu7jKd3LlnNpc%2BAgEeEG7uZtxrFDzNbcnujx1NKSQgimzi3oBanJI2sypEzbniqfwvm6Ow7B7mk1cATHT9G3VjIYzvwBNe5%2FJUgiT9OXxpd27Dt9rVDkv4LNF6PuZ1CKqkxiIJ%2F8wAjxkEdonmx3ia%2FhB0XTXC%2Bi9iRW2dENOpmmpSA6Gr8vsqAc0cJOLiVi7pzL4Tp%2BSmsqN89D4qA5MLsYSgCQKpwte9qIYodIypJzeF0NZrhdpBUtxdhPjc5PBHM%2FHCT7DSxouT71L%2F7bLJiE49O4C6h6ETnEJ06tBO46DiNNcIumq2wXDovoh%2F3jUyW5lFAyZ1DKY1EsmLiTFmfAwzjj4wdFGLXVkMsiFaHbxQVmdk34O7VZ7fRBV%2BEX9Uhook%2FCR6zBWpP80cxEiXsxGeQDGyIeWY33cAhEiAzUaaI0rbycMLxdHg6nlbp%2BtZmVi11B8WpFZkycw8v3FvQY6pgFEx0Z0wl9bjRJSWLaQKAdA445Y4KZXk9YKC2TBAU25cS63m2uoaEg1zIGGeX7knrOZWEXNUvEMDem6haQZ%2Bo76wL6Dh9OBH3R258VBkW%2B4iPof1Wy9EK19rb9jGuNHVY6Zma23hyfrzE1XPGfmtI%2F5h%2F43pyoGVhUdTajgyR0UtAAn9x41G%2BGw6qqo8NjkUJAELgPtRBDmPcnLYWylNBCdXJE6sI7M&X-Amz-Signature=a19a8e4a6ccc1f32bca4d49e082ba08343756a35f7ef1795ad1380ec9cd03f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
