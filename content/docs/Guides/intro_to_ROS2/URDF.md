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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353KIXMW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAarknF08U75G%2FjkTmoWuq2Q%2BYBP8K0p2%2BMdmtSbpIYYAiEA7EzgkEr9mVi1KmPpBqHoL%2FghJpuyo8%2B%2FaERuE%2BnRQSIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDu0BmtVVvInqu2RWSrcA24TL6aP1lZMPHv1YwFEqM5KaiWvJTivwKirhrkPXhcWGU%2BIZV9apNAyP19Sq5Fbn3yTVkI4a80g9vUgqtWK1OqwosYTNWG1n6XCby29f2kGm%2BiDTNhkFHwEDLr0wEy4df88XBL7cdA6MQyDiX4JCDlfpkNiN5G6TjubEXpwdAL9zy%2Fca7o%2F%2BFGgM1rdleOCHIgrhrRVqUGOBRMewxaDR4uaQ%2FSElzsh9qcYXUXLeZz4vZp6VRjz89NYOYA8a9upkcl7hC3UkxypIvojXED0jLT977KAS55T5Fo4evDUiKjRJ0Of%2BVns7elNAQTow5vSsnx%2F5rTBwA9lEjytvVEAAQX7ZKnSHz6axPkc4vGB3tsLM6%2Bbz5BPmryFfJjmNc2BEWX2N%2BlQwLRVr%2FdRoRoi7I6DPcrIPDa%2BrBSo7OgEcSP73bfqs1v3k1NzvU7raq%2BufcGx8Xgk0kwq0i5RCkGqm96BofbHUF2ePMEjT%2BORcQSkn5BQdBIXNgQ%2BynNQKETIgvOSlszl1QezcCTcnjtwJ0DM1JBEg4Ep2G2WzaR%2FzD1M4BN8LTh%2FnuUhTZZzDFV3ScqWmQvInMhLvH5PcprpNsBUWTWYN4%2BtLiayHDimPKXg82VNuOuzQxyx8spUMLObyr0GOqUBPQZ638iIVhh7wRvQ88h6P4DspeztocPEf4Yz4WopsPjt9TsT9NChipNXGx1cmW5go0X8YmB3J57vRE6bpgIykxQmzsr5%2BePZzq2aI6pi3dj7HlD6%2FKafAeBbTbB7LUIt0rIgYSX1DKSSFbRGIyNAD8ObubTSGTzBhlkslvHOFZbJNvy6BN%2BjXG%2FkJ5QeI2S7q7ZunVoiYsSTfmfl5sf1pMSrsZuC&X-Amz-Signature=db110856d554a5c3bacda2b06216f63d2893f12299b18a98240372e56f6fd2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353KIXMW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAarknF08U75G%2FjkTmoWuq2Q%2BYBP8K0p2%2BMdmtSbpIYYAiEA7EzgkEr9mVi1KmPpBqHoL%2FghJpuyo8%2B%2FaERuE%2BnRQSIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDu0BmtVVvInqu2RWSrcA24TL6aP1lZMPHv1YwFEqM5KaiWvJTivwKirhrkPXhcWGU%2BIZV9apNAyP19Sq5Fbn3yTVkI4a80g9vUgqtWK1OqwosYTNWG1n6XCby29f2kGm%2BiDTNhkFHwEDLr0wEy4df88XBL7cdA6MQyDiX4JCDlfpkNiN5G6TjubEXpwdAL9zy%2Fca7o%2F%2BFGgM1rdleOCHIgrhrRVqUGOBRMewxaDR4uaQ%2FSElzsh9qcYXUXLeZz4vZp6VRjz89NYOYA8a9upkcl7hC3UkxypIvojXED0jLT977KAS55T5Fo4evDUiKjRJ0Of%2BVns7elNAQTow5vSsnx%2F5rTBwA9lEjytvVEAAQX7ZKnSHz6axPkc4vGB3tsLM6%2Bbz5BPmryFfJjmNc2BEWX2N%2BlQwLRVr%2FdRoRoi7I6DPcrIPDa%2BrBSo7OgEcSP73bfqs1v3k1NzvU7raq%2BufcGx8Xgk0kwq0i5RCkGqm96BofbHUF2ePMEjT%2BORcQSkn5BQdBIXNgQ%2BynNQKETIgvOSlszl1QezcCTcnjtwJ0DM1JBEg4Ep2G2WzaR%2FzD1M4BN8LTh%2FnuUhTZZzDFV3ScqWmQvInMhLvH5PcprpNsBUWTWYN4%2BtLiayHDimPKXg82VNuOuzQxyx8spUMLObyr0GOqUBPQZ638iIVhh7wRvQ88h6P4DspeztocPEf4Yz4WopsPjt9TsT9NChipNXGx1cmW5go0X8YmB3J57vRE6bpgIykxQmzsr5%2BePZzq2aI6pi3dj7HlD6%2FKafAeBbTbB7LUIt0rIgYSX1DKSSFbRGIyNAD8ObubTSGTzBhlkslvHOFZbJNvy6BN%2BjXG%2FkJ5QeI2S7q7ZunVoiYsSTfmfl5sf1pMSrsZuC&X-Amz-Signature=a08ec883d9b7835bda994d880a8ebe9250e298fc078455f2eecb554907c18ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
