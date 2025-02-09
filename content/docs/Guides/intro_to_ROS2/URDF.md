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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BLIMKVO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZrDa3KKQ1vhciqoZ9MY3xXyziXjmEaSjKEWQWzA4BHgIhAPA89uMzea80yZprEiX7l23hBwnMmVVkUi%2F%2BOpx8WIV2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd42xNC8pESyttvaYq3AMb4iTBwXLoE8wKotmOh1CMfGQBmEdmjimvkZuiZtQThBGFr0NuFpI7wWmiY1WI7vbgi6j0IVjOonwhXzsuP204LagZWvYVy3QjrgRWRFRmYxM2VZXEiXe5Wb5yGDJS6Kvz2OnvBS6TrM1RrsR%2Fbhq8F2IN9ngCX3NtlRq1K%2BCO83XPIjeNXsm526NAQW1E8mz6mm%2FzlTPQ0larXWmdSLDzCnAFEuuq0NYORlQGlm2XcnHjH7dPS2IG4um6KnEbp7jaKcm6jmzLdgD3iI4WvURTUX%2FOMOcdXQ0zjoBC1YFd1JyBPe9yFUjnBRFHjhP8gMIeT%2F786Ez28Y2zoFpFDpAbIVFkHeJFkvlJN7gKvGBAYxQiUYWh62tfcgjLeiK5Do%2BXYOj38tDheM24dv92Ln3XKJTc9wjWrMjUD4YP%2FaHHtMxl%2FQOIK9DAe%2BtLwKRbtyU3DAdw4GmgaYg7JpgraY%2FR7kkB1BNpfzYGcIXzu1%2BVpCW1trpgzsvOUxUAsNdLcYm45FRJ%2BuITEhXBWyjpYHtJSsqi5o4zWTg2sYZKZJ7CHRHDUSJaav2hW5ZqPaud%2B5MlEvcS%2BAqtUaONMfbEn4u7GsTtpsuZLKnh1kPAL3VQxIHlZTOp8ylZNMmn4zCEiqO9BjqkAVMij2v60Bw8jmMcD7EipqTbi6M91YeNMIfLNtk8yTrMJJKe9JQjrZ3Ywx4qJU01%2BXlVeYKLxSrr37SF5lDr1G%2BNy1URmNF2yQjucIWzc%2B%2BWmqbSXr6G8sv14AfKWkfdNM3Q2iINXGAr9jwj5gkZCDtErdtaj9ioSohrErOIJpkKiDajINHycuKom6rLKoIQgMkfKlbzo0NrvImwk53rrOjAq3o%2B&X-Amz-Signature=b5bae1af7640f30887a0e9aacae37c166079db9691cc2a1d86b126e4d3917dec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BLIMKVO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZrDa3KKQ1vhciqoZ9MY3xXyziXjmEaSjKEWQWzA4BHgIhAPA89uMzea80yZprEiX7l23hBwnMmVVkUi%2F%2BOpx8WIV2KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd42xNC8pESyttvaYq3AMb4iTBwXLoE8wKotmOh1CMfGQBmEdmjimvkZuiZtQThBGFr0NuFpI7wWmiY1WI7vbgi6j0IVjOonwhXzsuP204LagZWvYVy3QjrgRWRFRmYxM2VZXEiXe5Wb5yGDJS6Kvz2OnvBS6TrM1RrsR%2Fbhq8F2IN9ngCX3NtlRq1K%2BCO83XPIjeNXsm526NAQW1E8mz6mm%2FzlTPQ0larXWmdSLDzCnAFEuuq0NYORlQGlm2XcnHjH7dPS2IG4um6KnEbp7jaKcm6jmzLdgD3iI4WvURTUX%2FOMOcdXQ0zjoBC1YFd1JyBPe9yFUjnBRFHjhP8gMIeT%2F786Ez28Y2zoFpFDpAbIVFkHeJFkvlJN7gKvGBAYxQiUYWh62tfcgjLeiK5Do%2BXYOj38tDheM24dv92Ln3XKJTc9wjWrMjUD4YP%2FaHHtMxl%2FQOIK9DAe%2BtLwKRbtyU3DAdw4GmgaYg7JpgraY%2FR7kkB1BNpfzYGcIXzu1%2BVpCW1trpgzsvOUxUAsNdLcYm45FRJ%2BuITEhXBWyjpYHtJSsqi5o4zWTg2sYZKZJ7CHRHDUSJaav2hW5ZqPaud%2B5MlEvcS%2BAqtUaONMfbEn4u7GsTtpsuZLKnh1kPAL3VQxIHlZTOp8ylZNMmn4zCEiqO9BjqkAVMij2v60Bw8jmMcD7EipqTbi6M91YeNMIfLNtk8yTrMJJKe9JQjrZ3Ywx4qJU01%2BXlVeYKLxSrr37SF5lDr1G%2BNy1URmNF2yQjucIWzc%2B%2BWmqbSXr6G8sv14AfKWkfdNM3Q2iINXGAr9jwj5gkZCDtErdtaj9ioSohrErOIJpkKiDajINHycuKom6rLKoIQgMkfKlbzo0NrvImwk53rrOjAq3o%2B&X-Amz-Signature=98c500787c6799a82d3ab0b9fa0df45d6c156bd76cb22c8b4bbb04d5d1aa08b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
