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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FIQW2BH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAmTHRgaVpJorVbUGLH0Y4V6D%2BLdKFmRnplrbSfoaURpAiEAhwUAGN%2BJzESm1RrcbOrQulA28ofMA%2FFnega35VWCIoAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDlh5mmSbOGAcLKfoSrcA73UWwdgFjpxyIlpVAByfFHTdKNMPIcZCTefCQicrBifhpwtDKsPT%2F%2Bfr0DLDb%2F18bKnmau9Y1dNom8T8M62ClFW7WU7JjhB0iQGd78TMeE5J1r64H0gEREh97yX9K%2FNLo2xZgH2TLOgGfKFGUcp8a0anFFJgTZsa7icikv3cZExCvO3mw689iWfCp%2Fe1BHtOLs98ei2xfkftNXm7PxnayCiMSd8bpWgOIlF3zSsdPKHXE4t8L3LjeKJikVn9ekRqtVlyFb1Ybtvp3LkfAWOHOZE12fLGQDdMik%2FTtbuoAIBBkby4vFfzd3U4SQJIvM7yyV5CsMxrlod%2FNQgXKybspzTHQtIjSQoU9AhymN3dx6s0aM5hS6Pjdq%2FjdvvJ%2FR3m9satn1Vh28GMZ1VdSP2vuFhIqr4MKWOff3civeScxpZYw22ZfhBJMNQT4RsNZva%2B3YauCOpU4MrHLwQojU4%2BsRSuzg9DLL7WEzrhY16oaM%2BxCWC%2BX3dXrXCTklb2GT6lz2WmMr%2F2emqbWNr5%2FnIf%2FB5iU61tm9F9UFE%2BxkvmikGgRXbevEK7IZHJG%2Bovxd0mUi5WhS4mZ%2FUUnR7JstQXsRcyty7mJMmwbN0UYnA6OfHD5PFZI3AltZ5nxGQMJKblb0GOqUBrpgF0cUKLy6R7WfX23gAXpV8Legr6XNm%2BsokEKKIkrOqgeQB7wLZH%2FdsmMnuEhRH8LTlv68JB0%2Ft%2FWqLWStMQ7FrStJgGgy6vE7i99BIRylN%2BYPhPEr1j%2Bz1v56PLH1elhDCUtfX3weX8G82CBr29h4iVu%2BV%2BIpFkbgwLc6doaI20QgYk%2Bx4KAh4A8uv%2Bl7cqjwDX1gYSTuVaU93N99PvcHLK1At&X-Amz-Signature=d348724f7329b65f84b9499099be014d714b360533085d372a4ab814f8a42264&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FIQW2BH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAmTHRgaVpJorVbUGLH0Y4V6D%2BLdKFmRnplrbSfoaURpAiEAhwUAGN%2BJzESm1RrcbOrQulA28ofMA%2FFnega35VWCIoAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDlh5mmSbOGAcLKfoSrcA73UWwdgFjpxyIlpVAByfFHTdKNMPIcZCTefCQicrBifhpwtDKsPT%2F%2Bfr0DLDb%2F18bKnmau9Y1dNom8T8M62ClFW7WU7JjhB0iQGd78TMeE5J1r64H0gEREh97yX9K%2FNLo2xZgH2TLOgGfKFGUcp8a0anFFJgTZsa7icikv3cZExCvO3mw689iWfCp%2Fe1BHtOLs98ei2xfkftNXm7PxnayCiMSd8bpWgOIlF3zSsdPKHXE4t8L3LjeKJikVn9ekRqtVlyFb1Ybtvp3LkfAWOHOZE12fLGQDdMik%2FTtbuoAIBBkby4vFfzd3U4SQJIvM7yyV5CsMxrlod%2FNQgXKybspzTHQtIjSQoU9AhymN3dx6s0aM5hS6Pjdq%2FjdvvJ%2FR3m9satn1Vh28GMZ1VdSP2vuFhIqr4MKWOff3civeScxpZYw22ZfhBJMNQT4RsNZva%2B3YauCOpU4MrHLwQojU4%2BsRSuzg9DLL7WEzrhY16oaM%2BxCWC%2BX3dXrXCTklb2GT6lz2WmMr%2F2emqbWNr5%2FnIf%2FB5iU61tm9F9UFE%2BxkvmikGgRXbevEK7IZHJG%2Bovxd0mUi5WhS4mZ%2FUUnR7JstQXsRcyty7mJMmwbN0UYnA6OfHD5PFZI3AltZ5nxGQMJKblb0GOqUBrpgF0cUKLy6R7WfX23gAXpV8Legr6XNm%2BsokEKKIkrOqgeQB7wLZH%2FdsmMnuEhRH8LTlv68JB0%2Ft%2FWqLWStMQ7FrStJgGgy6vE7i99BIRylN%2BYPhPEr1j%2Bz1v56PLH1elhDCUtfX3weX8G82CBr29h4iVu%2BV%2BIpFkbgwLc6doaI20QgYk%2Bx4KAh4A8uv%2Bl7cqjwDX1gYSTuVaU93N99PvcHLK1At&X-Amz-Signature=027bc2c5ade36d3445b3cd77f76c11d086e71929879c3c5dc50b632e9e03b678&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
