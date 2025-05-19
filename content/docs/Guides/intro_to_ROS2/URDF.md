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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GBDFUH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Kq6cuFEjPACZs2NKkiVKEgs9QA31tLx4KwCQE3axTgIhAIuPpUKIG77KJ44g7yi3YU8i1Bxh8v9gvjGvkNmP%2FG0LKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYtDhkpAAxAf%2B6uroq3AMU4ISNziR0OnjgTh3%2BDvRFH3ycXmZNqYo5hRcE2lgM16HZ4kmyZmIYvFfn40pQ3UVJrw2CWCstgRrgga2D84N7sEfbz8DnMWalohAavsuiZd6QsiTKVRg0O7Kw4n05yAP5d1DcPvLQNZrX3t0AKyGjMZNnY%2F75Cd7sxbcdA3CQENXkl8%2BFFACrBCDd25otBgfa4DT6eTGMllBRD3ctrOo1hzUhV55Lff9%2F6B4uq6FDEGTe0cgBeOyMZiSN8YZ2cE9JiiTmW1M%2FduQK8aUI6ZTfFNbXUOUvPasDXDp2rxQ%2FSMPrHv2Z7%2FfTKn7tgyZP0kWW1RcdU9dTdfErx2ixXxLy9P8bTwX%2FpwJ7zDzxtNY19WBSVOS8udOTwAEcLGTP41%2FiDLi2rUhL9BJPb9tc%2BY%2BQT1SMXkBzIoIRw7FBdLSj1BIIYY680456sKHOYTau5lBwVjLhNLYO%2B0PHtIvTOG0vAQ1n95zYlANCVURzVlhOy9wL3KCNq%2Fh%2BtaeAV2BN52RMmwDJ4IfGKQy0hcRyLYdvr7%2BbrtYexyBzoiOuCIZCkVvlZOotaKZw3nnXBX7mb2OIC8ay9WmivnGUd3eA%2BXFT0MkWDbicaQRWAVXnJXV54rHLqyePIzJEeGgZYjCu367BBjqkAce9XXVD3k%2B4ZE71HD27psZ1%2ByDhmm2UvEptAOo6QTK6eGTHOCngYeFsw4ruTQFDe%2FpSVaaklu4NNucNHFp6oshmgCLAz%2BVudOTf9WUgy5TxzLGnjGTfSuKXHyBZL2lq%2FIaaKuajWjqPreVTxLSVKBYRb21u2%2FdCIfuw1y9ZTTkX36wRyTxoWQhMB3P5yS1RoRHXk3Ogc5JzYDXF8uBLIDQVbfJZ&X-Amz-Signature=0d07a12f289b8acde08cf819c9ff06af5cc010b65cf0fa81c59d4b61580ad779&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GBDFUH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Kq6cuFEjPACZs2NKkiVKEgs9QA31tLx4KwCQE3axTgIhAIuPpUKIG77KJ44g7yi3YU8i1Bxh8v9gvjGvkNmP%2FG0LKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYtDhkpAAxAf%2B6uroq3AMU4ISNziR0OnjgTh3%2BDvRFH3ycXmZNqYo5hRcE2lgM16HZ4kmyZmIYvFfn40pQ3UVJrw2CWCstgRrgga2D84N7sEfbz8DnMWalohAavsuiZd6QsiTKVRg0O7Kw4n05yAP5d1DcPvLQNZrX3t0AKyGjMZNnY%2F75Cd7sxbcdA3CQENXkl8%2BFFACrBCDd25otBgfa4DT6eTGMllBRD3ctrOo1hzUhV55Lff9%2F6B4uq6FDEGTe0cgBeOyMZiSN8YZ2cE9JiiTmW1M%2FduQK8aUI6ZTfFNbXUOUvPasDXDp2rxQ%2FSMPrHv2Z7%2FfTKn7tgyZP0kWW1RcdU9dTdfErx2ixXxLy9P8bTwX%2FpwJ7zDzxtNY19WBSVOS8udOTwAEcLGTP41%2FiDLi2rUhL9BJPb9tc%2BY%2BQT1SMXkBzIoIRw7FBdLSj1BIIYY680456sKHOYTau5lBwVjLhNLYO%2B0PHtIvTOG0vAQ1n95zYlANCVURzVlhOy9wL3KCNq%2Fh%2BtaeAV2BN52RMmwDJ4IfGKQy0hcRyLYdvr7%2BbrtYexyBzoiOuCIZCkVvlZOotaKZw3nnXBX7mb2OIC8ay9WmivnGUd3eA%2BXFT0MkWDbicaQRWAVXnJXV54rHLqyePIzJEeGgZYjCu367BBjqkAce9XXVD3k%2B4ZE71HD27psZ1%2ByDhmm2UvEptAOo6QTK6eGTHOCngYeFsw4ruTQFDe%2FpSVaaklu4NNucNHFp6oshmgCLAz%2BVudOTf9WUgy5TxzLGnjGTfSuKXHyBZL2lq%2FIaaKuajWjqPreVTxLSVKBYRb21u2%2FdCIfuw1y9ZTTkX36wRyTxoWQhMB3P5yS1RoRHXk3Ogc5JzYDXF8uBLIDQVbfJZ&X-Amz-Signature=2d0cd9fdc132652c0e02b3737f964a5f50f554ec506ed84af1e63f92b396caf8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
