---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EE3KG22%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc94F7WJeRVvqhElS90%2BIljIRE2Rc3WoWOMUzxg1V0EAiEAsPP1pRlXChQt89fzT6%2FAyDT3CFP3SbICwhu06ee%2FKVsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGyZmvScjzUhxtXPXircA8tMWdvWHcK1j5qF%2Fog9nOwUuiqw%2FJieAP%2BbVQ8rUOqeWWA4cAAHgUmw1MT0P3fG9Q8zY46F%2BPVEvzsFKIpJe1SHmmD8avk31axTeCaF2shkTLHKBMTbtyBbPZlj%2Bea8QDi2I769yVMf%2F02hufFnKFRE0nMSoyRzI5bPTQpZKFpCrezHHLh6NwUJpUoyOuZm6l5laAhWGQueziGo%2FQnCp471ipJjsGX5l5QZ77%2BjyKeqzs%2BPllcyFraTJoyCsS9ZqG4%2Fpz8lpGqybrvw%2FE4mRwjXRdWhJ7i%2FsvCxY1IQl%2F5fCthkRVnkLf3cLu2SZy%2FoxA15KO8iPz9sPRwqfbjqSk78ONplk4rosp7g6L1c8kBlGqENFowRZltlF3uk2ij8NJmDH%2B3EsrqIuAaUQX%2BnJ7jTiNVBB0XtC73r5Po%2BMArfirxL9fRzTWLer%2FIqizrOUU3dOY6MO5iuWCu62pBt2%2F9WU0xQGyVCTRLXLRU34uv3sPeIfxuH8hlMlkAU4LlvuSSMmkpNvnEuhwi0I1QtO7YpP0wQwzPyzeYiUaWE3W3f9vnTAGUJZI%2BTTAGqACGF6vDvtoSo1thU2T2dLnN4dt5iW9IxpKRcMgtKAbKg9aGvHKz5CfK9FiiLQ%2FvNMLCM9cQGOqUBYxP3DyyfTCkGhKVQnPaC6QWtfE%2BpKzR85DI8NvUx1LH4yhQJA8J1kyKIH%2B9kuD8%2BndTCD2KnLuSrnvqvQ0%2FHvvkDXog4cHIwGXNjHbwBtPUu5lWUKSfZdJIbkH035l3NgJk%2FA0QyGgXtjVuIh18cxhIhI261JCVawEH%2FvYIkAMZxJrfl2pA1Qw%2BYjYBsHfBVWkJe%2BgBsF30DZN3YgJsDOwrqPcH7&X-Amz-Signature=891fc5bf1f608b4c7214b2e02e9ffa1a1509cd7915204e9abee81be29ff0d393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EE3KG22%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc94F7WJeRVvqhElS90%2BIljIRE2Rc3WoWOMUzxg1V0EAiEAsPP1pRlXChQt89fzT6%2FAyDT3CFP3SbICwhu06ee%2FKVsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGyZmvScjzUhxtXPXircA8tMWdvWHcK1j5qF%2Fog9nOwUuiqw%2FJieAP%2BbVQ8rUOqeWWA4cAAHgUmw1MT0P3fG9Q8zY46F%2BPVEvzsFKIpJe1SHmmD8avk31axTeCaF2shkTLHKBMTbtyBbPZlj%2Bea8QDi2I769yVMf%2F02hufFnKFRE0nMSoyRzI5bPTQpZKFpCrezHHLh6NwUJpUoyOuZm6l5laAhWGQueziGo%2FQnCp471ipJjsGX5l5QZ77%2BjyKeqzs%2BPllcyFraTJoyCsS9ZqG4%2Fpz8lpGqybrvw%2FE4mRwjXRdWhJ7i%2FsvCxY1IQl%2F5fCthkRVnkLf3cLu2SZy%2FoxA15KO8iPz9sPRwqfbjqSk78ONplk4rosp7g6L1c8kBlGqENFowRZltlF3uk2ij8NJmDH%2B3EsrqIuAaUQX%2BnJ7jTiNVBB0XtC73r5Po%2BMArfirxL9fRzTWLer%2FIqizrOUU3dOY6MO5iuWCu62pBt2%2F9WU0xQGyVCTRLXLRU34uv3sPeIfxuH8hlMlkAU4LlvuSSMmkpNvnEuhwi0I1QtO7YpP0wQwzPyzeYiUaWE3W3f9vnTAGUJZI%2BTTAGqACGF6vDvtoSo1thU2T2dLnN4dt5iW9IxpKRcMgtKAbKg9aGvHKz5CfK9FiiLQ%2FvNMLCM9cQGOqUBYxP3DyyfTCkGhKVQnPaC6QWtfE%2BpKzR85DI8NvUx1LH4yhQJA8J1kyKIH%2B9kuD8%2BndTCD2KnLuSrnvqvQ0%2FHvvkDXog4cHIwGXNjHbwBtPUu5lWUKSfZdJIbkH035l3NgJk%2FA0QyGgXtjVuIh18cxhIhI261JCVawEH%2FvYIkAMZxJrfl2pA1Qw%2BYjYBsHfBVWkJe%2BgBsF30DZN3YgJsDOwrqPcH7&X-Amz-Signature=882f3a458140d9ffdc1dea621170f9d55dae16995ae819392c2c8c13faa14813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
