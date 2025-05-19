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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHRZEAC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdw%2FozaWM3HaqcK3Tqywka83HcqpYnRVuObl1OcafexAiEAn47hZJr%2B9p7r07cWKpSJz7HdlQ1cqLv9XEmlfgMKqV4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHXcUIuB7E95A99jCrcA%2FfvFL4XusU%2FHZp0hS5MT5WKEV5VjYaNEHSgId08WVxCZ%2FQm6xGBSy2YaOFUqzbgP%2F%2B%2Fljw%2FE0j5hJ4vgBd1z1Z%2FcSrGhLqwNXSo18dftrb0jZxgvxYbkgkvIgKrujTx9PMgmqDI%2FzgWlafuvhD4RtTMaOKyVlBOh6zKyxukBhVO4kKRxeEztg4XpYKce6qD%2FxUkjXT%2FuEjRSNyFsnBzOU%2FGVaUCmS2VMj02clib8LDQ5128RlSv28oE6j8wYAmvvbuHfQjYFRP%2F7Zk%2BsZ8LneoxzQUOQOAiUe0GsX6LbcnAV2DAvCs3vlN2Bom3VqIiGwm%2BDdyxZWqiNHj8kvaZx5s8dXX94sj2L0%2F6eIzN%2F7qjPMoma8xtFyexTTW0sKh8BJIwcEYiui0kcO6%2Bnvc0scI2M65bAsdvy4OeAYvlP97DCEMc%2Fup8Dm8CEadXXrn0qIQuuCvnHiluD35UfSiuDvxWPlC%2FHvIVpwgLKML76F5QRPAzPjLbVm%2FXg3YRCoj9iARiIgSoK48NEF%2BnLdq2jcS2Nb2FwQi1c%2FHJRKGWwpf5djfNHdIGsbWhYzqhklEjnz0nqPXk%2BBnUjDHLQD3tpI3fb2ULpn7C7U1v3MwRjB3occW%2Bopv0s8YnzIHYMJHlrMEGOqUBMB%2BmZYfDsi0n7WlNEb3ERYq2abC6xOsZajUfyYuWJY%2FFyLVxdNonuejLqsJCdS54NC6qMuGxu15jOotW7LOTHMm5pQQSQS4w%2B%2Fsq7uNIVvPWRILSs26AIxvTRU93yMiCmydxi0orUns3Duxjv1tVpHAFbsRh%2FEyMw8Q4KZdx8%2FJAuGLxzk8Iiqiw5a42Qwl9pan0uiOVgmcrHynn%2FAVGuDR7ZjI6&X-Amz-Signature=8ed0e771a319e8da04c8c6bdc901b063087ba20812ceb9315565dc436c0017ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHRZEAC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdw%2FozaWM3HaqcK3Tqywka83HcqpYnRVuObl1OcafexAiEAn47hZJr%2B9p7r07cWKpSJz7HdlQ1cqLv9XEmlfgMKqV4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHXcUIuB7E95A99jCrcA%2FfvFL4XusU%2FHZp0hS5MT5WKEV5VjYaNEHSgId08WVxCZ%2FQm6xGBSy2YaOFUqzbgP%2F%2B%2Fljw%2FE0j5hJ4vgBd1z1Z%2FcSrGhLqwNXSo18dftrb0jZxgvxYbkgkvIgKrujTx9PMgmqDI%2FzgWlafuvhD4RtTMaOKyVlBOh6zKyxukBhVO4kKRxeEztg4XpYKce6qD%2FxUkjXT%2FuEjRSNyFsnBzOU%2FGVaUCmS2VMj02clib8LDQ5128RlSv28oE6j8wYAmvvbuHfQjYFRP%2F7Zk%2BsZ8LneoxzQUOQOAiUe0GsX6LbcnAV2DAvCs3vlN2Bom3VqIiGwm%2BDdyxZWqiNHj8kvaZx5s8dXX94sj2L0%2F6eIzN%2F7qjPMoma8xtFyexTTW0sKh8BJIwcEYiui0kcO6%2Bnvc0scI2M65bAsdvy4OeAYvlP97DCEMc%2Fup8Dm8CEadXXrn0qIQuuCvnHiluD35UfSiuDvxWPlC%2FHvIVpwgLKML76F5QRPAzPjLbVm%2FXg3YRCoj9iARiIgSoK48NEF%2BnLdq2jcS2Nb2FwQi1c%2FHJRKGWwpf5djfNHdIGsbWhYzqhklEjnz0nqPXk%2BBnUjDHLQD3tpI3fb2ULpn7C7U1v3MwRjB3occW%2Bopv0s8YnzIHYMJHlrMEGOqUBMB%2BmZYfDsi0n7WlNEb3ERYq2abC6xOsZajUfyYuWJY%2FFyLVxdNonuejLqsJCdS54NC6qMuGxu15jOotW7LOTHMm5pQQSQS4w%2B%2Fsq7uNIVvPWRILSs26AIxvTRU93yMiCmydxi0orUns3Duxjv1tVpHAFbsRh%2FEyMw8Q4KZdx8%2FJAuGLxzk8Iiqiw5a42Qwl9pan0uiOVgmcrHynn%2FAVGuDR7ZjI6&X-Amz-Signature=3aceb36c02bfeab45d7ca9dbd85b140021dc6ac92f1f84dacb3d145e140f5874&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
