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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMG6YMHV%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf9so9Yg3rjCl3Nw7c%2FA%2BG654tx4fZ7ugUm0oSe7BIrAiEA728hUP23FgqrDm34JxHaDEowLFBazvBNl3eiZPYEpikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOE73aj28xmAi%2FAYSrcA0h7Jz6kpmfaERVjRWJfacjlOCs1RC7EGUf%2BrKafyCRB9fqSpt6M1WZwk1%2BM0X4gZHLYjehRREmuPYgs9aG6MQyg%2FsCpcFhLsjZGgGxhXUaGIM%2B8oONqpAS2vpF0QfG9gLnR4AqrF84e2ID7WNJCUmsfK1wNNHbcHl0WVFrVh7vqrohFhFxXhfU9lVswejHvf63YYf7v6DN%2BtF4aYIKqHaNP2KBtV3N%2B84IT%2BqSpH8Fj%2FUAJ78n%2Bv5jnuznCnWVj0CYajcGfV%2Bk8nGvUHyYQ%2FAXmmLYw4UynSlMfyi3mwR2c82ExgLXROeluotQufQrqw%2B5xT5kA3Nd3YfDeXiHs%2FNaNCexcMCIEnJPPT%2B0yP954LAW2wCxUSOq2HGuN0yKhiUb%2F6Rj5yCOr9ofYSwbTiyO9ivFJrJSo1us0cbbsX2iwq4UJegtcvGVC%2BvGh9ZED9DFCeLj88d%2BaLMVl6ywYUSinYHdLRqatfLw%2FmhxcitMjytIWNJzLhnHGXSZ9wKAxvFDf49dYDbn28f94T7cJiOiO9v3IcB%2BNMcb2tkUL7vgr5qDI4uph%2Fzq2xHYohXIlqDJqKfgAHLF5hPsF%2Fga3xe6VbtXdCjWW5LbOl6uC2OWtFFVrx2EmzyRZbrAFMJ7L074GOqUBV390V9K1GSV51aFyVUuyPU1M5QEkk34I2pD0%2B7SgidvT1uvDCeuBxLdFfCd7RXdxJENtYGz%2FP0Ri7pKZxMYL%2FXeMJaugpo6Mudpzp5fTTa52HOMYoALyqIeHQ9lsjnCqMn%2FZdj2di2alv5R53%2BSL%2FhGabEGCpovtpTjEc9XprfGfJ62Pf8DTbkYBLKYYk0G1W%2FY2xRupVSsjjed96FLcMQ95Xam%2B&X-Amz-Signature=c31312623d5d130d0c85ab0b431cf1b711d4f254d8bea36a6395400c82a8bbd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMG6YMHV%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf9so9Yg3rjCl3Nw7c%2FA%2BG654tx4fZ7ugUm0oSe7BIrAiEA728hUP23FgqrDm34JxHaDEowLFBazvBNl3eiZPYEpikqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOE73aj28xmAi%2FAYSrcA0h7Jz6kpmfaERVjRWJfacjlOCs1RC7EGUf%2BrKafyCRB9fqSpt6M1WZwk1%2BM0X4gZHLYjehRREmuPYgs9aG6MQyg%2FsCpcFhLsjZGgGxhXUaGIM%2B8oONqpAS2vpF0QfG9gLnR4AqrF84e2ID7WNJCUmsfK1wNNHbcHl0WVFrVh7vqrohFhFxXhfU9lVswejHvf63YYf7v6DN%2BtF4aYIKqHaNP2KBtV3N%2B84IT%2BqSpH8Fj%2FUAJ78n%2Bv5jnuznCnWVj0CYajcGfV%2Bk8nGvUHyYQ%2FAXmmLYw4UynSlMfyi3mwR2c82ExgLXROeluotQufQrqw%2B5xT5kA3Nd3YfDeXiHs%2FNaNCexcMCIEnJPPT%2B0yP954LAW2wCxUSOq2HGuN0yKhiUb%2F6Rj5yCOr9ofYSwbTiyO9ivFJrJSo1us0cbbsX2iwq4UJegtcvGVC%2BvGh9ZED9DFCeLj88d%2BaLMVl6ywYUSinYHdLRqatfLw%2FmhxcitMjytIWNJzLhnHGXSZ9wKAxvFDf49dYDbn28f94T7cJiOiO9v3IcB%2BNMcb2tkUL7vgr5qDI4uph%2Fzq2xHYohXIlqDJqKfgAHLF5hPsF%2Fga3xe6VbtXdCjWW5LbOl6uC2OWtFFVrx2EmzyRZbrAFMJ7L074GOqUBV390V9K1GSV51aFyVUuyPU1M5QEkk34I2pD0%2B7SgidvT1uvDCeuBxLdFfCd7RXdxJENtYGz%2FP0Ri7pKZxMYL%2FXeMJaugpo6Mudpzp5fTTa52HOMYoALyqIeHQ9lsjnCqMn%2FZdj2di2alv5R53%2BSL%2FhGabEGCpovtpTjEc9XprfGfJ62Pf8DTbkYBLKYYk0G1W%2FY2xRupVSsjjed96FLcMQ95Xam%2B&X-Amz-Signature=9426f7f9978b43d9777e8442275c075e0abb4590a7d4e1f31a2a54da8642a5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
