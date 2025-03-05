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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGRHSL7C%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKEKMuVPYqfrx1%2FpvA%2FZ4H5SmX8C56ehGssvRPUg4rZwIgQVdTKc1hIM1xIzQPvQor6KiEcIeDIZdBcZIe3oUb17Eq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMey9Pwb3NZMbA%2BzWyrcA3JyFLR7Wq2vJKrAqC3WLDMMATGV8XXmIt5L4i%2BErne85ClBgNqcLsCx4ILrvFbmmZX6ZzQah8hIanXnTWzuy4zcbXyuqU%2BmD6YfRUHOFRvvzpXtYa3cE1nDTIh0tXXeJvXLOEOd9ggok6F4apeVYLzgm%2F70vNHeNA%2BRn1K8VeB4Hfi41qAqhThX2Lh%2B%2BeZRJ%2BcBnqVr4wIpXQv3oliFAXbp1viUtgfNmxPG2BIS1Wif0JZL11MMl7OEGWCD%2FaykHCG26eXCM3xisZ%2FAU8CVyraNBZsqiTs5U%2B8ZUmtlb981Fq1cq6WukpYLqPClHY9RzyGJAqyUUsCWicSet66SQEb%2FfRDHzXwbbQ49lRe70%2FG4v0901mxf9fdG4%2FRpMWBNanN2mTKRMk28AcSa5anYTGkyd%2F2u8DmpO0dhWeuXK2Y2YrWCDpF7lPQE%2BmpWDHVfj5nR8G4g1x3GuP8SGe3S9OJg31%2BKShnmG0ZujgNu%2BXdwglFegAXL%2FxV7dG33Su9wjgzAQGZEfaQT9ZtJZJUwAqHu2fMcZcg0tc6m5u3IjHLNXZ5IAx5M8LZVrQuVl1Up%2FxmiLAG0ogpxlP5UnPKFDqMbYoquLCglL7uUigqgyj9gRhOg90lwp6aQVMRwMJaMoL4GOqUBSfXuYC3LAOHmNmcqvnA98iyN6DCqEsHvQsQn0L78LtNuBXKKdxupCdDMntL2YqcCfupFb9f5vExKitBFTAzfmLThf3G8pr8fmelo9TApD%2B6%2FElGH7iBAu9jzBozNDFe9wukwoyO3Twcfu07njkuWT%2FCX%2BtHaQgTsg6v%2Bm1TOo5mWR%2FIsBTyacBeJkgZ1EaGvnboVYeNajTMcOPvi6Fu271rp6rjF&X-Amz-Signature=9b9940d42dac451ff66df27a441cd027f2648b97d1086187f78005c06479a153&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGRHSL7C%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKEKMuVPYqfrx1%2FpvA%2FZ4H5SmX8C56ehGssvRPUg4rZwIgQVdTKc1hIM1xIzQPvQor6KiEcIeDIZdBcZIe3oUb17Eq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMey9Pwb3NZMbA%2BzWyrcA3JyFLR7Wq2vJKrAqC3WLDMMATGV8XXmIt5L4i%2BErne85ClBgNqcLsCx4ILrvFbmmZX6ZzQah8hIanXnTWzuy4zcbXyuqU%2BmD6YfRUHOFRvvzpXtYa3cE1nDTIh0tXXeJvXLOEOd9ggok6F4apeVYLzgm%2F70vNHeNA%2BRn1K8VeB4Hfi41qAqhThX2Lh%2B%2BeZRJ%2BcBnqVr4wIpXQv3oliFAXbp1viUtgfNmxPG2BIS1Wif0JZL11MMl7OEGWCD%2FaykHCG26eXCM3xisZ%2FAU8CVyraNBZsqiTs5U%2B8ZUmtlb981Fq1cq6WukpYLqPClHY9RzyGJAqyUUsCWicSet66SQEb%2FfRDHzXwbbQ49lRe70%2FG4v0901mxf9fdG4%2FRpMWBNanN2mTKRMk28AcSa5anYTGkyd%2F2u8DmpO0dhWeuXK2Y2YrWCDpF7lPQE%2BmpWDHVfj5nR8G4g1x3GuP8SGe3S9OJg31%2BKShnmG0ZujgNu%2BXdwglFegAXL%2FxV7dG33Su9wjgzAQGZEfaQT9ZtJZJUwAqHu2fMcZcg0tc6m5u3IjHLNXZ5IAx5M8LZVrQuVl1Up%2FxmiLAG0ogpxlP5UnPKFDqMbYoquLCglL7uUigqgyj9gRhOg90lwp6aQVMRwMJaMoL4GOqUBSfXuYC3LAOHmNmcqvnA98iyN6DCqEsHvQsQn0L78LtNuBXKKdxupCdDMntL2YqcCfupFb9f5vExKitBFTAzfmLThf3G8pr8fmelo9TApD%2B6%2FElGH7iBAu9jzBozNDFe9wukwoyO3Twcfu07njkuWT%2FCX%2BtHaQgTsg6v%2Bm1TOo5mWR%2FIsBTyacBeJkgZ1EaGvnboVYeNajTMcOPvi6Fu271rp6rjF&X-Amz-Signature=6e2efbef680e65cbe7b65e1368a0f6f41eaeb8431fd696964b1278375826cd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
