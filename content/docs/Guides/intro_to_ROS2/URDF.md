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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCXODOR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHMZevw0nlY%2FPbF3h9dnsBJfKS1XYh%2BdW5ty%2FNExCBVGAiEAn3NbZZBD03tJksoZr0PF3q%2FAvce%2BCO3VvbNNnpGuRZYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEA097AWRYDiMllDyircA%2FAhGGbXU0YYml%2B1E3hoxF%2F%2BOEcgwmSigBTuKpxcvIoIQiJUezusPJQyTTV9iWMrBbxQFSvlHNGmY9iv7Dm440bqN721RRykyV0WhajyKguI5rwOPQ0s7ihvBSggLXaF%2FVnWw88zGrU%2Fnf52vmfi9miO%2BchBwUGo8Ntc1lgPVwBYqdOtrmroXSMR%2B%2B8782x8XxDljPhM%2BunuDp8xySz1sW2iwSeoevphQ0CIcNaPbBs1tQWwrhxCV3GQIOwXifkrKQmI31PQ7X%2FlDEUFYk%2B6Wkkb7Ja9pwU8UJwajXHZuWfbtlnjsN1Md2JA074oTOcX97VjuR0IJILtt%2BdEM1E6ekOk9HpBaL%2FZbTmgxoFF35K6zgsEnUIslVIULQGtc9EDQz0fA5tPzPve8sq2XW7%2BNjI2qyVU9z%2BTk%2BRLFbVf%2BzFxvUpOiwQRq82k9Mh3%2FKhmUpPlYU2wznv8PiFYH93R1j96G%2BJ2s99AdzokcUZjVHCijqEW8CuNwPqSZYA3CVgGhZObicnyAQNzXNzNSkl4Rwt4jhMlvWafTltzyB69xPI3BetUxSne3verafYvzlBf8%2Bd%2BHc%2FYqxvCInrzDdU4R76rvkif2XC3XSpNyNdeR5prTDLkjwKARYoKuw8MMIHVjcAGOqUBbtxcKG%2FfwprHYOBwZ%2Bz8eLbNRbqTh8S8MziRVd%2BwBLg8tK5kUzy2ttNfU9wylp48Oe%2BhwgSTSgJ%2Fn0ImMDRIT%2BnKkyP%2B0G2eKxDjOWc0WTXvdQyI9OwBnNikj8ZDNurYLDYLXbd83RrGxf6974oyK%2BF6dO1R6Wzjsp7%2FcdV2fMDwg7%2B%2F50ZNUOYMgXll6UUCD4hR0DqrQS%2BE0QWA0Fst%2BtxqJWdI&X-Amz-Signature=be04d4237544facc9e8cb9468e86d367a3d67c6bc5ec03b787245d6ce8c176e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOCXODOR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHMZevw0nlY%2FPbF3h9dnsBJfKS1XYh%2BdW5ty%2FNExCBVGAiEAn3NbZZBD03tJksoZr0PF3q%2FAvce%2BCO3VvbNNnpGuRZYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEA097AWRYDiMllDyircA%2FAhGGbXU0YYml%2B1E3hoxF%2F%2BOEcgwmSigBTuKpxcvIoIQiJUezusPJQyTTV9iWMrBbxQFSvlHNGmY9iv7Dm440bqN721RRykyV0WhajyKguI5rwOPQ0s7ihvBSggLXaF%2FVnWw88zGrU%2Fnf52vmfi9miO%2BchBwUGo8Ntc1lgPVwBYqdOtrmroXSMR%2B%2B8782x8XxDljPhM%2BunuDp8xySz1sW2iwSeoevphQ0CIcNaPbBs1tQWwrhxCV3GQIOwXifkrKQmI31PQ7X%2FlDEUFYk%2B6Wkkb7Ja9pwU8UJwajXHZuWfbtlnjsN1Md2JA074oTOcX97VjuR0IJILtt%2BdEM1E6ekOk9HpBaL%2FZbTmgxoFF35K6zgsEnUIslVIULQGtc9EDQz0fA5tPzPve8sq2XW7%2BNjI2qyVU9z%2BTk%2BRLFbVf%2BzFxvUpOiwQRq82k9Mh3%2FKhmUpPlYU2wznv8PiFYH93R1j96G%2BJ2s99AdzokcUZjVHCijqEW8CuNwPqSZYA3CVgGhZObicnyAQNzXNzNSkl4Rwt4jhMlvWafTltzyB69xPI3BetUxSne3verafYvzlBf8%2Bd%2BHc%2FYqxvCInrzDdU4R76rvkif2XC3XSpNyNdeR5prTDLkjwKARYoKuw8MMIHVjcAGOqUBbtxcKG%2FfwprHYOBwZ%2Bz8eLbNRbqTh8S8MziRVd%2BwBLg8tK5kUzy2ttNfU9wylp48Oe%2BhwgSTSgJ%2Fn0ImMDRIT%2BnKkyP%2B0G2eKxDjOWc0WTXvdQyI9OwBnNikj8ZDNurYLDYLXbd83RrGxf6974oyK%2BF6dO1R6Wzjsp7%2FcdV2fMDwg7%2B%2F50ZNUOYMgXll6UUCD4hR0DqrQS%2BE0QWA0Fst%2BtxqJWdI&X-Amz-Signature=15f652e359792152bfcd404d57fa2e5ebc721d133587f547285805d0e0dddf2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
