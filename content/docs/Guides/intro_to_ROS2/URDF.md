---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHVCSR4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDUN5IW%2FCUrrbCwJMrDWFOQgK5453q%2BfSN7rTIsj%2BDA2gIhAPaFMaPEJjAgIMB3sHvuLNwNAAoUJPVMwL3UAWZvmNvxKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNKBHzJzvXe4gSpG8q3AP%2FEd0OExC6FRxCVrd9c0sZ%2BqKbRgN51ClbgCVV8J9tIHQkZlSvMGOktEcAL1V47WTx54m38F9wYHtmXn7186bB8kEKmISWMnzvCYrLbPdsn%2FBD3u5EKEYMZYtBBioYvijR7iqONaghIQZsI6628sHROd9Jb7QRqpVoljetRhLGPCO9IfqZFHzh2hzTHPDbZah%2B7acOW15Yi38LSKsYe3naq2mDvYgIFxxYIFYI9X%2BX395NamtR9z0Xq5yWYjlVOh9BmPdNtWqPdDtjapXonsHKyrecxiuzN7VTQB4C2RnMI7Vxj321FYRc88Jy%2FzkUgb4W9Tk0nJg7jkxP5f7rMtwG2%2FrKT4QUjRn9TTT%2FJa4dlA4rRVP%2BQuYO8Ziy%2Fp7rOZDjTXFo%2B%2B75mgXKINt76GAd39jiVkz%2FK7uf2LA3E44CaVZxhsThHFQSKyFxcxxcRZLsQjx77O0dRUtc8rApQpf5shgeK0MY4t%2Bn3qLGbBBmwXrNo77T0QjI%2Fxths25d3meMcIeMlB2We9ysNlE92hS53QibbHupJuRShlqRR2fMWywiYnrkduWM7xZvjSwMzo4bcmH2%2BIvbn%2BaLz0vh2W7%2FzkjY6evj5OODzy8VTEVTg9iHbewRON%2BGxewVFDDbxNvEBjqkAXvE95HgLwvBpmkn99YYYyuWa9Hx0ytlC%2BTDMj2wynQpzRaPDqqqUYakYEJv%2Fl%2FOwtBDhDK7RulvbGHh0lThdIPUIRqaY8jIwLttFOJRig3XX5tXRpKV%2FYGdGNyuKtfaz2RhPSnI8UmQZaCe1hrcnltuwvBYZsVVuwWAFdzTvyWtomrkFn3yErqCBHYzTkLNPPW2K9Jf%2FbDrm9m%2FMkD3znvS6dfE&X-Amz-Signature=71d6e8ee77746552e848ecfc4cb33cdd7e6a743ba457646b87aa9e623ca74368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIHVCSR4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDUN5IW%2FCUrrbCwJMrDWFOQgK5453q%2BfSN7rTIsj%2BDA2gIhAPaFMaPEJjAgIMB3sHvuLNwNAAoUJPVMwL3UAWZvmNvxKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNKBHzJzvXe4gSpG8q3AP%2FEd0OExC6FRxCVrd9c0sZ%2BqKbRgN51ClbgCVV8J9tIHQkZlSvMGOktEcAL1V47WTx54m38F9wYHtmXn7186bB8kEKmISWMnzvCYrLbPdsn%2FBD3u5EKEYMZYtBBioYvijR7iqONaghIQZsI6628sHROd9Jb7QRqpVoljetRhLGPCO9IfqZFHzh2hzTHPDbZah%2B7acOW15Yi38LSKsYe3naq2mDvYgIFxxYIFYI9X%2BX395NamtR9z0Xq5yWYjlVOh9BmPdNtWqPdDtjapXonsHKyrecxiuzN7VTQB4C2RnMI7Vxj321FYRc88Jy%2FzkUgb4W9Tk0nJg7jkxP5f7rMtwG2%2FrKT4QUjRn9TTT%2FJa4dlA4rRVP%2BQuYO8Ziy%2Fp7rOZDjTXFo%2B%2B75mgXKINt76GAd39jiVkz%2FK7uf2LA3E44CaVZxhsThHFQSKyFxcxxcRZLsQjx77O0dRUtc8rApQpf5shgeK0MY4t%2Bn3qLGbBBmwXrNo77T0QjI%2Fxths25d3meMcIeMlB2We9ysNlE92hS53QibbHupJuRShlqRR2fMWywiYnrkduWM7xZvjSwMzo4bcmH2%2BIvbn%2BaLz0vh2W7%2FzkjY6evj5OODzy8VTEVTg9iHbewRON%2BGxewVFDDbxNvEBjqkAXvE95HgLwvBpmkn99YYYyuWa9Hx0ytlC%2BTDMj2wynQpzRaPDqqqUYakYEJv%2Fl%2FOwtBDhDK7RulvbGHh0lThdIPUIRqaY8jIwLttFOJRig3XX5tXRpKV%2FYGdGNyuKtfaz2RhPSnI8UmQZaCe1hrcnltuwvBYZsVVuwWAFdzTvyWtomrkFn3yErqCBHYzTkLNPPW2K9Jf%2FbDrm9m%2FMkD3znvS6dfE&X-Amz-Signature=93f158f6db07a8f399a454321e1fa4f26607dba5ed0af4f2453c1c26f4c544b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
