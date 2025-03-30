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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSFXSE7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKBPdoV23XVE6NW8cOwriFJsjPdVNRAJYwJjrAyu6rMAIgS%2FLuZeGQ0RtT4Q%2B0oErCJJkXmPRRfFQFkJeWFLgSrWAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuTkILXQJT2TzcNeircA%2Fb9nGVjuIvHffpHcWX%2FraEOS1NlU452eoUwiAlw%2B3qqiNu0dzKlScSUU%2BTMjWfLquY0X%2B%2Fd5YwyQZXDCvI5wxtgE3ZuaQHEwiRI293tWn2rBuQWIQxbP7iXdYjUlnTR%2FI6ZIg6y2Y1Ic3QIUQmkcDEOIjYyZsiUy%2FwbCTJoW1ROKzMRYwJBLwVf8%2BBod%2FGyKJ1L9clL9DsfxCQFuAlSspUySv8EnKMMBCkvBMbfR4Bhf0unzQuVzdTlXjohzZwH1NkXH%2B9iAbcjH%2Bn0ZD%2F%2BnBF8jzWHUwFCZVFL5m4vAxhnizFldMReg45ug69tZyO3X%2FX0ujzsiGOkG5njlEwfMdGcBxn5FoS82Fx3gEdb9QhKeHx6A8lMuSTpb1JboPuDCcQF1oKybpdGAvPkNr6TbFP1Ft26sD4WoZpc7AHiZbYZm0q6QG4IKLz8ynx7ffjLhyUVfBJTRuMQDikYqSlavHR2%2BoSg%2BFvC3yg26bPYC%2B77cIW%2BlMbx0VwTOFGNjw065rto0DtLfJkhBUNnYFnjZmdGwm6FaxHPfGn4On6HwsounqLlWKKMIVF%2FDWQ9UjUO1z5pYUpMmh%2F8EHvoONqi78qhxvw9l%2F4aXcDq%2BbMtcPFUzHfrcryplEGKHTXJMJ6Mpb8GOqUBI7KxYdBLGHaivEgHdlEW5GtBE%2BtWjh7a3fWezWs2pTLYLDWxMWs0gZwVTPtd93RhKOUa31wwFyr0%2F2yREhywELM6mKIqNoZ9VuTeYtUGjlCC26maSRk3il9Yh6N8tfLTeu0REx6xImo%2FydQDY24plRosdfkeoPfZX97E8%2BNP4LAg%2B6q7bcuVgrkQAK6g5z0fmnh%2BKgYeji4%2FkIuk3iDV0bA%2FjBcw&X-Amz-Signature=00cfb48cc986b8d82837df28020c21759326fe73ad268521ce423137649cd6eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFSFXSE7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKBPdoV23XVE6NW8cOwriFJsjPdVNRAJYwJjrAyu6rMAIgS%2FLuZeGQ0RtT4Q%2B0oErCJJkXmPRRfFQFkJeWFLgSrWAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuTkILXQJT2TzcNeircA%2Fb9nGVjuIvHffpHcWX%2FraEOS1NlU452eoUwiAlw%2B3qqiNu0dzKlScSUU%2BTMjWfLquY0X%2B%2Fd5YwyQZXDCvI5wxtgE3ZuaQHEwiRI293tWn2rBuQWIQxbP7iXdYjUlnTR%2FI6ZIg6y2Y1Ic3QIUQmkcDEOIjYyZsiUy%2FwbCTJoW1ROKzMRYwJBLwVf8%2BBod%2FGyKJ1L9clL9DsfxCQFuAlSspUySv8EnKMMBCkvBMbfR4Bhf0unzQuVzdTlXjohzZwH1NkXH%2B9iAbcjH%2Bn0ZD%2F%2BnBF8jzWHUwFCZVFL5m4vAxhnizFldMReg45ug69tZyO3X%2FX0ujzsiGOkG5njlEwfMdGcBxn5FoS82Fx3gEdb9QhKeHx6A8lMuSTpb1JboPuDCcQF1oKybpdGAvPkNr6TbFP1Ft26sD4WoZpc7AHiZbYZm0q6QG4IKLz8ynx7ffjLhyUVfBJTRuMQDikYqSlavHR2%2BoSg%2BFvC3yg26bPYC%2B77cIW%2BlMbx0VwTOFGNjw065rto0DtLfJkhBUNnYFnjZmdGwm6FaxHPfGn4On6HwsounqLlWKKMIVF%2FDWQ9UjUO1z5pYUpMmh%2F8EHvoONqi78qhxvw9l%2F4aXcDq%2BbMtcPFUzHfrcryplEGKHTXJMJ6Mpb8GOqUBI7KxYdBLGHaivEgHdlEW5GtBE%2BtWjh7a3fWezWs2pTLYLDWxMWs0gZwVTPtd93RhKOUa31wwFyr0%2F2yREhywELM6mKIqNoZ9VuTeYtUGjlCC26maSRk3il9Yh6N8tfLTeu0REx6xImo%2FydQDY24plRosdfkeoPfZX97E8%2BNP4LAg%2B6q7bcuVgrkQAK6g5z0fmnh%2BKgYeji4%2FkIuk3iDV0bA%2FjBcw&X-Amz-Signature=a81007890efb4a8240e2911c19237c51779fa45dc1c92a495b964ed1c47bcd5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
