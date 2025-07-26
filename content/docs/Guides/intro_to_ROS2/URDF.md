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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAU6HQX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD7a2mgOEgCDwUpYKjngeLC2LWFkdXfBhXnG2pSxEqLGgIgeLSKsEAtEBKMsqRU3wb1py2KZCP%2BwnVm4DwuesBsxwEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDE6KHJu8OYZvL9oPbSrcAwpzCvDeE1odyXzAggYZeHwe0exdIyTZQ4sn4cdn2GugIC%2FmNth3dszPU%2FWenClPOhsYSNJDVOr35z%2FAvJmcEGCsQnJZ3iO6H60nNEt9%2BKv6ipp0YVyESnA0%2B9uThAWc7BTGRLdLxGaBpHAZogZkESgeiikAQPVHI0zXPDnOdEjYlScZU4cDCb6bR83eZzVgUUTtJ%2B%2FDVq934BBvZ8aWX7TX2NwoGVSA%2FYi9CVET1VdjnfQesEcg6pG5d3EfjGQ1%2BNrWWipI2KtvEO1QLTOZzysKI6MsKGfuN1LcXge7y%2BZ8Xa9xucTqAPHTv99eQRrPxB2fZnInFRcFLTgGcCrndcryQm5Q2q1erlx%2FgP1wDQ%2F7Ggt3pmQHEH1TLixsL8Q4jsJ%2BIS5RzGVLlRJYWpzJ1Z%2FYOhcfmuvgr2TYLlMNq3OahNS1zbmKYMgcePAtkegRY3ZwDYjX0kQotaxDm3EEnW2UmoN8QYpoZ%2FxzklTM09nWS7u9Ny%2FzoLrlktoPSsQS02TvO8C1Qn2ygyMGiHims9qnODw2x%2BXczjrF9KU9U7w%2BdfXV8cjiZh3yHDJ3VM0xphxGlUaLCwlR7DkL%2FKbi1V03y6SAjJPBhMIz8%2F3HORhdWT8cxu1cx2EQvZmtMObBk8QGOqUBRKtPzwyp1WaXHH7MI62A%2B7n%2Bq5WE2YLzKWjUn6jZSbBWlCkfQO21Ax5Q15gdUPUJ%2BFEKevCU8RqSng0y9nKuzQo%2FukWWYItgAGmu95iB5wNv0D%2FH4o%2B%2FSeZxkqSkqJgJlcaSzn4WWl5nLSPund3Hp0EyTXfBgTGXPk4Vyw7auWn%2Bf13BYduy2UANIjjXvi2KPGzDOsvLotWGUf3dVOsE3oe3GIuQ&X-Amz-Signature=f164d3cb0989faa61f2a88ca7959a173616236ee0072ea139112ffb7cd9c72e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAU6HQX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD7a2mgOEgCDwUpYKjngeLC2LWFkdXfBhXnG2pSxEqLGgIgeLSKsEAtEBKMsqRU3wb1py2KZCP%2BwnVm4DwuesBsxwEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDE6KHJu8OYZvL9oPbSrcAwpzCvDeE1odyXzAggYZeHwe0exdIyTZQ4sn4cdn2GugIC%2FmNth3dszPU%2FWenClPOhsYSNJDVOr35z%2FAvJmcEGCsQnJZ3iO6H60nNEt9%2BKv6ipp0YVyESnA0%2B9uThAWc7BTGRLdLxGaBpHAZogZkESgeiikAQPVHI0zXPDnOdEjYlScZU4cDCb6bR83eZzVgUUTtJ%2B%2FDVq934BBvZ8aWX7TX2NwoGVSA%2FYi9CVET1VdjnfQesEcg6pG5d3EfjGQ1%2BNrWWipI2KtvEO1QLTOZzysKI6MsKGfuN1LcXge7y%2BZ8Xa9xucTqAPHTv99eQRrPxB2fZnInFRcFLTgGcCrndcryQm5Q2q1erlx%2FgP1wDQ%2F7Ggt3pmQHEH1TLixsL8Q4jsJ%2BIS5RzGVLlRJYWpzJ1Z%2FYOhcfmuvgr2TYLlMNq3OahNS1zbmKYMgcePAtkegRY3ZwDYjX0kQotaxDm3EEnW2UmoN8QYpoZ%2FxzklTM09nWS7u9Ny%2FzoLrlktoPSsQS02TvO8C1Qn2ygyMGiHims9qnODw2x%2BXczjrF9KU9U7w%2BdfXV8cjiZh3yHDJ3VM0xphxGlUaLCwlR7DkL%2FKbi1V03y6SAjJPBhMIz8%2F3HORhdWT8cxu1cx2EQvZmtMObBk8QGOqUBRKtPzwyp1WaXHH7MI62A%2B7n%2Bq5WE2YLzKWjUn6jZSbBWlCkfQO21Ax5Q15gdUPUJ%2BFEKevCU8RqSng0y9nKuzQo%2FukWWYItgAGmu95iB5wNv0D%2FH4o%2B%2FSeZxkqSkqJgJlcaSzn4WWl5nLSPund3Hp0EyTXfBgTGXPk4Vyw7auWn%2Bf13BYduy2UANIjjXvi2KPGzDOsvLotWGUf3dVOsE3oe3GIuQ&X-Amz-Signature=d412c2d9b20039e7c47d7d6c499c5267614376c7d6be33e0e9796562c9dc8d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
