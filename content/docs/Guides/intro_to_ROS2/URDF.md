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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XNQRNZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDMjDorIwqxKOJ71Xu0YKbbCzFnpLHRUit9%2BfNDH9Nv%2BAiEAgenhXvMz8PJ5QVWYN%2FsKq2TTK6Ojv8QCPN6eFVqRmvQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBuVGPHSJeROBcpEwSrcAxYIUmt51nMbxq02vBUEdNpoeey38uRZVUu2Px4yx9YQZmpLrUbQBYMXJRJBVC7Urjk4UIfVm5n4n6ZijAPYwS8xDnih%2FdoSomAA27Q65GGTIu%2F5TKgnok5fOAuPR62oj9WNFVUXAfD%2BAcgnRWmGh3QuMmuKY6%2FBqlJXOseB0m9SAEwulj%2BUO3I1cn9y6RjTpPgD%2FS2F9h%2F2dbZLMQBSnICjbawi9dCA17LtyGoiK9IivD6HQZ0w1K%2FMNL4geMcHXh3fs%2BNJaX3hOpwFOWGMCZkvYOj1VpYYyhAyd4qxTG%2Bd%2FVYhRa5QJDpnfKEqyQnw5E8eOl0if4C2lLIsOewwvvorOal2XH5nyBeJ62QmG3hDPlXnABDWgY9ucYSkR7tJa1sHPV2%2BwSeGWMHC1iZdkYFJCursPtGiFAqV4EMxB9qhq3%2F0iyQbnZf%2FYTMC2bXIQSrVqgHMQFWX97uXAwGJ4Z4v%2B9SBi7UiluXqHkLQ6zBpZ1Rg%2FqaOY5Xy1MHDwL3yyPBJELOkrde4p%2BRmSfo28fZw3wav51ICPKRtwfv63tW51xgzGpwwot8FkvRyNyqAG6sRlNGMuMIANxoxc7stU3PUSPGNWs0ZazbcNRm5LPjgLe3FrCSYeNvBeLZZMKS3%2FMQGOqUB4LZnIGrfXWNweN2n8TkFFXxJyxoUuLndwHrEK%2FVnnJhJLvX334JkBJcjEiQjMRmWcCXACLaVR2GWZSFZkVArWT6Ovn%2FYadqYQRznaJLCJqNZ1N9MYsEodals9KfNCU6f43Xzi2789HK3cvQqwn%2FdlL4qdYVVj8HqPAl1mojl7bgfeGEnYqObuGXj2%2FdaxmxHrOsW9FnQ6xz3blxfyYtjwVLqayb1&X-Amz-Signature=6ae7a21b2d3d18a379a79475da225648c2c76fb2b82b631b602ac47bd2e61b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XNQRNZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDMjDorIwqxKOJ71Xu0YKbbCzFnpLHRUit9%2BfNDH9Nv%2BAiEAgenhXvMz8PJ5QVWYN%2FsKq2TTK6Ojv8QCPN6eFVqRmvQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBuVGPHSJeROBcpEwSrcAxYIUmt51nMbxq02vBUEdNpoeey38uRZVUu2Px4yx9YQZmpLrUbQBYMXJRJBVC7Urjk4UIfVm5n4n6ZijAPYwS8xDnih%2FdoSomAA27Q65GGTIu%2F5TKgnok5fOAuPR62oj9WNFVUXAfD%2BAcgnRWmGh3QuMmuKY6%2FBqlJXOseB0m9SAEwulj%2BUO3I1cn9y6RjTpPgD%2FS2F9h%2F2dbZLMQBSnICjbawi9dCA17LtyGoiK9IivD6HQZ0w1K%2FMNL4geMcHXh3fs%2BNJaX3hOpwFOWGMCZkvYOj1VpYYyhAyd4qxTG%2Bd%2FVYhRa5QJDpnfKEqyQnw5E8eOl0if4C2lLIsOewwvvorOal2XH5nyBeJ62QmG3hDPlXnABDWgY9ucYSkR7tJa1sHPV2%2BwSeGWMHC1iZdkYFJCursPtGiFAqV4EMxB9qhq3%2F0iyQbnZf%2FYTMC2bXIQSrVqgHMQFWX97uXAwGJ4Z4v%2B9SBi7UiluXqHkLQ6zBpZ1Rg%2FqaOY5Xy1MHDwL3yyPBJELOkrde4p%2BRmSfo28fZw3wav51ICPKRtwfv63tW51xgzGpwwot8FkvRyNyqAG6sRlNGMuMIANxoxc7stU3PUSPGNWs0ZazbcNRm5LPjgLe3FrCSYeNvBeLZZMKS3%2FMQGOqUB4LZnIGrfXWNweN2n8TkFFXxJyxoUuLndwHrEK%2FVnnJhJLvX334JkBJcjEiQjMRmWcCXACLaVR2GWZSFZkVArWT6Ovn%2FYadqYQRznaJLCJqNZ1N9MYsEodals9KfNCU6f43Xzi2789HK3cvQqwn%2FdlL4qdYVVj8HqPAl1mojl7bgfeGEnYqObuGXj2%2FdaxmxHrOsW9FnQ6xz3blxfyYtjwVLqayb1&X-Amz-Signature=1b294871fccbc663e143e0353ffa73823adc210d0d2c9f5efad014fb8132454a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
