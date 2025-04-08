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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKTG5DT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3LDiOA9lIUHywHJCI%2FszU9UVMn1kKBCMTwqhjPynuTAiEAs%2F47q2bQlzF3odCaWMVZ11g4T5KKe4BwSHQY9tNcsQcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDRxsG%2F8LeFWK6MwxSrcAwaVpbr2wLfSh09Ngl4DkhMDJLJVh9JIkD7ftG%2BseiFwghtkcAuM9nWV%2BeVrpTRmc7AuoJhUdOWkDGXVnV3bh8CIwHdBaEKcaO9%2FsvfjvqoUqVggPAovTxn%2FPD21wOBrAO%2BGGASWEp1YarQ%2FeHDWqm15vBSrxDZreLGHXbhuvaTEwfdZ53c3y%2BLGuyNVV2YSMSs9EXbqrvUj%2BZfPUGOdyZTn3GpzfKZuS4kQDb5eF2cneBZ4CePvcJI42jUcIb8YGzhbZKsidTGsxEDDIUXNqu9Grh34iwKEW6oKtQPr91dphcQD8ZleX6NaOYXWYAdF0bKi7%2BUp3aKfiN55JJ50gEa%2BPD7Ka2u%2BBhtJX%2ByBb2Hs%2FHxuF%2Fe02%2BI1llJoeC3MnGS6BUPQnxbcuVL7S%2BMp4%2BFhl9Ckri0UwI5W5JZV0n8tiG%2BS6RYoZsjsO8KJdy4IOMw6PmdpAtUjMw1TS0qfYHEAne1tUbbyr9I%2BP9X6E%2BvTetST8Cz8U6UOJYNFvtI6ZtXZPjvdOuhUwKVN9pP9tx4GPZQZe9SHpkFXDAM%2FL4t33emzRexbiT9uv5on%2Fd0g1PNzoIB8Zq32j8J0CVO5ibu5FXECczR%2B7PlM2Ac2D1Hg9db68UWKWhl9X%2BRyMN7X1L8GOqUB9BgUH6gL2Jxuu6MOCh2nNXAgfP6670nPQmx85Y4fYq4fRoUxAs4LVmUB0I2hRt%2F6NsWI4QpA0tFecHsrSxzAi7cCLSBM5%2Blvi6UG%2BwwuxsNlV0qHg9P25U5%2B%2FxwbK1l0GDKQ1rglf%2FwkU8IurxLvrwwuCmYFLFoY76V8wOF8iB8dP0c9gP9IDPDVIJ8ofk5Z5Tq0WCLjL3FcNOxC%2F8OqUx4YZ6nz&X-Amz-Signature=7c89cf5ecd4e496bac69c71cdaf9a4fd4cc67d4d2ba6ddfdd09dd8cf9a224541&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKTG5DT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3LDiOA9lIUHywHJCI%2FszU9UVMn1kKBCMTwqhjPynuTAiEAs%2F47q2bQlzF3odCaWMVZ11g4T5KKe4BwSHQY9tNcsQcq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDRxsG%2F8LeFWK6MwxSrcAwaVpbr2wLfSh09Ngl4DkhMDJLJVh9JIkD7ftG%2BseiFwghtkcAuM9nWV%2BeVrpTRmc7AuoJhUdOWkDGXVnV3bh8CIwHdBaEKcaO9%2FsvfjvqoUqVggPAovTxn%2FPD21wOBrAO%2BGGASWEp1YarQ%2FeHDWqm15vBSrxDZreLGHXbhuvaTEwfdZ53c3y%2BLGuyNVV2YSMSs9EXbqrvUj%2BZfPUGOdyZTn3GpzfKZuS4kQDb5eF2cneBZ4CePvcJI42jUcIb8YGzhbZKsidTGsxEDDIUXNqu9Grh34iwKEW6oKtQPr91dphcQD8ZleX6NaOYXWYAdF0bKi7%2BUp3aKfiN55JJ50gEa%2BPD7Ka2u%2BBhtJX%2ByBb2Hs%2FHxuF%2Fe02%2BI1llJoeC3MnGS6BUPQnxbcuVL7S%2BMp4%2BFhl9Ckri0UwI5W5JZV0n8tiG%2BS6RYoZsjsO8KJdy4IOMw6PmdpAtUjMw1TS0qfYHEAne1tUbbyr9I%2BP9X6E%2BvTetST8Cz8U6UOJYNFvtI6ZtXZPjvdOuhUwKVN9pP9tx4GPZQZe9SHpkFXDAM%2FL4t33emzRexbiT9uv5on%2Fd0g1PNzoIB8Zq32j8J0CVO5ibu5FXECczR%2B7PlM2Ac2D1Hg9db68UWKWhl9X%2BRyMN7X1L8GOqUB9BgUH6gL2Jxuu6MOCh2nNXAgfP6670nPQmx85Y4fYq4fRoUxAs4LVmUB0I2hRt%2F6NsWI4QpA0tFecHsrSxzAi7cCLSBM5%2Blvi6UG%2BwwuxsNlV0qHg9P25U5%2B%2FxwbK1l0GDKQ1rglf%2FwkU8IurxLvrwwuCmYFLFoY76V8wOF8iB8dP0c9gP9IDPDVIJ8ofk5Z5Tq0WCLjL3FcNOxC%2F8OqUx4YZ6nz&X-Amz-Signature=5d3e6d7e3c1900a8e32483584d9abb710a981633e67d03927ab2d90be392a2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
