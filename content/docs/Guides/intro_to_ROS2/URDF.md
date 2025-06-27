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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHTP4DV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKhCMdEi4EdbiGHbStFDkLk4bxc2j5AI%2FcFiJfanGNzAiAK6%2FYYH6iqPbFDHyRDSqViNtsGcPZrWYTC1nDO5zDGTyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMejdtBypC3q3SAf1kKtwDJ9Mbi5r7nFUFKKBQIBMGqkIrbAN8f%2BxFzjn3e2yqRSygpyD4RkeZAW3CHlqdMwN0gTqHs3DXEBUogdrPRGikeTIHl1kQGqJrQ8QIn3Owz1K1vEnKFa8XsS8YbNXfUirx3wXFMv4eUeY0e4yTsc9RMXs2BKYdDo3rlUwNyj9FHKuc4T9ikqEUrfTIaYy%2F4KtYxWnRxeA2BCwtSgjJOs5IeUpyXw6ZnD5U%2Fz4L%2BESuCrFxTUxHmoRpvdwX0Bm5K4gNhkmmJE3Hb4BPEMKfymbl%2FtSaRsZ0NJb348nXgrrEmyDAMky1c1v%2FvqSB2%2F1B60w%2B3eVVtws%2Be1kpTVtmco%2FSk%2F8pAB%2FwYuB%2BBHc%2FiTM1Yu8wqFdDIQn4FY9m7zwAx9%2FsJj0PAJSYe55dZle1eAJDu5M7RvowK97KBF04Uh1KRBOR%2FTprEk4uTZQm3HKOH%2Fz5RoxYK0zJaP4LSSn3Dn%2FR0eF05XP%2FW4GKkKonKuE9%2FoN95gfQRMLoBG2R4BxyALuX5wvKTJpRkx7wB52HLb3%2ByyjxFZX7NfXG3WYs321XfaKm0gkUyNjQolA8s4bwfx4u5veMYcHKz4%2FqonAm4lkMXEaYbUFmcyFhLR%2BKi5AoHKXiB%2FIH%2FX%2B3loW633cwpff6wgY6pgFz6xiEIx19zIzq6Bo9jiv7%2F3uklWTKMEkRKNDOQYT7S1jEJ40lnt5R7fI3MvwU0Bue0sHEZ19xbMdn6h3cH5DjXFOBtS%2FC8gp2xdizyYA5JffGENr6gevFPm18yLBfK9UlkmuYMAu0EUkvV8%2FQgCnfGH%2By0wO5mR6uYfeDUYV1gsyE%2Fqmk8g1Pc%2Fz1zCF0QI2mAREcg8wbepXQb7T8PxLdr3w8qTgB&X-Amz-Signature=14c1682f7d65ea71717b8d14992c8412673548a1109128a479099a593cb80ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHTP4DV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKhCMdEi4EdbiGHbStFDkLk4bxc2j5AI%2FcFiJfanGNzAiAK6%2FYYH6iqPbFDHyRDSqViNtsGcPZrWYTC1nDO5zDGTyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMejdtBypC3q3SAf1kKtwDJ9Mbi5r7nFUFKKBQIBMGqkIrbAN8f%2BxFzjn3e2yqRSygpyD4RkeZAW3CHlqdMwN0gTqHs3DXEBUogdrPRGikeTIHl1kQGqJrQ8QIn3Owz1K1vEnKFa8XsS8YbNXfUirx3wXFMv4eUeY0e4yTsc9RMXs2BKYdDo3rlUwNyj9FHKuc4T9ikqEUrfTIaYy%2F4KtYxWnRxeA2BCwtSgjJOs5IeUpyXw6ZnD5U%2Fz4L%2BESuCrFxTUxHmoRpvdwX0Bm5K4gNhkmmJE3Hb4BPEMKfymbl%2FtSaRsZ0NJb348nXgrrEmyDAMky1c1v%2FvqSB2%2F1B60w%2B3eVVtws%2Be1kpTVtmco%2FSk%2F8pAB%2FwYuB%2BBHc%2FiTM1Yu8wqFdDIQn4FY9m7zwAx9%2FsJj0PAJSYe55dZle1eAJDu5M7RvowK97KBF04Uh1KRBOR%2FTprEk4uTZQm3HKOH%2Fz5RoxYK0zJaP4LSSn3Dn%2FR0eF05XP%2FW4GKkKonKuE9%2FoN95gfQRMLoBG2R4BxyALuX5wvKTJpRkx7wB52HLb3%2ByyjxFZX7NfXG3WYs321XfaKm0gkUyNjQolA8s4bwfx4u5veMYcHKz4%2FqonAm4lkMXEaYbUFmcyFhLR%2BKi5AoHKXiB%2FIH%2FX%2B3loW633cwpff6wgY6pgFz6xiEIx19zIzq6Bo9jiv7%2F3uklWTKMEkRKNDOQYT7S1jEJ40lnt5R7fI3MvwU0Bue0sHEZ19xbMdn6h3cH5DjXFOBtS%2FC8gp2xdizyYA5JffGENr6gevFPm18yLBfK9UlkmuYMAu0EUkvV8%2FQgCnfGH%2By0wO5mR6uYfeDUYV1gsyE%2Fqmk8g1Pc%2Fz1zCF0QI2mAREcg8wbepXQb7T8PxLdr3w8qTgB&X-Amz-Signature=0c34222a4e53b15a5cbd056d015e1be4c822691d2327455fd22071553c247193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
