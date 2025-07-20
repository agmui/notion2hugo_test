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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4N25MF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXxwitZa6LcTzzA90PmaVwLNsoq%2BC7XOPF12oT%2B8G3cAiBgkPqIE08tGFkr4gJgFWv9i6oKg9SGYGFrf%2F%2Fc8z0XyyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSwjzdwmLH%2Bz8a8M6KtwDQZYoatwRzvzYW9enIlI36QtoNUgaYrtPGVemn74QsP9IvjTQlj9GjI5eJcSjriXvu6ivMJHhfIzGQr9EsxeU4s8cT49ACsu%2Fy6oHgFXyZAXArTkkv7FE9iPhCDcA57pBileCax7hrD2kQd6Im7SA1BPM0DZQhVibCF1x7N1QJ4W2R5kkRYKJCNNoFAlr0iVRxx0jSLo85QTmTiZR%2FoDeR4%2BVW4z%2BRpC70WsQmOdwzBWoSIxPAOBkVZs5OklgflZRkFeM0i2Kb4DSm0Enwc47iuZrgWg2keJ5VUCaK5XMRTBwmFQXzU3smWlFQ1bC2MN%2BzmnobduJqyU8JKH8irsEBvKSNWPfQQFT16N56TYwKPOLtcVt%2F2H2ghC0GNWECQUz94KI6qj%2B7VzB2AgSHNMQIcu23XAE0USa4F4qN%2B%2BoisDEjlk3vYGA2AaOG38FcXxmzEIpQ9lPfFrzCTIjaG2hSBXHSqlV8CagCLp681WmIIsLa7a094p62AhJ10jvu3Q3mzf0fBgQ7QVUdHjpkyolNvstpkX%2F%2FD2jXguUp%2FPfPdxmCew%2Fa8Rr%2BeTHXSQZl%2BiYHvCrrALIpt5FyPWg3Whh12OON9a%2FZh2AWPWYF60fzKXEX48nZ1ma2SCzwZ0wu7rywwY6pgFqHR7v4U0huQUKYvObOCq4aENKfsXqtRbmTJgcAHoRZ9F%2BTDRT07R8z6pjeuM8nrSNf5hbm1a8qf8o1CJmDXTClznMyGA%2FDD%2Fwx1xSol6B9a6Y%2BgqhD6wbZypBnRXfsKnnT2IiDgC%2BJyV0j2JWG0DNMpsNXdKayxZtuuvw5TFF169S9wnD202rYDXbL%2FFtjhD1iOZKfrD4oQE3RQe1HPnQeP578hXv&X-Amz-Signature=9b597473f78e4650335fd7c58c52c7e2469c814f829fe9439844ffbb9e10eda0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4N25MF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXxwitZa6LcTzzA90PmaVwLNsoq%2BC7XOPF12oT%2B8G3cAiBgkPqIE08tGFkr4gJgFWv9i6oKg9SGYGFrf%2F%2Fc8z0XyyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSwjzdwmLH%2Bz8a8M6KtwDQZYoatwRzvzYW9enIlI36QtoNUgaYrtPGVemn74QsP9IvjTQlj9GjI5eJcSjriXvu6ivMJHhfIzGQr9EsxeU4s8cT49ACsu%2Fy6oHgFXyZAXArTkkv7FE9iPhCDcA57pBileCax7hrD2kQd6Im7SA1BPM0DZQhVibCF1x7N1QJ4W2R5kkRYKJCNNoFAlr0iVRxx0jSLo85QTmTiZR%2FoDeR4%2BVW4z%2BRpC70WsQmOdwzBWoSIxPAOBkVZs5OklgflZRkFeM0i2Kb4DSm0Enwc47iuZrgWg2keJ5VUCaK5XMRTBwmFQXzU3smWlFQ1bC2MN%2BzmnobduJqyU8JKH8irsEBvKSNWPfQQFT16N56TYwKPOLtcVt%2F2H2ghC0GNWECQUz94KI6qj%2B7VzB2AgSHNMQIcu23XAE0USa4F4qN%2B%2BoisDEjlk3vYGA2AaOG38FcXxmzEIpQ9lPfFrzCTIjaG2hSBXHSqlV8CagCLp681WmIIsLa7a094p62AhJ10jvu3Q3mzf0fBgQ7QVUdHjpkyolNvstpkX%2F%2FD2jXguUp%2FPfPdxmCew%2Fa8Rr%2BeTHXSQZl%2BiYHvCrrALIpt5FyPWg3Whh12OON9a%2FZh2AWPWYF60fzKXEX48nZ1ma2SCzwZ0wu7rywwY6pgFqHR7v4U0huQUKYvObOCq4aENKfsXqtRbmTJgcAHoRZ9F%2BTDRT07R8z6pjeuM8nrSNf5hbm1a8qf8o1CJmDXTClznMyGA%2FDD%2Fwx1xSol6B9a6Y%2BgqhD6wbZypBnRXfsKnnT2IiDgC%2BJyV0j2JWG0DNMpsNXdKayxZtuuvw5TFF169S9wnD202rYDXbL%2FFtjhD1iOZKfrD4oQE3RQe1HPnQeP578hXv&X-Amz-Signature=e50ecc266e8816253313c5bca925c0cd7af4e29d188f343bccd11d55690eb99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
