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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM7W5ZC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtn7hRWzL3ZSDhrMZn9RorjsIPmVorxppoEE47vps0RwIgaCLkU13fkzlwrRACmwHbVwkfZG0R%2F9xkJHF%2FzskBscMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUSqE46rB5sAkqgpSrcA%2BKuu7m3kcHJl5Y07ObQiLhKvL1Q5cPPS4oKVyKwTjs4RHMg4FYZicQeqLcCX64zSYGBK5dr4z2eWgWKF1y7ByTs%2B7Ic28J%2BPIUAezDy%2BycAsdBl5tBfwRU3jyrVx5jupkCuFGXKDT9Hpb3WElbvI5%2FId0EZ9rEXP%2B1wXT4AvKXNRkqKTWB%2FCYycUhQUSP0gyd8Rhy8hxNZa08eXX3tNSbkM7EFQK1mdZnaO2GUx52FID5EftFL4Dt6lJfLAnZsBAjS3MJz9Hv6QpryleITOkvSnIlywPXwJbyi4Ze8NuxVxDGWr5IPisTStc1aFkLqA3H%2FbHQoFhjejRoNC70dwHcW9XHziMp2%2BFDKq1AdDw4wm%2BIdQR8wmk2Thj%2F1WnvrIHrDrHPYucF5p3tk2jpfPgdxffhszacspUK8YLZJKlQl29RmidRiC3HhmwTtc3N6C7LsaA9UkJxRcqUenrKnhP1FOeT9Palf%2BNKYtGFWNPegQCdBLl4BbTyLAguiPRIFW4AoRkDgl7ngKBzyFcF5TS%2B2rCpY5q2XOhx2Sn1%2FD3PpnrMnthFNZw5H6O0DAFCM5y6PAs%2Fd6m1GcL6N2H6spmC%2FUFPMgn%2BTzLBN%2FCfX%2BHMR81FMkowqZZn0CnoYGMKj2q8QGOqUBlCJ9WRpqRvqCEFyA8F2pbawOMLwPSiH%2FtYWICUa42xGvuf1Wr%2FYVCxYfz%2F9WdbHYbWVNDvLnnjw74NTWiRs7OUzjs2%2Fqo2MccJOtct2CkrboUZt%2FWfz%2BmjZ7v8tC67hG%2BEWDwtEHAAx2b3u6xVrf96UC0F%2FSXcXWuqHVs1UdhtzPrTIk32h%2FNN7ab8lSLYpXQgBhG3P%2FspF06f2p1OuxOniCqdF3&X-Amz-Signature=ce47b6bd73f2bfa726f38a0d662915fb290d0c52b8b345a28aa0168565860935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM7W5ZC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtn7hRWzL3ZSDhrMZn9RorjsIPmVorxppoEE47vps0RwIgaCLkU13fkzlwrRACmwHbVwkfZG0R%2F9xkJHF%2FzskBscMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUSqE46rB5sAkqgpSrcA%2BKuu7m3kcHJl5Y07ObQiLhKvL1Q5cPPS4oKVyKwTjs4RHMg4FYZicQeqLcCX64zSYGBK5dr4z2eWgWKF1y7ByTs%2B7Ic28J%2BPIUAezDy%2BycAsdBl5tBfwRU3jyrVx5jupkCuFGXKDT9Hpb3WElbvI5%2FId0EZ9rEXP%2B1wXT4AvKXNRkqKTWB%2FCYycUhQUSP0gyd8Rhy8hxNZa08eXX3tNSbkM7EFQK1mdZnaO2GUx52FID5EftFL4Dt6lJfLAnZsBAjS3MJz9Hv6QpryleITOkvSnIlywPXwJbyi4Ze8NuxVxDGWr5IPisTStc1aFkLqA3H%2FbHQoFhjejRoNC70dwHcW9XHziMp2%2BFDKq1AdDw4wm%2BIdQR8wmk2Thj%2F1WnvrIHrDrHPYucF5p3tk2jpfPgdxffhszacspUK8YLZJKlQl29RmidRiC3HhmwTtc3N6C7LsaA9UkJxRcqUenrKnhP1FOeT9Palf%2BNKYtGFWNPegQCdBLl4BbTyLAguiPRIFW4AoRkDgl7ngKBzyFcF5TS%2B2rCpY5q2XOhx2Sn1%2FD3PpnrMnthFNZw5H6O0DAFCM5y6PAs%2Fd6m1GcL6N2H6spmC%2FUFPMgn%2BTzLBN%2FCfX%2BHMR81FMkowqZZn0CnoYGMKj2q8QGOqUBlCJ9WRpqRvqCEFyA8F2pbawOMLwPSiH%2FtYWICUa42xGvuf1Wr%2FYVCxYfz%2F9WdbHYbWVNDvLnnjw74NTWiRs7OUzjs2%2Fqo2MccJOtct2CkrboUZt%2FWfz%2BmjZ7v8tC67hG%2BEWDwtEHAAx2b3u6xVrf96UC0F%2FSXcXWuqHVs1UdhtzPrTIk32h%2FNN7ab8lSLYpXQgBhG3P%2FspF06f2p1OuxOniCqdF3&X-Amz-Signature=7ca897a583d37aa1dd57a2c7c6d181332494e5e32c25fcceb671cefc890ed880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
