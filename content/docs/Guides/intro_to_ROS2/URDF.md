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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZBTPQ3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdCrQBW%2BWymKkS3NUrU410gDE7CxkqVqsr%2FHIoSHki3wIgB6ir2q4xhPPAqaYwIaBzUjU4lQWp%2B1doHOZ4FeNGPJwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK0FZNb2n9JbG7cF0yrcA4%2BW8VQuy0HWB6EuUwi0Fj5j0OukdzDp44JsRk%2F7781K%2FLJlDph%2BGtfm%2BHK5%2F2WUVKuGQnK9gHk8zb30HIdDCHtEn6%2FlvptF%2BJJnJ%2FVHE9m9C%2BGqw4vJLOg5m2zKuLKrC4aHuASTwJqv2Ib5dk7wdauIJTKebUMHFz3fDNmhc0KCOgbmmU6ZRorptBwAL%2B22085jWw17oZmjarYp%2B0z88WYvRDGv9q1OdKqM7XBhRnMBLahtcpV5jXdKQ3JbVeweIzuWgHe8SBSXRAkciCVKx26Q7Q1ZM6Gukr0YLj%2Fz%2F2Y4q1PypdyiU%2B26pakiMx9wi85hEw2DbC2rDP1Ou9ICkM0C2Xw7ktMeFAuBV6tqBiIK2Pc0sLZZ5gn1gugT0ZqVk8O7YHstwVQru7Ry%2FHVwa09%2BRFHXuXGUFeiSFdC6misiSu3rXQfi5nOxT44VlWachbvrafOZ7fbAb8xe6ZBt0kTRo%2FHLMqolKISP9IU2I6NDIrMcDh%2Fdd4YyPQQJOuMGHqd5qdatbfsYK91Fz%2FJrWOhf0nmG4ahcoajmifM6zfmrb13F18pqVwAig8gU%2Bjhnu7MI%2BOe%2BCYPeoSW%2FpQ80JBA7f1vtfP74N5D03GyZQ4QoYX8ssoSntLWZGOuyMNDV870GOqUBvaYLzZotF2w0djDgjZUVc2W%2FxUEr%2FZDnnNu6qV2SioilrQUeKuqLLmOl6GXrHQI%2BED0NdfJsJzVtyJI80Hxy76mab3hLNld9GnqDFTX4boR3Pa2Q0T8KW5VZNXqO0IB0bcliF9YndM0fSwxiZX7CywARSKvGfzQZHhz2ZnCCUPu2ok%2B0fCqREt3jB3JQGh5iGPJCtA1qt5Qz7eZnEftJDmcpe%2FP%2F&X-Amz-Signature=3f73f0f016f03b07b94a5d96b905689a02dcee495889364feff2130290215b64&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZBTPQ3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdCrQBW%2BWymKkS3NUrU410gDE7CxkqVqsr%2FHIoSHki3wIgB6ir2q4xhPPAqaYwIaBzUjU4lQWp%2B1doHOZ4FeNGPJwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK0FZNb2n9JbG7cF0yrcA4%2BW8VQuy0HWB6EuUwi0Fj5j0OukdzDp44JsRk%2F7781K%2FLJlDph%2BGtfm%2BHK5%2F2WUVKuGQnK9gHk8zb30HIdDCHtEn6%2FlvptF%2BJJnJ%2FVHE9m9C%2BGqw4vJLOg5m2zKuLKrC4aHuASTwJqv2Ib5dk7wdauIJTKebUMHFz3fDNmhc0KCOgbmmU6ZRorptBwAL%2B22085jWw17oZmjarYp%2B0z88WYvRDGv9q1OdKqM7XBhRnMBLahtcpV5jXdKQ3JbVeweIzuWgHe8SBSXRAkciCVKx26Q7Q1ZM6Gukr0YLj%2Fz%2F2Y4q1PypdyiU%2B26pakiMx9wi85hEw2DbC2rDP1Ou9ICkM0C2Xw7ktMeFAuBV6tqBiIK2Pc0sLZZ5gn1gugT0ZqVk8O7YHstwVQru7Ry%2FHVwa09%2BRFHXuXGUFeiSFdC6misiSu3rXQfi5nOxT44VlWachbvrafOZ7fbAb8xe6ZBt0kTRo%2FHLMqolKISP9IU2I6NDIrMcDh%2Fdd4YyPQQJOuMGHqd5qdatbfsYK91Fz%2FJrWOhf0nmG4ahcoajmifM6zfmrb13F18pqVwAig8gU%2Bjhnu7MI%2BOe%2BCYPeoSW%2FpQ80JBA7f1vtfP74N5D03GyZQ4QoYX8ssoSntLWZGOuyMNDV870GOqUBvaYLzZotF2w0djDgjZUVc2W%2FxUEr%2FZDnnNu6qV2SioilrQUeKuqLLmOl6GXrHQI%2BED0NdfJsJzVtyJI80Hxy76mab3hLNld9GnqDFTX4boR3Pa2Q0T8KW5VZNXqO0IB0bcliF9YndM0fSwxiZX7CywARSKvGfzQZHhz2ZnCCUPu2ok%2B0fCqREt3jB3JQGh5iGPJCtA1qt5Qz7eZnEftJDmcpe%2FP%2F&X-Amz-Signature=adb545df9b8dbe677d50f339e70524d135afc3c6cf7827277f0e38fa3ce0bf5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
