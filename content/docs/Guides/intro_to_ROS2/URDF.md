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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR63ZVEJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQC8kpCEEtMy4a7s%2B%2FEoRXUoK6Of5tg7LUZSJG28pN%2F9QAIhANgje%2FoUSHU2vA3zLnqZ8LTuZYJRZb%2BZwq1B4WYlMa56Kv8DCFwQABoMNjM3NDIzMTgzODA1Igx9H%2BmNRvC%2F2PmQpX0q3AP3C08MfTssl8naKObsFlX1ttdX2Lj2qDGjGqr4mjyXTbDt3qlul4EqwvdsbtfEImjFbPyxLg92Px2snqS9iFyBuSaa4WYTe7I03JxJW95CnVkMHOzu1sIhhOYl%2FL3mTb3sxJaaWkrZqnzKnLDbZW1qbfiICc3j775U8LT2EACHbJG864Y3KkBw795uNt5oKjf%2Fzn3uzIohU%2BHvex7tTSt%2BIdcXGG3dKIJZVNc81gUb5RsQs1A9OC%2FGKJIJujikQsn752X4F1jfw6ywXT2fNQU3d6NBxd1jXbtT8oxwm6koKlrxo%2FmzEs1WS9c3wdmO39juZOrHC71O5VQDCgPMiQ%2Fr6j4eF%2Be7L%2B9QnkBCwC75ErocMRsmdw%2B4hYYJF4yC9wsHaKyMfEqcaDNNv%2BzsztmGPslg8yBFjHvYCC%2B5aIbBd3I28WsllwJNZs%2BMbSXPLPmZpOtqALPcBLBELQaArMt6DCoRuMhGK%2BXN4V6WxTJ9Xz66lgp690TXphLbDe8v1vFBf7nwowdzwcDhRysDBiR8CQJoLHhqgjtPmUk%2BZ%2BMxiHmpeGAXnI79FAWPdbexaMsOX%2FNDQedkn8QMuSHXijuPpVkhGDR8I2tnJizomn4XCVqSeH%2BGBBGGjKTF%2BTDRwPTCBjqkAfJcT1XccWoV0UDWpjrDoyr06vp5%2FfwqxVbyQ%2BwKaeikUl3WxQKNk3wZgMnML8pa5LkjmC1dzYu8ynZCTNeEb3ze7TwK0IvFu55%2BqiIorTn95Gzr%2F6SmkMB4l68mbK1yaGPqe8lnosOfemkcafNQJMTZoNJwFPzbH9ssN0EiHj7Pg63xQCUxrxNWf9E7RLZ8jO9Nn%2FL2g%2FLVgJyj3hl4BTUqECPV&X-Amz-Signature=df7b3dc9cefc36ee0fbace5928579eb5aa8c063873d84506c371f5a3690e1927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR63ZVEJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQC8kpCEEtMy4a7s%2B%2FEoRXUoK6Of5tg7LUZSJG28pN%2F9QAIhANgje%2FoUSHU2vA3zLnqZ8LTuZYJRZb%2BZwq1B4WYlMa56Kv8DCFwQABoMNjM3NDIzMTgzODA1Igx9H%2BmNRvC%2F2PmQpX0q3AP3C08MfTssl8naKObsFlX1ttdX2Lj2qDGjGqr4mjyXTbDt3qlul4EqwvdsbtfEImjFbPyxLg92Px2snqS9iFyBuSaa4WYTe7I03JxJW95CnVkMHOzu1sIhhOYl%2FL3mTb3sxJaaWkrZqnzKnLDbZW1qbfiICc3j775U8LT2EACHbJG864Y3KkBw795uNt5oKjf%2Fzn3uzIohU%2BHvex7tTSt%2BIdcXGG3dKIJZVNc81gUb5RsQs1A9OC%2FGKJIJujikQsn752X4F1jfw6ywXT2fNQU3d6NBxd1jXbtT8oxwm6koKlrxo%2FmzEs1WS9c3wdmO39juZOrHC71O5VQDCgPMiQ%2Fr6j4eF%2Be7L%2B9QnkBCwC75ErocMRsmdw%2B4hYYJF4yC9wsHaKyMfEqcaDNNv%2BzsztmGPslg8yBFjHvYCC%2B5aIbBd3I28WsllwJNZs%2BMbSXPLPmZpOtqALPcBLBELQaArMt6DCoRuMhGK%2BXN4V6WxTJ9Xz66lgp690TXphLbDe8v1vFBf7nwowdzwcDhRysDBiR8CQJoLHhqgjtPmUk%2BZ%2BMxiHmpeGAXnI79FAWPdbexaMsOX%2FNDQedkn8QMuSHXijuPpVkhGDR8I2tnJizomn4XCVqSeH%2BGBBGGjKTF%2BTDRwPTCBjqkAfJcT1XccWoV0UDWpjrDoyr06vp5%2FfwqxVbyQ%2BwKaeikUl3WxQKNk3wZgMnML8pa5LkjmC1dzYu8ynZCTNeEb3ze7TwK0IvFu55%2BqiIorTn95Gzr%2F6SmkMB4l68mbK1yaGPqe8lnosOfemkcafNQJMTZoNJwFPzbH9ssN0EiHj7Pg63xQCUxrxNWf9E7RLZ8jO9Nn%2FL2g%2FLVgJyj3hl4BTUqECPV&X-Amz-Signature=94e981ded2e73b822d0958946922c68f613d45122daf54fd92d4f1beab80ec64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
