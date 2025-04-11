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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMS7WVFP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBy7VkhSAeTuI7A72vLMkKQSwA0tUHdYWwsjnaRuOA5XAiEAlMqGQOpA036xbi71TCwoXlkOr3qz6UWQPFX6lMU2RNgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCifBH7BVHI2W5eNZSrcAx96tNEyCK54KUQl67AFHcukQKMo3fHHxFjz82gwzMsX%2Fz5RQO%2BXtdKC8kjwYM2fas4XkhhGCtFRNljc8H1nz05rg6qasxz89l%2BAQitqR3EG%2F98XvTS9lMcwOxZuz5BL2oUPNNr%2FzhWkSgNyqHE3FqHZQBRPDbX8pVPG7G3VSDYZZV9wiy1w46%2BhnAe%2F%2F34eFqJxJ4oB74n%2BuiTP8H%2FBmF4jSSY2x%2BF49oBrrNGCFiL4q%2BQJBHsguJJPlcR7H67xb1aDvcl%2F2I5hj3kJfNJUfOew18BuIw9kUvPGqCT8dX43mklEYopXTqsZXhA%2BbQW488e87NYAdkxUTplc4V6E%2BILH0SFz7kBF%2BC4Sc%2B%2BZDFaQvfSADonCbij%2B1Q1YaV8KpRbJ0dbvVJ%2FF86CaG3kPUpPShyijaaYcICcfTJbGG8IV6MfCE8V1tFKUkrLz8F0pIQW7srp%2FlsDoacTWl2OeZFQ0VvvflbkIwrYgU6rmUMJlXePHf%2FSj5NEK5lyL6%2BxjQ3OWn3%2BmD3GrJbNTY1BD6n%2FgUbnJ93GJ0Zf82nGY8x9QL69CTFjgifnP3VTrNLSHPWOuGIJKHlOGOpkUSmmfHnk4YfCJLCQulqYP2ptV9wvEqkqPBCrbRz1wLoh3MPzd4r8GOqUBL7XEEqKmR1re38NQ1CL1E8YhQwv9G4z8pbjCR%2F9wzSCLzcKSRF3oHHpTfHfRVPCSAoHuwsasw1dR5OUm3yj4KqEZhpwp8yid117a8eJmtYJX4Sj3tVIidBV7E22BC2t5hjWfvW7WDpxYVtXiHOZ9UUJAvnJYRrwfPtydjsla6WzfRtAjbnKfxGoTYyZ8miR2ypXUFDn1pFR8ES%2FuNt5csILfCUmJ&X-Amz-Signature=2fb57f06a58e4570d0b79fdbebea759061799fb296be34e0def36b8225411ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMS7WVFP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBy7VkhSAeTuI7A72vLMkKQSwA0tUHdYWwsjnaRuOA5XAiEAlMqGQOpA036xbi71TCwoXlkOr3qz6UWQPFX6lMU2RNgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCifBH7BVHI2W5eNZSrcAx96tNEyCK54KUQl67AFHcukQKMo3fHHxFjz82gwzMsX%2Fz5RQO%2BXtdKC8kjwYM2fas4XkhhGCtFRNljc8H1nz05rg6qasxz89l%2BAQitqR3EG%2F98XvTS9lMcwOxZuz5BL2oUPNNr%2FzhWkSgNyqHE3FqHZQBRPDbX8pVPG7G3VSDYZZV9wiy1w46%2BhnAe%2F%2F34eFqJxJ4oB74n%2BuiTP8H%2FBmF4jSSY2x%2BF49oBrrNGCFiL4q%2BQJBHsguJJPlcR7H67xb1aDvcl%2F2I5hj3kJfNJUfOew18BuIw9kUvPGqCT8dX43mklEYopXTqsZXhA%2BbQW488e87NYAdkxUTplc4V6E%2BILH0SFz7kBF%2BC4Sc%2B%2BZDFaQvfSADonCbij%2B1Q1YaV8KpRbJ0dbvVJ%2FF86CaG3kPUpPShyijaaYcICcfTJbGG8IV6MfCE8V1tFKUkrLz8F0pIQW7srp%2FlsDoacTWl2OeZFQ0VvvflbkIwrYgU6rmUMJlXePHf%2FSj5NEK5lyL6%2BxjQ3OWn3%2BmD3GrJbNTY1BD6n%2FgUbnJ93GJ0Zf82nGY8x9QL69CTFjgifnP3VTrNLSHPWOuGIJKHlOGOpkUSmmfHnk4YfCJLCQulqYP2ptV9wvEqkqPBCrbRz1wLoh3MPzd4r8GOqUBL7XEEqKmR1re38NQ1CL1E8YhQwv9G4z8pbjCR%2F9wzSCLzcKSRF3oHHpTfHfRVPCSAoHuwsasw1dR5OUm3yj4KqEZhpwp8yid117a8eJmtYJX4Sj3tVIidBV7E22BC2t5hjWfvW7WDpxYVtXiHOZ9UUJAvnJYRrwfPtydjsla6WzfRtAjbnKfxGoTYyZ8miR2ypXUFDn1pFR8ES%2FuNt5csILfCUmJ&X-Amz-Signature=c36275053bb55397ec6845ae87b84a304bf8b2bd2d89535e3a36c03ff4d3c00a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
