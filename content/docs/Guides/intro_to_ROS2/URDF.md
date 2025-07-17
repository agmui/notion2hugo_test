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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TN23D3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC79yq4UpKwco0one45zeGKcegQVAS3XTRX7nmmQE9ZJwIgWIDXaGJMf9vQvkfVA%2B2QX1hZkW3Iwc7BfzfsXF%2F8ulUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKIm2gfaQQ2Kjxh1hircA3SxeiRkNI8vRv%2Byna4nUkDSeawmWlEXTiZGq0rX5oWfccDALOyAHKUP%2Bvka9LnxfCDX%2B3rHBdG0yeG97jvqxjJOfKn0Wo%2FNexQn7pErc0iSoLxhd7vuRAauDrI93dO7U5hyOU6qc1hoC68aWesjgPQT98RwcxbdchVFwZHWvcJNKjMyC%2BdDU9DdUpsb9MHEGBcZ3dymbvqtMeRZB8jZqQUbuaJiya4DCNvLThZFmtG6Ef8D%2FQUAYCdhxjoXn2%2FOkgqEkQ5XpkKxkDDeKIYAb8wUeGVwbBswnXMffVjkMDR%2FcfBaEceWJi2tUsFpbys9KUIL%2FoGUsRbLjztqr3JV4AkHGQjb6X3xoUWLGHspv2HEALmcLu1%2FQVWK09LrEz8WwJJMI73MsGbmFxi9ryAYPtngHhk1sKfH%2FVvIZYcthBRiy0ZGQdfmd1lAotrsWqxTmuyEa01rd4mk5H2XA9r%2FVZNVOSqzx3Fly%2FEXibML7F7wql5Q7B9de%2B1tJOlPxkj73%2Bt8Yc1OcGtSbiRDkxgYxylqcCF3dja5SXIcghhQYFveEWhU98Ap5o5IoQXm7XjeJJQ4mEVWr30aQ4GC7HtRTGfRYpMZOQ0%2FVGOY1rILXtvW2m%2BJkzbOMe%2BYeY%2F1MKW45cMGOqUBQ4utUDXL6%2BnaqqXJoJhiGmx4xEKN%2F6ZkJXfNc6M4DyY%2Fhi7AoDftFxnOIzdAPd9xmpOyk8E6NgWLewgFUN%2FoqzL9DuZn7FkWATMEDFb%2BPPR%2BBUdPh9hTQ%2FEpSN0FaWtuQPhprlrGeI2CLzriC8TktAxOKDtuB09xKtuJOsocjMgqgNQJ9aZo8t5vjbgqBjzFMqFkIC5NbJQ%2FJWprhR1R0mdS77Do&X-Amz-Signature=f1822398cdb9b65bb329e0bfb975b1fcc9473b51e6070df63bf586aa57fe285e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TN23D3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC79yq4UpKwco0one45zeGKcegQVAS3XTRX7nmmQE9ZJwIgWIDXaGJMf9vQvkfVA%2B2QX1hZkW3Iwc7BfzfsXF%2F8ulUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKIm2gfaQQ2Kjxh1hircA3SxeiRkNI8vRv%2Byna4nUkDSeawmWlEXTiZGq0rX5oWfccDALOyAHKUP%2Bvka9LnxfCDX%2B3rHBdG0yeG97jvqxjJOfKn0Wo%2FNexQn7pErc0iSoLxhd7vuRAauDrI93dO7U5hyOU6qc1hoC68aWesjgPQT98RwcxbdchVFwZHWvcJNKjMyC%2BdDU9DdUpsb9MHEGBcZ3dymbvqtMeRZB8jZqQUbuaJiya4DCNvLThZFmtG6Ef8D%2FQUAYCdhxjoXn2%2FOkgqEkQ5XpkKxkDDeKIYAb8wUeGVwbBswnXMffVjkMDR%2FcfBaEceWJi2tUsFpbys9KUIL%2FoGUsRbLjztqr3JV4AkHGQjb6X3xoUWLGHspv2HEALmcLu1%2FQVWK09LrEz8WwJJMI73MsGbmFxi9ryAYPtngHhk1sKfH%2FVvIZYcthBRiy0ZGQdfmd1lAotrsWqxTmuyEa01rd4mk5H2XA9r%2FVZNVOSqzx3Fly%2FEXibML7F7wql5Q7B9de%2B1tJOlPxkj73%2Bt8Yc1OcGtSbiRDkxgYxylqcCF3dja5SXIcghhQYFveEWhU98Ap5o5IoQXm7XjeJJQ4mEVWr30aQ4GC7HtRTGfRYpMZOQ0%2FVGOY1rILXtvW2m%2BJkzbOMe%2BYeY%2F1MKW45cMGOqUBQ4utUDXL6%2BnaqqXJoJhiGmx4xEKN%2F6ZkJXfNc6M4DyY%2Fhi7AoDftFxnOIzdAPd9xmpOyk8E6NgWLewgFUN%2FoqzL9DuZn7FkWATMEDFb%2BPPR%2BBUdPh9hTQ%2FEpSN0FaWtuQPhprlrGeI2CLzriC8TktAxOKDtuB09xKtuJOsocjMgqgNQJ9aZo8t5vjbgqBjzFMqFkIC5NbJQ%2FJWprhR1R0mdS77Do&X-Amz-Signature=2a8dc4e6f3807d303e16f4a7c86111f1a375f2871edef0e51efe9d627e924223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
