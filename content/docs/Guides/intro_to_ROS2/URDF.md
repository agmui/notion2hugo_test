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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y654ZJHI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXBkXZyn1AxAOKANwK53GxRGmKvd%2Fyh18wiXUWaT3m2AIhALedl4XBY0Z%2FUhUgIByq5KV8fy5gYhslsYCj3KDKciZXKv8DCDcQABoMNjM3NDIzMTgzODA1Igw6T%2FIYgx%2FpKw6hEh4q3APLTfaO5AuqXPbbT42mtktQicjqdJI9sALcslROB5RH1aTns7BjOAFh%2Bwa1ODzQqCSJcS9Lzv3ctcPmXBB0sxLJCTtkW6EQ2IXg6QlIY9Lwo2K%2BQ%2Ba3lGBnRqV%2FfeWRZQ7036rcI1fi1ZRWMQ4PqXHDSJpDqanQ2dbYZ86TUzL53%2FpkOjyir%2FUcD%2B4kVUqmn0dYsDbpXbLUv5aR9eyDjIUDof%2BbQwVYSYcN%2FdtkF4HMMEsljEzEq2kBiMd2X109lSqoOvnponNMMzVJQ0jLNQzhA99mXfomw16ayyrX4KxSNwkoqInpwArIYSqF9cSurUpBw2JvFBNDNsD9KXawdr0LSuTEDsi0r3TK9MVIHVHo7wFbGxGuEsjYrFx073tYstxYmRzG%2FbbwW2bGv9F5q5ooFOEkVy45OYSMtRXHZ5ssOvj2abjEUhHO8bm0e30Q5bDu2zbm7znAx2NtGGcBi6zyd6G4pxSK3XMcLCT2t7Nisoudqw6kzYSv3FlZmljoFwZFfFEMCSNCUmtTosW9UaV3bSszZfrgqcOG9O4bf5j391TAckNB0Y19yUqRr7TZoHpjgC2r6PHqDFRuzs5Gi6rYPRLJTzITu3CQ9S7vVwf4w2V0MPw31DTvreneeTCh8pG%2FBjqkAYu8yC%2Bb74vsTrJMnosS3eLnTwd%2F8QkncQFSBHfsYeq6YamEqevg0Mxv7JJ9XAeJsKMh2xVAfQbmYf%2B9I78y8vgmzrnfKPMlaPBzKRJv%2BTnv0v7Cb8cRqZbFhUCocOvpo1wvx7D0P%2FoyDXpbFTSh74zeu4aqGNuhwvwRkcsHFlZ5qtIhIzIfYEI5Q849BTd0g2NwP1VcjRxAosYI0uTpPimvwNaL&X-Amz-Signature=bca771f529856e09f99573a93e45e07f88eb106f33450147e12dca5efcf2ee24&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y654ZJHI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXBkXZyn1AxAOKANwK53GxRGmKvd%2Fyh18wiXUWaT3m2AIhALedl4XBY0Z%2FUhUgIByq5KV8fy5gYhslsYCj3KDKciZXKv8DCDcQABoMNjM3NDIzMTgzODA1Igw6T%2FIYgx%2FpKw6hEh4q3APLTfaO5AuqXPbbT42mtktQicjqdJI9sALcslROB5RH1aTns7BjOAFh%2Bwa1ODzQqCSJcS9Lzv3ctcPmXBB0sxLJCTtkW6EQ2IXg6QlIY9Lwo2K%2BQ%2Ba3lGBnRqV%2FfeWRZQ7036rcI1fi1ZRWMQ4PqXHDSJpDqanQ2dbYZ86TUzL53%2FpkOjyir%2FUcD%2B4kVUqmn0dYsDbpXbLUv5aR9eyDjIUDof%2BbQwVYSYcN%2FdtkF4HMMEsljEzEq2kBiMd2X109lSqoOvnponNMMzVJQ0jLNQzhA99mXfomw16ayyrX4KxSNwkoqInpwArIYSqF9cSurUpBw2JvFBNDNsD9KXawdr0LSuTEDsi0r3TK9MVIHVHo7wFbGxGuEsjYrFx073tYstxYmRzG%2FbbwW2bGv9F5q5ooFOEkVy45OYSMtRXHZ5ssOvj2abjEUhHO8bm0e30Q5bDu2zbm7znAx2NtGGcBi6zyd6G4pxSK3XMcLCT2t7Nisoudqw6kzYSv3FlZmljoFwZFfFEMCSNCUmtTosW9UaV3bSszZfrgqcOG9O4bf5j391TAckNB0Y19yUqRr7TZoHpjgC2r6PHqDFRuzs5Gi6rYPRLJTzITu3CQ9S7vVwf4w2V0MPw31DTvreneeTCh8pG%2FBjqkAYu8yC%2Bb74vsTrJMnosS3eLnTwd%2F8QkncQFSBHfsYeq6YamEqevg0Mxv7JJ9XAeJsKMh2xVAfQbmYf%2B9I78y8vgmzrnfKPMlaPBzKRJv%2BTnv0v7Cb8cRqZbFhUCocOvpo1wvx7D0P%2FoyDXpbFTSh74zeu4aqGNuhwvwRkcsHFlZ5qtIhIzIfYEI5Q849BTd0g2NwP1VcjRxAosYI0uTpPimvwNaL&X-Amz-Signature=86166b94cddfe06a7be96a84e6cadb49acee84d9478263467bd44d94a118a138&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
