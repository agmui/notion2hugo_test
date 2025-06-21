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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVICZY2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2lQCrv1oWUpBorHOuk0D%2F34%2Bu5ZEhEhm%2FGGU9mY0G5AiBGtcuP5SvZYr4tfR38mSx52MgJ%2B642rNiOuQMjz0wfJiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FD3cdxvdQ0%2FdqExsKtwDLOegSDwZkEPS9%2B8V1nkKxdgZPk6FacnajFXx%2BPPryJ9psB13bm0XEP2T1uApPYnTlpggYY9A8UIn73V1ZghbSkzNn6evpVOsyo0bJB8%2FdKfuyUPgF0D7eRWyryCsxgsPqltcePFHEpCihWvQhhdUbE8NpL9vIegjkOtoHWTSyFRq4B4yq7YVAMu65VkTezz2z5eCT%2BABmWtCP5raiKPIPdHwV79AIEwgj2SL1WGjF%2FholYjAPTmEwpPJSbnljn4bf%2FKbZ%2FSgjlTRQHO6%2FCWSV69oi%2BfQPgZsK0h2OlTD4JhOQLT7qdDwe4SpHneYwUhqilN4Vjz8mJT%2B%2Bc0k0DstSwNXnS6vOgpmal1lOC6RQ3fRRFe2ykgR2mC590oUTYMUfv%2Bspp1dLdB0vyruQZUbT7m%2B1luezLi8GvbljQ9jxkxxpXMTPjKw9i%2BEKMY1s%2BMyEhKJ%2Bpsp3eePejFbXH%2Bay%2FJr%2BF%2BXYBYcxjMoAwayab6foAofNZgXx2vaXecGwUS0LpVgMxBYbDcCFgnlJS7MOHvob52f1VCg%2BT5Smbz%2B712CrR5%2FOC6XUCQ%2FAVBUF5b0J8mt0yFuf061y0IaOeXOg2wBirIIFuElwLGehPUtwRUDqbrM7y38p3h6TkkwwaHXwgY6pgHn12TnxPpG%2F3n%2F2%2BFXKAZDtk9iSSOfvJVt3pbf%2FwZ70%2FNJBArCmhoHozeIIprmlIZLogJTvwsd7%2F1LJWOhVHWJ6MFALkvILEn%2F3ISEGGKwY6w48noejxbwg8phtfxazbA9Ir3fVuFoySe%2BbTvbLeJwwclS5qgWTWe9w50tyf7EOcoHQlarldCS%2F2%2B7PnExoAl4YZfpU%2BwZTcGYKGRO4%2FJTpPcahqfh&X-Amz-Signature=fdcbee710937cc4bcc1384117711facab9c54e87bdff36ebb86ca56662c0042b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVICZY2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2lQCrv1oWUpBorHOuk0D%2F34%2Bu5ZEhEhm%2FGGU9mY0G5AiBGtcuP5SvZYr4tfR38mSx52MgJ%2B642rNiOuQMjz0wfJiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FD3cdxvdQ0%2FdqExsKtwDLOegSDwZkEPS9%2B8V1nkKxdgZPk6FacnajFXx%2BPPryJ9psB13bm0XEP2T1uApPYnTlpggYY9A8UIn73V1ZghbSkzNn6evpVOsyo0bJB8%2FdKfuyUPgF0D7eRWyryCsxgsPqltcePFHEpCihWvQhhdUbE8NpL9vIegjkOtoHWTSyFRq4B4yq7YVAMu65VkTezz2z5eCT%2BABmWtCP5raiKPIPdHwV79AIEwgj2SL1WGjF%2FholYjAPTmEwpPJSbnljn4bf%2FKbZ%2FSgjlTRQHO6%2FCWSV69oi%2BfQPgZsK0h2OlTD4JhOQLT7qdDwe4SpHneYwUhqilN4Vjz8mJT%2B%2Bc0k0DstSwNXnS6vOgpmal1lOC6RQ3fRRFe2ykgR2mC590oUTYMUfv%2Bspp1dLdB0vyruQZUbT7m%2B1luezLi8GvbljQ9jxkxxpXMTPjKw9i%2BEKMY1s%2BMyEhKJ%2Bpsp3eePejFbXH%2Bay%2FJr%2BF%2BXYBYcxjMoAwayab6foAofNZgXx2vaXecGwUS0LpVgMxBYbDcCFgnlJS7MOHvob52f1VCg%2BT5Smbz%2B712CrR5%2FOC6XUCQ%2FAVBUF5b0J8mt0yFuf061y0IaOeXOg2wBirIIFuElwLGehPUtwRUDqbrM7y38p3h6TkkwwaHXwgY6pgHn12TnxPpG%2F3n%2F2%2BFXKAZDtk9iSSOfvJVt3pbf%2FwZ70%2FNJBArCmhoHozeIIprmlIZLogJTvwsd7%2F1LJWOhVHWJ6MFALkvILEn%2F3ISEGGKwY6w48noejxbwg8phtfxazbA9Ir3fVuFoySe%2BbTvbLeJwwclS5qgWTWe9w50tyf7EOcoHQlarldCS%2F2%2B7PnExoAl4YZfpU%2BwZTcGYKGRO4%2FJTpPcahqfh&X-Amz-Signature=6443286951ca83d5d3febc27caba6d1283c86d944505a4c7572fec779925cd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
