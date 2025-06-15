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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADKEZY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDcVGWoabV%2BNcr6hATEFgqYHAaDCmhFN4FecydxP3ZOEwIgXVUolwyZnOLbc8tb2SVgFDAPesmB8Bzfaso0TkGIHRIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEOZ%2FHXhcCyLTuXUkircA6R4idvl9rMPwoqX0Tsi3LtlgLGTb92l9Kp%2F6dn8LK3Ak%2BzJV7THT1jlHvmirRW6T4sGKZ61tCUW5z3R0ZYp8d658%2FQnc8WVJmXzlsHscSkhJ2oEsapQO24FZE08%2F0xluKEBCX%2BKx4jhxOgg%2BJa5j497GFCkh2j4DjBLvq4kv6S3oDuNMtg61QECUgy9gpRaUPfJitptelMU7q6j%2FWQ6pIqSq%2BHHFi9gTt0BTxhuScllmuKkyxnMhGlor9y7q2iP64SThIci2vrUm%2BAFrGEHUHjXilODfgd8ajXfSWyDC4IcnEzifSU8KCqwCCn3kOB1koXajkzuDqyQxRRmuE8egsKk%2FBRcaP5AiLKO2JBGBUP3mZ%2FHJ%2BMGQ5rHTplDff5BS0PMtfVbYiUeM6b3vhd9hd39hw%2Bq4Qz7mwrqK9nNg1Nc8%2FruKNrCxCRe%2BA%2BrNCuqLWyno3N9Re53lef0dzoD1aeNkUpFUHlN7XCqkYX9Rkgah9HGPFGMaBRaaAZGnzlCh7bZzW8zpWFL8QYUfgFiHKG2PrBVzd2X9Vh7vhiXT494Y2OMjAbKOcDq8jAK%2BwjnXmmCfk2RJ77gOmJyPPE9TZKpQerU%2FBtbvuWGv14DXjZboh4RQaqBL3dDzTZCMKK7usIGOqUBKQtYuS8TLdTtoqaf4%2BE3UwU7JCNAJKsWQXPJq7RRXiqgdKh16R05Y76NBC7fKzgYRN9xteQMy8igykpgeayt5KogRzwRnJ1%2FQEu1bwPksvmdbCQm2etTvS9neM3z8qVdyHOp%2FeJ443tBy%2FG5v5v5ovrbJrYr2PHsw8Kdx5qxCg65doY7UP1lA3W5nld8bOByutQKTw3ZaUdkSLvGmgQkzT%2FNAP2g&X-Amz-Signature=48481e47bae8034bbf8899cd3479e06d00039b4a747f484dca06b8e66e7ab5d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJADKEZY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDcVGWoabV%2BNcr6hATEFgqYHAaDCmhFN4FecydxP3ZOEwIgXVUolwyZnOLbc8tb2SVgFDAPesmB8Bzfaso0TkGIHRIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEOZ%2FHXhcCyLTuXUkircA6R4idvl9rMPwoqX0Tsi3LtlgLGTb92l9Kp%2F6dn8LK3Ak%2BzJV7THT1jlHvmirRW6T4sGKZ61tCUW5z3R0ZYp8d658%2FQnc8WVJmXzlsHscSkhJ2oEsapQO24FZE08%2F0xluKEBCX%2BKx4jhxOgg%2BJa5j497GFCkh2j4DjBLvq4kv6S3oDuNMtg61QECUgy9gpRaUPfJitptelMU7q6j%2FWQ6pIqSq%2BHHFi9gTt0BTxhuScllmuKkyxnMhGlor9y7q2iP64SThIci2vrUm%2BAFrGEHUHjXilODfgd8ajXfSWyDC4IcnEzifSU8KCqwCCn3kOB1koXajkzuDqyQxRRmuE8egsKk%2FBRcaP5AiLKO2JBGBUP3mZ%2FHJ%2BMGQ5rHTplDff5BS0PMtfVbYiUeM6b3vhd9hd39hw%2Bq4Qz7mwrqK9nNg1Nc8%2FruKNrCxCRe%2BA%2BrNCuqLWyno3N9Re53lef0dzoD1aeNkUpFUHlN7XCqkYX9Rkgah9HGPFGMaBRaaAZGnzlCh7bZzW8zpWFL8QYUfgFiHKG2PrBVzd2X9Vh7vhiXT494Y2OMjAbKOcDq8jAK%2BwjnXmmCfk2RJ77gOmJyPPE9TZKpQerU%2FBtbvuWGv14DXjZboh4RQaqBL3dDzTZCMKK7usIGOqUBKQtYuS8TLdTtoqaf4%2BE3UwU7JCNAJKsWQXPJq7RRXiqgdKh16R05Y76NBC7fKzgYRN9xteQMy8igykpgeayt5KogRzwRnJ1%2FQEu1bwPksvmdbCQm2etTvS9neM3z8qVdyHOp%2FeJ443tBy%2FG5v5v5ovrbJrYr2PHsw8Kdx5qxCg65doY7UP1lA3W5nld8bOByutQKTw3ZaUdkSLvGmgQkzT%2FNAP2g&X-Amz-Signature=bae0f80dae149bf3daba78fe327dc2c82ef27c31143f0ed6c396b56ccc7094c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
