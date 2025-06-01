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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7CRUBK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIANkUlYIu7TiWwsXtPubDWYscYqDJb8w7e6GcmHf8sYeAiEAq%2BjE1MSdMwVi%2Fz7BZAq%2FWy7gr98oDp4kH03lQOgyn14qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfyk%2FaMysujtH225yrcA9IO0Q%2FgYZOT22CfS43BFa9z9ajEZgQA6qaH1ZSrpXxfTIU8hINUhD%2F%2FD5hlnSLgge%2BroIiGCqZ4y68IU1nFgDE6sQRLYZLTgKDWyROojdlF7ntSXEyMrZ9AXL45vN08gGw4ATUTcGPxB0HIBRm4%2FOf1rm7Go9unMY7pIdaM8AjROf03fBpjYaKkR5rToniYGKpq6B8Z24NjHoDdnfqTi2zJ%2F30B14FhLrAtA3KrHhF0ZYAHQE11LjGjlgLlzMXEUqxXyUW5917uLIbmU48LY9RU5OBah%2FR2WrLp67aWmXXOx1FezZE7TkTn6c%2BKaQUMjy%2F0%2FEQ%2BPfuTcPcqWv2JweXXlC6SCK%2BxjfrCSgE78Uv8aOYKi3FSBssEdt0S4FaArviR4JtZWv5tS%2B1zYt99TGRy%2F5sMzHz9ym%2Bd5StIR2%2FtPsiH%2Fg5cAw6bqshtexgNnJMUzprk5QDZ0tmWOVFN3ks92oTKgLvluciJargLmWXaztWh%2F%2BUsnG4tEW5lu8qBDxs8xKNQvWfSF1ADil6SVBejQjhZaU6Ny3he32rIN7AGbzUxCCbTC1NG38c%2BTQLtH4OgsG2CIPRmT1yYfqsbeUcP9CmKiHvKnen3lZqFRuPFfCka%2F%2BpXc%2B2lqyRoMLDe8MEGOqUBmgSrqIXlJoXZWON4WoT58bSCxKb8UJmWvzSf%2FhYbRxh%2Ftpg6B%2BlJhOZY9gK8YiBKJoIfm4d6NtnONj6YMcr2N%2B%2B698%2BG8YhxtqDWdaICcQFHGehKvpDFKXdmHDQbRPm1ST6OG6gDoqh0R719YBs5%2FgdzkLGPW48GTdkCjqDHB%2F7tnMtfI9LeQgOif8crjL%2BSYS8eTgaXXIlCm%2FfRlDgRj4mJ3hmE&X-Amz-Signature=6abb08488e5cfce7d2c9703c53822c7f28c805cec9ac4dbfb1a07a27c5e36f95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV7CRUBK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIANkUlYIu7TiWwsXtPubDWYscYqDJb8w7e6GcmHf8sYeAiEAq%2BjE1MSdMwVi%2Fz7BZAq%2FWy7gr98oDp4kH03lQOgyn14qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfyk%2FaMysujtH225yrcA9IO0Q%2FgYZOT22CfS43BFa9z9ajEZgQA6qaH1ZSrpXxfTIU8hINUhD%2F%2FD5hlnSLgge%2BroIiGCqZ4y68IU1nFgDE6sQRLYZLTgKDWyROojdlF7ntSXEyMrZ9AXL45vN08gGw4ATUTcGPxB0HIBRm4%2FOf1rm7Go9unMY7pIdaM8AjROf03fBpjYaKkR5rToniYGKpq6B8Z24NjHoDdnfqTi2zJ%2F30B14FhLrAtA3KrHhF0ZYAHQE11LjGjlgLlzMXEUqxXyUW5917uLIbmU48LY9RU5OBah%2FR2WrLp67aWmXXOx1FezZE7TkTn6c%2BKaQUMjy%2F0%2FEQ%2BPfuTcPcqWv2JweXXlC6SCK%2BxjfrCSgE78Uv8aOYKi3FSBssEdt0S4FaArviR4JtZWv5tS%2B1zYt99TGRy%2F5sMzHz9ym%2Bd5StIR2%2FtPsiH%2Fg5cAw6bqshtexgNnJMUzprk5QDZ0tmWOVFN3ks92oTKgLvluciJargLmWXaztWh%2F%2BUsnG4tEW5lu8qBDxs8xKNQvWfSF1ADil6SVBejQjhZaU6Ny3he32rIN7AGbzUxCCbTC1NG38c%2BTQLtH4OgsG2CIPRmT1yYfqsbeUcP9CmKiHvKnen3lZqFRuPFfCka%2F%2BpXc%2B2lqyRoMLDe8MEGOqUBmgSrqIXlJoXZWON4WoT58bSCxKb8UJmWvzSf%2FhYbRxh%2Ftpg6B%2BlJhOZY9gK8YiBKJoIfm4d6NtnONj6YMcr2N%2B%2B698%2BG8YhxtqDWdaICcQFHGehKvpDFKXdmHDQbRPm1ST6OG6gDoqh0R719YBs5%2FgdzkLGPW48GTdkCjqDHB%2F7tnMtfI9LeQgOif8crjL%2BSYS8eTgaXXIlCm%2FfRlDgRj4mJ3hmE&X-Amz-Signature=fea67172c7a55af0d8953bb514d51bb61f6c986013fda0a26e88f9367a903617&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
