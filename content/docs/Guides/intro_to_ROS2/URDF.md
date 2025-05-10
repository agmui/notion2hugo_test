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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTNSZBA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa8baw5WYqX7FJawCs9G5WIJdOzmXqjmoccbx6YYuJwAiEApfBT1Pl9J8DmREfGyjy0aeYuzM%2B8eO8JQOxbyiGE2m0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9Ag%2FTz3HkdqaeRFCrcA9I%2BCUnSp6q4godPWTGjqSpfKA%2FNdWJRWe61vEXyEVEKWR8u9RlCOZo%2FV3bXS3n97IjkjUQqgRGgMOCxwvAJZDt8S5%2FpAfXh0cAbS%2FOJYZ4FrfGVyq5A1Qv%2FlgmyMbq4eQzgYBT4i0iUedWt5wNM1GtfAH57kL%2BdpwCNzmenhsFDhyutxjMTEUrSQtrIARToPVpAamwNASLLK6SRyxb0y98Z1dGYsGzAzUQNs8UQv8%2FTxwX3yDCr7sJvOJHWQOH5FzV3OUA9wrpQn%2BXNc73qD%2FueIeQW8f%2BinhUHgyVEh%2BFBuQV2SiE%2BwMDG3YLHffbfkLX3sTYrTLX83JgacOxok0wXYDaX%2BnP%2FgOLRFKXqpADWY5IwRoTt%2FhT1bNip9ROp7LSwNEr1XB66h%2BRe0gHgpi6s%2FD3OrgL6CGpf9d320Ym1%2FD7EReFipJUKWCb6A52u9OP0D%2FAlrXp8YQz%2FzS8lvHKpRflNeBL7o1MQDYg93OUzWIJWbDGqNIgtxSB1U%2B9Tl9M4ZA88g1BZJs7e65gJv1WmDKnwoFgieTVNYjjTSsLnoRWlIAM4VVq02PN%2FWRSg0%2FQIIbh21UJBqipdb%2FGCswfHmPjpOnFSgJhtHMnwZmzhHprwYWZ7ezCBEd4gMKyG%2B8AGOqUBMXwTCNYoywCHHUCVuaakCBOmL2rZJH7iyb%2FgumfJvZTdkRq4ulM7GTUpYqE%2Bkxh%2BFkIwF7uqOQme2V%2FnVu5qiXtjfgAlKa28BA5Umw%2BIjBHQDzF5465JSuETNpMDda5E9pwSdrYdauNm0F%2BXf2DIPa%2F45x6sZzlbI0gRCPNX2ZRy0fvhI9tnMQUp0rOZd9dT%2Bb%2BJuG3DFh5qZzPpqAgOH9nHirEz&X-Amz-Signature=59ca34358f951d421ac857a62b6146b71f0c4ad949638ca13cb411fb6e6677ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTNSZBA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa8baw5WYqX7FJawCs9G5WIJdOzmXqjmoccbx6YYuJwAiEApfBT1Pl9J8DmREfGyjy0aeYuzM%2B8eO8JQOxbyiGE2m0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9Ag%2FTz3HkdqaeRFCrcA9I%2BCUnSp6q4godPWTGjqSpfKA%2FNdWJRWe61vEXyEVEKWR8u9RlCOZo%2FV3bXS3n97IjkjUQqgRGgMOCxwvAJZDt8S5%2FpAfXh0cAbS%2FOJYZ4FrfGVyq5A1Qv%2FlgmyMbq4eQzgYBT4i0iUedWt5wNM1GtfAH57kL%2BdpwCNzmenhsFDhyutxjMTEUrSQtrIARToPVpAamwNASLLK6SRyxb0y98Z1dGYsGzAzUQNs8UQv8%2FTxwX3yDCr7sJvOJHWQOH5FzV3OUA9wrpQn%2BXNc73qD%2FueIeQW8f%2BinhUHgyVEh%2BFBuQV2SiE%2BwMDG3YLHffbfkLX3sTYrTLX83JgacOxok0wXYDaX%2BnP%2FgOLRFKXqpADWY5IwRoTt%2FhT1bNip9ROp7LSwNEr1XB66h%2BRe0gHgpi6s%2FD3OrgL6CGpf9d320Ym1%2FD7EReFipJUKWCb6A52u9OP0D%2FAlrXp8YQz%2FzS8lvHKpRflNeBL7o1MQDYg93OUzWIJWbDGqNIgtxSB1U%2B9Tl9M4ZA88g1BZJs7e65gJv1WmDKnwoFgieTVNYjjTSsLnoRWlIAM4VVq02PN%2FWRSg0%2FQIIbh21UJBqipdb%2FGCswfHmPjpOnFSgJhtHMnwZmzhHprwYWZ7ezCBEd4gMKyG%2B8AGOqUBMXwTCNYoywCHHUCVuaakCBOmL2rZJH7iyb%2FgumfJvZTdkRq4ulM7GTUpYqE%2Bkxh%2BFkIwF7uqOQme2V%2FnVu5qiXtjfgAlKa28BA5Umw%2BIjBHQDzF5465JSuETNpMDda5E9pwSdrYdauNm0F%2BXf2DIPa%2F45x6sZzlbI0gRCPNX2ZRy0fvhI9tnMQUp0rOZd9dT%2Bb%2BJuG3DFh5qZzPpqAgOH9nHirEz&X-Amz-Signature=b7132caa5d3f6a729d2a27db8fa132107e2ca77cfb1f4358fafa17117b6931db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
