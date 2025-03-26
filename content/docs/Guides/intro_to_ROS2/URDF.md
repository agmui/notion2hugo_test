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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSH75PNA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWJxaMda8yE1bLkFxO%2BlGbsxfe7V8T2WGNF7GyH2zV2AiEAo8fUF%2BSvKdW9TVAnkeqoqSoyxoIANZvh7UaOVDotaAMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJvecLXdQ%2FIkEzanmircA6Hkz6f7g1Vf4uHNJVrgIfTndQ3q7jL1dfE1NiawlQZvCpD%2BWpp18MEmHAQQogxfUIkhoWvBG4LbkajEHt0Iy9CAm5ttMZmW6aWuJzum7SFvh%2BQ3NnvjM1OR7Opkltl14i%2FJ9qP5%2Bf1M9QwGmpeiIZthNTmyeOK0poBk15gMa4Zwl%2BlDhhEg3XgQnZcuUaYh11%2FZqtt7r6enKL29iANpa8VX3UrlBmLtFt6UiM4eDk%2BDQrKpGMKU%2FWQj6JBTY8D4ZTEhFWAhnjKhawLtxj83Ltk5taFMdYWjEtYFIsoiCAs2kkSaQbFCZ6sZWhkwqMBYKRl%2B1%2BQkzP0Cdd%2B900W0czFY9CYeteBDBJzHxbv0chOqbRjvypYDWvESliojNddKaeyHiTMxeBSflkmQuurG3Zl%2FwVzQ7kEXqnZUcYKHGL7G70ayXzCKzqizY%2F6YrM6xNmOVKFpwM%2FCLBE39ZUAWoNP2VmU5zwC0pPzb7KBgSGebadGZVvR788eer8OI3gZ4%2FeNzfjRmYr4coEWgn8RzMtNiHypc25uaET6ZXRGsZi9wxplDO%2BAxW%2BQox9tta0FoZR4dzxhCmcDOH1ZwwA%2B6j9SY09n294YRt3ZgAl3SMKNrsCVj5N5RsiuHRSYWMMemj78GOqUBxaIxiiKj5gfZe1rGrjNtU2q%2BczV54UPU2sFNl%2BRCf09KOj95Eb27u526kusTSixXlHfz69jA48bnLSLdltoh5LqkBlKg2rxRqjKEOZAk43Si4pwSL%2B5hUTUaw3SUbWrjmML0qJX3SpaLGEk4neZkWzr407Mdc28hLK1rhf2qJzrcn6tidkvNppGTXa53MTZwnmQKXV4J7mM7jVmGhM9PifCDiYvi&X-Amz-Signature=47d001228a98e42919f4959139b3334ad89149e396016933af20daaf20a1de8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSH75PNA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWJxaMda8yE1bLkFxO%2BlGbsxfe7V8T2WGNF7GyH2zV2AiEAo8fUF%2BSvKdW9TVAnkeqoqSoyxoIANZvh7UaOVDotaAMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJvecLXdQ%2FIkEzanmircA6Hkz6f7g1Vf4uHNJVrgIfTndQ3q7jL1dfE1NiawlQZvCpD%2BWpp18MEmHAQQogxfUIkhoWvBG4LbkajEHt0Iy9CAm5ttMZmW6aWuJzum7SFvh%2BQ3NnvjM1OR7Opkltl14i%2FJ9qP5%2Bf1M9QwGmpeiIZthNTmyeOK0poBk15gMa4Zwl%2BlDhhEg3XgQnZcuUaYh11%2FZqtt7r6enKL29iANpa8VX3UrlBmLtFt6UiM4eDk%2BDQrKpGMKU%2FWQj6JBTY8D4ZTEhFWAhnjKhawLtxj83Ltk5taFMdYWjEtYFIsoiCAs2kkSaQbFCZ6sZWhkwqMBYKRl%2B1%2BQkzP0Cdd%2B900W0czFY9CYeteBDBJzHxbv0chOqbRjvypYDWvESliojNddKaeyHiTMxeBSflkmQuurG3Zl%2FwVzQ7kEXqnZUcYKHGL7G70ayXzCKzqizY%2F6YrM6xNmOVKFpwM%2FCLBE39ZUAWoNP2VmU5zwC0pPzb7KBgSGebadGZVvR788eer8OI3gZ4%2FeNzfjRmYr4coEWgn8RzMtNiHypc25uaET6ZXRGsZi9wxplDO%2BAxW%2BQox9tta0FoZR4dzxhCmcDOH1ZwwA%2B6j9SY09n294YRt3ZgAl3SMKNrsCVj5N5RsiuHRSYWMMemj78GOqUBxaIxiiKj5gfZe1rGrjNtU2q%2BczV54UPU2sFNl%2BRCf09KOj95Eb27u526kusTSixXlHfz69jA48bnLSLdltoh5LqkBlKg2rxRqjKEOZAk43Si4pwSL%2B5hUTUaw3SUbWrjmML0qJX3SpaLGEk4neZkWzr407Mdc28hLK1rhf2qJzrcn6tidkvNppGTXa53MTZwnmQKXV4J7mM7jVmGhM9PifCDiYvi&X-Amz-Signature=9108370d654fd99a02ef481ff72fccdcf48517885cd79557e8f2ab34078333cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
