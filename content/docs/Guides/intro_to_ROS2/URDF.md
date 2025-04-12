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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCEC3QVE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD8ci5%2BMMeH0o5SW7DhInBY1wAHSCaNw%2BmLMJeq%2BTQXfwIgSsffIsxWR4xWcw2X7EW%2F0DBs%2F1R6P2qDCz4Y5x6nqwsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKM7pcVLEDUj%2FDgZ9CrcA6YWUpz2hju6nxwBxeZFV3iVHUAMs2ZVPxHXS1rnjx3pj6NNC%2BAbDlc9SNd09U6ASe2Gh4D3B8hVHhalIeRl%2FJ3%2FbbRemhwq4AvoAq65Z%2FuOTMkuO%2Fx6JBDtNczly0wNuk8geDLpTSnpSgsbZsN19SfG2ief7jPO7uPL5rgIF6wA%2FpD1oGIwTBbxGZrQmp0UhTE4y2Owp%2B5udWnUUH8C9sUfx06wZfaRBXHh8XGNgMeDC0HzHuij2jsm%2BByScfmrHOr0mWiiq7GQAUjC7BdlswOb4SzwCz7LXepr%2FRHpediFtZDk9CXvdfBuaoPe289v6xQJrHBw4G%2FHWgvr5PZSVC7o%2FM6BMhJdOKSPLi4DCWVCi3C0VUy%2F%2BzaHguvotfUVbzK4yW7UlzJfkp74AnP8Y0%2BeNjukdrGseU6%2BJjCvyh%2BTzZJHs1qWiACER1N5in2cYrNlt4RxsmML2Dqugpo8vYkQATmYPsaI8%2BVbK6h6jUjs3wTJ5gAzQRvvUXmaWzYjtu0xJLDfcDaPH%2BPVrcYLeYLPZl%2Bp61DQwtCfMJBoa9xzF8jxsrcViaalbNBQxEeEVnu6zrRLfdgC0n2iJSO%2FvEkUDBUzwJZfTc4%2BC0O%2B1wAhDKmT9H8xLv%2Bk91nRMPj76b8GOqUBONvEjjOBsvD99hlZqUUmd%2BSMA%2B%2BlcLQqZ4hDHzOV8neCKERwL%2B115FeGQoyCiinakZeOYlW%2Fis66LLxAJ5CSBsqlE%2FjLIgpe2NgCIjuioWgA7m4CZPOyNeS8uvXX7FhiCleXa5XwezWmUc9lh%2FVQ8L9fLu7glp8DdYF3P7Xi3ki1%2FtMZNNKneydj235m0LhUacgKSVVbog486vPKr9FCMp2OhwfA&X-Amz-Signature=705b5ac3c3f1a303467f2c0cdf8723a33e56ce764752b58d8cd79fa8b986fec1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCEC3QVE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD8ci5%2BMMeH0o5SW7DhInBY1wAHSCaNw%2BmLMJeq%2BTQXfwIgSsffIsxWR4xWcw2X7EW%2F0DBs%2F1R6P2qDCz4Y5x6nqwsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKM7pcVLEDUj%2FDgZ9CrcA6YWUpz2hju6nxwBxeZFV3iVHUAMs2ZVPxHXS1rnjx3pj6NNC%2BAbDlc9SNd09U6ASe2Gh4D3B8hVHhalIeRl%2FJ3%2FbbRemhwq4AvoAq65Z%2FuOTMkuO%2Fx6JBDtNczly0wNuk8geDLpTSnpSgsbZsN19SfG2ief7jPO7uPL5rgIF6wA%2FpD1oGIwTBbxGZrQmp0UhTE4y2Owp%2B5udWnUUH8C9sUfx06wZfaRBXHh8XGNgMeDC0HzHuij2jsm%2BByScfmrHOr0mWiiq7GQAUjC7BdlswOb4SzwCz7LXepr%2FRHpediFtZDk9CXvdfBuaoPe289v6xQJrHBw4G%2FHWgvr5PZSVC7o%2FM6BMhJdOKSPLi4DCWVCi3C0VUy%2F%2BzaHguvotfUVbzK4yW7UlzJfkp74AnP8Y0%2BeNjukdrGseU6%2BJjCvyh%2BTzZJHs1qWiACER1N5in2cYrNlt4RxsmML2Dqugpo8vYkQATmYPsaI8%2BVbK6h6jUjs3wTJ5gAzQRvvUXmaWzYjtu0xJLDfcDaPH%2BPVrcYLeYLPZl%2Bp61DQwtCfMJBoa9xzF8jxsrcViaalbNBQxEeEVnu6zrRLfdgC0n2iJSO%2FvEkUDBUzwJZfTc4%2BC0O%2B1wAhDKmT9H8xLv%2Bk91nRMPj76b8GOqUBONvEjjOBsvD99hlZqUUmd%2BSMA%2B%2BlcLQqZ4hDHzOV8neCKERwL%2B115FeGQoyCiinakZeOYlW%2Fis66LLxAJ5CSBsqlE%2FjLIgpe2NgCIjuioWgA7m4CZPOyNeS8uvXX7FhiCleXa5XwezWmUc9lh%2FVQ8L9fLu7glp8DdYF3P7Xi3ki1%2FtMZNNKneydj235m0LhUacgKSVVbog486vPKr9FCMp2OhwfA&X-Amz-Signature=cb19d8999d7bc6b102ad65c673e0581a88e950672406b6114ca1d95d13bc70b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
