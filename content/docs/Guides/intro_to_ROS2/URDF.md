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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GMS7GU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFheTywUUML31ib1hqSpOyW6eV7XWnIM%2Bc%2BGdacLJxFrAiEApxC7loYei21nMhITrtsHKZCzMf%2Bf2Vi1wgj9LPxfiiUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvE0%2FXPK9J399GkgyrcAxtursB%2FXv4ewgQkbms1CcFzuwKItyqBQk2jV5yqNIrIYbiNgJLf6o%2FnMnGrNA7R8KNgF5sdjPtiWoNujKFYYcM9eKIPtGTkxKCTPyjW0MlQP9mKU6v67f54VyOnFI9MFVfAtil31kJ0gG4SeXbaJ6GvVNS9pvcGjrh8%2BLGaJtEcb0Cq1lLla9ltM%2Bia1vl8S0BYmRtFV2%2B883CvRlI3CJycSvflPLQ7Ji5xV48x63v9Zd0rzyIxSmS4AfqSgPCfpOAadGb7uyZK8hZx8tO7xA88IpkOoptoBaekguazFpXicRFns5x%2FKSxHLkiBQvFwRAJqrGdK4kRdyfwjAVPU6kpEXLnNEDgXBZ7s1QDpuhgS4rpO27ERC3H1dTLaOT13dVjxDoi2bWjWlwyaWCo0P4s%2F4wvvxNZB1Ye2B5tGqILD5F2vbD3zdIcui6rcDE5dSaEyXUsMeyVsmUuSt5k3A5OmeGTxkUw9zlTSdRPVt4FOBlyo9DfPF0LDmxLBHJ8t9E7TOYQrj%2BgkmgMDC8PVQdDdehIHwklbGCTfR2Gy%2FdrN3Cqra4s5fSeQlDl7JpleLrD8w7ptBcjGVPUmiSQM0qQ6%2Bjkt3l%2BW3TIpc5KgouNebhhXiBXITEbA6TsDMKz2%2Br4GOqUBrku7xrOnsH%2FT%2BXBldRFK2suego1MRdXasEL8GBGCtVLO5PvZmIk5jRFzo191tPDP5VVN1g1hV2JuRXF9KWFwIqDP2jbQz0aKDQjuOvgxCGV58fNpZcQKNTcyCc7D4N%2FsKxrT%2FseDzt5%2BbZn0KniE9ao%2BGRd3XtV6GHfiJAM8aHsdYM%2BXmDH%2FVpFKe9NM4ZrsZ5Bmv7nJaFZtCVmkmzXz38OyMkL8&X-Amz-Signature=862ded498e3f69827681004b06de6b459928e70e98a87c9f5ec960ec273c9d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GMS7GU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFheTywUUML31ib1hqSpOyW6eV7XWnIM%2Bc%2BGdacLJxFrAiEApxC7loYei21nMhITrtsHKZCzMf%2Bf2Vi1wgj9LPxfiiUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvE0%2FXPK9J399GkgyrcAxtursB%2FXv4ewgQkbms1CcFzuwKItyqBQk2jV5yqNIrIYbiNgJLf6o%2FnMnGrNA7R8KNgF5sdjPtiWoNujKFYYcM9eKIPtGTkxKCTPyjW0MlQP9mKU6v67f54VyOnFI9MFVfAtil31kJ0gG4SeXbaJ6GvVNS9pvcGjrh8%2BLGaJtEcb0Cq1lLla9ltM%2Bia1vl8S0BYmRtFV2%2B883CvRlI3CJycSvflPLQ7Ji5xV48x63v9Zd0rzyIxSmS4AfqSgPCfpOAadGb7uyZK8hZx8tO7xA88IpkOoptoBaekguazFpXicRFns5x%2FKSxHLkiBQvFwRAJqrGdK4kRdyfwjAVPU6kpEXLnNEDgXBZ7s1QDpuhgS4rpO27ERC3H1dTLaOT13dVjxDoi2bWjWlwyaWCo0P4s%2F4wvvxNZB1Ye2B5tGqILD5F2vbD3zdIcui6rcDE5dSaEyXUsMeyVsmUuSt5k3A5OmeGTxkUw9zlTSdRPVt4FOBlyo9DfPF0LDmxLBHJ8t9E7TOYQrj%2BgkmgMDC8PVQdDdehIHwklbGCTfR2Gy%2FdrN3Cqra4s5fSeQlDl7JpleLrD8w7ptBcjGVPUmiSQM0qQ6%2Bjkt3l%2BW3TIpc5KgouNebhhXiBXITEbA6TsDMKz2%2Br4GOqUBrku7xrOnsH%2FT%2BXBldRFK2suego1MRdXasEL8GBGCtVLO5PvZmIk5jRFzo191tPDP5VVN1g1hV2JuRXF9KWFwIqDP2jbQz0aKDQjuOvgxCGV58fNpZcQKNTcyCc7D4N%2FsKxrT%2FseDzt5%2BbZn0KniE9ao%2BGRd3XtV6GHfiJAM8aHsdYM%2BXmDH%2FVpFKe9NM4ZrsZ5Bmv7nJaFZtCVmkmzXz38OyMkL8&X-Amz-Signature=90486dfab7934f34f607ca5d77598f94255d22cdde86ac276f7bf6360ed51a00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
