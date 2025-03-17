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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM2YC4XA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhYrKMQ9rQqP6Khfl6bczj5nnfLcF359QrX7FPfJ%2F1MAIhAM8FFSqOaFIGXOTxyZHrzQVK98K52TOphK2GEUi70VLOKv8DCEEQABoMNjM3NDIzMTgzODA1IgxK%2FIcWndxL7NWF6IUq3AMwG9iAi7KV5ovANqVuii%2BmyhbrlG6%2FUK7JPAuey%2Bf8nnYXT07iFodVbXIUrDoVxhOGe16Ir8U5RoeoyrpMsv2tEszPGUDfgYgYiDqgeHmmU5r%2F2Gt1YpsrFIPuyuDx3%2BOXjaqSwQKPFdiUBR68cWn5Q4qGxSYnF7sXdfIaSWAC2seCFEdSVd%2BDXEAf3NQ8kQ4NS8R1jYXpE3p6sE7%2Funql4uoZevgyuU14sgVZwNmCFKhzWubdvHmXgyguXcUUTA3mW%2FdWq1vJe%2FcGRHp2aMFAHLaNZYrfMBUkohqAYrZLBVZE5wvMDVT%2Fwq3OJ75i0d1RESN2rcvHjLVyuLd2uF8eyCZuhkMCQ1a8TdEdxC0NDdjK62I41YfW7Ejp1Q88qgw0nQTv%2B9YwAZUOpHMXGE7LgalD6%2BOFxAaPRNJaBv7LqQZU8B9Z616o8mllZoJBmsT3vgVm96EHhwC1qAPaeAY232e6FAvSpdLHs%2B5rHuTkuNEv74qx4w4AYtry5fCDc4F23CPS24MZyxTIMEPsaCw8MUzIeAKpCrpXCF9v%2FIEeQzvjLi%2FASc0qMFDSV1MhIIBIVePs%2F9ydDJRJhgESyQ0dNifqzoGKprV2oQj9Szwu9BRbDK52zWHNWUcDeDCfsN%2B%2BBjqkAS3xiCaPmL1RYxg0VXbYfK8%2BndA9dWxRWBrIvAGV%2FDTZaNtUoH%2FPzgPpT3ddEVzl9pG9ihJyWUJbzAwCJ53uiEmqcU63jm0mf2arKa%2BQUph82XsSJArhWeAdFaeyzi14ChII0ehwiM00KpWWGfM8GOQV3zuy1awJ12mrNetAdOn4VJ1sawA1WMvaJyTr80Mks%2Bb6N9ts%2FcBTjplzVmlQXliyJHJv&X-Amz-Signature=d8ab3071e50fb23d61a937b17a2b2146bbacc2737396fcd306bb248ed2bf6896&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM2YC4XA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhYrKMQ9rQqP6Khfl6bczj5nnfLcF359QrX7FPfJ%2F1MAIhAM8FFSqOaFIGXOTxyZHrzQVK98K52TOphK2GEUi70VLOKv8DCEEQABoMNjM3NDIzMTgzODA1IgxK%2FIcWndxL7NWF6IUq3AMwG9iAi7KV5ovANqVuii%2BmyhbrlG6%2FUK7JPAuey%2Bf8nnYXT07iFodVbXIUrDoVxhOGe16Ir8U5RoeoyrpMsv2tEszPGUDfgYgYiDqgeHmmU5r%2F2Gt1YpsrFIPuyuDx3%2BOXjaqSwQKPFdiUBR68cWn5Q4qGxSYnF7sXdfIaSWAC2seCFEdSVd%2BDXEAf3NQ8kQ4NS8R1jYXpE3p6sE7%2Funql4uoZevgyuU14sgVZwNmCFKhzWubdvHmXgyguXcUUTA3mW%2FdWq1vJe%2FcGRHp2aMFAHLaNZYrfMBUkohqAYrZLBVZE5wvMDVT%2Fwq3OJ75i0d1RESN2rcvHjLVyuLd2uF8eyCZuhkMCQ1a8TdEdxC0NDdjK62I41YfW7Ejp1Q88qgw0nQTv%2B9YwAZUOpHMXGE7LgalD6%2BOFxAaPRNJaBv7LqQZU8B9Z616o8mllZoJBmsT3vgVm96EHhwC1qAPaeAY232e6FAvSpdLHs%2B5rHuTkuNEv74qx4w4AYtry5fCDc4F23CPS24MZyxTIMEPsaCw8MUzIeAKpCrpXCF9v%2FIEeQzvjLi%2FASc0qMFDSV1MhIIBIVePs%2F9ydDJRJhgESyQ0dNifqzoGKprV2oQj9Szwu9BRbDK52zWHNWUcDeDCfsN%2B%2BBjqkAS3xiCaPmL1RYxg0VXbYfK8%2BndA9dWxRWBrIvAGV%2FDTZaNtUoH%2FPzgPpT3ddEVzl9pG9ihJyWUJbzAwCJ53uiEmqcU63jm0mf2arKa%2BQUph82XsSJArhWeAdFaeyzi14ChII0ehwiM00KpWWGfM8GOQV3zuy1awJ12mrNetAdOn4VJ1sawA1WMvaJyTr80Mks%2Bb6N9ts%2FcBTjplzVmlQXliyJHJv&X-Amz-Signature=f0687e1e5f9432d3b1133e3753f7f64a1d43d7a4f8cc2fc91d5c1ef6745ee3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
