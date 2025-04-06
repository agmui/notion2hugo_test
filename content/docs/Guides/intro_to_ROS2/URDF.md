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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZL3XRH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDha80DfB1Bzai2n5QG8kR%2BAWK50LdzZMr01gzgof9EnwIhAJR%2B%2Be%2F8u7G9aIevYcowLWWP6fbDcyrSw209ZaMTRoW%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igx9BnA8ARbdpdwjce0q3APoEWmtNnGM%2BVlkmoDPGVBPjXNgwHfiICbGA0ux1scyBW6HUZ%2FNeopeCnVhY3x1VO2uwsEgianpGW3Q8Kdhf3ArpRqeyEMfbqki5h5FL7fwKIdgrv9kU8jrsXZMTkfROFRN3TsKxglGeKM8%2Bnp4wZV%2FQxJDxrFdgDdWS%2BW4MCyZeRQM4FAxyPHwia0nPiAf17sFWTk0k2yNTisCnIvCAn%2BgEbJJc58F30oy8izIyhGTygS5%2BKxm9kpR3Bjii%2FzNxl98%2BvB3p7B6T%2F0jiYWTrY1hujI1hnjjtuXcp5kS9Yp4K%2Fgk2k%2FOtdFOkmyFGgcHDJG78iVHCNZjBYsNNgQMQPQWHlYcIni3JrXPkX3a5FphXknPHgnhG3uyb8qG58U%2BYuKPJLhULPg%2BAbAuGqkbj9zD2PUKV%2BfzZRfBe8y9N4UGqSUyiHP1nFKDgnoEF6AurBVmaub2CWEHt8YQ1Q%2FZsqZKL70CSmO6Ij3BeXyFoU5CrOZ86SlhcPSoKXVk4qm4ODUbKiynJ%2BdlNDw0%2FOBjJuPslJxgoVeFk1y%2Bx8d95kFzHOYDUidv%2BHnm6drg4VgUgTRaFDb4SGDbKXHBGhZcNW8HZeB8jP9%2BuCRQRDhhJsYNjANtbnPDJhMXb5EDgzCr%2Fsi%2FBjqkAWUa1j6%2B4SwudDG2v%2FujIkXiJrpCzV4gEalL0%2B7j6dY1hMUMgYg0kqGZ9lzHz8N2qr6UEvourmN8klS6%2FA9cBMs3ur%2Bl6Wq%2B7AivRU4FUfttiltKCiYzy77tAkxWVpzJAdXrSwSoWR2X%2B41JhThxXgS0Isws1TfV042OIkorF60cORYdF%2FQtLp3y%2B7K%2FMdskF7LqM3DPNfFBk0JYfMeuyeTuMc%2Fg&X-Amz-Signature=37bd4036a0dfea0fbcc54b57b9b443d12592a0f1a285ec5523618b3db50589db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZL3XRH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDha80DfB1Bzai2n5QG8kR%2BAWK50LdzZMr01gzgof9EnwIhAJR%2B%2Be%2F8u7G9aIevYcowLWWP6fbDcyrSw209ZaMTRoW%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igx9BnA8ARbdpdwjce0q3APoEWmtNnGM%2BVlkmoDPGVBPjXNgwHfiICbGA0ux1scyBW6HUZ%2FNeopeCnVhY3x1VO2uwsEgianpGW3Q8Kdhf3ArpRqeyEMfbqki5h5FL7fwKIdgrv9kU8jrsXZMTkfROFRN3TsKxglGeKM8%2Bnp4wZV%2FQxJDxrFdgDdWS%2BW4MCyZeRQM4FAxyPHwia0nPiAf17sFWTk0k2yNTisCnIvCAn%2BgEbJJc58F30oy8izIyhGTygS5%2BKxm9kpR3Bjii%2FzNxl98%2BvB3p7B6T%2F0jiYWTrY1hujI1hnjjtuXcp5kS9Yp4K%2Fgk2k%2FOtdFOkmyFGgcHDJG78iVHCNZjBYsNNgQMQPQWHlYcIni3JrXPkX3a5FphXknPHgnhG3uyb8qG58U%2BYuKPJLhULPg%2BAbAuGqkbj9zD2PUKV%2BfzZRfBe8y9N4UGqSUyiHP1nFKDgnoEF6AurBVmaub2CWEHt8YQ1Q%2FZsqZKL70CSmO6Ij3BeXyFoU5CrOZ86SlhcPSoKXVk4qm4ODUbKiynJ%2BdlNDw0%2FOBjJuPslJxgoVeFk1y%2Bx8d95kFzHOYDUidv%2BHnm6drg4VgUgTRaFDb4SGDbKXHBGhZcNW8HZeB8jP9%2BuCRQRDhhJsYNjANtbnPDJhMXb5EDgzCr%2Fsi%2FBjqkAWUa1j6%2B4SwudDG2v%2FujIkXiJrpCzV4gEalL0%2B7j6dY1hMUMgYg0kqGZ9lzHz8N2qr6UEvourmN8klS6%2FA9cBMs3ur%2Bl6Wq%2B7AivRU4FUfttiltKCiYzy77tAkxWVpzJAdXrSwSoWR2X%2B41JhThxXgS0Isws1TfV042OIkorF60cORYdF%2FQtLp3y%2B7K%2FMdskF7LqM3DPNfFBk0JYfMeuyeTuMc%2Fg&X-Amz-Signature=6e402941c6e45b64184838705fd3e2d493eeb2c51294e582b0634a95b7ff8a89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
