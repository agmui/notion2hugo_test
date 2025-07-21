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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTOP6XZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRHAPm2kXSP4e0bCilMYtIWa%2By0C4wT8cu2KvN%2FQOvVQIgfA6cKlIznKTV53USALVz7O4evwR06Ds17R5oxupBuxcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsHVQMYS75DxyR%2FcircA%2FS85s9XbPu5lZ6EBTGFw78SNbPZAdltsz2V560SqhxRwYQd8dNQ%2B4frkY44GrYHkQdKYxEeUx%2FezXXkzIQtaooXYGTyT9GumMeyq9eVhiu0%2B8KfbSbHqDJTfEVxL9dMPwdgic8KaUU%2Bpazs%2BQ2Yf6yaJIBzi%2BDyE8hUlKCM0LQx%2FgLE96J8EOfGEWuaf74CDewBLjGqkUEWC53bbSsU3g6LoSI7LDtKP7dtfbzwKGOIc8ybi9dgtKcy7pvGtYix5w71EKxAN6wBfdbBI2EsJlTRBWQRRaWJABesXTdSrj8hQFxV%2FIE%2FaQkU6KaZdYBYxWEDli2oy6ydpoRT9Qv%2FUcwjD8Fm1byMxo6B%2FuoNnvzus4ExU9tfQM1pi1mVMf0IYW%2FMREPnLxwYUDU2rVRabX858VDqnLSKil7PeOnXFZJVmaCfrMoj1f5DqpTJr4OrOCjarur3IhsCCAILVNpL7r3G6dncV8VE0dJ8B7Cp8YG3DMxgKfsiNIV9t%2BqGhvAltygtQxKPUucBL33rYZfz2WdjkBhl2cr4VhX7sMXu5G%2FxOxKiyQ4gDUlNYv4kWneqDKTzBBmg6nwNuAQ7kKxqgJpovN%2BQC4JDvp8scwtbgyM84g6PfuNSggr%2FA9gsMNrn%2BcMGOqUBKP0vOab4Sj79tDVginEgxG1S5tP%2FzsW5Z3xHHYZ%2BMvKicTWFi9oNkEOFz1sSTJ924pN4it4e%2FjuUtGt9talK%2B4UMxcalV%2F9%2BsiW3LAJd9Z1dxK6l5z6tV6nzOa%2F7J%2Fjaua7%2Bg77ZeTu08AuHYHxGV%2F7nADriwhnz1H51jH5vaFrQHj86i7bw45U%2FwG5e%2F%2FzX6oNtQm81cFDJkB1SC%2FRmlvck0dST&X-Amz-Signature=5d39114ca1b3fe92eb60c41c030e3a6111d6ba3d7bea57d797e7f4a98f78678a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTOP6XZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRHAPm2kXSP4e0bCilMYtIWa%2By0C4wT8cu2KvN%2FQOvVQIgfA6cKlIznKTV53USALVz7O4evwR06Ds17R5oxupBuxcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsHVQMYS75DxyR%2FcircA%2FS85s9XbPu5lZ6EBTGFw78SNbPZAdltsz2V560SqhxRwYQd8dNQ%2B4frkY44GrYHkQdKYxEeUx%2FezXXkzIQtaooXYGTyT9GumMeyq9eVhiu0%2B8KfbSbHqDJTfEVxL9dMPwdgic8KaUU%2Bpazs%2BQ2Yf6yaJIBzi%2BDyE8hUlKCM0LQx%2FgLE96J8EOfGEWuaf74CDewBLjGqkUEWC53bbSsU3g6LoSI7LDtKP7dtfbzwKGOIc8ybi9dgtKcy7pvGtYix5w71EKxAN6wBfdbBI2EsJlTRBWQRRaWJABesXTdSrj8hQFxV%2FIE%2FaQkU6KaZdYBYxWEDli2oy6ydpoRT9Qv%2FUcwjD8Fm1byMxo6B%2FuoNnvzus4ExU9tfQM1pi1mVMf0IYW%2FMREPnLxwYUDU2rVRabX858VDqnLSKil7PeOnXFZJVmaCfrMoj1f5DqpTJr4OrOCjarur3IhsCCAILVNpL7r3G6dncV8VE0dJ8B7Cp8YG3DMxgKfsiNIV9t%2BqGhvAltygtQxKPUucBL33rYZfz2WdjkBhl2cr4VhX7sMXu5G%2FxOxKiyQ4gDUlNYv4kWneqDKTzBBmg6nwNuAQ7kKxqgJpovN%2BQC4JDvp8scwtbgyM84g6PfuNSggr%2FA9gsMNrn%2BcMGOqUBKP0vOab4Sj79tDVginEgxG1S5tP%2FzsW5Z3xHHYZ%2BMvKicTWFi9oNkEOFz1sSTJ924pN4it4e%2FjuUtGt9talK%2B4UMxcalV%2F9%2BsiW3LAJd9Z1dxK6l5z6tV6nzOa%2F7J%2Fjaua7%2Bg77ZeTu08AuHYHxGV%2F7nADriwhnz1H51jH5vaFrQHj86i7bw45U%2FwG5e%2F%2FzX6oNtQm81cFDJkB1SC%2FRmlvck0dST&X-Amz-Signature=e0a777885a676295f7d1cf83e50f4657f3d7c5b0cbf60a44b0d908c95f0e3c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
