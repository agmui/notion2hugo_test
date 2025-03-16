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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMK3TTM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCoUpQS5IiWb2GbkQzNXQIvsPUDqv9wxkhXFKfKE4vLAiAM5QuLiodIC4VrBUVofDxlRw9Z24vC75RNPkcqnjPghyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMo2X1Wfgf2TGbXPyfKtwD5%2BiWA316wO06PTvnbhRClATiAOVLhRtkomnZt2NUmHF40%2BlTeIEFcJYc9ExDP5RT4OIALbHKouEPqPWlqTkcCNHX7AQtkTaLLWqL9AHtsanFYNAlJW8ZMF6%2BYuzVmSJUqpIp4J%2Fa81QYXN7h9BXR%2BuWvBoowvZuKqHyktDOeNtugD8sf61SrB2ViM8SDUauAo1uApocWcOQ2sI50rHGouWr4bv4MoIE2daJY0p2OTTc%2FEM1pgdBOSxoSDzcQayvMwkL0wHhg7K6k%2FtNzCRwr4%2FYRpWouQHPRg9gbwP99d%2F6Z%2FKAd%2BcjSomLFKYdnbXH2nGSk2obxJUvh3MfJqG1XZqZRQwj6uRTcIh4T3ninu6SRHQa1l3xjLI9DibTxqIT4uRFGR8VsH%2BjyOZJwGv%2BjpAn0qceClXNMbAWviEr2nl9re4EfIaoKqlUkYtsV1VT%2FFdlYP1mZfpoy56U6Nx7hwnMvJq4Rwa4YAFmO7dCvYHBbTlAPAqIp9w9KNLu5LO4mXjaLtnGr2J%2BK%2BUoPnOWEbDGxpXDfdh1WZez2JpAEfR39ZH2SZFGgp2NcZp5wrZ0eTaH5Iv3pxVXPne1XBlKryqAm7zNvGmQAxEuk%2FTy6VDhzRQyHgBwK3Wju3SAwgNnavgY6pgGM6gYTn8IDqzFoB53jUrDEMCjzv6fS1Sg7t%2FJ8NxIU7AIBQtieHfizA9DnHW8ASlHrKj7cxb3TmCmUOXX8sDgerARq9ii4uSCkkI5sgXzlbKvUvhAeiOuCeA4XvBpSI9l2rIlrSDVcHEAmGKwC6LrvopopnfDVPkuSlrkfMMVA5xm8bxCbNTIgN30kmkTWOnO1jMteQDcntXA59nGV8YubGvqKhwpL&X-Amz-Signature=7f64414146be11564588ea3a821b3f09a9b925ddda786c45f39cd5ba70543389&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMK3TTM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCoUpQS5IiWb2GbkQzNXQIvsPUDqv9wxkhXFKfKE4vLAiAM5QuLiodIC4VrBUVofDxlRw9Z24vC75RNPkcqnjPghyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMo2X1Wfgf2TGbXPyfKtwD5%2BiWA316wO06PTvnbhRClATiAOVLhRtkomnZt2NUmHF40%2BlTeIEFcJYc9ExDP5RT4OIALbHKouEPqPWlqTkcCNHX7AQtkTaLLWqL9AHtsanFYNAlJW8ZMF6%2BYuzVmSJUqpIp4J%2Fa81QYXN7h9BXR%2BuWvBoowvZuKqHyktDOeNtugD8sf61SrB2ViM8SDUauAo1uApocWcOQ2sI50rHGouWr4bv4MoIE2daJY0p2OTTc%2FEM1pgdBOSxoSDzcQayvMwkL0wHhg7K6k%2FtNzCRwr4%2FYRpWouQHPRg9gbwP99d%2F6Z%2FKAd%2BcjSomLFKYdnbXH2nGSk2obxJUvh3MfJqG1XZqZRQwj6uRTcIh4T3ninu6SRHQa1l3xjLI9DibTxqIT4uRFGR8VsH%2BjyOZJwGv%2BjpAn0qceClXNMbAWviEr2nl9re4EfIaoKqlUkYtsV1VT%2FFdlYP1mZfpoy56U6Nx7hwnMvJq4Rwa4YAFmO7dCvYHBbTlAPAqIp9w9KNLu5LO4mXjaLtnGr2J%2BK%2BUoPnOWEbDGxpXDfdh1WZez2JpAEfR39ZH2SZFGgp2NcZp5wrZ0eTaH5Iv3pxVXPne1XBlKryqAm7zNvGmQAxEuk%2FTy6VDhzRQyHgBwK3Wju3SAwgNnavgY6pgGM6gYTn8IDqzFoB53jUrDEMCjzv6fS1Sg7t%2FJ8NxIU7AIBQtieHfizA9DnHW8ASlHrKj7cxb3TmCmUOXX8sDgerARq9ii4uSCkkI5sgXzlbKvUvhAeiOuCeA4XvBpSI9l2rIlrSDVcHEAmGKwC6LrvopopnfDVPkuSlrkfMMVA5xm8bxCbNTIgN30kmkTWOnO1jMteQDcntXA59nGV8YubGvqKhwpL&X-Amz-Signature=15b6f2a9c4005ca7eb1cc06cc6d55b82b1af059ec3025dedb88645a683fae4bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
