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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WHPUTU%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIH0r36%2FHZelqgNrlhBDQmdwFfysActA6O2GN12efPBfzAiBCgKMPuPXqF2pa0Dx2UfWaj6BhHQ8382FKdFjfNyf1UCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhCYMjMZMJpP%2FmdMKtwDszgdNfvid%2FCwHiMD5giaeOr%2FPe2MnqDtQfodhjhsSw8yof3PZT3d3mg83WIcmBeO%2BHH5SYUBpJ4hop%2BC0lfWH203dMDF1uumk8RnFWIGNQwijiiteKZEsIvXAZ0fsV1QLbWpDvNoKmG%2FH0QWnyiycnsvyBKIZcgbpeR3WOyGnRSNm3Rr1wPgwQvYpxXR0sPMWXeAbTy1Gn2JObye5RTgw3vlQgaiohm%2BXe2DYGuz1Z6MVmLvpigWWrsMZk9bCUCla3OrBwrq%2BERAOmZBq5h86yb6mFq4HoqOWimEAJTIQ9s9ctMsdotZ3uqwzapbWhLJN5kawkiZHAC3IHTNAQY19SkLaWTEuiOa%2BTzGmNoqAv3d95VazYZlewa%2F7xPkF%2FEnavSmzbSXwNrtGMJKyLEHF57HFkWXNYN6PPdm2nk16PyIGEfkePQc8xlnr2utPq5MhBkX84zObVlEkj2KTktJbek3j7GBx4Y5rnl85tGU8zgzUDuCgo8kB2f6efMW5Q2DvrJtvgMb1iJRpyLVHHi%2BNddecK0sHTKVycGSqLmUn9e4dFFTWu1lgRQvbqwVTIif%2BpmMxNFBklvy%2BBQyC86E7ROB5qJC%2FvBMFdrqJwEGD7sOJGQZAE4xNJtX0PEwtJK%2FzAY6pgHnEslYFT4x4ibRrsgQ0nqWVCpnKJq1KyvxFtQWuHRUVH%2BiNSfVUjU0D7wzKwXNrt52tVQFc4dhq5Y8IGu7P7tgzKZCh8giiv8BYTge0j7YqU1slD3R3HvuJMnVyLZ3HBrlZ3LqRHFaH%2Bud3xa2W8IUyEHScK%2BQAspi5mID77BSa5wTn0%2FgZ6x%2FWlABbPiMcCNMYKsVuO5oyf3OLijwA%2BXI%2FmEYFWj%2F&X-Amz-Signature=c26c29d4e33b0c32c72d4bce7811b4e65f4b70fc72333872dcb91c059380d7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WHPUTU%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIH0r36%2FHZelqgNrlhBDQmdwFfysActA6O2GN12efPBfzAiBCgKMPuPXqF2pa0Dx2UfWaj6BhHQ8382FKdFjfNyf1UCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhCYMjMZMJpP%2FmdMKtwDszgdNfvid%2FCwHiMD5giaeOr%2FPe2MnqDtQfodhjhsSw8yof3PZT3d3mg83WIcmBeO%2BHH5SYUBpJ4hop%2BC0lfWH203dMDF1uumk8RnFWIGNQwijiiteKZEsIvXAZ0fsV1QLbWpDvNoKmG%2FH0QWnyiycnsvyBKIZcgbpeR3WOyGnRSNm3Rr1wPgwQvYpxXR0sPMWXeAbTy1Gn2JObye5RTgw3vlQgaiohm%2BXe2DYGuz1Z6MVmLvpigWWrsMZk9bCUCla3OrBwrq%2BERAOmZBq5h86yb6mFq4HoqOWimEAJTIQ9s9ctMsdotZ3uqwzapbWhLJN5kawkiZHAC3IHTNAQY19SkLaWTEuiOa%2BTzGmNoqAv3d95VazYZlewa%2F7xPkF%2FEnavSmzbSXwNrtGMJKyLEHF57HFkWXNYN6PPdm2nk16PyIGEfkePQc8xlnr2utPq5MhBkX84zObVlEkj2KTktJbek3j7GBx4Y5rnl85tGU8zgzUDuCgo8kB2f6efMW5Q2DvrJtvgMb1iJRpyLVHHi%2BNddecK0sHTKVycGSqLmUn9e4dFFTWu1lgRQvbqwVTIif%2BpmMxNFBklvy%2BBQyC86E7ROB5qJC%2FvBMFdrqJwEGD7sOJGQZAE4xNJtX0PEwtJK%2FzAY6pgHnEslYFT4x4ibRrsgQ0nqWVCpnKJq1KyvxFtQWuHRUVH%2BiNSfVUjU0D7wzKwXNrt52tVQFc4dhq5Y8IGu7P7tgzKZCh8giiv8BYTge0j7YqU1slD3R3HvuJMnVyLZ3HBrlZ3LqRHFaH%2Bud3xa2W8IUyEHScK%2BQAspi5mID77BSa5wTn0%2FgZ6x%2FWlABbPiMcCNMYKsVuO5oyf3OLijwA%2BXI%2FmEYFWj%2F&X-Amz-Signature=5eb130d10aa9429fae7012122d99a0ff71b421230ea1e274fb34d7572ac1e22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
