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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBMZTHW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPzsA1XLWEfLrbN17XaynUrLwvIsq6w8STLPpQ9J0UkAIhAPxbe8r26QMyk7GKvPrJU8b1lr4f5H%2FvA%2Byd0aWBv%2BzPKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCsM4qEBgKRTYi%2Bq8q3APiY8rEJ2VA33inAy8j1iDpbY8uQS8iuJu59zJF3iph5WkljKQHo%2BZhdlyXVXO9Z5S0XNjHN7HpK7E23zj4BQVejFrm3Uz75YuhvHxefXHEDeCU4nDdxSGo5J7hUi5fkbc%2BzA7mIusi996ejHZXEF9bS7wEu%2B%2FZYUE5ttM7vX1tVeWiuCRX51tfRUKdzOPw%2FnMj0kV29UKPAQh6vUTEoUYU%2FEJDiPy9pmVEN0d%2FF4dzpwunL4f99bDKeRfSOnebkfKRJv1%2Bbc%2FNHIr1TShTV9hOwl07sdpRNqISt000VB3HttA%2BUOrLudedOJWKQhjb5JWGNq%2Bihwm3qpZPjN%2FD4BmRZUK4%2BJw%2F32hTKzmqEYxHw7rWtgbvglGD6S18PIfU4cq%2BQG5fp0LxBkNbE9HorfFh4MLtJHVheVIvzPo4Q4zrtm4MmW4r1JkNqWdG0wlZjDDs0KHRubwc1qu34jHRzabYzQ4ikXWnV4bky%2FenSrMzvBQGI81bmz19rZ8Y58%2By3kHTPc4Ysx7hKEC55PSrfeJyreVcWwOtCe%2BRTyOI3lVKTg6GgYpiIJp9h9dM86Bxm1UtTPJja3lAhz16xju6KJLeT%2FfwRzxjXlNnJu8sXuJt0t1Tx6ulhyFuAMMpNDDGy7PBBjqkARhLQU8VapUXxYT8Yiel7bVBIu1kRFK%2B9zL6BSgBxvlTHMu8t2H2HWTa2vbIHTgBUcEsWkeY%2FElK8FWSO09m8g3iTGY1i6z6rIj0G0TQYWhFs8t2GDMeaKaMnVPiFI0aBLmVKIQm0O%2FQHrMcFJF9fea2dvVyXEmy%2BIq8OYzQFO4wncdKO7i%2BbO0m4YAdhiKJcaeOCkk%2B28oKr5kL0nsT2cZYPWCl&X-Amz-Signature=e3947195e55031281ceb1218092b9b2de1ac6f06853cdab75812ece351a6db73&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBMZTHW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPzsA1XLWEfLrbN17XaynUrLwvIsq6w8STLPpQ9J0UkAIhAPxbe8r26QMyk7GKvPrJU8b1lr4f5H%2FvA%2Byd0aWBv%2BzPKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCsM4qEBgKRTYi%2Bq8q3APiY8rEJ2VA33inAy8j1iDpbY8uQS8iuJu59zJF3iph5WkljKQHo%2BZhdlyXVXO9Z5S0XNjHN7HpK7E23zj4BQVejFrm3Uz75YuhvHxefXHEDeCU4nDdxSGo5J7hUi5fkbc%2BzA7mIusi996ejHZXEF9bS7wEu%2B%2FZYUE5ttM7vX1tVeWiuCRX51tfRUKdzOPw%2FnMj0kV29UKPAQh6vUTEoUYU%2FEJDiPy9pmVEN0d%2FF4dzpwunL4f99bDKeRfSOnebkfKRJv1%2Bbc%2FNHIr1TShTV9hOwl07sdpRNqISt000VB3HttA%2BUOrLudedOJWKQhjb5JWGNq%2Bihwm3qpZPjN%2FD4BmRZUK4%2BJw%2F32hTKzmqEYxHw7rWtgbvglGD6S18PIfU4cq%2BQG5fp0LxBkNbE9HorfFh4MLtJHVheVIvzPo4Q4zrtm4MmW4r1JkNqWdG0wlZjDDs0KHRubwc1qu34jHRzabYzQ4ikXWnV4bky%2FenSrMzvBQGI81bmz19rZ8Y58%2By3kHTPc4Ysx7hKEC55PSrfeJyreVcWwOtCe%2BRTyOI3lVKTg6GgYpiIJp9h9dM86Bxm1UtTPJja3lAhz16xju6KJLeT%2FfwRzxjXlNnJu8sXuJt0t1Tx6ulhyFuAMMpNDDGy7PBBjqkARhLQU8VapUXxYT8Yiel7bVBIu1kRFK%2B9zL6BSgBxvlTHMu8t2H2HWTa2vbIHTgBUcEsWkeY%2FElK8FWSO09m8g3iTGY1i6z6rIj0G0TQYWhFs8t2GDMeaKaMnVPiFI0aBLmVKIQm0O%2FQHrMcFJF9fea2dvVyXEmy%2BIq8OYzQFO4wncdKO7i%2BbO0m4YAdhiKJcaeOCkk%2B28oKr5kL0nsT2cZYPWCl&X-Amz-Signature=37019cf3cb3ac1205cf69570ee326978f7933e707acfecf7a44419984b48b754&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
