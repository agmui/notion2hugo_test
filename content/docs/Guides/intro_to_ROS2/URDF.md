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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVUAW5M%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9oBjd8MPfaV6PkJiXVsxPCLoA16i3%2BLVlQiKwVCpQ5AiEA%2Fd15z9AweddOpVQxfTGmFi9vlJ7WkiXtM3Nr6PwHAdUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDR%2BBXTr%2Byhx4y%2BtCrcA8I3n9%2B5Poyu0yWm6AqF3d8SM%2FFZ09G7KajX4os1U%2F7vmFfzswMJ46FH44c66Me0MJH8VSziLfNQTvN%2Br3Zz2cHATcMr2enl0UV0u%2Fk7Zjt6Hq61KvqZJN7bZAk8WCFiTZHCzo8EhO%2FSgXiI46mTffetD8797%2BO6%2F79rqHqhlHMpTsBVc%2Fxg5%2BggK2ECxsQMowJmD8ZRdPF%2FABdnMiS02ALoKQOAjkUCMUALvwA1akV9Hc9Fy%2BMb2%2BRL0gq%2B3Gs2NYQ1n71d1r0Z63yQGcBLmc2d%2F1vZisk95nHi5%2BGFO1YI8DCWcOom7CoZXtu%2BqoMuPYNBOKxea2aleJb8iTb9U6zjaewYXRaBASgEapeVhR1qnNTcUWuR1zjrqN5yG3xdYU%2B1G3gKGEqNUzJxYnOCqQKiNWDtDu%2B4jHPicsYZ8RgjZ5HhOy4QApI%2BSaKJ1UUQWRmLUVaepc3ePiJhAb6Nf0z0e7Gd1ibs0IWLp6gjE8Xu6G6QtKpcoVX1nYx%2Bd7vGwfXp35Bx3f%2FVmJoUHb8gsDOODpKQVKMMnE9S2z8mLgKF2KTee6i6YXpgIvlzHp%2BBXrv5lvayAlU%2BYhGMjhdiVfNshuv%2BirSOGL8tXfjb%2B%2FXHEetoiK0MjAM5m%2BIYMJ3278MGOqUBuM1iaX8cAJOtR5XDEWFe5t4cr40Bcgw6Mn9%2B9JcJW67x%2BldAs7jd7zIOUN1%2BQlI3He%2FxH5UFZX%2FykefIROC4vhqCQCjQPgYrjvMc0Sb5D2QtltMOeCfxh7HWFCr0kjxAB2WAA3DZFe8rUpqFmhdxzABaUGts9bcARzrIC0WWQyBsk5SJpDbNdm9hvnzDSz7kcX3E7M2mYwe8OWuBxBcPlQbLu1W0&X-Amz-Signature=25d6c39f9bc49688a3054c9237d1a7c125d8e4d54000b8fa1d753bb0d3bf1747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVUAW5M%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9oBjd8MPfaV6PkJiXVsxPCLoA16i3%2BLVlQiKwVCpQ5AiEA%2Fd15z9AweddOpVQxfTGmFi9vlJ7WkiXtM3Nr6PwHAdUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDR%2BBXTr%2Byhx4y%2BtCrcA8I3n9%2B5Poyu0yWm6AqF3d8SM%2FFZ09G7KajX4os1U%2F7vmFfzswMJ46FH44c66Me0MJH8VSziLfNQTvN%2Br3Zz2cHATcMr2enl0UV0u%2Fk7Zjt6Hq61KvqZJN7bZAk8WCFiTZHCzo8EhO%2FSgXiI46mTffetD8797%2BO6%2F79rqHqhlHMpTsBVc%2Fxg5%2BggK2ECxsQMowJmD8ZRdPF%2FABdnMiS02ALoKQOAjkUCMUALvwA1akV9Hc9Fy%2BMb2%2BRL0gq%2B3Gs2NYQ1n71d1r0Z63yQGcBLmc2d%2F1vZisk95nHi5%2BGFO1YI8DCWcOom7CoZXtu%2BqoMuPYNBOKxea2aleJb8iTb9U6zjaewYXRaBASgEapeVhR1qnNTcUWuR1zjrqN5yG3xdYU%2B1G3gKGEqNUzJxYnOCqQKiNWDtDu%2B4jHPicsYZ8RgjZ5HhOy4QApI%2BSaKJ1UUQWRmLUVaepc3ePiJhAb6Nf0z0e7Gd1ibs0IWLp6gjE8Xu6G6QtKpcoVX1nYx%2Bd7vGwfXp35Bx3f%2FVmJoUHb8gsDOODpKQVKMMnE9S2z8mLgKF2KTee6i6YXpgIvlzHp%2BBXrv5lvayAlU%2BYhGMjhdiVfNshuv%2BirSOGL8tXfjb%2B%2FXHEetoiK0MjAM5m%2BIYMJ3278MGOqUBuM1iaX8cAJOtR5XDEWFe5t4cr40Bcgw6Mn9%2B9JcJW67x%2BldAs7jd7zIOUN1%2BQlI3He%2FxH5UFZX%2FykefIROC4vhqCQCjQPgYrjvMc0Sb5D2QtltMOeCfxh7HWFCr0kjxAB2WAA3DZFe8rUpqFmhdxzABaUGts9bcARzrIC0WWQyBsk5SJpDbNdm9hvnzDSz7kcX3E7M2mYwe8OWuBxBcPlQbLu1W0&X-Amz-Signature=d037b795061c46e7e26936f4392ffd7fea6e2d321d8bf3c976a884a6bddab533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
