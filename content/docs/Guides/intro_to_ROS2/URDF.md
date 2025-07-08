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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4FWPGT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHI%2BDQSL4CkLmZqpu1zJmTIaXPb32laGsXl%2FGwj8Wa2PAiAHkvzMN6S7%2BqEeK4zzlxTdCzUhddHj75bMM2G5KMrLtSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyng2gxXSUkG164WeKtwD3ZkfhAwfBTXXPscZoygZgKMf8KiiAH0C1UKulFaHdniJVyIj6dobv7zuUJ%2BJ%2B3ThoaRzXHbUMxFxyjWDvUR2XUGJ1EEnMH5fwvEK16LWHX4zFquYMe7ZeA2FkrK%2FmD9sIJenvduRvyIAAEB1m2JA%2FGkAtqXG%2B46Jlv5hTEYFsjMTYgQiM8rgV6Qz6PL6dofSLrHdCSHql3GC2p0jReeu7IlxsAB5pvsrkpon32APh0rzZudvSHrzo4QB2YBIZu44fygr5wbJQIm0Z6gWoierBTlnv9kv0ioeULDlDfugR%2BfHS8RFNKpx0%2BtvWGHN11hZIeFq8voISOQoqFxX%2B9XMytIAN0RrFnB34ff%2FyzGFwqWv7dkWx%2BzQTEi9%2FUGZvbiStVn%2BSzh0AiZtZ04Y07JrYOR6HV9HuZmTGaxH4q79y8u4wyVz8slHGMqnVOBu1tAUyPuXx6d0KXl%2F%2Bdwj7PXZSd2Cw%2BOsb8xMwYgc%2Fi7uqB8wlrfr3ExpvTb52XDx873c5Ry86%2BldCP4wP61L%2FYaN%2F5G6YGBF4hfBqNNoPRFSYwgAFIQxncagiLPTCHHIlwmnH8aK0p4wUOx%2FEIsZCjfotXebQLMBNUGrqtob7QUpQHto3v9VzKSIsysAGqkwwpSzwwY6pgFUq5yOe%2FOCLoXGRCUTxVW%2FZ9EiVbLzftuo6R%2Btha3Zk%2FQl%2F%2BBGXN4gfuDwv7gfYiEOTtmD1HFX4gKLkK1Yi307gBs%2BB8Y3Cd1fpPmg14ZYV4cZ1BAk8OTUnS1Xu6Eh1K8FvVh1yp5FdoKnO58WX57Rzlh5UXAiJrGhYTDx%2BtCzMBqdPOUwYDpOafbhlbFrwWGBSkZz32AtcPmnJVi7wOSXqUOoTAo8&X-Amz-Signature=6782c48bcfd0ad8a27a239fd0813e74c4c3733c608fe3482aae615f9851d876c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4FWPGT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHI%2BDQSL4CkLmZqpu1zJmTIaXPb32laGsXl%2FGwj8Wa2PAiAHkvzMN6S7%2BqEeK4zzlxTdCzUhddHj75bMM2G5KMrLtSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyng2gxXSUkG164WeKtwD3ZkfhAwfBTXXPscZoygZgKMf8KiiAH0C1UKulFaHdniJVyIj6dobv7zuUJ%2BJ%2B3ThoaRzXHbUMxFxyjWDvUR2XUGJ1EEnMH5fwvEK16LWHX4zFquYMe7ZeA2FkrK%2FmD9sIJenvduRvyIAAEB1m2JA%2FGkAtqXG%2B46Jlv5hTEYFsjMTYgQiM8rgV6Qz6PL6dofSLrHdCSHql3GC2p0jReeu7IlxsAB5pvsrkpon32APh0rzZudvSHrzo4QB2YBIZu44fygr5wbJQIm0Z6gWoierBTlnv9kv0ioeULDlDfugR%2BfHS8RFNKpx0%2BtvWGHN11hZIeFq8voISOQoqFxX%2B9XMytIAN0RrFnB34ff%2FyzGFwqWv7dkWx%2BzQTEi9%2FUGZvbiStVn%2BSzh0AiZtZ04Y07JrYOR6HV9HuZmTGaxH4q79y8u4wyVz8slHGMqnVOBu1tAUyPuXx6d0KXl%2F%2Bdwj7PXZSd2Cw%2BOsb8xMwYgc%2Fi7uqB8wlrfr3ExpvTb52XDx873c5Ry86%2BldCP4wP61L%2FYaN%2F5G6YGBF4hfBqNNoPRFSYwgAFIQxncagiLPTCHHIlwmnH8aK0p4wUOx%2FEIsZCjfotXebQLMBNUGrqtob7QUpQHto3v9VzKSIsysAGqkwwpSzwwY6pgFUq5yOe%2FOCLoXGRCUTxVW%2FZ9EiVbLzftuo6R%2Btha3Zk%2FQl%2F%2BBGXN4gfuDwv7gfYiEOTtmD1HFX4gKLkK1Yi307gBs%2BB8Y3Cd1fpPmg14ZYV4cZ1BAk8OTUnS1Xu6Eh1K8FvVh1yp5FdoKnO58WX57Rzlh5UXAiJrGhYTDx%2BtCzMBqdPOUwYDpOafbhlbFrwWGBSkZz32AtcPmnJVi7wOSXqUOoTAo8&X-Amz-Signature=6598c0f7e107cac0e452c20ef27b801d1908ee0b116ebf231c761d8f8f7c2170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
