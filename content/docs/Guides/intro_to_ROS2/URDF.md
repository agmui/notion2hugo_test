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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTKOURN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICBdmmnCdWPWSzow2vleb5eyS4fMAhYguW5tjkJLCbOeAiEAgbjlGZKU88pumfwTQ1uxSJEovSuoko%2BQtPdx2fq8x90qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyMG0o2RH71yisJ0CrcA4XPNY6m0GgcwnLxqbj9NRtMVvWRO42BVk9MMQs%2FTWV3d33GgBD%2Bkngzy3p8SNASnzh0wXn4TZRUQMNKN%2FNgtJrJk4d3lXT6IR1hSgFmwK%2BrhS9YrHAAFkq8xFCZXnZ2tSigsR%2FQpRxYqngMrQeDk7%2F8smWh9CnkdUodRpxqeoberIPnhjU%2FCgrYTln7K%2FqB8Yw0FnAjMFeMX6jrFZVkE16jn5sfVPm8GHB8iBXGTwJ5tf3bGQnfW5WxLwgTFF9FfiCJmuS6v3DrDLy2keKT8QGgeGVg39iyahJtdf2%2FDnFJo9CjQeMGThDKlyHjDvGU6yvXHX%2FRdDbYlnJScPJiflrLiFg7sbm0Xs5%2BgHt3M5U%2BvX121Iv74k29ErZibHoCVE0hrM2kDKOW1oT1WiBGyycLDW%2F6fCzNK4yjJVgYYn5KcFl7TezWkG5%2B6LO7NaqO8VSfcIQCIExTVFuqShuzFdiJhtWKXqxdrhjybzXRMRaE91b%2Fm32xPwZjgz97gTJOd6WCNdSHa%2B46ThcTbxFTshjjSl2GRXL4J50uAis8Mb4A68MZNwUqLb8YA3HYUviw%2B%2F8vbBRh8%2FZzjCt3Ll1QH40GjkURMWZFDl1mf5KFp9pQdmKCWW%2FW7bxiL0tjMJuj6MMGOqUBkdkuAlzzQuNb5kOh%2FUw0HasgHPaj3sx%2F2Aif57dUubUVE6SyrgOUSr4aDkr3A1UQT7vC%2B6hxLYzWtis1QI0RVak6dXbtlr6zlriSifaJrTIrx2Wr%2FBKIE4uEHFjgD5MLv%2BXLFS2ci3w9MaDaok2pEUhq84yL3fGXm25a7SMmVxhJH26mUBCLG1edld9HutY4waW8jF6nxyuPqg8lBFMjnz9KXBFO&X-Amz-Signature=442f2f4c43e3d0f940b9fdab85f02af2038b5b45748d13be79fec05167078ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDTKOURN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICBdmmnCdWPWSzow2vleb5eyS4fMAhYguW5tjkJLCbOeAiEAgbjlGZKU88pumfwTQ1uxSJEovSuoko%2BQtPdx2fq8x90qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyMG0o2RH71yisJ0CrcA4XPNY6m0GgcwnLxqbj9NRtMVvWRO42BVk9MMQs%2FTWV3d33GgBD%2Bkngzy3p8SNASnzh0wXn4TZRUQMNKN%2FNgtJrJk4d3lXT6IR1hSgFmwK%2BrhS9YrHAAFkq8xFCZXnZ2tSigsR%2FQpRxYqngMrQeDk7%2F8smWh9CnkdUodRpxqeoberIPnhjU%2FCgrYTln7K%2FqB8Yw0FnAjMFeMX6jrFZVkE16jn5sfVPm8GHB8iBXGTwJ5tf3bGQnfW5WxLwgTFF9FfiCJmuS6v3DrDLy2keKT8QGgeGVg39iyahJtdf2%2FDnFJo9CjQeMGThDKlyHjDvGU6yvXHX%2FRdDbYlnJScPJiflrLiFg7sbm0Xs5%2BgHt3M5U%2BvX121Iv74k29ErZibHoCVE0hrM2kDKOW1oT1WiBGyycLDW%2F6fCzNK4yjJVgYYn5KcFl7TezWkG5%2B6LO7NaqO8VSfcIQCIExTVFuqShuzFdiJhtWKXqxdrhjybzXRMRaE91b%2Fm32xPwZjgz97gTJOd6WCNdSHa%2B46ThcTbxFTshjjSl2GRXL4J50uAis8Mb4A68MZNwUqLb8YA3HYUviw%2B%2F8vbBRh8%2FZzjCt3Ll1QH40GjkURMWZFDl1mf5KFp9pQdmKCWW%2FW7bxiL0tjMJuj6MMGOqUBkdkuAlzzQuNb5kOh%2FUw0HasgHPaj3sx%2F2Aif57dUubUVE6SyrgOUSr4aDkr3A1UQT7vC%2B6hxLYzWtis1QI0RVak6dXbtlr6zlriSifaJrTIrx2Wr%2FBKIE4uEHFjgD5MLv%2BXLFS2ci3w9MaDaok2pEUhq84yL3fGXm25a7SMmVxhJH26mUBCLG1edld9HutY4waW8jF6nxyuPqg8lBFMjnz9KXBFO&X-Amz-Signature=fe160367a573a2f6e53fdc00b4e27f0808ae440fc2ed94deb01dd73e548d6361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
