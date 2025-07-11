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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KHO25UX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOA9av%2B7kMSpnTjMckbjEdGRyi4dqXX4GbRHLvtMGYGAiEAiPDHLe6OuYCPUrrWWJuX2hyBAEWSDNmY9o3LLmCBjTYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJuI%2FbcqpKh48C1bircA72E%2FwhGnXqopnIWpQCkcWcBol74rPCOvhRhlY0NKvi27bmomdGSAh%2F8NKXjE20qkFDX5qwWYfZJxguRNAI6RasoUOmYD7mGlleSPvtUI59m5fD9U%2FKfX0nLsVf6K1GyYzdcArckqddB0RbDOCtsEGngE74HeUr3pPlmCironRiAKJr8yPq6zXunluw0xX0AHMMA3tVes%2FRMEPxJpEM0KCgc1xLamo9dMeZBuDOTtnG5wRxDnftQLNNhqvX9catG5BpKSEuPBueKeIs18ucitMaKHm26KW2R7geNAQ60kc%2FV42GiqpqGxUfMI%2FiiwZAQDXZQIPEbIdQPPG%2BSTRKHa9%2F1GOcem5buJG%2Fjm0drqiIdfEI0i9MJAK4t%2BUjyeMGNTIXXJXKpnXkblpNJSAVBthE%2BSU5wKwH1nfj0zhqPZkzT6riPoUhrx0IHQOUusH9bBg66XF%2FBiNDbKXeqEoxRbkmUf%2FNi3XLy7kstaYxMgnc5s5N85i%2B7cvuiI8ERHeyZrkyMOTaz96UqitXfLqI2dLg0Y8LiBH%2FE%2FRupO%2F20Vjy9nRovrufkxGgcukO1nocOPNSxK4muh79jrosSJzQyLK08usbdbjn9wd88eEFni2YqBDwEWR2UKepqq%2BGYMJL%2FxMMGOqUBgJ4XE%2Ff%2FrFBCVm%2BxrfWEQS2DCx7eWDXRCnm1649mJsu9x85LEYA6ZWKKHPrKIlqWc2LtqtXtCXkIlX6IhB63%2BLa0kFd6OJaWfKqqg2QWQk8r9AKaDBmJ6diQB2babqHGIqjp5Arb2PeX%2FDEYAJfvOJdz2OUUxe3nVnCN9kla2KNHDSZEc0kYkMYeP3wrWV%2BnO3zrOyWZ1FBnPGv%2Bmss86f5ilsgl&X-Amz-Signature=385726100739a718569ac753e53e363b06eae558c804881380729be5860aa201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KHO25UX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOA9av%2B7kMSpnTjMckbjEdGRyi4dqXX4GbRHLvtMGYGAiEAiPDHLe6OuYCPUrrWWJuX2hyBAEWSDNmY9o3LLmCBjTYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJuI%2FbcqpKh48C1bircA72E%2FwhGnXqopnIWpQCkcWcBol74rPCOvhRhlY0NKvi27bmomdGSAh%2F8NKXjE20qkFDX5qwWYfZJxguRNAI6RasoUOmYD7mGlleSPvtUI59m5fD9U%2FKfX0nLsVf6K1GyYzdcArckqddB0RbDOCtsEGngE74HeUr3pPlmCironRiAKJr8yPq6zXunluw0xX0AHMMA3tVes%2FRMEPxJpEM0KCgc1xLamo9dMeZBuDOTtnG5wRxDnftQLNNhqvX9catG5BpKSEuPBueKeIs18ucitMaKHm26KW2R7geNAQ60kc%2FV42GiqpqGxUfMI%2FiiwZAQDXZQIPEbIdQPPG%2BSTRKHa9%2F1GOcem5buJG%2Fjm0drqiIdfEI0i9MJAK4t%2BUjyeMGNTIXXJXKpnXkblpNJSAVBthE%2BSU5wKwH1nfj0zhqPZkzT6riPoUhrx0IHQOUusH9bBg66XF%2FBiNDbKXeqEoxRbkmUf%2FNi3XLy7kstaYxMgnc5s5N85i%2B7cvuiI8ERHeyZrkyMOTaz96UqitXfLqI2dLg0Y8LiBH%2FE%2FRupO%2F20Vjy9nRovrufkxGgcukO1nocOPNSxK4muh79jrosSJzQyLK08usbdbjn9wd88eEFni2YqBDwEWR2UKepqq%2BGYMJL%2FxMMGOqUBgJ4XE%2Ff%2FrFBCVm%2BxrfWEQS2DCx7eWDXRCnm1649mJsu9x85LEYA6ZWKKHPrKIlqWc2LtqtXtCXkIlX6IhB63%2BLa0kFd6OJaWfKqqg2QWQk8r9AKaDBmJ6diQB2babqHGIqjp5Arb2PeX%2FDEYAJfvOJdz2OUUxe3nVnCN9kla2KNHDSZEc0kYkMYeP3wrWV%2BnO3zrOyWZ1FBnPGv%2Bmss86f5ilsgl&X-Amz-Signature=f49ed0cac4ce22a15344158c30e1b180dfbfb6c14a6455d24e0ea61b920ab5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
