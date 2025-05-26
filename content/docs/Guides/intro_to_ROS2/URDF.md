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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAW524OF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDF0eSj82zGf4PyRmcoH82wZPoTGooKBc8Ifv0l0ZoBdwIgV5zje0DKzAu35X7u69XOg4nwLtYvFMDPe6QmO806knUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOcLCrfL13MGCtYjbCrcA9J6c8S1NUCeK1vqDG3mwt6jZ81WXLfJ2G1neoiNiEcTjKd4iYr0HQYpNjPzXZFzjzH04%2BYRqz9JovhtfeK%2B5OGYegZ0rkszcf%2B7i1AncdQEOZ%2BgOfm4cNVB4pmOjBfZu9NPpdEosQm%2Bpef2y7ZbniaVkLvRaLn9C3wjBUcA1I9EiF1PHvs2PXnNgQDnrZ8enbOigUtCVhRNRdImW1VZmXVT93HFGiVkdjwK1yPaKzRzL5DSIdhJfyiQXodJmwN9MqP7mNEezHEaw6pU2fypAz8A9qRxelrPCJDqnd6gTiPr9a5Xj3y6iEZdSAb3nlIJCXHV%2Bz129dBZwefZPQYhz4Sey7%2BaM1AnHla%2BH6uhupCoAOFyFGMVgLm35BYTqtMqoU0zH3VsDEzC1%2BZOMaIea7k3LeBLbVZIkxmZ6eaZju0VWVkw75CnZH17MDo4nTKDeeloUYBWSYvv8twHa99qilbd0vPHiWvb4EvxzkwLxpRVhmaULDqGguKpEkLpyzpM%2FBHaGZyq7g67Phr2Oir5tXWRhbbBLq82jkaV9d5NdKBsc7fpcYhuUsh58954cKNdfqgsxngv6yA6AQByhjQUYtSnHXDvkS0%2FoSH49fAm41ysj%2Fg6EKsGoDONK60iMN%2Bez8EGOqUBRZBQrS3qFUTihRoqXG%2BLQxjOky3aHOcRRtCmiG6Un4z1lGHfcdGknDQgBO0ooluWA8Dp9Nc60PlUoA0ShHSaUj90rOHdFOh0aTqtqQZSWJAx71u7eiY30wGEt%2FQ0Koir%2Bo5YEvinskHkkDafH2SsIQHN%2BTnH%2BSMxfAtW4isdp84qvkPd3ToKd2ivExYxeMgZFqyBA2QUJG2IglIm%2BT6ZY0TogfLI&X-Amz-Signature=692ea5818929390dd419667ad01b4448e35c77177e1a45b8aee357c27ac168b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAW524OF%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDF0eSj82zGf4PyRmcoH82wZPoTGooKBc8Ifv0l0ZoBdwIgV5zje0DKzAu35X7u69XOg4nwLtYvFMDPe6QmO806knUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOcLCrfL13MGCtYjbCrcA9J6c8S1NUCeK1vqDG3mwt6jZ81WXLfJ2G1neoiNiEcTjKd4iYr0HQYpNjPzXZFzjzH04%2BYRqz9JovhtfeK%2B5OGYegZ0rkszcf%2B7i1AncdQEOZ%2BgOfm4cNVB4pmOjBfZu9NPpdEosQm%2Bpef2y7ZbniaVkLvRaLn9C3wjBUcA1I9EiF1PHvs2PXnNgQDnrZ8enbOigUtCVhRNRdImW1VZmXVT93HFGiVkdjwK1yPaKzRzL5DSIdhJfyiQXodJmwN9MqP7mNEezHEaw6pU2fypAz8A9qRxelrPCJDqnd6gTiPr9a5Xj3y6iEZdSAb3nlIJCXHV%2Bz129dBZwefZPQYhz4Sey7%2BaM1AnHla%2BH6uhupCoAOFyFGMVgLm35BYTqtMqoU0zH3VsDEzC1%2BZOMaIea7k3LeBLbVZIkxmZ6eaZju0VWVkw75CnZH17MDo4nTKDeeloUYBWSYvv8twHa99qilbd0vPHiWvb4EvxzkwLxpRVhmaULDqGguKpEkLpyzpM%2FBHaGZyq7g67Phr2Oir5tXWRhbbBLq82jkaV9d5NdKBsc7fpcYhuUsh58954cKNdfqgsxngv6yA6AQByhjQUYtSnHXDvkS0%2FoSH49fAm41ysj%2Fg6EKsGoDONK60iMN%2Bez8EGOqUBRZBQrS3qFUTihRoqXG%2BLQxjOky3aHOcRRtCmiG6Un4z1lGHfcdGknDQgBO0ooluWA8Dp9Nc60PlUoA0ShHSaUj90rOHdFOh0aTqtqQZSWJAx71u7eiY30wGEt%2FQ0Koir%2Bo5YEvinskHkkDafH2SsIQHN%2BTnH%2BSMxfAtW4isdp84qvkPd3ToKd2ivExYxeMgZFqyBA2QUJG2IglIm%2BT6ZY0TogfLI&X-Amz-Signature=cfbfed31deb781cc8ef6fa2a81fce901d13da493fcbe78f272965f87c8167747&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
