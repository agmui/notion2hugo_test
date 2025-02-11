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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU7RKUAZ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9MKFobjIW5OqmGECGrdcoLMkoFjatiSZxAyMre6zX%2BAiAyieSg07UaHyAcIDZuQHs6zfsCEruvg9nZK2btpqdU%2BiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBqNEjk%2BFcnkZngmfKtwDoVmobYgvxn3iKuJMQ%2FIPnkelF5IxWgpj0wDeqqwdvkvqHpi7AjX5G53vpXoRyKZQ2L6hVb5o6ptazdYUYcLEzLdSlfpbmcsd7%2FxQkIhl6v0R%2FaaTKUWbkLQuWkd%2FlkSF2vycTqiZTwFOuuyi3qDFrdp15PbKB51enfOymTEUU2YV1E0pZlZaxUMb1IC2ejmFawleYGIw2OlfQcMyI0uzWaNl369LICWPfWb7PGhCGEZVgsrXPnjOgIt79xrh1BBunzRbTQG%2BhgWyhoANNo0w5qTeM9WRlgsmd%2BZvB%2Bjk4FyK7DYo2frCU%2BVqLPEg3K9tkPLTY9ikyaYqFb%2FJdZDv5NVqyP%2BFfNg8whw1lRvI1LO8dvvgWi3N30JyrxidjwKvTnv%2BvbaiSNtk7Khb4rG8lQm6%2Bbdr52AYCYogawacYw3uKrhhfECginTu4hw%2B5BdQm2N%2B0H%2Bq1%2BKAIg2OEPOVUjBMpf14IgI3EQkVzjorWQi1MUgfZSwpCEFMtFlrhhG8nP4yjHR%2FPuXvwAqyOafc9xTFpDh8d1quOTvrlZykUCAvWsMa2p%2BtWhPXjjW2Kf%2Bsz%2BdcrmHLCz7RdIDLrHVARFIW1XCmRzMDnBc1VysUsgWL6Guz83tpeojOQFIwmYqtvQY6pgFQ8u%2FJ6xQRjGlzmzgxNRE7dgsYdC%2F6YBEEFmFyNuTAwYnJ1nmrar1GQp42akkJhGcq8murTl6XkC58GShLHMOY48oNqzjV3u38BE7cZxG%2Bi0YxBHFiQJgmH6E3gznkMSXRDUbW7uK3CpzaoRD62gxDx8kP%2FNGbyGzeqbDqqsHbJog9iNBCeI%2BoK%2BGDHBrJ6XVlEZAIrzuXegOkmONytOZCuVqvPX4j&X-Amz-Signature=9a3f8a9ec4475a04c6ffd28a85ec4e33e0e3c37fb1a65deff12fa1674597e64c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU7RKUAZ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9MKFobjIW5OqmGECGrdcoLMkoFjatiSZxAyMre6zX%2BAiAyieSg07UaHyAcIDZuQHs6zfsCEruvg9nZK2btpqdU%2BiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBqNEjk%2BFcnkZngmfKtwDoVmobYgvxn3iKuJMQ%2FIPnkelF5IxWgpj0wDeqqwdvkvqHpi7AjX5G53vpXoRyKZQ2L6hVb5o6ptazdYUYcLEzLdSlfpbmcsd7%2FxQkIhl6v0R%2FaaTKUWbkLQuWkd%2FlkSF2vycTqiZTwFOuuyi3qDFrdp15PbKB51enfOymTEUU2YV1E0pZlZaxUMb1IC2ejmFawleYGIw2OlfQcMyI0uzWaNl369LICWPfWb7PGhCGEZVgsrXPnjOgIt79xrh1BBunzRbTQG%2BhgWyhoANNo0w5qTeM9WRlgsmd%2BZvB%2Bjk4FyK7DYo2frCU%2BVqLPEg3K9tkPLTY9ikyaYqFb%2FJdZDv5NVqyP%2BFfNg8whw1lRvI1LO8dvvgWi3N30JyrxidjwKvTnv%2BvbaiSNtk7Khb4rG8lQm6%2Bbdr52AYCYogawacYw3uKrhhfECginTu4hw%2B5BdQm2N%2B0H%2Bq1%2BKAIg2OEPOVUjBMpf14IgI3EQkVzjorWQi1MUgfZSwpCEFMtFlrhhG8nP4yjHR%2FPuXvwAqyOafc9xTFpDh8d1quOTvrlZykUCAvWsMa2p%2BtWhPXjjW2Kf%2Bsz%2BdcrmHLCz7RdIDLrHVARFIW1XCmRzMDnBc1VysUsgWL6Guz83tpeojOQFIwmYqtvQY6pgFQ8u%2FJ6xQRjGlzmzgxNRE7dgsYdC%2F6YBEEFmFyNuTAwYnJ1nmrar1GQp42akkJhGcq8murTl6XkC58GShLHMOY48oNqzjV3u38BE7cZxG%2Bi0YxBHFiQJgmH6E3gznkMSXRDUbW7uK3CpzaoRD62gxDx8kP%2FNGbyGzeqbDqqsHbJog9iNBCeI%2BoK%2BGDHBrJ6XVlEZAIrzuXegOkmONytOZCuVqvPX4j&X-Amz-Signature=93b036da1111edf0f12cd7016f4f773e2fbc1a5fa55a0233abd7360a8b093ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
