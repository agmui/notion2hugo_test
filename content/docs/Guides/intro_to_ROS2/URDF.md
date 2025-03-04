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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJ4CUPR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKn4enu5qPzVcOI%2Br7Vv8zfNvwBGi%2FNyVXsErx7IPkgIhAPMeJ3%2FNaT80%2BWmb%2BEK553jh5N2BvkXCb0vLDIvTtDX0KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytFKxgaKjWzQZP2kwq3AMK63WQKbglGCtHxGcuQ5kGymSrwdw57wHYuBIsisLl8EBQorYXqVdqyvlX%2BZMQtAFEvHeBPxvuqAShqBJoE%2FvQEtziT47ml9QACdQnH%2F8IyZS%2FnOEVU%2BCqjqIAm3%2FoBq45Uhdo5Xyo6fFu28%2FgsltbMLCqpoxOAyD1i9JxmprWBO4hhYiUYSN2EXiky2oWxH%2B4s33dEEiciesrPUOVTfCcHtOWo9iHvd4ytPIf21zH9JRVyv31sqmWJQ7qjlMaa6X5o0P3leqXpTgC45VeqX%2BuSa73H1iA1WvJAQklNvBs54aVwK8mIAi%2F4o39kd7pyzFKf1Zhr7Pm9I1ckKftJ1qFT9XlLiY8yPnh69mQvRtYqMFWPAwCOil42TX8l%2Fyy%2FG8EcrVbmZMEcYyYv908voiUP50BYgHKEbw6gbQEmIDzekPmtwia5MR1bobts%2Bg1gacGS%2F7K8WRLOsq15Mo1wukaxdov6l3veuRIjsGiRZBieUR0ha9Eyuo%2BeKl%2FF%2BCD%2BPVdPlchGxyWJ0Qn9gMVRXXySzErxSleFIFTWt%2FkoD2BF0K9i33ptrndmI0smgZej6MuFIrsNQT7zaMLfx7%2BYuieoVvPzN6Q0U3Mxzy1bkA2%2FfUzGiLSA8nCsjEjbTD6pJu%2BBjqkARXOcd2ICEH7dsZWrZSkshGXVpXbA2wdfoCgPcbRrFSlBzhzjicrgia31taYYGDsSRbuc9IwQWkwzAxVINBzHrrtlYtaMFnH4REt0e1WjnqjXbE9WCjoGRNwjZP8iWtfrPgEtPag4KVth7E0bNrb3pdh1fXpden%2FNQPNK%2FlC9GIIgoAWKODV%2F556OKs0Xj3PjLJaUehdO2kla8ZC3wundN3lwLTa&X-Amz-Signature=9e09cf00704dc04d7d7563cae39695a3ad9fc69a4760be1cb5729b77c69f1499&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJ4CUPR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKn4enu5qPzVcOI%2Br7Vv8zfNvwBGi%2FNyVXsErx7IPkgIhAPMeJ3%2FNaT80%2BWmb%2BEK553jh5N2BvkXCb0vLDIvTtDX0KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytFKxgaKjWzQZP2kwq3AMK63WQKbglGCtHxGcuQ5kGymSrwdw57wHYuBIsisLl8EBQorYXqVdqyvlX%2BZMQtAFEvHeBPxvuqAShqBJoE%2FvQEtziT47ml9QACdQnH%2F8IyZS%2FnOEVU%2BCqjqIAm3%2FoBq45Uhdo5Xyo6fFu28%2FgsltbMLCqpoxOAyD1i9JxmprWBO4hhYiUYSN2EXiky2oWxH%2B4s33dEEiciesrPUOVTfCcHtOWo9iHvd4ytPIf21zH9JRVyv31sqmWJQ7qjlMaa6X5o0P3leqXpTgC45VeqX%2BuSa73H1iA1WvJAQklNvBs54aVwK8mIAi%2F4o39kd7pyzFKf1Zhr7Pm9I1ckKftJ1qFT9XlLiY8yPnh69mQvRtYqMFWPAwCOil42TX8l%2Fyy%2FG8EcrVbmZMEcYyYv908voiUP50BYgHKEbw6gbQEmIDzekPmtwia5MR1bobts%2Bg1gacGS%2F7K8WRLOsq15Mo1wukaxdov6l3veuRIjsGiRZBieUR0ha9Eyuo%2BeKl%2FF%2BCD%2BPVdPlchGxyWJ0Qn9gMVRXXySzErxSleFIFTWt%2FkoD2BF0K9i33ptrndmI0smgZej6MuFIrsNQT7zaMLfx7%2BYuieoVvPzN6Q0U3Mxzy1bkA2%2FfUzGiLSA8nCsjEjbTD6pJu%2BBjqkARXOcd2ICEH7dsZWrZSkshGXVpXbA2wdfoCgPcbRrFSlBzhzjicrgia31taYYGDsSRbuc9IwQWkwzAxVINBzHrrtlYtaMFnH4REt0e1WjnqjXbE9WCjoGRNwjZP8iWtfrPgEtPag4KVth7E0bNrb3pdh1fXpden%2FNQPNK%2FlC9GIIgoAWKODV%2F556OKs0Xj3PjLJaUehdO2kla8ZC3wundN3lwLTa&X-Amz-Signature=39d77c3c9eb222f516329c0c9be89fc0a97ccfe44645b5a72d221ac9d54a53e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
