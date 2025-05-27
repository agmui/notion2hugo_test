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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GJPA2M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzk99Q6s5gr0LBK9Ydp7tR93rm8jG4d16RaCsBWqsZrwIgfsjlS%2B%2FDCsw1Z8nGAUfnlAWZQgP8rR98qOh5k0ZojqUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAvdBxYr2XrSd9lsmSrcA80Bz7gg%2F1w13UMKVplSwm1XsFhMoycC6QZ2QNMu1ZoaF4N2pqOt%2BhG2G%2F4WHcdKY4R5daITdnBYm%2F03P6F1fziQ3QHFZUABnDBPv8V7MkdINn0GW9TnPwUXGR%2FQe7HByTCuWMG6%2B6ssBIRCSGpIpnYXwh3suJ6jWm19DN%2BPtKzXOnBcxMH%2FnAFvQRakSONycaSDB3hyF%2FLoQj2Bh%2BTi%2Bl1bWe4QMWj%2BMw6DzTQdQn3EthLk84ef3vRjdLRX9d0EHhwYhuH0QKy%2F%2By1E2OXr7S4P9VjgqPYSPHWn%2F4ogChpGrmc1VRhOtgcX0wSk%2FrLaZZVyukgzL8ZdQzENd6EG7NIhqPZQlvBkVrIvOkw8f2SpW1%2F8Ty46ofqjgrURINZEv2tjH3vziIBF1HslOWUxq2HEdffYrcabnGE59ARRfwCpvex9JIXRcrNyX6fvr6VSWRCGPY2hp57gSg2w85odOimMbn5VvdWw3IFEijlUcx3i4e4otqjRtr1uzWSrx%2F9OuMO1rviQPbvxjmqiRkogDnzUMw1o%2BujbAOyowwBtcbYERwstvCGTdMBR1az%2FpoUG8qVIICC8Visn8ANt4DOxAfyX2V0OAc7rA0bU2KXCKxS29qgkg71P9vifO7OOMJOW2MEGOqUBwvXkGUmQxK%2FTkKP7IAU1fkJ8Cgx%2BcD9pqin4f%2BNpS%2Fid9qdbFYHP3QKHwpEtfF2PoCTnLwjtPOvQOVGxCTB9AQ29H0YQX2pM3thQVZdppsmGMLFkG%2FwT0SB0MOXJOuCYaMcvY3AxqR4uBpFEOhlr8FXpWPOFy6gqHCjRtsMF0X3qrK7q6wVj1Wdsl%2Bnqwzul9uqgdDKIyMvwHZaB1TKM9oD0W1RF&X-Amz-Signature=995e0616c63409a6ad5184fdce8f9324dfbc36db2dc25f98f516bb2f3c899706&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GJPA2M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzk99Q6s5gr0LBK9Ydp7tR93rm8jG4d16RaCsBWqsZrwIgfsjlS%2B%2FDCsw1Z8nGAUfnlAWZQgP8rR98qOh5k0ZojqUq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAvdBxYr2XrSd9lsmSrcA80Bz7gg%2F1w13UMKVplSwm1XsFhMoycC6QZ2QNMu1ZoaF4N2pqOt%2BhG2G%2F4WHcdKY4R5daITdnBYm%2F03P6F1fziQ3QHFZUABnDBPv8V7MkdINn0GW9TnPwUXGR%2FQe7HByTCuWMG6%2B6ssBIRCSGpIpnYXwh3suJ6jWm19DN%2BPtKzXOnBcxMH%2FnAFvQRakSONycaSDB3hyF%2FLoQj2Bh%2BTi%2Bl1bWe4QMWj%2BMw6DzTQdQn3EthLk84ef3vRjdLRX9d0EHhwYhuH0QKy%2F%2By1E2OXr7S4P9VjgqPYSPHWn%2F4ogChpGrmc1VRhOtgcX0wSk%2FrLaZZVyukgzL8ZdQzENd6EG7NIhqPZQlvBkVrIvOkw8f2SpW1%2F8Ty46ofqjgrURINZEv2tjH3vziIBF1HslOWUxq2HEdffYrcabnGE59ARRfwCpvex9JIXRcrNyX6fvr6VSWRCGPY2hp57gSg2w85odOimMbn5VvdWw3IFEijlUcx3i4e4otqjRtr1uzWSrx%2F9OuMO1rviQPbvxjmqiRkogDnzUMw1o%2BujbAOyowwBtcbYERwstvCGTdMBR1az%2FpoUG8qVIICC8Visn8ANt4DOxAfyX2V0OAc7rA0bU2KXCKxS29qgkg71P9vifO7OOMJOW2MEGOqUBwvXkGUmQxK%2FTkKP7IAU1fkJ8Cgx%2BcD9pqin4f%2BNpS%2Fid9qdbFYHP3QKHwpEtfF2PoCTnLwjtPOvQOVGxCTB9AQ29H0YQX2pM3thQVZdppsmGMLFkG%2FwT0SB0MOXJOuCYaMcvY3AxqR4uBpFEOhlr8FXpWPOFy6gqHCjRtsMF0X3qrK7q6wVj1Wdsl%2Bnqwzul9uqgdDKIyMvwHZaB1TKM9oD0W1RF&X-Amz-Signature=5136c6332de8534876bc2f649643c189ffaf181ea9af662d028742459cda9169&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
