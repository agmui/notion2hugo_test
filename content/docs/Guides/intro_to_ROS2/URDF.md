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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJPEUJC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOA9UpnwTJweT%2FiKDjWZvcYEE%2B8lF659Ak7lqOqfIMkAiBd1gQV1HWSY%2B%2FrDHlPEMc%2B5NDLLpu6%2B%2BompEvR95l0TiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNoclQiC2No%2Bl9ukTKtwDKecejW9pW%2BLbTZCtsA40LMqHDqkejdX8%2BzPPA0%2BylBtPcfcNqtPYTeV4YhFqwBBCU%2By%2FbcuXkOKVTtLlz1SJqtU20MfRmCMCRf0NmWRj4GStHVe%2B5MZfMDIeWF3n71gH5om3zM0nH%2FR9L2Hl6yI%2FgaEgc%2FKMnEMJieToYIqMyDESLsKw4D5Md9sL0u6Ud4eOvEjldb1ii183zE1MTNF1R4LyfeRIf5wZEpea8twkxk6qBXS16DdVR2%2BRbvmgRN5fc8hopOrFIgDmHF6gxvLzw6ZDkT7xIhcPmI1mJo2yoyjvn%2BpH0FGYpa%2FYbOPtY5RBWDr0dEeIJJUispGW6Z9mrRSKCzZw9rhOB25Cl6GVPWVelo3nMcSD1rAwOktYw34DEyJ4n2vFIPzVUOu%2Fe8Q9cxGXPetKmTpQ%2FiniGHQ0lJ1bfSO9TrJo%2FZkSo5teQXl0FpYIk82pchflm%2FhiimBu38wQ%2FVu%2BbT%2F04JuAVO%2FHkcTM7smI8YZWu9B9AT9PJtiu2rN%2B7bSNcz72srsPj9673IqvS1nQSYbqaRO9L9yJTpd4spqBZRFNsmfhZpYzmp7JsmL29yhJ6ybC%2BPSfUhHeQ5umgRrg5PxGewdaZZjzMnkSzdMxPeyFR1Z3AZowu4%2F8wAY6pgFf5zBUkxH%2FgUtqCK2aSs%2BdFcHijwbSCRTu%2F1eSvLiZV5fhtkm4KC8JyO7u2Vt%2FEjzUKkGfKA7Os2IOZ%2BqzbSkCe14mbhNWZnQ0Zy6hDB2wnht2feeZb%2F9OC3uDIZQ2Gr%2B%2B%2Fd6aCrY8ZWEbdjRykdJhmQy7IPO%2FPZJDrEGD%2Btbvaz1cWuAP%2BlTm8P1NV5A5%2FivBnpdBTYr64qz4SJ4BaN7mPmepayhw&X-Amz-Signature=6145d0e0e6950e5e04ff8196efb010a781a3d4db546fddae881f056d70b9633a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJPEUJC%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOA9UpnwTJweT%2FiKDjWZvcYEE%2B8lF659Ak7lqOqfIMkAiBd1gQV1HWSY%2B%2FrDHlPEMc%2B5NDLLpu6%2B%2BompEvR95l0TiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNoclQiC2No%2Bl9ukTKtwDKecejW9pW%2BLbTZCtsA40LMqHDqkejdX8%2BzPPA0%2BylBtPcfcNqtPYTeV4YhFqwBBCU%2By%2FbcuXkOKVTtLlz1SJqtU20MfRmCMCRf0NmWRj4GStHVe%2B5MZfMDIeWF3n71gH5om3zM0nH%2FR9L2Hl6yI%2FgaEgc%2FKMnEMJieToYIqMyDESLsKw4D5Md9sL0u6Ud4eOvEjldb1ii183zE1MTNF1R4LyfeRIf5wZEpea8twkxk6qBXS16DdVR2%2BRbvmgRN5fc8hopOrFIgDmHF6gxvLzw6ZDkT7xIhcPmI1mJo2yoyjvn%2BpH0FGYpa%2FYbOPtY5RBWDr0dEeIJJUispGW6Z9mrRSKCzZw9rhOB25Cl6GVPWVelo3nMcSD1rAwOktYw34DEyJ4n2vFIPzVUOu%2Fe8Q9cxGXPetKmTpQ%2FiniGHQ0lJ1bfSO9TrJo%2FZkSo5teQXl0FpYIk82pchflm%2FhiimBu38wQ%2FVu%2BbT%2F04JuAVO%2FHkcTM7smI8YZWu9B9AT9PJtiu2rN%2B7bSNcz72srsPj9673IqvS1nQSYbqaRO9L9yJTpd4spqBZRFNsmfhZpYzmp7JsmL29yhJ6ybC%2BPSfUhHeQ5umgRrg5PxGewdaZZjzMnkSzdMxPeyFR1Z3AZowu4%2F8wAY6pgFf5zBUkxH%2FgUtqCK2aSs%2BdFcHijwbSCRTu%2F1eSvLiZV5fhtkm4KC8JyO7u2Vt%2FEjzUKkGfKA7Os2IOZ%2BqzbSkCe14mbhNWZnQ0Zy6hDB2wnht2feeZb%2F9OC3uDIZQ2Gr%2B%2B%2Fd6aCrY8ZWEbdjRykdJhmQy7IPO%2FPZJDrEGD%2Btbvaz1cWuAP%2BlTm8P1NV5A5%2FivBnpdBTYr64qz4SJ4BaN7mPmepayhw&X-Amz-Signature=9282f7e08fddfbbd88dbd4b0ffbe35136ff0a9de8e54d65213eba923baaf725e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
