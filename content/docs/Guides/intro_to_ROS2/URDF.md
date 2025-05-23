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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZETQIUA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBFl6oRxxWCo%2BR7HiQaQpvnd0MmJePGOLlYTwDwG0VaiAiAu0zTMzce41nZN3A5d2mQMXkY%2BdEOPR%2F%2FE3MLyXrmYASqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2BrNXQeVMXqwQcLmKtwDgyUn3eOBnnhh%2FGqeCtLcbvr6YtslnPCs9hWJE0pa9UoTRaBOqYYZxVyKRb21TaTDjJEmtynFH7Hx8bUHAos1AitTawXD%2FHWKFM91iLVxaLGURWYXzmnxvKvtDLCIgmtpurvsPq%2B%2FSiTOt61tVjhtvFhvoDGP2COlzvxfnkDlt0fzFSque1J2kYluJylbkzA8zVFCNB5XXyS2bE24cZjSN2S5aEp1RvgCzAxzPCUIFtGuLyXEH5yOFusu26lIz45GnU0fMMQIs6s%2BzlXDO%2FiCcA6ev9k8KX2wcIo4w8jSdutUF4CFi3o9zpqsEqCO2ol2%2FyrGIfbZlHhAb9DSHKDJO4YLLABEJ0%2B1NML4G%2BurEnPx%2Fh%2BgGr42%2BQZ3C%2FC4KtsCRSNyAUcWlPRAur3TpY2D6Jxr3%2BUmKDMj4b%2BK49dYOTtP0JvedqtOEDD%2FVaKiaOqV7WJi2tqe5iUnnjvbmIv7sklzbvH4pN09etFuO1vTlGKzJAQ1NDKU%2BKuGaLxdaF7io0Sa2drDbRJvvi%2BkDq667p4xYv%2B4FdwAW7LDzvsVieGCA7MHG2bGub%2BdYF%2B4Jg0BkyfmznrnR5Lxq7obNdApHHYosvlKb5g1Rj7l0to%2BKO40gxh%2BngT5Az026Tkwu%2FLBwQY6pgEiUA%2FGXk9gEGX4KFSIw5%2FibqTH4%2BpRlB5Q6w%2BOFk%2BTtJ3%2FezAooCqDp2BGRtEQBUYztz0iqhDUfblhfKRfVeekcKuYc3jZtNFuawQjMi5qgnnV9WZqRxdxn%2FJi304zMJZPVoE2QQbOBnkydpf9LuV90b9YxdnmBVUbgtaBHTN0Z74taH4RTKomrZU6BHmnq6JbB8Tz%2FrybtYIiln%2BLjGi9FZXdbmty&X-Amz-Signature=822a34593b095fd796a6fbc9593f96f03f6330df04f335c417aaced97c9270a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZETQIUA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBFl6oRxxWCo%2BR7HiQaQpvnd0MmJePGOLlYTwDwG0VaiAiAu0zTMzce41nZN3A5d2mQMXkY%2BdEOPR%2F%2FE3MLyXrmYASqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2BrNXQeVMXqwQcLmKtwDgyUn3eOBnnhh%2FGqeCtLcbvr6YtslnPCs9hWJE0pa9UoTRaBOqYYZxVyKRb21TaTDjJEmtynFH7Hx8bUHAos1AitTawXD%2FHWKFM91iLVxaLGURWYXzmnxvKvtDLCIgmtpurvsPq%2B%2FSiTOt61tVjhtvFhvoDGP2COlzvxfnkDlt0fzFSque1J2kYluJylbkzA8zVFCNB5XXyS2bE24cZjSN2S5aEp1RvgCzAxzPCUIFtGuLyXEH5yOFusu26lIz45GnU0fMMQIs6s%2BzlXDO%2FiCcA6ev9k8KX2wcIo4w8jSdutUF4CFi3o9zpqsEqCO2ol2%2FyrGIfbZlHhAb9DSHKDJO4YLLABEJ0%2B1NML4G%2BurEnPx%2Fh%2BgGr42%2BQZ3C%2FC4KtsCRSNyAUcWlPRAur3TpY2D6Jxr3%2BUmKDMj4b%2BK49dYOTtP0JvedqtOEDD%2FVaKiaOqV7WJi2tqe5iUnnjvbmIv7sklzbvH4pN09etFuO1vTlGKzJAQ1NDKU%2BKuGaLxdaF7io0Sa2drDbRJvvi%2BkDq667p4xYv%2B4FdwAW7LDzvsVieGCA7MHG2bGub%2BdYF%2B4Jg0BkyfmznrnR5Lxq7obNdApHHYosvlKb5g1Rj7l0to%2BKO40gxh%2BngT5Az026Tkwu%2FLBwQY6pgEiUA%2FGXk9gEGX4KFSIw5%2FibqTH4%2BpRlB5Q6w%2BOFk%2BTtJ3%2FezAooCqDp2BGRtEQBUYztz0iqhDUfblhfKRfVeekcKuYc3jZtNFuawQjMi5qgnnV9WZqRxdxn%2FJi304zMJZPVoE2QQbOBnkydpf9LuV90b9YxdnmBVUbgtaBHTN0Z74taH4RTKomrZU6BHmnq6JbB8Tz%2FrybtYIiln%2BLjGi9FZXdbmty&X-Amz-Signature=23464cd2ec056bd040dfc86155568b98d82e09376f6b7790b4d9278d0ed01bda&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
