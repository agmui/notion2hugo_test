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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUUFPRR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGDhbrWVfXSUbVw8nn8J%2F7IKUsmElzAkCHNfb2SdcfhzAiEA0%2BrAYtTYTE9PHyj6qxOT8SKXQbnDudWKjZKRPY5tEOQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4IHnIbUK00w9xNYyrcA3E86kTOGM%2FLFMt%2Bob5Uz3MiI2QZU6XB47I7isLbf1w6KeYmSEY7dtPLLiS7njGEeOzOfGX8Uvt3wSHMGw0gstyIxJq1ZGA9wladoXLAzyl9dY9vssI8qawhMMVhY8EMUUl0xWctBlb8QXklOuR9IwX5OQ37Nje%2FRDFvJzISrYgvi7BXxQhwh9RIwBsMlf7cfAs5egLFV3jw%2FbtAbhXYN6VT7LuGrApBIs8wks8GvzXI%2FudoteI7VGfu%2F%2B97cB75Xx1%2BwBaE7FnN4LeQDRiAG%2FvphLXuCiH%2FPNo%2FN6ehiYlQiTrie8lRA9AixJfqY6mbCr%2Fra7PFzwfjdkK4qzz%2Fpy7oXt9Q%2Fp4Bs42XX9SjL01TYKJ6bJXc1zoINDP9f%2BTu9y%2BbLnKHmu3j47YR4wsTfDHNh2uAk3grnwX7zmlbNGbC3RtEnrD6ca5nHe8uWJeo7fKXhJFF7QL%2FfR33C17XICGQUbOXMNJp6AkPd3IRZ%2FrLLr1mbxUzI6bOxeCAelHgfb6RG8MXqu9Ah7e4gf4%2BOjsj2CqJsog6jP6iv0zzryao%2FP4ZLIRCR1REkoBq5zzJPzKQirr3ZsREL1YRrz6rEYVBNq8yMMsM2%2FbHye70zGXpaBNGQDcXjzJqNibVMKKJ%2B74GOqUBi85Mccs3CkKlthGYJEZI7jcn2HXPEEebaup54TbmoUvRcAkXnE4jM2LHMYWmf5aaHbJgRWDMHJ6tuXJVK%2BmGLT3HwG%2FjiV94GDMRgoD2qb1byrDA2tNJEH5EJ4EsIrFj9v463R%2BSbUKuWUapoPSvinplyW5x6yCSb8NJwwQSys6CUKTiNFlWYvG9n5Ug1UUnuv7uC911sRY2IJqYWy5DTO%2BY7o3T&X-Amz-Signature=f76aa80ffe8105d093972559ef704621d78781eb13d06b5747562d1fa19a84b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUUFPRR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGDhbrWVfXSUbVw8nn8J%2F7IKUsmElzAkCHNfb2SdcfhzAiEA0%2BrAYtTYTE9PHyj6qxOT8SKXQbnDudWKjZKRPY5tEOQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4IHnIbUK00w9xNYyrcA3E86kTOGM%2FLFMt%2Bob5Uz3MiI2QZU6XB47I7isLbf1w6KeYmSEY7dtPLLiS7njGEeOzOfGX8Uvt3wSHMGw0gstyIxJq1ZGA9wladoXLAzyl9dY9vssI8qawhMMVhY8EMUUl0xWctBlb8QXklOuR9IwX5OQ37Nje%2FRDFvJzISrYgvi7BXxQhwh9RIwBsMlf7cfAs5egLFV3jw%2FbtAbhXYN6VT7LuGrApBIs8wks8GvzXI%2FudoteI7VGfu%2F%2B97cB75Xx1%2BwBaE7FnN4LeQDRiAG%2FvphLXuCiH%2FPNo%2FN6ehiYlQiTrie8lRA9AixJfqY6mbCr%2Fra7PFzwfjdkK4qzz%2Fpy7oXt9Q%2Fp4Bs42XX9SjL01TYKJ6bJXc1zoINDP9f%2BTu9y%2BbLnKHmu3j47YR4wsTfDHNh2uAk3grnwX7zmlbNGbC3RtEnrD6ca5nHe8uWJeo7fKXhJFF7QL%2FfR33C17XICGQUbOXMNJp6AkPd3IRZ%2FrLLr1mbxUzI6bOxeCAelHgfb6RG8MXqu9Ah7e4gf4%2BOjsj2CqJsog6jP6iv0zzryao%2FP4ZLIRCR1REkoBq5zzJPzKQirr3ZsREL1YRrz6rEYVBNq8yMMsM2%2FbHye70zGXpaBNGQDcXjzJqNibVMKKJ%2B74GOqUBi85Mccs3CkKlthGYJEZI7jcn2HXPEEebaup54TbmoUvRcAkXnE4jM2LHMYWmf5aaHbJgRWDMHJ6tuXJVK%2BmGLT3HwG%2FjiV94GDMRgoD2qb1byrDA2tNJEH5EJ4EsIrFj9v463R%2BSbUKuWUapoPSvinplyW5x6yCSb8NJwwQSys6CUKTiNFlWYvG9n5Ug1UUnuv7uC911sRY2IJqYWy5DTO%2BY7o3T&X-Amz-Signature=8b1a31f93e9848d2e76010dff87f5c074aaf8d98004505bd5125af681388a92f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
