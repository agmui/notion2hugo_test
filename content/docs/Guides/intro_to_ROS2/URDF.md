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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG6K2Z4W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNU1%2Fn8zN4w9xDJhw9e6I4vazXTV3PhdR4YZ7%2FaloDFAiEAwJ3BNOr3AVpFy5anYKJr9B3Dn9G13uCfH4kvCs%2B6Id4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLOOklmKIekgs6aGhircAwDJJoZ5HCdx2koEI4nd8Gzo9PXiWNllHhSUQHocWAHXVzH14pVFmahyl8da6oNsC%2Fcq1apWUChmYyouzblLQRI8hkC1DwcVyZBY1ZgjNFqenuuNM%2FO0X6JCtIJ9F0eh%2FyC6Y6Sm2wWNmgB11oC1BSVMG%2BhClggOealWZv2tDe90ikFtyEUE1WfGb6MjwRuNm1sHo0K16JA4v%2FSDhnmupqv9WKFmKiPRaI6jetkfWekd9xI1juFeBy1zEyIW%2BJkd0607Ovm6ZpEaLmTpFTcYT0WIbukuy5XEaZru%2Bt4sqvUZYinaVJ%2BUrzMrLbb7MGbu75vtkxzlxOoxokwJRRY1awQ9%2FVQHqhxgElMqckb1v6wcaIpfKc28aWBPYQyxKXiuD7YIDp6D3ZDX8P8PDojz2oyAn0EfIDKjPSQL8dDWqvidfx3q1KbDdzVWs1rFFU%2B30XlOcimxP5ymYNlxSmagwtF1D9ZEiLXUujYvg%2FDrvpSGBQp3hW%2B9ijLE4xnMAld3IbpWgnSZ2yKl3AGsInidnYI5AHqTckp0mydCrPN0OpjV8w9m%2FHetHmUwZMobvbcB48Uzhz54%2BiPEDw0oZ2uGzET992I9p%2FvXEFgpfinyR4QFhCCwYKnpFCqCRpFqMNz%2B8b0GOqUBkwzX%2F3YjifSKorn13EwDBjM3NFArnVeoEGJ8CrAc8pdxsnUsINlJMMNNiHrC8x8WcWtjHbsX57uKcauC3wrFKcdfWTcUPSyc87X%2Bus3oVwjddI4v9cBSoCmJ2xVltxdXcf9m%2BoVoVg%2Fad%2BWm4O%2FtJtn8qMcC52YuW%2BR796Nx1v0v4w2MGgrFu2HakjLOmT6TVH%2FkHp5903S56A9ze2j07o0NQFvJ&X-Amz-Signature=c4702fa4666792241d1929c207e78976f5fab905cd1aea99bd7e3154fcdb886b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG6K2Z4W%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNU1%2Fn8zN4w9xDJhw9e6I4vazXTV3PhdR4YZ7%2FaloDFAiEAwJ3BNOr3AVpFy5anYKJr9B3Dn9G13uCfH4kvCs%2B6Id4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLOOklmKIekgs6aGhircAwDJJoZ5HCdx2koEI4nd8Gzo9PXiWNllHhSUQHocWAHXVzH14pVFmahyl8da6oNsC%2Fcq1apWUChmYyouzblLQRI8hkC1DwcVyZBY1ZgjNFqenuuNM%2FO0X6JCtIJ9F0eh%2FyC6Y6Sm2wWNmgB11oC1BSVMG%2BhClggOealWZv2tDe90ikFtyEUE1WfGb6MjwRuNm1sHo0K16JA4v%2FSDhnmupqv9WKFmKiPRaI6jetkfWekd9xI1juFeBy1zEyIW%2BJkd0607Ovm6ZpEaLmTpFTcYT0WIbukuy5XEaZru%2Bt4sqvUZYinaVJ%2BUrzMrLbb7MGbu75vtkxzlxOoxokwJRRY1awQ9%2FVQHqhxgElMqckb1v6wcaIpfKc28aWBPYQyxKXiuD7YIDp6D3ZDX8P8PDojz2oyAn0EfIDKjPSQL8dDWqvidfx3q1KbDdzVWs1rFFU%2B30XlOcimxP5ymYNlxSmagwtF1D9ZEiLXUujYvg%2FDrvpSGBQp3hW%2B9ijLE4xnMAld3IbpWgnSZ2yKl3AGsInidnYI5AHqTckp0mydCrPN0OpjV8w9m%2FHetHmUwZMobvbcB48Uzhz54%2BiPEDw0oZ2uGzET992I9p%2FvXEFgpfinyR4QFhCCwYKnpFCqCRpFqMNz%2B8b0GOqUBkwzX%2F3YjifSKorn13EwDBjM3NFArnVeoEGJ8CrAc8pdxsnUsINlJMMNNiHrC8x8WcWtjHbsX57uKcauC3wrFKcdfWTcUPSyc87X%2Bus3oVwjddI4v9cBSoCmJ2xVltxdXcf9m%2BoVoVg%2Fad%2BWm4O%2FtJtn8qMcC52YuW%2BR796Nx1v0v4w2MGgrFu2HakjLOmT6TVH%2FkHp5903S56A9ze2j07o0NQFvJ&X-Amz-Signature=af1629ad94de513cb8f577d3adecf8408c14ac46486f75c89193189c7b0bcc55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
