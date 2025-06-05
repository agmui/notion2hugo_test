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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MKY6H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDdMMh0deIfMCrDjjv06Gj%2F51xfOjeLJKRaj5kpqXnVSQIhAJc%2Fu%2BcVrOsbeNufhbko82rE4XbxV%2F79eDSEj6oUNs%2FRKv8DCEwQABoMNjM3NDIzMTgzODA1Igw2%2FGKmn2yQMvfTqpEq3AP%2FENNOFA7w7mcPSNW95%2FluuWIRieT5%2F2t08%2B1GZbMgIxQpEBr87wqPGk0kh4%2BzPWJEmAlsS5%2FawLi%2BMC7cWp3NdT3qRsn2oDpYshNq%2FhM%2BbKQUZzs4%2FFFXsde64%2BRMVK9Qi%2FkZa3OkB6KUYrLWnSnCFnqNv5%2FHISfnIMetUIMjBCLVNj7jNsttVTDBvvXLLJmL6LfGcpjInOeMFz%2BScctY8tI%2FKgMl0ZT%2BHKfbARlbgow8fUhNeevkAprdK9bLmwjcBYtiLKOTSc6%2BRlqVyERrLEvFgrPW%2B0HWh8nYPe7CQVmV3oMQfLYheD6%2BiFZbJAeTjQT9FmxA6cgXTvrpVtREnUhPiUE6ve4MFbVq1kMAM2nfQ7QFSm%2FmSih2iTYSLmS6ILo0YFStAzVF6levaEeEs1VZEB7Ge4HABO6oT1rh7hVljsDnTeN4SHsNTEEanZtNsq%2BltnxeAgLV0U62h%2F%2F9bN2eCf7FhkWp3f7tC0a%2FL9PPtMbPD9SvFrWHxDocosboHe43DCAJA%2BDSDpr2lVl6PLlYma2m%2FM84AOHgn6tuhKiGkU2ASaqmnb%2BLo5u7xbWmD%2B2k7Z9NR25Ut8ayWCigqktDigmJXhe5CV9rudAfn4nIzj%2FYTDK3LaJIgTDM2IfCBjqkAf9GnkmvvKaKNRMXhCFPO9tIRCyijc1IxrE%2B%2BSPJNH2tR7qlOzU%2B9RO%2BnQdhWhOQbgdRWHrZFX0DJpP3nUIrBmP4pQ9bcq0NcwGu8va9oq5MtsUtQSgL5YC7guIresN3UGhNvnp4v7G7O%2FBTbrS2oCz7ZL7%2FSqH8jtOoeFWZXroXhjWZ94eyHP%2FLFdNgQr8ppB95IjqtJnWPucBByP5psLaEDP8J&X-Amz-Signature=c8298e4719c987c3b9b200c79b880ebe577f1b3eb0d2baed350a98f0c500617b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MKY6H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDdMMh0deIfMCrDjjv06Gj%2F51xfOjeLJKRaj5kpqXnVSQIhAJc%2Fu%2BcVrOsbeNufhbko82rE4XbxV%2F79eDSEj6oUNs%2FRKv8DCEwQABoMNjM3NDIzMTgzODA1Igw2%2FGKmn2yQMvfTqpEq3AP%2FENNOFA7w7mcPSNW95%2FluuWIRieT5%2F2t08%2B1GZbMgIxQpEBr87wqPGk0kh4%2BzPWJEmAlsS5%2FawLi%2BMC7cWp3NdT3qRsn2oDpYshNq%2FhM%2BbKQUZzs4%2FFFXsde64%2BRMVK9Qi%2FkZa3OkB6KUYrLWnSnCFnqNv5%2FHISfnIMetUIMjBCLVNj7jNsttVTDBvvXLLJmL6LfGcpjInOeMFz%2BScctY8tI%2FKgMl0ZT%2BHKfbARlbgow8fUhNeevkAprdK9bLmwjcBYtiLKOTSc6%2BRlqVyERrLEvFgrPW%2B0HWh8nYPe7CQVmV3oMQfLYheD6%2BiFZbJAeTjQT9FmxA6cgXTvrpVtREnUhPiUE6ve4MFbVq1kMAM2nfQ7QFSm%2FmSih2iTYSLmS6ILo0YFStAzVF6levaEeEs1VZEB7Ge4HABO6oT1rh7hVljsDnTeN4SHsNTEEanZtNsq%2BltnxeAgLV0U62h%2F%2F9bN2eCf7FhkWp3f7tC0a%2FL9PPtMbPD9SvFrWHxDocosboHe43DCAJA%2BDSDpr2lVl6PLlYma2m%2FM84AOHgn6tuhKiGkU2ASaqmnb%2BLo5u7xbWmD%2B2k7Z9NR25Ut8ayWCigqktDigmJXhe5CV9rudAfn4nIzj%2FYTDK3LaJIgTDM2IfCBjqkAf9GnkmvvKaKNRMXhCFPO9tIRCyijc1IxrE%2B%2BSPJNH2tR7qlOzU%2B9RO%2BnQdhWhOQbgdRWHrZFX0DJpP3nUIrBmP4pQ9bcq0NcwGu8va9oq5MtsUtQSgL5YC7guIresN3UGhNvnp4v7G7O%2FBTbrS2oCz7ZL7%2FSqH8jtOoeFWZXroXhjWZ94eyHP%2FLFdNgQr8ppB95IjqtJnWPucBByP5psLaEDP8J&X-Amz-Signature=37b6c214ea6b15b6979770a2becf60530017364d0eeecf27c6fc2428e17e817f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
