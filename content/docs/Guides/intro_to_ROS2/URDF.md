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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WTYYXFI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEOtpCVL66mgs5Eb2q2qHlSP3%2Fcbx537B6oJVGP4IA87AiAO3kEwfPgBpZ%2FpNq9LKc9uf2nfefFnLgKAmkJIgHAnUCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMPBtKTXc1udVIozGKKtwDYZWeWA3iEaAQ6vapqurPnz9lWePwP5tjncglXGmJyZwjmzm9a6miQadroiu4jwdBdyhkwEFK3rXIHSKCnRGkU1RpUpYf6DuQj1mx490kPfF3r%2Bp8VPEgKJLSnK17QPzbbL3otcAK9O%2FpA3%2B5zkGYDKMcC4ZZvIhAtwbeqV69naZWgTGXoc68qoWPVA%2Fg1h3cpLRBN4hpoxZFniFPMYHIDyCUlrzWpy1yLnSKCMKwRV5ppb%2FSVuQt9crU6yA5mPiAtWsE1cpxUa8hsEcQ%2B%2BZfsVoRbjucGjwhWoKvfOhR1SmXp9oSuvajvcC%2FqxyrVdNXlaOq4z1Vl%2F4iohMRO%2FMwWifwS7CpSdpD%2BlfIXTXOh1PPOwLXMDFs89qo6zY5V7OVC7e0V0fUC3xwgx6CAtPqkoTIuKg8F1LPkHAyq%2BKY7rPDO6n%2F%2FMbr9rPSC2TJh2xc5bjJcDMts80rd%2BEIxekfKUm6uoOTu60FV2%2FcW7FJi1XfrhzO4wq3vpfZd%2Baqtij7wEirf1z6xWrYjyWznD5jLs7I7Yrrq6TpRhxIqhMvbqaUKMFxf7TZA66a7%2B9n4ykC9Xfcz%2B%2FKLYVXVmdrfZnH6BidyrK7FxLryV91Uu6h6iB8WnIuKpA%2FE8r940IwztOJxAY6pgEe2%2BdBiaXRNVIHu9Hdz7NF1PRyK9vFWA02brfowrkACgpnE%2Bkotp8jJUgfuUlI%2BEaCM09dO%2FMn7R48gDH6btqSfRYb%2BvtBVq%2Fp%2BoyQ0Mzd9g%2BQfLX%2F8M7VRAceMWP%2FZgTQvw4cs2sbpHhqXyAlJW4V9R77J4YKMjSuyRFC45r86FJbkyM%2BlTgtntDRqjj5rjmJo62FlsBCsuxRGHw6ORjGn%2Bj9jtw9&X-Amz-Signature=029a6ad33d5b5c84424e9ba498637ca6f6b4a2c8a56b88ec3e86a42fed4f88f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WTYYXFI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEOtpCVL66mgs5Eb2q2qHlSP3%2Fcbx537B6oJVGP4IA87AiAO3kEwfPgBpZ%2FpNq9LKc9uf2nfefFnLgKAmkJIgHAnUCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMPBtKTXc1udVIozGKKtwDYZWeWA3iEaAQ6vapqurPnz9lWePwP5tjncglXGmJyZwjmzm9a6miQadroiu4jwdBdyhkwEFK3rXIHSKCnRGkU1RpUpYf6DuQj1mx490kPfF3r%2Bp8VPEgKJLSnK17QPzbbL3otcAK9O%2FpA3%2B5zkGYDKMcC4ZZvIhAtwbeqV69naZWgTGXoc68qoWPVA%2Fg1h3cpLRBN4hpoxZFniFPMYHIDyCUlrzWpy1yLnSKCMKwRV5ppb%2FSVuQt9crU6yA5mPiAtWsE1cpxUa8hsEcQ%2B%2BZfsVoRbjucGjwhWoKvfOhR1SmXp9oSuvajvcC%2FqxyrVdNXlaOq4z1Vl%2F4iohMRO%2FMwWifwS7CpSdpD%2BlfIXTXOh1PPOwLXMDFs89qo6zY5V7OVC7e0V0fUC3xwgx6CAtPqkoTIuKg8F1LPkHAyq%2BKY7rPDO6n%2F%2FMbr9rPSC2TJh2xc5bjJcDMts80rd%2BEIxekfKUm6uoOTu60FV2%2FcW7FJi1XfrhzO4wq3vpfZd%2Baqtij7wEirf1z6xWrYjyWznD5jLs7I7Yrrq6TpRhxIqhMvbqaUKMFxf7TZA66a7%2B9n4ykC9Xfcz%2B%2FKLYVXVmdrfZnH6BidyrK7FxLryV91Uu6h6iB8WnIuKpA%2FE8r940IwztOJxAY6pgEe2%2BdBiaXRNVIHu9Hdz7NF1PRyK9vFWA02brfowrkACgpnE%2Bkotp8jJUgfuUlI%2BEaCM09dO%2FMn7R48gDH6btqSfRYb%2BvtBVq%2Fp%2BoyQ0Mzd9g%2BQfLX%2F8M7VRAceMWP%2FZgTQvw4cs2sbpHhqXyAlJW4V9R77J4YKMjSuyRFC45r86FJbkyM%2BlTgtntDRqjj5rjmJo62FlsBCsuxRGHw6ORjGn%2Bj9jtw9&X-Amz-Signature=6991c932110e40d8077b315cef8536aa71392fe16c3b856b71877fe9f4e2dbff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
