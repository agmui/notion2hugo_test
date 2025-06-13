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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPADN5GJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD3fa2F7t4tO3xthrZPPLYn3GcP64RjJCRFi2Ml8Epl%2BQIhAIFXfFn0SV9RSczqOD2FGuEIxNkwMdubFgO7Vmm6tg00Kv8DCBkQABoMNjM3NDIzMTgzODA1IgwfszzZxGLiBbXkR%2Fwq3AOIsqMD8AevPIeyB%2FqxK5OR2E6GTPy0s58HCUa%2FPiu6LVyXgbukIAGr5KI0GMcOeDmOwaCpVvjE6Dcq5J0%2FuO2crTNiSlZOTbd0iW%2BsmvDehVTpwQc02WJVB0AcScAmLyEgJVANHx%2BIKsYUInte7DEkw07K6V5B2vqkSVi4cr20a%2BpCJMiUFC2EF%2FsNwrBOyW2Ou4CYw%2Bs8lBGeodiTfd%2BGv224948wHEfSTIbpzcgc0n90HZ2bjPpyueneSH6mGEXZtbAgVO%2FvCzDiXtoRdl%2FFTxguFBLotnB7vGUd3TwWHlgKzYB52q1KDNSkPZ1FAJQX4Gdp9jdDvGa1ZoT3VdtjkbgIjGy%2FhkVM7agtHkdDFv4PX2qheFwhLR5V9hGzf3zZnMuigF8pL5dBEuHDueMjzuVfELYIz74JmfFAiVwtbPjv4%2FQLutWcowr0%2Bsqc7ts4hFHsAev%2BWPB7oxTiAZ2e1RGtmRYp%2FCPvCXKXHZZ9gqkWDBvzsW0qjIMYHf0x5zkLm9MGjLMENYdnUwj11W6WUlXWCSBssR%2F20MQxetL5dZEzjSQUdu6CAWNJ3%2BaGXI4MsliDv7s%2B03Q%2BVJVuQKtam4skITY%2ByxCOzDOoRjOyUyYM0Z3jUWlYP3KLDzDIl7HCBjqkAbQN2ldc9v%2F2Dv4llbe%2BIBCfUahlStE9ysLagLNli20KzcfwizkSkpTjbcmK5oM0f%2BNRe0XG7YDY34mSKsm7vZvFaRHuDz93TF6iGK%2BJiOjTgoqaSj6LMIUCQDzRYId%2B%2B0t6Car%2FLu7aCHQvEHFkHR%2B0BseKeMdxZrKOCjjPZyMBxOD8a0Mps5kXYyPyavyYvt0jbTJvKeeI%2BSrf9mYl943NYupi&X-Amz-Signature=8992d8827b4f6fdc14d2e8cfa1bb52e04b0d6379e38edc0d0637f7833b14e282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPADN5GJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD3fa2F7t4tO3xthrZPPLYn3GcP64RjJCRFi2Ml8Epl%2BQIhAIFXfFn0SV9RSczqOD2FGuEIxNkwMdubFgO7Vmm6tg00Kv8DCBkQABoMNjM3NDIzMTgzODA1IgwfszzZxGLiBbXkR%2Fwq3AOIsqMD8AevPIeyB%2FqxK5OR2E6GTPy0s58HCUa%2FPiu6LVyXgbukIAGr5KI0GMcOeDmOwaCpVvjE6Dcq5J0%2FuO2crTNiSlZOTbd0iW%2BsmvDehVTpwQc02WJVB0AcScAmLyEgJVANHx%2BIKsYUInte7DEkw07K6V5B2vqkSVi4cr20a%2BpCJMiUFC2EF%2FsNwrBOyW2Ou4CYw%2Bs8lBGeodiTfd%2BGv224948wHEfSTIbpzcgc0n90HZ2bjPpyueneSH6mGEXZtbAgVO%2FvCzDiXtoRdl%2FFTxguFBLotnB7vGUd3TwWHlgKzYB52q1KDNSkPZ1FAJQX4Gdp9jdDvGa1ZoT3VdtjkbgIjGy%2FhkVM7agtHkdDFv4PX2qheFwhLR5V9hGzf3zZnMuigF8pL5dBEuHDueMjzuVfELYIz74JmfFAiVwtbPjv4%2FQLutWcowr0%2Bsqc7ts4hFHsAev%2BWPB7oxTiAZ2e1RGtmRYp%2FCPvCXKXHZZ9gqkWDBvzsW0qjIMYHf0x5zkLm9MGjLMENYdnUwj11W6WUlXWCSBssR%2F20MQxetL5dZEzjSQUdu6CAWNJ3%2BaGXI4MsliDv7s%2B03Q%2BVJVuQKtam4skITY%2ByxCOzDOoRjOyUyYM0Z3jUWlYP3KLDzDIl7HCBjqkAbQN2ldc9v%2F2Dv4llbe%2BIBCfUahlStE9ysLagLNli20KzcfwizkSkpTjbcmK5oM0f%2BNRe0XG7YDY34mSKsm7vZvFaRHuDz93TF6iGK%2BJiOjTgoqaSj6LMIUCQDzRYId%2B%2B0t6Car%2FLu7aCHQvEHFkHR%2B0BseKeMdxZrKOCjjPZyMBxOD8a0Mps5kXYyPyavyYvt0jbTJvKeeI%2BSrf9mYl943NYupi&X-Amz-Signature=79a225fcbf5ac9eb161c91a6d828f79876b1a1a48932b1a47735207bf23d0aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
