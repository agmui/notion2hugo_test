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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HLYROP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDk6d2wOBPDBNLDdo9lnBZiRxsWViXqrnlXe9It9kAWBAiEAukGgkHF64MlIaNCuLRg%2FslO75lSFm8u5ZiFDOe4KQecq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPeQ1PTi1OJTksAzUircA3S3hHwhvbmNZsv8u%2BUmpAha%2FYq9CUYEM97DKiOW%2FA5xdKmgxUQAh9mnKRjccdiRfqOwQ2t5iRXj6VgFAcxiAd8uWkX4RRdd3lbzYu0XxedtLz7KqdAJJ%2Fg4O%2F6B25LZCggvADCnpJqE8ZBqFqqfyPbb%2BXl0UyVGSG5yqVD1bhZlk1MEF6efiGXg%2F9hmBBwf3UTIaPL04B%2BFF03Ban0eF8rOqMFpVHpu9rLp8T85lnfYx9c2XvCCFYGT0wCwtmaxSuDrRzHCh8CdFFPcZdCLW28ETE%2FvfJ0T6aq29sZvMYnxIaDSumhPzTQi%2FnGipwZ3gE5lPj8lYVPpaY7grI0kKsUwEphQo%2FQnu8EOuIhuPLwD0u3LKwAk6Rj64pcqC80DRL1rDqy7t1p8A830GtaspnzcBHuzuNwaDMjRbsgO0AXmMTilX%2FHjxM0tgTV6pOEIEabKqnuFnvOxu79Qpvqv7Fm24jZ%2FfgDLVTdyFC3BX2XqqN0M%2BClpWqVxsvV6aR%2BoohOtTFAFAbjsO0PLyS9Fg5XucZGbd%2BospjgS8T%2B1E9z2RswLqmdhKQ7NjrWlMLibFdz%2FhwR3eUPQjom%2FHH8u4xWw%2FBOH4PapfvnvYyGkJktgIUrf4LpDBkbmgkSlMIyE9sIGOqUBCAggTqEE%2BDKmQLshpYe%2F6Ncl3QNZG32uF1dNjY9nn9n9YokQ18TjUysVd%2FX1pKVXPgzfkTrhGz54s8wh8SMqj33qY8f0yJIzlVOEOTvKLQ3pcg7SEHYKA%2BSQUCtqQxvrO%2B4j1KxjQa56NhSUP0aKFSEHkdogEjeuoDSbyGfyVLWXMve1d695HdebfhVtCHplg0ABLEd6kfx2D0bfovpnpZ5wiDD1&X-Amz-Signature=3a3ff06f54c22878a94a2116f293ec1113aa06130c1c7230e0b9a65542195ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4HLYROP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDk6d2wOBPDBNLDdo9lnBZiRxsWViXqrnlXe9It9kAWBAiEAukGgkHF64MlIaNCuLRg%2FslO75lSFm8u5ZiFDOe4KQecq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPeQ1PTi1OJTksAzUircA3S3hHwhvbmNZsv8u%2BUmpAha%2FYq9CUYEM97DKiOW%2FA5xdKmgxUQAh9mnKRjccdiRfqOwQ2t5iRXj6VgFAcxiAd8uWkX4RRdd3lbzYu0XxedtLz7KqdAJJ%2Fg4O%2F6B25LZCggvADCnpJqE8ZBqFqqfyPbb%2BXl0UyVGSG5yqVD1bhZlk1MEF6efiGXg%2F9hmBBwf3UTIaPL04B%2BFF03Ban0eF8rOqMFpVHpu9rLp8T85lnfYx9c2XvCCFYGT0wCwtmaxSuDrRzHCh8CdFFPcZdCLW28ETE%2FvfJ0T6aq29sZvMYnxIaDSumhPzTQi%2FnGipwZ3gE5lPj8lYVPpaY7grI0kKsUwEphQo%2FQnu8EOuIhuPLwD0u3LKwAk6Rj64pcqC80DRL1rDqy7t1p8A830GtaspnzcBHuzuNwaDMjRbsgO0AXmMTilX%2FHjxM0tgTV6pOEIEabKqnuFnvOxu79Qpvqv7Fm24jZ%2FfgDLVTdyFC3BX2XqqN0M%2BClpWqVxsvV6aR%2BoohOtTFAFAbjsO0PLyS9Fg5XucZGbd%2BospjgS8T%2B1E9z2RswLqmdhKQ7NjrWlMLibFdz%2FhwR3eUPQjom%2FHH8u4xWw%2FBOH4PapfvnvYyGkJktgIUrf4LpDBkbmgkSlMIyE9sIGOqUBCAggTqEE%2BDKmQLshpYe%2F6Ncl3QNZG32uF1dNjY9nn9n9YokQ18TjUysVd%2FX1pKVXPgzfkTrhGz54s8wh8SMqj33qY8f0yJIzlVOEOTvKLQ3pcg7SEHYKA%2BSQUCtqQxvrO%2B4j1KxjQa56NhSUP0aKFSEHkdogEjeuoDSbyGfyVLWXMve1d695HdebfhVtCHplg0ABLEd6kfx2D0bfovpnpZ5wiDD1&X-Amz-Signature=9552f3ccdcac0c2929a69a88e71297b811dc56ff2deee71aa0c0a7c4a19fddc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
