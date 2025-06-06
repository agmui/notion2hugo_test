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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDNIUY4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHM0x2%2FUyyJruof7a%2FbwLjQTqg4gl5hQpifMIq%2Fd1gZKAiEAt0QLGqpuLrnST4Ig4f6gqb6xQcfLL7%2BnQvj8I%2Boi%2FM8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBZBOsPNLeBvLBS8RCrcAxsEK21Wl3x9WnD7ydegZxTPkdMyfsWcSHCPg8VdHlcpM9%2Fch3n1GSlqFFkU6VxXXc8veRkqs2HlEJY%2FjqcOAWXhVFfQXW0J0lvy2f4DgIDiHT%2FEkdJH3x2CTm34rlwUJPl8TgN2qAieZXMJOc0DNjF0%2Fd0%2FYBaAdfrBTtTajGLM7HIMjLeK%2FIOWFZhzr%2F4ba60kGZ3G79MEIi0GDILBX%2F8tqnGU8pee6MybXgulljtEcWIFrnJE8zRTUSS1pgu9Pt3NLMKgf8PiGDRIIEEpuokTj5BR3p8zYwx0dfD2m8IhXYlnbKKnUCbinPGV6foMd1tRBAvFVhjxT2j1Na63JCtnS0%2B25OzmpX6SpoCC51udQ7OTbUym5ro1Sr5QbaM%2F5gmg%2Bf2vh03RQK2Gi5A1uZEgoBJ9A%2BqtjnPwX7R62G8HwE06CkeCD0P6UtBhEz3DN7V46Hie0onCHoU7S68niki%2BOD8%2BP02BtcYO5pnZIAbjQPzjQH0LzxX27NczbRwjePIU3twVqy4XECqGhoImK2vD6zHnn1%2B9yugm%2BD%2BWhRA5xwQqcl9WE4ZzgVOCXTNFi4cx4LP3vjqghOvh0yuTYYHT3sKgA50pUm0N%2FekqCfTzkUV%2Bo9QwCIW7%2FXchMIz7iMIGOqUBzZGuXAJvKo9bScXd2zuBNqlBrCU065YT3gpvbsWNiBsdal8SedYpRM0ZFzin8h8%2B%2BuXy8dw%2FrSn8J9NAQ0BbsxdH7pW9MrJq1NlIGkd%2FsFe8o9FH2wBw1Avdfv16hpOPzQVivO%2FMYUvR0s5dGVZW6sztjDMEhaipqzUL0xKscy2SDQXimKzMfi%2FIG7sE4SqqKx60Yx%2BCBgovFZcii0Lyd22L1Eyw&X-Amz-Signature=99adeca11c67fa85e737fd99badad2a8a771e36fc5da2ef8b921692a9862eec2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDNIUY4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHM0x2%2FUyyJruof7a%2FbwLjQTqg4gl5hQpifMIq%2Fd1gZKAiEAt0QLGqpuLrnST4Ig4f6gqb6xQcfLL7%2BnQvj8I%2Boi%2FM8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBZBOsPNLeBvLBS8RCrcAxsEK21Wl3x9WnD7ydegZxTPkdMyfsWcSHCPg8VdHlcpM9%2Fch3n1GSlqFFkU6VxXXc8veRkqs2HlEJY%2FjqcOAWXhVFfQXW0J0lvy2f4DgIDiHT%2FEkdJH3x2CTm34rlwUJPl8TgN2qAieZXMJOc0DNjF0%2Fd0%2FYBaAdfrBTtTajGLM7HIMjLeK%2FIOWFZhzr%2F4ba60kGZ3G79MEIi0GDILBX%2F8tqnGU8pee6MybXgulljtEcWIFrnJE8zRTUSS1pgu9Pt3NLMKgf8PiGDRIIEEpuokTj5BR3p8zYwx0dfD2m8IhXYlnbKKnUCbinPGV6foMd1tRBAvFVhjxT2j1Na63JCtnS0%2B25OzmpX6SpoCC51udQ7OTbUym5ro1Sr5QbaM%2F5gmg%2Bf2vh03RQK2Gi5A1uZEgoBJ9A%2BqtjnPwX7R62G8HwE06CkeCD0P6UtBhEz3DN7V46Hie0onCHoU7S68niki%2BOD8%2BP02BtcYO5pnZIAbjQPzjQH0LzxX27NczbRwjePIU3twVqy4XECqGhoImK2vD6zHnn1%2B9yugm%2BD%2BWhRA5xwQqcl9WE4ZzgVOCXTNFi4cx4LP3vjqghOvh0yuTYYHT3sKgA50pUm0N%2FekqCfTzkUV%2Bo9QwCIW7%2FXchMIz7iMIGOqUBzZGuXAJvKo9bScXd2zuBNqlBrCU065YT3gpvbsWNiBsdal8SedYpRM0ZFzin8h8%2B%2BuXy8dw%2FrSn8J9NAQ0BbsxdH7pW9MrJq1NlIGkd%2FsFe8o9FH2wBw1Avdfv16hpOPzQVivO%2FMYUvR0s5dGVZW6sztjDMEhaipqzUL0xKscy2SDQXimKzMfi%2FIG7sE4SqqKx60Yx%2BCBgovFZcii0Lyd22L1Eyw&X-Amz-Signature=22abbd1551a8a3c77889c72b46032ebfbc06d0022885e7bb162e4a76d645b78d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
