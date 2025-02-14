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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKPALBW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD%2F7KM9meiTdqpmGg0r%2F73xqMH0QcJlSQUpuhnj7bkEOAIhAP1tZ%2FMGehfMNG7XkgTx8U21pI7bQLn7Bg4NISRUEqCnKv8DCCkQABoMNjM3NDIzMTgzODA1IgzlLoDVTtcTPcX6%2BK4q3AM0fWqmAwMTUUWqpvdvNBvOKCyhmGFEJzdqF73EOuFP9aGayyvPMMShMYpIFpfIC7TOki7Hl72YyFZ1uBauBo5spTY6thhAfejIa02t37PGMiithw32fW00XrA6I91Sh%2F8JFDT9CFuzWm0ZU%2B9Ev8OGxyES9ZWJQDXUqMXT7i%2Fwi%2F%2FuGecqTTf2oLe15S4AWoVUz6T0Ac7qoCJuyfiMUkLbniX6jIfjscakZ1R37yeWTluWTlsO9AleSqUfXzd4JoT5gkN%2BKJBViUpXU%2BiK2cum8vG6tLnYJpBOCog2jPYnTyhm9aT3tMwjETIhuDlIfrWQbByNeF4o1ewvFVm%2Bx%2FCDmPstgv1W94SJQfHFRFDPIji6D50xSBhPGt3gMvHq6YbtlB6hjRoR5fJPjF27IipT4B12VLrpSSLyVIPIJt%2F3ARWAq5fPES%2F%2FMk1wE1y%2BYbhw5Y%2Fje6eADO3NLt9Fj%2FvLBE73b9cMLDrIFcSiB2CP4ApFhwRleY0Lsm5wG0s3pEMVuRFdzIflRW5hni%2FKK2aM1RiFq4rrhkwfxxDUD5wYEBcT2TRKqCr%2BWr5buonMxWCx6g6YNBtEQs3BtaFIxl4M3RYLN%2FfuV9zVDdw%2F95QzqIdrhPzXu62HJy5bZTDO6bu9BjqkAT9wiYMMaGjbzY4sKyDIGkDMffkflUjIBTi4nRFmkrR%2B9AO1SZhyfvpCYhcWhXVBUSiZ2eFvQBszFwuhnUDCUAdYOJqVWLJpmnATKotlCSm4G6sOineAjW0eYofT2lQQW0pNyFrzOWVDgFEYgiAyfHpyHWCL%2BNjEvWNRoKX2UshTnXKvlXg4W0Je37Ife0sxttuIhQHPSOGx3yT73LKyAJlmgE4g&X-Amz-Signature=4ecca3435ef46d6034b2458c7d2f447d8cf414aa4d34325da2f12fa5f5fa787b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKPALBW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD%2F7KM9meiTdqpmGg0r%2F73xqMH0QcJlSQUpuhnj7bkEOAIhAP1tZ%2FMGehfMNG7XkgTx8U21pI7bQLn7Bg4NISRUEqCnKv8DCCkQABoMNjM3NDIzMTgzODA1IgzlLoDVTtcTPcX6%2BK4q3AM0fWqmAwMTUUWqpvdvNBvOKCyhmGFEJzdqF73EOuFP9aGayyvPMMShMYpIFpfIC7TOki7Hl72YyFZ1uBauBo5spTY6thhAfejIa02t37PGMiithw32fW00XrA6I91Sh%2F8JFDT9CFuzWm0ZU%2B9Ev8OGxyES9ZWJQDXUqMXT7i%2Fwi%2F%2FuGecqTTf2oLe15S4AWoVUz6T0Ac7qoCJuyfiMUkLbniX6jIfjscakZ1R37yeWTluWTlsO9AleSqUfXzd4JoT5gkN%2BKJBViUpXU%2BiK2cum8vG6tLnYJpBOCog2jPYnTyhm9aT3tMwjETIhuDlIfrWQbByNeF4o1ewvFVm%2Bx%2FCDmPstgv1W94SJQfHFRFDPIji6D50xSBhPGt3gMvHq6YbtlB6hjRoR5fJPjF27IipT4B12VLrpSSLyVIPIJt%2F3ARWAq5fPES%2F%2FMk1wE1y%2BYbhw5Y%2Fje6eADO3NLt9Fj%2FvLBE73b9cMLDrIFcSiB2CP4ApFhwRleY0Lsm5wG0s3pEMVuRFdzIflRW5hni%2FKK2aM1RiFq4rrhkwfxxDUD5wYEBcT2TRKqCr%2BWr5buonMxWCx6g6YNBtEQs3BtaFIxl4M3RYLN%2FfuV9zVDdw%2F95QzqIdrhPzXu62HJy5bZTDO6bu9BjqkAT9wiYMMaGjbzY4sKyDIGkDMffkflUjIBTi4nRFmkrR%2B9AO1SZhyfvpCYhcWhXVBUSiZ2eFvQBszFwuhnUDCUAdYOJqVWLJpmnATKotlCSm4G6sOineAjW0eYofT2lQQW0pNyFrzOWVDgFEYgiAyfHpyHWCL%2BNjEvWNRoKX2UshTnXKvlXg4W0Je37Ife0sxttuIhQHPSOGx3yT73LKyAJlmgE4g&X-Amz-Signature=639840738a8f9ef193d76a9d763035368778e40d85b19362f07f44a1426e3e91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
