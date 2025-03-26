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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEUT35A%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgoO7K2TDoBEydIV6Wgo%2BHO3yYDenYJHS5AGyeHzdnMgIgUuURK9Mj01LYFqO%2FTY2kfTcha8GNAR5pk0Vae8nRdjEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBv0rlNfAWVVds6coircA9RDiQCbEdj%2BcRnH0TnwbkxCnCcDOH%2FTFLeC9gBJaw36fluOy8SiYF4UGmmRiDVTk9CsXhWcBlnGzNTmrDiAx0EBh2G4pjkGJ%2FChG43LInsD3TvTHuqlOKsP%2Fmb6oBUtHF7BitBGJ7B04B67ZJw97DPYMTQCo0KJy94LQTJLboysNZt4Zqg0Q7IMLLPwvT8G%2BOuODT3Fx8dZ7vZzwxpcUmKqMkZ0UQCC0JgCjWBIKd%2FxiSBlLqYoDoeM59C39TmiQnm4KooWsWr%2FUbCuiDLEhz8DG4PonZRIUood1JjgePUPUHPA5mGczNr%2Bb8tEN3F4LOqQRVyj0ltzwxOh6gNUjsvizJS9J803YgZ3D7cuM4JudDUDE2K4RRjLiBzvO%2F7%2FAnwiFZNPbYFVE8unVjF2H817uNtS9BuyB9iPhkMMfwrluDlUL95MliKEzID1b7MXZfOEmwuu%2B0ljvOAHpiw7HbCKsx65kor6eiUo2QWIA63g236zKNGdkpIXLbGGqcJSSWq4Lx9a%2BuWy%2BWQN8FPNSQTIyaj3FApeWRMaPWzh1tHf1QH9MEHcLTtS%2BmVX%2BHIyjRERbK%2B4X5nvkgL2XmJLXAZZzcrEsIfzhC8983wqf1i5IPpgR3SVuCqR4OypMIS5kL8GOqUBPWlmTwjERO7ydgBnvqU9NTq2PDAMs6d%2F37N0Ku%2Bzy2s0GWq6dJYy%2Biadm5laXm%2FI8V6d1RagDXwKdWz9hLQOe8I8QzNZj5HIBJtbhKQ%2BCdkNHcjZNwMrzTnB2CBUUrimRVXAwlGyJVH1abtrvBtVZqfQb6DQfJfa%2FKqT7EwTBVsvVfQQKA0KWP4iyDVu02jpfH829yJsS2nfV7diQZa6y0WriPQg&X-Amz-Signature=17a559115451911c0c13040102ddb088b922fd67fcbbdf370c03edd93f1f20b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VEUT35A%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgoO7K2TDoBEydIV6Wgo%2BHO3yYDenYJHS5AGyeHzdnMgIgUuURK9Mj01LYFqO%2FTY2kfTcha8GNAR5pk0Vae8nRdjEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBv0rlNfAWVVds6coircA9RDiQCbEdj%2BcRnH0TnwbkxCnCcDOH%2FTFLeC9gBJaw36fluOy8SiYF4UGmmRiDVTk9CsXhWcBlnGzNTmrDiAx0EBh2G4pjkGJ%2FChG43LInsD3TvTHuqlOKsP%2Fmb6oBUtHF7BitBGJ7B04B67ZJw97DPYMTQCo0KJy94LQTJLboysNZt4Zqg0Q7IMLLPwvT8G%2BOuODT3Fx8dZ7vZzwxpcUmKqMkZ0UQCC0JgCjWBIKd%2FxiSBlLqYoDoeM59C39TmiQnm4KooWsWr%2FUbCuiDLEhz8DG4PonZRIUood1JjgePUPUHPA5mGczNr%2Bb8tEN3F4LOqQRVyj0ltzwxOh6gNUjsvizJS9J803YgZ3D7cuM4JudDUDE2K4RRjLiBzvO%2F7%2FAnwiFZNPbYFVE8unVjF2H817uNtS9BuyB9iPhkMMfwrluDlUL95MliKEzID1b7MXZfOEmwuu%2B0ljvOAHpiw7HbCKsx65kor6eiUo2QWIA63g236zKNGdkpIXLbGGqcJSSWq4Lx9a%2BuWy%2BWQN8FPNSQTIyaj3FApeWRMaPWzh1tHf1QH9MEHcLTtS%2BmVX%2BHIyjRERbK%2B4X5nvkgL2XmJLXAZZzcrEsIfzhC8983wqf1i5IPpgR3SVuCqR4OypMIS5kL8GOqUBPWlmTwjERO7ydgBnvqU9NTq2PDAMs6d%2F37N0Ku%2Bzy2s0GWq6dJYy%2Biadm5laXm%2FI8V6d1RagDXwKdWz9hLQOe8I8QzNZj5HIBJtbhKQ%2BCdkNHcjZNwMrzTnB2CBUUrimRVXAwlGyJVH1abtrvBtVZqfQb6DQfJfa%2FKqT7EwTBVsvVfQQKA0KWP4iyDVu02jpfH829yJsS2nfV7diQZa6y0WriPQg&X-Amz-Signature=b426e6057184d88a711f2075efdd0a1cb5ede7ac935f0b23a855e0b0718e7d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
