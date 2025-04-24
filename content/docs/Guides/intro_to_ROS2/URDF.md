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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2AXMPS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMCn4oTZ32StdTuVjY0IU%2BYlR4s%2BQ58Bi70yD0kh7y6QIhAJSB5T2g6nhHO1gq242GfRGrk%2FxM9lol%2Fri5ruL4gZuPKv8DCB8QABoMNjM3NDIzMTgzODA1IgxB7cquqRkdogq%2BxuEq3AMyQie3Pzvzg54gcYBKZdZmPBBuG7ayDCA8rVopIexGXaovSUUKiKuI1%2BYcTy2g2YvorZICkiV6quzQOhPU5fgVjQ1fQNiT%2FesK8%2FpMTx1iT3l97ReHEP5%2Bn8cCs3rGQdV4mjSvQQfqPypCxFoB5ZcE58HQFSAc8yaJKYNvsvcWMJKc9kz54JR6RWhcOwqPRaz8iLIdrNXcMDm83uB4eMHjTDnNXiFC%2BeQWSD%2F%2FskELz6rBFJ%2FRsvxb96WEzJCbdATTb74wr8R5EpbBHdCd2MmuDSIDrDtOFz8pq7OkNaq%2FgxQyLe1RmhL4FRZwg6jHlVxL96Gj%2FAijegKyaFj3qxroqs4J8v80I8F8TaOaj7LNaOexirT5wVj4GOWpqfNPYiZ4FjQsyeIkNln%2BFC%2FsusfkipDyt%2Bq472JjLA7Ge1rOxVwuRi8WJpFBWj8m%2Bce6QaBOT4roT5XvfpGApw817awOuEBhNTQuMu3xO31MrFJBQpf3bGG9RXg9fVmSl740WQRLiS4f9XWGijXQw9aaAmPouV28zPASJ5PPkQAW8sAWCHpHIXpJreuyyh%2FlY3AhtdtT94SapeEB0S6Z6F1IqTPYYIg8wa%2FMKkcerzEqbnS%2F73pVuWqUDkofOHaW7zC826rABjqkAaMc0ewfPNVKgY3VnKKf0kBIao4w2b0i3vOSzefhpRvTm1LXQ%2BE5fhiqUPyLryccHCwo1qv0yKPDyiNTzmA509bh0VGkfUJLSwOtc7J06MSqRMSC5V6lLD1Ekx%2BGj0e7jiYse260HdNCc92WM2R2Xip%2BrWsz8oaRB4Hniz%2BldN39kcRNZKPrHqS8Zk%2BBWPPgBANkjaxVYzc7sRP%2FOhkk3DzGfYI9&X-Amz-Signature=f109ac47b3de22fb8377f2766736046b4e3f0f5f8a1c58e41215199f7ef16e55&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ2AXMPS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMCn4oTZ32StdTuVjY0IU%2BYlR4s%2BQ58Bi70yD0kh7y6QIhAJSB5T2g6nhHO1gq242GfRGrk%2FxM9lol%2Fri5ruL4gZuPKv8DCB8QABoMNjM3NDIzMTgzODA1IgxB7cquqRkdogq%2BxuEq3AMyQie3Pzvzg54gcYBKZdZmPBBuG7ayDCA8rVopIexGXaovSUUKiKuI1%2BYcTy2g2YvorZICkiV6quzQOhPU5fgVjQ1fQNiT%2FesK8%2FpMTx1iT3l97ReHEP5%2Bn8cCs3rGQdV4mjSvQQfqPypCxFoB5ZcE58HQFSAc8yaJKYNvsvcWMJKc9kz54JR6RWhcOwqPRaz8iLIdrNXcMDm83uB4eMHjTDnNXiFC%2BeQWSD%2F%2FskELz6rBFJ%2FRsvxb96WEzJCbdATTb74wr8R5EpbBHdCd2MmuDSIDrDtOFz8pq7OkNaq%2FgxQyLe1RmhL4FRZwg6jHlVxL96Gj%2FAijegKyaFj3qxroqs4J8v80I8F8TaOaj7LNaOexirT5wVj4GOWpqfNPYiZ4FjQsyeIkNln%2BFC%2FsusfkipDyt%2Bq472JjLA7Ge1rOxVwuRi8WJpFBWj8m%2Bce6QaBOT4roT5XvfpGApw817awOuEBhNTQuMu3xO31MrFJBQpf3bGG9RXg9fVmSl740WQRLiS4f9XWGijXQw9aaAmPouV28zPASJ5PPkQAW8sAWCHpHIXpJreuyyh%2FlY3AhtdtT94SapeEB0S6Z6F1IqTPYYIg8wa%2FMKkcerzEqbnS%2F73pVuWqUDkofOHaW7zC826rABjqkAaMc0ewfPNVKgY3VnKKf0kBIao4w2b0i3vOSzefhpRvTm1LXQ%2BE5fhiqUPyLryccHCwo1qv0yKPDyiNTzmA509bh0VGkfUJLSwOtc7J06MSqRMSC5V6lLD1Ekx%2BGj0e7jiYse260HdNCc92WM2R2Xip%2BrWsz8oaRB4Hniz%2BldN39kcRNZKPrHqS8Zk%2BBWPPgBANkjaxVYzc7sRP%2FOhkk3DzGfYI9&X-Amz-Signature=5548896314ec3756b5e238bc49b8372443a1b958386f0681dd84419440dab24d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
