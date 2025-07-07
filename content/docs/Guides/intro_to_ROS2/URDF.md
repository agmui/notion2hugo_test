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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEN2YLA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwfFHcjHSlS7R4oVDwsbmHyjlqBIE7Bq1TwdP5m%2Fo9zgIhAKPDxI6jWQ0rocutbP0YlERTZXGeXACx4M1etsvHYFAYKv8DCHsQABoMNjM3NDIzMTgzODA1IgwQeAICozqHwZjVQegq3APByy8waJUKLUHud9z9Caq3n17yMrs%2FnHgNmx2PKyHlvqGyXs5RqgergU2k2TR0mNpsEq%2FkOf5PoJq12rdmB%2FoCoEvcaXO5GugLn2aN8HW5pJKEvYUVB2c9%2BcHdOF82xiycQmiMicXErXDLliXbaNHJSs3gQn%2FNf9jW08no9qJtROjrH0GtQbjBLg8IzVJphcELG3%2BUb2e6J6r0apzkw66gjbT%2BvijvQRX5J1AhA87W5wZJ8rogHo7K1pYSvBNwhcVri4eqvFu44L9w1B8X9H%2BdgXLuVz55W9pIjPnBDrv8eRGNGrRmUFWwpPvkeBX%2FXNZwfYNFtgN%2FVTrsVNQBAW1zb6Apt2HMn1dNqJpsxvGEYiVxczfv7KofzOBQTQac2QVWin%2BZ%2BPmFVQp2DVHcWeRu29z%2BPso3V3LoqowEViAHqMqq74lmlpZgxqtZKOyLa65tU5Ua7HSJXrks%2B4WIW%2BB724pyKgKgTKw7ApgD3mhexDC%2Bde0h4aIXYEbMqlDzG5%2FR2ruHV1WsyOemYaRJj957EZ5%2BQ08P4JrMuMIQsbM0hfz%2F6Zw1O9jLQvQ%2FgZgtD7hgA7mMU9uzNrlAdl6Fsypc6CCwNq%2F2y%2FbRBzcAHAJaIVgc338atO7rkLIgaTCalrDDBjqkAbQLb1YnlIuEmBfpjeED8yZTR9I8b4thLErFGpT7C5vMRRmyn6dMuSexOphRz01xtil2A0gT4VMZjsx7vQyhazkAL4MiFvmFkRuvFZ2%2BWUixIrCYbDUMb85Sv8t7A8H00RAVTNEQm2ndx5qP2sLQu%2BaG5Mz1fUQUaRiTp5gg91dOSGJwijX8n6KFVc%2FsBZUZLxU5zYdodkIWgrc3OIodM%2FvRXqLZ&X-Amz-Signature=a559ddc02c488be45a7b5793601b72d4084352649ffd46f50dfe02baa3e70e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEN2YLA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCwfFHcjHSlS7R4oVDwsbmHyjlqBIE7Bq1TwdP5m%2Fo9zgIhAKPDxI6jWQ0rocutbP0YlERTZXGeXACx4M1etsvHYFAYKv8DCHsQABoMNjM3NDIzMTgzODA1IgwQeAICozqHwZjVQegq3APByy8waJUKLUHud9z9Caq3n17yMrs%2FnHgNmx2PKyHlvqGyXs5RqgergU2k2TR0mNpsEq%2FkOf5PoJq12rdmB%2FoCoEvcaXO5GugLn2aN8HW5pJKEvYUVB2c9%2BcHdOF82xiycQmiMicXErXDLliXbaNHJSs3gQn%2FNf9jW08no9qJtROjrH0GtQbjBLg8IzVJphcELG3%2BUb2e6J6r0apzkw66gjbT%2BvijvQRX5J1AhA87W5wZJ8rogHo7K1pYSvBNwhcVri4eqvFu44L9w1B8X9H%2BdgXLuVz55W9pIjPnBDrv8eRGNGrRmUFWwpPvkeBX%2FXNZwfYNFtgN%2FVTrsVNQBAW1zb6Apt2HMn1dNqJpsxvGEYiVxczfv7KofzOBQTQac2QVWin%2BZ%2BPmFVQp2DVHcWeRu29z%2BPso3V3LoqowEViAHqMqq74lmlpZgxqtZKOyLa65tU5Ua7HSJXrks%2B4WIW%2BB724pyKgKgTKw7ApgD3mhexDC%2Bde0h4aIXYEbMqlDzG5%2FR2ruHV1WsyOemYaRJj957EZ5%2BQ08P4JrMuMIQsbM0hfz%2F6Zw1O9jLQvQ%2FgZgtD7hgA7mMU9uzNrlAdl6Fsypc6CCwNq%2F2y%2FbRBzcAHAJaIVgc338atO7rkLIgaTCalrDDBjqkAbQLb1YnlIuEmBfpjeED8yZTR9I8b4thLErFGpT7C5vMRRmyn6dMuSexOphRz01xtil2A0gT4VMZjsx7vQyhazkAL4MiFvmFkRuvFZ2%2BWUixIrCYbDUMb85Sv8t7A8H00RAVTNEQm2ndx5qP2sLQu%2BaG5Mz1fUQUaRiTp5gg91dOSGJwijX8n6KFVc%2FsBZUZLxU5zYdodkIWgrc3OIodM%2FvRXqLZ&X-Amz-Signature=8e2fcd397694cd3057942c76e859027892b249e1b8d70704bde7d617d7997e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
