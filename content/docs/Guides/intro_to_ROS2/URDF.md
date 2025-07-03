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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETTYTTB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDTn441x8jGnkNSZ3x2QrllPQLX0YoYJ9f%2Fdt%2B5r57R9gIhAORhww352r4J6SHn4HTV0vn7YSItqbNamt7mp5te92%2BkKv8DCBIQABoMNjM3NDIzMTgzODA1Igxr3TQT56G%2B5qSmeDoq3AOFWacBvDVzq1RdKFZn%2BO48GpaZOd6QcEFks8Nx0Iw%2FTqKQx47dpRga7XkuBYgngK9b8eqOQa37eLQDMJMiJX5tXFGam1Ygiqs5qsahKOS4HFm05Jvu6nb1P7rANTvd4t8%2FsnncVLoXyJlPgPiblDoC27UiEXBm%2FLnqrkYVxnsoB7KTdSNWQ6fLeO6w7%2BPGaQz9DgjKw9vsQSp7UAaTrD49GBZoTJ7iGs0Trwww7B7GWJ%2FMYRVYn96fY3H42SlNYMtZLAmRw%2FWlwSfP452Nltv0nRT9Pw91n6P9HQ75uUSr2SpujrQwWITh7%2Bg%2BvVJGnB%2Bmvku%2FE30SFhCF9GcxstuVxVUi%2FFumns0sdkqoxfPxNz60odto4lC8NP%2BwMruVtvHStUZOwO2kfBjh24AaiE9qLuqLPZQBKh%2BIekWOk42Dav8e5fNf%2BVoMLef07Ep9SxVnxF0puywThCNxhnltadd0PK%2Fjr0M6bucvuw%2BzmueVhOF34rIU3CgChVsBImogMwoTXROLdvltMle2%2FAXQAZDH3m6UcUbC6qg3AQlxptW0YVXK8cGO%2Fl%2FkyKm9hHqXm9ROW5EbbpdhiJ0TDZ5wyrJJdlYgAlqQxxxeJVxI8IpgHdNASTUzmGBiAG3eeDDViJnDBjqkAWVGUVlo05aiH34Lq%2F6IVHBo5%2F7fgpWYSW%2F9wP60eNod%2FSMGOWF70SIs8ab7oYHz86h6wC0YDaXfFcXxAvWbdu4zCgr3FJlBOuENsu1q%2FNQ4R%2F8qUctgpIEmwtBGKgjyNrALVS0ImfOLM%2Bo8vBh9RUzdCRSDEtKOaeo2hZcbBNWRUmtGzxpKyYYH2hqC%2F5ZnKQCfRxuBO8z18jp2na0Ngrl%2F7FVJ&X-Amz-Signature=25974c456c888b7a55269632a32dbdecafa25b570d9293b7574a17761235802a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETTYTTB%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDTn441x8jGnkNSZ3x2QrllPQLX0YoYJ9f%2Fdt%2B5r57R9gIhAORhww352r4J6SHn4HTV0vn7YSItqbNamt7mp5te92%2BkKv8DCBIQABoMNjM3NDIzMTgzODA1Igxr3TQT56G%2B5qSmeDoq3AOFWacBvDVzq1RdKFZn%2BO48GpaZOd6QcEFks8Nx0Iw%2FTqKQx47dpRga7XkuBYgngK9b8eqOQa37eLQDMJMiJX5tXFGam1Ygiqs5qsahKOS4HFm05Jvu6nb1P7rANTvd4t8%2FsnncVLoXyJlPgPiblDoC27UiEXBm%2FLnqrkYVxnsoB7KTdSNWQ6fLeO6w7%2BPGaQz9DgjKw9vsQSp7UAaTrD49GBZoTJ7iGs0Trwww7B7GWJ%2FMYRVYn96fY3H42SlNYMtZLAmRw%2FWlwSfP452Nltv0nRT9Pw91n6P9HQ75uUSr2SpujrQwWITh7%2Bg%2BvVJGnB%2Bmvku%2FE30SFhCF9GcxstuVxVUi%2FFumns0sdkqoxfPxNz60odto4lC8NP%2BwMruVtvHStUZOwO2kfBjh24AaiE9qLuqLPZQBKh%2BIekWOk42Dav8e5fNf%2BVoMLef07Ep9SxVnxF0puywThCNxhnltadd0PK%2Fjr0M6bucvuw%2BzmueVhOF34rIU3CgChVsBImogMwoTXROLdvltMle2%2FAXQAZDH3m6UcUbC6qg3AQlxptW0YVXK8cGO%2Fl%2FkyKm9hHqXm9ROW5EbbpdhiJ0TDZ5wyrJJdlYgAlqQxxxeJVxI8IpgHdNASTUzmGBiAG3eeDDViJnDBjqkAWVGUVlo05aiH34Lq%2F6IVHBo5%2F7fgpWYSW%2F9wP60eNod%2FSMGOWF70SIs8ab7oYHz86h6wC0YDaXfFcXxAvWbdu4zCgr3FJlBOuENsu1q%2FNQ4R%2F8qUctgpIEmwtBGKgjyNrALVS0ImfOLM%2Bo8vBh9RUzdCRSDEtKOaeo2hZcbBNWRUmtGzxpKyYYH2hqC%2F5ZnKQCfRxuBO8z18jp2na0Ngrl%2F7FVJ&X-Amz-Signature=9f6cc2d6fbe23c2aca073a302d8b7ed59453b52a7b339595306a8f752ac26b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
