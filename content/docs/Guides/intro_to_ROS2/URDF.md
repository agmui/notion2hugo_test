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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77PD2E6%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELtCY8vSal7Q%2FFQJ1RFMb8Og7hxvcSHAkOlS8l1PWefAiBwv5%2BLEx2T%2Bqp2qD5bXgGcGG2%2B3j1XdtnL6JnzanVs3CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7MHZDVVp1c9UaEJKtwDcZHtHW8dFyrxDFkrg8RPhv3a0TqanirfTWH%2Bf%2FICc3fk9lqbYo7A8zFdF%2BaROh9nfiIZ0Aeo25zZrVz4%2FX0GZd6nolfOo6k4YBbo4Kef4VG1hP9%2BNURiA7tIzpkaANSII%2FX25etH4Cy%2F%2FB6wUcG%2FtK0schsce836AkgEnwj2ZkWVCpQ7I4nGzHFdMHLwN0A38OG1Ey4LYxaJAflSaOGRMZ5PPy5vS4lr3ODFPLdb3IdzmPgVHxHWCbusoMVJcAuEfibTqge2Jgo225KD6cP1rUpQJqi9u7uKvkJvEIakaIQHLRWMHuXcFcvMJp7p%2F65rJ8eOkDI1jxTgZS3TJbOU2jewmpo1yjyi185pxRVjqsuWo%2BbXli2qNw0bFnNsWVK47E7PuFHE8%2B%2FEVHpEQxrIVfxKU99spo7P75vLsC7U%2BQvi5YU%2F3zratWBkwleERXngpYwAwAKFUoop6wNufwW7fkcWRJRSkkBuAjZfdWhTkiWJMU0s%2ByrBjc%2BDx%2FKZTUiaNK8SdeeCzOxoD1FXetrJGkN8fadWrG2xSxTBgE%2Bk0AsbB%2BPF7ssPWwZo9Cn9WEXg%2FfYZljwU%2BNYMWDnAcsWDSBzxLnO7wj23xmBjyNwlbzIUuyHqBi16uDd0A1kw%2BqOBywY6pgF1ocJE2UqUfDqS%2Fh2x4g7%2BzbITNQx6Uz0rJEPwuQLE4UBqEwxw850rXlEttPaUQwDe7F7%2B4Wbz3vLsGtUnIirc2DtxpenHuO8JtC9MJHmaSO8TDjQ1Ib7AN9gJfWhJK519bdoszrH8Ef8FY6ki2F7%2F8voFLBJELvgKI083ZyOY52yXTroqJx4RTTU6b9vSOln%2Fb3id%2Bt0TXB5HxfhIdYOpA0Wz6ftf&X-Amz-Signature=e2437909f4f38a0d5cf0de9bfbfd2aa5b9fe9c31d25dc1877d35b3419426c2b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77PD2E6%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELtCY8vSal7Q%2FFQJ1RFMb8Og7hxvcSHAkOlS8l1PWefAiBwv5%2BLEx2T%2Bqp2qD5bXgGcGG2%2B3j1XdtnL6JnzanVs3CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy7MHZDVVp1c9UaEJKtwDcZHtHW8dFyrxDFkrg8RPhv3a0TqanirfTWH%2Bf%2FICc3fk9lqbYo7A8zFdF%2BaROh9nfiIZ0Aeo25zZrVz4%2FX0GZd6nolfOo6k4YBbo4Kef4VG1hP9%2BNURiA7tIzpkaANSII%2FX25etH4Cy%2F%2FB6wUcG%2FtK0schsce836AkgEnwj2ZkWVCpQ7I4nGzHFdMHLwN0A38OG1Ey4LYxaJAflSaOGRMZ5PPy5vS4lr3ODFPLdb3IdzmPgVHxHWCbusoMVJcAuEfibTqge2Jgo225KD6cP1rUpQJqi9u7uKvkJvEIakaIQHLRWMHuXcFcvMJp7p%2F65rJ8eOkDI1jxTgZS3TJbOU2jewmpo1yjyi185pxRVjqsuWo%2BbXli2qNw0bFnNsWVK47E7PuFHE8%2B%2FEVHpEQxrIVfxKU99spo7P75vLsC7U%2BQvi5YU%2F3zratWBkwleERXngpYwAwAKFUoop6wNufwW7fkcWRJRSkkBuAjZfdWhTkiWJMU0s%2ByrBjc%2BDx%2FKZTUiaNK8SdeeCzOxoD1FXetrJGkN8fadWrG2xSxTBgE%2Bk0AsbB%2BPF7ssPWwZo9Cn9WEXg%2FfYZljwU%2BNYMWDnAcsWDSBzxLnO7wj23xmBjyNwlbzIUuyHqBi16uDd0A1kw%2BqOBywY6pgF1ocJE2UqUfDqS%2Fh2x4g7%2BzbITNQx6Uz0rJEPwuQLE4UBqEwxw850rXlEttPaUQwDe7F7%2B4Wbz3vLsGtUnIirc2DtxpenHuO8JtC9MJHmaSO8TDjQ1Ib7AN9gJfWhJK519bdoszrH8Ef8FY6ki2F7%2F8voFLBJELvgKI083ZyOY52yXTroqJx4RTTU6b9vSOln%2Fb3id%2Bt0TXB5HxfhIdYOpA0Wz6ftf&X-Amz-Signature=15efee4ec462f79ab1b4ab2e38cda91db4773d145e38a7ed34578d869e0bd85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
