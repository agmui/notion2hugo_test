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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFNHDXH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV4wZ1XMX4o6oVFJj7ffpNVykmRtk1%2BOxtM4khqFUlcAiEAnAgmpfZaVa0nrRw6yu7qc8NBmsNR9qfuk1TkRzmDaOgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFVvYq9qvAKueHwCpCrcAyyRvcjJPAcC4ZtiBzfJonolLZRV0kNOkNkUs8reDYfnOWg8MJ%2BouXU0ZcZQKxEg2ODVmgEjuqOy7%2BUX1ds8v5sngay%2Fr1MShT0GiBvKCqUS8N4AYfgCp2FDjOyBUjDFCo6LltcFn4VWgPJN0Lgrs09CCm2nB2zOOhB7BE7rfNAv4neLeh34Fot4wx43h%2Bjl8CBQItoiymCN%2FIJ0AQc72iRK6FbYhhcNhb5u1kyYjL7MStUEHcs4L3lOKcHQpipmNgz%2BO7rotM5MdLqkKpbbTUZiZ86Lt73F9wmSyoFtGYRphp1vVef94IAKmNeb0N35O9eOUZtFlI888Mj6K4liJlv%2Brtg6XNn1sgtQ90ZQuIk%2BF6KUx%2FkrLUImW4oyzy6%2B6aAxRykXuzgsCoqU12iC6fzyO%2FuFLoppdrevDxUXGHKF6Z4WXNA2GJAkREn2shfPd24%2BQtbDY%2BUr4MmYs1RA4jCF6gtS%2BTuDWXZuRAo3LFN7RxXGR26XuS02LHd%2F7ocoJQrWykUvxclOH8mV7Y%2BaoNsxoPEKVgLSA4L06H2KAvcU0TX5LIN1ULhpuOF8AyfPe3Z484dx2ZGH3yQHHZF4Mzc9Ml45IFmgfrmX6i6jQcg%2BqKOzu18WwllTrMYTMPnq2b4GOqUBGye2fXPfr8U1KNGLEjv5CQjx8RfjBRtyqZQVJu03IVJoFwVEyAE2TJDgKrwMtndCIOuXWAOn01S5W%2FENeqQtC843Us%2FA2fYyeWu4%2B7gVPRQGhNrqzeZXMgWIpcuz8xUvpPpKWyCeIfr0ejY%2BD15eL6EgwjHZ%2FSOGB%2FqJ5wGlpWNalXnjjuKjYEw%2B3eXpdvVL22G6%2FUgVTeMxx1rj1z%2FirEjoZlTX&X-Amz-Signature=3e65c9263da271b1ceac2d55ac2fb409711bfa8031a28bc9355810a8fac5a495&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFNHDXH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV4wZ1XMX4o6oVFJj7ffpNVykmRtk1%2BOxtM4khqFUlcAiEAnAgmpfZaVa0nrRw6yu7qc8NBmsNR9qfuk1TkRzmDaOgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFVvYq9qvAKueHwCpCrcAyyRvcjJPAcC4ZtiBzfJonolLZRV0kNOkNkUs8reDYfnOWg8MJ%2BouXU0ZcZQKxEg2ODVmgEjuqOy7%2BUX1ds8v5sngay%2Fr1MShT0GiBvKCqUS8N4AYfgCp2FDjOyBUjDFCo6LltcFn4VWgPJN0Lgrs09CCm2nB2zOOhB7BE7rfNAv4neLeh34Fot4wx43h%2Bjl8CBQItoiymCN%2FIJ0AQc72iRK6FbYhhcNhb5u1kyYjL7MStUEHcs4L3lOKcHQpipmNgz%2BO7rotM5MdLqkKpbbTUZiZ86Lt73F9wmSyoFtGYRphp1vVef94IAKmNeb0N35O9eOUZtFlI888Mj6K4liJlv%2Brtg6XNn1sgtQ90ZQuIk%2BF6KUx%2FkrLUImW4oyzy6%2B6aAxRykXuzgsCoqU12iC6fzyO%2FuFLoppdrevDxUXGHKF6Z4WXNA2GJAkREn2shfPd24%2BQtbDY%2BUr4MmYs1RA4jCF6gtS%2BTuDWXZuRAo3LFN7RxXGR26XuS02LHd%2F7ocoJQrWykUvxclOH8mV7Y%2BaoNsxoPEKVgLSA4L06H2KAvcU0TX5LIN1ULhpuOF8AyfPe3Z484dx2ZGH3yQHHZF4Mzc9Ml45IFmgfrmX6i6jQcg%2BqKOzu18WwllTrMYTMPnq2b4GOqUBGye2fXPfr8U1KNGLEjv5CQjx8RfjBRtyqZQVJu03IVJoFwVEyAE2TJDgKrwMtndCIOuXWAOn01S5W%2FENeqQtC843Us%2FA2fYyeWu4%2B7gVPRQGhNrqzeZXMgWIpcuz8xUvpPpKWyCeIfr0ejY%2BD15eL6EgwjHZ%2FSOGB%2FqJ5wGlpWNalXnjjuKjYEw%2B3eXpdvVL22G6%2FUgVTeMxx1rj1z%2FirEjoZlTX&X-Amz-Signature=aa6fc7c34b4bb9ff8186784b94b91b1c1947e87fed5bf411a3ef063574e34aff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
