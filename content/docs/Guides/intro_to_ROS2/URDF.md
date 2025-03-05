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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV7G2MZ4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hsdilepjHdgD2BfAA%2FrjH2b2W0UXB%2F6pOow5uoWeHAIhAPWTqomhX5kOhZEKbkDaYP2LFHWlUGGj2i5GNlJOu7znKv8DCBYQABoMNjM3NDIzMTgzODA1IgznYBrLxunOHBvI2uMq3AM%2B%2Brbo%2FP2dYuf5LkZ4tw9dTx4wTVs7zWC2T%2BxOih4Eo5QrTSm9PDTS5LfbGjOTB4ADCELRcqWgJlNkNTglDlqijiROF6YVU%2Fy9wvzG0evO9ISAFzGBRhGktsYm1CeKlfslAqYW79ncAKSgqR%2F%2BbAej65eIpFvh%2FCWA5spFgUPnH8Vu6BKF0GZy%2B2MLKGWZfgRnjvCfL07ecoEw7OJcuGpAOgHlGLmmtBE2VcBoykOeheZ1U%2BKiXTKmYCBhUrsFsjVZU1eu2CwN5cD7QqVqVBp3ZiV2WGlx3qKFXk1QJD7Xl%2BjZV0hVcU7Xz%2F6nqOLKpQnM3ihms6uj9xY%2Fwm5tEFb451zQHcjs3iF8xja4Q8NqdcEhEn%2BbvpWfetygS4A2kYQ8H5A%2BNDXb1Gs3v%2BNiBD1Pj9duZ4L4tgVN1nalQ5wE2IDjk5CdsUCMSxDgE34VNr%2FHau4KQNIqDd1wQYUWRyeAVJK8WI8DvoIfDxx5baGY2GXNfaUWUFb2GiY38Ifh0IFY865V2w%2Fb399igLkog1i1kFwaCe%2FitJHqRh%2FqG%2F3DEUmnE4pvQ59nfv9PkyOwX4Nw6AQB0N5Vd62XAa%2Fp4P6JodyP%2FBrq5WP91Z%2FPNN50H0jLKNKk9NwpqRgETTCvlqG%2BBjqkAffavAhAfqHN6G4rVThBoAKgbJoZLXNgDCxlgYY75TqE5JKlsN%2BJfn%2B2dx%2BgzkRvg3YqtKXjLdq4kIzJVpcfVxNTYcVLlCqWuK1RwZBgYm5rQqskuANf4MsVeOZP%2BlFDzEX91ljj0PesaPa%2F2qwp8CQVDTEzQYjkp%2B%2B9xy8k1dbL09Tg7alpZWHkbN5n6C0A4zrktn4uaHUzmRhisJWI1lK%2FUZ0r&X-Amz-Signature=001083d78c5347d58bbd780901c0c0cfb7aef6465b5f07b8b6846c85c35c5813&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV7G2MZ4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4hsdilepjHdgD2BfAA%2FrjH2b2W0UXB%2F6pOow5uoWeHAIhAPWTqomhX5kOhZEKbkDaYP2LFHWlUGGj2i5GNlJOu7znKv8DCBYQABoMNjM3NDIzMTgzODA1IgznYBrLxunOHBvI2uMq3AM%2B%2Brbo%2FP2dYuf5LkZ4tw9dTx4wTVs7zWC2T%2BxOih4Eo5QrTSm9PDTS5LfbGjOTB4ADCELRcqWgJlNkNTglDlqijiROF6YVU%2Fy9wvzG0evO9ISAFzGBRhGktsYm1CeKlfslAqYW79ncAKSgqR%2F%2BbAej65eIpFvh%2FCWA5spFgUPnH8Vu6BKF0GZy%2B2MLKGWZfgRnjvCfL07ecoEw7OJcuGpAOgHlGLmmtBE2VcBoykOeheZ1U%2BKiXTKmYCBhUrsFsjVZU1eu2CwN5cD7QqVqVBp3ZiV2WGlx3qKFXk1QJD7Xl%2BjZV0hVcU7Xz%2F6nqOLKpQnM3ihms6uj9xY%2Fwm5tEFb451zQHcjs3iF8xja4Q8NqdcEhEn%2BbvpWfetygS4A2kYQ8H5A%2BNDXb1Gs3v%2BNiBD1Pj9duZ4L4tgVN1nalQ5wE2IDjk5CdsUCMSxDgE34VNr%2FHau4KQNIqDd1wQYUWRyeAVJK8WI8DvoIfDxx5baGY2GXNfaUWUFb2GiY38Ifh0IFY865V2w%2Fb399igLkog1i1kFwaCe%2FitJHqRh%2FqG%2F3DEUmnE4pvQ59nfv9PkyOwX4Nw6AQB0N5Vd62XAa%2Fp4P6JodyP%2FBrq5WP91Z%2FPNN50H0jLKNKk9NwpqRgETTCvlqG%2BBjqkAffavAhAfqHN6G4rVThBoAKgbJoZLXNgDCxlgYY75TqE5JKlsN%2BJfn%2B2dx%2BgzkRvg3YqtKXjLdq4kIzJVpcfVxNTYcVLlCqWuK1RwZBgYm5rQqskuANf4MsVeOZP%2BlFDzEX91ljj0PesaPa%2F2qwp8CQVDTEzQYjkp%2B%2B9xy8k1dbL09Tg7alpZWHkbN5n6C0A4zrktn4uaHUzmRhisJWI1lK%2FUZ0r&X-Amz-Signature=2664fc75a95d2ced68cab9a48a9cfae1ba98aa535f3a7c86d3622f65ab6b2e08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
