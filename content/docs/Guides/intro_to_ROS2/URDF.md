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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V66T4A4L%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5xqXfxFjlQ1nJ0%2BQURMkmPcXJPM%2BRDwJkDgaKUvIctwIgbHTP%2BzNoMSqvCZHqdW6fo7edJ36IbvS%2FH9RcGZIIao4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj0pP053uS%2Bn7muRircA5lsEBsKIbtSepV0LjwAcstyVkXPLgMAVFe7gjFb4mGs3pwvkhRToQ%2FIUhqxAoG7QVB4LcG98YV3KaGkNzYwKzfcg2K7QCjJ2UOmz%2BNbvWBV2x12QUpkZRZfqb%2FOeWos%2BOoR%2BdJ3B6wovfsvsi6sd3l1FQVvVuPvpRGdFKd4OxF9PoHpx7zTEMOcd%2BL6n0t7p%2BKYSFpV7kJAW1T4J%2BWpMtigamUQB%2FZURG0Fgm6lEdP79UuXwIyNVeabD43qt%2Fu8Pfs68c%2Blc1HKU2HzzvBkk4NySw9lhUEVOFmxUEqdddn15fUDTPPoTbw3%2FHgasJpMxYIb6Mpr1etJ5sCVnbBB1gmi7I9tm2Wlh9%2BSJa%2FWG126EPynPjPk8QQCuUQSEAPNFqx%2F26USoPGiZF1DcAdjtgSIKDhunEGAxHPPhWba4Lb%2B2HEkQc9IkGPhU83A%2F2Ack0SdE8SAv0HWWi88BZQyNpltSOjTJQV91uKX62ch6FaxSb8lJaBfa%2FxxPAnm9G06NQdsf3M4Y4wb0%2Fh0zzMSUP%2F3KWbMBN7tQlNdEXt3tLf09vAhI9tvSP17156e99OwDO58etflzTIZ%2BjLqEPXTJ4PdqwVJzuv0y0Qpw9zbtjH0wQ%2BXbbAnvvbnxIchMIzButMGOqUBidArBxr7tegWmyZlFQR6zPQHG83eeLWxb9G7UUDJ8qxnvxMofK7AfPHDTvuwogL1w3c%2FociMKZUOyJYMzlrMMg%2Fs2qvjuF%2BwwZ8oaQjBwLOqUudrtvmVwv2x%2FWnS6LUoyORLemufCBEOZVsjn5CC5n0QLu343%2B%2FE5L%2BL36DFljZCvNiH5Ol3wdszwcHGL61iWCN2AcKXxI%2BH44u%2B%2F6sn7IuZM4%2BF&X-Amz-Signature=45fd50211d15acf00dc2ed139e11a5ba87a8ef4c818b9e75145a9c36ad0c52cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V66T4A4L%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5xqXfxFjlQ1nJ0%2BQURMkmPcXJPM%2BRDwJkDgaKUvIctwIgbHTP%2BzNoMSqvCZHqdW6fo7edJ36IbvS%2FH9RcGZIIao4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj0pP053uS%2Bn7muRircA5lsEBsKIbtSepV0LjwAcstyVkXPLgMAVFe7gjFb4mGs3pwvkhRToQ%2FIUhqxAoG7QVB4LcG98YV3KaGkNzYwKzfcg2K7QCjJ2UOmz%2BNbvWBV2x12QUpkZRZfqb%2FOeWos%2BOoR%2BdJ3B6wovfsvsi6sd3l1FQVvVuPvpRGdFKd4OxF9PoHpx7zTEMOcd%2BL6n0t7p%2BKYSFpV7kJAW1T4J%2BWpMtigamUQB%2FZURG0Fgm6lEdP79UuXwIyNVeabD43qt%2Fu8Pfs68c%2Blc1HKU2HzzvBkk4NySw9lhUEVOFmxUEqdddn15fUDTPPoTbw3%2FHgasJpMxYIb6Mpr1etJ5sCVnbBB1gmi7I9tm2Wlh9%2BSJa%2FWG126EPynPjPk8QQCuUQSEAPNFqx%2F26USoPGiZF1DcAdjtgSIKDhunEGAxHPPhWba4Lb%2B2HEkQc9IkGPhU83A%2F2Ack0SdE8SAv0HWWi88BZQyNpltSOjTJQV91uKX62ch6FaxSb8lJaBfa%2FxxPAnm9G06NQdsf3M4Y4wb0%2Fh0zzMSUP%2F3KWbMBN7tQlNdEXt3tLf09vAhI9tvSP17156e99OwDO58etflzTIZ%2BjLqEPXTJ4PdqwVJzuv0y0Qpw9zbtjH0wQ%2BXbbAnvvbnxIchMIzButMGOqUBidArBxr7tegWmyZlFQR6zPQHG83eeLWxb9G7UUDJ8qxnvxMofK7AfPHDTvuwogL1w3c%2FociMKZUOyJYMzlrMMg%2Fs2qvjuF%2BwwZ8oaQjBwLOqUudrtvmVwv2x%2FWnS6LUoyORLemufCBEOZVsjn5CC5n0QLu343%2B%2FE5L%2BL36DFljZCvNiH5Ol3wdszwcHGL61iWCN2AcKXxI%2BH44u%2B%2F6sn7IuZM4%2BF&X-Amz-Signature=7b72b5d24bacd4340deac6ed9680d2e05f39d2f8f2188f5ff4650a7e12fac59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
