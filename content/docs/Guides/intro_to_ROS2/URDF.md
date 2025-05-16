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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWGEGMD%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoOOAiegF7v72eOH2VqNfJNCjs8khp%2B06gx9XHULWyeQIhAKfOJPZNXfQrAp%2FjC1R004I0rWkTlue5jvrhOA1EASz0Kv8DCEQQABoMNjM3NDIzMTgzODA1Igx47LEr2u8ExsXQm5oq3ANoCSPAxXOBRzs6iDbek4n8ZcpueElZyqOdwjY2HvBNP3AuyiwG%2BZQzXJ4L3FNvEm4PJsXeKVrigQrQEnrjA88BZAvVbwk%2BGavjsilmblg1PP2%2B3PqqF0Niha8eyFBy2w1yPTqMZICFHffnhhEed817v62P95anzZlu1OfSJ0KLhiiuIq%2BoO3DUfWPNEb%2FEQryuxTmz3Lsmm3EALaxSLE830QaaRPGL3D%2FTkp7qy3oeDmlhTfLFP3QLVgTKuu1DDenSL1qh50nSMSj2kJlbAxYICmUyPrLZ3N4g%2Bc0esDIHA2wBr094KelKQFMwhgSrkmt3eLelW2L%2FFmVaJDFUkqu3LEjUSn0eP5W5xZdzipfh2uQDg%2F6rW8mNpPZO5GTd0LK8clbcS2iesb47EdED0pMEZt1Cq5tTsVtSKqdFFtHICyLSPMdGhAZ5a9lDrduhhy7L7dnt3dt4wKzn55AWGppa0JX%2FiBlvZgmAtHqR42WH3UqD5aQRDZ3KNFlhUVpFMea%2BevpRi%2Fv3QarZZ7F91o73eUdyIA0PoI8H3zWNiTcYa7rxYZxDzp9366wiAVyX35i2T67LrpZHl0QlPlB1HpTUks4MwwJdHy44QooMnWCuW84sss%2FBjpDYTuLmQjD5wpzBBjqkAbk%2FB7z5N1CUtjMn5xXoNzu3ToyAr7BwjK7vc9IC3SADKCl60HXtLTJz3odW1%2BwSgI9FdAPPF8o1EJSzGQ7qnenURVNIak%2FusHq38zrfo37Y1dA9M6iututTAq2cgs7NWsS%2FvWSzw3gy3Rs7Amt0mjWBMwpJld%2BlqxJ8aTG4cZc7EdoG5FhocRlyNMNk0VbIT15YT8IbVMQ9ugHhjVHPXHcmJoR3&X-Amz-Signature=88942fd9cf8098360713af6817a9475360146f1847a46fb35de35044474dbdbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWGEGMD%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoOOAiegF7v72eOH2VqNfJNCjs8khp%2B06gx9XHULWyeQIhAKfOJPZNXfQrAp%2FjC1R004I0rWkTlue5jvrhOA1EASz0Kv8DCEQQABoMNjM3NDIzMTgzODA1Igx47LEr2u8ExsXQm5oq3ANoCSPAxXOBRzs6iDbek4n8ZcpueElZyqOdwjY2HvBNP3AuyiwG%2BZQzXJ4L3FNvEm4PJsXeKVrigQrQEnrjA88BZAvVbwk%2BGavjsilmblg1PP2%2B3PqqF0Niha8eyFBy2w1yPTqMZICFHffnhhEed817v62P95anzZlu1OfSJ0KLhiiuIq%2BoO3DUfWPNEb%2FEQryuxTmz3Lsmm3EALaxSLE830QaaRPGL3D%2FTkp7qy3oeDmlhTfLFP3QLVgTKuu1DDenSL1qh50nSMSj2kJlbAxYICmUyPrLZ3N4g%2Bc0esDIHA2wBr094KelKQFMwhgSrkmt3eLelW2L%2FFmVaJDFUkqu3LEjUSn0eP5W5xZdzipfh2uQDg%2F6rW8mNpPZO5GTd0LK8clbcS2iesb47EdED0pMEZt1Cq5tTsVtSKqdFFtHICyLSPMdGhAZ5a9lDrduhhy7L7dnt3dt4wKzn55AWGppa0JX%2FiBlvZgmAtHqR42WH3UqD5aQRDZ3KNFlhUVpFMea%2BevpRi%2Fv3QarZZ7F91o73eUdyIA0PoI8H3zWNiTcYa7rxYZxDzp9366wiAVyX35i2T67LrpZHl0QlPlB1HpTUks4MwwJdHy44QooMnWCuW84sss%2FBjpDYTuLmQjD5wpzBBjqkAbk%2FB7z5N1CUtjMn5xXoNzu3ToyAr7BwjK7vc9IC3SADKCl60HXtLTJz3odW1%2BwSgI9FdAPPF8o1EJSzGQ7qnenURVNIak%2FusHq38zrfo37Y1dA9M6iututTAq2cgs7NWsS%2FvWSzw3gy3Rs7Amt0mjWBMwpJld%2BlqxJ8aTG4cZc7EdoG5FhocRlyNMNk0VbIT15YT8IbVMQ9ugHhjVHPXHcmJoR3&X-Amz-Signature=86207847ad6a15ec316f1ecea5a4541d162993a68410a0efbde70538c266dc09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
