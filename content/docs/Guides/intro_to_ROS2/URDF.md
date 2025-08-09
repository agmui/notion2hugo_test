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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHGQC5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCKwq9pyJZn1lPDop%2BMzlkuVWl1EAOogb1Gpc6YN4kGJwIgIjrUqpKxq1HJv78ZrBukXqTQCkuFoEKpvfR7PWoDzt4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6Iov%2FEGAjRUmhutircA9OBVkZP2OGt8nf5R5k3L0AW2qWloplUvbUBguGcgeGyeCHYStCZ4Rqn5vvgEzJ8yYxubgdNHE%2BPVgmRbDJOzSK7hRCo%2Fh%2FrqZeXe%2BNy8M4NFfgI1%2Fi48qKFw51eRdMpuI8X4ItkgHOTMNwWWdMtLKf6VIbHVhpVUyJ1%2F5Z7S1EhYlDwZYxxzoaUQ455cHFenM3Pedi5%2BGARiZRBppCOtjEJ7fcfVY68iGFuBi9fL9Y%2BPnYj3%2FoMmDwAJCE5eIes0JfcaEKi%2F4LflizzNGMCZvFYsFiql1TTxo2vnO%2FwkVXwxGAjEmHm9bpcwr6pf0uW1eUu5jzyVyxTeAaKK1SESOgH%2FEol0d8qxc3mOzbLknpyyoeQpePMdOyvJHg2ifXm%2FBTMezCpLBviIThnyz5d7w7O2GbWryRnUjCKixBSttdiMbxWKuwcl5jePmSd0z7TbhTFVGP5Hhm6%2F1Uzzm8cYoi3E9cG8NxtbYr%2F%2B37yF%2BMbShJqyhJHi077Fm4tY0NLpMgnMoMlHwGqhd4Tv0ncLYp8W9D5WX479sp0g2INk4XWUptJG4POVQgKWf77zhXbeM6%2BO6fF176AdhDIBB%2FUpxWmKgHKNpMCoI0tUN3As5wPqXhrIdErTRYMtcyOMOXE28QGOqUB8ReY%2FZevUvZGbtvu%2Bzcsa4vSNUYT%2BI0KInCWM%2Bld%2FsloMK6qg2XK%2FdCDjljsPfSbJ%2FJf0P86btszKGAVQiEc17JPIuWqMsEhLs5572VWgQ7pDrUSEK5BGr6zPdIzSCVwSaT7%2Fw9zmJIGEULvJN%2BTK0DNvHJ4hYkMaZVajKXInJ%2BD%2B41Z1HKSOCPnDO4l4sFNN1OEewUgAo9fQKmccIv%2FkQwdwWHX&X-Amz-Signature=443804882c1306d5ac1c894c22062f5d89b6f432405726670d32d029b851e155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHGQC5A%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCKwq9pyJZn1lPDop%2BMzlkuVWl1EAOogb1Gpc6YN4kGJwIgIjrUqpKxq1HJv78ZrBukXqTQCkuFoEKpvfR7PWoDzt4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6Iov%2FEGAjRUmhutircA9OBVkZP2OGt8nf5R5k3L0AW2qWloplUvbUBguGcgeGyeCHYStCZ4Rqn5vvgEzJ8yYxubgdNHE%2BPVgmRbDJOzSK7hRCo%2Fh%2FrqZeXe%2BNy8M4NFfgI1%2Fi48qKFw51eRdMpuI8X4ItkgHOTMNwWWdMtLKf6VIbHVhpVUyJ1%2F5Z7S1EhYlDwZYxxzoaUQ455cHFenM3Pedi5%2BGARiZRBppCOtjEJ7fcfVY68iGFuBi9fL9Y%2BPnYj3%2FoMmDwAJCE5eIes0JfcaEKi%2F4LflizzNGMCZvFYsFiql1TTxo2vnO%2FwkVXwxGAjEmHm9bpcwr6pf0uW1eUu5jzyVyxTeAaKK1SESOgH%2FEol0d8qxc3mOzbLknpyyoeQpePMdOyvJHg2ifXm%2FBTMezCpLBviIThnyz5d7w7O2GbWryRnUjCKixBSttdiMbxWKuwcl5jePmSd0z7TbhTFVGP5Hhm6%2F1Uzzm8cYoi3E9cG8NxtbYr%2F%2B37yF%2BMbShJqyhJHi077Fm4tY0NLpMgnMoMlHwGqhd4Tv0ncLYp8W9D5WX479sp0g2INk4XWUptJG4POVQgKWf77zhXbeM6%2BO6fF176AdhDIBB%2FUpxWmKgHKNpMCoI0tUN3As5wPqXhrIdErTRYMtcyOMOXE28QGOqUB8ReY%2FZevUvZGbtvu%2Bzcsa4vSNUYT%2BI0KInCWM%2Bld%2FsloMK6qg2XK%2FdCDjljsPfSbJ%2FJf0P86btszKGAVQiEc17JPIuWqMsEhLs5572VWgQ7pDrUSEK5BGr6zPdIzSCVwSaT7%2Fw9zmJIGEULvJN%2BTK0DNvHJ4hYkMaZVajKXInJ%2BD%2B41Z1HKSOCPnDO4l4sFNN1OEewUgAo9fQKmccIv%2FkQwdwWHX&X-Amz-Signature=1024a4588f2b96712d7b6c946a8ef9103c1a4e60e70f1d0f50af7d0eec37424c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
