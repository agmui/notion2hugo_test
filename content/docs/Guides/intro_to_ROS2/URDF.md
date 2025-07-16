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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLUDW5N%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDiFZ0Yj3s85MnRdnwSGTZDjFQBKCC1JIWfe16VSzBZwwIgR9aztgVKeLMbGAKA9iPwJcHL3JTsjpQJkGxANa%2BLHLYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDG33Z%2FgQ09Fu9GUyJSrcAzm0LTIHWS00EqHCKWFYP2WU4tiDJtVqOU6qrSu68OlFGIg41IdXmQYc5BMJzyYIKmQLh5fGgJq3uwgySEo%2B0aaiUEgf1j%2Fm6m5pEC5ZxKDOo50Hi8fZp%2BFaMn0e9Tv5j%2BrwEMIn%2BFmnpJgrSdqwfg03OL2iDZ8crN2feKFoMgXWjhkhsIlGk7zXoaCRJMfH%2Ff29ovlzCq3QIaNAmN8YbTuREJ4X0HKwwV4ukS2M4w9taSMdmuwF1w5MNfXSBlm87FYC0dC0%2BTFMQ1I%2FsNQYATtBxSTzloi1qHpoBF2rxAGT7kM99G6ZwTrXig8VVlJ99EeCTT5BWhU9IzLUnoPe%2FVp36Jdpm1WDyZtiBplxzoUBt3X92xQHZyCggz3baNpo3DuFg0MkqVvhGCbhCZagaRRiuYCN6fxTTzqzt7YuOFfDqSG20Et0DDUpVruJRd2gFGqQaAGh05J%2BFU%2FShlLh59Lyt%2BtLf7tMyWfL%2BGGj9KNGj9IyJh5%2FB%2FyiIHrirhmrkJ6YGWeyExg3WY%2BtIl94gDa46ceZBBMgP9R8yb7DJikXM5drGFzuV4L3QNHDv4u5pASFJv8PejE8%2BEsI%2BFFFYHbrs%2FYyuopEK85kM4%2BC0oIAx%2BE8VwH9ThcDQxRfMKCT3sMGOqUBmenCvsh3ynx71%2BPz9QWRiJQ4aTabL4njpAy1h1y9cglJNiySb8ZTDSh2UL076twot3tHcQggmg0LrN2OB097GaldkM97cBHO0xrJ4SxHqQv8a9J4uUo2oTqijYnykovKhSpkfb14DEPun%2FTxPUJQXkqCNrEmwCINk5Y8B2nF%2BCSyU%2BYr6NaKE5aSAWoZcuCuGwzYWZeesiDPEmjrHyt375FEs%2Fho&X-Amz-Signature=a2b44de402a6dbf867fe1373e86ed16ce065d86b51b8b5e3841ee2eb73e4d07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLUDW5N%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDiFZ0Yj3s85MnRdnwSGTZDjFQBKCC1JIWfe16VSzBZwwIgR9aztgVKeLMbGAKA9iPwJcHL3JTsjpQJkGxANa%2BLHLYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDG33Z%2FgQ09Fu9GUyJSrcAzm0LTIHWS00EqHCKWFYP2WU4tiDJtVqOU6qrSu68OlFGIg41IdXmQYc5BMJzyYIKmQLh5fGgJq3uwgySEo%2B0aaiUEgf1j%2Fm6m5pEC5ZxKDOo50Hi8fZp%2BFaMn0e9Tv5j%2BrwEMIn%2BFmnpJgrSdqwfg03OL2iDZ8crN2feKFoMgXWjhkhsIlGk7zXoaCRJMfH%2Ff29ovlzCq3QIaNAmN8YbTuREJ4X0HKwwV4ukS2M4w9taSMdmuwF1w5MNfXSBlm87FYC0dC0%2BTFMQ1I%2FsNQYATtBxSTzloi1qHpoBF2rxAGT7kM99G6ZwTrXig8VVlJ99EeCTT5BWhU9IzLUnoPe%2FVp36Jdpm1WDyZtiBplxzoUBt3X92xQHZyCggz3baNpo3DuFg0MkqVvhGCbhCZagaRRiuYCN6fxTTzqzt7YuOFfDqSG20Et0DDUpVruJRd2gFGqQaAGh05J%2BFU%2FShlLh59Lyt%2BtLf7tMyWfL%2BGGj9KNGj9IyJh5%2FB%2FyiIHrirhmrkJ6YGWeyExg3WY%2BtIl94gDa46ceZBBMgP9R8yb7DJikXM5drGFzuV4L3QNHDv4u5pASFJv8PejE8%2BEsI%2BFFFYHbrs%2FYyuopEK85kM4%2BC0oIAx%2BE8VwH9ThcDQxRfMKCT3sMGOqUBmenCvsh3ynx71%2BPz9QWRiJQ4aTabL4njpAy1h1y9cglJNiySb8ZTDSh2UL076twot3tHcQggmg0LrN2OB097GaldkM97cBHO0xrJ4SxHqQv8a9J4uUo2oTqijYnykovKhSpkfb14DEPun%2FTxPUJQXkqCNrEmwCINk5Y8B2nF%2BCSyU%2BYr6NaKE5aSAWoZcuCuGwzYWZeesiDPEmjrHyt375FEs%2Fho&X-Amz-Signature=1f03df274ea8c2f00290e7611603121160f608aa33d80d24e454b4065a3e3ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
