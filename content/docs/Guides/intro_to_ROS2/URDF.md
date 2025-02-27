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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5MHV63%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCGuAZdT0mU3quVmwvlV3Z6DZCqLhmlfRt%2BEvQUEcAElgIhANEnRtTzxnm9StIpE98cnFxgee0SsXQbsfXuL1wLlHAkKv8DCH8QABoMNjM3NDIzMTgzODA1IgyT6VFw0Un4NDqoATYq3AOV6zv%2Bdp8IS2%2FIA%2FYYUZ%2FJVIKAGt3bKQ3DAo0JwuvqHwphtddQzl0K0PMaTzofeoHtR7aaq%2Fym5Nu%2F0XPnIz%2BAdh4UxmsguX%2Fwtx%2FVRe5w8KqwKl3P8Z4c%2F0jdbBkISwPGwTfkqf4gI5LV8frTEN365zTzIJMrAEF0tZY%2FMlgEGvS8gCK8hkMLzXuHQA%2BAGRKmY69Ly%2FILY6Szp%2BpjfoibkpWeaNkcw6pTGDcWMdUz7fyD2PZB%2BKAfAWQA06HHjQo2j4DjQwNTXgtgY9sa9auVl%2BnuDsb27pI2J8sOxNts7cmQj8lG931546pm3%2FPOEI2lf7rTRBO2lUMrGuHH4yHfQ65ZeZ1zYQ3Or%2BkhlrU4%2FdnpNnDpmEtLP7Qz9da23R2inH5DaE8okIK1KI9k4JemIgiiMJAmUqbXpoiRQyMCZoxKaiZ7%2Fi9MC9F7F%2Fpwbi9JjvYzzY7%2BCBntzlAaCFQA25lHtAEK39469hYHAxZg%2FRHVPe2giSQfmQF079Djt6PU8YoO0m1lJ4RMmFmg3Fk7AYRB9E79nhdU3e12G5nSHM4CnXKL2ZuKA16dgTS5tzMYVQ%2B9C%2BHsxI6e8c%2Fy7K%2BMo3a1COwUyPNpymDDH1PI7T7BFUNJpX8TdSYOQDDdu4O%2BBjqkAQF01Kud7eUYWsTyh9HnjmjRC8OgcX%2BtQLKWal8DfqwPDnnsucny6voDP9ZWzECT2dcIUoqhbbBaz%2BSIRYGEsidjafl0C6bLitNFTvLkzcmt7PwhfHNYat8UtP4RZRdL%2BHvY5NM46SOQIuZ96uZcXJCUyHlfC6fwp%2FfmuSuImDidtU%2BI91NPeHeunvnGhJAx%2B%2F5arLJ2C8kmqkuQTqcttBE3kr0u&X-Amz-Signature=3e4f7f661c898d7de2422af13318c52085777c323c1eab3662207501b03a7421&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5MHV63%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCGuAZdT0mU3quVmwvlV3Z6DZCqLhmlfRt%2BEvQUEcAElgIhANEnRtTzxnm9StIpE98cnFxgee0SsXQbsfXuL1wLlHAkKv8DCH8QABoMNjM3NDIzMTgzODA1IgyT6VFw0Un4NDqoATYq3AOV6zv%2Bdp8IS2%2FIA%2FYYUZ%2FJVIKAGt3bKQ3DAo0JwuvqHwphtddQzl0K0PMaTzofeoHtR7aaq%2Fym5Nu%2F0XPnIz%2BAdh4UxmsguX%2Fwtx%2FVRe5w8KqwKl3P8Z4c%2F0jdbBkISwPGwTfkqf4gI5LV8frTEN365zTzIJMrAEF0tZY%2FMlgEGvS8gCK8hkMLzXuHQA%2BAGRKmY69Ly%2FILY6Szp%2BpjfoibkpWeaNkcw6pTGDcWMdUz7fyD2PZB%2BKAfAWQA06HHjQo2j4DjQwNTXgtgY9sa9auVl%2BnuDsb27pI2J8sOxNts7cmQj8lG931546pm3%2FPOEI2lf7rTRBO2lUMrGuHH4yHfQ65ZeZ1zYQ3Or%2BkhlrU4%2FdnpNnDpmEtLP7Qz9da23R2inH5DaE8okIK1KI9k4JemIgiiMJAmUqbXpoiRQyMCZoxKaiZ7%2Fi9MC9F7F%2Fpwbi9JjvYzzY7%2BCBntzlAaCFQA25lHtAEK39469hYHAxZg%2FRHVPe2giSQfmQF079Djt6PU8YoO0m1lJ4RMmFmg3Fk7AYRB9E79nhdU3e12G5nSHM4CnXKL2ZuKA16dgTS5tzMYVQ%2B9C%2BHsxI6e8c%2Fy7K%2BMo3a1COwUyPNpymDDH1PI7T7BFUNJpX8TdSYOQDDdu4O%2BBjqkAQF01Kud7eUYWsTyh9HnjmjRC8OgcX%2BtQLKWal8DfqwPDnnsucny6voDP9ZWzECT2dcIUoqhbbBaz%2BSIRYGEsidjafl0C6bLitNFTvLkzcmt7PwhfHNYat8UtP4RZRdL%2BHvY5NM46SOQIuZ96uZcXJCUyHlfC6fwp%2FfmuSuImDidtU%2BI91NPeHeunvnGhJAx%2B%2F5arLJ2C8kmqkuQTqcttBE3kr0u&X-Amz-Signature=c1ee00a8d28eda614ae710e1ce0820c35b3eb8e610b7bd2f6765857cdb57defa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
