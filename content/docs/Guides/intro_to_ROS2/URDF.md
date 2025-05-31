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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGWPWB2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3X1Y2ACB7owDYd79TCobk8FUj3K92tj6yJmFa%2FJ0bwAiEA3DaTgMxkJOFr1DfW7XbJiEFsDx9ToWqjyqDmuj4c7ZMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FABUoHKXy3brtNRircA0XwJ268116k82gqj9ecRIkj2NQuQNgE1khUfuewHuAVopZ%2FF0HdAt1kcrb0UWaie2MeaKz2tvnOrW2ErdbfElijRMsNj4HdO5un2l8Ksw3iICAx1COoWqSi9ek8EBrb0RXUT8fUFfEPpK%2FzjvPY%2FAcRSKs40%2FdjFVVLEwNCPUjUjwXQ%2FWdluXnVo4LAjtHqAwhvasYYwPqQMOChEl96ovqRaZglsTZRocAK8V1WxOpYINM15TO9qcwmqSSDYRYq3GN7ri369v9yhwqvqg9hyNbYN8FTlDr1FB9nLc0%2BfhHk6jRpByJEbIVbMUXZS1WT13TB4zNGoJHVLJtQvJd5jBcW7A9KuzStQ1xqr7MTH5eOs3PLzI1zsVDRhWEYKJE69PGBigx7nFxtylxmubT2YxXT34ffP5pOo1oG%2B924IkkQzXFj4ipPve5HCiFsYUiWrRNQs85MaLnzML8bmv34xTPAGM2H1VJkITdcvEDSzoaduCIKZpOZaSgOHKIzqa98SIF7U%2BOVmzydyO9sFA8wo4zQL%2BMEsVaJMGe201oCsLItInnWSlo0GpNdUB9yRpi6iJvGVDtXOsTUAeTtxT%2BJL60vZG03ekh%2FhHiFNYRmJLyQRdEHVUP3ST4zxjZWMIGE68EGOqUBWmxLLRajwZsmnR0t8nk8bVO3%2Bu%2FOhw9lsNGOO8XtxU5YIlggV2QWjwNmSGh%2FknlU2%2BZbLHex4RD8OJYVIRxEtTnacJL8Se4amek5%2FudByhKDovtArlDoS73zXIlOCyIY4NEBTnWbeWnR2GH4bjpEMA3BZRnZn%2F60t%2BnNZYA6XIbqFm1rDPF9Bw68gR153j3I1cjivNJlZEBRlr6tXaWO68zlMo6P&X-Amz-Signature=40aee3e38b68dbac808272a3429ee922a5d5316eb91192f19df6756997b30b52&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGWPWB2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3X1Y2ACB7owDYd79TCobk8FUj3K92tj6yJmFa%2FJ0bwAiEA3DaTgMxkJOFr1DfW7XbJiEFsDx9ToWqjyqDmuj4c7ZMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FABUoHKXy3brtNRircA0XwJ268116k82gqj9ecRIkj2NQuQNgE1khUfuewHuAVopZ%2FF0HdAt1kcrb0UWaie2MeaKz2tvnOrW2ErdbfElijRMsNj4HdO5un2l8Ksw3iICAx1COoWqSi9ek8EBrb0RXUT8fUFfEPpK%2FzjvPY%2FAcRSKs40%2FdjFVVLEwNCPUjUjwXQ%2FWdluXnVo4LAjtHqAwhvasYYwPqQMOChEl96ovqRaZglsTZRocAK8V1WxOpYINM15TO9qcwmqSSDYRYq3GN7ri369v9yhwqvqg9hyNbYN8FTlDr1FB9nLc0%2BfhHk6jRpByJEbIVbMUXZS1WT13TB4zNGoJHVLJtQvJd5jBcW7A9KuzStQ1xqr7MTH5eOs3PLzI1zsVDRhWEYKJE69PGBigx7nFxtylxmubT2YxXT34ffP5pOo1oG%2B924IkkQzXFj4ipPve5HCiFsYUiWrRNQs85MaLnzML8bmv34xTPAGM2H1VJkITdcvEDSzoaduCIKZpOZaSgOHKIzqa98SIF7U%2BOVmzydyO9sFA8wo4zQL%2BMEsVaJMGe201oCsLItInnWSlo0GpNdUB9yRpi6iJvGVDtXOsTUAeTtxT%2BJL60vZG03ekh%2FhHiFNYRmJLyQRdEHVUP3ST4zxjZWMIGE68EGOqUBWmxLLRajwZsmnR0t8nk8bVO3%2Bu%2FOhw9lsNGOO8XtxU5YIlggV2QWjwNmSGh%2FknlU2%2BZbLHex4RD8OJYVIRxEtTnacJL8Se4amek5%2FudByhKDovtArlDoS73zXIlOCyIY4NEBTnWbeWnR2GH4bjpEMA3BZRnZn%2F60t%2BnNZYA6XIbqFm1rDPF9Bw68gR153j3I1cjivNJlZEBRlr6tXaWO68zlMo6P&X-Amz-Signature=11e405b3d349cc0d29ac648be3d854b8b6dde917400aabb951609a309b30bc62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
