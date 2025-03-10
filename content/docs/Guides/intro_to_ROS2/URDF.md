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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVE2UZE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDCkjhJJeoEHe6MXz9pUswUb9pnujVkzl%2BnesKafl5QzwIgLkfOtGukNNh65ENrBwCFWJn4NtgDayvEtsJNQD0dvtoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiXyQfhwyHrMDdsvyrcA0vVkAe43z9sDE5f82wXbfCW1U9%2Bv43k%2B28i%2F00npxX8OfDC7r8EePsCmj5sGm6IQX63AKttk2Yo6736GPZxcgekS%2FKhkze5SvHwBYY%2BY6nfWcPSbLZF3uMXN71u6cOVSsguvLrBFeWOkqhcsvfsb6jQdc0Nm7VcXs7bR7Uwtw8%2FsWtC2r9PVGkGeguvc%2Bs7axnZJSRo8ChlMB6y2v9riKMIXM8uSWxigixxpQOasIVtVhkBGPBfAe0TozjSKCQ8WBeEKuNExP6jzVjZX1NDqFGBh%2Bvb8pDCFQ7O1YsAwqMx2sbCc13%2Bs9a2wJ8GlXd%2F3DeXKBOK2gbLp84K%2B%2Fd%2F3BwKaEYIchhiCTkKZPWcENz15zvtyqX2NMba7HIr9z15dymxvaejlo3FdJwSMgm4vQckwjNvlNKy6yh1VaokGcT1LjxjpvdgX27dRVnPcBOqCr0FsDa%2BuzYYg8VeWZFA%2BgtckjULjSHFbinBtD1BjtwnYnMlDTEvQ66hGxcuEB4w4jDx7eBKFUl1vfiJrUYF4VqcaN2XaMUCL%2BGOo7t0wrDPgs%2BuMuCroReFgMK%2FJZAyiYuo50GLiijIKDqurGLoPVxReDgsFyG5rxrWOlOtWezTxT3bE4%2F27NtkDQ9TMJ%2FKu74GOqUBoqp25xt4g68zfyJdMhJ5qP%2F2L8nLeoQUULPTeU5pGD%2BextAwlQcx6Marce90OxEdO%2B7aJ3pd4jwI8eCFTVY4btEergZmGlbZecWliFdB%2Fciw7krWhzwkHLvOzRBqxpLcjnjKgd%2BYGG4qzheuLLDTw6APKrHH6Y%2B%2Bh4yBm1XIYU3An86aV8xryXwjt5yvH%2BrxvRO4nIM4S%2BnMKhHoN0oS%2Fl3Ze%2Byk&X-Amz-Signature=b2b6d7d476487308d971147cb23fb73993c126ebb2d94b5cb7d9599ad8d16660&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVE2UZE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQDCkjhJJeoEHe6MXz9pUswUb9pnujVkzl%2BnesKafl5QzwIgLkfOtGukNNh65ENrBwCFWJn4NtgDayvEtsJNQD0dvtoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiXyQfhwyHrMDdsvyrcA0vVkAe43z9sDE5f82wXbfCW1U9%2Bv43k%2B28i%2F00npxX8OfDC7r8EePsCmj5sGm6IQX63AKttk2Yo6736GPZxcgekS%2FKhkze5SvHwBYY%2BY6nfWcPSbLZF3uMXN71u6cOVSsguvLrBFeWOkqhcsvfsb6jQdc0Nm7VcXs7bR7Uwtw8%2FsWtC2r9PVGkGeguvc%2Bs7axnZJSRo8ChlMB6y2v9riKMIXM8uSWxigixxpQOasIVtVhkBGPBfAe0TozjSKCQ8WBeEKuNExP6jzVjZX1NDqFGBh%2Bvb8pDCFQ7O1YsAwqMx2sbCc13%2Bs9a2wJ8GlXd%2F3DeXKBOK2gbLp84K%2B%2Fd%2F3BwKaEYIchhiCTkKZPWcENz15zvtyqX2NMba7HIr9z15dymxvaejlo3FdJwSMgm4vQckwjNvlNKy6yh1VaokGcT1LjxjpvdgX27dRVnPcBOqCr0FsDa%2BuzYYg8VeWZFA%2BgtckjULjSHFbinBtD1BjtwnYnMlDTEvQ66hGxcuEB4w4jDx7eBKFUl1vfiJrUYF4VqcaN2XaMUCL%2BGOo7t0wrDPgs%2BuMuCroReFgMK%2FJZAyiYuo50GLiijIKDqurGLoPVxReDgsFyG5rxrWOlOtWezTxT3bE4%2F27NtkDQ9TMJ%2FKu74GOqUBoqp25xt4g68zfyJdMhJ5qP%2F2L8nLeoQUULPTeU5pGD%2BextAwlQcx6Marce90OxEdO%2B7aJ3pd4jwI8eCFTVY4btEergZmGlbZecWliFdB%2Fciw7krWhzwkHLvOzRBqxpLcjnjKgd%2BYGG4qzheuLLDTw6APKrHH6Y%2B%2Bh4yBm1XIYU3An86aV8xryXwjt5yvH%2BrxvRO4nIM4S%2BnMKhHoN0oS%2Fl3Ze%2Byk&X-Amz-Signature=276bc5afee9c8264f6448daaa2c80ee63a4b102946b477a591f0db21d23e8230&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
