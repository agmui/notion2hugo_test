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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULYOSWKW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEf2t44otDLh%2Bm1bWOSVs0zOynAAUAdkDMMg2peeklZPAiAwSAnEJdxbovVdyZ1rLcC6hIOt1%2FFsyT6y6zJFr50Lbyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMkX%2FUm4uGOS0OGKizKtwDZO3GPGi1d0E88XwfAJFAnN4NrYazy2OYMG2%2FMVuV94hT1hgqIikXnalOiDPORdT3zw6rnrgsoz1MUQA2naAATW4Rr6%2Fpr2OJc3KIJMpeeUqYNYGz%2FKORCoDc2piYWe0YOWlL5QvutFnDCU%2FCV7bte5lzc3qdRipesG1FzB%2FK55Ufvq8wiKbkC4IqKfBHOYe0hDBGSd4fXTMs7ZDQcYzlzbJMv%2F0Bq8QJ7KVkP0affrW7dPAxjc9Gx9AA0q5uIHN1DxdDCDLKRVxn%2FChGgvUAbhZD6hO9P1vrDmpwmYLIF5vChYPYWPO4Mw13QHMRUBkCBx3iDgnE%2BYiGDoqYxvpthrz2SlF7zMeiqjgRQvh2sA7voeb21TavjnE5NtrSa1jV0d%2FSY59D6RM4bv8P27B%2B46FDtxJlA2ijadZrth6GYqvb2%2BSQkzZ5pm2jIGd5X7NNEHvv3Of1RaSyAtaX3EsfyE1AOIa%2FTRPgB%2B2wGWG%2F2AS5vjztpb4h6iQWqEb7MpbgxK79edkWxzJaw8W%2BfUkTHtVPwPcfFd1MOXCQ1giTdBt93gM6%2Bx31eRueHqbtaTq4U6FmFxaF%2BNkMSJWVYeGCPWK3mheavdF7qMCXP7AXWCkRIZr8Y2bZVR%2BK1xAwp6PqvgY6pgEt2NCmvqD42aA4rvKL%2BbI2E%2F0UDAcohbjCP4JxYBRLjPbcsCprT%2FVa7ffkWF%2B53pvz86gkIozH%2Fm2Hpia%2B40Q3i%2Fy6ivwNYDZaFOq9k3QaObMI2gGw8iF35542NgXrWZ6wFpSch%2Bh0d4pOxpNzUsyi1KBIDFMXLTgqDoKImSxzH0VXJJkg3Pv9kO0xIqt6HzJkrtWFVVAdaIEqv5i9fOug33gykS87&X-Amz-Signature=1c1bb000251bc3f47b975e96d015428fa35424eac129123a2579e664944adf1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULYOSWKW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEf2t44otDLh%2Bm1bWOSVs0zOynAAUAdkDMMg2peeklZPAiAwSAnEJdxbovVdyZ1rLcC6hIOt1%2FFsyT6y6zJFr50Lbyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMkX%2FUm4uGOS0OGKizKtwDZO3GPGi1d0E88XwfAJFAnN4NrYazy2OYMG2%2FMVuV94hT1hgqIikXnalOiDPORdT3zw6rnrgsoz1MUQA2naAATW4Rr6%2Fpr2OJc3KIJMpeeUqYNYGz%2FKORCoDc2piYWe0YOWlL5QvutFnDCU%2FCV7bte5lzc3qdRipesG1FzB%2FK55Ufvq8wiKbkC4IqKfBHOYe0hDBGSd4fXTMs7ZDQcYzlzbJMv%2F0Bq8QJ7KVkP0affrW7dPAxjc9Gx9AA0q5uIHN1DxdDCDLKRVxn%2FChGgvUAbhZD6hO9P1vrDmpwmYLIF5vChYPYWPO4Mw13QHMRUBkCBx3iDgnE%2BYiGDoqYxvpthrz2SlF7zMeiqjgRQvh2sA7voeb21TavjnE5NtrSa1jV0d%2FSY59D6RM4bv8P27B%2B46FDtxJlA2ijadZrth6GYqvb2%2BSQkzZ5pm2jIGd5X7NNEHvv3Of1RaSyAtaX3EsfyE1AOIa%2FTRPgB%2B2wGWG%2F2AS5vjztpb4h6iQWqEb7MpbgxK79edkWxzJaw8W%2BfUkTHtVPwPcfFd1MOXCQ1giTdBt93gM6%2Bx31eRueHqbtaTq4U6FmFxaF%2BNkMSJWVYeGCPWK3mheavdF7qMCXP7AXWCkRIZr8Y2bZVR%2BK1xAwp6PqvgY6pgEt2NCmvqD42aA4rvKL%2BbI2E%2F0UDAcohbjCP4JxYBRLjPbcsCprT%2FVa7ffkWF%2B53pvz86gkIozH%2Fm2Hpia%2B40Q3i%2Fy6ivwNYDZaFOq9k3QaObMI2gGw8iF35542NgXrWZ6wFpSch%2Bh0d4pOxpNzUsyi1KBIDFMXLTgqDoKImSxzH0VXJJkg3Pv9kO0xIqt6HzJkrtWFVVAdaIEqv5i9fOug33gykS87&X-Amz-Signature=4bbd12f0d6d1950ad5e20f2d1afaac3fb5277eafaecc37529888d0b7e04d72a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
