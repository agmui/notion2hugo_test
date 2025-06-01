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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645S6IWX4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIAKQrZ42kQX76jLLnshi0RVzNyjLjSOc7EXBiGvNojilAiEAyA5BE8yH1vPK1u7nTJ%2BYAGYHGiucRQi0rki1OEIYbTYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfU4OyHIXwlSCn2VyrcA6GfNt%2B0SmH6tCPwidnNKuzQgSbfgEzdw%2FqKye07kFi%2ByoWGC7z%2FfaI3kBS5sj7U5yFSAKscFcUPZ5%2F2oBtKp%2FykWWSnaQs1W%2Fgy1IWXL%2BT1xaRwVL5F025Oin409amuPgc4tsv%2FJw%2F0%2B9dFCAnOxs1azhVYRfpynexc2XOthX6sI%2BW8w6szsazXVwEE28okF2AuoUl%2Bl1bTO7S2Qd9VNFEN1egCjm%2BJfN87EDnc9HNmVLcaV9bDyJ%2FHKEp7CsRhTdm06PLaObcNBc7jhacLTs2WWXmRdspXolJx4aWQBTf6kGUFZR2seAjEQ4idIG3Pd0Fl16%2FYod72xLUJfTQ87ebYIyY57hr8%2BGCrcsWohq%2FiN7ZDnQ5hrIf0KZZPHCIYoKGWu7VHo9hLxcmyFOAUAXBd95VHbhmm59Zd7uY3fkKnHuGvKBZaiKhs%2B4l8kVRvMbBDTUUIOsIDCanoRvYb12IR6hVDJ%2BanRgW685h3y3xpV4a3If78g%2FT2q6cxfFUtsdzuq5HjeQfWn8D5%2BTwzsySxZ1La6BXzbjD8tvKJ6R8ucUJFD8JpYz8naWHRI32wvDhbHQN4ATUlHviHrk0t5QIzvxieNoNZ8xH0CzY1OyIDKzyQrw5Q9aFB2%2FgLMOid8sEGOqUB3zdLOMjs06vsl%2Bi2gEP%2Bo67vtuqXXg5PugAx29TB0O%2B0By7kq2eN%2BnI%2BbB21x92Of04oHdEF5p0CVRjx%2FQZTVYM6KAim9qb3wxn7%2FLwUzA6ieLwpHTWmcyq3BZUV2NDQ0mz%2F5YpTEOMlKaYYjlSyrJhsQ7W28lq9SYXAAoLN7%2FSyW2b1%2F7GPLCs3OwI%2B5db48k3f6DG0o15JTVqajl7D9x8BdASM&X-Amz-Signature=a21460cd3b27ae44771bff5c9607f4358dd60f3aa371c1a3f3bbebac97197043&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645S6IWX4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIAKQrZ42kQX76jLLnshi0RVzNyjLjSOc7EXBiGvNojilAiEAyA5BE8yH1vPK1u7nTJ%2BYAGYHGiucRQi0rki1OEIYbTYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfU4OyHIXwlSCn2VyrcA6GfNt%2B0SmH6tCPwidnNKuzQgSbfgEzdw%2FqKye07kFi%2ByoWGC7z%2FfaI3kBS5sj7U5yFSAKscFcUPZ5%2F2oBtKp%2FykWWSnaQs1W%2Fgy1IWXL%2BT1xaRwVL5F025Oin409amuPgc4tsv%2FJw%2F0%2B9dFCAnOxs1azhVYRfpynexc2XOthX6sI%2BW8w6szsazXVwEE28okF2AuoUl%2Bl1bTO7S2Qd9VNFEN1egCjm%2BJfN87EDnc9HNmVLcaV9bDyJ%2FHKEp7CsRhTdm06PLaObcNBc7jhacLTs2WWXmRdspXolJx4aWQBTf6kGUFZR2seAjEQ4idIG3Pd0Fl16%2FYod72xLUJfTQ87ebYIyY57hr8%2BGCrcsWohq%2FiN7ZDnQ5hrIf0KZZPHCIYoKGWu7VHo9hLxcmyFOAUAXBd95VHbhmm59Zd7uY3fkKnHuGvKBZaiKhs%2B4l8kVRvMbBDTUUIOsIDCanoRvYb12IR6hVDJ%2BanRgW685h3y3xpV4a3If78g%2FT2q6cxfFUtsdzuq5HjeQfWn8D5%2BTwzsySxZ1La6BXzbjD8tvKJ6R8ucUJFD8JpYz8naWHRI32wvDhbHQN4ATUlHviHrk0t5QIzvxieNoNZ8xH0CzY1OyIDKzyQrw5Q9aFB2%2FgLMOid8sEGOqUB3zdLOMjs06vsl%2Bi2gEP%2Bo67vtuqXXg5PugAx29TB0O%2B0By7kq2eN%2BnI%2BbB21x92Of04oHdEF5p0CVRjx%2FQZTVYM6KAim9qb3wxn7%2FLwUzA6ieLwpHTWmcyq3BZUV2NDQ0mz%2F5YpTEOMlKaYYjlSyrJhsQ7W28lq9SYXAAoLN7%2FSyW2b1%2F7GPLCs3OwI%2B5db48k3f6DG0o15JTVqajl7D9x8BdASM&X-Amz-Signature=7500e87736f9ae413598dd662490ab788ed40ec9316f6477c6ecef3fe5a3261c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
