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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCN2USCY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5aRL%2BwwK2Y5r%2FvjZQbYGLH%2BGke1tkG6d%2BHraBO5KjzwIhALN0NCTJQ6Hhx%2BW2lstwbGzWIBgWK9%2FZRXqMbnBnLpZTKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaxIjmeeUVsh75Cp0q3ANPEJFaqwAdrjkLzEu39jsRXL9XN2vJ4%2BrJC%2Fqot10xepiFCr5Uw%2BF%2BKxHhdxkWrIXejuEbdt8ivcodPXZI42n%2FYDm5F83AGotA7gBxEvx461m%2FZ3%2BrY34fD%2Fg%2FMrBLgqE%2BWZaeGOi3xxm5ppfFh7qwWmi0htGX6JvI%2BbC63r7TswPXeZLFCQ8%2BxRKft3msz0iB1Jqm2Ug0vHtDu%2BAoLSmGC3DWKgJyJxmuXFxlWyQdZaJlY9hrlD%2Fhmzr7Tp30Yf1o2Flqs451JHKJphfN37v7Ebf1%2BG1HgDbTpP3ep5q7%2FZgdG4PxnbB75n5iAqZIsPQzofjai9EGFwUgX%2FKnp7SjTS1koaHZ7kDfJxmoNkq6IgqleDQXmQaAaGKVU0CsoPgOB6CXJ%2F%2FpqTo8dDgrp4HVJ6Ov0pEW3Un0QBs%2BPZF96XL6%2FRkp%2Fr7AKAT6ELahrQIUhKxHdtq7AVrCrNezn%2Ffz7mmtXQ%2Fxn3mXfOPQ4TRU9DYuJq%2BXxflQsAaicuw08dESn8fBP%2BwK%2FRuV1VEbJrmePjC%2F2Fhr9meGBVLmD1O9RL9k1HorTI4wWLJnzqnS8rDdkrB9tLhlJTUB4cdP3QuiNVbrMo25yaMzWhd45QDj6SmNlvN5auUTE%2FuGfDCCz4vDBjqkAYyON6L%2FxiWgFWEIh2OeKJ4zETLCKl9uRiavBfclms3Hm%2FOAnd24VVTnwE%2B8xIOZvDeU9eqKJAmFkLdZVu2g2%2B81OLrzM1tvEqvnVVLkUXuRetjZIk%2F5pusjHVpJS6giwGe%2FPxySUoSOatZ6hvqg%2BY9184E8M%2FhhI3Oi25sJDFabfvM8BU9Cwn6FPwM5gLyEyad%2FqihOK02XAJimxybHPEsuuYUT&X-Amz-Signature=4548de5b7088da17943a36668398c7ace9d77dd4b36b3f29da3de41a8eb98ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCN2USCY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5aRL%2BwwK2Y5r%2FvjZQbYGLH%2BGke1tkG6d%2BHraBO5KjzwIhALN0NCTJQ6Hhx%2BW2lstwbGzWIBgWK9%2FZRXqMbnBnLpZTKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaxIjmeeUVsh75Cp0q3ANPEJFaqwAdrjkLzEu39jsRXL9XN2vJ4%2BrJC%2Fqot10xepiFCr5Uw%2BF%2BKxHhdxkWrIXejuEbdt8ivcodPXZI42n%2FYDm5F83AGotA7gBxEvx461m%2FZ3%2BrY34fD%2Fg%2FMrBLgqE%2BWZaeGOi3xxm5ppfFh7qwWmi0htGX6JvI%2BbC63r7TswPXeZLFCQ8%2BxRKft3msz0iB1Jqm2Ug0vHtDu%2BAoLSmGC3DWKgJyJxmuXFxlWyQdZaJlY9hrlD%2Fhmzr7Tp30Yf1o2Flqs451JHKJphfN37v7Ebf1%2BG1HgDbTpP3ep5q7%2FZgdG4PxnbB75n5iAqZIsPQzofjai9EGFwUgX%2FKnp7SjTS1koaHZ7kDfJxmoNkq6IgqleDQXmQaAaGKVU0CsoPgOB6CXJ%2F%2FpqTo8dDgrp4HVJ6Ov0pEW3Un0QBs%2BPZF96XL6%2FRkp%2Fr7AKAT6ELahrQIUhKxHdtq7AVrCrNezn%2Ffz7mmtXQ%2Fxn3mXfOPQ4TRU9DYuJq%2BXxflQsAaicuw08dESn8fBP%2BwK%2FRuV1VEbJrmePjC%2F2Fhr9meGBVLmD1O9RL9k1HorTI4wWLJnzqnS8rDdkrB9tLhlJTUB4cdP3QuiNVbrMo25yaMzWhd45QDj6SmNlvN5auUTE%2FuGfDCCz4vDBjqkAYyON6L%2FxiWgFWEIh2OeKJ4zETLCKl9uRiavBfclms3Hm%2FOAnd24VVTnwE%2B8xIOZvDeU9eqKJAmFkLdZVu2g2%2B81OLrzM1tvEqvnVVLkUXuRetjZIk%2F5pusjHVpJS6giwGe%2FPxySUoSOatZ6hvqg%2BY9184E8M%2FhhI3Oi25sJDFabfvM8BU9Cwn6FPwM5gLyEyad%2FqihOK02XAJimxybHPEsuuYUT&X-Amz-Signature=0b2bea2e6b95d0890e413479e11129ebecb7d6f90fda4bca0324fc6518abedb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
