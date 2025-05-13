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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A6XKX7P%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDPNBnASYPHErdP4Sk9VNNFc4wPqJKCwgUSeaIT%2Be9qdAIgBmW%2Fu6oQqetuK5mUuUax4%2Bbvd%2B8aMshfJvgEg19fiv4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOX%2Bcaz6WD4z%2F9E4SrcA7ijlKbFYtT%2B4ehNqwjcqzn7mfS8eSrqLuXglXDqDqEGLn%2FylPqrw%2FPrbQCOwSBbeC8Tee2rOHaEUtPrLzO9EwwxUTSqFSaBG7UEFOcBmfJw9x0BSEIpaThrZp5bjRIUAx9r7oQ%2BNLJdR%2Bk0%2B1R46tOIBcAwTe%2FYPZmimsxoQVqU%2F3R0iPmkw1FYQ60vQdvh3q9RSbWw1wxAMxVR3s8zKoorJYgk3co%2Fxl6Fyg2MFPruX2UpHjR%2BGc3vbdoqoWvpz0zGWnv8IczbmBSh1D0OKFGArDxiZNMVfQr2v8z83UVNd3IH8d7oi9Djsz4lyt25g6NKFQljBoiI2M%2FGpYoQ8N8TyXFnUdWFiY%2F2BgxQ5SsvgYVocSvptk%2FwT4as66yCIm2Q2jwbFR0ibO6rEuXXgJDaGImm9tNNzOnlp%2FzpjD8NLBKUMZ%2BF8eig6nfqzP2%2FE4RYcGMqj%2FkEkGsXQKBQUbKmu53fJ0uAhIAUEpEaBECFxgcyNWJyz3%2FD6gfqFI8IjK7DrNi8oc5n%2B3tQOUFsRwfUifmkIJs%2FSGpXDHQ6b9kzYvnctAMkgSBlq%2B4EqXBHoRaMOiIEAKkiQjze4%2FmfV0nmDPegXyxQkusDY55OHpp22B%2B07oId5LxWVPRZMLPBjMEGOqUBnigz42FuFwvguaO5IH7Q%2BnBGLTwD4NnwW85ZFRkda0aWeBVTYbOuuXujkME1AA5zK7Q0yVt%2BVAEvQ7rINQy4tTEalNeBAIjb2tw1A6UzIGTDib51oxsr4DIBQFnX1DrBPJYsnj70GU8cQo7abyejQdD%2BT9vcZSBNgnYgWVsbTLGgyfQlUcqPDv6q8fFFcpKOqWBoTxOMfauYrqG4csxT5rJX5ZuI&X-Amz-Signature=528e73b60b4bce29b581aa9ddaf990d6890566e408d147e15af689d52ebc2a15&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A6XKX7P%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDPNBnASYPHErdP4Sk9VNNFc4wPqJKCwgUSeaIT%2Be9qdAIgBmW%2Fu6oQqetuK5mUuUax4%2Bbvd%2B8aMshfJvgEg19fiv4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOX%2Bcaz6WD4z%2F9E4SrcA7ijlKbFYtT%2B4ehNqwjcqzn7mfS8eSrqLuXglXDqDqEGLn%2FylPqrw%2FPrbQCOwSBbeC8Tee2rOHaEUtPrLzO9EwwxUTSqFSaBG7UEFOcBmfJw9x0BSEIpaThrZp5bjRIUAx9r7oQ%2BNLJdR%2Bk0%2B1R46tOIBcAwTe%2FYPZmimsxoQVqU%2F3R0iPmkw1FYQ60vQdvh3q9RSbWw1wxAMxVR3s8zKoorJYgk3co%2Fxl6Fyg2MFPruX2UpHjR%2BGc3vbdoqoWvpz0zGWnv8IczbmBSh1D0OKFGArDxiZNMVfQr2v8z83UVNd3IH8d7oi9Djsz4lyt25g6NKFQljBoiI2M%2FGpYoQ8N8TyXFnUdWFiY%2F2BgxQ5SsvgYVocSvptk%2FwT4as66yCIm2Q2jwbFR0ibO6rEuXXgJDaGImm9tNNzOnlp%2FzpjD8NLBKUMZ%2BF8eig6nfqzP2%2FE4RYcGMqj%2FkEkGsXQKBQUbKmu53fJ0uAhIAUEpEaBECFxgcyNWJyz3%2FD6gfqFI8IjK7DrNi8oc5n%2B3tQOUFsRwfUifmkIJs%2FSGpXDHQ6b9kzYvnctAMkgSBlq%2B4EqXBHoRaMOiIEAKkiQjze4%2FmfV0nmDPegXyxQkusDY55OHpp22B%2B07oId5LxWVPRZMLPBjMEGOqUBnigz42FuFwvguaO5IH7Q%2BnBGLTwD4NnwW85ZFRkda0aWeBVTYbOuuXujkME1AA5zK7Q0yVt%2BVAEvQ7rINQy4tTEalNeBAIjb2tw1A6UzIGTDib51oxsr4DIBQFnX1DrBPJYsnj70GU8cQo7abyejQdD%2BT9vcZSBNgnYgWVsbTLGgyfQlUcqPDv6q8fFFcpKOqWBoTxOMfauYrqG4csxT5rJX5ZuI&X-Amz-Signature=9c7dc2770fd8d1bb30bf5319aafe3c85aa019046bbb4ebebf391bdb210247eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
