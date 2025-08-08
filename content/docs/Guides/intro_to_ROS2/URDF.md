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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKLMHH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDyz9Vxu7C6Rxm0jgij65NYB5mLTky6N2hMZtaKMVU6YAIhAMNfgPJmQ9000ObghbruyebW89qqm4A7rVBQ0HeRz42bKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7CmTIXoMP8N%2BgAHUq3ANNoU7rkqgCn94ZcUqsnMrvqARZWJ3FEn9mLYx11r10lHp658zr2jeqK0ySz9Qdd1%2FklHYcYrwMrfEkmrweHVi0DNGcQYCT0jSbYBYnwmNqLE%2BTpFbE2wCKXq8qAc0TcwQcTvrHUoxekJ5Q06%2BXewCRNO76QA6gtd%2BcAh3Whazb32DRXk%2FWZ3MZxgEOPch45OPSruKLfRbm3ZOSuCY40ho7YRM4%2BbUg3CZFK3N2BOh762g%2FgSbkqCRW%2Bi5vTyCqXXov4DCI7Ryv%2BGZyHVztPvAKLAvYfsvutuJGvM1en5O3EwCah3WdgmwRAPMgFxpBmPaLZHh8i5PE%2FjbmicxtEH1yRqzAYnJi1WJy%2FJVYUc6SpXZsFPUCTMHEPjGzMvNX32sBUF4yaSg0DZ2hYkwfsl8HGfSDUL8NmMibV4CKzencc5Yrr3%2FQf8%2Bjtb4QNQu9RYqLiylngoZj3LM5OrfihHA4RxvTDhvOIqyd9cUVc7aIpzQzrGjlmfX90Agcw1xWIvxhgMRmxRny1GffJ9aP%2B2GJu0makFL%2F8XK2snlvfZhdpqLCKHpsNJ4LNJhGssv%2F%2FuLa4jZpIY3sabXnq9EuxDQLk0hE%2FUvfvksrwcjXiKg%2F%2Br78BKOm%2BK9FnmVU5DCaoNbEBjqkAeBQmMlfxJF6FBGA%2FCuJRZDYeSOs5xZz%2FYj1htJH5sP98zGrOj9kIKr5TSFGzIkR081V5dgO1fP%2FlZWVwU1TYkUug5XxuhC96j9u0ZiY9dAA%2BuaOm3r0PGirU5TsjjTAGB%2B84nBifL4YrIcTAq9bxFY11inRJl9VguSXii14w%2BM2x6eosIgRApK07z5gWwJVY01POc9pzyfvTrLvS8tPN0Z1zGdL&X-Amz-Signature=c246faccbb3c45d712f372a71af7942e9fc625c495f623e03850784d9f799594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKLMHH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDyz9Vxu7C6Rxm0jgij65NYB5mLTky6N2hMZtaKMVU6YAIhAMNfgPJmQ9000ObghbruyebW89qqm4A7rVBQ0HeRz42bKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7CmTIXoMP8N%2BgAHUq3ANNoU7rkqgCn94ZcUqsnMrvqARZWJ3FEn9mLYx11r10lHp658zr2jeqK0ySz9Qdd1%2FklHYcYrwMrfEkmrweHVi0DNGcQYCT0jSbYBYnwmNqLE%2BTpFbE2wCKXq8qAc0TcwQcTvrHUoxekJ5Q06%2BXewCRNO76QA6gtd%2BcAh3Whazb32DRXk%2FWZ3MZxgEOPch45OPSruKLfRbm3ZOSuCY40ho7YRM4%2BbUg3CZFK3N2BOh762g%2FgSbkqCRW%2Bi5vTyCqXXov4DCI7Ryv%2BGZyHVztPvAKLAvYfsvutuJGvM1en5O3EwCah3WdgmwRAPMgFxpBmPaLZHh8i5PE%2FjbmicxtEH1yRqzAYnJi1WJy%2FJVYUc6SpXZsFPUCTMHEPjGzMvNX32sBUF4yaSg0DZ2hYkwfsl8HGfSDUL8NmMibV4CKzencc5Yrr3%2FQf8%2Bjtb4QNQu9RYqLiylngoZj3LM5OrfihHA4RxvTDhvOIqyd9cUVc7aIpzQzrGjlmfX90Agcw1xWIvxhgMRmxRny1GffJ9aP%2B2GJu0makFL%2F8XK2snlvfZhdpqLCKHpsNJ4LNJhGssv%2F%2FuLa4jZpIY3sabXnq9EuxDQLk0hE%2FUvfvksrwcjXiKg%2F%2Br78BKOm%2BK9FnmVU5DCaoNbEBjqkAeBQmMlfxJF6FBGA%2FCuJRZDYeSOs5xZz%2FYj1htJH5sP98zGrOj9kIKr5TSFGzIkR081V5dgO1fP%2FlZWVwU1TYkUug5XxuhC96j9u0ZiY9dAA%2BuaOm3r0PGirU5TsjjTAGB%2B84nBifL4YrIcTAq9bxFY11inRJl9VguSXii14w%2BM2x6eosIgRApK07z5gWwJVY01POc9pzyfvTrLvS8tPN0Z1zGdL&X-Amz-Signature=588234dd2d73ad669a2a80942985ba886d7b4dc02e6d1577021a22e4826794fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
