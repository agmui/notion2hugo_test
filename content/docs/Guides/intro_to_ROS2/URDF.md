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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244S2MQV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAP3YG%2FRj9djdmBfuJSvfjXzfmUfEFlH9abRVqLP4OkeAiBDuX5tYy9jJ6jV3FaGH%2F0TNXYgUKWikuJ0g2K4kTvQBir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7ybRAeur9WrscUKcKtwD1kB7rEAP%2BHL0Dv4U9Hi0NX2Xf%2B7%2FxJY26M%2F0WWCSzMTohmdopQJqtLe7eap0wiKsPOLRB4Io35AfmaB3elizunvB5mV1VP%2FWLX7ap7hbay6VpzDH2OWB3kwjAICbcTOJEMxZWKJOyrKzMppR9yVN1i%2Fv6Sj1QJM9VEQuZMbJjRk54mPVB1RzHS0gtJXHs2zQDHxEiZWCJ%2F2HtHwXyAlylSVpzV5Uf6MSJ%2BsI4dgTZH4YNOGkA%2FjCUdWpJQyEu4ihhRquBGbCZFaB8w%2B0xPWYtF586pQKTBNVyMM5pDCwKQIuF1ZnXwb%2Belp%2B%2Bq8q264AEAtwug7gCdaijIzx5kD%2B5A9brT1EvaV8RYFzZTe4%2FJjGHklKZi0kfQJuD1mpQL2FLeY6claP6kcOS69mEBlJrDw3D8EIT%2B%2FWweuNh9JTdKzq5mXlXf75me0UbqnvnnI3MwMSsMHS3trZ2MfPssIiY%2BS7zlObt7EsbKpqWQsghfNaO8s8JeYosoFOWVvVKSnbU3K8zPBoCAOxn25sVHNt9Y4aZm9VdLcB8cuhz%2Bz58CzJMgvBs5NudOQUkQ%2FV%2BhtrThJHXMD9emFHHEmnpIrAeJQ9Tw2qsxYgPrML0eHRIPrnC4O9UqLXzXKgeIww8dqPvwY6pgFvgwHREeKwbNwBM%2FlhI%2F%2BQ4yyk6s9iXOCqDOqNG1TIdjndphsdTF9Eoj1ZbYQmek%2BPqh6KdiltoEmXf3yD8t4Tp2eHtVOcwlOucOPH0JdtLwZlAdajR7RX%2BGqAXLFvVnBu6RjBw3sgzXRacz1HCTGYozwgf4XOXjrfrm2yGmgENTXf6wb2sMy1wOgWDjo4KP3L48zkw%2F%2FtIzWWeOOyn3ZgHLmIuAVD&X-Amz-Signature=b7f51a85b01a67d52771ffc7e958a24f7c9dba6479b5a973a3f1ae75c4013647&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244S2MQV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAP3YG%2FRj9djdmBfuJSvfjXzfmUfEFlH9abRVqLP4OkeAiBDuX5tYy9jJ6jV3FaGH%2F0TNXYgUKWikuJ0g2K4kTvQBir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7ybRAeur9WrscUKcKtwD1kB7rEAP%2BHL0Dv4U9Hi0NX2Xf%2B7%2FxJY26M%2F0WWCSzMTohmdopQJqtLe7eap0wiKsPOLRB4Io35AfmaB3elizunvB5mV1VP%2FWLX7ap7hbay6VpzDH2OWB3kwjAICbcTOJEMxZWKJOyrKzMppR9yVN1i%2Fv6Sj1QJM9VEQuZMbJjRk54mPVB1RzHS0gtJXHs2zQDHxEiZWCJ%2F2HtHwXyAlylSVpzV5Uf6MSJ%2BsI4dgTZH4YNOGkA%2FjCUdWpJQyEu4ihhRquBGbCZFaB8w%2B0xPWYtF586pQKTBNVyMM5pDCwKQIuF1ZnXwb%2Belp%2B%2Bq8q264AEAtwug7gCdaijIzx5kD%2B5A9brT1EvaV8RYFzZTe4%2FJjGHklKZi0kfQJuD1mpQL2FLeY6claP6kcOS69mEBlJrDw3D8EIT%2B%2FWweuNh9JTdKzq5mXlXf75me0UbqnvnnI3MwMSsMHS3trZ2MfPssIiY%2BS7zlObt7EsbKpqWQsghfNaO8s8JeYosoFOWVvVKSnbU3K8zPBoCAOxn25sVHNt9Y4aZm9VdLcB8cuhz%2Bz58CzJMgvBs5NudOQUkQ%2FV%2BhtrThJHXMD9emFHHEmnpIrAeJQ9Tw2qsxYgPrML0eHRIPrnC4O9UqLXzXKgeIww8dqPvwY6pgFvgwHREeKwbNwBM%2FlhI%2F%2BQ4yyk6s9iXOCqDOqNG1TIdjndphsdTF9Eoj1ZbYQmek%2BPqh6KdiltoEmXf3yD8t4Tp2eHtVOcwlOucOPH0JdtLwZlAdajR7RX%2BGqAXLFvVnBu6RjBw3sgzXRacz1HCTGYozwgf4XOXjrfrm2yGmgENTXf6wb2sMy1wOgWDjo4KP3L48zkw%2F%2FtIzWWeOOyn3ZgHLmIuAVD&X-Amz-Signature=490955f1082bb65637bd45ab1e88f8ab3ceaec9dbef6a5c3256426aff3da9cee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
