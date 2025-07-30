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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPLZPMI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdKc%2BtdGpnc8CFOwVuiUFkY%2FhpWq4ZmnM1dKny4JY79wIgM7A4q84Ge256eC8kyhjsyHDJ8ckGFhLpjQq6Hx8T6q0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQjJ5%2BoI1HgcOgjgircA0ULacOnA9%2Fmio4kq%2F5rrx33bmkR4RSI3OWl4K1lsAz%2BFVzBpEb4uvpnSCZXvLmibBq4sc63IkPQL3oV2ThnqNAT1Tye9pmIvfRDIQqtN%2F4EvkHlM%2F8fsx3WrQ3Lbvry9lilecsCuUtEgnJ0HqFOxh95LLAuSVQjtIrqZq8GjlUBCWKMd7zbXAqsdY8iDeZ9e5Yb3a3Qshp0ws6re871RdeVvw6MwS%2FATb5wruVA7WWkpZeSEeqo4lnOYrIbG4kcihVCdB9SFT%2FjUageTKO6PrVuqbamS8zBeBbe4eMusVljPfRHxyQTWEoiVZQw2wMZewiIv6BTsXRLtp1uJaZ7QBRCu8kuUvU1Dov9IUxOAcdH2c0ihtlmx6u6pbXLdCl8vYCXgLAplJu018igHRZ0%2F%2F20%2FXyAvXCBIE3CHwhr%2FK1v%2Bf8FFBz3aMJQnE681CbFPeSioAWL5AK8I6JVy4c%2FVGgRGZg8XlDF2A7dyYzYuyKMkQr%2BOOFYX1icqZQGkSX5aUw%2ByaXdP88mUr0LFQQwnTKz68CpyWM9D7k5PY8sXXiTI%2FFjsBXpNQPW2XrJEbTLZqiwJBDtDofMTH%2Bq0YU5uVJSgFVFH%2BCc28RzHmzyEtxh%2FV6d7r0O3btgSOBpMMPoqcQGOqUBDz%2BG10opGXn9LK30DA6t57s2l%2BNUtMU%2BofkY6r1uNPte9EaWq3DdHPaxl8UOzOLKAyYn4b4d6PSBMvK2f8y91ArVpYYd%2BoTgbhcvRoVctH4nGi7egFxBmZgwQGVu5bcrRkULEFLIiwJF5BJD78BIl6GCCt7g2q%2FBsWvTZ54%2B8bIjJ%2BeDR1KjGLbjxFmUH1%2F7dWgLvPuglb6kwosCokTKGwXf50FP&X-Amz-Signature=02443797605cbbaf403f285dbcd19332759dbab03263559f0a02097e7f22d8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPLZPMI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdKc%2BtdGpnc8CFOwVuiUFkY%2FhpWq4ZmnM1dKny4JY79wIgM7A4q84Ge256eC8kyhjsyHDJ8ckGFhLpjQq6Hx8T6q0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQjJ5%2BoI1HgcOgjgircA0ULacOnA9%2Fmio4kq%2F5rrx33bmkR4RSI3OWl4K1lsAz%2BFVzBpEb4uvpnSCZXvLmibBq4sc63IkPQL3oV2ThnqNAT1Tye9pmIvfRDIQqtN%2F4EvkHlM%2F8fsx3WrQ3Lbvry9lilecsCuUtEgnJ0HqFOxh95LLAuSVQjtIrqZq8GjlUBCWKMd7zbXAqsdY8iDeZ9e5Yb3a3Qshp0ws6re871RdeVvw6MwS%2FATb5wruVA7WWkpZeSEeqo4lnOYrIbG4kcihVCdB9SFT%2FjUageTKO6PrVuqbamS8zBeBbe4eMusVljPfRHxyQTWEoiVZQw2wMZewiIv6BTsXRLtp1uJaZ7QBRCu8kuUvU1Dov9IUxOAcdH2c0ihtlmx6u6pbXLdCl8vYCXgLAplJu018igHRZ0%2F%2F20%2FXyAvXCBIE3CHwhr%2FK1v%2Bf8FFBz3aMJQnE681CbFPeSioAWL5AK8I6JVy4c%2FVGgRGZg8XlDF2A7dyYzYuyKMkQr%2BOOFYX1icqZQGkSX5aUw%2ByaXdP88mUr0LFQQwnTKz68CpyWM9D7k5PY8sXXiTI%2FFjsBXpNQPW2XrJEbTLZqiwJBDtDofMTH%2Bq0YU5uVJSgFVFH%2BCc28RzHmzyEtxh%2FV6d7r0O3btgSOBpMMPoqcQGOqUBDz%2BG10opGXn9LK30DA6t57s2l%2BNUtMU%2BofkY6r1uNPte9EaWq3DdHPaxl8UOzOLKAyYn4b4d6PSBMvK2f8y91ArVpYYd%2BoTgbhcvRoVctH4nGi7egFxBmZgwQGVu5bcrRkULEFLIiwJF5BJD78BIl6GCCt7g2q%2FBsWvTZ54%2B8bIjJ%2BeDR1KjGLbjxFmUH1%2F7dWgLvPuglb6kwosCokTKGwXf50FP&X-Amz-Signature=363d6dd8f885fc3a1d49c0480a776274a7c1424973d790938b5899a40e9c9054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
