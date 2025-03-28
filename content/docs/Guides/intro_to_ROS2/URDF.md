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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JPUPWG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsCJN7fPeBuai2lQdpFQADIsiTFj4fDa0xHnOIa8UB%2BgIhAK%2Bw8clJtRSVhc4iu3C%2FituZS2%2BdVYfBUQYgMFRwSyNAKv8DCFgQABoMNjM3NDIzMTgzODA1IgwGFbhjQb0arz5%2BD9Uq3ANmWf20LBJmh3SQMCqNFEdlbKhgXi10wDUJWkTIzl%2B7NXZK1TKIAaCpVU3qNRUycAo6JzkNwTA4czcOadAleDstDZWZBWkyVRGhCgCPGEzvtkRf8tnZ54fi4YN%2FxMhgbFJXrCabW1%2FNsOZd1bpEoMvudHWLSt7gFpcOpgVG3sCcVKa%2FfbCZbqPYCqvX4hkN8Kiz3ohv%2FA2hV9dHgvn56pkWnztXzUIkb5P8%2B68zUP9cBxFyOhd29YjbR6eyCd6kbXOaUZzRGgv5umBYFIRiUe60DiSCe7FBK1hzoBPreqIz7fSj1oosuH9PguP%2Fel6QQfoLBDIi5mtKF%2Fq%2BACJIQUgChDtb0WlM3WGkwhX7XNHKCtwYNNMBN35eqFPEEGT4iVrttWN8oW7U%2Fr1oSTvrn8yIwNUKii3UzSlbvQNdyHa7BYTvvXeDmoxS3h48g%2BxZwMoLBjr6uB5IMyB%2FXrVW3PnRWb3qQdE6JXmsopO8bOqV4UBAOhpcwBOTJnvz3R2fOoiSsHMFDn9IazxnbDHff032ROz9M2hbJHQSnst%2FqZZN64QAeDdOotqoOojEjv8ky%2BOYAP32WHMTVZeH%2BDQqnjtOEdUIvYIuYJJfTW0h%2FS6FWBRSstgplNAZv0OZDzCRhpm%2FBjqkAW4kkjpGISq0lIHJge4eRqXniZx5bD8M2fDbAgdAOjVwl2TS4V8FtDa3AU9pcN7P%2BVr0ZRWK90P7s9Gt%2BiLrbYZlIs08XovIAIcE7hrVDfZjg5riZqgtqGI7sidL0bvaWI9gazrZqdYlUYJ54lztK8Dn5srRqdOeI%2B8atHe%2BRb1EG1F3%2FEsqUygRUzm07SCT2Fi5AiO3QVbEAwDsjb7KLdbPykSD&X-Amz-Signature=77b9a597bcf310c3dbbdd9e10253351effc5578f3ff113dd73b63e93e88df3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JPUPWG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsCJN7fPeBuai2lQdpFQADIsiTFj4fDa0xHnOIa8UB%2BgIhAK%2Bw8clJtRSVhc4iu3C%2FituZS2%2BdVYfBUQYgMFRwSyNAKv8DCFgQABoMNjM3NDIzMTgzODA1IgwGFbhjQb0arz5%2BD9Uq3ANmWf20LBJmh3SQMCqNFEdlbKhgXi10wDUJWkTIzl%2B7NXZK1TKIAaCpVU3qNRUycAo6JzkNwTA4czcOadAleDstDZWZBWkyVRGhCgCPGEzvtkRf8tnZ54fi4YN%2FxMhgbFJXrCabW1%2FNsOZd1bpEoMvudHWLSt7gFpcOpgVG3sCcVKa%2FfbCZbqPYCqvX4hkN8Kiz3ohv%2FA2hV9dHgvn56pkWnztXzUIkb5P8%2B68zUP9cBxFyOhd29YjbR6eyCd6kbXOaUZzRGgv5umBYFIRiUe60DiSCe7FBK1hzoBPreqIz7fSj1oosuH9PguP%2Fel6QQfoLBDIi5mtKF%2Fq%2BACJIQUgChDtb0WlM3WGkwhX7XNHKCtwYNNMBN35eqFPEEGT4iVrttWN8oW7U%2Fr1oSTvrn8yIwNUKii3UzSlbvQNdyHa7BYTvvXeDmoxS3h48g%2BxZwMoLBjr6uB5IMyB%2FXrVW3PnRWb3qQdE6JXmsopO8bOqV4UBAOhpcwBOTJnvz3R2fOoiSsHMFDn9IazxnbDHff032ROz9M2hbJHQSnst%2FqZZN64QAeDdOotqoOojEjv8ky%2BOYAP32WHMTVZeH%2BDQqnjtOEdUIvYIuYJJfTW0h%2FS6FWBRSstgplNAZv0OZDzCRhpm%2FBjqkAW4kkjpGISq0lIHJge4eRqXniZx5bD8M2fDbAgdAOjVwl2TS4V8FtDa3AU9pcN7P%2BVr0ZRWK90P7s9Gt%2BiLrbYZlIs08XovIAIcE7hrVDfZjg5riZqgtqGI7sidL0bvaWI9gazrZqdYlUYJ54lztK8Dn5srRqdOeI%2B8atHe%2BRb1EG1F3%2FEsqUygRUzm07SCT2Fi5AiO3QVbEAwDsjb7KLdbPykSD&X-Amz-Signature=a9ef41ac22bdd4572556573dd308934ce958e29085b3374ef1fc6baeb90fefc6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
