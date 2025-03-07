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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMWPNFX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdDknSNzbW1rpGzDlzMxWa7PvebKISngp8zFmNH%2F1JXgIgFcQu6i6TlCp0Q05mOB%2B743rKguvQ8n11ppKnbNiKedEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMn3CgfeunB1LNB%2BAircA2WwUGsQwEeOokby%2FH0ROoSD9dhYpF8vlGPaV8QbqDXcn7iV9nuy1DA1s4oVHV55ZmTo3TQp3Rd1CxVwhwCmYeZect2t0%2BM2hq6xJaroveRi7hpOuKQjS1SxJbnsu4rhhMqm09zFqJRzULXeT4z4f5Q0Cd9%2BWHyqtmSRRhMduwKfj4cwfYjx5wwJZcgnTXs4mT61WQa61iPykO79BkWeW3%2Ff2MWzWg0QWeT0faRLZrYC2YVq9tGbe1l18sYpzEJv9eZ3jhtOL4M%2F7MLuwxVmiP0nhliICamK3bOTaInDD7QwFpY7R5T%2BdYqRkB5k9MjrcbjuOAHSTQoqsLwtP5wgSfWD4WljgsinNmiiUkwIsdnHnKD%2FCDEhicUZW6%2FblARi1syDkMZessp41ASzwkrxPojSiqZOehLyeiWwVGhPSzn97zDxGqc2U8tlXB%2B9oAvK3rDmJTkmqX6xBqggC0XXiXoTZq11A6HHVskXFb%2F0Ci%2BmQ50raLqeT%2BMEJoweNmoCLvZzVxWqSZ95aIljyAKmrG0HPjfCFGeAAz3lVdAQgxhj8u6vZIZ0Uho09YnMCrDcObiqVKhzceQqQT6UXJ8yOoMHuzztB1SrW%2BQ16T1Z8qj1H6GMa9oxmaEuSFJ1MJTfq74GOqUBGaRtCVRiLOq9iALaWf50dNAFz3VNv3xVOqC9KLk%2BmQfQZyXBBurdG8GSMrNOAtz8%2BMZ%2FslOSlSDJfaAh7yMYO0cGJUayuLWVXKvsX2nZoRBssUxEhJjZmtLyeWY0FgEgDFBJJzuqYc%2FF7neFFKavtqxQp4BsYoMufs2K93r5FX25VyU33iWWfYUfKNKUhApjTIzLnc70SRrdvhOasTizWXJFChgj&X-Amz-Signature=04316537e433b8f904e77a374897af159a106693a10d92b0393916faaa5a9d71&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMWPNFX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdDknSNzbW1rpGzDlzMxWa7PvebKISngp8zFmNH%2F1JXgIgFcQu6i6TlCp0Q05mOB%2B743rKguvQ8n11ppKnbNiKedEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMn3CgfeunB1LNB%2BAircA2WwUGsQwEeOokby%2FH0ROoSD9dhYpF8vlGPaV8QbqDXcn7iV9nuy1DA1s4oVHV55ZmTo3TQp3Rd1CxVwhwCmYeZect2t0%2BM2hq6xJaroveRi7hpOuKQjS1SxJbnsu4rhhMqm09zFqJRzULXeT4z4f5Q0Cd9%2BWHyqtmSRRhMduwKfj4cwfYjx5wwJZcgnTXs4mT61WQa61iPykO79BkWeW3%2Ff2MWzWg0QWeT0faRLZrYC2YVq9tGbe1l18sYpzEJv9eZ3jhtOL4M%2F7MLuwxVmiP0nhliICamK3bOTaInDD7QwFpY7R5T%2BdYqRkB5k9MjrcbjuOAHSTQoqsLwtP5wgSfWD4WljgsinNmiiUkwIsdnHnKD%2FCDEhicUZW6%2FblARi1syDkMZessp41ASzwkrxPojSiqZOehLyeiWwVGhPSzn97zDxGqc2U8tlXB%2B9oAvK3rDmJTkmqX6xBqggC0XXiXoTZq11A6HHVskXFb%2F0Ci%2BmQ50raLqeT%2BMEJoweNmoCLvZzVxWqSZ95aIljyAKmrG0HPjfCFGeAAz3lVdAQgxhj8u6vZIZ0Uho09YnMCrDcObiqVKhzceQqQT6UXJ8yOoMHuzztB1SrW%2BQ16T1Z8qj1H6GMa9oxmaEuSFJ1MJTfq74GOqUBGaRtCVRiLOq9iALaWf50dNAFz3VNv3xVOqC9KLk%2BmQfQZyXBBurdG8GSMrNOAtz8%2BMZ%2FslOSlSDJfaAh7yMYO0cGJUayuLWVXKvsX2nZoRBssUxEhJjZmtLyeWY0FgEgDFBJJzuqYc%2FF7neFFKavtqxQp4BsYoMufs2K93r5FX25VyU33iWWfYUfKNKUhApjTIzLnc70SRrdvhOasTizWXJFChgj&X-Amz-Signature=276ebe40617d24573a42a30e3c6aec81862c333888d9ff81f8eff1b4c2994d03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
