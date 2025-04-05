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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQYLYNG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWFUXQi%2BFHqv%2FszhnD5EGI4IKkqJtPnEGs0TzYPku3AIgIPLLpv8XdqTHoHM6GZUKdKpk1WrIYHnS3liH8KJE0Skq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJ3If8k8RKV85Ok%2FkyrcAzammn8I%2FnIR3MLgbZ4o2azyj0ZzryOtjPTAn9Plhdh2KVyxmOWeqKaAbBilk2%2BNjwmQN66%2By9ZXTZDLIunZKUw9aHQrxrWJzQ10pbfCfSLdl60cLyyIdhImOSrMvLq9Od7r2w5MYc3AMBK9vbXfd5XRGRWIJiBDBxx0t5QHORCxO3C0xVkkqmCluUkcGrUXlaF%2Bes6IkLZOIakAbqrqa2sKbHOREThG6J2rYsGIow9U3dwQIAYHeD%2FEho3uUDAs1GNkX1va6DGPs%2B3ElHvqYoHTZOWOO1L4PaFujM8BcufEvIVfDrYWTasDqMbne2x4yGM4G1affk9fiJ7nh%2FM%2FTcFmKPyfNtY%2BPgOp9pqvyyflI%2FWx50N5Nj936BUl5M8QW6Y%2BoawgQn%2Fo0geiNXfsWUVvHZDQpJ4P7pR25Bdc6s%2FPfYezkXazMAa1cMBxPaFluj%2FurGeo%2FRbKfSAk%2F6%2FY%2F5wvL9xOMh%2FpLkHvzaB8jskhOynfDVOUHqhkJvUc%2F27LMOozBR1Qy0qgI4REiZ7HT8Z2KanO9%2BF%2BJm94KdnUUU0Hkrak%2FDk6iDpT0sybuDxbJfi8NvXVAIOONqgiV8U9%2F96OgykdxLjF9dwdwUDliMSQoCNTiNXq4kRknYxsMKXvwr8GOqUBljCxqDbroLXVZ871BETagZSmb12hyMLbWII0a3QkifHMhoebHN1OEW9Bv5PpjCG4heMb7S65YKif8czmBuEvGnYJbP1uQqS1RFp0wArAu0TeQyBWk4IHP2fnyiUHg5U%2B%2FV%2BtwhZ8AcfqOApC2taUIUOMXSGiOBH3BiIHM%2FSxO1IieIBv9ZWVftciuF1hRKtzR%2FL1OKtLUyMQ3P01Zbf0oOOpKUA7&X-Amz-Signature=484a1fbad514819e8a1b970a36d128552729833c9665c5a1c981705e1b2cd383&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQYLYNG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWFUXQi%2BFHqv%2FszhnD5EGI4IKkqJtPnEGs0TzYPku3AIgIPLLpv8XdqTHoHM6GZUKdKpk1WrIYHnS3liH8KJE0Skq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJ3If8k8RKV85Ok%2FkyrcAzammn8I%2FnIR3MLgbZ4o2azyj0ZzryOtjPTAn9Plhdh2KVyxmOWeqKaAbBilk2%2BNjwmQN66%2By9ZXTZDLIunZKUw9aHQrxrWJzQ10pbfCfSLdl60cLyyIdhImOSrMvLq9Od7r2w5MYc3AMBK9vbXfd5XRGRWIJiBDBxx0t5QHORCxO3C0xVkkqmCluUkcGrUXlaF%2Bes6IkLZOIakAbqrqa2sKbHOREThG6J2rYsGIow9U3dwQIAYHeD%2FEho3uUDAs1GNkX1va6DGPs%2B3ElHvqYoHTZOWOO1L4PaFujM8BcufEvIVfDrYWTasDqMbne2x4yGM4G1affk9fiJ7nh%2FM%2FTcFmKPyfNtY%2BPgOp9pqvyyflI%2FWx50N5Nj936BUl5M8QW6Y%2BoawgQn%2Fo0geiNXfsWUVvHZDQpJ4P7pR25Bdc6s%2FPfYezkXazMAa1cMBxPaFluj%2FurGeo%2FRbKfSAk%2F6%2FY%2F5wvL9xOMh%2FpLkHvzaB8jskhOynfDVOUHqhkJvUc%2F27LMOozBR1Qy0qgI4REiZ7HT8Z2KanO9%2BF%2BJm94KdnUUU0Hkrak%2FDk6iDpT0sybuDxbJfi8NvXVAIOONqgiV8U9%2F96OgykdxLjF9dwdwUDliMSQoCNTiNXq4kRknYxsMKXvwr8GOqUBljCxqDbroLXVZ871BETagZSmb12hyMLbWII0a3QkifHMhoebHN1OEW9Bv5PpjCG4heMb7S65YKif8czmBuEvGnYJbP1uQqS1RFp0wArAu0TeQyBWk4IHP2fnyiUHg5U%2B%2FV%2BtwhZ8AcfqOApC2taUIUOMXSGiOBH3BiIHM%2FSxO1IieIBv9ZWVftciuF1hRKtzR%2FL1OKtLUyMQ3P01Zbf0oOOpKUA7&X-Amz-Signature=953fbb130604b253a1a7bf51c40d2a64d542640e4a349fd928630054247bb630&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
