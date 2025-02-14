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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXOPEUIG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBY5aglUYv%2B7aNNX2AFbu9szf2vDr%2BDtdj6xDLuzLiDjAiAIRvXZaNuAfQZwjzMPe7L%2BtnmY%2Fw5vA0lLndC2TBSjjCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCtKTURsnfvi7rTjVKtwDJ1086rAiA50THZJfhudQ%2FzdkjtK6bWEGv93glLcrI8dBA289Iq3eEwSXZxyFKeA4t%2FIYmtehE6an2vcS5qSvCucJ8wMkh55fue4ruo3e3BlSEIEtR0o39TbGdmsn4GlbjL9GJD2D3wOKxAXkS8hlSNCUYdXmv1nZ4ROHB8dv%2FAyx1TKJxstiGCsNU8mxxCPwLkG6iI1E%2BWsi4jtWT%2FQigrgtSWNHojS3NMQ1cO%2FzXgVtaHVL4TMlEiXEBXkJafXowde7ZLi9llLoJbh2WFfhTk783Glee0A2CrFMtCuHxst%2BT2jUi6ka4VBar05KpGmba8UUE9oFK8U9umys%2F7bi%2FtZKg4kx9xTuDlmZUyCRqdcn7%2FfaGxKPrMmdTvuBwfC%2Fdewl66unuI2%2BXrdtL1hYt9%2FPfWNajU%2F%2BCV8L%2Fpyh10Uw%2FhFhRvwuhXXlCddBSi%2B7YODYp58it0yn94Y2QvryggYs%2BK8HDw88p00c3GV7w69VtdB31ibkLTpQkQTivMs04jiClpH%2F7IcPLNza%2Bqncg320168ladGR9%2BjhtqoFkrbzV4MelPlAL3HxW1St%2FkkekDu%2B4gkjmpIw%2FkRHg1DXfAgOMV7ei%2FmbvFQm8fluqybgWYpSoqRl%2FZOvGQgwi%2Bu8vQY6pgE0F0wmsZ3%2BWO1yRpfCvmwXLNEgrZxuWRJWPTkzbHQGTclodg9yMmJFRp0bngT%2Bw6IN9rJ7oOykbzQ7uTLL0DRk9ZCmoPjTM1p2y%2BucPLOpNFTQzZeBw0FAG%2BxfPDwGg6Y%2Bl7dn2KNS9EkhyFBZ07407flUua4AkU%2Buqe1voZJ8XtZ%2BmacTSNWHWc8VY%2BRiwowrOY1k7DEEbiYOeiwFSAx%2FIEFbcIso&X-Amz-Signature=784daaf8acff4bce5c1457d0a4e18b12ce1085917e8fca8f7d12a43ee80dee55&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXOPEUIG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBY5aglUYv%2B7aNNX2AFbu9szf2vDr%2BDtdj6xDLuzLiDjAiAIRvXZaNuAfQZwjzMPe7L%2BtnmY%2Fw5vA0lLndC2TBSjjCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCtKTURsnfvi7rTjVKtwDJ1086rAiA50THZJfhudQ%2FzdkjtK6bWEGv93glLcrI8dBA289Iq3eEwSXZxyFKeA4t%2FIYmtehE6an2vcS5qSvCucJ8wMkh55fue4ruo3e3BlSEIEtR0o39TbGdmsn4GlbjL9GJD2D3wOKxAXkS8hlSNCUYdXmv1nZ4ROHB8dv%2FAyx1TKJxstiGCsNU8mxxCPwLkG6iI1E%2BWsi4jtWT%2FQigrgtSWNHojS3NMQ1cO%2FzXgVtaHVL4TMlEiXEBXkJafXowde7ZLi9llLoJbh2WFfhTk783Glee0A2CrFMtCuHxst%2BT2jUi6ka4VBar05KpGmba8UUE9oFK8U9umys%2F7bi%2FtZKg4kx9xTuDlmZUyCRqdcn7%2FfaGxKPrMmdTvuBwfC%2Fdewl66unuI2%2BXrdtL1hYt9%2FPfWNajU%2F%2BCV8L%2Fpyh10Uw%2FhFhRvwuhXXlCddBSi%2B7YODYp58it0yn94Y2QvryggYs%2BK8HDw88p00c3GV7w69VtdB31ibkLTpQkQTivMs04jiClpH%2F7IcPLNza%2Bqncg320168ladGR9%2BjhtqoFkrbzV4MelPlAL3HxW1St%2FkkekDu%2B4gkjmpIw%2FkRHg1DXfAgOMV7ei%2FmbvFQm8fluqybgWYpSoqRl%2FZOvGQgwi%2Bu8vQY6pgE0F0wmsZ3%2BWO1yRpfCvmwXLNEgrZxuWRJWPTkzbHQGTclodg9yMmJFRp0bngT%2Bw6IN9rJ7oOykbzQ7uTLL0DRk9ZCmoPjTM1p2y%2BucPLOpNFTQzZeBw0FAG%2BxfPDwGg6Y%2Bl7dn2KNS9EkhyFBZ07407flUua4AkU%2Buqe1voZJ8XtZ%2BmacTSNWHWc8VY%2BRiwowrOY1k7DEEbiYOeiwFSAx%2FIEFbcIso&X-Amz-Signature=2255474e05c63bf3b49c740b55a18fbe025e5295358a3b5b7051ea88aed7deb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
