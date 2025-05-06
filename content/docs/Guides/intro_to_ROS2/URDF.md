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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYUKT66%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHXeYTe7btyIFWim7BtvuJhcJ6NeT0L%2F2dZUHCtFC0dAiApdFPXBXJr%2BqH1p%2BmnsBu8KP4wN6MUBx1GlXtjZ8zA9Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM1QU2Tqty7Z9LwV%2BJKtwDPV5WDOW7VLcXjZCJNuz8whCC8KXxW%2FzLi%2FWAT5ZZtoinuMn9bLLMbetxT7XkHKVW1XxfmTKE%2Bsn%2FjRehQ6GKZPh7UwZ%2F25zt5pRcv3lo7pJMy0viNxfAW4h1idPpU%2BEYUMy0JxHna6DbojDVV%2BcG4O6YVRFcnor55u90WEyj6nBaVIBhH7cDR%2BzzhNNmsOmSCJzi8xHtETm7Qq%2BAGGZyQDpOirrFHymUb%2FaVrrARxhOM%2BDBgu4wP6QC4lb1X%2BeffDifCSrB%2FtMGJoCf2s4sXXJ8ijBEjzE9YA%2Bln6gqOgAk4GLrXQw2B68ffnUac1OQqE58GvZn%2FAMhUrzoLuwYWZfONDszdsVbJ1kZihCFSndM1OxM1j3HNA3MJvEDyAlgGeH%2BPf60q1H%2F9B%2BqunRSKv2vC3ZrAtl0BnDXC3DBI8BpON1EUtj8WZEnhkfKnV5a7gHsdGoPc%2BJ%2BsYQbeMX9oHanNS%2BBERf2S7ZRR13CIOfIbfqtwYzOvT45%2BB4VEFuuBdloy7OtaNqYVKBHubHMxipc7c3MdkoIv2hAQ2D9JKz29a4Sw8NzfoTsFBbMJIIEfANGUoMEmZWjM9HkcmsD0K3PRJGRZlBsZ6qYOptD%2Frkuc89EZjNzwt8ooBDUw%2BZXqwAY6pgFcoMa6WnPa0qFMa%2Fk7SFcBSQA33WE%2BQcoTemZ4Q1A0OIr6cCr0z2Z6lBHpfti5ilSpThhIrxgLJUGJLjlURSkA9agIy2yx7yN%2BdqIQaT4yyuxlaKtBQARob%2BKwPZnjOXWr84dvyi5vgQOaUhVSaPCwbxmjtqQbm8AChjQSdwxAfPbaJeaikiifTG3JZkLZOcco%2Fcg65KqQKht4gTLX2TEH0RckqLLY&X-Amz-Signature=f2db4b9c4c61beefa85c22c6996d30307b35c34bbd80a9fa80bd0526f2f415a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYUKT66%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHXeYTe7btyIFWim7BtvuJhcJ6NeT0L%2F2dZUHCtFC0dAiApdFPXBXJr%2BqH1p%2BmnsBu8KP4wN6MUBx1GlXtjZ8zA9Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM1QU2Tqty7Z9LwV%2BJKtwDPV5WDOW7VLcXjZCJNuz8whCC8KXxW%2FzLi%2FWAT5ZZtoinuMn9bLLMbetxT7XkHKVW1XxfmTKE%2Bsn%2FjRehQ6GKZPh7UwZ%2F25zt5pRcv3lo7pJMy0viNxfAW4h1idPpU%2BEYUMy0JxHna6DbojDVV%2BcG4O6YVRFcnor55u90WEyj6nBaVIBhH7cDR%2BzzhNNmsOmSCJzi8xHtETm7Qq%2BAGGZyQDpOirrFHymUb%2FaVrrARxhOM%2BDBgu4wP6QC4lb1X%2BeffDifCSrB%2FtMGJoCf2s4sXXJ8ijBEjzE9YA%2Bln6gqOgAk4GLrXQw2B68ffnUac1OQqE58GvZn%2FAMhUrzoLuwYWZfONDszdsVbJ1kZihCFSndM1OxM1j3HNA3MJvEDyAlgGeH%2BPf60q1H%2F9B%2BqunRSKv2vC3ZrAtl0BnDXC3DBI8BpON1EUtj8WZEnhkfKnV5a7gHsdGoPc%2BJ%2BsYQbeMX9oHanNS%2BBERf2S7ZRR13CIOfIbfqtwYzOvT45%2BB4VEFuuBdloy7OtaNqYVKBHubHMxipc7c3MdkoIv2hAQ2D9JKz29a4Sw8NzfoTsFBbMJIIEfANGUoMEmZWjM9HkcmsD0K3PRJGRZlBsZ6qYOptD%2Frkuc89EZjNzwt8ooBDUw%2BZXqwAY6pgFcoMa6WnPa0qFMa%2Fk7SFcBSQA33WE%2BQcoTemZ4Q1A0OIr6cCr0z2Z6lBHpfti5ilSpThhIrxgLJUGJLjlURSkA9agIy2yx7yN%2BdqIQaT4yyuxlaKtBQARob%2BKwPZnjOXWr84dvyi5vgQOaUhVSaPCwbxmjtqQbm8AChjQSdwxAfPbaJeaikiifTG3JZkLZOcco%2Fcg65KqQKht4gTLX2TEH0RckqLLY&X-Amz-Signature=47b59e1f6c7324427f24f67709ba3f73bd67bf39037f1c73090449ff0d6e5388&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
