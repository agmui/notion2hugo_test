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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW243JR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8D9sfLE8Me5uiO8%2B2ziSz9vof4sg8Af0p2pmF4Wdd%2BAIhAOPFg%2BVSxrC3GsVkgWtHHd8QLyi09LU1Ye2n4y4TFnfAKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWBbtyWxKHjItEIgIq3AOhs%2FB%2BjZ8VEd0Bx7i0kWyYqU30v%2Fk0kEY2uj72WYsnvV3Cyu%2FPWkO6XRCRCOVv1hAdQpD9IWzSEjyOwkGOKte8fuWaiFr0qJtRCUzOMNvLyYzhWWrHBuv6BzXJEwlGLUKCQyCiJ8TPywJCptECXf3Na08F%2F3sicSOcBM5GvO4G9hVKJiQYE8asp%2FHbBiDNeediK25CQVw2j6mynLoBO7Pm2A6X3FDA%2B3D1PjIMQRl3qYbvzjWhAfByHAW8cJ%2FLs%2FAz1NcnCyPffQF2QcNvV6We2f6oxwYMg3dTErmFHoWxt9%2FS0QLmP9tZyZHHsnuFNsvbP657EkY0zaUzq0rqyushJ%2BAZOJpxu%2B2ekzMIQ4rsZ0E4duMwqi8AHqN1bqSYyqNFzFtNSkSUBTmAAtJaySVyYx9O7HmCZGhfwyjJX3j7Re99pRs%2Bul3xze1eIMT0yki4rG1alFUA6b2pfCTwPtMIeFu9JLcCzBkzAOMNYdKtEApt74Uup7qkkLZxvGcfdViwlUb2RNY0Vf7wnl%2BxIwo%2Bd0S7QeofSh%2FnY71w38tu1xd3HXtQQvFYYLY8RagOpWphobS5ZW0h7j5iIjHg2ayb7aDKoO4RWGfAUNJ%2BxeqN8bRUGSfkhm%2FTh9B6nzDij%2FzABjqkAYzHIFwDL3TE1nmXl4zQ87q6SZhVM3ZG7uevvwrJ3ZfgJD7vfd6crZkZRqVESkwjroBx6QXPBvPOcng9JQCUIX7HsC0xxGx2PCNf47D%2F2vxGg4TMaJ4TsPQS2ztpnMTPlIHUj4h77Cc6b74nT%2FfbiH72bz3DhDlQG1bu1Kz0UKNWl4vZelxZuiIlPw80ak6LtlFrF6iU7DgT%2BW7npN8dbt2t7RGC&X-Amz-Signature=5665b528b64704dcc22644676a1073a4ccd940f66c182a15a7d45f7833565a45&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW243JR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8D9sfLE8Me5uiO8%2B2ziSz9vof4sg8Af0p2pmF4Wdd%2BAIhAOPFg%2BVSxrC3GsVkgWtHHd8QLyi09LU1Ye2n4y4TFnfAKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWBbtyWxKHjItEIgIq3AOhs%2FB%2BjZ8VEd0Bx7i0kWyYqU30v%2Fk0kEY2uj72WYsnvV3Cyu%2FPWkO6XRCRCOVv1hAdQpD9IWzSEjyOwkGOKte8fuWaiFr0qJtRCUzOMNvLyYzhWWrHBuv6BzXJEwlGLUKCQyCiJ8TPywJCptECXf3Na08F%2F3sicSOcBM5GvO4G9hVKJiQYE8asp%2FHbBiDNeediK25CQVw2j6mynLoBO7Pm2A6X3FDA%2B3D1PjIMQRl3qYbvzjWhAfByHAW8cJ%2FLs%2FAz1NcnCyPffQF2QcNvV6We2f6oxwYMg3dTErmFHoWxt9%2FS0QLmP9tZyZHHsnuFNsvbP657EkY0zaUzq0rqyushJ%2BAZOJpxu%2B2ekzMIQ4rsZ0E4duMwqi8AHqN1bqSYyqNFzFtNSkSUBTmAAtJaySVyYx9O7HmCZGhfwyjJX3j7Re99pRs%2Bul3xze1eIMT0yki4rG1alFUA6b2pfCTwPtMIeFu9JLcCzBkzAOMNYdKtEApt74Uup7qkkLZxvGcfdViwlUb2RNY0Vf7wnl%2BxIwo%2Bd0S7QeofSh%2FnY71w38tu1xd3HXtQQvFYYLY8RagOpWphobS5ZW0h7j5iIjHg2ayb7aDKoO4RWGfAUNJ%2BxeqN8bRUGSfkhm%2FTh9B6nzDij%2FzABjqkAYzHIFwDL3TE1nmXl4zQ87q6SZhVM3ZG7uevvwrJ3ZfgJD7vfd6crZkZRqVESkwjroBx6QXPBvPOcng9JQCUIX7HsC0xxGx2PCNf47D%2F2vxGg4TMaJ4TsPQS2ztpnMTPlIHUj4h77Cc6b74nT%2FfbiH72bz3DhDlQG1bu1Kz0UKNWl4vZelxZuiIlPw80ak6LtlFrF6iU7DgT%2BW7npN8dbt2t7RGC&X-Amz-Signature=f113bf87d9fffc0b49e037428bda0cb542c8a33fd08d12bf88c470cd4f5b7857&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
