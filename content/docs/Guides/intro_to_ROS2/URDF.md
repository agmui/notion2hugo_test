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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6ITUHK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cnD5EHTZwiM95ZRha6G98aRRYiHrNt0mvaF6GkNkpgIhAOuR%2BFUMm8hIao1qe4G0CZLx%2BwYEiVL79N9kVfSWEXo3Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwP4bBf54EY94dTQEMq3AMAQK1yYg0tYtP1%2F3Deew4Dvl32fs5dTBwJaDKQLoqEQ7sIclWwKwHTkHI9%2Bp4MIOpRAGQ8Zs1qEZl1H7aVc8fVlrdNrl7lK4u81%2BaxjT6cFBHqOI72hrXVGDNk9l49J1twgP4AfEpWJBlO1dhVB9Pcg7Aojn6%2FZA3DJbGzLTDRZyy7O6nqdW%2Fndc%2B5NgDh82eM2JCTHuX474SCOxPYXCeVQr9pxXsVCHDkp5qEkj3rVF6M5Mnl8e8dzkC3ipgafVlrukfHt91r%2Fs9izWSZfwMGhvKiDMel40xA95xv%2BfmQQ9kzZxY5PGbtF0SECjUWwyMmBuZR3Us6j16za3PVajmqma5RaRJM9Rqwr9uoSVDma%2BWmncxgxhfoUkYJGQZ%2FS6nKHqY1DOOmKPZXhdQ44dx98wqOUYNp7io0IXgmZiyDnFSnvxXeP5rZoeg4lrD5Ois%2BhtUySdXTDMsZSF%2Bpa5M%2Fd6wHPxhhqArWzEyhw35Y8nxhmjItoaHe0BR8yNoPlEB8%2BGKXs9OkJYwXAxQ0l5sGlmrfFxATt7CLlDlOINlAO2DhazSkcHxCnNth%2BXOPRBN2a5lG0ywWmz84fk8dS6dNitvv19SMKHeXy1VYIR2h69s6hjRMU94%2FhOrGjzDWzae%2BBjqkASTOwUs7woeEts6o4U2qrdwBAZ6gOIdgz1odAKY0KbIQYloJ%2BO8ytKH3f%2FBmtRL7cf6nHflUFCedl5fqLDGuQ3SHFJ4MOZuU49e8v4pv1yjqOhEUEnkJDvMRU8VNiBpwkfAihrAfwk4i30uaD2Bb5oek9kecEStuqiyJQVkbSpBl0rWyzj9g9V%2Fz%2F7NPtx9%2F0XesZe3i32LkFH14TwzY%2Ft%2Fvp0qf&X-Amz-Signature=e2d403d74ecc6ad2fbe07399eba6bd4a1ca4bb2606529d0e86aea224a19fd23f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6ITUHK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cnD5EHTZwiM95ZRha6G98aRRYiHrNt0mvaF6GkNkpgIhAOuR%2BFUMm8hIao1qe4G0CZLx%2BwYEiVL79N9kVfSWEXo3Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwP4bBf54EY94dTQEMq3AMAQK1yYg0tYtP1%2F3Deew4Dvl32fs5dTBwJaDKQLoqEQ7sIclWwKwHTkHI9%2Bp4MIOpRAGQ8Zs1qEZl1H7aVc8fVlrdNrl7lK4u81%2BaxjT6cFBHqOI72hrXVGDNk9l49J1twgP4AfEpWJBlO1dhVB9Pcg7Aojn6%2FZA3DJbGzLTDRZyy7O6nqdW%2Fndc%2B5NgDh82eM2JCTHuX474SCOxPYXCeVQr9pxXsVCHDkp5qEkj3rVF6M5Mnl8e8dzkC3ipgafVlrukfHt91r%2Fs9izWSZfwMGhvKiDMel40xA95xv%2BfmQQ9kzZxY5PGbtF0SECjUWwyMmBuZR3Us6j16za3PVajmqma5RaRJM9Rqwr9uoSVDma%2BWmncxgxhfoUkYJGQZ%2FS6nKHqY1DOOmKPZXhdQ44dx98wqOUYNp7io0IXgmZiyDnFSnvxXeP5rZoeg4lrD5Ois%2BhtUySdXTDMsZSF%2Bpa5M%2Fd6wHPxhhqArWzEyhw35Y8nxhmjItoaHe0BR8yNoPlEB8%2BGKXs9OkJYwXAxQ0l5sGlmrfFxATt7CLlDlOINlAO2DhazSkcHxCnNth%2BXOPRBN2a5lG0ywWmz84fk8dS6dNitvv19SMKHeXy1VYIR2h69s6hjRMU94%2FhOrGjzDWzae%2BBjqkASTOwUs7woeEts6o4U2qrdwBAZ6gOIdgz1odAKY0KbIQYloJ%2BO8ytKH3f%2FBmtRL7cf6nHflUFCedl5fqLDGuQ3SHFJ4MOZuU49e8v4pv1yjqOhEUEnkJDvMRU8VNiBpwkfAihrAfwk4i30uaD2Bb5oek9kecEStuqiyJQVkbSpBl0rWyzj9g9V%2Fz%2F7NPtx9%2F0XesZe3i32LkFH14TwzY%2Ft%2Fvp0qf&X-Amz-Signature=51624cf0f7ac77be1c84d8f79041549beeca2c4dc0927a30fff39db94080be9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
