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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LCBANTK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7IhpyI9PY0AdtBZZI%2B%2BN%2Bv9RQmHpUvdi7RZjxO2IM0QIgSmTe7h2RyGyC9xyIYb0Hr5HSXrz4eWP9T6WVxT0nmO0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFc9KO4CBmDK%2BVkt0SrcA9qG7UwRbwiJr4j7HYj59tnN%2BeOBLqqixMFAnHN9lXTA4lrWOVcVR8rniio85i6WpGzuJRAD1AULx6Wd4xTaufipS9Cv%2BKYQvI%2FlGOEv6pco0%2Fs35CRbUnnaYPna%2FvRg70c4Wb00tXkAGkJ5yKKzWXoRasJZQFVT4A3la1ttlrBU7lpMXmUd%2FzlXNJkYf14q0A5EBX7OpJOZOrI%2BMJQ5rGg8aiI9xBDkw8lvt46AwwK%2BI1n%2Bc8ZyAUiOB8Zp%2FaeKyzmP%2B5g%2BvryGoI1%2FLvYs9qdy8Q%2FLMnorPDe52BZmeJnXGSBqfWMkqUX%2By756RogxXHYsXLEQEueQ%2BHfwg7s4y%2Foht4NGkP4os%2BKnq2PZgvkQAir9175i3M2v7PvTzLOkoo%2FkuiO8t7rAKFAf1Q2rfiEPC6yJQkFCC6s32Xz4gR2sDPbxlZzxxMpF2BRST3lys0ry8BIbX%2FeeLKYhRhF4i8TB%2FHA7oB%2BO%2BIdVLAs%2F4Orr1s6JaeEGT0j1CjfiURmjNMo0B7h3ZHrsIgkRgVLTIAzEj1JYXgitX1OhbM7JlsaXIrxjA05iMRucWfm8dUu8WawIqv%2BaBhzX6sbp4oTaBSCdA801P%2B7OYTMsoDasnc984QTZWbj3Lxsh1OWlMLDnlMMGOqUBP4e0IzDRtQVgWwz2ugv90OYfl3n7cxEQv8s1TKAKZNfnzBsI8o%2FikbcuWhy3GgYw%2FCJlRZrxK%2FQRMe4678pcrTH72S%2Bh9hzXPWwmlq4ZHyW63srulOxMCRKzsSMS5bJpYJr9y6txQN6sL5thrFkCP2lrULYOn1z%2FvhhyH6gZD4B9zpL5a1%2FY4v91uTBFJ9mSGoAb2nlReBhxQWvGUEFnGGNIi%2BN1&X-Amz-Signature=4e41f77d80ac601db142ff6b32880acd64741394ab0322f879d3f954f23cea8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LCBANTK%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7IhpyI9PY0AdtBZZI%2B%2BN%2Bv9RQmHpUvdi7RZjxO2IM0QIgSmTe7h2RyGyC9xyIYb0Hr5HSXrz4eWP9T6WVxT0nmO0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFc9KO4CBmDK%2BVkt0SrcA9qG7UwRbwiJr4j7HYj59tnN%2BeOBLqqixMFAnHN9lXTA4lrWOVcVR8rniio85i6WpGzuJRAD1AULx6Wd4xTaufipS9Cv%2BKYQvI%2FlGOEv6pco0%2Fs35CRbUnnaYPna%2FvRg70c4Wb00tXkAGkJ5yKKzWXoRasJZQFVT4A3la1ttlrBU7lpMXmUd%2FzlXNJkYf14q0A5EBX7OpJOZOrI%2BMJQ5rGg8aiI9xBDkw8lvt46AwwK%2BI1n%2Bc8ZyAUiOB8Zp%2FaeKyzmP%2B5g%2BvryGoI1%2FLvYs9qdy8Q%2FLMnorPDe52BZmeJnXGSBqfWMkqUX%2By756RogxXHYsXLEQEueQ%2BHfwg7s4y%2Foht4NGkP4os%2BKnq2PZgvkQAir9175i3M2v7PvTzLOkoo%2FkuiO8t7rAKFAf1Q2rfiEPC6yJQkFCC6s32Xz4gR2sDPbxlZzxxMpF2BRST3lys0ry8BIbX%2FeeLKYhRhF4i8TB%2FHA7oB%2BO%2BIdVLAs%2F4Orr1s6JaeEGT0j1CjfiURmjNMo0B7h3ZHrsIgkRgVLTIAzEj1JYXgitX1OhbM7JlsaXIrxjA05iMRucWfm8dUu8WawIqv%2BaBhzX6sbp4oTaBSCdA801P%2B7OYTMsoDasnc984QTZWbj3Lxsh1OWlMLDnlMMGOqUBP4e0IzDRtQVgWwz2ugv90OYfl3n7cxEQv8s1TKAKZNfnzBsI8o%2FikbcuWhy3GgYw%2FCJlRZrxK%2FQRMe4678pcrTH72S%2Bh9hzXPWwmlq4ZHyW63srulOxMCRKzsSMS5bJpYJr9y6txQN6sL5thrFkCP2lrULYOn1z%2FvhhyH6gZD4B9zpL5a1%2FY4v91uTBFJ9mSGoAb2nlReBhxQWvGUEFnGGNIi%2BN1&X-Amz-Signature=751fb0bf612f3fcdb2a57608899ba835a66dd1e645c1622da82b52b05a6217eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
