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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRL63Z6Z%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDAXmnAjbdQnXRIMdzu9D5accbey%2BxnftZqC74Xsw2u%2FAIhANwwR05d3onVqn18VJOZY0vQCSnxg1Q5MyKU3msBBgi2KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQRDuAnBODf2aHlgsq3AOrqMSIHrjuYINLdMCX6IqLxqRTZGI1wklvyU3nZuvcitYPCv1V8obcxgSMwjPOfyL3QkhHAz9IXkCseUZ7Q10b8t2YVeS3MnzHjfpaouVbSUKIM1VYAJxZNcGBZCBJnEORd8q1PaS6naD9rO8RQXOcOrBZZqPMHrQWkoEz0sawn8zOBIo0wu4dLzLuqJlCID1%2BfKvudxLqsy7fuW6bb9FV%2BPUYfvzUAN1Ue281SbLIYGB69Pi%2BfmlIKE%2F2Hqp59lCVDF9pXowFA8hVVwg7PQVjpC7H569zOK9HHxcCtCqbX%2FW%2FWmbuCECED4I4Ej%2Bcrxhe1ZEDnQ16XpyMsi6q8qtC9kUvlMFTWY1o3YnihucE1%2Fykw%2BhCA2b0cbw9k7uzkM4n9jrTTpXGs6YCzOVNaOI%2BVkchsoWnGO%2BN38rMunS9tFUTHvltSc%2BhsdcZcWQHv%2BvrRhwFICfuqkUq4iQ64WEpdRDC4UgJNyb9h4P3b0vgEn8na6oAH63fEHiYvKNC8io6ulSPr76tpvKDtPWGMQ1dl070wS4EJHA%2BwG2FoWU5Y%2BJ4s5ahcN%2BfeJYxKWg%2FeZjtFvL4R89qeiN5gIhr0rgszRHQih0GPNeVMQDa2jXpsbFkJcR5xYQApmfscDCfpsjABjqkAadL1%2BGDYYJr8eiri%2FSvh%2F8Jt2xC7fUyxHr41gld0jTGlWZ84WOQEFH4ratzMzRLN2Qn4Kf0x8wvFIbnOWrmM4Eol7z9CnBeUY%2FwkNE0zEpdc1M2Qz6M8arytxveFWareClZ1IPbvxHe5Qq6u9yu6nuVA01QreUq%2B3%2FDDqNbCJZqRWIxri%2FQqW5mU6n%2FER2OioGe%2FCLI82DkWt4%2BdHJCM0baiPjv&X-Amz-Signature=bd9691404f10b8d436135e2e87731cea15845a5a4f1b3384ec43f8a8ccb93864&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRL63Z6Z%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDAXmnAjbdQnXRIMdzu9D5accbey%2BxnftZqC74Xsw2u%2FAIhANwwR05d3onVqn18VJOZY0vQCSnxg1Q5MyKU3msBBgi2KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQRDuAnBODf2aHlgsq3AOrqMSIHrjuYINLdMCX6IqLxqRTZGI1wklvyU3nZuvcitYPCv1V8obcxgSMwjPOfyL3QkhHAz9IXkCseUZ7Q10b8t2YVeS3MnzHjfpaouVbSUKIM1VYAJxZNcGBZCBJnEORd8q1PaS6naD9rO8RQXOcOrBZZqPMHrQWkoEz0sawn8zOBIo0wu4dLzLuqJlCID1%2BfKvudxLqsy7fuW6bb9FV%2BPUYfvzUAN1Ue281SbLIYGB69Pi%2BfmlIKE%2F2Hqp59lCVDF9pXowFA8hVVwg7PQVjpC7H569zOK9HHxcCtCqbX%2FW%2FWmbuCECED4I4Ej%2Bcrxhe1ZEDnQ16XpyMsi6q8qtC9kUvlMFTWY1o3YnihucE1%2Fykw%2BhCA2b0cbw9k7uzkM4n9jrTTpXGs6YCzOVNaOI%2BVkchsoWnGO%2BN38rMunS9tFUTHvltSc%2BhsdcZcWQHv%2BvrRhwFICfuqkUq4iQ64WEpdRDC4UgJNyb9h4P3b0vgEn8na6oAH63fEHiYvKNC8io6ulSPr76tpvKDtPWGMQ1dl070wS4EJHA%2BwG2FoWU5Y%2BJ4s5ahcN%2BfeJYxKWg%2FeZjtFvL4R89qeiN5gIhr0rgszRHQih0GPNeVMQDa2jXpsbFkJcR5xYQApmfscDCfpsjABjqkAadL1%2BGDYYJr8eiri%2FSvh%2F8Jt2xC7fUyxHr41gld0jTGlWZ84WOQEFH4ratzMzRLN2Qn4Kf0x8wvFIbnOWrmM4Eol7z9CnBeUY%2FwkNE0zEpdc1M2Qz6M8arytxveFWareClZ1IPbvxHe5Qq6u9yu6nuVA01QreUq%2B3%2FDDqNbCJZqRWIxri%2FQqW5mU6n%2FER2OioGe%2FCLI82DkWt4%2BdHJCM0baiPjv&X-Amz-Signature=567d4c9cb36fcb7715e782037a801c7f6d9f50e5d761b6bbb2a596cf8341ac8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
