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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJOO7ZP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDTIip3Lxcejv0kJSE8qi5ZcerZO8ngSB7zJQ4ruHxX6AIgDywtt0MibhX84vlJy1Ipzaux6NAvjkleT3VLAGIPIw0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBlL0Tm6Y979ZVLA8ircAw4DN5mPCc%2FxnaM3fdz0DQpJrvB8cUlarBwnwBcMTl5ydjzWAXjIXOeV%2B5JWXgNq7L9fokeW2FPNn9z5P2CjXZ5wQb9gWn5j43WeLzEFzPmOEcEdppFVgSdQk18BD6qkH5vq8k93842M0yLK0LS6qw3aKv0CezPTnEVw6SDL1TycvPyoVGy1QaK2SMPOuRq4XkrzlytUfHJ6csObxuXKAHp7r7TxJYfCjA09FbZwz445vClRV458UD9ZFddiEhtncqt%2BR0dulo3tBczTvefOaoGjyUN1x%2F%2Bn2KXg3zxL42nmd0UP6iEV51zFGkKytoGXomdtj6mv8pww25OLUIzeYfBb6aByjor8nPjZYDCTpnalLzaqkmVX2wGI04h9safnmBhQXM5wGO9hBz4W6BQSD8HQfOn42oVJREWDUZjbsYeUvlpaBlsmQsXlW1jVravvktoC6LkwhX3gVxBBAUtjxaFTRzzouxKZYJdqK%2FH%2FzNWEYZFQbQNTP4jVnxUanI9AQg2fSBKbrktZrbVSW%2FPB3uuljyxGroV%2Fv%2F2BQiOarl9LSq%2Fc3hvKLub1QEOPGxfFyR%2BwWywudcHsPRX90oYS7d0U%2F2HQR7X90jYLMnfKTtUk4J%2BPOkTK4m805k5lMOizv70GOqUBqt1gem5B5KUiUP4H5K5gQsmSDylilMYzkIpKrK0qpwwA%2Bf6cf7CTRqjBUpeWAQiAAwZsG917AeMwiUhwuvXeOKo64X0frWTPRKPlJLjJ2G8ZFKDQPQjiGOBGIoMx559jzYFOMMbgkuOrzImBBO230VAtw%2Fp01Jf0mLbl0SMK5cDs5FDg6rJ09o1ku08rg2QXaf58H8BKYPjZHMhRWd%2B9Wyd9HVAU&X-Amz-Signature=bcf0e959f7ea05c712c073e2b70ae214996f1cd99ef5e4341744d16b86e072e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHJOO7ZP%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDTIip3Lxcejv0kJSE8qi5ZcerZO8ngSB7zJQ4ruHxX6AIgDywtt0MibhX84vlJy1Ipzaux6NAvjkleT3VLAGIPIw0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBlL0Tm6Y979ZVLA8ircAw4DN5mPCc%2FxnaM3fdz0DQpJrvB8cUlarBwnwBcMTl5ydjzWAXjIXOeV%2B5JWXgNq7L9fokeW2FPNn9z5P2CjXZ5wQb9gWn5j43WeLzEFzPmOEcEdppFVgSdQk18BD6qkH5vq8k93842M0yLK0LS6qw3aKv0CezPTnEVw6SDL1TycvPyoVGy1QaK2SMPOuRq4XkrzlytUfHJ6csObxuXKAHp7r7TxJYfCjA09FbZwz445vClRV458UD9ZFddiEhtncqt%2BR0dulo3tBczTvefOaoGjyUN1x%2F%2Bn2KXg3zxL42nmd0UP6iEV51zFGkKytoGXomdtj6mv8pww25OLUIzeYfBb6aByjor8nPjZYDCTpnalLzaqkmVX2wGI04h9safnmBhQXM5wGO9hBz4W6BQSD8HQfOn42oVJREWDUZjbsYeUvlpaBlsmQsXlW1jVravvktoC6LkwhX3gVxBBAUtjxaFTRzzouxKZYJdqK%2FH%2FzNWEYZFQbQNTP4jVnxUanI9AQg2fSBKbrktZrbVSW%2FPB3uuljyxGroV%2Fv%2F2BQiOarl9LSq%2Fc3hvKLub1QEOPGxfFyR%2BwWywudcHsPRX90oYS7d0U%2F2HQR7X90jYLMnfKTtUk4J%2BPOkTK4m805k5lMOizv70GOqUBqt1gem5B5KUiUP4H5K5gQsmSDylilMYzkIpKrK0qpwwA%2Bf6cf7CTRqjBUpeWAQiAAwZsG917AeMwiUhwuvXeOKo64X0frWTPRKPlJLjJ2G8ZFKDQPQjiGOBGIoMx559jzYFOMMbgkuOrzImBBO230VAtw%2Fp01Jf0mLbl0SMK5cDs5FDg6rJ09o1ku08rg2QXaf58H8BKYPjZHMhRWd%2B9Wyd9HVAU&X-Amz-Signature=dd7b646f69368fa6eee0608f13ad00510e4809f738c26786613594c6bb9a408c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
