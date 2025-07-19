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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX3LAYL7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCifNF7DlfWKNlbpJ4KsBbXLYq8gX%2FVWAmLezjQaDnlwAIhAPkqbnh70AOO6xUJ6vb653S%2FJmqM913HM9X8fNwgB4TdKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVvvu%2Fbn%2B%2BSxa7pz8q3APwQT31kvSbkDd7%2BOJL3uI%2FpyT0Dngmu7rhPpInn%2FwB6GWWn8cmhIBL1vYgG0GLlugJyDU6qBjDiMN3ur7LBLZ8S8SNLvAOz%2BIdDga5O6Zy%2B%2BeKcKQot7LVoaX9ZUXr4dcukx%2B1ZG5JRlUBRQAgt%2FLTp%2FPbkRytOZ%2Ff%2FLK1xXO89K5NQ93u1bqksIXZprRcVhrNHsqQL1b721opP0zzLokJS3cu8aj8drL3ztzlGDXXoIfiksFTSUYTmNaMJbIok9QtrhTPf%2Fz6ozZFm1Kk%2BCePXr1D9ncEMhVDJtZy0ToH79ZRAsMZTZRX95lTOTj6QYXJ4cXhC%2Fw2MxrQEpomYwACniHxrldqQipFPm5cTEU3bnNrPTqbYzTZKkTN64XMBf9feJs%2BuyPgMrnji8AJFsSqzqGJztRvYpRbJDIxNihXV9UrLEEyUQRmm9aWMTpRYTZkm1YcEzCdja23Knz2h0Y1T2ZCb%2BOxrh7p2wbNkhokhCn0ETc84aXy4DIyHf2jX4FvAIdeNW%2Fp1tQ15VcxFs25vviKJs8Uaf5zXEApQsqOZarMvxofuIxApl1kc%2Fymu9rrvCUqbXl28pveP25ePDfp4v%2FoptzuXzSVpLkLhOzyJuo3i5o49vouPeSqtjDC5e3DBjqkAfnhoRpeiFHjgFH51J%2FkE0JvpoD%2BQld0f18Sgk58dzJa6cbt9R9VH6AZSYGzjbI0p8%2B3oIyy2HXEWWr%2BLmbyn3pMD15VbaE9YrE16fCXIMYu61VmDtDawLEp1Rhwqk306UH4WATZNbQxctM1tVIZqDkl%2BOuN8tI0yuvzV8rg6hRKP9lRAq7jdtIQLin068mWM0TzIB9DRewncQ0QS%2FkNuL4ItdMX&X-Amz-Signature=0e1003e4f158eb6ddca5da6362fa8dfd86d8fc65a014765b5707eb9e8d3ed6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX3LAYL7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCifNF7DlfWKNlbpJ4KsBbXLYq8gX%2FVWAmLezjQaDnlwAIhAPkqbnh70AOO6xUJ6vb653S%2FJmqM913HM9X8fNwgB4TdKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVvvu%2Fbn%2B%2BSxa7pz8q3APwQT31kvSbkDd7%2BOJL3uI%2FpyT0Dngmu7rhPpInn%2FwB6GWWn8cmhIBL1vYgG0GLlugJyDU6qBjDiMN3ur7LBLZ8S8SNLvAOz%2BIdDga5O6Zy%2B%2BeKcKQot7LVoaX9ZUXr4dcukx%2B1ZG5JRlUBRQAgt%2FLTp%2FPbkRytOZ%2Ff%2FLK1xXO89K5NQ93u1bqksIXZprRcVhrNHsqQL1b721opP0zzLokJS3cu8aj8drL3ztzlGDXXoIfiksFTSUYTmNaMJbIok9QtrhTPf%2Fz6ozZFm1Kk%2BCePXr1D9ncEMhVDJtZy0ToH79ZRAsMZTZRX95lTOTj6QYXJ4cXhC%2Fw2MxrQEpomYwACniHxrldqQipFPm5cTEU3bnNrPTqbYzTZKkTN64XMBf9feJs%2BuyPgMrnji8AJFsSqzqGJztRvYpRbJDIxNihXV9UrLEEyUQRmm9aWMTpRYTZkm1YcEzCdja23Knz2h0Y1T2ZCb%2BOxrh7p2wbNkhokhCn0ETc84aXy4DIyHf2jX4FvAIdeNW%2Fp1tQ15VcxFs25vviKJs8Uaf5zXEApQsqOZarMvxofuIxApl1kc%2Fymu9rrvCUqbXl28pveP25ePDfp4v%2FoptzuXzSVpLkLhOzyJuo3i5o49vouPeSqtjDC5e3DBjqkAfnhoRpeiFHjgFH51J%2FkE0JvpoD%2BQld0f18Sgk58dzJa6cbt9R9VH6AZSYGzjbI0p8%2B3oIyy2HXEWWr%2BLmbyn3pMD15VbaE9YrE16fCXIMYu61VmDtDawLEp1Rhwqk306UH4WATZNbQxctM1tVIZqDkl%2BOuN8tI0yuvzV8rg6hRKP9lRAq7jdtIQLin068mWM0TzIB9DRewncQ0QS%2FkNuL4ItdMX&X-Amz-Signature=91d50aef2151afdbe198fa7fdd62de1f401223d29b32a766353aaffb042c3871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
