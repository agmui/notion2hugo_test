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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJA7A3J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC55Xft7arp%2FHjkO72k38M8SEEpLS0Z9tuRMBPG3%2BFR6QIhANY4M4J7ubPRqgeWkArIdH%2F6oU3qHyNiuAxep16zCDv5KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN%2FKfYXCtEievXhOUq3AO2zI3C94rbu2%2FecaZ1q2P7BNF1%2FE12nu3N6X1W8Rj9hiUawnVD%2BhwF5eTYCl46K9Nkrox%2Blfm8CinPXW3BWiPDXoPct%2B5KKbgL68rDpA3taWJ1axqw6bSSCm19UwDxWcUNUytgu5%2FmHJ4cQRD9eijKRAckQxWIne6oZ4sKggNG0usBUqluhLmbjM7pj8poLnvRlNVqPkpis1stPn4s0DCNkonKZRPpt4gbP7lmc8216zeR84D%2FkITkyRYDp%2FIzkBjnLw%2Fluk5kcVK7OQ5rLB0U5UvsckFBT5Tm1zKwsnB%2Fk0MPNFSdFfjb6uNWGU5L3Xwi6YvUAqBCgCxQjSMZpjQO5xaTo0AaHVi44ahVskYjHMvcf8tRPuSjwNQ3lf7mMfFxev80%2BKlXNEUd8xBnVDwgeV3i3fDUfzgQywznJhVZZkfuEp0ff5o2Et%2B07yCOMjiYdz9SA2nt5JXiZn6WRiPtQ3lANSC0kJCVs2APRc0vog6a%2BHuLkgS%2FyerN41v0%2BvxIzAAbrHaq0XjxIcuuFBe%2FakdgdcFoWF%2B6Rjr5cPVAfDQ7YNsGAxEkyrvX1ZKPpbrOMaLnNilN1l4gaBI69cNj9lM6%2B3TJZMxsEGBrEfltC6l12Ob%2FFBhQ1nHLwTCIqLK9BjqkAfVnzmU%2F9etXFUPvlNTOkPxMqKTx7mNxY4ndRn4NmgJyMqrH9Bfm5QxnLv1gQdz6UEEIkmsd0IvWl0U%2Fu8qXL9kIGVTaIwTktfc7WaOUzEfWUuH6HG8F0FiWYhXn9MnEXvT3zm8y%2B8pxH9%2B6l1lyK47VBza8bxYn%2Fx45ShsfJHTr3surCj0unruJ2d8GgPeJBdbZOXxqgTft0RAtrclsR9I%2F10Bi&X-Amz-Signature=d109c2a6e18ca2711e9a633b236f1224cd6f169e0465cfda0864713ce0a0794b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJA7A3J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC55Xft7arp%2FHjkO72k38M8SEEpLS0Z9tuRMBPG3%2BFR6QIhANY4M4J7ubPRqgeWkArIdH%2F6oU3qHyNiuAxep16zCDv5KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN%2FKfYXCtEievXhOUq3AO2zI3C94rbu2%2FecaZ1q2P7BNF1%2FE12nu3N6X1W8Rj9hiUawnVD%2BhwF5eTYCl46K9Nkrox%2Blfm8CinPXW3BWiPDXoPct%2B5KKbgL68rDpA3taWJ1axqw6bSSCm19UwDxWcUNUytgu5%2FmHJ4cQRD9eijKRAckQxWIne6oZ4sKggNG0usBUqluhLmbjM7pj8poLnvRlNVqPkpis1stPn4s0DCNkonKZRPpt4gbP7lmc8216zeR84D%2FkITkyRYDp%2FIzkBjnLw%2Fluk5kcVK7OQ5rLB0U5UvsckFBT5Tm1zKwsnB%2Fk0MPNFSdFfjb6uNWGU5L3Xwi6YvUAqBCgCxQjSMZpjQO5xaTo0AaHVi44ahVskYjHMvcf8tRPuSjwNQ3lf7mMfFxev80%2BKlXNEUd8xBnVDwgeV3i3fDUfzgQywznJhVZZkfuEp0ff5o2Et%2B07yCOMjiYdz9SA2nt5JXiZn6WRiPtQ3lANSC0kJCVs2APRc0vog6a%2BHuLkgS%2FyerN41v0%2BvxIzAAbrHaq0XjxIcuuFBe%2FakdgdcFoWF%2B6Rjr5cPVAfDQ7YNsGAxEkyrvX1ZKPpbrOMaLnNilN1l4gaBI69cNj9lM6%2B3TJZMxsEGBrEfltC6l12Ob%2FFBhQ1nHLwTCIqLK9BjqkAfVnzmU%2F9etXFUPvlNTOkPxMqKTx7mNxY4ndRn4NmgJyMqrH9Bfm5QxnLv1gQdz6UEEIkmsd0IvWl0U%2Fu8qXL9kIGVTaIwTktfc7WaOUzEfWUuH6HG8F0FiWYhXn9MnEXvT3zm8y%2B8pxH9%2B6l1lyK47VBza8bxYn%2Fx45ShsfJHTr3surCj0unruJ2d8GgPeJBdbZOXxqgTft0RAtrclsR9I%2F10Bi&X-Amz-Signature=ce0f67cbfccae5b34c918ca00a67ae73931a619057e7887fa941452ffd135837&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
