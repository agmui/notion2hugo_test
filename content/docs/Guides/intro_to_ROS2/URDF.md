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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6YQC7H%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGg5w%2BA4m1KjL77xJpuQm1wIgtE419esoCOyHTPKRJRJAiA0%2BStROmEwfpUNYxqqStlMMIZ64ISxfVvcuPaImLolaSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMf40yfZbLHo%2FI3E0QKtwDbaCXb6HwMf5X1xMC3DNl0C7IQ0zG1Of%2Bx0LjhwQa56ZrCy2gkSnjqseA57DqZViGf0F%2FmSdMyyicJfjSdRvxZgzwXV0tjvANyvc5WbrE%2BNZN%2BGmK0MnaT%2BVW%2BjR4xa5kULGWW4%2B1b6V5bGXX%2BksyyCEmLKIZ0LUhFHG8eOO7Xtz6sZrTTwJcn08ECOlQJ%2BDFrGja7C20l28L1TK%2BCZpj4w79peJQa15dBDvLGkCHSpICLTXwVIC%2FsurZKsflpXrJOCXILDurjHqHzI%2BY5jEjpVTT4f%2Fu406ufFExx6%2BQY9ZoRY1BxcpykzY1tzLuHub0jGQmJmnumI4f6kRaxHWfeCSaAjmlN2JHyjLcmQsDUekpdmjytOi%2BbWxhCbtd%2Fw%2FT6Yf3GCDSj9vG4XiB53rW7EfQDQ5XdzgYu4ioWYSpxwUTqE2AhBc9QZ%2FExsjd%2BHW8IH1mk1dHisfy0qZT%2BSgBdf%2FVthYK6IihvKjKuuDKWw0HfIw1ssgIQSB7l1Wtul16AYCNrtTedgmkmiMgC9VNU3KK%2FsZgaFtCtbhGtCGQoSGgWoT7nKXTqoxW0pCD0bR0rHYhcjQvTKUNC1kmmZCRVlwDg7a0qY19Hi1twpSeSkKMRLJUfxUWFxqdi4YwutGAvgY6pgELhXaOmqN6ve0ilzqcijzGaa1rJysls3vAtXOjuTjW4hTqf2BKpJ%2BpWlAWBCZqwVxzznEz9OU%2F1oLhMqJ%2B8vAHJaJPrRk20onZQYJ%2BHzyOJsLlNRvO9RirwHDCbmuyOoKgAzXD9l7HvL8xS2beNfEsnK%2B1JRRy9LyEQvAHkQ5Xf0QKNLGiRCgWLoaOJRHtJljZijDusBe1lkFrXBKxCKeSh3zIGVdT&X-Amz-Signature=32b684b0f14a4554e83c3563a6d6ad7922796ccaed8d794bef97bb880e8148d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6YQC7H%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGg5w%2BA4m1KjL77xJpuQm1wIgtE419esoCOyHTPKRJRJAiA0%2BStROmEwfpUNYxqqStlMMIZ64ISxfVvcuPaImLolaSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMf40yfZbLHo%2FI3E0QKtwDbaCXb6HwMf5X1xMC3DNl0C7IQ0zG1Of%2Bx0LjhwQa56ZrCy2gkSnjqseA57DqZViGf0F%2FmSdMyyicJfjSdRvxZgzwXV0tjvANyvc5WbrE%2BNZN%2BGmK0MnaT%2BVW%2BjR4xa5kULGWW4%2B1b6V5bGXX%2BksyyCEmLKIZ0LUhFHG8eOO7Xtz6sZrTTwJcn08ECOlQJ%2BDFrGja7C20l28L1TK%2BCZpj4w79peJQa15dBDvLGkCHSpICLTXwVIC%2FsurZKsflpXrJOCXILDurjHqHzI%2BY5jEjpVTT4f%2Fu406ufFExx6%2BQY9ZoRY1BxcpykzY1tzLuHub0jGQmJmnumI4f6kRaxHWfeCSaAjmlN2JHyjLcmQsDUekpdmjytOi%2BbWxhCbtd%2Fw%2FT6Yf3GCDSj9vG4XiB53rW7EfQDQ5XdzgYu4ioWYSpxwUTqE2AhBc9QZ%2FExsjd%2BHW8IH1mk1dHisfy0qZT%2BSgBdf%2FVthYK6IihvKjKuuDKWw0HfIw1ssgIQSB7l1Wtul16AYCNrtTedgmkmiMgC9VNU3KK%2FsZgaFtCtbhGtCGQoSGgWoT7nKXTqoxW0pCD0bR0rHYhcjQvTKUNC1kmmZCRVlwDg7a0qY19Hi1twpSeSkKMRLJUfxUWFxqdi4YwutGAvgY6pgELhXaOmqN6ve0ilzqcijzGaa1rJysls3vAtXOjuTjW4hTqf2BKpJ%2BpWlAWBCZqwVxzznEz9OU%2F1oLhMqJ%2B8vAHJaJPrRk20onZQYJ%2BHzyOJsLlNRvO9RirwHDCbmuyOoKgAzXD9l7HvL8xS2beNfEsnK%2B1JRRy9LyEQvAHkQ5Xf0QKNLGiRCgWLoaOJRHtJljZijDusBe1lkFrXBKxCKeSh3zIGVdT&X-Amz-Signature=79ec4bc31ad833f90da98277513f63c26cbe68bffc65f8ffaf7c0c70ddb64b30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
