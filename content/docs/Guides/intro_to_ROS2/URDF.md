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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QL4CICA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRtHTS6MRAUE8JIu%2BeUbOqe02LcxvlYKjrbJmmZotDIQIga0azuTMZvWwyQkx4c2cIt2GRKBm31MK8rSVTEHTamHQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZqgz%2BaN6gKQH70IircA0Vir2gIeUp5l%2Fo%2FsNdDz6%2BM1IjR0US9SaVuz7KaUJJQkbCTzaIhI%2BRhW2pWB8EOY6lpbqWBLhV8H6wjpxn9shlkdeIzsNFWWMxNxFQqtJkEmgninpiiiFvrIpegxGJgNqWTPsv%2Fl2%2BLXFqPs9usiRhphrsfslLvHfQxNMCj71uR69qw5kuOHz3lre2okvoLslMHNaZral8N967s24WRRENkT10ebcVnGqF0zreR8aUyHKwTx4wshZqvDb%2BxFlgFrjreGSKGkb0N6f5NutW3NaC5MQ8rYtmWwz78ioJUR3iKq0o%2BwV8A0owFD7h0LrbXCMLvmD8fboV7AYj3ov04Tu6NWe2b9vCxYYEBmLrTYgflOorEv89oYLhnLMjJZeq679QuqvPWDyLPQWJjkeOjjrOIVOVPaWy73vL%2BjTVgtAqHa98Oi8sj9KcpTe%2F1Ceg%2B9ouJAE5VkI6wNb4Nx2ar2f2Z0QZcw6Ks7Km9k0gTo%2FXwUKqmdYCfAm5ZZydILEFVDA%2BBDWbrS0N1EMATpD3H9AJmy6GxarAco4lwAUpQZ8F9BENYSIJ%2BE9j0QLlKZSn%2BsK%2BPhnfcWGzZOSLo21rTLgwtrq9KJvgt9VzxQ1eyUtB%2FmCyyNRGqcXeX3mBRML7Nlb4GOqUB93U3wfMI5H6o5kCAqkbsPLn54FdCsZ7S%2FYQXcYO6wONm3asrsCrR723q69zm8LvbaN2LkEE4z4OPEGI0I9CPtBCulD1A6oqnFZAKv68HtzSu03iRiLjgCh3%2F82w8WlXAyihmceY5QOUrGmAlczBGVBsN1tkKapPXaQ6%2FetoUyWVJMsj1shdI%2FCbP9sy1G5KapaUvL%2B%2FfoCvpzfSamBNFk39fl4eb&X-Amz-Signature=51fd576c2ee5a275b1c3c569389df3acd47b78b41b4b0f55ac036783594eee30&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QL4CICA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRtHTS6MRAUE8JIu%2BeUbOqe02LcxvlYKjrbJmmZotDIQIga0azuTMZvWwyQkx4c2cIt2GRKBm31MK8rSVTEHTamHQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZqgz%2BaN6gKQH70IircA0Vir2gIeUp5l%2Fo%2FsNdDz6%2BM1IjR0US9SaVuz7KaUJJQkbCTzaIhI%2BRhW2pWB8EOY6lpbqWBLhV8H6wjpxn9shlkdeIzsNFWWMxNxFQqtJkEmgninpiiiFvrIpegxGJgNqWTPsv%2Fl2%2BLXFqPs9usiRhphrsfslLvHfQxNMCj71uR69qw5kuOHz3lre2okvoLslMHNaZral8N967s24WRRENkT10ebcVnGqF0zreR8aUyHKwTx4wshZqvDb%2BxFlgFrjreGSKGkb0N6f5NutW3NaC5MQ8rYtmWwz78ioJUR3iKq0o%2BwV8A0owFD7h0LrbXCMLvmD8fboV7AYj3ov04Tu6NWe2b9vCxYYEBmLrTYgflOorEv89oYLhnLMjJZeq679QuqvPWDyLPQWJjkeOjjrOIVOVPaWy73vL%2BjTVgtAqHa98Oi8sj9KcpTe%2F1Ceg%2B9ouJAE5VkI6wNb4Nx2ar2f2Z0QZcw6Ks7Km9k0gTo%2FXwUKqmdYCfAm5ZZydILEFVDA%2BBDWbrS0N1EMATpD3H9AJmy6GxarAco4lwAUpQZ8F9BENYSIJ%2BE9j0QLlKZSn%2BsK%2BPhnfcWGzZOSLo21rTLgwtrq9KJvgt9VzxQ1eyUtB%2FmCyyNRGqcXeX3mBRML7Nlb4GOqUB93U3wfMI5H6o5kCAqkbsPLn54FdCsZ7S%2FYQXcYO6wONm3asrsCrR723q69zm8LvbaN2LkEE4z4OPEGI0I9CPtBCulD1A6oqnFZAKv68HtzSu03iRiLjgCh3%2F82w8WlXAyihmceY5QOUrGmAlczBGVBsN1tkKapPXaQ6%2FetoUyWVJMsj1shdI%2FCbP9sy1G5KapaUvL%2B%2FfoCvpzfSamBNFk39fl4eb&X-Amz-Signature=9b756f4211cdf3f34a03a36558e8c2825e97472037c0e2d246097bf116e230a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
