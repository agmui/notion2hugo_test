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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y6HGK6C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN1St1P6wJbh%2BIfQNyIfLbXsn3iDEdWSkCT6t8HJg1QIgdFr0EE9XzAA%2Bvw6ST2JxyIK0iuIwMzwr0q7WB2Z7ubYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO%2BDAsZCZBdTK3zFCrcA7lAfaNZBKmy8UwDjktcGKfIvzEY7PnfQ4h24CQR1ttsN0Qb8OTse0En3c%2BX5V3bS%2F79v4CsJriRnn%2BDATG6lRbQKOMUQeCnM3IMEskdGFpsJo6KduBraKYzt5JIRhuIUWJt7zXGiM0fSG48MsvWEifTtBndEHY%2FOuYbNX3I5EhfRlL6U8CyBoSsTjY6cpiv%2BKd%2FmR%2FndVAD%2FDp3fpvGTUghcjf3%2FzFwj38mfjtBQD9doo7iLBkzcae7Nk76OoX4JKbklKjLAAVxFw1r1znybXRFWofvA1dv9HWFVbUMDofdNs%2Biuza2QYgrTripdYMNsRxrrquYbtAliD3b3OFRjq0gceiAntpJvcpMLGwBaNn9v9kQGs4r2GUBMDy4Ki0%2FuzOP3ZFk2ohh%2BfGEY17hDM4dk6yMSgsRyICqVJjEuOmV58v%2BpHPY2%2BSKQuBfkWJJ%2BIsFPJyrSZmP%2BNYz1ewIX0WikyzK6UKNqymen%2FrmwreQqdqBP7yOGamUlNqNM25etdrEB%2FhvJ7picC5InVcH48utQ%2FeYCsgQLKb%2BvyBpdl3lnu9fBlcGJPRGW2qiEPaP8teAF7ESrQrYXwHwlDUhzX4zwH8yCoPJdAenmZFX2PPBFYYEkYoFuxeR1XYgMO6f4r0GOqUBPamtlxjXXS2v0Bzp%2FAlN4apWNsLXJcc8cn7GETx15o9dWZR2hnRnE5EzwEPgva6PTzh0p%2FpHHVi09sr0e1vXNy30Wpn8pzYx%2F3WSROCU7q%2FMlTnfmWbYv8l6uCKUlQfnFISCIAMXDi4X6Z08J9Ha2kZJSudMezW8pxNLBqZN7Vv%2BSUnDmf6j95xxdPhglBq4xVHF3VMf87L8wSuq77Z5Mm2dXRSI&X-Amz-Signature=7e22ab11f4a5616ff1d6e48581263b3eaf3d1383bf15a7a5920d92cdbe510109&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y6HGK6C%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN1St1P6wJbh%2BIfQNyIfLbXsn3iDEdWSkCT6t8HJg1QIgdFr0EE9XzAA%2Bvw6ST2JxyIK0iuIwMzwr0q7WB2Z7ubYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO%2BDAsZCZBdTK3zFCrcA7lAfaNZBKmy8UwDjktcGKfIvzEY7PnfQ4h24CQR1ttsN0Qb8OTse0En3c%2BX5V3bS%2F79v4CsJriRnn%2BDATG6lRbQKOMUQeCnM3IMEskdGFpsJo6KduBraKYzt5JIRhuIUWJt7zXGiM0fSG48MsvWEifTtBndEHY%2FOuYbNX3I5EhfRlL6U8CyBoSsTjY6cpiv%2BKd%2FmR%2FndVAD%2FDp3fpvGTUghcjf3%2FzFwj38mfjtBQD9doo7iLBkzcae7Nk76OoX4JKbklKjLAAVxFw1r1znybXRFWofvA1dv9HWFVbUMDofdNs%2Biuza2QYgrTripdYMNsRxrrquYbtAliD3b3OFRjq0gceiAntpJvcpMLGwBaNn9v9kQGs4r2GUBMDy4Ki0%2FuzOP3ZFk2ohh%2BfGEY17hDM4dk6yMSgsRyICqVJjEuOmV58v%2BpHPY2%2BSKQuBfkWJJ%2BIsFPJyrSZmP%2BNYz1ewIX0WikyzK6UKNqymen%2FrmwreQqdqBP7yOGamUlNqNM25etdrEB%2FhvJ7picC5InVcH48utQ%2FeYCsgQLKb%2BvyBpdl3lnu9fBlcGJPRGW2qiEPaP8teAF7ESrQrYXwHwlDUhzX4zwH8yCoPJdAenmZFX2PPBFYYEkYoFuxeR1XYgMO6f4r0GOqUBPamtlxjXXS2v0Bzp%2FAlN4apWNsLXJcc8cn7GETx15o9dWZR2hnRnE5EzwEPgva6PTzh0p%2FpHHVi09sr0e1vXNy30Wpn8pzYx%2F3WSROCU7q%2FMlTnfmWbYv8l6uCKUlQfnFISCIAMXDi4X6Z08J9Ha2kZJSudMezW8pxNLBqZN7Vv%2BSUnDmf6j95xxdPhglBq4xVHF3VMf87L8wSuq77Z5Mm2dXRSI&X-Amz-Signature=d41bb10fe07604c0f034e3bbb919c8a80fcaa491ecb3262b00f9c5a8a9b22211&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
