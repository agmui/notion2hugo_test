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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF22M2Z%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCUtv6YTnIJGKN3uHBL4kEoDyKLpX%2F70C8jqL8TBD3giwIhAOaA0ll6ZWg9B4Y4T2akiRsqLzRDRgrSytIhyvsJ94AyKv8DCBIQABoMNjM3NDIzMTgzODA1IgzWXtHkX6ZlzIwbrAIq3APaIVzrrL5EpEyzVJSiaGgG4M1945wbVu%2BXqdY2Itv8Ot5QMYprbTdkMyhdNe6USAjX9Ezs%2FBNAYyfU89lhSlb1ScCgkeixf6Wm9gsNEoirzGrMER10eQqfyWkDscNqQRifnoJurCzUZzoKUVmEBo4eVaxaw7h9bQp5j%2FkY8rjveisv46UuaNSBjifvWDP5jPMVfYQcq4P6eORCWA5GdQsuiwk%2FB2NmW5q9LXl1YDN7uIJPUy1z00gjiyTrn6fGnfHUADUiIuuOuALAjObvWs0kiCyEDlRhgAsrWY0%2BOKmfRPCEsIvKkFVuPOwMeCvVVLKvFb3qY%2FFih39uyFt9HU5dwhNhINmw5Q1O10cTfqBT5vjALzB%2BpnujzLE%2BFga9MM%2Bh%2F3a8gpwAb4RGiX9wCBuTk9tjeLvMsT4TnGHw9VLcLepUM4nVH9uryjR%2FP33mcppJs9yXKkgEWH4al31TwgDx%2FGt6yOjgOGp%2Fnwlwy2538Wtuka87ufZ7ze3MzCPiglDFGebXKSR4CpQp32meNEGozpIejTiuX4%2BkAhsquxlfQR6%2Fn1JZXeIm9RIgWhYiLF49dYVKVcaSrIl2C8YaMuPdDP2ColRxnO6IqwUWKkEw%2BXlyO56pvSjKtLoR%2FzCz8%2FLJBjqkAbQNTlhcuNQQE3XU9lnq%2BkVS6SFMg0O5xQmjjjF7T4dl9HBZdhI7eu2S%2FejLOiPtqTsx6N5wj5oDxUgmRm1gVWZPKNOL0NHkuTzK6300pz0ac6hHcMjLm%2F4Qvy70Z3jjzhETSowi9HvxhCMIoV8aJWeVEXhUY8s3RWxq6I3a9%2FaT4VDikCy2BqmVdNK9OS1nTZjtFGKZoeVapwwUrz4VVIqHlO0h&X-Amz-Signature=54483c4bdcadf0f94f60a71bcdad18b83ba36e03c200e06509ce3a1682860737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF22M2Z%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCUtv6YTnIJGKN3uHBL4kEoDyKLpX%2F70C8jqL8TBD3giwIhAOaA0ll6ZWg9B4Y4T2akiRsqLzRDRgrSytIhyvsJ94AyKv8DCBIQABoMNjM3NDIzMTgzODA1IgzWXtHkX6ZlzIwbrAIq3APaIVzrrL5EpEyzVJSiaGgG4M1945wbVu%2BXqdY2Itv8Ot5QMYprbTdkMyhdNe6USAjX9Ezs%2FBNAYyfU89lhSlb1ScCgkeixf6Wm9gsNEoirzGrMER10eQqfyWkDscNqQRifnoJurCzUZzoKUVmEBo4eVaxaw7h9bQp5j%2FkY8rjveisv46UuaNSBjifvWDP5jPMVfYQcq4P6eORCWA5GdQsuiwk%2FB2NmW5q9LXl1YDN7uIJPUy1z00gjiyTrn6fGnfHUADUiIuuOuALAjObvWs0kiCyEDlRhgAsrWY0%2BOKmfRPCEsIvKkFVuPOwMeCvVVLKvFb3qY%2FFih39uyFt9HU5dwhNhINmw5Q1O10cTfqBT5vjALzB%2BpnujzLE%2BFga9MM%2Bh%2F3a8gpwAb4RGiX9wCBuTk9tjeLvMsT4TnGHw9VLcLepUM4nVH9uryjR%2FP33mcppJs9yXKkgEWH4al31TwgDx%2FGt6yOjgOGp%2Fnwlwy2538Wtuka87ufZ7ze3MzCPiglDFGebXKSR4CpQp32meNEGozpIejTiuX4%2BkAhsquxlfQR6%2Fn1JZXeIm9RIgWhYiLF49dYVKVcaSrIl2C8YaMuPdDP2ColRxnO6IqwUWKkEw%2BXlyO56pvSjKtLoR%2FzCz8%2FLJBjqkAbQNTlhcuNQQE3XU9lnq%2BkVS6SFMg0O5xQmjjjF7T4dl9HBZdhI7eu2S%2FejLOiPtqTsx6N5wj5oDxUgmRm1gVWZPKNOL0NHkuTzK6300pz0ac6hHcMjLm%2F4Qvy70Z3jjzhETSowi9HvxhCMIoV8aJWeVEXhUY8s3RWxq6I3a9%2FaT4VDikCy2BqmVdNK9OS1nTZjtFGKZoeVapwwUrz4VVIqHlO0h&X-Amz-Signature=2ef934044718cae0329c135ddfadcab70f50f8de92acabbcd5c0a78eb848461b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
