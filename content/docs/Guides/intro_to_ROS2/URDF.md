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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBHU3PI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGq7HgLxLHnlYUCmyF1GrfZ1E8jOjHTwGoQf824dYRmhAiB8lwAwDX3m7%2Bwk%2FKGdonyDhoqVESh4JbQKSSgBBym%2BHCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKUoPf71PRZ7Qt%2B6GKtwDUwnGJl2hHwKQ3wHxpLF166SMOJYgCsMruXoqmelvr6GrVSxp%2BYUPZqaFpX4UKvrKeJojZ4kNJs1u3ExNnvnlEm1ZFcgdohuHD0u8JldqwqjkUWwUILs7urC%2BKkF3AefJ4gS3LaJ3uoRIoVdlT2csNgA5FM6clh8q2q4oRIQkYtX6NsoUe1H7zR%2FYnqXy%2FrN0Ec%2Fgc%2Fn5YxymNRjY34WmfuIK1Ci7b50KvFiMcgVhy7ykDDi4oWC38wg2YKvqxsoDnVA1JY0FaJGIG%2BknNAr7fplJcMvghhGYWrmSPy%2FZTuwuEr7tvLa6CAf6KlSvAnx%2BvJ6rCkhlf6bMvih9mh0o47fbRhy8CITR3HvgetMHEhDt6WG1cVVgZIM95%2FTOYiI2PgdS%2F46u%2FGomOUo3up9ph0UCJHz3W%2BKlAqLsOKtCNOFT9LTxcOOux%2FYCJ5Yzg6P%2F1Bj%2FOIGkh0Ko%2Fq6hBY3hgwZmK%2F2KTCI0g8cqOoO8EUDercuaysbhg32NYDT564hKSc9VMo3bD7jlCxXz0CDku6eUfDg%2B8%2BpnteZvROPezkFt0DXobfTEGPj1FJPg9oKtf7yvXJI6pLIiMc6W4ydzdA3ItHVXxCFclHwZdNraMi8ALuR9HcR%2FPdxJEKgwv%2Fr0vAY6pgHOF84Gfv5wxoW9At2guzMP2jG0nJ9w2m7D2BPDpPbA6rUBmIDjDhHqM5FMVYOKuMgP0muOiSdcx6BPTg3n4RBTyL55TT2NFBIPIgb%2B7TVwafHKWydVKu5vJe4v8jVw89AP62kfDxwLVOB8BL9xxGmocUiJryqAadOUyeG3I%2F8Tw%2F%2BVZ4DkzVuH5t8LoiFntS3pN1XB2pZMGZM%2Bnz87dVtHZmXa60xz&X-Amz-Signature=352a0004e58f91c81c35e13b67a06abfb3be0662f014d037778538069f03a136&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNBHU3PI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGq7HgLxLHnlYUCmyF1GrfZ1E8jOjHTwGoQf824dYRmhAiB8lwAwDX3m7%2Bwk%2FKGdonyDhoqVESh4JbQKSSgBBym%2BHCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKUoPf71PRZ7Qt%2B6GKtwDUwnGJl2hHwKQ3wHxpLF166SMOJYgCsMruXoqmelvr6GrVSxp%2BYUPZqaFpX4UKvrKeJojZ4kNJs1u3ExNnvnlEm1ZFcgdohuHD0u8JldqwqjkUWwUILs7urC%2BKkF3AefJ4gS3LaJ3uoRIoVdlT2csNgA5FM6clh8q2q4oRIQkYtX6NsoUe1H7zR%2FYnqXy%2FrN0Ec%2Fgc%2Fn5YxymNRjY34WmfuIK1Ci7b50KvFiMcgVhy7ykDDi4oWC38wg2YKvqxsoDnVA1JY0FaJGIG%2BknNAr7fplJcMvghhGYWrmSPy%2FZTuwuEr7tvLa6CAf6KlSvAnx%2BvJ6rCkhlf6bMvih9mh0o47fbRhy8CITR3HvgetMHEhDt6WG1cVVgZIM95%2FTOYiI2PgdS%2F46u%2FGomOUo3up9ph0UCJHz3W%2BKlAqLsOKtCNOFT9LTxcOOux%2FYCJ5Yzg6P%2F1Bj%2FOIGkh0Ko%2Fq6hBY3hgwZmK%2F2KTCI0g8cqOoO8EUDercuaysbhg32NYDT564hKSc9VMo3bD7jlCxXz0CDku6eUfDg%2B8%2BpnteZvROPezkFt0DXobfTEGPj1FJPg9oKtf7yvXJI6pLIiMc6W4ydzdA3ItHVXxCFclHwZdNraMi8ALuR9HcR%2FPdxJEKgwv%2Fr0vAY6pgHOF84Gfv5wxoW9At2guzMP2jG0nJ9w2m7D2BPDpPbA6rUBmIDjDhHqM5FMVYOKuMgP0muOiSdcx6BPTg3n4RBTyL55TT2NFBIPIgb%2B7TVwafHKWydVKu5vJe4v8jVw89AP62kfDxwLVOB8BL9xxGmocUiJryqAadOUyeG3I%2F8Tw%2F%2BVZ4DkzVuH5t8LoiFntS3pN1XB2pZMGZM%2Bnz87dVtHZmXa60xz&X-Amz-Signature=ea980dd9a72be765dcccab3443e89d74befa5a88988fdf2c77de231b6cb1b1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
