---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7PSVJW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCG0wnyMmIn1f%2BdVOOqGt0cQrDPZxn8EJwcn%2FIoZsjTMAIhAJwqw3ybQaEPX0fB%2FgMQFLcIeTGOwnfX2GWcqYyU434MKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdB5v7G2OWGNAm3eIq3AONEt4TkE%2Fdr4btWchqCBMFWunFQRuCfzckb%2FP5aoU6tbN2usSC8nTT%2FOTQq96uZ9aFa4jW1IVe21tNOgxa4nRu5OdAU5mot5oDiB6XgtSS6nhPmtwRtK1vZMV6mZV4poiRdUEnNjC6q3si3uMMLQi%2FV2mBQ6r1t2ywR152Rr58DbDPBx0GNuioO%2FnMLnJ7Vy5ICa7WHGv5G33uCEzFWlUzqqOkxLKid%2F%2FgKlr6ZY2sXJBUyEGPTuj7O%2FvQlJdz43FfJdYsA5pctnQsQHmotB31KS6%2BS9dWiWfAccnQPyn2qYjPDTWIELYjA%2FcBbOe5B5yQ3JPxMo460CcWU90UJkhTaIkUc%2FSGR9LASQszf4o5KP6WUHwydIo0HiwxA6mxjkpm8plzAMH%2FqzvAdE4UV1X%2BbJbQfcpx%2FtNGtSm3Rmx5vG7e0VPAZnnLI5ci9SHYBXqU71fUX0jxHJFhjUQII4EsIW2RzKTKjSc7bgxVJNzjZL2Gj%2Bla%2BiBQiumb391FglsxZYtSTohTihAIcaNQpTSWKQEKgiG4PPboxSWW7LjXHqIIy%2BeQZcU0CoBx65Le0DbH59rR1u9ijraG9SkavU0MRCX0cS4vGrZuECISSxyGq%2B9T8xFVaH4hHIaGsjC6otPEBjqkAcq2MHxtNugY5N3QmtEz7w2PEaimxmANAHdHiSy5ySxikdcfM2sm6Yi0VDzTQPcPFP4jx6t9fcwxb1XE3Pm4BZtcP6uEnJcax39iMiPLeu0GHlNyPyEEjNWZUHC98tmhY0qAWA5mvoFElA%2FcErRd%2BE5J2J9%2BY3N4NF1P1bfeHfWjnfOWrahNRYUr3CL92kzBz847wfuErYqPo8lvS0vUtp63LW9m&X-Amz-Signature=5ad60964b4adae283f11d765cf795d90dc85f83f0ab5e392283be5ede2258d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7PSVJW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCG0wnyMmIn1f%2BdVOOqGt0cQrDPZxn8EJwcn%2FIoZsjTMAIhAJwqw3ybQaEPX0fB%2FgMQFLcIeTGOwnfX2GWcqYyU434MKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdB5v7G2OWGNAm3eIq3AONEt4TkE%2Fdr4btWchqCBMFWunFQRuCfzckb%2FP5aoU6tbN2usSC8nTT%2FOTQq96uZ9aFa4jW1IVe21tNOgxa4nRu5OdAU5mot5oDiB6XgtSS6nhPmtwRtK1vZMV6mZV4poiRdUEnNjC6q3si3uMMLQi%2FV2mBQ6r1t2ywR152Rr58DbDPBx0GNuioO%2FnMLnJ7Vy5ICa7WHGv5G33uCEzFWlUzqqOkxLKid%2F%2FgKlr6ZY2sXJBUyEGPTuj7O%2FvQlJdz43FfJdYsA5pctnQsQHmotB31KS6%2BS9dWiWfAccnQPyn2qYjPDTWIELYjA%2FcBbOe5B5yQ3JPxMo460CcWU90UJkhTaIkUc%2FSGR9LASQszf4o5KP6WUHwydIo0HiwxA6mxjkpm8plzAMH%2FqzvAdE4UV1X%2BbJbQfcpx%2FtNGtSm3Rmx5vG7e0VPAZnnLI5ci9SHYBXqU71fUX0jxHJFhjUQII4EsIW2RzKTKjSc7bgxVJNzjZL2Gj%2Bla%2BiBQiumb391FglsxZYtSTohTihAIcaNQpTSWKQEKgiG4PPboxSWW7LjXHqIIy%2BeQZcU0CoBx65Le0DbH59rR1u9ijraG9SkavU0MRCX0cS4vGrZuECISSxyGq%2B9T8xFVaH4hHIaGsjC6otPEBjqkAcq2MHxtNugY5N3QmtEz7w2PEaimxmANAHdHiSy5ySxikdcfM2sm6Yi0VDzTQPcPFP4jx6t9fcwxb1XE3Pm4BZtcP6uEnJcax39iMiPLeu0GHlNyPyEEjNWZUHC98tmhY0qAWA5mvoFElA%2FcErRd%2BE5J2J9%2BY3N4NF1P1bfeHfWjnfOWrahNRYUr3CL92kzBz847wfuErYqPo8lvS0vUtp63LW9m&X-Amz-Signature=672a7cfa23b331299bfccaa67dc1d4ba7af50349c2ac9e18b8fde253846c3fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
