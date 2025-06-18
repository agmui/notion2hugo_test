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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB3IXYDO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICO48C4PMVgnR0SwbztLOSgtV%2Fjm42lnw3B9XT04qrt5AiEAxl5yUa3xzLAUYx%2Fn1GHO2SG5hN3ClVnTrFhXNGHSfUUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd1tL8ztMclVkViyCrcA80BjAZ9X76r6hBR9CKcyGi4%2FSNWXqCutpg6txRAcjUCLM46MubJCouMzmsdSquf%2FlRtxl6fUi9oq40sDb7gRyTfaSTDDshsDx2eo1Pfc6RJ7h9w3%2F9q6qm1uSKpYe8LMO%2BpYx3dsyKsrZR02EPHr2tSBMShR19vrs5bWt2yggDIRMloW33dt8GTUeN8tsKWFrvz4OSacCsGisythZ5%2Bc3eWSe%2B2hhQIHCy2Xg7so7Cfdv56TSRvbpYIYb9fbi9aM5CXouk6Rvhf43TArqpo8BcNrwEUriR3ek4Y9iNheEcF8Zh1UmqZMmrpwZq0%2FQ6UxMQZOTqRVBCszyJX2MI7vnG1l8ryMkmWw0Fkd%2FEazN%2B6D3JedXp6nmJ8vYrVpUlJFI9jpe48QC1eNkule0HlS1OURvrldj%2FAWdjS8K7oFqq%2B%2BDXFLJ8cYuwGTGnFliTNjcp5unl9jTcP%2B3pCGZUKFRngKKQahjRm3s0J4fhFjHDuNrYOgqN%2BexIZJGBOeH8IbXDa5ELbBdmip%2BBuuNt%2F6XZlJLTIGrp9uFaXCntIEldqg5FetMY9oB5IYJx0NYKv5w26UbEb1b8KBwJqjCBcr6pHC%2FVHFx2AahKopdS%2FflaAhzIwjbPG7Aafm5OjMNz0ysIGOqUBxIpVX25ctFxsFMRIKV9wA3ma3QVgFGudHsW3nLAIlbv6uGDBV4rpA1LXsjjDxZNrfR%2F9Bxvk7t%2BNsxsfwXZazrOCaKgFqANY%2BtUf9H6MvYdQnWSRWfZlOE50ZybxigrJv0SiOPiGqcq7kxJb0VUZJbZdykWB2vDLeZfJD%2Fh%2Fq6TIKfxx4BCvPzSHl2F0DJSWJ1U9Py1XTmv3lQmC0nFFpRYlZ09n&X-Amz-Signature=2e6b945e5ad7d622f0cdc25b260feb264b46808fc06ed5fbce6c6cd39478b57d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB3IXYDO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICO48C4PMVgnR0SwbztLOSgtV%2Fjm42lnw3B9XT04qrt5AiEAxl5yUa3xzLAUYx%2Fn1GHO2SG5hN3ClVnTrFhXNGHSfUUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd1tL8ztMclVkViyCrcA80BjAZ9X76r6hBR9CKcyGi4%2FSNWXqCutpg6txRAcjUCLM46MubJCouMzmsdSquf%2FlRtxl6fUi9oq40sDb7gRyTfaSTDDshsDx2eo1Pfc6RJ7h9w3%2F9q6qm1uSKpYe8LMO%2BpYx3dsyKsrZR02EPHr2tSBMShR19vrs5bWt2yggDIRMloW33dt8GTUeN8tsKWFrvz4OSacCsGisythZ5%2Bc3eWSe%2B2hhQIHCy2Xg7so7Cfdv56TSRvbpYIYb9fbi9aM5CXouk6Rvhf43TArqpo8BcNrwEUriR3ek4Y9iNheEcF8Zh1UmqZMmrpwZq0%2FQ6UxMQZOTqRVBCszyJX2MI7vnG1l8ryMkmWw0Fkd%2FEazN%2B6D3JedXp6nmJ8vYrVpUlJFI9jpe48QC1eNkule0HlS1OURvrldj%2FAWdjS8K7oFqq%2B%2BDXFLJ8cYuwGTGnFliTNjcp5unl9jTcP%2B3pCGZUKFRngKKQahjRm3s0J4fhFjHDuNrYOgqN%2BexIZJGBOeH8IbXDa5ELbBdmip%2BBuuNt%2F6XZlJLTIGrp9uFaXCntIEldqg5FetMY9oB5IYJx0NYKv5w26UbEb1b8KBwJqjCBcr6pHC%2FVHFx2AahKopdS%2FflaAhzIwjbPG7Aafm5OjMNz0ysIGOqUBxIpVX25ctFxsFMRIKV9wA3ma3QVgFGudHsW3nLAIlbv6uGDBV4rpA1LXsjjDxZNrfR%2F9Bxvk7t%2BNsxsfwXZazrOCaKgFqANY%2BtUf9H6MvYdQnWSRWfZlOE50ZybxigrJv0SiOPiGqcq7kxJb0VUZJbZdykWB2vDLeZfJD%2Fh%2Fq6TIKfxx4BCvPzSHl2F0DJSWJ1U9Py1XTmv3lQmC0nFFpRYlZ09n&X-Amz-Signature=b0976b757c854e4fa7fac96c755d82a6811846aa7b9f81efe33192f6e9922f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
