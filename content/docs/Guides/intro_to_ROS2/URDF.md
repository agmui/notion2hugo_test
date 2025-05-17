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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNPWR7P%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcPFjyHYIfsqU%2FbOKf58Z9No2wMBU7ygfijmRWEKXWKAiEAxiDwfSzJwy2cu6%2FAdFg28p5kp4NudxHk19Y63XZpzA4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH7CrZmRVFaWAS9BTSrcA7fkJazLwN%2FTUg196St43m2tehDntlRT0qfxOPPnwrfReDFx8WGVNgJ%2FoaiaEhPpdsWX2tKUO%2FMGiQvYwLS8NBv4Nf7JpPEYuKCSQ2XRbHkjQCD8w1acwkduPF%2F0oXjMpjZOaAZuOzxbL0GOAt0NsH7WgQ99Sgz82YSw48fX1XXQTAENfUBo%2BwuEewBB0V5UzwbzOd5%2B2tz3ZO8lH4mZwihbptFCiJDL0%2BLNdhnUXBa4qCF7Vi5J5CA5gOmL58aZ2cfGQlhc1V%2FOZ5E1BBGvWcT2CCpJHRlO4HduLA0ZGsDqrmXkpOh0Qe0LbuyX4TbzLrAL0%2B8DrD8hQ4NqN3MWwwBbsrkWHc1Gaql9QVdNe61QIcU4ESuKSW0KX2t9rs0rT5bEEsZAOWFeIDwh8kDF%2FpDSD91x1sVet5BFx%2B2I5we3ltdppxRM5SrJJco9S42S5vlcl1n45xL6ufje8euW5z9rXMD5brzq6lB5D9Qj8U%2F%2FnQSmjyI6B7e4zoBH6g2Zzxqz%2FDrp6cPIM82uDDWCM4AKULEuaAX%2F2xneYWGGJE7SX6KQY8xF%2FJBajulMunl9nZI3P5ODVJR5sNmbHJRhyXH%2BiWaRVSLbFM2KCRHzaETs8it3Na3rQCDxP1LWMJS2osEGOqUBq96mVpGguO3DszNwhKpShxYW1WZ8Cme5sTxUYmevcx6k4buAl6AyyZyV3b3XEa2%2BDkPZFKmjfKaAfoQsjTwx%2Bk5xhcbGNHOOpSSCMNxexhYmGP8lnKK0Lo851uTqhVItZOuH1oxIzQ5O8VPpJ62%2B%2FJJQw5%2B3LbYkiNE5TSb14lHowRlHJcgv44F4h%2FPh4CSieoiULY0ArmBONK1TIYtvG0%2B0EwzZ&X-Amz-Signature=f748054fa40370a37d2fffc5d9b1725d6d48f60b0fc021347898a7d0e71f2c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNPWR7P%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcPFjyHYIfsqU%2FbOKf58Z9No2wMBU7ygfijmRWEKXWKAiEAxiDwfSzJwy2cu6%2FAdFg28p5kp4NudxHk19Y63XZpzA4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH7CrZmRVFaWAS9BTSrcA7fkJazLwN%2FTUg196St43m2tehDntlRT0qfxOPPnwrfReDFx8WGVNgJ%2FoaiaEhPpdsWX2tKUO%2FMGiQvYwLS8NBv4Nf7JpPEYuKCSQ2XRbHkjQCD8w1acwkduPF%2F0oXjMpjZOaAZuOzxbL0GOAt0NsH7WgQ99Sgz82YSw48fX1XXQTAENfUBo%2BwuEewBB0V5UzwbzOd5%2B2tz3ZO8lH4mZwihbptFCiJDL0%2BLNdhnUXBa4qCF7Vi5J5CA5gOmL58aZ2cfGQlhc1V%2FOZ5E1BBGvWcT2CCpJHRlO4HduLA0ZGsDqrmXkpOh0Qe0LbuyX4TbzLrAL0%2B8DrD8hQ4NqN3MWwwBbsrkWHc1Gaql9QVdNe61QIcU4ESuKSW0KX2t9rs0rT5bEEsZAOWFeIDwh8kDF%2FpDSD91x1sVet5BFx%2B2I5we3ltdppxRM5SrJJco9S42S5vlcl1n45xL6ufje8euW5z9rXMD5brzq6lB5D9Qj8U%2F%2FnQSmjyI6B7e4zoBH6g2Zzxqz%2FDrp6cPIM82uDDWCM4AKULEuaAX%2F2xneYWGGJE7SX6KQY8xF%2FJBajulMunl9nZI3P5ODVJR5sNmbHJRhyXH%2BiWaRVSLbFM2KCRHzaETs8it3Na3rQCDxP1LWMJS2osEGOqUBq96mVpGguO3DszNwhKpShxYW1WZ8Cme5sTxUYmevcx6k4buAl6AyyZyV3b3XEa2%2BDkPZFKmjfKaAfoQsjTwx%2Bk5xhcbGNHOOpSSCMNxexhYmGP8lnKK0Lo851uTqhVItZOuH1oxIzQ5O8VPpJ62%2B%2FJJQw5%2B3LbYkiNE5TSb14lHowRlHJcgv44F4h%2FPh4CSieoiULY0ArmBONK1TIYtvG0%2B0EwzZ&X-Amz-Signature=1121c467ea62d9770984d149b7c901095123c03d2738d435c9e65c81bd746478&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
