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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN2DRUY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDW%2FAHAj0kDYJHQx1xlp6CMzcua2jCDxgJJeHNdUQYLDwIgP3SYlohX2wvVYwpjGlk6WJuAcIErzBRHRE6UsBxL0b0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjbtupKoq0T1TSS8ircA73sZnHD5kDFGIfJEvOecYWTunH3zXCVfRG0vzsSOjhZ9sek%2Bo6Cfa0Ah2HxRo0OY5ndMnb%2BIeU7v7aKYeJLZ%2BgYIF%2B7lPvDt07ydGhJ26QGPENAXgYH%2FoP1i%2BXHolgo3xEASiBIwVdtA1%2F0HVK5la2Oz0F3zxQ2ttU93w1sB0i1I%2FExDr%2BM6Mf8dq730WGT%2BZFB2ss7Ls8z1nkmBHEFIKU9DdpzCb9BVTIttJ%2BWl6rERUMKuB6iClBn%2FDgWvP0QfPNVXnUJcCCjHCHqUEtLLfVeU2QFiSq%2B5y0b5mvfm8ZkbNB0pPvtk7vgJ6lICKyVOZwqsTT1HqD0YOxhPmOO0cAIwaIaHPHAfy6Bys5tpWrOfqVNblk7xUlBE25y1GREzTx%2FJrEfhN2Hi%2BlgOsjVTVLt1oO5l4acZrk5KtZeLIJ%2BokKSGNJTuO%2BkgcsIMnsyuyb1kA5XAkyaVDJXO7WyDACptwL0A1FPzVXmiaV6elQwpxj9%2BaWiA4OzYL0UbxKnhOwYcYSjuQjDrOIah%2BThEDlMBqWuCK3wqjUEyv1LrJe%2Fk8DXGwS0z58H8Qld%2Fc6KFtTI5v5HIIhg4i1UbsV4Gys6qcNUtvVl%2BiRY123hATzThh%2FQtN6trxG2EWXpMNat7cIGOqUBT5AOJ9W58uhMPbo0CuoQ9Pqsh9tn05NFPKdTxwoAkbc3C1oiOC%2Fw8ZqnoooUlxH2zaezqjhfSrjOIgdryI5W5qRDWj%2BHAKGGjivE40GVxWEgSS9yYiaJwW3W4wzybM7jZj1dfU%2FVKNNhl6y2SRw5sj9VNhB7K00sskq3%2FiIUq0yYgwB8OhYu21t%2BmbHu6NLQyRpbbW7KzgXNmLMenJOHcog1ESBt&X-Amz-Signature=7b00aa6aa1354daa552580539c561ab5217e879c5a79caba6c22a0911e3e6fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN2DRUY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDW%2FAHAj0kDYJHQx1xlp6CMzcua2jCDxgJJeHNdUQYLDwIgP3SYlohX2wvVYwpjGlk6WJuAcIErzBRHRE6UsBxL0b0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLjbtupKoq0T1TSS8ircA73sZnHD5kDFGIfJEvOecYWTunH3zXCVfRG0vzsSOjhZ9sek%2Bo6Cfa0Ah2HxRo0OY5ndMnb%2BIeU7v7aKYeJLZ%2BgYIF%2B7lPvDt07ydGhJ26QGPENAXgYH%2FoP1i%2BXHolgo3xEASiBIwVdtA1%2F0HVK5la2Oz0F3zxQ2ttU93w1sB0i1I%2FExDr%2BM6Mf8dq730WGT%2BZFB2ss7Ls8z1nkmBHEFIKU9DdpzCb9BVTIttJ%2BWl6rERUMKuB6iClBn%2FDgWvP0QfPNVXnUJcCCjHCHqUEtLLfVeU2QFiSq%2B5y0b5mvfm8ZkbNB0pPvtk7vgJ6lICKyVOZwqsTT1HqD0YOxhPmOO0cAIwaIaHPHAfy6Bys5tpWrOfqVNblk7xUlBE25y1GREzTx%2FJrEfhN2Hi%2BlgOsjVTVLt1oO5l4acZrk5KtZeLIJ%2BokKSGNJTuO%2BkgcsIMnsyuyb1kA5XAkyaVDJXO7WyDACptwL0A1FPzVXmiaV6elQwpxj9%2BaWiA4OzYL0UbxKnhOwYcYSjuQjDrOIah%2BThEDlMBqWuCK3wqjUEyv1LrJe%2Fk8DXGwS0z58H8Qld%2Fc6KFtTI5v5HIIhg4i1UbsV4Gys6qcNUtvVl%2BiRY123hATzThh%2FQtN6trxG2EWXpMNat7cIGOqUBT5AOJ9W58uhMPbo0CuoQ9Pqsh9tn05NFPKdTxwoAkbc3C1oiOC%2Fw8ZqnoooUlxH2zaezqjhfSrjOIgdryI5W5qRDWj%2BHAKGGjivE40GVxWEgSS9yYiaJwW3W4wzybM7jZj1dfU%2FVKNNhl6y2SRw5sj9VNhB7K00sskq3%2FiIUq0yYgwB8OhYu21t%2BmbHu6NLQyRpbbW7KzgXNmLMenJOHcog1ESBt&X-Amz-Signature=b8fb996507a5a41cc09708927c6b4d4f70f0ea4f284d44b1dffc335c31adafcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
