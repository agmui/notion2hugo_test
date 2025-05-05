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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3CIALD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC1xyPtp6ReQxGA2lHv6tx%2FWt3g8bAWnRn0sRZqGazVvAIgUJDPVC9CFwfTe55vrTs3gHBKa9YSEGfwkGpQ1WGF5F0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIJSWEfPrM%2BIpOGwqircA5J8cn5uJqG8wYTXPxQQFsrhVfPQJhXfoxHEyiLqhhZGunlQKblaKVRQEkvpWx98v%2FHco%2FvQJRtbT1ZwIenHjMy2CRHGZDTyoj41cCMj9GkBDggAFarD7y0b9BowGchxGUeFZkRlJgiSiLB8iPHyickT8ZNWEFDHVmsJ9qnuJZiwd8MaWW3qRgYn0HGXOWEj8zTa5m%2BJbnWu38%2F72btTUtGOiuwOpvWYnU7%2FEWV0Wi3rqZo%2F8cw6j74%2BKrBGPaN0dpQOIhR8MYCihGLimja7aZLt6aZIbm9rv1g8eRspc3Wc%2BYZTyUw%2BL7tA1ECYXKAn49oPpVhooPBT7%2FtulOBzj22Pg1TGlc7a210LUDSOKpb639V%2Bueuvb%2BbbYz2DtUteyv3aGZ2CVJZ5ZQ0DHtc%2FIGI%2FY4MeJXmO1pIudLem4Ye8KBUWcfZ5CPrIYNpyCCOt1uV9GA4piK0L8x7QwxJHz3xQjAlEFNvNpMUT1gcIlj0w1sjgGJhFkkZGlr4eSHMrf5CtDgdDv3TPKUI0ZDnZaFePKe8Z8JzjmLwpvyJf5Dxm9lNQ2uORFw%2FwvT2tvmXedG8JmJWEOqiEs0Cd8iuaXXoQj4%2BR1WvOMhpdsPMA6XGLASwdu5YIhAxkOWMQMNu54cAGOqUBZai2s2lCoS9wVAqzssyAv923cp81wZPrNl5ts8hdIxuLEQdn%2F8fsznB3i2e%2B02sn6HIn7opnjPLPOOhu5ZY6YzJZB8fFVpCfSG7GLc%2B%2BXUaupA2YndwmPIpyCMbQ6G6G2neHI6QTovYjF7atM9%2BOzgm9i9oDLr8GcpecvLl42%2FxEeCbCu0nn9Piustmx70KTIwShHo5CXgq%2B%2FsGrJALj0grcYXDt&X-Amz-Signature=149dc1517f093adf6f5296196fbdd13d831ff270b56c4c9904b5b6b31e7c1c57&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3CIALD%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQC1xyPtp6ReQxGA2lHv6tx%2FWt3g8bAWnRn0sRZqGazVvAIgUJDPVC9CFwfTe55vrTs3gHBKa9YSEGfwkGpQ1WGF5F0q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIJSWEfPrM%2BIpOGwqircA5J8cn5uJqG8wYTXPxQQFsrhVfPQJhXfoxHEyiLqhhZGunlQKblaKVRQEkvpWx98v%2FHco%2FvQJRtbT1ZwIenHjMy2CRHGZDTyoj41cCMj9GkBDggAFarD7y0b9BowGchxGUeFZkRlJgiSiLB8iPHyickT8ZNWEFDHVmsJ9qnuJZiwd8MaWW3qRgYn0HGXOWEj8zTa5m%2BJbnWu38%2F72btTUtGOiuwOpvWYnU7%2FEWV0Wi3rqZo%2F8cw6j74%2BKrBGPaN0dpQOIhR8MYCihGLimja7aZLt6aZIbm9rv1g8eRspc3Wc%2BYZTyUw%2BL7tA1ECYXKAn49oPpVhooPBT7%2FtulOBzj22Pg1TGlc7a210LUDSOKpb639V%2Bueuvb%2BbbYz2DtUteyv3aGZ2CVJZ5ZQ0DHtc%2FIGI%2FY4MeJXmO1pIudLem4Ye8KBUWcfZ5CPrIYNpyCCOt1uV9GA4piK0L8x7QwxJHz3xQjAlEFNvNpMUT1gcIlj0w1sjgGJhFkkZGlr4eSHMrf5CtDgdDv3TPKUI0ZDnZaFePKe8Z8JzjmLwpvyJf5Dxm9lNQ2uORFw%2FwvT2tvmXedG8JmJWEOqiEs0Cd8iuaXXoQj4%2BR1WvOMhpdsPMA6XGLASwdu5YIhAxkOWMQMNu54cAGOqUBZai2s2lCoS9wVAqzssyAv923cp81wZPrNl5ts8hdIxuLEQdn%2F8fsznB3i2e%2B02sn6HIn7opnjPLPOOhu5ZY6YzJZB8fFVpCfSG7GLc%2B%2BXUaupA2YndwmPIpyCMbQ6G6G2neHI6QTovYjF7atM9%2BOzgm9i9oDLr8GcpecvLl42%2FxEeCbCu0nn9Piustmx70KTIwShHo5CXgq%2B%2FsGrJALj0grcYXDt&X-Amz-Signature=11282f3816fb68e980a64ac32868589c2c876f62d57a17aafe6f18037b16c4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
