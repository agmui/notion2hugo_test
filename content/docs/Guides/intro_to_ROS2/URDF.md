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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSH7OFZV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1e3W2jBoGtvbSqDXtBrc6WaWfBT11TPBqqgaSyBpzjAiEA5kajR8fYsvV5rH1Z85oNqTVDAlCjkIz9%2Fp0%2BhiTLgCYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC8mKPHc7OkGk3mZ9ircA3goLO5OvOoxMOqu70RCMj8d4c1AwL4sbSXRunzUrURqJv0hDE2T5Eh%2Fbumut89H6eyAsX%2BNRwXuwvUhLK%2FkKe42QvM7Imx8%2BdZDBAw%2BXBAxwrutIyv1OOGVTbSmuErYFj1YkPi%2F4gTn6m5m%2BSayCcKbDyPKJ%2F5WOME5MtFHwc%2F7LZOPXPbpzPvrE7kE3toHNgGp21IhBEjyLeGRSFs84hE2yBkBSu9x7Q9lAJtE0ppyXTi1aYU7WZC90LCfE4GVysMB7Y8upF2XZ5t92YTfS1ZVwNXzZE2wqHiUVR8grPmwfaOjJ3kNe7CE5JUlI%2FWzwmMcP4WXSoEtCPLssQurtihgQ9o3FUHtefhAPsfgjz8ItinUdrzVgAgJ3JcnrtjyeQ5FjobwYNsCjB0WysYkU459vYZJ4HXlVCW8p4ISnOzoVr9HIfbzbXLO7n4TzK5CJWU%2F1cu87fGwSNLlCPwta5GsyykAaXUSe4Mf2Yd8h76bXp%2FJFhNgfmYTSsWWiFjLR0zQXHACk7YZ%2BkzedKfFOpZ%2BnZOyhALe%2FuCdto6hOcxmI%2FgA2hd9y1smMt%2BXsXbdvhNG75yFtSg3J79kACPFBuG%2B1q372eLNve%2Bw9JncVbf6iYaNw4Ql%2B2o6gOxuMO2Flr8GOqUBp7G1tXgXc3qwXn755Yp2Z7E6q61oQ5M9ML0YpKtFCAb1hu%2BqTQuRzzdx8eT07Gr3nEFMkTvVmqAMh7i1DIbVGBn9ODSP9Cgv9z15w6AADPy%2F9V99HvAvgp49K08MhajAmZiuHo9B8J1TM6N5f0aBSpxXtp1B2sIqlLfwM%2BQOyKsTDRkVUa5JA1VEiyfu4ztmTvleubpc0VHuABzLJr0cxO5h740o&X-Amz-Signature=04b0b22bf8a0c2c224aecdc61e569d48743481c8c3863ffe35e4a43e71ddc942&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSH7OFZV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1e3W2jBoGtvbSqDXtBrc6WaWfBT11TPBqqgaSyBpzjAiEA5kajR8fYsvV5rH1Z85oNqTVDAlCjkIz9%2Fp0%2BhiTLgCYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC8mKPHc7OkGk3mZ9ircA3goLO5OvOoxMOqu70RCMj8d4c1AwL4sbSXRunzUrURqJv0hDE2T5Eh%2Fbumut89H6eyAsX%2BNRwXuwvUhLK%2FkKe42QvM7Imx8%2BdZDBAw%2BXBAxwrutIyv1OOGVTbSmuErYFj1YkPi%2F4gTn6m5m%2BSayCcKbDyPKJ%2F5WOME5MtFHwc%2F7LZOPXPbpzPvrE7kE3toHNgGp21IhBEjyLeGRSFs84hE2yBkBSu9x7Q9lAJtE0ppyXTi1aYU7WZC90LCfE4GVysMB7Y8upF2XZ5t92YTfS1ZVwNXzZE2wqHiUVR8grPmwfaOjJ3kNe7CE5JUlI%2FWzwmMcP4WXSoEtCPLssQurtihgQ9o3FUHtefhAPsfgjz8ItinUdrzVgAgJ3JcnrtjyeQ5FjobwYNsCjB0WysYkU459vYZJ4HXlVCW8p4ISnOzoVr9HIfbzbXLO7n4TzK5CJWU%2F1cu87fGwSNLlCPwta5GsyykAaXUSe4Mf2Yd8h76bXp%2FJFhNgfmYTSsWWiFjLR0zQXHACk7YZ%2BkzedKfFOpZ%2BnZOyhALe%2FuCdto6hOcxmI%2FgA2hd9y1smMt%2BXsXbdvhNG75yFtSg3J79kACPFBuG%2B1q372eLNve%2Bw9JncVbf6iYaNw4Ql%2B2o6gOxuMO2Flr8GOqUBp7G1tXgXc3qwXn755Yp2Z7E6q61oQ5M9ML0YpKtFCAb1hu%2BqTQuRzzdx8eT07Gr3nEFMkTvVmqAMh7i1DIbVGBn9ODSP9Cgv9z15w6AADPy%2F9V99HvAvgp49K08MhajAmZiuHo9B8J1TM6N5f0aBSpxXtp1B2sIqlLfwM%2BQOyKsTDRkVUa5JA1VEiyfu4ztmTvleubpc0VHuABzLJr0cxO5h740o&X-Amz-Signature=591961ae33415016f505f775f8573b1db5177d170f8bcb7ea6310f387d37469b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
