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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3RT3MZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSViAK86AeBm6hJ4h4isYxRUJ31MOSZckW7DFajV0dKAiB9RH6aipnaiszHt4lIgUpdIs4q2Mjuix9wO2gd%2BG3rLyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKzaetDt1ZXtdJj9kKtwDPRW3l88Nyx80ARMjI3rz3ngNjheVurgyRGdJPDFn5%2BBTYdFaLLTx276KXByjR1SZBY8xRDMO22wR6UImCPSzJdi0BE7xQmTAq%2BnKUhIk4cyigs%2FJcoAX6MTNj0F4lS71fUsAVOuvDDw0IscEzTZFRFfb4FufGmIHThJj4sIZepzyuK13zfBqwf59PEWCeoEwNIV4zI105quOqznLRbwUi%2BlT1tEutiOwlRkg06blxhYB%2BwYjJibCRA0oyYww1BNxDzUyKl4Gs3mM3BdklDenvjZo9gvEcFRD4qy86yOgfuyj0t%2BVI%2F0cUOBA0%2Ff2hsU%2Fan%2BYs%2ByatyoVO1y1I1d3W2u0Lz3MwTEyWGIQgaPegf4jvPgKAqWT2wSDfZ33edBWL89uMtEcKPYXQmU1KMeNKnyBzW5ZWDMwo6IjK%2BRguME5hHGWBaarFzvBgPEzIJjrWa5jLYvxrzg181fWFN8FiIjXCH%2FVA4OCV517EbC5y1Azo5zwIH6m0Pb377DS99aQdYH8jfHgXzsc1x7bHkPdTFgJMzfhFnFntXLtk9ettrG8dv6Gnll3Oc3CJ7jGC62d3kLBSJQcx%2BEz%2FgnAVOQFj04c2v%2BlDD9tPxC873H%2FNmDVx1Gfn46uvvTfdR4wopGxvQY6pgFTglhmEpF7RpnOCtrPVhvOeUUEnMcdgyMGFy83o3g2yHVt%2B5Gx4uA3ha4dKMgyygU01mMtS6uYBELQhhRGGNgD2IeOeSiH5A2DA%2FVkeM6Kf%2Bw71gVtbq501SJWr7vx5xd%2FsR5IVILuH3ogfU3%2FIq4sGZ7X3rwsrzHwNm2pfI87qITcLdmE28TP9z3zXcRTkItAVxArrrb3Yp2H8aW2vxSZmFk%2FPgXV&X-Amz-Signature=70bc2aef35f2ec30a5331207d7966a7a3f1d054b999a836dd9c7195a3db759c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3RT3MZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSViAK86AeBm6hJ4h4isYxRUJ31MOSZckW7DFajV0dKAiB9RH6aipnaiszHt4lIgUpdIs4q2Mjuix9wO2gd%2BG3rLyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKzaetDt1ZXtdJj9kKtwDPRW3l88Nyx80ARMjI3rz3ngNjheVurgyRGdJPDFn5%2BBTYdFaLLTx276KXByjR1SZBY8xRDMO22wR6UImCPSzJdi0BE7xQmTAq%2BnKUhIk4cyigs%2FJcoAX6MTNj0F4lS71fUsAVOuvDDw0IscEzTZFRFfb4FufGmIHThJj4sIZepzyuK13zfBqwf59PEWCeoEwNIV4zI105quOqznLRbwUi%2BlT1tEutiOwlRkg06blxhYB%2BwYjJibCRA0oyYww1BNxDzUyKl4Gs3mM3BdklDenvjZo9gvEcFRD4qy86yOgfuyj0t%2BVI%2F0cUOBA0%2Ff2hsU%2Fan%2BYs%2ByatyoVO1y1I1d3W2u0Lz3MwTEyWGIQgaPegf4jvPgKAqWT2wSDfZ33edBWL89uMtEcKPYXQmU1KMeNKnyBzW5ZWDMwo6IjK%2BRguME5hHGWBaarFzvBgPEzIJjrWa5jLYvxrzg181fWFN8FiIjXCH%2FVA4OCV517EbC5y1Azo5zwIH6m0Pb377DS99aQdYH8jfHgXzsc1x7bHkPdTFgJMzfhFnFntXLtk9ettrG8dv6Gnll3Oc3CJ7jGC62d3kLBSJQcx%2BEz%2FgnAVOQFj04c2v%2BlDD9tPxC873H%2FNmDVx1Gfn46uvvTfdR4wopGxvQY6pgFTglhmEpF7RpnOCtrPVhvOeUUEnMcdgyMGFy83o3g2yHVt%2B5Gx4uA3ha4dKMgyygU01mMtS6uYBELQhhRGGNgD2IeOeSiH5A2DA%2FVkeM6Kf%2Bw71gVtbq501SJWr7vx5xd%2FsR5IVILuH3ogfU3%2FIq4sGZ7X3rwsrzHwNm2pfI87qITcLdmE28TP9z3zXcRTkItAVxArrrb3Yp2H8aW2vxSZmFk%2FPgXV&X-Amz-Signature=65552108009e91957eb87c83f746cf0992a24f007f61bf1f8198943e0319cfa9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
