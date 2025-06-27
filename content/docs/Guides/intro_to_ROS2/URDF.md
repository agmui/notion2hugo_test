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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKL3GLQX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCrVL1Ti1mVG4U7nAN6PL6qAIjxTK5n%2BnkNz6rHzVbw1QIhAP3K3w8Yh4UDgtxusIaFmkVcEBws9gOHIX1ct80JptH6Kv8DCGwQABoMNjM3NDIzMTgzODA1Igyol97zOoWaxcktQeEq3AOSrzQVCRXsPFPjCO88yEOYmDYBryrHOTECHuHdvid8l20jzITfr1O13UmKaJxLT4ySbq%2FotmByU5LEbtnOfxGTf6LZL1MsjaHhronOjAY7jLROiUv6VvM3yX9zFBZbwOC9DzNdWuRyfMs%2Bn56Rrd0RA0iNmquMmVS7CZKIYlzHwf7ionB%2F1%2FFhZAQkWy7bod3yu1EVNR4npDPr0h6rB8XHaBOZJWvamlF8Dg8rlJYl6mKUy1WQ0yZKxUFGqOsavL0SbxuS90Bvb4zL2tm%2FxEF7W0jhgDPohUqL9ZrtgfuyNGWRccIa9VOrr4mgMT5ZlZMG3qWpLTZ5mROmxbeOPYgMqdIDMTceC8mGtQh0VkuFyYZJHfGJBsOCLLP6l1ZGg4PLKCpWZd1124iyjNU2g5hX0Cdjz11sNFLezqmXBmi%2B3omsWBuQb3iwtIw%2FrffOAXKmAKpsZaIkihYjEEUJDGbsU7tkdPLZJ3bhZ8ptJCqAbxyiLjwWmEjGbpNK%2Bnc6b812hT5rB%2F41rHm9fRYkTflFJBCkb2bn6eFLQlgeYDGXCu8HiTjG0xd6yShTYsMfD90UjkZXNVFXJoARMopDkvYf5OFbO1aVo4OJZRWHjPikZFrzITzNwOPXwIgtnDDZn%2FjCBjqkAWI%2F8F8USqhlYT%2F1TeLZpsWTTGrzLpNveUDc9XOyHukacwuLwMz4RSF1r%2BwhKylaOc1eoQMnJq4v7NhZs8JPzb3VKcTW47TdYTkgrGg5RigLoUE7cHTNrhEFz8Rkkkb6aEBnHJZQ1eC8ZsB%2BtrtvyN5zA7GNwT6iWyLumnxjdU1ISulmmjnW21UFnU6wZNop4l1QCvChhx3TjqGxfqgXpu%2BOsyuh&X-Amz-Signature=a738019d06f023afc80c8291806173c499b85b1fbe7a3959b5e4f3ac22372a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKL3GLQX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCrVL1Ti1mVG4U7nAN6PL6qAIjxTK5n%2BnkNz6rHzVbw1QIhAP3K3w8Yh4UDgtxusIaFmkVcEBws9gOHIX1ct80JptH6Kv8DCGwQABoMNjM3NDIzMTgzODA1Igyol97zOoWaxcktQeEq3AOSrzQVCRXsPFPjCO88yEOYmDYBryrHOTECHuHdvid8l20jzITfr1O13UmKaJxLT4ySbq%2FotmByU5LEbtnOfxGTf6LZL1MsjaHhronOjAY7jLROiUv6VvM3yX9zFBZbwOC9DzNdWuRyfMs%2Bn56Rrd0RA0iNmquMmVS7CZKIYlzHwf7ionB%2F1%2FFhZAQkWy7bod3yu1EVNR4npDPr0h6rB8XHaBOZJWvamlF8Dg8rlJYl6mKUy1WQ0yZKxUFGqOsavL0SbxuS90Bvb4zL2tm%2FxEF7W0jhgDPohUqL9ZrtgfuyNGWRccIa9VOrr4mgMT5ZlZMG3qWpLTZ5mROmxbeOPYgMqdIDMTceC8mGtQh0VkuFyYZJHfGJBsOCLLP6l1ZGg4PLKCpWZd1124iyjNU2g5hX0Cdjz11sNFLezqmXBmi%2B3omsWBuQb3iwtIw%2FrffOAXKmAKpsZaIkihYjEEUJDGbsU7tkdPLZJ3bhZ8ptJCqAbxyiLjwWmEjGbpNK%2Bnc6b812hT5rB%2F41rHm9fRYkTflFJBCkb2bn6eFLQlgeYDGXCu8HiTjG0xd6yShTYsMfD90UjkZXNVFXJoARMopDkvYf5OFbO1aVo4OJZRWHjPikZFrzITzNwOPXwIgtnDDZn%2FjCBjqkAWI%2F8F8USqhlYT%2F1TeLZpsWTTGrzLpNveUDc9XOyHukacwuLwMz4RSF1r%2BwhKylaOc1eoQMnJq4v7NhZs8JPzb3VKcTW47TdYTkgrGg5RigLoUE7cHTNrhEFz8Rkkkb6aEBnHJZQ1eC8ZsB%2BtrtvyN5zA7GNwT6iWyLumnxjdU1ISulmmjnW21UFnU6wZNop4l1QCvChhx3TjqGxfqgXpu%2BOsyuh&X-Amz-Signature=776415b8dff5ec631d488adc610c04aa1eb2aafc2b3612ba4044652aaa029415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
