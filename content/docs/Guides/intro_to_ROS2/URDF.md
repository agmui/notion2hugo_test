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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZNTO7E%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIEDlDUmLrYFKlvz%2FjGJLetYqNJF6ZJhjv0p2W6ZdM6P3AiBJ19n1sFrb2tkGj9tWsJeWQ%2F2qEoz6BPGbYMj6z8U8BiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi6xK1O9uiwMwpYZKKtwDq%2BvbG0%2FhgpUXjZC5m6q2ljYuxsbmSCLQiu8VbqcO%2BOPzQPRaGSja4jHFqoNo6CYIoShFoKuUzvW1lovOfeqFTGqO7Wm95aIfnZdmiRJRtFdkQLCFzoecpGsVFhgN9d903ypAN2ZmGp9HYibg1TR0dK2vjTCVGGmJOAR6G%2BgFdXm8K6m%2FKxz2Y1%2BAm9bsYUQQA8Fpn5bknfj2p%2Bkd2bPM09dv%2FNxgF2efzqI7AvzaW4F1qUQaQ04QIvLmdFr33x3h9EPUJD1gHhZPXcRxhsn%2FuQeEG2L0gqzTV0UOfRd860OCGaJqt0ixqqLAVlrlAWasIhDswCc4mD7HCwO8lov6i2U%2FuBYge0YcnxlQwANV%2BETrCzsuLPa6U%2BL9VrDRWHbSNvImWEFPIPAis8fF25zCBbp5%2BhldNyDLvMXahj5uU7CrtJGblyd9kmALp9ZJY4OQH6N7N8dgSZ5xsNQ8Weixq7JudmTtfMWNiPi3xAU1oUOvwXRRsGoKS3t2OUzsObdi9t%2F836IYnZT52DY513nTqkRwR0VE62iJplibK2adGb7z%2Bi8Uma6jv8f48KyRY8fvDwt7%2BIPuWTp4%2BCYyY5DbbJ2mXIwUNSeMXAuMRdBiOFZaKEi9P3VzWECNJbMw5pyvvwY6pgFJoiC5VPQ4MV8CVoXQo0vuxf8NQS%2BBoPwh3lMk0hWpLxTRWxebsCZZB%2FNuT5ERYfSCL5BNAgH5jaxhziWOZuZB%2BamlIrAnYtp7O8rVPEselRymmwlc1kE5g5PHFlTujzychwg2XvXnanLtpTkEDIsqUbckK6mP3ZojRIupyzySlpUDTbCa3C6nEBGcR3CYc2XIqG3XLCDBogngTZmO3LKsDQCnfAJB&X-Amz-Signature=b1622fa65166ce8772059ae761018f4359e00303fdad5348fa50911c410c41cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZNTO7E%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIEDlDUmLrYFKlvz%2FjGJLetYqNJF6ZJhjv0p2W6ZdM6P3AiBJ19n1sFrb2tkGj9tWsJeWQ%2F2qEoz6BPGbYMj6z8U8BiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi6xK1O9uiwMwpYZKKtwDq%2BvbG0%2FhgpUXjZC5m6q2ljYuxsbmSCLQiu8VbqcO%2BOPzQPRaGSja4jHFqoNo6CYIoShFoKuUzvW1lovOfeqFTGqO7Wm95aIfnZdmiRJRtFdkQLCFzoecpGsVFhgN9d903ypAN2ZmGp9HYibg1TR0dK2vjTCVGGmJOAR6G%2BgFdXm8K6m%2FKxz2Y1%2BAm9bsYUQQA8Fpn5bknfj2p%2Bkd2bPM09dv%2FNxgF2efzqI7AvzaW4F1qUQaQ04QIvLmdFr33x3h9EPUJD1gHhZPXcRxhsn%2FuQeEG2L0gqzTV0UOfRd860OCGaJqt0ixqqLAVlrlAWasIhDswCc4mD7HCwO8lov6i2U%2FuBYge0YcnxlQwANV%2BETrCzsuLPa6U%2BL9VrDRWHbSNvImWEFPIPAis8fF25zCBbp5%2BhldNyDLvMXahj5uU7CrtJGblyd9kmALp9ZJY4OQH6N7N8dgSZ5xsNQ8Weixq7JudmTtfMWNiPi3xAU1oUOvwXRRsGoKS3t2OUzsObdi9t%2F836IYnZT52DY513nTqkRwR0VE62iJplibK2adGb7z%2Bi8Uma6jv8f48KyRY8fvDwt7%2BIPuWTp4%2BCYyY5DbbJ2mXIwUNSeMXAuMRdBiOFZaKEi9P3VzWECNJbMw5pyvvwY6pgFJoiC5VPQ4MV8CVoXQo0vuxf8NQS%2BBoPwh3lMk0hWpLxTRWxebsCZZB%2FNuT5ERYfSCL5BNAgH5jaxhziWOZuZB%2BamlIrAnYtp7O8rVPEselRymmwlc1kE5g5PHFlTujzychwg2XvXnanLtpTkEDIsqUbckK6mP3ZojRIupyzySlpUDTbCa3C6nEBGcR3CYc2XIqG3XLCDBogngTZmO3LKsDQCnfAJB&X-Amz-Signature=04adddc1cfcd321379e6001040fdf4eabb327a72b95aad04ede6e132253063d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
