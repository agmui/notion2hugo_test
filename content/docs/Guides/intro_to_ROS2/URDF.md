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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTIVHWQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSE7rKMej3PnA%2BVxsffnvzcqsIq2mhrpZ1Vyn3X7wU7QIgBITK3h%2FsU9wdiW0R0lo5bxGT1R9A2%2FqWtBpdm7ZaNSkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FPu5hb%2BHVwnLaoJyrcA%2FxnvFbANdiykNdiJyO%2FtSdHDW2j44b3LYsutZKqvWDpc9UVS7mFroJeJCIavreyi2t2kTJXGtFK%2FlDgDj47HBTIpzvpgB3CCRPQFUMtpjCb7QrdBQG0Jnr9N7sID%2BsvYDC3zkDpM9ZhuFB5mbO3WXKmkcTnFb4XJ8B%2FO5YusYVOf%2FoadBKvpzmYNODbtBR0Cdc%2BDiMPykJChlrqNOhCOAJuWt71E0ySEm8tuUj3bpl7PIz%2FQg0PIM4XInIheLODsEoJ4fm6dNP92RiaGR4vQg%2BxT2DDy8t2sxf9eWf%2B6ImFEoMdoKS5oW%2B6%2FnvYgW5Nk%2FuWb%2BUQ8CKP4QZdYViCrD1LjxAB1UGuBveQTYUhYLvsOLShZ2yJyHIBSb07R4AsbAPfTxGJnLBGuLy8S4nOnajgTAJxuSUrwyMWgDSuY9Wx4OXs29u9HL6FHGZom9IoYsVvt1jMLrXBof5vt2OJFPVfM7cKVnCeKcCCpOpXv4EIEWFYoygm2au4NexyphOFVBqhZMfg%2BPcaneSLhQpaDsSOhdsb4%2BkBN%2B3%2FEY84GBCyVEXkFtJH2YlEROcs6N%2BELH%2BibliYJS%2FTdQgQoQw7WLkLmqZb%2BGoXJp2OmdJsWir48wKRx59tD8ZtK5p%2FMLfe48EGOqUBbTJJpQhulh3fIl16xfqxV%2Fwcl1OYX0lxc3MbZc8hFMibnH6LAREpB1WPZItcNy%2B8wCUNRXY8hTpvmjCXTL2fFPBqy69b1Dtsu0BgGHh2qjC0KsHtxSNMntu2PifY5jFmIHIt85rvoVyOvtycp1mWRr80s2EOcPYOX1FH6FnrEjfwJdIs8Cot64s86%2BDiWYolfdtupFURYfQPBs80svy8%2FDs1vcfR&X-Amz-Signature=78669e71cc52f15b6f059f01466ccaec2107d0fe614778eded7b5cb56453199a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTIVHWQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSE7rKMej3PnA%2BVxsffnvzcqsIq2mhrpZ1Vyn3X7wU7QIgBITK3h%2FsU9wdiW0R0lo5bxGT1R9A2%2FqWtBpdm7ZaNSkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FPu5hb%2BHVwnLaoJyrcA%2FxnvFbANdiykNdiJyO%2FtSdHDW2j44b3LYsutZKqvWDpc9UVS7mFroJeJCIavreyi2t2kTJXGtFK%2FlDgDj47HBTIpzvpgB3CCRPQFUMtpjCb7QrdBQG0Jnr9N7sID%2BsvYDC3zkDpM9ZhuFB5mbO3WXKmkcTnFb4XJ8B%2FO5YusYVOf%2FoadBKvpzmYNODbtBR0Cdc%2BDiMPykJChlrqNOhCOAJuWt71E0ySEm8tuUj3bpl7PIz%2FQg0PIM4XInIheLODsEoJ4fm6dNP92RiaGR4vQg%2BxT2DDy8t2sxf9eWf%2B6ImFEoMdoKS5oW%2B6%2FnvYgW5Nk%2FuWb%2BUQ8CKP4QZdYViCrD1LjxAB1UGuBveQTYUhYLvsOLShZ2yJyHIBSb07R4AsbAPfTxGJnLBGuLy8S4nOnajgTAJxuSUrwyMWgDSuY9Wx4OXs29u9HL6FHGZom9IoYsVvt1jMLrXBof5vt2OJFPVfM7cKVnCeKcCCpOpXv4EIEWFYoygm2au4NexyphOFVBqhZMfg%2BPcaneSLhQpaDsSOhdsb4%2BkBN%2B3%2FEY84GBCyVEXkFtJH2YlEROcs6N%2BELH%2BibliYJS%2FTdQgQoQw7WLkLmqZb%2BGoXJp2OmdJsWir48wKRx59tD8ZtK5p%2FMLfe48EGOqUBbTJJpQhulh3fIl16xfqxV%2Fwcl1OYX0lxc3MbZc8hFMibnH6LAREpB1WPZItcNy%2B8wCUNRXY8hTpvmjCXTL2fFPBqy69b1Dtsu0BgGHh2qjC0KsHtxSNMntu2PifY5jFmIHIt85rvoVyOvtycp1mWRr80s2EOcPYOX1FH6FnrEjfwJdIs8Cot64s86%2BDiWYolfdtupFURYfQPBs80svy8%2FDs1vcfR&X-Amz-Signature=156ec76e656daa12e27f7330bf2989abb922f07f18b5c9dc6f620ef9cb287bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
