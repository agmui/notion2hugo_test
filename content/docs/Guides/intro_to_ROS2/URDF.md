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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBT3TNM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC%2F8hhQeIQkeHqq468gG5Zrb%2FgOOiCCVTYm09mLpPo6OwIhANwioojgywp7oe0hcwOreilWF%2FHZQjo8Pxn74gfFUZxWKv8DCCUQABoMNjM3NDIzMTgzODA1IgyXi8i7COSFmK7dz2sq3ANcqEB4%2FluX%2FptXeOOfmB1yj4VkTYnKKQNmrNnYh3Y1JdJw4wlsNABw4d4YDtbmTNs%2BrwKjagaHnwEKt9Somx%2BLk5%2BCyFm6C7xTlocI1y5QTU9nu6sdBzW1IbiYEgAmhKpm9D3xng5j3NkpEnQK%2BLxFXHh7QLYE8u5i4%2B5NdBfF3iRsfr3IBaGet2G8Awil9%2Bg7uAcEILDnUt9dQtYN2TSuoQlKsB%2BdS0QnNeB%2Fkz0CzsCPEW%2FumOByVIthqV86aqHsKh6t5buiJNhKkIBL7gaIUCLFkl%2Fhhn%2FlmXbCOmr23iKWk2TFNSznTEvEjjj0MggCFjbtK9GfX50wJnZGQT9HlwCeUt3nkjVvrDg4MPKR26bAvtjEiBNH8vMMFzIoxIhBSZXi6NuFRSyBHeXimjSlbELc3h1gzfmIOysRkRxjSETClokhn8AU0LrNdo9Opo0TWxE%2BQp7Y4gmHREKjY9R%2Fc1Vp%2FDJ3XjriRwHd3yMYC%2BaEn7gHHz%2BPO6Zljn9sta10Io5MeIbENMpCej5rCHbSoeS%2FS8tTLFbPqJ54trC1JXoFJdSdzQoxHnBi9cj3HHFk2Pz%2BOZKV7o%2BNrRgZUiSXB3cDrE0U3UY%2FDYJ%2F983UHE2UqIvGoGGRj9nmxjCoiP%2FBBjqkAat2xCBX7mpVOxlivF8OS%2BqGHnjXuknqufrGBQSNy2QALlKYcp%2BqhkkbNYrpCnhtiN1cRpjGY8TTORFvH8GHsGvEkpRwY8EY%2BUxizi2y1htQhO5RIwQzI%2B5wHCOZBdqWNwy0tUe99cfEzxj07cJW3IleOXc246d4TQ7%2FhYTO2V8jPB2RzP1CrjrEV3RMMUGLWsYvqQtRnfHRZD6GeeWDOtyoSKlr&X-Amz-Signature=5cef6ee1eabf257c1070e174d1c3a5cb449fa8f754b685c39c822167cd12a062&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBT3TNM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC%2F8hhQeIQkeHqq468gG5Zrb%2FgOOiCCVTYm09mLpPo6OwIhANwioojgywp7oe0hcwOreilWF%2FHZQjo8Pxn74gfFUZxWKv8DCCUQABoMNjM3NDIzMTgzODA1IgyXi8i7COSFmK7dz2sq3ANcqEB4%2FluX%2FptXeOOfmB1yj4VkTYnKKQNmrNnYh3Y1JdJw4wlsNABw4d4YDtbmTNs%2BrwKjagaHnwEKt9Somx%2BLk5%2BCyFm6C7xTlocI1y5QTU9nu6sdBzW1IbiYEgAmhKpm9D3xng5j3NkpEnQK%2BLxFXHh7QLYE8u5i4%2B5NdBfF3iRsfr3IBaGet2G8Awil9%2Bg7uAcEILDnUt9dQtYN2TSuoQlKsB%2BdS0QnNeB%2Fkz0CzsCPEW%2FumOByVIthqV86aqHsKh6t5buiJNhKkIBL7gaIUCLFkl%2Fhhn%2FlmXbCOmr23iKWk2TFNSznTEvEjjj0MggCFjbtK9GfX50wJnZGQT9HlwCeUt3nkjVvrDg4MPKR26bAvtjEiBNH8vMMFzIoxIhBSZXi6NuFRSyBHeXimjSlbELc3h1gzfmIOysRkRxjSETClokhn8AU0LrNdo9Opo0TWxE%2BQp7Y4gmHREKjY9R%2Fc1Vp%2FDJ3XjriRwHd3yMYC%2BaEn7gHHz%2BPO6Zljn9sta10Io5MeIbENMpCej5rCHbSoeS%2FS8tTLFbPqJ54trC1JXoFJdSdzQoxHnBi9cj3HHFk2Pz%2BOZKV7o%2BNrRgZUiSXB3cDrE0U3UY%2FDYJ%2F983UHE2UqIvGoGGRj9nmxjCoiP%2FBBjqkAat2xCBX7mpVOxlivF8OS%2BqGHnjXuknqufrGBQSNy2QALlKYcp%2BqhkkbNYrpCnhtiN1cRpjGY8TTORFvH8GHsGvEkpRwY8EY%2BUxizi2y1htQhO5RIwQzI%2B5wHCOZBdqWNwy0tUe99cfEzxj07cJW3IleOXc246d4TQ7%2FhYTO2V8jPB2RzP1CrjrEV3RMMUGLWsYvqQtRnfHRZD6GeeWDOtyoSKlr&X-Amz-Signature=95ad67f3df3a44e7d0c6133cf90a49337520346096ce348f72d00e52a452142c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
