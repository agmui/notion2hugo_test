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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3UH6EO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKUEf538mfyVXv1K0P%2Bbes01504sGPKCkEslQbsuCqqAiBEoWQ1nEvFyqNxvFs93qWSk5uUA2Ds4DsfrRlohEke3CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWo%2BSSzUMQQxPNiaLKtwDN0I69GI933FVA2GtVpfA%2BGFxWCv1q%2FNWsWEtus35S4%2BndTcrx7uyYAsS072ORa5TfaJLyDVQIQgC%2BLJ3FElMSxwNZvtILlJGIxbNmMzKx4cFXoRYnOaAoowJZZtE4QE7XPfEo7ewy1PzO22dSr5%2FQcoNEG%2FLa52xGyZhdY33DP%2B3sIm%2Br6xHoLusyYrbv3kRuq%2BDFyey%2FCis4JPJi8mdSPkOsU1mQzAYrRK06LSAwpYXaKchnBaTqkp4stOpu%2B2d%2FXQRR4zRxxmu%2F8qp0Lhqx%2FKoGX6EhKOuICoTBhMXqcbGx7D8Kk6GIfjryjoKBUf%2BjVVonPtBFMRem9QIZznMkHunL8YbN87DuTrVHiDAc2RKDWpOL8aD8HFxROmOO6WJmkHExAGZRRuV7nG%2Bt2444p6JitLj7ZH8kR9Kpg06lVrfY0t0SeutYssD3I8k0H5zJpS7lVE7ESFYg4zMOWIym9rhfqFu%2Fq43zyuKydji9qHZBgzV3xfMg8nsdLRTHTnxolVXNYNwZcvfUXosP5rvbDFLH9cZJcYMbpYlffNbRuEK8LqZPpQESqbSAo%2BVy%2B8rdv2j8Kupng%2BXjCWiMzOhSDL2szpf3Bo%2Fc7JSakwt6LJdA1KTXH9IaCCe%2FC8w2bLewQY6pgGoCxfLOZKJLmTJVoILHw4Rkm%2FmUsAAilwVeJ0lHs1je78WzHoMCcJO8yRF6YIhlEqJ9jTjZldvAnf7ZhFFnENWNboUuVnS4C0LsDyUfDGCKenreyIpDoxp2O2TYx%2FF750U663a98w49Daovmt3K15E8jqTMDP2EjL4nrfJ4RwbP0QT9%2FWEjCX6fp%2BVYiVNC%2FI2QB%2FyL01e%2B%2FBvevv5jVkdvzaLLmGN&X-Amz-Signature=d727f6afeaad30969d708db7afbf35bac1ad34efa543d5d611f2d081ae3a7ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3UH6EO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKUEf538mfyVXv1K0P%2Bbes01504sGPKCkEslQbsuCqqAiBEoWQ1nEvFyqNxvFs93qWSk5uUA2Ds4DsfrRlohEke3CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWo%2BSSzUMQQxPNiaLKtwDN0I69GI933FVA2GtVpfA%2BGFxWCv1q%2FNWsWEtus35S4%2BndTcrx7uyYAsS072ORa5TfaJLyDVQIQgC%2BLJ3FElMSxwNZvtILlJGIxbNmMzKx4cFXoRYnOaAoowJZZtE4QE7XPfEo7ewy1PzO22dSr5%2FQcoNEG%2FLa52xGyZhdY33DP%2B3sIm%2Br6xHoLusyYrbv3kRuq%2BDFyey%2FCis4JPJi8mdSPkOsU1mQzAYrRK06LSAwpYXaKchnBaTqkp4stOpu%2B2d%2FXQRR4zRxxmu%2F8qp0Lhqx%2FKoGX6EhKOuICoTBhMXqcbGx7D8Kk6GIfjryjoKBUf%2BjVVonPtBFMRem9QIZznMkHunL8YbN87DuTrVHiDAc2RKDWpOL8aD8HFxROmOO6WJmkHExAGZRRuV7nG%2Bt2444p6JitLj7ZH8kR9Kpg06lVrfY0t0SeutYssD3I8k0H5zJpS7lVE7ESFYg4zMOWIym9rhfqFu%2Fq43zyuKydji9qHZBgzV3xfMg8nsdLRTHTnxolVXNYNwZcvfUXosP5rvbDFLH9cZJcYMbpYlffNbRuEK8LqZPpQESqbSAo%2BVy%2B8rdv2j8Kupng%2BXjCWiMzOhSDL2szpf3Bo%2Fc7JSakwt6LJdA1KTXH9IaCCe%2FC8w2bLewQY6pgGoCxfLOZKJLmTJVoILHw4Rkm%2FmUsAAilwVeJ0lHs1je78WzHoMCcJO8yRF6YIhlEqJ9jTjZldvAnf7ZhFFnENWNboUuVnS4C0LsDyUfDGCKenreyIpDoxp2O2TYx%2FF750U663a98w49Daovmt3K15E8jqTMDP2EjL4nrfJ4RwbP0QT9%2FWEjCX6fp%2BVYiVNC%2FI2QB%2FyL01e%2B%2FBvevv5jVkdvzaLLmGN&X-Amz-Signature=96fd054c683df3a77a7359f0bd8c5fb84da85a553507c88d7e40064f7a9912fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
