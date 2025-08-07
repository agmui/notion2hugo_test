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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUTJKT6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCQgvjydgW24YS71gmTF4YmyVQ8luBbBkSL4ivmYKleUQIhAO9d7b6KB2vTO578JSYCMojAXrPdN%2FYj0XR7hMBZfqnKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydffNZz1%2B3kqBwwWYq3AONBQLxRdP1woRAECOh1lagk%2B3YfLYu8jn%2Flf53ZS0PC5degta95JmYcuzST0dnswx0PDFkXIK5nrGv1Dg1xoFw1qbRFakdij2CFYrjJkKEZP24dmJO8sFL3M1PTs68n5XwQC3mC0gGxEO3%2BbE0gX2GJtZg65m1rP8%2FAqFEoj4Qfiq0YyXfmhCVOkUUTblc%2B%2BPhZQ8oA0YebLywrf5UGQuhhKAOZXsXkoJXwnVIi66r2sEsMVqcyUQ3ShwxVd04aswoUws%2BjgHwJJja00h4qROZLKJS3kM6XsmJd7douDX7CCKO%2FAuvGZgpxKNhaEkDuVPX2JJJ7IkQ9diIlgaMK08dOSn6ubZPnQCDMGMw7Gh69o9q%2FZqBledIyqIMD6gLAOl14%2BN0NKD74IukgcshPzGtXgOGUruGDYYz9C0InJvCT3MDZllkELQCiBpvEdlMijiS1Mkxjw4y92mrnJmpCIT7GOK47j8bbFnK7KexeNtUqHg2hb0wXngCwx%2BtyxSv%2BBfM99FMMMLxbz9gjCQ5Kvj2XjrTDG9wVdXktwqpmGy90lmLUdQRMejvhfTcjmboFVtiTolkEyIYjcPhVt8BIjg7QEa799IQcmghMUobMq6nRClyeq0B8SI%2FW1p%2BmjD1%2BdLEBjqkAcC5%2BvHNdlem4d10nvUQTjsXPUHjGmcGuRbstORJqIxDIyIb5ZDEwXUIrOUEFJkpjPYwcc7dgrhleIsrXsqHXaNBHA0kgMkWdI49KXh3Keav7TCILAoe17AH6ZB%2BOKXGlgMVZiV9hxgx05BTbrdwjR7S17bt5xfRSE73rnkp0Nd7B5mdgTNMW4hHi5y95yrKMOfdpCcSxqlVdTLCOv9PAswUZ7NY&X-Amz-Signature=bdbcefb2271839bfcba9ad39924355c4c3e9e5fb9266b8638c51a82460644827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUTJKT6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCQgvjydgW24YS71gmTF4YmyVQ8luBbBkSL4ivmYKleUQIhAO9d7b6KB2vTO578JSYCMojAXrPdN%2FYj0XR7hMBZfqnKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydffNZz1%2B3kqBwwWYq3AONBQLxRdP1woRAECOh1lagk%2B3YfLYu8jn%2Flf53ZS0PC5degta95JmYcuzST0dnswx0PDFkXIK5nrGv1Dg1xoFw1qbRFakdij2CFYrjJkKEZP24dmJO8sFL3M1PTs68n5XwQC3mC0gGxEO3%2BbE0gX2GJtZg65m1rP8%2FAqFEoj4Qfiq0YyXfmhCVOkUUTblc%2B%2BPhZQ8oA0YebLywrf5UGQuhhKAOZXsXkoJXwnVIi66r2sEsMVqcyUQ3ShwxVd04aswoUws%2BjgHwJJja00h4qROZLKJS3kM6XsmJd7douDX7CCKO%2FAuvGZgpxKNhaEkDuVPX2JJJ7IkQ9diIlgaMK08dOSn6ubZPnQCDMGMw7Gh69o9q%2FZqBledIyqIMD6gLAOl14%2BN0NKD74IukgcshPzGtXgOGUruGDYYz9C0InJvCT3MDZllkELQCiBpvEdlMijiS1Mkxjw4y92mrnJmpCIT7GOK47j8bbFnK7KexeNtUqHg2hb0wXngCwx%2BtyxSv%2BBfM99FMMMLxbz9gjCQ5Kvj2XjrTDG9wVdXktwqpmGy90lmLUdQRMejvhfTcjmboFVtiTolkEyIYjcPhVt8BIjg7QEa799IQcmghMUobMq6nRClyeq0B8SI%2FW1p%2BmjD1%2BdLEBjqkAcC5%2BvHNdlem4d10nvUQTjsXPUHjGmcGuRbstORJqIxDIyIb5ZDEwXUIrOUEFJkpjPYwcc7dgrhleIsrXsqHXaNBHA0kgMkWdI49KXh3Keav7TCILAoe17AH6ZB%2BOKXGlgMVZiV9hxgx05BTbrdwjR7S17bt5xfRSE73rnkp0Nd7B5mdgTNMW4hHi5y95yrKMOfdpCcSxqlVdTLCOv9PAswUZ7NY&X-Amz-Signature=779f54412ab36e8bc309f3b8452d7edb843da45c2048087c4b69860bf122a70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
