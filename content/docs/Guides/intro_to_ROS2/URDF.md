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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7MKFFFC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B7Axk6qb8GU%2FpwWPrOIuBs4WM8qks3bbGjjT4b5fT%2FwIhALQBiFJJRz2%2FokFgTbJHbWlDWfOyyqxi6ERcFSvzc303KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDGSE0her9qXhc4E8q3AOYb%2BYuxpuIFwyyiy0FEbWwX9%2FyTlMBtYIhiIYtduoKqh9lS5iXJXmaRQGsUPexjhShOd9SustN8RA9obE1JMQlqoZg%2BQ77iqECkFvq%2BTpPqfh%2F01Pm%2Bdtgp20SEVY0lOMhS0vM8btO3UDqvd0h4gPfrQyAsXC8Zd4alw7vOARkVtYW7PpUXRX5qDwFlb0d2DtQI0Ij5wKBQvCU762BrVoR4TYZFBReRDnE48NTi5K40ftkavW4kBUAPKqPcOPYy3KfzNGj7HSzSyM7uAGm7%2BLqRqkwnzsYiWx5CS37U9jt%2FZ0DzUF6UIO8PipaRwlLF8FSrRU%2BxKADn2k804FYAY8Te%2B33vutEmNBTjQmbWW63jTbT%2FSrVwQFaKCbRVZIS7fHpoUclYe5DmARe%2FP1MbQYSr9jkgALhXi0wgXRRWRw%2BDBBXSqHdKEFwUuge8qn5JHvxO5FpL8iywk9SzQTD5liN72cPL6LjHQ4SIWY8oTdWIQe4Wv%2BfQ%2FhmdyiHBASWAHJDmwOfd0PzIYxG56rXUsItIEe8egnTgAuEv%2FfmCOoHBFPes0LEZIZHdDvUdR4nRP2QIALgvsKY%2Bn7wdMSU91G95Xjs2jqcxmGB2scUE98Qnnbp0xa0cgV1UwYPgDD%2Bu4zABjqkAcyrWNB3IntqffHcug6uXP5Z7mkts9S3HYOyB%2Bt3Kxead5GbC87UI12tNJ5AanFsbjn87nBc8q6Sw2rC1w35G1LjYUOZuRk0vHKw6O7wPaHjb1z%2FPdJFDA9bfu%2FaSjGQs33NNBxo1PTD7GxqmVIJMpfskRzurS6Z6OebN%2FjwQeME8vPS0SbxeVVRIIOouAdfdm9C0O9t6GqdIwxhBYTcx5BfRB%2FZ&X-Amz-Signature=ba0f6dd1254f1f1053c9af319721c469ce81f821f56e1f0bb100dbbaa515980d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7MKFFFC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B7Axk6qb8GU%2FpwWPrOIuBs4WM8qks3bbGjjT4b5fT%2FwIhALQBiFJJRz2%2FokFgTbJHbWlDWfOyyqxi6ERcFSvzc303KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDGSE0her9qXhc4E8q3AOYb%2BYuxpuIFwyyiy0FEbWwX9%2FyTlMBtYIhiIYtduoKqh9lS5iXJXmaRQGsUPexjhShOd9SustN8RA9obE1JMQlqoZg%2BQ77iqECkFvq%2BTpPqfh%2F01Pm%2Bdtgp20SEVY0lOMhS0vM8btO3UDqvd0h4gPfrQyAsXC8Zd4alw7vOARkVtYW7PpUXRX5qDwFlb0d2DtQI0Ij5wKBQvCU762BrVoR4TYZFBReRDnE48NTi5K40ftkavW4kBUAPKqPcOPYy3KfzNGj7HSzSyM7uAGm7%2BLqRqkwnzsYiWx5CS37U9jt%2FZ0DzUF6UIO8PipaRwlLF8FSrRU%2BxKADn2k804FYAY8Te%2B33vutEmNBTjQmbWW63jTbT%2FSrVwQFaKCbRVZIS7fHpoUclYe5DmARe%2FP1MbQYSr9jkgALhXi0wgXRRWRw%2BDBBXSqHdKEFwUuge8qn5JHvxO5FpL8iywk9SzQTD5liN72cPL6LjHQ4SIWY8oTdWIQe4Wv%2BfQ%2FhmdyiHBASWAHJDmwOfd0PzIYxG56rXUsItIEe8egnTgAuEv%2FfmCOoHBFPes0LEZIZHdDvUdR4nRP2QIALgvsKY%2Bn7wdMSU91G95Xjs2jqcxmGB2scUE98Qnnbp0xa0cgV1UwYPgDD%2Bu4zABjqkAcyrWNB3IntqffHcug6uXP5Z7mkts9S3HYOyB%2Bt3Kxead5GbC87UI12tNJ5AanFsbjn87nBc8q6Sw2rC1w35G1LjYUOZuRk0vHKw6O7wPaHjb1z%2FPdJFDA9bfu%2FaSjGQs33NNBxo1PTD7GxqmVIJMpfskRzurS6Z6OebN%2FjwQeME8vPS0SbxeVVRIIOouAdfdm9C0O9t6GqdIwxhBYTcx5BfRB%2FZ&X-Amz-Signature=41d699fe000b8c85854c141996e33bb267a13392573f678650147974e7ad4d60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
