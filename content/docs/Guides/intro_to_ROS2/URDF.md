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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWJWWOI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGDdu6WXfcRtcfjG3wxqtdBT1z9OKRQf5JkuWkyYIga9AiAs1OWQVW0iq%2FBwS5wdEI%2BHsZW8B7jtUbko8UvdVOQy0iqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkHVgreZmOs3hkJxKtwDgMahIXp9cUN94eSVkKn8zx3LTd1LTmt0lg8uOwsnddaYt7bejd%2FA61UIGipbqNm%2BRaBw1yelCWqHzz2B5zVgzmzT8Nq159u9%2F87NUEoVNs9P44hVFce2HelBpw3i7rs4LSAkjHGMrEqCkFxOZzXnxDUK%2FI5tfSeVpNxecZy8WPj2oiWRRN1%2B58M6e%2FZEfQeB1HzDu7q%2FPSrtoawq9cXjTLvjQ31MQrmN29DYXGcx4M5mYy7%2FnMlJO9xzlMnauvdLvOHzsrcIeCccorz6TpF9vryYfb%2FQVLZ5KYHlaWuaQAkdkq516UFavSZ47yF8oVmYY%2BuKFSxC0u%2BJ%2FIenARBDmzvJVV8UzZCTe2svOvg6BNPSCQSNDpiL1quJotmBo2jA1ZJZ8A9YedRb1ZIMVk%2B64Zze1oshFzT43J6f0bER8l6eBGc6IQaEOBt1Gc6yYOUSZNoJ5W0MrJq7aifq2uAlcQVPI%2FImK8riUNyavkxygDcu7jiKsmteFIpu4Lx7Y8xFsaqQcRAp56QHkdNgo1SHPt3aEZB5gaQhz59CQw%2F6HQ%2FUlJl8qtzlF4ZyPRafXtzXyLq9Abgbv3qT6P%2BwLEwsR2Xfj0iy2vinE5nfAMwrzROHpcaq0iRmfb%2FLs4Ywp5z2vgY6pgHgp2cUx3SRc1AReEOTQNG6pQ%2F3gDzf9HV%2BAHEhFu5gP7mwtYE2hHdEwVNg%2BUgfaqVo19GMV8Ra%2F6acWIyqiSgbdqJP4Wlus7hnBmbbF2BrdLOQGjnvB3p6K6r%2FYICpPOaCzOpZ5l49lRacSNz8pH2cPCa1%2FHz9hnYwf7hs5sbO6pTJexd2DfsWJXyy0lq3lZdk4z5ViLjmnBNL7wLGgA30E9d00%2FmN&X-Amz-Signature=c59186921f3b118d41b4d0174ec99f35cdd7e47c7df3269d126d0ce112facf7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWJWWOI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGDdu6WXfcRtcfjG3wxqtdBT1z9OKRQf5JkuWkyYIga9AiAs1OWQVW0iq%2FBwS5wdEI%2BHsZW8B7jtUbko8UvdVOQy0iqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkHVgreZmOs3hkJxKtwDgMahIXp9cUN94eSVkKn8zx3LTd1LTmt0lg8uOwsnddaYt7bejd%2FA61UIGipbqNm%2BRaBw1yelCWqHzz2B5zVgzmzT8Nq159u9%2F87NUEoVNs9P44hVFce2HelBpw3i7rs4LSAkjHGMrEqCkFxOZzXnxDUK%2FI5tfSeVpNxecZy8WPj2oiWRRN1%2B58M6e%2FZEfQeB1HzDu7q%2FPSrtoawq9cXjTLvjQ31MQrmN29DYXGcx4M5mYy7%2FnMlJO9xzlMnauvdLvOHzsrcIeCccorz6TpF9vryYfb%2FQVLZ5KYHlaWuaQAkdkq516UFavSZ47yF8oVmYY%2BuKFSxC0u%2BJ%2FIenARBDmzvJVV8UzZCTe2svOvg6BNPSCQSNDpiL1quJotmBo2jA1ZJZ8A9YedRb1ZIMVk%2B64Zze1oshFzT43J6f0bER8l6eBGc6IQaEOBt1Gc6yYOUSZNoJ5W0MrJq7aifq2uAlcQVPI%2FImK8riUNyavkxygDcu7jiKsmteFIpu4Lx7Y8xFsaqQcRAp56QHkdNgo1SHPt3aEZB5gaQhz59CQw%2F6HQ%2FUlJl8qtzlF4ZyPRafXtzXyLq9Abgbv3qT6P%2BwLEwsR2Xfj0iy2vinE5nfAMwrzROHpcaq0iRmfb%2FLs4Ywp5z2vgY6pgHgp2cUx3SRc1AReEOTQNG6pQ%2F3gDzf9HV%2BAHEhFu5gP7mwtYE2hHdEwVNg%2BUgfaqVo19GMV8Ra%2F6acWIyqiSgbdqJP4Wlus7hnBmbbF2BrdLOQGjnvB3p6K6r%2FYICpPOaCzOpZ5l49lRacSNz8pH2cPCa1%2FHz9hnYwf7hs5sbO6pTJexd2DfsWJXyy0lq3lZdk4z5ViLjmnBNL7wLGgA30E9d00%2FmN&X-Amz-Signature=b051b66c02f0e46d13cdd670ae8235ce378bba46e14b2beebb608d10258af369&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
