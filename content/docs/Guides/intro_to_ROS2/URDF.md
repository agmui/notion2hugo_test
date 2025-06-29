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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEOZ4OII%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoY3Z75ioXSb2LRWdrHBZdIGPhfXsWhO49XcBr7NGqjgIhAM1pRuEx7yjE6iU64%2B4z9WLTFtl0%2FpLPQbnLJBXGFCtOKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwwd9uvx5j6Sb4bVt4q3AP89Nat8Rly%2FzKfyOIPaY5RAAK%2FXVUTVZOjdZqVpHOejEgsv%2B1x5FfX5pkm0xSRrbO4vKzEyM9sz6bRxkAFnuF%2FRcor7FosASy1PNOSw0hIb2lutBNs52%2FZTYrRJXmgkOWv0tKMt1GcHqb1%2FQHLV6ULEwGCaDHe20B6HJ%2BXm8q7VZ3Av7f2Ryr7kwA%2BqgGwjoHvpiQE5wznbGYqjhj%2FHUNjOy1l2K2TfM8w1bVzf%2BxQkOfjgMK7iUasmM5NgbGj%2BrdZZemOYZnrB0JwNFcCeQcSsO7tCxYnls1CO4mv1wF0w7rD0IattnM%2Fu0OwquUYxydiLD6kQY7dMid3FZeSK48tEAQjd32dDhJNaZVgvMaYBY1pAaR0wwljmtCAji5bYZcR7%2Bt%2FQaYDIl2t7y5M1wkNx9mN6NusI5DWBsFRE0RLA6z13KYmPXCd1s09frsLqaTkgm53GNMJia2PYoX7cQ%2BsbkqXo2YMWBocn8OTA3KaCrZbpE%2FlhwL%2BzjdFBfPqmFOVAY0DXZXuLCjfFbQPb7Wh49cqXsgOejVAy%2BnpJSlEjzffWrokoPx4NVr1dDUg3KtlL9os5lIXy4M25xV%2BMpdJrEeZW7kgC9pClV%2BsR9%2FDxRzxvvNT0%2FwByVsj1DD%2FzIbDBjqkAcnUX6Og6N80wi%2Fgsc%2F1yO0S2Q9AwbL15rHYb8bHC63mT%2BEw1HyVnONBqWhzdfDZokkzpch2g2ZiWIVZklTwNr0uLkNAqPEPdTMOsgzxJyQ9vDFFpvv30MjB2LGi%2BeEIcK2gnDzDtlBanATdOpO3vui%2BX0ysm10eoZDPjkNvClY1MhBpLxz4FptG7Gzs42z%2F58j5yglcKggXgIh1VBBtI8Ayp5Az&X-Amz-Signature=5b69de958498643de5eb74e898ba960e1876d583a3721e7c464399154884e94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEOZ4OII%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoY3Z75ioXSb2LRWdrHBZdIGPhfXsWhO49XcBr7NGqjgIhAM1pRuEx7yjE6iU64%2B4z9WLTFtl0%2FpLPQbnLJBXGFCtOKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwwd9uvx5j6Sb4bVt4q3AP89Nat8Rly%2FzKfyOIPaY5RAAK%2FXVUTVZOjdZqVpHOejEgsv%2B1x5FfX5pkm0xSRrbO4vKzEyM9sz6bRxkAFnuF%2FRcor7FosASy1PNOSw0hIb2lutBNs52%2FZTYrRJXmgkOWv0tKMt1GcHqb1%2FQHLV6ULEwGCaDHe20B6HJ%2BXm8q7VZ3Av7f2Ryr7kwA%2BqgGwjoHvpiQE5wznbGYqjhj%2FHUNjOy1l2K2TfM8w1bVzf%2BxQkOfjgMK7iUasmM5NgbGj%2BrdZZemOYZnrB0JwNFcCeQcSsO7tCxYnls1CO4mv1wF0w7rD0IattnM%2Fu0OwquUYxydiLD6kQY7dMid3FZeSK48tEAQjd32dDhJNaZVgvMaYBY1pAaR0wwljmtCAji5bYZcR7%2Bt%2FQaYDIl2t7y5M1wkNx9mN6NusI5DWBsFRE0RLA6z13KYmPXCd1s09frsLqaTkgm53GNMJia2PYoX7cQ%2BsbkqXo2YMWBocn8OTA3KaCrZbpE%2FlhwL%2BzjdFBfPqmFOVAY0DXZXuLCjfFbQPb7Wh49cqXsgOejVAy%2BnpJSlEjzffWrokoPx4NVr1dDUg3KtlL9os5lIXy4M25xV%2BMpdJrEeZW7kgC9pClV%2BsR9%2FDxRzxvvNT0%2FwByVsj1DD%2FzIbDBjqkAcnUX6Og6N80wi%2Fgsc%2F1yO0S2Q9AwbL15rHYb8bHC63mT%2BEw1HyVnONBqWhzdfDZokkzpch2g2ZiWIVZklTwNr0uLkNAqPEPdTMOsgzxJyQ9vDFFpvv30MjB2LGi%2BeEIcK2gnDzDtlBanATdOpO3vui%2BX0ysm10eoZDPjkNvClY1MhBpLxz4FptG7Gzs42z%2F58j5yglcKggXgIh1VBBtI8Ayp5Az&X-Amz-Signature=f577aee1b2043b1180b8efe41246463c6ef8badc0d9c152bc9ff580010630188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
