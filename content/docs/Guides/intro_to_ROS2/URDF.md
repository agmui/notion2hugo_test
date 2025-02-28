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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWONZNH3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAe%2BXArp1AOjHlyWe8RIaphcEk5SkNr2l2dX2gATG31BAiEA4ZWLUJ4TSv%2BCSk9R16RAW8uUJiNgoNnR0QdByELtuHAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTEa4KfAMf1YpZkVyrcA8Vy1xpwxYwz%2BQjc7t8yubq2rM8qQmjpmet8p5fSsAEgvfeanbJ9apoi%2F73%2BgimsDloKV%2BNRIBS3AvH1Xv1Z6i6DrkztMo97GH2IEhszim9AdJYxVLvy2f6grab%2FbrDGCMclGbjZCdrqd5krG8dv8XZgvx7I749ecp00%2By6cYi8o9dKPt3exmSXEXfRg6LSgd%2BQ%2BNWpNs8SNuvCfgmJfCdkw%2BEfoUO9qV1YXsZJ%2B%2B56ht5plX9aYNPYLL4x0bHWgfmiuTSDqvOrCLzF7vG04JBJfMCMud%2F3fyO55bD9MH77yccQLyZ1OyVw7w8MJK5SgwagNDi8wKIUfJzHZ0rXf8Lnu7UHcKLRsAlCAYgfmaAiQenxkurbba24mCMipUBLo5cduiu4ZVMbqbfs5bNSlM4q8poNQcMYGL0oytE%2FXldSX4iDLQljOQIprwGxUosY79ZNvBcpjkfo6QyBzfbU9junj0Z2k7OcRilpbpc8vR6sAZVbEQPgOp0ChxgDA7DpZAwrmk7EBrkew5CZxr%2BLtxNKhQOSWMof2xSXN7QYfSWLztOnJVao4Yq54wjiiAE4xR%2FrVG9jFEtim6eguJsw8wf7UI0FSivgZUdZwmRoEfDn%2BebFOf9dZymDkW13%2BMN3Nh74GOqUB16WI%2B%2F19isCIe%2BUMPCxOgsU52zEsukxB%2BSgO%2BBLesLa%2FeT8ipDhsHRACnKlBCFru6Dz2uZuE65JKatFv1VHQEH7hfaeWPGvjJMbTanE7wx%2B8qhG0ZR9htakN4tBjIXy6kdrGtr7lR%2FiN4tMs%2B3OVaxAHY2BhRSVG7Q%2FP7n6JNHfh2NR62QrqKuha7tKXsw%2F3huaGsPxnwFcu3EfvVFjSKclW5cJP&X-Amz-Signature=0c6a3a8a7bbf96534fab0319da75fd6c92f71320b7116b34c85524cadc6286f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWONZNH3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAe%2BXArp1AOjHlyWe8RIaphcEk5SkNr2l2dX2gATG31BAiEA4ZWLUJ4TSv%2BCSk9R16RAW8uUJiNgoNnR0QdByELtuHAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTEa4KfAMf1YpZkVyrcA8Vy1xpwxYwz%2BQjc7t8yubq2rM8qQmjpmet8p5fSsAEgvfeanbJ9apoi%2F73%2BgimsDloKV%2BNRIBS3AvH1Xv1Z6i6DrkztMo97GH2IEhszim9AdJYxVLvy2f6grab%2FbrDGCMclGbjZCdrqd5krG8dv8XZgvx7I749ecp00%2By6cYi8o9dKPt3exmSXEXfRg6LSgd%2BQ%2BNWpNs8SNuvCfgmJfCdkw%2BEfoUO9qV1YXsZJ%2B%2B56ht5plX9aYNPYLL4x0bHWgfmiuTSDqvOrCLzF7vG04JBJfMCMud%2F3fyO55bD9MH77yccQLyZ1OyVw7w8MJK5SgwagNDi8wKIUfJzHZ0rXf8Lnu7UHcKLRsAlCAYgfmaAiQenxkurbba24mCMipUBLo5cduiu4ZVMbqbfs5bNSlM4q8poNQcMYGL0oytE%2FXldSX4iDLQljOQIprwGxUosY79ZNvBcpjkfo6QyBzfbU9junj0Z2k7OcRilpbpc8vR6sAZVbEQPgOp0ChxgDA7DpZAwrmk7EBrkew5CZxr%2BLtxNKhQOSWMof2xSXN7QYfSWLztOnJVao4Yq54wjiiAE4xR%2FrVG9jFEtim6eguJsw8wf7UI0FSivgZUdZwmRoEfDn%2BebFOf9dZymDkW13%2BMN3Nh74GOqUB16WI%2B%2F19isCIe%2BUMPCxOgsU52zEsukxB%2BSgO%2BBLesLa%2FeT8ipDhsHRACnKlBCFru6Dz2uZuE65JKatFv1VHQEH7hfaeWPGvjJMbTanE7wx%2B8qhG0ZR9htakN4tBjIXy6kdrGtr7lR%2FiN4tMs%2B3OVaxAHY2BhRSVG7Q%2FP7n6JNHfh2NR62QrqKuha7tKXsw%2F3huaGsPxnwFcu3EfvVFjSKclW5cJP&X-Amz-Signature=10ae316dba2caa3e5a9d32914bbb8c3480b9d0c139a712a02f4c4a6e827a3ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
