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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MYC43I%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGTOV6nz87i06jAST1SZqWhtx7LLiEtAuUGiqXqvW0ejAiBYoY41fM3iicYnJ5v6DfPVO8E9VTfMeR3YdxGqRFP6ySr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMt%2F%2B0edVeTm0so9ZhKtwDXzmLHGUmALyNPHr6L%2BbDxz5YdhEXir%2B7JJFjiIgunacFp%2BQQDqgDwxCpPAfcV7tjVyFPI%2BJxefX08P3gwwFbOkLTB%2F%2BUAR%2FxkR5xiOL8eWoRTmJ%2Fs0cIAGSNrLcxmR9ihC8NadK7ZtMY4HcgbOp8yTBtz2DRJ1OdNMJHfnc7fxY6T0FI0r8Hm1sgt6njngc33wXvlZhbZbtMr490QnWUKcwxMNt1V31A5VCCW5WcjaSKU2TUaigRHLvIm813SzvpzPfgnD9mXsQTJvjcaqjErSUcv6Ky3pWpYjK7mKypGKMXNws9KvxhYYuwUuC9%2Fslx%2ByySEBRfgaWndSCDswog9UQWGJ6gJtCn9tqqFgQ5gV%2BWU47QM1VnlDwUa5fimEGm9QxqPzT1phfEHhLFnR2CX6k6V0Du4qXXWq0hIL7mfC%2F0OhBdJeqQqbXhSso%2BvFw32Sowwac7bjl51EZGWoAgCQ24y19Qq49U1EfdWsTbGGlQRbKxEHRiC5ii1wofFIWam2Vlkecjt8sBgCXQC%2FYhvbe1U7RDrSnMnQWF6rDS6EqKGrlAvp6gDNA%2FZdqEh2VE0u7jdnVipOQ%2F5%2FbgIkeRs8VPLbZFeSwmLciZaIjcI%2Bs%2Bip2mwZYnC0Dqv3kwlObRwQY6pgFWVz09r97Vy9M2T7hGnS%2FWJv%2FrVr6co1dWQXH2aTDAyoSCed%2FSKcqjzV1dEZBz4ztVWxp%2BpbVZwv2Ir3zw%2F8%2FoVo7TeahCKeRVbx6VNVvxntkenb2op88Jqwso9U0THbWHcTOKROOYtwdLkqqmsr9d7LNV26iidR7f6RSlcSCuY5QebmGnKcogN2IJ0OfviTo0D%2BUmE2t16hb1a5%2FVh6P8CV7IPGGn&X-Amz-Signature=99d9eb9d6de4c48c82f6599a1c8344e1d1ae3160ed017b3250d76807407c928e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MYC43I%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGTOV6nz87i06jAST1SZqWhtx7LLiEtAuUGiqXqvW0ejAiBYoY41fM3iicYnJ5v6DfPVO8E9VTfMeR3YdxGqRFP6ySr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMt%2F%2B0edVeTm0so9ZhKtwDXzmLHGUmALyNPHr6L%2BbDxz5YdhEXir%2B7JJFjiIgunacFp%2BQQDqgDwxCpPAfcV7tjVyFPI%2BJxefX08P3gwwFbOkLTB%2F%2BUAR%2FxkR5xiOL8eWoRTmJ%2Fs0cIAGSNrLcxmR9ihC8NadK7ZtMY4HcgbOp8yTBtz2DRJ1OdNMJHfnc7fxY6T0FI0r8Hm1sgt6njngc33wXvlZhbZbtMr490QnWUKcwxMNt1V31A5VCCW5WcjaSKU2TUaigRHLvIm813SzvpzPfgnD9mXsQTJvjcaqjErSUcv6Ky3pWpYjK7mKypGKMXNws9KvxhYYuwUuC9%2Fslx%2ByySEBRfgaWndSCDswog9UQWGJ6gJtCn9tqqFgQ5gV%2BWU47QM1VnlDwUa5fimEGm9QxqPzT1phfEHhLFnR2CX6k6V0Du4qXXWq0hIL7mfC%2F0OhBdJeqQqbXhSso%2BvFw32Sowwac7bjl51EZGWoAgCQ24y19Qq49U1EfdWsTbGGlQRbKxEHRiC5ii1wofFIWam2Vlkecjt8sBgCXQC%2FYhvbe1U7RDrSnMnQWF6rDS6EqKGrlAvp6gDNA%2FZdqEh2VE0u7jdnVipOQ%2F5%2FbgIkeRs8VPLbZFeSwmLciZaIjcI%2Bs%2Bip2mwZYnC0Dqv3kwlObRwQY6pgFWVz09r97Vy9M2T7hGnS%2FWJv%2FrVr6co1dWQXH2aTDAyoSCed%2FSKcqjzV1dEZBz4ztVWxp%2BpbVZwv2Ir3zw%2F8%2FoVo7TeahCKeRVbx6VNVvxntkenb2op88Jqwso9U0THbWHcTOKROOYtwdLkqqmsr9d7LNV26iidR7f6RSlcSCuY5QebmGnKcogN2IJ0OfviTo0D%2BUmE2t16hb1a5%2FVh6P8CV7IPGGn&X-Amz-Signature=703b15ad1a1eb53f6f226c566f964785f13d33ac281de88b705f1c01d3b3b8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
