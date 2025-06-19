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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VLBVE5H%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBDDAnomFndgpe9o8yX30NANwDN%2B%2FNoU4NeZBLsjtGcwIgYPljWKHmu2k%2BxSE1tZrAF%2FPw%2B53HG%2Bd5VTcJ53p4z48qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNajJSyGdmiOGhCeuircA7jsbS9ArELR20%2BKYCYzlWufElf4VW7aEQJVHq4ToIhT%2BbNtGOUmVCb2fpNj7Vm88v7TA2yBSfDwMgi8A%2FSdnjQkU2fkTB5AO%2FBSFSW33IXS8rK9PHiM6b7rOvAvqmNy%2BBNcn%2FcCp2M2Jxjp3Euxb0kypacNmelQWhBUG9HQvMsiVFPW6ORLMm5CHIDq7BkVltlYTCmkqx0YaoTvsE0mO8zgwgyiV5uwCP0wCU%2FYlNmF073bIhsYPsaD56c%2BUnluB%2FpvSEIWvZjFqew2T32TecEnwPnTv6XUq1uOdDO0%2BBHrLhHbpO10LU6KvcFlvfpCwXsP6G5zsomKjIC0pOPXLu9jvmJfB9NQdL0N%2Bt8CZZvsk72YtEWZxLdFfnDw0HjUPS1WeUoROz1poKSuMU%2B1Gzvynt9SzTvLWeKggloOd%2FSs79Sy7Q2gB92M%2Fy3T708zjkEPqoq9s%2FSyAPMYSa%2FORJX33P0BgukA8D7sH8%2FOY8sAxSfDEeli0UJ3Tvn%2BjftZcHMB3%2FlKMDM%2Bridb8XcIFmASwGtqTQGmKaKXiB1pMC1mCHsZsMF5KViKf0jjVRmi6axlVNlCp9uKbTUMx%2Finl4EQCH%2Fpe%2FejwukTdwZ8K1DChHbcdHqLUjCw09E4MLnRz8IGOqUBkEv8BgfH6d0kakQxoWI5BOQ7xjW5B9beMXIAuNlczOmvbAPMo5HwA6m57hJQKM8Ivo6%2BGRID8%2FR7zppEgeOChSfyyU%2B9IaCRXir74C9W896c4vT0Bxzjq4kMWWzYF19TIdL9oWxgjNSfK0IB5bL%2FYbDlusQf9i7S6AuXArZesr8yGhK0l75m7%2BGajIMZC%2FKChGwktF6T4GJz0YbneKyeoX8iD%2FOO&X-Amz-Signature=84615a88f1098109bb5fe6e970b61b819848fd213d7174f0dc739b1e4a791007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VLBVE5H%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBDDAnomFndgpe9o8yX30NANwDN%2B%2FNoU4NeZBLsjtGcwIgYPljWKHmu2k%2BxSE1tZrAF%2FPw%2B53HG%2Bd5VTcJ53p4z48qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNajJSyGdmiOGhCeuircA7jsbS9ArELR20%2BKYCYzlWufElf4VW7aEQJVHq4ToIhT%2BbNtGOUmVCb2fpNj7Vm88v7TA2yBSfDwMgi8A%2FSdnjQkU2fkTB5AO%2FBSFSW33IXS8rK9PHiM6b7rOvAvqmNy%2BBNcn%2FcCp2M2Jxjp3Euxb0kypacNmelQWhBUG9HQvMsiVFPW6ORLMm5CHIDq7BkVltlYTCmkqx0YaoTvsE0mO8zgwgyiV5uwCP0wCU%2FYlNmF073bIhsYPsaD56c%2BUnluB%2FpvSEIWvZjFqew2T32TecEnwPnTv6XUq1uOdDO0%2BBHrLhHbpO10LU6KvcFlvfpCwXsP6G5zsomKjIC0pOPXLu9jvmJfB9NQdL0N%2Bt8CZZvsk72YtEWZxLdFfnDw0HjUPS1WeUoROz1poKSuMU%2B1Gzvynt9SzTvLWeKggloOd%2FSs79Sy7Q2gB92M%2Fy3T708zjkEPqoq9s%2FSyAPMYSa%2FORJX33P0BgukA8D7sH8%2FOY8sAxSfDEeli0UJ3Tvn%2BjftZcHMB3%2FlKMDM%2Bridb8XcIFmASwGtqTQGmKaKXiB1pMC1mCHsZsMF5KViKf0jjVRmi6axlVNlCp9uKbTUMx%2Finl4EQCH%2Fpe%2FejwukTdwZ8K1DChHbcdHqLUjCw09E4MLnRz8IGOqUBkEv8BgfH6d0kakQxoWI5BOQ7xjW5B9beMXIAuNlczOmvbAPMo5HwA6m57hJQKM8Ivo6%2BGRID8%2FR7zppEgeOChSfyyU%2B9IaCRXir74C9W896c4vT0Bxzjq4kMWWzYF19TIdL9oWxgjNSfK0IB5bL%2FYbDlusQf9i7S6AuXArZesr8yGhK0l75m7%2BGajIMZC%2FKChGwktF6T4GJz0YbneKyeoX8iD%2FOO&X-Amz-Signature=dc80317e0044d6c490ae1e2371d2ba809bd6e1b1e03252a448cc69735421142f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
