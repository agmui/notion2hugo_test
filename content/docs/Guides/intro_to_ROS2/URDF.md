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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQ6VSZF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaSpP5JPk0iX0H7Canzqzm85HC9AvskhvziK2N92I9YQIhANJxru2gQWHNgC6zXSDhTgyCkudzlFEB2gTRBHbNbvzqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqx25hkBBbSEPw%2BrQq3ANpqP1fY5M4gAV8UAlWkf%2B9eGPWPiEw5LFGa6RtUmqLbDFP1snr%2BL3CtGgvknOdAAiihsbpcgQ1ABnR%2BSPaKnkEL5ZdpT2AtckwCTucVm1INYanGAY2dgME%2Fnp%2B16eNQ%2BAj6VLl%2B1npmmprmF2IsVbOy%2B5HLi0sUmeZYlpy1x%2FlGnIGbwIqQWvtd0rVy4IcCxjiGP6DIVi2XNH%2BxIL0v22yG64TvaXxPPlofRCLlSHEKuL1I8iMrj7ZDB2M8es1TNlHihG2jM4DnfOZ9jaC8FTw1qrt7OfCxHWF8R9jVm6zrrUTkuVTFRkl%2FtFj2KYR0SpiqKgOrpGmLVconldBdzUD5KPXaUtf%2FadLIAbvwh%2Fq%2FPO8OHts2HvwfQkXow5UG62N0TbshZY7NthOX%2BP8ox7Q%2F1gcmskXs8K09Id%2BcPXavcijgtyNnRLZrrnmqpP3vntLdl2w8WsRCtdT8rlYbSBxQdo2FZVjK1Sdhz5fB54vc1rAH3m5RyHCxWwP%2FIlc76udhhnvQPkSpEukdrSoZqtvP9s%2F62MdXk6RW5qOrVG%2B7HB49V%2FsmLaTM3ELMZSx3x1flWpB5%2FvDEiyBdJv%2FzzuXld0s8Wfo%2FsisWTVUIp8jISAYEIZKmZ4QP9%2FKgDD7oqjEBjqkAcAQTJVplcv86ba6m5xGuHCu5hdD4i8ArN8lLhul7q%2FwdtxvvEduFi8zgN8HUFFZcMMw3F1gmDhRMDg3WaDtBToA2ijRpK84xESX5s%2FaZGToe5Qr2uaSb6yIvH0B0etp4aVXGzV5gj%2FWMgdiKPBcpU8K0LOiflbZI9uFlG8VtHEajboaekBEcuMscRc2rze7cdrRE5KGi5nFQ85yef83TKYl9o4N&X-Amz-Signature=77f460277ead4f018d72a41174414cae3676ced3efd7bf5f19ca6de34db6eb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQ6VSZF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaSpP5JPk0iX0H7Canzqzm85HC9AvskhvziK2N92I9YQIhANJxru2gQWHNgC6zXSDhTgyCkudzlFEB2gTRBHbNbvzqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqx25hkBBbSEPw%2BrQq3ANpqP1fY5M4gAV8UAlWkf%2B9eGPWPiEw5LFGa6RtUmqLbDFP1snr%2BL3CtGgvknOdAAiihsbpcgQ1ABnR%2BSPaKnkEL5ZdpT2AtckwCTucVm1INYanGAY2dgME%2Fnp%2B16eNQ%2BAj6VLl%2B1npmmprmF2IsVbOy%2B5HLi0sUmeZYlpy1x%2FlGnIGbwIqQWvtd0rVy4IcCxjiGP6DIVi2XNH%2BxIL0v22yG64TvaXxPPlofRCLlSHEKuL1I8iMrj7ZDB2M8es1TNlHihG2jM4DnfOZ9jaC8FTw1qrt7OfCxHWF8R9jVm6zrrUTkuVTFRkl%2FtFj2KYR0SpiqKgOrpGmLVconldBdzUD5KPXaUtf%2FadLIAbvwh%2Fq%2FPO8OHts2HvwfQkXow5UG62N0TbshZY7NthOX%2BP8ox7Q%2F1gcmskXs8K09Id%2BcPXavcijgtyNnRLZrrnmqpP3vntLdl2w8WsRCtdT8rlYbSBxQdo2FZVjK1Sdhz5fB54vc1rAH3m5RyHCxWwP%2FIlc76udhhnvQPkSpEukdrSoZqtvP9s%2F62MdXk6RW5qOrVG%2B7HB49V%2FsmLaTM3ELMZSx3x1flWpB5%2FvDEiyBdJv%2FzzuXld0s8Wfo%2FsisWTVUIp8jISAYEIZKmZ4QP9%2FKgDD7oqjEBjqkAcAQTJVplcv86ba6m5xGuHCu5hdD4i8ArN8lLhul7q%2FwdtxvvEduFi8zgN8HUFFZcMMw3F1gmDhRMDg3WaDtBToA2ijRpK84xESX5s%2FaZGToe5Qr2uaSb6yIvH0B0etp4aVXGzV5gj%2FWMgdiKPBcpU8K0LOiflbZI9uFlG8VtHEajboaekBEcuMscRc2rze7cdrRE5KGi5nFQ85yef83TKYl9o4N&X-Amz-Signature=2bd4a4b585984d1593b7ed27a06d29968b1204fd77c2e60b6f8ba53dfc0b2183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
