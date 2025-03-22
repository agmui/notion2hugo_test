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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZAWWCU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDzdMRn8zuVnPqJM2QcbpWphK8EUJSCqMuLK4BBmy6fkAIgaxKttJ0A1HjFu56pcCdOsCeBUAVqu0wJ5npKfsLSmHIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqJfb3xqjtWLCrSIyrcA5qZq1V%2BhTK%2BbtrFOgQ1Rt7PuHnpXXuBEo2HkHu7pX5%2Fqx%2FwPZlzGT%2F8Sbfiiqlanr1P0COjZWRgzQTRXLn2nOYhk7I9bNmwY9HISnuWAO9T8Yk8YQdLhF7psIOFP00mEunE%2FSEDYuXCZDs4MkBYwngtPrm7HCUd6l4wz%2FPUeBDZssEuQuoJSzsdbGyhMVw8m6wPCuM0MHubd8C59nVpB3ZxMM%2FCdrjOBp%2BqBQKeIhNdXrT2c%2Bn2LOu9hRVj960oMb5pPuIfPmrO6%2Bl6X1mLggkdimMyau5UVeo2rXP8bOQzBOPVw1pnmS7dUAX1Uuq6vbf8Pfg3ZjtLFZKpEGgF0Wte1KZeBJnRNTWJkwUXIvaNrr0dklUhxEtHdEIcs%2FSXpqcWBN7SHVbLnpvyPd5Zk36YIToJb7RRIoC83Rp19pjaZTJ5ANT0JUZYKTWcz3UGexJjZhZWgp4yKQccRQpHDpHZ9usCBWxCQMqnHJsWuPPucnZRP%2FG6ndhRElWCVTcGOltd%2FWGKXMzZlpGtWjsxpr6%2FdUft4GGreSmfOOaXGK%2Frl%2B6MdtMxkCTg%2FXTAKz1NAyfeM876yHtxMbfkLGGQmTQsyLPVVk%2B5ork8RZrChk2%2Flu7Gss6s260TikkfMKS7%2BL4GOqUBkylDHja91eQrqE%2F6DmatzbI4CsoKPAZycMQAq1x6C6rS4dSL6hmsN2C3GfbwJJUSM90l5jZqSFRMpRkJogyYXPO6ryhb8wrOnqsFUIajOSQKULZC5UBRJ7tqFMaZSit%2FwlfgWBv1QaLJn2oLNbbIX7VuOwooxuhBBUyQWDC5LG%2FN29QlOcZ0dV9WgDYMchjwOYZkX64OyBbkqry2o644eFBmlhYB&X-Amz-Signature=4ca1fef62307b4411e988a2b1d88a3e6149469ae14b495adb2f39ec1c5ccc9b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TZAWWCU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDzdMRn8zuVnPqJM2QcbpWphK8EUJSCqMuLK4BBmy6fkAIgaxKttJ0A1HjFu56pcCdOsCeBUAVqu0wJ5npKfsLSmHIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqJfb3xqjtWLCrSIyrcA5qZq1V%2BhTK%2BbtrFOgQ1Rt7PuHnpXXuBEo2HkHu7pX5%2Fqx%2FwPZlzGT%2F8Sbfiiqlanr1P0COjZWRgzQTRXLn2nOYhk7I9bNmwY9HISnuWAO9T8Yk8YQdLhF7psIOFP00mEunE%2FSEDYuXCZDs4MkBYwngtPrm7HCUd6l4wz%2FPUeBDZssEuQuoJSzsdbGyhMVw8m6wPCuM0MHubd8C59nVpB3ZxMM%2FCdrjOBp%2BqBQKeIhNdXrT2c%2Bn2LOu9hRVj960oMb5pPuIfPmrO6%2Bl6X1mLggkdimMyau5UVeo2rXP8bOQzBOPVw1pnmS7dUAX1Uuq6vbf8Pfg3ZjtLFZKpEGgF0Wte1KZeBJnRNTWJkwUXIvaNrr0dklUhxEtHdEIcs%2FSXpqcWBN7SHVbLnpvyPd5Zk36YIToJb7RRIoC83Rp19pjaZTJ5ANT0JUZYKTWcz3UGexJjZhZWgp4yKQccRQpHDpHZ9usCBWxCQMqnHJsWuPPucnZRP%2FG6ndhRElWCVTcGOltd%2FWGKXMzZlpGtWjsxpr6%2FdUft4GGreSmfOOaXGK%2Frl%2B6MdtMxkCTg%2FXTAKz1NAyfeM876yHtxMbfkLGGQmTQsyLPVVk%2B5ork8RZrChk2%2Flu7Gss6s260TikkfMKS7%2BL4GOqUBkylDHja91eQrqE%2F6DmatzbI4CsoKPAZycMQAq1x6C6rS4dSL6hmsN2C3GfbwJJUSM90l5jZqSFRMpRkJogyYXPO6ryhb8wrOnqsFUIajOSQKULZC5UBRJ7tqFMaZSit%2FwlfgWBv1QaLJn2oLNbbIX7VuOwooxuhBBUyQWDC5LG%2FN29QlOcZ0dV9WgDYMchjwOYZkX64OyBbkqry2o644eFBmlhYB&X-Amz-Signature=a940f49b5e31ef7d468579385aff52f5e33de8a990c5f145a0caa495a79e4091&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
