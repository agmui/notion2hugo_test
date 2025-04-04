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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBPA7GF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3CW%2BX5VQaigO4%2BNEMLI2LYIJSySX2DXhoBeePhPnQOAiAVwUqyMGDddfMUxBkkHvOrT0ZBmYGU%2BrpjiYjy2%2BZktSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMs%2FFpHDqsLccbgzh7KtwDLZoxNf0pfjuzb2Kg440Vh9jvK68Wk8OvFxylQLBP6AI9gzY%2Fa4Pe3RqYq%2F6Iu%2FFs6a19BLX41GFXO9z2uH6a%2BZgYra8L8%2BH9BncvdcXrW8r73ufMqtOByyhsav%2Ba3oPmD5iXebizy2fOr%2BF9ZFcaD3w%2FBh7QcUk8pp4XeU1sZxX72zuCAqVHo%2BUs%2F%2F3mqpQyYVs4IE2H75rPAc%2FBAIBWqLhlmngIzc%2BwhKdNqHdZ%2BurVn9IOu36WjKHt0mDP0VFXnEuU744QQ3bhHPr%2BU6HgjZ100xqzfD1sjkFDfq7EdMZrlehAir9DzZkXGi4Ld1uE4YOYfnKKQsTiRMjgX2HkaRIrrW%2Fx0KR5%2Bjlx3njIT%2BwwUmIO14sVDjIMexgASSspu%2ByNYKfBcwICMu7Ie87QUz28X%2B7IYUIsIziMXtmaAF1tjwXGbwH9V2t6KoyhwWXZFec2aVrQuek7s%2BqjaW%2FfEi%2BdRl4DW5c%2FhQcbSP0HXnAkGTuReh3s8c39UtDmDH8EA9YvbmeDusvrgGdOqI13wNGoIh0O0r5fg8fK352ktadtJmkjgFheZGCfi8yOlARTO7jU6PDtQKjkrSMwLN4k84r%2FHBeWKeZA%2FJGrt7FZoBQL8LCSyBOqMVgtPZkwnPi9vwY6pgGiuUA99ej1NYmWqgLcJbZ%2Btj9jmu4n6gSHQX0lCJYOqQGtpeB7Qxt89DTRHqBvWp6zodactpsdnQcCV89GY8CvXuMRSs6a1w8DE03xaJxSqz6vcOCvyPYN3sbkJCH8FQNE4VpSm%2B8soqx%2Br%2F45FIteCLifw%2Buw13JqZocV6yupY4rVX1AmdIik2F%2FdVYsrio8RV9P%2FB2%2FVMFiwzYaHB4LZw9F0GGXQ&X-Amz-Signature=ee625fb9d24833bbeae53997c877509d985fc68aac76486891de0b79f05e6b25&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBPA7GF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3CW%2BX5VQaigO4%2BNEMLI2LYIJSySX2DXhoBeePhPnQOAiAVwUqyMGDddfMUxBkkHvOrT0ZBmYGU%2BrpjiYjy2%2BZktSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMs%2FFpHDqsLccbgzh7KtwDLZoxNf0pfjuzb2Kg440Vh9jvK68Wk8OvFxylQLBP6AI9gzY%2Fa4Pe3RqYq%2F6Iu%2FFs6a19BLX41GFXO9z2uH6a%2BZgYra8L8%2BH9BncvdcXrW8r73ufMqtOByyhsav%2Ba3oPmD5iXebizy2fOr%2BF9ZFcaD3w%2FBh7QcUk8pp4XeU1sZxX72zuCAqVHo%2BUs%2F%2F3mqpQyYVs4IE2H75rPAc%2FBAIBWqLhlmngIzc%2BwhKdNqHdZ%2BurVn9IOu36WjKHt0mDP0VFXnEuU744QQ3bhHPr%2BU6HgjZ100xqzfD1sjkFDfq7EdMZrlehAir9DzZkXGi4Ld1uE4YOYfnKKQsTiRMjgX2HkaRIrrW%2Fx0KR5%2Bjlx3njIT%2BwwUmIO14sVDjIMexgASSspu%2ByNYKfBcwICMu7Ie87QUz28X%2B7IYUIsIziMXtmaAF1tjwXGbwH9V2t6KoyhwWXZFec2aVrQuek7s%2BqjaW%2FfEi%2BdRl4DW5c%2FhQcbSP0HXnAkGTuReh3s8c39UtDmDH8EA9YvbmeDusvrgGdOqI13wNGoIh0O0r5fg8fK352ktadtJmkjgFheZGCfi8yOlARTO7jU6PDtQKjkrSMwLN4k84r%2FHBeWKeZA%2FJGrt7FZoBQL8LCSyBOqMVgtPZkwnPi9vwY6pgGiuUA99ej1NYmWqgLcJbZ%2Btj9jmu4n6gSHQX0lCJYOqQGtpeB7Qxt89DTRHqBvWp6zodactpsdnQcCV89GY8CvXuMRSs6a1w8DE03xaJxSqz6vcOCvyPYN3sbkJCH8FQNE4VpSm%2B8soqx%2Br%2F45FIteCLifw%2Buw13JqZocV6yupY4rVX1AmdIik2F%2FdVYsrio8RV9P%2FB2%2FVMFiwzYaHB4LZw9F0GGXQ&X-Amz-Signature=31053616ea4854f050512813abb7515d9253ad8862b26c2f257214b994c8b3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
