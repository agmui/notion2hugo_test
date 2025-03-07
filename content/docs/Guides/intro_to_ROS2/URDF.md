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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666UE4PT3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdKpdfenDcHAcURjpJIFrQGer4xivnmrvC9jVDn%2FQ7GwIhAKZodPlXP3i3syWnGN70euNiD8uoqyDtj21uugnL3JuoKv8DCD0QABoMNjM3NDIzMTgzODA1IgxBCUxzc3zIHWA%2FxLEq3AO4j1OTUMnFmLogzsaJVUE9wM6aA25VpdMRn5W6IsZw8wI7Q7uAMnNbIkpWxHoGlAaQV%2Bfn%2BHFTqZRKC1R4WCOJn08dOiYaQZfCsSCxAgXe7rPjGfI5xjsbAYaFYzNFi0xqTxzqdWj%2Buz%2FKiOh%2Fl62jgJ0x%2F8S%2F0U1v%2FYgNY%2BOZ0vNFH2CpJaO0Z%2BYyDFFfbdNJXr4yi%2B0RChmGoosjeyl5FO7Mbxt0tSBD4q8zxs8Az7mVgdi5o62BWs9nzt8xnXac5bWCYJF94SG00dgQxVvfJN2F2nQnh7byNzRK7CwO8y3T9hTpP%2FJQFZaO1m6fb5Aw8Iteq3CxqH3nOQpFNtvX880do5ejmqp2TekLrQ3Fk488aw%2F3Rf6TnLpZS%2ByldFpbt7mnyDUxWFb79X6m37nC%2BbYKsMColSeKIspKxbl9vUhAJTtSBKK65RpwO8l%2BflKRz7Y8yPS9Es8UU2OuW7uE7iIIcgKOA0OsJ7aV8WJNQFa6hbIegdGxIXT3N9qvgssoOA9aZ6gkZ1saKJT4XRspYUlppLuSV%2BvZUhb7wdd88haT0%2FAb1CTVIANWSUAdjy5RrQuxJjaUTPDZT2rkT99klcoYe6GHaRpDE3axMczywTssV4m%2BgGTG91INADCa56m%2BBjqkATFnEYjIs8zEGoMocLuDmxEhlzIQgkSUEjtriloPQ3aH7cVOMz3pxeEocJGGv9dVpi%2BC%2F6LRbk%2BNy4fX10pwnFVYd6vUPIAQVb05SZAcN6UsqoF%2FJ6VwMGb9hWMkUm3HqERX2rQc439X9t7d3iSLlAguAoj74RPBH9ka8SesqvNRgQhoynHkOcoTYzW0vNlB%2BzCymL4f5I6r22cicWcmjExw4zz6&X-Amz-Signature=694771f11bb6e7ab6d7c5a1437011a398e10352be1dd2ea1c54b1beed492330b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666UE4PT3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdKpdfenDcHAcURjpJIFrQGer4xivnmrvC9jVDn%2FQ7GwIhAKZodPlXP3i3syWnGN70euNiD8uoqyDtj21uugnL3JuoKv8DCD0QABoMNjM3NDIzMTgzODA1IgxBCUxzc3zIHWA%2FxLEq3AO4j1OTUMnFmLogzsaJVUE9wM6aA25VpdMRn5W6IsZw8wI7Q7uAMnNbIkpWxHoGlAaQV%2Bfn%2BHFTqZRKC1R4WCOJn08dOiYaQZfCsSCxAgXe7rPjGfI5xjsbAYaFYzNFi0xqTxzqdWj%2Buz%2FKiOh%2Fl62jgJ0x%2F8S%2F0U1v%2FYgNY%2BOZ0vNFH2CpJaO0Z%2BYyDFFfbdNJXr4yi%2B0RChmGoosjeyl5FO7Mbxt0tSBD4q8zxs8Az7mVgdi5o62BWs9nzt8xnXac5bWCYJF94SG00dgQxVvfJN2F2nQnh7byNzRK7CwO8y3T9hTpP%2FJQFZaO1m6fb5Aw8Iteq3CxqH3nOQpFNtvX880do5ejmqp2TekLrQ3Fk488aw%2F3Rf6TnLpZS%2ByldFpbt7mnyDUxWFb79X6m37nC%2BbYKsMColSeKIspKxbl9vUhAJTtSBKK65RpwO8l%2BflKRz7Y8yPS9Es8UU2OuW7uE7iIIcgKOA0OsJ7aV8WJNQFa6hbIegdGxIXT3N9qvgssoOA9aZ6gkZ1saKJT4XRspYUlppLuSV%2BvZUhb7wdd88haT0%2FAb1CTVIANWSUAdjy5RrQuxJjaUTPDZT2rkT99klcoYe6GHaRpDE3axMczywTssV4m%2BgGTG91INADCa56m%2BBjqkATFnEYjIs8zEGoMocLuDmxEhlzIQgkSUEjtriloPQ3aH7cVOMz3pxeEocJGGv9dVpi%2BC%2F6LRbk%2BNy4fX10pwnFVYd6vUPIAQVb05SZAcN6UsqoF%2FJ6VwMGb9hWMkUm3HqERX2rQc439X9t7d3iSLlAguAoj74RPBH9ka8SesqvNRgQhoynHkOcoTYzW0vNlB%2BzCymL4f5I6r22cicWcmjExw4zz6&X-Amz-Signature=cd3e3cf3a7148549da19c0fb53168c1dba26f26b49f9e00acc5826bd57ec0868&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
