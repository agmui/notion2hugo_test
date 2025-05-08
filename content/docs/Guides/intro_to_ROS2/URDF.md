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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSCFR7U%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO%2BWhFEToZHqVb36FHWV3pr5y6uChNv%2FaEYVj5QkkSaAiEApXNZY%2F3w0FJWrLDY2cndPJhIUbKBpmubnXWk0c0J8Fcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKtChzIny%2BLj%2BKh7KyrcAwQlUDqlSZvLfYf2AzbftKPdlBzOifqs80YTu%2B%2FFrP0QxeQ4bGLvKWbDmQWffuL%2FNsf%2BVZ6ApRwPYbbNtsGZYZvNzzZ1gwxjsoyV8%2BRVX5EkNHfii5ar3vcPOwVwCKkqD0gwrLGqAfQgYdCA5s7MkE%2FOQk2fr%2BkvtD2wNuKEo3WZqVnUDsV3eVFixZsjyHfPxdkKxfj3T5Ka01hqATDopxfeHvbDpZ4%2Bh2xdP%2B2JNje2h6xT5xExuT%2FF1BKJHOuOnafcvHiB9myHf%2BQRUVvUG8Yu7%2BJJASOmsk0ntn%2BmbJeVE6hfcntkAJWis9Bkzxeft24nDPIdmEXPX51gl2yCiqTWTaCUqe08Lem%2BkbBJwbcQKcH2g1Hbhgl%2F6yWAz%2BXqMlVxrrzyXi9z1LIW60FhOdBvtiOghL4mqZj93MRcaFf%2BwF14TM7GUKtN8p0TuzaKta5xr0E6gQndoCbY6S%2BWDK5iX24qvmP8WBLF5a5vEk1sh3Bu9bIKA%2BL5evZtrFvxM4WzxyktFctLA7EtHi3fwAPIAZxX6tSgNk1iwt8I9vCnjGBLngwUWCsTWTip47uJABPnEyaoAPY22ABmk0S1ogkzkSiuzwEOCx67o3LDxqwZz2jVlhFOS8ssajstMOD%2F88AGOqUBoHjwLl8C0w5VH2pdNEAB%2FW5SxJLc43rVzyi0tZXkvrVyco3YdrZle%2BKGydEZl%2FJ2F%2FGhrAfXeColeCTHltYZfkbZOrnavu5GiVu8uZ9evSG%2B8u3iNB7KIf%2BSgb95CL7mgPKjU0tg0n0oKbev%2FfJ7tXgZKH%2FybciS7uliQsI2jbWUFtWV8lT9Eke6YhGbx5nqZbbKoXNihR21mwXD5JNfTktA1i2P&X-Amz-Signature=2e7634ef36a282a8b4061460fbeee8507dbcb2dcc84aad71df76c3a64708f37e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSCFR7U%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO%2BWhFEToZHqVb36FHWV3pr5y6uChNv%2FaEYVj5QkkSaAiEApXNZY%2F3w0FJWrLDY2cndPJhIUbKBpmubnXWk0c0J8Fcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKtChzIny%2BLj%2BKh7KyrcAwQlUDqlSZvLfYf2AzbftKPdlBzOifqs80YTu%2B%2FFrP0QxeQ4bGLvKWbDmQWffuL%2FNsf%2BVZ6ApRwPYbbNtsGZYZvNzzZ1gwxjsoyV8%2BRVX5EkNHfii5ar3vcPOwVwCKkqD0gwrLGqAfQgYdCA5s7MkE%2FOQk2fr%2BkvtD2wNuKEo3WZqVnUDsV3eVFixZsjyHfPxdkKxfj3T5Ka01hqATDopxfeHvbDpZ4%2Bh2xdP%2B2JNje2h6xT5xExuT%2FF1BKJHOuOnafcvHiB9myHf%2BQRUVvUG8Yu7%2BJJASOmsk0ntn%2BmbJeVE6hfcntkAJWis9Bkzxeft24nDPIdmEXPX51gl2yCiqTWTaCUqe08Lem%2BkbBJwbcQKcH2g1Hbhgl%2F6yWAz%2BXqMlVxrrzyXi9z1LIW60FhOdBvtiOghL4mqZj93MRcaFf%2BwF14TM7GUKtN8p0TuzaKta5xr0E6gQndoCbY6S%2BWDK5iX24qvmP8WBLF5a5vEk1sh3Bu9bIKA%2BL5evZtrFvxM4WzxyktFctLA7EtHi3fwAPIAZxX6tSgNk1iwt8I9vCnjGBLngwUWCsTWTip47uJABPnEyaoAPY22ABmk0S1ogkzkSiuzwEOCx67o3LDxqwZz2jVlhFOS8ssajstMOD%2F88AGOqUBoHjwLl8C0w5VH2pdNEAB%2FW5SxJLc43rVzyi0tZXkvrVyco3YdrZle%2BKGydEZl%2FJ2F%2FGhrAfXeColeCTHltYZfkbZOrnavu5GiVu8uZ9evSG%2B8u3iNB7KIf%2BSgb95CL7mgPKjU0tg0n0oKbev%2FfJ7tXgZKH%2FybciS7uliQsI2jbWUFtWV8lT9Eke6YhGbx5nqZbbKoXNihR21mwXD5JNfTktA1i2P&X-Amz-Signature=76e6589e94189d4ab7e2e22867339ef0405c5eee5c653428b1b7ec70cda278ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
