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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH6MEUDA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDI8NYnTRiMAl7vT8lyZjsoVxxKdIAF%2BJ4YIqZAZxVUogIhAIfUSIwvOQp%2FIrtrG6p1HStq1hf0D2eYiSR8mB4bSmKpKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaXmePDEWKigD5CPYq3ANoZq4Vp3thT23%2BqieRLxiLHR047ebcJErRe1X%2BKINWqxsbum1y0LNgK03t2ZYP2fOnb1DMA%2FtkzXEwsFDTMcV5ne6Q7SyQxbC%2BmiUP%2BCdfvzXWUKnUk8wqPinMjmfgZ9T3KhQ6VtUbtaOpdqW0rTH00JaEBrPQoI2UxLaqmqfWdGj5nuVrYYlaBSzcsyxZMNdaMixTltoglN9JNNaAmEZY1%2F68%2B9fughbSwc%2F%2BYd7M5u9aH5vOOuTROjoBDSTmiZfBr2tjyrbZs8ach188wMC2eb1p%2FkPJTf32u%2BVFmmut60YyOnxecGXc51wi%2FQON1bp8WJVL1Mmb4t8Riog6bODlPi8E5B0yS41cIWu2BA87j1f7H1OSNXF4VI4KA6EVxcTiWynALWOPFNNlKzG9uhGV4pRprbSbUso3zWvv7pbnlZl%2BKgD%2B%2B2jj2BnQltBf18%2F7d2nZSLd88GzE6ZviZ6oxLy7EcUAmbR%2B4ULVZBtGk9Y61gHqkQPzZeIgjz7wBB1wgIZtx3cbcgZRVuQ1SuLK%2FfEB3riNfDDebR9tq0Xxao8JeiHb3LKrwdm8tOlJ0Yut68eowPPiiIB5Ek9noKCxQmZtKnpIgfM13hJvUvzBuo1NjDZo%2F0nyhj%2FAoZTCiwqnCBjqkAa1gH2H1nQJ%2FvaDfRQJzzjWcHunsUyBKbCdddH0DMcaJBLq48bukL33MMZYtCNIRNjGC1zTcfAOM7vpsmXO2R0riUt7wu7RlQlO%2BBqd3uQanDp0dThkoDI6JsHI9FvmVdhYH97iFDlEB1EnIVh6Auj32wNIObfYMx3nrqOWOVcDvzoIq6ktIASBdu%2BPG5HR%2FWeR9qxx4MXXmvd0Pr%2BNrTDqBO82Z&X-Amz-Signature=969f420859209ad1dee2bfe1018e15dd7627397b094fe130e3e2ee313e0e3fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH6MEUDA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDI8NYnTRiMAl7vT8lyZjsoVxxKdIAF%2BJ4YIqZAZxVUogIhAIfUSIwvOQp%2FIrtrG6p1HStq1hf0D2eYiSR8mB4bSmKpKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaXmePDEWKigD5CPYq3ANoZq4Vp3thT23%2BqieRLxiLHR047ebcJErRe1X%2BKINWqxsbum1y0LNgK03t2ZYP2fOnb1DMA%2FtkzXEwsFDTMcV5ne6Q7SyQxbC%2BmiUP%2BCdfvzXWUKnUk8wqPinMjmfgZ9T3KhQ6VtUbtaOpdqW0rTH00JaEBrPQoI2UxLaqmqfWdGj5nuVrYYlaBSzcsyxZMNdaMixTltoglN9JNNaAmEZY1%2F68%2B9fughbSwc%2F%2BYd7M5u9aH5vOOuTROjoBDSTmiZfBr2tjyrbZs8ach188wMC2eb1p%2FkPJTf32u%2BVFmmut60YyOnxecGXc51wi%2FQON1bp8WJVL1Mmb4t8Riog6bODlPi8E5B0yS41cIWu2BA87j1f7H1OSNXF4VI4KA6EVxcTiWynALWOPFNNlKzG9uhGV4pRprbSbUso3zWvv7pbnlZl%2BKgD%2B%2B2jj2BnQltBf18%2F7d2nZSLd88GzE6ZviZ6oxLy7EcUAmbR%2B4ULVZBtGk9Y61gHqkQPzZeIgjz7wBB1wgIZtx3cbcgZRVuQ1SuLK%2FfEB3riNfDDebR9tq0Xxao8JeiHb3LKrwdm8tOlJ0Yut68eowPPiiIB5Ek9noKCxQmZtKnpIgfM13hJvUvzBuo1NjDZo%2F0nyhj%2FAoZTCiwqnCBjqkAa1gH2H1nQJ%2FvaDfRQJzzjWcHunsUyBKbCdddH0DMcaJBLq48bukL33MMZYtCNIRNjGC1zTcfAOM7vpsmXO2R0riUt7wu7RlQlO%2BBqd3uQanDp0dThkoDI6JsHI9FvmVdhYH97iFDlEB1EnIVh6Auj32wNIObfYMx3nrqOWOVcDvzoIq6ktIASBdu%2BPG5HR%2FWeR9qxx4MXXmvd0Pr%2BNrTDqBO82Z&X-Amz-Signature=5c62f4d32e06bff1330fd091f2e1d32e13db4ae6356dde226fd0ddb6558f0889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
