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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGA4JBQJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFBkNib9OxDkJNqOK2qoukwGPeAxx56JOYW50UKcrTmVAiBq2LA7JTWIfeTG%2BcqC%2B%2Fxqs2n4G2a2HSOLvuBuy1UpZCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYrPoU8BWjwWeRmd7KtwD6TjkEb%2FWbtBwbBJBJzPD40mKNbiv0H1c18VfhJefPcYWHoCpY96i0xlOz6ajym%2BUcy61rR6dFw9eVrh4lL8DEFrptdjHeh42aCXxV%2F13hfte07PFw2Sd3kGGwUyRauncoVGN8GEQMQibA1%2ButcpBC1bHPU9EVDlC6pF%2BMvk2rKX5MuzDlWZGrTISQRr%2FhcpoDV8igt2YvXJ6g846Wl6MqvilTdV4%2FUa1JroJg4hJKdjhHocWNikKJ7iwzeca3Ax4YbG3m3%2FrO6SG2ozjDLaPoHCKFvFYdaY5oo8N2mWfQMuffQMDkVGH3a9d29ipnEOffPvuGcoNg7njshFDqYwElvcLA%2B5OZhTgxMKHmRgDlrnsXNF7Nc82VIa9B9pNJiFfz%2FR%2BjVSQgBRwSH%2Fy4hS8tIzgQUvA0fYQu7VWPVVPaJAbM8XlYTaIYA9j272HngRgdLPjJIIaxpOE3nojyktFF6RcjzTArN7RBML6j1U3mclb3Rq1Go8OhKUOx%2Bktmr6f24n45RGXpZANZFldHk0FbfoRPsWSUW59YkkqfETzx2zJMYY0tU8h9ZisdG9xaOJXLZM%2Blbx%2BPL7jeCyapoyomTtiPlJ8wdHyDTS%2BWCeCGaBipHss0W7TZm%2FQaBUwicjgwAY6pgHJz6NGSGr%2Fd4V3Jy8eLO0PtfrQgsG8igoFLXAj6G0k1cfMYxOk61VwhBupEjSJAYcUAsP7f94ZCtUUsutpV%2BSDNY%2BaV%2BQmcGMkr6FZHsgtmkCX2wkImidx2EC6uVvy7NFZPFolhVqTMcuLPHNfupLWoQCpW1%2FTUybttSbW1P7Ke6bZhGi%2BB%2Bl0nWjq9sUf%2FYesJ0fgEV6jYUcd7H5zjpQrQ03AYSBQ&X-Amz-Signature=4e0401b1440d8d140f6d5b80f46d337b10c47a38fc16e532ed65503c14aa38a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGA4JBQJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFBkNib9OxDkJNqOK2qoukwGPeAxx56JOYW50UKcrTmVAiBq2LA7JTWIfeTG%2BcqC%2B%2Fxqs2n4G2a2HSOLvuBuy1UpZCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYrPoU8BWjwWeRmd7KtwD6TjkEb%2FWbtBwbBJBJzPD40mKNbiv0H1c18VfhJefPcYWHoCpY96i0xlOz6ajym%2BUcy61rR6dFw9eVrh4lL8DEFrptdjHeh42aCXxV%2F13hfte07PFw2Sd3kGGwUyRauncoVGN8GEQMQibA1%2ButcpBC1bHPU9EVDlC6pF%2BMvk2rKX5MuzDlWZGrTISQRr%2FhcpoDV8igt2YvXJ6g846Wl6MqvilTdV4%2FUa1JroJg4hJKdjhHocWNikKJ7iwzeca3Ax4YbG3m3%2FrO6SG2ozjDLaPoHCKFvFYdaY5oo8N2mWfQMuffQMDkVGH3a9d29ipnEOffPvuGcoNg7njshFDqYwElvcLA%2B5OZhTgxMKHmRgDlrnsXNF7Nc82VIa9B9pNJiFfz%2FR%2BjVSQgBRwSH%2Fy4hS8tIzgQUvA0fYQu7VWPVVPaJAbM8XlYTaIYA9j272HngRgdLPjJIIaxpOE3nojyktFF6RcjzTArN7RBML6j1U3mclb3Rq1Go8OhKUOx%2Bktmr6f24n45RGXpZANZFldHk0FbfoRPsWSUW59YkkqfETzx2zJMYY0tU8h9ZisdG9xaOJXLZM%2Blbx%2BPL7jeCyapoyomTtiPlJ8wdHyDTS%2BWCeCGaBipHss0W7TZm%2FQaBUwicjgwAY6pgHJz6NGSGr%2Fd4V3Jy8eLO0PtfrQgsG8igoFLXAj6G0k1cfMYxOk61VwhBupEjSJAYcUAsP7f94ZCtUUsutpV%2BSDNY%2BaV%2BQmcGMkr6FZHsgtmkCX2wkImidx2EC6uVvy7NFZPFolhVqTMcuLPHNfupLWoQCpW1%2FTUybttSbW1P7Ke6bZhGi%2BB%2Bl0nWjq9sUf%2FYesJ0fgEV6jYUcd7H5zjpQrQ03AYSBQ&X-Amz-Signature=ce9e80482c9e937000080520aba624916012707d9ad90b71e4abee408273dfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
