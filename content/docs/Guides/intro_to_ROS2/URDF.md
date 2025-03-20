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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTZEETY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCCtqeL6X62sKB3%2BRWzYranUGYWN2TCOY5%2FS%2FWO4mWJFwIhAMx44T5VFn2FuUM5hBZUybLAas8KlVuvVzbAkcrzlkGJKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynN4jeUODvqBUfbsgq3ANxY%2B1Ws4Ondnt1L1PcsIaJqN9DCpGq7lqVUdxYYRqxQNHc5%2BWj4Ywl3CJ1Gycggh%2Bxw3sBumhPyZJhk7iXjFaC6ewRPBfGrezx9YwIXTm73Hwba4KjXu6%2BiVFVc3Gn4%2FOPI4sqnUmuJMhFbjJXlBK80A2YnKGlt97WgeI2GjvSV5oQL%2FGgBhCVirQghnlGnhYDcOsrjRgNLHl98stBIl86qTtVTvES7Nh%2FFP2rFSjbsAcTJThJ9ftZ2HvmH9OsHxEN%2FVNsvlH0OTWNQmXS6IqEplfsayp7%2FdeKd7AcktaZDxIw29xmDwikqp4dvp9LanSdDFQTGtjGo4glxG9lNGwk%2F3Qtcp8V1YuelC2QFgX7zGoHyLpu%2BEl4Ae6rrsYkDhPNqFnxnbaKVE0AtSfrfeptFcmxEtkPNixBTFk0Y%2BiV7MjKLXfkctLanlYxSbRx5GlOA5Bz8ir0OLLgpHGnfgWVH8FNt97H7IT82H8vVWqCkpw8I5533EIQqnSe7uYN3xmvjqaBcoI2Yevf4BBaaXpRAGoPnmJ51iFjjCWXe15qLClhnFld0UhOI5C%2B5i4QcT84YV3Qr3BTJqqsoKNO9gCo1A6dYj3CodSShY7SiSg45OEYO9UX5TZIFvPcyzCJh%2FC%2BBjqkAQaPd1QkBuqkyBCR8l%2BVmCIT5o2V5%2FF22LOn3oHpgXHT7LKgWOOH%2F3%2FXoFVbUK%2BM5rI6ERyf1p3XOV8O8SmfPWFhcgeE%2BgfGfxWTT%2BKgFCceI7HLPpI%2BUytcDpqtli2U0GaQRW4ptO6MTPq2bLSkIuIHI9rdHyGv9jM7wIpY%2Bu2eTqRChygIsDR6paPDCGPZJs2nrpFQ0aoYslter5cJ0hfaFCJG&X-Amz-Signature=171e6dcc1e1da01bde38fec626caf81edb89de46b439fc664768c49a3ef8965b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTZEETY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCCtqeL6X62sKB3%2BRWzYranUGYWN2TCOY5%2FS%2FWO4mWJFwIhAMx44T5VFn2FuUM5hBZUybLAas8KlVuvVzbAkcrzlkGJKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynN4jeUODvqBUfbsgq3ANxY%2B1Ws4Ondnt1L1PcsIaJqN9DCpGq7lqVUdxYYRqxQNHc5%2BWj4Ywl3CJ1Gycggh%2Bxw3sBumhPyZJhk7iXjFaC6ewRPBfGrezx9YwIXTm73Hwba4KjXu6%2BiVFVc3Gn4%2FOPI4sqnUmuJMhFbjJXlBK80A2YnKGlt97WgeI2GjvSV5oQL%2FGgBhCVirQghnlGnhYDcOsrjRgNLHl98stBIl86qTtVTvES7Nh%2FFP2rFSjbsAcTJThJ9ftZ2HvmH9OsHxEN%2FVNsvlH0OTWNQmXS6IqEplfsayp7%2FdeKd7AcktaZDxIw29xmDwikqp4dvp9LanSdDFQTGtjGo4glxG9lNGwk%2F3Qtcp8V1YuelC2QFgX7zGoHyLpu%2BEl4Ae6rrsYkDhPNqFnxnbaKVE0AtSfrfeptFcmxEtkPNixBTFk0Y%2BiV7MjKLXfkctLanlYxSbRx5GlOA5Bz8ir0OLLgpHGnfgWVH8FNt97H7IT82H8vVWqCkpw8I5533EIQqnSe7uYN3xmvjqaBcoI2Yevf4BBaaXpRAGoPnmJ51iFjjCWXe15qLClhnFld0UhOI5C%2B5i4QcT84YV3Qr3BTJqqsoKNO9gCo1A6dYj3CodSShY7SiSg45OEYO9UX5TZIFvPcyzCJh%2FC%2BBjqkAQaPd1QkBuqkyBCR8l%2BVmCIT5o2V5%2FF22LOn3oHpgXHT7LKgWOOH%2F3%2FXoFVbUK%2BM5rI6ERyf1p3XOV8O8SmfPWFhcgeE%2BgfGfxWTT%2BKgFCceI7HLPpI%2BUytcDpqtli2U0GaQRW4ptO6MTPq2bLSkIuIHI9rdHyGv9jM7wIpY%2Bu2eTqRChygIsDR6paPDCGPZJs2nrpFQ0aoYslter5cJ0hfaFCJG&X-Amz-Signature=1cb5e7dec8dea0ca2ce88a3cca8f359fb92e299ed334048edd38af27b381008f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
