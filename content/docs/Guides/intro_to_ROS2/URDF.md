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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOVCRJJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIB0Zm1Jw9MD0j9sdtOfnG5PgkRtJbfOZmgQhFsTmahFHAiAyd7XRSmW1bvfVfYNw%2BYcjkoy%2BbeJw9mXJSwotdHP74SqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOTSh8MEOsbE%2FcHZKtwD4AfhF1i9V3%2FNZfe%2FVIZJa9BgGNAG3KijUYe0dwCquHD9AaoucB52oTB9l6S44OH%2F%2FpsCHABWDja5QQ0pBnjL5ASe4fDGtllrCDlEga9fxGUjsgv4s9myy4UZD6BTkOBhPuW0iDPiYjPuMDOTESKHWwPo6oJ3Q160ZqzGqTi1Q1mkmCY7SQvzq1ayxyuHawNW42Moovu2hdIBIEsorcJ7GN8a1eMpVixmpLDyoDmpeK6mtszjVUf0VJAewVQCk9erNCm9Ro2QVFbeBPZRbyDdnEy3AZ62ddocWaNnAa%2BXCwUS%2BCR5%2FbJtZaY6A6oMwHMd9wgtsZIoIIB5LANf1a0mFFsZZdXgdD8ZiDzfcLqVmBS%2F2edtbVbUmKP6VCCSX%2FozU9Vd2grdI0OP3kjezHDcuKBNtDwZIADuvBRwEFTkjJ5QaEri4TMoZeBLdFwOUAlXV%2FtcAi85ja%2Bk7hjBh6ZZfeEUfawtJ0JV1Wudkxxg6qflrbFz4bnYJB0s0S7bhJ11MvMgkUnLZBsUPtumgwKmfgA%2BJ0qImJmsaM2VaSqolDP6kYA0wEb4Kga3da50BxuLjcupCbzMqDyHeOsOKOKAcMy%2FBs0YXLsTr3AEmGlnWyPA6y%2BtV93YXyk7HRQwgt%2FwwQY6pgESBq8HBi%2BrOR%2BYZA%2B%2F1h2M0ApicRfcg1ZzAAa%2FvJoRl%2F3CjDNHGrUaNf9%2FfsdFuzT9q1bQFIolvcMCS0I7ATkuc9YZ0eDP60L7M0TmBII4SBAooIIAe1NPELPwblDv4qfLEVlM78MT30VRu4qqrqM9lyYvY27XX2Z%2Bpvr3O04XFN2sAeD5fKQWa99COUlfZmWnjXojm%2BwYEk1h1ouJMJBLmX4JSovI&X-Amz-Signature=a8023d42c57ece537f96370801e053441f6caf2d09e2fb526356fdd06bbd936d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOVCRJJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIB0Zm1Jw9MD0j9sdtOfnG5PgkRtJbfOZmgQhFsTmahFHAiAyd7XRSmW1bvfVfYNw%2BYcjkoy%2BbeJw9mXJSwotdHP74SqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOTSh8MEOsbE%2FcHZKtwD4AfhF1i9V3%2FNZfe%2FVIZJa9BgGNAG3KijUYe0dwCquHD9AaoucB52oTB9l6S44OH%2F%2FpsCHABWDja5QQ0pBnjL5ASe4fDGtllrCDlEga9fxGUjsgv4s9myy4UZD6BTkOBhPuW0iDPiYjPuMDOTESKHWwPo6oJ3Q160ZqzGqTi1Q1mkmCY7SQvzq1ayxyuHawNW42Moovu2hdIBIEsorcJ7GN8a1eMpVixmpLDyoDmpeK6mtszjVUf0VJAewVQCk9erNCm9Ro2QVFbeBPZRbyDdnEy3AZ62ddocWaNnAa%2BXCwUS%2BCR5%2FbJtZaY6A6oMwHMd9wgtsZIoIIB5LANf1a0mFFsZZdXgdD8ZiDzfcLqVmBS%2F2edtbVbUmKP6VCCSX%2FozU9Vd2grdI0OP3kjezHDcuKBNtDwZIADuvBRwEFTkjJ5QaEri4TMoZeBLdFwOUAlXV%2FtcAi85ja%2Bk7hjBh6ZZfeEUfawtJ0JV1Wudkxxg6qflrbFz4bnYJB0s0S7bhJ11MvMgkUnLZBsUPtumgwKmfgA%2BJ0qImJmsaM2VaSqolDP6kYA0wEb4Kga3da50BxuLjcupCbzMqDyHeOsOKOKAcMy%2FBs0YXLsTr3AEmGlnWyPA6y%2BtV93YXyk7HRQwgt%2FwwQY6pgESBq8HBi%2BrOR%2BYZA%2B%2F1h2M0ApicRfcg1ZzAAa%2FvJoRl%2F3CjDNHGrUaNf9%2FfsdFuzT9q1bQFIolvcMCS0I7ATkuc9YZ0eDP60L7M0TmBII4SBAooIIAe1NPELPwblDv4qfLEVlM78MT30VRu4qqrqM9lyYvY27XX2Z%2Bpvr3O04XFN2sAeD5fKQWa99COUlfZmWnjXojm%2BwYEk1h1ouJMJBLmX4JSovI&X-Amz-Signature=d445b54003a69332426a53d4f04b5f4ec814bf60e70b650dca6aadb386cfff19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
