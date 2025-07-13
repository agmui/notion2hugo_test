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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3CIHFH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCDdPunNAjZQF4xvT87v0HULI%2B%2B%2BAEv%2BrJSvwag5MF2wIhAPQF3KZaLPcGQ7dL3kmVtcpyG1v%2BMIMmilMTBqZiur1iKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXFUvKiSojFCFSNzgq3APDl6JKTPYB%2FmYQ8VbSbUYO8%2Fhx7UC%2FPP1e7KZ%2B6bhWrVpzJmnpBlW1YtVWGoPZtfGGryBtns%2BIDixuHKk%2Fszek%2BvaB07QruayfY2rp6LAi1fElV04Q1CzoEnP27X2hJup4j7%2BCxImYx%2FObxPQEz8OYfpwOoiUiS%2FwIa%2Fq4QzFDBYYfL%2BuLrvpeKShbp%2BWYSbwXGmYWja0PG6CXJxfqUcgt1xxD1tNjp6ArxY0sYMGUL7Dl6DTIwcISDtBK37T4w7YgDw%2FOfh1FE%2BoKv36v0NOfuB%2BcLxs2Cb%2FCyuklPtwPNnXKtxA1N5fjuSGaXlPxY4KwAJorJvwbO5W8VvaLyxuKJkU0ow5%2B0YDIyYRO9We%2Fb2lLreb6qLqvRQMgXaHwdsVYM%2BnI0Kglw750%2BIKrV%2FFV8UyIC5dDXGPCvX87hD3iDd%2F8EPcXFJdfnBbLEFvrA0U4e4QO%2FcmxY%2Fuw5jyYnfqY%2BfBpbOfqx%2BOtOuVbU7ulaPsI2z9jwG2eV2ZFImJcdgE32cpNrfrIZvCCp4mqU%2BrGbdxceqlhPHh%2BtvC%2Fe%2FXNmh4POdMJ7RDJpHrTb7UiWg%2FvUt18GwBceo6WNmuZeFGmftk0qtibxO6x7muN%2FrLCdTX8xfEw5jBsHjaRizCl2MzDBjqkAcffpn1se8wUhb1muElUSmwSLe8bw2RhBH8elj%2BaGEDY%2F%2Bureqi9cC5RauhACpkKogPW2nhMSQ2RX2HbX0pUVP4kXUeYSRveEMm2jaAwWyieZ8rCN8jY1Q7cVbQwSHrLSa4DNjh%2BRoDNkAubbafknRw94JVI0vurLH3NlOjaqz0wumg3dzc59XnsUGIJ6Zzl66%2Bo4V39aw1VMZf%2B6vEt%2FqnBmnYI&X-Amz-Signature=d996477a049183ab7bf75ea2e0b01a1524e0cc7b0f8cdf1105dc7f4f1e7d03cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3CIHFH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCDdPunNAjZQF4xvT87v0HULI%2B%2B%2BAEv%2BrJSvwag5MF2wIhAPQF3KZaLPcGQ7dL3kmVtcpyG1v%2BMIMmilMTBqZiur1iKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXFUvKiSojFCFSNzgq3APDl6JKTPYB%2FmYQ8VbSbUYO8%2Fhx7UC%2FPP1e7KZ%2B6bhWrVpzJmnpBlW1YtVWGoPZtfGGryBtns%2BIDixuHKk%2Fszek%2BvaB07QruayfY2rp6LAi1fElV04Q1CzoEnP27X2hJup4j7%2BCxImYx%2FObxPQEz8OYfpwOoiUiS%2FwIa%2Fq4QzFDBYYfL%2BuLrvpeKShbp%2BWYSbwXGmYWja0PG6CXJxfqUcgt1xxD1tNjp6ArxY0sYMGUL7Dl6DTIwcISDtBK37T4w7YgDw%2FOfh1FE%2BoKv36v0NOfuB%2BcLxs2Cb%2FCyuklPtwPNnXKtxA1N5fjuSGaXlPxY4KwAJorJvwbO5W8VvaLyxuKJkU0ow5%2B0YDIyYRO9We%2Fb2lLreb6qLqvRQMgXaHwdsVYM%2BnI0Kglw750%2BIKrV%2FFV8UyIC5dDXGPCvX87hD3iDd%2F8EPcXFJdfnBbLEFvrA0U4e4QO%2FcmxY%2Fuw5jyYnfqY%2BfBpbOfqx%2BOtOuVbU7ulaPsI2z9jwG2eV2ZFImJcdgE32cpNrfrIZvCCp4mqU%2BrGbdxceqlhPHh%2BtvC%2Fe%2FXNmh4POdMJ7RDJpHrTb7UiWg%2FvUt18GwBceo6WNmuZeFGmftk0qtibxO6x7muN%2FrLCdTX8xfEw5jBsHjaRizCl2MzDBjqkAcffpn1se8wUhb1muElUSmwSLe8bw2RhBH8elj%2BaGEDY%2F%2Bureqi9cC5RauhACpkKogPW2nhMSQ2RX2HbX0pUVP4kXUeYSRveEMm2jaAwWyieZ8rCN8jY1Q7cVbQwSHrLSa4DNjh%2BRoDNkAubbafknRw94JVI0vurLH3NlOjaqz0wumg3dzc59XnsUGIJ6Zzl66%2Bo4V39aw1VMZf%2B6vEt%2FqnBmnYI&X-Amz-Signature=4534f3e4557b360630e65080f27b7ec33d62424014476572f130b9a1c6cc4be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
