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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JYQASP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUw02pnwxqtm9JXqI0WEc5PomOSntTi%2FCFQwK3ec7rfAiEA1k%2FiHn7u4FPq7OIOgw7oewipOzGsGuA1OqLJqrNVnh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYx34tVy3GOosAvwircA5DWfy38liG2KzFU00%2BWoUcNVCCmlrB2iZ1OV0cMohKzwrUBOjR8dkXY7xgxGUAQ4ILHvVczaB%2FVtXURvANSeSSmiVae%2FjKa3gwSYBh7ENfR8vGQf6aphKpXsuyl9X0S1DXZ%2BKT2NpEncdZGb8hqCYlvwFiRBZyiavDJreVYgkyQlN0TfvFtzeXRyBaxDEC36U8V3RRw18njqF3KK0pNDorwu4DeDOZHfO%2BPNdiuEwNQ612NcrEnnqYMM4KdGe10euPYU9sG7ytbqGIDGmDZzzp1TMaidx9tV9dFdnbwRu1UOHT%2FEX5KbhiLMlUiCfDluRwS5pNWEvROcfkP1bWbNUKT5pMLrEJ09tEbbl88nWmfMCRIAHkM2sgSPd2h2v%2BA%2FYj3ZjnVrxCW3jMhiKjaFte3pS1U3RgTZBckVd0%2B07jQBXR5wkB5RMZKjlY7tX0yZaMS%2FUwxKE9NOORI6yE2%2Bp2%2FZxtm2QLc3CzquP43TeBnM5J6%2Bxpgtcpjs%2BDAtFNZ1NRWQjldRMq%2FelKXIbmCGnjoffVs8VeqyJWLIHaco3fMhfBFchlPUcpXlD7BP9a1tC3kkR5CSWEoOk5kFvc7dsrdwlsGgexHFwRX%2F8ZUsN9AlDTKBJf4cpb0%2F3HlMO7sscQGOqUB8zvzEM2p2Tgc7irwNODLabiqmF67sBllMQE7eTNN5Mthsey4gS%2BCms0qED%2F3dYpOIlRsOPUZraSfSAkY%2FzuoB0f26gSDhpk4QnVPcKIY1BIboq%2Fqlv5gCu8h3RjrvgxYqNoVde4uV%2Bdz6iM913JFKF4QoQALzdpBz283C8pex9nSaAzmlWKwvADrsrRUyIdNbFUwetLWQceQDLIRNovmWIMZsg8P&X-Amz-Signature=a644fe093cdc3f0090c6e547ad00299f3219f2780f37dbd8e8fa9318222f5b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JYQASP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUw02pnwxqtm9JXqI0WEc5PomOSntTi%2FCFQwK3ec7rfAiEA1k%2FiHn7u4FPq7OIOgw7oewipOzGsGuA1OqLJqrNVnh8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYx34tVy3GOosAvwircA5DWfy38liG2KzFU00%2BWoUcNVCCmlrB2iZ1OV0cMohKzwrUBOjR8dkXY7xgxGUAQ4ILHvVczaB%2FVtXURvANSeSSmiVae%2FjKa3gwSYBh7ENfR8vGQf6aphKpXsuyl9X0S1DXZ%2BKT2NpEncdZGb8hqCYlvwFiRBZyiavDJreVYgkyQlN0TfvFtzeXRyBaxDEC36U8V3RRw18njqF3KK0pNDorwu4DeDOZHfO%2BPNdiuEwNQ612NcrEnnqYMM4KdGe10euPYU9sG7ytbqGIDGmDZzzp1TMaidx9tV9dFdnbwRu1UOHT%2FEX5KbhiLMlUiCfDluRwS5pNWEvROcfkP1bWbNUKT5pMLrEJ09tEbbl88nWmfMCRIAHkM2sgSPd2h2v%2BA%2FYj3ZjnVrxCW3jMhiKjaFte3pS1U3RgTZBckVd0%2B07jQBXR5wkB5RMZKjlY7tX0yZaMS%2FUwxKE9NOORI6yE2%2Bp2%2FZxtm2QLc3CzquP43TeBnM5J6%2Bxpgtcpjs%2BDAtFNZ1NRWQjldRMq%2FelKXIbmCGnjoffVs8VeqyJWLIHaco3fMhfBFchlPUcpXlD7BP9a1tC3kkR5CSWEoOk5kFvc7dsrdwlsGgexHFwRX%2F8ZUsN9AlDTKBJf4cpb0%2F3HlMO7sscQGOqUB8zvzEM2p2Tgc7irwNODLabiqmF67sBllMQE7eTNN5Mthsey4gS%2BCms0qED%2F3dYpOIlRsOPUZraSfSAkY%2FzuoB0f26gSDhpk4QnVPcKIY1BIboq%2Fqlv5gCu8h3RjrvgxYqNoVde4uV%2Bdz6iM913JFKF4QoQALzdpBz283C8pex9nSaAzmlWKwvADrsrRUyIdNbFUwetLWQceQDLIRNovmWIMZsg8P&X-Amz-Signature=bc58930d9fbe5b88b6fb8d76f787a39f8d6b59c9697b15e1eb5685b176def9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
