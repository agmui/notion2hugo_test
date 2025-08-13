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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXCVFO3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVx6cvtdtfPqDhx%2FqQ2Z2RTiscV%2FZ6AoIEBeEn8nMRVAiEAk9Wl3KwoNjvbLisZj%2FROpvqrXBz47fKtFF4xqbCfnDUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFjGuxFp4QnthlQAOyrcA06YFP17yU1thDL6x%2FuJOYnIyiP2se7ybnBBPiNdOU3gOyc6eMzHSQ3X56Mt0sTs5fl8S7Gy8ZSPmb9gb5p%2B1QX01uN1qlRg%2FWhHQnPtaoaofEzZOc09Pn%2BNpsGpmp6jM6h9Fy6sQMgQNot53Qi%2FE1sOB6YsRat1rnuF8UJoknx5q8sB40f5YR0J4BuTm28M5H%2FTXTyQOkW3ZGh%2BKewAFQju0eHmlBohhNy7HrdmlcKVzVySOacRqqKuAu4PjwRtopcp4lWN%2ByWQUcRzq5xykwnHSNmpL%2Fq9YgqqSOqFMUt%2ByHPOMTf9YvDEQgziTlESCSXG2yq7F25mmECAMnu0KBDR862PfjY8r%2FyAFmbyWNAlqef0QOckNc94BFY45zXIGi%2BiRKkOwRo5QM31XEc2peNY%2FUZG1kfxcHJQjuabD0g9BPVbvuKNn2wG0lPJRJfjzn5il%2BujHqh0mkdzW1i5W5BGXgKTpgVfozA7R2HYiTbzSWLUz9PV5GbkHfkfZhvOry8E6bPgiFAHRe9T7YM7UcEP2tPmESBY2vL7Jz7sUc2n52WYQ%2FsB%2FGZ2U46GPv9BBp6QaZQyG9TWK5RTMYgHBXACj3W6JujSLs%2Feir9Std8NF%2F8zH52QD9oKb03wMKD48MQGOqUBXtJynA51lchbu5gY2kKdvsWRsE%2BTFJtPtE%2BImdmHBJhOP7a3UpMEf10LnAZi8Mvaz7X8r49Cow6D0QhYgcun%2BN45xdMstCi3c6hmx5Aaj%2BEZwWijVZ%2BSOPH4QnZrGSXY5aYevN6iWwneSqsPB17yrteO2LOxZi71i1LLeBP%2FV%2FpBgYRrbVX8Hi6e7EJa0eyfQ1eGleYm08Qm%2Fl%2BqPqMAOJg2bkyA&X-Amz-Signature=d18752a6be9c99af199392ff0b8896ec674f31f6966baeb153f49e14f797bc8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXCVFO3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVx6cvtdtfPqDhx%2FqQ2Z2RTiscV%2FZ6AoIEBeEn8nMRVAiEAk9Wl3KwoNjvbLisZj%2FROpvqrXBz47fKtFF4xqbCfnDUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFjGuxFp4QnthlQAOyrcA06YFP17yU1thDL6x%2FuJOYnIyiP2se7ybnBBPiNdOU3gOyc6eMzHSQ3X56Mt0sTs5fl8S7Gy8ZSPmb9gb5p%2B1QX01uN1qlRg%2FWhHQnPtaoaofEzZOc09Pn%2BNpsGpmp6jM6h9Fy6sQMgQNot53Qi%2FE1sOB6YsRat1rnuF8UJoknx5q8sB40f5YR0J4BuTm28M5H%2FTXTyQOkW3ZGh%2BKewAFQju0eHmlBohhNy7HrdmlcKVzVySOacRqqKuAu4PjwRtopcp4lWN%2ByWQUcRzq5xykwnHSNmpL%2Fq9YgqqSOqFMUt%2ByHPOMTf9YvDEQgziTlESCSXG2yq7F25mmECAMnu0KBDR862PfjY8r%2FyAFmbyWNAlqef0QOckNc94BFY45zXIGi%2BiRKkOwRo5QM31XEc2peNY%2FUZG1kfxcHJQjuabD0g9BPVbvuKNn2wG0lPJRJfjzn5il%2BujHqh0mkdzW1i5W5BGXgKTpgVfozA7R2HYiTbzSWLUz9PV5GbkHfkfZhvOry8E6bPgiFAHRe9T7YM7UcEP2tPmESBY2vL7Jz7sUc2n52WYQ%2FsB%2FGZ2U46GPv9BBp6QaZQyG9TWK5RTMYgHBXACj3W6JujSLs%2Feir9Std8NF%2F8zH52QD9oKb03wMKD48MQGOqUBXtJynA51lchbu5gY2kKdvsWRsE%2BTFJtPtE%2BImdmHBJhOP7a3UpMEf10LnAZi8Mvaz7X8r49Cow6D0QhYgcun%2BN45xdMstCi3c6hmx5Aaj%2BEZwWijVZ%2BSOPH4QnZrGSXY5aYevN6iWwneSqsPB17yrteO2LOxZi71i1LLeBP%2FV%2FpBgYRrbVX8Hi6e7EJa0eyfQ1eGleYm08Qm%2Fl%2BqPqMAOJg2bkyA&X-Amz-Signature=14b89e5fe27254af0a800bce0dabd971aa973d0021a627c4d4a8798baaba81b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
