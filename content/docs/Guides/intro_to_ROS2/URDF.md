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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3AVFBA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICPG4a1EGITI3rRNRkw3V%2BLnIiyjRGGQTtWI6z8R9nx%2FAiEA6BZX0isZ0K1e3znKE45cWVfL1QHwM5jNNMpr2pn2o%2B8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHyAEmm2MzW6SRNvzCrcA%2FSEeYSfK3ZQ8AAZeGHdE%2FcHi7OsNd21JDYvaw6JcXBtx5bnRjxvkk7vvChGyjnY6oR5B6zYxNAtiVxJiT4lbYOLjzZkGHLySj8aBaV3u0i1AfKbEeiYFO7keqsjzr8X%2BlERsmui1t4W42%2F8Kle2gRYK96Psf6kkPHqhTnUNhK4prpz8O9ZmOgSoLiVUiVD6f2jxkRNxwBIeVc3Wi%2BbuzpsbeUWBg33YQmYBIR79xm%2Bn4D7zxRKrIP0D0%2BH%2BgSOuLZcuHbjbyULoqXa22bfgIV4C4dffX6VyK16WyEZ5RKAsCvsDkX9Z19MYvVLBtUVkHfigD2mDSz9jA0Kep7dn%2FNohtZyg3KP5%2BPbJxvkNq2yP43UQ5UgT25nEa2vosf3BmLVc5yP1yYCQ%2Fm5EdqKE0%2FC2YLHfXXXMiy2ZmCVJRg1HaCmdb0xgp%2BQlniMrHZrx2pD2ueLPZdAFMKMoG87P5JawYJFOiZ6S3I%2BGO5k923Pp%2BXZ28zFz2dIq1dGBIkFvGRx%2F%2BR3nEbg6UlbB8G9ndsPGTvS4pq%2BmFLE%2BVyf5vCs6b7UXjmAsCYWvFZY9wTjVUqsvRmYnQxM%2F%2BptUJRbO5TrqWal2502cBxIopXj0jW8jzK%2BX72zQYCPmaj8VML3%2Bxb0GOqUBCHuq4IDK5X1SrNzEhmW3PJOhWsYHjwdOAwvgSgE3pZ3k0l7Efm5MoHNyx9w%2BZyaj%2Bb7tWGwjjonwMl%2BMpo9QDiLpZRxXB6R6%2B6UpLqKiycXF1zSWBblrA7Gkynug%2FMOujQAq2mAyAXlWyxo6i92L0GwU2amqlYoBLwHI1CyO7OE7Edm%2FugD9LsDAXm66WYy2%2BcCVZe5KeXTD1ppk23Skuf%2Bt4eFa&X-Amz-Signature=dfe5d0e708187ab5d60deb40eaa725fed7b2ce1798eef2e3a5624a3cf9a3c105&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3AVFBA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICPG4a1EGITI3rRNRkw3V%2BLnIiyjRGGQTtWI6z8R9nx%2FAiEA6BZX0isZ0K1e3znKE45cWVfL1QHwM5jNNMpr2pn2o%2B8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHyAEmm2MzW6SRNvzCrcA%2FSEeYSfK3ZQ8AAZeGHdE%2FcHi7OsNd21JDYvaw6JcXBtx5bnRjxvkk7vvChGyjnY6oR5B6zYxNAtiVxJiT4lbYOLjzZkGHLySj8aBaV3u0i1AfKbEeiYFO7keqsjzr8X%2BlERsmui1t4W42%2F8Kle2gRYK96Psf6kkPHqhTnUNhK4prpz8O9ZmOgSoLiVUiVD6f2jxkRNxwBIeVc3Wi%2BbuzpsbeUWBg33YQmYBIR79xm%2Bn4D7zxRKrIP0D0%2BH%2BgSOuLZcuHbjbyULoqXa22bfgIV4C4dffX6VyK16WyEZ5RKAsCvsDkX9Z19MYvVLBtUVkHfigD2mDSz9jA0Kep7dn%2FNohtZyg3KP5%2BPbJxvkNq2yP43UQ5UgT25nEa2vosf3BmLVc5yP1yYCQ%2Fm5EdqKE0%2FC2YLHfXXXMiy2ZmCVJRg1HaCmdb0xgp%2BQlniMrHZrx2pD2ueLPZdAFMKMoG87P5JawYJFOiZ6S3I%2BGO5k923Pp%2BXZ28zFz2dIq1dGBIkFvGRx%2F%2BR3nEbg6UlbB8G9ndsPGTvS4pq%2BmFLE%2BVyf5vCs6b7UXjmAsCYWvFZY9wTjVUqsvRmYnQxM%2F%2BptUJRbO5TrqWal2502cBxIopXj0jW8jzK%2BX72zQYCPmaj8VML3%2Bxb0GOqUBCHuq4IDK5X1SrNzEhmW3PJOhWsYHjwdOAwvgSgE3pZ3k0l7Efm5MoHNyx9w%2BZyaj%2Bb7tWGwjjonwMl%2BMpo9QDiLpZRxXB6R6%2B6UpLqKiycXF1zSWBblrA7Gkynug%2FMOujQAq2mAyAXlWyxo6i92L0GwU2amqlYoBLwHI1CyO7OE7Edm%2FugD9LsDAXm66WYy2%2BcCVZe5KeXTD1ppk23Skuf%2Bt4eFa&X-Amz-Signature=e3521cb7f362cbb1f17a84f1e45d149a27f5d6ed962e8260cfd6ea42d281d9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
