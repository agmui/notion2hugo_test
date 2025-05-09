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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEM3WJC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN2ZgCWq3VNBwwm7B%2BE7dqRgvMe6Ok%2BgV6L9MoYYSFeAiEAqurtCXjvInnx9JCQl4QI3CJFn6BKhE%2B58MoMzTWwebMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkiusc1VTXUJ6AaPircA50V4RvwXG5mpH2WfR36LgOSnBhgvVjNIwXt152GGj9x8dp81fzVhXXbvF4icMygGkGC5lluyBft%2Fu2chvs2Nqv4QZRlVKkkFQyFN3E%2BRiNMJqV%2FC%2FPyYias8nuU78o4uBx0ZjOfqDNVM9VGLeYJzsqvHp62AymWVGtriI2PonOz%2Bc0gLu%2FJC120iCtPanztwEdG28q6IRC7qdqGaUwLbYb48zkHLcdoeqmyuAaz18JNR8LW4%2Bz5TyVlDSipV7a6XZ59xfBnq%2B27snFsqU0SSBwWNNpam6zwoU78YNotEyDLqaaZoDOnCzcNxBdNu5RTj5YxfthZcacJvOwr2GTKT9rZS6ORxLbRNLwYKFcPmYR482m6hpmsPD4kzJyzDXThtEfnQ7r9QV4d4afBU%2FzP7YambrGRvpPWZdSi9tyfVoCa3byJoBScQfzHgGz1V10cWCFRaaFcx61rXROCBJXDO7%2B1UwPOVlzs%2BVh8MJ0Jse2u6K6t6tNPxnBQsVphkudkeCP3Eaq7AX5b9v5FSpRrq9FwOm%2BsQXTPBJsGEnExwhuWbFvX9bPL%2ByhDVP2yIbTA3Ajwqpeq2bEBuQYlphGOCx3llFQVxKHL5%2FwPxbSkZ7TJjHQjlDRXAlPXmNLjMMKv9sAGOqUBXritC8r5eFeu%2BEC%2F%2FEoM3DrsgzuHFMlP9M0%2FQki4tsvXUL9W0hr1aoLvPwevUYWGZH5LwjtyGv47ragIqnDP%2FAhUFdT6CKkTzvF1r2bf8y4uU4G%2FMtpkOGaJUU5IvT0wrce6alyEZUw5mudYxei35uf6M39Z5rG8Om%2B51QGKOxhoM5iOwHbghFe6HpNWlaY4mLIzjowe2BoQXq7T6qKbUBQ1iWdL&X-Amz-Signature=4f9e73983e39b560583e760672dc23beb192eab6a0cacb49df6f40be89bd5d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEM3WJC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICN2ZgCWq3VNBwwm7B%2BE7dqRgvMe6Ok%2BgV6L9MoYYSFeAiEAqurtCXjvInnx9JCQl4QI3CJFn6BKhE%2B58MoMzTWwebMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkiusc1VTXUJ6AaPircA50V4RvwXG5mpH2WfR36LgOSnBhgvVjNIwXt152GGj9x8dp81fzVhXXbvF4icMygGkGC5lluyBft%2Fu2chvs2Nqv4QZRlVKkkFQyFN3E%2BRiNMJqV%2FC%2FPyYias8nuU78o4uBx0ZjOfqDNVM9VGLeYJzsqvHp62AymWVGtriI2PonOz%2Bc0gLu%2FJC120iCtPanztwEdG28q6IRC7qdqGaUwLbYb48zkHLcdoeqmyuAaz18JNR8LW4%2Bz5TyVlDSipV7a6XZ59xfBnq%2B27snFsqU0SSBwWNNpam6zwoU78YNotEyDLqaaZoDOnCzcNxBdNu5RTj5YxfthZcacJvOwr2GTKT9rZS6ORxLbRNLwYKFcPmYR482m6hpmsPD4kzJyzDXThtEfnQ7r9QV4d4afBU%2FzP7YambrGRvpPWZdSi9tyfVoCa3byJoBScQfzHgGz1V10cWCFRaaFcx61rXROCBJXDO7%2B1UwPOVlzs%2BVh8MJ0Jse2u6K6t6tNPxnBQsVphkudkeCP3Eaq7AX5b9v5FSpRrq9FwOm%2BsQXTPBJsGEnExwhuWbFvX9bPL%2ByhDVP2yIbTA3Ajwqpeq2bEBuQYlphGOCx3llFQVxKHL5%2FwPxbSkZ7TJjHQjlDRXAlPXmNLjMMKv9sAGOqUBXritC8r5eFeu%2BEC%2F%2FEoM3DrsgzuHFMlP9M0%2FQki4tsvXUL9W0hr1aoLvPwevUYWGZH5LwjtyGv47ragIqnDP%2FAhUFdT6CKkTzvF1r2bf8y4uU4G%2FMtpkOGaJUU5IvT0wrce6alyEZUw5mudYxei35uf6M39Z5rG8Om%2B51QGKOxhoM5iOwHbghFe6HpNWlaY4mLIzjowe2BoQXq7T6qKbUBQ1iWdL&X-Amz-Signature=bd75e0410a619a4150b9d8dd1c729018b836511cfc1aeb98df2a1081e606c727&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
