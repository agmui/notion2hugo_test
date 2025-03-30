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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM3V3VJZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAy2nx0jlGvrQfbyJuBvJG%2F8GD%2F9HtVhDtdcaC68YItQAiEA7bCzTcQvgK1QHBdEAlPplXbKW7kPs5WVw5qbKmi%2BM5gqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnwDJ9PaXkBQk2SISrcA8rn1OC6WsbfcnYMlg21hj9LIX1tY148p8%2FGhY4UAtNwA8DXTqtgmzBZbre2Fw4ja7ahS6ycoQDak397C0CYjcDpOqs0NLKUCXxoUvn4XsLUTL%2By%2BHs%2B%2FQ2CI7g4Vbs0pIhY3ts1lxY%2FQXOfIgM9NRjV5IraCOoNujH7uc8r2K%2FiRK1m7WC4lzMZaKMu4Ds%2FwffYJxpGyV8peGEx%2FO8QItSm%2FBBKn%2Bj0DDdwYWxUOR1hevK3hKgAe%2FNCZobwUUAAfb5W316joJXLRhZByMJct5SeBStr3rEu2PGRjK2PGEFNgvFEYgJvYhWv4XMBcU4luqCVMGlOlpw%2BPDaIMrTV%2FKvorhOirKq6iR%2FjcUoMFnQspxh1gL161rl9ornORErbxTD3WW%2BT39%2BkIeS5VuLy7Ri75Q1TFT%2FCAqdA7yUp9cNeSZ0EcPwVkdVd6nN1UKGBVLacMcZY7u3%2F7bdz7Xr5ZaCTIaBA%2BoqvohhbWG0b2l5rol0XDkpdl2uEu3nb6jBs6X05q28ZRuWHOI%2F6oTCm1d%2Bh%2FSTfI2RJxMp7wqtQwicLFydJF85XoyP6IKo5kEotsWno7j1CIyDnF7O%2BOY3RzNqgxonIQmNtaQmXoQJkMJvvXRf1NWxtkRPhdkGDMJXqor8GOqUB05j5fQbFSdVBnHii3i7S55o%2Frge9LJl9qJgreKcOxtsVHkTZ2JrVNjLrZws8H2mrY8YYFmtUFAitFvjygU53pqSEyxhMmsVgvezLvvUS58rlMPhmFARA9xJT%2BQl27XdgG5qvBPLDu2xPFuZj9p7TR%2FW46mLlcddFCLfwO5gOLQuozPSTv5uMqIkjCcY2IgNIYKQkZRxMiHX5Wto8y2oY0J177Lx4&X-Amz-Signature=93e29a22c17ecd98daa9fcc7ef6292e976a1678d028908a50ffbd6ded7c5fa49&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM3V3VJZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAy2nx0jlGvrQfbyJuBvJG%2F8GD%2F9HtVhDtdcaC68YItQAiEA7bCzTcQvgK1QHBdEAlPplXbKW7kPs5WVw5qbKmi%2BM5gqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnwDJ9PaXkBQk2SISrcA8rn1OC6WsbfcnYMlg21hj9LIX1tY148p8%2FGhY4UAtNwA8DXTqtgmzBZbre2Fw4ja7ahS6ycoQDak397C0CYjcDpOqs0NLKUCXxoUvn4XsLUTL%2By%2BHs%2B%2FQ2CI7g4Vbs0pIhY3ts1lxY%2FQXOfIgM9NRjV5IraCOoNujH7uc8r2K%2FiRK1m7WC4lzMZaKMu4Ds%2FwffYJxpGyV8peGEx%2FO8QItSm%2FBBKn%2Bj0DDdwYWxUOR1hevK3hKgAe%2FNCZobwUUAAfb5W316joJXLRhZByMJct5SeBStr3rEu2PGRjK2PGEFNgvFEYgJvYhWv4XMBcU4luqCVMGlOlpw%2BPDaIMrTV%2FKvorhOirKq6iR%2FjcUoMFnQspxh1gL161rl9ornORErbxTD3WW%2BT39%2BkIeS5VuLy7Ri75Q1TFT%2FCAqdA7yUp9cNeSZ0EcPwVkdVd6nN1UKGBVLacMcZY7u3%2F7bdz7Xr5ZaCTIaBA%2BoqvohhbWG0b2l5rol0XDkpdl2uEu3nb6jBs6X05q28ZRuWHOI%2F6oTCm1d%2Bh%2FSTfI2RJxMp7wqtQwicLFydJF85XoyP6IKo5kEotsWno7j1CIyDnF7O%2BOY3RzNqgxonIQmNtaQmXoQJkMJvvXRf1NWxtkRPhdkGDMJXqor8GOqUB05j5fQbFSdVBnHii3i7S55o%2Frge9LJl9qJgreKcOxtsVHkTZ2JrVNjLrZws8H2mrY8YYFmtUFAitFvjygU53pqSEyxhMmsVgvezLvvUS58rlMPhmFARA9xJT%2BQl27XdgG5qvBPLDu2xPFuZj9p7TR%2FW46mLlcddFCLfwO5gOLQuozPSTv5uMqIkjCcY2IgNIYKQkZRxMiHX5Wto8y2oY0J177Lx4&X-Amz-Signature=757d05b0cca0299d79bc79b7cb98649f371aeae48220aed747a1a3a925ae60c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
