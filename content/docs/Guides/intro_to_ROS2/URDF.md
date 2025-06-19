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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NVC47AI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBIXBUjb%2BhlDWA18%2FLQDi82DmjjhoJlacr5VH06KGI5gIgek0kIoH4SLKCVmJy7SvDCo9XFZl%2BryfrR8QcEQKTVMAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCndzkCqHr8ZNF5K1yrcA1R2wwVp8Mr0FFWTdTyPis5Sk0ixIu84bJf15Ufm1NZlT1oSb5DaPQZv6HHblvsgLrcbp2%2Fx14Qin4tINjub43Xc1Di9%2F%2BQpVNIfoaodH%2BIY5JI0Zp5CfD2kmWhdhmT6PN0UaeL7RcTR%2F0E6fQjVBH5n9WerFHjX5g0LrkrgkV6238R9%2FDRyqY3cjG6JmPODydSpLZ1OsHxNgFEcBvHeMcJ5grC3wk4lkWZT%2FnYSjoNMJBssjUuRP834EdHaq9OPet1iwAPONbLihoRv6oGJxqANv9s0HyvDU%2FVIGScb7WSxU2jFQYoUMUT%2ByI%2F2RH%2BT0ZOPFsgngT4uR0wjw4poclmKLxu58Wb15cQmKUOG%2FT13umNp8%2FoHLENeGR1%2FKGCuwY7aRqeLFhwifm6QYVM6y7QkCYlBLh2zRgD%2BvK%2Bs3%2BlFbEpxk7glOVzKgOr52QgEAf%2FyzHHS30yORBGfgSJJozF2PbBJYtfaL2KqWRejL0gMlrikqg%2Bls6zHvN%2BU9%2FsQE15X6TLpIGL7fQ6DJBfsLxHArVHxHz4gaqLZRhvtMySbGs3GYh1V8Rnzaoi1jzcHU9RAa6JzlTUiJUOS4N9IRjPkOg%2F6W0k0CP8GuWZ87xcjctzWRLTTNx2QlnOnMOSEzsIGOqUBlT28XaZY8lqgMosPcDpwPEPk%2BqqAYw5nvk8PsvBjP5rG6CtsnPHwuxyihZ3ZRRzBP4TJD6ZjB4zSWHyPD7x%2BTK%2FBAHK9wBhrseeDHg19LviHZGTv6m20px%2BsUFSCSS7H%2FIzPTDEfNnyGxa8USF%2BO3PNGCWLXWWHAlx3vvre4%2FE1QbvpsR0yF2cJY0129AsKOnjUAgUPzac%2BtCP1b6lVwwVaOy9l5&X-Amz-Signature=eb3b44a7aef20b72784cedfb39dd22b2f5189678ad3330a56d89ae95e83efb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NVC47AI%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBIXBUjb%2BhlDWA18%2FLQDi82DmjjhoJlacr5VH06KGI5gIgek0kIoH4SLKCVmJy7SvDCo9XFZl%2BryfrR8QcEQKTVMAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCndzkCqHr8ZNF5K1yrcA1R2wwVp8Mr0FFWTdTyPis5Sk0ixIu84bJf15Ufm1NZlT1oSb5DaPQZv6HHblvsgLrcbp2%2Fx14Qin4tINjub43Xc1Di9%2F%2BQpVNIfoaodH%2BIY5JI0Zp5CfD2kmWhdhmT6PN0UaeL7RcTR%2F0E6fQjVBH5n9WerFHjX5g0LrkrgkV6238R9%2FDRyqY3cjG6JmPODydSpLZ1OsHxNgFEcBvHeMcJ5grC3wk4lkWZT%2FnYSjoNMJBssjUuRP834EdHaq9OPet1iwAPONbLihoRv6oGJxqANv9s0HyvDU%2FVIGScb7WSxU2jFQYoUMUT%2ByI%2F2RH%2BT0ZOPFsgngT4uR0wjw4poclmKLxu58Wb15cQmKUOG%2FT13umNp8%2FoHLENeGR1%2FKGCuwY7aRqeLFhwifm6QYVM6y7QkCYlBLh2zRgD%2BvK%2Bs3%2BlFbEpxk7glOVzKgOr52QgEAf%2FyzHHS30yORBGfgSJJozF2PbBJYtfaL2KqWRejL0gMlrikqg%2Bls6zHvN%2BU9%2FsQE15X6TLpIGL7fQ6DJBfsLxHArVHxHz4gaqLZRhvtMySbGs3GYh1V8Rnzaoi1jzcHU9RAa6JzlTUiJUOS4N9IRjPkOg%2F6W0k0CP8GuWZ87xcjctzWRLTTNx2QlnOnMOSEzsIGOqUBlT28XaZY8lqgMosPcDpwPEPk%2BqqAYw5nvk8PsvBjP5rG6CtsnPHwuxyihZ3ZRRzBP4TJD6ZjB4zSWHyPD7x%2BTK%2FBAHK9wBhrseeDHg19LviHZGTv6m20px%2BsUFSCSS7H%2FIzPTDEfNnyGxa8USF%2BO3PNGCWLXWWHAlx3vvre4%2FE1QbvpsR0yF2cJY0129AsKOnjUAgUPzac%2BtCP1b6lVwwVaOy9l5&X-Amz-Signature=5a53dd4e9e03cf6eb74bbd5305847f419306d0f38fb5e47f1be224394dd38bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
