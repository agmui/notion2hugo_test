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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLETMMR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD6sLFibN6PBJJlL5%2Fa%2BtybvulZt%2FjXz9la3sR1TBSBfAIgMCZrNXZD2ZKZn3o4fKDxeLjxI8f%2FwkwSxRDxnWFZV7EqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASl3eG7%2FfxnU2L6nyrcA18ZN74pqBwAe6AbSrJUbpSdIVjpurY2YR4bpBkFnjy14iVG5CGWGBxo4oXjEReGQCZL95s1C3COGTXEayUbSPZ7fSwRq419HBybxmpKVmwqsym0cj5GimBC2OXKsqStfumJGAOjWenusTYvBo7epUoiimoYtj35kHFfNElDic0lLJPI6TWYP6rguvV73xfxB53wwCdbHQQxXLZYHGF2LXDb20G2Z4BdIkBiuXLrKWZSAI30qeW8ddvQ%2FpjeoarNYP0y%2BKk6shCRMtvRvZULF%2BVWklEIEtS3x%2FnTSDVQKBYUvjb5SI8SakSeiT2vtOw0PwzOh3Ou2jbA6cMAS5nKKP0igegL019%2F1UuyiFss4KBVPa8A0eYsZVGB%2BkFBn5YfYomBIoN4Ofi8GUV9pD1%2BunRldqPeyxDWPP%2Bh2ikwg5LUI4e7Q9hutbeA%2BHju3V%2B1dZNKRs8szvCcbQ%2FBjhi6PEyuuspstcw7bTmMiwibDeAl63fWP2m4Ew8Bzw3cUleFtJ%2FcHLBmqkHb1l8vmVvS2%2B6V79jGmTUMrWOXE9NT4BSexYMCyDlkKZxzKATbFoCwy1hsFqW34KLWUQ5Z5dXkq%2FM0Xy3zTbMON%2B6QCXEaNwKxUF9fOJ%2BnJcgmrVnEMPO2r78GOqUBLthAl7%2FoiGaM3pIstH3xfmo17X%2BgRMXsrAZbyaGVN7HO635xnbDuulsPbOaAjsvOmCIxniCd8UuqOtJSHG784w%2Fe9xi31EU%2FxwSngpsTug%2BxO9ShiSvfS08V6as%2BCsbiitT%2BWyfjTwDKsTykszYhR4swDysSDMqckLorQe%2FkDQOpSfUd1UrsOlNPkjW6017UhCyY767d3HDoeczf8lpRs%2F90jI1V&X-Amz-Signature=8e823db8e4ea07daa98ef9c888eb33c595aa63907f0f4658621ffe531b30439f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLETMMR%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD6sLFibN6PBJJlL5%2Fa%2BtybvulZt%2FjXz9la3sR1TBSBfAIgMCZrNXZD2ZKZn3o4fKDxeLjxI8f%2FwkwSxRDxnWFZV7EqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASl3eG7%2FfxnU2L6nyrcA18ZN74pqBwAe6AbSrJUbpSdIVjpurY2YR4bpBkFnjy14iVG5CGWGBxo4oXjEReGQCZL95s1C3COGTXEayUbSPZ7fSwRq419HBybxmpKVmwqsym0cj5GimBC2OXKsqStfumJGAOjWenusTYvBo7epUoiimoYtj35kHFfNElDic0lLJPI6TWYP6rguvV73xfxB53wwCdbHQQxXLZYHGF2LXDb20G2Z4BdIkBiuXLrKWZSAI30qeW8ddvQ%2FpjeoarNYP0y%2BKk6shCRMtvRvZULF%2BVWklEIEtS3x%2FnTSDVQKBYUvjb5SI8SakSeiT2vtOw0PwzOh3Ou2jbA6cMAS5nKKP0igegL019%2F1UuyiFss4KBVPa8A0eYsZVGB%2BkFBn5YfYomBIoN4Ofi8GUV9pD1%2BunRldqPeyxDWPP%2Bh2ikwg5LUI4e7Q9hutbeA%2BHju3V%2B1dZNKRs8szvCcbQ%2FBjhi6PEyuuspstcw7bTmMiwibDeAl63fWP2m4Ew8Bzw3cUleFtJ%2FcHLBmqkHb1l8vmVvS2%2B6V79jGmTUMrWOXE9NT4BSexYMCyDlkKZxzKATbFoCwy1hsFqW34KLWUQ5Z5dXkq%2FM0Xy3zTbMON%2B6QCXEaNwKxUF9fOJ%2BnJcgmrVnEMPO2r78GOqUBLthAl7%2FoiGaM3pIstH3xfmo17X%2BgRMXsrAZbyaGVN7HO635xnbDuulsPbOaAjsvOmCIxniCd8UuqOtJSHG784w%2Fe9xi31EU%2FxwSngpsTug%2BxO9ShiSvfS08V6as%2BCsbiitT%2BWyfjTwDKsTykszYhR4swDysSDMqckLorQe%2FkDQOpSfUd1UrsOlNPkjW6017UhCyY767d3HDoeczf8lpRs%2F90jI1V&X-Amz-Signature=6d767fb997899d5b2ed9bc7a36e0a38451c68c365f1f2ed66fa0f1af5575ad5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
