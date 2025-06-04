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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJBIY2W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFYgDne19GMaLNZg2fQetirqqzYxQaaJtwB%2F%2FX%2FvgwlmAiAZkZRiy7IcveY85ju%2BTwIzSO3bi3byd7gWPpMcncJVeCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMgpb%2FxyP0UFQvR2ArKtwDsrGxsGyUvSzIG0S39VKwvBe9KVWZvNBxRDTuitwFda%2F2QHfNyU5xHwNZii6k0qy2rm4382PxlBOmcMy3h789C4vIVKsp1%2Bt9jxoqjpG7JTBDQMx46KV2SjY1VJfcuOslAcjt5KLCNIC6tW5Mbv6jUW4JJBT8PkdcD7k3aUEh2VkdpatY5mRyfY73fBYudM4VuUoRGz9vXNNtyfwtwg0t9dtq6oY18PkvQ3bYIWPBk35GHQLBeQp7SGi1kf4qr658%2Fop9znM5WN2xvLJeCv3ZtrTQUKw0jCcDkoaj4wyb3B3zsLW1eFPxCfjKlStSWnf3xUWU%2FlMc1Z4kHvBlFGlF9EfoCBj4triiA6kS4LvXJ4uJfrfFbGhpDYZJvVzmr71zaefs1AuvLpZ2MQQeKr8IDJ8YHDwL34IrYvmrrdVBiqKQ%2FJPdGtts1ptGErNDEnkAHvwz%2FKIc%2B4JEGOJpAy%2B%2BtwrMyI18et3OXOMnGz%2BMoXXCsB0TpipM36SSubNtNLAQRS75h41SSwOQq7w93vpAoYj7z4SpJNvvL9HwfVfmY6EzQIA0ty8fKR9Ldd3SpBBxAKdyCzXjyVFLJZujjm5WxBRnah1xXSno0NjhCEJmsKCP2MqdnpWew9MH3FEwr4j%2FwQY6pgEkzeukIUqPfaHAn7rdwJ9E5xZX5Whl%2Bej3t02k3W5WDYpX%2FC4TNmDwKIeUFWZG5pJVkgWKxvY0PDlepJ8TU7EgV%2Fu9rVeyEi7rcKH8bgV2Jg2ySbBabDjz%2FhKAhmEfzLnaOgYvDLgSNvoVA9iWDzZrM9GloRXS5kpjqRoBW2WxCl8piJis%2FIGEQtvmIhY2DFPgfa7Vb4B1U4Izeu7Ulx9lwgccb3En&X-Amz-Signature=3de148f44b82f46b8e13900bbe37f7ef79c021b64a88f40c3dcb23b8982b262a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJBIY2W%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFYgDne19GMaLNZg2fQetirqqzYxQaaJtwB%2F%2FX%2FvgwlmAiAZkZRiy7IcveY85ju%2BTwIzSO3bi3byd7gWPpMcncJVeCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMgpb%2FxyP0UFQvR2ArKtwDsrGxsGyUvSzIG0S39VKwvBe9KVWZvNBxRDTuitwFda%2F2QHfNyU5xHwNZii6k0qy2rm4382PxlBOmcMy3h789C4vIVKsp1%2Bt9jxoqjpG7JTBDQMx46KV2SjY1VJfcuOslAcjt5KLCNIC6tW5Mbv6jUW4JJBT8PkdcD7k3aUEh2VkdpatY5mRyfY73fBYudM4VuUoRGz9vXNNtyfwtwg0t9dtq6oY18PkvQ3bYIWPBk35GHQLBeQp7SGi1kf4qr658%2Fop9znM5WN2xvLJeCv3ZtrTQUKw0jCcDkoaj4wyb3B3zsLW1eFPxCfjKlStSWnf3xUWU%2FlMc1Z4kHvBlFGlF9EfoCBj4triiA6kS4LvXJ4uJfrfFbGhpDYZJvVzmr71zaefs1AuvLpZ2MQQeKr8IDJ8YHDwL34IrYvmrrdVBiqKQ%2FJPdGtts1ptGErNDEnkAHvwz%2FKIc%2B4JEGOJpAy%2B%2BtwrMyI18et3OXOMnGz%2BMoXXCsB0TpipM36SSubNtNLAQRS75h41SSwOQq7w93vpAoYj7z4SpJNvvL9HwfVfmY6EzQIA0ty8fKR9Ldd3SpBBxAKdyCzXjyVFLJZujjm5WxBRnah1xXSno0NjhCEJmsKCP2MqdnpWew9MH3FEwr4j%2FwQY6pgEkzeukIUqPfaHAn7rdwJ9E5xZX5Whl%2Bej3t02k3W5WDYpX%2FC4TNmDwKIeUFWZG5pJVkgWKxvY0PDlepJ8TU7EgV%2Fu9rVeyEi7rcKH8bgV2Jg2ySbBabDjz%2FhKAhmEfzLnaOgYvDLgSNvoVA9iWDzZrM9GloRXS5kpjqRoBW2WxCl8piJis%2FIGEQtvmIhY2DFPgfa7Vb4B1U4Izeu7Ulx9lwgccb3En&X-Amz-Signature=1dbb48d3ab648c9143583835cc71e7e6af812e669a99609bc116a3f35a7fc906&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
