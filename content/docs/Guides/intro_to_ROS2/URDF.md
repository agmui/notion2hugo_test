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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKCVBDO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7YtsRS09piqUFc6F%2F3M0sjQzM4%2B57dZM82NpvvUPycgIgMIhQWgBJ3oTclLY3NCBdzYEd5uCAoSGbd1HQ07ZvblAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEMSKL%2BQ0dwlorAuCrcAzCqQd4Jg%2Bw7XAK6ibWNeLlkVTQ0lFrCjqb%2FYK0H8kmhxsRQ307Fddyc78q%2BiP4mt3cDcEcFKHGyJjxlxftmKsFHb4WHkdJGf2WjivPJ4wQyKPfuh5PqNr3gVbX0flZmsic80ALP3TZni1%2FmR%2FuKiTBoaowSOSorX9xaF7SyCJ5FzJqSAVu%2B2vlb6hXSCFrOzfjZKCTvHKdx9pfLDYLapfTjbgR8eYrwsCta6dMQrrT4kQhTna2Jw5p1SK63HHJ3iqvdvW1VRpRNuCA%2BMGf4bm38PgOXa%2BCBugHW5ehfYTNfyiccsXR7uAuZztBZpBx8IahRJbXhAsCw%2B2KFiL%2Be%2FXRy2PiF7rCclFeubr6RyaYPhkHokQli8HeDLAgepP2BcfZLUTGN6FlO6GfsCEyZJsl86%2BThQg4mY9%2BdVb1anHEsIGWfXeZHuDDqafbOdVzsae7QpyytPBl%2BJQmZabINBWb698jOMYvXiRecvrrl8Smosk962iwAtohCjGE6UDF%2FlKoEb5YLgvmHNFrrFyEQe6wC1SqC68WgDZe9D7pb513PxTVvIXt2gNR7y%2BdWEbM7KVcgd8jP6g1T54mT3q0CydRkN2QG0xDKhSqr1b1aBOG24G6SbKUoGM8q%2FnoVMOvkr70GOqUBxpL5Cp4ghYYpLWSF4yM01Anf5MisAhI7ZoVBAlnpwTTPa1rT9%2Btiip%2FZuHykv%2FqTRFBZNkURyAI78x7YstpCOOITrj6OaGMMy6adEYrmFBjo1AKADdcYiaCzcv%2BeTJHJBh7WrZQw0yWf0ITLlR%2B4VhTN2w4%2FcJUkh%2B1Tb9QCVVnM%2BGnxacpKySXDiNpfYfzGvZ%2Fw7BhMHmghJaIa3HMPwyBaWXDa&X-Amz-Signature=3c653539053b2c39cc16e7dddb0984c2e670c704a10827ff00c353172bcdf5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKCVBDO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7YtsRS09piqUFc6F%2F3M0sjQzM4%2B57dZM82NpvvUPycgIgMIhQWgBJ3oTclLY3NCBdzYEd5uCAoSGbd1HQ07ZvblAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEMSKL%2BQ0dwlorAuCrcAzCqQd4Jg%2Bw7XAK6ibWNeLlkVTQ0lFrCjqb%2FYK0H8kmhxsRQ307Fddyc78q%2BiP4mt3cDcEcFKHGyJjxlxftmKsFHb4WHkdJGf2WjivPJ4wQyKPfuh5PqNr3gVbX0flZmsic80ALP3TZni1%2FmR%2FuKiTBoaowSOSorX9xaF7SyCJ5FzJqSAVu%2B2vlb6hXSCFrOzfjZKCTvHKdx9pfLDYLapfTjbgR8eYrwsCta6dMQrrT4kQhTna2Jw5p1SK63HHJ3iqvdvW1VRpRNuCA%2BMGf4bm38PgOXa%2BCBugHW5ehfYTNfyiccsXR7uAuZztBZpBx8IahRJbXhAsCw%2B2KFiL%2Be%2FXRy2PiF7rCclFeubr6RyaYPhkHokQli8HeDLAgepP2BcfZLUTGN6FlO6GfsCEyZJsl86%2BThQg4mY9%2BdVb1anHEsIGWfXeZHuDDqafbOdVzsae7QpyytPBl%2BJQmZabINBWb698jOMYvXiRecvrrl8Smosk962iwAtohCjGE6UDF%2FlKoEb5YLgvmHNFrrFyEQe6wC1SqC68WgDZe9D7pb513PxTVvIXt2gNR7y%2BdWEbM7KVcgd8jP6g1T54mT3q0CydRkN2QG0xDKhSqr1b1aBOG24G6SbKUoGM8q%2FnoVMOvkr70GOqUBxpL5Cp4ghYYpLWSF4yM01Anf5MisAhI7ZoVBAlnpwTTPa1rT9%2Btiip%2FZuHykv%2FqTRFBZNkURyAI78x7YstpCOOITrj6OaGMMy6adEYrmFBjo1AKADdcYiaCzcv%2BeTJHJBh7WrZQw0yWf0ITLlR%2B4VhTN2w4%2FcJUkh%2B1Tb9QCVVnM%2BGnxacpKySXDiNpfYfzGvZ%2Fw7BhMHmghJaIa3HMPwyBaWXDa&X-Amz-Signature=929d92ce6cc1fcc790ae7ba5ac12588e1f82a97b1ebd813d19e3079d757059ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
