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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6V5J6A%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnST4%2BLKyf4VgkEoXIDsRQg%2BM%2B2AYkOOd1y%2Bxbeeg5SQIgF5XyVxAaEl%2FS79JwXPQ9PSEV3AkopnHejzm%2FS2dRt0QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3aQljhHeiTisOZ3ircA1hypnI8b4O0ZPIw0PR5%2FKJR93w0HxM3BlbKK5nnBbrp7ShVL0T%2FytlS3TW7vOz3fXQoZSr8xTw6fGXLfefgi0VHnGno07SRf4pb%2FpSUXhmI1MfvvDFN0gZFRkMYjyveyjFw7DSAGMa111SJYK7w5LlyNGpzETcLhZUAl5z5EdHka8evXTp22chVeNItKb9oXMLsThfPK7gdifIxLhdy9ws2T%2BQO1bs9cnNjQTX9H6O0Eg8mS64pd1nQHUFbIZCqBt3fcAZCaTOe0dBRkhT5UmviXWIn02OCIEsXGs1w8J5Ru2hQG%2F2ZDmzNpp0fyEt0OO6%2BKEunnaH9UYE7JjcuLwJGB8r0J9WSz970PQKk%2FaT9OTcS8a2g5q0UaIbZr0s69js8s5f67KY%2B5lsPUafAhXvqm1Gy91MuAPiZ3pHI8HYDRj05N0qHtinzu1OS2qIwd86kRlI035KSoDsfuloIsI44ryJxg3WWYqWj6GFDLSSEnz%2FxhR6XILoouRRd9UBNVkWEA3YxRhuHqB%2B2yvKaWocPotyE0lkgyjp4pvMGka%2BZckcDZhwqQkV8quVrxZFSGUJ3b1xe0ifWNW0R%2FU8s3d6Mh8zb2G9m5TUZ4fZKlLvFB7I3pgXRTFpqOCpLMN7ur8QGOqUBT2s2rbEF6sE5SbrUhbnerZw7IaiT9726YUeTaKzOxJZ5FWNsNWpYJQzJcFtRbH8rmHqcjqwYUjmLJI1Mb2HsduhoLfL6c%2B0QkLdMCjA4CNlB5bPTZNmm41Sb10fKwA9ACvX7bsrlgMo93ToZD7wl0lTnu1XmkZxE70VJ2AES%2FIOqYrvn9JKVv508fdQGcHaxSFlAspnM%2FeQBoh6yhMYndMi8iI6N&X-Amz-Signature=b7b0e0aedae660daeebb3955d605683906c700092b4cbcc3158510b36cd28cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6V5J6A%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T005401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnST4%2BLKyf4VgkEoXIDsRQg%2BM%2B2AYkOOd1y%2Bxbeeg5SQIgF5XyVxAaEl%2FS79JwXPQ9PSEV3AkopnHejzm%2FS2dRt0QqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3aQljhHeiTisOZ3ircA1hypnI8b4O0ZPIw0PR5%2FKJR93w0HxM3BlbKK5nnBbrp7ShVL0T%2FytlS3TW7vOz3fXQoZSr8xTw6fGXLfefgi0VHnGno07SRf4pb%2FpSUXhmI1MfvvDFN0gZFRkMYjyveyjFw7DSAGMa111SJYK7w5LlyNGpzETcLhZUAl5z5EdHka8evXTp22chVeNItKb9oXMLsThfPK7gdifIxLhdy9ws2T%2BQO1bs9cnNjQTX9H6O0Eg8mS64pd1nQHUFbIZCqBt3fcAZCaTOe0dBRkhT5UmviXWIn02OCIEsXGs1w8J5Ru2hQG%2F2ZDmzNpp0fyEt0OO6%2BKEunnaH9UYE7JjcuLwJGB8r0J9WSz970PQKk%2FaT9OTcS8a2g5q0UaIbZr0s69js8s5f67KY%2B5lsPUafAhXvqm1Gy91MuAPiZ3pHI8HYDRj05N0qHtinzu1OS2qIwd86kRlI035KSoDsfuloIsI44ryJxg3WWYqWj6GFDLSSEnz%2FxhR6XILoouRRd9UBNVkWEA3YxRhuHqB%2B2yvKaWocPotyE0lkgyjp4pvMGka%2BZckcDZhwqQkV8quVrxZFSGUJ3b1xe0ifWNW0R%2FU8s3d6Mh8zb2G9m5TUZ4fZKlLvFB7I3pgXRTFpqOCpLMN7ur8QGOqUBT2s2rbEF6sE5SbrUhbnerZw7IaiT9726YUeTaKzOxJZ5FWNsNWpYJQzJcFtRbH8rmHqcjqwYUjmLJI1Mb2HsduhoLfL6c%2B0QkLdMCjA4CNlB5bPTZNmm41Sb10fKwA9ACvX7bsrlgMo93ToZD7wl0lTnu1XmkZxE70VJ2AES%2FIOqYrvn9JKVv508fdQGcHaxSFlAspnM%2FeQBoh6yhMYndMi8iI6N&X-Amz-Signature=ba5b968956ebaa9ecd1fdefaa395dd646aed77b6f34023d5fcdf4ad82808c8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
