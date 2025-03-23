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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQAHKPTC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEb3hS5bjSIfM%2Ffg7yWOGJ6Ka2DkbuxwBEBpb4RUln8WAiA4%2FB8ivojNB5h8T8cJx%2F18Ktm0u2KgrKt%2FcEJwp6ToByqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2E1TBn%2FU5qCupYBkKtwDMgZNwasJmUN1TadAocSqZt911sJFjKE5SURz6gyV6iVgYaobR4tKJwxJ5ksIiG8I2Nia6rWHiXXhJUWEbx1NfiISGU1vTshWrK0PfXYTAzwPzChi%2FZypYknXs7MU5SWfQW9rlpi5QF8fBMaSmVsTEnuZKipAJmb4Yx%2Fax0RGw%2BBi61lieLJEjYLEeOiRhFKmMVMIMwI0lxzQx7meuHWT9lVbCYd%2BtYQ2t%2Fy2L%2FQsqlT9M04R8OdmuKeXW5v%2F9Lyac%2BUokXrKgXvFtgaKXYvsBiXBh7FkuQ2YQnHuUmYZsqjdEqVWCPz4ylaVjFvRWdrBhHM%2BWAYjvrTl8p7mIuv1lFs%2FOmh088hi%2B%2BlSKuIJTIoCoFytutSkirW8t1jnbp%2BTisd%2Byp58Smd5mpbGV%2Bqwei6iVQyQdggQPGFS3z%2Fo6Xkhi321YSlRxR8xndLax3j0BwlQaT3wDtS%2FbHCXPQqXGJmP6NBRLqyM%2BioMcbJapIUHKSdVejQSvEi%2BOQzk7ZfZkBCiDCf8cmGfShSYWylhPSpYUs9wHgRrDFG0o8YvndYRIlOYPAgHhXWqxEnp666RY6jkFvzb0i%2FbOx%2BdNT2nM3bxlbdHz31sARqu8loSEjlE%2Fnkdt6p7f%2B1M1I8wjvT%2BvgY6pgGPq1lmxPF%2BaY4W3%2BySUj1px51uSmsxQh%2BrZIa0P4I5xhqVjt3zOsDrm%2BYCZKfHVmyxxVyDb3uUxHoJdzq8eIK8LH5%2BVCkYriHvaXw0zB4rd3Di5QRzfEeozTSEt5hRt8MhxR%2FCal4lKk6ieywQl7Yd0vxlE7LKBbVSDKpbpIaXGUV7m7kFnWs5ACAcPSNY%2FqZsxwBT7%2FLSOI57Ihs%2FJGNnLF%2FbHrEb&X-Amz-Signature=6da952e368b186de54efa0ee0ac0a6cea1eb6a26fe18945a2b67a6a40fb9fdeb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQAHKPTC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEb3hS5bjSIfM%2Ffg7yWOGJ6Ka2DkbuxwBEBpb4RUln8WAiA4%2FB8ivojNB5h8T8cJx%2F18Ktm0u2KgrKt%2FcEJwp6ToByqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2E1TBn%2FU5qCupYBkKtwDMgZNwasJmUN1TadAocSqZt911sJFjKE5SURz6gyV6iVgYaobR4tKJwxJ5ksIiG8I2Nia6rWHiXXhJUWEbx1NfiISGU1vTshWrK0PfXYTAzwPzChi%2FZypYknXs7MU5SWfQW9rlpi5QF8fBMaSmVsTEnuZKipAJmb4Yx%2Fax0RGw%2BBi61lieLJEjYLEeOiRhFKmMVMIMwI0lxzQx7meuHWT9lVbCYd%2BtYQ2t%2Fy2L%2FQsqlT9M04R8OdmuKeXW5v%2F9Lyac%2BUokXrKgXvFtgaKXYvsBiXBh7FkuQ2YQnHuUmYZsqjdEqVWCPz4ylaVjFvRWdrBhHM%2BWAYjvrTl8p7mIuv1lFs%2FOmh088hi%2B%2BlSKuIJTIoCoFytutSkirW8t1jnbp%2BTisd%2Byp58Smd5mpbGV%2Bqwei6iVQyQdggQPGFS3z%2Fo6Xkhi321YSlRxR8xndLax3j0BwlQaT3wDtS%2FbHCXPQqXGJmP6NBRLqyM%2BioMcbJapIUHKSdVejQSvEi%2BOQzk7ZfZkBCiDCf8cmGfShSYWylhPSpYUs9wHgRrDFG0o8YvndYRIlOYPAgHhXWqxEnp666RY6jkFvzb0i%2FbOx%2BdNT2nM3bxlbdHz31sARqu8loSEjlE%2Fnkdt6p7f%2B1M1I8wjvT%2BvgY6pgGPq1lmxPF%2BaY4W3%2BySUj1px51uSmsxQh%2BrZIa0P4I5xhqVjt3zOsDrm%2BYCZKfHVmyxxVyDb3uUxHoJdzq8eIK8LH5%2BVCkYriHvaXw0zB4rd3Di5QRzfEeozTSEt5hRt8MhxR%2FCal4lKk6ieywQl7Yd0vxlE7LKBbVSDKpbpIaXGUV7m7kFnWs5ACAcPSNY%2FqZsxwBT7%2FLSOI57Ihs%2FJGNnLF%2FbHrEb&X-Amz-Signature=43a5c8a6a3c88b5fa3c186bc39e7bde779a876b2e53318f29b806ba48c0540c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
