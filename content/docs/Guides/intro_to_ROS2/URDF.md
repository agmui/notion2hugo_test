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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MYSQA6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBCgj4yD82DnMf3RnIBH5bGL%2F6VRIOYDJ5YkXJDfxaqAiEAnN8nfI%2BZiKtlxHvu%2ByohiuP5HkqIpNhaoLkFQa8wetYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPoRdrTJU5JvFP0N%2FSrcAwd2HBbBFTvQM75JIAA1wUTDGret5Jhriu5M%2F68mrFmwyRw%2B4Ll5YWhAUgUNgzMaDDIdM%2B1xsiAlZMLZ%2FPJLQRzNrETIrVr2AT2jVP9hD95z3hb0j3OHiLKldN9yOoYaji5Jo%2FJ55SIIYAwZYDFq8xAio3teBXWYpmizt568UqjwFHzK5JXWehu9j5fIdr2FINiEzOwTexC40FtksaZves6gdsoMETZDUh2K1pHnARvVnp8EKa%2BQ%2FwiksgX%2F5o8bCYYyAFuiLWLxR4ikN8dbKks6wh5oRUdu6%2FwAS1QA3ycyAuRQXJo0kM1OM5NhPdz79dl41rHrSmbF6TQozAafZRl496ZfXz431AFAp3vJc0jLQpF3NAIQEGTavvSu1GKXQk7xobo%2FbZMzx0nyHlLxiDWO%2BVQAN4s09tZupTjWJ1b55s8h9ML4kmksarmQyxO%2BlG93pPynQ6TfaJdMxsrPwqSMRCetfZPNrxrYh7BKIYLqSqCseSfqk33xddEzGzduKRhYBqb2%2F8dOMY8RQjKdMz9jXyFtU1jjhO5VmdYnOAo86d1AhyHRqJm1oeqfAIhC0wxJulsG%2B1umHOFU232BPDAes%2Batj8BIjAeNYZ7G%2BStIl7UsE9lRseeeconZMLSQpcEGOqUBpaWeBqJ3aq8ABCZX8HB4k47dDVz0zRA69zwbTHyYcNPY3hGS4Xms6yIvKXbmYdWzdFPd9U9DncJQ21Vs3S2CxxWiZ6BcT6IbDdBgVVNEwBVvuFpvmR2OhEv25liGKF953PFCjXDwOD%2FOeHP2YgLLo4qWdfbhNhF2LVUHylvSigW7LVMSjppSUvmoFwme1tEPOQDwqX8P6awJ5sfmNo%2FOY6h8P4s3&X-Amz-Signature=5e769fbcc70542b7bd4d54db8710381c4d5502570f744446757bd886b0497de8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MYSQA6U%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBCgj4yD82DnMf3RnIBH5bGL%2F6VRIOYDJ5YkXJDfxaqAiEAnN8nfI%2BZiKtlxHvu%2ByohiuP5HkqIpNhaoLkFQa8wetYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPoRdrTJU5JvFP0N%2FSrcAwd2HBbBFTvQM75JIAA1wUTDGret5Jhriu5M%2F68mrFmwyRw%2B4Ll5YWhAUgUNgzMaDDIdM%2B1xsiAlZMLZ%2FPJLQRzNrETIrVr2AT2jVP9hD95z3hb0j3OHiLKldN9yOoYaji5Jo%2FJ55SIIYAwZYDFq8xAio3teBXWYpmizt568UqjwFHzK5JXWehu9j5fIdr2FINiEzOwTexC40FtksaZves6gdsoMETZDUh2K1pHnARvVnp8EKa%2BQ%2FwiksgX%2F5o8bCYYyAFuiLWLxR4ikN8dbKks6wh5oRUdu6%2FwAS1QA3ycyAuRQXJo0kM1OM5NhPdz79dl41rHrSmbF6TQozAafZRl496ZfXz431AFAp3vJc0jLQpF3NAIQEGTavvSu1GKXQk7xobo%2FbZMzx0nyHlLxiDWO%2BVQAN4s09tZupTjWJ1b55s8h9ML4kmksarmQyxO%2BlG93pPynQ6TfaJdMxsrPwqSMRCetfZPNrxrYh7BKIYLqSqCseSfqk33xddEzGzduKRhYBqb2%2F8dOMY8RQjKdMz9jXyFtU1jjhO5VmdYnOAo86d1AhyHRqJm1oeqfAIhC0wxJulsG%2B1umHOFU232BPDAes%2Batj8BIjAeNYZ7G%2BStIl7UsE9lRseeeconZMLSQpcEGOqUBpaWeBqJ3aq8ABCZX8HB4k47dDVz0zRA69zwbTHyYcNPY3hGS4Xms6yIvKXbmYdWzdFPd9U9DncJQ21Vs3S2CxxWiZ6BcT6IbDdBgVVNEwBVvuFpvmR2OhEv25liGKF953PFCjXDwOD%2FOeHP2YgLLo4qWdfbhNhF2LVUHylvSigW7LVMSjppSUvmoFwme1tEPOQDwqX8P6awJ5sfmNo%2FOY6h8P4s3&X-Amz-Signature=92468b2c0fa9be581f37e0e8203e235c948557b26c23b685bbd74361f0d742a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
