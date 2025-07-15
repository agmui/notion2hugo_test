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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JC542W%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD5oAUVbPSKfd%2BiuMStw4xVJwzRyhehHqJNWnCCP5ukvwIhAIXGya%2FzhJgJTKlx4PZl9A4QJbwmR3GGhzO3QyFKBTeNKv8DCEgQABoMNjM3NDIzMTgzODA1Igz%2FMWWUpC4gkFdGLpgq3APszbpAxxuwOpzG1xQ%2BkEQhYYXl5FX2ouERxpJbdsnTZukPl1KiWCxLoOX2ExrDwdJHjCf98HtwE72NJYlx9Ggm8kowJJRZUgonBCNvOsqIvqrA9FtMQW9YYtrKMbafN8PGBvScNFtAudw8zMO2ZcDzoVojrIde6wrjtEd8jb8ebN4OLTKLn1FYav%2Bqdn83e%2Fwfw6Guz4dM7TllM%2BeNp04WzoTYQLyD0i%2FN9hoq31wGkMROfIjzDQB3VLUh7qJ%2FzLKXrm5cX6eyC74rKVD6n8y9t%2FEwxNsTBn2IJHdkr2VB1CvtRIgS7M8SfL9yZHI8S7X2OUOfpSYXgQY1z0sifb6GsbZznL2%2BA0CN1M4N3aW654zrGwGd0Q78PiTQT1xojrI75JzbpcjgkoaUE5I2jfdBq7TSeiJ9NQv6Qs8Z8F7pil8oKwzVRet5ak3SS80xDR17GuRt9710EsjSe%2FwPV6rU4vPmYsYXiitwDNc5qVoKuk9EMjRl8e3g5kBa8FGKLBhmNlKfq1i8%2BVXf1kNRFoe9oCwJN8xshIEV2jII54k8v8MTRK%2Ff1%2BdAH7VYmpFgjQm2HFE7mdLRrRbu2cqiS5u%2F4l4C%2FyXZgs10n1DH51eR%2BuVx%2BbYTg1Q31sLj9DDI2tnDBjqkAaT0E4LZFYOD3AwA7mmTLti9dpr1gjoc3VNtjRhc1yIK85YUVmAM5qARslgvUGKX3jR6jkRXYQtzWj6hIYGdVSUGCZe9ycjuT6Mheb1eNgtJbRTCQ7sMhY360AHUwLesVfJ0aD%2Baed4W8C2jxuBOVHKpFR9ZZQWoBXNcER9ZMxfE1UQgrWjdD97NX8BxuRnwPJZzueQ%2FfHMcC1a27SmKhO2wvQie&X-Amz-Signature=f86f1328539d6f9dc5f8b3a61abc807ef2b02739ca5ff044bf5a6e1e7eb6e311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JC542W%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD5oAUVbPSKfd%2BiuMStw4xVJwzRyhehHqJNWnCCP5ukvwIhAIXGya%2FzhJgJTKlx4PZl9A4QJbwmR3GGhzO3QyFKBTeNKv8DCEgQABoMNjM3NDIzMTgzODA1Igz%2FMWWUpC4gkFdGLpgq3APszbpAxxuwOpzG1xQ%2BkEQhYYXl5FX2ouERxpJbdsnTZukPl1KiWCxLoOX2ExrDwdJHjCf98HtwE72NJYlx9Ggm8kowJJRZUgonBCNvOsqIvqrA9FtMQW9YYtrKMbafN8PGBvScNFtAudw8zMO2ZcDzoVojrIde6wrjtEd8jb8ebN4OLTKLn1FYav%2Bqdn83e%2Fwfw6Guz4dM7TllM%2BeNp04WzoTYQLyD0i%2FN9hoq31wGkMROfIjzDQB3VLUh7qJ%2FzLKXrm5cX6eyC74rKVD6n8y9t%2FEwxNsTBn2IJHdkr2VB1CvtRIgS7M8SfL9yZHI8S7X2OUOfpSYXgQY1z0sifb6GsbZznL2%2BA0CN1M4N3aW654zrGwGd0Q78PiTQT1xojrI75JzbpcjgkoaUE5I2jfdBq7TSeiJ9NQv6Qs8Z8F7pil8oKwzVRet5ak3SS80xDR17GuRt9710EsjSe%2FwPV6rU4vPmYsYXiitwDNc5qVoKuk9EMjRl8e3g5kBa8FGKLBhmNlKfq1i8%2BVXf1kNRFoe9oCwJN8xshIEV2jII54k8v8MTRK%2Ff1%2BdAH7VYmpFgjQm2HFE7mdLRrRbu2cqiS5u%2F4l4C%2FyXZgs10n1DH51eR%2BuVx%2BbYTg1Q31sLj9DDI2tnDBjqkAaT0E4LZFYOD3AwA7mmTLti9dpr1gjoc3VNtjRhc1yIK85YUVmAM5qARslgvUGKX3jR6jkRXYQtzWj6hIYGdVSUGCZe9ycjuT6Mheb1eNgtJbRTCQ7sMhY360AHUwLesVfJ0aD%2Baed4W8C2jxuBOVHKpFR9ZZQWoBXNcER9ZMxfE1UQgrWjdD97NX8BxuRnwPJZzueQ%2FfHMcC1a27SmKhO2wvQie&X-Amz-Signature=952a6f3c6f376bd129a44ddbe22367d228f58dc81322153e49ee6727819ba29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
