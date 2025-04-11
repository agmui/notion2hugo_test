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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QR2C5XN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCfIRsDbSthrZ3QnsiYDv9KNYAfwXv5fTuAbkbCP2sscgIhAK%2BpgHhf%2Fsf5L3u5yhXVZu%2BuVn8hEfolKrlrs5ZmZoKYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkNZYu%2BZmhggDgqDUq3APxZ7uX2Es6YdvjUv5CtXHsymI4A9N8ExID79TTwg7pXN%2FYMndSKeihphfe8A8WfnRIqBbWZBTFi%2B%2Ft7llxj%2BNS8jcuVV8BJPlMNxqbkxfFAP9eZs7x1TUs5xm4Z%2F6dZP%2FAmn8y5TbAnuqz20lz39YM3RskmY4V7XkfYDR6GJY6XmxXThIhKlyxrgMm3K5d7rAVPLkAymJMrgvzSz0Ko%2BdlB3nbllMe7pfOzc1iAPUku97JtOWxGkGdaNwFEPYrlPB2Gi7av3T%2F9U5ehRNT8ARuPIlJ0Lsnac%2FXWGJ8sorYsVIzcvQyktxO5HTjUuydB77rUxlnlNbfRffwutHn0SP639dwbEqDA9qEY4M9sPB0jqWpvJJWVX0HtAJZ0UIdS3Tfeg8GKSG3f03NCPboBRNGeqXye9165DBaLdYR0lD1syynie3t9%2B7PM77AZUgveUW8JrE6F9W8FOWSBcz1aO3nHHggRiDI6%2BWSo4Ku6FztFugsFlaLAwQYWpd6%2B0EjYyrxnMoZdx%2B2fLcF5%2F7jXUyEQhQDmhqK4wtGJRpSgyUpNet0u2kkiQgFW9F9D99f4yoAnKBhS1bkXMO%2FcC3RRmyO5uwzyREODIqC6XtVuh8pTyTTUDbkdDtxX0HV7zCBw%2BG%2FBjqkAaUyiAmxUZ1KvOgtEbUsU1IsJ1heI1cmFcTaGoStwjD5tAiKZvj2pDNQYlvbvdB8N2X5cCy%2BP509aj0pPCrByVBu%2FuDmdcRjQrGHiH2GbGHDqxfMFy7yDum77UT0h4XTypQluEuzLErHlb49aIW4aH6w0fV7KwiBA3h%2BSGIph%2BK9PrUyFfv4K8j4BO4qznkc04MIWoP2l7WZVWUK%2Bt70BltVHEEz&X-Amz-Signature=39f215099e02c61c274b1501a6922b99038c8d140f8a54099bd544d49221a5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QR2C5XN%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCfIRsDbSthrZ3QnsiYDv9KNYAfwXv5fTuAbkbCP2sscgIhAK%2BpgHhf%2Fsf5L3u5yhXVZu%2BuVn8hEfolKrlrs5ZmZoKYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkNZYu%2BZmhggDgqDUq3APxZ7uX2Es6YdvjUv5CtXHsymI4A9N8ExID79TTwg7pXN%2FYMndSKeihphfe8A8WfnRIqBbWZBTFi%2B%2Ft7llxj%2BNS8jcuVV8BJPlMNxqbkxfFAP9eZs7x1TUs5xm4Z%2F6dZP%2FAmn8y5TbAnuqz20lz39YM3RskmY4V7XkfYDR6GJY6XmxXThIhKlyxrgMm3K5d7rAVPLkAymJMrgvzSz0Ko%2BdlB3nbllMe7pfOzc1iAPUku97JtOWxGkGdaNwFEPYrlPB2Gi7av3T%2F9U5ehRNT8ARuPIlJ0Lsnac%2FXWGJ8sorYsVIzcvQyktxO5HTjUuydB77rUxlnlNbfRffwutHn0SP639dwbEqDA9qEY4M9sPB0jqWpvJJWVX0HtAJZ0UIdS3Tfeg8GKSG3f03NCPboBRNGeqXye9165DBaLdYR0lD1syynie3t9%2B7PM77AZUgveUW8JrE6F9W8FOWSBcz1aO3nHHggRiDI6%2BWSo4Ku6FztFugsFlaLAwQYWpd6%2B0EjYyrxnMoZdx%2B2fLcF5%2F7jXUyEQhQDmhqK4wtGJRpSgyUpNet0u2kkiQgFW9F9D99f4yoAnKBhS1bkXMO%2FcC3RRmyO5uwzyREODIqC6XtVuh8pTyTTUDbkdDtxX0HV7zCBw%2BG%2FBjqkAaUyiAmxUZ1KvOgtEbUsU1IsJ1heI1cmFcTaGoStwjD5tAiKZvj2pDNQYlvbvdB8N2X5cCy%2BP509aj0pPCrByVBu%2FuDmdcRjQrGHiH2GbGHDqxfMFy7yDum77UT0h4XTypQluEuzLErHlb49aIW4aH6w0fV7KwiBA3h%2BSGIph%2BK9PrUyFfv4K8j4BO4qznkc04MIWoP2l7WZVWUK%2Bt70BltVHEEz&X-Amz-Signature=36155ec8dc703b0d4eee878f938f67fcccd3abce55ebb3b46519be92100daff8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
