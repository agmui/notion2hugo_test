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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53DMRCO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCh71hhDjh5yMnu11T%2FPEbZ4DvIh4DRCL3C9xEwZS75wwIhAMaVHGuJ0XrTkw%2B2Tkn0TqoJSHDVYDNBx8u8%2Bz9O%2FQljKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx95BMRb3yYE8JaPuMq3APDAPnTU23ihlaTyjAzX4%2FPUkugD%2F21t8R9xSs%2BTYF8xyPlOphfeO8yqznshn442jN%2BQAnoOiprLJO%2FtuA4uWfa%2Fz%2FhSwLBjUw9uxxWmq5bu3KVr32SmVp1Tf%2FwAJugg39iKrwn9KfGd3AfsLhLLRcZEwX3YeXPJjosZAu8MbnVXvh019VG6qi1vEYrO%2Fxg3j3BXNoamoZYcX4qH%2B%2F53xJW2eeNT5Jzou7%2Fl%2F%2F1LxFixnC2vjdephckzYRo6oqrQJy9ul7pJllN8VWQyDOzhw6%2FVIamTz91xRWt80YfiNDxfkQR7rxsKvjaiiOW8x7x2qFHxEcbKaGSKT3p%2BfX8BISfrfu4JN6oL7QYl%2BfOzu%2B8Q6VKUUjWfarVx3QJpkJQYGu6FSkPeFjNwwZm%2B8inYMyc%2BhWrylkVYSzAKvibRD8OJU%2FxBW0yHv1NQ%2BxmlLOx7rKWcaiV3n63Glpn6E9sD5IOa5x5rV%2FNFigPoNU3BSpxHefmiz6SkmRa4uQEpEVN%2FTukX4npMU4HN%2F3uau6eUvfneNhORYnIAX9xb0AaabMo69L11%2Fyyj1pW4glqnY4V2Pl%2FUnwT8Kixec14g8ISOBCkall3O2D0Kz3JYBBdM5c2jOAYA%2BI46dM00gqaAzDXgau%2FBjqkAeKerO6SSLjACWEH2vEmFuH4oo84PZZ2uW2ROZ3vrgpvieE6lBDk%2FMh7ABn3Z7gMpbD9F4WeT2cbx5yMDGFebm%2FiSDr%2Fhv%2BmTB5UzcR1NZpSdID790QUdYyOPMNv9Byq%2BeZ8QdhIVEytAECrmXzxw83UxbSG3p%2BDeN8nqtO0pu%2Bwld%2BjNVHMSBgwQYsCtBxF6JlXzIY9GaZtBxcyv%2BllanvprP0h&X-Amz-Signature=9be3c4de905a8c315ed038cd31066c966619418b5a6251613b86c605a26e49d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53DMRCO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCh71hhDjh5yMnu11T%2FPEbZ4DvIh4DRCL3C9xEwZS75wwIhAMaVHGuJ0XrTkw%2B2Tkn0TqoJSHDVYDNBx8u8%2Bz9O%2FQljKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx95BMRb3yYE8JaPuMq3APDAPnTU23ihlaTyjAzX4%2FPUkugD%2F21t8R9xSs%2BTYF8xyPlOphfeO8yqznshn442jN%2BQAnoOiprLJO%2FtuA4uWfa%2Fz%2FhSwLBjUw9uxxWmq5bu3KVr32SmVp1Tf%2FwAJugg39iKrwn9KfGd3AfsLhLLRcZEwX3YeXPJjosZAu8MbnVXvh019VG6qi1vEYrO%2Fxg3j3BXNoamoZYcX4qH%2B%2F53xJW2eeNT5Jzou7%2Fl%2F%2F1LxFixnC2vjdephckzYRo6oqrQJy9ul7pJllN8VWQyDOzhw6%2FVIamTz91xRWt80YfiNDxfkQR7rxsKvjaiiOW8x7x2qFHxEcbKaGSKT3p%2BfX8BISfrfu4JN6oL7QYl%2BfOzu%2B8Q6VKUUjWfarVx3QJpkJQYGu6FSkPeFjNwwZm%2B8inYMyc%2BhWrylkVYSzAKvibRD8OJU%2FxBW0yHv1NQ%2BxmlLOx7rKWcaiV3n63Glpn6E9sD5IOa5x5rV%2FNFigPoNU3BSpxHefmiz6SkmRa4uQEpEVN%2FTukX4npMU4HN%2F3uau6eUvfneNhORYnIAX9xb0AaabMo69L11%2Fyyj1pW4glqnY4V2Pl%2FUnwT8Kixec14g8ISOBCkall3O2D0Kz3JYBBdM5c2jOAYA%2BI46dM00gqaAzDXgau%2FBjqkAeKerO6SSLjACWEH2vEmFuH4oo84PZZ2uW2ROZ3vrgpvieE6lBDk%2FMh7ABn3Z7gMpbD9F4WeT2cbx5yMDGFebm%2FiSDr%2Fhv%2BmTB5UzcR1NZpSdID790QUdYyOPMNv9Byq%2BeZ8QdhIVEytAECrmXzxw83UxbSG3p%2BDeN8nqtO0pu%2Bwld%2BjNVHMSBgwQYsCtBxF6JlXzIY9GaZtBxcyv%2BllanvprP0h&X-Amz-Signature=fad1d67f4941e31d1fbffcc1d0e48a2850488f48580c4cc356e6eeee1c10a4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
