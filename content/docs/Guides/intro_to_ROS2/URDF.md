---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E347W3J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDqCRrUiStXUbCnjYgovlWUWeZ9XZPoXaqOddwrqXhfcAIgeOUlb0tI7kwIaBdc4xmPw2uaItpscoEZhzhpSpGd%2B3wqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBl%2B6mx92akN%2BXL%2B9SrcAxNoKv5pkWZ60oNrfayqAdOAGckzIF5If250CyAE10I7Mz1Txa8s7EsA6iG%2FAy%2FECCOJC6kqLibvdok376%2BD4UpPBYaWG9L3hjFbvNM3u1G%2BNdsu9tA8ZJqrQrEHRbOSb%2Fh8rVa9C5l%2F%2FMNUmyqxjWUsJlDpBpLmjj57s18R5tZWP1GzjPsjm3mLxiCYamM3JJ%2BGKVkTxBi8YiIOooU7bDP%2FNCUYioG7Bto5Zos338K2T9T5%2BkUnWfsnLi1%2B8hBGofOKkMo%2BnSoj4XScqht0DRKRZESLNDeUEuqMDEd4F00uDhTpvC3UYN43x%2Bcm1WVuGV3UFy4JtztXnSXnkox1IcF3Kl86ErAHE0UK1bkwCVd0EarVE9u0OJcuUouJo%2FP4ZtfaGMl2jiDZ%2Bn7VoFrBqv0NJoPyWb0HhzPuk4oiajdgW30OSiWD2i44wnTUwqupaU2u8BrpGANzRwl70VYRATAMJm2ZNXStCjJA%2BmsBzFs38WGVqr5l8R%2BbzkZw%2F5bHZ7Y7zCxmL%2FQjqE3l3vlXA4%2FEtXSPtRnc%2B631bQr3Qku3pSS8jxtVqJeE9taHsOLQPZlBgiW0D6RpWc2uJyeQTo6CBMdJVuIqrVVNo36vxBS8Z9%2FVBmhrRMV1vdxlMLe10cQGOqUBLgaHTej%2B2iocpZMq84p2fUX2qDw%2FTsafvt5zmtn7OgptDai2Gr8L6rq4gAMnqsRNpRO5HC%2FAcqCdNApMijasYdM5hyhsPjLPyypG6zzBP0GADIKcEQShjY2Fy8J4Bw6Q2aH8r6egRUL%2BMTtJINJ%2BBoWiT8%2FjcnZZZWrw9fM5ed2Uhx7B0TLplCG0r65kzJq2jLCAvgLQwcggOUby9XhRXEEak7kf&X-Amz-Signature=f26eaf5793b2155b62a418dd579bb0ede7eb04eb7234ab923e1aa6c94769739b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E347W3J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDqCRrUiStXUbCnjYgovlWUWeZ9XZPoXaqOddwrqXhfcAIgeOUlb0tI7kwIaBdc4xmPw2uaItpscoEZhzhpSpGd%2B3wqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBl%2B6mx92akN%2BXL%2B9SrcAxNoKv5pkWZ60oNrfayqAdOAGckzIF5If250CyAE10I7Mz1Txa8s7EsA6iG%2FAy%2FECCOJC6kqLibvdok376%2BD4UpPBYaWG9L3hjFbvNM3u1G%2BNdsu9tA8ZJqrQrEHRbOSb%2Fh8rVa9C5l%2F%2FMNUmyqxjWUsJlDpBpLmjj57s18R5tZWP1GzjPsjm3mLxiCYamM3JJ%2BGKVkTxBi8YiIOooU7bDP%2FNCUYioG7Bto5Zos338K2T9T5%2BkUnWfsnLi1%2B8hBGofOKkMo%2BnSoj4XScqht0DRKRZESLNDeUEuqMDEd4F00uDhTpvC3UYN43x%2Bcm1WVuGV3UFy4JtztXnSXnkox1IcF3Kl86ErAHE0UK1bkwCVd0EarVE9u0OJcuUouJo%2FP4ZtfaGMl2jiDZ%2Bn7VoFrBqv0NJoPyWb0HhzPuk4oiajdgW30OSiWD2i44wnTUwqupaU2u8BrpGANzRwl70VYRATAMJm2ZNXStCjJA%2BmsBzFs38WGVqr5l8R%2BbzkZw%2F5bHZ7Y7zCxmL%2FQjqE3l3vlXA4%2FEtXSPtRnc%2B631bQr3Qku3pSS8jxtVqJeE9taHsOLQPZlBgiW0D6RpWc2uJyeQTo6CBMdJVuIqrVVNo36vxBS8Z9%2FVBmhrRMV1vdxlMLe10cQGOqUBLgaHTej%2B2iocpZMq84p2fUX2qDw%2FTsafvt5zmtn7OgptDai2Gr8L6rq4gAMnqsRNpRO5HC%2FAcqCdNApMijasYdM5hyhsPjLPyypG6zzBP0GADIKcEQShjY2Fy8J4Bw6Q2aH8r6egRUL%2BMTtJINJ%2BBoWiT8%2FjcnZZZWrw9fM5ed2Uhx7B0TLplCG0r65kzJq2jLCAvgLQwcggOUby9XhRXEEak7kf&X-Amz-Signature=8a0cdc609f17f9fff3e62c4482a9cf6c522722bdd133c58e478e86b6d5de0791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
