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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BKPB7T5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FiiQK07Q2H7PBTtBVU06tppqODkg9I%2FJNZwtLQPYnCQIgKwRRX63DFbm3i26k3cCsX8HcPhIBeHMi9Jqrj37H5ZQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSzQ0xPoDn50UQaoyrcA2omdgp%2B3dTb5MMbgS8MPtzotL7b4VlTAqByNDntjEzE7x3OMM2BtnJeRt0KV%2BLR3cMln2n2G0CTYYjbEUKA6fVzza%2BI%2BsxtAbiIJsE%2FeCHopOQviuWNj2CzjAQCKTFFFasg%2F6u63%2FNz1ldTUiSIjnnEo0PN3iKsHrfawgsW0uM3UiPNbnHe57o2ur3p50uFxVw8xEtX53GFLp%2FzXV7GUWkHY16lKzIp6m65AjdJt3ZeYfe%2BYz6IYsE%2FHZcIc6aGf44S7go6NHYXsE3KH7BtlxSlf6no6SP1psSLa0DpTY6n2fnOYGw0m1woeiAjNHXhI5%2B1Wjmwclj1RYEwIXwWAs2qYbGPtWVMMvGseeJ7C2Zjnpkk3l2WtrI6ZWRM84jLz9KE%2FEhm%2BzR945k%2BV9Dau0UZrN3CU9vEAOLaFTFKHqAAL8X%2ByGtrdcDIi1uUjFQcDrQwze8rYLwmWhnXaTARbVrsdMYSjrhJnK9PA99aKwmCms%2BDal8BfR6czJqSMX1mcQRqWhOt3F7043%2BsW0K6m%2B%2F7vNnywaO6Z2vadtBZcsIoiVaNmNwYgmq8mJfyObAtDzjEzKR5TfjZxDygTRrFsu8biTcFDFcFeE%2FHcQDPebCviR5uEGlRA2lhpA5EMM2a7cEGOqUBkhmYCcXJtVdeNwPHXKgliCxlrNPjBRlmd4ou6C%2BKUozkZxr6QPMZ4OfZc9qTqr1SZqHXS7i2%2FKErWEt682jsDOadASsSh5I%2FVBg5yDVU6ulsPj1LVKBXrL2MaQ%2FQDvyJ0LfS4E3fpbUvkWvkV74PMXJEfdEnftwCjd%2BAix8cogWwYjipQLh63AWPpdtVSBaPnXjRo0xyBakUCCETgBmO8ouA2Ixl&X-Amz-Signature=4798b9de3597d761ab4fdaa73ef8dbfe0cc77d01404422f8619e8146d47269bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BKPB7T5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FiiQK07Q2H7PBTtBVU06tppqODkg9I%2FJNZwtLQPYnCQIgKwRRX63DFbm3i26k3cCsX8HcPhIBeHMi9Jqrj37H5ZQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSzQ0xPoDn50UQaoyrcA2omdgp%2B3dTb5MMbgS8MPtzotL7b4VlTAqByNDntjEzE7x3OMM2BtnJeRt0KV%2BLR3cMln2n2G0CTYYjbEUKA6fVzza%2BI%2BsxtAbiIJsE%2FeCHopOQviuWNj2CzjAQCKTFFFasg%2F6u63%2FNz1ldTUiSIjnnEo0PN3iKsHrfawgsW0uM3UiPNbnHe57o2ur3p50uFxVw8xEtX53GFLp%2FzXV7GUWkHY16lKzIp6m65AjdJt3ZeYfe%2BYz6IYsE%2FHZcIc6aGf44S7go6NHYXsE3KH7BtlxSlf6no6SP1psSLa0DpTY6n2fnOYGw0m1woeiAjNHXhI5%2B1Wjmwclj1RYEwIXwWAs2qYbGPtWVMMvGseeJ7C2Zjnpkk3l2WtrI6ZWRM84jLz9KE%2FEhm%2BzR945k%2BV9Dau0UZrN3CU9vEAOLaFTFKHqAAL8X%2ByGtrdcDIi1uUjFQcDrQwze8rYLwmWhnXaTARbVrsdMYSjrhJnK9PA99aKwmCms%2BDal8BfR6czJqSMX1mcQRqWhOt3F7043%2BsW0K6m%2B%2F7vNnywaO6Z2vadtBZcsIoiVaNmNwYgmq8mJfyObAtDzjEzKR5TfjZxDygTRrFsu8biTcFDFcFeE%2FHcQDPebCviR5uEGlRA2lhpA5EMM2a7cEGOqUBkhmYCcXJtVdeNwPHXKgliCxlrNPjBRlmd4ou6C%2BKUozkZxr6QPMZ4OfZc9qTqr1SZqHXS7i2%2FKErWEt682jsDOadASsSh5I%2FVBg5yDVU6ulsPj1LVKBXrL2MaQ%2FQDvyJ0LfS4E3fpbUvkWvkV74PMXJEfdEnftwCjd%2BAix8cogWwYjipQLh63AWPpdtVSBaPnXjRo0xyBakUCCETgBmO8ouA2Ixl&X-Amz-Signature=c0f9c312950ac951a7655001e54ab3337c6a388f2ebd19e60871381aa5f9a881&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
