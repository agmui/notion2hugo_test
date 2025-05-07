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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHS63TK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcVU07w4EMSpy7mni6Z1qLNfbaGfpkKsScwlSbQbL%2BKAIhAPWPdqHwNTq72B6rflRAuBnSvHIzO8I1S3eigPl3kMqDKv8DCGMQABoMNjM3NDIzMTgzODA1IgxAIGtugxa5O390cVgq3APffz4jhqWNBSQ37gbdDluB%2BvoevBp53eklbmEVnNIMnitAmyWS13J4lGKAOoPWMcb%2BpKFcW3FBmFSQ7I7lV1%2BYk46BF9U4X69RLV1vob%2FRouh2BOuOM4TpL3TqawR6MGaviPI9somp%2BxWWMA6etVabpW9nSbabR%2FS%2BOFZPGbnr7stxRsh9pGuCw2fFPo%2FuRme5LNCoMR4Tsp%2B18JZ%2FZpIkqUKlVAw4davffpGH4GiupPA%2Bm9TdeKKhSpWQPusjSIpYNXbI%2F0vRu1O%2FyffFrXHgTpCymMfkBfg8daTkky%2FVjmDjRobn4w%2F1yHobZN4IlLbgf%2Fkn2wpxLmUf4CXTJRIf22fPF3driKnbtczKqWc27i7Bt7zSDaxFyA7W1xjFPZ5UypiGrsefI9au6PBK5kGRiNRSIFiNPEYjwhZ%2FRlRpdwbMPZltxrQ4bRR5q7YlLZQoyzoVqMc2nM5t5uCfDBrrgqFpYAP7JTshJ37oBNq392fJoYBmqkKJBlkr7SKICJ7Hck%2BcpOlppy9MD69o6cMY6PdUE12zQvIB9fWtabD7yGWbDgE%2BQfyERoHg%2F%2BU9grHKGB8EFCsKOv5GFHuCkJSv3FFYGgqMFd%2FsomvaTHntDqYFA0VxG1V4SE0AtzDsuO7ABjqkAc%2BL2TaSEuU%2F5vBzBmfsODgePPCNwFC8vDqE%2BMXSFxfA%2FqgtsXjkfMUyykcUfSXAOR%2BfPQzL7wzsCzI29uHkuaOo%2BmYJ80%2BO5OkHDQz%2F1kCtj7aqkqIRdcRrLIXpb4C9huL0q9xyRdiiT%2FfadKeVE%2FyUXVvKlCgh1EHPmla4wEdLSEbvLXddlSyoWDZ0AXG4%2Bjh%2BvjXGQX8RfFUlGr8B0%2BvnmaYF&X-Amz-Signature=d1a76e07da11b69912cfee9357fbe96a6403fb4583c0b5560deaf3516e919992&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHS63TK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcVU07w4EMSpy7mni6Z1qLNfbaGfpkKsScwlSbQbL%2BKAIhAPWPdqHwNTq72B6rflRAuBnSvHIzO8I1S3eigPl3kMqDKv8DCGMQABoMNjM3NDIzMTgzODA1IgxAIGtugxa5O390cVgq3APffz4jhqWNBSQ37gbdDluB%2BvoevBp53eklbmEVnNIMnitAmyWS13J4lGKAOoPWMcb%2BpKFcW3FBmFSQ7I7lV1%2BYk46BF9U4X69RLV1vob%2FRouh2BOuOM4TpL3TqawR6MGaviPI9somp%2BxWWMA6etVabpW9nSbabR%2FS%2BOFZPGbnr7stxRsh9pGuCw2fFPo%2FuRme5LNCoMR4Tsp%2B18JZ%2FZpIkqUKlVAw4davffpGH4GiupPA%2Bm9TdeKKhSpWQPusjSIpYNXbI%2F0vRu1O%2FyffFrXHgTpCymMfkBfg8daTkky%2FVjmDjRobn4w%2F1yHobZN4IlLbgf%2Fkn2wpxLmUf4CXTJRIf22fPF3driKnbtczKqWc27i7Bt7zSDaxFyA7W1xjFPZ5UypiGrsefI9au6PBK5kGRiNRSIFiNPEYjwhZ%2FRlRpdwbMPZltxrQ4bRR5q7YlLZQoyzoVqMc2nM5t5uCfDBrrgqFpYAP7JTshJ37oBNq392fJoYBmqkKJBlkr7SKICJ7Hck%2BcpOlppy9MD69o6cMY6PdUE12zQvIB9fWtabD7yGWbDgE%2BQfyERoHg%2F%2BU9grHKGB8EFCsKOv5GFHuCkJSv3FFYGgqMFd%2FsomvaTHntDqYFA0VxG1V4SE0AtzDsuO7ABjqkAc%2BL2TaSEuU%2F5vBzBmfsODgePPCNwFC8vDqE%2BMXSFxfA%2FqgtsXjkfMUyykcUfSXAOR%2BfPQzL7wzsCzI29uHkuaOo%2BmYJ80%2BO5OkHDQz%2F1kCtj7aqkqIRdcRrLIXpb4C9huL0q9xyRdiiT%2FfadKeVE%2FyUXVvKlCgh1EHPmla4wEdLSEbvLXddlSyoWDZ0AXG4%2Bjh%2BvjXGQX8RfFUlGr8B0%2BvnmaYF&X-Amz-Signature=3d6f7eebafd0cbec9f6f731d188cb596d83dc250aa109b1a1d32f8663f732d98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
