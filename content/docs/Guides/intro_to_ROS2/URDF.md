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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVHD6Z6%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCO2zMZg7yqtCdqjLu7SwYDLnTazKJ7jkD5MM%2BSDga2HwIhAKsVGu%2FkanOaGbiMav0gTurWeFirLOVWbKIqkhfYCaIiKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZTF5hwwXwYCEKjsq3AOiTRXOMIClSNx6oSNtkDmYOKgFvJeY8Q7dYGPtlcbN6OG6QJex3nrwhAlOlUNZKLvnW2PnZAeMwqEu03R3IJabkV3kg1SWyyYOrG1BIigHJu1i3n56dN6GjExHFOvKlsS%2Buh1voFcXbsTQfkKHj2Spg61CkaDx4ntBt4pkd9HIpklzlkrC130a7xD6WT5O7kLbGxrdOvHya4HoamnICzb%2FibeUhM0oDYq24nTsRt5cb%2FpVw3amaSrkiuunAnlNT2UIB0WXJy%2BfNxrS10owVPS97N55I2Hy49glMhuyICnBa0ppFjyjZivFsJeL2DIY7RUFb210ZyDHyKg7kDen1CvPPT52UDJNcV4pBjxBee5faMNHimNDg9LPuwPYGy7lgonxaBGn2EDtlGRibAxXu93HRYtKFH8AIRjWAklnOpgQB%2FtEOGEwvlHwHZzn2XrQ8aA9rLOxlvl%2FuDIQzRkYCBhzxtJBCdD5ujsWdXXQogENxqaC9hDfUeSf2%2BeDP6B0%2FCB6siRdKSvEpFxNOQctmAMWWvLDhJP23paxISz16YBpgaG7loV952NVztrb7cxy%2Bbxi4AgBZlATa8sVnww6uqwNy1bgCSrZS%2B5wmktsrmQPQzsImlayNpBgRRjyazCD3MbABjqkAcfGKEbvcgK0pE1jh7Oxn1%2FfR%2Fa5GNiylVG9z5t8jhd3sMVioCHDzXegO%2BKMxVAPHjs5rSwyipAXaGTGXUH51mlehV6qFwReApQleVVsVg6A4oLnxs5%2FdMhB50hmfVghGDPZlrnbJD0t6s%2FxFqwnxnSAPYX%2BYYIXlejmtVp1RS4skAeYIRMWT6%2FnSjamyvVeZrROn80jkM7mov1qBXGlTBIJGh23&X-Amz-Signature=1edf8879729dfedf278933e30ab7bbbd21e2f03dd28d248e32706a6f7d7c075e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVHD6Z6%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCO2zMZg7yqtCdqjLu7SwYDLnTazKJ7jkD5MM%2BSDga2HwIhAKsVGu%2FkanOaGbiMav0gTurWeFirLOVWbKIqkhfYCaIiKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxZTF5hwwXwYCEKjsq3AOiTRXOMIClSNx6oSNtkDmYOKgFvJeY8Q7dYGPtlcbN6OG6QJex3nrwhAlOlUNZKLvnW2PnZAeMwqEu03R3IJabkV3kg1SWyyYOrG1BIigHJu1i3n56dN6GjExHFOvKlsS%2Buh1voFcXbsTQfkKHj2Spg61CkaDx4ntBt4pkd9HIpklzlkrC130a7xD6WT5O7kLbGxrdOvHya4HoamnICzb%2FibeUhM0oDYq24nTsRt5cb%2FpVw3amaSrkiuunAnlNT2UIB0WXJy%2BfNxrS10owVPS97N55I2Hy49glMhuyICnBa0ppFjyjZivFsJeL2DIY7RUFb210ZyDHyKg7kDen1CvPPT52UDJNcV4pBjxBee5faMNHimNDg9LPuwPYGy7lgonxaBGn2EDtlGRibAxXu93HRYtKFH8AIRjWAklnOpgQB%2FtEOGEwvlHwHZzn2XrQ8aA9rLOxlvl%2FuDIQzRkYCBhzxtJBCdD5ujsWdXXQogENxqaC9hDfUeSf2%2BeDP6B0%2FCB6siRdKSvEpFxNOQctmAMWWvLDhJP23paxISz16YBpgaG7loV952NVztrb7cxy%2Bbxi4AgBZlATa8sVnww6uqwNy1bgCSrZS%2B5wmktsrmQPQzsImlayNpBgRRjyazCD3MbABjqkAcfGKEbvcgK0pE1jh7Oxn1%2FfR%2Fa5GNiylVG9z5t8jhd3sMVioCHDzXegO%2BKMxVAPHjs5rSwyipAXaGTGXUH51mlehV6qFwReApQleVVsVg6A4oLnxs5%2FdMhB50hmfVghGDPZlrnbJD0t6s%2FxFqwnxnSAPYX%2BYYIXlejmtVp1RS4skAeYIRMWT6%2FnSjamyvVeZrROn80jkM7mov1qBXGlTBIJGh23&X-Amz-Signature=be7acd26fda140c88def97beba837aaf4be3b002d81a61ae2af59a73e034cdb7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
