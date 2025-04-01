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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCXQWUP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC%2B2OsHBjOj9YQzwgumU5TtISFKk8kMqSmE6hfQnsKEwgIhAL82P63hfMzJFLoXT9aKzuj3RQxCfJsDeqodKcW33riEKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa6EdhqFRs9Symo4Eq3AOE0VvI3xu6ISDURdbcgIzLPfmhUQlL9BqFKggRq8yPQRs14Ws0%2FPDpZAHZFqPW9lGi8TXYpseWZ7W66lGJ%2BWos1u%2BZJ9jLmUWh9E%2BFhn1AswpjlM9oVqr4GfmdbSKFLjT8x%2BhVEpMLZBVAOcJYgHiHhx7k77pyue0b3BMwHfJMR5DBaFJJTaNhiQnydapE2HoYXYMMGsSgT3Bh%2BvgtGmxL5x46WVB9NHk6NLFLhezbGxq2WJq8ECwTswsJ8sothdcY9zomhfYOnUnCa%2FeVSBgmsRlHeGgq1f8wONIuPA%2FQUvDkh58EIgy7KyMz0tFlGz9j%2FBYQ5p5%2FJQuhXU0ZyZQh0yoSh2vDmZjZMN1S0CE%2FOMAiV%2F7bhmiUyoVnRnTAGDwGZIWxpdugKmdZ5Ndk0DPAePRcpX4vT3ist2Hsdi1YNj7mCIrrD5JuXnrQ6BjqpTFJlzW%2F3xmQ6IickgqKvWeKpofXbXrBT649VElcuUBE8DOimFrs%2FMpGbYQCJoImdSyaNRR3fHFqkSklwf7RRGD5xJtWdBDa69maJajG0ozIky63WFhU8AbtSUvq8LVqSmbAjRh8yoOQaU%2FhudlXDj4c6%2Fy%2FxMAsay6GsYGdbDpLcn016HEQqtjFZgWBuTC3iq2%2FBjqkAaVFwtnE53%2Bi1wlxD6ZtYzkG0h2GKU0kP%2FyYnUp5SCzZ%2B1fNNRhEb5zrjKEwoBRwRc3G8SCQxadzdVV1FTy6ZWGFhFjC0AH60%2BU3e6lglcM%2FNEsxNEW8tjrvLY3IrdAHWcPQ7VVijsB%2FpuPWMK3oORkbvc8eJsztcA8pqZHztMgEvzPPZObEjITeQ0vs%2BgjaKqMLx%2B%2Fmu4ocVZ53BnX%2BOYfQJODo&X-Amz-Signature=794cae55a32c1899acc4aff738b13a839f66cd88f419a305b3fd63514564d3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZCXQWUP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQC%2B2OsHBjOj9YQzwgumU5TtISFKk8kMqSmE6hfQnsKEwgIhAL82P63hfMzJFLoXT9aKzuj3RQxCfJsDeqodKcW33riEKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa6EdhqFRs9Symo4Eq3AOE0VvI3xu6ISDURdbcgIzLPfmhUQlL9BqFKggRq8yPQRs14Ws0%2FPDpZAHZFqPW9lGi8TXYpseWZ7W66lGJ%2BWos1u%2BZJ9jLmUWh9E%2BFhn1AswpjlM9oVqr4GfmdbSKFLjT8x%2BhVEpMLZBVAOcJYgHiHhx7k77pyue0b3BMwHfJMR5DBaFJJTaNhiQnydapE2HoYXYMMGsSgT3Bh%2BvgtGmxL5x46WVB9NHk6NLFLhezbGxq2WJq8ECwTswsJ8sothdcY9zomhfYOnUnCa%2FeVSBgmsRlHeGgq1f8wONIuPA%2FQUvDkh58EIgy7KyMz0tFlGz9j%2FBYQ5p5%2FJQuhXU0ZyZQh0yoSh2vDmZjZMN1S0CE%2FOMAiV%2F7bhmiUyoVnRnTAGDwGZIWxpdugKmdZ5Ndk0DPAePRcpX4vT3ist2Hsdi1YNj7mCIrrD5JuXnrQ6BjqpTFJlzW%2F3xmQ6IickgqKvWeKpofXbXrBT649VElcuUBE8DOimFrs%2FMpGbYQCJoImdSyaNRR3fHFqkSklwf7RRGD5xJtWdBDa69maJajG0ozIky63WFhU8AbtSUvq8LVqSmbAjRh8yoOQaU%2FhudlXDj4c6%2Fy%2FxMAsay6GsYGdbDpLcn016HEQqtjFZgWBuTC3iq2%2FBjqkAaVFwtnE53%2Bi1wlxD6ZtYzkG0h2GKU0kP%2FyYnUp5SCzZ%2B1fNNRhEb5zrjKEwoBRwRc3G8SCQxadzdVV1FTy6ZWGFhFjC0AH60%2BU3e6lglcM%2FNEsxNEW8tjrvLY3IrdAHWcPQ7VVijsB%2FpuPWMK3oORkbvc8eJsztcA8pqZHztMgEvzPPZObEjITeQ0vs%2BgjaKqMLx%2B%2Fmu4ocVZ53BnX%2BOYfQJODo&X-Amz-Signature=23b943a787bead241744c74ec673056101fb4b1180702c481430d7dfac29457e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
