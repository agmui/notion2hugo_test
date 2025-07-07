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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZ4AHBV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDQqGjYfwOOmlgaSkU2J7XIL1FmL03z6I61q3%2FBRdcHrAiAsOF7wJdVkUUD9rfp%2BmozQuaFcs3F5pIwFepIlTSpu4yr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMgrYdqoFm9%2FTceTLZKtwD6DSsHYPVujtWtBEiA1HxebvW5Tqxz6qbqh0iV9QenlJhPy6Jxn4fK6F9unA1yQkQWo4WE9CmtcFNVrLGTP2c81i5cjJ66SVT4C%2B91c%2BG99nDv17H7yuKQ6lY8I4S4VFC6FQWPccY%2B9KV0vtXukgFczB6c9pFCXQSNOa8w4XrIRIKApFid5OUeUDKMlQRdH%2F7Z0Bim6GfZhTZ87wjJ8COl22m6Qx2%2BuQ52zY2VjvbNoQ0hdOj7Kpx4cSOhh772%2FVV%2FutedNbKiVxwZLwyLDk3d1RMBRA0zQQE6EJdHE2S%2FLY%2BA37bp4JUT2J9wlDB0dsDPgmpaordHoKVTDT1tvjfJFMmABGS8%2BIWcf4rwAvH6HbqzM7VPGaRFPUhljNADqw4iiISBnEumihv6zMGf5kT30GWJnUoyOoNOFvzS90OxRK%2BobG9QxbTe4PGy2i5srRz7gMgPfVAZSJiRBpdFEa4xrEz8ejOGn9O1UJwZw0UALGk2c1HfpWcYPv0IOgTJWOKXbfXPCzlcxHQIjg3oWKHLwsKUR4C232tSxTCTjLcZonpvMhP29lcvpmJV5DDoORUsBIf8yYuNP9JtDhj1ivmPMSIrviAy8LxNGH8EX5fgVcuczwExDIkvMlatdIw2Y%2BswwY6pgEVIseRr9ghcdt3jh7czgfGgjxat2KVunOR03THEjuah2mHHt6Hx73ev35kpgiRAXnsS0kI8PZdBu0%2BguETVHi5EuFVRcN9TP8zKWtruZR7tbvYJVmsja1vNLDjRWeek%2BShG8GNCludVPcBJHDVpN7UYfFQb%2BftYL55YzfzehIV7TGqZEK1l%2Bh%2FDlVezP%2FJ6d4%2FC9%2ByMatgOuKrwQj9OhqRpmFVYD4T&X-Amz-Signature=0374e0f6992625ec53b5b61df4170fd670a744c1ff064486d7445acbbc435fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZ4AHBV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDQqGjYfwOOmlgaSkU2J7XIL1FmL03z6I61q3%2FBRdcHrAiAsOF7wJdVkUUD9rfp%2BmozQuaFcs3F5pIwFepIlTSpu4yr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMgrYdqoFm9%2FTceTLZKtwD6DSsHYPVujtWtBEiA1HxebvW5Tqxz6qbqh0iV9QenlJhPy6Jxn4fK6F9unA1yQkQWo4WE9CmtcFNVrLGTP2c81i5cjJ66SVT4C%2B91c%2BG99nDv17H7yuKQ6lY8I4S4VFC6FQWPccY%2B9KV0vtXukgFczB6c9pFCXQSNOa8w4XrIRIKApFid5OUeUDKMlQRdH%2F7Z0Bim6GfZhTZ87wjJ8COl22m6Qx2%2BuQ52zY2VjvbNoQ0hdOj7Kpx4cSOhh772%2FVV%2FutedNbKiVxwZLwyLDk3d1RMBRA0zQQE6EJdHE2S%2FLY%2BA37bp4JUT2J9wlDB0dsDPgmpaordHoKVTDT1tvjfJFMmABGS8%2BIWcf4rwAvH6HbqzM7VPGaRFPUhljNADqw4iiISBnEumihv6zMGf5kT30GWJnUoyOoNOFvzS90OxRK%2BobG9QxbTe4PGy2i5srRz7gMgPfVAZSJiRBpdFEa4xrEz8ejOGn9O1UJwZw0UALGk2c1HfpWcYPv0IOgTJWOKXbfXPCzlcxHQIjg3oWKHLwsKUR4C232tSxTCTjLcZonpvMhP29lcvpmJV5DDoORUsBIf8yYuNP9JtDhj1ivmPMSIrviAy8LxNGH8EX5fgVcuczwExDIkvMlatdIw2Y%2BswwY6pgEVIseRr9ghcdt3jh7czgfGgjxat2KVunOR03THEjuah2mHHt6Hx73ev35kpgiRAXnsS0kI8PZdBu0%2BguETVHi5EuFVRcN9TP8zKWtruZR7tbvYJVmsja1vNLDjRWeek%2BShG8GNCludVPcBJHDVpN7UYfFQb%2BftYL55YzfzehIV7TGqZEK1l%2Bh%2FDlVezP%2FJ6d4%2FC9%2ByMatgOuKrwQj9OhqRpmFVYD4T&X-Amz-Signature=4663e333a36ed6dafb00d12b9856543f5478b7d1796a23288e3537ff76d09807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
