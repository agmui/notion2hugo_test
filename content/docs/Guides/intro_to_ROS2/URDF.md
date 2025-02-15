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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RUANGK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDHMEiCHAIW7kzM%2BhjZf78fsR%2BG7YQImr8%2BsBfD7WVkeQIgVIcluGBlCLtrZHkrr9Vcak0dTgledNmOhG3vWhDBGwIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFx9ouk6TMDqc9xWUyrcA1VzraUwVETSwlb5NaKppA%2BzzC2z%2F1Bbbg4Lg6iVg5ko1DKBmh7w0BDf3u2MKp6JMpZLAXD0UecuR0ai6Rf9bDT1WAPKq7MGICVuxwCj4RtRY%2B6A4DDHiBOTqezOyvIAbSNWhC2awuhoo7onn2iFo%2Fkd3Iv688pnqpTqHuWf6wraPt6L58m5I%2Ff348Fle2hMn8UO6TaZL3LIw%2B00d1OHwX%2FdgIYzrDlwPzzf8fM9AP6FFKBKYvvzW%2BfRiW%2BQCcvv8eymBQvyCY3TyVeCFr9hKOi9RrD5wEYY0%2ByTgGeC4Hv7Qqpv9tLM3Y1mZ%2F7g5%2FCCeLknMbbF51OpKVPhpn8JXyvvLfZ0UOOzQu29Viz9CHrjIaZy3d9rn50qSedsOP46zro%2BogescvzsgHhGXFto%2BUa0Fxl7Rbjux%2BHEzsJVDnGJCO5M9LOTXcQv43JjYX%2Fn2LmcLY9QWZ10yTY6NTGp7fialu27%2B%2FpXrUGKCwNDd2mxrNv3pjc33%2FKT0Ve7O6QNEyEbpP13WD9YtX5BraTmsyyEQhuWLlYrLSYOTwmK%2BAdHoptdHpdd8T3ud9C21VVDsd5zykRdkJ%2FLjIUMuYiqdAS3nP9Opkzi27Go7B%2FCmrxHzCJ3rJr6OnsMqu1LMPGzv70GOqUB%2BHqD%2FxxYcRgzrJVII7w7sq%2FFhKiB66RZeylKcTuhYj9uux8tCZIGNmOImHexeCMad%2BL9QbVe%2BNy%2BNDj4WBNiZLynikVMSM7jDsD5fcce3Qk6zhLYOSFc0q%2FiGq%2BQc196%2BlQZM1zza6d29isg47hFEizdVWQLPaPN0rUDd4J2yaL%2FQqq4A8MyHh6blRtBMcERaCVZxEeIxWh8yrnsrFzC8zW9UaNX&X-Amz-Signature=8daea08648de3d22734fe9b89687b1eea417a7dfd383287e53a189339e231a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RUANGK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDHMEiCHAIW7kzM%2BhjZf78fsR%2BG7YQImr8%2BsBfD7WVkeQIgVIcluGBlCLtrZHkrr9Vcak0dTgledNmOhG3vWhDBGwIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFx9ouk6TMDqc9xWUyrcA1VzraUwVETSwlb5NaKppA%2BzzC2z%2F1Bbbg4Lg6iVg5ko1DKBmh7w0BDf3u2MKp6JMpZLAXD0UecuR0ai6Rf9bDT1WAPKq7MGICVuxwCj4RtRY%2B6A4DDHiBOTqezOyvIAbSNWhC2awuhoo7onn2iFo%2Fkd3Iv688pnqpTqHuWf6wraPt6L58m5I%2Ff348Fle2hMn8UO6TaZL3LIw%2B00d1OHwX%2FdgIYzrDlwPzzf8fM9AP6FFKBKYvvzW%2BfRiW%2BQCcvv8eymBQvyCY3TyVeCFr9hKOi9RrD5wEYY0%2ByTgGeC4Hv7Qqpv9tLM3Y1mZ%2F7g5%2FCCeLknMbbF51OpKVPhpn8JXyvvLfZ0UOOzQu29Viz9CHrjIaZy3d9rn50qSedsOP46zro%2BogescvzsgHhGXFto%2BUa0Fxl7Rbjux%2BHEzsJVDnGJCO5M9LOTXcQv43JjYX%2Fn2LmcLY9QWZ10yTY6NTGp7fialu27%2B%2FpXrUGKCwNDd2mxrNv3pjc33%2FKT0Ve7O6QNEyEbpP13WD9YtX5BraTmsyyEQhuWLlYrLSYOTwmK%2BAdHoptdHpdd8T3ud9C21VVDsd5zykRdkJ%2FLjIUMuYiqdAS3nP9Opkzi27Go7B%2FCmrxHzCJ3rJr6OnsMqu1LMPGzv70GOqUB%2BHqD%2FxxYcRgzrJVII7w7sq%2FFhKiB66RZeylKcTuhYj9uux8tCZIGNmOImHexeCMad%2BL9QbVe%2BNy%2BNDj4WBNiZLynikVMSM7jDsD5fcce3Qk6zhLYOSFc0q%2FiGq%2BQc196%2BlQZM1zza6d29isg47hFEizdVWQLPaPN0rUDd4J2yaL%2FQqq4A8MyHh6blRtBMcERaCVZxEeIxWh8yrnsrFzC8zW9UaNX&X-Amz-Signature=00891d725b7c60c43592a6f27bbe86a1e4bcf83ed5122d9dc3584c48a98712d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
