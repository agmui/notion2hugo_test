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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUXSTDK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEvPEQg0yHFCpBy%2BUopyMKGexD%2F2scKkTyzMBIVIGwvAiEA6K1sOGKWOP0IXdCmdzAK4UBcMTi5cx%2Ffryfr9VfBt7gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxIfoMwL8tyMZCOcSrcAwDf5f%2BvvLqWrjOaRBigPViirXOdCaxpvgdaoYgxGRksU%2BGTrz505ecpKmVM1WrS6f1If%2ByOnK8Arnmwcdaz2igZzyBjNJT7SjLYDkU2hRDhCguPOtnxuXxTpfediG7RBCztnaLdmAPIIXKVurP7VB2Go0mbjoESmwzjTD8NajsK7wO8eyla0EUlv9piobukwCAH7wWKdvviENYKchXTCozaxsEm6HuUQ%2FiH6t%2FYszfpzfAyXt0XkZQkQXmnYte3wknQemUwpN6%2Fn%2BYtRKTBfTE2SoI9tcAsrLZt1BBHjFQO1ngdQTaJg8nEuW7RgM5E%2BucLz4YXmAVAcRZv%2BUM7QQL%2FMw%2BSvGK76ClHgPJcRZhdozth5HlIxB63ObRpHCs3ARvF9UEZfrWzhKf463fWYiuVNd9jr76O3t4p2Pn9WqiGebnMkHa%2FuTj%2F9O1095zCyzzt%2Bd52f%2B%2BctPd1h3VrtElkXI7IPDrv382yXywpgF0A4wLsW85k9gWDR4lFS5ydEXYVgdAhWYZUanYHeYPndSXiGAF94v67W2vJkpqnz55Co3QqHC%2FocWGG%2B4LhOOQKfEQRi6HifZz1ATIuXOXM89wsts1ojxmlrkuG0j5lIEeiVwBsF6%2F1fbPNg6z3MMv178MGOqUB2sk526Jkq8RzY0ONXizwdvUpn4Fh0FgNcnTrtd3n2cUQgbwe%2BPNLhikplt9zc%2FPDACPuAM65ZaF9%2BBJzwR2F43ZukCf4fp418ePMFZ5BEa7hDWiWw8UKvan0fCBPuaUNu61T4yc3gchCtZK51FIUPgyl%2BTHJaaVFT84XRJjxy7n22L9RySj1KxtymYB33I%2FscSBvzBDAEltHgQIpE%2BHfEZSqlUcm&X-Amz-Signature=7d0faed1069fc5f61955e53500f698a62487552a3720b1e5ec7eb89fdf0e48d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUXSTDK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEvPEQg0yHFCpBy%2BUopyMKGexD%2F2scKkTyzMBIVIGwvAiEA6K1sOGKWOP0IXdCmdzAK4UBcMTi5cx%2Ffryfr9VfBt7gqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxIfoMwL8tyMZCOcSrcAwDf5f%2BvvLqWrjOaRBigPViirXOdCaxpvgdaoYgxGRksU%2BGTrz505ecpKmVM1WrS6f1If%2ByOnK8Arnmwcdaz2igZzyBjNJT7SjLYDkU2hRDhCguPOtnxuXxTpfediG7RBCztnaLdmAPIIXKVurP7VB2Go0mbjoESmwzjTD8NajsK7wO8eyla0EUlv9piobukwCAH7wWKdvviENYKchXTCozaxsEm6HuUQ%2FiH6t%2FYszfpzfAyXt0XkZQkQXmnYte3wknQemUwpN6%2Fn%2BYtRKTBfTE2SoI9tcAsrLZt1BBHjFQO1ngdQTaJg8nEuW7RgM5E%2BucLz4YXmAVAcRZv%2BUM7QQL%2FMw%2BSvGK76ClHgPJcRZhdozth5HlIxB63ObRpHCs3ARvF9UEZfrWzhKf463fWYiuVNd9jr76O3t4p2Pn9WqiGebnMkHa%2FuTj%2F9O1095zCyzzt%2Bd52f%2B%2BctPd1h3VrtElkXI7IPDrv382yXywpgF0A4wLsW85k9gWDR4lFS5ydEXYVgdAhWYZUanYHeYPndSXiGAF94v67W2vJkpqnz55Co3QqHC%2FocWGG%2B4LhOOQKfEQRi6HifZz1ATIuXOXM89wsts1ojxmlrkuG0j5lIEeiVwBsF6%2F1fbPNg6z3MMv178MGOqUB2sk526Jkq8RzY0ONXizwdvUpn4Fh0FgNcnTrtd3n2cUQgbwe%2BPNLhikplt9zc%2FPDACPuAM65ZaF9%2BBJzwR2F43ZukCf4fp418ePMFZ5BEa7hDWiWw8UKvan0fCBPuaUNu61T4yc3gchCtZK51FIUPgyl%2BTHJaaVFT84XRJjxy7n22L9RySj1KxtymYB33I%2FscSBvzBDAEltHgQIpE%2BHfEZSqlUcm&X-Amz-Signature=ce728d06b4318d96eb7b15dc8ef4cddff87720a1b864ccdb622daa8d4e39c19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
