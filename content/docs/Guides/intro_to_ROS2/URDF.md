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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FRYEAE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErIhQF%2BoTiZY1Jgobca0ilTZFuCGoFhgTiysvTJzaeGAiBZmVJpV3100OOCW6ll2RYgmmzjOWBQMJtMgqVk%2FEBaHir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM6U%2BoiqaL61bxpg9nKtwDYnZTkpUWqjX7V1bXZvENWypQAbBvrSkWlBf%2B8UtyB9I7H9P%2BLX04fRQJkdzSVRJ72ZV9eiXHeXwePXF%2FKH1fKZOWKOK0Jvq5fkg7hJtOOQhz%2F84T3xUZU6F3Kd%2FvDrG2r84cnJhlYv6JsxkTJp6Ex947bNDovFzIwIOdABN0kqnIHHu1LptV7ei%2BCiZoDPbjeGrYkF4gTRWw84agnXkdou4EDnWOxKDhQ63TYBaA0fRJrWUkGqF6NIveFRbT9GN1K2OYkuGykxdKoogZaKdj3MU4wDXfWmCfN3Dp1QBbTwpKwvUpVUy1%2FZh32HKCN7sLJHh8muuX4IcKeF39ARXhwAvrEjV31N7gEkI4Vw3HGu%2FsICXkLkdCE8zsGtzk%2FjKrOI7i6JzsqdME1nzFOShQpmPu5xnR%2FBBGI4TCzra1tzsEpH0u%2FXbdPLZmD8MzxwLwe6Kpr9c4P6cvCdT5olU38%2Bkz%2FELuxxPtAivXEEPiKlcnil%2Fjl%2F7tXXefCN5l%2FCt379tWgEbbOVoGavohC3LgWZGFg603DI4qaan7jIg%2ByQztGHED80JNQaLCoRne%2FqtWcjCSHgqMt27Ze2lSf2%2BtV07mx82ZPDj5yV%2BjtlpsBGdLNp8tzwcQTFnfsPMw2ff6wgY6pgELHc4QlyVHqZ8Pxr75OqB6Z96fnT6eTwkxOsjWF0fgGEd3afJW7MDk0nuVDA3AssfITJa9LoW03jUX8C6hu4ZFIDpLJtH9DM0JNiPnWy2RXSSkfHLX%2B62NvGuN889z6oPHHowB6EFWpiF1DpWcj8tz90IJX5Kq19G8dd1ehF2rArlwOY3QqI950rMSq2H6aEwKv9DRT4pxn5SoJDQMwVjHz6t6RFZ6&X-Amz-Signature=59cc2a64c6d414e4e840b6147fe621e53f7cf2f5b1d1ec0ab6b0fc96da1f3528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FRYEAE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErIhQF%2BoTiZY1Jgobca0ilTZFuCGoFhgTiysvTJzaeGAiBZmVJpV3100OOCW6ll2RYgmmzjOWBQMJtMgqVk%2FEBaHir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM6U%2BoiqaL61bxpg9nKtwDYnZTkpUWqjX7V1bXZvENWypQAbBvrSkWlBf%2B8UtyB9I7H9P%2BLX04fRQJkdzSVRJ72ZV9eiXHeXwePXF%2FKH1fKZOWKOK0Jvq5fkg7hJtOOQhz%2F84T3xUZU6F3Kd%2FvDrG2r84cnJhlYv6JsxkTJp6Ex947bNDovFzIwIOdABN0kqnIHHu1LptV7ei%2BCiZoDPbjeGrYkF4gTRWw84agnXkdou4EDnWOxKDhQ63TYBaA0fRJrWUkGqF6NIveFRbT9GN1K2OYkuGykxdKoogZaKdj3MU4wDXfWmCfN3Dp1QBbTwpKwvUpVUy1%2FZh32HKCN7sLJHh8muuX4IcKeF39ARXhwAvrEjV31N7gEkI4Vw3HGu%2FsICXkLkdCE8zsGtzk%2FjKrOI7i6JzsqdME1nzFOShQpmPu5xnR%2FBBGI4TCzra1tzsEpH0u%2FXbdPLZmD8MzxwLwe6Kpr9c4P6cvCdT5olU38%2Bkz%2FELuxxPtAivXEEPiKlcnil%2Fjl%2F7tXXefCN5l%2FCt379tWgEbbOVoGavohC3LgWZGFg603DI4qaan7jIg%2ByQztGHED80JNQaLCoRne%2FqtWcjCSHgqMt27Ze2lSf2%2BtV07mx82ZPDj5yV%2BjtlpsBGdLNp8tzwcQTFnfsPMw2ff6wgY6pgELHc4QlyVHqZ8Pxr75OqB6Z96fnT6eTwkxOsjWF0fgGEd3afJW7MDk0nuVDA3AssfITJa9LoW03jUX8C6hu4ZFIDpLJtH9DM0JNiPnWy2RXSSkfHLX%2B62NvGuN889z6oPHHowB6EFWpiF1DpWcj8tz90IJX5Kq19G8dd1ehF2rArlwOY3QqI950rMSq2H6aEwKv9DRT4pxn5SoJDQMwVjHz6t6RFZ6&X-Amz-Signature=fdeb592dd67233b715cc958660753bf17c4daedf56b79ad232a9b86666ed9ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
