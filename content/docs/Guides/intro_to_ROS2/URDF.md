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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZ27X52%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIE0wETTNGaqmTynSMVaVrIQE6wf502f8FdzafnziUC6dAiB%2BgEZGv%2BM12G6nhYkuySlwO%2Fq2LRNO%2FBCCUUoxR32X%2FSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuSKL2PNnMBx9u3JGKtwDkPnAcluGPShxrHI%2B2sWgZUmMkny2aUB78uNTB8qjNvZpgJaKbZE3D7tb2wNrgATNXIK4kPko8LKDYYsdhxlj1qPXjGsPVMMfrqu1eYGil8j77fqYf8uthXqKQsai6yj2tVGqTb7FMLnmIIcTmmDjeFpjm6Te4tNW%2BUzqy7tvXpM1B39xMSCmYdPKOykNC1vKHye1XnQe3q%2B7fUaRxsLShnPulGhAI60mxn6LjbzsJk%2F%2BlEfDLBVWP0uBsvBnqPQvFDA77HN%2BCPi2gVcZi5Kgj5wvKh0bHyAC31BkXyf%2B%2Fs00Lh3xHzS%2FhDtaE9pD6JBYQMbgJEvSVBpfJLQpjbRYt1MxcqB9seqdoeJ88yaw7Ckj3bbU%2BbdGRHdQ%2FSZ6Jp3ON6PAD7wsvuS6bM8hvaMnjsW3VsVFFmsXFUADAH%2F%2BipKxWcc%2FX%2BkcsmX6cz272q4OMWIliE7rouYgFhKMcumMnhL%2B4xBs%2FwZlGjrW%2FxNCIsVALbxk1IVBkRHqM3vKT2bm77AdkLuEsEHK%2F%2FGiaSWoNEe1o2mE2Z5%2BcbmaCziy0JpPGQNY3XAPDTPzBStnX6Jpb4slF6epkVJuw3NcUcf9nrkj7leJCoxtPS8%2FJf0YPRz6yENgOO5RCI%2Fm9vQw7emivwY6pgGAZSOjX9RsqQSIeMfhuENwdDFzs9ISYXAKlfYxu7B%2BdbCOsIGfWHBYdNcKqQfrNCEUuj%2Fyla%2BKgcUDgwkTqYzpzDfU1ielIu48rqmfxARvW3L%2B12uwnyUHmVbLnP5nPxMGxDoqfzofRRpP%2FVZGRUxOwKQBcHn%2B3SJIVMcccUHWmhIHChGfeJc%2FzXpqNgvBPjxuD0YfvYdHDf1G0%2BEvsEqVndJ2A8nQ&X-Amz-Signature=f528b89265e652ca02e7bfd68ce37a34e4dfafd65a6db63e459daddc3d3ca0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZ27X52%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIE0wETTNGaqmTynSMVaVrIQE6wf502f8FdzafnziUC6dAiB%2BgEZGv%2BM12G6nhYkuySlwO%2Fq2LRNO%2FBCCUUoxR32X%2FSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuSKL2PNnMBx9u3JGKtwDkPnAcluGPShxrHI%2B2sWgZUmMkny2aUB78uNTB8qjNvZpgJaKbZE3D7tb2wNrgATNXIK4kPko8LKDYYsdhxlj1qPXjGsPVMMfrqu1eYGil8j77fqYf8uthXqKQsai6yj2tVGqTb7FMLnmIIcTmmDjeFpjm6Te4tNW%2BUzqy7tvXpM1B39xMSCmYdPKOykNC1vKHye1XnQe3q%2B7fUaRxsLShnPulGhAI60mxn6LjbzsJk%2F%2BlEfDLBVWP0uBsvBnqPQvFDA77HN%2BCPi2gVcZi5Kgj5wvKh0bHyAC31BkXyf%2B%2Fs00Lh3xHzS%2FhDtaE9pD6JBYQMbgJEvSVBpfJLQpjbRYt1MxcqB9seqdoeJ88yaw7Ckj3bbU%2BbdGRHdQ%2FSZ6Jp3ON6PAD7wsvuS6bM8hvaMnjsW3VsVFFmsXFUADAH%2F%2BipKxWcc%2FX%2BkcsmX6cz272q4OMWIliE7rouYgFhKMcumMnhL%2B4xBs%2FwZlGjrW%2FxNCIsVALbxk1IVBkRHqM3vKT2bm77AdkLuEsEHK%2F%2FGiaSWoNEe1o2mE2Z5%2BcbmaCziy0JpPGQNY3XAPDTPzBStnX6Jpb4slF6epkVJuw3NcUcf9nrkj7leJCoxtPS8%2FJf0YPRz6yENgOO5RCI%2Fm9vQw7emivwY6pgGAZSOjX9RsqQSIeMfhuENwdDFzs9ISYXAKlfYxu7B%2BdbCOsIGfWHBYdNcKqQfrNCEUuj%2Fyla%2BKgcUDgwkTqYzpzDfU1ielIu48rqmfxARvW3L%2B12uwnyUHmVbLnP5nPxMGxDoqfzofRRpP%2FVZGRUxOwKQBcHn%2B3SJIVMcccUHWmhIHChGfeJc%2FzXpqNgvBPjxuD0YfvYdHDf1G0%2BEvsEqVndJ2A8nQ&X-Amz-Signature=86e4c580b0875ecf564add431d4361359be82d611cf66fccacd68d7017d69a80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
