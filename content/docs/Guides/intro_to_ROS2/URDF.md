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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNA5SK2Y%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6hghJ8zadUCBNWH7c%2BiOYdMDbpy067ufzGEwHv4TTqQIgFRMmXQSDoDFiQds5EL8b85s6w%2BFCeEoW4b2vevVBR9Qq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDH5HvaoOx2ZRLgN%2BSircA%2F8doqp37%2FmcGwnaN9a%2BAqryRzVNaNWI9dJUmF9SLxQwaTH%2FN2KCzLfvWA%2BI7Em2FZOHxGdFjUwo1U2eJMgEg4A6n50CLMW%2BBg%2BmuqdWrYVJIob54GGaJ9es1Iwi2jP7Y6dSTsg4D6PeHjEkUfrGxeiFucvbXuwq%2FBeR16Buxbv%2FoSlPN8ggMPYWH4nlK5C2bJE5h5TcfdnWQZxYLQqOU741h9DftQrnyrBvZSKTjay2ZP%2FIz%2BD%2FsYqcRS8766Ch%2F%2FmOp%2BGy%2FhY2A8EHiulRgnvLbka8J8HVDCkgKkpteJPAoBkWyw0jG7DFh0IBqNoOwXu28FoaHdIy5xKs8rQN3yQTj%2Bma%2BW3Dk89DU27XLM%2BM9MvScOdx1GkaTi6xzlg8g%2FPl9OJGl%2BYy9Q5GDsZqfkGVO0l6%2BYN1tMc1zOmwfIkWh60b8UFXtZ7e8ZSfHcVXS2KU4rHU7tR6QzzsllnLwFiKBzn41nc3wxS%2FaTcCLBvK%2Fm3hogbfhk6Dvzes41jbPvD39noITiEQUyYPq2Wd7%2FpTUmdyxiYxcs9wqZuF6BUjL72fLCqmMNrPOebyHpk0zTAbiM%2BNIANXgTiby1Z0XW%2F38GUpE2MrM1cMYaVSB4VfeLVPFXso4LomE5nqMIeUgsAGOqUBCH9rUeKXA%2Bt4ebdzUn1DISHG7Y7LjG1%2FQuSkdv5f1tDAhI2%2FLaXWbAqcZh%2F1sWJHcVgzZZ9DkuTG7FchTgWnX9u544zApaPrjmrSjL7eQOuOiKRs6rgcv0rdl2uhyMs4vZFxuyOAJkagil%2BCDdzMpEbzROgjcu36NP6NvI2RwY7E0BwX5MtS%2FCFfYjLUi%2BWKSTG9vERn78sbnpEFuPvaht6zuqKb&X-Amz-Signature=061bcd456abca8f1af6f402d0b985c26a4855780988662a1727af02bb12d5d98&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNA5SK2Y%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6hghJ8zadUCBNWH7c%2BiOYdMDbpy067ufzGEwHv4TTqQIgFRMmXQSDoDFiQds5EL8b85s6w%2BFCeEoW4b2vevVBR9Qq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDH5HvaoOx2ZRLgN%2BSircA%2F8doqp37%2FmcGwnaN9a%2BAqryRzVNaNWI9dJUmF9SLxQwaTH%2FN2KCzLfvWA%2BI7Em2FZOHxGdFjUwo1U2eJMgEg4A6n50CLMW%2BBg%2BmuqdWrYVJIob54GGaJ9es1Iwi2jP7Y6dSTsg4D6PeHjEkUfrGxeiFucvbXuwq%2FBeR16Buxbv%2FoSlPN8ggMPYWH4nlK5C2bJE5h5TcfdnWQZxYLQqOU741h9DftQrnyrBvZSKTjay2ZP%2FIz%2BD%2FsYqcRS8766Ch%2F%2FmOp%2BGy%2FhY2A8EHiulRgnvLbka8J8HVDCkgKkpteJPAoBkWyw0jG7DFh0IBqNoOwXu28FoaHdIy5xKs8rQN3yQTj%2Bma%2BW3Dk89DU27XLM%2BM9MvScOdx1GkaTi6xzlg8g%2FPl9OJGl%2BYy9Q5GDsZqfkGVO0l6%2BYN1tMc1zOmwfIkWh60b8UFXtZ7e8ZSfHcVXS2KU4rHU7tR6QzzsllnLwFiKBzn41nc3wxS%2FaTcCLBvK%2Fm3hogbfhk6Dvzes41jbPvD39noITiEQUyYPq2Wd7%2FpTUmdyxiYxcs9wqZuF6BUjL72fLCqmMNrPOebyHpk0zTAbiM%2BNIANXgTiby1Z0XW%2F38GUpE2MrM1cMYaVSB4VfeLVPFXso4LomE5nqMIeUgsAGOqUBCH9rUeKXA%2Bt4ebdzUn1DISHG7Y7LjG1%2FQuSkdv5f1tDAhI2%2FLaXWbAqcZh%2F1sWJHcVgzZZ9DkuTG7FchTgWnX9u544zApaPrjmrSjL7eQOuOiKRs6rgcv0rdl2uhyMs4vZFxuyOAJkagil%2BCDdzMpEbzROgjcu36NP6NvI2RwY7E0BwX5MtS%2FCFfYjLUi%2BWKSTG9vERn78sbnpEFuPvaht6zuqKb&X-Amz-Signature=ca7f0724302f6bdffac07bb7563a9069a6e8e1f5df788fac231aa0c98b90b2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
