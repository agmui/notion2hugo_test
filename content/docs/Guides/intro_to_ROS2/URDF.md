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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXKAPB54%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlMACFMhJ8qa7w71bxRJiwCwTUPyMgJMTJRcaSNF4yqAIhAJ98Yrn5ai1e1DxyJ%2BxQ9DaPd4kh0Olj%2FAAMIWLkrkjVKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeaAaFuRIo2GT%2BVG4q3AOqi1BYlREqUKUFpxUQk%2BH1%2Basos3Yj8LHSkWvvaaaBMXxa%2FSPEYb6u3q2L7w0E8hN0L8wXssjw946MqMylmkY2n7xB%2FORnXdogMvhfokF0HlZL5U0Q4BWNt%2BL3iC3p9%2BzV4GBPK42rRr9bpLrWWMfdBH8IR3G1iK0YaN%2BMoBjQv3LgCvhm%2BRHheKDH7ET9TQmJ7qiFKbBIIBb6ZIOcbOf9Bf4qs1hEORA7rqoKMLbg2PqCQQveaVRIe0T6fS7jPlyiIiXGU27ir40DjzBW0ef78dkTKduJOkIm7IOvv57IoiPfQdJjlkVzsIT28kL43wwOJqv4jldxs3ns5qZjXdK6n8gukPGlQFLtugFoiegao3ZJ%2F9YhHGHvuVXmF2RmRogQfp4SF2GhtxnRpQaVMmMgusXGllVwS%2BeNOm2xrsN%2BSUjM14yR4EPbiJzuarr2M6e3QI05J1Le0bY2nKmvUaUtKJweVp4ztrLn4BWAxYK%2Bo5QOsYazXNE49CfKx31qbGxBL0Pw7mjzuaj3SS%2BXSWh84Su%2BPLG3VD9dF%2FG7%2FF7aQH66xNsxSw5uoQeqJMrGg9kgSGlbYJMS7%2BR4OPO0U%2BOkn2QBSmC4UrYrCrH%2FN2IeZl4kzQ3fyoutWNO4lTCK96q9BjqkAetApSf71WBDHBReh8iTiZCFtqs67%2B586Si073GlZJrBxM%2Fm6Uw8Qo83quxZXVjnx8ncVH%2FuQk%2FpBNVfeZAB%2BuLITMhIkWyXGf%2Bq1cLBW4fW7WNHhSOgzoOdyimrdeTPkixVlyqcNFkymN6%2BuyPm%2FukNQNL2%2BfXVQyykNTP47os3i1ZcR8VniaSsWkOI%2FD2%2F4ymydAXvWKmjpJnakvubPR2k9vfB&X-Amz-Signature=ce95b03408576b2988f2454cb2211a8b2586b64759bf682ccc8a88ba8f150a68&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXKAPB54%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlMACFMhJ8qa7w71bxRJiwCwTUPyMgJMTJRcaSNF4yqAIhAJ98Yrn5ai1e1DxyJ%2BxQ9DaPd4kh0Olj%2FAAMIWLkrkjVKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeaAaFuRIo2GT%2BVG4q3AOqi1BYlREqUKUFpxUQk%2BH1%2Basos3Yj8LHSkWvvaaaBMXxa%2FSPEYb6u3q2L7w0E8hN0L8wXssjw946MqMylmkY2n7xB%2FORnXdogMvhfokF0HlZL5U0Q4BWNt%2BL3iC3p9%2BzV4GBPK42rRr9bpLrWWMfdBH8IR3G1iK0YaN%2BMoBjQv3LgCvhm%2BRHheKDH7ET9TQmJ7qiFKbBIIBb6ZIOcbOf9Bf4qs1hEORA7rqoKMLbg2PqCQQveaVRIe0T6fS7jPlyiIiXGU27ir40DjzBW0ef78dkTKduJOkIm7IOvv57IoiPfQdJjlkVzsIT28kL43wwOJqv4jldxs3ns5qZjXdK6n8gukPGlQFLtugFoiegao3ZJ%2F9YhHGHvuVXmF2RmRogQfp4SF2GhtxnRpQaVMmMgusXGllVwS%2BeNOm2xrsN%2BSUjM14yR4EPbiJzuarr2M6e3QI05J1Le0bY2nKmvUaUtKJweVp4ztrLn4BWAxYK%2Bo5QOsYazXNE49CfKx31qbGxBL0Pw7mjzuaj3SS%2BXSWh84Su%2BPLG3VD9dF%2FG7%2FF7aQH66xNsxSw5uoQeqJMrGg9kgSGlbYJMS7%2BR4OPO0U%2BOkn2QBSmC4UrYrCrH%2FN2IeZl4kzQ3fyoutWNO4lTCK96q9BjqkAetApSf71WBDHBReh8iTiZCFtqs67%2B586Si073GlZJrBxM%2Fm6Uw8Qo83quxZXVjnx8ncVH%2FuQk%2FpBNVfeZAB%2BuLITMhIkWyXGf%2Bq1cLBW4fW7WNHhSOgzoOdyimrdeTPkixVlyqcNFkymN6%2BuyPm%2FukNQNL2%2BfXVQyykNTP47os3i1ZcR8VniaSsWkOI%2FD2%2F4ymydAXvWKmjpJnakvubPR2k9vfB&X-Amz-Signature=a8ba09e734e946de17e45b1f4bb902bc51cc2d992f0c2f7cbae8cfbfcae5bbb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
