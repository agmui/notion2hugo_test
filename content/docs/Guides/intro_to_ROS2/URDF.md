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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7OTN3V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgwkFEZeY8o1jvCVaBp1Jka7C4syL0nAYL4hjs1RfpcAIhAK%2FsqmSsLIyNG%2B5U3siA9GKQhkoTjILYya6eOMv0vMMQKv8DCEQQABoMNjM3NDIzMTgzODA1IgzzBsDCDcpu0i3j9HMq3AOleCrVqRJiZa6uFfx43LsGktsclbKB%2Bi1C%2BHSyuxibwpEtPF8AZ0wi7kll0Ai56Auxg2y9RS%2FLviKE00R6EI3AZ2rBO049NpSjY1zcYyBVVpzmmj%2BkSVpNkr9HffURTmk6XGlP0cbjv7CqnDS3ftm%2Fu26NgJltzVoSWXMWTLBTl1TLVDmei1BnYssRmbpSOcPEi%2F16kndW86GzPSq%2Be3QSfy5z39W%2B8%2Fypoq0RlPapn9%2BN8yh8096GYIfpXYMuy1M6zuPv7RH942%2BXQzNApTDdMrng6KQx58uDmfXh8B9xjJ1ttzoZ8%2BzpUmn4RpBo7%2BoHm97VOYPDQ8hvttik2s%2F7DJ%2Fcnaz35H2jaYrj68FnNHChSXHFZyRoQnqEPypZHaiUBs65zZ7sPqTj1C4E4c0RDUbk0mp9ogasHdRx355D2c4niifPtTN7SX0lzESBY3d%2FC8pjJWq3DUIN9hfnTfN1KVHsLM8I%2BJFGsFVXoTDoVl1X7UDYuqTyoNK7MkKZUWpcIRn70pTVhwDtj6dBSgOXxHtTRVexlypnnjPtBMfJp1vnCuxnVH67gt%2BOeToTmRoEawOGPlAjZv2rRbpHzKd7AYG1ZZKlx6lw3aL29SYasrt2F%2Fo0NQldqAT0dzDghPfEBjqkAQ8nVVcnebSkXv6nX%2Fzjxk6xk692%2Fp0ZN87JCrieEnyMOGXgmZBkhhX67gsm4FVDWofxfJ6c3A4sy%2BlExc5rbPW12idwAvxhimIX1VN%2Bkqsmyn37RxQo72MamVJab1DnjbDQcX%2BOu79F0gT39huuMFx9RIOehHPQycdNyNJql9dEYaiYBEtO5kwnrl%2BaIzzM8wR2Afvf5iOvjSG0DtHvXehJgszx&X-Amz-Signature=059105ec9ebf1cb2eea717e30c304c5adc8e8277fb3f9dccce5316aa07c94499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7OTN3V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgwkFEZeY8o1jvCVaBp1Jka7C4syL0nAYL4hjs1RfpcAIhAK%2FsqmSsLIyNG%2B5U3siA9GKQhkoTjILYya6eOMv0vMMQKv8DCEQQABoMNjM3NDIzMTgzODA1IgzzBsDCDcpu0i3j9HMq3AOleCrVqRJiZa6uFfx43LsGktsclbKB%2Bi1C%2BHSyuxibwpEtPF8AZ0wi7kll0Ai56Auxg2y9RS%2FLviKE00R6EI3AZ2rBO049NpSjY1zcYyBVVpzmmj%2BkSVpNkr9HffURTmk6XGlP0cbjv7CqnDS3ftm%2Fu26NgJltzVoSWXMWTLBTl1TLVDmei1BnYssRmbpSOcPEi%2F16kndW86GzPSq%2Be3QSfy5z39W%2B8%2Fypoq0RlPapn9%2BN8yh8096GYIfpXYMuy1M6zuPv7RH942%2BXQzNApTDdMrng6KQx58uDmfXh8B9xjJ1ttzoZ8%2BzpUmn4RpBo7%2BoHm97VOYPDQ8hvttik2s%2F7DJ%2Fcnaz35H2jaYrj68FnNHChSXHFZyRoQnqEPypZHaiUBs65zZ7sPqTj1C4E4c0RDUbk0mp9ogasHdRx355D2c4niifPtTN7SX0lzESBY3d%2FC8pjJWq3DUIN9hfnTfN1KVHsLM8I%2BJFGsFVXoTDoVl1X7UDYuqTyoNK7MkKZUWpcIRn70pTVhwDtj6dBSgOXxHtTRVexlypnnjPtBMfJp1vnCuxnVH67gt%2BOeToTmRoEawOGPlAjZv2rRbpHzKd7AYG1ZZKlx6lw3aL29SYasrt2F%2Fo0NQldqAT0dzDghPfEBjqkAQ8nVVcnebSkXv6nX%2Fzjxk6xk692%2Fp0ZN87JCrieEnyMOGXgmZBkhhX67gsm4FVDWofxfJ6c3A4sy%2BlExc5rbPW12idwAvxhimIX1VN%2Bkqsmyn37RxQo72MamVJab1DnjbDQcX%2BOu79F0gT39huuMFx9RIOehHPQycdNyNJql9dEYaiYBEtO5kwnrl%2BaIzzM8wR2Afvf5iOvjSG0DtHvXehJgszx&X-Amz-Signature=f86bcb79284c18d3f42120ed8b3b2c9c52e654f362dc65d8ea2a40c923ee1096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
