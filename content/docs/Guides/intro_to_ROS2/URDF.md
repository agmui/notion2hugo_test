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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O274B2C%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIDwJ2XARLTEwrxdLp3yiFU3IwBYuHaKFsrTtZklk1An6AiB9pDEx3XOeqDzUXGhr4c6N4a%2Ff3x%2BjhgrJhF6pv5YASyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMn9gQartXMELzZOEHKtwDDPoOdZbEY%2FaPVDLPZ8sH4DW6YCSNrizsoLeNxDQUkZP4IHZGVMkSIyBE5GVqV0VuoT0wAPK1zdOecpyCa2maMN2uQzyFAN7Clut46B5jk1Z7Nbo4TGufeu05O3TWEoCmLcuRI5WdZkRMKI6k5GsBtIsI0kDXgPJMDHkR%2FL83qCV0bsVhIwE3JGcvDe9SYdAPT7%2B%2Bhqaa53BoGp7Zq3rVEui1yVNRs%2BlBPizT8W%2B17nlrRPYBY2CY3iuG7%2BFgEG8RIX12LvjLDxzZuRW%2Bq4ZoYKPTOsOCxfihCz0nncArpRZPdziaWh%2BbWnOwbtxFpxx8xDHLvdaUYAprfSLIXLrygGP7LxpQPkeuBX7hsonyBFOslfNBHtuZz0495zTB30zYrXr3rN0maUVGH2HpI4n58mgXNYCro57GMI481ZhUA51HRXX5V8Kv4Lxzbz%2Bvh4ZsKDZop0AIVelSivgY1U3GPCh%2BY7mLocfaSLRMcrv%2BwU0CNmpdJ557xULNzVjugxN5hR1JQNEa1%2FgK4IXlXJdMv2gsqAaA2hJt67nQRDr56H6V16d5V2jnJ92t4KxR%2FdDj8gIchgoa6gOM1A9Py68SanpTqSki142HJJO26GhdFTEuPWgns7nSnk8H2UMw4tnZwwY6pgHIFbm647trrLQXPzVNfGl6FbiU%2FrzyLLN5gRXaHQUXkNGQSVgaBiyXj5TR%2Bc1JWIMII0JYhhIWLvDMux7TOPBq1jU7%2BG5qJ%2FxApemkXEOtrcY8LBYdOHmNQDk1Yuzhs9NL8rbbObfuJKyHjR3EZLVKb50Kl0xD6Dd7tmPaZlPYBlr7qNzjYKShVCtm4wxkzlHilZXTCYhNP3hao0wV1Gmbq%2B16UXeU&X-Amz-Signature=5d074573220383fb0d9edd6af41050edf0dbb94592a70000f2bd39ae79de774b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O274B2C%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIDwJ2XARLTEwrxdLp3yiFU3IwBYuHaKFsrTtZklk1An6AiB9pDEx3XOeqDzUXGhr4c6N4a%2Ff3x%2BjhgrJhF6pv5YASyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMn9gQartXMELzZOEHKtwDDPoOdZbEY%2FaPVDLPZ8sH4DW6YCSNrizsoLeNxDQUkZP4IHZGVMkSIyBE5GVqV0VuoT0wAPK1zdOecpyCa2maMN2uQzyFAN7Clut46B5jk1Z7Nbo4TGufeu05O3TWEoCmLcuRI5WdZkRMKI6k5GsBtIsI0kDXgPJMDHkR%2FL83qCV0bsVhIwE3JGcvDe9SYdAPT7%2B%2Bhqaa53BoGp7Zq3rVEui1yVNRs%2BlBPizT8W%2B17nlrRPYBY2CY3iuG7%2BFgEG8RIX12LvjLDxzZuRW%2Bq4ZoYKPTOsOCxfihCz0nncArpRZPdziaWh%2BbWnOwbtxFpxx8xDHLvdaUYAprfSLIXLrygGP7LxpQPkeuBX7hsonyBFOslfNBHtuZz0495zTB30zYrXr3rN0maUVGH2HpI4n58mgXNYCro57GMI481ZhUA51HRXX5V8Kv4Lxzbz%2Bvh4ZsKDZop0AIVelSivgY1U3GPCh%2BY7mLocfaSLRMcrv%2BwU0CNmpdJ557xULNzVjugxN5hR1JQNEa1%2FgK4IXlXJdMv2gsqAaA2hJt67nQRDr56H6V16d5V2jnJ92t4KxR%2FdDj8gIchgoa6gOM1A9Py68SanpTqSki142HJJO26GhdFTEuPWgns7nSnk8H2UMw4tnZwwY6pgHIFbm647trrLQXPzVNfGl6FbiU%2FrzyLLN5gRXaHQUXkNGQSVgaBiyXj5TR%2Bc1JWIMII0JYhhIWLvDMux7TOPBq1jU7%2BG5qJ%2FxApemkXEOtrcY8LBYdOHmNQDk1Yuzhs9NL8rbbObfuJKyHjR3EZLVKb50Kl0xD6Dd7tmPaZlPYBlr7qNzjYKShVCtm4wxkzlHilZXTCYhNP3hao0wV1Gmbq%2B16UXeU&X-Amz-Signature=cda7b9428e265db3d971283172aa0c9ab25bd64434545126d5a62eff4392cabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
