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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBSBVDF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2sHqt8PaFoT3gQUWMQxuDzRveinndg27f7KtVSuJgFQIgY7gaRYx4btHGC%2Bi%2Foqi8ui37m7qIVYFjfgXr2qFM40AqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEr5lPbB%2B1KIXd3VCrcA0e3vdntCydsONElT7ayUo%2BZA8Jd1tsQ%2FZeAJfS4tGZKHBPU%2Bb7hKvDZaAxMTYncPT0foPwprLgC0TReOZdUb6iy6tqfK4kl2F7Sb0vZOXfkfXVteZkeav7FF7spNA7xnY%2BpoPqb7y7BmXIY4Lts5uh7GGTwlf4Eurn%2Fvo7HMsEiGfXcJKC9UIMfTjUowGuEk73EoXD9jxM1HyErfo8avhCFkftkUBwYUZHyComCRvmEO3d6TnR7cbYNhqBNbnYHvcnJaGjGalbuxF9I3wwRQUqa8efgPPd2tDK4S6Pu59VLe94ClQRRVEvaTC0gE7erXNWWAef2394B6PALzE38%2BiWdDSUFA%2FwTwUcTPaq%2FkwgknIOcu2yfS2oKV0i6CGoRilAMTn%2FN9sUBWBJNCU90kH%2FJ2zXiBdP1wHPgELTBLt%2B2is65dh5lGcRGWf6hD5smP5j54e5RBoJUSX9jegfQeb2csLhUDp%2B%2FWOBOJcLkXrAY2hU%2B7C376X1GEeaP%2BReSqo1yPE2ZguZMielZHLR48toHqCvepwvbrxMbfh4fCRaVAGyMFBXvNyQwJ3X5CUco824zdyqIruCDyqQ%2Bb8GGQuSxtcWlIZGvR%2BNiyM5%2BDNzpI%2BFrRKqg4bZUo1mwMM2fq8EGOqUBJfn5sPIB%2F9qLPBfEz3IBpaHIF%2FNE29H3oA6boz46EuVKK6A9e31W3NmrZjxGJ3r5BKWznK0Y08VdS9NP4QgCTg4lk1bIno0vbJdVAhbcZR33WGM1%2BVwi9xF2q7o4V3HVxh4pSSXlJVFmpWX4kyIarBv4g%2BlenhNpHN4k85vDlCnjO2gfW5Tff8YZVK6nEZi1fY%2BLLxFr9gOepfML%2FbFM9jOjFB%2Bc&X-Amz-Signature=040295a43596e3e1e0f27f8065125b8c88ffc5af1d055a572a77639fde7f870c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBSBVDF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2sHqt8PaFoT3gQUWMQxuDzRveinndg27f7KtVSuJgFQIgY7gaRYx4btHGC%2Bi%2Foqi8ui37m7qIVYFjfgXr2qFM40AqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEr5lPbB%2B1KIXd3VCrcA0e3vdntCydsONElT7ayUo%2BZA8Jd1tsQ%2FZeAJfS4tGZKHBPU%2Bb7hKvDZaAxMTYncPT0foPwprLgC0TReOZdUb6iy6tqfK4kl2F7Sb0vZOXfkfXVteZkeav7FF7spNA7xnY%2BpoPqb7y7BmXIY4Lts5uh7GGTwlf4Eurn%2Fvo7HMsEiGfXcJKC9UIMfTjUowGuEk73EoXD9jxM1HyErfo8avhCFkftkUBwYUZHyComCRvmEO3d6TnR7cbYNhqBNbnYHvcnJaGjGalbuxF9I3wwRQUqa8efgPPd2tDK4S6Pu59VLe94ClQRRVEvaTC0gE7erXNWWAef2394B6PALzE38%2BiWdDSUFA%2FwTwUcTPaq%2FkwgknIOcu2yfS2oKV0i6CGoRilAMTn%2FN9sUBWBJNCU90kH%2FJ2zXiBdP1wHPgELTBLt%2B2is65dh5lGcRGWf6hD5smP5j54e5RBoJUSX9jegfQeb2csLhUDp%2B%2FWOBOJcLkXrAY2hU%2B7C376X1GEeaP%2BReSqo1yPE2ZguZMielZHLR48toHqCvepwvbrxMbfh4fCRaVAGyMFBXvNyQwJ3X5CUco824zdyqIruCDyqQ%2Bb8GGQuSxtcWlIZGvR%2BNiyM5%2BDNzpI%2BFrRKqg4bZUo1mwMM2fq8EGOqUBJfn5sPIB%2F9qLPBfEz3IBpaHIF%2FNE29H3oA6boz46EuVKK6A9e31W3NmrZjxGJ3r5BKWznK0Y08VdS9NP4QgCTg4lk1bIno0vbJdVAhbcZR33WGM1%2BVwi9xF2q7o4V3HVxh4pSSXlJVFmpWX4kyIarBv4g%2BlenhNpHN4k85vDlCnjO2gfW5Tff8YZVK6nEZi1fY%2BLLxFr9gOepfML%2FbFM9jOjFB%2Bc&X-Amz-Signature=9e2c9b5ef2af2baa842cfe10151a083a533787ea5739ce859cab4f83f0ec9924&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
