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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GNZTD7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFGVBLBkZw%2B3DV4EQpOvw%2B5Ci7sIQna%2BMjLnQwhplPdUAiEA0A%2FLRFzjtZ6orjcCOkwzHhl3K1QejZl3VkfdC6GivuQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwzBI37rnpbOYYgAircA5Sq%2FVee4YZ7jxJjOZG6GUnP7VxKbVwLUCzbZDVT3kBLwwsWHUpSnI2AtpULIk0oFcCgOcf28tcILuowuonsan0WgSQbOH28iXTsgQ%2FPXWHY%2BSurjeg%2FESbQUp9KJn1isy6jIUiXk1k2FOI77da4eqyVtLddGuVK2XTY7aSz2wDBnjuNMpM1wBQcznvOtChgFDJ577GkoTkOU9a16LKAdUlSs6t7HlEt5kRNoLyn2c1bE05bQlcJE6WAeophwjuRCqC0zKzPdbNN1mCq9J64mS%2Bf7jrK%2BgBwhBYUzFGjdJqbJ8paz7c5rWwuz4vnfCwjtyr4jSGwxR78F%2BvJqHS0QmJNaWaXTNk0nODmOgq8qKinMwBqgUe19%2FZFMfsxuV5CVaPcnViBxPslLG9HGg6YmHSTegM9HLgi81iiW2LQju9jxEpYH0LtmCCHmQp%2Bjxvztx2KzsAhzQgxo37d3EjIypOur7ttS7omZ0yFwXwUj9z7JKWbPfsrnW92BpGlqMS5CuF8BFs5Q%2F3W%2F%2B7GkCyCiBBdxc3Askla1dEG%2BYtv3wI8QvyzX%2Bl4YxL2DAJVDUn%2FciH2rB78Nh78GtIrwWtMUVV7niyaqgp67gUHJ4yQVwQUO1uc419w%2BRiv12LwMKT76b8GOqUB2%2BGm4kaTHR8Gl0b1hSL5BD2mleWV38x%2FKQh4itIiNpA7fjtdaReieDafEH2%2B6rRiGDNJ9EoaorBVtDifrITt6DGXzwYlGN3lmKi9YdTdEGMDoJdlTL6qmn9R7dxtMDRB8wltYP9qOE0FASR2Brti0JW1rEIzG7Av6TmeoJdh8jC4Zhkrgts8hKpGNOkBP%2Bca58JxTqQwgBZXl0ZVngmL4%2FM%2FwWHM&X-Amz-Signature=55fdf90fbfa54fe84b28a18f48c31a62ac3a3f1b54d5454f1ad414db965a30b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GNZTD7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFGVBLBkZw%2B3DV4EQpOvw%2B5Ci7sIQna%2BMjLnQwhplPdUAiEA0A%2FLRFzjtZ6orjcCOkwzHhl3K1QejZl3VkfdC6GivuQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwzBI37rnpbOYYgAircA5Sq%2FVee4YZ7jxJjOZG6GUnP7VxKbVwLUCzbZDVT3kBLwwsWHUpSnI2AtpULIk0oFcCgOcf28tcILuowuonsan0WgSQbOH28iXTsgQ%2FPXWHY%2BSurjeg%2FESbQUp9KJn1isy6jIUiXk1k2FOI77da4eqyVtLddGuVK2XTY7aSz2wDBnjuNMpM1wBQcznvOtChgFDJ577GkoTkOU9a16LKAdUlSs6t7HlEt5kRNoLyn2c1bE05bQlcJE6WAeophwjuRCqC0zKzPdbNN1mCq9J64mS%2Bf7jrK%2BgBwhBYUzFGjdJqbJ8paz7c5rWwuz4vnfCwjtyr4jSGwxR78F%2BvJqHS0QmJNaWaXTNk0nODmOgq8qKinMwBqgUe19%2FZFMfsxuV5CVaPcnViBxPslLG9HGg6YmHSTegM9HLgi81iiW2LQju9jxEpYH0LtmCCHmQp%2Bjxvztx2KzsAhzQgxo37d3EjIypOur7ttS7omZ0yFwXwUj9z7JKWbPfsrnW92BpGlqMS5CuF8BFs5Q%2F3W%2F%2B7GkCyCiBBdxc3Askla1dEG%2BYtv3wI8QvyzX%2Bl4YxL2DAJVDUn%2FciH2rB78Nh78GtIrwWtMUVV7niyaqgp67gUHJ4yQVwQUO1uc419w%2BRiv12LwMKT76b8GOqUB2%2BGm4kaTHR8Gl0b1hSL5BD2mleWV38x%2FKQh4itIiNpA7fjtdaReieDafEH2%2B6rRiGDNJ9EoaorBVtDifrITt6DGXzwYlGN3lmKi9YdTdEGMDoJdlTL6qmn9R7dxtMDRB8wltYP9qOE0FASR2Brti0JW1rEIzG7Av6TmeoJdh8jC4Zhkrgts8hKpGNOkBP%2Bca58JxTqQwgBZXl0ZVngmL4%2FM%2FwWHM&X-Amz-Signature=61578fdb3ae20f25a18c1f277fce2d92efe6b5b3772e93d1f4253cd675fe152d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
