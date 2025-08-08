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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6D3DFNN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDyw5V94a%2FePtpY5p%2FgEyezT31vvqgKbxsUaIvQKs0nXAIgFoQKCjZVJTHh%2B8xsKnOFADXDlCsTWOntF8iZemMSjzQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrNlRY7B7UYqt%2FqxSrcA%2BYxGbAdmzzjnti%2FeusBsFZv5NRRNj5JJrMqydsy0R%2FswjMl8uHHOU0bPBSeRCizLdtv8s38RbmAr220Px44S1ZvPYm1PkNJjVxuCgW01sJDtEmZTIMUEj57JxkwCwaI2Jd6Z%2BamNiJeoYbq8hmp78k6LBx%2B4sLpoHCbQNvQ3VoswC7QATznP2ec5ta1s%2BkLEYBzcnRjatMqo3Q7oKxBkvLH7EVm4zuNVoIMHyrfe13q5rrX9u%2BKRd0ttlcWsOQ%2FeCij1f1EU1CrhRVk38gOaJVmUzckwqq7Ljl9fk7eGrC67kisZ8LrKuu4%2BnJVTtkbeXWVNz7855Z9UCWWVOS6wGa9cmdpIoVEO6cL4Ye6%2F2U7pI8G6IIzlPRbc9Pzw2lqViwHw7404zvMRa%2BpQTrHupCjljT8xT%2BulENDhC8%2BXKnFo7KdPGCTiWpwvNxxybbOAwrkrxBhyEDlZ%2F4crOhk2XNUo60FX3tixA2Q%2FaAjtLWac67uyzRonymBjBEDHgq%2Fd%2F8R59xe7pxdms%2B5SX%2FV%2BJrJNEazyiUqtwH0f5jpgrtlU8nG2L%2BZQE8VSXSzQ5PE%2FB8srARUH35wjd%2F9%2BWUsZYRDrm7HqolEHhtXJgnZwu3wWbgAHISXgKSfWOsHMNvH1sQGOqUBwS3emgDFB1jVNQnjt5UvBNQY1uEpkQ79wJLmCwXZ6%2BE5XIMSiH0pVGnw3cpSg5XqUNlIpO0L8N%2F5vc22u6TczU8JhtLfC08AR9YnDj14v7zSnh337bz8qHDwtV%2FCeUsgTDIOS2prNXT2vKGeH0VT5RxJaQEOHRWXL9vI%2Bp5bU2z29iHW6T%2B9ml0gXY3aPBACs5R77L0YVX0EOHSmbj3oMQd70AOm&X-Amz-Signature=511f1ec0cc9b477bd76c44c4119aa3d318623c7a67c3eb8eda03f59a02a7115e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6D3DFNN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDyw5V94a%2FePtpY5p%2FgEyezT31vvqgKbxsUaIvQKs0nXAIgFoQKCjZVJTHh%2B8xsKnOFADXDlCsTWOntF8iZemMSjzQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrNlRY7B7UYqt%2FqxSrcA%2BYxGbAdmzzjnti%2FeusBsFZv5NRRNj5JJrMqydsy0R%2FswjMl8uHHOU0bPBSeRCizLdtv8s38RbmAr220Px44S1ZvPYm1PkNJjVxuCgW01sJDtEmZTIMUEj57JxkwCwaI2Jd6Z%2BamNiJeoYbq8hmp78k6LBx%2B4sLpoHCbQNvQ3VoswC7QATznP2ec5ta1s%2BkLEYBzcnRjatMqo3Q7oKxBkvLH7EVm4zuNVoIMHyrfe13q5rrX9u%2BKRd0ttlcWsOQ%2FeCij1f1EU1CrhRVk38gOaJVmUzckwqq7Ljl9fk7eGrC67kisZ8LrKuu4%2BnJVTtkbeXWVNz7855Z9UCWWVOS6wGa9cmdpIoVEO6cL4Ye6%2F2U7pI8G6IIzlPRbc9Pzw2lqViwHw7404zvMRa%2BpQTrHupCjljT8xT%2BulENDhC8%2BXKnFo7KdPGCTiWpwvNxxybbOAwrkrxBhyEDlZ%2F4crOhk2XNUo60FX3tixA2Q%2FaAjtLWac67uyzRonymBjBEDHgq%2Fd%2F8R59xe7pxdms%2B5SX%2FV%2BJrJNEazyiUqtwH0f5jpgrtlU8nG2L%2BZQE8VSXSzQ5PE%2FB8srARUH35wjd%2F9%2BWUsZYRDrm7HqolEHhtXJgnZwu3wWbgAHISXgKSfWOsHMNvH1sQGOqUBwS3emgDFB1jVNQnjt5UvBNQY1uEpkQ79wJLmCwXZ6%2BE5XIMSiH0pVGnw3cpSg5XqUNlIpO0L8N%2F5vc22u6TczU8JhtLfC08AR9YnDj14v7zSnh337bz8qHDwtV%2FCeUsgTDIOS2prNXT2vKGeH0VT5RxJaQEOHRWXL9vI%2Bp5bU2z29iHW6T%2B9ml0gXY3aPBACs5R77L0YVX0EOHSmbj3oMQd70AOm&X-Amz-Signature=4413d1663a0109863a2f9270d36620f3499d7fab2421ee32b11f2110d3c15d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
