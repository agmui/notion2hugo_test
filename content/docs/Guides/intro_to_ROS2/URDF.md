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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FG7MPUG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLddrcjinz%2FVGg8kZkGUaCbkndEWnoxXKmxfLO4PT8KAiEA5S9ICc2s1R53sQYB2XDZZAjWRoZi8GzrwvmT5ap11w4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHia26CdbGd1MVXJXSrcA1CfpqJylOLwoiZdXu0w3oBkDOLffRu1Wmq3BnlqEB7GXewIUnCA%2BHk%2F4dSubQEiu6oNUUEhHkgQ60zhAGOUD6261114jGdyQdmUOJEgj98KMI28nBoV8cUeLgasAtntKiOA09xhJVRk65jyvoW7FHUFVo0IEp1%2F8s4CtLIgJLk9%2Bszyi0E6YmzwhMQoiloZJurdiXauBwwB7PF4OrIlGk5LhWzkvJPwCqpM%2FrGGlbC9FxYOZYwoMdj3w%2FBXERaOKcbiqNzQYhdje6IqDLsmq9HwnvdltdR2%2B0Pq322wgg4B%2F7BnIDOM24lR%2FCFSwiCUb9NesZlhF4E7uv12aQg5yqAmafs5bMja8nyrCRbBmzHoo6rTjkEfzlPRQvFynJdlEPJ3HGbjSEp99xvf2Ki%2BWqAOwWqmrPpzXiEl1W8mD9so7SCmKYFhS2AIvvE5A9UUEzxssaozw1RqTrR21RBuP%2FogSaufgY6ok7c%2BIgSFN%2Bf1pZxmxjp2sjHB67a2EAVTSZQHsegGCilAWqljHiF6krQZXZ%2FHQn03Gv4IoGwPSVa%2B6SfuAKfkYLAlGSXnS3u1ZkWf3VPRS5S4%2FEhUZ2ib9Y07isf9TTkr6n%2Fr7ffewutU9nXITAaUKNiaqJTKMPijycIGOqUBej6uvZLcadAkUF1ZE%2FDuN%2FYAAiN6auQcVZf2zrvB1dypHg3CHxkWZ5VNkDDuzQGdzqlZIfXd45rSMcOaHm3V7G8w6496PZNvulcjcNlhZFvEHXxD2xx0%2Bicxubr7JkCAQ8mIr8J9x2QDwWqKBRgHiKotrEcFGuXypOaHF8qCLhLa37bBy3MxZPRqzWiEiGZPliMuedPJ5gpVYRqL%2FrdsAv%2FLrypb&X-Amz-Signature=2f05b17b33e92757a9da84cd79c6052b4bc134eee359e3eb94193618da5a4e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FG7MPUG%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLddrcjinz%2FVGg8kZkGUaCbkndEWnoxXKmxfLO4PT8KAiEA5S9ICc2s1R53sQYB2XDZZAjWRoZi8GzrwvmT5ap11w4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHia26CdbGd1MVXJXSrcA1CfpqJylOLwoiZdXu0w3oBkDOLffRu1Wmq3BnlqEB7GXewIUnCA%2BHk%2F4dSubQEiu6oNUUEhHkgQ60zhAGOUD6261114jGdyQdmUOJEgj98KMI28nBoV8cUeLgasAtntKiOA09xhJVRk65jyvoW7FHUFVo0IEp1%2F8s4CtLIgJLk9%2Bszyi0E6YmzwhMQoiloZJurdiXauBwwB7PF4OrIlGk5LhWzkvJPwCqpM%2FrGGlbC9FxYOZYwoMdj3w%2FBXERaOKcbiqNzQYhdje6IqDLsmq9HwnvdltdR2%2B0Pq322wgg4B%2F7BnIDOM24lR%2FCFSwiCUb9NesZlhF4E7uv12aQg5yqAmafs5bMja8nyrCRbBmzHoo6rTjkEfzlPRQvFynJdlEPJ3HGbjSEp99xvf2Ki%2BWqAOwWqmrPpzXiEl1W8mD9so7SCmKYFhS2AIvvE5A9UUEzxssaozw1RqTrR21RBuP%2FogSaufgY6ok7c%2BIgSFN%2Bf1pZxmxjp2sjHB67a2EAVTSZQHsegGCilAWqljHiF6krQZXZ%2FHQn03Gv4IoGwPSVa%2B6SfuAKfkYLAlGSXnS3u1ZkWf3VPRS5S4%2FEhUZ2ib9Y07isf9TTkr6n%2Fr7ffewutU9nXITAaUKNiaqJTKMPijycIGOqUBej6uvZLcadAkUF1ZE%2FDuN%2FYAAiN6auQcVZf2zrvB1dypHg3CHxkWZ5VNkDDuzQGdzqlZIfXd45rSMcOaHm3V7G8w6496PZNvulcjcNlhZFvEHXxD2xx0%2Bicxubr7JkCAQ8mIr8J9x2QDwWqKBRgHiKotrEcFGuXypOaHF8qCLhLa37bBy3MxZPRqzWiEiGZPliMuedPJ5gpVYRqL%2FrdsAv%2FLrypb&X-Amz-Signature=e7cbde258ba0aac48f90b262033aee6605ed549d2286c6ae5cd07318450e4cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
