---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/URDF.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHQNDXRK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIATV8MZvko6%2B4xskT9bw1IetY%2FgMPO2TIb%2BywO91Ixq5AiBAdyE7l3hG2pTVlNWk2S6oZ0rx3kqgxtMB0tIfhsp5Ayr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMRLPbCcQzv4yO6nCZKtwDyCLRNK4FOXb4dtQj1HL4ECS9PnKEKUMlp8i7N1BVnQBTzuw76o7Xgke8eW4Lnh2zBET8kM%2B7X%2FusyKxIfmwF5YaUJ7XmkVnHYDOAxzAy3rCt2MSDVJt2L97dvsMdqv7Kc3UrcIrP7PnTZGwXVFIuAiQVFZiXDFylQyseAnM0j4giBMZnW49hO5ErMRs2Jy9g5ya4FSnq7jjImZRmINiAAX8bL3IN2%2B80ZPNQdgoqO725Q6jBjgnnLrR7nlnX%2F%2FRPugKtHwAFBLInpnkoIzwV9OG4T4XI%2BxiPhaf5Ok92WwNBw58m3bhJTUjAEuGrHjZlOcy1VEf4uhCiMRJs94TwBGbqacwx6LMrXjFRr2EiUhOjegBFtkzvvzel9PMJbgqsrgu67SrWAnJteXrJ2YC06MSZbJB5HyNzBjWWpfhA2If5mVn7FpUpuuiXLEl6iXJbtTaR8sB8mqWlVOQbjpUFnWnAnTukj%2BLCh%2F1qPYk%2BOH17mvx6YN81i5PRtUi7vssuoGV0%2FYnv9EhkBlanOlRzGzzpsTEm4asmTEvewbdxaOBfUdlE06t2GULthbjmwVIbEi1bYiF2aBzisbTFH7Wsw%2BXatV0BExUjmActeXv3T5SKc9LdtrE2n4O5%2FoswrM%2BKvQY6pgHgppI%2BD%2B5SGp1NIDGYypnQtI010Uoc4ooTcUGGih6%2FNkcAUNOJ74hD2A61D1jJZAIoTYfMQcu8EEYGNdlYA13DcAhlH5jL1sEG2yOM7yrV8oDAhMZaner2ejXR6Yc777%2BJla%2FqWPEifPCLTMgO4sE6Xutpgc4GCtiiIRXEfPlbtLNkorofoOyK0WE9zyH%2B9ZYNWKY%2FDE8nHIq8Yrgu%2FO1nqe9e6trA&X-Amz-Signature=a59e58483926c514962d02e52d1e6a7043c0bcc434fa3c205dcd38bacc8bfb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHQNDXRK%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIATV8MZvko6%2B4xskT9bw1IetY%2FgMPO2TIb%2BywO91Ixq5AiBAdyE7l3hG2pTVlNWk2S6oZ0rx3kqgxtMB0tIfhsp5Ayr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMRLPbCcQzv4yO6nCZKtwDyCLRNK4FOXb4dtQj1HL4ECS9PnKEKUMlp8i7N1BVnQBTzuw76o7Xgke8eW4Lnh2zBET8kM%2B7X%2FusyKxIfmwF5YaUJ7XmkVnHYDOAxzAy3rCt2MSDVJt2L97dvsMdqv7Kc3UrcIrP7PnTZGwXVFIuAiQVFZiXDFylQyseAnM0j4giBMZnW49hO5ErMRs2Jy9g5ya4FSnq7jjImZRmINiAAX8bL3IN2%2B80ZPNQdgoqO725Q6jBjgnnLrR7nlnX%2F%2FRPugKtHwAFBLInpnkoIzwV9OG4T4XI%2BxiPhaf5Ok92WwNBw58m3bhJTUjAEuGrHjZlOcy1VEf4uhCiMRJs94TwBGbqacwx6LMrXjFRr2EiUhOjegBFtkzvvzel9PMJbgqsrgu67SrWAnJteXrJ2YC06MSZbJB5HyNzBjWWpfhA2If5mVn7FpUpuuiXLEl6iXJbtTaR8sB8mqWlVOQbjpUFnWnAnTukj%2BLCh%2F1qPYk%2BOH17mvx6YN81i5PRtUi7vssuoGV0%2FYnv9EhkBlanOlRzGzzpsTEm4asmTEvewbdxaOBfUdlE06t2GULthbjmwVIbEi1bYiF2aBzisbTFH7Wsw%2BXatV0BExUjmActeXv3T5SKc9LdtrE2n4O5%2FoswrM%2BKvQY6pgHgppI%2BD%2B5SGp1NIDGYypnQtI010Uoc4ooTcUGGih6%2FNkcAUNOJ74hD2A61D1jJZAIoTYfMQcu8EEYGNdlYA13DcAhlH5jL1sEG2yOM7yrV8oDAhMZaner2ejXR6Yc777%2BJla%2FqWPEifPCLTMgO4sE6Xutpgc4GCtiiIRXEfPlbtLNkorofoOyK0WE9zyH%2B9ZYNWKY%2FDE8nHIq8Yrgu%2FO1nqe9e6trA&X-Amz-Signature=504ded2517c51cf797f7d2b1d7254627541a717ee10d54b503bcf125daad7832&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
