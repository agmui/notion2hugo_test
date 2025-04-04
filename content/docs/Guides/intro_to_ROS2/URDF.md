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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y33GEZY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU4R5XQA%2FwYoB6IXC2cfRl7lWStHkrs0y1qc4P5Ee1rAiEAiV%2BqJK%2B5co0S%2B3gjjfnHvSMVTtDG4cn1YuGnynFt1zQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB%2FnU4tItsfjIdpL4ircA1PQVs71gXfmQQls0QeOUDHkTLcykXonnhyfjuxb5mCwHAN5hqmMzOBKQnEWJvEfaipZelhByWBv8TFKaqOQHWXlynXBxMkAq4lcZkwG7jNKw7U%2FiPqypb4nElZxNaUXlmJIVbXFnezP5KdJrPF9erkI5zYhIK1nIJhexTnTbHyAazwPH1kK7ofsHSoVtkuvg0i8DZGxFXhMfk6OlYJcXzp8%2B05cRtk610PAcapIjMpgL323ELY8IsGHb6XYGGcCa%2F3ZRm2fRgW5ObRZ94zaKkyTnafMYwWawr56g%2FHXBgLEwmPBRCXFn32tfFutiRgUzo%2BzSl9AY3S%2B8tYT31F%2Fy0vFSm%2FYMWrkbb7t%2FYMJ8Ue0qAsi%2B6PBPvkxomt%2FfbEwf2GSjZr9Alu1DQgCHCfexCu%2B6%2BmzKZOSsRGYxBPTD8cbsWU9dkZD0I9Mxc%2FfMOdIpNPLt%2B4ObRVM8KuTNofogCOuDnSCtC2suShugK8awR9ONCdtPOY8URA9EVG%2FrO1jfCZdZ4hk2Fw4EGky9Du9Kg%2BkGS0O1zmRSjhGygw%2F2F%2Fj5lLdRKk1uKwz8aDLeUiFzyetfYglY2fj%2FREWYgNG7ChIeYK6fWpcIqgsBAC8JBg3hOIMcTm7jVElluvnMKKcwL8GOqUBoQBcLdu7I8L8ndb0n1%2FXM2JqvncyeVnv123U1zPdqEuaeV80be%2FPkAaDq1fwmC1ttBHmjd6XJr741ZxyRU1ufuBfzdbp4tu%2FQcd%2F%2B%2FF6mM3aMDp3FjmU6dX6IpY6HpryYKzeOFbzCSYS9QgrriNE%2FQZNsxc%2FGfH8dYzjMD9SqkhM4S9hZuMaqSrErmFfv%2BCd75N8Y0Xlko88mD2XwzA3vlxZ8hEh&X-Amz-Signature=d25f66e2f925d32edf68f19de86a7343bba6063fca07435ca11d603378b5f7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y33GEZY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU4R5XQA%2FwYoB6IXC2cfRl7lWStHkrs0y1qc4P5Ee1rAiEAiV%2BqJK%2B5co0S%2B3gjjfnHvSMVTtDG4cn1YuGnynFt1zQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB%2FnU4tItsfjIdpL4ircA1PQVs71gXfmQQls0QeOUDHkTLcykXonnhyfjuxb5mCwHAN5hqmMzOBKQnEWJvEfaipZelhByWBv8TFKaqOQHWXlynXBxMkAq4lcZkwG7jNKw7U%2FiPqypb4nElZxNaUXlmJIVbXFnezP5KdJrPF9erkI5zYhIK1nIJhexTnTbHyAazwPH1kK7ofsHSoVtkuvg0i8DZGxFXhMfk6OlYJcXzp8%2B05cRtk610PAcapIjMpgL323ELY8IsGHb6XYGGcCa%2F3ZRm2fRgW5ObRZ94zaKkyTnafMYwWawr56g%2FHXBgLEwmPBRCXFn32tfFutiRgUzo%2BzSl9AY3S%2B8tYT31F%2Fy0vFSm%2FYMWrkbb7t%2FYMJ8Ue0qAsi%2B6PBPvkxomt%2FfbEwf2GSjZr9Alu1DQgCHCfexCu%2B6%2BmzKZOSsRGYxBPTD8cbsWU9dkZD0I9Mxc%2FfMOdIpNPLt%2B4ObRVM8KuTNofogCOuDnSCtC2suShugK8awR9ONCdtPOY8URA9EVG%2FrO1jfCZdZ4hk2Fw4EGky9Du9Kg%2BkGS0O1zmRSjhGygw%2F2F%2Fj5lLdRKk1uKwz8aDLeUiFzyetfYglY2fj%2FREWYgNG7ChIeYK6fWpcIqgsBAC8JBg3hOIMcTm7jVElluvnMKKcwL8GOqUBoQBcLdu7I8L8ndb0n1%2FXM2JqvncyeVnv123U1zPdqEuaeV80be%2FPkAaDq1fwmC1ttBHmjd6XJr741ZxyRU1ufuBfzdbp4tu%2FQcd%2F%2B%2FF6mM3aMDp3FjmU6dX6IpY6HpryYKzeOFbzCSYS9QgrriNE%2FQZNsxc%2FGfH8dYzjMD9SqkhM4S9hZuMaqSrErmFfv%2BCd75N8Y0Xlko88mD2XwzA3vlxZ8hEh&X-Amz-Signature=54d5d578e91505622c92ac690bb4f6a726eae548150fee2357465c13fdbd54ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
