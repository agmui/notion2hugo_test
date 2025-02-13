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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JXQ44N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyMLCJpcRmIBLZ761sWJAh6Oj83jqK7nSYBGVNsikC%2BAiBogvrIs%2FBXHCUhb0RfxsWuLBqNY%2Bux4BGSMg%2FNE01Vlyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM1oL3SJQVJf545Dd3KtwDbBnojw%2B5nNtQ8K61VJyV6TV6L79izQJtGJca30Tl4Kfxv%2BP7NHaPHYDku376HLzH%2FCb4LbA%2B85LdmnlvjVegx%2Bk%2BZIs6DY%2FHpwAULEjwsocQHdDfAWFZ00eAprr2SGWiwpbMAo5qlUBVH%2Fd2raKCbExHwvNQEvf5xmxV41tTtGhXHKK9JKYMuCK3mx8zef8irRE59HmZtlIeUVUXESGQg3pBrJjoaNsorVfd1n7VYBWMMhW%2BcX%2F8%2BPSbAKfvAxSS6nwidqEESmhMkx%2FHgkTK%2F1N6Tc5LgQmpddBWkDklIViEVw18hLp159CYu3IHj78RYjpGGbMHu%2BA2VzE9LBmr5mw4wx5EBr2NloPNBNMaEzaEIh07AKJ448E3LlEpUNnjX9p5omj3RKMr0FG9JQ824XMdE80aNtkKA%2B%2FEuSYkN8P6BgYHqQhByjIqpPzKKz2WDVw3dsxqtKgra7%2B1RsooreykkQ0PuIT%2BGTF0lzl%2BpMb7z1ERZW33ka8tpVhK0X0JV8NhKtu2bQNEQMOKcYO4sdLzrphJIxlpuWUgtvmuCo9nWrwpSXKdwPuVTrKMC6G9YynlpfRQk9kKzSILgY4gxoAxFip9SAfRfeqg9BY0tbPYTBtOrHT3Bux6gtgwwd23vQY6pgFYeA40h%2BMCr83YyRxeif6FHzk4LAOo0eR9nTCNYJkOJzydGnJB7Mn7nU0ib%2Bb7jmYbppOFk8ZQD2j9KvmpDWi%2B9JajUCUSJeB5ofJgMcHnY1ETlWsv6%2FatX7wPnWTWujzfAfIUu8ypvpwy%2FTjmRH6nyKrKE3Fgc4ebTzSfMmSS0Lud7Sz4S2dZit3bxcN9zXCkh1puf9xxEmvRtfoW95YuDkkldxvr&X-Amz-Signature=ab5e484a8ca5fdce410e7835c723ea1bea3a14a68f0e5f848947a0610a55c81c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JXQ44N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyMLCJpcRmIBLZ761sWJAh6Oj83jqK7nSYBGVNsikC%2BAiBogvrIs%2FBXHCUhb0RfxsWuLBqNY%2Bux4BGSMg%2FNE01Vlyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM1oL3SJQVJf545Dd3KtwDbBnojw%2B5nNtQ8K61VJyV6TV6L79izQJtGJca30Tl4Kfxv%2BP7NHaPHYDku376HLzH%2FCb4LbA%2B85LdmnlvjVegx%2Bk%2BZIs6DY%2FHpwAULEjwsocQHdDfAWFZ00eAprr2SGWiwpbMAo5qlUBVH%2Fd2raKCbExHwvNQEvf5xmxV41tTtGhXHKK9JKYMuCK3mx8zef8irRE59HmZtlIeUVUXESGQg3pBrJjoaNsorVfd1n7VYBWMMhW%2BcX%2F8%2BPSbAKfvAxSS6nwidqEESmhMkx%2FHgkTK%2F1N6Tc5LgQmpddBWkDklIViEVw18hLp159CYu3IHj78RYjpGGbMHu%2BA2VzE9LBmr5mw4wx5EBr2NloPNBNMaEzaEIh07AKJ448E3LlEpUNnjX9p5omj3RKMr0FG9JQ824XMdE80aNtkKA%2B%2FEuSYkN8P6BgYHqQhByjIqpPzKKz2WDVw3dsxqtKgra7%2B1RsooreykkQ0PuIT%2BGTF0lzl%2BpMb7z1ERZW33ka8tpVhK0X0JV8NhKtu2bQNEQMOKcYO4sdLzrphJIxlpuWUgtvmuCo9nWrwpSXKdwPuVTrKMC6G9YynlpfRQk9kKzSILgY4gxoAxFip9SAfRfeqg9BY0tbPYTBtOrHT3Bux6gtgwwd23vQY6pgFYeA40h%2BMCr83YyRxeif6FHzk4LAOo0eR9nTCNYJkOJzydGnJB7Mn7nU0ib%2Bb7jmYbppOFk8ZQD2j9KvmpDWi%2B9JajUCUSJeB5ofJgMcHnY1ETlWsv6%2FatX7wPnWTWujzfAfIUu8ypvpwy%2FTjmRH6nyKrKE3Fgc4ebTzSfMmSS0Lud7Sz4S2dZit3bxcN9zXCkh1puf9xxEmvRtfoW95YuDkkldxvr&X-Amz-Signature=2f3d46ea8d98d2a2af257a90c560c401177cbfa15f38b74c86bda79b0725787b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
