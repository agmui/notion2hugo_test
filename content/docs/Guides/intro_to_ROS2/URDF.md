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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=a445929488f475be88ed3d007d3fb4cb78b59874d8948fd19509b5679bd9cd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLBPOCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm97lzH5omSmd2dbwMSjXefs%2B7HhomHjePtUr%2BfyJA0wIgS5nONjSBxOQP4visLtE9rSRXUTIvORoCOS%2FPYA2fBTwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRrKYbojfgj0Bm7oyrcA7eqhXTLaI7gXJgTMCkOIJFpQ1h9ecV0EViLQJjIGlNeaPOhEDr%2B%2B%2Fi5XZhGCQNoLd322C0fOAQgWyAM7MHp1byhj0rUzc7oeF5%2BwDVKJbBR6iJSL%2BmCn3RtIelzH9tScguLkIbhZanK5Q3gjD8qMw4cDuSt3rZZTrn5o0UJJPerUphHkhtmfbddyNGfHM%2FTuuCwpdSp43hdF%2FAOuBpl13usbzp4hQ0aXmyblODJMhryt4MoYzdx66E0NtI%2BX276lTjQooJUwemyJHpM7vPQYbONU7ClJd%2BaTBULIiTHrcV%2BugrtJY1XvCXNkK9F64eGKFQRgxyAsgJU6oZJhPMGcduzcIpv8S5ygI2%2BmLrtRMaRRUOs11kdCpMyGrIuu05tMLbyNRqZKpqrOFF0XwdT2fPg4Az2gBQS7MiSxkUKGLUqJXHdev5BQaia9KQ7tkpfZHoT0ZCNminEsTb5u3P26Ytw24Nm3Zl2n8oJCzCOVphQAJIvWPgbEgk%2BojC1LzzTbZFmtjZf83VPQnYR0OHE%2FC2r5lFAwCdJ4Mfe5z%2B0jezu1dawOJT11NVTKANNNxgSbEMxwepbWM41m%2BSXXrDzym%2FGsrFAzlcMB9DwjFcPzJ4jeGtSSZe0InbvVo6RMIjl3MQGOqUBuFGpFD5Qz29aZoVZzFWmA6VBtTDAvpKzrd0T5kPFXeB1slCtwUJhLkUvsWtcQnslbnOEEyrTQE%2Bdq%2BwT6ZYLcpq0H1X8YMGs0bsxG6Geb9NR5eVfVIYH7Tu7dfDxzxfFINbnK17bECBFsHfk6O9I3Uk5Ae%2FHCYbz2rwDhxzz0LRLHuL%2FfEndmh4fnDy4hugdwsnWQx2JsWTiqB2yV6g1C4fBFDaq&X-Amz-Signature=de42ae53f1d2eb0694acb56579f69c820630d1a57bb27fa89d4c894e600ab225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
