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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6Q4BH7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICURyKc6O36DhoHFqMp7elSW6Ar1oNTIDPdrtrqFHqZKAiEAhhGTOBpHvhK5kOXcrSNRy6rZ6zRe87UO%2FlIZyhUbHL8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9JtPePTvCf%2BGQs0ircA2YdPXFcqJqx70gF%2BUouQiu5Hulwafj1BTtNKhbapch8Bus9pvVBXfYL6Z9NMNSi%2F0IsS%2FTUlXKIwUybgxRAFHr375NGd7vkEeJs5J0eHKCTHLowQEcqFn%2BUwT0%2FgvYODujLuIVhaB9RyokR2eZMTg4Y3CIK9VT5VdjjXku77vuKpChjew4znvbD1ANIqywLeJjG7t%2FyWRmKkLO2E4TjAGLXbI8Ej3eqXZ8MiyYoUGNZhQNIFSxZ%2FJmDrPQMVW23aJf9nSR8XQDPWdjv1vIwcCmFbcZ4CUIHsFOVJZuzqcgR9%2FTAgd4GynEw%2FL5JjaEl7E3U1hY8qrou%2F8BQojMOyLjWgVe96laUvJcJ9d1ewM3POTl2Zf8Adn6%2FYETD4XWMZSFMww86EyuFLbjygIjIGLksCDUbuHuxipuApjnrIGft2utTXC7ycXODRKDZ1z8sXdKxK0qPs2AZc2nIabOyv5eaRrFAoipfD6Fge6vPD6L12fFI9Brig7NDEiy3xKr94wNP8O8SDlHLUtN8wxoSYqqMbEYL2lPAvt%2FRjMMkhBHAr%2FFj0BFfs8I%2BQZMSdW9VfTFdwPqH5tgJ3fUQgh%2BNuK%2BPpjgnR2lTdl4H01p5l8gcNfbP%2FuglpmioxAk%2FMOSX9L4GOqUB3oSpAvgort8DXoB1EpLoiFivovjg8KB5M%2F4i6Tb977nDeHWLMQ2p45daT5tftHCG%2FozcZMngrBi3B4NuTB6N6yiW%2FAjohDpvvJFm8YBRtAXYoBGw5r%2B9yeREtbqarSp25X%2Fw7TQ8fRBRwDJExXNzs4MU5I88U5NT7Q9hZ00oFG3urz7HUqhsTMKApRvhVnyOu4lir8f8WRVGlK0VhpuNLK45YVrj&X-Amz-Signature=a464aa8558ea085888f80229cf328d9c14a895bf4d2b325de0acbf61344e6df8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6Q4BH7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICURyKc6O36DhoHFqMp7elSW6Ar1oNTIDPdrtrqFHqZKAiEAhhGTOBpHvhK5kOXcrSNRy6rZ6zRe87UO%2FlIZyhUbHL8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9JtPePTvCf%2BGQs0ircA2YdPXFcqJqx70gF%2BUouQiu5Hulwafj1BTtNKhbapch8Bus9pvVBXfYL6Z9NMNSi%2F0IsS%2FTUlXKIwUybgxRAFHr375NGd7vkEeJs5J0eHKCTHLowQEcqFn%2BUwT0%2FgvYODujLuIVhaB9RyokR2eZMTg4Y3CIK9VT5VdjjXku77vuKpChjew4znvbD1ANIqywLeJjG7t%2FyWRmKkLO2E4TjAGLXbI8Ej3eqXZ8MiyYoUGNZhQNIFSxZ%2FJmDrPQMVW23aJf9nSR8XQDPWdjv1vIwcCmFbcZ4CUIHsFOVJZuzqcgR9%2FTAgd4GynEw%2FL5JjaEl7E3U1hY8qrou%2F8BQojMOyLjWgVe96laUvJcJ9d1ewM3POTl2Zf8Adn6%2FYETD4XWMZSFMww86EyuFLbjygIjIGLksCDUbuHuxipuApjnrIGft2utTXC7ycXODRKDZ1z8sXdKxK0qPs2AZc2nIabOyv5eaRrFAoipfD6Fge6vPD6L12fFI9Brig7NDEiy3xKr94wNP8O8SDlHLUtN8wxoSYqqMbEYL2lPAvt%2FRjMMkhBHAr%2FFj0BFfs8I%2BQZMSdW9VfTFdwPqH5tgJ3fUQgh%2BNuK%2BPpjgnR2lTdl4H01p5l8gcNfbP%2FuglpmioxAk%2FMOSX9L4GOqUB3oSpAvgort8DXoB1EpLoiFivovjg8KB5M%2F4i6Tb977nDeHWLMQ2p45daT5tftHCG%2FozcZMngrBi3B4NuTB6N6yiW%2FAjohDpvvJFm8YBRtAXYoBGw5r%2B9yeREtbqarSp25X%2Fw7TQ8fRBRwDJExXNzs4MU5I88U5NT7Q9hZ00oFG3urz7HUqhsTMKApRvhVnyOu4lir8f8WRVGlK0VhpuNLK45YVrj&X-Amz-Signature=f8aa5b6fc798e87196b31f4596a9c558a2c757b785a5b02f17fe8ab2df9f3819&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
