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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DB2RPUR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCrwlodPfuc97USMBe7R48RXReQIm70F37D3Lz6%2FPNAPQIhAP9hi3rddbZTKjFF16uZjL31UsYMGEhubOXW%2BojatRHdKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPR6B%2Fqamrb3VvPgYq3AMiHQAlEnRkOp%2B6V9Wr7t6GJGNEZg%2F0O0vcsBCl8w%2BdVOV4sNH7B62GTulxnrZ582VXdqUnKn2H214aCwn6lZGBgiwwlzxkskHTU1CGsYcjMZntqzuB1wnGwbtyToDqXibjR9wZ3mO4Mm3HbkdJTqsxc4ae3RUcnvOE4wQM5HXFwU%2FCtBp%2Bv08NYawg7dgAg%2BPuy7xz3nCUsc2WV2RIFzDKxNLJjD8dJdoVtISXAdh73OGRf0Pm2ykBn8%2FP368AFCn5%2BDAO%2FcYa%2FhGB7trxCqwLMX61jUySfhfea8X3V6odyXzKQ8R3TxhKdnBVHb6GLICpMi2QSGCcn88Q8JWs4NAgM3QtIgMoAMwsfHXjzIlMaXxldTYU0%2FpuHgP6IhWuzqtjSlg9vEFAn5Msgk3mGCLiHbj%2BExUmAp3InBhCD8ylg0iNnHDSXBMO5iZx4pUwNIWAfwBCFdrS%2BHDvR8TjDTOr3L5%2FxOE0wLrH0DY%2Fz8Jhb02STquUXdUyIl90Tk09N2UNDwCegLlKnZ2XUzS1F%2BjU%2B1v%2FDmjujzXjsUl%2FBv4K9dQByWelslT6oJ4qkUbYoQUtwvVYOuby9foFHCLJEIVs4RvAyhrkPE9jfNjsYSXfPrOIjVWstJxaWkEpWzCP%2Buq%2FBjqkAZPA5BMZBvK0MzC1Euz%2FhmjBoiWrvH9YBrwdsfnFMfUjsua8%2BMQ9m3DggKPs0o4HII9HWh6qYo1eq55u2kYZ1BF%2F6mcF0%2Bwa2DIgMGYTPPu3y470NHc6y1PVFQz1FF0ewptkvE1I0%2F%2FQlnnpeKQKqbBn4MTbqLJ%2FIteK0d1T3f%2FLhjT6bF4tb4KdFFSHhWHoBJCgwY%2F%2Bo8LeQxUzIn6nUVaRy%2Bpr&X-Amz-Signature=0ba6143eb449215ec2202efc537fb85f01772246758a2b1a76f1f9306ad51ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DB2RPUR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCrwlodPfuc97USMBe7R48RXReQIm70F37D3Lz6%2FPNAPQIhAP9hi3rddbZTKjFF16uZjL31UsYMGEhubOXW%2BojatRHdKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPR6B%2Fqamrb3VvPgYq3AMiHQAlEnRkOp%2B6V9Wr7t6GJGNEZg%2F0O0vcsBCl8w%2BdVOV4sNH7B62GTulxnrZ582VXdqUnKn2H214aCwn6lZGBgiwwlzxkskHTU1CGsYcjMZntqzuB1wnGwbtyToDqXibjR9wZ3mO4Mm3HbkdJTqsxc4ae3RUcnvOE4wQM5HXFwU%2FCtBp%2Bv08NYawg7dgAg%2BPuy7xz3nCUsc2WV2RIFzDKxNLJjD8dJdoVtISXAdh73OGRf0Pm2ykBn8%2FP368AFCn5%2BDAO%2FcYa%2FhGB7trxCqwLMX61jUySfhfea8X3V6odyXzKQ8R3TxhKdnBVHb6GLICpMi2QSGCcn88Q8JWs4NAgM3QtIgMoAMwsfHXjzIlMaXxldTYU0%2FpuHgP6IhWuzqtjSlg9vEFAn5Msgk3mGCLiHbj%2BExUmAp3InBhCD8ylg0iNnHDSXBMO5iZx4pUwNIWAfwBCFdrS%2BHDvR8TjDTOr3L5%2FxOE0wLrH0DY%2Fz8Jhb02STquUXdUyIl90Tk09N2UNDwCegLlKnZ2XUzS1F%2BjU%2B1v%2FDmjujzXjsUl%2FBv4K9dQByWelslT6oJ4qkUbYoQUtwvVYOuby9foFHCLJEIVs4RvAyhrkPE9jfNjsYSXfPrOIjVWstJxaWkEpWzCP%2Buq%2FBjqkAZPA5BMZBvK0MzC1Euz%2FhmjBoiWrvH9YBrwdsfnFMfUjsua8%2BMQ9m3DggKPs0o4HII9HWh6qYo1eq55u2kYZ1BF%2F6mcF0%2Bwa2DIgMGYTPPu3y470NHc6y1PVFQz1FF0ewptkvE1I0%2F%2FQlnnpeKQKqbBn4MTbqLJ%2FIteK0d1T3f%2FLhjT6bF4tb4KdFFSHhWHoBJCgwY%2F%2Bo8LeQxUzIn6nUVaRy%2Bpr&X-Amz-Signature=7b71a3762ea3f71564904f6e940cf607421ba70c16938de5113566c7aa0ebf42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
