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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3JA4NL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oyg%2BIMQEfHcYacOR8nFZORlz1b2jSGIgMX%2Fe3BppJQIhAKbYkGoRUC7N86Q7n%2FLqp4rzrInvNVGBO5TCOCIClastKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1U0WUjwrwKtQRfncq3AOwJd912UG%2BTZPM1K1UWInzEaW4OK6bhEH1q4QDvMCYBsdI0MeW7QTCjLJxMycs5RYhRwocSUkV7k7bL2uAnwqGZvfm8IgxOLnVzmi%2B%2BFqhmpHdH3qoxdz0mpS4Zw3Sw2DRfwoS1bCSLaw58siyQ%2FBvTQS7O9zPxJxWOrKkjCMkkYohKxh7lWAPYjtXlZM%2BiDLQ3BKoHQ25zyljtLRkTUJ3ybwMF6oAVWaHPCfjuQB%2BY3iX5mJBxHojlqY9ry3FVyIaoggIqhOn05Nv7HTQi6mTNOyM4n093EmluZS4JnHEbRcjt6idYrSzVD11KNCSnYqh59IJrrILpPU2HcJ%2BOaSgqXOBT9O7xy%2FqB5F%2BOz05uRUe9V4c91G3pCU4cDnDIDnqPjpl21DIbMy3y8pT8TDATrRTrl1gILHPo9OGS1wmbiwV2acX8SpMgQaHnz0KL90Li5bW4xTNnLm3hgMBojqQjtT6RFTZZjHlD1cCf58Fmp5i6UsQzHKWoxYw%2FQhA6rTfMheToUlzSyQGpi%2FZkD4CTtg%2FfWVrf%2BD4IVdRNYWB07kVg5TsrDedH8D1RujPmUr%2B1%2BCMRReCS7kfrOl%2FZqDhsOUXECKSgl3suinSwou%2Flc78YBDj1tNV0gfL7DDq46G9BjqkAd6ZvvCOoGlDJpF9Wli9B1l4xyDqnSALIC9gsHL5l1EkzqXYlE3MeMrDDxiGn8ZRXqQ1l4rBRQ%2BUOL7ek8uTuBIyKDBcH2Ou5Z9PZ%2B1HK%2B7aIXIkp43sbHIQ6yVmWav6YKDR79X%2FwFQDwrqISTfMfnNI9QbKxnjAVPHCyBYG8%2F%2Faft%2B2Ip9PzBy8W%2FnXNem55Z%2Bm8ljebaVyoDPVscdhUdpCHvIs&X-Amz-Signature=6f3fd53f8e1e833a12164d6072f3266396b9ba12a280ff60ec44df5e31a70b81&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3JA4NL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3oyg%2BIMQEfHcYacOR8nFZORlz1b2jSGIgMX%2Fe3BppJQIhAKbYkGoRUC7N86Q7n%2FLqp4rzrInvNVGBO5TCOCIClastKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1U0WUjwrwKtQRfncq3AOwJd912UG%2BTZPM1K1UWInzEaW4OK6bhEH1q4QDvMCYBsdI0MeW7QTCjLJxMycs5RYhRwocSUkV7k7bL2uAnwqGZvfm8IgxOLnVzmi%2B%2BFqhmpHdH3qoxdz0mpS4Zw3Sw2DRfwoS1bCSLaw58siyQ%2FBvTQS7O9zPxJxWOrKkjCMkkYohKxh7lWAPYjtXlZM%2BiDLQ3BKoHQ25zyljtLRkTUJ3ybwMF6oAVWaHPCfjuQB%2BY3iX5mJBxHojlqY9ry3FVyIaoggIqhOn05Nv7HTQi6mTNOyM4n093EmluZS4JnHEbRcjt6idYrSzVD11KNCSnYqh59IJrrILpPU2HcJ%2BOaSgqXOBT9O7xy%2FqB5F%2BOz05uRUe9V4c91G3pCU4cDnDIDnqPjpl21DIbMy3y8pT8TDATrRTrl1gILHPo9OGS1wmbiwV2acX8SpMgQaHnz0KL90Li5bW4xTNnLm3hgMBojqQjtT6RFTZZjHlD1cCf58Fmp5i6UsQzHKWoxYw%2FQhA6rTfMheToUlzSyQGpi%2FZkD4CTtg%2FfWVrf%2BD4IVdRNYWB07kVg5TsrDedH8D1RujPmUr%2B1%2BCMRReCS7kfrOl%2FZqDhsOUXECKSgl3suinSwou%2Flc78YBDj1tNV0gfL7DDq46G9BjqkAd6ZvvCOoGlDJpF9Wli9B1l4xyDqnSALIC9gsHL5l1EkzqXYlE3MeMrDDxiGn8ZRXqQ1l4rBRQ%2BUOL7ek8uTuBIyKDBcH2Ou5Z9PZ%2B1HK%2B7aIXIkp43sbHIQ6yVmWav6YKDR79X%2FwFQDwrqISTfMfnNI9QbKxnjAVPHCyBYG8%2F%2Faft%2B2Ip9PzBy8W%2FnXNem55Z%2Bm8ljebaVyoDPVscdhUdpCHvIs&X-Amz-Signature=c4b1d817e4a883168af817520b9c00d1de2acdf2237376d77f2ddbc8407538f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
