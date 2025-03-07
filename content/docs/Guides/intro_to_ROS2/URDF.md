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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKCFVJFN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBabYicxwBCzZNuewXmheB1Um66BBzbp1P5x1%2B77%2F5QpAiEAvXuflNHqyo01mPTZQdgutvX80%2B%2FF9IqX0DinI3V3iEcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJBTOEezjvBKUw7imCrcA14dZx7ONge7MIohMKHDY%2Bl6GerXmSFEfZAIQoOGlt2AOAXNUSp8xpz4eQuRa6DWc5co29S2j2YKObj6sKZQGPPhYIiIpVTmlhvRIzAntIvve1K46tNm9pze%2Fb6fuJLpLq%2FKqqcpk4lNh7uz7paiKpZqksOcaDT9pmpmSay3Nt7qGWxfPojOfJ9zvGPtHV8A2EhWOiLZ2i0fiQI0FxoBXtML%2Bkz1n1GQIG1Hq47guTfNuLFf%2BckKBhF2S2mp%2F3yyx6fyk56%2FSQhCE7hqMJ%2BWOcgPIGE3PSvfpOCbLS1TfhvfWuLK5ZgAPcdcbRB2xuUhZSAnzlgQc0d6eG8EgXo7%2FI5rwzkAqpGVzvL7B9ruk9Dq9vRwC6DJwZK0hC6ug31gt5whnR1MWdXbLOGXE4POQmdVe10RH%2Ba1qqQzd%2BZF6pcOVb%2BX9vnBQcb9Q%2BS%2BygK5IDRu2kTk1P49qSLckXnIExhO%2FFmcAlw%2FUT7KjsUpyc%2BtpQk1LK%2BqSYT04KfsZbhe%2F75V9sCewDILkjiI%2FpY%2F0Ked4ArbIf7wo6H5HmQkSuU%2FDeJNkqFjkpK5u02CSdYtekL9c5UAaHzot3C3kXnDD1wWtd8ewWOh9yXaZTz3IQWYbRDnTM9i6NlK0n%2BrMPPJqL4GOqUBuW69XOSTs8NkAqvW9vcJq9kOYXMYBJmlw%2FaxI%2FO4FKgzeZs117V14x7PqyLR5KO3Tm4zZaiv7zef8y5CznbdL6j%2FsLbigHpWkwz3NgwB88tLYxhL6y13qvLgoubvtRnYCzoNZvlmCwX8a1oDGSl%2FclRDeO%2BM8rPpciMfXXq0oYQWmnOL5pROIs0iM%2FQ9PPxeQ4x6dL3rpSkDD0gT7%2BIH%2Fpdm0oct&X-Amz-Signature=def871aaf617ce226d4600ec4516dcb838bbc6da15f0baa76e9a00af50df42fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKCFVJFN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBabYicxwBCzZNuewXmheB1Um66BBzbp1P5x1%2B77%2F5QpAiEAvXuflNHqyo01mPTZQdgutvX80%2B%2FF9IqX0DinI3V3iEcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJBTOEezjvBKUw7imCrcA14dZx7ONge7MIohMKHDY%2Bl6GerXmSFEfZAIQoOGlt2AOAXNUSp8xpz4eQuRa6DWc5co29S2j2YKObj6sKZQGPPhYIiIpVTmlhvRIzAntIvve1K46tNm9pze%2Fb6fuJLpLq%2FKqqcpk4lNh7uz7paiKpZqksOcaDT9pmpmSay3Nt7qGWxfPojOfJ9zvGPtHV8A2EhWOiLZ2i0fiQI0FxoBXtML%2Bkz1n1GQIG1Hq47guTfNuLFf%2BckKBhF2S2mp%2F3yyx6fyk56%2FSQhCE7hqMJ%2BWOcgPIGE3PSvfpOCbLS1TfhvfWuLK5ZgAPcdcbRB2xuUhZSAnzlgQc0d6eG8EgXo7%2FI5rwzkAqpGVzvL7B9ruk9Dq9vRwC6DJwZK0hC6ug31gt5whnR1MWdXbLOGXE4POQmdVe10RH%2Ba1qqQzd%2BZF6pcOVb%2BX9vnBQcb9Q%2BS%2BygK5IDRu2kTk1P49qSLckXnIExhO%2FFmcAlw%2FUT7KjsUpyc%2BtpQk1LK%2BqSYT04KfsZbhe%2F75V9sCewDILkjiI%2FpY%2F0Ked4ArbIf7wo6H5HmQkSuU%2FDeJNkqFjkpK5u02CSdYtekL9c5UAaHzot3C3kXnDD1wWtd8ewWOh9yXaZTz3IQWYbRDnTM9i6NlK0n%2BrMPPJqL4GOqUBuW69XOSTs8NkAqvW9vcJq9kOYXMYBJmlw%2FaxI%2FO4FKgzeZs117V14x7PqyLR5KO3Tm4zZaiv7zef8y5CznbdL6j%2FsLbigHpWkwz3NgwB88tLYxhL6y13qvLgoubvtRnYCzoNZvlmCwX8a1oDGSl%2FclRDeO%2BM8rPpciMfXXq0oYQWmnOL5pROIs0iM%2FQ9PPxeQ4x6dL3rpSkDD0gT7%2BIH%2Fpdm0oct&X-Amz-Signature=7faea62f984acdcca74fa657b650b725c9e7dca58057b84ef63d421f14be1c50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
