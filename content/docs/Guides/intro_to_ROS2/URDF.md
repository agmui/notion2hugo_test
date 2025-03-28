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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D56G32Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdCv%2BeEr3aTJwMnzkQgA7VC3zOco6Lyn76wYFAguKyYQIgG41PIdRycJGrcbOXHhce9h44K1BzleFg%2B0eMNZo8qQQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDL457kdfndT56Xq0GircAx1xi7p1cMZiZGOKxO2xwK2YxmKRarPQb%2BT4EdxCmDXOOkEo8pP6a%2B24%2Bl2SuV207r3gV%2BrHe0YHCPPVYfPKOKWMwqBq%2FvzvJkfKU0vUWMrdFgztvNlkty0dql3EIyklRyvoMLKI%2FcX0mfa9DIhn%2BgwN3FIKQ%2FFshru0moA%2Bi%2BSKBcUbOlEwHl3Gn3xbV64%2FAarO5B1QwP0gvt2wtWaoGD%2B8iKRodViZp9cZBf9Fe6bRJB0Yo5hYpU6%2F0HbQLNxOusXm4%2B9WoXW3q6OGl9yVjmbsnkgK63F3jLpmeCtwNCiupLAndJBHEOo88oDErHozus8UauHLjOMQ50nt%2BdyDc1NztO5wE0aBVaM2qFPV7%2FWqDJYj%2BHiEABQ2CG2rsQ%2F95nUEIblwTkhotdypUIhmDHN8dVvyEr42srM9nvNIfKoX7xAxfeR2vc4ZQ7HWCFib1LSs9N363V%2FQ6Jbd8a5xy%2F7SWL45a830C7ekJsL32qSh4oA3CX6XKejMBZhD%2FcT%2Fzw%2F%2Bfqs%2FRcTk2290eYT9H%2FHt24H6xuq%2BVSOH4QESSoFevRwLPG%2Brcn0DcDae7KdXjDo93%2FbB9UCiLoVoaIeoHiL%2FlTOjTA3HRCp%2Bcqj91ki8fY1gTJj1jkUcrPE8MNr3l78GOqUB2%2BE93AD4Fdkqgaw%2BQJV21LKa2SHV0JwItMfCo72meBee0aLIuPlqx0LuuHxr%2Bv3wCqFEKKqd9HU%2FlZgr2mcHmI6UxFyvmUEP7Yx1JukgF44To93%2F72HjP0smd9fd0FZ5Jq9W3LA16z%2BoHnoVG%2BXVKsZFqy3EeV1cPT8B0Xi8aHMtAcUBF1ySCLqBk2zlez01aV3Zm%2B6hO07OHKWZI9DUmDpZ86Ef&X-Amz-Signature=67a434a705003fd717ed007c38f6d782ba2157effb1be53c07024777731ec605&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D56G32Y%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdCv%2BeEr3aTJwMnzkQgA7VC3zOco6Lyn76wYFAguKyYQIgG41PIdRycJGrcbOXHhce9h44K1BzleFg%2B0eMNZo8qQQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDL457kdfndT56Xq0GircAx1xi7p1cMZiZGOKxO2xwK2YxmKRarPQb%2BT4EdxCmDXOOkEo8pP6a%2B24%2Bl2SuV207r3gV%2BrHe0YHCPPVYfPKOKWMwqBq%2FvzvJkfKU0vUWMrdFgztvNlkty0dql3EIyklRyvoMLKI%2FcX0mfa9DIhn%2BgwN3FIKQ%2FFshru0moA%2Bi%2BSKBcUbOlEwHl3Gn3xbV64%2FAarO5B1QwP0gvt2wtWaoGD%2B8iKRodViZp9cZBf9Fe6bRJB0Yo5hYpU6%2F0HbQLNxOusXm4%2B9WoXW3q6OGl9yVjmbsnkgK63F3jLpmeCtwNCiupLAndJBHEOo88oDErHozus8UauHLjOMQ50nt%2BdyDc1NztO5wE0aBVaM2qFPV7%2FWqDJYj%2BHiEABQ2CG2rsQ%2F95nUEIblwTkhotdypUIhmDHN8dVvyEr42srM9nvNIfKoX7xAxfeR2vc4ZQ7HWCFib1LSs9N363V%2FQ6Jbd8a5xy%2F7SWL45a830C7ekJsL32qSh4oA3CX6XKejMBZhD%2FcT%2Fzw%2F%2Bfqs%2FRcTk2290eYT9H%2FHt24H6xuq%2BVSOH4QESSoFevRwLPG%2Brcn0DcDae7KdXjDo93%2FbB9UCiLoVoaIeoHiL%2FlTOjTA3HRCp%2Bcqj91ki8fY1gTJj1jkUcrPE8MNr3l78GOqUB2%2BE93AD4Fdkqgaw%2BQJV21LKa2SHV0JwItMfCo72meBee0aLIuPlqx0LuuHxr%2Bv3wCqFEKKqd9HU%2FlZgr2mcHmI6UxFyvmUEP7Yx1JukgF44To93%2F72HjP0smd9fd0FZ5Jq9W3LA16z%2BoHnoVG%2BXVKsZFqy3EeV1cPT8B0Xi8aHMtAcUBF1ySCLqBk2zlez01aV3Zm%2B6hO07OHKWZI9DUmDpZ86Ef&X-Amz-Signature=271b385c8d024c0c4881b5ee5325315402a66303ee03831dca6d08db7d1637ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
