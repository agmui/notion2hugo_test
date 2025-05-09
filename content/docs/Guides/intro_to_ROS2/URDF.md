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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXSGSYH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoVYc6Mdb8qZl1PVsD05Qp7KNXs4S%2FJEK2bzALGXiqUAiEAr4OJDrzUF2wuhqZnLVP76IK1sl6besIc8vTN3a9x7pIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIsjxEcxmUk%2B59EXyrcA2U%2BYsNK6%2FiNqSIj1QxGQJHnzkooCaMxB3nvkmep55UvdYo2weqdUjYkFSYRwUndelcMoMH9%2BpDdZzSMfr%2Fu53KgWSH6lwSajtwyJRnOG4LG0mTZCj5%2FsNAWqXzalVYdUEYJqJPDvX%2BUH41Y6Yckp5f048Fkhimp5ng4z60gON6FF15krjfOCFDnnh1kBVDCpeoPaypjcAE1wkPkmPafj4yuTmOSqbWIMlfWWMBebw6IRy4e4mZQmsLIwf1YHXNq8NeuwJfOq%2BoL24VOTA%2BsehsxSudtfOINELVZvzSwfMoqLIDRBThVKw7y0j5emXFAebzXPuQgsQIIlR1yjmvX%2Fou1H7y1qEZjvkQoXm72HHguPb5qDOKr4bs1yCt6HcBjvHS%2BtcuUmw1ZP8rdy9K32Rl0ZZ5vKf3KiNyXV4nYe513y7WfoHyEjTYXadkP31RJI6Nf3YrP31SYfqtBdDtzqO%2Fi5uJXgcu3sqZL9jmvo8nG8s0mQz13xG9QlqAGsIvqlLcPeT4eBA6Cqo5RGxIsFWg9ind1y5%2FtPGwMc%2FK09UlixuUsGjeXTOdNoZx7u8slLPeLotWXZwQcLUR4mNWDevzIKLFn2SnROwQtQhIJDXG43k9t70kZVoefgblBMIiI%2BMAGOqUB7LYAbqqbELKivypsHAlvyzbD%2BGgQMXFaqH0oGmnxhvTPkKW90ixXpCMSEtiUoxlomopM4X%2FOELC4RM0MX0wCOoM5rXHuXOlfT%2FifBD2EAKbeMp8iVTOMexDzp%2Buar0v5MKReVMa8Qr%2BsI%2BoSsAOliVDNQpIrg7rcpK%2BjQ3Xqc%2FRgwK8ZwK7TgpLSHAuQ3vQuWbQiKzXjbLptJ9OR6HVNtVVPal%2By&X-Amz-Signature=e62810076cc3457443101808fc1a53a1f34cb60d29759570da24e9ba21f9609c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXSGSYH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoVYc6Mdb8qZl1PVsD05Qp7KNXs4S%2FJEK2bzALGXiqUAiEAr4OJDrzUF2wuhqZnLVP76IK1sl6besIc8vTN3a9x7pIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIsjxEcxmUk%2B59EXyrcA2U%2BYsNK6%2FiNqSIj1QxGQJHnzkooCaMxB3nvkmep55UvdYo2weqdUjYkFSYRwUndelcMoMH9%2BpDdZzSMfr%2Fu53KgWSH6lwSajtwyJRnOG4LG0mTZCj5%2FsNAWqXzalVYdUEYJqJPDvX%2BUH41Y6Yckp5f048Fkhimp5ng4z60gON6FF15krjfOCFDnnh1kBVDCpeoPaypjcAE1wkPkmPafj4yuTmOSqbWIMlfWWMBebw6IRy4e4mZQmsLIwf1YHXNq8NeuwJfOq%2BoL24VOTA%2BsehsxSudtfOINELVZvzSwfMoqLIDRBThVKw7y0j5emXFAebzXPuQgsQIIlR1yjmvX%2Fou1H7y1qEZjvkQoXm72HHguPb5qDOKr4bs1yCt6HcBjvHS%2BtcuUmw1ZP8rdy9K32Rl0ZZ5vKf3KiNyXV4nYe513y7WfoHyEjTYXadkP31RJI6Nf3YrP31SYfqtBdDtzqO%2Fi5uJXgcu3sqZL9jmvo8nG8s0mQz13xG9QlqAGsIvqlLcPeT4eBA6Cqo5RGxIsFWg9ind1y5%2FtPGwMc%2FK09UlixuUsGjeXTOdNoZx7u8slLPeLotWXZwQcLUR4mNWDevzIKLFn2SnROwQtQhIJDXG43k9t70kZVoefgblBMIiI%2BMAGOqUB7LYAbqqbELKivypsHAlvyzbD%2BGgQMXFaqH0oGmnxhvTPkKW90ixXpCMSEtiUoxlomopM4X%2FOELC4RM0MX0wCOoM5rXHuXOlfT%2FifBD2EAKbeMp8iVTOMexDzp%2Buar0v5MKReVMa8Qr%2BsI%2BoSsAOliVDNQpIrg7rcpK%2BjQ3Xqc%2FRgwK8ZwK7TgpLSHAuQ3vQuWbQiKzXjbLptJ9OR6HVNtVVPal%2By&X-Amz-Signature=f7c7eff4c48063e6a8ffbd93be849ab7ff4af71883c67342ace072fd426b6a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
