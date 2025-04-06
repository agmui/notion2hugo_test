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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT253Q4V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5fml5S97hy6xC52ix2YYjuII%2F5JKT65p7tWwhAQddbAiEAvMTrvTvx37Wk5iOR%2FyKyxfGmtxtPjWLfRI4fdvuOkLUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPc8rZFiTVqsgI5Y9CrcA3U6XDmlKxC5x%2BO5PflYqj4Duk5K%2B10ygYVb39OcD7%2B5PIHGXhbA99xLhntXebBP%2FlJ9FkpohI1%2FtQhtLGuO9HUKzknlraQkjXDJfRIKC1MKjpt1CK%2FulceDoZ5NhfC7We9Pd%2FZFEcO%2FfGI3L8MEhARHRR%2BJYYaPsFst0rDzukbZyH54zE2R9cxyIhJaHxPbDlfmhto%2FUvbf6MSqCpmVvyJxs8kZ221MIvpWgobtfgRsdkcuhsJ39pnxC3OuRM%2BljuCdk70qU8WhvscBWM5pRoSgyFCGSn2nvARCfnEw%2FH0va1tgN09cri2v6m5RpHhZVsFTMj3y7cDu%2Bx0kiKe3MjNBdl4pKfhf4KVp9w2X4Uips9DewMJmPJxrow9CR%2BN27Wm6CDo%2Bl9ThdAsLmgTdDRnCbYOm5IA5OYwU0%2Fw3Brswad9KI%2B76W%2FM0XGiL2cbia5KAXwQWn7nRzk260VlDdrEZ%2Bfq3ddbZhH2DtUqraaqWjpHm%2FQYTlfrlDkAEtYpdfMvjUpN%2FS6NwkUdFgjqUB%2BiR6n8n%2BFM1ybgg1I9GfY7GcCzXkinwjadkXqLRZxBMx%2B79xtB8FpGyuYjeaCZ16xeH84qZybcvcuW4I%2BKadXh5Ct44fjTu5u3FeMz6MJmey78GOqUBxSPPj2yD0EpQ3Xayr%2BUF0LL%2Feoer5oZKkpF%2F2YlRY2P4k8GDD5cdHqz2ARpFOh59AVOy5p0YFiCOUmQBIw4yTRSGJYYk34hryFYyiz8gc5HtevrOR36oaL0%2FlHTNes1jZsKvvu21NFZUWLAOig5N25%2FR25FN1ow3qA%2BGcHGYzo7jcizhYKX05RnKeEbRfcPTBhGPWs%2Fdi08JBjSl7CYQnCinV9j9&X-Amz-Signature=f03d55d2b0132fc20b0fc4c680ed88ea121c32d27e0d6d03b15b9f6e9acef765&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT253Q4V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5fml5S97hy6xC52ix2YYjuII%2F5JKT65p7tWwhAQddbAiEAvMTrvTvx37Wk5iOR%2FyKyxfGmtxtPjWLfRI4fdvuOkLUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPc8rZFiTVqsgI5Y9CrcA3U6XDmlKxC5x%2BO5PflYqj4Duk5K%2B10ygYVb39OcD7%2B5PIHGXhbA99xLhntXebBP%2FlJ9FkpohI1%2FtQhtLGuO9HUKzknlraQkjXDJfRIKC1MKjpt1CK%2FulceDoZ5NhfC7We9Pd%2FZFEcO%2FfGI3L8MEhARHRR%2BJYYaPsFst0rDzukbZyH54zE2R9cxyIhJaHxPbDlfmhto%2FUvbf6MSqCpmVvyJxs8kZ221MIvpWgobtfgRsdkcuhsJ39pnxC3OuRM%2BljuCdk70qU8WhvscBWM5pRoSgyFCGSn2nvARCfnEw%2FH0va1tgN09cri2v6m5RpHhZVsFTMj3y7cDu%2Bx0kiKe3MjNBdl4pKfhf4KVp9w2X4Uips9DewMJmPJxrow9CR%2BN27Wm6CDo%2Bl9ThdAsLmgTdDRnCbYOm5IA5OYwU0%2Fw3Brswad9KI%2B76W%2FM0XGiL2cbia5KAXwQWn7nRzk260VlDdrEZ%2Bfq3ddbZhH2DtUqraaqWjpHm%2FQYTlfrlDkAEtYpdfMvjUpN%2FS6NwkUdFgjqUB%2BiR6n8n%2BFM1ybgg1I9GfY7GcCzXkinwjadkXqLRZxBMx%2B79xtB8FpGyuYjeaCZ16xeH84qZybcvcuW4I%2BKadXh5Ct44fjTu5u3FeMz6MJmey78GOqUBxSPPj2yD0EpQ3Xayr%2BUF0LL%2Feoer5oZKkpF%2F2YlRY2P4k8GDD5cdHqz2ARpFOh59AVOy5p0YFiCOUmQBIw4yTRSGJYYk34hryFYyiz8gc5HtevrOR36oaL0%2FlHTNes1jZsKvvu21NFZUWLAOig5N25%2FR25FN1ow3qA%2BGcHGYzo7jcizhYKX05RnKeEbRfcPTBhGPWs%2Fdi08JBjSl7CYQnCinV9j9&X-Amz-Signature=8c8424b1fc04cd6bf32b2e16135a84585c55d2fe5e6dc2bb79515466bc99c3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
