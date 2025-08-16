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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NPQC67I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCWRDewixrphqvRqEOeq6i0xBXtSFTO53dHemoXLQ4LIgIhALqMOCF53lCai5jdTFaBMLfNQ0KBRnUSPh7zfTrVoVbSKv8DCGwQABoMNjM3NDIzMTgzODA1IgzRqaemnhxIsOLoFxEq3ANMAtwXO2xG4GzSzE3hD8jcfJQkxqqPKZg6FFr7kz%2FuPI8l2vWKO1fk45LXEpGHf%2F9IlP4nB5UpscOKo%2BnAQ3PK9d49hHmkr8Ko0N89dg8t9TRYxEwFEtw3w%2BdULzeCW0uU3l8dHA9%2F4nSCB%2BJLJd7ojUHpGxHJH87TIyd4sx7g5FekPatSOQZHi1uBgNeNOy245XMrPy2xwd627T9lXW7GcIpZOdTUNzIqas8MXvMeDzxsvK4zpd%2BFz8IX6gbvVcASlwiw9Qfq7ThbFsUePE9ykAqvyBUDfb%2FqqUjAwmKVbS0FoAJ3u%2BhvHO3vhTIJ4lKMMcbLKPdjNx%2FrQJeR3ntaXEcUSmaNL%2FI3HGD9fmgJjGs1GW%2BQTiOv%2FYs%2B2gn2Th8q%2F2cnqqrC4p2JoL6RO5KvsU5fxf9914lchvHuCE3rmI9A3X137SKXMakNMXDIrUdk6YS7EuA98a8N33Wj4L6Rtu0f2JWUBPWcYGUG7Dnma8n0TLbj18EbGwPxqbpNF5wPYr2TYPfYN4gQ%2FfN4iTgDQK635UJhj%2FE1J4O8GaBT1%2FMRm%2BzTB%2F2s1C%2F2Thcb87YH%2F6%2BKk071ASMGpgcIRcjH48U%2BtBJNCGkqmPWNd95tpZ%2B5e9C7mjGaOlBz2TCo5P%2FEBjqkAZoJ9hXypnYojfvllAF0OUMpS0Uj3wo2NlWgEMqd3affAyO2FZG5NcFmNOP1m36DjhxXwx9kH9XBBMVO6UWA8dbKi1ErTK3ReCn0be1bwPFQR7utW01dj60uq3mc39zMK7627dPO4y5dI%2FHWjPJqmDLs2yLn1ZMot4tHdLz5UfqJs2Mg33NHckAmtu%2BRZyhIwTnh%2BgfSPQuups5QvnRZ%2BwdfxWUV&X-Amz-Signature=ee8ac8150f00549f011796b3a8940ca638ab42721ca3cdd8aa23fd7636c39e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NPQC67I%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCWRDewixrphqvRqEOeq6i0xBXtSFTO53dHemoXLQ4LIgIhALqMOCF53lCai5jdTFaBMLfNQ0KBRnUSPh7zfTrVoVbSKv8DCGwQABoMNjM3NDIzMTgzODA1IgzRqaemnhxIsOLoFxEq3ANMAtwXO2xG4GzSzE3hD8jcfJQkxqqPKZg6FFr7kz%2FuPI8l2vWKO1fk45LXEpGHf%2F9IlP4nB5UpscOKo%2BnAQ3PK9d49hHmkr8Ko0N89dg8t9TRYxEwFEtw3w%2BdULzeCW0uU3l8dHA9%2F4nSCB%2BJLJd7ojUHpGxHJH87TIyd4sx7g5FekPatSOQZHi1uBgNeNOy245XMrPy2xwd627T9lXW7GcIpZOdTUNzIqas8MXvMeDzxsvK4zpd%2BFz8IX6gbvVcASlwiw9Qfq7ThbFsUePE9ykAqvyBUDfb%2FqqUjAwmKVbS0FoAJ3u%2BhvHO3vhTIJ4lKMMcbLKPdjNx%2FrQJeR3ntaXEcUSmaNL%2FI3HGD9fmgJjGs1GW%2BQTiOv%2FYs%2B2gn2Th8q%2F2cnqqrC4p2JoL6RO5KvsU5fxf9914lchvHuCE3rmI9A3X137SKXMakNMXDIrUdk6YS7EuA98a8N33Wj4L6Rtu0f2JWUBPWcYGUG7Dnma8n0TLbj18EbGwPxqbpNF5wPYr2TYPfYN4gQ%2FfN4iTgDQK635UJhj%2FE1J4O8GaBT1%2FMRm%2BzTB%2F2s1C%2F2Thcb87YH%2F6%2BKk071ASMGpgcIRcjH48U%2BtBJNCGkqmPWNd95tpZ%2B5e9C7mjGaOlBz2TCo5P%2FEBjqkAZoJ9hXypnYojfvllAF0OUMpS0Uj3wo2NlWgEMqd3affAyO2FZG5NcFmNOP1m36DjhxXwx9kH9XBBMVO6UWA8dbKi1ErTK3ReCn0be1bwPFQR7utW01dj60uq3mc39zMK7627dPO4y5dI%2FHWjPJqmDLs2yLn1ZMot4tHdLz5UfqJs2Mg33NHckAmtu%2BRZyhIwTnh%2BgfSPQuups5QvnRZ%2BwdfxWUV&X-Amz-Signature=dbbc126e9dfdb34100a740938ea11c7c2e2d68c8c5803e4e2ebefa69ea6e92f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
