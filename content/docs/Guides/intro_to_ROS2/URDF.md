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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOH5AG2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAcyhfeEcudRVdroo1%2FvsJP9t%2F8q4B%2Fkip8M7eSgVPjQIhALwQ6uxZ4%2BntJvUlH%2FBN3TmaJaLPOLFvGswWLc%2FATq%2B1KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSfcstOKSW5omlnXEq3APe2hkyedxICMKQje17XfgQbURfVn%2BS5DOgas2uPwOTyJ9Lr6NyMN6uen6N%2Fql9j4GGNcWRxxK5lg3oDCnJXoVRlw3WFEnBXqcciCNUmwwVWZSXGUdUFI4UUqh4PZyYOSbgfr4tKyoiHu3T8%2FsKtntQxB4ZGm9yinFS%2F94gBpRYf9uE5Lc72%2FjlBcSkotAZGEIpFFMfNmXjC9Zv5OT%2B5aNfoNpuxA9j5Qf1nwhTmbEOv4Uc3V%2FjIQ61IusbK%2FWHsZ%2BHVEvp2V2t%2Fbkd%2FXJlWLb%2F1xHk%2Fd%2BTU%2BomWQ7QvkurM7kJG7nififXHOFgH0dTOI156jyBZUkYCka%2BCG%2BlH6H9ctbeXZjeQb%2BOHTtCd7KZ9REC2THEsk%2BS3NHaIVL%2BAqaHSqVs7UvVfllr3BvnSPxqA30Hr5ldZkYkRte9KvtBAlhd5S3quV7Sor6E3S5It2h0JXhAfB%2F3wMuHuopVESSd%2B0w5rI6PWESxlBhDXTRsLVmJ8lrSdMLVR3sDA1pqII0EfvylH6PzaUVUYCKzkR04A%2FeQ5rk4b45IyEqzynFWu%2BlCuXdbx2O0yr2os6AeHQrX4WVyx0vDqNRieBh4JlXw8Wqt9XBAJqqQXfMgVnbKp7Log%2BqsQA%2BrtIOt5jDKm7HEBjqkAQwtxBmlgw%2F0iG9PfzyUYwrnSF0QZipFWKJPZDXuQ0mqAjybxAdijBftYSA9naBwCBjt21%2FHPSwhlhI6BJuOzxxMlO4Ce0UCF1wDeAwGXAmGspJiHLbFS%2FeZkk9zh75%2BpAUzHTD7C1bQ40oZBVrGXAf7i9vsSZ3UZBcO6%2BDrur7FgSJTIOgCg12IvyjvzDxnEbExujsPK%2FMFFD4oiJucd%2BHgZlyF&X-Amz-Signature=342bec5d87558f153d98c4936a76de238c1339b4dc4ae8d86e6ee635fda58d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOH5AG2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAcyhfeEcudRVdroo1%2FvsJP9t%2F8q4B%2Fkip8M7eSgVPjQIhALwQ6uxZ4%2BntJvUlH%2FBN3TmaJaLPOLFvGswWLc%2FATq%2B1KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSfcstOKSW5omlnXEq3APe2hkyedxICMKQje17XfgQbURfVn%2BS5DOgas2uPwOTyJ9Lr6NyMN6uen6N%2Fql9j4GGNcWRxxK5lg3oDCnJXoVRlw3WFEnBXqcciCNUmwwVWZSXGUdUFI4UUqh4PZyYOSbgfr4tKyoiHu3T8%2FsKtntQxB4ZGm9yinFS%2F94gBpRYf9uE5Lc72%2FjlBcSkotAZGEIpFFMfNmXjC9Zv5OT%2B5aNfoNpuxA9j5Qf1nwhTmbEOv4Uc3V%2FjIQ61IusbK%2FWHsZ%2BHVEvp2V2t%2Fbkd%2FXJlWLb%2F1xHk%2Fd%2BTU%2BomWQ7QvkurM7kJG7nififXHOFgH0dTOI156jyBZUkYCka%2BCG%2BlH6H9ctbeXZjeQb%2BOHTtCd7KZ9REC2THEsk%2BS3NHaIVL%2BAqaHSqVs7UvVfllr3BvnSPxqA30Hr5ldZkYkRte9KvtBAlhd5S3quV7Sor6E3S5It2h0JXhAfB%2F3wMuHuopVESSd%2B0w5rI6PWESxlBhDXTRsLVmJ8lrSdMLVR3sDA1pqII0EfvylH6PzaUVUYCKzkR04A%2FeQ5rk4b45IyEqzynFWu%2BlCuXdbx2O0yr2os6AeHQrX4WVyx0vDqNRieBh4JlXw8Wqt9XBAJqqQXfMgVnbKp7Log%2BqsQA%2BrtIOt5jDKm7HEBjqkAQwtxBmlgw%2F0iG9PfzyUYwrnSF0QZipFWKJPZDXuQ0mqAjybxAdijBftYSA9naBwCBjt21%2FHPSwhlhI6BJuOzxxMlO4Ce0UCF1wDeAwGXAmGspJiHLbFS%2FeZkk9zh75%2BpAUzHTD7C1bQ40oZBVrGXAf7i9vsSZ3UZBcO6%2BDrur7FgSJTIOgCg12IvyjvzDxnEbExujsPK%2FMFFD4oiJucd%2BHgZlyF&X-Amz-Signature=92f82a1c6d1546d6f62916480370f8d860b4a6875b93302327fb368ec4828fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
