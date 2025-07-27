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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGOKPPF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDP1F%2Fo2Ln5yz6b9NNFJ1W9qpIg1B5cgBsFk0XEqrbtmwIgYgkQ3SWtGI7N82qgy%2Fv%2FM3mOj2vLAKdA7j92MoxKyCQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP2mj3qPWuRiVE0LGircA%2BvoDZr%2FdEOICO%2FzXp%2Ful3xarN3G0gE%2FTuavgZstbTR9I43VXSEREubR1gln4mpgannscsVVeSsr%2Bm6b8dVaoLlZ2se%2B%2FTCAawOFJzH0rpIoGvtpmqDjJ1C2TekMs8mLD1yeOkFx%2FrftzxIflQNpjCa2MZ%2BA%2FDP8WW9aVHYRuU8FFAIN2jF2K3TKP8T%2F3ZAu8Xk8ZXaY%2BPkm%2BNmpLtwaFqNLBEu5lFRVzI3cCFcm%2F7EHei0G4JHC%2Bj2EWlsU%2B8QjBLjyLk05pFWxacTX9BXoO9ArMbrUkCu0Bv5tQQHiQTf9juUh%2F1PlQDsBgeacCRjMQQC6NmMFXY32UNC59NyPJ6AVgi7LGufFoNe0zh0D96dmYrWGE2zzfryoJLQvsKbdDswsY6ysscxdmnnMsrBtZztxt%2FyJPGtdiWs%2BCHe7m2e7S%2BYE4Iy7kmDZY6E8dlhn29F0Po7j8B7SLW4uJqq0E488ViTmgdPDRI84%2F%2BrfqdqffnAVeTrJiluOqg7puosmKR7rBH3qgnIk3v8AurGQ2hm7RAZ%2FKqj7U2nD0iLnKdLaQ3g2TfTyggEXsE2hWZU1moaoXdb2qEfjFSEEaDfYhgzE0mAjJksUa3HIRSk2ysyzLigPba2UGGvkS2aOMJHClcQGOqUBIr0gBM8IR8Opkv%2BtoNf2%2FFmJspoq1SqYopaUKYfO2zc2%2Fjf6lwg2YdPqx4rmCHYMwbt0wQktwGVU9DVu2AmGQ%2FJHvYcDYqM0MjNBkmbQyAwYTfKdaJsxY1ewXoRGvOnrlPyyUwyq8kq2sAyWmo12Yt2X23TWS1HbZQaPX7swDNV4SJMISsGcI3GqecJVI1YoBZ4YNd8Y9NCVMKs46bt6rq5eIx7h&X-Amz-Signature=68a325324b9a8ccfd91e092ef1c591f9c44120bee35f3b8a1914c0b9c295f26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGOKPPF%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDP1F%2Fo2Ln5yz6b9NNFJ1W9qpIg1B5cgBsFk0XEqrbtmwIgYgkQ3SWtGI7N82qgy%2Fv%2FM3mOj2vLAKdA7j92MoxKyCQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDP2mj3qPWuRiVE0LGircA%2BvoDZr%2FdEOICO%2FzXp%2Ful3xarN3G0gE%2FTuavgZstbTR9I43VXSEREubR1gln4mpgannscsVVeSsr%2Bm6b8dVaoLlZ2se%2B%2FTCAawOFJzH0rpIoGvtpmqDjJ1C2TekMs8mLD1yeOkFx%2FrftzxIflQNpjCa2MZ%2BA%2FDP8WW9aVHYRuU8FFAIN2jF2K3TKP8T%2F3ZAu8Xk8ZXaY%2BPkm%2BNmpLtwaFqNLBEu5lFRVzI3cCFcm%2F7EHei0G4JHC%2Bj2EWlsU%2B8QjBLjyLk05pFWxacTX9BXoO9ArMbrUkCu0Bv5tQQHiQTf9juUh%2F1PlQDsBgeacCRjMQQC6NmMFXY32UNC59NyPJ6AVgi7LGufFoNe0zh0D96dmYrWGE2zzfryoJLQvsKbdDswsY6ysscxdmnnMsrBtZztxt%2FyJPGtdiWs%2BCHe7m2e7S%2BYE4Iy7kmDZY6E8dlhn29F0Po7j8B7SLW4uJqq0E488ViTmgdPDRI84%2F%2BrfqdqffnAVeTrJiluOqg7puosmKR7rBH3qgnIk3v8AurGQ2hm7RAZ%2FKqj7U2nD0iLnKdLaQ3g2TfTyggEXsE2hWZU1moaoXdb2qEfjFSEEaDfYhgzE0mAjJksUa3HIRSk2ysyzLigPba2UGGvkS2aOMJHClcQGOqUBIr0gBM8IR8Opkv%2BtoNf2%2FFmJspoq1SqYopaUKYfO2zc2%2Fjf6lwg2YdPqx4rmCHYMwbt0wQktwGVU9DVu2AmGQ%2FJHvYcDYqM0MjNBkmbQyAwYTfKdaJsxY1ewXoRGvOnrlPyyUwyq8kq2sAyWmo12Yt2X23TWS1HbZQaPX7swDNV4SJMISsGcI3GqecJVI1YoBZ4YNd8Y9NCVMKs46bt6rq5eIx7h&X-Amz-Signature=4441495da823711427a748c163bab7ebdc8620ce6431bd028ca2cfcbbfc6439c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
