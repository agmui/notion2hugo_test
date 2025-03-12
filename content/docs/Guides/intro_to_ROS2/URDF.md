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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE75SAIR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIB13mXwNqSc5m4azXw911nO6TWOv10HDFqWMJX0pu2KNAiEA9yqMtbiCf4t5goRCyS8J6LMkq%2Ft68a7VypxLKArNWZEqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRlzXghO%2BuX5DgfNyrcA3Q%2Fjs5lvE7H2tGtt69gYO1%2BwycrtOxUKoM5iPYdCNE31WgMjw7FVMDA67uMrwDGtfswl63V2Y%2BsBpMvFvNu%2FUZGytzotQdizbbPNNfA0br5yEeBh5oGpZWQ41sfvLhbkRBNx%2FZ7MhdGf5z6NLuw4lsJr5NOIV9kRCP8X5hVkbbjZBHb%2Bs8x9Ed2Xac%2F2HrZFGU7z8DONXI8hbUZz4aQquowSftajBkw4WeP7MRBWXdoIkRDViKcUwwl3d1mdbYvMtzNYnr6fF0yWj8jEIv8KMSrzU%2Bat3mabbp86iYKEXzXiFSuK9703RMgnb4IPoNek8EK5MOxD9g%2BEeHGY3vO0Dz%2BBCMiMPxYC%2BXU%2F3EAPZeKFYy4NhrpcleaBnD2sioiKdKj7YTyCTybi7lQI4FeiOGXjAkUccO5rNt9zaUJqQjO9GsfYv%2Bn6QkQWOrnEtJWOAZxC3EhOMybhYfBYEpqwTWWR5%2Fm%2FgTWPdFurl%2FfcXzYKsTGkOutSF41Ha%2Fa3GPmAVlJThxgfPm8TaoVr3rg8gcVTrvrKwR3AQGzoSXZbQoAdnWRoeItDzZ2ld6BLm52e%2BqhYkVTe1I%2BbLy8IbMkQDfiNPZpAg9Fjw8YKO5E8KKhRXn7xLz5%2FdAvXTkEMMq9xb4GOqUBCWr7zGwRuazv0YIrw1I8cBE0EOa8Q%2FuKNzojyMO0DjBIQ1zQxtOXh%2FUq4CmUR72KqFyBypzgc06pWbuVBYuSnuonrOG%2FjyMcORD4gIrBzrKvjMipKjkzVHIT31mK1xfP1rdhP837Ilx3lq%2FLZ9EZ%2FGOoQN5GWpenrmkMRhr3N0lo41LiifJ5lEMhvxyj3zzKF24o9bNV7LxNq%2Fpz3l1WDRSTb0SG&X-Amz-Signature=c855bae761e1790f102032f983bd8ec2b8148e2b4b5e96bab7d097c8c7cd8000&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE75SAIR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIB13mXwNqSc5m4azXw911nO6TWOv10HDFqWMJX0pu2KNAiEA9yqMtbiCf4t5goRCyS8J6LMkq%2Ft68a7VypxLKArNWZEqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRlzXghO%2BuX5DgfNyrcA3Q%2Fjs5lvE7H2tGtt69gYO1%2BwycrtOxUKoM5iPYdCNE31WgMjw7FVMDA67uMrwDGtfswl63V2Y%2BsBpMvFvNu%2FUZGytzotQdizbbPNNfA0br5yEeBh5oGpZWQ41sfvLhbkRBNx%2FZ7MhdGf5z6NLuw4lsJr5NOIV9kRCP8X5hVkbbjZBHb%2Bs8x9Ed2Xac%2F2HrZFGU7z8DONXI8hbUZz4aQquowSftajBkw4WeP7MRBWXdoIkRDViKcUwwl3d1mdbYvMtzNYnr6fF0yWj8jEIv8KMSrzU%2Bat3mabbp86iYKEXzXiFSuK9703RMgnb4IPoNek8EK5MOxD9g%2BEeHGY3vO0Dz%2BBCMiMPxYC%2BXU%2F3EAPZeKFYy4NhrpcleaBnD2sioiKdKj7YTyCTybi7lQI4FeiOGXjAkUccO5rNt9zaUJqQjO9GsfYv%2Bn6QkQWOrnEtJWOAZxC3EhOMybhYfBYEpqwTWWR5%2Fm%2FgTWPdFurl%2FfcXzYKsTGkOutSF41Ha%2Fa3GPmAVlJThxgfPm8TaoVr3rg8gcVTrvrKwR3AQGzoSXZbQoAdnWRoeItDzZ2ld6BLm52e%2BqhYkVTe1I%2BbLy8IbMkQDfiNPZpAg9Fjw8YKO5E8KKhRXn7xLz5%2FdAvXTkEMMq9xb4GOqUBCWr7zGwRuazv0YIrw1I8cBE0EOa8Q%2FuKNzojyMO0DjBIQ1zQxtOXh%2FUq4CmUR72KqFyBypzgc06pWbuVBYuSnuonrOG%2FjyMcORD4gIrBzrKvjMipKjkzVHIT31mK1xfP1rdhP837Ilx3lq%2FLZ9EZ%2FGOoQN5GWpenrmkMRhr3N0lo41LiifJ5lEMhvxyj3zzKF24o9bNV7LxNq%2Fpz3l1WDRSTb0SG&X-Amz-Signature=753178906ba32fd9c6970c4881a2d919ef234aa0369cfb1d71aff4072b632b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
