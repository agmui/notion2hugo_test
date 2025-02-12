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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65OPEGJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHYF2Uf4S57KdpsaWkZKHE%2B1aD30zjaSv4kDAD%2BQiwCAiBPlKPRmnuIxXHSnMYu%2FRGhRJ1pMW63%2B0wUQGBU4wtvSiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi1bCHKurWVhL9skcKtwD6GRagClgrs1wmYs75tu748hP3BnU%2FNHsCc3h450D2zb9Tq6ow5f2PFi4GhFmcgy914Wzsr0j6OdViZLnDCyjYQTVZ4pYsyIo%2BKhVcNXSlNmOwqVvoNRSoiWyNy%2FX558ZjCH2IQxhmEvytrMjt6v4wzDBNeAnjcXecCPbvkVa71bHKALqO2JzeZeP9vlhyNPBG%2BIMF%2Fj04uqCNqtisZgu2CqM42WQEvuhNy67uxMBBmpG2TkFpiSXy0MQzRsK5mzFBbRAN3tAqLqrR%2BG5kjPmuVrw%2B2juO%2BVIHrB74fxUTO82Uw%2FKLsv0yEXhsdKDkiPu6poK72p0z0CGDn0XGXRcMq0UeyS3p184Uyg158VOqfB2ayIGQPnSwx0MI5QTFUB27%2ByZ%2BDJHbLcCxjWojg%2BfUkLrG75waSJ%2Fu%2F9R3TgIIUvGu6rDQJYSH2GrnzKAIUhtnS3p94fVxmpeVEDo4iA9khSIuzRydKX6d7f2ej1rY6Gu5KKrBKVeHgKlJlrQsUckBRYJ0ZdIN4v4deuXvf86PDtdEX0DlwdwTlj2m%2Fgmba5sI1opxni6GSG0yZSc1wNDXsWN1ZMrhZXpSydbisgst7jifcfYYZFAddkcG8ifM27ClQdrd5ZYX0tgcIMw7MiuvQY6pgERLPAILGJrkrHe082axYE081xlEH%2BIiLnYYOe3hx2P%2Fs4xkcyGkbcqpaPDS5Dj8fOJf3n98G4z2xD29uZyAJlj5non58alwIOHuE0au2IBJHwFtp2E%2F0ehvT1gsqRPjqOESuxjBD8ZIMuANMAXhpBJ4XPfkmZ8hoAu5%2FOYslSn02KRHWYpQ17Xja%2FkLZ1Bw4np117jo1s3lFAWqOT9nD32a6FekPJk&X-Amz-Signature=6061232ace7b59ffa2707d42e8e824ade9a882b6a92780dd4ee4d80bef3723b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65OPEGJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHYF2Uf4S57KdpsaWkZKHE%2B1aD30zjaSv4kDAD%2BQiwCAiBPlKPRmnuIxXHSnMYu%2FRGhRJ1pMW63%2B0wUQGBU4wtvSiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi1bCHKurWVhL9skcKtwD6GRagClgrs1wmYs75tu748hP3BnU%2FNHsCc3h450D2zb9Tq6ow5f2PFi4GhFmcgy914Wzsr0j6OdViZLnDCyjYQTVZ4pYsyIo%2BKhVcNXSlNmOwqVvoNRSoiWyNy%2FX558ZjCH2IQxhmEvytrMjt6v4wzDBNeAnjcXecCPbvkVa71bHKALqO2JzeZeP9vlhyNPBG%2BIMF%2Fj04uqCNqtisZgu2CqM42WQEvuhNy67uxMBBmpG2TkFpiSXy0MQzRsK5mzFBbRAN3tAqLqrR%2BG5kjPmuVrw%2B2juO%2BVIHrB74fxUTO82Uw%2FKLsv0yEXhsdKDkiPu6poK72p0z0CGDn0XGXRcMq0UeyS3p184Uyg158VOqfB2ayIGQPnSwx0MI5QTFUB27%2ByZ%2BDJHbLcCxjWojg%2BfUkLrG75waSJ%2Fu%2F9R3TgIIUvGu6rDQJYSH2GrnzKAIUhtnS3p94fVxmpeVEDo4iA9khSIuzRydKX6d7f2ej1rY6Gu5KKrBKVeHgKlJlrQsUckBRYJ0ZdIN4v4deuXvf86PDtdEX0DlwdwTlj2m%2Fgmba5sI1opxni6GSG0yZSc1wNDXsWN1ZMrhZXpSydbisgst7jifcfYYZFAddkcG8ifM27ClQdrd5ZYX0tgcIMw7MiuvQY6pgERLPAILGJrkrHe082axYE081xlEH%2BIiLnYYOe3hx2P%2Fs4xkcyGkbcqpaPDS5Dj8fOJf3n98G4z2xD29uZyAJlj5non58alwIOHuE0au2IBJHwFtp2E%2F0ehvT1gsqRPjqOESuxjBD8ZIMuANMAXhpBJ4XPfkmZ8hoAu5%2FOYslSn02KRHWYpQ17Xja%2FkLZ1Bw4np117jo1s3lFAWqOT9nD32a6FekPJk&X-Amz-Signature=23381497fbebd975c2d3bd07945c2dbc01d0131db57a170fa973f121e9cf19a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
