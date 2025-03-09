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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKXNY4L%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDPIS3Azai0tp0z4ADYjzUOto6I7Ma53wTnC%2FJyqGVnHQIhAPAFS13wSpqpNce6BK4ZghySay1n0fPLYZ052LbkFUdmKv8DCGsQABoMNjM3NDIzMTgzODA1IgyyviiZbekCLS%2FUw%2Fkq3AOqt2%2FVa6cTZUlkRDSn%2FTXx6dD4GrJnxS5J0kDVeTOco7jHuKCXvvKQlsopMOrMc%2Bk9UExogw%2Bm0TSaP%2B5CB8DkZwGJWCYFph3uyqADye2R54lgxkbh4HeiUcXtJLKsuPBmpnzb1xuaZkLjZ2X5oE7ln87Kd1A5Kt%2FxOqFw65kBG4ylMTSXcgA280S3IspIN7yIuWhVUD5O%2Beh7RtzAC01XYjA11rsXna8Q1fICiZgd6yvvqr42z6XjRGjCx1SPEytESLROumqbdPqE%2BxEriot58lQaHQ22439HNqj1FjiyR8AxddX%2F771mIH8SkiD0Ki%2FEA%2BEmxvwMChtcdzlqHwbzmqO%2FZcSuXMERvlbJhf0e9Ovk%2FADUIHYBXwUNrav5ZfpjSxRx%2FDNqQ9Kphss%2B%2B5ylW1cbJpIIQwntNUJuF1kZdyOuuIW1QmRAV5Itvum456r4e2K7NlLSXqE76gaFy9yp4WPG1zipBWcRCjVvzPpn86364ldgJiny4PujO999zEOhZBaxeRfsKDsFE%2BZpWl8ETCdK0H7VM47wAQLUQzW2YG%2BW0%2BBk4kbtFjrWtfhwvJ9Qj0zB45nABrrzPDFnyigWh4AT%2FFlse%2FWgugyxwfyHP1xeK%2BJUdFYEzOa3fTCy6bO%2BBjqkASTTtMnGsBCftxS%2FnLZEtxmyIPynCcFLvPo3qwew744DL4OJBGconK54YosSLjlitALINz%2FMjgmLKb16ukyaI49uQ%2F7NwlOLedYBh1uw%2Bh1pyMDIUPRfy%2BkB2VfYCgKTv%2FSrHuUn6e%2FyOpj8%2BvvYfXGjR0hRdsIMGQjtMadsjeSrQ36lPvUaAq8H%2Bnp3RREImZmpR6v1E9jTTqF32YRXS7wtYs42&X-Amz-Signature=d955265ec56de851af449def26fe3bc0bae18cf988b4f54d979f68660776b0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKXNY4L%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDPIS3Azai0tp0z4ADYjzUOto6I7Ma53wTnC%2FJyqGVnHQIhAPAFS13wSpqpNce6BK4ZghySay1n0fPLYZ052LbkFUdmKv8DCGsQABoMNjM3NDIzMTgzODA1IgyyviiZbekCLS%2FUw%2Fkq3AOqt2%2FVa6cTZUlkRDSn%2FTXx6dD4GrJnxS5J0kDVeTOco7jHuKCXvvKQlsopMOrMc%2Bk9UExogw%2Bm0TSaP%2B5CB8DkZwGJWCYFph3uyqADye2R54lgxkbh4HeiUcXtJLKsuPBmpnzb1xuaZkLjZ2X5oE7ln87Kd1A5Kt%2FxOqFw65kBG4ylMTSXcgA280S3IspIN7yIuWhVUD5O%2Beh7RtzAC01XYjA11rsXna8Q1fICiZgd6yvvqr42z6XjRGjCx1SPEytESLROumqbdPqE%2BxEriot58lQaHQ22439HNqj1FjiyR8AxddX%2F771mIH8SkiD0Ki%2FEA%2BEmxvwMChtcdzlqHwbzmqO%2FZcSuXMERvlbJhf0e9Ovk%2FADUIHYBXwUNrav5ZfpjSxRx%2FDNqQ9Kphss%2B%2B5ylW1cbJpIIQwntNUJuF1kZdyOuuIW1QmRAV5Itvum456r4e2K7NlLSXqE76gaFy9yp4WPG1zipBWcRCjVvzPpn86364ldgJiny4PujO999zEOhZBaxeRfsKDsFE%2BZpWl8ETCdK0H7VM47wAQLUQzW2YG%2BW0%2BBk4kbtFjrWtfhwvJ9Qj0zB45nABrrzPDFnyigWh4AT%2FFlse%2FWgugyxwfyHP1xeK%2BJUdFYEzOa3fTCy6bO%2BBjqkASTTtMnGsBCftxS%2FnLZEtxmyIPynCcFLvPo3qwew744DL4OJBGconK54YosSLjlitALINz%2FMjgmLKb16ukyaI49uQ%2F7NwlOLedYBh1uw%2Bh1pyMDIUPRfy%2BkB2VfYCgKTv%2FSrHuUn6e%2FyOpj8%2BvvYfXGjR0hRdsIMGQjtMadsjeSrQ36lPvUaAq8H%2Bnp3RREImZmpR6v1E9jTTqF32YRXS7wtYs42&X-Amz-Signature=a4b10f3929b8cd7f29372d73c32166b8014e539ed993775dab2b8021b9044f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
