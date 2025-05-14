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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVPZCG2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC85%2FzzVCGER5aSyi8XZojskrBAn%2BXTG7NC0wV85sflxAIhAKZDTOUHPx1gqaPoklj1i7l%2Bn1C6VkYjhWQ5YJVWGSzuKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBU30oHEAzMwF%2FKOwq3AN0Y7K305%2B3DwDqkKv47VlFetvqrsPPHEx9oUy3VR%2B154hA6zrPhK7faWXDOstpn4P2vKAdJK1M9N9znSv%2FNxYzhS94%2FAhfrcfMiya9r7Bz1Njs5Kdx6ZjH93mxYddX1ff68snKVlgVNcayS38A2Ge79KOGCC%2BuSDRrcTG%2BUpWE1%2FCwAKW6czMiTL8o%2Bjx%2B161XGGi1MsnZGHinldIXuKN0eH5I%2FS%2FCIwibhGrYHA5Ht5NhjFHjxpDrBvp1Aii9Jx6n01CvUEXhlWtIOOSb14VlHGmHpb1VLter1ZM4RDF4dsPQYyNomPM%2FbGSk6W%2BOP6tWHRqu1xeYFxjkKbYwsEy8ijWxHaU4Svwxc%2FWTun0saPcefvHz4NffsMEJPDrKXXxroImam%2F6nItOEWuFB7TsBCl%2FxQOsupz5WcKAAYhNYDtYFcIwVX%2FbCt7ii41BxBMg0IfEdeiI%2FQ6gv4sru4VpfLfHNUVKAWwn3Pd3%2BYsNRtLZcEsmSlQed1xj80LT0B9Qz1wR9SOsNtTaH3lEMSUaxVZ8z5JO3XW7DUhym68HQMjHFxlS%2FkJzVSJvD5bEW0knXVdVdo6GYz6qMNO7J4fVXBsHer8afCPGZJN7Wc2s1%2B9G0cEcAVZjznlEZGTC274%2FBBjqkAQaVIT4ZSiPLHBKUmqYsLU3mJVVnQg%2FFdEo2Tf1XtZoqnwLrkcmlpy54qov7D5BLsv1n51uV64uwr3prZ%2FdoYVGKqyYXx%2FoIxa6wBUx9gdL%2BOQGhZ2A%2FsFN8%2FZGWGVlCEfqL6zjiNiFcJlFul8iJ1zl%2FgyoyBp6LkTiXTvqq2XunNv6sDCjCSzzfjKmrc3ME5qlHNixSMJIxsJTh15tUx2eOVmb%2B&X-Amz-Signature=ec113700b14f00360104388872e6562fa0ed312f7a6e2ba62800b4adf583ab7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXVPZCG2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC85%2FzzVCGER5aSyi8XZojskrBAn%2BXTG7NC0wV85sflxAIhAKZDTOUHPx1gqaPoklj1i7l%2Bn1C6VkYjhWQ5YJVWGSzuKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBU30oHEAzMwF%2FKOwq3AN0Y7K305%2B3DwDqkKv47VlFetvqrsPPHEx9oUy3VR%2B154hA6zrPhK7faWXDOstpn4P2vKAdJK1M9N9znSv%2FNxYzhS94%2FAhfrcfMiya9r7Bz1Njs5Kdx6ZjH93mxYddX1ff68snKVlgVNcayS38A2Ge79KOGCC%2BuSDRrcTG%2BUpWE1%2FCwAKW6czMiTL8o%2Bjx%2B161XGGi1MsnZGHinldIXuKN0eH5I%2FS%2FCIwibhGrYHA5Ht5NhjFHjxpDrBvp1Aii9Jx6n01CvUEXhlWtIOOSb14VlHGmHpb1VLter1ZM4RDF4dsPQYyNomPM%2FbGSk6W%2BOP6tWHRqu1xeYFxjkKbYwsEy8ijWxHaU4Svwxc%2FWTun0saPcefvHz4NffsMEJPDrKXXxroImam%2F6nItOEWuFB7TsBCl%2FxQOsupz5WcKAAYhNYDtYFcIwVX%2FbCt7ii41BxBMg0IfEdeiI%2FQ6gv4sru4VpfLfHNUVKAWwn3Pd3%2BYsNRtLZcEsmSlQed1xj80LT0B9Qz1wR9SOsNtTaH3lEMSUaxVZ8z5JO3XW7DUhym68HQMjHFxlS%2FkJzVSJvD5bEW0knXVdVdo6GYz6qMNO7J4fVXBsHer8afCPGZJN7Wc2s1%2B9G0cEcAVZjznlEZGTC274%2FBBjqkAQaVIT4ZSiPLHBKUmqYsLU3mJVVnQg%2FFdEo2Tf1XtZoqnwLrkcmlpy54qov7D5BLsv1n51uV64uwr3prZ%2FdoYVGKqyYXx%2FoIxa6wBUx9gdL%2BOQGhZ2A%2FsFN8%2FZGWGVlCEfqL6zjiNiFcJlFul8iJ1zl%2FgyoyBp6LkTiXTvqq2XunNv6sDCjCSzzfjKmrc3ME5qlHNixSMJIxsJTh15tUx2eOVmb%2B&X-Amz-Signature=32ae44802b25cd9d81e848554642dad9fb777ed7683358e28fae25ca7466a835&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
