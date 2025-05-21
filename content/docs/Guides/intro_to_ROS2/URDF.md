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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UOQCP6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDg6hPf20a0eERa7Hw5k5G%2FOy%2BxBAZWY2aNQyTMEwjjAiEAnvC9tMVnG%2FAwZdKbqVVB1szhq8OeoFYwsUAqJDRyowcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAJRmBMKlSeYjyEQyrcA%2FFL0riUFvmgF%2B1383MfEN0NnnRu9D4xPqIxulwnykpgfq%2FEy3nSYtV37j0%2BlD24Lpu%2BRxowvXYfTjKnSLOm2WFoeaYj9gstYPTj8EcvP3%2FvAlUfaZWCaei9VXcpgJcHinotI9j7ADkxkGSycFW%2F3ZHVF5YsgwYEW1EKLc%2FRca8E9%2F8f6Thf790LyEnd9SR3XWokM3SiqKlyoD7gz%2FCFyCuj066YjXxePVZ2wEcRQsRpvMkBwuokjGgaCSPer%2FE21pj6WB73QK8FOswmgD4%2Fyr33J332G18Qsi8i0%2BytUY0VAewmcYVmhR8z2DhM6oXIy2VztG0Cyj3KfKvRRAfu0LDczCcHIwzjGfcVaHOV8vWGqyifQDz6Yykq40QuHGA6aUEMERycvOfwwBr9eeTKDycXPwC%2BkVLhsO9Fj05%2F25%2FQP%2FF5hhX1A%2BwAK5ScQxYaTGVwAiBWXS2q6hC3H060pz8rEhJo2iJ%2BAjwGXSQcnn5ONEu8zoM1B8YYPLz%2FkvIHXn4cWj97P%2FfLZ3G4nrBiMf1v9KrZ3HUJtE%2B1Dg%2BJXlOZ%2FuAw20%2Bo84Mgk3OkzqF9q4iBHu3wl4O6S6Z%2B6N6xBJh%2Fjbex1rv2ACtBKgzMuS4XZCUewpGNzxxPTpyeMPOutcEGOqUB%2BXslVgFnhnkwzVT%2BOe6GSlZP%2Fv17Kstjrm5Xrs1FErW3gAm2ALIWjFTtGLGoZ8pOkPDVLReBCvHp%2BRrVx77%2B%2BSvQvYHNrY3lAIX63zy%2BahghBc%2FOyaP772qWoHrp9T0luUZ22mkBkPvC%2BWprlTqrhglNa1H7WkjRZA4OKjSBQTnPtO1KGPCRzPlWtzXq5sE0Ezaq7IxLIpGRRqo8VB7AwTMRvZ%2Bd&X-Amz-Signature=5a40b32f04cd8063890579538a75ce45c375b9b42d9b0689151d43fe5a82b1e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UOQCP6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDg6hPf20a0eERa7Hw5k5G%2FOy%2BxBAZWY2aNQyTMEwjjAiEAnvC9tMVnG%2FAwZdKbqVVB1szhq8OeoFYwsUAqJDRyowcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAJRmBMKlSeYjyEQyrcA%2FFL0riUFvmgF%2B1383MfEN0NnnRu9D4xPqIxulwnykpgfq%2FEy3nSYtV37j0%2BlD24Lpu%2BRxowvXYfTjKnSLOm2WFoeaYj9gstYPTj8EcvP3%2FvAlUfaZWCaei9VXcpgJcHinotI9j7ADkxkGSycFW%2F3ZHVF5YsgwYEW1EKLc%2FRca8E9%2F8f6Thf790LyEnd9SR3XWokM3SiqKlyoD7gz%2FCFyCuj066YjXxePVZ2wEcRQsRpvMkBwuokjGgaCSPer%2FE21pj6WB73QK8FOswmgD4%2Fyr33J332G18Qsi8i0%2BytUY0VAewmcYVmhR8z2DhM6oXIy2VztG0Cyj3KfKvRRAfu0LDczCcHIwzjGfcVaHOV8vWGqyifQDz6Yykq40QuHGA6aUEMERycvOfwwBr9eeTKDycXPwC%2BkVLhsO9Fj05%2F25%2FQP%2FF5hhX1A%2BwAK5ScQxYaTGVwAiBWXS2q6hC3H060pz8rEhJo2iJ%2BAjwGXSQcnn5ONEu8zoM1B8YYPLz%2FkvIHXn4cWj97P%2FfLZ3G4nrBiMf1v9KrZ3HUJtE%2B1Dg%2BJXlOZ%2FuAw20%2Bo84Mgk3OkzqF9q4iBHu3wl4O6S6Z%2B6N6xBJh%2Fjbex1rv2ACtBKgzMuS4XZCUewpGNzxxPTpyeMPOutcEGOqUB%2BXslVgFnhnkwzVT%2BOe6GSlZP%2Fv17Kstjrm5Xrs1FErW3gAm2ALIWjFTtGLGoZ8pOkPDVLReBCvHp%2BRrVx77%2B%2BSvQvYHNrY3lAIX63zy%2BahghBc%2FOyaP772qWoHrp9T0luUZ22mkBkPvC%2BWprlTqrhglNa1H7WkjRZA4OKjSBQTnPtO1KGPCRzPlWtzXq5sE0Ezaq7IxLIpGRRqo8VB7AwTMRvZ%2Bd&X-Amz-Signature=7e5f20dfc1ed61ac12d2ebdb25bc04229c8e7544b595d639e7522a7a20952db1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
