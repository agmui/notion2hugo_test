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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXRRAML%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDF3oLUsxPiyErTumIQqIa2XZlETzC%2Be44EtpjwG5z%2FLQIhAP2SGm45yWPkGw9nSy2f07KGuM4%2FYXVrJqbUXkexKnGCKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfVdgK8ppJLDBib0Iq3ANPyrIOoSXVEFFlDUut6UwjERmJj%2FS57%2BOQOOLsdqL%2BYUUzljWHvrgzuwfUOwRdaiO6ybqOjkclE7mnJY4TYTBo%2Bfllz6LK9ilrdc87u1YicloduZJCN8yiY807Vex%2FOHCING5iJxbIPnIF6bFJgWXRulYoNAw3VbiK0Mq6m1yvUJqJQmmt%2ByqVutN9BpAJgjd%2FT7Z6UMjvSrzAVwGxjoulO1Ju%2FYWX2uKRZt0%2BsCyl4qOWIqNNdZzfYbezEp%2FdlvgXVq8%2FVplwrxQAcWFWRddqRYIwbyGwnPeoxM8BYhZ6sf5yilgSyA44Tq2pxqvipQnZ9uHfd5yWu4mcwIWM8qGuWa2BLJPTtb4biyGJ8tIcmvm2bQUbAa%2BIT4qoq2%2BNZmdr7kwIHeOaAfyqJVQiBzrOTcKw8%2FztNROrWlIG4MHZDXbgLFCkiae13G4viojaMnTMhZ1kRMT9yVx4CzdsNjpaHk4CjJW5Hqb8R%2FlmPPvSwoaFJ%2FbSxyJ8pzFsosvw6d7TyR0Tnn6RrCYVcshfaq8CC0q3nBiAJbMYlfBw%2FQF7BApmorClu2VIGhCWWKlXfjBw1uSNE%2BgVCdC9SWY1zV%2B%2BSnP6ENFup%2F9P%2BuHK4Khepqo%2BuQeA9qQhWR%2B5fjCkp%2Bi%2FBjqkAZIG5HfAtCRdr%2BzYZKXIWK4VYGYnSTU4VYu16Zkm%2BovWhS0f2QItgEx4pXcswaEet2BOpNs%2FVhqdzNJkO3JKMIP%2FcudMDw2NH5o799F%2FXWu3VylBjEENwur6S%2FTvXM7mzmp3Ypkf4Ph%2BprXoRFPQayc%2F7z3zyxdjl8MDGGcoFKkk0rrd%2FXTh1T%2BA3QN18%2BjV%2FFnHdX6OC8upuOIZ19DPHDLraB%2FZ&X-Amz-Signature=625a7923c32d392b89adf45c167908b39c1cfa968faea371d0f61756e8396b43&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXRRAML%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDF3oLUsxPiyErTumIQqIa2XZlETzC%2Be44EtpjwG5z%2FLQIhAP2SGm45yWPkGw9nSy2f07KGuM4%2FYXVrJqbUXkexKnGCKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfVdgK8ppJLDBib0Iq3ANPyrIOoSXVEFFlDUut6UwjERmJj%2FS57%2BOQOOLsdqL%2BYUUzljWHvrgzuwfUOwRdaiO6ybqOjkclE7mnJY4TYTBo%2Bfllz6LK9ilrdc87u1YicloduZJCN8yiY807Vex%2FOHCING5iJxbIPnIF6bFJgWXRulYoNAw3VbiK0Mq6m1yvUJqJQmmt%2ByqVutN9BpAJgjd%2FT7Z6UMjvSrzAVwGxjoulO1Ju%2FYWX2uKRZt0%2BsCyl4qOWIqNNdZzfYbezEp%2FdlvgXVq8%2FVplwrxQAcWFWRddqRYIwbyGwnPeoxM8BYhZ6sf5yilgSyA44Tq2pxqvipQnZ9uHfd5yWu4mcwIWM8qGuWa2BLJPTtb4biyGJ8tIcmvm2bQUbAa%2BIT4qoq2%2BNZmdr7kwIHeOaAfyqJVQiBzrOTcKw8%2FztNROrWlIG4MHZDXbgLFCkiae13G4viojaMnTMhZ1kRMT9yVx4CzdsNjpaHk4CjJW5Hqb8R%2FlmPPvSwoaFJ%2FbSxyJ8pzFsosvw6d7TyR0Tnn6RrCYVcshfaq8CC0q3nBiAJbMYlfBw%2FQF7BApmorClu2VIGhCWWKlXfjBw1uSNE%2BgVCdC9SWY1zV%2B%2BSnP6ENFup%2F9P%2BuHK4Khepqo%2BuQeA9qQhWR%2B5fjCkp%2Bi%2FBjqkAZIG5HfAtCRdr%2BzYZKXIWK4VYGYnSTU4VYu16Zkm%2BovWhS0f2QItgEx4pXcswaEet2BOpNs%2FVhqdzNJkO3JKMIP%2FcudMDw2NH5o799F%2FXWu3VylBjEENwur6S%2FTvXM7mzmp3Ypkf4Ph%2BprXoRFPQayc%2F7z3zyxdjl8MDGGcoFKkk0rrd%2FXTh1T%2BA3QN18%2BjV%2FFnHdX6OC8upuOIZ19DPHDLraB%2FZ&X-Amz-Signature=88ce1001bce06d625edf06f1465e90caa45076fcbc79a1bf56242efbab4d173c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
