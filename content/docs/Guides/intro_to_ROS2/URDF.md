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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6HWFRD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC92%2FkaZM%2Bbh1Q%2ByiCY4sbjPedbTzyiCWFWwMtCiBVelwIgJbcyQVPbUXIM3gbxVOWroFopmyCjTOaIUddlsIxYib0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjWjbpWA6hVJBfPACrcA%2BLZm%2FlI16op38WSm5CXOjnSvQTom7f%2FHHzzBoNx7Pu%2BvIXjP4zELeP12nt927JG%2FAUIjeG9oeZtcSGF69%2FFkZZv2KjBUu4F7FK3c%2BWD1OdOfYgL29Ea87Zi4%2BLZ2zFHkm7KlyvIhzMwE3wMDr0Z9BwRxlY5ZadIDDxxQHh63Kti0TkNhQ7NmDdhWL3%2BA%2BT1S4laNIucTWjOR%2BSXp%2BUP%2BgoWBSEfiPnPutTtZg89XMmTReK%2FlQ75ecgWX9LjKY%2FMTbtu5Jx2N1QGl%2F9uqgG%2BdwNfF1%2BQSj3RsNDgUQadl1vw2%2BaO0%2Bq7tsovgVJqix7sXH9V2OPnwAqy4xSGPd09pJQwvO4n8%2B2ji1f9cWKwDVH1xsnSAZRecIT%2BcyI8piFPGMydjuBo2xrxaR0t0ahFLKp2q65mITF3Um8AYO672NjV04HpOiUgwu5pVjlbw9lWw5vvb30pItEZK%2F9iJ9q1Aj%2FNqzZ%2BCK7Vw20u%2FyO3ZcPEn8DpyVGrW8BmK9JuTvs%2BTo9Ejih81A%2B7PCAgxvw%2F3s3cAjbV0pjscVW65piEo2xA9L2fJzBo3zosi%2B%2FIf579v2Usm9LBntW8gd0T%2BArU4kSrF37QvWblL9op9C2Agkh0VjJN1hdYrIFKa3hxMIekoMAGOqUB65FGeJUBzkz%2B7WJ%2F7y87uzVFy5pTJzzJqMsKlrK4dgUbew6qqxsMzzMHHRY6PqzuWgOzuhOUzwddcgjLYvgPtktYsPanOmmiW5Jaxlo%2FIKOyB3gGMxiXNELaME6jaByI%2BvlxOo4JbXauVOlNXCv1bIUHR3WtHhByYP8ZNp49VWVC%2FV0t6LcDn6lIgGkwUTFxPFDzXspo6KLHfoSi53c9orgVkzGP&X-Amz-Signature=cee04a6d467ab45a96456d26c720ddcafd8ad73b21e28ff45c67e97d8a4c9a68&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6HWFRD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC92%2FkaZM%2Bbh1Q%2ByiCY4sbjPedbTzyiCWFWwMtCiBVelwIgJbcyQVPbUXIM3gbxVOWroFopmyCjTOaIUddlsIxYib0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjWjbpWA6hVJBfPACrcA%2BLZm%2FlI16op38WSm5CXOjnSvQTom7f%2FHHzzBoNx7Pu%2BvIXjP4zELeP12nt927JG%2FAUIjeG9oeZtcSGF69%2FFkZZv2KjBUu4F7FK3c%2BWD1OdOfYgL29Ea87Zi4%2BLZ2zFHkm7KlyvIhzMwE3wMDr0Z9BwRxlY5ZadIDDxxQHh63Kti0TkNhQ7NmDdhWL3%2BA%2BT1S4laNIucTWjOR%2BSXp%2BUP%2BgoWBSEfiPnPutTtZg89XMmTReK%2FlQ75ecgWX9LjKY%2FMTbtu5Jx2N1QGl%2F9uqgG%2BdwNfF1%2BQSj3RsNDgUQadl1vw2%2BaO0%2Bq7tsovgVJqix7sXH9V2OPnwAqy4xSGPd09pJQwvO4n8%2B2ji1f9cWKwDVH1xsnSAZRecIT%2BcyI8piFPGMydjuBo2xrxaR0t0ahFLKp2q65mITF3Um8AYO672NjV04HpOiUgwu5pVjlbw9lWw5vvb30pItEZK%2F9iJ9q1Aj%2FNqzZ%2BCK7Vw20u%2FyO3ZcPEn8DpyVGrW8BmK9JuTvs%2BTo9Ejih81A%2B7PCAgxvw%2F3s3cAjbV0pjscVW65piEo2xA9L2fJzBo3zosi%2B%2FIf579v2Usm9LBntW8gd0T%2BArU4kSrF37QvWblL9op9C2Agkh0VjJN1hdYrIFKa3hxMIekoMAGOqUB65FGeJUBzkz%2B7WJ%2F7y87uzVFy5pTJzzJqMsKlrK4dgUbew6qqxsMzzMHHRY6PqzuWgOzuhOUzwddcgjLYvgPtktYsPanOmmiW5Jaxlo%2FIKOyB3gGMxiXNELaME6jaByI%2BvlxOo4JbXauVOlNXCv1bIUHR3WtHhByYP8ZNp49VWVC%2FV0t6LcDn6lIgGkwUTFxPFDzXspo6KLHfoSi53c9orgVkzGP&X-Amz-Signature=48ec8a31b99fc5292bd52409107e592c12817047d55b100b0dc8b654359e5c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
