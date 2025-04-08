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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662452ROFA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICBnXb4UuWJDRpEsTNKtGyeta5n%2FUw0HZoRd89d7wndXAiEA5MuDGOnO91KUkvdva7wvGeEjAWygwUzXpXFW3SzGUFQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLlRfH9eiKUX3NWGASrcAxn8JGR5KQQLUNGxGADRySVYRzv6GNy%2BCT265VkYpDd5mRRCUKn0cZjNOrm8r3PPh3VmAPszwveySkg7fFSQqfQcq8cyJLfnD29CxqaDgdOQBzzJGt5AyAhjz4gEaZtohab2k3FKVsU8HLbWQ%2F8VPE3Uegqz3dic9l1bKohKxTPCskFOJGT%2BgFzSjbDR%2BQiTOnL9PaxSBXIkGP7Dv7bpeWnFhPjzgFMBCAxJJEpmJ7zEOGWzRHhTAv3bFfzXjJdWYGyabL4S9v6NgBM%2FYLWBdywGYZssKbeeMSyowxpx6t10ToPU2a4hmTaUNGUVQK0K4gB%2Fdk1LvW44CQBPXnO8OmUPIFhnf28s6wLNKKRPe0hcTAGhYhwO4%2Bk5FtWKxduyVUy3z2Ez4ZOPIyUwSObVrsYgsQ4dCMxSb7Han5cKg3hBvAj3iFAD1d4RrzP7Ev0UBf%2B%2Bin%2FpdpxuAwnMpH0q%2FGQwbYN5ukL1Gta1kxW1CUqeGrgy2FVTxnXwlSj529%2BWuYoyCVFnw2%2FM4Sz8Kc5tW68%2BjqIBjzxtss8P1xBBtDtFhAFi3QOO%2BrLa22rCuxdMs3XwNi5l%2FMjIy1kW%2BeyxIlNgTNp7GWbGApEgJ0mxHEi5KmZTENx3HctjO8g7MKGh1b8GOqUB3uFuPJIHISvT%2B7q0iCKLW6DUlyvAB9Kw6S%2BOW0uqcfW96C5Zj%2FQJEkwk4sNFQlujXcDDcgvfWliy2PxRfoqKK8%2BHyFffuX8snUa2nbmycsUB7oT%2FeBQUx3aBKIMWFurFjCaET8Y3rcgPqSipLhtNcW4YTIyNwdTD6ua22wZNAi4T4kE%2FjSB6Rv5xeuTh2izipPsKdp9lLwlYXNYdwsE36nfWaz%2Bx&X-Amz-Signature=4eaa8a867edf457a47253d2b9cb115c0637ae64c5c875f2857ff7d6d20081800&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662452ROFA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICBnXb4UuWJDRpEsTNKtGyeta5n%2FUw0HZoRd89d7wndXAiEA5MuDGOnO91KUkvdva7wvGeEjAWygwUzXpXFW3SzGUFQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLlRfH9eiKUX3NWGASrcAxn8JGR5KQQLUNGxGADRySVYRzv6GNy%2BCT265VkYpDd5mRRCUKn0cZjNOrm8r3PPh3VmAPszwveySkg7fFSQqfQcq8cyJLfnD29CxqaDgdOQBzzJGt5AyAhjz4gEaZtohab2k3FKVsU8HLbWQ%2F8VPE3Uegqz3dic9l1bKohKxTPCskFOJGT%2BgFzSjbDR%2BQiTOnL9PaxSBXIkGP7Dv7bpeWnFhPjzgFMBCAxJJEpmJ7zEOGWzRHhTAv3bFfzXjJdWYGyabL4S9v6NgBM%2FYLWBdywGYZssKbeeMSyowxpx6t10ToPU2a4hmTaUNGUVQK0K4gB%2Fdk1LvW44CQBPXnO8OmUPIFhnf28s6wLNKKRPe0hcTAGhYhwO4%2Bk5FtWKxduyVUy3z2Ez4ZOPIyUwSObVrsYgsQ4dCMxSb7Han5cKg3hBvAj3iFAD1d4RrzP7Ev0UBf%2B%2Bin%2FpdpxuAwnMpH0q%2FGQwbYN5ukL1Gta1kxW1CUqeGrgy2FVTxnXwlSj529%2BWuYoyCVFnw2%2FM4Sz8Kc5tW68%2BjqIBjzxtss8P1xBBtDtFhAFi3QOO%2BrLa22rCuxdMs3XwNi5l%2FMjIy1kW%2BeyxIlNgTNp7GWbGApEgJ0mxHEi5KmZTENx3HctjO8g7MKGh1b8GOqUB3uFuPJIHISvT%2B7q0iCKLW6DUlyvAB9Kw6S%2BOW0uqcfW96C5Zj%2FQJEkwk4sNFQlujXcDDcgvfWliy2PxRfoqKK8%2BHyFffuX8snUa2nbmycsUB7oT%2FeBQUx3aBKIMWFurFjCaET8Y3rcgPqSipLhtNcW4YTIyNwdTD6ua22wZNAi4T4kE%2FjSB6Rv5xeuTh2izipPsKdp9lLwlYXNYdwsE36nfWaz%2Bx&X-Amz-Signature=27deb1f1f7dcdacb655a23121093d4b23f79becdd3bb7f203732bc0ed4609581&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
