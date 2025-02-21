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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZIOOECL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQv5n8Tef%2BsyWwGB5Uz4jsjwipptCyxP6lXgim3Gv7mwIhAI5ey7SDJveKyodppKfXNOFKxylQCZlmERcJ4M9BAe0HKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2BxLbzCIFed9eeVgq3ANkCRk3bSmT3oitgEZYnv1OXJq5agKZDWJHobWv%2B3o64m1NaYsE%2BUK9lHcdujaj%2FKeVyFyqbQhAm7VRMG9VSKmYipoi9XRt4z%2BiFFd1%2BxYRliYOT0%2FaWQ0yVoBR%2FHvGlfHOQpM17dxg2TD2Ffk2aW%2FdnHtxs8zoeNQOMVIBINIbC%2FF9fck6BPK%2BdoDQSp4boWB%2B6N8rZVvyPbHIop1dNt3X0nozB0C4ljugPEOxp7F0oCCTcZ6VkPBlj418Nt31vBDCBbvCWi2tyE66xrtqTuC1TKxyPzINqaWicUN9fHQ%2BVtdR20uL3uqtK%2BU9k7V9p%2BlVOsrW08w2yFrs3YLZVfwLyrsKu1FGA5sHY5EQTye2eaGahVf7%2FdrHsxfmh7MTTdDwDe8U97v90qYnLway8hJ%2FaDq5KeNkI8e%2BztTEt%2FhPPwaS4WgpCLudQd2BOjdXeIlIskA8o3PVCzLQLh6KRoLLnHgdhbk2kEcapjsEmpzm%2FVvz6gM1uNAeTvc1OUUsYbN00E7MtqRFOc5wUyZ%2By5xEsZYr0Ln0agDr%2FUSkArOTvFxOfyA7y3cRwQr7%2BuqodfZL5kpkY4zJYE9Un33eXM1ReTJjVxdyrmEThcpFW66GUGsd5TVluYjSf7m5dTCpvuK9BjqkAerz0WDp66TNlYsuWuieBmhAutdLnEoFODlCkpIlflbJtPj9V26ISgygUOWkiC3H2F6kGWsOGVdxbS%2FxGhA%2Fr2TGxowY8GXvVsDqkjtIlzNYf5B7j%2FqzgU%2Fxk7PUZQSnsUTFh2YRa7lHnQS3br9%2BinZ7OzfRnyMFeiqbG%2FApTuU2NaIkG%2BILIFYqNe3UZbZQtHFVQDFI30X8J8MdNOJgqkOjEBNm&X-Amz-Signature=309ef3d807e23eaf0984e8e8985bfd6e159ee1d552a2bf0b309f842c1504d3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZIOOECL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQv5n8Tef%2BsyWwGB5Uz4jsjwipptCyxP6lXgim3Gv7mwIhAI5ey7SDJveKyodppKfXNOFKxylQCZlmERcJ4M9BAe0HKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2BxLbzCIFed9eeVgq3ANkCRk3bSmT3oitgEZYnv1OXJq5agKZDWJHobWv%2B3o64m1NaYsE%2BUK9lHcdujaj%2FKeVyFyqbQhAm7VRMG9VSKmYipoi9XRt4z%2BiFFd1%2BxYRliYOT0%2FaWQ0yVoBR%2FHvGlfHOQpM17dxg2TD2Ffk2aW%2FdnHtxs8zoeNQOMVIBINIbC%2FF9fck6BPK%2BdoDQSp4boWB%2B6N8rZVvyPbHIop1dNt3X0nozB0C4ljugPEOxp7F0oCCTcZ6VkPBlj418Nt31vBDCBbvCWi2tyE66xrtqTuC1TKxyPzINqaWicUN9fHQ%2BVtdR20uL3uqtK%2BU9k7V9p%2BlVOsrW08w2yFrs3YLZVfwLyrsKu1FGA5sHY5EQTye2eaGahVf7%2FdrHsxfmh7MTTdDwDe8U97v90qYnLway8hJ%2FaDq5KeNkI8e%2BztTEt%2FhPPwaS4WgpCLudQd2BOjdXeIlIskA8o3PVCzLQLh6KRoLLnHgdhbk2kEcapjsEmpzm%2FVvz6gM1uNAeTvc1OUUsYbN00E7MtqRFOc5wUyZ%2By5xEsZYr0Ln0agDr%2FUSkArOTvFxOfyA7y3cRwQr7%2BuqodfZL5kpkY4zJYE9Un33eXM1ReTJjVxdyrmEThcpFW66GUGsd5TVluYjSf7m5dTCpvuK9BjqkAerz0WDp66TNlYsuWuieBmhAutdLnEoFODlCkpIlflbJtPj9V26ISgygUOWkiC3H2F6kGWsOGVdxbS%2FxGhA%2Fr2TGxowY8GXvVsDqkjtIlzNYf5B7j%2FqzgU%2Fxk7PUZQSnsUTFh2YRa7lHnQS3br9%2BinZ7OzfRnyMFeiqbG%2FApTuU2NaIkG%2BILIFYqNe3UZbZQtHFVQDFI30X8J8MdNOJgqkOjEBNm&X-Amz-Signature=7f16577c107b0c18d63de0dc2b17c3c89612a2e69412110d624d45ab29ed6a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
