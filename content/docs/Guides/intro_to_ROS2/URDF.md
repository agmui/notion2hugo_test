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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIEAFKD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGZvHrIdw63TkexxgCuWwJTRe0yZyqLYgdpKnFvMJnbBAiBJV48jE9Tlrp88fa2iOx7B0tKzZ80RJEvx0rlw7pOwbCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVmBe3ZIURCPPf%2FJKtwD6gzX7OYmVunB35EGzkKWouewoKELWdn4NEPPpB8BzG3i10gR9Pf4ydp9aQJGnvjxeV%2BXvm14M2ZsQJb2CpcH6wjwftd1pDEul97f%2FXbAn8C3bw4RLzh2laEVff1lizYzylenoT7wPsdByIsgpPFW%2FVD%2BcDHET09Ow2LeP48kD4nVI9wjZk7%2FD%2FRzBU3Fa2qLuDCgndfoNYGTCREOQ3EvEfwVCezsE35sYMJgmg%2FdUqgEoRiMVIRv4zG%2BbpAB81ppvfcRNj83OsHjoxLpZe457mnL1bUft1ClYvmIXldmeUCMnhr2KaOfTDjh2AXcYPa7LUPo2bGH8ehaPYvJQHyDjYAz%2BSJhVKjFnPNjbku6YUwoxLww9I6LxZSyi%2Bi1CMequEH6IhFdBkD8KtF4kJWBEhlQ6HtpNn4pxJBQWFl8%2FZCUxIiXHra1FKXETLhUf5vwpj%2BhYfMV6DhIATYFeXq89TPm1RXil2uLU3psqzumJ14JJdAHqZUHEkNTjfAc1ncgKnPKNYYSZHjh0iLGnrddjWRe1XSsjDYWo7OyAdlVfGyU8fFfh2uzKMj1tsRE9LTxJdaFiX%2F4MnnSsYMVL129faReqc%2BB55Bhz%2BGYixvZxjY8mEcFtpV5Uf79iqMwypLivwY6pgEvnXCcoEGvZ1ogznf2K7l9f41oeiRZQbKb89iIF%2FtJRjX9Rq1q1KHF0js5zw5eQKpTCdBNPwhiv%2FpHxLp3g5zYrnA%2FmgEuEp1zPs5NjzKgaip8fJ0aYrJufUiVgip2PLEAARCUq9zEhvf1PL4gPrz88lCxC2yAJmoMXLmeTH2NWMliNeNhNL4Fq9bzgnyN7uLmkjrSzbmd5ZZdaGryW%2FTzPglQ6hLw&X-Amz-Signature=e03520759f02687a34901e5c318446a8a80efd5af3d2396fe8125122c1b86d94&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIEAFKD%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGZvHrIdw63TkexxgCuWwJTRe0yZyqLYgdpKnFvMJnbBAiBJV48jE9Tlrp88fa2iOx7B0tKzZ80RJEvx0rlw7pOwbCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVmBe3ZIURCPPf%2FJKtwD6gzX7OYmVunB35EGzkKWouewoKELWdn4NEPPpB8BzG3i10gR9Pf4ydp9aQJGnvjxeV%2BXvm14M2ZsQJb2CpcH6wjwftd1pDEul97f%2FXbAn8C3bw4RLzh2laEVff1lizYzylenoT7wPsdByIsgpPFW%2FVD%2BcDHET09Ow2LeP48kD4nVI9wjZk7%2FD%2FRzBU3Fa2qLuDCgndfoNYGTCREOQ3EvEfwVCezsE35sYMJgmg%2FdUqgEoRiMVIRv4zG%2BbpAB81ppvfcRNj83OsHjoxLpZe457mnL1bUft1ClYvmIXldmeUCMnhr2KaOfTDjh2AXcYPa7LUPo2bGH8ehaPYvJQHyDjYAz%2BSJhVKjFnPNjbku6YUwoxLww9I6LxZSyi%2Bi1CMequEH6IhFdBkD8KtF4kJWBEhlQ6HtpNn4pxJBQWFl8%2FZCUxIiXHra1FKXETLhUf5vwpj%2BhYfMV6DhIATYFeXq89TPm1RXil2uLU3psqzumJ14JJdAHqZUHEkNTjfAc1ncgKnPKNYYSZHjh0iLGnrddjWRe1XSsjDYWo7OyAdlVfGyU8fFfh2uzKMj1tsRE9LTxJdaFiX%2F4MnnSsYMVL129faReqc%2BB55Bhz%2BGYixvZxjY8mEcFtpV5Uf79iqMwypLivwY6pgEvnXCcoEGvZ1ogznf2K7l9f41oeiRZQbKb89iIF%2FtJRjX9Rq1q1KHF0js5zw5eQKpTCdBNPwhiv%2FpHxLp3g5zYrnA%2FmgEuEp1zPs5NjzKgaip8fJ0aYrJufUiVgip2PLEAARCUq9zEhvf1PL4gPrz88lCxC2yAJmoMXLmeTH2NWMliNeNhNL4Fq9bzgnyN7uLmkjrSzbmd5ZZdaGryW%2FTzPglQ6hLw&X-Amz-Signature=6f2e40c85dd294eb1fed1bf6f74179d6da96da2c81cb3d5c1b6f5e431e3287d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
