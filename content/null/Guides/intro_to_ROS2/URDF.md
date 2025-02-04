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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BT3TL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE2zLVu1fKzOW2SqJVdWYRUToA1T5fjhlJ%2BKmV1tnj46AiEAnXpLe6lxjLscy0r%2FWqNqohCD1ChIEBM7WtLnz%2BSFvwwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH61AXT%2FjPzvja8spyrcA%2BuEBoQevspn15RYmuHHAFtxLBfVjdXrKD9jTLvGmGKRSjuurinKhyXckPqdqSEdw0RPMI7gIn6ShQ48ivaCBWqidxE7yZbNKuZJN56HAc9%2BIv%2F2GfrDEpnKKRqIhhhS6mVyrIO2lE%2BhnAxhUE3Rs0GMttys%2Fhc4A4GU0T5OmoPhI4zeb2W3jCnFI3o1PTViInD0chwHfhv92291Dtf9aM6bCh56Fi1uJvGoHGGi5A%2FlckF9TNA0onK9EMIGE2dqE3Rofc51qyZO%2F6U57GTfkay6NcgeKJSxVT%2BinMOhiuwIf3RYjzKcAfrP58gdh94s1HdCQ1JB8JQy9%2BHMml4ywoNPbUm0%2FsG%2BsOeCENyy87lsiNnLsueo5OdfwN9QaQjT4DBD3mSFz7KEeSZWgZMhobrlBrv8vZVYAN7yXOwdZ234WxRE1SKi0fOcOaOB1iDzEqPZegfRRd38TPJooi4YB235Sl7HegVxFx1yAHuGDK4iXXULrXKlbMg7uPPIU8ORtK8pB%2Be8JosA5Ci92ck%2BhUOkrxpHZzI0aTx7BAdp15Ev4DvJAN9Bn1g7qyVFNGXY0r4JwBshBkadpZZhpZNCYt%2FqEDpbsYTWsbXjmkgailf0IAO35o4NjFSXIqKvMLiVir0GOqUBZn2RFtO3oFQROQWqgdv6FF4Se0DcsWLQ%2FX8UrwO8osbI1nvEs%2BrzmjMl7K08jiIWE34VLayG2BDKIR2AscbYRMAYP0wrhGtgrw0Iy%2BbZeC8uM4vGCOrjfvevY4eWa3tvUIXjv2bj6xTcGVToWqZQZqRPuVXlpwFyOsMjaM0Rkg9Fx68IlugE8T4ZSA4ubC0DCMD0k6nVkRnHDsCLGex9QIo6bJiL&X-Amz-Signature=610eccfe727807f9b021aa86a883c37e34d9aad4eb7540ce34556c6d74de44da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4BT3TL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE2zLVu1fKzOW2SqJVdWYRUToA1T5fjhlJ%2BKmV1tnj46AiEAnXpLe6lxjLscy0r%2FWqNqohCD1ChIEBM7WtLnz%2BSFvwwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH61AXT%2FjPzvja8spyrcA%2BuEBoQevspn15RYmuHHAFtxLBfVjdXrKD9jTLvGmGKRSjuurinKhyXckPqdqSEdw0RPMI7gIn6ShQ48ivaCBWqidxE7yZbNKuZJN56HAc9%2BIv%2F2GfrDEpnKKRqIhhhS6mVyrIO2lE%2BhnAxhUE3Rs0GMttys%2Fhc4A4GU0T5OmoPhI4zeb2W3jCnFI3o1PTViInD0chwHfhv92291Dtf9aM6bCh56Fi1uJvGoHGGi5A%2FlckF9TNA0onK9EMIGE2dqE3Rofc51qyZO%2F6U57GTfkay6NcgeKJSxVT%2BinMOhiuwIf3RYjzKcAfrP58gdh94s1HdCQ1JB8JQy9%2BHMml4ywoNPbUm0%2FsG%2BsOeCENyy87lsiNnLsueo5OdfwN9QaQjT4DBD3mSFz7KEeSZWgZMhobrlBrv8vZVYAN7yXOwdZ234WxRE1SKi0fOcOaOB1iDzEqPZegfRRd38TPJooi4YB235Sl7HegVxFx1yAHuGDK4iXXULrXKlbMg7uPPIU8ORtK8pB%2Be8JosA5Ci92ck%2BhUOkrxpHZzI0aTx7BAdp15Ev4DvJAN9Bn1g7qyVFNGXY0r4JwBshBkadpZZhpZNCYt%2FqEDpbsYTWsbXjmkgailf0IAO35o4NjFSXIqKvMLiVir0GOqUBZn2RFtO3oFQROQWqgdv6FF4Se0DcsWLQ%2FX8UrwO8osbI1nvEs%2BrzmjMl7K08jiIWE34VLayG2BDKIR2AscbYRMAYP0wrhGtgrw0Iy%2BbZeC8uM4vGCOrjfvevY4eWa3tvUIXjv2bj6xTcGVToWqZQZqRPuVXlpwFyOsMjaM0Rkg9Fx68IlugE8T4ZSA4ubC0DCMD0k6nVkRnHDsCLGex9QIo6bJiL&X-Amz-Signature=f0fe02ab2c82dbceca3775a88d0187f6ba34c0b9e97297e52b60528c72976642&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
