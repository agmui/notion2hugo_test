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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZHXKIT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeklnOXu5cjIn%2BvYqzYYmkoWYve4CS979e%2F%2BIN%2FOohjAiBkLt9gIAL%2BM5U8xhqnCcrpUo94iBlTqkH5CC2y4fMwgCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjPB8UABWNhlD1%2BpKtwDMIwTIf%2Bt1HrK8ZEYmLU4UYSjHYyk7AZGGSR%2FNC3fAfOuMSlEkzFDrSRCzfSjnEkKcPhmhnN9zrON2aFVrmhw7ng7BoRP6qScKG1loTZhPok%2BVRzdfozbC%2BtJCWVQJIRkACb1zb008ScZJyUJIxqfVlvd0fbV8V6bgd6irmWsBeszXrirLGD86Reiv9Ycijwy16XcbUEjFjgR%2F36Z5ADtYq4SJjohKxXN3RqA8AKmd1uBWDi2QhrsMYf9YdpqxOserchTYAhTxLvWTJ0TEf%2FC3ekn60k3ELumpuFbOsF7hSkGu6H1uyxi6p6tTgiUHBvYZs2aEZyLoYt9nLFBcYlUlnrQzjI6rmOl16Pwoy5B%2FbSBY54j4iwPckqeIpTVNQz9lYZD88QpIeSo5E8SW5PHnip%2F%2Btnof9hTVdNamg2a2DdlgvxHudg%2FfhpMmlvnl%2BYopYYcklbfT5GyLVRr5sKnblL6W9fNTl4BI1GIoi3vEVjwSxzKuu3IcD62OxPqScnigxKhNLDRcY%2FFAuf%2BcBOCsEk4%2BdxZ0m9Hhz1GHawuqdSClWWDbqidhamW19pO2KwDRxK2DygY4d8wuoXgTIeJmON4KHFaGeR7kEDyVgRuzF140tYT5wA8%2Bxb%2FQMoworilwgY6pgHT3xRlFRsISKZ7y6G0ONd5eqHjI%2FBRjLFu16teF6yk%2FM%2FZdi9lP%2FuHCOUv%2B6r2kb9BxZx1Nc9WYdk7dsDry9l6uZFkAnMhB4P1na0eFgsDgC9HrxswFVXudQUHi8wDKxTzJMgM7OuieiDJ6TlWlV%2BY1%2FtAaCNYg%2BHMp%2BItG8zKBAG4Fe%2BmJEUSxZohocAjr2saP99%2Fp0uM0m5qm1gwXggKX46bji15&X-Amz-Signature=4e3e2c57c9b062b6bf4881101a772419dc8d9242eea3030d3a1f56dbed40ffac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZHXKIT%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeklnOXu5cjIn%2BvYqzYYmkoWYve4CS979e%2F%2BIN%2FOohjAiBkLt9gIAL%2BM5U8xhqnCcrpUo94iBlTqkH5CC2y4fMwgCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcjPB8UABWNhlD1%2BpKtwDMIwTIf%2Bt1HrK8ZEYmLU4UYSjHYyk7AZGGSR%2FNC3fAfOuMSlEkzFDrSRCzfSjnEkKcPhmhnN9zrON2aFVrmhw7ng7BoRP6qScKG1loTZhPok%2BVRzdfozbC%2BtJCWVQJIRkACb1zb008ScZJyUJIxqfVlvd0fbV8V6bgd6irmWsBeszXrirLGD86Reiv9Ycijwy16XcbUEjFjgR%2F36Z5ADtYq4SJjohKxXN3RqA8AKmd1uBWDi2QhrsMYf9YdpqxOserchTYAhTxLvWTJ0TEf%2FC3ekn60k3ELumpuFbOsF7hSkGu6H1uyxi6p6tTgiUHBvYZs2aEZyLoYt9nLFBcYlUlnrQzjI6rmOl16Pwoy5B%2FbSBY54j4iwPckqeIpTVNQz9lYZD88QpIeSo5E8SW5PHnip%2F%2Btnof9hTVdNamg2a2DdlgvxHudg%2FfhpMmlvnl%2BYopYYcklbfT5GyLVRr5sKnblL6W9fNTl4BI1GIoi3vEVjwSxzKuu3IcD62OxPqScnigxKhNLDRcY%2FFAuf%2BcBOCsEk4%2BdxZ0m9Hhz1GHawuqdSClWWDbqidhamW19pO2KwDRxK2DygY4d8wuoXgTIeJmON4KHFaGeR7kEDyVgRuzF140tYT5wA8%2Bxb%2FQMoworilwgY6pgHT3xRlFRsISKZ7y6G0ONd5eqHjI%2FBRjLFu16teF6yk%2FM%2FZdi9lP%2FuHCOUv%2B6r2kb9BxZx1Nc9WYdk7dsDry9l6uZFkAnMhB4P1na0eFgsDgC9HrxswFVXudQUHi8wDKxTzJMgM7OuieiDJ6TlWlV%2BY1%2FtAaCNYg%2BHMp%2BItG8zKBAG4Fe%2BmJEUSxZohocAjr2saP99%2Fp0uM0m5qm1gwXggKX46bji15&X-Amz-Signature=f6df74890846cee16763dc66ff23d569cacbc15561210aef800adec095db823c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
