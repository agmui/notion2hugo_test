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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HJFOTJ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDphwcmxcsno06w6yKQbcAmHwynRIPCvwx29t5yWzmTtgIhAJ8Z0sce3iUgLEorG2wRcmg0a97FzbY0CEZzAHUkHUEAKv8DCCYQABoMNjM3NDIzMTgzODA1IgyP08zJNRlFun7CmAEq3APu1gDKXYHdTVdpdoK9tZH5FpsUScGwOy4qhlfHMwBA%2Fd%2B8GO2ldR4FiMueEol1YFZkijpBuE%2FuotyhJqQ%2FMIhzvMB2D%2B7I80rkMH0Xs6cxnjSb%2B8xSgmPa3SM%2FhacqHPHQGAmRxRgppVG29356MGG%2BlT32xKaGMWw8KYH7mW%2F6OIYQBahgvgNCABtfr7gaoltyxBf49N2EOPC0217gbsG%2FRKjhKVxwRXYLSLL8dNDy9LhXS5hDigMLKWRTpM%2BovUgDq4atM3Bg4kWlC5czaXgRqAnUR9%2Bh%2Fc5aiNAsU%2Bo4C4plLmcovAjrpW0CB95zP%2BatyKrfjScq3SHkFgYb%2BQk52c%2FZrVz2rYhJ3QmYFXQnr%2Bid2e7Yk5IFtjPUv%2BKk9pgyqRYYBUWDI2uZSZMhqCrE4NYcvG%2Bp8u1BuWQgx8MArERDqcYuNrR3G%2Fwb6qxSybbGmzU1rsN3qdpetY%2FWpnKylmuYkspaZmAsDp7OkqjtB2cFVdztL7Eo0uYM2KaJiTYK%2F%2Bs9quLzo4TZ6MvpJLnnN11omV9PcL4cIGpysDcUgNbN%2BePA9%2FDYDhzUYJhwIgHVDiUAAMArc4fjqd%2FDqeHMNVmqJ8tQd7FsbBJpEWiNJRiGUORyVnoHeyK44DDrv4a9BjqkAVbJ5%2Bor2UNINvVZ7UZO6l9%2FoMDX9jjSvBFB3RPXqw%2BN99zVWWnaW28nkKENdzKO8bhNaZlJIQRSj3twW7sjEG1LMrmDAkok1cB%2B%2FkZW75hNRcMDx0DemMBR8884H%2BCzlIirLwv5CjxOsTcuWhEJqVf0ih5G2Nyr3qQST4%2BPjNRkkT2I8%2FGXfy2r4E%2BnwTYg5wzj24C3yFc9Nujw%2B7hm%2FvBdCBy6&X-Amz-Signature=877b5a0b57c823d6aa6aabf4a45ca9eff30508d24ce9123204ea277c85818636&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HJFOTJ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDphwcmxcsno06w6yKQbcAmHwynRIPCvwx29t5yWzmTtgIhAJ8Z0sce3iUgLEorG2wRcmg0a97FzbY0CEZzAHUkHUEAKv8DCCYQABoMNjM3NDIzMTgzODA1IgyP08zJNRlFun7CmAEq3APu1gDKXYHdTVdpdoK9tZH5FpsUScGwOy4qhlfHMwBA%2Fd%2B8GO2ldR4FiMueEol1YFZkijpBuE%2FuotyhJqQ%2FMIhzvMB2D%2B7I80rkMH0Xs6cxnjSb%2B8xSgmPa3SM%2FhacqHPHQGAmRxRgppVG29356MGG%2BlT32xKaGMWw8KYH7mW%2F6OIYQBahgvgNCABtfr7gaoltyxBf49N2EOPC0217gbsG%2FRKjhKVxwRXYLSLL8dNDy9LhXS5hDigMLKWRTpM%2BovUgDq4atM3Bg4kWlC5czaXgRqAnUR9%2Bh%2Fc5aiNAsU%2Bo4C4plLmcovAjrpW0CB95zP%2BatyKrfjScq3SHkFgYb%2BQk52c%2FZrVz2rYhJ3QmYFXQnr%2Bid2e7Yk5IFtjPUv%2BKk9pgyqRYYBUWDI2uZSZMhqCrE4NYcvG%2Bp8u1BuWQgx8MArERDqcYuNrR3G%2Fwb6qxSybbGmzU1rsN3qdpetY%2FWpnKylmuYkspaZmAsDp7OkqjtB2cFVdztL7Eo0uYM2KaJiTYK%2F%2Bs9quLzo4TZ6MvpJLnnN11omV9PcL4cIGpysDcUgNbN%2BePA9%2FDYDhzUYJhwIgHVDiUAAMArc4fjqd%2FDqeHMNVmqJ8tQd7FsbBJpEWiNJRiGUORyVnoHeyK44DDrv4a9BjqkAVbJ5%2Bor2UNINvVZ7UZO6l9%2FoMDX9jjSvBFB3RPXqw%2BN99zVWWnaW28nkKENdzKO8bhNaZlJIQRSj3twW7sjEG1LMrmDAkok1cB%2B%2FkZW75hNRcMDx0DemMBR8884H%2BCzlIirLwv5CjxOsTcuWhEJqVf0ih5G2Nyr3qQST4%2BPjNRkkT2I8%2FGXfy2r4E%2BnwTYg5wzj24C3yFc9Nujw%2B7hm%2FvBdCBy6&X-Amz-Signature=07c8461a977cae5618c52afd3696a7af316bf8e30c144c856f50dc123a97ad90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
