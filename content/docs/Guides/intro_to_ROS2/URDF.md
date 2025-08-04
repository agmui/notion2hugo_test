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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHW6Y7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZ31pHeJeG6E08t7bALILJJRoFPRvS1rkloLrZxcdnkAiEA0FlfhXzR3qqy%2BN2eYcH8C%2B4sOcEc%2FjkjalzVcsymjZkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAdsO1eroIG8bBXFdCrcA6FALYiabQu0WIJogE9IRv9rQUJgfE1Ma6GCDr%2Bws6KjfInKT1Lx2w4Y3PH0wHTlrUljYyEdDZw7tQJhLQqfc44HSlMlFyP%2BXbHRbKVhDPnKJGzRuQ7zDt%2FXGDpusPmBqlVgTti%2BY1D8nEWAklLrGOlcbxmDF1mimjSERpuESXe1rUeeMTtZaZQyclFo4mT0mw%2BineJc6pBQOj3AaP074J1qZ3xVTP%2F2GcA6TZ1juxwlzJ1cGVIhkUVhX84lIMknDtTMtq3JxpHFqZyk5wlv0uN7G%2FSj3IbYrFeTP7TTMG5qAzDaka0kLkJCxY6zu%2FVPcXMLHHYmH5MgBf%2FcccEIlEwB%2FVxjCnCRlZhdyqKjYwdS12nXoEDLgR1CJedubO3KZAQ%2F0nymjVPexTt5FkCXzz%2BFvWe8uD946YqNdvE1UdmOVDQlFrLtCQ5GO1KgBGAfVHkWJWMOhvNaMz1P%2B%2BKYHRq65mQieYfFFXLCAeilD1G9oCaAKO5kI6Rulw%2BlF4glo0GJ8Fc8SdBseIYgAYGbT662O0QcyZIgG0aDjK7DlPkW2IHrEduOR1FIqJu4WcYGocKrIqyKudiOzNb1N9kgTIlDDzunK428DMw%2BLqTtkgEFUX8T9UWRSdWpvruIMPnAxMQGOqUBTtRlgDq8jj1Xf7AmWyb1xjFRzh6Azr2U9LgtEQtsS4C510Brm53ZcpLdkB%2BQBp3sRF1yhlMXPATKL5bvS9OTbg6lflsZU5EFG8fA%2Fvfe9q9WGcwKmtHRMEuzMyjNQWa8QL6N3ThZ%2FiL7YdE5USwxgrSYFFohDrrupnC775FBQKJmCsUy%2F4TfN8HbCJxvHJEUJApaU%2BVqHLCk6Ot236yIPdLEnqzI&X-Amz-Signature=8ca21751910e294ca80f563ae835e700dc8ff8fe4face8102d4803227bfa6609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEHW6Y7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZ31pHeJeG6E08t7bALILJJRoFPRvS1rkloLrZxcdnkAiEA0FlfhXzR3qqy%2BN2eYcH8C%2B4sOcEc%2FjkjalzVcsymjZkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAdsO1eroIG8bBXFdCrcA6FALYiabQu0WIJogE9IRv9rQUJgfE1Ma6GCDr%2Bws6KjfInKT1Lx2w4Y3PH0wHTlrUljYyEdDZw7tQJhLQqfc44HSlMlFyP%2BXbHRbKVhDPnKJGzRuQ7zDt%2FXGDpusPmBqlVgTti%2BY1D8nEWAklLrGOlcbxmDF1mimjSERpuESXe1rUeeMTtZaZQyclFo4mT0mw%2BineJc6pBQOj3AaP074J1qZ3xVTP%2F2GcA6TZ1juxwlzJ1cGVIhkUVhX84lIMknDtTMtq3JxpHFqZyk5wlv0uN7G%2FSj3IbYrFeTP7TTMG5qAzDaka0kLkJCxY6zu%2FVPcXMLHHYmH5MgBf%2FcccEIlEwB%2FVxjCnCRlZhdyqKjYwdS12nXoEDLgR1CJedubO3KZAQ%2F0nymjVPexTt5FkCXzz%2BFvWe8uD946YqNdvE1UdmOVDQlFrLtCQ5GO1KgBGAfVHkWJWMOhvNaMz1P%2B%2BKYHRq65mQieYfFFXLCAeilD1G9oCaAKO5kI6Rulw%2BlF4glo0GJ8Fc8SdBseIYgAYGbT662O0QcyZIgG0aDjK7DlPkW2IHrEduOR1FIqJu4WcYGocKrIqyKudiOzNb1N9kgTIlDDzunK428DMw%2BLqTtkgEFUX8T9UWRSdWpvruIMPnAxMQGOqUBTtRlgDq8jj1Xf7AmWyb1xjFRzh6Azr2U9LgtEQtsS4C510Brm53ZcpLdkB%2BQBp3sRF1yhlMXPATKL5bvS9OTbg6lflsZU5EFG8fA%2Fvfe9q9WGcwKmtHRMEuzMyjNQWa8QL6N3ThZ%2FiL7YdE5USwxgrSYFFohDrrupnC775FBQKJmCsUy%2F4TfN8HbCJxvHJEUJApaU%2BVqHLCk6Ot236yIPdLEnqzI&X-Amz-Signature=e19d86789d186e6c6272f4a318115ab0b99d4c27050a730350634479e90e4018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
