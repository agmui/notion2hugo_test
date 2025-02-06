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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CQWJLBP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBBiYm0Pjo%2FPKLekOMLXxXQW4ewNSKaZLVPCE1ZP%2FN7zAiEA2G%2FGyYJTZCX6MT6kNbrfCseAx8yKvAaHSjOvplKljM4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMJkywlGqDb%2BjbAp8yrcA0JeBE9Yi4i904OV7UCpERUOCdjV7af4dXT1HbfAiS4UiTGVaqQyjKXywb9Gl9qQnEDmNkvsXa%2F4cnIbto0krM%2F1v60HD3kiv9ZGtt9jaLt0xFfxWSnKPQozTz9%2BKAhJ7mBsovcnliYTI5HDdtQWFzhUFuUm6O0PcqBDyyFjQKGGjhzcGvd8LnA%2BY2YVnyq%2F3wQCMifTE1OhlIwOoR9PHQvxwEaA5z6t%2FQoOuw3BrsNmOSYqGvqvqItMcFPxNriwbEvCK%2FWc%2Fhy5feoRSbP5n6t8vhnkV2PT%2BkBTYbij9eVP4JbibQGOzbpr0hlZ8m5gqUB5MYH9Nhm91L3fUWObXpn%2Bb8AoE4TvFrLRNWU29fIZyvBz2PsOsMoM8HlcNgNYeZg0w5z5utS%2BGJupr9RxfYKScsFrWX9qXqcPL02qtB%2FK44FVkkf23DBnnW5hPoLXiPiSCvSBzpCpRghtukbKhk8ZxpcRYQh2P6OXmilQ8ZA3i5wdxHE0INJV2%2BngC41kXx%2BBiLRJnVNPPTUyZm35Ahwy0384CKtHM4M74rbUOqA1f7aMljO5xyaAVxYSYwbQ3NzNUHzrbGmAzwDTPexCmUT0nhotkHH8KkszCVQ9NFjMVyTwIU204VoKNCIEMLrSk70GOqUBM1jTSZ2Zl6cA1O3Lzv1CsHO%2Bodo0N%2F6qVScXwqYq6hKBdsbqiAE70a5r%2BWWwmBlkAMwJFzRfZ%2BVote9xk%2BqtELzyxncElFOFICG0Fk%2Fyp6uHx0vGPDynZ1lCZURRgKsxeOLJ6hr7%2FIkXpnXsxN9AIlClzamT7U%2B9AB17lEs%2FBDNVwDiRS8m5TOW1%2FJgpy2Kguug65KhFaZuVbXL0eQjaP6ZmbxBU&X-Amz-Signature=4e2514ee98bd010bd1cc6a010fcd7db9babddf6ecd0d60a9f682b5f9dfe1bff8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CQWJLBP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBBiYm0Pjo%2FPKLekOMLXxXQW4ewNSKaZLVPCE1ZP%2FN7zAiEA2G%2FGyYJTZCX6MT6kNbrfCseAx8yKvAaHSjOvplKljM4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMJkywlGqDb%2BjbAp8yrcA0JeBE9Yi4i904OV7UCpERUOCdjV7af4dXT1HbfAiS4UiTGVaqQyjKXywb9Gl9qQnEDmNkvsXa%2F4cnIbto0krM%2F1v60HD3kiv9ZGtt9jaLt0xFfxWSnKPQozTz9%2BKAhJ7mBsovcnliYTI5HDdtQWFzhUFuUm6O0PcqBDyyFjQKGGjhzcGvd8LnA%2BY2YVnyq%2F3wQCMifTE1OhlIwOoR9PHQvxwEaA5z6t%2FQoOuw3BrsNmOSYqGvqvqItMcFPxNriwbEvCK%2FWc%2Fhy5feoRSbP5n6t8vhnkV2PT%2BkBTYbij9eVP4JbibQGOzbpr0hlZ8m5gqUB5MYH9Nhm91L3fUWObXpn%2Bb8AoE4TvFrLRNWU29fIZyvBz2PsOsMoM8HlcNgNYeZg0w5z5utS%2BGJupr9RxfYKScsFrWX9qXqcPL02qtB%2FK44FVkkf23DBnnW5hPoLXiPiSCvSBzpCpRghtukbKhk8ZxpcRYQh2P6OXmilQ8ZA3i5wdxHE0INJV2%2BngC41kXx%2BBiLRJnVNPPTUyZm35Ahwy0384CKtHM4M74rbUOqA1f7aMljO5xyaAVxYSYwbQ3NzNUHzrbGmAzwDTPexCmUT0nhotkHH8KkszCVQ9NFjMVyTwIU204VoKNCIEMLrSk70GOqUBM1jTSZ2Zl6cA1O3Lzv1CsHO%2Bodo0N%2F6qVScXwqYq6hKBdsbqiAE70a5r%2BWWwmBlkAMwJFzRfZ%2BVote9xk%2BqtELzyxncElFOFICG0Fk%2Fyp6uHx0vGPDynZ1lCZURRgKsxeOLJ6hr7%2FIkXpnXsxN9AIlClzamT7U%2B9AB17lEs%2FBDNVwDiRS8m5TOW1%2FJgpy2Kguug65KhFaZuVbXL0eQjaP6ZmbxBU&X-Amz-Signature=9ba3ba356e0047757343d143732719dd983d4e176160ca9ba8b6549255663068&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
