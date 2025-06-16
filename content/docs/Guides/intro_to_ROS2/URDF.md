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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGWIHPW6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD6N9VPAWMlGXDAFw9RvgEGOQAMYN3O4vb6Om9J2EUbxAIgTzQLxufMSyxadX6%2B7XvqNWKFWd%2FNUPzmO28luLOj4bkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEmyG9j36eGyur1%2BnyrcAwv3jbYC0FpwtHh%2B67awyUM47RN6SUY1glSJdhO5X%2BAKxxDgKUMUA4M8VUVEt9SSQDGoMMw8nItb6TMottXHAiCvbMYAsTN3VhRf6IlA5hQfnW87r%2B37fkQOG6SCktm0I3sSi4yz%2F175sSxOnf%2Fe1debOJAsQeClpFVhAQLL5FR9hGqIXyf8yCHPnQsJOI7ZnzeOC1qwYbJKSboFicH4xH8KSs8EE0c4TgKauDSc4%2BtXoQcxluaFhunp8AFMnnp6Mnmyrtvi8%2BIIfD2m6vrN%2F169UXr2hi5L7yOpXja6TaCp4UV23NAQDxo69j2HBUhg24xK88rw2sdBB3b%2BrDnDozX3Ok18InFmf%2BQu1S3RigwPKZTPOOx0D8Ot5g2WQOFOyVAp3OvtTqVWZ%2F9MvRVaJJWFRZ3eGNRSksacbWzMCFx9Y5MJxeNtUhvQZgFuOMH4fAxkPgHbg1FuCLlcEkSBmf4u5R2T5esvpsHrRGwQHNv4zNA1%2FgIMtfQZUAPVghzYoDE52mgbW2spfhIQMPLNV67SmaVSmqJLkYJJtAo0R%2FI1lGfPU3pAAnHnaUhcbu9C8XtpJheKvxBjPXr4YVTzeTCLwO44icM3rnxZe4HxsTC%2BKFCLTs1pGpmmTRpTMKT%2BvcIGOqUBemHTerWQSzXmfZiiJRFOWSsyAdzyO9rl2LlGu%2FCZiAYvN6fQWN7SdzSIXJMRV%2FBkR2MYdAPyd8jW%2FsN4zQjwohLMCn9MZYRjGGazirsuzalZkFd6hQc0aPJeOvKhGsd17OTVJzhsevxvyqhKhbQ%2BYaDLFH8kCsCZ%2BpyJ20Np3xvn4eYyNESldZB7XRCJlVLP%2FtYMb5%2BM%2FHNoail1DoXSk%2BNtEZu6&X-Amz-Signature=ab7e7001423aff420a63ce808596371f8be58ac78b690ac386654002f5c4c708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGWIHPW6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD6N9VPAWMlGXDAFw9RvgEGOQAMYN3O4vb6Om9J2EUbxAIgTzQLxufMSyxadX6%2B7XvqNWKFWd%2FNUPzmO28luLOj4bkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEmyG9j36eGyur1%2BnyrcAwv3jbYC0FpwtHh%2B67awyUM47RN6SUY1glSJdhO5X%2BAKxxDgKUMUA4M8VUVEt9SSQDGoMMw8nItb6TMottXHAiCvbMYAsTN3VhRf6IlA5hQfnW87r%2B37fkQOG6SCktm0I3sSi4yz%2F175sSxOnf%2Fe1debOJAsQeClpFVhAQLL5FR9hGqIXyf8yCHPnQsJOI7ZnzeOC1qwYbJKSboFicH4xH8KSs8EE0c4TgKauDSc4%2BtXoQcxluaFhunp8AFMnnp6Mnmyrtvi8%2BIIfD2m6vrN%2F169UXr2hi5L7yOpXja6TaCp4UV23NAQDxo69j2HBUhg24xK88rw2sdBB3b%2BrDnDozX3Ok18InFmf%2BQu1S3RigwPKZTPOOx0D8Ot5g2WQOFOyVAp3OvtTqVWZ%2F9MvRVaJJWFRZ3eGNRSksacbWzMCFx9Y5MJxeNtUhvQZgFuOMH4fAxkPgHbg1FuCLlcEkSBmf4u5R2T5esvpsHrRGwQHNv4zNA1%2FgIMtfQZUAPVghzYoDE52mgbW2spfhIQMPLNV67SmaVSmqJLkYJJtAo0R%2FI1lGfPU3pAAnHnaUhcbu9C8XtpJheKvxBjPXr4YVTzeTCLwO44icM3rnxZe4HxsTC%2BKFCLTs1pGpmmTRpTMKT%2BvcIGOqUBemHTerWQSzXmfZiiJRFOWSsyAdzyO9rl2LlGu%2FCZiAYvN6fQWN7SdzSIXJMRV%2FBkR2MYdAPyd8jW%2FsN4zQjwohLMCn9MZYRjGGazirsuzalZkFd6hQc0aPJeOvKhGsd17OTVJzhsevxvyqhKhbQ%2BYaDLFH8kCsCZ%2BpyJ20Np3xvn4eYyNESldZB7XRCJlVLP%2FtYMb5%2BM%2FHNoail1DoXSk%2BNtEZu6&X-Amz-Signature=7b3107eebf82dcdb86ac1c08477ea7397e15037630a37beb4b2720a85de6170f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
