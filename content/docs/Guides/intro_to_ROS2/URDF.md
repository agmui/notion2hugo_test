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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637J7WWMJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDfhXyjzVIa31iqic7XUbP1jnxONiCLN4bgp9RyGqv01AiAoQ9to3OJAybA3OBYdr4cRiMaZ9va8OGBLHtRjygeCaSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM0vInLN%2Fgr1D0JumxKtwDux12TD88TAcP4xSz4uEgZc7dQr%2B%2Bd5bV6Ej0GO2ND46xseb%2BiR%2BOIvI%2B64AyEBNUAfy9bqHS93vd2P%2BTSsxvUZpWY2S6V9xv700eyplIJrEjD0408lmCAcOelxFaJjcnIKGJhyqNjcTHsqa7HeKx%2FH7HQ2UAMwrrB479SLzW9VgexzE%2BSOonp9WIvpCJe37WIYRUIxZSX%2FGWZ7B6UXscNzoxfNbMnPuvSqgL3K1zQ4JzaUdOFc3GdhcbwoT8I4nV3pfDBeIjOi00AF8Wtc4kr8y4iuQQ6MyglISg5yQ18tyn0zsVGrImtm1VMTDULM0NG38cMO2pB6C66R6IIUd7tdkqIIIagLM8GP2TALTn63gai%2FBh2MBSd6iLzuJKQTU8xu%2B41EvmP3Cvv6YUH7lRlqUqB92A5EV1d%2BPCYQKH0awH3ME9yGlPgKHbJtU80rpUzhRwZZ%2F6YEWeLnaKfQqXgyiVjf%2F8YrKEvkDKWm7SoinN1OsawFSegpMOSFqef2y4ZsdNYtDYlNh16m%2BY6H58vg4OaI%2FKHV272jqU8p31wC2LyQM0lvESnGItI9ZkCenPdX1ZwOGi0WfOF7UdP%2BSa93FqFI%2B%2FYidqDbdGyhosVMDTJ8CdB2HLGMsVSgEwiO%2BSwQY6pgHPsTJBP9TUr5t4ok%2BuebSMF6hjt1xgV4ineT6WbpxGMoV3BTBxv6jtnML4cmYYxDaGOctmgg1L8lrUzq3gzveThkTP%2FVSqlw6pCnL8n3T5%2BRYGcDqOk5ModpfoiWYNL24PajGN9P12Ys0%2Fun9xqEvMXd%2BXZaG0Ja2S0zD%2BygsyA7VquGCVfrajIH7kojPDrrGTXGbpbseisyhPGYDXzXhqmStO8HLi&X-Amz-Signature=b34f2b3bb11896e8025d703b7dd7f14fafed4c09a884df20c553996259d70983&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637J7WWMJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDfhXyjzVIa31iqic7XUbP1jnxONiCLN4bgp9RyGqv01AiAoQ9to3OJAybA3OBYdr4cRiMaZ9va8OGBLHtRjygeCaSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM0vInLN%2Fgr1D0JumxKtwDux12TD88TAcP4xSz4uEgZc7dQr%2B%2Bd5bV6Ej0GO2ND46xseb%2BiR%2BOIvI%2B64AyEBNUAfy9bqHS93vd2P%2BTSsxvUZpWY2S6V9xv700eyplIJrEjD0408lmCAcOelxFaJjcnIKGJhyqNjcTHsqa7HeKx%2FH7HQ2UAMwrrB479SLzW9VgexzE%2BSOonp9WIvpCJe37WIYRUIxZSX%2FGWZ7B6UXscNzoxfNbMnPuvSqgL3K1zQ4JzaUdOFc3GdhcbwoT8I4nV3pfDBeIjOi00AF8Wtc4kr8y4iuQQ6MyglISg5yQ18tyn0zsVGrImtm1VMTDULM0NG38cMO2pB6C66R6IIUd7tdkqIIIagLM8GP2TALTn63gai%2FBh2MBSd6iLzuJKQTU8xu%2B41EvmP3Cvv6YUH7lRlqUqB92A5EV1d%2BPCYQKH0awH3ME9yGlPgKHbJtU80rpUzhRwZZ%2F6YEWeLnaKfQqXgyiVjf%2F8YrKEvkDKWm7SoinN1OsawFSegpMOSFqef2y4ZsdNYtDYlNh16m%2BY6H58vg4OaI%2FKHV272jqU8p31wC2LyQM0lvESnGItI9ZkCenPdX1ZwOGi0WfOF7UdP%2BSa93FqFI%2B%2FYidqDbdGyhosVMDTJ8CdB2HLGMsVSgEwiO%2BSwQY6pgHPsTJBP9TUr5t4ok%2BuebSMF6hjt1xgV4ineT6WbpxGMoV3BTBxv6jtnML4cmYYxDaGOctmgg1L8lrUzq3gzveThkTP%2FVSqlw6pCnL8n3T5%2BRYGcDqOk5ModpfoiWYNL24PajGN9P12Ys0%2Fun9xqEvMXd%2BXZaG0Ja2S0zD%2BygsyA7VquGCVfrajIH7kojPDrrGTXGbpbseisyhPGYDXzXhqmStO8HLi&X-Amz-Signature=8bb4529c41b87a494310b4d23e55834a838048ed4624612a5702dd830eec2a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
