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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUYIKJF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCg1PshZevbYwYrU6Sp0A%2FKRgMG8YDt8i40ThNleSYwLAIhAJDj7kIWelQwdrA43bf%2BtDEgG%2Bnxu9Kzsb%2Bn6sMHos%2BiKv8DCCcQABoMNjM3NDIzMTgzODA1Igx3GQIWtqbXbFQ25rcq3AMFIz9myx1nVGm%2FgZZ7WOOcY2YWv7QaHoxqFCHYvf7PizblVCLduwyEVyCETWhKe1BQ63DLQ3a2EJT30yfYRPhf7W0vNKnTMvzEAy9szBCtSU5UXbJhmCtoByprDJtaPDDVN5TbwhQCAzY3ZVDMs0n3A%2BRuJbqYk3TRFJbyhyJd2gh%2F22obfp0lX6uEWF5ePe%2F%2BRvkkpdBDNevb23rD7TVkk2KL%2BIkljTrHZ%2B5DBxGDahawNzltxC8RgXvTyVLypagPI88lP6YRZEiE%2F%2FKXUufRfCBrFs7eFbKsaFFue1BzBcLRkNMMunfqKOWQnXffpm%2FmvRJ%2BB7RaTu7SqIBM91UFbqMvgafkvkz4Q0PuWdZ2FFkfhrb7tSxQiXSMTvQujf3y3LcvxyrCP6Z%2Bz5s5pOsbFin%2FeZntRId7d%2FrVHzO7lXSjHOZWUvrLI7KmpOUBk9xF7e6qmtPzR1B4WwfVaM7nHWtlGmT%2B9LdyK6asNGIYA%2BQw8r%2FbwLVPnVAoDGuCkgdPzLZmdM9NgfcbfoUIYGBaqDBK5%2B19FoPBpJgtU7SQLHRxtuX1EbCNCrvxDVXsukH83Ka%2BZkg08wSMJbuZljiM9uDBTi1Gzp52VdB3IwaPE1A4U9PDUPBBpthBtzDD1crBBjqkAX50m9AIS9s0t6RpJ62%2Btbx%2B8tOWnxl2zq2k6xSQHCOeCzg%2BHEGlOwQ%2BGha8WrbaHUmb%2FrYswxNVbE2bFm2FWE%2B4IjKtcoVtOf70CMR7Gi3oF7FTdQSh8MpCJ2h%2FJuhIOwfA5ud3I9RmZ%2BRKeKyXxhx0N3GHUnYSaXJCCqL5aV46Je8e%2FxAOXWvudbYElBrjmUmlTVX0Os0WHI266o1p7VjxPlUP&X-Amz-Signature=e0ed48d1e8960c3c4208f2662f7082606bfe074208e7f17720cca86eb5d292f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUYIKJF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCg1PshZevbYwYrU6Sp0A%2FKRgMG8YDt8i40ThNleSYwLAIhAJDj7kIWelQwdrA43bf%2BtDEgG%2Bnxu9Kzsb%2Bn6sMHos%2BiKv8DCCcQABoMNjM3NDIzMTgzODA1Igx3GQIWtqbXbFQ25rcq3AMFIz9myx1nVGm%2FgZZ7WOOcY2YWv7QaHoxqFCHYvf7PizblVCLduwyEVyCETWhKe1BQ63DLQ3a2EJT30yfYRPhf7W0vNKnTMvzEAy9szBCtSU5UXbJhmCtoByprDJtaPDDVN5TbwhQCAzY3ZVDMs0n3A%2BRuJbqYk3TRFJbyhyJd2gh%2F22obfp0lX6uEWF5ePe%2F%2BRvkkpdBDNevb23rD7TVkk2KL%2BIkljTrHZ%2B5DBxGDahawNzltxC8RgXvTyVLypagPI88lP6YRZEiE%2F%2FKXUufRfCBrFs7eFbKsaFFue1BzBcLRkNMMunfqKOWQnXffpm%2FmvRJ%2BB7RaTu7SqIBM91UFbqMvgafkvkz4Q0PuWdZ2FFkfhrb7tSxQiXSMTvQujf3y3LcvxyrCP6Z%2Bz5s5pOsbFin%2FeZntRId7d%2FrVHzO7lXSjHOZWUvrLI7KmpOUBk9xF7e6qmtPzR1B4WwfVaM7nHWtlGmT%2B9LdyK6asNGIYA%2BQw8r%2FbwLVPnVAoDGuCkgdPzLZmdM9NgfcbfoUIYGBaqDBK5%2B19FoPBpJgtU7SQLHRxtuX1EbCNCrvxDVXsukH83Ka%2BZkg08wSMJbuZljiM9uDBTi1Gzp52VdB3IwaPE1A4U9PDUPBBpthBtzDD1crBBjqkAX50m9AIS9s0t6RpJ62%2Btbx%2B8tOWnxl2zq2k6xSQHCOeCzg%2BHEGlOwQ%2BGha8WrbaHUmb%2FrYswxNVbE2bFm2FWE%2B4IjKtcoVtOf70CMR7Gi3oF7FTdQSh8MpCJ2h%2FJuhIOwfA5ud3I9RmZ%2BRKeKyXxhx0N3GHUnYSaXJCCqL5aV46Je8e%2FxAOXWvudbYElBrjmUmlTVX0Os0WHI266o1p7VjxPlUP&X-Amz-Signature=f2363ed677ffab16de03cf4114a19df875627b44af7e4f92ae067bb34eec16c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
