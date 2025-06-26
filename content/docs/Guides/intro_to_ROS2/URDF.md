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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B63SMG6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDb3UNOoqo3R31bjMv13lQP9%2BbMgZq0r4OUS9Wc0goGEwIgN27VMK%2BMuBByCFbCfvaKNfT9dsTB3VyqDXvB19sAWlwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFunwQTS0d7YD1GFOSrcA5LANPXWf5mT82LYPrm2y4AExR6S8sk7eY1I9wvMZ2dRVsRycSMVtyrQm5PwQBmuObQvxiDE7f2h4WWRLeVwShCyEtuvANMVdEwAoCgrQoey4AzggkHp9AUx1mWB%2BkYZjZyIgFxYGtqirwDWVB5L2%2FrOXrrOIveKTtW%2FJuAhrgV8W17ljos2HU0JGAWdRxXnErZt9LIeMtftt%2Fe2WAkSeQf5wZeu7RIVxmdQS1XWEUAOEB%2Br%2BW%2Fa5pb3oxcgpzPDBCv5uq21v0GDKtJOVLBKFBnwTps3Q2uB4jwYR%2BfRiLCmPtq8MycIi68pyCa3Xz0RnXjVLMte8ql%2FrpIxKK4jpK6xxCU7i%2B2PUYyqanlkaGo2DaHZiDkDZk022L%2B73n%2Ff7TmKx1yQ%2FPmnv54T37ZTYyFprRgO7IooXj8i2Cg6g5RYWbTw2wfg8%2BfARr6ZxHL75xPF%2BpHbc61%2ByJgPWCbKbUVL9YR5pbPrILpJDGIQRQA8zv9zLi5kB0K%2FcWdrEdZEuMC2Wqv%2FNHISRQMLYZkMfNdeNxwTWFEI66B%2FNjEAu1xkS0kJzmYaRXHjOurUv0g7sMa7wD8Vvo2gMfR8O4GoWMrXwDBld9To5ij0SH0%2Fzb0GUzv%2FexZODA%2BtcxxAMOaD9sIGOqUBumCNuwpllB1a6WO1EDCaGISaxau%2BXJzs%2F5FdU0p17K3mkXQfxE%2FaCCzMj2QmZqnvqK5%2BFtgjfvpS0J2rCgogR19d0yYHU8SzwMZ6UGzEKy5eqbBwFoZN7xPK4vU%2FW3v1dnGkUw1X%2FXjvE2a%2BhyAfApfaNnXigD0QifaKGwYWaPP3zO%2BG9iqD0MTylCvW1SVc%2B7JRybn9NKqny%2BeitAXDKQjDB2rN&X-Amz-Signature=727072083e9f0fbdd128eafce61a11f06d59c67a87f295642e63cdcad7eae4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B63SMG6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDb3UNOoqo3R31bjMv13lQP9%2BbMgZq0r4OUS9Wc0goGEwIgN27VMK%2BMuBByCFbCfvaKNfT9dsTB3VyqDXvB19sAWlwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFunwQTS0d7YD1GFOSrcA5LANPXWf5mT82LYPrm2y4AExR6S8sk7eY1I9wvMZ2dRVsRycSMVtyrQm5PwQBmuObQvxiDE7f2h4WWRLeVwShCyEtuvANMVdEwAoCgrQoey4AzggkHp9AUx1mWB%2BkYZjZyIgFxYGtqirwDWVB5L2%2FrOXrrOIveKTtW%2FJuAhrgV8W17ljos2HU0JGAWdRxXnErZt9LIeMtftt%2Fe2WAkSeQf5wZeu7RIVxmdQS1XWEUAOEB%2Br%2BW%2Fa5pb3oxcgpzPDBCv5uq21v0GDKtJOVLBKFBnwTps3Q2uB4jwYR%2BfRiLCmPtq8MycIi68pyCa3Xz0RnXjVLMte8ql%2FrpIxKK4jpK6xxCU7i%2B2PUYyqanlkaGo2DaHZiDkDZk022L%2B73n%2Ff7TmKx1yQ%2FPmnv54T37ZTYyFprRgO7IooXj8i2Cg6g5RYWbTw2wfg8%2BfARr6ZxHL75xPF%2BpHbc61%2ByJgPWCbKbUVL9YR5pbPrILpJDGIQRQA8zv9zLi5kB0K%2FcWdrEdZEuMC2Wqv%2FNHISRQMLYZkMfNdeNxwTWFEI66B%2FNjEAu1xkS0kJzmYaRXHjOurUv0g7sMa7wD8Vvo2gMfR8O4GoWMrXwDBld9To5ij0SH0%2Fzb0GUzv%2FexZODA%2BtcxxAMOaD9sIGOqUBumCNuwpllB1a6WO1EDCaGISaxau%2BXJzs%2F5FdU0p17K3mkXQfxE%2FaCCzMj2QmZqnvqK5%2BFtgjfvpS0J2rCgogR19d0yYHU8SzwMZ6UGzEKy5eqbBwFoZN7xPK4vU%2FW3v1dnGkUw1X%2FXjvE2a%2BhyAfApfaNnXigD0QifaKGwYWaPP3zO%2BG9iqD0MTylCvW1SVc%2B7JRybn9NKqny%2BeitAXDKQjDB2rN&X-Amz-Signature=8208dc2d23e69a540389cd14ccfa837665ac6994c446ea05aecada3b6df3fb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
