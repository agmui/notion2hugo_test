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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GT4TDU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFBZEtMp7DldsqOzpfdMAqh2ebmLEXykMYkDH4Gypt1HAiBJleIsZFyFfEiTbjTidsN0TMugS1osD14WrWo970vyxyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMfzxxzJmir8fOXau9KtwDKzD26bN0h3%2FlKySiaB1vPvxvUR%2B1ORlyNwrMZG4Y%2FMWtFsuCD7BDhWjEmm6MXydC9Ai2VzWPsAkiW2IHs3r5T1qjjyOf4F%2FpQ4pEPGHipHp6XS46N7uXMBgi2KW2dJvZF1cxsxwcgbqlHlrBO5Z0ZTA8ggzjjDkc66VickajYfk3OE6Rou3SQQdkueNZNALRvScHjiBW9YbXyubS9LUhBtt2N3%2BvSUoPAeXXa2WLlQlDoAeN%2FEjXU3TYdQrjEXuKe7fa8v0hWtSh9Wxj1t%2FqcEt7eRU6asEWEv5wLVxBhueM8OPEhc%2B%2F%2Boscbj4gstQ8fkPMpspwT0E3RlYFjb7nChcUKVeJ5MACI4Tn4k5Y6Lrs9i0X3NHMsL7VPyP3lDbN1oNePpnLPcnftDSSD0UE2rAt%2BWQRNU%2BCOGQOJwmobid9XhBDvBStXxEVYrNPgmAu7Ntc3KdzqHmN%2FX9Kdm79ol%2FHNmSg8PkLNBqlDGvmZ7OylRzhfb%2Bg7ZazauyRSw265yxJ0%2FJRhfxufk11r4lPDZub3Uvsj0lM9DbNj%2BEXjohl6dYqJMIU3IceejeTApIht6d1pLXU7ud%2FgVpdLig%2FrKgE9vX7NVO47F9SdY7HGTHwfS4tOTIV8C2UD44wsP%2BUxAY6pgEGp76WKqgDL2ume3eD4YL7sPI2bQQT%2FzcJjS8B1AI3HH1CUdlDZqJXjlDWaoqDc4PGHTYsnmKH8R4RwTxP6TMphIy0TPhmr2Z1KQp9S4akQjAhz8Skh%2FzxAWWuD%2F1%2BsUz1wicLahO0W2b45Y96JlPAF9eJhU%2FlI0No57OzBAG%2FqRQkuiyiDFitu2QBvHkN%2FP03ZxrNmW7GMcYNiDXTL74wBs5LSC1e&X-Amz-Signature=181c9e8d450fa0e68acde4489f1b2ff5f24cd68be66f68e01544200428d370fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GT4TDU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFBZEtMp7DldsqOzpfdMAqh2ebmLEXykMYkDH4Gypt1HAiBJleIsZFyFfEiTbjTidsN0TMugS1osD14WrWo970vyxyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMfzxxzJmir8fOXau9KtwDKzD26bN0h3%2FlKySiaB1vPvxvUR%2B1ORlyNwrMZG4Y%2FMWtFsuCD7BDhWjEmm6MXydC9Ai2VzWPsAkiW2IHs3r5T1qjjyOf4F%2FpQ4pEPGHipHp6XS46N7uXMBgi2KW2dJvZF1cxsxwcgbqlHlrBO5Z0ZTA8ggzjjDkc66VickajYfk3OE6Rou3SQQdkueNZNALRvScHjiBW9YbXyubS9LUhBtt2N3%2BvSUoPAeXXa2WLlQlDoAeN%2FEjXU3TYdQrjEXuKe7fa8v0hWtSh9Wxj1t%2FqcEt7eRU6asEWEv5wLVxBhueM8OPEhc%2B%2F%2Boscbj4gstQ8fkPMpspwT0E3RlYFjb7nChcUKVeJ5MACI4Tn4k5Y6Lrs9i0X3NHMsL7VPyP3lDbN1oNePpnLPcnftDSSD0UE2rAt%2BWQRNU%2BCOGQOJwmobid9XhBDvBStXxEVYrNPgmAu7Ntc3KdzqHmN%2FX9Kdm79ol%2FHNmSg8PkLNBqlDGvmZ7OylRzhfb%2Bg7ZazauyRSw265yxJ0%2FJRhfxufk11r4lPDZub3Uvsj0lM9DbNj%2BEXjohl6dYqJMIU3IceejeTApIht6d1pLXU7ud%2FgVpdLig%2FrKgE9vX7NVO47F9SdY7HGTHwfS4tOTIV8C2UD44wsP%2BUxAY6pgEGp76WKqgDL2ume3eD4YL7sPI2bQQT%2FzcJjS8B1AI3HH1CUdlDZqJXjlDWaoqDc4PGHTYsnmKH8R4RwTxP6TMphIy0TPhmr2Z1KQp9S4akQjAhz8Skh%2FzxAWWuD%2F1%2BsUz1wicLahO0W2b45Y96JlPAF9eJhU%2FlI0No57OzBAG%2FqRQkuiyiDFitu2QBvHkN%2FP03ZxrNmW7GMcYNiDXTL74wBs5LSC1e&X-Amz-Signature=54b5bd67ade895acc70f7f748f15ab6135dd846fd7509151d7bfc333efb32561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
