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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV4N7XX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFWgcVNeug5yXsBw1kqe2VfrYMYL%2BtiT1aYvyrsN5A7EAiEAxm8ZDaxySiUytGuOQwc%2BUI7oVueWG3dP6xuCO2tk0vsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKJ0cYGvQVWvRrO%2BeyrcA8BTclmweWGQEcYUWjKvtcxmwaDWZag3pKW9dOn%2FK0g%2Bb9PSCTSFrTWUZxIIvyYd4Z3dlRro7EHE4umobWtklmVBk6DlU88dXWfZdHwWwes9lepWMqHCreLdZ2reBNDAScxdC2w0PRAK%2Fh8LVjTnHBDiuFRSMoP6PjJru3toHTbGjBey0UGsZJ6blRcA3nW1IbPpJcqJ8KHEJ154Fj1u8iCgYSfsbvYa0XyXkHYu%2BqVQ4baTQ8X6uPHSI8TjuMPVs0z09wpd6YED8YJTkHXQHz6mVu2JEE1LRw5nsqbcfZOYZXHruEugJxHImLeZbBi7K%2BkJlRkMhzehLHU%2FZi%2BoS2%2FAd6vUhsoj%2BcJNUXaTTKHVjTjd549EhpRoPpEOsGYKrpf1tLLgjSNhh%2BrJLQ%2BN0dHbq%2FFKZa59qkPeFAWtNagUJGFZ5rdAmZhN86f1l%2F4U%2Fc5LvmnhON2C1E8m5om6ApgXXEOoVt6JBY1HPh0N8fmWgEKF%2B8%2FXs%2FXpSzH9M22PhoeoA1MYVmaCMK%2FeSj24TDpTmO5wdNX6zi0jn%2BsfyBxTz%2Fu0UnyGQTU5JqtWHRyGCWws3bHJu0HaWwo1EFcEbdzUF%2B3Css%2F9dfOFensEG0CnihKZHCd0W32FBvxtMLSMmL0GOqUB%2FP94iFI%2FDvkQy1h6nsQRDP%2B4fBPdZpil0oOW%2F5%2BMg5oLmAX1p%2BzPaWHen7qYxhCv9bXJ%2FpABro5HPc0smLxa8OKH5v%2B7BICOUHzC3rLqdCu2lUzvrXX1Xb9pSYH4euQ4VAqYvYPxe4wQJX21Ix8VCRkeh4BFexpL4QHTOFaRBErjSaGjEPKshoXiagP6m3p0qgxhzVPiiKSJUtyWoTohiWhRn8TV&X-Amz-Signature=9d3253a1267def3032b8f7c07e73ebd309f88d362db7dd8d32d114d6331c3474&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV4N7XX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFWgcVNeug5yXsBw1kqe2VfrYMYL%2BtiT1aYvyrsN5A7EAiEAxm8ZDaxySiUytGuOQwc%2BUI7oVueWG3dP6xuCO2tk0vsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKJ0cYGvQVWvRrO%2BeyrcA8BTclmweWGQEcYUWjKvtcxmwaDWZag3pKW9dOn%2FK0g%2Bb9PSCTSFrTWUZxIIvyYd4Z3dlRro7EHE4umobWtklmVBk6DlU88dXWfZdHwWwes9lepWMqHCreLdZ2reBNDAScxdC2w0PRAK%2Fh8LVjTnHBDiuFRSMoP6PjJru3toHTbGjBey0UGsZJ6blRcA3nW1IbPpJcqJ8KHEJ154Fj1u8iCgYSfsbvYa0XyXkHYu%2BqVQ4baTQ8X6uPHSI8TjuMPVs0z09wpd6YED8YJTkHXQHz6mVu2JEE1LRw5nsqbcfZOYZXHruEugJxHImLeZbBi7K%2BkJlRkMhzehLHU%2FZi%2BoS2%2FAd6vUhsoj%2BcJNUXaTTKHVjTjd549EhpRoPpEOsGYKrpf1tLLgjSNhh%2BrJLQ%2BN0dHbq%2FFKZa59qkPeFAWtNagUJGFZ5rdAmZhN86f1l%2F4U%2Fc5LvmnhON2C1E8m5om6ApgXXEOoVt6JBY1HPh0N8fmWgEKF%2B8%2FXs%2FXpSzH9M22PhoeoA1MYVmaCMK%2FeSj24TDpTmO5wdNX6zi0jn%2BsfyBxTz%2Fu0UnyGQTU5JqtWHRyGCWws3bHJu0HaWwo1EFcEbdzUF%2B3Css%2F9dfOFensEG0CnihKZHCd0W32FBvxtMLSMmL0GOqUB%2FP94iFI%2FDvkQy1h6nsQRDP%2B4fBPdZpil0oOW%2F5%2BMg5oLmAX1p%2BzPaWHen7qYxhCv9bXJ%2FpABro5HPc0smLxa8OKH5v%2B7BICOUHzC3rLqdCu2lUzvrXX1Xb9pSYH4euQ4VAqYvYPxe4wQJX21Ix8VCRkeh4BFexpL4QHTOFaRBErjSaGjEPKshoXiagP6m3p0qgxhzVPiiKSJUtyWoTohiWhRn8TV&X-Amz-Signature=2bedc7da93bc5b6c0e56c263d5886d680c87bdb1cc7fe0c99685e8bee046a765&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
