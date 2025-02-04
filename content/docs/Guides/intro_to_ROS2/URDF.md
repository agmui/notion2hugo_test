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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5GU6B3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGJiLXo1tASqLd1GSvqcL16f7HNMOBIFxK8aaJqt8S%2F%2BAiBOHdae8Gt%2Fri8zOh9Sr6NYhXeDQeMz1U%2BiCf3iXC29pir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMUomCQJ92Y%2B%2Bl%2Fja2KtwDzYhis5JKOa9E1LmNIDGSnlsfxBB%2FVKLU2fsqEzAXAh6SNwwUGp8OZekFgRdF2UmbxLE9RbtYiic5DWnfBJ%2BlHoavLbD1rVz6oNs3Wn5nmvfML71bbfiKv1bl1xd7aVwC7nHv8%2By9vJc%2BwSfFzCYz7R8naB14KEJqP71iR2%2BMe1e62aYW%2BrIfj3WNlECe21Wfv5wjEU54Rj%2F4FKVkUj8TOkomr8%2Fcw8HJHsDg4keTWZ1%2B%2B%2Ftd0s8zGdV7wLoqf3Xiivekh64y4E%2Fm7TXGvhvPIpEPuwZmNf6KSH9LwyXaSXscmQu3noM2oUYN1Wlf%2FAlktcvXRpjVJ5WNJXXP0a%2FnoacRrcGa3ZRDo4W8iNgGHhoAKJ3pe%2FFw5%2B7foYt7%2FMqfZZgXkcN%2BVxC76TJ%2FBeS8ffUPnKuU0eaSnqZ6l63S1LdPzEHUzZN7c7Fb7dw1oCEug2rmmNSj3JDI981TzJG6BiANwEXQI0p45l0sriZFgaPvhThPyc0cIwSgpxUCVabp0ljCg5mcPAOHrMfq7J2upDcszlIx0Ld2209LFJMUY%2BSQHnPaNhyJu1wCN5eidFkIB0dIQC%2BkJVYWeqXXWmCmwBIyyFlE%2B2rkgtWqqih1N6KKS0vj1csIPiDAP7cw5aKGvQY6pgHo1vQrdY2Q9X97kFyiaKvr5t6HbcSHnZll2hPGIxYQ%2F04DkgkoBdKmXz8a1LhdqjX9z8Vn0YqPrp4aclPYo4DCe%2BKHVVogaimeiPioWSBMF9lkH9lYPMTZShRQ9o266BLWDhms81Zlc1luPBhk9q7e3pccvd9xiHCNd9%2F1RJrWXiGYYgq7w8YzHXiQnvF2GhICECaKr%2FYdHV9W%2BucHY8ccZ%2FFux0eb&X-Amz-Signature=6dd240594eb68d0c0166b2e7ea8a22daa5fa3798652e877eafaec024566b0a75&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5GU6B3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGJiLXo1tASqLd1GSvqcL16f7HNMOBIFxK8aaJqt8S%2F%2BAiBOHdae8Gt%2Fri8zOh9Sr6NYhXeDQeMz1U%2BiCf3iXC29pir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMUomCQJ92Y%2B%2Bl%2Fja2KtwDzYhis5JKOa9E1LmNIDGSnlsfxBB%2FVKLU2fsqEzAXAh6SNwwUGp8OZekFgRdF2UmbxLE9RbtYiic5DWnfBJ%2BlHoavLbD1rVz6oNs3Wn5nmvfML71bbfiKv1bl1xd7aVwC7nHv8%2By9vJc%2BwSfFzCYz7R8naB14KEJqP71iR2%2BMe1e62aYW%2BrIfj3WNlECe21Wfv5wjEU54Rj%2F4FKVkUj8TOkomr8%2Fcw8HJHsDg4keTWZ1%2B%2B%2Ftd0s8zGdV7wLoqf3Xiivekh64y4E%2Fm7TXGvhvPIpEPuwZmNf6KSH9LwyXaSXscmQu3noM2oUYN1Wlf%2FAlktcvXRpjVJ5WNJXXP0a%2FnoacRrcGa3ZRDo4W8iNgGHhoAKJ3pe%2FFw5%2B7foYt7%2FMqfZZgXkcN%2BVxC76TJ%2FBeS8ffUPnKuU0eaSnqZ6l63S1LdPzEHUzZN7c7Fb7dw1oCEug2rmmNSj3JDI981TzJG6BiANwEXQI0p45l0sriZFgaPvhThPyc0cIwSgpxUCVabp0ljCg5mcPAOHrMfq7J2upDcszlIx0Ld2209LFJMUY%2BSQHnPaNhyJu1wCN5eidFkIB0dIQC%2BkJVYWeqXXWmCmwBIyyFlE%2B2rkgtWqqih1N6KKS0vj1csIPiDAP7cw5aKGvQY6pgHo1vQrdY2Q9X97kFyiaKvr5t6HbcSHnZll2hPGIxYQ%2F04DkgkoBdKmXz8a1LhdqjX9z8Vn0YqPrp4aclPYo4DCe%2BKHVVogaimeiPioWSBMF9lkH9lYPMTZShRQ9o266BLWDhms81Zlc1luPBhk9q7e3pccvd9xiHCNd9%2F1RJrWXiGYYgq7w8YzHXiQnvF2GhICECaKr%2FYdHV9W%2BucHY8ccZ%2FFux0eb&X-Amz-Signature=8fcd6b1608887556ffa9e63276bbf24847306ff863619b0506a150c0ae11943c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
