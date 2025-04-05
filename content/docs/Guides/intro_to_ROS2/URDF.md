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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGYY77M%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEElAqAX65NCfxPhQgwZPFgu5QtQnNaja1sMgr%2F%2B4rNWAiEAxk7gH8lCUPQ%2FEbiCp%2F4obHQ5U5khAkrghL1riCQNan4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPVZBkRt%2BIqWG0QU4yrcA5lx5hl8vLo6emrh9RVXgxriyNpKilIgsapoMq1T4K7jLxjPNM0qheNaxTtIgOicVprk8QuMrewozumNyJddGanobZsBtXpZ9LHuowfJrV1LkbMVkuTWkgm6LjYJ11AOJ8shbfvW7HEs5orTLze%2FsoLEIc7HsdgSdWpFxctR6Z8WwPPebBAinJHbf7C%2BvI4YSHDKPVUJAgcCfxOx%2FKkg7kDYXqpHkOD5vBmqHfc9C8kWUBohvAtryax%2FrlSStZZUnRgBKTlKpQ4iWzFYURHR11mq9BQCQVCp7Fe%2BrwPIG8Jvs8KGm%2BymQiboSE1PcnUpb4BQnIdPSIRsarTOKbjHPXbK%2BNzXWKq9040plXpbQijAS%2BvO6RAjD6bzQUH%2BA12d%2FqF3QgptKrtFrhdM0BEVjtqwoo3cNKO5A4%2BQtdb6PAvDKAeN6qjaIV9bCrEgyYXKDCNVmNO5Vw0NRMLG7pBjOZbf4jMe4lWAjizg7mnOJBBqvCUb25q7YJIsU8KK%2BfEsWVWAzodqsV%2FrN%2BMu%2BPMnNGmPmOFzQlebnY2la0I1X%2FfLYKi%2F1KsMAwZLcv0f1M0L6zZZZ7l6w2efo4emn%2FE1gW%2Bn3AUGYE%2BANBjG98DUIxqc7R0TK0MJlOjBZZkqMOXDxr8GOqUBgh6jbE4b%2F124%2B6H3K9R55ie7TPI7Mk1Ixx3tUZqnXtv8m5rhoFFicpfVSKe9s%2FmFB4l%2FKyqJU6rVTBbiOZOhy0jvkrXBGyiWK%2B%2ByCvYwQm8HsAe8f8MT5%2F6UOHbdisxPRTR6S6gEyOYhNcMjBfFO4TDmHXQtZgrkhGnryfrWpbQle3Z9Jbelrs7zLb8ur8%2FMQxHKEBjk7Y4Dg6j1ntBYteDCYqph&X-Amz-Signature=2357e31c10cc636597dccd3ca0462ebfce79d72b4a1ed680a5d4b528d4e9fa5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGYY77M%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEElAqAX65NCfxPhQgwZPFgu5QtQnNaja1sMgr%2F%2B4rNWAiEAxk7gH8lCUPQ%2FEbiCp%2F4obHQ5U5khAkrghL1riCQNan4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPVZBkRt%2BIqWG0QU4yrcA5lx5hl8vLo6emrh9RVXgxriyNpKilIgsapoMq1T4K7jLxjPNM0qheNaxTtIgOicVprk8QuMrewozumNyJddGanobZsBtXpZ9LHuowfJrV1LkbMVkuTWkgm6LjYJ11AOJ8shbfvW7HEs5orTLze%2FsoLEIc7HsdgSdWpFxctR6Z8WwPPebBAinJHbf7C%2BvI4YSHDKPVUJAgcCfxOx%2FKkg7kDYXqpHkOD5vBmqHfc9C8kWUBohvAtryax%2FrlSStZZUnRgBKTlKpQ4iWzFYURHR11mq9BQCQVCp7Fe%2BrwPIG8Jvs8KGm%2BymQiboSE1PcnUpb4BQnIdPSIRsarTOKbjHPXbK%2BNzXWKq9040plXpbQijAS%2BvO6RAjD6bzQUH%2BA12d%2FqF3QgptKrtFrhdM0BEVjtqwoo3cNKO5A4%2BQtdb6PAvDKAeN6qjaIV9bCrEgyYXKDCNVmNO5Vw0NRMLG7pBjOZbf4jMe4lWAjizg7mnOJBBqvCUb25q7YJIsU8KK%2BfEsWVWAzodqsV%2FrN%2BMu%2BPMnNGmPmOFzQlebnY2la0I1X%2FfLYKi%2F1KsMAwZLcv0f1M0L6zZZZ7l6w2efo4emn%2FE1gW%2Bn3AUGYE%2BANBjG98DUIxqc7R0TK0MJlOjBZZkqMOXDxr8GOqUBgh6jbE4b%2F124%2B6H3K9R55ie7TPI7Mk1Ixx3tUZqnXtv8m5rhoFFicpfVSKe9s%2FmFB4l%2FKyqJU6rVTBbiOZOhy0jvkrXBGyiWK%2B%2ByCvYwQm8HsAe8f8MT5%2F6UOHbdisxPRTR6S6gEyOYhNcMjBfFO4TDmHXQtZgrkhGnryfrWpbQle3Z9Jbelrs7zLb8ur8%2FMQxHKEBjk7Y4Dg6j1ntBYteDCYqph&X-Amz-Signature=fcaa879ea62a09e85a3a2b7c942946ab9902a88a463ecdaf186c65450fb7c187&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
