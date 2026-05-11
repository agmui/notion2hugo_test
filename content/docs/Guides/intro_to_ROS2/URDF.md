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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZJXXNA4%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID7P93SJHGp7QTJa7jUlDgZb6KnW6BUeiKREUcSRfn77AiEA9JBhpVGzf77ImO7PY4W4QE1yN4p%2FuMKUInWxxHFM8JAq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDLRf7pGtyzXOm%2BeSTSrcA5UTcL8I64RzVo7qw6%2FEb%2FtkrlksX4VdO90i13JeZTT%2FIklik5CZ9njq0WHYf6c9QXk9UcvfV1P4kTsA3R9k%2FskYHMq3GwfFFGHc9hUbFxKqH882OyxSO0pj%2B8hV7Kr09Ez1Xrgj4uz7zxtQ5ICBs3zRBgyer1d4r5G%2Fd8o%2Fb0neixayRc53cRJf03Z6XolWRwIwPxUqcF3JfTCjJIdsgD2xG8MqdpYeN865H0BVpxJfy4ZQP0L31eZISj5f9liPKlxqw%2Bl4kTx6EEirNumAauDVTlxaUOKby4PBmzMvq0GrofRvgy9FFWWlr7jI3J1BMRstIRgngf1iFe8gZb2XqqKQaAIGkWAB%2B%2BLYrIcG%2BqMjL9V4hgIGA3PU%2BMB6dZZBmshg1tkWuaL1n2zVuEM75eLiIAw9k8qiEnYxy2YCvwQsyA8PYbxrZLnAaKS6%2Fto6inuaVRgoqpwfKkGZiHCj9NL8QpZIyCOunKzj8oQucDzZNCR5KFSb8cl6DL3BIu0jhFRH6cJzYrE8qhzD38UFB5o5caGRBQfoq66NATcKhhkdrZ2zCksQZ0mCF9ouhR%2FYLjUrqGZdonyxjmOxewoZr8Cuf14tJr4ZdxlRn6SeFfkMGl0e63vH2lE5J0oJMK%2BDhdAGOqUBmVbw5MJsqzWkSA89%2B%2B6iV%2FDoxGx8u9EVHKDo7JzylpJkqYVYlkOo925mDnuXL%2BFhzg01Owi9Zte07OPgZx5wzxcrwOhy%2FtW9PDmMTIDlnq0yL%2BAgrK%2BmYDMDc5dsNiDUhlc2NTwdEKdvAyxvMLkNdnGyHyeyW3ys09yg9jEUDZIx7ygxeIfIlA2fgpruWQrRc76dnU6khgxbSVS3njEj2K9XJ5W8&X-Amz-Signature=ea175f0b9148bed79febe7378e747f2e74a6cbf62d5b2ad080b54a88a8dd0000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZJXXNA4%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID7P93SJHGp7QTJa7jUlDgZb6KnW6BUeiKREUcSRfn77AiEA9JBhpVGzf77ImO7PY4W4QE1yN4p%2FuMKUInWxxHFM8JAq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDLRf7pGtyzXOm%2BeSTSrcA5UTcL8I64RzVo7qw6%2FEb%2FtkrlksX4VdO90i13JeZTT%2FIklik5CZ9njq0WHYf6c9QXk9UcvfV1P4kTsA3R9k%2FskYHMq3GwfFFGHc9hUbFxKqH882OyxSO0pj%2B8hV7Kr09Ez1Xrgj4uz7zxtQ5ICBs3zRBgyer1d4r5G%2Fd8o%2Fb0neixayRc53cRJf03Z6XolWRwIwPxUqcF3JfTCjJIdsgD2xG8MqdpYeN865H0BVpxJfy4ZQP0L31eZISj5f9liPKlxqw%2Bl4kTx6EEirNumAauDVTlxaUOKby4PBmzMvq0GrofRvgy9FFWWlr7jI3J1BMRstIRgngf1iFe8gZb2XqqKQaAIGkWAB%2B%2BLYrIcG%2BqMjL9V4hgIGA3PU%2BMB6dZZBmshg1tkWuaL1n2zVuEM75eLiIAw9k8qiEnYxy2YCvwQsyA8PYbxrZLnAaKS6%2Fto6inuaVRgoqpwfKkGZiHCj9NL8QpZIyCOunKzj8oQucDzZNCR5KFSb8cl6DL3BIu0jhFRH6cJzYrE8qhzD38UFB5o5caGRBQfoq66NATcKhhkdrZ2zCksQZ0mCF9ouhR%2FYLjUrqGZdonyxjmOxewoZr8Cuf14tJr4ZdxlRn6SeFfkMGl0e63vH2lE5J0oJMK%2BDhdAGOqUBmVbw5MJsqzWkSA89%2B%2B6iV%2FDoxGx8u9EVHKDo7JzylpJkqYVYlkOo925mDnuXL%2BFhzg01Owi9Zte07OPgZx5wzxcrwOhy%2FtW9PDmMTIDlnq0yL%2BAgrK%2BmYDMDc5dsNiDUhlc2NTwdEKdvAyxvMLkNdnGyHyeyW3ys09yg9jEUDZIx7ygxeIfIlA2fgpruWQrRc76dnU6khgxbSVS3njEj2K9XJ5W8&X-Amz-Signature=15e1051cfa41f6f62862e860121ac2e5cf20abd851a601991b315a767f9e8d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
