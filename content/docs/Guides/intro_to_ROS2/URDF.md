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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSBMOW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCVoxqGEJOfpZEM9oy6vJ3%2Fg00nvtQS9x%2BB3HIx69rZbQIhALyGVegt4yQDg4T79s8hW8jE4%2Bncal6f%2FkZ1GfU%2BTYF5KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLNhkbGQbTAhabtQ0q3ANKfHgcw3JdLTj%2FqszvjZbRjMWa%2FXWmcKEUJ5KXIEDNbh5a46T6gZg0T06Fm%2BrRuZZSPqndhXqV1%2FSjdQH4jl7WDBnpEEHeIuuLkaiHdDIKFyKWJ%2F7paKIqe4RaAcU6q9L94ob22%2BE2YpxtbwaAlIY1aI%2BhzSd%2B4UQZC%2FkJWhiG42%2BzMS9lRy%2BIW3oIl%2Bzkojl0V99yLAOOC5YMNv7Ko%2BTW9G5GK9FLusDFPMt0qo%2FT4odu5A7FrMkCTmJcm8LwVqWjizb2adH3ahfBKXS4PxCXEATuComtAtkgDuhsVtqcq3hZvS7UIs0lN0TWODKbDHFTnrZaHntbuMpkryXUpkMW0g3U4KChx8GIRddNlTWMtRJZm%2Bri39KQ0uPJVWX2vtEYv%2FAtVwQhqUtwi3AMdq9piV5PlzaE6MVlHfCmdO2JiC9cgxCXqLkrRVIy1DRKBSv%2FefwTCKIJ89%2BtvNCg6aDOmAu4Z0ZD8LXFtIQwJaw9xi8RHhEJh37SYnRxkxBAuPlQCaliyAuXxQuRv8LJ4NP%2B0YCX2CFQy0uCLi9kKE9yDTUTjpkvk0rYw8oAlNYByqXVxvycs4oiyZR3ILfIfjxD7QajkJ2LzKS3QmY4WPU6%2F8FgYu%2Fns9Vtop6F%2FzCr%2Fdm%2FBjqkAUkimYvTppYPaLq0AGUHczeKU0JLH6Y0fEQhmaMasLclKOdJBW6TAWpgKI1vnsdPwQpmKViTpd9DCSYK03ITH1TiFBwFzOavs8n7v1J2NMXQtl8dawEmulliDtez5iX106JyMJ5N2fiqJHHZe0lstKIqTv4Cbrb9hMwnggQgW4oYV3loEN7zpvYm412ncKDou2Hd8z2izykTeD%2BaIe6JSknqQT37&X-Amz-Signature=276b14b4b7bdd65968b4c2a057686e11a972376171180920ee12b9dab837d5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MSBMOW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCVoxqGEJOfpZEM9oy6vJ3%2Fg00nvtQS9x%2BB3HIx69rZbQIhALyGVegt4yQDg4T79s8hW8jE4%2Bncal6f%2FkZ1GfU%2BTYF5KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLNhkbGQbTAhabtQ0q3ANKfHgcw3JdLTj%2FqszvjZbRjMWa%2FXWmcKEUJ5KXIEDNbh5a46T6gZg0T06Fm%2BrRuZZSPqndhXqV1%2FSjdQH4jl7WDBnpEEHeIuuLkaiHdDIKFyKWJ%2F7paKIqe4RaAcU6q9L94ob22%2BE2YpxtbwaAlIY1aI%2BhzSd%2B4UQZC%2FkJWhiG42%2BzMS9lRy%2BIW3oIl%2Bzkojl0V99yLAOOC5YMNv7Ko%2BTW9G5GK9FLusDFPMt0qo%2FT4odu5A7FrMkCTmJcm8LwVqWjizb2adH3ahfBKXS4PxCXEATuComtAtkgDuhsVtqcq3hZvS7UIs0lN0TWODKbDHFTnrZaHntbuMpkryXUpkMW0g3U4KChx8GIRddNlTWMtRJZm%2Bri39KQ0uPJVWX2vtEYv%2FAtVwQhqUtwi3AMdq9piV5PlzaE6MVlHfCmdO2JiC9cgxCXqLkrRVIy1DRKBSv%2FefwTCKIJ89%2BtvNCg6aDOmAu4Z0ZD8LXFtIQwJaw9xi8RHhEJh37SYnRxkxBAuPlQCaliyAuXxQuRv8LJ4NP%2B0YCX2CFQy0uCLi9kKE9yDTUTjpkvk0rYw8oAlNYByqXVxvycs4oiyZR3ILfIfjxD7QajkJ2LzKS3QmY4WPU6%2F8FgYu%2Fns9Vtop6F%2FzCr%2Fdm%2FBjqkAUkimYvTppYPaLq0AGUHczeKU0JLH6Y0fEQhmaMasLclKOdJBW6TAWpgKI1vnsdPwQpmKViTpd9DCSYK03ITH1TiFBwFzOavs8n7v1J2NMXQtl8dawEmulliDtez5iX106JyMJ5N2fiqJHHZe0lstKIqTv4Cbrb9hMwnggQgW4oYV3loEN7zpvYm412ncKDou2Hd8z2izykTeD%2BaIe6JSknqQT37&X-Amz-Signature=a28c4f65bf911a7d5b6461d676c80380c38941c97db3533c9a47c98b19f03d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
