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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNM7OJF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHiD4Xma6WpmS%2FMiH3Dj%2BhqFQbd15G9T2YSJVQPWEwWmAiEA0Yf0A6HtIXBC9t4LD1zhi7HLuvwdRXf7cxiCyePnHCUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdVInqksi9%2FQmznuCrcAyLeL8XpjZn%2B1PiJCXq6La2C%2BXMT8SynpVXnTR1kfs9aJYG%2BtvWePybGZWTKk3HuKoMD%2BJRQ0VqIXEpJfwOk3NNIjVU0ehueeYcDdJZviQDDU1fQ1NpiFDMWWszVl9vfcJoSjhSE5pLL3JM5fRX9A07ju4KH%2F39NEi8ejxK5qH%2FL6O5nmbc2cxFEBGf2phOwhiAnrwqBkE7hs2EB7aqRjy7UvJdXehLGaKYWw2SbliHJFPsvOKt4sLCTDzpOiQJSi4Pprau1dODMLqB5YJb10pPzBe1mAz2WOXwJDUazfuKW5%2BnvzEZEH04JMjD5%2BhMVoYhczFRv8TVU%2BThATubnX8mC6oWTRqMd2LLbhkUQjOKXb2o9htZUSbXcP%2F3VGQQRXDtq6bkQpffLwnC0iBTCR0JaGqmOA88mBdEU8tp58SaaUGkRjp%2FALcT2QhuRbNJ1hji5AZXXnxlOS4R7BxnmQkefLJjRXTY8wypOjjyIkkApUWRQ%2BQWi80BeJkOPyKdyDWeCUzyHGYcfUI6MhlvAwmdmAPo1czap4HO3nn0rqoHJir8Dv76LAv4o6bTZWDvXCfDP0z0X3gT1V7JHzBBWq31hEzdLkO1e2tFULIo0WN9lb6IaXh6yApIhqrd2MPfKwL4GOqUBjgABmwMA8TK%2Bq79K7nM2Cnx3ZG43Y9xw7uR9RjwAa8VOH3KNO5rEzAbDPsJbKQc2j%2FsovZZrTlp9fVO%2Bf0wWp1lVPpjPphCHcg4ACrZYjsb439Gy3psPCkudej%2BQX8RAm3Wjsb2K%2FHkzcDp%2BiXhtpNGu%2FP05hRgk%2F8wjeSgdq0xUXWViTsG7zVt6%2B7fzK8ThmC%2FdZzOttl4D0yt9XUA9INtCapSR&X-Amz-Signature=9e631c187babb3991549fc4a6c116c4faf5cc807f76253cd88c94a31008324c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNM7OJF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHiD4Xma6WpmS%2FMiH3Dj%2BhqFQbd15G9T2YSJVQPWEwWmAiEA0Yf0A6HtIXBC9t4LD1zhi7HLuvwdRXf7cxiCyePnHCUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdVInqksi9%2FQmznuCrcAyLeL8XpjZn%2B1PiJCXq6La2C%2BXMT8SynpVXnTR1kfs9aJYG%2BtvWePybGZWTKk3HuKoMD%2BJRQ0VqIXEpJfwOk3NNIjVU0ehueeYcDdJZviQDDU1fQ1NpiFDMWWszVl9vfcJoSjhSE5pLL3JM5fRX9A07ju4KH%2F39NEi8ejxK5qH%2FL6O5nmbc2cxFEBGf2phOwhiAnrwqBkE7hs2EB7aqRjy7UvJdXehLGaKYWw2SbliHJFPsvOKt4sLCTDzpOiQJSi4Pprau1dODMLqB5YJb10pPzBe1mAz2WOXwJDUazfuKW5%2BnvzEZEH04JMjD5%2BhMVoYhczFRv8TVU%2BThATubnX8mC6oWTRqMd2LLbhkUQjOKXb2o9htZUSbXcP%2F3VGQQRXDtq6bkQpffLwnC0iBTCR0JaGqmOA88mBdEU8tp58SaaUGkRjp%2FALcT2QhuRbNJ1hji5AZXXnxlOS4R7BxnmQkefLJjRXTY8wypOjjyIkkApUWRQ%2BQWi80BeJkOPyKdyDWeCUzyHGYcfUI6MhlvAwmdmAPo1czap4HO3nn0rqoHJir8Dv76LAv4o6bTZWDvXCfDP0z0X3gT1V7JHzBBWq31hEzdLkO1e2tFULIo0WN9lb6IaXh6yApIhqrd2MPfKwL4GOqUBjgABmwMA8TK%2Bq79K7nM2Cnx3ZG43Y9xw7uR9RjwAa8VOH3KNO5rEzAbDPsJbKQc2j%2FsovZZrTlp9fVO%2Bf0wWp1lVPpjPphCHcg4ACrZYjsb439Gy3psPCkudej%2BQX8RAm3Wjsb2K%2FHkzcDp%2BiXhtpNGu%2FP05hRgk%2F8wjeSgdq0xUXWViTsG7zVt6%2B7fzK8ThmC%2FdZzOttl4D0yt9XUA9INtCapSR&X-Amz-Signature=06bd5afcde173959e51f10fca174d7a99ec37466db7fbc6f21a728c1bfc7e69a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
