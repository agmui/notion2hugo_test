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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDQLSCG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBc%2F6BE9a9DR%2BNggF%2FBA%2BMwKBNYUg7vCNR8V8Q4gZuNBAiBEtYMuZFAcM6sm5d21tk9ZiXvHKS2viB4S2Q%2FccE0HyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMhrbki1cAbmYnF8gKtwDGH99RsIwbgXJ9YEky4E7dKOauvnYQKSURQ2Mxqc2XaWAceXWa8%2BEFCvWtw7BCAuyqelSPCGy5g3QgE4DCfTR1iL2k2XJnQnhJe3sQ46yvFpVwpMpL8P7OwovXWpfzFtOxKykWrXAHwFuHrr%2FNloJLB8k6Uybi6Vl1a2ntDT8FVMbvBCi1hyjURF5qNV6QaZRX3a5N%2FS4Tbe6TXBgz5c2K5F4E111c7zmFjezdW3DZdj1%2F9g5jv6hgMkuhq9FgaCjQkVRvYerzHqlUkyGD4KOLim0XpLo%2FigTIOzQky4XwcEfZWzgR5ERip8huOxJUjoRPlfmPF8%2BVrPUPvrj2ovfm5srgbq%2FQ0zR6MGdd3Z16ab4CnUDZndKB9%2F2S%2B%2FLmTWwnF0b0gjgJNQwDgd7qc%2BnMeLEG3KrD7PAMIWU8A0xau6BjIDhZn%2Fx2hQesar%2B33h1MAtr%2BA0mCZRIGYaGXdPX1VEohEOL7kqBWK0O80BE0RhrbZADTMgH2x1EpfCMAO6DOpxyg9vqyAubDD7cthaATh7yz7pWBg8afGmawGlqg6JUfSJ7SZXxdvH5u3msjwVkfg%2BERLWqsO4Me0tdPqrryADcj%2FLP3aS4iP3lR%2Bz73r4JlUYdlrbVDajiFjIwx6D%2BwAY6pgGCHxxTFvnpupe9lWuTB4rmvLDH1dod1NaDRBPz8q7EVHgtb7thnao3%2BCL0k2XxCKJBXFRnsa8ITwsiVPG1tyYeFJjGHdmLOqGjGbuX7e5ooV8dMorxo1ZbkTdgs0eA4kgqk0G8aZKVsAfjdIF7C9ThUpHmhP9Eq1%2BlD%2F3VU0KK5TLD3PLWRNgDL3iYGjNImQenRw5IWMNPghp7wxftAMiTE9WcQBe1&X-Amz-Signature=af242d8ec36c1530dc75eb9a6d4da204bca3dd8cb962766dbc6c1bd4197127e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDQLSCG%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBc%2F6BE9a9DR%2BNggF%2FBA%2BMwKBNYUg7vCNR8V8Q4gZuNBAiBEtYMuZFAcM6sm5d21tk9ZiXvHKS2viB4S2Q%2FccE0HyiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMhrbki1cAbmYnF8gKtwDGH99RsIwbgXJ9YEky4E7dKOauvnYQKSURQ2Mxqc2XaWAceXWa8%2BEFCvWtw7BCAuyqelSPCGy5g3QgE4DCfTR1iL2k2XJnQnhJe3sQ46yvFpVwpMpL8P7OwovXWpfzFtOxKykWrXAHwFuHrr%2FNloJLB8k6Uybi6Vl1a2ntDT8FVMbvBCi1hyjURF5qNV6QaZRX3a5N%2FS4Tbe6TXBgz5c2K5F4E111c7zmFjezdW3DZdj1%2F9g5jv6hgMkuhq9FgaCjQkVRvYerzHqlUkyGD4KOLim0XpLo%2FigTIOzQky4XwcEfZWzgR5ERip8huOxJUjoRPlfmPF8%2BVrPUPvrj2ovfm5srgbq%2FQ0zR6MGdd3Z16ab4CnUDZndKB9%2F2S%2B%2FLmTWwnF0b0gjgJNQwDgd7qc%2BnMeLEG3KrD7PAMIWU8A0xau6BjIDhZn%2Fx2hQesar%2B33h1MAtr%2BA0mCZRIGYaGXdPX1VEohEOL7kqBWK0O80BE0RhrbZADTMgH2x1EpfCMAO6DOpxyg9vqyAubDD7cthaATh7yz7pWBg8afGmawGlqg6JUfSJ7SZXxdvH5u3msjwVkfg%2BERLWqsO4Me0tdPqrryADcj%2FLP3aS4iP3lR%2Bz73r4JlUYdlrbVDajiFjIwx6D%2BwAY6pgGCHxxTFvnpupe9lWuTB4rmvLDH1dod1NaDRBPz8q7EVHgtb7thnao3%2BCL0k2XxCKJBXFRnsa8ITwsiVPG1tyYeFJjGHdmLOqGjGbuX7e5ooV8dMorxo1ZbkTdgs0eA4kgqk0G8aZKVsAfjdIF7C9ThUpHmhP9Eq1%2BlD%2F3VU0KK5TLD3PLWRNgDL3iYGjNImQenRw5IWMNPghp7wxftAMiTE9WcQBe1&X-Amz-Signature=f2b7ea9171b91be1f2b399f05fdca976319e7a2ac5d764bea4ceeff977bb0178&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
