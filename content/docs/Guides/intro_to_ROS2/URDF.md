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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSSMWX3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHHNdRJU5gIXkvJW1zuENWAp1pH4xnp218fCJNHOw73QAiA3qcLyD23XtCKE4gQz%2FR5AXIavvyDZidN8mrvR6jAgdyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMjPxyGaHGvnzjWQ5BKtwDOVYkkXd%2F0SINr4qdJ18mKgtUuhdHy6oCOJafllcDarjscusc4uX99j2FwtrFehv6Xdcyfqn7JDtkYYLHZLI1x%2FjFH%2B4StX%2FXxzAyxXMgTcEhePbfBYYyfIe328pXHGkH2I8JkgGS7yXlAxcO1fPxXfoHtBpOroBA3aUbtZqRd2pzcSBgaPtDKTa93fnAEkbpVhSD4d4WOwLuvQ9Vmk8V0BKVpCTB519X%2Fgx%2BYPxx2cZzEzXXY7ciA7cd3UMqVQ9s8S6BI1B%2B0R2InkgLjoH%2FMZwsp%2FBcd4xQPWKEHz9ZFAcDhhNp3IsiyW%2B1cXPjWk4PwxadUqXU4WSewMk9vseDLvmhaTp6ptiIDcTN2vy2rOc1ZIONVY2VZzSRck6QtGWAjbkO1U9uynaX9hwEwybhDd%2BHGOMkvDne7X7x4Puyz%2BFFwKq%2FPvk1dJ1lWsyKZgEhNpKC%2FxYMyS0Bkp9AVR0xPlHudPa7IRBPzzEAnbLFf8C3DSLD%2BmYjPKRkeTgBhxHDnzTyMARQx4u2upD4v8SGDMhss6ur%2FWdVe7XJMkwgQ6BxeOPj6QCRuWoCJXs93oqwfZ1KZ2jq%2Fp%2BJx%2BfDcLmlhsmtc5ogFRdhCSkbwU%2BEF1h9z%2Bvgz%2FLgsGC23p8wjemzvgY6pgF%2BANt9qahUfFCEtVgq%2FIJWI8CEauws2iyzm1DVt5t%2FeSOl3EsUiJMNuQmLBC%2BfKN1%2FzwmVusSEBxUVJiBKTvaRfbUatYwoQxhoIR3aZcVcPwzma9lY4D0ShYf%2F%2F4HGwbssb94vQI06BXorINnuHjP4qoWbfydTrJeq2b8Gs5uGYzoNoflfEYIjy6gP6P8g%2BRwcZS12vkrHEfme5ZtnDB1%2FBlhw0XH1&X-Amz-Signature=b472f2794598cd76076e47f1d7f978d91a0d95a053fb5dcdda8464184308a9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSSMWX3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHHNdRJU5gIXkvJW1zuENWAp1pH4xnp218fCJNHOw73QAiA3qcLyD23XtCKE4gQz%2FR5AXIavvyDZidN8mrvR6jAgdyr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMjPxyGaHGvnzjWQ5BKtwDOVYkkXd%2F0SINr4qdJ18mKgtUuhdHy6oCOJafllcDarjscusc4uX99j2FwtrFehv6Xdcyfqn7JDtkYYLHZLI1x%2FjFH%2B4StX%2FXxzAyxXMgTcEhePbfBYYyfIe328pXHGkH2I8JkgGS7yXlAxcO1fPxXfoHtBpOroBA3aUbtZqRd2pzcSBgaPtDKTa93fnAEkbpVhSD4d4WOwLuvQ9Vmk8V0BKVpCTB519X%2Fgx%2BYPxx2cZzEzXXY7ciA7cd3UMqVQ9s8S6BI1B%2B0R2InkgLjoH%2FMZwsp%2FBcd4xQPWKEHz9ZFAcDhhNp3IsiyW%2B1cXPjWk4PwxadUqXU4WSewMk9vseDLvmhaTp6ptiIDcTN2vy2rOc1ZIONVY2VZzSRck6QtGWAjbkO1U9uynaX9hwEwybhDd%2BHGOMkvDne7X7x4Puyz%2BFFwKq%2FPvk1dJ1lWsyKZgEhNpKC%2FxYMyS0Bkp9AVR0xPlHudPa7IRBPzzEAnbLFf8C3DSLD%2BmYjPKRkeTgBhxHDnzTyMARQx4u2upD4v8SGDMhss6ur%2FWdVe7XJMkwgQ6BxeOPj6QCRuWoCJXs93oqwfZ1KZ2jq%2Fp%2BJx%2BfDcLmlhsmtc5ogFRdhCSkbwU%2BEF1h9z%2Bvgz%2FLgsGC23p8wjemzvgY6pgF%2BANt9qahUfFCEtVgq%2FIJWI8CEauws2iyzm1DVt5t%2FeSOl3EsUiJMNuQmLBC%2BfKN1%2FzwmVusSEBxUVJiBKTvaRfbUatYwoQxhoIR3aZcVcPwzma9lY4D0ShYf%2F%2F4HGwbssb94vQI06BXorINnuHjP4qoWbfydTrJeq2b8Gs5uGYzoNoflfEYIjy6gP6P8g%2BRwcZS12vkrHEfme5ZtnDB1%2FBlhw0XH1&X-Amz-Signature=848b73cc6ab92fcf1164cdb06e473f596c16ac3ea1129b380571b73cdcf48a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
