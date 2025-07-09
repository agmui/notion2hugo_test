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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXSKHDHR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDid4t5aBhE%2Fbe%2FUbiR7IyBvEWOcUD1BQursSWm0ZV8lgIgUu1WIozfh%2Fy4J3R2ek3wHmNfXGBaCA1lmaLgq37SolYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEpv1ZGz5WykEwl5SrcA3zTjAEkRXczyUrOwOttIbs1qCGGKOEDKicfGfzCKut8Nfdn8sb6EjEg81D7UqtEax6wPmMBI1HpPpkwlr6NeJ8J59Xq%2BSZBz80DdJFp044H9fLkttPxiHiZ%2B39%2BKCN2kdbXYk2xtmCuuQW%2Fey4MyZCg6bal7AIVah%2BLkqBtjTZtIGjcsx%2BRL4j7tEYd5%2F8CoXtOmTbMIm%2B79an4wJQE7vkMVer%2FC6Isut3%2BhlqdB9XQLhMv5MDpEIg9n2DV6Y9dIw8VV80qG%2Br0I9u%2BpTYnDxeUt5%2Fa9X9SY%2BdPxuH3wqiNByemtvs91rJyLD6J%2Bho0RCeJr5ePlKB7itNqk797eZihMArt2%2Bnls1uJ%2B6hyZOxnfG0vrT48gQD6izAidS1mkWZA8gDTit9hublY%2B99tMVeVhPks1i83lW8krILeoG%2FOM%2BiGFPYf44chamMcVb9cX8C7RIGHeWwX%2FWw0n0qW%2BQxHq%2B8G9f8ogqnBMX4hSa7wm4cYEytdtWfkxzXJ4XONxAebGiI5b8K%2BA1wGLCmXy1u4B2h6Y3r3HtikItouiOWfP%2FPGzdthbx5gaoKVRUohfv%2BAtkKamt6wMJC9DKmXEQ1N%2BTsxzSO4b9PYjhAYE1TxHjoWrNRGA15y%2FPdeMLKztsMGOqUBIkJIIDCe6EkAjnawIpZa2W3xOHzcu%2BzYEpbLf7i4OnLHWz219n0d8IeXqLSe1nYlwolCC25Bo6fCogvEVImmiREZv50%2FgskAJvzKn9qcwTV1pJzPJmG%2B3IlaPnJvUrtrk%2BSMxwwnnZLGYyQcAJeljx9HeDb3YoM5GdeR6AaZ4sNZsLsjWxXCUsaUzDyYUy2qrZtxlpAaGrK3571pRhUVbD808pg5&X-Amz-Signature=437cd6003b3ec008a0caf3162ee4b4d1b6de907cf16bf6341fb17ab9b8aea689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXSKHDHR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDid4t5aBhE%2Fbe%2FUbiR7IyBvEWOcUD1BQursSWm0ZV8lgIgUu1WIozfh%2Fy4J3R2ek3wHmNfXGBaCA1lmaLgq37SolYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEpv1ZGz5WykEwl5SrcA3zTjAEkRXczyUrOwOttIbs1qCGGKOEDKicfGfzCKut8Nfdn8sb6EjEg81D7UqtEax6wPmMBI1HpPpkwlr6NeJ8J59Xq%2BSZBz80DdJFp044H9fLkttPxiHiZ%2B39%2BKCN2kdbXYk2xtmCuuQW%2Fey4MyZCg6bal7AIVah%2BLkqBtjTZtIGjcsx%2BRL4j7tEYd5%2F8CoXtOmTbMIm%2B79an4wJQE7vkMVer%2FC6Isut3%2BhlqdB9XQLhMv5MDpEIg9n2DV6Y9dIw8VV80qG%2Br0I9u%2BpTYnDxeUt5%2Fa9X9SY%2BdPxuH3wqiNByemtvs91rJyLD6J%2Bho0RCeJr5ePlKB7itNqk797eZihMArt2%2Bnls1uJ%2B6hyZOxnfG0vrT48gQD6izAidS1mkWZA8gDTit9hublY%2B99tMVeVhPks1i83lW8krILeoG%2FOM%2BiGFPYf44chamMcVb9cX8C7RIGHeWwX%2FWw0n0qW%2BQxHq%2B8G9f8ogqnBMX4hSa7wm4cYEytdtWfkxzXJ4XONxAebGiI5b8K%2BA1wGLCmXy1u4B2h6Y3r3HtikItouiOWfP%2FPGzdthbx5gaoKVRUohfv%2BAtkKamt6wMJC9DKmXEQ1N%2BTsxzSO4b9PYjhAYE1TxHjoWrNRGA15y%2FPdeMLKztsMGOqUBIkJIIDCe6EkAjnawIpZa2W3xOHzcu%2BzYEpbLf7i4OnLHWz219n0d8IeXqLSe1nYlwolCC25Bo6fCogvEVImmiREZv50%2FgskAJvzKn9qcwTV1pJzPJmG%2B3IlaPnJvUrtrk%2BSMxwwnnZLGYyQcAJeljx9HeDb3YoM5GdeR6AaZ4sNZsLsjWxXCUsaUzDyYUy2qrZtxlpAaGrK3571pRhUVbD808pg5&X-Amz-Signature=84eb7ec66fdf31367c19a4708b88e9a84290712824f61d53aa40be7248a5e50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
