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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6S5YOX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyFX5Un7quwgA8mUCUEmCLru%2BJKFPAa1hT5GEo8YMnvwIgJWnT4jifk5L2TKDcBw2TsJvP55a1eu1WDFKhBsv0B6oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8zLoI%2BdhpvdLPfuSrcA3BGc4qERsPsf22fiG6LoJ735RI9qpOynAXw%2B%2FaQnpMTs2KCzBazBFC1BHLavqoL0SFCp3vJDiP63Z9Sn%2FFwRK9%2Bv2oDeNHd6TInIBf7CPZE%2BWcBFmSQyT0inqN1mOPjnEVcgU72BarcnYmCsIdGpUyyUjN9Q8m11rLuaDxv0BKw3wo2qJTmTrcWbW15KJYbQOng8IzpApQlw5prPKoAs2a%2BnAzJg9rdSG77XUaQeCKsRuN7NUpxvQr6GwWylCL6ki%2B77WP3Z6GIJwzrZMQqzKPZSGf99DfQNmCJCnpOfIC4tlWKywmZPU03rXlas9n4DTxj0MCVf%2BXVsETFg1bhODNY%2FLJJigbcC09MfNTmVb5FQ9cDoAtJD3mHNqE3ChFIAbPCzO%2F7%2BxRMcHDRwloNym8vcoKpIA1wBgE6Y5jU1VlHdcQDkRzSR9XlGcBzjKC0oJINwOZSzfCGBTJrmDasTLu5%2FFDUeTfVrwy%2FgmJQ4ROsqk1ptQvWch%2Bc8zf4fmGbOveBJO8K01Wvhsv8CUw0pkhfNMvPfeCLxTjPVkhlk2hU3YFxwjRvyHlXKDtgOUusxI7pRbL7GUv5WbW3n2b8UZswOfZFGrlVScOuuCOktuz6M5uU%2BTyEsSqG%2FR8%2FMNTq08IGOqUBmQEQ7tQ8K1HgNKw8ICzG4EyLDq8kXDmfA55QkJkscFXVrClAPkZeJ%2BaNWU0z8j9KFiTW6fh6%2BeeWAP0HncfgjfLrhITkXEJFBiRXy1eVxnLotER8S9nKvTBcX0oDGhiP%2BfpId5oGJJKRqRFzmG7umDPFpPYo0Jx8FrO8tjieqAisKrJ2UQM9lXBpUenL5iRVyb4LlreatNUt4J7VrrQCt%2FoEFVQE&X-Amz-Signature=c11e0feaa41844a82023847d933cc26f6cc264de6b217f07f1b62d125e31f584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6S5YOX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyFX5Un7quwgA8mUCUEmCLru%2BJKFPAa1hT5GEo8YMnvwIgJWnT4jifk5L2TKDcBw2TsJvP55a1eu1WDFKhBsv0B6oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8zLoI%2BdhpvdLPfuSrcA3BGc4qERsPsf22fiG6LoJ735RI9qpOynAXw%2B%2FaQnpMTs2KCzBazBFC1BHLavqoL0SFCp3vJDiP63Z9Sn%2FFwRK9%2Bv2oDeNHd6TInIBf7CPZE%2BWcBFmSQyT0inqN1mOPjnEVcgU72BarcnYmCsIdGpUyyUjN9Q8m11rLuaDxv0BKw3wo2qJTmTrcWbW15KJYbQOng8IzpApQlw5prPKoAs2a%2BnAzJg9rdSG77XUaQeCKsRuN7NUpxvQr6GwWylCL6ki%2B77WP3Z6GIJwzrZMQqzKPZSGf99DfQNmCJCnpOfIC4tlWKywmZPU03rXlas9n4DTxj0MCVf%2BXVsETFg1bhODNY%2FLJJigbcC09MfNTmVb5FQ9cDoAtJD3mHNqE3ChFIAbPCzO%2F7%2BxRMcHDRwloNym8vcoKpIA1wBgE6Y5jU1VlHdcQDkRzSR9XlGcBzjKC0oJINwOZSzfCGBTJrmDasTLu5%2FFDUeTfVrwy%2FgmJQ4ROsqk1ptQvWch%2Bc8zf4fmGbOveBJO8K01Wvhsv8CUw0pkhfNMvPfeCLxTjPVkhlk2hU3YFxwjRvyHlXKDtgOUusxI7pRbL7GUv5WbW3n2b8UZswOfZFGrlVScOuuCOktuz6M5uU%2BTyEsSqG%2FR8%2FMNTq08IGOqUBmQEQ7tQ8K1HgNKw8ICzG4EyLDq8kXDmfA55QkJkscFXVrClAPkZeJ%2BaNWU0z8j9KFiTW6fh6%2BeeWAP0HncfgjfLrhITkXEJFBiRXy1eVxnLotER8S9nKvTBcX0oDGhiP%2BfpId5oGJJKRqRFzmG7umDPFpPYo0Jx8FrO8tjieqAisKrJ2UQM9lXBpUenL5iRVyb4LlreatNUt4J7VrrQCt%2FoEFVQE&X-Amz-Signature=10030e7427488b8ba014f3cc551fb2380ff358fa971b9f6d3012e6b2300046b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
