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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYIPXF7S%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4hBXDAnLWMCX%2FHRWf2t0ZHffIsAEcSCWEllGMMGKbAAIgAsbtJ0ENGLQIEL13SXPZaIPBFdGSDZUxqI2sB0YuCbIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHK8SXBLE%2BBWF%2FYlyrcAz0j8fQ4A0UaeskCFbyn8oEOYWQkv4Z%2BOUdTrpDIrIrKATIL4c%2BVo9oVxBrGsqIRXZLk4HtbZmVXHiWvL6W%2BX1EimaS3DEjpq1vbWBDl2cXDHiTnOdrbcG6FkWkqdL4VqegM4xYBIpWuZ0V0ahJGAqPNL4z5p5BYaxuCiSKASDtkfkMoYz6vPX4xux7nbXR7IhAM4VFBAivGF3WxxznErBkK0cZk4EhKHsvP1MuWVfPuY%2BH1%2BkZ6Z%2Blo5nVTBM69Pepji%2BMO5t3l1%2FfnYoWfIVK%2FDyYJZCLXfZv5GbG7KYiyhQ9I3Dw2aG1Qwsz9zoyNKbpdiQhAnlWXUmLnzAF6FJS%2BV9MQaPxyKmj7uoZtZOw3SjgyM93e5GLnnczYM0JFUnqZ9kXVokgGk3zEv21vmWklTJryZAniwUgerehwvSNkow6J5fYOA3EO5xlwtK%2FmPQSfs5HueXPFm7VuObHMQwD4cHlSd5LtPmhoVXXPu8eY2YkMpt10jOrC2XENQDGHY8rrfr06Elwe5RCkm%2BY4bZh45r%2FwCyKz9yjb2lrleSDAXPXpkZ9vopaNHACLhQRaZKwudHYVZMg8uiPXKDrX45aHzD7fal1DUKxlaDsTJhyqe3NCjP5hF%2FLiTPdWMPHG9sMGOqUBNnuW87O%2BCuxv9b57W%2F66Il%2BublkRUgTY4XqlxD6gzmAgUCBTxNvdc4z81CLcYLRLOT5Afh7%2BdpzLL%2FrvTgmLEas6lWGCsjF1QRpIMHF1QEjXxgZdwfbMyvyzAmAE0OhAmvwcDbChBEalOtYx55Fr1x1q1CUjkonTd3lf%2BiEZExlIy03fZSYGzFBVOIs%2FcOz%2BVCGlhELTjF6D1zWKH8d%2FXrZwFOIf&X-Amz-Signature=fabb8dae4687a7766834ab9bd9117ea74f147d11a926ac9e0868580b5ca5d8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYIPXF7S%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4hBXDAnLWMCX%2FHRWf2t0ZHffIsAEcSCWEllGMMGKbAAIgAsbtJ0ENGLQIEL13SXPZaIPBFdGSDZUxqI2sB0YuCbIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHK8SXBLE%2BBWF%2FYlyrcAz0j8fQ4A0UaeskCFbyn8oEOYWQkv4Z%2BOUdTrpDIrIrKATIL4c%2BVo9oVxBrGsqIRXZLk4HtbZmVXHiWvL6W%2BX1EimaS3DEjpq1vbWBDl2cXDHiTnOdrbcG6FkWkqdL4VqegM4xYBIpWuZ0V0ahJGAqPNL4z5p5BYaxuCiSKASDtkfkMoYz6vPX4xux7nbXR7IhAM4VFBAivGF3WxxznErBkK0cZk4EhKHsvP1MuWVfPuY%2BH1%2BkZ6Z%2Blo5nVTBM69Pepji%2BMO5t3l1%2FfnYoWfIVK%2FDyYJZCLXfZv5GbG7KYiyhQ9I3Dw2aG1Qwsz9zoyNKbpdiQhAnlWXUmLnzAF6FJS%2BV9MQaPxyKmj7uoZtZOw3SjgyM93e5GLnnczYM0JFUnqZ9kXVokgGk3zEv21vmWklTJryZAniwUgerehwvSNkow6J5fYOA3EO5xlwtK%2FmPQSfs5HueXPFm7VuObHMQwD4cHlSd5LtPmhoVXXPu8eY2YkMpt10jOrC2XENQDGHY8rrfr06Elwe5RCkm%2BY4bZh45r%2FwCyKz9yjb2lrleSDAXPXpkZ9vopaNHACLhQRaZKwudHYVZMg8uiPXKDrX45aHzD7fal1DUKxlaDsTJhyqe3NCjP5hF%2FLiTPdWMPHG9sMGOqUBNnuW87O%2BCuxv9b57W%2F66Il%2BublkRUgTY4XqlxD6gzmAgUCBTxNvdc4z81CLcYLRLOT5Afh7%2BdpzLL%2FrvTgmLEas6lWGCsjF1QRpIMHF1QEjXxgZdwfbMyvyzAmAE0OhAmvwcDbChBEalOtYx55Fr1x1q1CUjkonTd3lf%2BiEZExlIy03fZSYGzFBVOIs%2FcOz%2BVCGlhELTjF6D1zWKH8d%2FXrZwFOIf&X-Amz-Signature=13af377b6ce9d4c26b46bfec7221fa01d6cc985bb1e8ee15ad00bd31a8ccdc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
