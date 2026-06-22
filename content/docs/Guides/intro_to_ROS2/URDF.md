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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YNNDXR%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD1uT1vSDKU%2BlQUpSn6aX66Lf0%2BHLg5M0qOJbOh1PQ1FgIgSCstidvmHOBwv6kMtxxlqoPWBDYv89f7pdqHt%2BovjlYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmxCQS7aHNe%2Bpz%2BvCrcAxGXl346wO0e45lSxjHKgJITwvYf8mVLFLbmKi0r5Db4inUHF7k0nR9flpjzR%2FTTbSH3A36%2BamEWn8Sl%2FJJVoP%2FIJeOA5P7niceQ5NOwah1QMLvwcrqsB0m2Bd82LBzAQwkRiTx5NSk%2Ff%2BsrpR6PoV3MG%2FbN9ErNuStDhPdmecF6XtgcxKqXIHqryrtbkPsTtjrGTY7HljlA9%2B0iYe%2F%2B9Q26JNOv83VgtvfzA5Mbgy1y%2FxznqfLQgaDFMgkBgQZHtJAaNgqz%2BxaLxrn6Y9Fq08wt3L0%2BB0THMufM2kzYvBPaEF5E%2F3qGfYwpX9n3gTjt0dSXLEJYZt8IsPDV4u6nEyBKHhLfPBumv2o6s6Or%2BTtS3pAnoUsBZ3kfKmeFuZbCEahYch6ZLEiOCHYij9JvAFGdvVbEZTH8jP4WBVOXED8A40XLbq9uhYb6xGA%2BbET4F%2B0%2B1B61dK4nua8Ks7DjbBgGxpDwM7eJw49GwY8X%2F3Zjc4kK3qziLf1US0%2BRozOLs7fk6Tt9AYDpE1dhEw32W4RR3dCtCOa55YJQxO51IxvFpJ5QurvBum6aVFt3La5jnD1x0%2FT3fONN1UdxHZ5RQBS4EeDaLv5%2F0UnTszrg%2B%2F47EkSelXib%2FmiCVS07MIHX4tEGOqUBTcTae89uu215bMu8NnLpMfjTXC1RcsrgMewpUUJV85oN2xFMpvMSEO0NBAyWNpwvn6510c1qkLTikgQea2wgrArU7XsHFXK%2FTxqnBiDeThJ%2FU6Vplo1sb9R8QlCJ3WFz3re7Uv%2FinEIo1V0ukMEoh4CQ0PSqWhxucia7IrvlTa7HK78Lk5RQLODk1r5uXrXx8Mlz6l2TE4N0OxOIMcnEm3ZIo9V0&X-Amz-Signature=71654467d14ca7cb3b2d0e5479102890f6c8121ff7a6d4fba65303d18004ee59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YNNDXR%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD1uT1vSDKU%2BlQUpSn6aX66Lf0%2BHLg5M0qOJbOh1PQ1FgIgSCstidvmHOBwv6kMtxxlqoPWBDYv89f7pdqHt%2BovjlYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmxCQS7aHNe%2Bpz%2BvCrcAxGXl346wO0e45lSxjHKgJITwvYf8mVLFLbmKi0r5Db4inUHF7k0nR9flpjzR%2FTTbSH3A36%2BamEWn8Sl%2FJJVoP%2FIJeOA5P7niceQ5NOwah1QMLvwcrqsB0m2Bd82LBzAQwkRiTx5NSk%2Ff%2BsrpR6PoV3MG%2FbN9ErNuStDhPdmecF6XtgcxKqXIHqryrtbkPsTtjrGTY7HljlA9%2B0iYe%2F%2B9Q26JNOv83VgtvfzA5Mbgy1y%2FxznqfLQgaDFMgkBgQZHtJAaNgqz%2BxaLxrn6Y9Fq08wt3L0%2BB0THMufM2kzYvBPaEF5E%2F3qGfYwpX9n3gTjt0dSXLEJYZt8IsPDV4u6nEyBKHhLfPBumv2o6s6Or%2BTtS3pAnoUsBZ3kfKmeFuZbCEahYch6ZLEiOCHYij9JvAFGdvVbEZTH8jP4WBVOXED8A40XLbq9uhYb6xGA%2BbET4F%2B0%2B1B61dK4nua8Ks7DjbBgGxpDwM7eJw49GwY8X%2F3Zjc4kK3qziLf1US0%2BRozOLs7fk6Tt9AYDpE1dhEw32W4RR3dCtCOa55YJQxO51IxvFpJ5QurvBum6aVFt3La5jnD1x0%2FT3fONN1UdxHZ5RQBS4EeDaLv5%2F0UnTszrg%2B%2F47EkSelXib%2FmiCVS07MIHX4tEGOqUBTcTae89uu215bMu8NnLpMfjTXC1RcsrgMewpUUJV85oN2xFMpvMSEO0NBAyWNpwvn6510c1qkLTikgQea2wgrArU7XsHFXK%2FTxqnBiDeThJ%2FU6Vplo1sb9R8QlCJ3WFz3re7Uv%2FinEIo1V0ukMEoh4CQ0PSqWhxucia7IrvlTa7HK78Lk5RQLODk1r5uXrXx8Mlz6l2TE4N0OxOIMcnEm3ZIo9V0&X-Amz-Signature=ac8c1376f488d09f125851ca5ab680d5795596e5fc88768fbdc29b068d9a8ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
