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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSFEH53%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzPJ%2FRqVR39avu4E9IdIwEyQPqt5Fq4hoU4EMiUQ%2FoTAiEAnLsJvWUBgeAS6%2FMsWMQB03irg%2BCpjbzzRvR1f3wFBysq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDF1y4n1Ok4PdKbQBNCrcA18ERr5%2FzcnAHG7IhFrh2vgBUBtIyEgVInsKHmc6CVUamWoXPi%2FjCGB07tWy3HwirOSuQI8puZ%2B52wXwdQFIs277s3Un%2FvIYL0xsik9ACdc2N9%2F8knUsPiXdbuu4XBUczXqIE1sz6rqam4nZs4zViSUi%2BTQVmc8v7zYlvH44X8JuuE5HQIc1Gl%2FD%2FW4ROD8kPc763BkSU2ONDeiJBNuUfeO0w%2BgcaTqBq4BLsrsposae7%2BZk5lBPgdXK06YhkK9Ipx8jC7hnh9%2BH5HA%2FjK3p%2BNvZn%2BTvZG5QNYZxapIavimcSoHOVsgXHGedHKn29P0omhj0TSP5jbakHP3298lMQTm%2FbaV4lTWA2d7fnwy0xEA%2F3xI9JRvOzqavK8zIn1CAK5%2BYkXr0O3NypmGFYJJM3w4C0nS7QnoNO8xSK24jBi8QO1%2FZ9fVP7V%2BX3IWwOH7yKNcQBukSTdL%2Bf5l1N2KF3O9bCcsI1BJG7p8S6Teytb1z3swO%2FTtgTB7Od2Xnl25H18AgrXRecpyLlj1MY6uUEYOM6PJqRXJVtJRt1KSC%2Bj4%2Bqg27GqpS451tS%2BvqiTnerhu%2Bu9A6Bk7HFQncZMjbaeZUHM9gu%2BYDCxrnaf7zZTNfY9u2VygddFYCPtMhMJ625L4GOqUBymqkmYvj3Jq5smJB%2FAVKdD1D9Zs89gMzs5HMYBfsyzDRrZ9%2FD%2BK9B2W4nDrWvFG8ZIJnaBxhgSS9IMWW7fctq%2BPAqvAd%2FkExMzXDfVOfaf%2F%2FNyclJrhps2bRJhNTwPE0p5eCtcqfQuX%2FyWmCAWvPEK8dFbBQyHHG6vW9uCqzsCtFtxp%2F5raVJFktjFHd%2B9216%2BunXvhpyYdxDpssXtlk5M8B%2BjTz&X-Amz-Signature=c7424abeda8c77bef3ef95b3b303e0c507a2d1a6acad9edb310f9d8e7486e994&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSFEH53%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzPJ%2FRqVR39avu4E9IdIwEyQPqt5Fq4hoU4EMiUQ%2FoTAiEAnLsJvWUBgeAS6%2FMsWMQB03irg%2BCpjbzzRvR1f3wFBysq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDF1y4n1Ok4PdKbQBNCrcA18ERr5%2FzcnAHG7IhFrh2vgBUBtIyEgVInsKHmc6CVUamWoXPi%2FjCGB07tWy3HwirOSuQI8puZ%2B52wXwdQFIs277s3Un%2FvIYL0xsik9ACdc2N9%2F8knUsPiXdbuu4XBUczXqIE1sz6rqam4nZs4zViSUi%2BTQVmc8v7zYlvH44X8JuuE5HQIc1Gl%2FD%2FW4ROD8kPc763BkSU2ONDeiJBNuUfeO0w%2BgcaTqBq4BLsrsposae7%2BZk5lBPgdXK06YhkK9Ipx8jC7hnh9%2BH5HA%2FjK3p%2BNvZn%2BTvZG5QNYZxapIavimcSoHOVsgXHGedHKn29P0omhj0TSP5jbakHP3298lMQTm%2FbaV4lTWA2d7fnwy0xEA%2F3xI9JRvOzqavK8zIn1CAK5%2BYkXr0O3NypmGFYJJM3w4C0nS7QnoNO8xSK24jBi8QO1%2FZ9fVP7V%2BX3IWwOH7yKNcQBukSTdL%2Bf5l1N2KF3O9bCcsI1BJG7p8S6Teytb1z3swO%2FTtgTB7Od2Xnl25H18AgrXRecpyLlj1MY6uUEYOM6PJqRXJVtJRt1KSC%2Bj4%2Bqg27GqpS451tS%2BvqiTnerhu%2Bu9A6Bk7HFQncZMjbaeZUHM9gu%2BYDCxrnaf7zZTNfY9u2VygddFYCPtMhMJ625L4GOqUBymqkmYvj3Jq5smJB%2FAVKdD1D9Zs89gMzs5HMYBfsyzDRrZ9%2FD%2BK9B2W4nDrWvFG8ZIJnaBxhgSS9IMWW7fctq%2BPAqvAd%2FkExMzXDfVOfaf%2F%2FNyclJrhps2bRJhNTwPE0p5eCtcqfQuX%2FyWmCAWvPEK8dFbBQyHHG6vW9uCqzsCtFtxp%2F5raVJFktjFHd%2B9216%2BunXvhpyYdxDpssXtlk5M8B%2BjTz&X-Amz-Signature=4db408d777aa53db983ef8a90153f75f0e6627b52cc1f1225a205425f47d51ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
