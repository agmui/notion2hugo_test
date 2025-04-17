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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AE35R24%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdUYC7xXi04m%2FJS4n4%2F0gOSzHKcoCalY3HJ7fkQZAe%2BQIhAMkhprsV78gVeyB48KG7osYP1uqWre4Ho9N761Ioqaq5Kv8DCGAQABoMNjM3NDIzMTgzODA1IgwWV2WLPsCea630fbMq3AORj7AHX9P6TLeY0IN6BtUT5%2Ft5c4HYiY9u6ocrmlqjneBkbg69D4%2BvzgY5UMGyvjeblvMcOsG%2FXxkjsWt6PkFBXHvASP5yE6MYdyHUoQf35TeByB4v23BGJSj4I9IJgAP9PlO4%2BP2FJlp0c0ZNoVGZ1jOb0nc9BmiKDSQmhFJlHb04b6neyfMCX3xuBxjqk72USLeLWzT65Mj%2FT%2BWlS%2Bsue1D7tHgR4%2FHMB6r3O33dfGI8XZiVz1ecmJaLYMPUbj0uiasX4XHWTJ62%2FZG3SZ2x%2FqrTTrk9YUhxpij9tiAaC188bcEDaEBxVPyT3zjub5YyK7eWMEc7GkEV8ImVFv9X1FjW4MKcIdN8TAfwQTVJp5Gt0e2TJi69mm4i2gn382dBRNIMWH%2FT0LBSC5qduH6p53BSSXm4yyycyP6j9ejToLSbkfqPDBk7Ni2JcBKjtCD90iCJoU3msQNPY1nVsInL8%2F7IV0PCNUVO3n6YlMip%2F1UJGmpnJy3eil9cHRHYWccuXbMykM0XH3Y4ZlA9KA6iH6h4n7Fg5mze%2Bi9ANjgI2ouCJPvXz43vSIt06JAaA6XHqqnsGlSkC%2F1jZ3eeqnm8rQEckAL7sOpX3MxLDw0aj6Yj5bCcrp1YUVyQGDD8r4TABjqkAVJJHLm0lNmdeQ14tum%2FV3qCigxpfIMYsC5ithBQ7Zc5ozm1z4SBUJ5lmOubbBceIWTU40KyYMkQsQNLNbBQuOdz8Ku8BZxlxSmtuOZfrHwP2y%2F1ne9%2FL0vMbdhyJHEkh2uMIoIYY9s9Tk60VRRj6Oo1JqwjVAmvKuzetPlD4%2FXI%2F1p1UVRQLVO7KW%2BKEAm3Fg9YWbfc9wcaoZnKqO0%2B1kW9ZYAQ&X-Amz-Signature=f20641c53e67884c38f7fac794ba9f19717c486ba44e9212a6662253810c8c75&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AE35R24%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdUYC7xXi04m%2FJS4n4%2F0gOSzHKcoCalY3HJ7fkQZAe%2BQIhAMkhprsV78gVeyB48KG7osYP1uqWre4Ho9N761Ioqaq5Kv8DCGAQABoMNjM3NDIzMTgzODA1IgwWV2WLPsCea630fbMq3AORj7AHX9P6TLeY0IN6BtUT5%2Ft5c4HYiY9u6ocrmlqjneBkbg69D4%2BvzgY5UMGyvjeblvMcOsG%2FXxkjsWt6PkFBXHvASP5yE6MYdyHUoQf35TeByB4v23BGJSj4I9IJgAP9PlO4%2BP2FJlp0c0ZNoVGZ1jOb0nc9BmiKDSQmhFJlHb04b6neyfMCX3xuBxjqk72USLeLWzT65Mj%2FT%2BWlS%2Bsue1D7tHgR4%2FHMB6r3O33dfGI8XZiVz1ecmJaLYMPUbj0uiasX4XHWTJ62%2FZG3SZ2x%2FqrTTrk9YUhxpij9tiAaC188bcEDaEBxVPyT3zjub5YyK7eWMEc7GkEV8ImVFv9X1FjW4MKcIdN8TAfwQTVJp5Gt0e2TJi69mm4i2gn382dBRNIMWH%2FT0LBSC5qduH6p53BSSXm4yyycyP6j9ejToLSbkfqPDBk7Ni2JcBKjtCD90iCJoU3msQNPY1nVsInL8%2F7IV0PCNUVO3n6YlMip%2F1UJGmpnJy3eil9cHRHYWccuXbMykM0XH3Y4ZlA9KA6iH6h4n7Fg5mze%2Bi9ANjgI2ouCJPvXz43vSIt06JAaA6XHqqnsGlSkC%2F1jZ3eeqnm8rQEckAL7sOpX3MxLDw0aj6Yj5bCcrp1YUVyQGDD8r4TABjqkAVJJHLm0lNmdeQ14tum%2FV3qCigxpfIMYsC5ithBQ7Zc5ozm1z4SBUJ5lmOubbBceIWTU40KyYMkQsQNLNbBQuOdz8Ku8BZxlxSmtuOZfrHwP2y%2F1ne9%2FL0vMbdhyJHEkh2uMIoIYY9s9Tk60VRRj6Oo1JqwjVAmvKuzetPlD4%2FXI%2F1p1UVRQLVO7KW%2BKEAm3Fg9YWbfc9wcaoZnKqO0%2B1kW9ZYAQ&X-Amz-Signature=fb244262d746e109a7e19a9b02e7f5b11c054364f42c46de66e0d738b846c4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
