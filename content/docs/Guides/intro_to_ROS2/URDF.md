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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2J2W7NT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2Bh%2BkIVm4ZPoCNKtPpwQVWlmnGa286S3YjZhOMVxVxgIgRH5lk0ITGWebsJYmF34yyIPUMBvGGWZsOypSdlMyefYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8rZDFB9lkj%2FL9hhircA2nXDdwsgsg8OQaLA6Xd2Wy2p8f58TFChQAaLWzfQlqjPX2URHLyY9RrpPfDYe1lrQimbZAH9XZ4f3EjffOr7USd82hEq0uavNBaij77lb%2BZCw7MXRwKp5uWq%2BsbwHi6L52p0kAQ5hfakjkw9V3EG4m%2FWtwME5OowrZspCMsQZ7kU681KyP%2BeCKUE9PJxU6DbX6uv%2Fy795qX4wbUlrI7y139axTneLT2vJ1AMBvZ2uqrVWZ0jPcvW1fyR1J6rOD6lhT%2BPLVv1Z6nBo3EfRt1Xd4gwPqRYVIfgUtcXlA36PzQLsee5Hr7DTNRgH0EFihm21BmHxBLVbzOpjDEC5Q25IAmeuG6ztaiJWA0yYp2PBEDrC28vYBG%2FSbC5QcLexSH33yFxzZQ0WDWYEHC2DSAOoRdZ0gpUK%2F9ZFNFPY5ZvJGwxbv4fcnzZVSYxXTzfYKqnJUfoQuBrFzzQazfIuCXc6Jmj4fI%2BxmSksKB5KW6KnEAgTAeAi7fcGjnu2mg3mg%2B%2BnrWUfpftOhHSzvNEBDk6lyklA%2B7LdP%2FKpwse4OEeajbNCXNrk2i1uSkOkd3ZVRRBUx8sIb5t9uMmEYTos397Qz35%2B32V6elKulxpEDH4P5ALBev63rIUUZHVkZ8MMH9hb8GOqUB51MWA9INV4QKB0C0EqncmYVRqPi3z7Ltj9XVBjr5%2Bj1Q8G6ejSZkA2gbX%2FuqP%2BOJBgDEuFXHW0gtmwUAyHbAQ5ZDShfY%2B8OrlFLt57l662oymuswaQdZ6XaAKet5UEgj99zqICsG4zeD5kQCcALsaU6gfdcIbohJww96Imxo%2FFGBsDoDVYXf7MeZMZJJbEZwEKFxT4Ctx%2FWs7NeburDkn2JjD21J&X-Amz-Signature=e666437e1bd11ddd511086dde28977861d24eee6e378cd0cbc78f5146e148571&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2J2W7NT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2Bh%2BkIVm4ZPoCNKtPpwQVWlmnGa286S3YjZhOMVxVxgIgRH5lk0ITGWebsJYmF34yyIPUMBvGGWZsOypSdlMyefYqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8rZDFB9lkj%2FL9hhircA2nXDdwsgsg8OQaLA6Xd2Wy2p8f58TFChQAaLWzfQlqjPX2URHLyY9RrpPfDYe1lrQimbZAH9XZ4f3EjffOr7USd82hEq0uavNBaij77lb%2BZCw7MXRwKp5uWq%2BsbwHi6L52p0kAQ5hfakjkw9V3EG4m%2FWtwME5OowrZspCMsQZ7kU681KyP%2BeCKUE9PJxU6DbX6uv%2Fy795qX4wbUlrI7y139axTneLT2vJ1AMBvZ2uqrVWZ0jPcvW1fyR1J6rOD6lhT%2BPLVv1Z6nBo3EfRt1Xd4gwPqRYVIfgUtcXlA36PzQLsee5Hr7DTNRgH0EFihm21BmHxBLVbzOpjDEC5Q25IAmeuG6ztaiJWA0yYp2PBEDrC28vYBG%2FSbC5QcLexSH33yFxzZQ0WDWYEHC2DSAOoRdZ0gpUK%2F9ZFNFPY5ZvJGwxbv4fcnzZVSYxXTzfYKqnJUfoQuBrFzzQazfIuCXc6Jmj4fI%2BxmSksKB5KW6KnEAgTAeAi7fcGjnu2mg3mg%2B%2BnrWUfpftOhHSzvNEBDk6lyklA%2B7LdP%2FKpwse4OEeajbNCXNrk2i1uSkOkd3ZVRRBUx8sIb5t9uMmEYTos397Qz35%2B32V6elKulxpEDH4P5ALBev63rIUUZHVkZ8MMH9hb8GOqUB51MWA9INV4QKB0C0EqncmYVRqPi3z7Ltj9XVBjr5%2Bj1Q8G6ejSZkA2gbX%2FuqP%2BOJBgDEuFXHW0gtmwUAyHbAQ5ZDShfY%2B8OrlFLt57l662oymuswaQdZ6XaAKet5UEgj99zqICsG4zeD5kQCcALsaU6gfdcIbohJww96Imxo%2FFGBsDoDVYXf7MeZMZJJbEZwEKFxT4Ctx%2FWs7NeburDkn2JjD21J&X-Amz-Signature=f7452e9170d769f647b2525c192cc6126c5976660ceb3145503c8aaf1a860d78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
