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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYB6S5H%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYKp%2BZSLebeOo7XqP4tNyWT80OS6rKf27qF2I4qR7eXQIhALoqgfxQ9PNgba%2B%2BkPdlYXgOqC0DTxYWHMtVyX1fVdFHKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcJJypxD80DhCaXjAq3AOyUlaUscw8S0BWI%2F%2BQNoUihtev58H3BJ%2BM4Xp0b2WYh%2BCzl5R7a0%2FFyGdZeEb43QoFhGpin7BpOjoImTMJNRmkCYTaz9N8bMXBIDkU0Y1i2Z0aRm8SKIdpS5PV5tCqSJdcUx7k3BpZnhcHGudSCy8wsQID0ZeaUdVtN0XhSfMAhuCCdOW%2B6uK36yi4H2nLqbn7XHgupWFPQGdFYjQVgpxkZTIkkjNdvk1%2F%2FntUHulr%2FqZew%2BRt3kqEXIdAPewq93XnJKur%2B5xb%2BVTC%2Fw8sj5PW30pO9bTM3hSjR7%2B5l8Hxy0XLjHjRVzKkdUUtpezSnxKqxZmx9zAJlS%2BEQ%2FRNhjHeQ%2B2jOckckMAdf1vW1dQislYtJHv9lP1l0BjvEnQBLpld%2FFR6oRI4jYiIAdhN9Y5wTxuWjAZQoU1XafwPRJustFQUZ%2FmseLE4Cec1%2BuusXp7B71sPmKCZYuxSLqxgEKQ2qei30pj0iuHm0%2B6GjBXpEvLGe0T6vbaIQVgQbqv3n5zkOcz00LPlo0PfAQyP3nzhTrx5awdIMdh%2FkJ8gUbRS01uInTGOP9eU5hG1Jdto0egvAggBp8zDecQSPv1W%2FIiD2XqOzSGIS%2Fu3iQAmBym3nl3Iv%2BmeSXjzWgKCqzD4sPDBBjqkAXuEm%2FH%2FYfkif6n1%2FNokLsYJj0FrlaUIiUdajqnZ7vZt7ylgEM3Zu7p19ITbthQk1mUwq5X%2B1NG41nVfJwj5SKaWmC%2Fuo0Aegb3Z82bayZkNBke0B5yQ0rCAx4BhfGrAt0IDqkdJIKGpSBsbDJvEFCG6PUs%2B69eV%2FcLC1Y4Y7rAlsAhvyB9fv%2F246mBt9xn%2B41QUPmiaYDk9b8a7icXRDVb8Z4kH&X-Amz-Signature=dec1cc26bd7b2eda80cb32b59dbd03f3f4189ba00bef47d567baa12f5c204640&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYB6S5H%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYKp%2BZSLebeOo7XqP4tNyWT80OS6rKf27qF2I4qR7eXQIhALoqgfxQ9PNgba%2B%2BkPdlYXgOqC0DTxYWHMtVyX1fVdFHKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcJJypxD80DhCaXjAq3AOyUlaUscw8S0BWI%2F%2BQNoUihtev58H3BJ%2BM4Xp0b2WYh%2BCzl5R7a0%2FFyGdZeEb43QoFhGpin7BpOjoImTMJNRmkCYTaz9N8bMXBIDkU0Y1i2Z0aRm8SKIdpS5PV5tCqSJdcUx7k3BpZnhcHGudSCy8wsQID0ZeaUdVtN0XhSfMAhuCCdOW%2B6uK36yi4H2nLqbn7XHgupWFPQGdFYjQVgpxkZTIkkjNdvk1%2F%2FntUHulr%2FqZew%2BRt3kqEXIdAPewq93XnJKur%2B5xb%2BVTC%2Fw8sj5PW30pO9bTM3hSjR7%2B5l8Hxy0XLjHjRVzKkdUUtpezSnxKqxZmx9zAJlS%2BEQ%2FRNhjHeQ%2B2jOckckMAdf1vW1dQislYtJHv9lP1l0BjvEnQBLpld%2FFR6oRI4jYiIAdhN9Y5wTxuWjAZQoU1XafwPRJustFQUZ%2FmseLE4Cec1%2BuusXp7B71sPmKCZYuxSLqxgEKQ2qei30pj0iuHm0%2B6GjBXpEvLGe0T6vbaIQVgQbqv3n5zkOcz00LPlo0PfAQyP3nzhTrx5awdIMdh%2FkJ8gUbRS01uInTGOP9eU5hG1Jdto0egvAggBp8zDecQSPv1W%2FIiD2XqOzSGIS%2Fu3iQAmBym3nl3Iv%2BmeSXjzWgKCqzD4sPDBBjqkAXuEm%2FH%2FYfkif6n1%2FNokLsYJj0FrlaUIiUdajqnZ7vZt7ylgEM3Zu7p19ITbthQk1mUwq5X%2B1NG41nVfJwj5SKaWmC%2Fuo0Aegb3Z82bayZkNBke0B5yQ0rCAx4BhfGrAt0IDqkdJIKGpSBsbDJvEFCG6PUs%2B69eV%2FcLC1Y4Y7rAlsAhvyB9fv%2F246mBt9xn%2B41QUPmiaYDk9b8a7icXRDVb8Z4kH&X-Amz-Signature=3c03cd7f48f3833bc95fd4880d91555cebe95197a85f41564dcbeb8d0753f7f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
