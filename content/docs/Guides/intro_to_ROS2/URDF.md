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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EIWYYLQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq96eLFOuaAGfQPVuYCC1MHfrLAPpr4uJsa1KC%2BiR58wIgJ2fg9V5kfqux6zSSy6Zemt7LV0vbqPObkWCpIsmIJ48qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BlwmiXsbH0ZLK8DSrcA0qlwRMOFfrFNSdXWAxmqXAvAoFsK%2F8dgA6LCeAiHdxQmWpPm8GEPjyCd3mkz1XCxkGP07q5QyQzlPiNAkxNPdB6D1LQDahbP5oJw%2BTFvMUr5wJFAP7dvD1CPP3GTi9lKr2JXFPqK9Rx8%2FaoZXynTNkStI2aGq5z6Ke%2FM5Dam7kC%2FN17v8MhXHe2ceVrwpd0D9j2rRLCOhqzKCYZs7ecbhZA80K%2Br58thHACLy8hXOapYKGLqgvu2YAxWppVTmV7MTPq9EpXrBfdIjAkB3gorASQ487c1NA0WrnKQPL1QSJT6pAASimI06Fub3eCDUZVY8DdK%2FQUDcny%2FZZ5CHiXKsUher5bwKMRAR%2FY0ncLTYET%2BHUUkEFLH017ocumTPE3lj4ooKBWzQutcyiWhWN%2F9fGdjuPvPBEM7M0rut%2FT3tsaZrfMNIXqnIf0XWEz3f4ly6I042Fnzyy1sc5n1Tr%2BF9g3JRzGb83RD0Voa5km5CZhw7oHT6qdUs%2BKepBzE2yt5p9mwMACFMOk5M3ZD%2FDwYj07%2BjMcmVXqH64WSArP3hrI0XnTjV6G1DvXoTTkyPst3fyBNegC7FJRkMRkrxN2nP4BNJVAxg2vnVlSWYrgrht2uLVK5EnVNaXub%2BN3MKL2q8QGOqUBJHh1fsblpMfrMJuHSIJccQyY6K6knGLrEFWUP4SZMTOI0FhdJ%2FLObr%2BhzCPsJOPqkfL%2FOnoQSeZ0EZD0XKx6LDc%2BrMzreUT%2BR2RDRqkdIJI%2B43N3TCRKhOmZdHqNRFO6AKk2v86Ex8sKpl6qrHWC%2F13muI%2FSTsZYkSspp4ayRGhQCn3r1rHfXVEcWVgioptkfUv9W3Hxy06DPx4VWoXUD23nw0Zl&X-Amz-Signature=a982b301a1c828667b6dd9e4c81a6ba1059da224dbe78fa3035fa689d7c72912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EIWYYLQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq96eLFOuaAGfQPVuYCC1MHfrLAPpr4uJsa1KC%2BiR58wIgJ2fg9V5kfqux6zSSy6Zemt7LV0vbqPObkWCpIsmIJ48qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BlwmiXsbH0ZLK8DSrcA0qlwRMOFfrFNSdXWAxmqXAvAoFsK%2F8dgA6LCeAiHdxQmWpPm8GEPjyCd3mkz1XCxkGP07q5QyQzlPiNAkxNPdB6D1LQDahbP5oJw%2BTFvMUr5wJFAP7dvD1CPP3GTi9lKr2JXFPqK9Rx8%2FaoZXynTNkStI2aGq5z6Ke%2FM5Dam7kC%2FN17v8MhXHe2ceVrwpd0D9j2rRLCOhqzKCYZs7ecbhZA80K%2Br58thHACLy8hXOapYKGLqgvu2YAxWppVTmV7MTPq9EpXrBfdIjAkB3gorASQ487c1NA0WrnKQPL1QSJT6pAASimI06Fub3eCDUZVY8DdK%2FQUDcny%2FZZ5CHiXKsUher5bwKMRAR%2FY0ncLTYET%2BHUUkEFLH017ocumTPE3lj4ooKBWzQutcyiWhWN%2F9fGdjuPvPBEM7M0rut%2FT3tsaZrfMNIXqnIf0XWEz3f4ly6I042Fnzyy1sc5n1Tr%2BF9g3JRzGb83RD0Voa5km5CZhw7oHT6qdUs%2BKepBzE2yt5p9mwMACFMOk5M3ZD%2FDwYj07%2BjMcmVXqH64WSArP3hrI0XnTjV6G1DvXoTTkyPst3fyBNegC7FJRkMRkrxN2nP4BNJVAxg2vnVlSWYrgrht2uLVK5EnVNaXub%2BN3MKL2q8QGOqUBJHh1fsblpMfrMJuHSIJccQyY6K6knGLrEFWUP4SZMTOI0FhdJ%2FLObr%2BhzCPsJOPqkfL%2FOnoQSeZ0EZD0XKx6LDc%2BrMzreUT%2BR2RDRqkdIJI%2B43N3TCRKhOmZdHqNRFO6AKk2v86Ex8sKpl6qrHWC%2F13muI%2FSTsZYkSspp4ayRGhQCn3r1rHfXVEcWVgioptkfUv9W3Hxy06DPx4VWoXUD23nw0Zl&X-Amz-Signature=5abede124140d5d11f26ecfd8837be8e7269ea5c19824eae84b41c29fcc48c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
