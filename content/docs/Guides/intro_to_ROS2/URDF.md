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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BNZUQL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC3wGAwgy1nRF6tb4rqEPJRSppfsHhex1KwtKEBz9nC7wIhAKA1kWmWyEFQGj1HYmi6bsDlLsacAitKTBuRf86L7eHOKv8DCEkQABoMNjM3NDIzMTgzODA1IgzvBtk4CfNSYSoATCIq3AM1Z9ZDFyu1fl1v3CqsxNC%2BTZNdpxg6kL0hJwGcyjICwbSKX5f2YKryQgQ1HQZ6NaE6%2FQ6YRaXyAqa%2Fwgwv8RRXfVQUPGVZ5TR5WhgGSQBC7tQDCAnv%2BZ1zxbp5%2BLl%2BWznIZYg%2FBTrRVSXCgFtd2SGgGXT%2FZvvMR17sfxBixp1CqCm3ZcVDtyMFczBDDAm%2BpHVGqo%2BPLHPxZnjrdnErjIHVWhnKUKGOHPSDaKOCxhPlZ%2Fsrsyj6WsQfz2ALMiKRHqLVtTNZpfBx9iARYZ5BLXmNTDyC8s%2FGJ8S4pQhDI5vQ%2B9eJT9eRRbd9fJh4MzIErj5u1Ec5nghNwDmr5D5Lc0KpnZRBoIfVcXd88tsOT4T4efqgDKsYubmIJzM3XxG1HOh8J2krRW3VQVjmUCT%2FfaZlAlotgObAOBuewgw4LLV3qnfORd16TOVN0xyKS3bO4gK%2Fr9e4oxbUWOIsncKgNGGOn4mI%2B6OcbPYlRlL2Ds9r6XTsnBXEm0CdHq6UAEsgeq2ItYsR2hC%2FbVyuF41XzVnGP5FYQcA52q7CFjTJi5%2Fw44P8VqQK%2BCcYJ9CAuiaR%2BBbUzP%2BeVcRct4xr%2FDLREBeQ5VQUXbNUTsxNMGftgEPXJxgUni1lvX3oJ68iWDD0n469BjqkATHtilWFXe7%2FyflI9TJcGIEcN%2BgwutgwhuVkR8UXVJ5vmuJEVlGnR0bApEgVdJFu0iGHs1JHZBByhOBvXCut%2BYxBYcx6q6y87dcDMmKwM6cC8IuHc96SRM7rj%2B336tZT9oj39pu8B6ICRN28tSFHoPIwXBNQMe%2FODaxpRDsI6cmUZVUcgK7218uJBldaCpM30S9te20zEoB761atnhgwqhIu060h&X-Amz-Signature=a80af458fa5f117aaec7c47cd9b0479fcd4be79343d1ce7fe572e8d96f00863c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BNZUQL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC3wGAwgy1nRF6tb4rqEPJRSppfsHhex1KwtKEBz9nC7wIhAKA1kWmWyEFQGj1HYmi6bsDlLsacAitKTBuRf86L7eHOKv8DCEkQABoMNjM3NDIzMTgzODA1IgzvBtk4CfNSYSoATCIq3AM1Z9ZDFyu1fl1v3CqsxNC%2BTZNdpxg6kL0hJwGcyjICwbSKX5f2YKryQgQ1HQZ6NaE6%2FQ6YRaXyAqa%2Fwgwv8RRXfVQUPGVZ5TR5WhgGSQBC7tQDCAnv%2BZ1zxbp5%2BLl%2BWznIZYg%2FBTrRVSXCgFtd2SGgGXT%2FZvvMR17sfxBixp1CqCm3ZcVDtyMFczBDDAm%2BpHVGqo%2BPLHPxZnjrdnErjIHVWhnKUKGOHPSDaKOCxhPlZ%2Fsrsyj6WsQfz2ALMiKRHqLVtTNZpfBx9iARYZ5BLXmNTDyC8s%2FGJ8S4pQhDI5vQ%2B9eJT9eRRbd9fJh4MzIErj5u1Ec5nghNwDmr5D5Lc0KpnZRBoIfVcXd88tsOT4T4efqgDKsYubmIJzM3XxG1HOh8J2krRW3VQVjmUCT%2FfaZlAlotgObAOBuewgw4LLV3qnfORd16TOVN0xyKS3bO4gK%2Fr9e4oxbUWOIsncKgNGGOn4mI%2B6OcbPYlRlL2Ds9r6XTsnBXEm0CdHq6UAEsgeq2ItYsR2hC%2FbVyuF41XzVnGP5FYQcA52q7CFjTJi5%2Fw44P8VqQK%2BCcYJ9CAuiaR%2BBbUzP%2BeVcRct4xr%2FDLREBeQ5VQUXbNUTsxNMGftgEPXJxgUni1lvX3oJ68iWDD0n469BjqkATHtilWFXe7%2FyflI9TJcGIEcN%2BgwutgwhuVkR8UXVJ5vmuJEVlGnR0bApEgVdJFu0iGHs1JHZBByhOBvXCut%2BYxBYcx6q6y87dcDMmKwM6cC8IuHc96SRM7rj%2B336tZT9oj39pu8B6ICRN28tSFHoPIwXBNQMe%2FODaxpRDsI6cmUZVUcgK7218uJBldaCpM30S9te20zEoB761atnhgwqhIu060h&X-Amz-Signature=921d2c58c2e2a7752fb01480cc7fb3b68cdfc4dab0d2dd1701b2e953f0e2163f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
