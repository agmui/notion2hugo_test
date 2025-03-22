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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URD5EMQQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFGDqU%2BOgEzYqAyuS8%2Bm7qUCDGNS4nCsNqFqnn1I%2FagrAiEA4HvuVj7PJYcViiDnD2U7WDWlbobi59bccCtRTWtOtMYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1Cn7BSfKegriCxRyrcAwBFOO8ReRKEw5LyAuF%2Bu06Bka2T4Vf335X4nAmYorfXIdDKh106f%2BRDXiXzI2kjVeQZnGCUwNwibSGM79%2BQOjZElXkWfrNzC9%2BpUZn8dpD2QP%2F3UwMzjSzC5fXepHvMSPlkza0Wlb2GcUD%2BQqZw1Em84roc3zASQtRf9R8oI4%2BawiQWQPGIke8EkOAC1fhlOeXKiZI5mUYGb2%2BDN9i2uQPXCK4IucB45ZVcENWczl3uPoNNwpu%2B%2FX6qBtUuS8KGZZtLeJ%2Bi8%2BBMkK9L8oOew%2F%2Fo9Qfn3Tay1CLngchaPoXIN4STNh64rGhMO2KluJlCfMRAuybgVPK7YIvb6wlFQ5e4Vk9SXkWalMuv9cBNhhugybF9f9KsA3loCxL9rWz%2FRcmSROdmLb%2FI0v9HjTuJCYgNL3Q%2Ff9jhw1Do5vffXDz8ucfANkNfEK3no1kc5WhsUuRyTcZChXE2YXgOqKlYBppBcnxYNNSZK4LhNRAmkCxVoXE9OrSG1LuCC8ohGUaxDdjzOb4JlfBEl61%2BjGberm0qB%2BqIjY4Stsz7UorgOXco12mmlPI6guRlH6sR2qS0A5BjtXDjOey1phngja1f7fjmx%2FtdzZhqjHrlax123bnHgFAoZL7f19abASneMMau%2Br4GOqUBKe%2Ftl%2F4DBylR6kEYqX60t8aEiQD3YD%2FaBB%2BMps56BUjdmVZWhbuYDOlEV9c0vrDv%2BPmBWByF9oW90WxwMAQBxo69Rv6ED9pIFxLhSuVNBYw2nMGcv6P4IjDkr7qEGDRt3buy5Eq1NgXupMlhaNTQXT%2F5JQZ80hShW6Uv1DHQZ8Yd%2F9JPJKLV5VQf2lfYZKhIHSE2ucWtbZdBEc6U6Xyn1I5luxRj&X-Amz-Signature=d49ae8e6c3f02dfb47bb80a3948b826f6fdb3e0d2af27d8aa27de753be785b67&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URD5EMQQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFGDqU%2BOgEzYqAyuS8%2Bm7qUCDGNS4nCsNqFqnn1I%2FagrAiEA4HvuVj7PJYcViiDnD2U7WDWlbobi59bccCtRTWtOtMYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1Cn7BSfKegriCxRyrcAwBFOO8ReRKEw5LyAuF%2Bu06Bka2T4Vf335X4nAmYorfXIdDKh106f%2BRDXiXzI2kjVeQZnGCUwNwibSGM79%2BQOjZElXkWfrNzC9%2BpUZn8dpD2QP%2F3UwMzjSzC5fXepHvMSPlkza0Wlb2GcUD%2BQqZw1Em84roc3zASQtRf9R8oI4%2BawiQWQPGIke8EkOAC1fhlOeXKiZI5mUYGb2%2BDN9i2uQPXCK4IucB45ZVcENWczl3uPoNNwpu%2B%2FX6qBtUuS8KGZZtLeJ%2Bi8%2BBMkK9L8oOew%2F%2Fo9Qfn3Tay1CLngchaPoXIN4STNh64rGhMO2KluJlCfMRAuybgVPK7YIvb6wlFQ5e4Vk9SXkWalMuv9cBNhhugybF9f9KsA3loCxL9rWz%2FRcmSROdmLb%2FI0v9HjTuJCYgNL3Q%2Ff9jhw1Do5vffXDz8ucfANkNfEK3no1kc5WhsUuRyTcZChXE2YXgOqKlYBppBcnxYNNSZK4LhNRAmkCxVoXE9OrSG1LuCC8ohGUaxDdjzOb4JlfBEl61%2BjGberm0qB%2BqIjY4Stsz7UorgOXco12mmlPI6guRlH6sR2qS0A5BjtXDjOey1phngja1f7fjmx%2FtdzZhqjHrlax123bnHgFAoZL7f19abASneMMau%2Br4GOqUBKe%2Ftl%2F4DBylR6kEYqX60t8aEiQD3YD%2FaBB%2BMps56BUjdmVZWhbuYDOlEV9c0vrDv%2BPmBWByF9oW90WxwMAQBxo69Rv6ED9pIFxLhSuVNBYw2nMGcv6P4IjDkr7qEGDRt3buy5Eq1NgXupMlhaNTQXT%2F5JQZ80hShW6Uv1DHQZ8Yd%2F9JPJKLV5VQf2lfYZKhIHSE2ucWtbZdBEc6U6Xyn1I5luxRj&X-Amz-Signature=417f24f0b76097f9140b31412bfad825a2b361329bd87d5d987e68a460b9f7d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
