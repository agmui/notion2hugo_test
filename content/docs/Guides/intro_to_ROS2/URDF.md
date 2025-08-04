---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNWO3YT6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAWHs1klpvNJmQGK1B9l6pggF9W6HuWi4OKhrHhSv2%2BnAiEAvU1fwaZns26D9SoW2N76ABDS3elkgbafWmuNzuke160q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDODaxSwoSIf7lqNukircA39UY0rJLPBvUKWWRWoocY%2FCIfqC4nT3oSGLP0d5Axc%2BNGlr4AG21MUFTcAp8txldrq%2F%2FCotBIMtoZ2u0%2FFPja7xE%2FmGTC6BSFdOJ352aMdXbqsaYJdp9hWUSHczLZ4NVCR4EIvVz7GIoFgU4efQsssaiCwnzLuBM9NrZOJUcLKi5d%2FTd2S%2FZuzLDgCK%2FXPCNdFqqOEsig275A5QQ5rI%2F0qSs14qLHhtBzQmhp%2BgDjG69WuZDs9DqpGGVWjo4Won22IGPuJY4%2FVAiI50m1PZLYRvw8CdumwkXJSNiy%2F3fqGlIClT5O0HwV%2F6cZ6iykZORxiWG0cKoWV0e2E%2BqB08NucDeaHjCifswYz1kzQ5McZoJP7JsJ3BUcnKsHglaSOnhP73d8D%2Fw9JxevNSlFp3cB2bxPEuUika1o2sg7gxclEiDkFqJcX1Y956%2BhcqZuFWG5SrHSvlOvINTYR4uS%2FQ6Nbn2H1B%2BtSNLbSfR4qGgtUcAjdlJeUk5PjssYAMw0q%2F5OOyffxwIzodBNtz5KBD8pZ6ZzSZ1dFLKp7oSgMQ1GG4CGIhLcaEXRCe3P%2BTJT%2B%2FJSDR1%2BB6ZLnbnOIQnm3kGfvNOlYaPs1UDSumcpkgEfnnwmaw2KhcgBi4LTQCMJDPw8QGOqUBYghkvvggggUXUZvWcGxIvjQh5FVeZGscKTW81lborC5p3s%2FXsLO61go7WIb9HMcBVEaWz2IcQRjQLAaPT%2Bx08ehIhilIX0VNxRBVgG5RDIPuYqkeB09DSyzOU%2BN%2Foh2yNuN9NMm3mz8SbXPC7ISj5WXfehQg73BWd4MJSMG8BCsPq2tVBRVjMCppwrGEFA7CAYJG%2BjUANAIA7QxsnNMgjKlfv2Tp&X-Amz-Signature=9778cea9fe3cb7ff0bc1e8d921be8627afb3f56e1580f8b8daa2b4f9dbdddf90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNWO3YT6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAWHs1klpvNJmQGK1B9l6pggF9W6HuWi4OKhrHhSv2%2BnAiEAvU1fwaZns26D9SoW2N76ABDS3elkgbafWmuNzuke160q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDODaxSwoSIf7lqNukircA39UY0rJLPBvUKWWRWoocY%2FCIfqC4nT3oSGLP0d5Axc%2BNGlr4AG21MUFTcAp8txldrq%2F%2FCotBIMtoZ2u0%2FFPja7xE%2FmGTC6BSFdOJ352aMdXbqsaYJdp9hWUSHczLZ4NVCR4EIvVz7GIoFgU4efQsssaiCwnzLuBM9NrZOJUcLKi5d%2FTd2S%2FZuzLDgCK%2FXPCNdFqqOEsig275A5QQ5rI%2F0qSs14qLHhtBzQmhp%2BgDjG69WuZDs9DqpGGVWjo4Won22IGPuJY4%2FVAiI50m1PZLYRvw8CdumwkXJSNiy%2F3fqGlIClT5O0HwV%2F6cZ6iykZORxiWG0cKoWV0e2E%2BqB08NucDeaHjCifswYz1kzQ5McZoJP7JsJ3BUcnKsHglaSOnhP73d8D%2Fw9JxevNSlFp3cB2bxPEuUika1o2sg7gxclEiDkFqJcX1Y956%2BhcqZuFWG5SrHSvlOvINTYR4uS%2FQ6Nbn2H1B%2BtSNLbSfR4qGgtUcAjdlJeUk5PjssYAMw0q%2F5OOyffxwIzodBNtz5KBD8pZ6ZzSZ1dFLKp7oSgMQ1GG4CGIhLcaEXRCe3P%2BTJT%2B%2FJSDR1%2BB6ZLnbnOIQnm3kGfvNOlYaPs1UDSumcpkgEfnnwmaw2KhcgBi4LTQCMJDPw8QGOqUBYghkvvggggUXUZvWcGxIvjQh5FVeZGscKTW81lborC5p3s%2FXsLO61go7WIb9HMcBVEaWz2IcQRjQLAaPT%2Bx08ehIhilIX0VNxRBVgG5RDIPuYqkeB09DSyzOU%2BN%2Foh2yNuN9NMm3mz8SbXPC7ISj5WXfehQg73BWd4MJSMG8BCsPq2tVBRVjMCppwrGEFA7CAYJG%2BjUANAIA7QxsnNMgjKlfv2Tp&X-Amz-Signature=ae0598cd709dad36a3e6e03b547ca66a26f57466da975f84b812862000ac60eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
