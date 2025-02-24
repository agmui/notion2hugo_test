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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEHN3BM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF%2Fl2H68Oiqo%2Fa5C%2BgWGOr7lFTAQd3PKJ74hmrpypsgwIhALMuDMHC43XNV6KI4SEafqyrIwLlEWZLrffHy%2Fq9Gb%2F2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgyGEbxEUJcBICEC230q3ANIbByFHqIJtZl1dLbraiI9w0iD9tUTSbItr2JM0ZgIVpDHchWlzZRV9VIvak356vb24dzbrg5NerBPbtPWOel8wI0uxfQicFrmKPrOL5o18Str8Mcjn3zK2N2byc6L2Ei8cFuyOFwsM4eYpwAeGK7zGFwqBWHVPKfkaQbw0P2Eqw0E%2FiEOHptdfQhBzPEWMPBmFhVFzIyNCP9ZX8qsyeeofC%2BIeO2IeCDdd%2FDrhz0CK8PqRB5pnqb77%2Bbcs0CSWrfa%2BXWRSiZm4huAYdGP24hG1fCRIIJruA1hUbljdA31MA7J8whaO%2B8p2JglagcVeebEPhY3VLZrsULeitO%2BgAImdCCfqEopkG2mMwqGpZXvKUgbRiPzio3pz3Ww5fxH6Btw7vLZT6SwYCWhfbU40DCfsj8fn%2FlUuiAw4QP46q5APziOUIuMOJsXzJlJM7xgOqdpfVajLALEH%2BECR2tI2pb415gtPBGLGhLWv0bUQn9flUWXhTEFtC%2FJLqrsUVJYTTscnOm%2BRZ13nm727Nl8xGPrlslhgIMgD20tNTaHb3AaslczGW3Siid7QAcHWMyBrJrLEmaToE6tFuZb3ED%2BzRgOEA86QXSXEyOyK3tuLx6NQad9kq%2BZ7Yr1nEpLOjCYlPC9BjqkAd4Qqo%2F%2FI48bS9uFmtaXDLp%2Bk79rs%2FExjRTHSLFpeREQ9MpD54reu0L0vUZT%2FUUb7fzxcM%2FDymsDOIVqsOcXZSXyZh7CwknszRF9FKsT%2Bl7z6ODOLOly65fAepK%2FZyoO6mJILZnaP6UI1R5YRHk3cRSQMBRsErhQa3yosyQwGDw102IvZdm2%2BwDsm4wZfC5Kd9%2BMlEPySDBaU2bvB5QRmoW3nz3e&X-Amz-Signature=dd5187454fc1d67d3c34d47e2016ce690426af0ceee334d428e498c4148fdcc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEHN3BM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF%2Fl2H68Oiqo%2Fa5C%2BgWGOr7lFTAQd3PKJ74hmrpypsgwIhALMuDMHC43XNV6KI4SEafqyrIwLlEWZLrffHy%2Fq9Gb%2F2Kv8DCCcQABoMNjM3NDIzMTgzODA1IgyGEbxEUJcBICEC230q3ANIbByFHqIJtZl1dLbraiI9w0iD9tUTSbItr2JM0ZgIVpDHchWlzZRV9VIvak356vb24dzbrg5NerBPbtPWOel8wI0uxfQicFrmKPrOL5o18Str8Mcjn3zK2N2byc6L2Ei8cFuyOFwsM4eYpwAeGK7zGFwqBWHVPKfkaQbw0P2Eqw0E%2FiEOHptdfQhBzPEWMPBmFhVFzIyNCP9ZX8qsyeeofC%2BIeO2IeCDdd%2FDrhz0CK8PqRB5pnqb77%2Bbcs0CSWrfa%2BXWRSiZm4huAYdGP24hG1fCRIIJruA1hUbljdA31MA7J8whaO%2B8p2JglagcVeebEPhY3VLZrsULeitO%2BgAImdCCfqEopkG2mMwqGpZXvKUgbRiPzio3pz3Ww5fxH6Btw7vLZT6SwYCWhfbU40DCfsj8fn%2FlUuiAw4QP46q5APziOUIuMOJsXzJlJM7xgOqdpfVajLALEH%2BECR2tI2pb415gtPBGLGhLWv0bUQn9flUWXhTEFtC%2FJLqrsUVJYTTscnOm%2BRZ13nm727Nl8xGPrlslhgIMgD20tNTaHb3AaslczGW3Siid7QAcHWMyBrJrLEmaToE6tFuZb3ED%2BzRgOEA86QXSXEyOyK3tuLx6NQad9kq%2BZ7Yr1nEpLOjCYlPC9BjqkAd4Qqo%2F%2FI48bS9uFmtaXDLp%2Bk79rs%2FExjRTHSLFpeREQ9MpD54reu0L0vUZT%2FUUb7fzxcM%2FDymsDOIVqsOcXZSXyZh7CwknszRF9FKsT%2Bl7z6ODOLOly65fAepK%2FZyoO6mJILZnaP6UI1R5YRHk3cRSQMBRsErhQa3yosyQwGDw102IvZdm2%2BwDsm4wZfC5Kd9%2BMlEPySDBaU2bvB5QRmoW3nz3e&X-Amz-Signature=d058117d55c07e196c0dc5027d10d88964be7d4e731600f5166d70ceb072b51e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
