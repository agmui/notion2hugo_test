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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIIYWNG6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bdw0SgR4qrIbYvQPyoeAV5n6fZXg6IkBCU33kRGfEIAIhAOD1pIPFj8x5snYdizq1G%2FXxkxpavxBEzQK6l0dlZkWBKv8DCEcQABoMNjM3NDIzMTgzODA1Igyknte%2BwO7R%2B%2FD4R5Iq3AOydXbKwua%2F%2FoO9OEdHq%2FcXSJI7XHihFAB5vQEix7R1%2BWEf%2Bax3zIerqizuB4D3I2BWo0mjYwQ51B1h%2FL5RwJYxEGQCt7TAwh5nJxVYfpAhYTxz6zAu4pnuH%2F%2Fv7OO2ca2rCXi%2FLoAS2ILRk%2F824XlR%2BJPjUoHSyEVEEG3IiviJ4QX7iTurBzNljsmNhlyAWppzMizgJbfg%2FZf33eN%2Be8N7jRKyxm8T3tbfbRdkxRmQOTByZxeqwfvcxZDd5ohQ6hv6qRI7HVtvU0uLmqewmBzHH7wnr5hy4zb97S%2Bd2o4NpuwYk%2FpIJ5%2FxqNKjkY1FyLB37PTNEwkJWmhzlZpf36Q%2FNua5HlTwHG8F41OToC6dmDZZwtE4jt674CmDTQfPTLW%2FwgJKBEWcHXHnoDlfR55Pbn8Ydz6djfPIjmiH4%2FaDt0NgHZJJS%2FtNDtqB7NAOLGY9Xh7k97x4R8W0qNrGScKLn2FV9RSiAVwqL8%2FiwOUvkFr7a1I4AkH5gC52OEzD2u0OmprG5aNS9QGvX7aaVB2W%2B2iPHxTrkPJ85YvG5ad0Q3H13U%2BRRKbL2IBOmwxY%2FIDnZa89ptUkDU1kyoK2ETe09%2FBfuCGdx5y4WpOzUQU81fJTs92dUV9qnqmSRjDPsZW%2FBjqkAbmeQMNKb3fVAOkiEwtacjNlQVpsODYqRvyIcLTPn8Hof1ed%2FjgpJc13Iwxr93ajVhNHewaMPk82zwXgpK0snG8%2FlhKHsU67ZEZUieFktBVXZ2tMxpRH06xF%2B%2FD6X9njDZqOV%2F7LYtvET8i2kfkfc0fMnSb1DdCHF3Ik3nnVkBHy3JwlSYfYZjxPkOLLht3apHxJ6EPsYCn7ETsCvmja7Ia20O4X&X-Amz-Signature=7a9c70bed59bc5547c8d00c2cc3dc59bec829f32a42314f5a5ae35ef0476b65e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIIYWNG6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bdw0SgR4qrIbYvQPyoeAV5n6fZXg6IkBCU33kRGfEIAIhAOD1pIPFj8x5snYdizq1G%2FXxkxpavxBEzQK6l0dlZkWBKv8DCEcQABoMNjM3NDIzMTgzODA1Igyknte%2BwO7R%2B%2FD4R5Iq3AOydXbKwua%2F%2FoO9OEdHq%2FcXSJI7XHihFAB5vQEix7R1%2BWEf%2Bax3zIerqizuB4D3I2BWo0mjYwQ51B1h%2FL5RwJYxEGQCt7TAwh5nJxVYfpAhYTxz6zAu4pnuH%2F%2Fv7OO2ca2rCXi%2FLoAS2ILRk%2F824XlR%2BJPjUoHSyEVEEG3IiviJ4QX7iTurBzNljsmNhlyAWppzMizgJbfg%2FZf33eN%2Be8N7jRKyxm8T3tbfbRdkxRmQOTByZxeqwfvcxZDd5ohQ6hv6qRI7HVtvU0uLmqewmBzHH7wnr5hy4zb97S%2Bd2o4NpuwYk%2FpIJ5%2FxqNKjkY1FyLB37PTNEwkJWmhzlZpf36Q%2FNua5HlTwHG8F41OToC6dmDZZwtE4jt674CmDTQfPTLW%2FwgJKBEWcHXHnoDlfR55Pbn8Ydz6djfPIjmiH4%2FaDt0NgHZJJS%2FtNDtqB7NAOLGY9Xh7k97x4R8W0qNrGScKLn2FV9RSiAVwqL8%2FiwOUvkFr7a1I4AkH5gC52OEzD2u0OmprG5aNS9QGvX7aaVB2W%2B2iPHxTrkPJ85YvG5ad0Q3H13U%2BRRKbL2IBOmwxY%2FIDnZa89ptUkDU1kyoK2ETe09%2FBfuCGdx5y4WpOzUQU81fJTs92dUV9qnqmSRjDPsZW%2FBjqkAbmeQMNKb3fVAOkiEwtacjNlQVpsODYqRvyIcLTPn8Hof1ed%2FjgpJc13Iwxr93ajVhNHewaMPk82zwXgpK0snG8%2FlhKHsU67ZEZUieFktBVXZ2tMxpRH06xF%2B%2FD6X9njDZqOV%2F7LYtvET8i2kfkfc0fMnSb1DdCHF3Ik3nnVkBHy3JwlSYfYZjxPkOLLht3apHxJ6EPsYCn7ETsCvmja7Ia20O4X&X-Amz-Signature=1941f7cac2ed2d39cff0b050475efd6458f176fd2e471fbe59ce1635f992b471&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
