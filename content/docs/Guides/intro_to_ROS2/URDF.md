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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654N3H4SC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6X4OZISMfoW4SsrSPO%2BUSTr1POisnmAsF4rS2sTMBHAiEA0YOqwipiNJu6KU%2FAehwPtxOsxkMxmDC4WWeva4BrAiYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKXTVBLNzaeFJ37AfCrcAyq3yk6riWbyTSnFEyR%2BTRaUc2SxlczV%2BbDfGqam7Hins%2BaL5wgn%2FRI%2BRluomCAFY7FP6wMNPUqV0JSxYvMk07etgmykExxC%2BmDO5UoztwFt3ZIPU%2BUwNww1yycSj2TZBxnGxLHx2j6BuIeYTqLZnfLo4HOE%2F9DRCc0zzhML4Xc7Ndw3mu%2FZjMMawLle7f7HQAniHEnih%2FsM8gK0rxGUFAsEXIlAw7Z4NT6Fo1Gp4thHCauQbK5HR3YzmfPJyPCY94VCfv5Q5DY8qsXd2jbX5PVbuYnymHslYRP%2FF05QXYZZ5aDjV%2B226unTJ6tTXloFyBOwmBfpSJz4390hnyORKmwsRiW6AlvEzWcryMimTk4%2Fdg92rdBhDRYM87WmML2%2FhhRfFxk%2FHrx6YA6XDojRYaMNzx2zxqQKFL79PKZKJna5WQkBvIkrQyXjYJ6vBKuKLUEFnpFaTsFug5VHqOBA7UJG%2BCVhmIa4eYWH%2FPFrN%2FTsN%2FawWUgilCc9BGBTPw3kbJPleDbgFL7lRqcCNUwkPCgDnamsf5%2Bct0oTjdPqqSX46Cnp3QJqBQrVkqOGHEFEPfpw8N666IJVd1oj%2B1Lh0vL899TjWggDgKiG5Fmsb3Pu5UnUz1xnpfpHu3KOMKXWjMIGOqUB25WP50%2FBMvn9M9zVr%2BlKlTz19yVHlzC%2BbwIXVA7ttyGehY9tCtqz0umyYDMHTguPYOUKhe0GBAmWurYU67jYZGEwtxCDcwa%2FaOSOIi%2B7bHXTRa839%2B8IgPauskORYKh2xVSXpkOyzeGmL5sp31t82SZMXrTwj3panWTSK%2B%2FcO9FRh6ieE5hly%2FQ%2FPBj36Xja9EH6UtBq5KWGvjGUH9opzQXpUQMD&X-Amz-Signature=0a4ab15c26950541283d6a4109636fe65c2671976d5cc3f07953bc63aabdfc1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654N3H4SC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6X4OZISMfoW4SsrSPO%2BUSTr1POisnmAsF4rS2sTMBHAiEA0YOqwipiNJu6KU%2FAehwPtxOsxkMxmDC4WWeva4BrAiYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKXTVBLNzaeFJ37AfCrcAyq3yk6riWbyTSnFEyR%2BTRaUc2SxlczV%2BbDfGqam7Hins%2BaL5wgn%2FRI%2BRluomCAFY7FP6wMNPUqV0JSxYvMk07etgmykExxC%2BmDO5UoztwFt3ZIPU%2BUwNww1yycSj2TZBxnGxLHx2j6BuIeYTqLZnfLo4HOE%2F9DRCc0zzhML4Xc7Ndw3mu%2FZjMMawLle7f7HQAniHEnih%2FsM8gK0rxGUFAsEXIlAw7Z4NT6Fo1Gp4thHCauQbK5HR3YzmfPJyPCY94VCfv5Q5DY8qsXd2jbX5PVbuYnymHslYRP%2FF05QXYZZ5aDjV%2B226unTJ6tTXloFyBOwmBfpSJz4390hnyORKmwsRiW6AlvEzWcryMimTk4%2Fdg92rdBhDRYM87WmML2%2FhhRfFxk%2FHrx6YA6XDojRYaMNzx2zxqQKFL79PKZKJna5WQkBvIkrQyXjYJ6vBKuKLUEFnpFaTsFug5VHqOBA7UJG%2BCVhmIa4eYWH%2FPFrN%2FTsN%2FawWUgilCc9BGBTPw3kbJPleDbgFL7lRqcCNUwkPCgDnamsf5%2Bct0oTjdPqqSX46Cnp3QJqBQrVkqOGHEFEPfpw8N666IJVd1oj%2B1Lh0vL899TjWggDgKiG5Fmsb3Pu5UnUz1xnpfpHu3KOMKXWjMIGOqUB25WP50%2FBMvn9M9zVr%2BlKlTz19yVHlzC%2BbwIXVA7ttyGehY9tCtqz0umyYDMHTguPYOUKhe0GBAmWurYU67jYZGEwtxCDcwa%2FaOSOIi%2B7bHXTRa839%2B8IgPauskORYKh2xVSXpkOyzeGmL5sp31t82SZMXrTwj3panWTSK%2B%2FcO9FRh6ieE5hly%2FQ%2FPBj36Xja9EH6UtBq5KWGvjGUH9opzQXpUQMD&X-Amz-Signature=ad3eb3a461385f8546e7b74467b9e355b286546036fe1740be8ad782a293e7e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
