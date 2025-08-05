---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOD6RAB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGs2ITkN%2B%2FZytoTDqqr0SSZm9ifRlZCSUWrV26EipobnAiAXi9QlWYNQ2bUYxDMDTpPJ01ooaG4qmpzE1vP%2BDDJqgCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMKmUPW0ZfMiGAs5pFKtwDj2%2FSyJ9c8hLegOIxCdbT2BAwa8DP7leOuXT2AuRLnI%2FRXS%2BBSybo4yzWVRMnp7znYof9X1IPYMlkcUVgLbMWgvoAwtkf6jCFNqxN12ClolnePR%2BBzQ4RFF0zcLk7zrSq9BEHTxFVAmSO6Hcz5uZNKrgxzRq4KHm5KcNZcyM%2F%2FCiX25r8q6xq1skA6Qh8Len35lw46Y%2BN%2Fnyn8W4MYF9DQJUJShjKReDpz%2FG6NFWk7ReAMelBvyGo6D3hmKrxyPyDpku0wTAG3lXETd%2Few%2FL0lBtxw0PIEAw5FGmND%2FBTOT9Wxi5IFwYpvyTboLi%2FxydibBEzYT9RR4tJM2txZGIkGqaqARpVLMs1xTd9YxV1s525DDON%2BNpgCd7DyNHpxm5PBIwYTTzi7%2F943iW%2BeGqKzgQZ51ClVPNKGQE7fGTDHLvAEvt4mCDJeTVWruqef%2FknZHQDAB799%2B2Z3nOY729HppH%2BPGXvvINCr%2FweBTlOjnrk5FrDTqFCgFU8ToMruPNLPydgUUvwWAhp%2FNBpRzmyxwJrjFYUvxCZBqhR3GpXGOmzZOFXKEou3oUELQx5iJRmJcZjs3ThjXnaUl0wimfkk%2Bwu7lUgqLgsr2%2BNSSvOqYYcMGmNb1jcxMJRt%2BswuoPIxAY6pgFfEpoGj7NyFjByaKTfuP%2FCBZkcZtE3ICtBS9wG0u3eY1EutV46iGuj0Ing8JRf5thhLR3Hzja371YDS%2BlDJYRoGEpVX%2ByFP3sHlrbm4cF3u63SrFd%2BdH2KmkyPmrNRMa8TfqWvZzosOW0sUjvARYxzNyhEh1cPQdvMr0IO4t5OyDoaoKLPS%2F%2BSIFQkzl%2BaSk5Mmm%2BRu9UgxmFC7txuLermFsbc%2FTng&X-Amz-Signature=17c887761fedcd4a35fb7c9052da74fd59df11248483bf3f47dbfd6f07dc28be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOD6RAB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGs2ITkN%2B%2FZytoTDqqr0SSZm9ifRlZCSUWrV26EipobnAiAXi9QlWYNQ2bUYxDMDTpPJ01ooaG4qmpzE1vP%2BDDJqgCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMKmUPW0ZfMiGAs5pFKtwDj2%2FSyJ9c8hLegOIxCdbT2BAwa8DP7leOuXT2AuRLnI%2FRXS%2BBSybo4yzWVRMnp7znYof9X1IPYMlkcUVgLbMWgvoAwtkf6jCFNqxN12ClolnePR%2BBzQ4RFF0zcLk7zrSq9BEHTxFVAmSO6Hcz5uZNKrgxzRq4KHm5KcNZcyM%2F%2FCiX25r8q6xq1skA6Qh8Len35lw46Y%2BN%2Fnyn8W4MYF9DQJUJShjKReDpz%2FG6NFWk7ReAMelBvyGo6D3hmKrxyPyDpku0wTAG3lXETd%2Few%2FL0lBtxw0PIEAw5FGmND%2FBTOT9Wxi5IFwYpvyTboLi%2FxydibBEzYT9RR4tJM2txZGIkGqaqARpVLMs1xTd9YxV1s525DDON%2BNpgCd7DyNHpxm5PBIwYTTzi7%2F943iW%2BeGqKzgQZ51ClVPNKGQE7fGTDHLvAEvt4mCDJeTVWruqef%2FknZHQDAB799%2B2Z3nOY729HppH%2BPGXvvINCr%2FweBTlOjnrk5FrDTqFCgFU8ToMruPNLPydgUUvwWAhp%2FNBpRzmyxwJrjFYUvxCZBqhR3GpXGOmzZOFXKEou3oUELQx5iJRmJcZjs3ThjXnaUl0wimfkk%2Bwu7lUgqLgsr2%2BNSSvOqYYcMGmNb1jcxMJRt%2BswuoPIxAY6pgFfEpoGj7NyFjByaKTfuP%2FCBZkcZtE3ICtBS9wG0u3eY1EutV46iGuj0Ing8JRf5thhLR3Hzja371YDS%2BlDJYRoGEpVX%2ByFP3sHlrbm4cF3u63SrFd%2BdH2KmkyPmrNRMa8TfqWvZzosOW0sUjvARYxzNyhEh1cPQdvMr0IO4t5OyDoaoKLPS%2F%2BSIFQkzl%2BaSk5Mmm%2BRu9UgxmFC7txuLermFsbc%2FTng&X-Amz-Signature=ad745e9c5c1283667f2b3d2f2e062d188d161cda6c6769a65a41538fab621383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
