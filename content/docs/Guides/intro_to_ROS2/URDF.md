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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7MFUMH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFxVITFFlKdj98Ep2izL5dGDkWtFbeySjMiItc8%2FTHAiEAyT6frtn7q9ewlUUubXBtVTpA8iGAjAW0n%2FmbZUk2VmYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGak%2FJdSjbPI5ZLiSCrcAzsps5xXnFI42pLwq5AL7HSZo4KdCzVXowAtA%2BtMZZ%2FvZaEdyQfMhhROp05M5bocxM2QndQ%2FUy5oCZ3yZ8FD1IXj3ox2RxJe5Abxsk1vyJxIZhjOZEw0RzpIyinUGtjrM77%2BjUZZZVdKFxLfNRBCfdmK%2BVHxth3DyWaTtvcxFOMYQKSgU87sOUyhQxNh4SyatEy4Yqy%2Bk9h8PdIjXttGPNn2rJBCFcc6TP%2BeF%2FV3r9s3CC4q5m9pKjYNN6nIYNkEZ1Q9JTLS6aye0Kp52pmKXd4BhTnHUdcG%2BjdHarEJmOpl7aVe5k0BosmdpUNeRLGoRQqSoRAXs5YZxQ2N0rqkFnE1ldU%2FqzKPstoolg5qiN8AD%2B3mqR97LFxCfMTxRNbEtwqh82%2B7ffDAHR8x5NcQcnRVlwY3379NYExoiots1HoDC0D00Pd0Yk%2FrmBsJ6oi2vUeSGhZF3YmN1FtdgErP1zFIKG3ZYS8bopOjk2Py7XoPMqOStj235E6A92CZ%2FAcDD8kQsUBl9KsKCCzUIdryx6hYqi%2FUMSuJoXDxgkrdOPhbJ3jBEqXAVhNgimWwu1M7lP3a%2FQjOpSXwFThyVSTdApp50zRSSLtYATCDJSfv9u9JrpLFNoCSk85NYtbSMJWEor4GOqUB0E2QP0KGyPz9z6gfkxx816IParvKeCrEbI9WIPT4r4tN87LLY7ApQkEwWBvBGfOUgOVzDTGjfNmZnuBLJ7gzwqd2tF6AHYRyKj8ioGjurRoC4Y71QuaOX3sazSCDhRQ05%2FYk99i8TAj0Ar%2Fw8z%2F5yegM3lXhsn4x2eD0HajIdSSjZIO2vAYVxprk%2B%2B3IXa7dXHFaUuZbxqiqkTiSjy%2Bm8YLPky18&X-Amz-Signature=aa0f15008788df02bf05a4358baf8298f33099fbd3fcf5e90eb95ea4feb60f95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7MFUMH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FFxVITFFlKdj98Ep2izL5dGDkWtFbeySjMiItc8%2FTHAiEAyT6frtn7q9ewlUUubXBtVTpA8iGAjAW0n%2FmbZUk2VmYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGak%2FJdSjbPI5ZLiSCrcAzsps5xXnFI42pLwq5AL7HSZo4KdCzVXowAtA%2BtMZZ%2FvZaEdyQfMhhROp05M5bocxM2QndQ%2FUy5oCZ3yZ8FD1IXj3ox2RxJe5Abxsk1vyJxIZhjOZEw0RzpIyinUGtjrM77%2BjUZZZVdKFxLfNRBCfdmK%2BVHxth3DyWaTtvcxFOMYQKSgU87sOUyhQxNh4SyatEy4Yqy%2Bk9h8PdIjXttGPNn2rJBCFcc6TP%2BeF%2FV3r9s3CC4q5m9pKjYNN6nIYNkEZ1Q9JTLS6aye0Kp52pmKXd4BhTnHUdcG%2BjdHarEJmOpl7aVe5k0BosmdpUNeRLGoRQqSoRAXs5YZxQ2N0rqkFnE1ldU%2FqzKPstoolg5qiN8AD%2B3mqR97LFxCfMTxRNbEtwqh82%2B7ffDAHR8x5NcQcnRVlwY3379NYExoiots1HoDC0D00Pd0Yk%2FrmBsJ6oi2vUeSGhZF3YmN1FtdgErP1zFIKG3ZYS8bopOjk2Py7XoPMqOStj235E6A92CZ%2FAcDD8kQsUBl9KsKCCzUIdryx6hYqi%2FUMSuJoXDxgkrdOPhbJ3jBEqXAVhNgimWwu1M7lP3a%2FQjOpSXwFThyVSTdApp50zRSSLtYATCDJSfv9u9JrpLFNoCSk85NYtbSMJWEor4GOqUB0E2QP0KGyPz9z6gfkxx816IParvKeCrEbI9WIPT4r4tN87LLY7ApQkEwWBvBGfOUgOVzDTGjfNmZnuBLJ7gzwqd2tF6AHYRyKj8ioGjurRoC4Y71QuaOX3sazSCDhRQ05%2FYk99i8TAj0Ar%2Fw8z%2F5yegM3lXhsn4x2eD0HajIdSSjZIO2vAYVxprk%2B%2B3IXa7dXHFaUuZbxqiqkTiSjy%2Bm8YLPky18&X-Amz-Signature=3697a6c6d818ba53536b6a88efbe0174c539b7bdd50e976684e77b623f5c8d40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
