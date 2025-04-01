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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2TM3XB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDl%2BE7LGs6OVPjrU8WXTmY9FnnAmzIecrjKnV5UCLeaBAiBCkUXxbZyvXTHCMOn0L4tiGG09rJgDrqVn5UHbtBQfLiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FuiV3pCK8FDeyK18KtwDuVs%2FG%2BBvJtM5hddgFsFdjtSwxOAp3SujuPSZKt9rhNWiRQ2pcHTbv1UsZKwl3f0ycRlBX9dbKOKS3OmuvW7yaGwPJccUdEPqjll9fXUtLRB3y9ItOodslvHukkPuqgSMRl%2B1muIt2mpU9PldqUDPXrVByQFdK1n%2F%2F96Q22qqi4zT4kfXKsosYNoNRqE6JU8KcQi3JeACAMjqrbMX8Zr6wkodV0CcE8rYJImhET8yUxK%2FWfoEzLX9%2BKT1KPzAQRBXjO36G7nXrC2jlwipnlE9LYm2OyqHKs4M60mLCbs6EF5sBJi%2FKskPkhcezcqhjqBcP4FeAhfr0yeLQIr90hMTcBjUTKiGwYCIMcxUy8OhFDDD1TCm2kgkSesw%2FYh25JNQbptnJxMxs0jnsAQPWtq5MX7Yim2T%2BXYz2jJC8iYadtUhDWJuVBHJ8hywSBoxS4XpABqwR0M2bMMkkvgVhwlf76o%2Bgj1oHFV%2B0lyNeFms4p%2F0IBiVrfMTEY8ahX%2B3DSoXa7LprR0YhOHJA7ucUVuR7U%2FROe0sKrPVChx3KVf7m3FtqWEsduzC%2FWy3cSahXpVz%2FtIswHy9i9XjYG9MWxkhPftJ8OzZDRpHf9%2FTG2ATiuTJOLSkz0c7H4TwiXsw36StvwY6pgGfTuQINKO5jcWuQtxnV6dT%2B3tILy99d%2B%2ByKt%2BCtGZy1%2BmcjtpkGs5PZ3KRCgiGNz6UAO3Q7HIOJVg%2BrzYYIlaIyqWEbC7unkPtaZQhlAPow084lwjb8dqI16fCS0hqPUgOni7OTL09GP0bquhVFY91JoEbMFd0TZyeQxrafoS%2BadWhvZA5OGOUM0mh416mSK2YiyWB%2FRyuOR7lpah5qmrKYBhxJV4T&X-Amz-Signature=bb8ca990916dfbffa733cb19ea08fa38431d545323deb2616837e326d1fb4d23&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2TM3XB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDl%2BE7LGs6OVPjrU8WXTmY9FnnAmzIecrjKnV5UCLeaBAiBCkUXxbZyvXTHCMOn0L4tiGG09rJgDrqVn5UHbtBQfLiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FuiV3pCK8FDeyK18KtwDuVs%2FG%2BBvJtM5hddgFsFdjtSwxOAp3SujuPSZKt9rhNWiRQ2pcHTbv1UsZKwl3f0ycRlBX9dbKOKS3OmuvW7yaGwPJccUdEPqjll9fXUtLRB3y9ItOodslvHukkPuqgSMRl%2B1muIt2mpU9PldqUDPXrVByQFdK1n%2F%2F96Q22qqi4zT4kfXKsosYNoNRqE6JU8KcQi3JeACAMjqrbMX8Zr6wkodV0CcE8rYJImhET8yUxK%2FWfoEzLX9%2BKT1KPzAQRBXjO36G7nXrC2jlwipnlE9LYm2OyqHKs4M60mLCbs6EF5sBJi%2FKskPkhcezcqhjqBcP4FeAhfr0yeLQIr90hMTcBjUTKiGwYCIMcxUy8OhFDDD1TCm2kgkSesw%2FYh25JNQbptnJxMxs0jnsAQPWtq5MX7Yim2T%2BXYz2jJC8iYadtUhDWJuVBHJ8hywSBoxS4XpABqwR0M2bMMkkvgVhwlf76o%2Bgj1oHFV%2B0lyNeFms4p%2F0IBiVrfMTEY8ahX%2B3DSoXa7LprR0YhOHJA7ucUVuR7U%2FROe0sKrPVChx3KVf7m3FtqWEsduzC%2FWy3cSahXpVz%2FtIswHy9i9XjYG9MWxkhPftJ8OzZDRpHf9%2FTG2ATiuTJOLSkz0c7H4TwiXsw36StvwY6pgGfTuQINKO5jcWuQtxnV6dT%2B3tILy99d%2B%2ByKt%2BCtGZy1%2BmcjtpkGs5PZ3KRCgiGNz6UAO3Q7HIOJVg%2BrzYYIlaIyqWEbC7unkPtaZQhlAPow084lwjb8dqI16fCS0hqPUgOni7OTL09GP0bquhVFY91JoEbMFd0TZyeQxrafoS%2BadWhvZA5OGOUM0mh416mSK2YiyWB%2FRyuOR7lpah5qmrKYBhxJV4T&X-Amz-Signature=f82f1c9dcb513d54637f1e0bc10671ac83b5cd9cdf7dd17d2fa5e4cd4ae29235&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
