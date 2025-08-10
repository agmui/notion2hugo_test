---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=3952d4fb20be571813dde297409802f706dc43a8464293efe2e86aad65c1dc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB34JGF6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrT6M8lu2xfKP5xaS8twHMDCE%2BGXEfO%2BjBNtNg00bDHQIgZhEAAkUvKEtpAy7gdg1Hh3DzgzvAezjytCcNL7zwJkwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlrilsdILcLpdic5ircA0%2Fyz7JD39nTn0NAeV%2B%2F34QBit%2BsM7nWFz0S98r0tGPYxkdwbBRAlQbSx2ClAk6IkIv03sVoofXJN3h3h2KWW7NGM4BJiTzeTXQxwdMRXHbESPQUD6H6j%2BvfplNnBGePm4ihKqcTmfwOCXh%2FXu2UcN65eLSBhWA7ai0Z%2BGAJWWTMM5oo8ziJKP0PYweLjzPH6N7lCIk%2BCwXxeRIC0TdI7f%2FbZCjwqgUuT0NKxLk0zR3r2xXGvXmxulzzx00s%2BXslemcPPtye9V8bvfMaj2aEg5UPy6wDPWA8gi5nyYZBx9s2aySz8IL3LJceGFITKJnVM9uaMmChqdlbHnYFud50tQTVCk732xMMgM2c%2FeXR1rH6XFaTEJYt6qN%2F5kjovbOTfjEyo9EJiydnS0WDZ634T3P1djNO85rMhNQpifi%2BRBTRkQ%2BU5oFakYDtLoKnsP8mn%2BAxFoyhD9HjICYS0phFsA9%2FYp0QvFWtSsNAO2ynWbd7jDRhIALbZGk%2FQroqNhYwu2ltC7yS4s8WD6US1rOi%2FR9dvXnRpg%2Bh7k0%2FD8vymWP6MEfFrP%2FaMZt86Em5gHV0m%2BKUOhwt1uitUOCTLHr4XBYjDrf6Gs8r5vW5G38cQ%2BKryNRhUPf5Mttv4r7kMJO648QGOqUBtpGmQQWA5SA27qUlmJ6gVvv1wkENvwDDmu0F2%2FEdU4iMcc9IbND75v9vaDJswmIu9wWvnGNHnvGHrqrl4jMmIE1ieXnggisnqjAu%2FNgT9dtuHjwFFnvVywZW2bre9PsRl%2BwZXZtwZdfJDOaYPmlMhwX5YToFU9%2BtBPAPii3fyb1ZOoEnNIFWHmgTgXSF5zuCWAlzloaRad9sJfPBRP3Pss%2FhF1%2BU&X-Amz-Signature=242b1b3efdede82962e71bf499204215b72fc2c4d932030dfe7136a1c553bf4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
