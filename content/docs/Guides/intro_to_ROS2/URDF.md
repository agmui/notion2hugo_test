---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBNWA74%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDf6jWOdf1Y%2BbLZ%2BqATEgSSGpIz%2FLK54oIJrbSQ29GhJgIhALPerHATASqspB1RkSyqcNeOLk2C5sjMSDxe01UtNUWCKv8DCH0QABoMNjM3NDIzMTgzODA1IgxRZ22nD6sMkHM1xR4q3AOPO%2Fu3mdrjcxdeMGW5M%2FN%2F7A9VYt0ksYJfykZBAp4EDfuTE%2Bkg2%2F5c5a6RyHzvqa4xyWcpjkqV%2FczshDuRJ%2Bd3XhRG3apJo20Jn%2FGuA0s3ZHBGn5glaVBqRYhoJZW3oorKukPK7gFn2arL7ztAYzY4EIaT6gakg5qzx0P1HyYv7SlmD71nHAYh%2Fdqom%2BYrXRM7STjNiVXJV2rpaC2TeyifV%2FIE2wBqac3qKloQDXpkJ%2B97%2F5RLIOtU4sIEs%2BgTonBJ3nIZ6QsJNewDGnmI99zhhUIRbVfQ37RX07lOeQ%2BgLd0OmtxVBEbPBmS8izUFFGDA9aFGaUvEKVjyLhp9vFzj%2FJxHqtqv9%2F6q1f11rOyeISt%2Fowf8Lj3VB%2BQVn0Iv7yRO1YvpVXlyEpbdZVt6IFA2AgdQ7o7ymblfzaaR19AtJ6Lf2rIS31HmRFsgogqrs8ezZHMmBMwKg65jj9nvKq2gl1Ki7iVnYXKUihCTLMAjd8ASlNMjUN6k6iKOZErYPVcQqEfg0G83fcrae7j57LZqtvyBqPBrgPee5qcoJkLFJ1MwSZryef0LS6B%2B22A1Ul99wZS7iPJdTvmFR3n6ncjniSBIX77TeqeLGAgodeqQ169HYbyRDi8m8EETzjDM6s7EBjqkAXCSQe5DkGfQMl3SjIhubkFQqiqpicfyNtnbQx%2BEKI6NKjL9SIEOG4or2dmx8VEK8OhONg9BrDY2mWFC08OCReQIKaeGplL%2BWPz8yJ7BKpbl9KGq8Bi7xtzgtIdoM6EwSIMgz9tRJuYA1joe%2F1BE8LzzaxWNS96o6drQnSmvTdt6mjmwbeYW1fcRcUZLNr9bZZIdrWKDsKLRTxl73zdT8QgCBcL3&X-Amz-Signature=1e106af56ea3a2f5da8d2e9448fe08b98dc50715c4d7c4fb99bbab70e62c790d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBNWA74%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDf6jWOdf1Y%2BbLZ%2BqATEgSSGpIz%2FLK54oIJrbSQ29GhJgIhALPerHATASqspB1RkSyqcNeOLk2C5sjMSDxe01UtNUWCKv8DCH0QABoMNjM3NDIzMTgzODA1IgxRZ22nD6sMkHM1xR4q3AOPO%2Fu3mdrjcxdeMGW5M%2FN%2F7A9VYt0ksYJfykZBAp4EDfuTE%2Bkg2%2F5c5a6RyHzvqa4xyWcpjkqV%2FczshDuRJ%2Bd3XhRG3apJo20Jn%2FGuA0s3ZHBGn5glaVBqRYhoJZW3oorKukPK7gFn2arL7ztAYzY4EIaT6gakg5qzx0P1HyYv7SlmD71nHAYh%2Fdqom%2BYrXRM7STjNiVXJV2rpaC2TeyifV%2FIE2wBqac3qKloQDXpkJ%2B97%2F5RLIOtU4sIEs%2BgTonBJ3nIZ6QsJNewDGnmI99zhhUIRbVfQ37RX07lOeQ%2BgLd0OmtxVBEbPBmS8izUFFGDA9aFGaUvEKVjyLhp9vFzj%2FJxHqtqv9%2F6q1f11rOyeISt%2Fowf8Lj3VB%2BQVn0Iv7yRO1YvpVXlyEpbdZVt6IFA2AgdQ7o7ymblfzaaR19AtJ6Lf2rIS31HmRFsgogqrs8ezZHMmBMwKg65jj9nvKq2gl1Ki7iVnYXKUihCTLMAjd8ASlNMjUN6k6iKOZErYPVcQqEfg0G83fcrae7j57LZqtvyBqPBrgPee5qcoJkLFJ1MwSZryef0LS6B%2B22A1Ul99wZS7iPJdTvmFR3n6ncjniSBIX77TeqeLGAgodeqQ169HYbyRDi8m8EETzjDM6s7EBjqkAXCSQe5DkGfQMl3SjIhubkFQqiqpicfyNtnbQx%2BEKI6NKjL9SIEOG4or2dmx8VEK8OhONg9BrDY2mWFC08OCReQIKaeGplL%2BWPz8yJ7BKpbl9KGq8Bi7xtzgtIdoM6EwSIMgz9tRJuYA1joe%2F1BE8LzzaxWNS96o6drQnSmvTdt6mjmwbeYW1fcRcUZLNr9bZZIdrWKDsKLRTxl73zdT8QgCBcL3&X-Amz-Signature=633775d4ef5c497c08315b1a75d8d5d2c335302edf224fa013ca67e33a6fc5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
