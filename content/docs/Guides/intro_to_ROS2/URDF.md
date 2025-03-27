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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAE2EMJ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2B9fmDifEwR0XkcGE3Uq%2BR82LeZMMhfM1YtsjJ2YqMAIgWPpE%2FltpPP2DcUFkJrOg9%2B3whh0S2FvHrJe8SiZ%2BLBwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL8kjIHLbm2SMIwizSrcA%2F%2FxqOqwkCCKQ7IPbjCv1fDSruLghOEDUMgTKaULNRtOM2PvmjkLhsqAGoOLrep%2F%2FbzQK0BXnq%2FhB9ssozpm6l2NeUH%2FEWSFJtx7R0BGdbscdMQeAkrSmbctartMGNmDtaO2DBKYvbJ0QFjbrc%2BsaP%2BQAwd1ZbjwVjhaUjG7ghRUMx6stOuVboL1pDLSURxItY2cE%2BA6K7iT7Yv%2FkYRqNCEr27dEr8bJvjx5HR69A2T817PjPAjkWpbsL%2FtmTBjq37sf7FS2nVsoAC1uOV3F5b7eW497KNNS5UfViXlZrSMcFVuKjgorxR4Rs95LPF3s8dyY8UYhpi4j5ME8%2FNE5%2BhUdblBSVPt9Q5Ab5XXQJk%2FX8XNRHVVjwkxS4t31TpKRbIgxmria2FGTxtZuZkNRO%2Bep7Pf3ulOprJLMDRjv8GPLx3fyQdu8xIxZn7CGzP6AYmdwnCskh%2BoIX4%2BuOwUmOf25fZLjVYugvaBnYoy0U1BI%2FrzfJs1ubUO%2BtrUYZXp4XZDLA3%2B4wVWXCdzmUaZvhb%2FXzaxqveQ8fOAUujIBBdJsOp1j%2FNfa5jSPI1uBPZoEL0J5ievRU8a%2FySPaAfm7zitxhHX%2BQtY6IEF9dcd0wzQ3eUDw1w%2B8gfpBp1iXMMW%2Flr8GOqUBOP2GzT4RWP34Jw9H42l0XnQzITtDZ3grcuhcXKG%2FEWkrUUDwjzicuROghq13CD2dbdmr58oI9RnkWVQ1asKe5b82lFBDdjLkHuQA00219uNc5kSXi4R3wKQOaNabr%2FV0wP%2FqqQPOyb8v%2F%2BBdh6GDXm3tQPjQVZYmuC0lxJjC3HEi1Q8n0z0ScgS%2BOGc8JXXhsySUgF3S87hUausYeZxzCa2TVjON&X-Amz-Signature=c5b523f1a4637e5adedb386ad1944f98f1681876d7494d45cdb14502e6cca931&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAE2EMJ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2B9fmDifEwR0XkcGE3Uq%2BR82LeZMMhfM1YtsjJ2YqMAIgWPpE%2FltpPP2DcUFkJrOg9%2B3whh0S2FvHrJe8SiZ%2BLBwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDL8kjIHLbm2SMIwizSrcA%2F%2FxqOqwkCCKQ7IPbjCv1fDSruLghOEDUMgTKaULNRtOM2PvmjkLhsqAGoOLrep%2F%2FbzQK0BXnq%2FhB9ssozpm6l2NeUH%2FEWSFJtx7R0BGdbscdMQeAkrSmbctartMGNmDtaO2DBKYvbJ0QFjbrc%2BsaP%2BQAwd1ZbjwVjhaUjG7ghRUMx6stOuVboL1pDLSURxItY2cE%2BA6K7iT7Yv%2FkYRqNCEr27dEr8bJvjx5HR69A2T817PjPAjkWpbsL%2FtmTBjq37sf7FS2nVsoAC1uOV3F5b7eW497KNNS5UfViXlZrSMcFVuKjgorxR4Rs95LPF3s8dyY8UYhpi4j5ME8%2FNE5%2BhUdblBSVPt9Q5Ab5XXQJk%2FX8XNRHVVjwkxS4t31TpKRbIgxmria2FGTxtZuZkNRO%2Bep7Pf3ulOprJLMDRjv8GPLx3fyQdu8xIxZn7CGzP6AYmdwnCskh%2BoIX4%2BuOwUmOf25fZLjVYugvaBnYoy0U1BI%2FrzfJs1ubUO%2BtrUYZXp4XZDLA3%2B4wVWXCdzmUaZvhb%2FXzaxqveQ8fOAUujIBBdJsOp1j%2FNfa5jSPI1uBPZoEL0J5ievRU8a%2FySPaAfm7zitxhHX%2BQtY6IEF9dcd0wzQ3eUDw1w%2B8gfpBp1iXMMW%2Flr8GOqUBOP2GzT4RWP34Jw9H42l0XnQzITtDZ3grcuhcXKG%2FEWkrUUDwjzicuROghq13CD2dbdmr58oI9RnkWVQ1asKe5b82lFBDdjLkHuQA00219uNc5kSXi4R3wKQOaNabr%2FV0wP%2FqqQPOyb8v%2F%2BBdh6GDXm3tQPjQVZYmuC0lxJjC3HEi1Q8n0z0ScgS%2BOGc8JXXhsySUgF3S87hUausYeZxzCa2TVjON&X-Amz-Signature=6ed28a55d3c77fc6dd911c5470b2d76d79bf6d943971d02cf46b54f604bbe238&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
