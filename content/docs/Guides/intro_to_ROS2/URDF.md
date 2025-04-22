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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6AZHFU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMsbS1F8288GHqJtE%2FHAu8Hzg3O8KjEAHbne19xvbXvAiA%2FwS7f4N63rB7%2FuGjs6LaQPPRhF3%2FGt6p2tYnWld9aeiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuQ5yp7jPSZAtyWOAKtwDPaN9ZkuI95hCjMK%2BmbfJGg7C6w6QM5bkaVmbq%2FRfczOw8Zje4UWjDKxpyLy2wJ0rpICSbnzbxf%2B%2Fet%2F%2FsMkuvwNbhWb7SV5kqKyrGhG4jDLBExxqCAyZcFjZ6moqnn5GxBuPqtnP%2FTA%2FSU%2Bk2cZqxrdbqw2ahXdqaRhOC0T5OASWnOlQS%2FRIPNAZT2q5vGbujG3QzXoixQKKalXSQtbg1921ThsIi5Nc1r0A3JXT89vrMtBmmoJN%2BW0eGmof%2FXxczdBHd3%2FE9LH3PW9K5C65%2F9f1eFg54tAgwbJ2aCZzNcRSvGVOFokF3cT7vVRhM0KMG%2FaeSLSi4g5Q0bAigBA0Mn6dOkC3NzoTNuHCM0Ogn83W8Izj3TQQvtRZpXFy2S2%2FOSXd2m9kfIRPuGyh1vKBn9ZultzWRGrJMsRvPnJWs8Bk2bRwqQlCfdHHO32Wc39mEspKpkrgIs5y%2Fs8dyJl8ifJARM919wrL20HqJ1NQWwnMkSBSn6tWSET8AMwvA6Z6qNrumFUMaD7f%2FLJS6C360KzYrgnjYeOHUp5GAJgFrU2KdN2MDyy%2B%2BAnf9841WN9gJG2hKkgvSYAsKbCUEBJF5MExghB5E6tmr08ATYhcx2USkPpe7QQIMJW9bEgwhNWfwAY6pgGJXEAIS4rfWGNAPKG%2B80YzFTXt3EnwikDSbmZZBT6wy2ncZV9OqUG6Yjr4sWidSbudBeM6sNtxsN8iX619%2BZJgUFXo665%2Bq3hpXaF1qvHU9CPg7rGhgJcMLaGU1mBuEtgVp5RXQCVtVj5y4sBhyNkBez538KjushGc%2BC3katQNznjLgLqSOVeTDJWAi0YqQY3%2Fx5QoypiEybtnc0NDgwUfo8T8cqOk&X-Amz-Signature=862cb48bef73692ee6433d434d2efa3d099c76293cea1a121b863c276f341069&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6AZHFU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMsbS1F8288GHqJtE%2FHAu8Hzg3O8KjEAHbne19xvbXvAiA%2FwS7f4N63rB7%2FuGjs6LaQPPRhF3%2FGt6p2tYnWld9aeiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuQ5yp7jPSZAtyWOAKtwDPaN9ZkuI95hCjMK%2BmbfJGg7C6w6QM5bkaVmbq%2FRfczOw8Zje4UWjDKxpyLy2wJ0rpICSbnzbxf%2B%2Fet%2F%2FsMkuvwNbhWb7SV5kqKyrGhG4jDLBExxqCAyZcFjZ6moqnn5GxBuPqtnP%2FTA%2FSU%2Bk2cZqxrdbqw2ahXdqaRhOC0T5OASWnOlQS%2FRIPNAZT2q5vGbujG3QzXoixQKKalXSQtbg1921ThsIi5Nc1r0A3JXT89vrMtBmmoJN%2BW0eGmof%2FXxczdBHd3%2FE9LH3PW9K5C65%2F9f1eFg54tAgwbJ2aCZzNcRSvGVOFokF3cT7vVRhM0KMG%2FaeSLSi4g5Q0bAigBA0Mn6dOkC3NzoTNuHCM0Ogn83W8Izj3TQQvtRZpXFy2S2%2FOSXd2m9kfIRPuGyh1vKBn9ZultzWRGrJMsRvPnJWs8Bk2bRwqQlCfdHHO32Wc39mEspKpkrgIs5y%2Fs8dyJl8ifJARM919wrL20HqJ1NQWwnMkSBSn6tWSET8AMwvA6Z6qNrumFUMaD7f%2FLJS6C360KzYrgnjYeOHUp5GAJgFrU2KdN2MDyy%2B%2BAnf9841WN9gJG2hKkgvSYAsKbCUEBJF5MExghB5E6tmr08ATYhcx2USkPpe7QQIMJW9bEgwhNWfwAY6pgGJXEAIS4rfWGNAPKG%2B80YzFTXt3EnwikDSbmZZBT6wy2ncZV9OqUG6Yjr4sWidSbudBeM6sNtxsN8iX619%2BZJgUFXo665%2Bq3hpXaF1qvHU9CPg7rGhgJcMLaGU1mBuEtgVp5RXQCVtVj5y4sBhyNkBez538KjushGc%2BC3katQNznjLgLqSOVeTDJWAi0YqQY3%2Fx5QoypiEybtnc0NDgwUfo8T8cqOk&X-Amz-Signature=1e44188e46465ceeed34193b4ac2e070e5ca4624e056df6ddedaccf6610ed378&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
