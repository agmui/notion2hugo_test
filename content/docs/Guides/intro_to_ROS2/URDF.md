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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5G6OWJ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDpnhAu4CYGpVmBBsda3Z9MqPqspLvsufYUnDhCpyv%2FfgIgOydRNP57BSmNTOy5jHT5bmYUBZezzTTrXf%2Bo%2B8eMsY4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3CSSoWJ3pyB7yYWCrcAw4BBnfgo%2BwM8uZCU19h8EAst2DUUt%2BfvQzGgk1IK4AZZxPlYSYcPXTzsAXS%2F%2BCe8xZAhH2FCKw74rnA7Ty6Lx7%2F6k1gPWFWoEL06%2FnWL%2FS6RJ%2F7o1SDaffTeCFp2yfr4e2gT9Nd%2BhWcbRrWJ8IX7zm9tiG%2BGTRyv0jO4%2BRufSOyfiSIdVPyArv%2FCDVjjOC2bjq%2BGIlJF24quM4scc9IMWEP4T784vvbbX40wBmBvPhxCWMDdDk0K2o9is1lD2GlyrOhZ%2FaKbEO6LMkRnSLd5h5%2FoI%2Byi4ywEeD76L94rTu%2Bx%2B3NiJs31Q9%2FsZr0fhyhvbll%2BrDO8i2SqTOo07R10uTEu6mwfFsCPk5zEaKzL6X7pyE5XEBuW9sYANb%2Ff1SDxG6CGAt%2FaGpCZXq%2Bw7KT4yt%2Ffr4XcN3rJ67pC%2FPlQsqCh3xprsxWPAJghqUBWsI1diGYMio%2BgUo5ggZL5DCnO%2FvNXYadPDRD%2BNMI8aAYU3hpS62heaKtMobiKVan8Ph5jJf3ZIvubpKU7h5RyQqVIcJcb5AaIMTBjXevAj2jt5BQm14jntCUfkTZsjDlniuO6W5Vo8OL13C6gH1G%2Bcz5FAMUXV5%2BG4NoLzqiCDWiglGuK6u38QVo2SuIvaPuMNfHjb4GOqUBxWDGRHMlZh0%2FUyVs8jTnN9I66FhCqGqoHkMR8%2FaZyGSp5hopKhmuJmWta6GWHlcYU6yrMCJkNxN56YZ3E6LOpIfth44pCrcgvxs957m8o9rC74xN%2BQ06uX5Lazed%2BgIYa%2FRFO0ZYgguZFNi%2FxX%2BT0KeTefDQullxgk53QZLyaY8htmxv%2BeGT%2FOUpQkxUl3ud79KqdhskTvzxc54bXgqrY4mlIhSi&X-Amz-Signature=a246d7d23e2d3f8fc4de866855fc722103b9526f4467ec70b2a3aa553006df41&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5G6OWJ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDpnhAu4CYGpVmBBsda3Z9MqPqspLvsufYUnDhCpyv%2FfgIgOydRNP57BSmNTOy5jHT5bmYUBZezzTTrXf%2Bo%2B8eMsY4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3CSSoWJ3pyB7yYWCrcAw4BBnfgo%2BwM8uZCU19h8EAst2DUUt%2BfvQzGgk1IK4AZZxPlYSYcPXTzsAXS%2F%2BCe8xZAhH2FCKw74rnA7Ty6Lx7%2F6k1gPWFWoEL06%2FnWL%2FS6RJ%2F7o1SDaffTeCFp2yfr4e2gT9Nd%2BhWcbRrWJ8IX7zm9tiG%2BGTRyv0jO4%2BRufSOyfiSIdVPyArv%2FCDVjjOC2bjq%2BGIlJF24quM4scc9IMWEP4T784vvbbX40wBmBvPhxCWMDdDk0K2o9is1lD2GlyrOhZ%2FaKbEO6LMkRnSLd5h5%2FoI%2Byi4ywEeD76L94rTu%2Bx%2B3NiJs31Q9%2FsZr0fhyhvbll%2BrDO8i2SqTOo07R10uTEu6mwfFsCPk5zEaKzL6X7pyE5XEBuW9sYANb%2Ff1SDxG6CGAt%2FaGpCZXq%2Bw7KT4yt%2Ffr4XcN3rJ67pC%2FPlQsqCh3xprsxWPAJghqUBWsI1diGYMio%2BgUo5ggZL5DCnO%2FvNXYadPDRD%2BNMI8aAYU3hpS62heaKtMobiKVan8Ph5jJf3ZIvubpKU7h5RyQqVIcJcb5AaIMTBjXevAj2jt5BQm14jntCUfkTZsjDlniuO6W5Vo8OL13C6gH1G%2Bcz5FAMUXV5%2BG4NoLzqiCDWiglGuK6u38QVo2SuIvaPuMNfHjb4GOqUBxWDGRHMlZh0%2FUyVs8jTnN9I66FhCqGqoHkMR8%2FaZyGSp5hopKhmuJmWta6GWHlcYU6yrMCJkNxN56YZ3E6LOpIfth44pCrcgvxs957m8o9rC74xN%2BQ06uX5Lazed%2BgIYa%2FRFO0ZYgguZFNi%2FxX%2BT0KeTefDQullxgk53QZLyaY8htmxv%2BeGT%2FOUpQkxUl3ud79KqdhskTvzxc54bXgqrY4mlIhSi&X-Amz-Signature=408daffbb88c429231e5737dd9f21b3a7c25f01df0c87284850a7f35acbbe984&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
