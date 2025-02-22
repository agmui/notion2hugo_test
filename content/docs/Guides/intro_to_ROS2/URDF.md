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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJ724OS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgaFfB%2BmnuWPByJIgFsfT6RtZB80ErgbGEoR7%2F%2F16jTAIhAP57RHOrknl3cDEvDJ%2F1v9HKAMch06G2o1pMmA%2FCx1TBKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoD8MthVLQqQbCpK0q3ANr3xUdhZWYY8SZs9dER28sNVMcMn%2BUfDKAfNI6UqGNR69edBUwYGWm8pi3WKTS5C3a%2Fy%2BB5T70ccw4JjdOprSVGOjJM6RpjURViwK7NAGsuXHqfJxFrt4jQBAo1d03n1IhfgRG%2BPy9TTXqZpPr5dVS5XljkAha3u7RbwyS3qyFluDXbAoZZvZgOXMHmRZub0KMrLjb9ONxwQoN0iX9kRsBvInxJiFvZWQfYPLXnVaWpfHh4eOSay7obPXa%2Btjx8t4y3QySd4lVr%2B9U9OWcGvHUhP%2FqDuzReEqogk1pR4bH%2B%2BtFOjDWdNiW%2Bf%2B9EAGGaQmNOHGhehxzHJ18b%2BkcUj6ekqhB5YTz%2F%2FT2uYVtv4JuD%2F3NbqxQ0oMAh%2Bhp%2BMgxg8y8vVQhLcqsmwLo%2FAVJ2ldJp8JN56MiINEik%2BykKl%2BWf8A7j1xopui8GVL8nISt9c7%2BqoYKVX9CBecLGitPk8h%2FpII4v0c73MQr%2Fzwqt5BACab8tV6DXP3lr%2FV5Hh00Ghvsc414kz6ufFy7wnpnY5Bu%2BBUGbSw%2BbXibfmDq7tYAQCWfknEq9H%2BURkb1skqNBr%2B4mNjc4QWUbfZRNt9nIfb0sqlloFfwMEJf6BW6EyD8PDnUWdrfwOt5ohpHFDCRx%2BW9BjqkAaGNKcNBtbKYvHkIdXsn6FK%2BGmL%2B0z4bJ3WaJl0CLLt%2FqUjCOVh1m4DA0ZokDUkS5jndExG2cK0BLqdtufRcPumTGrACeEg89O9xxw3HraWtQKo9KqEa7kJ5ONfqKsE73dnqACis42CnjxS8lbuHIEnVQSckfAqwlcXmdjkhJ8odScFYnLoWS3S%2BEV5TXWIiBrwghU62WVdPTNTbnhQPyQjjPjTu&X-Amz-Signature=5752cb9cf95fbf205f66cbe69446628b4200122b58cd957df28707ec780c32d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJ724OS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgaFfB%2BmnuWPByJIgFsfT6RtZB80ErgbGEoR7%2F%2F16jTAIhAP57RHOrknl3cDEvDJ%2F1v9HKAMch06G2o1pMmA%2FCx1TBKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoD8MthVLQqQbCpK0q3ANr3xUdhZWYY8SZs9dER28sNVMcMn%2BUfDKAfNI6UqGNR69edBUwYGWm8pi3WKTS5C3a%2Fy%2BB5T70ccw4JjdOprSVGOjJM6RpjURViwK7NAGsuXHqfJxFrt4jQBAo1d03n1IhfgRG%2BPy9TTXqZpPr5dVS5XljkAha3u7RbwyS3qyFluDXbAoZZvZgOXMHmRZub0KMrLjb9ONxwQoN0iX9kRsBvInxJiFvZWQfYPLXnVaWpfHh4eOSay7obPXa%2Btjx8t4y3QySd4lVr%2B9U9OWcGvHUhP%2FqDuzReEqogk1pR4bH%2B%2BtFOjDWdNiW%2Bf%2B9EAGGaQmNOHGhehxzHJ18b%2BkcUj6ekqhB5YTz%2F%2FT2uYVtv4JuD%2F3NbqxQ0oMAh%2Bhp%2BMgxg8y8vVQhLcqsmwLo%2FAVJ2ldJp8JN56MiINEik%2BykKl%2BWf8A7j1xopui8GVL8nISt9c7%2BqoYKVX9CBecLGitPk8h%2FpII4v0c73MQr%2Fzwqt5BACab8tV6DXP3lr%2FV5Hh00Ghvsc414kz6ufFy7wnpnY5Bu%2BBUGbSw%2BbXibfmDq7tYAQCWfknEq9H%2BURkb1skqNBr%2B4mNjc4QWUbfZRNt9nIfb0sqlloFfwMEJf6BW6EyD8PDnUWdrfwOt5ohpHFDCRx%2BW9BjqkAaGNKcNBtbKYvHkIdXsn6FK%2BGmL%2B0z4bJ3WaJl0CLLt%2FqUjCOVh1m4DA0ZokDUkS5jndExG2cK0BLqdtufRcPumTGrACeEg89O9xxw3HraWtQKo9KqEa7kJ5ONfqKsE73dnqACis42CnjxS8lbuHIEnVQSckfAqwlcXmdjkhJ8odScFYnLoWS3S%2BEV5TXWIiBrwghU62WVdPTNTbnhQPyQjjPjTu&X-Amz-Signature=1f766c706ba9d9aefaa54487f1d8d084e03a20e206caeeea2773ab52784a0e21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
