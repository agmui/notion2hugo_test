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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2WBQ26%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDEEeb266LKsOqichxi61OLshNEj0zk1q%2BxfQ6C8dnkxAIgLhsEsAYLXC6prI2JEvznOVzNfBR00gwigvF2oqwTCAUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEghUk%2BWmifErZSL6ircAyozkBD4CnmsO1%2FTNUOpnDSV4fom3TQJux9Yf2n7uBF%2BH4FqCBQQMyvdpg%2BbZyrrv2DOWSh%2FRsmjudxUNFJoD0X9qVqTZdtbQFz9o%2FmaBpHnS4U%2BEHSSvVDHptcZKSKw%2Bv8K2giXa7ddmjzlgKaQBiUEdwb4UO7kf8z0P7PriTMftqKMhDxgcnvLWaR8ukf%2FBoFFFbDODc34pN8QudkYX3uftz8qMT49vv3ZbwXkWTcSxNuP4YQccwk%2B9TPyZM8uwNbbZwQWbHgJFYC4DFCfwGgBLQXWg116O2KA5HXD%2BORzvbnEHR0jtcKXYOgOnFONGLsLvws2szd7DYRU5sLtkSMA89ekDWWPhkgCwousB0Tkqxb%2BPrAXANzoaLe0CCYzDl1hqVt2x3fwUIoyMlOMK2VEhChMLKthGCmyUvJLdbelWLAWpj0%2BOv0FNeFhEVNwMVuXYtv2WPvbLqit168tGt47udCmvndt%2Fb42AARwZkwFBSD1tsZ6rpg9UKJpxhq%2B015oQIbEyhKbm5eDmBHYa%2BqJVfPZbJCGMzarZ13r1KPLZLKp2SAY4qdA3MBzqJFudSagLu6%2FlJPh2%2BY5hY0o3qUx2kFhSVYfYe13Elz%2FE67XzH0gnheGN7Kk6noaMLrT%2Fb4GOqUBGPwYHF4Df0Ig6CvHUocLVwZderzJ5LihehFmZM%2FYpRuQNHkRhDrmH%2BkQBczP%2Fbpfu6FkB18w1eGWOUON%2BBjJUlRQbGK2EwBMppZ3ObBoleCRoe6NR%2Faiopooab4RxXrQIQShXrH4Bmao5eWZ03Wq5uiTC77WJ%2FHo2%2BQrKZI6trpdl6D%2FHuY%2BG8nb7Qo8LunJJSK3yJzB7e6iDY%2B6UsjELB%2BKqIFr&X-Amz-Signature=a901521539add8e457ff1ae85882395c77fc46c4383b348d89d77b583712f909&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2WBQ26%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDEEeb266LKsOqichxi61OLshNEj0zk1q%2BxfQ6C8dnkxAIgLhsEsAYLXC6prI2JEvznOVzNfBR00gwigvF2oqwTCAUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEghUk%2BWmifErZSL6ircAyozkBD4CnmsO1%2FTNUOpnDSV4fom3TQJux9Yf2n7uBF%2BH4FqCBQQMyvdpg%2BbZyrrv2DOWSh%2FRsmjudxUNFJoD0X9qVqTZdtbQFz9o%2FmaBpHnS4U%2BEHSSvVDHptcZKSKw%2Bv8K2giXa7ddmjzlgKaQBiUEdwb4UO7kf8z0P7PriTMftqKMhDxgcnvLWaR8ukf%2FBoFFFbDODc34pN8QudkYX3uftz8qMT49vv3ZbwXkWTcSxNuP4YQccwk%2B9TPyZM8uwNbbZwQWbHgJFYC4DFCfwGgBLQXWg116O2KA5HXD%2BORzvbnEHR0jtcKXYOgOnFONGLsLvws2szd7DYRU5sLtkSMA89ekDWWPhkgCwousB0Tkqxb%2BPrAXANzoaLe0CCYzDl1hqVt2x3fwUIoyMlOMK2VEhChMLKthGCmyUvJLdbelWLAWpj0%2BOv0FNeFhEVNwMVuXYtv2WPvbLqit168tGt47udCmvndt%2Fb42AARwZkwFBSD1tsZ6rpg9UKJpxhq%2B015oQIbEyhKbm5eDmBHYa%2BqJVfPZbJCGMzarZ13r1KPLZLKp2SAY4qdA3MBzqJFudSagLu6%2FlJPh2%2BY5hY0o3qUx2kFhSVYfYe13Elz%2FE67XzH0gnheGN7Kk6noaMLrT%2Fb4GOqUBGPwYHF4Df0Ig6CvHUocLVwZderzJ5LihehFmZM%2FYpRuQNHkRhDrmH%2BkQBczP%2Fbpfu6FkB18w1eGWOUON%2BBjJUlRQbGK2EwBMppZ3ObBoleCRoe6NR%2Faiopooab4RxXrQIQShXrH4Bmao5eWZ03Wq5uiTC77WJ%2FHo2%2BQrKZI6trpdl6D%2FHuY%2BG8nb7Qo8LunJJSK3yJzB7e6iDY%2B6UsjELB%2BKqIFr&X-Amz-Signature=2cfb396cd6b0f1a074908aca1f1027799d0b63995d21b565519093260d7b3876&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
