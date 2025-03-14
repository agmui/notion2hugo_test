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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPFNRGW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuor7DzBbWV1sl49No6J5isiG%2FcX%2BsTbaMg7VCagOMzAiEAxy1t93ec0qpQ%2FlLcEl585ylzeBbDEI3n4Q3SpN7VYG0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3NS8B732C3kR7gdSrcA14XZ4cMjZbODNDFnnYsXJTODQvJRq7MAYlYCNc3GTyECliwRc0SWALwDpp93d3PcMB2HWKjyrfpbeWdjNfuaQLYTWhd2Zo%2FPfYHbPyWMhElVs1oKQfR3ZI5ne8bzDTMb53MWLQkAFMO6BbO6l%2B%2FvB6UdvfRZdSYoncmppxP7k0O%2FkUpKkwWjeHPbWe811EG%2BEQebLHCyiUTIYcwhQgfhfg0I5XfQge%2BFGCCKVH00xK%2B94oY8BGyZm6%2FTn55mPwMt7d%2BcvpGG2nmb4n8lGH0BvlUvQzRjKWzxD5E0zg5HJ5i%2FwDkegn5Lz90F1xogit3z1ENDpZj6fufBSnt%2B3kO8SA9Zk1tWCNQhvONuBUW6mvgPfrbCJgs7%2FY%2BLBcWFNyQievHoflcIuF3%2Fxwozv4EkEy09xkYC%2FK%2F9lH8uc1yRFe%2B8sgBK9jsvGRJgvmrvItNKQ8cqENmfmzfnoPWM0kIPuo1NLND3OYqXLIb1IdjUPabLuraNZbnN6A7w3cjvnkjFD%2BGYdlPMTowHtYGGrCNzqeAge%2Bq%2BE8mFr7Y6E4BR0WcYqwOmHy%2BfCwePqx1EC1busYk1qMIvMq73KVUe%2BzXlkQwns3aQMtTgDbeyx%2Bfh5S9PM8%2FLP7ghS2puiS7MOK%2F0b4GOqUBuIentN8duDfDETLEIhJYEthMOOranFMkLpgC%2B41dpWxPV%2BzHHe1%2FLq7HFYpuTIGDrypFZssyOnvxiqqbHrSX3VfBuZumBSR0GAUyLs%2BGyG72F7oCHBfydKegfeEVx1%2F9EmLLbXZizQDujT5QVQ%2B2mXhhDYrTuhxuqO%2BCDAuzW2M4hQahENigxMp1824b9o5wb2Dwlmd1tTnW%2BM%2FzN%2FYn8zDJpv%2BB&X-Amz-Signature=821ab400005fe1e03fb2af5cbc838a92d98fcca68bc5bb1f2ada89f520725418&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPFNRGW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuor7DzBbWV1sl49No6J5isiG%2FcX%2BsTbaMg7VCagOMzAiEAxy1t93ec0qpQ%2FlLcEl585ylzeBbDEI3n4Q3SpN7VYG0qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3NS8B732C3kR7gdSrcA14XZ4cMjZbODNDFnnYsXJTODQvJRq7MAYlYCNc3GTyECliwRc0SWALwDpp93d3PcMB2HWKjyrfpbeWdjNfuaQLYTWhd2Zo%2FPfYHbPyWMhElVs1oKQfR3ZI5ne8bzDTMb53MWLQkAFMO6BbO6l%2B%2FvB6UdvfRZdSYoncmppxP7k0O%2FkUpKkwWjeHPbWe811EG%2BEQebLHCyiUTIYcwhQgfhfg0I5XfQge%2BFGCCKVH00xK%2B94oY8BGyZm6%2FTn55mPwMt7d%2BcvpGG2nmb4n8lGH0BvlUvQzRjKWzxD5E0zg5HJ5i%2FwDkegn5Lz90F1xogit3z1ENDpZj6fufBSnt%2B3kO8SA9Zk1tWCNQhvONuBUW6mvgPfrbCJgs7%2FY%2BLBcWFNyQievHoflcIuF3%2Fxwozv4EkEy09xkYC%2FK%2F9lH8uc1yRFe%2B8sgBK9jsvGRJgvmrvItNKQ8cqENmfmzfnoPWM0kIPuo1NLND3OYqXLIb1IdjUPabLuraNZbnN6A7w3cjvnkjFD%2BGYdlPMTowHtYGGrCNzqeAge%2Bq%2BE8mFr7Y6E4BR0WcYqwOmHy%2BfCwePqx1EC1busYk1qMIvMq73KVUe%2BzXlkQwns3aQMtTgDbeyx%2Bfh5S9PM8%2FLP7ghS2puiS7MOK%2F0b4GOqUBuIentN8duDfDETLEIhJYEthMOOranFMkLpgC%2B41dpWxPV%2BzHHe1%2FLq7HFYpuTIGDrypFZssyOnvxiqqbHrSX3VfBuZumBSR0GAUyLs%2BGyG72F7oCHBfydKegfeEVx1%2F9EmLLbXZizQDujT5QVQ%2B2mXhhDYrTuhxuqO%2BCDAuzW2M4hQahENigxMp1824b9o5wb2Dwlmd1tTnW%2BM%2FzN%2FYn8zDJpv%2BB&X-Amz-Signature=f4b67f7531abc73012ab63a5c047920b5e1aed5675af10ef55b9804f930286b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
