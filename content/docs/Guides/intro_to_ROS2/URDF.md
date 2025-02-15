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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPSXGRE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCecAeygGLqz3mlo8llhxQxnX%2FMKrG0AD%2BUzFCa7XeGjgIhANylosEIJ%2FVk32pa78wwH%2FY1MdjYkMs29neTbP7cyDxaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzSr5BpGUpDt3f5jHwq3AN3UTaskG8qZMA9Y9FnIrQaHhUcrsIqBq%2FWAqxozoX1EG%2BR1Uk4ofgFBL9dJxYkEQIt0pYUHQv%2BuTSXUQAQUxJactELwcC4KMrv6lzYiZjBuLI3vL1zA5ptDymhaNqDv%2Fyc91QB1ga3x89jJbGOZoHMbBZu0wSRovCRgTJACiHYhl%2BAAt5cTRNjz9fX7SR4ZfvV2ZtiWLnf6%2BRVJJ6Le1Btl3suHyn2%2BB1Vpd8zFg6piU1uD2OhNzSBCvdfgBzhTU%2BDE1dtof6SNpi7%2BOm6bQdGzCyTckeEYtPrnxJvy5GUi22Lp0eHki1gqYm4%2BseLsklEnLyyXk%2B%2Blmi77x1eAVjJmk%2FXVffvLOX6TtCxSoEXScnexSD8Tcpyxg%2BZkrjpJpflnyDEBK9syLEkwl1GJkbu8p9%2F%2FOptSX4W0aPuRoC9I%2BooQPj9ePKQwgiBSXA1OAFldijylswpHaenPgNhy9WS81yUNFDbtuCnRaDAjStheeIxlSkFWAGtN%2FGjUM1dlQLUjhJb5aiyg0rULm5XkZjozpgrn3ZVQ%2BZ7uKHCc1PHAS9OA%2B24ujsCCGGb1d4aNR9f9ql0cewqGyjR%2B06MreB20hhk52wdT%2BZp9EkNAOYSs0yB94gUovZuEifOXzDyhMG9BjqkAZOVj7htZ60wqb4YHDUBmxqCceX%2Fy%2FHeYUlV0AgFa%2Bx8C8ufaudDt7EjM54QIiND%2FyqFTzgunPj8mBtGoAnN3drPag3Xd9DOYGmO39xib282pZDbMcxYVV%2B28R5qslBwi320By5P2hV1ZnsprCUgPe7nrUrhg3nXJhmybpzu2GNQOo47%2FkvxeFt6D6OGgvb8RR357XWFbsP69%2F%2FCV4mc2NpU2CGy&X-Amz-Signature=715250342d1a19707ee99e7298b2499e9099e7c9c130a1597c088a94178c2110&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPSXGRE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCecAeygGLqz3mlo8llhxQxnX%2FMKrG0AD%2BUzFCa7XeGjgIhANylosEIJ%2FVk32pa78wwH%2FY1MdjYkMs29neTbP7cyDxaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzSr5BpGUpDt3f5jHwq3AN3UTaskG8qZMA9Y9FnIrQaHhUcrsIqBq%2FWAqxozoX1EG%2BR1Uk4ofgFBL9dJxYkEQIt0pYUHQv%2BuTSXUQAQUxJactELwcC4KMrv6lzYiZjBuLI3vL1zA5ptDymhaNqDv%2Fyc91QB1ga3x89jJbGOZoHMbBZu0wSRovCRgTJACiHYhl%2BAAt5cTRNjz9fX7SR4ZfvV2ZtiWLnf6%2BRVJJ6Le1Btl3suHyn2%2BB1Vpd8zFg6piU1uD2OhNzSBCvdfgBzhTU%2BDE1dtof6SNpi7%2BOm6bQdGzCyTckeEYtPrnxJvy5GUi22Lp0eHki1gqYm4%2BseLsklEnLyyXk%2B%2Blmi77x1eAVjJmk%2FXVffvLOX6TtCxSoEXScnexSD8Tcpyxg%2BZkrjpJpflnyDEBK9syLEkwl1GJkbu8p9%2F%2FOptSX4W0aPuRoC9I%2BooQPj9ePKQwgiBSXA1OAFldijylswpHaenPgNhy9WS81yUNFDbtuCnRaDAjStheeIxlSkFWAGtN%2FGjUM1dlQLUjhJb5aiyg0rULm5XkZjozpgrn3ZVQ%2BZ7uKHCc1PHAS9OA%2B24ujsCCGGb1d4aNR9f9ql0cewqGyjR%2B06MreB20hhk52wdT%2BZp9EkNAOYSs0yB94gUovZuEifOXzDyhMG9BjqkAZOVj7htZ60wqb4YHDUBmxqCceX%2Fy%2FHeYUlV0AgFa%2Bx8C8ufaudDt7EjM54QIiND%2FyqFTzgunPj8mBtGoAnN3drPag3Xd9DOYGmO39xib282pZDbMcxYVV%2B28R5qslBwi320By5P2hV1ZnsprCUgPe7nrUrhg3nXJhmybpzu2GNQOo47%2FkvxeFt6D6OGgvb8RR357XWFbsP69%2F%2FCV4mc2NpU2CGy&X-Amz-Signature=394d0e744213c58c50a83fa27eff5f99649647b35b17f4d3a6d15df35ae8301a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
