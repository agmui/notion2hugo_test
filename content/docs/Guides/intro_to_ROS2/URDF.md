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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQE67JMK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIF3bBegldQy5vgaI4Qw7NKR1hEKbc8ovBKvhbzgcpIvWAiAcx2ml0KeVALP1%2FhBiNrm4L69lbyPozuYzdtPdhDENzir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMpTudUuXfrEohcemfKtwDuH0b%2FutOcFDDNUoGGskBmsRWuW0HspByNLOh240r2uCupcGm6W3h7HHmxPDK6UCgfbMWsdmChIx4IgJbS%2F86u2H7AC6gUBVZ%2BZYOqCGxRqExvuOu4cgw2o7dY3oHqp86HGQWZgcSoUddvry8BeexWhcF1iwenMbYdXJUcQDFIyj7%2F5UY4CXJmM49qlyKpgD2rTGJ2nfUQktoaDjSQMQ59lBRHj3S9FD4lniPQobU2NYpadczaoDpZUg%2F3sfyB3A0%2B8g4jkEp6v%2Bmn2o1V%2F7mbOXxmYqddPQMsThBguwggjsJqbP59EoWn9j2pY%2BRCdy32NDSDhZ0mYxLr7reIpWsMvx%2FbtVNXTLYbSL8oemTUtP4IKVJvnuByNPsc7wCGOX90XJOZd6LKb2mJxHBW1HutJAQKp2s%2BcKT3GI2F07eFwPur%2Fl8%2FNbMbDdqBr8G65qy0hUNLSMkyarst3hkQoniDcmjSP1xV7dI09PhtzSMcLkRIWkycAJA441jRiAjdf1tfOr8qFPFZxUZF5Ihd7xPWODWacDsJBj%2FHITadiQlzLlD6psx7K6HeCzjLygmPIMs1yRyFcgbb%2BaagarGBYQJkkKpE51DYDOJ0vh3PHL2ySSaRt3EY%2BrP6TCKWTowrqrRwQY6pgGrDI9JWxVMqKDSqYNn9C0jzKHHip3sJ61mBRZKL5d9ygGrqxw%2FvtDpjGq8DASXoXoYPmTogWEAXAcfRTz4Q6W5%2Bm0CBo5AIppERkRAY%2FM86YtbJBzKPz42DOV8vfLZM8y0vullE8qDYLJDB3m4CgmKA0OyLlJtWtx0Suxvnr1w%2F3%2ByIpiNGhA6cDzEahXdsWsCoE4jC8p36zhADjldOfaEaXV377Q4&X-Amz-Signature=eb576c505091f51634720006f9a3d2c4787e895c619e24ad196bb83f8b4109ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQE67JMK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIF3bBegldQy5vgaI4Qw7NKR1hEKbc8ovBKvhbzgcpIvWAiAcx2ml0KeVALP1%2FhBiNrm4L69lbyPozuYzdtPdhDENzir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMpTudUuXfrEohcemfKtwDuH0b%2FutOcFDDNUoGGskBmsRWuW0HspByNLOh240r2uCupcGm6W3h7HHmxPDK6UCgfbMWsdmChIx4IgJbS%2F86u2H7AC6gUBVZ%2BZYOqCGxRqExvuOu4cgw2o7dY3oHqp86HGQWZgcSoUddvry8BeexWhcF1iwenMbYdXJUcQDFIyj7%2F5UY4CXJmM49qlyKpgD2rTGJ2nfUQktoaDjSQMQ59lBRHj3S9FD4lniPQobU2NYpadczaoDpZUg%2F3sfyB3A0%2B8g4jkEp6v%2Bmn2o1V%2F7mbOXxmYqddPQMsThBguwggjsJqbP59EoWn9j2pY%2BRCdy32NDSDhZ0mYxLr7reIpWsMvx%2FbtVNXTLYbSL8oemTUtP4IKVJvnuByNPsc7wCGOX90XJOZd6LKb2mJxHBW1HutJAQKp2s%2BcKT3GI2F07eFwPur%2Fl8%2FNbMbDdqBr8G65qy0hUNLSMkyarst3hkQoniDcmjSP1xV7dI09PhtzSMcLkRIWkycAJA441jRiAjdf1tfOr8qFPFZxUZF5Ihd7xPWODWacDsJBj%2FHITadiQlzLlD6psx7K6HeCzjLygmPIMs1yRyFcgbb%2BaagarGBYQJkkKpE51DYDOJ0vh3PHL2ySSaRt3EY%2BrP6TCKWTowrqrRwQY6pgGrDI9JWxVMqKDSqYNn9C0jzKHHip3sJ61mBRZKL5d9ygGrqxw%2FvtDpjGq8DASXoXoYPmTogWEAXAcfRTz4Q6W5%2Bm0CBo5AIppERkRAY%2FM86YtbJBzKPz42DOV8vfLZM8y0vullE8qDYLJDB3m4CgmKA0OyLlJtWtx0Suxvnr1w%2F3%2ByIpiNGhA6cDzEahXdsWsCoE4jC8p36zhADjldOfaEaXV377Q4&X-Amz-Signature=658bf213fe9acb24146b414bc7e2807030795c256846180e2e99c56e49ccc2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
