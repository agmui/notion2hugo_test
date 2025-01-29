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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HQDZYW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3OHiwX5pfYYw9uzOIXZAfleuqimOuQu%2F3O7W3r6wnuQIhAMgOqJM%2FTQaf4DeVFnVeZv6dbv6M181MG05epptpsJgHKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpam2b6ax7uK4agd8q3AMgx8zAVYvi%2BT7XtSuaUMkW7WQnXfp8v4vW9enz4kEq75zrZBWgtaoTl6Q%2FJ9ge0nkhZPaDrJ5QTzWZ2aGo3PWw2nExKCcEPQCv0VRpzntLJ1REK6XPJP3jSkNECc%2F2PhJS1IL%2FFZVj7D%2B803xDHlxXVGxe6W325CFewQ13n9pSuYkhti2sNxUUhZGvRQB%2BoJfJ9rlRtHRY3N26V6ChAyHZ%2F%2BM1NAmW8TaGbkXq195LckFMWO2dKtSkzfcQLNU2%2FFORsoEgRN3qRqgv5mdMrNYy0bGCMR8mzPI6a3RT7eb4wWIgf3opI3XcDPum1GbbU4NRNDeZwjdTcFE8FLZZGok07TeQZ147s7Az0ULO%2F9A7f9ypTiewquwMKDyPB7NiAv5klXOO4cnHSt1wkF%2FdcpjfjuN89pLP2%2Bd7n%2BvEswAuCezElNryVmJRmQjr0Qd6fgxtclje8iDWifzMTka584%2B%2FvOCxTR1XUEp8u9kUS6Vp5GZNDcSriAMFUsnvWX%2BFWnaBbEnniMu%2FAfLUMmTVy67RxfBpvsUV83k5e8wmoSdhctDHUh13Du48otw99cEZIfTN0bkI5h8kMOg1rboSuUKckkx8pWdQZzrFvKZvN9alWlMFoIkJB9LwkPFkuTCV6Oi8BjqkAd7kYcSLCXd3KjWEhEcv6bJCXVH0towpShrTiEx1M3xofrkwVTDaC7ZDAdBnRJhRG%2Bcfm49q4ZDmovmET5tJxFUxlp%2BZVSNKnjMBOtcYZzarKecOY6kcFsf6yLFrJmZJNkSzlueV3bQ41RhB8vS%2F1nOUU9o7emF5kh5j8v0rOCaPgZjmF0wgqzRZ6b%2Baiy2N39UoXNKDuAckXNM6SdVuXQILPWAk&X-Amz-Signature=7a345ef5fb5afd664290f85931db60f8d9011aaf8ab3d7d4666d8bb183d1b92c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HQDZYW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3OHiwX5pfYYw9uzOIXZAfleuqimOuQu%2F3O7W3r6wnuQIhAMgOqJM%2FTQaf4DeVFnVeZv6dbv6M181MG05epptpsJgHKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpam2b6ax7uK4agd8q3AMgx8zAVYvi%2BT7XtSuaUMkW7WQnXfp8v4vW9enz4kEq75zrZBWgtaoTl6Q%2FJ9ge0nkhZPaDrJ5QTzWZ2aGo3PWw2nExKCcEPQCv0VRpzntLJ1REK6XPJP3jSkNECc%2F2PhJS1IL%2FFZVj7D%2B803xDHlxXVGxe6W325CFewQ13n9pSuYkhti2sNxUUhZGvRQB%2BoJfJ9rlRtHRY3N26V6ChAyHZ%2F%2BM1NAmW8TaGbkXq195LckFMWO2dKtSkzfcQLNU2%2FFORsoEgRN3qRqgv5mdMrNYy0bGCMR8mzPI6a3RT7eb4wWIgf3opI3XcDPum1GbbU4NRNDeZwjdTcFE8FLZZGok07TeQZ147s7Az0ULO%2F9A7f9ypTiewquwMKDyPB7NiAv5klXOO4cnHSt1wkF%2FdcpjfjuN89pLP2%2Bd7n%2BvEswAuCezElNryVmJRmQjr0Qd6fgxtclje8iDWifzMTka584%2B%2FvOCxTR1XUEp8u9kUS6Vp5GZNDcSriAMFUsnvWX%2BFWnaBbEnniMu%2FAfLUMmTVy67RxfBpvsUV83k5e8wmoSdhctDHUh13Du48otw99cEZIfTN0bkI5h8kMOg1rboSuUKckkx8pWdQZzrFvKZvN9alWlMFoIkJB9LwkPFkuTCV6Oi8BjqkAd7kYcSLCXd3KjWEhEcv6bJCXVH0towpShrTiEx1M3xofrkwVTDaC7ZDAdBnRJhRG%2Bcfm49q4ZDmovmET5tJxFUxlp%2BZVSNKnjMBOtcYZzarKecOY6kcFsf6yLFrJmZJNkSzlueV3bQ41RhB8vS%2F1nOUU9o7emF5kh5j8v0rOCaPgZjmF0wgqzRZ6b%2Baiy2N39UoXNKDuAckXNM6SdVuXQILPWAk&X-Amz-Signature=f0bfac379b72d0ea1523754fc400f6f170be9cef4de2c5fecb7fe9a2563128dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
