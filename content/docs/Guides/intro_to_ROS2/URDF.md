---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVCZPOK%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCDCBEKz%2B7BWRWeCMMQ9rYvKINbvyWsZNrjZ1%2FLS1vibQIhAO%2FIQVEy%2F7QTpxJ%2FDMuP5EYjy0cfIUlkU2l%2BZeqBdR4bKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKaFL9rTGJ3p6etDYq3AMTh2bEdN%2BcdR4m6voiJl2Bgd41WjszMXXFkiWVkSy0o4ArVv1BQC%2B4HKm3mOU60OECFxYs5yJgZCwcMemmphZOuYM8lt7%2FS1nTEsbIu0CybFBmLWTvOoVwKSYjLj5Y9mjGY7g2xMSzqBra0ZFR4K6ygHHIfSuPG4hK7jWQvTvBKHLLIMMfPqah%2BXOr7xso7oycn2iM7JdljFOruJt1Okwo1CJJwFoxWB%2F3bZ6h0%2BRSSQkw%2B3fRDcSkak3Uips8w8bDavrIYesEqnBhlWmIY%2F7i%2BU5Z6Xr1dHNrkYSZXR698FkcS0Cy92VSWL3GcgSCQsB%2FUW2J1MFXWthkC5y%2BrehnBIbv%2F1Y65%2F5YXnlc0UjmeY9U46aM%2Bhm8GHosE2HT1XOLCOL4a5wYr46nhuuoQkwBI1yjWC9QoyCbbDvsirjGjUt01Qcepyo1ApBk2of7eAGQlTbvvzw6R2zKrh8Au6CG4X3e1gSUCxX38y5GFfcm%2BAJShuXesMGa6gFv7deGgDy0b8v5roSvVL2MVVxWZ4tr%2FSrWeP6k7rYRVMY4db%2BL0B%2FXpZiYWntTMKoaInn4%2FKfwVVHYwLXEI52JeOruyd6g2Z5%2F5AZshJlcKeM2ArwEdHwH%2BYytwoiKxFILXzDRndzKBjqkAcGkUAaJdzyEdZ5oCudTTZCGOAxPb2roxBQ1yf61AV4KitS8WI2Op7SjMk5gXudqOkBWWMNob7U1QlwFy6wxZLqytzcVbBRWoQlGcS9CxtYPe%2BLpwEGgvTrILqwEs0T2t7rZzRx3PpVMBVg2K28mmHLQ4WUgq5zUVaH3HSf4MTuU4Vzwqn0ERyM1veHfL0kZtXcz9EnT4lIJcB%2B8gcc5pWL5spWq&X-Amz-Signature=06dd1fbcf5d3f54394a9ce4e2282327df4c8f3fe7e26745a1c8b7a3a1c83e2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVCZPOK%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCDCBEKz%2B7BWRWeCMMQ9rYvKINbvyWsZNrjZ1%2FLS1vibQIhAO%2FIQVEy%2F7QTpxJ%2FDMuP5EYjy0cfIUlkU2l%2BZeqBdR4bKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKaFL9rTGJ3p6etDYq3AMTh2bEdN%2BcdR4m6voiJl2Bgd41WjszMXXFkiWVkSy0o4ArVv1BQC%2B4HKm3mOU60OECFxYs5yJgZCwcMemmphZOuYM8lt7%2FS1nTEsbIu0CybFBmLWTvOoVwKSYjLj5Y9mjGY7g2xMSzqBra0ZFR4K6ygHHIfSuPG4hK7jWQvTvBKHLLIMMfPqah%2BXOr7xso7oycn2iM7JdljFOruJt1Okwo1CJJwFoxWB%2F3bZ6h0%2BRSSQkw%2B3fRDcSkak3Uips8w8bDavrIYesEqnBhlWmIY%2F7i%2BU5Z6Xr1dHNrkYSZXR698FkcS0Cy92VSWL3GcgSCQsB%2FUW2J1MFXWthkC5y%2BrehnBIbv%2F1Y65%2F5YXnlc0UjmeY9U46aM%2Bhm8GHosE2HT1XOLCOL4a5wYr46nhuuoQkwBI1yjWC9QoyCbbDvsirjGjUt01Qcepyo1ApBk2of7eAGQlTbvvzw6R2zKrh8Au6CG4X3e1gSUCxX38y5GFfcm%2BAJShuXesMGa6gFv7deGgDy0b8v5roSvVL2MVVxWZ4tr%2FSrWeP6k7rYRVMY4db%2BL0B%2FXpZiYWntTMKoaInn4%2FKfwVVHYwLXEI52JeOruyd6g2Z5%2F5AZshJlcKeM2ArwEdHwH%2BYytwoiKxFILXzDRndzKBjqkAcGkUAaJdzyEdZ5oCudTTZCGOAxPb2roxBQ1yf61AV4KitS8WI2Op7SjMk5gXudqOkBWWMNob7U1QlwFy6wxZLqytzcVbBRWoQlGcS9CxtYPe%2BLpwEGgvTrILqwEs0T2t7rZzRx3PpVMBVg2K28mmHLQ4WUgq5zUVaH3HSf4MTuU4Vzwqn0ERyM1veHfL0kZtXcz9EnT4lIJcB%2B8gcc5pWL5spWq&X-Amz-Signature=1156fb5e8f2ce80f9bfc3e47d13db8443274942d68257d5a719479203db8cbad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
