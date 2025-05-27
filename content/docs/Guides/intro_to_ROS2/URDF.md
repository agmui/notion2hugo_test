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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR3XZTC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9VARLz1m7DFr1zVcVaMV%2F8P7mTsaGWqYSKHDBCcNrQIgc38IbCcbAhu8y4pqOqzUqSJZPR%2F41JhBvNBpUcyl%2B%2Bsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGLfV4%2BDAEETK8r2xyrcA1ZTjzYzL8GBDMLHDS4OzqPO9b7UqaonKMDJBcoTeNRsLmAuRP520JHEyWhkJpuTRwDNNZfpi%2FA%2FJGoZROHs9dYUJBBofiUvL1%2FP2J85YU%2F%2Bz9%2FNR6PJ3%2FCB1XWrxrg5HaJIus9dGjSEwhVoQkRtZjijv018T%2BqCIJmiFv9BpuXyuMbMtipP7v4fDaYvCUukv%2F1WMkGI6HkDQES%2FEqzkQBztCqhQWkB1VBKx6nj4YakvA%2FzV87Zcxabt4GEGey7L43fnxGzH%2FOmXEXGALqwZf77y7L%2BflVeKOz1WlZWF8b%2FEiAdPZZ55gFsAFTbzYtp6HNSM0vYkYiXO3QNbMHal6FLiKnjALT%2BQbJ%2Bf6q8%2ByApFrXTm2TgM1ft4MLFPnaXPXFTtAKuNoxzyI1y6bfBDmEJFUGzpQz576DaagHrLFmT7zzir7khzlzznNzFvHPj7XZ20vCNy%2FbVVbNX41DzOAdE4qPYcwgQsDlbGFS1Dfn5%2BuDhFxm5ZQFlYZSQzNnJZZobBZ78DWrYH8Q0kxoBouHs%2FTZ3LABOTnzzBDIEBxWjxFct7mv%2FEkvY255jR3fbri0md45TXkqJdaVyV%2FfHf%2FLkX811ZWvA7I0AWfh27y4AoRJI7kZCwoN4heriPMNeQ1cEGOqUBvjjlcI4MNxht5CsmtTpxxMeJUHY49tv670yrnB8sPGGf9vgqTh6ADuAA5nhcVLIKMIABcGHa4yp9tfvyKVNz1ZBIemBzUA9iTrPEu1i1w%2Bq3jD9%2BODDDg9ndRINvXnQoi7ukiJriUkfK1Nbe%2FSc9uKAD2a2dg%2BMaWr7XJ0%2BOPDeGBqtInRYMZERTs2Hvs%2Fwuh3EUii8je7GqW37dQ%2FEagcsKZrdB&X-Amz-Signature=9a4a3144071469e7e752d4931af3d7b7444a4a6b740d01c60b137f56138fe292&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR3XZTC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9VARLz1m7DFr1zVcVaMV%2F8P7mTsaGWqYSKHDBCcNrQIgc38IbCcbAhu8y4pqOqzUqSJZPR%2F41JhBvNBpUcyl%2B%2Bsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGLfV4%2BDAEETK8r2xyrcA1ZTjzYzL8GBDMLHDS4OzqPO9b7UqaonKMDJBcoTeNRsLmAuRP520JHEyWhkJpuTRwDNNZfpi%2FA%2FJGoZROHs9dYUJBBofiUvL1%2FP2J85YU%2F%2Bz9%2FNR6PJ3%2FCB1XWrxrg5HaJIus9dGjSEwhVoQkRtZjijv018T%2BqCIJmiFv9BpuXyuMbMtipP7v4fDaYvCUukv%2F1WMkGI6HkDQES%2FEqzkQBztCqhQWkB1VBKx6nj4YakvA%2FzV87Zcxabt4GEGey7L43fnxGzH%2FOmXEXGALqwZf77y7L%2BflVeKOz1WlZWF8b%2FEiAdPZZ55gFsAFTbzYtp6HNSM0vYkYiXO3QNbMHal6FLiKnjALT%2BQbJ%2Bf6q8%2ByApFrXTm2TgM1ft4MLFPnaXPXFTtAKuNoxzyI1y6bfBDmEJFUGzpQz576DaagHrLFmT7zzir7khzlzznNzFvHPj7XZ20vCNy%2FbVVbNX41DzOAdE4qPYcwgQsDlbGFS1Dfn5%2BuDhFxm5ZQFlYZSQzNnJZZobBZ78DWrYH8Q0kxoBouHs%2FTZ3LABOTnzzBDIEBxWjxFct7mv%2FEkvY255jR3fbri0md45TXkqJdaVyV%2FfHf%2FLkX811ZWvA7I0AWfh27y4AoRJI7kZCwoN4heriPMNeQ1cEGOqUBvjjlcI4MNxht5CsmtTpxxMeJUHY49tv670yrnB8sPGGf9vgqTh6ADuAA5nhcVLIKMIABcGHa4yp9tfvyKVNz1ZBIemBzUA9iTrPEu1i1w%2Bq3jD9%2BODDDg9ndRINvXnQoi7ukiJriUkfK1Nbe%2FSc9uKAD2a2dg%2BMaWr7XJ0%2BOPDeGBqtInRYMZERTs2Hvs%2Fwuh3EUii8je7GqW37dQ%2FEagcsKZrdB&X-Amz-Signature=034cdd3d5d9a322222ca0bc1df0f0a61cef0deaa393e161c3b2151035416e640&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
