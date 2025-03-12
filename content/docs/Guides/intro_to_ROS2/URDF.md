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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QSY6ZDC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAKf0Id9pyoKmCuc09QFXfvVjVLAuzo5dF20kmH2n1d8AiEAvs%2FSc9QxibRY5Qj7%2BaDAtCy%2FvZg%2FpSHhxgONdw6LvAcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwkaNakGejay%2FTSGCrcA6%2BFRjKTbYGGtNGdyH57GP0ssQ%2BZ8VN3dvDRA5KNYMx90q9w0WZzfTsA%2B7XCDpjDvRSiOC%2B4H0HwIqJnHMV33v3M3Vn2uQhL3gEWlXHo3OTygdpYvTCu30TZZ5jIquVlKL5cVJHiFS0VDKH4xDxESA2A%2BdiYihbSHT2KYpyz3qaUZiQgJgUo%2FDwyl742O45dvws4%2BeO7%2BFzwtAi11IPHYUtJeAgglHMgl6GRs9YP4g7hMZY9yZ99PPxPU46a7NCpFo9PRXKxryVyydSk1XoYmoVkvX96kTNX2ZTFSzRDKUtzaO13m1EHsu4dpdwA1eh67ajjewnMY%2FePU9FTdmk9M1QeLe5EQyVtpgxUO6pP7y76w3y4O7X8P%2FM%2Be2CSrOlbgu34aGD9uta6wN5ShgRQSowDeTytSLdiAie%2Brd%2FUXppsVVezq67NR09y9KbPxHmCkGYM4v%2F7R2VtG%2Br5fcww51Uxn5DDeCHiOhMW5ORqtSwgq%2BTwt1OTO8TNp54ZO7MuVZNiwh6cdNVK%2BWGYl7uN0G9yySmNEJDqjFUxyDnx7pmR7hE2FS4jNaEYau3VUErGJw88eCdS1uTOtJX7L%2Fk2fITT0vOT88WotGx3zj1K6sXEUHe6bFjo4inHupjyMJTgxr4GOqUBwBX%2Bw4LIn%2BVgIRIBL%2FOG4FhPLNb3jItEs%2FEf15tmcQdXpU8uVGbyvOQV9TkbrBCuyIrPVOQNBcDHeo2NTskM4dDvbuQ4pJ%2F1qu%2BdXFpR0VzHgAoAE%2FpGtYjEHMdyzGAJtHDMTPUpkMT1gJ6WdPVCL1vzVSfSyhvHjFxi4R1rsMoT6VluTQztbsXJf3JoASnBldTbKb%2FvH2WpnL%2BlY0DG9ezMDued&X-Amz-Signature=392407d9202857d19eecc3ee24e214d3c9254cd1af9b3cd01e7be91ff1ef8ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QSY6ZDC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIAKf0Id9pyoKmCuc09QFXfvVjVLAuzo5dF20kmH2n1d8AiEAvs%2FSc9QxibRY5Qj7%2BaDAtCy%2FvZg%2FpSHhxgONdw6LvAcqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwkaNakGejay%2FTSGCrcA6%2BFRjKTbYGGtNGdyH57GP0ssQ%2BZ8VN3dvDRA5KNYMx90q9w0WZzfTsA%2B7XCDpjDvRSiOC%2B4H0HwIqJnHMV33v3M3Vn2uQhL3gEWlXHo3OTygdpYvTCu30TZZ5jIquVlKL5cVJHiFS0VDKH4xDxESA2A%2BdiYihbSHT2KYpyz3qaUZiQgJgUo%2FDwyl742O45dvws4%2BeO7%2BFzwtAi11IPHYUtJeAgglHMgl6GRs9YP4g7hMZY9yZ99PPxPU46a7NCpFo9PRXKxryVyydSk1XoYmoVkvX96kTNX2ZTFSzRDKUtzaO13m1EHsu4dpdwA1eh67ajjewnMY%2FePU9FTdmk9M1QeLe5EQyVtpgxUO6pP7y76w3y4O7X8P%2FM%2Be2CSrOlbgu34aGD9uta6wN5ShgRQSowDeTytSLdiAie%2Brd%2FUXppsVVezq67NR09y9KbPxHmCkGYM4v%2F7R2VtG%2Br5fcww51Uxn5DDeCHiOhMW5ORqtSwgq%2BTwt1OTO8TNp54ZO7MuVZNiwh6cdNVK%2BWGYl7uN0G9yySmNEJDqjFUxyDnx7pmR7hE2FS4jNaEYau3VUErGJw88eCdS1uTOtJX7L%2Fk2fITT0vOT88WotGx3zj1K6sXEUHe6bFjo4inHupjyMJTgxr4GOqUBwBX%2Bw4LIn%2BVgIRIBL%2FOG4FhPLNb3jItEs%2FEf15tmcQdXpU8uVGbyvOQV9TkbrBCuyIrPVOQNBcDHeo2NTskM4dDvbuQ4pJ%2F1qu%2BdXFpR0VzHgAoAE%2FpGtYjEHMdyzGAJtHDMTPUpkMT1gJ6WdPVCL1vzVSfSyhvHjFxi4R1rsMoT6VluTQztbsXJf3JoASnBldTbKb%2FvH2WpnL%2BlY0DG9ezMDued&X-Amz-Signature=f77e763a1fccb43482f922a2678a93f9f3935d0cd6f59478870becd1b6d57c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
