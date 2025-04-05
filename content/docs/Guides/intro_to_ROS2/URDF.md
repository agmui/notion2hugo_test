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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJ3HXQN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDFbBd9jUdTTuPDELI9vy%2FXR8zRiC6KRcdM%2FU49WV25gIhAM4%2BmjLNnvxloEmI9LppO6spkIfvCjhSyJmJ3BFVvA9GKv8DCCoQABoMNjM3NDIzMTgzODA1IgzpmFCpHG8vEGK0yLwq3ANtsCIdOvPQVulFGdfm0p%2Bo5N0yT7FaktUOYa3ud17rxlmplMh7KFMomtqaB07zjL5QH9QbNlTIUeKQ8xDF3Yt6TTLbOdJogHu6f8EM0n9QqqUjiLNux25OJqAjh05byEuJ1zag6%2BA5IQcVj4tv9kBRvXEe6lW7xI2RZYrMvFmmIDcLd8gTmdJ29fnrNDE3BcYcQ%2FJy56JgU2ePEnLst6Eugcb6f8NBw1C7ntfvSiVou8uZgrgybjEjc0tl87TlzIfNQAXjc58LMqou%2FjsfpuGrKlbxzpk3nXraT1h4IYMUQnKIS88op7js436rYMjUUQIUglkg1qk%2FD8ssfXCHtveitalfhsvsYfBAt8Ymjsqj0i3ssYW4nAlhIGscC5frGC98WUOYEuw%2BbQkSViHwX6lU1ZlOwq5%2BJgKCWCauFr45WLO1VsV6uFwCqyVZm1IwC6MECYxPrtBxQwkMS5b59T%2FUCAAfNbLXC0PQJIiwNly2tLCa84u4IOv6pWclI63s5QaNLU406PpbjBu3dYMg1YJVPK65F3UeGUzK5lD7KIxad5ECuoEedS4a3Oyrf4rRo%2F3mB5lklcJkb63I%2BZM4rItu3mOdjMlAtQZhZysLJJEyz8h77938VLQTyW7kBDD35MO%2FBjqkAZVLAro%2F2dTQC3UaUPIdVgPHfGIjX4KRVjbsdoqccbBqEkp9%2FfhrUQ353z5QdlNRIBWYx6Ekk9QGXkBZu70n69GUbz9a8CPRswGgnoiiY%2Bk1W%2BzNWrWeeFbnRrXMFP68UGTpKrnFK119dRPzmVitNJLim413pyOhRVPxufeiDgGv25UwAmkxy9nxse95nmR7rVBueom3PYvA9gxbvene0XpsTRqp&X-Amz-Signature=6f4cffd2d1b63a4b97513facff2ab67d773544424d2798a298fc35061209b202&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJ3HXQN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDFbBd9jUdTTuPDELI9vy%2FXR8zRiC6KRcdM%2FU49WV25gIhAM4%2BmjLNnvxloEmI9LppO6spkIfvCjhSyJmJ3BFVvA9GKv8DCCoQABoMNjM3NDIzMTgzODA1IgzpmFCpHG8vEGK0yLwq3ANtsCIdOvPQVulFGdfm0p%2Bo5N0yT7FaktUOYa3ud17rxlmplMh7KFMomtqaB07zjL5QH9QbNlTIUeKQ8xDF3Yt6TTLbOdJogHu6f8EM0n9QqqUjiLNux25OJqAjh05byEuJ1zag6%2BA5IQcVj4tv9kBRvXEe6lW7xI2RZYrMvFmmIDcLd8gTmdJ29fnrNDE3BcYcQ%2FJy56JgU2ePEnLst6Eugcb6f8NBw1C7ntfvSiVou8uZgrgybjEjc0tl87TlzIfNQAXjc58LMqou%2FjsfpuGrKlbxzpk3nXraT1h4IYMUQnKIS88op7js436rYMjUUQIUglkg1qk%2FD8ssfXCHtveitalfhsvsYfBAt8Ymjsqj0i3ssYW4nAlhIGscC5frGC98WUOYEuw%2BbQkSViHwX6lU1ZlOwq5%2BJgKCWCauFr45WLO1VsV6uFwCqyVZm1IwC6MECYxPrtBxQwkMS5b59T%2FUCAAfNbLXC0PQJIiwNly2tLCa84u4IOv6pWclI63s5QaNLU406PpbjBu3dYMg1YJVPK65F3UeGUzK5lD7KIxad5ECuoEedS4a3Oyrf4rRo%2F3mB5lklcJkb63I%2BZM4rItu3mOdjMlAtQZhZysLJJEyz8h77938VLQTyW7kBDD35MO%2FBjqkAZVLAro%2F2dTQC3UaUPIdVgPHfGIjX4KRVjbsdoqccbBqEkp9%2FfhrUQ353z5QdlNRIBWYx6Ekk9QGXkBZu70n69GUbz9a8CPRswGgnoiiY%2Bk1W%2BzNWrWeeFbnRrXMFP68UGTpKrnFK119dRPzmVitNJLim413pyOhRVPxufeiDgGv25UwAmkxy9nxse95nmR7rVBueom3PYvA9gxbvene0XpsTRqp&X-Amz-Signature=43019b346d86d47b6256818fb96f5640c7bf0ee98421cc2987398c790097f104&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
