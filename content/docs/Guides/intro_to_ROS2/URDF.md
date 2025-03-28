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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOE6TRT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPTFlXgwiO19Ugj15eWpqNYVT8xccygsH4sO6%2F4KEb1AIgBeXoDvcDTP%2FIjHGHeQWVoI5U6OdxmQAqqQKqUzbmKqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJTJXPkathgNObrMOyrcA1KmbPxr3f4OYRXU0ydlijjGcIZG9JO1PNYgjJygnJ1MqtgfOHdCqGjfe%2BhDWHrIa3wJw37dlyoKask%2Fqkq8aObTfQt540BbyWn0kofONh%2FDWC9OQdf7hFSmc3cds3EQFWh11lF1wZyt0JIL%2BpUOmOIhNrCaVKOlqX3jqvkwhZ1t%2BPZSt8%2BTrW5%2By4PNuYDe3uTOmfLYJAPmsWaxERGU5NrnvvG5mTcLBK8FjcvbhuFrTsp4IBLscV8WnLfctHeyqteNEYDBPSZXvwGNJo1I0%2FLrzaiMNwV1j72iyoYvOiySls4JYsDi%2Fdye0WgiaAALrgOzmTu3ERAI54h1KPQ5QWwG7TQlYGTRtVk%2FKOL7ItqfXvgyzpb%2FgjoDUHH%2F02r%2F1dt5OLEIU6fgAM%2FbrSMerH8I5HjcUBrkgnhVdZgHB7T0vFVIBWR6Zk53G6mkpPNKQEomh36emdfibXwUr2Fncs%2B%2FZhoScAzTkXf4bMc85f5JUM5Y9ewjs1uvrWIuIqFx4CAWUeJ3imnTGaLHyvCgUXDuFWschE44vcTEgxzSoL1a%2F4pe1%2BUyL3sbLg7yHjqQBxvgUZfqufXETresINj1ZHCt0pOnbxX5ZG%2FpbHpi5%2BIfe4nKRDY5DK6uUUwIMM6lm78GOqUBHD3Y0z%2BXm67qr%2BnFRl5g%2B3qzxBbfLLU4mCANFmjvJqK%2Fcj8Fw7q6ap6HyVp7ZxdQ7fP0ABK7Ekcn%2Bj5zKNqKzmNWwE8rj%2FQvPUVYGKadWS9gnEGN06EPD7Fy3siI0lER0DQHgdjRLmKNCCe6Hkgsgi3OkxsNQ2cO%2BB0ciVAsap0VXjcYZ%2BY%2B868CLPqHrGc0GWfX4ZSmYLGIzjy4NYhe0WYqEgxX&X-Amz-Signature=775904d169ccd370510055f55a1aa39fab13a78919a07454547deb75e66fd31e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BOE6TRT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPTFlXgwiO19Ugj15eWpqNYVT8xccygsH4sO6%2F4KEb1AIgBeXoDvcDTP%2FIjHGHeQWVoI5U6OdxmQAqqQKqUzbmKqUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJTJXPkathgNObrMOyrcA1KmbPxr3f4OYRXU0ydlijjGcIZG9JO1PNYgjJygnJ1MqtgfOHdCqGjfe%2BhDWHrIa3wJw37dlyoKask%2Fqkq8aObTfQt540BbyWn0kofONh%2FDWC9OQdf7hFSmc3cds3EQFWh11lF1wZyt0JIL%2BpUOmOIhNrCaVKOlqX3jqvkwhZ1t%2BPZSt8%2BTrW5%2By4PNuYDe3uTOmfLYJAPmsWaxERGU5NrnvvG5mTcLBK8FjcvbhuFrTsp4IBLscV8WnLfctHeyqteNEYDBPSZXvwGNJo1I0%2FLrzaiMNwV1j72iyoYvOiySls4JYsDi%2Fdye0WgiaAALrgOzmTu3ERAI54h1KPQ5QWwG7TQlYGTRtVk%2FKOL7ItqfXvgyzpb%2FgjoDUHH%2F02r%2F1dt5OLEIU6fgAM%2FbrSMerH8I5HjcUBrkgnhVdZgHB7T0vFVIBWR6Zk53G6mkpPNKQEomh36emdfibXwUr2Fncs%2B%2FZhoScAzTkXf4bMc85f5JUM5Y9ewjs1uvrWIuIqFx4CAWUeJ3imnTGaLHyvCgUXDuFWschE44vcTEgxzSoL1a%2F4pe1%2BUyL3sbLg7yHjqQBxvgUZfqufXETresINj1ZHCt0pOnbxX5ZG%2FpbHpi5%2BIfe4nKRDY5DK6uUUwIMM6lm78GOqUBHD3Y0z%2BXm67qr%2BnFRl5g%2B3qzxBbfLLU4mCANFmjvJqK%2Fcj8Fw7q6ap6HyVp7ZxdQ7fP0ABK7Ekcn%2Bj5zKNqKzmNWwE8rj%2FQvPUVYGKadWS9gnEGN06EPD7Fy3siI0lER0DQHgdjRLmKNCCe6Hkgsgi3OkxsNQ2cO%2BB0ciVAsap0VXjcYZ%2BY%2B868CLPqHrGc0GWfX4ZSmYLGIzjy4NYhe0WYqEgxX&X-Amz-Signature=fdf3ebbb06fd94763771f6d964cc7cfcb9a0525aee0bd4b683e862a7a441664e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
