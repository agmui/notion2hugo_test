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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56GTNRW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCXlhRvJBqCYUpoKQmiCF0XLxjwaDeg5dSoREY4Z1qqNgIgOhHE9eJ60A890qTQSfVmgesPeevAq3yvo%2FbIWFYCfv0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBtpHmx%2BM0X0%2Fy7%2FayrcA%2B3D981JxWRpWVGE8UWbYjujTFEr9iOG6HW%2Bhz7RCU4m%2Fy21ui4BTTKva3cdEBp4V296%2FkGvGtlnYcs2RqUrQN0457gPzpgWlPCp%2BScCeOS7mY23wHniyw6WgwcMQ1I1WPK0xQgdZapDIS%2BWH8VsJzj2%2BkHlGCZoEUwVl4V8unXwtrzOjiFSSli74T%2BbOLFnJXTTDjYYhBN0TfVo6oUptBEC4Q16Msd0FHPx%2BmpmVqIcXholpP2qIweAbgTwTXi4kuWPEB6w0i6S7qP%2B2hVc4DXRb%2FP0B7q7M7tI6e6Eolb1eF09eqlGm4f1aUy9S8kOYAvLzVFCPgVQ4sB%2BEI4LqZKN%2FHyhHfYRvzTDJRbOEGD84oEA4%2BY6fs2dRQDr4J3A8NcSaQX%2BtE4ZebUkJ9U5dGaKbmvppHYk7TWLRyD4YPgcQOQTk7LshHIbwLxi8DGIlQ4CWF87pZbkuYtOHdMqEaClwneHJEzE%2BB3yz2uAA5IYGpER1TqBrJFXa9cXEi85jiVI%2F524DtgOoETG3NEHUwMkJqjQmotSjsPAFyGHYFtd230LG5KLUgS7vfSBASpSsyZKYZ8RjpmmjW%2FUcJbqwobi6ac3pOh1IaW%2FvUajVs5VoaKXOTFrk7EGDRcIMPmQw8QGOqUBvllDTEJMEktbd98wh7kBplksG7%2FP2YSXIl7dQ25LGGarWcdNjqbBXMTmLxSy1WUUq0IfF12jkdRzZmwzc2LXhq6LzOgzptM%2FOFN%2BtZ1La4F3Lss1py9u0O43rsk8iNuRZS%2FApQyvG0h%2BsC93yjXTzZPKV3Y3cu8uVsOwW1cFaEXWcv9o9liAthG27YCBvXxM3v6QlKcr%2Bsbzt%2F0ONadHjqZO78lP&X-Amz-Signature=ad2f80781efae2f66a416c249f588a4c1ee7ec1ecf452b0e574b1eec7357f3a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56GTNRW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCXlhRvJBqCYUpoKQmiCF0XLxjwaDeg5dSoREY4Z1qqNgIgOhHE9eJ60A890qTQSfVmgesPeevAq3yvo%2FbIWFYCfv0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBtpHmx%2BM0X0%2Fy7%2FayrcA%2B3D981JxWRpWVGE8UWbYjujTFEr9iOG6HW%2Bhz7RCU4m%2Fy21ui4BTTKva3cdEBp4V296%2FkGvGtlnYcs2RqUrQN0457gPzpgWlPCp%2BScCeOS7mY23wHniyw6WgwcMQ1I1WPK0xQgdZapDIS%2BWH8VsJzj2%2BkHlGCZoEUwVl4V8unXwtrzOjiFSSli74T%2BbOLFnJXTTDjYYhBN0TfVo6oUptBEC4Q16Msd0FHPx%2BmpmVqIcXholpP2qIweAbgTwTXi4kuWPEB6w0i6S7qP%2B2hVc4DXRb%2FP0B7q7M7tI6e6Eolb1eF09eqlGm4f1aUy9S8kOYAvLzVFCPgVQ4sB%2BEI4LqZKN%2FHyhHfYRvzTDJRbOEGD84oEA4%2BY6fs2dRQDr4J3A8NcSaQX%2BtE4ZebUkJ9U5dGaKbmvppHYk7TWLRyD4YPgcQOQTk7LshHIbwLxi8DGIlQ4CWF87pZbkuYtOHdMqEaClwneHJEzE%2BB3yz2uAA5IYGpER1TqBrJFXa9cXEi85jiVI%2F524DtgOoETG3NEHUwMkJqjQmotSjsPAFyGHYFtd230LG5KLUgS7vfSBASpSsyZKYZ8RjpmmjW%2FUcJbqwobi6ac3pOh1IaW%2FvUajVs5VoaKXOTFrk7EGDRcIMPmQw8QGOqUBvllDTEJMEktbd98wh7kBplksG7%2FP2YSXIl7dQ25LGGarWcdNjqbBXMTmLxSy1WUUq0IfF12jkdRzZmwzc2LXhq6LzOgzptM%2FOFN%2BtZ1La4F3Lss1py9u0O43rsk8iNuRZS%2FApQyvG0h%2BsC93yjXTzZPKV3Y3cu8uVsOwW1cFaEXWcv9o9liAthG27YCBvXxM3v6QlKcr%2Bsbzt%2F0ONadHjqZO78lP&X-Amz-Signature=13629ca103d7a5acc2e6717149d23a6b99d1a20a3432ca59bec13dd603c5deeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
