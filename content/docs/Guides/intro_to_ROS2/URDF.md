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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PP42JP6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZLyW%2B2p84ubvHdwl3bpwE42kRr4sjLYNAcH9GhaOahAiEAtSLcjEXOSNvHtFkHua3b3v1N3MmSHSY5IXyULAPFIncq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOx2SCJd0uv7PwuC2SrcAyJ8fRr3ziHG38NvhJTrM76awojg9SUPkA2PX0yig5aCynQVvnAq%2FdCHeOrousvcHONWIHiRMOZ0dKC0lsJDOhvxMmuF6Po53%2F1EFGH5qprdBDGla%2B6aPgqEEvZer%2BtRflQwehF9JxD0Vq4481no6fkCUseyTWIYxD4HJLzw0QawNBkCzVxH90g0fPX1lSQ4vMkaCI%2F1jOAPAU%2BzNx93TUhGW9y5IdkFaolaOsil6P1NuChNDu8WjqRs91Mbsa0HVQR8hVIwK9f4HsKGhCyWuzXj9AoHAMf9XstM7Wlu3kGfboTlUMBgD5lLhU33P1te9xh%2Bq2t3wc1zxGw8RRh9EbbhT8hvcZhorKlZO%2F3dBBpaRglmqiJfZngOvQyTAHx8MBhCzc37z4dKEvRD1QCbmgbJXfIDcRXhbuf45QRnXvqTH8wrZ60hNoZrG6pkPSNHZL9lkUJQhKeBlvkPpPyi4hVUpZmOWgmuoWRbsoRCa2%2F3mGrLbBVgyIqLw0P0shMtarOxy5IgGu6N4tRr4jhu8FCvmsWuJ2M8Hk%2BhzWshv%2B2GcvHzX5umcKInPCo%2FqIgW60xddZacF%2FZHi79f7k3R%2FU6rSkeZOFDww04bd3X3PWn3Y97BTkfW8bttpOJCMJXG%2Fr8GOqUBnxW3DmRMUI114H5HtaKRpAD%2BTtjLWNXEsk0bYkp9yZFEA7tknRXqyscJeIbIDb5len8%2FbqYgfQyAPKCVWnnB%2BiLxMkA%2Bkmj%2FvHWQAGMLc7sXrgvTytyRxNyccd3TMDSyCeYoD%2FtJJo4exedpAfApXiOe988PAhg3O%2Fi62Z1TgBXxv7w2ogKBlt2%2FiCHooo3Nq0BuuNHBBiewiGwnRqi9mBELZidC&X-Amz-Signature=c9a71de0a03ba0830409b7d267848ada39f0ecc832fd5b863c1274ebed67fbc0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PP42JP6%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZLyW%2B2p84ubvHdwl3bpwE42kRr4sjLYNAcH9GhaOahAiEAtSLcjEXOSNvHtFkHua3b3v1N3MmSHSY5IXyULAPFIncq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOx2SCJd0uv7PwuC2SrcAyJ8fRr3ziHG38NvhJTrM76awojg9SUPkA2PX0yig5aCynQVvnAq%2FdCHeOrousvcHONWIHiRMOZ0dKC0lsJDOhvxMmuF6Po53%2F1EFGH5qprdBDGla%2B6aPgqEEvZer%2BtRflQwehF9JxD0Vq4481no6fkCUseyTWIYxD4HJLzw0QawNBkCzVxH90g0fPX1lSQ4vMkaCI%2F1jOAPAU%2BzNx93TUhGW9y5IdkFaolaOsil6P1NuChNDu8WjqRs91Mbsa0HVQR8hVIwK9f4HsKGhCyWuzXj9AoHAMf9XstM7Wlu3kGfboTlUMBgD5lLhU33P1te9xh%2Bq2t3wc1zxGw8RRh9EbbhT8hvcZhorKlZO%2F3dBBpaRglmqiJfZngOvQyTAHx8MBhCzc37z4dKEvRD1QCbmgbJXfIDcRXhbuf45QRnXvqTH8wrZ60hNoZrG6pkPSNHZL9lkUJQhKeBlvkPpPyi4hVUpZmOWgmuoWRbsoRCa2%2F3mGrLbBVgyIqLw0P0shMtarOxy5IgGu6N4tRr4jhu8FCvmsWuJ2M8Hk%2BhzWshv%2B2GcvHzX5umcKInPCo%2FqIgW60xddZacF%2FZHi79f7k3R%2FU6rSkeZOFDww04bd3X3PWn3Y97BTkfW8bttpOJCMJXG%2Fr8GOqUBnxW3DmRMUI114H5HtaKRpAD%2BTtjLWNXEsk0bYkp9yZFEA7tknRXqyscJeIbIDb5len8%2FbqYgfQyAPKCVWnnB%2BiLxMkA%2Bkmj%2FvHWQAGMLc7sXrgvTytyRxNyccd3TMDSyCeYoD%2FtJJo4exedpAfApXiOe988PAhg3O%2Fi62Z1TgBXxv7w2ogKBlt2%2FiCHooo3Nq0BuuNHBBiewiGwnRqi9mBELZidC&X-Amz-Signature=e825ae94888b23513522e6c5b3859c9151d47078059ae84c7e446681a24954e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
