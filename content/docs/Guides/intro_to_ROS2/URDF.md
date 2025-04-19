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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP7XAFLQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCu6ecr9DQY12kHaUPCkL8%2FePbd1NF%2BBaBrrOsj71ab%2FgIhAJjYxqp69ovJzJdgHLyd40KJ0g8w%2BkGZqlLaUXjTFpzpKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgk8kgG0HHIQRLlusq3AMv%2FfNF%2BzGhZUc46qTzjCdWZ7cQRFbdQgKA5T6SkhGBu5ENspWmUD40weREI3d7W2BM5MnjlipVgPcS%2Fbwgzd0dmndry44HbvP1ugIpGfbSVb9%2FMfZ9iEwfFoi8PqInyuTsYmOyTeJLOxujGRol%2BEdJNAO2m1gl5F012qbcJQG59G%2BwLP0nD6GW%2FljezypRyH4XNgN1ovInluwseMY5GacvUNCL0cBPkqRSl31g2pv8iTzirQ3kbW%2BYI8RFh%2BFK75dAYP5n5YPNnZ%2BoPw4SZ4mxle0GImpoGuvnjRlTidhfNkFtiMV0EEHaapAtgoBFmRq1bC29%2Bee5V9QCRYkb1oMq4LK4FGOv2GcRD0HrCXqZPdYPspC%2ByIHSwHibNj1p%2F1z3RwfNfFuOX6e7Y1PyuAj%2B%2BA8bir53PJJD4wD0HncY9nt224PNNVX3nosqK73AwTr%2BG%2FmBzJTYz35nqzxvlwJn6XwzdvOb%2BPwXyCZaOE7vBDPOGWccGGMZgw0kIPefdwEYw49OHIDSNNYsM%2B9W7%2FaH7M9eOBC13wXZ%2BlEXGSeOgFYyx2WpZAnmf87VT4cDxtCldmEDfkTV%2B58I1zXbx9Dyv3LWtvMx3QNFmA4pXvf%2F1kXx0cvZeqoOEVtLBjDJoI7ABjqkAUPHhFzvHomQEFA2KKr7GTaskHv1StU7Kbfb9Eht7CPJ4cjyf0MMB%2B7Tl2Lng9yyg8vUAPcr274iJUnFGKakOmgRwkb4bykSmI%2FNwo3XPnGEV0tHZP22sKygMPloMCMVTy3yO9%2BmI7DEtWAAVDL0SGcjfsRZk3VgopbPv2Tepd3WsYi6NxwoxSGuG6tcrOgyQcOcvit2dKRKvIbaclNcLRsrga%2BI&X-Amz-Signature=08084d6fb8237d0b320fb24e2969d68f42916a293d04197d372445938ef34a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP7XAFLQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCu6ecr9DQY12kHaUPCkL8%2FePbd1NF%2BBaBrrOsj71ab%2FgIhAJjYxqp69ovJzJdgHLyd40KJ0g8w%2BkGZqlLaUXjTFpzpKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzgk8kgG0HHIQRLlusq3AMv%2FfNF%2BzGhZUc46qTzjCdWZ7cQRFbdQgKA5T6SkhGBu5ENspWmUD40weREI3d7W2BM5MnjlipVgPcS%2Fbwgzd0dmndry44HbvP1ugIpGfbSVb9%2FMfZ9iEwfFoi8PqInyuTsYmOyTeJLOxujGRol%2BEdJNAO2m1gl5F012qbcJQG59G%2BwLP0nD6GW%2FljezypRyH4XNgN1ovInluwseMY5GacvUNCL0cBPkqRSl31g2pv8iTzirQ3kbW%2BYI8RFh%2BFK75dAYP5n5YPNnZ%2BoPw4SZ4mxle0GImpoGuvnjRlTidhfNkFtiMV0EEHaapAtgoBFmRq1bC29%2Bee5V9QCRYkb1oMq4LK4FGOv2GcRD0HrCXqZPdYPspC%2ByIHSwHibNj1p%2F1z3RwfNfFuOX6e7Y1PyuAj%2B%2BA8bir53PJJD4wD0HncY9nt224PNNVX3nosqK73AwTr%2BG%2FmBzJTYz35nqzxvlwJn6XwzdvOb%2BPwXyCZaOE7vBDPOGWccGGMZgw0kIPefdwEYw49OHIDSNNYsM%2B9W7%2FaH7M9eOBC13wXZ%2BlEXGSeOgFYyx2WpZAnmf87VT4cDxtCldmEDfkTV%2B58I1zXbx9Dyv3LWtvMx3QNFmA4pXvf%2F1kXx0cvZeqoOEVtLBjDJoI7ABjqkAUPHhFzvHomQEFA2KKr7GTaskHv1StU7Kbfb9Eht7CPJ4cjyf0MMB%2B7Tl2Lng9yyg8vUAPcr274iJUnFGKakOmgRwkb4bykSmI%2FNwo3XPnGEV0tHZP22sKygMPloMCMVTy3yO9%2BmI7DEtWAAVDL0SGcjfsRZk3VgopbPv2Tepd3WsYi6NxwoxSGuG6tcrOgyQcOcvit2dKRKvIbaclNcLRsrga%2BI&X-Amz-Signature=e8dd26b3e242f6b6b523a2a5de9bbf8f64af00eece27ee383e64005593403878&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
