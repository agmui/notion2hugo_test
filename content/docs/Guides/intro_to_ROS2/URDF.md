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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS7MIO7P%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFy79C8lVdvrLuVkIGeLvCpD41no0Ov7Cq%2BY8qsuq%2BdxAiB%2BzLwTHTrrDxm4w4ic3aniNzwwfFP0TYTuTMBJh22M7ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM%2Fnb1EmomVImyW2%2B1KtwDJGMYxX0Ru1W3fwe2Hi28YMGyYb%2FgmjI0kwzOkcYQtrdHJu%2BKxvUefIoxZyg72oe9s9R2parIpFcxiEZwP5FOokjvX2frG2TuSunYuya9YqZzCNBH6YF0%2FgCuHkb2v0uklcMlICDbtJ%2FMkizHBRpcnDKb8Sv9goC0kVyxGaCwGGIPk%2FBZIuUPLXpf6aWebCghzrJCbD033oTsaC6UjJ%2F4Yjsr5fnNLpXixYQkbTNEUxcjVwCO89XfaVkBiSQwBVThvxHgKWegIoRWpqfhDXKREOSoyalsj40ywbgfdWlbi9mzxy0i3fSKp9FuLZgGSpCQkbwtOU5lGMIVc8Znw5mlntPdlHO9qdTpQzL0jm059kLXrch%2FuHnhwD%2B%2F9MBXJUU9U7GPxfwQG96aDvFuJ1hPbpXz%2FIuEBLWNcuEJUlPFNWim3NgdSa7iTmKfG37wjKFLZDbw0UHUi%2F%2F%2BAbW2Xj4EFgHNf1QiUygtI4lBwP%2BfRhPspD0KkSPhA4%2FS%2B1sfJd8xWEU1AVcbQ%2BQI15wWILw9SkvikPTonMkvWB1odsxH7tkERCHU4aigXM6Z7QEAPGMLADNjCPWgIkvNostVMLV6aVFkL89CZvs0fKJAVppEnVwA4HpOWDOYVnken6AwrLDYwwY6pgEjCofnQblnT4Wb1QCjKKV7wQjYteUpoLjBq3wgNG87mZ4DFSTWdq5VVHCPFEQSa501mHfW4GigzfW824iPMHhGJ35yC76hMsbKcD0qwuMCfL1ffYB2gsKwDU0VA6UKMTJTxX0g71v%2F2DakKpzHJOqQ6TJ3cue7oiPtY9QuOruN5sqfx4kT%2BRkFtYuIFa2LnWBt2eqFv86CWKt0z4s2Em4nzy6ZlSgK&X-Amz-Signature=34593d99111743f474ae2af57a18f06b050d486d6335e42e16290a080707cbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS7MIO7P%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFy79C8lVdvrLuVkIGeLvCpD41no0Ov7Cq%2BY8qsuq%2BdxAiB%2BzLwTHTrrDxm4w4ic3aniNzwwfFP0TYTuTMBJh22M7ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM%2Fnb1EmomVImyW2%2B1KtwDJGMYxX0Ru1W3fwe2Hi28YMGyYb%2FgmjI0kwzOkcYQtrdHJu%2BKxvUefIoxZyg72oe9s9R2parIpFcxiEZwP5FOokjvX2frG2TuSunYuya9YqZzCNBH6YF0%2FgCuHkb2v0uklcMlICDbtJ%2FMkizHBRpcnDKb8Sv9goC0kVyxGaCwGGIPk%2FBZIuUPLXpf6aWebCghzrJCbD033oTsaC6UjJ%2F4Yjsr5fnNLpXixYQkbTNEUxcjVwCO89XfaVkBiSQwBVThvxHgKWegIoRWpqfhDXKREOSoyalsj40ywbgfdWlbi9mzxy0i3fSKp9FuLZgGSpCQkbwtOU5lGMIVc8Znw5mlntPdlHO9qdTpQzL0jm059kLXrch%2FuHnhwD%2B%2F9MBXJUU9U7GPxfwQG96aDvFuJ1hPbpXz%2FIuEBLWNcuEJUlPFNWim3NgdSa7iTmKfG37wjKFLZDbw0UHUi%2F%2F%2BAbW2Xj4EFgHNf1QiUygtI4lBwP%2BfRhPspD0KkSPhA4%2FS%2B1sfJd8xWEU1AVcbQ%2BQI15wWILw9SkvikPTonMkvWB1odsxH7tkERCHU4aigXM6Z7QEAPGMLADNjCPWgIkvNostVMLV6aVFkL89CZvs0fKJAVppEnVwA4HpOWDOYVnken6AwrLDYwwY6pgEjCofnQblnT4Wb1QCjKKV7wQjYteUpoLjBq3wgNG87mZ4DFSTWdq5VVHCPFEQSa501mHfW4GigzfW824iPMHhGJ35yC76hMsbKcD0qwuMCfL1ffYB2gsKwDU0VA6UKMTJTxX0g71v%2F2DakKpzHJOqQ6TJ3cue7oiPtY9QuOruN5sqfx4kT%2BRkFtYuIFa2LnWBt2eqFv86CWKt0z4s2Em4nzy6ZlSgK&X-Amz-Signature=6d946c4580ac8e946fd1754dcb844f1f908f695b7ea6f3b512557c4741f278ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
