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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLL4MHT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFyQMJXIl30w4uM%2B0PNV7Czf8Kn2GSTr6PlJV6kq4bVtAiAIT%2B%2BkLlO1%2BtZgdrVP%2FL7Zqw4XYQNYmlF8II9%2FVKUAVCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMV8UOiXr%2B8bm7UeCIKtwDzubcVHS3ZSwmN3s68ln1djxeYxOp82HPY6dIeI9VXKSqMq1X6sVrfPRvF5TT6GQdXOspUU4ySsHFE%2BnXTap%2FNjpthR1fcdK%2FK8VKFGoZSMojbbB0PaYKdEBm3HqUgBSK5UJ7h2oqgBYAKEGM95Nomty8sFO1wo7PhKp%2Fl5uLLTS23Sp21sDsulQGaKY07Ml%2FNgap15g%2ByU7ABO%2FlincPXwOeljD%2BCq9%2B4PfJ6RNJU1VR%2BYC1dmv5RwxcrJzPuECofblGsOac2GB%2BjVMPOogFJIiwxQcHMVqZfvN%2FzN5SjV7OrhguMK9xNzppqc8J%2Bps%2BX%2BjTe4CPW%2BOiSapw%2BWG838zJzGrYK0kux%2BlM8GNHAVu%2FysBh5hd%2FQIMu3hItouh1yYFS%2Fx76N6W26V6uWPNLSerbbHnBiy09p51qkZSVGzlLKrsqjXaxlgt2lD9Wgozij0EKct%2BM0tR8mkmkUqpXaRmz3JGewKR6Wkim9OqVkM2xYrlovrdKW%2FKO78E4CmzXYw6i3gz%2FWAlEMfMX%2FlIaRGnY%2FICAMObsRxfqY4IsI%2FSR0xoZ5Dhna4RWfUzkhSYr%2FMm5ESW1VzCDXvFp18fVxhcHftesO8VGAkZpMBxMbailfBRwS%2F7EjmjngaswpZC2vgY6pgGZ3LjjoZnuXCiMHwBEBJEGrh3RhCcsEXnzv3YTUkb4p0JUKk9C5%2BqqE4NRkBrIAhnSyHrtIo7tBxYxuD3OJtSyBzXsoPLVMlxMnzpPZ0P%2B3i%2Fr0O9SEUITZb22x4%2FOyce%2Fgf3VtJbmQhQx6jjS%2Fza%2BQGqvy8wO3fHMpTDmFinKCNm6Dfldn089hPAV%2B5t1nFI2ag7Ftjdx9BcZtNA8%2BKBqoPmNEcWU&X-Amz-Signature=f5ad2816836d05944d09a236392d478603a4e8e597b5f9a81cab3347a36ffb44&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLL4MHT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFyQMJXIl30w4uM%2B0PNV7Czf8Kn2GSTr6PlJV6kq4bVtAiAIT%2B%2BkLlO1%2BtZgdrVP%2FL7Zqw4XYQNYmlF8II9%2FVKUAVCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMV8UOiXr%2B8bm7UeCIKtwDzubcVHS3ZSwmN3s68ln1djxeYxOp82HPY6dIeI9VXKSqMq1X6sVrfPRvF5TT6GQdXOspUU4ySsHFE%2BnXTap%2FNjpthR1fcdK%2FK8VKFGoZSMojbbB0PaYKdEBm3HqUgBSK5UJ7h2oqgBYAKEGM95Nomty8sFO1wo7PhKp%2Fl5uLLTS23Sp21sDsulQGaKY07Ml%2FNgap15g%2ByU7ABO%2FlincPXwOeljD%2BCq9%2B4PfJ6RNJU1VR%2BYC1dmv5RwxcrJzPuECofblGsOac2GB%2BjVMPOogFJIiwxQcHMVqZfvN%2FzN5SjV7OrhguMK9xNzppqc8J%2Bps%2BX%2BjTe4CPW%2BOiSapw%2BWG838zJzGrYK0kux%2BlM8GNHAVu%2FysBh5hd%2FQIMu3hItouh1yYFS%2Fx76N6W26V6uWPNLSerbbHnBiy09p51qkZSVGzlLKrsqjXaxlgt2lD9Wgozij0EKct%2BM0tR8mkmkUqpXaRmz3JGewKR6Wkim9OqVkM2xYrlovrdKW%2FKO78E4CmzXYw6i3gz%2FWAlEMfMX%2FlIaRGnY%2FICAMObsRxfqY4IsI%2FSR0xoZ5Dhna4RWfUzkhSYr%2FMm5ESW1VzCDXvFp18fVxhcHftesO8VGAkZpMBxMbailfBRwS%2F7EjmjngaswpZC2vgY6pgGZ3LjjoZnuXCiMHwBEBJEGrh3RhCcsEXnzv3YTUkb4p0JUKk9C5%2BqqE4NRkBrIAhnSyHrtIo7tBxYxuD3OJtSyBzXsoPLVMlxMnzpPZ0P%2B3i%2Fr0O9SEUITZb22x4%2FOyce%2Fgf3VtJbmQhQx6jjS%2Fza%2BQGqvy8wO3fHMpTDmFinKCNm6Dfldn089hPAV%2B5t1nFI2ag7Ftjdx9BcZtNA8%2BKBqoPmNEcWU&X-Amz-Signature=5bc91084ea14ebbf37446f0cb3ac32b2c25cf04e66de989e8033ed4ed4e1a908&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
