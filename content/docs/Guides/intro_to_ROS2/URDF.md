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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ5NIXEH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIGsuWpTv3%2BOQl1U0i7MjcWHzymVLGEuHV24zz4NA3Tk7AiAsKuKeXEtnWC51IX1EM%2B%2FL1jZEaX9DJ5EuNKOH7UpXByr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMV2SX%2Fv3tDpHACE4QKtwDCNxI%2FLYHXGwX2sRiLaBnzCtDGcoNgCqkdUkqsmtqffXhL2FNXdys9%2BWwt9Mjq4S1E4pvQ5t%2FdvFkTxFRstZcgUoagZjtwRV1M6UGX2PSykWD7zuB%2BFl9GR2D1bgS9XM%2FhHLQAZYeOGkeLSJyG6YSU4RAgg041gdcYoR1gvRy%2B4UlvVSUYtJo4TKDtSFJJ6zhd7KxA5QerlhJmCDUh58kbbQkoSrQfviN%2FJuEWy5%2BbLuE3uMvpFxdP5BywGdnUqGBEs1%2FSuglhqtivumtj5u9ytzYSNFr9fyNfPvrO7FQXnGYkh%2BZTU3orKn%2BFowboXO1%2FgacbdrAMyiyjGO1Ri%2B9JeZcfgdBrfopwXU0xuZB3XIlXUeeCCPdGarbx4asARV1TJFMR%2BiLfxOCNdWXNxc81%2BxOPhoWSo9SW9s3PjaZSnfGhOgzGuqERIJ4dplkbPGmsaIAmqC6Z2brs5tT1EJgYJ7JVod7Oqa%2FdCZv9Fxr6EQ%2Frt2wr7uK6Gkjzy1FYiK8ij6G46K6Jvk34i1KXNb7cZRH7%2B1KjsDfPTg%2FZbXg76MnyFE1%2B83Gceeprg5v%2B8X%2BLuJqPL6POD3F2%2FTbN6lNcY1GdmJwv6tFoRfyW78RRr0PjFQECq%2BTZbJEqWAw5OiIvQY6pgGW79qBWAYvQRR8C15v9ImQsp5k8S6P3zzMfW81jLuxUIoCwSQCF8GMMWBUjNFHNoUjw%2FznTs8g9sGwF2koejos8UutSEtNhMgzLxiT14KGuRuff357zyp6NHRdXZrlSX8HWYgF%2F3lfQZD5DhoOkeBl%2B%2FabIXokgKavngAYFk6V3TQlBl%2BTzKuza7543EGkKgQ0da9ivXm9EasgidUKxqggK5JESPf%2F&X-Amz-Signature=91fdb7e113b7c3afc3f9c4c2c87e7583a50c40d0f6657df8270d4a0b3a54d12b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ5NIXEH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIGsuWpTv3%2BOQl1U0i7MjcWHzymVLGEuHV24zz4NA3Tk7AiAsKuKeXEtnWC51IX1EM%2B%2FL1jZEaX9DJ5EuNKOH7UpXByr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMV2SX%2Fv3tDpHACE4QKtwDCNxI%2FLYHXGwX2sRiLaBnzCtDGcoNgCqkdUkqsmtqffXhL2FNXdys9%2BWwt9Mjq4S1E4pvQ5t%2FdvFkTxFRstZcgUoagZjtwRV1M6UGX2PSykWD7zuB%2BFl9GR2D1bgS9XM%2FhHLQAZYeOGkeLSJyG6YSU4RAgg041gdcYoR1gvRy%2B4UlvVSUYtJo4TKDtSFJJ6zhd7KxA5QerlhJmCDUh58kbbQkoSrQfviN%2FJuEWy5%2BbLuE3uMvpFxdP5BywGdnUqGBEs1%2FSuglhqtivumtj5u9ytzYSNFr9fyNfPvrO7FQXnGYkh%2BZTU3orKn%2BFowboXO1%2FgacbdrAMyiyjGO1Ri%2B9JeZcfgdBrfopwXU0xuZB3XIlXUeeCCPdGarbx4asARV1TJFMR%2BiLfxOCNdWXNxc81%2BxOPhoWSo9SW9s3PjaZSnfGhOgzGuqERIJ4dplkbPGmsaIAmqC6Z2brs5tT1EJgYJ7JVod7Oqa%2FdCZv9Fxr6EQ%2Frt2wr7uK6Gkjzy1FYiK8ij6G46K6Jvk34i1KXNb7cZRH7%2B1KjsDfPTg%2FZbXg76MnyFE1%2B83Gceeprg5v%2B8X%2BLuJqPL6POD3F2%2FTbN6lNcY1GdmJwv6tFoRfyW78RRr0PjFQECq%2BTZbJEqWAw5OiIvQY6pgGW79qBWAYvQRR8C15v9ImQsp5k8S6P3zzMfW81jLuxUIoCwSQCF8GMMWBUjNFHNoUjw%2FznTs8g9sGwF2koejos8UutSEtNhMgzLxiT14KGuRuff357zyp6NHRdXZrlSX8HWYgF%2F3lfQZD5DhoOkeBl%2B%2FabIXokgKavngAYFk6V3TQlBl%2BTzKuza7543EGkKgQ0da9ivXm9EasgidUKxqggK5JESPf%2F&X-Amz-Signature=2ac246a18c3243e8b42e9ef86aa9f34a440e599b86abac61af75289dccb99afb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
