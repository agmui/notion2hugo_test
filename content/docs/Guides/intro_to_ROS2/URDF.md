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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDAKHBL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICizcDBLn%2FEWSPEiKw%2BdtwwSqQvKGkxYk0xPqLQ%2FTMokAiEAxBxKxBYt5nS2YMr1Wl84qYRVwcHXNKG%2FwUFONvz0M%2BkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdeZdV9pIyIPoGUjSrcA4MCpwBEvvBZ%2FN801W7wHH6uIsEmlYQKuwR7iiEB%2FSM7il7fg7mX%2FqlPyh%2FVXcesaq8OQEMEpxJwne9%2Ftxmrc613ONIGKyIYsGFEk6j0i6Tz4E6OjXem%2BY4eziP9qaX%2Fk7TW8gpF58hhx6vGfidZE6JME6Veczb7MnMVRkuo4IFmOIdwMbuHgtbWooOsasEAdql2DexerRFnj59aRuaYxUCajOK3kMDY3XDvdQzGSta1QN5o8YJfSg12W1CLaXj19jo2jScEqG8s5Yxx%2Bz6v7%2BlrijziFmiXHurUqKWFBGNDgVzghb9Hn%2BOjJ0QzMOtmTUlWdZ10COz4nsZZh21c%2BOoAvlf1RL8vRb1DPD%2BM50AqmhvHOi%2FdPzQEFWtDKDHozV0EDkXjz%2BcESXjSdnM3jhWCWGFJHXs9rgvwuoi8wdzgiQABuTDuQAmytoMgkFeotl9EkhkGECFgIK3CuGt5C3AmVIkTHRjXipU5wt%2B%2F3J21kNZlfWIchsXvfaw0aGrUI9OMcYmqk4CxpG%2BzqLHxigkrrUMVFQl5B8reKDI3huGAxh6nKw65YGDJ%2Fl1po7kQQl1zv78Ggtiv3oVmwYvYWgyS1OUnXalNWPQYq0xi1bmqHRHsxOh0FnO1l0RwMIqx678GOqUBOCyzb%2BTrkbZFrnZMyRiXI1MuuuOvI%2FH3fzuVimAVuhzlguke4vJcqfit6tINbp%2BAWCLOsc5N24cmFDmsP6agkkF2n1HR%2BKf0Z1199yyaR0PIFXDkzdoqO78126acs4%2B9WpT3i1nXC5d%2BVRAl2KdZlWW60ykZxMrP4giOMl%2FsbYA8GNRcuuysjdRz9i8UorsiEV1klnwvlrVsOxZ8zZ%2BRIUnHjX07&X-Amz-Signature=935bf00b38d8dbba92533dad5771b0afb267bf410474d13119599bcf9b99bb45&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDAKHBL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICizcDBLn%2FEWSPEiKw%2BdtwwSqQvKGkxYk0xPqLQ%2FTMokAiEAxBxKxBYt5nS2YMr1Wl84qYRVwcHXNKG%2FwUFONvz0M%2BkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdeZdV9pIyIPoGUjSrcA4MCpwBEvvBZ%2FN801W7wHH6uIsEmlYQKuwR7iiEB%2FSM7il7fg7mX%2FqlPyh%2FVXcesaq8OQEMEpxJwne9%2Ftxmrc613ONIGKyIYsGFEk6j0i6Tz4E6OjXem%2BY4eziP9qaX%2Fk7TW8gpF58hhx6vGfidZE6JME6Veczb7MnMVRkuo4IFmOIdwMbuHgtbWooOsasEAdql2DexerRFnj59aRuaYxUCajOK3kMDY3XDvdQzGSta1QN5o8YJfSg12W1CLaXj19jo2jScEqG8s5Yxx%2Bz6v7%2BlrijziFmiXHurUqKWFBGNDgVzghb9Hn%2BOjJ0QzMOtmTUlWdZ10COz4nsZZh21c%2BOoAvlf1RL8vRb1DPD%2BM50AqmhvHOi%2FdPzQEFWtDKDHozV0EDkXjz%2BcESXjSdnM3jhWCWGFJHXs9rgvwuoi8wdzgiQABuTDuQAmytoMgkFeotl9EkhkGECFgIK3CuGt5C3AmVIkTHRjXipU5wt%2B%2F3J21kNZlfWIchsXvfaw0aGrUI9OMcYmqk4CxpG%2BzqLHxigkrrUMVFQl5B8reKDI3huGAxh6nKw65YGDJ%2Fl1po7kQQl1zv78Ggtiv3oVmwYvYWgyS1OUnXalNWPQYq0xi1bmqHRHsxOh0FnO1l0RwMIqx678GOqUBOCyzb%2BTrkbZFrnZMyRiXI1MuuuOvI%2FH3fzuVimAVuhzlguke4vJcqfit6tINbp%2BAWCLOsc5N24cmFDmsP6agkkF2n1HR%2BKf0Z1199yyaR0PIFXDkzdoqO78126acs4%2B9WpT3i1nXC5d%2BVRAl2KdZlWW60ykZxMrP4giOMl%2FsbYA8GNRcuuysjdRz9i8UorsiEV1klnwvlrVsOxZ8zZ%2BRIUnHjX07&X-Amz-Signature=dca18148cebaa6c46a0e6d183a6f199721031ed3f2574690b3c066a674b2be13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
