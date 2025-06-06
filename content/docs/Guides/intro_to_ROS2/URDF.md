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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MJOAXL%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQNT9EQnAN1ZsnlYdIGpHFXhIHJ6sPQeQJ5MdgfuLSAwIgO30%2B6qm5JBZ%2BFI4nXJCAvHnd61oK5lXGq75GqmRgmmkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOMrD2s4iT6%2B%2B6Qb9CrcA1lR8S8k4eyQsou4%2F6Y0k7MfAmj1ezUCbzoqzG4jryHQw15yrw649HdfTbJOpZpbGyA1TIMwmUGnwr8A7muQqwgRC5jbSeHPLS40kJ%2Fr%2B%2F703sny%2F1AhP7CDpaRBjxZeVnpMMQXXAmh%2FFKUEK6QVOIteEu1Ow0Q3NaH5OuIQRwC8Qde2I%2FobJ8U%2FLmkBag5%2BV0%2BHdrhvHt341gv7F2il1H%2Blj1janz6IjsWmJ48UWKHlOa0K2eCXN%2F5xScnd6Cm9bGOSyS8Ug0PhJ939lx5tR8m%2FCXRrgJnTpA7Xb1d%2B%2B0N%2BkQgDm%2F%2F1wYBqnElFEoSGWJpUQuDYu%2BOwKIqd0jwWesHOCHB1YQH9UZ6KMGzpfPs1X42wxgRpHDh18tx0BccHd7UPjrVWogFQ6QtMaiYWDuzEyAC7zEm1fowSTSSJVlK3nVYF8pDzR3g0eGg9PWlzifrkdYESMajxD9P55%2BDUhD3mCN8N1KBWKGEuicM%2F%2B4XziksmTL%2FtXxCVD5LFKjpvUnyT33h%2FBsrXZAkGD7aStAjWocpUtpbGktgNH%2BqFHm1w05Kh455PRteIHi2TZZorc%2FZaIuMKfRrT4vE8OW8z2dZpAcgZ%2BuV7Dyjl8tblZv0fjU7YvzU2JHivomiJMPWRjcIGOqUBmGxstG9s5XCqgQg9Ar0k1gaMlf%2BmbkjobNY%2FwGWoj9ELy8ldcmr9jlh5jXzzaAZ%2FjGz2XCK4agyuv9KcswGU%2FLct1WY4878jhYlH1zsZM%2B2TaTBm7pnpOyLmhD4Dk8Z6MKTOlVTP0VSWX1V0OYOChZl9GsdlfBdn%2FzLOejEB2IXpx5YhAXK3YTtFWLPWaCYWX5b%2FpLrX51Sk2SK9fCPkuMWroG2a&X-Amz-Signature=32bd7050372717d193dca4177ee8635304257534bf8b8b608a7eb00386be267f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5MJOAXL%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQNT9EQnAN1ZsnlYdIGpHFXhIHJ6sPQeQJ5MdgfuLSAwIgO30%2B6qm5JBZ%2BFI4nXJCAvHnd61oK5lXGq75GqmRgmmkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOMrD2s4iT6%2B%2B6Qb9CrcA1lR8S8k4eyQsou4%2F6Y0k7MfAmj1ezUCbzoqzG4jryHQw15yrw649HdfTbJOpZpbGyA1TIMwmUGnwr8A7muQqwgRC5jbSeHPLS40kJ%2Fr%2B%2F703sny%2F1AhP7CDpaRBjxZeVnpMMQXXAmh%2FFKUEK6QVOIteEu1Ow0Q3NaH5OuIQRwC8Qde2I%2FobJ8U%2FLmkBag5%2BV0%2BHdrhvHt341gv7F2il1H%2Blj1janz6IjsWmJ48UWKHlOa0K2eCXN%2F5xScnd6Cm9bGOSyS8Ug0PhJ939lx5tR8m%2FCXRrgJnTpA7Xb1d%2B%2B0N%2BkQgDm%2F%2F1wYBqnElFEoSGWJpUQuDYu%2BOwKIqd0jwWesHOCHB1YQH9UZ6KMGzpfPs1X42wxgRpHDh18tx0BccHd7UPjrVWogFQ6QtMaiYWDuzEyAC7zEm1fowSTSSJVlK3nVYF8pDzR3g0eGg9PWlzifrkdYESMajxD9P55%2BDUhD3mCN8N1KBWKGEuicM%2F%2B4XziksmTL%2FtXxCVD5LFKjpvUnyT33h%2FBsrXZAkGD7aStAjWocpUtpbGktgNH%2BqFHm1w05Kh455PRteIHi2TZZorc%2FZaIuMKfRrT4vE8OW8z2dZpAcgZ%2BuV7Dyjl8tblZv0fjU7YvzU2JHivomiJMPWRjcIGOqUBmGxstG9s5XCqgQg9Ar0k1gaMlf%2BmbkjobNY%2FwGWoj9ELy8ldcmr9jlh5jXzzaAZ%2FjGz2XCK4agyuv9KcswGU%2FLct1WY4878jhYlH1zsZM%2B2TaTBm7pnpOyLmhD4Dk8Z6MKTOlVTP0VSWX1V0OYOChZl9GsdlfBdn%2FzLOejEB2IXpx5YhAXK3YTtFWLPWaCYWX5b%2FpLrX51Sk2SK9fCPkuMWroG2a&X-Amz-Signature=8ddc7fba71892c8fb18ab23c63e24697358c01d34f5d5877bd1e0edfdeab8b68&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
