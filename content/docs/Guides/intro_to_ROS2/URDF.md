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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZDYDEO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD38p5o7J%2BfeKpaLvCc8DDQlzKreC90T0k6Ai5JAKIVpAIhAJaHK1SoeXAF0Kuar4Jxaq1F45VlrYaebWXxz5wzeuNaKv8DCCoQABoMNjM3NDIzMTgzODA1Igz3vt1h8ZRE6jKEJQIq3APvC%2BxB4jYoX9Ex16ukVnKwlRfBSwLR1a%2FLaCnL9ImTKsxuPDQYVEdEcqK7gDXFWJr%2BiOCn98YuLwwTkcQsz34tUAR4SQ7JSH29UyqKsGSR1c8R9jL50OQ7omrYYQSmtJWkRHbfIK1uZMo0AZGTqG8fAjSQPO3%2F5PaPuC2l8P%2FboBaqj4bNYzXjJ4ZAq0rYuFBndRutkxF8gLA9ZueiR945i3FWHnXsnirDxb74BhYoBKQww4GT52n3Soi90C%2BPtkeTEmD46BfWP1znqBBsDcGP%2BdvBX%2BZDcqce9MBCoGpjnSpBgKaHEPgCmFFF1mkjMbSbnCJWeFfNRmTK%2Fm%2FxRRsgFG%2FCjPOgiuvOkp2Df62%2FyrR%2BUeSSVBcDox5aa91VIoEJS4%2FzyzzAWXBo0yMsqYawOWwAfLARoICpuaiNlii2VHdVZsIPYsw7%2BHRPl0UAdQtxA3xVdqBTP8j7LoLTZLUcgn2R5FPnKbMjUPi0N7k6qLpMhxWzGiaPa9iUyvEeyBmcePdceElYKudEcz4c5ifiBDUI4DLFLIbbRme3BFyFmdKNuTadjiQWrIpr8PoZrLkiKxehkfIXxK1ZMWkTUJd1nbEVzu8wQVC2saGzJM%2BHRiqqswj4HRRHn7UvlzDIkby9BjqkAQS0iUf99iI1%2FImW5rTey0BVWofk3D%2BoXAdZ6e7xxLlo3ZPDM1sGFEMMu59juW4GMgqlHMi58hWUKK4yHdkPbr8%2FKDM%2BFo1r20R862iF11wjiCz74aXHukACL%2FVaJw%2FWjwTLswyveC%2FMdI%2BdMd7ztVnZZI6p4uhcoz2fgvugTv9E9iojZZ%2BIuNv10xppOW90el%2Bii7XNzwvEGs4n68GhoEjO2J65&X-Amz-Signature=ffb56888b57b53da401f6e6c67af41446e35989f0990ef226abba497744785b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZDYDEO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD38p5o7J%2BfeKpaLvCc8DDQlzKreC90T0k6Ai5JAKIVpAIhAJaHK1SoeXAF0Kuar4Jxaq1F45VlrYaebWXxz5wzeuNaKv8DCCoQABoMNjM3NDIzMTgzODA1Igz3vt1h8ZRE6jKEJQIq3APvC%2BxB4jYoX9Ex16ukVnKwlRfBSwLR1a%2FLaCnL9ImTKsxuPDQYVEdEcqK7gDXFWJr%2BiOCn98YuLwwTkcQsz34tUAR4SQ7JSH29UyqKsGSR1c8R9jL50OQ7omrYYQSmtJWkRHbfIK1uZMo0AZGTqG8fAjSQPO3%2F5PaPuC2l8P%2FboBaqj4bNYzXjJ4ZAq0rYuFBndRutkxF8gLA9ZueiR945i3FWHnXsnirDxb74BhYoBKQww4GT52n3Soi90C%2BPtkeTEmD46BfWP1znqBBsDcGP%2BdvBX%2BZDcqce9MBCoGpjnSpBgKaHEPgCmFFF1mkjMbSbnCJWeFfNRmTK%2Fm%2FxRRsgFG%2FCjPOgiuvOkp2Df62%2FyrR%2BUeSSVBcDox5aa91VIoEJS4%2FzyzzAWXBo0yMsqYawOWwAfLARoICpuaiNlii2VHdVZsIPYsw7%2BHRPl0UAdQtxA3xVdqBTP8j7LoLTZLUcgn2R5FPnKbMjUPi0N7k6qLpMhxWzGiaPa9iUyvEeyBmcePdceElYKudEcz4c5ifiBDUI4DLFLIbbRme3BFyFmdKNuTadjiQWrIpr8PoZrLkiKxehkfIXxK1ZMWkTUJd1nbEVzu8wQVC2saGzJM%2BHRiqqswj4HRRHn7UvlzDIkby9BjqkAQS0iUf99iI1%2FImW5rTey0BVWofk3D%2BoXAdZ6e7xxLlo3ZPDM1sGFEMMu59juW4GMgqlHMi58hWUKK4yHdkPbr8%2FKDM%2BFo1r20R862iF11wjiCz74aXHukACL%2FVaJw%2FWjwTLswyveC%2FMdI%2BdMd7ztVnZZI6p4uhcoz2fgvugTv9E9iojZZ%2BIuNv10xppOW90el%2Bii7XNzwvEGs4n68GhoEjO2J65&X-Amz-Signature=d70f92e766586eaaf265d0a5bf753c8918a831075063c2f9d35cad2ce4aa5e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
