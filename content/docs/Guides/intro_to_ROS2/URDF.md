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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFBEQFQE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3%2FcLPtQn%2BgGIyP%2FgGPTKkiq3YdO5IeCKKSnmM1oOAVAiEAwWpD1%2B4HcXKMkEM5dVQ16VUhXGNpiCAQyAwGdynUAngq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKX%2B23ep1TWjRLM6YircA9uPoN%2FkA6g%2ByZUGb6ABvmJmQJOE7SLJGy2oDkHzQPTFOlxyOeZmjS7hxEbmvkowNrjgITpHZ3ifbgOG%2FUPNK2GorTIQ%2BeUyY5yPKoss15GusTWofE3eX8%2BJ7OLyUfgjbA7b9rwbiScpMBWAb2oWIWVYsXKfr2nChLK0ZtpoiElovHcxM5RZREg0gfg7xTI1gQRZRzb9dFlCVGAzGpncabEjd4NhKaELJRK2Y7t5ViqnpzDi1JiAu1ItqwCnaafqTxwGUr186lV%2FVwKpZUyGzlkW4%2FKuwL5MUgsbJMgbo9fX8oxYQJ4tr%2FK4l6Oq3GebWXwR9G1VSr7St%2Bw%2BbY9SdbY%2FYhZ1E73Kmago453ubQk%2BSRXZARUS4%2F%2FgYtLqHP%2B6kIPlesyG4oWIzN3Ik8mWgv4af5kMd5mqPSKcrxdCM72qxqdN3BAfnxh3kgEjXHT2WG%2F%2FnM8HzM9nvtisTlOVUWqx6QyYwMKh93dhKg%2BFkbWYluoYe01s4e1gkDusC396xhiwxPp6tknf%2Bdq4zN63vlVpcOa4MiQO82VwE%2FwrhBKq0tIDnvYZKPI4IoSnIaY%2FQX8OpJWCNzNGH%2FjgbER9Hy%2FzlPdAuCof%2F5ulHRVuUZkC5r4XKFNZlp0p9fwjMMafzb8GOqUBinoHtK3cjMk8hURHvx4dgr0%2BX5Cp5p4glJDrb4%2F0F5095XYIBgaU0%2Bab8XBFuUKckHpRuJ946QRP%2FSHn1kzBAWqg8p1cndLizJpcW9nTXhU8FPxQmfexL%2FmkKddvHEcT7sZqbookMxh4lJC%2F1JKwT4Yi%2BgXUf2AjB7l5hcebaSJvoR60UKvSOvqX3e8%2FZzPoVmE0sFKzWN7DyyHprKSUrU7txJxK&X-Amz-Signature=9dfb49a3bb56851fb9a42701e94706ca696a7444f8cec881351fbd87a7d0bd99&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFBEQFQE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3%2FcLPtQn%2BgGIyP%2FgGPTKkiq3YdO5IeCKKSnmM1oOAVAiEAwWpD1%2B4HcXKMkEM5dVQ16VUhXGNpiCAQyAwGdynUAngq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKX%2B23ep1TWjRLM6YircA9uPoN%2FkA6g%2ByZUGb6ABvmJmQJOE7SLJGy2oDkHzQPTFOlxyOeZmjS7hxEbmvkowNrjgITpHZ3ifbgOG%2FUPNK2GorTIQ%2BeUyY5yPKoss15GusTWofE3eX8%2BJ7OLyUfgjbA7b9rwbiScpMBWAb2oWIWVYsXKfr2nChLK0ZtpoiElovHcxM5RZREg0gfg7xTI1gQRZRzb9dFlCVGAzGpncabEjd4NhKaELJRK2Y7t5ViqnpzDi1JiAu1ItqwCnaafqTxwGUr186lV%2FVwKpZUyGzlkW4%2FKuwL5MUgsbJMgbo9fX8oxYQJ4tr%2FK4l6Oq3GebWXwR9G1VSr7St%2Bw%2BbY9SdbY%2FYhZ1E73Kmago453ubQk%2BSRXZARUS4%2F%2FgYtLqHP%2B6kIPlesyG4oWIzN3Ik8mWgv4af5kMd5mqPSKcrxdCM72qxqdN3BAfnxh3kgEjXHT2WG%2F%2FnM8HzM9nvtisTlOVUWqx6QyYwMKh93dhKg%2BFkbWYluoYe01s4e1gkDusC396xhiwxPp6tknf%2Bdq4zN63vlVpcOa4MiQO82VwE%2FwrhBKq0tIDnvYZKPI4IoSnIaY%2FQX8OpJWCNzNGH%2FjgbER9Hy%2FzlPdAuCof%2F5ulHRVuUZkC5r4XKFNZlp0p9fwjMMafzb8GOqUBinoHtK3cjMk8hURHvx4dgr0%2BX5Cp5p4glJDrb4%2F0F5095XYIBgaU0%2Bab8XBFuUKckHpRuJ946QRP%2FSHn1kzBAWqg8p1cndLizJpcW9nTXhU8FPxQmfexL%2FmkKddvHEcT7sZqbookMxh4lJC%2F1JKwT4Yi%2BgXUf2AjB7l5hcebaSJvoR60UKvSOvqX3e8%2FZzPoVmE0sFKzWN7DyyHprKSUrU7txJxK&X-Amz-Signature=026f37496bac93d8b31a0aef8c7a9149f3fb67611d8f051d88b899aaf120fa7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
