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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W5IN4XN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZHv9T1I55qONv6GkOicN4dwq2S9vgsRuzR0ZqJ7NcbAiEAsYEZuERUm4gbPXSj1l1ozNb46u2uOJQyqCPM8swv0Twq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOrNV9aNvQSbyeD1LCrcAxZ9B%2BMmDIbpcUF3frcAMth31qdxkYGi0P%2BjNt2eVDY8DUNaIzG1eR4Yiw155WS7%2BmlMOoN1y6%2FQJ4KkUgLqIkwAbZhGiiB0fhDj8wkpDxoYv7gxLLTYUYvRQ645VH8GepvQ5f9GWUg4K7Ojwt0ojw3lfQ%2Fr8jR%2BbRg62DB3inMfCWgTvr0Y%2F0z5xGIWq5HS8oYr2xFK5G%2Bxntl898xdi0COCZ4POn9Hq70amaTJOW5Vbn%2B7pvxkJV7tuenBPA8eYdOBlvltIrabvY71W0rO%2ByL9ULQgEtLL%2FlmKklltfrwwaLs1E0da30t0yboJgumUt1BGY5qOhbfddXMGAPrD3PsgNcGTOxyltedxhdBZPZA%2Bn%2F16c9S7cB%2FuCCn9%2B3nWThaykqru1JbBiDRNUiEUhra5FbR5fzevPr3lSCy%2Bg9hJ0Gr97j%2BjkZZnRrzWXmM7ZDb%2BgOJ%2FkflAuzmvb8MxiL1TW%2BdQsH6A%2BCLT%2FRyqydgAT5urycLc220J%2FabwFVV1hKiRw%2BZMsA9XI4EjisqX%2FKOz86gq%2BSc%2BcFqHj3c4OXOS5ZXXt5q33uQrKq6T7T%2FuqvrR%2B%2BWgrLx83di%2BMqVFX00rUQOxDAzmYxYTRvBn6Lp%2F4OPlgNSrx4V9Ib0XMNq6m8EGOqUBefpF87vbp1CSewQSEnmVBLo%2BFypX%2BrhnGO1pFUnFZLT7zvV5HRCuEUN4Cca3pvdcd5oKg7zW%2BOQ7S8QJZFGAFPYazVZYb%2BtYJALhVh9d9oR%2BU3S0Vlh58BLmUy6dOJYTe3vS1pcTKR9V%2BGaMcTh9Oqmtl5148FRDaWCXBHBXrV0TsExPHSoJ1OD02zT7vCBZZJQqcdO0y5aYTSg6L6RQUOoMw35M&X-Amz-Signature=99f6e35f92895b1ad1337e343d7b17cdb533365adf426e5ce5dbc02818ff61c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W5IN4XN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZHv9T1I55qONv6GkOicN4dwq2S9vgsRuzR0ZqJ7NcbAiEAsYEZuERUm4gbPXSj1l1ozNb46u2uOJQyqCPM8swv0Twq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOrNV9aNvQSbyeD1LCrcAxZ9B%2BMmDIbpcUF3frcAMth31qdxkYGi0P%2BjNt2eVDY8DUNaIzG1eR4Yiw155WS7%2BmlMOoN1y6%2FQJ4KkUgLqIkwAbZhGiiB0fhDj8wkpDxoYv7gxLLTYUYvRQ645VH8GepvQ5f9GWUg4K7Ojwt0ojw3lfQ%2Fr8jR%2BbRg62DB3inMfCWgTvr0Y%2F0z5xGIWq5HS8oYr2xFK5G%2Bxntl898xdi0COCZ4POn9Hq70amaTJOW5Vbn%2B7pvxkJV7tuenBPA8eYdOBlvltIrabvY71W0rO%2ByL9ULQgEtLL%2FlmKklltfrwwaLs1E0da30t0yboJgumUt1BGY5qOhbfddXMGAPrD3PsgNcGTOxyltedxhdBZPZA%2Bn%2F16c9S7cB%2FuCCn9%2B3nWThaykqru1JbBiDRNUiEUhra5FbR5fzevPr3lSCy%2Bg9hJ0Gr97j%2BjkZZnRrzWXmM7ZDb%2BgOJ%2FkflAuzmvb8MxiL1TW%2BdQsH6A%2BCLT%2FRyqydgAT5urycLc220J%2FabwFVV1hKiRw%2BZMsA9XI4EjisqX%2FKOz86gq%2BSc%2BcFqHj3c4OXOS5ZXXt5q33uQrKq6T7T%2FuqvrR%2B%2BWgrLx83di%2BMqVFX00rUQOxDAzmYxYTRvBn6Lp%2F4OPlgNSrx4V9Ib0XMNq6m8EGOqUBefpF87vbp1CSewQSEnmVBLo%2BFypX%2BrhnGO1pFUnFZLT7zvV5HRCuEUN4Cca3pvdcd5oKg7zW%2BOQ7S8QJZFGAFPYazVZYb%2BtYJALhVh9d9oR%2BU3S0Vlh58BLmUy6dOJYTe3vS1pcTKR9V%2BGaMcTh9Oqmtl5148FRDaWCXBHBXrV0TsExPHSoJ1OD02zT7vCBZZJQqcdO0y5aYTSg6L6RQUOoMw35M&X-Amz-Signature=478b38b9a072549acb339819f758c0258ed48d1facd014f73e17e85bbf085829&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
