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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD67CR7%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC8KmzQ8%2FqIHMZlijPWnshC88g7QX6M1YBUdsFAq24tYwIhAOPSBm8MxRAFP8Kfi665hZhBnNW2OsD77%2FhC4QmNklV7KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrus4j5gYm57jbobQq3ANSBFi01a8Qe8qUl2rA5WshGlLLnjMAF14T0hmla2FO%2FcRiWjofGI%2BELJS6yQDzWTgoLbKiYmWtc%2FFc4xvKPEzREamxVacCA%2B5FKEp33OYO2MTNUzUcE4UrPOayFq39xACfwUue7fCoiZggFmnSQ4yjWEm%2FEC5m200xzmmudI8Lx50w30VpKI0tL3%2FKwa4VSDByFYmyRHvikZC%2FywDNB%2FVFRaSXtgUOI%2B5%2Flhln2gIN8nnFoSvIgAMkgHKAHHA59tllrrMlNdj0zF4fm76T1NquMsJ%2BsPyj%2FmzGEmbJ%2Fcfz%2BbmS36XqdWCUzaqVsJN3ec50Rx1TYU7xt%2Bul44IGyZ%2BfK1Le4TI0v8j%2BPqq2zn9QxmmOPk6km1AtCgLzom%2B3JGd4iCbspzuxnopuq4pBAt2kThUsbphzO%2FiBC36y3Prq4gWXTpzoRKZh5UYooVAMFfj1U9pU%2BPq7oDYKJCuArujPT6%2B8EPwKiwV9P4P8UTrEB7U58XMKCE5BFf6iGyDWggVZINiiEUDW0adXl0755D7OuTiIXuAbUvcW6U0qb1woypGnOYdRLsufr31%2Boi5wgLB%2FdkLBW3YRumYmUE7aM5vc7FbL7UsjzhGF7KhX4JwQB%2FUp8zVKBEVPzkZY9jCQ5fG%2BBjqkARrh30zh7vBv1RYQOLk8LDTKsK%2FUR2IixjefhmCYe40q52RqJUv5AWDzdM7aiGjxdWgnT0b4DJzK24QTHFuI2iyqR73Q%2B38Rcodd2kYxUBLcDD7EL3TK01h4l%2BXrG1hwDRLNF1JIZF%2Brb0Rqkn1ibngDH6lE2zIwp54SYDvloziOSPkeQH4cdGlVxM2C0572%2B8Dp0UxpcOs%2FQZS2NvkZ%2BjzQ7O1Y&X-Amz-Signature=664c281fcd99fe7c6b458169a1505a10213fa1180a515848e319d48ba6a3eceb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD67CR7%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC8KmzQ8%2FqIHMZlijPWnshC88g7QX6M1YBUdsFAq24tYwIhAOPSBm8MxRAFP8Kfi665hZhBnNW2OsD77%2FhC4QmNklV7KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrus4j5gYm57jbobQq3ANSBFi01a8Qe8qUl2rA5WshGlLLnjMAF14T0hmla2FO%2FcRiWjofGI%2BELJS6yQDzWTgoLbKiYmWtc%2FFc4xvKPEzREamxVacCA%2B5FKEp33OYO2MTNUzUcE4UrPOayFq39xACfwUue7fCoiZggFmnSQ4yjWEm%2FEC5m200xzmmudI8Lx50w30VpKI0tL3%2FKwa4VSDByFYmyRHvikZC%2FywDNB%2FVFRaSXtgUOI%2B5%2Flhln2gIN8nnFoSvIgAMkgHKAHHA59tllrrMlNdj0zF4fm76T1NquMsJ%2BsPyj%2FmzGEmbJ%2Fcfz%2BbmS36XqdWCUzaqVsJN3ec50Rx1TYU7xt%2Bul44IGyZ%2BfK1Le4TI0v8j%2BPqq2zn9QxmmOPk6km1AtCgLzom%2B3JGd4iCbspzuxnopuq4pBAt2kThUsbphzO%2FiBC36y3Prq4gWXTpzoRKZh5UYooVAMFfj1U9pU%2BPq7oDYKJCuArujPT6%2B8EPwKiwV9P4P8UTrEB7U58XMKCE5BFf6iGyDWggVZINiiEUDW0adXl0755D7OuTiIXuAbUvcW6U0qb1woypGnOYdRLsufr31%2Boi5wgLB%2FdkLBW3YRumYmUE7aM5vc7FbL7UsjzhGF7KhX4JwQB%2FUp8zVKBEVPzkZY9jCQ5fG%2BBjqkARrh30zh7vBv1RYQOLk8LDTKsK%2FUR2IixjefhmCYe40q52RqJUv5AWDzdM7aiGjxdWgnT0b4DJzK24QTHFuI2iyqR73Q%2B38Rcodd2kYxUBLcDD7EL3TK01h4l%2BXrG1hwDRLNF1JIZF%2Brb0Rqkn1ibngDH6lE2zIwp54SYDvloziOSPkeQH4cdGlVxM2C0572%2B8Dp0UxpcOs%2FQZS2NvkZ%2BjzQ7O1Y&X-Amz-Signature=dbf75e5da701ada4f7e50467d265ff262b50aabe4f205824ce12f845d58cce8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
