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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXWL3CC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDAfjxSuv9EidSqBlN8jMABgfjEZVgv2kaSa7pRjeqEXQIgRg7tHjWv56Xz7lbpjwLpPPbEkt0T%2Fh%2F6QHay%2Bh%2ByRCwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFer3FjWJuQMk8fUTSrcA9RaLl93s1NQUG6163%2BmBxvHIFfwoMp%2BVSOc8bwYQfadG00UPxtcI8joy7Tpzy8x1ldXSezA2yqLiBNLnYsybkoMV70yuKQ6qZzSkYWCB0Lxm4SY8UgcW3ulYD3VcChdRUqiPyiy6yc7gd65u2WnN1BUfsqJF5CmPShEnbsPeYhIh1zw3dWuYo1A01Iw1oA%2BnL3%2FA04gNOVtpULYUIoHDOG1dHWypZfxa6VB291zEDaEHTyruXzcKuH5ZCtcJ1s2wKYFLnEdTVK%2BniAFfeOew%2BQ0lMZH4nU5h09jWOg3FGtJA7QBcEA2T8ZpvDimUzyGzc8LVIWAP9O1Ov6MyDnvQF1l0rKLx77EV6Dw79JBhzFpLs1WEXQ8vOn61DJPGUXNO7KStlKL8zp7czZVS7r0ZrPB2p8%2FKQw4p2O7JPzYqkqwowfoUdm7%2FtWUQJypSmdjbfAJLezbekVg5FxySpBue6FRWhD42mwTmIhNeKK1SW%2FKsyoCxdJg91dc3D443s5aZOUHv11q9Kiph5IYker6aKwYMoxJU7ug%2B8OYk43h9WrqZeqiS4V%2FqRHm2Khf2VAzxGVUZp%2BkOA7zaswP0%2B6aQGhBONFEfETddhUI0vvJS21GHClsSuKVU5qJZIReMKzeib0GOqUBReq8cqzUgTdERuAfLhGRq1QMvb0BUFvU%2BydEJjbcUOWQfdA5egmcerGV0O3XYNU%2FnQh%2F13fpH889acSiysTJvkmFxwsA0csZHXdm2E1eBKIBxyepjLQBRrWn3NzcFTHs%2FXjRJCHMKAEeBc5PjS1V5lAQl0rrTs2Agxi7G0VoOpRX7bMJ9s8bUeNC1G4PU2h%2Bay3AqkmGBRAmr%2BuxJvauXM3uCjjf&X-Amz-Signature=4860ff63ee940c7de6e5a42570781784d87fed8efcc4c851c13cbdae465fc1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXWL3CC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDAfjxSuv9EidSqBlN8jMABgfjEZVgv2kaSa7pRjeqEXQIgRg7tHjWv56Xz7lbpjwLpPPbEkt0T%2Fh%2F6QHay%2Bh%2ByRCwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFer3FjWJuQMk8fUTSrcA9RaLl93s1NQUG6163%2BmBxvHIFfwoMp%2BVSOc8bwYQfadG00UPxtcI8joy7Tpzy8x1ldXSezA2yqLiBNLnYsybkoMV70yuKQ6qZzSkYWCB0Lxm4SY8UgcW3ulYD3VcChdRUqiPyiy6yc7gd65u2WnN1BUfsqJF5CmPShEnbsPeYhIh1zw3dWuYo1A01Iw1oA%2BnL3%2FA04gNOVtpULYUIoHDOG1dHWypZfxa6VB291zEDaEHTyruXzcKuH5ZCtcJ1s2wKYFLnEdTVK%2BniAFfeOew%2BQ0lMZH4nU5h09jWOg3FGtJA7QBcEA2T8ZpvDimUzyGzc8LVIWAP9O1Ov6MyDnvQF1l0rKLx77EV6Dw79JBhzFpLs1WEXQ8vOn61DJPGUXNO7KStlKL8zp7czZVS7r0ZrPB2p8%2FKQw4p2O7JPzYqkqwowfoUdm7%2FtWUQJypSmdjbfAJLezbekVg5FxySpBue6FRWhD42mwTmIhNeKK1SW%2FKsyoCxdJg91dc3D443s5aZOUHv11q9Kiph5IYker6aKwYMoxJU7ug%2B8OYk43h9WrqZeqiS4V%2FqRHm2Khf2VAzxGVUZp%2BkOA7zaswP0%2B6aQGhBONFEfETddhUI0vvJS21GHClsSuKVU5qJZIReMKzeib0GOqUBReq8cqzUgTdERuAfLhGRq1QMvb0BUFvU%2BydEJjbcUOWQfdA5egmcerGV0O3XYNU%2FnQh%2F13fpH889acSiysTJvkmFxwsA0csZHXdm2E1eBKIBxyepjLQBRrWn3NzcFTHs%2FXjRJCHMKAEeBc5PjS1V5lAQl0rrTs2Agxi7G0VoOpRX7bMJ9s8bUeNC1G4PU2h%2Bay3AqkmGBRAmr%2BuxJvauXM3uCjjf&X-Amz-Signature=af48ae2030402af52c6c2a1141f1d5ac1e285ac42927a62f10870c3b3e9b05d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
