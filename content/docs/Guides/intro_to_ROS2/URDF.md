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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JBQMCW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCh3C2ovptQDWYV38%2FuxWL8veRPlaaseNoO4WyiA%2Bos3gIgL%2Brui82kZeKZEDbFj9gwovXo0n9dUcBRhjj%2BRf9vO%2F4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACK5H6xPtPSDSGiqSrcAyAmtPH3iUg2s9B26ehXVqWMmv9FK%2Fl6ZmdJBU7vrUareY0l%2FyoW0dVcLT3CxUfZJgY5%2BlKvmmp2si3CDtjFiWzWZbMNIP%2FFK%2FDmfF8La7z2wfoVzMQdxaPUyCDYVQ5VPRSshrp1HjEC%2BGIm1JJD9yR%2FK56WeOb4VCWCavPtnmcRR%2F8NsWqVWAwSq7RtT%2BGEDARNM3TX8MBCjG6jQX50mc8xc1yIEvLunEZDhSZxV0pevXAA5B1geOv1sZBxBpxpx8xMZdxI0G5FDtLYnNOWTuopzxeERx0fHMdcTJkgXn7qvayd4%2FcjCUpMBJqzkq1Jiv9rgnKFwgRe9nnlOABQq1YQDKRM4DPu%2BvKUBLDbhuqLTnR5J9q9ilMfs6EGSPLfbOwQZJvGNsJ5mLRqiPMV9C29HjRKKdpMD8ekHV%2F7JUaufmAbgPydEXZQOtUFEJjik6b8%2FHfVmzS%2FXWl%2F2PxOy4NQqfF7ad1WElfaxwV92VpL6J0JQZ0bbBYehxYSMh3PfNCLCe12isfo1u87uPCaT3j23u4S9Uijd6QOfAH6gkODYvvfmyHqSKCf1zIdsUMEq2toaZWcRYj25bXvlhUoLhORQgIDuFRpZjtraoN0NQJq3OqSN0mP%2BqbKSorJMPLumsQGOqUBXEZCBSX45n3RfiaClyNJ%2BuEFuxsyYJcT7PZ1mwUF%2FtO3bsTBhU4DK0oLQOl8D9NnkfzKjGiqSUzZz8KqRP9N3FyALr635Q0wUEk96CSweSuzp1NXGwGveeE%2F2BUJji1%2FKYLHOXbs8PRo%2FPKjzDVfkX37pL2SrbceBQ9YVqTIv0UuXgM9kwKHyXTYz%2BcI2BjOS2PDA8UUjtfeHGzpW6GKVxvePZYm&X-Amz-Signature=0a3abe81a461343b702ad8bbdf70149a0a0e0dbe94e0c6909b7345654333e53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JBQMCW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCh3C2ovptQDWYV38%2FuxWL8veRPlaaseNoO4WyiA%2Bos3gIgL%2Brui82kZeKZEDbFj9gwovXo0n9dUcBRhjj%2BRf9vO%2F4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACK5H6xPtPSDSGiqSrcAyAmtPH3iUg2s9B26ehXVqWMmv9FK%2Fl6ZmdJBU7vrUareY0l%2FyoW0dVcLT3CxUfZJgY5%2BlKvmmp2si3CDtjFiWzWZbMNIP%2FFK%2FDmfF8La7z2wfoVzMQdxaPUyCDYVQ5VPRSshrp1HjEC%2BGIm1JJD9yR%2FK56WeOb4VCWCavPtnmcRR%2F8NsWqVWAwSq7RtT%2BGEDARNM3TX8MBCjG6jQX50mc8xc1yIEvLunEZDhSZxV0pevXAA5B1geOv1sZBxBpxpx8xMZdxI0G5FDtLYnNOWTuopzxeERx0fHMdcTJkgXn7qvayd4%2FcjCUpMBJqzkq1Jiv9rgnKFwgRe9nnlOABQq1YQDKRM4DPu%2BvKUBLDbhuqLTnR5J9q9ilMfs6EGSPLfbOwQZJvGNsJ5mLRqiPMV9C29HjRKKdpMD8ekHV%2F7JUaufmAbgPydEXZQOtUFEJjik6b8%2FHfVmzS%2FXWl%2F2PxOy4NQqfF7ad1WElfaxwV92VpL6J0JQZ0bbBYehxYSMh3PfNCLCe12isfo1u87uPCaT3j23u4S9Uijd6QOfAH6gkODYvvfmyHqSKCf1zIdsUMEq2toaZWcRYj25bXvlhUoLhORQgIDuFRpZjtraoN0NQJq3OqSN0mP%2BqbKSorJMPLumsQGOqUBXEZCBSX45n3RfiaClyNJ%2BuEFuxsyYJcT7PZ1mwUF%2FtO3bsTBhU4DK0oLQOl8D9NnkfzKjGiqSUzZz8KqRP9N3FyALr635Q0wUEk96CSweSuzp1NXGwGveeE%2F2BUJji1%2FKYLHOXbs8PRo%2FPKjzDVfkX37pL2SrbceBQ9YVqTIv0UuXgM9kwKHyXTYz%2BcI2BjOS2PDA8UUjtfeHGzpW6GKVxvePZYm&X-Amz-Signature=3be00b2d3c17c5d3624852fcb6a897ccea73842fb2def2a224b9147f43f40d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
