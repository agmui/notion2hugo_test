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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JS4EOB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt1UcyMzR4DyUXr9ktMLOacs%2Fcq8xo40j21zNUxUoH0AiAaYJuL8xSFvO%2BNTpPe%2F1ALzJ3X0YjoIU1Bqb5Uwq1e7CqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAmqhAe1bfVTIIiOeKtwDaJYLslTUo8%2FgDLypjuG6uT8C5j6LyGPAvMv37YdmdCR4eFa23eyoe5o%2FWElRlMnr7KYusxLiOjDa0jO4LOtXqtG54xHjUj563MQhQ3AjdszffW13jsh%2FRE%2FPA5xF1JW5g187UJyO92bybOi2pa6QS0tPEzH3Ljv0%2FO3cLkF%2F7esjEVxRTT4Z%2BE6KE2UZZVmwnRslj63XB8SHoblYACDBHP9O0IAh47XmcXd22g0%2F2F4IgtqUisM4oauWm%2BvMIKMBxjIRR9JbX%2BM%2BbuG0QKuF1PmNvj%2B0OsituBd0n6iYavqySNDFQmtfFp6Z3NLutQz4dbq3s7hQbKOodFGqD6nXRWJJ7IC8%2FNNESjFv3S7oRH6tsgp7XgmKF8IP3Mv%2B8fx3XSeAJjJDuurZvbhfs0zjBi%2BlfjaSeLbZXCDb42vytgle0vUUFZWoAPLOaH8cVvkLBzEyqkgwyJc9jbxLdn0ds3ozJV5NLTD0Sf6p3nRVPFLmxUZCJPEdbGgiNhixIeAnaTssaUS3lYNJ9TJKEbIL8ixCAuvC%2BI137mBqswHsjPFYicSXDOqBAgNQYmWMcrJpO%2FmXjv2m4XDrmuFad9Ox%2BCJU6A9S4zk0NT4AJDonCtVIWmUClFt0cjuKmbIwpqvTvgY6pgGzIbYL5uV6GiIi7iqz3IhBhARU6zDeieA2lvInAZRi3wQTRAaMjWTaU21P04DgOAmZp8Edd2VRPbWbnmG4O9WTZwDG9YJ51ec9Rjs8SLWmGiTPaichWOxKd%2BngJk0TKzlQdmcwGKxKoqE3XfdGqm%2FiAkEJcnArsZ8jdZNiYD2WgRiVHwaqd%2BuXnUWiPE2rhRYbxWNrl9eWuj6WzeA542qLA8bnRsCi&X-Amz-Signature=5a11b8f062d22ec4fd388257c1d98669cc2a9f7d51f34f0712c2cf6f53ec5e86&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JS4EOB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt1UcyMzR4DyUXr9ktMLOacs%2Fcq8xo40j21zNUxUoH0AiAaYJuL8xSFvO%2BNTpPe%2F1ALzJ3X0YjoIU1Bqb5Uwq1e7CqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAmqhAe1bfVTIIiOeKtwDaJYLslTUo8%2FgDLypjuG6uT8C5j6LyGPAvMv37YdmdCR4eFa23eyoe5o%2FWElRlMnr7KYusxLiOjDa0jO4LOtXqtG54xHjUj563MQhQ3AjdszffW13jsh%2FRE%2FPA5xF1JW5g187UJyO92bybOi2pa6QS0tPEzH3Ljv0%2FO3cLkF%2F7esjEVxRTT4Z%2BE6KE2UZZVmwnRslj63XB8SHoblYACDBHP9O0IAh47XmcXd22g0%2F2F4IgtqUisM4oauWm%2BvMIKMBxjIRR9JbX%2BM%2BbuG0QKuF1PmNvj%2B0OsituBd0n6iYavqySNDFQmtfFp6Z3NLutQz4dbq3s7hQbKOodFGqD6nXRWJJ7IC8%2FNNESjFv3S7oRH6tsgp7XgmKF8IP3Mv%2B8fx3XSeAJjJDuurZvbhfs0zjBi%2BlfjaSeLbZXCDb42vytgle0vUUFZWoAPLOaH8cVvkLBzEyqkgwyJc9jbxLdn0ds3ozJV5NLTD0Sf6p3nRVPFLmxUZCJPEdbGgiNhixIeAnaTssaUS3lYNJ9TJKEbIL8ixCAuvC%2BI137mBqswHsjPFYicSXDOqBAgNQYmWMcrJpO%2FmXjv2m4XDrmuFad9Ox%2BCJU6A9S4zk0NT4AJDonCtVIWmUClFt0cjuKmbIwpqvTvgY6pgGzIbYL5uV6GiIi7iqz3IhBhARU6zDeieA2lvInAZRi3wQTRAaMjWTaU21P04DgOAmZp8Edd2VRPbWbnmG4O9WTZwDG9YJ51ec9Rjs8SLWmGiTPaichWOxKd%2BngJk0TKzlQdmcwGKxKoqE3XfdGqm%2FiAkEJcnArsZ8jdZNiYD2WgRiVHwaqd%2BuXnUWiPE2rhRYbxWNrl9eWuj6WzeA542qLA8bnRsCi&X-Amz-Signature=13458457028305d03b185edf0e8a2ce47fd16b83159893720adeaa091322d360&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
