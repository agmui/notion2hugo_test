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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAEX7FQC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWgmBv4pzQiV2Oooemj%2F5XyS8FvZahBqkvmjQJ%2B0krQIgQkbx8gh6wtpT9cvj2dhEDMSHjq6R9bJGCvHc4uPMfmoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOGkCBYS2do5vokh3CrcAwXGaMiuMa%2BwV3qlWusL42SWGTyyT6RLPUDNs5JQd43b%2BpaoNhxc9Sb6vXG4FMcnJP5QDwuCfRt8z73EErK1mGryhglQiQTQlj0nhOsipPwrk9Byc0ZGaiKDj0XnXekiw8qIEOI5ALd82B4ofjXnbpLPgsDm61F5r7G0f6OT8iRhjSelrENP1OfWLyCmrC1B3q0iN8vlmDllVy%2F%2FJwyMJmx2VfVzh5TY%2F8yZ2pEcBaTyk2BhJRxkHHrp8eqyNYNT9q%2B91u7MARVN%2BxJ%2FAvxQEMZzCW55U0UDJPsb9mUW9sO0rrzGi1gqTM5mbMbnN9j2qzADeuWb4IiT5WcaJbflEpz4JDk8KFC%2BYYQuUaH7OFweGRYjXoomszao8UssGO4CYcj%2Bc32d53XlYiKZ0KrvLvrgDv3Jg3oxZjkX8OSSROcGbQK6M5Ww4BGnzTcVo90SPLr%2BR4ybUODCx8gGYldZ04ak8cY1WoTogMvHAagbhYde3SR1EDu70yw3s25pCtGH22jQmJ9Dol6zR%2BUW0tnCwsc4Z%2FcCHQBEiIMwblMkafpnlGbUXXZESlAdAMAdt%2BVIYVxv0fV2E%2FBc2FtYwzUdDl%2BjRXvBFnWckwilCknp6oxFC9nalfRvDtGmr1hcMPOA1sEGOqUBXTgoAjKd3skj0qz90v%2FeJUBya%2BAGfYD56XNqLR2nhm4fW4y1Yr0Pwz%2FzpcWlxUh2fvbJOr11sNizOQV%2FtI2%2BnV7wj96IQX526fZGhkdToRIpxw9e2NJCMfLziSkyco1AZFXGG24rKzR7ZkFVl4tR%2BIw6zu6JSpdlNCMRlCRtVqwN52hthO1EbNZZUQ1FL0FP6%2FAQeQ%2FcLdd5YkMg3P8ibjWRU8LD&X-Amz-Signature=3a55a3ccd25249c476abb2f937bb33f7d871d316f0b9b3f1901df2bccf347d11&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAEX7FQC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWgmBv4pzQiV2Oooemj%2F5XyS8FvZahBqkvmjQJ%2B0krQIgQkbx8gh6wtpT9cvj2dhEDMSHjq6R9bJGCvHc4uPMfmoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOGkCBYS2do5vokh3CrcAwXGaMiuMa%2BwV3qlWusL42SWGTyyT6RLPUDNs5JQd43b%2BpaoNhxc9Sb6vXG4FMcnJP5QDwuCfRt8z73EErK1mGryhglQiQTQlj0nhOsipPwrk9Byc0ZGaiKDj0XnXekiw8qIEOI5ALd82B4ofjXnbpLPgsDm61F5r7G0f6OT8iRhjSelrENP1OfWLyCmrC1B3q0iN8vlmDllVy%2F%2FJwyMJmx2VfVzh5TY%2F8yZ2pEcBaTyk2BhJRxkHHrp8eqyNYNT9q%2B91u7MARVN%2BxJ%2FAvxQEMZzCW55U0UDJPsb9mUW9sO0rrzGi1gqTM5mbMbnN9j2qzADeuWb4IiT5WcaJbflEpz4JDk8KFC%2BYYQuUaH7OFweGRYjXoomszao8UssGO4CYcj%2Bc32d53XlYiKZ0KrvLvrgDv3Jg3oxZjkX8OSSROcGbQK6M5Ww4BGnzTcVo90SPLr%2BR4ybUODCx8gGYldZ04ak8cY1WoTogMvHAagbhYde3SR1EDu70yw3s25pCtGH22jQmJ9Dol6zR%2BUW0tnCwsc4Z%2FcCHQBEiIMwblMkafpnlGbUXXZESlAdAMAdt%2BVIYVxv0fV2E%2FBc2FtYwzUdDl%2BjRXvBFnWckwilCknp6oxFC9nalfRvDtGmr1hcMPOA1sEGOqUBXTgoAjKd3skj0qz90v%2FeJUBya%2BAGfYD56XNqLR2nhm4fW4y1Yr0Pwz%2FzpcWlxUh2fvbJOr11sNizOQV%2FtI2%2BnV7wj96IQX526fZGhkdToRIpxw9e2NJCMfLziSkyco1AZFXGG24rKzR7ZkFVl4tR%2BIw6zu6JSpdlNCMRlCRtVqwN52hthO1EbNZZUQ1FL0FP6%2FAQeQ%2FcLdd5YkMg3P8ibjWRU8LD&X-Amz-Signature=ba13e286bc7b76df73b2aab981e3f86163aad8dcd7bce9442e72103919d2ffbe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
