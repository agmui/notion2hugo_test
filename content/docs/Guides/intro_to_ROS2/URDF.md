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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLIKYR7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFV%2F3eyVrK9K9Z4SRRTKdAkMaadq3DOgQ0TQyS23uS4zAiEAt8%2FAedXX6DGgB%2FTYUcdLPEOPGbSKlAiLNYtf%2BxYMIjoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6E2JXoF2rsJhzG8SrcA0CPhXSfL%2B%2B60ZlmqT2ORUcOjmSLmk%2F%2F5%2FAkbVWiW5vWAt3AVGUXtvo1n%2FIZBUxuEL%2FR47Zn6wipjYBJDWc7lnL8w69gP8Vi8Nl%2BH5ktTMf%2BD4bBwFlgnF3sjA7I%2Bjweq0A605HUZ7z0nl2zmu%2FUGkv%2Ba8nyZJW5n2GG6fpDyfGhrY0iMpJhqpY6CngJCfwZtbjUdIGj5gWhmoSv7Bzaeo3YZ6fPSeEnhhKnvWhHah6G1CYB%2FiF9RUOSKzqqHtK%2F%2B3yUQWYrOXWLaG%2BBoIkj5ZO4xl4srTKYv8676I7Kbmpd0pZgFgjr27gVGAenO4CUFafcZX8Gg0V%2FNUtHInXeLJtp5m6jWw6IG3FtqZaN94I4OddOBAXFdGvg78kyYsiUCneGqYHg4RNr3zIFLYpo2AcZQtKfsO9o60sIlX5C2iDNRmQlQVYS0zGKkZV2KOxcj9MjHKJ%2FPoec14I3VP2S3Xf5djnzEB0UzUNZ3MSBGf5yjYILJJwo8D5VsXwVfapO5KQRhcrCcIW2aPP6MwKCvR3OlM8FVJhVfPIrguHHrl3h8UZce8XMlZikS04SmzxMCTzrootrE6A7H3uTrebmf7mEosZY2PMKn8pDax6a92ATiX7YCQkw67mRTwNLMNaFhsEGOqUBUyDlqLls1iLRX8jYDv2TsJYKU2S69r6r0Cs1d6Rsw1T2wYmOIbfelMo8jn%2BRs%2F6HYvQ%2FBav%2FlaYktAsFviAmhe99v5TCh%2BxLWZyNREUKLibWAS6wSSZ8u1Li1gVaWJKeNLWLF26%2FyvswU5bYOapMBHyX8SvtBw1%2FPjKp9gPUig2ylx49BO9vQrln%2Bq32EdZcZecbb3jxPVCP3Q2ijYTFLheHZieH&X-Amz-Signature=78e2c8370d5f23a874822c6f0c90cac8c7ebe0386424091d0e580605406f5711&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLIKYR7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFV%2F3eyVrK9K9Z4SRRTKdAkMaadq3DOgQ0TQyS23uS4zAiEAt8%2FAedXX6DGgB%2FTYUcdLPEOPGbSKlAiLNYtf%2BxYMIjoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6E2JXoF2rsJhzG8SrcA0CPhXSfL%2B%2B60ZlmqT2ORUcOjmSLmk%2F%2F5%2FAkbVWiW5vWAt3AVGUXtvo1n%2FIZBUxuEL%2FR47Zn6wipjYBJDWc7lnL8w69gP8Vi8Nl%2BH5ktTMf%2BD4bBwFlgnF3sjA7I%2Bjweq0A605HUZ7z0nl2zmu%2FUGkv%2Ba8nyZJW5n2GG6fpDyfGhrY0iMpJhqpY6CngJCfwZtbjUdIGj5gWhmoSv7Bzaeo3YZ6fPSeEnhhKnvWhHah6G1CYB%2FiF9RUOSKzqqHtK%2F%2B3yUQWYrOXWLaG%2BBoIkj5ZO4xl4srTKYv8676I7Kbmpd0pZgFgjr27gVGAenO4CUFafcZX8Gg0V%2FNUtHInXeLJtp5m6jWw6IG3FtqZaN94I4OddOBAXFdGvg78kyYsiUCneGqYHg4RNr3zIFLYpo2AcZQtKfsO9o60sIlX5C2iDNRmQlQVYS0zGKkZV2KOxcj9MjHKJ%2FPoec14I3VP2S3Xf5djnzEB0UzUNZ3MSBGf5yjYILJJwo8D5VsXwVfapO5KQRhcrCcIW2aPP6MwKCvR3OlM8FVJhVfPIrguHHrl3h8UZce8XMlZikS04SmzxMCTzrootrE6A7H3uTrebmf7mEosZY2PMKn8pDax6a92ATiX7YCQkw67mRTwNLMNaFhsEGOqUBUyDlqLls1iLRX8jYDv2TsJYKU2S69r6r0Cs1d6Rsw1T2wYmOIbfelMo8jn%2BRs%2F6HYvQ%2FBav%2FlaYktAsFviAmhe99v5TCh%2BxLWZyNREUKLibWAS6wSSZ8u1Li1gVaWJKeNLWLF26%2FyvswU5bYOapMBHyX8SvtBw1%2FPjKp9gPUig2ylx49BO9vQrln%2Bq32EdZcZecbb3jxPVCP3Q2ijYTFLheHZieH&X-Amz-Signature=ef68bf39be07ea7214f2ee0bda1aa0619c3c3ed55a6b84ebb2e47fd563b8782d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
