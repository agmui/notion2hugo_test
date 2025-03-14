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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7I7HRQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYcXbQzxVUtlFhQgAG2P%2B0vhtApJ0P5e2g6qvEhG0VwIhAJuXOG6JPJs3t93plFmcOTbrJu66SvMyfN7sIj0uAiiSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYKV7m5IeJSO2BjAwq3AOH%2FuIkYYaGV6qOT5EznhbYHbf3z5WU1or6xHyAGZ1Bjcuh%2FRIoKsM9OmXOiO7FXXiymczgLibrqJKNj3GkEtgtIOGwHS8et4OewY59SO9ryqKAXN3npb7uCE%2FMekSwIxokUjHVVLJgaI9intYA4hvwuNvxg%2FPUdu9WRV0gGFG3mf0IFDKQ6YNRgDC4DncxAh%2FKDPB5BX8K8bFMvB6KPzHraB5iUJQpVGEmipuq3jXW627mz5RF8v17SgyoYdYJidjfb6a91Kqq2AwzcX%2BmrYKChDRC88t6CGc5M%2F8%2BH2o86Qho3Vskbtlis0M9nmSJ74YLpXQTE1WniT9v68v%2Fxc0TN54foGDp1VO4n%2F3eP9aRbhKAYvm%2FLS7N3WD8S%2FHYMMdFCUfZ09ttOgnmAdDQ93AcO7XoynJpOc0qIdCEBjRD0uhyHqXzyhYXKfiCmDh7i0yOrK5NSRDfL%2BZLI7PKDqOPACc1zWZHUeKbfSucI%2BB6jwx039ubVxnPek%2Bphj%2BNJPP70cDN5LGRHoljk4UyxC8c5ymeKXKupYKH1Eqz9fdIxtJOgHlyhCp620ekwRX5qvSo%2F5ii%2FAxrWXREMoAAuAWU%2F66EuCJo%2F%2BVzxETc4i8jUORIk7AJ1xOjZR%2BwAzDfv9G%2BBjqkAQdkbDnloMHnK9KB%2BWAbPF0EeLvpsdndgLMgLxbTCXAlfeAvvbruZnoUakYq12YBDu3q1Y6zmjA6h%2BKJGjUpDR9W1kIFACsmwtUyDTkIHMeB2NRqScajtEwXqvb5vDkc6xcmI4RepPexfkI598AVT9DastA0A0Fs1hUs97rzhraDKp77Wdf6yr8n6iSEy7pqDEuw7HYbgmnJ%2FYKTrIBV2TTLmsAy&X-Amz-Signature=68eec122b2feef7f4096f7039dc7e0f577f39780def8c1e6bfd62d3c64a5bb56&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN7I7HRQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClYcXbQzxVUtlFhQgAG2P%2B0vhtApJ0P5e2g6qvEhG0VwIhAJuXOG6JPJs3t93plFmcOTbrJu66SvMyfN7sIj0uAiiSKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYKV7m5IeJSO2BjAwq3AOH%2FuIkYYaGV6qOT5EznhbYHbf3z5WU1or6xHyAGZ1Bjcuh%2FRIoKsM9OmXOiO7FXXiymczgLibrqJKNj3GkEtgtIOGwHS8et4OewY59SO9ryqKAXN3npb7uCE%2FMekSwIxokUjHVVLJgaI9intYA4hvwuNvxg%2FPUdu9WRV0gGFG3mf0IFDKQ6YNRgDC4DncxAh%2FKDPB5BX8K8bFMvB6KPzHraB5iUJQpVGEmipuq3jXW627mz5RF8v17SgyoYdYJidjfb6a91Kqq2AwzcX%2BmrYKChDRC88t6CGc5M%2F8%2BH2o86Qho3Vskbtlis0M9nmSJ74YLpXQTE1WniT9v68v%2Fxc0TN54foGDp1VO4n%2F3eP9aRbhKAYvm%2FLS7N3WD8S%2FHYMMdFCUfZ09ttOgnmAdDQ93AcO7XoynJpOc0qIdCEBjRD0uhyHqXzyhYXKfiCmDh7i0yOrK5NSRDfL%2BZLI7PKDqOPACc1zWZHUeKbfSucI%2BB6jwx039ubVxnPek%2Bphj%2BNJPP70cDN5LGRHoljk4UyxC8c5ymeKXKupYKH1Eqz9fdIxtJOgHlyhCp620ekwRX5qvSo%2F5ii%2FAxrWXREMoAAuAWU%2F66EuCJo%2F%2BVzxETc4i8jUORIk7AJ1xOjZR%2BwAzDfv9G%2BBjqkAQdkbDnloMHnK9KB%2BWAbPF0EeLvpsdndgLMgLxbTCXAlfeAvvbruZnoUakYq12YBDu3q1Y6zmjA6h%2BKJGjUpDR9W1kIFACsmwtUyDTkIHMeB2NRqScajtEwXqvb5vDkc6xcmI4RepPexfkI598AVT9DastA0A0Fs1hUs97rzhraDKp77Wdf6yr8n6iSEy7pqDEuw7HYbgmnJ%2FYKTrIBV2TTLmsAy&X-Amz-Signature=837d3f33da4a16c70adcfb2a6692d2d6d6390c304a4c1413cafa03c653330341&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
