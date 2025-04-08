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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKZBB7P%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIZQ9gHJNb5Or36XHaVQBDe%2B4x1kpedu8BrsFHFGr44QIhAOQHDB1sgw626IUVRTAlD5XS3N%2BX3G6jHG9MhYWQtRFvKv8DCHYQABoMNjM3NDIzMTgzODA1Igxw1HXgTHfOyhU8ewkq3APsAlpF7XN9Gq4HGCKwJ5jVCivp7Yh%2BQAjB3tndi%2By7Nw8OiSzn5nSTGvSOmkL9yMEFVfg4Qts33oM0kCZiXDHPp%2FRhmFe1Lu%2BshTtIF6oAr%2Btmc65NydCLerwPxoGEnO%2BKE12ot%2BgaTystVi%2FfZ8xGYEB8ZWd0%2FfKnGDhmiuBUJ%2Bzv2%2FJdaeICy%2FprXARbOGZfVRtETmxvGHd9EokDtEvTGcHx1VQ8Q%2BRbf3SlCx%2BuRSBpu6QJ4n40q3Lo6E8QUFw8q%2BDPa%2BXJds97sY9adn7%2BH1Q5P32VlVg2n7ZwlL35ewMmMisStZudMBedsaXylLspBQYjtlogNBPmq%2FCGWEKdP0FHb7xn9j9Obl4nHLi84H%2B1kNBdKE0miHWpv3MKnhm38ZuSvHjL45a5wzBz%2F4RpO2JH0asP6oFcWLcmjVwxyEJ39aY6Eq8DFiBrZ8Vzrnsae8xgrif2Gbuvs3%2FYYRG9j5fRBDEiTwHGJ1yIINemfJzPwmulXSBwYlzlYVXFhaqq6lrIUTGBDW%2Fm5XNtse8SWuHrjQRWPx1yXpk8kCSZs5PVQAgx8%2ByXZrbXmjt3DF1cnN91w%2Fd8GFYAHFzbGUEElVVaLIwsc5s%2BgJNWUtHVwbp%2FnB4VMHB%2BKVoa2DDDvtS%2FBjqkAfiRS6xFSVNNk9WbBEbLZUnECbT4TFP5DndOhbi5k9CHh9SIcaJNKapGomv9X%2B1T7MQloqfACXMeBXrW9mKojjhEaxVXLCg0eH4TXIx8uUG1Fx0dOjgrerfX8D9lNwtiNVYygH1fjKQxSqpMDApmFLvhK3DUiLAVuFJlc5j2t1WJLoKFw1ntrepMazY6%2FjfMpS1MEQwFxJoMtjiHvej19JbWQixZ&X-Amz-Signature=52f89660f0880917254cc73b3d575ccada723322ed56f93c2314b3992fcb054b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKZBB7P%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIZQ9gHJNb5Or36XHaVQBDe%2B4x1kpedu8BrsFHFGr44QIhAOQHDB1sgw626IUVRTAlD5XS3N%2BX3G6jHG9MhYWQtRFvKv8DCHYQABoMNjM3NDIzMTgzODA1Igxw1HXgTHfOyhU8ewkq3APsAlpF7XN9Gq4HGCKwJ5jVCivp7Yh%2BQAjB3tndi%2By7Nw8OiSzn5nSTGvSOmkL9yMEFVfg4Qts33oM0kCZiXDHPp%2FRhmFe1Lu%2BshTtIF6oAr%2Btmc65NydCLerwPxoGEnO%2BKE12ot%2BgaTystVi%2FfZ8xGYEB8ZWd0%2FfKnGDhmiuBUJ%2Bzv2%2FJdaeICy%2FprXARbOGZfVRtETmxvGHd9EokDtEvTGcHx1VQ8Q%2BRbf3SlCx%2BuRSBpu6QJ4n40q3Lo6E8QUFw8q%2BDPa%2BXJds97sY9adn7%2BH1Q5P32VlVg2n7ZwlL35ewMmMisStZudMBedsaXylLspBQYjtlogNBPmq%2FCGWEKdP0FHb7xn9j9Obl4nHLi84H%2B1kNBdKE0miHWpv3MKnhm38ZuSvHjL45a5wzBz%2F4RpO2JH0asP6oFcWLcmjVwxyEJ39aY6Eq8DFiBrZ8Vzrnsae8xgrif2Gbuvs3%2FYYRG9j5fRBDEiTwHGJ1yIINemfJzPwmulXSBwYlzlYVXFhaqq6lrIUTGBDW%2Fm5XNtse8SWuHrjQRWPx1yXpk8kCSZs5PVQAgx8%2ByXZrbXmjt3DF1cnN91w%2Fd8GFYAHFzbGUEElVVaLIwsc5s%2BgJNWUtHVwbp%2FnB4VMHB%2BKVoa2DDDvtS%2FBjqkAfiRS6xFSVNNk9WbBEbLZUnECbT4TFP5DndOhbi5k9CHh9SIcaJNKapGomv9X%2B1T7MQloqfACXMeBXrW9mKojjhEaxVXLCg0eH4TXIx8uUG1Fx0dOjgrerfX8D9lNwtiNVYygH1fjKQxSqpMDApmFLvhK3DUiLAVuFJlc5j2t1WJLoKFw1ntrepMazY6%2FjfMpS1MEQwFxJoMtjiHvej19JbWQixZ&X-Amz-Signature=1dcebff9c75690236cbd28268806613047246208a6a63e89b13b2b9822fca550&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
