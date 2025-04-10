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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKWQ3XZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIHcQx7%2BegU6da8OTrAch57EdDbQtyERhyKXx%2Bhlqmqe0AiBwnoO7YBmyCtEMuJhOMj8czOv%2FtHoRyh%2B2s1P%2FOyxkvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHgnrPNWBcnhkWs1dKtwDXoOu1MlSfLhckthN78hyoV%2B79Z7Rzx4JW0FyJAuNgtGrNJ%2BQmpz%2BC5DSvS513cNFKXpLrIMrG0FHRu51fsqzOTjvYSux4GbqPrXV4LLFGo%2F%2FCXr6dmvlTHbGmbBrqd%2BGdQnepR8UkpH3r4%2FOb45nho0rUIqG75huusP2uqgF4kD%2F3n1aM51i6YN3h0Qo97ezZirs%2Biizkk7oR5%2B77FuZnA92BM4iinG0PehjGKItZMkdima6kyUhmd5yNkx3FzVduVPkMx8%2F5yuaU%2FRkIww%2BJnPJky9z%2BSKvhMCygPQCtpUsAr5Q3MmwzfBqaqBWPa3l6%2BoTWo%2Fxs4qF11r0qh%2FsP7JCHTOPSQ9Td4%2ByFVAOkd3dVLZ8LbjzT1DnWbu5gELIcyC44LVY%2B498xhss6kwyFoBpjBlFoR3YTZOHtWTPFLG7VDVfEgZ4Vc4z6mZGciGERmvuW8WhTPfT5%2FCYX8ovciS%2BEjWrjVoRPLeMrd8FdZCgJ2oqejgTspvRBmM1l66GFCgXdrSuyJijueagooBuzy0Rr7tN7mdWXbSDjqtX7%2BS76PgK1KodnUO%2F%2FZSZv9OaNO%2BMjAzpSKXDo4FSwoR8d%2BQIFchu95qP5PV5FSAlQFe3urOUcXG6%2B17CuvUw75LcvwY6pgG%2F%2B%2F2AuRNpluMXGosvbcn7yqLjga97eURq7p%2F3bCcV8Ttg25qsxPNlgB5xbRKF%2FCjjDarl9brPKKyg4r%2BzcAGumDEYuxFoEJP79esPk4mOT6wV3FKjzUSfXJUW1NHJLvu0VfJfC%2BcXDIhWxs9q%2Bk75aT1IFUPsHRBBn6%2BX8OirWPtaCF3eJm0XTW6KLwl2laZG%2FEQvZqKypYT9NOTA%2Fli37G8qxfgX&X-Amz-Signature=e8ee720201a61a5d1d8fe3b64fe77a5c53e33707e2a93a9e837353a8e6923497&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXKWQ3XZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIHcQx7%2BegU6da8OTrAch57EdDbQtyERhyKXx%2Bhlqmqe0AiBwnoO7YBmyCtEMuJhOMj8czOv%2FtHoRyh%2B2s1P%2FOyxkvyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHgnrPNWBcnhkWs1dKtwDXoOu1MlSfLhckthN78hyoV%2B79Z7Rzx4JW0FyJAuNgtGrNJ%2BQmpz%2BC5DSvS513cNFKXpLrIMrG0FHRu51fsqzOTjvYSux4GbqPrXV4LLFGo%2F%2FCXr6dmvlTHbGmbBrqd%2BGdQnepR8UkpH3r4%2FOb45nho0rUIqG75huusP2uqgF4kD%2F3n1aM51i6YN3h0Qo97ezZirs%2Biizkk7oR5%2B77FuZnA92BM4iinG0PehjGKItZMkdima6kyUhmd5yNkx3FzVduVPkMx8%2F5yuaU%2FRkIww%2BJnPJky9z%2BSKvhMCygPQCtpUsAr5Q3MmwzfBqaqBWPa3l6%2BoTWo%2Fxs4qF11r0qh%2FsP7JCHTOPSQ9Td4%2ByFVAOkd3dVLZ8LbjzT1DnWbu5gELIcyC44LVY%2B498xhss6kwyFoBpjBlFoR3YTZOHtWTPFLG7VDVfEgZ4Vc4z6mZGciGERmvuW8WhTPfT5%2FCYX8ovciS%2BEjWrjVoRPLeMrd8FdZCgJ2oqejgTspvRBmM1l66GFCgXdrSuyJijueagooBuzy0Rr7tN7mdWXbSDjqtX7%2BS76PgK1KodnUO%2F%2FZSZv9OaNO%2BMjAzpSKXDo4FSwoR8d%2BQIFchu95qP5PV5FSAlQFe3urOUcXG6%2B17CuvUw75LcvwY6pgG%2F%2B%2F2AuRNpluMXGosvbcn7yqLjga97eURq7p%2F3bCcV8Ttg25qsxPNlgB5xbRKF%2FCjjDarl9brPKKyg4r%2BzcAGumDEYuxFoEJP79esPk4mOT6wV3FKjzUSfXJUW1NHJLvu0VfJfC%2BcXDIhWxs9q%2Bk75aT1IFUPsHRBBn6%2BX8OirWPtaCF3eJm0XTW6KLwl2laZG%2FEQvZqKypYT9NOTA%2Fli37G8qxfgX&X-Amz-Signature=52d1151e2cd7ba34760c56ef35d3d9058cebb9e0c648458e9b3645a23d38295f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
