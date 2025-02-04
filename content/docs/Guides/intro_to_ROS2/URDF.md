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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIAQI66%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICpzYI5f%2F6avDKifDL1vug0Rl2QXqqopwYdvzR3YwPIKAiEAs5CuM5j5e04d7WXif%2BNOC8ycFVa5WAlfNuJaYEdWZuMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJl3%2FIj%2FYEYs3lyEhCrcA9HdrimvsZXIoCqgLeSC4kZVNzBy09LOuAvKMMN8BJmwGA1W8xcvrbhBN%2BD38pO4CAe9zl3nIkJcSDs11HXQVt6jPrJiZ3tzPK5eXgj2ObT5TjWjYxh2%2B8hA1caYkiMf9CfE3IEi1%2BlJAgPD73XK12Fmv9HANiRzTMTuMPwWm8LjDF2qakSuzezTIS7tANQarYtstTA2My1wnIaIkriI1aa%2FufhPQTAOdAtubxvJNgsuyJQIFUQTLWANG0A0ztmJY6bFV8WBbR%2B%2F3iUU3FFG3Wzv2fstcUShWDZypAydENMy6zEiXT9a%2B0AwyAPeTAyhUKx5TF%2BKkADjfTR4GhWb%2B7uGafcVjDRqGAdz5cp27w%2B4ZyBrmtHqMnyTg7%2F2rQpc7YTa7DKBQMwk2JM%2FhJ00N7qhdGFGbhishpZp14%2B4Z3FG%2FpRarvYxmYyq33FpBfgySxfTZ0iQeme0cjJS7SNKIXMmESf5L3XfkQ2aUnmexVMa%2FSngYSb%2BaQl%2Bx6wka8KRxE4fC0t6%2FsAtsY4z1sKtfRzPcbpKub%2FTDoTFux%2BwMrJnZx%2BlIl7%2FZZZe083zOy4PdFBiG9xAgNcwfToL5Shr0rdSGJ2JPZy4h4zNLKloVVfABcmtlWyw2lqPPgBcMOivh70GOqUBTEngOzbmklnCD3RKcYjBCqgGlKByd3t4ubHNkjoY0wsf9GKghvSKSXonz7sBtJKd4stVjdW462hzsCGoTsXv695xvEJD0S3RQ86LZe4d13pjPpaJEv9g%2BmPlyTR2oop6aBq4bBhe11yFfyFF9gtPgqNv13CzJFmD8tOpR5dEkA8mo8RA54Y6GbXEpxFHT6%2FBGFYmVtqYVaHutn%2FeaZQiKhjwVcJv&X-Amz-Signature=49268efdac816f637b17e61662b551fab748fa392663fb21e82e9568fbd35258&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIAQI66%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICpzYI5f%2F6avDKifDL1vug0Rl2QXqqopwYdvzR3YwPIKAiEAs5CuM5j5e04d7WXif%2BNOC8ycFVa5WAlfNuJaYEdWZuMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJl3%2FIj%2FYEYs3lyEhCrcA9HdrimvsZXIoCqgLeSC4kZVNzBy09LOuAvKMMN8BJmwGA1W8xcvrbhBN%2BD38pO4CAe9zl3nIkJcSDs11HXQVt6jPrJiZ3tzPK5eXgj2ObT5TjWjYxh2%2B8hA1caYkiMf9CfE3IEi1%2BlJAgPD73XK12Fmv9HANiRzTMTuMPwWm8LjDF2qakSuzezTIS7tANQarYtstTA2My1wnIaIkriI1aa%2FufhPQTAOdAtubxvJNgsuyJQIFUQTLWANG0A0ztmJY6bFV8WBbR%2B%2F3iUU3FFG3Wzv2fstcUShWDZypAydENMy6zEiXT9a%2B0AwyAPeTAyhUKx5TF%2BKkADjfTR4GhWb%2B7uGafcVjDRqGAdz5cp27w%2B4ZyBrmtHqMnyTg7%2F2rQpc7YTa7DKBQMwk2JM%2FhJ00N7qhdGFGbhishpZp14%2B4Z3FG%2FpRarvYxmYyq33FpBfgySxfTZ0iQeme0cjJS7SNKIXMmESf5L3XfkQ2aUnmexVMa%2FSngYSb%2BaQl%2Bx6wka8KRxE4fC0t6%2FsAtsY4z1sKtfRzPcbpKub%2FTDoTFux%2BwMrJnZx%2BlIl7%2FZZZe083zOy4PdFBiG9xAgNcwfToL5Shr0rdSGJ2JPZy4h4zNLKloVVfABcmtlWyw2lqPPgBcMOivh70GOqUBTEngOzbmklnCD3RKcYjBCqgGlKByd3t4ubHNkjoY0wsf9GKghvSKSXonz7sBtJKd4stVjdW462hzsCGoTsXv695xvEJD0S3RQ86LZe4d13pjPpaJEv9g%2BmPlyTR2oop6aBq4bBhe11yFfyFF9gtPgqNv13CzJFmD8tOpR5dEkA8mo8RA54Y6GbXEpxFHT6%2FBGFYmVtqYVaHutn%2FeaZQiKhjwVcJv&X-Amz-Signature=6cab973440f03bd54dc2b2a735a60d0d9ab3c3612c827176027f652193dc06a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
