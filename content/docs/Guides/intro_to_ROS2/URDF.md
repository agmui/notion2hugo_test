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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOEB3WN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHhpBooc9ZEXlMDNq%2FOOiRMRvTwdalA3mMYzHT6ckKyAiBPr5lxfgqupJyNqw359edDCsathy8RRjR0rWpN1nF1ziqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMxnuIollEadSJlaoKtwDcG0wDLO%2FZAm1bmcmEcQbJiFNTVmbHuuleW%2FnTnJGLAzTG%2BMUua1U3tdH6PTIdCkwOtU3WFFUQmr%2BkVGpIsrnFUIUa0FuV0NfERmJ8m7izonJtI6%2B98bBP3DqENztZ0y4GRROm3iwAr7w8NP2IVRNpQ%2BiohptP9AK%2FCeKGNkJ5GS8HFT%2BTGEViN%2Bj4%2Fyzje93HXv%2ByobPn99ykDAepN41a0Q7FUUtz5q%2Bi7af1IDu8DJ85ZjassB9XFublbK6woWN%2Fwb02UKPTyzAABdRoh0BnTErGt06qxE%2B9BD6%2FSWvQ%2BpvsEvKZrQXunZyMxFYpYWyghLg0%2BFzo43LaK6n5%2B6eULzVthMSj8k7qvIvPaANnJ%2B1OGS6afvPnv0whfEnsB%2BUK5NW1uTfbl9NqjPyOdIgIBfJMtjGW7wOB5cpuk3fmnv%2B6dPNVfS%2BrPQ02N6%2FsyB%2BxAVrx2aUieH4EQIeS%2BFwMW5wOllD5EJC9prSPmfHJFa9QHwkyJHzqPgVJc4CuDrHuv6chSjSzHq3pIwk%2BGctcz4uDrXqoUSVbKIQLQn5qMC3d81rnmmevRL6WTQOKOmG3wI%2F4%2BMdSK%2Ft9EPm5YalOaQhmBjuQlbdz%2FrCqUVFjxy8UkVarMLqyYX1Xg8wzJ6evgY6pgGnnRvvYOmHpQxBY%2FOqgzA4aYADgVFt6KT1esFCpmhb%2B1gdP2OwhlMe3Zz6bwIKDlyOxGAC3T4EP%2F80%2F3OnqJK3HjFRj%2B9xUWV%2F5JLihbKq0lIeY0o2Q7J7bav%2F7xA3GhHXYKKaBxRP8kRvVp7QZaU7RGF%2Fy%2FT0N5V843I63Ukhl1guxYWWDc1kdLnwlBNldQco3Z40bck10%2FGV%2BsxqhnTv6CDhFHVA&X-Amz-Signature=093f3df36fad057fd13df3d6c6895625b0e8592d4ef83cc58afac0e95973f687&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOEB3WN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHhpBooc9ZEXlMDNq%2FOOiRMRvTwdalA3mMYzHT6ckKyAiBPr5lxfgqupJyNqw359edDCsathy8RRjR0rWpN1nF1ziqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMxnuIollEadSJlaoKtwDcG0wDLO%2FZAm1bmcmEcQbJiFNTVmbHuuleW%2FnTnJGLAzTG%2BMUua1U3tdH6PTIdCkwOtU3WFFUQmr%2BkVGpIsrnFUIUa0FuV0NfERmJ8m7izonJtI6%2B98bBP3DqENztZ0y4GRROm3iwAr7w8NP2IVRNpQ%2BiohptP9AK%2FCeKGNkJ5GS8HFT%2BTGEViN%2Bj4%2Fyzje93HXv%2ByobPn99ykDAepN41a0Q7FUUtz5q%2Bi7af1IDu8DJ85ZjassB9XFublbK6woWN%2Fwb02UKPTyzAABdRoh0BnTErGt06qxE%2B9BD6%2FSWvQ%2BpvsEvKZrQXunZyMxFYpYWyghLg0%2BFzo43LaK6n5%2B6eULzVthMSj8k7qvIvPaANnJ%2B1OGS6afvPnv0whfEnsB%2BUK5NW1uTfbl9NqjPyOdIgIBfJMtjGW7wOB5cpuk3fmnv%2B6dPNVfS%2BrPQ02N6%2FsyB%2BxAVrx2aUieH4EQIeS%2BFwMW5wOllD5EJC9prSPmfHJFa9QHwkyJHzqPgVJc4CuDrHuv6chSjSzHq3pIwk%2BGctcz4uDrXqoUSVbKIQLQn5qMC3d81rnmmevRL6WTQOKOmG3wI%2F4%2BMdSK%2Ft9EPm5YalOaQhmBjuQlbdz%2FrCqUVFjxy8UkVarMLqyYX1Xg8wzJ6evgY6pgGnnRvvYOmHpQxBY%2FOqgzA4aYADgVFt6KT1esFCpmhb%2B1gdP2OwhlMe3Zz6bwIKDlyOxGAC3T4EP%2F80%2F3OnqJK3HjFRj%2B9xUWV%2F5JLihbKq0lIeY0o2Q7J7bav%2F7xA3GhHXYKKaBxRP8kRvVp7QZaU7RGF%2Fy%2FT0N5V843I63Ukhl1guxYWWDc1kdLnwlBNldQco3Z40bck10%2FGV%2BsxqhnTv6CDhFHVA&X-Amz-Signature=d4afe1753dfbe2e03678fc5a5d1efcf8bbe5ed8216450318dbc22767a294690e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
