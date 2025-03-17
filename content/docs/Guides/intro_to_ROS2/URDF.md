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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MJMX5K%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJ3Bi7D2I5a2KkvUF0NQdZIw50Rj4z%2Fij6WIBNkB%2FvAiAMVB03%2BgT0xTjRgIeL13qmZH7WhYd4t4wEpBq2A%2BJmSSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMzQz3U8nWywkD%2BfXwKtwD0erBGTvX75W4bXUmJb4mskrntXF1aKkXPJ3%2B%2F8UidXom8hnRVb%2FG%2FD7y42UXhLAbU%2F6qjS39teA54MFK2g1IkGbKmFTQ7gmgPTa6955DelMLR%2FPkG1LHu8v878iutp6i07QFYhjhC3oDFTV1qSQ65uXCMirZzTKR1BCyRCuyjjXdC8MK7pu4fYflHG9ES2FnXPTHEw510fOynD%2FhbpO1bGv43V%2FmodSSfJDqu1g3dkHHD%2BcZp0OhY4q5E66mCWbyNROVxIDehsqT3U5VW5s3B3A%2BW4PLMLx6nVJNb%2BmIiiwGTD8jvOElOp0lA5Xkhgi%2Bpmt5ugvGhMWtXr8CaTAoyhUcTZf%2FzgtJQQDtsmQ9C0q2AZkjbyRqSzYYIgWo8GE512s3AtWz57hIFU0eNMbQ8WUD2omJWO0wgEbG0K%2FMl87D7UnkokbzpLjOo0f0af68kOz9SZ4KKY%2BBxbrFM7XZN3HiyZIGGkumfpOvBDmBih5%2BNVBLOkGb4er3WC0VljlbpDgwIPdvNYLg%2Bg0AoXG9%2FKyo7gSv53mKLmWFXWAP0Fw5ZmqV7dXHDnIl61HU7yUb2vNorCzCUBaglBELLUuljbgkljWvj8py6YTenUk3VTMrdhMcZWlRcAuB49AwoYjhvgY6pgHlQBztkMNOD0vBZIu1JD4POUfESZdpfZr0rhTw%2F1jNvLA7%2BuM8enrpEZIDm9XeMwb%2B0lo9dnDBK%2B8QBRfTLKuzPg4cU2iPAnWn3nMFgWePyvx6twgwDdCz9i1jx0mDdxH8i46YaANgthg8TgLXrzFpVw8uSx60i7vbKQs6i3TMXSwNshpzHVmfyy16FG9UNXFrD0EsLqEnwDcU5XMPxLkJbJSy5hen&X-Amz-Signature=5cea7859d66cd4313d0af6506aea1ee2b65000b6d6487d6aab13508e6d93663d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MJMX5K%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGJ3Bi7D2I5a2KkvUF0NQdZIw50Rj4z%2Fij6WIBNkB%2FvAiAMVB03%2BgT0xTjRgIeL13qmZH7WhYd4t4wEpBq2A%2BJmSSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMzQz3U8nWywkD%2BfXwKtwD0erBGTvX75W4bXUmJb4mskrntXF1aKkXPJ3%2B%2F8UidXom8hnRVb%2FG%2FD7y42UXhLAbU%2F6qjS39teA54MFK2g1IkGbKmFTQ7gmgPTa6955DelMLR%2FPkG1LHu8v878iutp6i07QFYhjhC3oDFTV1qSQ65uXCMirZzTKR1BCyRCuyjjXdC8MK7pu4fYflHG9ES2FnXPTHEw510fOynD%2FhbpO1bGv43V%2FmodSSfJDqu1g3dkHHD%2BcZp0OhY4q5E66mCWbyNROVxIDehsqT3U5VW5s3B3A%2BW4PLMLx6nVJNb%2BmIiiwGTD8jvOElOp0lA5Xkhgi%2Bpmt5ugvGhMWtXr8CaTAoyhUcTZf%2FzgtJQQDtsmQ9C0q2AZkjbyRqSzYYIgWo8GE512s3AtWz57hIFU0eNMbQ8WUD2omJWO0wgEbG0K%2FMl87D7UnkokbzpLjOo0f0af68kOz9SZ4KKY%2BBxbrFM7XZN3HiyZIGGkumfpOvBDmBih5%2BNVBLOkGb4er3WC0VljlbpDgwIPdvNYLg%2Bg0AoXG9%2FKyo7gSv53mKLmWFXWAP0Fw5ZmqV7dXHDnIl61HU7yUb2vNorCzCUBaglBELLUuljbgkljWvj8py6YTenUk3VTMrdhMcZWlRcAuB49AwoYjhvgY6pgHlQBztkMNOD0vBZIu1JD4POUfESZdpfZr0rhTw%2F1jNvLA7%2BuM8enrpEZIDm9XeMwb%2B0lo9dnDBK%2B8QBRfTLKuzPg4cU2iPAnWn3nMFgWePyvx6twgwDdCz9i1jx0mDdxH8i46YaANgthg8TgLXrzFpVw8uSx60i7vbKQs6i3TMXSwNshpzHVmfyy16FG9UNXFrD0EsLqEnwDcU5XMPxLkJbJSy5hen&X-Amz-Signature=5288f56992e139a62d725508ceaf3d7a328f2703ea31eb321b86cbd3a12f5955&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
