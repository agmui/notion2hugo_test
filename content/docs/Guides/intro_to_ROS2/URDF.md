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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3VUHDI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDzRp1%2B3%2Fad8jqgTiXtP1GfBsQ0JAcsaegn3QRD299riQIhAN13ammjyMTyHcWT8jK%2BD5iXH%2FVFUlqJSsfwcNow6oK1Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxENO5xeeymVtrOGoEq3AOzvUDsMwbhNuslQ8l7Nz4S8yYkDCAm%2FiPySfHn%2FEzfVlpEnAFOVaaYZIGz%2FDKI83bLaWjeNpr8tkPk9uQ%2BBX3abmhGLiy0oeJd%2Fq9HuIpUIoUUMV%2Bs10PfjTPA7HhRmEvRJ%2FsICYEF4fcEORNeRdClREpBapnxiKyjDDA%2Frpk1Ipw6KtXSqaqCHEMhFJ%2Fxt3FP96UMr7SZPjiPUjPxxmyNUr%2BmBf2MULmUD%2BbhvZcyFH8DMqAb90g5efK4RtC35QUz6%2B5FnDB7FhJSmKGc9VHW1Di%2FAN6c1j%2BHHxFoG1GMLdTboQcj21W8RYFELASqze2VrbLhCt6ik36XS%2BBYkHUfe57yamsVHVeLa%2FWxWhooVah8w1909WVtXDnqOqhxgJpVjw6gb%2BsqFbT7T56ZdKv4be6slMTZfqPYvS850RodL6b90yudM9LFNRVg20hoc6F86gzLhR%2BNdahk9JR1tdjWSpyTV%2BEhdZUKZlqmIFPnx38hK59pF4ksdQNnTDFLBz%2FLDqUbRYWuEAiSEyp8nidNkKB%2Fju6vfBByJIOjNh1nbFtx4GqUArF35t7OSuPKEjvsTqRRsMls5c%2B44cyTGM6tSCDk7U7UKOh7kNJl34v8z7TV5zXyO91F00hHlzCZ%2B5a9BjqkAexiEbGAnb6ch9vd6Kc6mZSkMzRjb5gT67t2MEGsPsCSfHDhLJaK4Ece889TgK6AseVoSEZNJmCXVzcR8qwBA4KtG0Y2qL099nNeD4yxGonHhRiSmJnpdKFrBb4JVHjPucVnkZOLJ2JMFG3iVPFzFi6Tko2Hu5Udzu1jFBn0UK4Qlz32Kyog6OfO%2FTma7lajap1eDKnzfgCdJ86XJ%2BZKBGbMxFNg&X-Amz-Signature=70a89625311b7b850ad418e25c4844851e045f6a9b1605127b32a11140314511&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3VUHDI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDzRp1%2B3%2Fad8jqgTiXtP1GfBsQ0JAcsaegn3QRD299riQIhAN13ammjyMTyHcWT8jK%2BD5iXH%2FVFUlqJSsfwcNow6oK1Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxENO5xeeymVtrOGoEq3AOzvUDsMwbhNuslQ8l7Nz4S8yYkDCAm%2FiPySfHn%2FEzfVlpEnAFOVaaYZIGz%2FDKI83bLaWjeNpr8tkPk9uQ%2BBX3abmhGLiy0oeJd%2Fq9HuIpUIoUUMV%2Bs10PfjTPA7HhRmEvRJ%2FsICYEF4fcEORNeRdClREpBapnxiKyjDDA%2Frpk1Ipw6KtXSqaqCHEMhFJ%2Fxt3FP96UMr7SZPjiPUjPxxmyNUr%2BmBf2MULmUD%2BbhvZcyFH8DMqAb90g5efK4RtC35QUz6%2B5FnDB7FhJSmKGc9VHW1Di%2FAN6c1j%2BHHxFoG1GMLdTboQcj21W8RYFELASqze2VrbLhCt6ik36XS%2BBYkHUfe57yamsVHVeLa%2FWxWhooVah8w1909WVtXDnqOqhxgJpVjw6gb%2BsqFbT7T56ZdKv4be6slMTZfqPYvS850RodL6b90yudM9LFNRVg20hoc6F86gzLhR%2BNdahk9JR1tdjWSpyTV%2BEhdZUKZlqmIFPnx38hK59pF4ksdQNnTDFLBz%2FLDqUbRYWuEAiSEyp8nidNkKB%2Fju6vfBByJIOjNh1nbFtx4GqUArF35t7OSuPKEjvsTqRRsMls5c%2B44cyTGM6tSCDk7U7UKOh7kNJl34v8z7TV5zXyO91F00hHlzCZ%2B5a9BjqkAexiEbGAnb6ch9vd6Kc6mZSkMzRjb5gT67t2MEGsPsCSfHDhLJaK4Ece889TgK6AseVoSEZNJmCXVzcR8qwBA4KtG0Y2qL099nNeD4yxGonHhRiSmJnpdKFrBb4JVHjPucVnkZOLJ2JMFG3iVPFzFi6Tko2Hu5Udzu1jFBn0UK4Qlz32Kyog6OfO%2FTma7lajap1eDKnzfgCdJ86XJ%2BZKBGbMxFNg&X-Amz-Signature=5bf9f867eaf31a8f19f971ec76266ae3471c508f18e33a1296d4bda5fbaf8f42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
