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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKVGFL3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDJIzXaK8IKfWY9ui%2FPnhNwzjJS7n%2FgbpLiS%2FSs2%2FMP2AIhAMZ%2FjEQ9yGADCkY0b7%2FIuF1VYYokqGsUXiGnX3OuOnOdKv8DCFsQABoMNjM3NDIzMTgzODA1IgzLeucyAhfdSfD8I60q3AN0biPDwp7VUrAN%2F7lkUeJJHxu8YZ0R83VTZjzx1V3VK28xyP05BtPSy16W1ztBUtInsP7GxRud2jURRGlWCtRrXSnLd9gvzYB%2BFxsuoneOd1evlOAwvmYvybIfi55Db9TqUqFC7YnR2oNGD5D5CA7lxMyxzCGRcYDAFFyyenCkUVfv23kEsFN9U%2FZS3HzeUQzOJpPZ%2FYLdVTVAQK%2Fn6KiQ6sI%2FFeka%2BvNajRqlIogGYz0PDVEkpGkIhow77XiOnfXS0kO6Rcm5p3HI6KcGmqGMMIu8rqHJLxi5r%2FwNMqP30mldJJkAgNMtKmJF2gKoS1bUhQWpgMWwhLyqwDDRZFXtudLwFKrjfaKfnBcl4Tykceu%2B%2F1Af7Cv3NtAJuzEH6eFh8sGUOwsd%2B0eewZoYR32XRo5mfsLcarYE7R1r7%2FT%2F1JfMxNKtO21U9D%2FIs8dnzKbnTqfDJqAnWggkfIvJgbxi%2F1ehACfjeFZS3UZr8%2FDmaFFh47jSfH%2B1TOVNtWV8DdKPEz9TaP1Nil5kedlLIKYn2TomX3LWPHr4nKDqib92WlNLR4SVA1xbu4Hy6PGgRxwUh396uEMkDIXr5UkwNJAgCgZXOiQZ0ttYiEmV9XDsycaYnT7QrVG2H2JKkjD6593DBjqkAVBrXU4gtWbiTq4%2FQfb%2B6RTGf7Srld1AatDsq%2FV5BV%2BOue2%2FZ1T%2FA%2BHqLhub9c160pAypv5wQ%2Ba8FStsDpBR6j%2BXFz%2BwZXflu9dZSyc%2BLNgfaOwTyLfeXkLYOnEThBk0TF0agfWZNmw%2BQ51P4CQo%2FFSoa%2BWk%2FnGAe3B4xUrHCW%2BAI%2FvRlFx1CP2CD9DlA7VgAuzl%2BRsCdUqJKSeTkea5EMYcPPp%2B&X-Amz-Signature=b0f3b673670bc2f3d1a88d6200178a06fe7bafaf63ae40ba7fb4c773c783ca08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKVGFL3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDJIzXaK8IKfWY9ui%2FPnhNwzjJS7n%2FgbpLiS%2FSs2%2FMP2AIhAMZ%2FjEQ9yGADCkY0b7%2FIuF1VYYokqGsUXiGnX3OuOnOdKv8DCFsQABoMNjM3NDIzMTgzODA1IgzLeucyAhfdSfD8I60q3AN0biPDwp7VUrAN%2F7lkUeJJHxu8YZ0R83VTZjzx1V3VK28xyP05BtPSy16W1ztBUtInsP7GxRud2jURRGlWCtRrXSnLd9gvzYB%2BFxsuoneOd1evlOAwvmYvybIfi55Db9TqUqFC7YnR2oNGD5D5CA7lxMyxzCGRcYDAFFyyenCkUVfv23kEsFN9U%2FZS3HzeUQzOJpPZ%2FYLdVTVAQK%2Fn6KiQ6sI%2FFeka%2BvNajRqlIogGYz0PDVEkpGkIhow77XiOnfXS0kO6Rcm5p3HI6KcGmqGMMIu8rqHJLxi5r%2FwNMqP30mldJJkAgNMtKmJF2gKoS1bUhQWpgMWwhLyqwDDRZFXtudLwFKrjfaKfnBcl4Tykceu%2B%2F1Af7Cv3NtAJuzEH6eFh8sGUOwsd%2B0eewZoYR32XRo5mfsLcarYE7R1r7%2FT%2F1JfMxNKtO21U9D%2FIs8dnzKbnTqfDJqAnWggkfIvJgbxi%2F1ehACfjeFZS3UZr8%2FDmaFFh47jSfH%2B1TOVNtWV8DdKPEz9TaP1Nil5kedlLIKYn2TomX3LWPHr4nKDqib92WlNLR4SVA1xbu4Hy6PGgRxwUh396uEMkDIXr5UkwNJAgCgZXOiQZ0ttYiEmV9XDsycaYnT7QrVG2H2JKkjD6593DBjqkAVBrXU4gtWbiTq4%2FQfb%2B6RTGf7Srld1AatDsq%2FV5BV%2BOue2%2FZ1T%2FA%2BHqLhub9c160pAypv5wQ%2Ba8FStsDpBR6j%2BXFz%2BwZXflu9dZSyc%2BLNgfaOwTyLfeXkLYOnEThBk0TF0agfWZNmw%2BQ51P4CQo%2FFSoa%2BWk%2FnGAe3B4xUrHCW%2BAI%2FvRlFx1CP2CD9DlA7VgAuzl%2BRsCdUqJKSeTkea5EMYcPPp%2B&X-Amz-Signature=9404c276cfe9110da4874dd49481da362962c78914ea2249022a1d379203ef98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
