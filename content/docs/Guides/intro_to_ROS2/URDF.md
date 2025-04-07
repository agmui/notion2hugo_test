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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDPMLKT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54xPJal0m65eq7byQnb5IaHoCeWsltaV%2Bu1Dx3SE1VgIgQ7F8UZM9KG3J0fqHydyTaxU0jKOPsJtgk37Gr4NFWMsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKgD3CF3SmVytzrkCircA%2B%2FSVVz843WC29t4wVqO%2BV%2FnPrWN64H4VqzU1SxigUG5F0VIxHUOOnOh8Rwx6nAFCSgwYi7vTBtOfW75zUG0F6RBcJXLFF296OvU0LAZwDxqLwKb9HWXw1sM1OXQbbFCYHdOpudR6M9cH%2FnLM0oftEGDag3Uu%2B6bZHL43uKhnP28U29bs0fo%2B%2FNQgsoOS2XMm3CUxQYRQ%2F5xG4colRF2fU8Sye4SKVLEuGrv2FMTBnqv14iuelRc5a8%2BmB3xYON7J6lLd4iB5ZD39hiPBIS7%2Bj8H%2FzLFkxmap0heK5wPssBcmnl1UCYKqli6GpG7QV8vQOhBbI2V%2BAgSM7Jnmhcq3BQaUB72zUSI9afLEHE4fW9pZkM7dPGehg5N%2BkTEWKUXtDVSw7RIh%2F%2F%2FNTaiHAk1ObYJatTpmUBTLF2dNNffVgPTaXBHgLTnbJWyxAceQvghrjLcXdzi3l9nY837aPcSsDIZPQ6M88uJL9B%2BK5AfihgdgXO%2FuQjmZ2q11c5RdBKiGL3kPqCGdlcVKTBoC5Athy%2FBt6kqA1lXHziX9aWBQbhXLB%2BsWOIfLZQ8aCM09FAcKnEwQbxL47aKMrhkeaONflbisC2NNUF55rx5kr1kX03ABB5kXVw2HJOIetPBMMi1zL8GOqUBKu%2FMwQDY%2FmjkTWvPjHrmzTAmgiyB%2Bp4BFoKQTNWo8WKkMBXqzXUaMzsY8K7THyMwJjqQHyh2FI%2FVZNNf9wtqcNx9%2BvHNCTMsI%2FWT5DlIvOA9KKqHmLPNSkgm0cMqpjVssSSn8ccKUYS6bK2EwEjK633YUH9Yfl4n95fdCmcOzwDRbHsVJnVH7t6SlN7NnBTvUssGnvzJMPDZ7qPt11HNB8oqPmtr&X-Amz-Signature=ed2235109f09045bef52f1188e93ecc74a0a0b4d16c46263ad468a0bc0db3b38&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDPMLKT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54xPJal0m65eq7byQnb5IaHoCeWsltaV%2Bu1Dx3SE1VgIgQ7F8UZM9KG3J0fqHydyTaxU0jKOPsJtgk37Gr4NFWMsq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKgD3CF3SmVytzrkCircA%2B%2FSVVz843WC29t4wVqO%2BV%2FnPrWN64H4VqzU1SxigUG5F0VIxHUOOnOh8Rwx6nAFCSgwYi7vTBtOfW75zUG0F6RBcJXLFF296OvU0LAZwDxqLwKb9HWXw1sM1OXQbbFCYHdOpudR6M9cH%2FnLM0oftEGDag3Uu%2B6bZHL43uKhnP28U29bs0fo%2B%2FNQgsoOS2XMm3CUxQYRQ%2F5xG4colRF2fU8Sye4SKVLEuGrv2FMTBnqv14iuelRc5a8%2BmB3xYON7J6lLd4iB5ZD39hiPBIS7%2Bj8H%2FzLFkxmap0heK5wPssBcmnl1UCYKqli6GpG7QV8vQOhBbI2V%2BAgSM7Jnmhcq3BQaUB72zUSI9afLEHE4fW9pZkM7dPGehg5N%2BkTEWKUXtDVSw7RIh%2F%2F%2FNTaiHAk1ObYJatTpmUBTLF2dNNffVgPTaXBHgLTnbJWyxAceQvghrjLcXdzi3l9nY837aPcSsDIZPQ6M88uJL9B%2BK5AfihgdgXO%2FuQjmZ2q11c5RdBKiGL3kPqCGdlcVKTBoC5Athy%2FBt6kqA1lXHziX9aWBQbhXLB%2BsWOIfLZQ8aCM09FAcKnEwQbxL47aKMrhkeaONflbisC2NNUF55rx5kr1kX03ABB5kXVw2HJOIetPBMMi1zL8GOqUBKu%2FMwQDY%2FmjkTWvPjHrmzTAmgiyB%2Bp4BFoKQTNWo8WKkMBXqzXUaMzsY8K7THyMwJjqQHyh2FI%2FVZNNf9wtqcNx9%2BvHNCTMsI%2FWT5DlIvOA9KKqHmLPNSkgm0cMqpjVssSSn8ccKUYS6bK2EwEjK633YUH9Yfl4n95fdCmcOzwDRbHsVJnVH7t6SlN7NnBTvUssGnvzJMPDZ7qPt11HNB8oqPmtr&X-Amz-Signature=cae41d33dc1c4258335f026f35cd685036c90e8594af68552525e29b63e3c7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
