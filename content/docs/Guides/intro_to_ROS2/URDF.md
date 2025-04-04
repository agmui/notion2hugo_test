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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDV4Q4UT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGovG149P2%2BQabSOuUwKeCldY9%2BjHxk6dgq1Y%2FeIPn6pAiA6Wj6NRF2rdeMZop2LnT1jzczMXJe99yihuzI%2BvvG8xCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMvA2ISrJtoO2T7m23KtwD65B6Sgt7qBHsgsm6Sq3lDFFhn7WJKSQcje6MeotSiZqGHFQBVEC9luqKPbo69VxUK6Ydx2L8gm7f%2FCOxu9ONN5fomx3N3woZ86EK8VBtV3dz5t5QftriuNyJb0R7PXLjRgR5JgJTo3EsSunxqYsuXbklAvK%2Br7QbDncXqtYg7CKpIvF99%2FK5YU5UH3YmxThy2h0zhtR53L4B2l2y3yOWl04isDKGhF21hFbf40FXd%2FdVTbuWThPW2zeCXYbkdlln1Bmpnzb2GD6dqsOCscIcmDaifodw3ejgfp0V6arYbvFgUPPeEZ5eG6hkDT6jkWipgxK1ovuAGLvMXQ11zfplFR6Jt%2B5Yo3HfDmM8KrjJx6LKnmYlrX%2BbmDQMSIz4InrDdDyO7SKf8AsbGWFtu1llImfTSu%2Futnvup%2BXRWMWp%2B0lRTWuyo7oSdZaNfT4JVFqDe5YbT2UD5iz%2FxnqovGOq3MFTQ2eQguN72yFMYbTCGFB%2FpU7V9N86HXAgb3nmuN6y0eN%2Bagb%2FpfYyt0uzEfAvAx8nlQFrAfTUuP%2FgfszSbl4HciLP8HsEitcBW16Es35xcCL51i8lm%2FGaHRZAJZcCW%2FxDv243QVqvPJ8bzUJv81Aya1V6GDaEaMeGFj0w47G%2FvwY6pgGMn8yK%2BCsHpDHQDmvMvDzG9qESTx%2FZ0iW5l1K2cVcDFjE27JPmNGJmm9QRJLvJlRAJg%2FytPX0cTEjW%2FurZPjUlf0MLe900d5TzS%2BxR8HW%2FRMGQHA2oKEcshaAAyCQeu0UoH2rDTgTcL2hD%2Fll41NOOg1jrtiKijC3ZQ6FRidEJs2yZ5wjWHFx8n7bwzEJrvOuE7KMdWUrumDK0vgH0rtsPCm%2Bu6Rkh&X-Amz-Signature=29e77527268c30dcb21f12bbef13af8aed292ebeb1d332805f00dcc00f909b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDV4Q4UT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGovG149P2%2BQabSOuUwKeCldY9%2BjHxk6dgq1Y%2FeIPn6pAiA6Wj6NRF2rdeMZop2LnT1jzczMXJe99yihuzI%2BvvG8xCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMvA2ISrJtoO2T7m23KtwD65B6Sgt7qBHsgsm6Sq3lDFFhn7WJKSQcje6MeotSiZqGHFQBVEC9luqKPbo69VxUK6Ydx2L8gm7f%2FCOxu9ONN5fomx3N3woZ86EK8VBtV3dz5t5QftriuNyJb0R7PXLjRgR5JgJTo3EsSunxqYsuXbklAvK%2Br7QbDncXqtYg7CKpIvF99%2FK5YU5UH3YmxThy2h0zhtR53L4B2l2y3yOWl04isDKGhF21hFbf40FXd%2FdVTbuWThPW2zeCXYbkdlln1Bmpnzb2GD6dqsOCscIcmDaifodw3ejgfp0V6arYbvFgUPPeEZ5eG6hkDT6jkWipgxK1ovuAGLvMXQ11zfplFR6Jt%2B5Yo3HfDmM8KrjJx6LKnmYlrX%2BbmDQMSIz4InrDdDyO7SKf8AsbGWFtu1llImfTSu%2Futnvup%2BXRWMWp%2B0lRTWuyo7oSdZaNfT4JVFqDe5YbT2UD5iz%2FxnqovGOq3MFTQ2eQguN72yFMYbTCGFB%2FpU7V9N86HXAgb3nmuN6y0eN%2Bagb%2FpfYyt0uzEfAvAx8nlQFrAfTUuP%2FgfszSbl4HciLP8HsEitcBW16Es35xcCL51i8lm%2FGaHRZAJZcCW%2FxDv243QVqvPJ8bzUJv81Aya1V6GDaEaMeGFj0w47G%2FvwY6pgGMn8yK%2BCsHpDHQDmvMvDzG9qESTx%2FZ0iW5l1K2cVcDFjE27JPmNGJmm9QRJLvJlRAJg%2FytPX0cTEjW%2FurZPjUlf0MLe900d5TzS%2BxR8HW%2FRMGQHA2oKEcshaAAyCQeu0UoH2rDTgTcL2hD%2Fll41NOOg1jrtiKijC3ZQ6FRidEJs2yZ5wjWHFx8n7bwzEJrvOuE7KMdWUrumDK0vgH0rtsPCm%2Bu6Rkh&X-Amz-Signature=9339c41abd840e13dd7711897948d027ead5a71dd2e8c81a6f5724c9c74bf28a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
