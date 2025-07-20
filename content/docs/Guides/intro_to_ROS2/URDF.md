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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7AFK4UO%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9cCUH6mB5%2Bae4n%2F%2FU3d3qUXdo4WLoEoRJ61LTzqn2GAiALs8kkcFUhr0OWuXCukR54RiuPoj8FEJ0g%2FKOLAM5sVyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRC%2BCaJLzyvZjdfCuKtwDYyPjB29DgW7z6i40qDoCl8CvCQWNGe99FnpKc%2FQNHVosjWg1UoiMAHDwSm%2FnczQIDKmDCySprZY3GWxgAOFVGXf8AoPSgF1jXNnPsSBU1aUBxu1Oi4N6G7YicF4DBTAxadyTj5bvL2S6JPCP0LNg4aGVaQWREZiBhTIoutEN3GuIM7HWqfeqLkplytoqSKg8ntcvygrCFWxe7jAPKAYPK9uWHTJxeWdvo51o6F%2FzR%2B75ANnLOmQR4h%2F2%2BbRsGC13SXmYgfByGHk5GIiRuEGF%2BgiIHt24Y%2Fhcvhlu45WGzQwG%2Fq6n2d295h3m8aRPZ92l3XU5eliq0ABpl1ahz%2B%2B17UMZ312TSt9C7%2ByQz8MehZhZeBBrBe3%2FqIlxcLBAJwXnE1tvYshcD7%2BMl9EBxcKZwCPDCCub%2FcAsrNmXx2zgeDdm8%2BB%2FiV4rOMrX53ctJIbZHE6UkpG8TKXW9ax1UE1H%2FF9NZiV6ACZaJb5SxR0h9jslYijCeuTLxVKUDhhlHcEH%2Fx2z3SNnXolIbhHRykN%2FprWnoczU0ZBkB6ixvWdZePojOeBNtGOIG3hCeSPhf05ZFqfKfT3P220C7uVFt6iX1%2BpSc%2Fh755CmgUaRoJxykmFJ4lTDjETqEpfXcuwwxt3zwwY6pgF6j7ERBnYKp55KVW3rj8TcX%2BRLPlXTRlK9dTG9prv4LtXmiuLNAzfwiqymjLXRld7t9pzTYxuP5AMumMaF3W6waxDYEagYKDZ66wnyhnoyK%2BZaxCtU4mElzy8xlte%2Fyk3xBYCvcovuR0tqLgji23L6zqgFHtgbFCfr34xLbpPV6ViWxX5dS%2B0uXi7aJWSZK6bHcDeHPjrqrPN5jE8NudSQu5hyTJg8&X-Amz-Signature=b7d17053fd5dc4a6230cc478a0ac169eceb5971407df6c3dd1dfb9b7a7fca7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7AFK4UO%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9cCUH6mB5%2Bae4n%2F%2FU3d3qUXdo4WLoEoRJ61LTzqn2GAiALs8kkcFUhr0OWuXCukR54RiuPoj8FEJ0g%2FKOLAM5sVyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRC%2BCaJLzyvZjdfCuKtwDYyPjB29DgW7z6i40qDoCl8CvCQWNGe99FnpKc%2FQNHVosjWg1UoiMAHDwSm%2FnczQIDKmDCySprZY3GWxgAOFVGXf8AoPSgF1jXNnPsSBU1aUBxu1Oi4N6G7YicF4DBTAxadyTj5bvL2S6JPCP0LNg4aGVaQWREZiBhTIoutEN3GuIM7HWqfeqLkplytoqSKg8ntcvygrCFWxe7jAPKAYPK9uWHTJxeWdvo51o6F%2FzR%2B75ANnLOmQR4h%2F2%2BbRsGC13SXmYgfByGHk5GIiRuEGF%2BgiIHt24Y%2Fhcvhlu45WGzQwG%2Fq6n2d295h3m8aRPZ92l3XU5eliq0ABpl1ahz%2B%2B17UMZ312TSt9C7%2ByQz8MehZhZeBBrBe3%2FqIlxcLBAJwXnE1tvYshcD7%2BMl9EBxcKZwCPDCCub%2FcAsrNmXx2zgeDdm8%2BB%2FiV4rOMrX53ctJIbZHE6UkpG8TKXW9ax1UE1H%2FF9NZiV6ACZaJb5SxR0h9jslYijCeuTLxVKUDhhlHcEH%2Fx2z3SNnXolIbhHRykN%2FprWnoczU0ZBkB6ixvWdZePojOeBNtGOIG3hCeSPhf05ZFqfKfT3P220C7uVFt6iX1%2BpSc%2Fh755CmgUaRoJxykmFJ4lTDjETqEpfXcuwwxt3zwwY6pgF6j7ERBnYKp55KVW3rj8TcX%2BRLPlXTRlK9dTG9prv4LtXmiuLNAzfwiqymjLXRld7t9pzTYxuP5AMumMaF3W6waxDYEagYKDZ66wnyhnoyK%2BZaxCtU4mElzy8xlte%2Fyk3xBYCvcovuR0tqLgji23L6zqgFHtgbFCfr34xLbpPV6ViWxX5dS%2B0uXi7aJWSZK6bHcDeHPjrqrPN5jE8NudSQu5hyTJg8&X-Amz-Signature=a7093b973d9d011d348e247a5e6e52b6cfa999f729b99ffaa41dbccb127587ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
