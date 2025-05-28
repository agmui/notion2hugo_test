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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2MQWXM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmuOS5HDglVVR0tjitTTg9QeLY2t0BYVVcMUuqBe2cAAiBW2QKgpbarDUXMLVlXi0rnY71CfEfT0RCZBhSnufe08yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMRBr7%2F5O4Ndp%2BeXVKKtwDIKHDK4STWMJwOXoGLfzvC99hmRZXhGDaniCPg%2FdoZZ%2FT6%2FV0gNLpJG3GevD9bNF0pZ39AeChGWc%2FYVhZVeJNK1UBqRhkMdYQOcT2iV3r%2BTLs7SVFCLRnPIy8Rjvy7npHS9OnykE6vYjuw969q6f%2BvldGDfBZQyJpB55eFrMPDp0d%2FXvQXeoRZpHnL7RmkiTJqTaNNf%2FFiwyVMhFepLgd44S%2BV1oqjZOP0%2Fppvp4RLltLnLilKjaJq48JfhWhNTyMUazHHX3dZm7EVFT5rcyu8HSU8YVrOU4NHdNntFo8dqZ0SBpKaT9kP8qcOFKnY9nA6OU%2BPDwcBaQWEREWr5JqIJcTkRf5fsjaPR%2FgmgppRujmhMu2atL7Vp1h%2FxoeD%2B8TLo5mOQ4q3eJHFS4ocrhCmqpZa%2BGDHaP1eUBN1eBSpCVd4A5QVdGuG0gcpqm%2FkTJ4HS6lQbeSzBLwUpxwBHuo4V9uXzATHnUYVy9Rq3RTsQrLsAg6KIjljKny5%2B46qWjU5Xzc21KeLQMX%2F3tw%2F%2FtMh9AN6dl8MwC5qf64X%2FcuMOf5NGYb6imGU9FPdPIX6OOIQM%2FiqDSss9fDBZ%2FlNQtArVN4dhzKVqQNuwAVsqCdAYFnSkLByCAyZiGsJdswtpDewQY6pgH7s4wQ7BF3fHY6dd6%2FB3rpC6VnyRZqUjhMu4d0%2FkW2kxT6BTF0K%2FHVAq%2BNm4hDbT4D7NvZm6xs2y3dKyqYV1c5m7x%2BLgAe7m5KrqEiSgnBGxeqQJAtMO0tmM00nrvBfrA1aXuimoe7zC2r4Kcd5%2BRtRKZc6z6LeezkCGTtcOX6J9XX3HNPrQmz74eXJqnNqB0J%2BB3EtSfS5skqkc7wtfyehFt%2FrxMs&X-Amz-Signature=2744fb63531b3eb72671f0bce5cf36a7495f38de1496dbcb0688637a7463a9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2MQWXM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmuOS5HDglVVR0tjitTTg9QeLY2t0BYVVcMUuqBe2cAAiBW2QKgpbarDUXMLVlXi0rnY71CfEfT0RCZBhSnufe08yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMRBr7%2F5O4Ndp%2BeXVKKtwDIKHDK4STWMJwOXoGLfzvC99hmRZXhGDaniCPg%2FdoZZ%2FT6%2FV0gNLpJG3GevD9bNF0pZ39AeChGWc%2FYVhZVeJNK1UBqRhkMdYQOcT2iV3r%2BTLs7SVFCLRnPIy8Rjvy7npHS9OnykE6vYjuw969q6f%2BvldGDfBZQyJpB55eFrMPDp0d%2FXvQXeoRZpHnL7RmkiTJqTaNNf%2FFiwyVMhFepLgd44S%2BV1oqjZOP0%2Fppvp4RLltLnLilKjaJq48JfhWhNTyMUazHHX3dZm7EVFT5rcyu8HSU8YVrOU4NHdNntFo8dqZ0SBpKaT9kP8qcOFKnY9nA6OU%2BPDwcBaQWEREWr5JqIJcTkRf5fsjaPR%2FgmgppRujmhMu2atL7Vp1h%2FxoeD%2B8TLo5mOQ4q3eJHFS4ocrhCmqpZa%2BGDHaP1eUBN1eBSpCVd4A5QVdGuG0gcpqm%2FkTJ4HS6lQbeSzBLwUpxwBHuo4V9uXzATHnUYVy9Rq3RTsQrLsAg6KIjljKny5%2B46qWjU5Xzc21KeLQMX%2F3tw%2F%2FtMh9AN6dl8MwC5qf64X%2FcuMOf5NGYb6imGU9FPdPIX6OOIQM%2FiqDSss9fDBZ%2FlNQtArVN4dhzKVqQNuwAVsqCdAYFnSkLByCAyZiGsJdswtpDewQY6pgH7s4wQ7BF3fHY6dd6%2FB3rpC6VnyRZqUjhMu4d0%2FkW2kxT6BTF0K%2FHVAq%2BNm4hDbT4D7NvZm6xs2y3dKyqYV1c5m7x%2BLgAe7m5KrqEiSgnBGxeqQJAtMO0tmM00nrvBfrA1aXuimoe7zC2r4Kcd5%2BRtRKZc6z6LeezkCGTtcOX6J9XX3HNPrQmz74eXJqnNqB0J%2BB3EtSfS5skqkc7wtfyehFt%2FrxMs&X-Amz-Signature=cd1d46cf3789d799ad9242043c394c28420cbb388951b99d065847d54d485046&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
