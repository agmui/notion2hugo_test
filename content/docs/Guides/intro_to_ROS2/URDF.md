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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZNCZPE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCRR1JkaPVB%2F6oOWCDP8l9sjJJTxmasEbe0vV%2BGyNu6agIgFIG%2BtFny1z80eUVm72xhKE1JSFR8x95SU1Fu7B2iOLoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3URxDLSAICxzCH7CrcA3%2BPH424a1n2zfkscXDwxaXvsz0lVBIG8BLorC2z9QZnh0rjS8mW1qeSuqaxS%2FT4%2FKaHm1D2e7CWnqMkr%2FOe%2BF3clzbRbbivSdscRW0me7F9RBmCcRPqMQ0ixKuUydw%2Fa25x6VxIV1ePsBMvPkSzDJzRnPOy7dY2w0B5QowR%2F9UJa9%2FZ1AhOWfZgFoAuAeiuxKnHzxr4BExZjPcQ2MhaxDZdgJCfwI9MpJsIbMUCE4u038o0hmQQ83%2Blez%2B303e%2Br7xFCK%2BA3qRMs333ZDd0ak4V%2FbaRWxiJOX7ic%2FsQHOTcwjwxD%2B%2FGih2C6QQf8qFcDdhR75kk31T9NZebBOQ0h6B9cZswCHzVWFJBU4WCHFyaUDwTl48fL%2B3IMTiJor3wpgavH1sU5BuK8CdFlVuTvkklvuFnoRxRtAJ69Py2ffnAI972Z3FbbvkGI8oKRTFX4p1i%2FsXO1bbHYTYqm4VJ%2BAajeIUSFZxVV0Kpf3pAnpCk0JhLh4%2F2FOvL%2BZON4Suv6TY2xBD1s1dt9fgZQPlUQVThPTyxdlDBKj5EGnmE1L21d7N8Ao0HSHbNcU2aSC8NMJ146AaE5ljMMRwWGZLMMGyv6qNmjqdVVi%2F6DcRBD%2F2IDK%2F5C7TQvESjOo7TMIqOwsEGOqUB6dL7hEknU8mi6LEo8ln%2BS4kW%2FVSoUtZP%2FE2BypeUzddb3ic5De9vc04nrssZKPwCQLxbIm2dNR9vCInqPZ7pzc7hfu%2B0F3w287J%2FGLVL5X%2F6GGfnOxFwAwf1cHIB8JOmkkiP9FcyTDVbfdKPFqgYin6Koatzalx8vq50it%2FGJ1fvhYtn1jW3CSr83ub8c%2BZsagbvex64ViY5QMTqhoeAXYN7%2FGLS&X-Amz-Signature=ce3b7e62865b3ddda8a3659a04e99becb873e39871d98b216ac9d1f0b1210241&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEZNCZPE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCRR1JkaPVB%2F6oOWCDP8l9sjJJTxmasEbe0vV%2BGyNu6agIgFIG%2BtFny1z80eUVm72xhKE1JSFR8x95SU1Fu7B2iOLoqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3URxDLSAICxzCH7CrcA3%2BPH424a1n2zfkscXDwxaXvsz0lVBIG8BLorC2z9QZnh0rjS8mW1qeSuqaxS%2FT4%2FKaHm1D2e7CWnqMkr%2FOe%2BF3clzbRbbivSdscRW0me7F9RBmCcRPqMQ0ixKuUydw%2Fa25x6VxIV1ePsBMvPkSzDJzRnPOy7dY2w0B5QowR%2F9UJa9%2FZ1AhOWfZgFoAuAeiuxKnHzxr4BExZjPcQ2MhaxDZdgJCfwI9MpJsIbMUCE4u038o0hmQQ83%2Blez%2B303e%2Br7xFCK%2BA3qRMs333ZDd0ak4V%2FbaRWxiJOX7ic%2FsQHOTcwjwxD%2B%2FGih2C6QQf8qFcDdhR75kk31T9NZebBOQ0h6B9cZswCHzVWFJBU4WCHFyaUDwTl48fL%2B3IMTiJor3wpgavH1sU5BuK8CdFlVuTvkklvuFnoRxRtAJ69Py2ffnAI972Z3FbbvkGI8oKRTFX4p1i%2FsXO1bbHYTYqm4VJ%2BAajeIUSFZxVV0Kpf3pAnpCk0JhLh4%2F2FOvL%2BZON4Suv6TY2xBD1s1dt9fgZQPlUQVThPTyxdlDBKj5EGnmE1L21d7N8Ao0HSHbNcU2aSC8NMJ146AaE5ljMMRwWGZLMMGyv6qNmjqdVVi%2F6DcRBD%2F2IDK%2F5C7TQvESjOo7TMIqOwsEGOqUB6dL7hEknU8mi6LEo8ln%2BS4kW%2FVSoUtZP%2FE2BypeUzddb3ic5De9vc04nrssZKPwCQLxbIm2dNR9vCInqPZ7pzc7hfu%2B0F3w287J%2FGLVL5X%2F6GGfnOxFwAwf1cHIB8JOmkkiP9FcyTDVbfdKPFqgYin6Koatzalx8vq50it%2FGJ1fvhYtn1jW3CSr83ub8c%2BZsagbvex64ViY5QMTqhoeAXYN7%2FGLS&X-Amz-Signature=da2198fe6a93ab45990e46e82ce9f4342171903e78a7d87da5b161bfe9eb97b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
