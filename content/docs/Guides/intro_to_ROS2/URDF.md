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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECBHII7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5DwztDTmHVR%2F4RLABmkaUPraYeGFKigRjpfnE8svIoAiBdvcG01bPmiKnTTcOxdZVyaRNlmBJjINKgEanVyJnELiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxxGWVOB0TL2Vr%2FkKtwDCd2oDx%2BGVT9xI64vSRZh6k8RZBZo4JA%2FRX%2Fbbv1ZxLU7f3wGEhb%2BVhwQTuBgq23gs2jq4o7uksiim6qHTVa7N2OQF9MLHtwBbJeA2%2Flr%2BlyKOysWpyUsj8owN1xLccZnmQ8N1eeBi9p0REeh9zt2n9myRwlCF5%2FsYhRuktpORT81HrT4j9Vuf3ajw8a9D7KW3Ki65ErSwOeJ3sotE6Sr%2B4GT%2BbNRiaL9RR0crWwmylwID5as5zIVJxUDy2KvQggEqnB9x1ZAcLEAFjGhHa9uVuo%2Br9R6mmRZhdT3zel9KJnH78yWH0rdehfKfEpHx9bzBlRb1mA%2Fbtt5ln8FYK4QcOW2Mne4pe8C%2FmvFq94GZChUPS2JEXZBNbDE0zySacbgmDP0OW4a5tZat%2BL3nZaAV9eFoqSCgkRzfDEx1g2ajdH8e4%2F05Y%2BA8H%2BOwYT%2BxwN8BLcBTT2Mkfw7TkddsBcXyse1FsxpnGGZmGZvYw0yWOZzTKm%2B5pUqpZTaSecjn5ewJBpvsQ49zvOL4iUVv53BAHU2UluGFKMGB8E32ue35gPOxvXcfBDjbQZzvvZ5QNpGOWubj%2BOg1PjdO6RergaJwn9eZJtQFeq1DnKHV8sQJXSwgefUeX8qXTyJcAEw%2FKGgvQY6pgFsltEWWNDY6qNLvYDjnxOvoANldlX7OqIdVKTnv49CZrHJ27JPbjFuPd48Ph5O6wEFG%2FkqGtP6Ankf8LmaCvTa5OBnwyR6VDs2kQwjHVuPDIeVv1h3gGmDufJz8fBiS12%2F3psKz0ihMxXrsZKobHUX1wfA3aZMGfJvRFAtn%2F2ohumY2Vvswvx4mJzOY3kVIjwYYoyqFh5zHHq%2BT9sCQ%2FiSvXQQuGYr&X-Amz-Signature=563a236b0dd568704f56edc821a5e54eb32ee0f739e7ba2fedea0cbc07c428bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECBHII7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5DwztDTmHVR%2F4RLABmkaUPraYeGFKigRjpfnE8svIoAiBdvcG01bPmiKnTTcOxdZVyaRNlmBJjINKgEanVyJnELiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxxGWVOB0TL2Vr%2FkKtwDCd2oDx%2BGVT9xI64vSRZh6k8RZBZo4JA%2FRX%2Fbbv1ZxLU7f3wGEhb%2BVhwQTuBgq23gs2jq4o7uksiim6qHTVa7N2OQF9MLHtwBbJeA2%2Flr%2BlyKOysWpyUsj8owN1xLccZnmQ8N1eeBi9p0REeh9zt2n9myRwlCF5%2FsYhRuktpORT81HrT4j9Vuf3ajw8a9D7KW3Ki65ErSwOeJ3sotE6Sr%2B4GT%2BbNRiaL9RR0crWwmylwID5as5zIVJxUDy2KvQggEqnB9x1ZAcLEAFjGhHa9uVuo%2Br9R6mmRZhdT3zel9KJnH78yWH0rdehfKfEpHx9bzBlRb1mA%2Fbtt5ln8FYK4QcOW2Mne4pe8C%2FmvFq94GZChUPS2JEXZBNbDE0zySacbgmDP0OW4a5tZat%2BL3nZaAV9eFoqSCgkRzfDEx1g2ajdH8e4%2F05Y%2BA8H%2BOwYT%2BxwN8BLcBTT2Mkfw7TkddsBcXyse1FsxpnGGZmGZvYw0yWOZzTKm%2B5pUqpZTaSecjn5ewJBpvsQ49zvOL4iUVv53BAHU2UluGFKMGB8E32ue35gPOxvXcfBDjbQZzvvZ5QNpGOWubj%2BOg1PjdO6RergaJwn9eZJtQFeq1DnKHV8sQJXSwgefUeX8qXTyJcAEw%2FKGgvQY6pgFsltEWWNDY6qNLvYDjnxOvoANldlX7OqIdVKTnv49CZrHJ27JPbjFuPd48Ph5O6wEFG%2FkqGtP6Ankf8LmaCvTa5OBnwyR6VDs2kQwjHVuPDIeVv1h3gGmDufJz8fBiS12%2F3psKz0ihMxXrsZKobHUX1wfA3aZMGfJvRFAtn%2F2ohumY2Vvswvx4mJzOY3kVIjwYYoyqFh5zHHq%2BT9sCQ%2FiSvXQQuGYr&X-Amz-Signature=f131498ab3f75aee6d388af8294a692f1dde4b9ab8deb61fd05d6bd4bdd824c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
