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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYGLDVE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxAKQUgolsC9Hz%2BVCI4uTshy%2FuDjO%2BZQQNsHOZUh%2FQlAiBDZLCvB2UzNTVbvTIC0FT4l5cHblktGH6a0Jg9cJ46oCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOa7SsB%2FbEbOZj8tXKtwDrDRQ9uwg80OO7hVpgPdWBpaSe8NoTvgzei0617tlWqE8CPetgNtMU%2FnTc8vVbw4KVb37yhpVwXDXhAHixAPTd5LF9mDfT2BQ%2B9VH%2Bzd07tNmvhI58LedaHaMBNPoMAtsFkbSpThjXEmFp8BAmlm6plMhLH4LJE5h2Yc9VwaxoU4vQX1zahNhv8c0jMYjAo3KTejwFIpeG%2F6jOBE4oqQhRIQkKr8DEDb7C%2Bi7SPM1bwSizPyIJInD0kGb%2FycbjjICwdjbi2NSOEebUK2G9kuJhfmot8GIHrb%2BaJVP0esRPMNt8qjMSZyGLxmdFemHLavEqHR2sC%2FsT6HV3V3yekM1VVFOvVDgmXMj4bG1sc6CLylrShzyNJRZkigXhvHzj1jVDYg5s9IEFbXvEBSLEO5PP7qVIlK1qHZzYPLm%2FYtkZuwiKAMsWGXfCiRWwo8g9hI0v2Wbw0iZ%2BRvBHG9omrxI%2FuL16pg6WyvjFnGX9qzK8fbz78pgDg86uUk7cxayWNlnIlMgQpeTDUze087SaY9fFy%2FcjYioz2khFMvCdQPPz5YyhqIb1INjGqpND1PCADSnHvRhHAukROwNmDydTlKX%2F9J2ghUEImO306INU8hhr3VZfez6O1fFcbkC7t4w0OKDvwY6pgFuCAgBvp59lctMwBV78eZQke4vKY7B59D%2Fwg2ZTUtdDb8aYVgrflLvnLVkRSyCP7nN0WBEqfxnKFW7iAH9qON%2B8nRpTtz6vEsBaNtMpEA%2BNaVj%2B4adckNk2vDRQ%2B7SGgN9S0k%2BctXCImWwrWKOeRJB5VhR3aItgnbN8W6281F6EflwqnTAPPhPT0K4O7Vct4BjOoHLgMR6aBjjy0EmdL%2FkOWIexJdz&X-Amz-Signature=44c65b82aa13549396d3fa9b05e1e43714550bbd011ddd27763d54885ba78e40&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYGLDVE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxAKQUgolsC9Hz%2BVCI4uTshy%2FuDjO%2BZQQNsHOZUh%2FQlAiBDZLCvB2UzNTVbvTIC0FT4l5cHblktGH6a0Jg9cJ46oCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOa7SsB%2FbEbOZj8tXKtwDrDRQ9uwg80OO7hVpgPdWBpaSe8NoTvgzei0617tlWqE8CPetgNtMU%2FnTc8vVbw4KVb37yhpVwXDXhAHixAPTd5LF9mDfT2BQ%2B9VH%2Bzd07tNmvhI58LedaHaMBNPoMAtsFkbSpThjXEmFp8BAmlm6plMhLH4LJE5h2Yc9VwaxoU4vQX1zahNhv8c0jMYjAo3KTejwFIpeG%2F6jOBE4oqQhRIQkKr8DEDb7C%2Bi7SPM1bwSizPyIJInD0kGb%2FycbjjICwdjbi2NSOEebUK2G9kuJhfmot8GIHrb%2BaJVP0esRPMNt8qjMSZyGLxmdFemHLavEqHR2sC%2FsT6HV3V3yekM1VVFOvVDgmXMj4bG1sc6CLylrShzyNJRZkigXhvHzj1jVDYg5s9IEFbXvEBSLEO5PP7qVIlK1qHZzYPLm%2FYtkZuwiKAMsWGXfCiRWwo8g9hI0v2Wbw0iZ%2BRvBHG9omrxI%2FuL16pg6WyvjFnGX9qzK8fbz78pgDg86uUk7cxayWNlnIlMgQpeTDUze087SaY9fFy%2FcjYioz2khFMvCdQPPz5YyhqIb1INjGqpND1PCADSnHvRhHAukROwNmDydTlKX%2F9J2ghUEImO306INU8hhr3VZfez6O1fFcbkC7t4w0OKDvwY6pgFuCAgBvp59lctMwBV78eZQke4vKY7B59D%2Fwg2ZTUtdDb8aYVgrflLvnLVkRSyCP7nN0WBEqfxnKFW7iAH9qON%2B8nRpTtz6vEsBaNtMpEA%2BNaVj%2B4adckNk2vDRQ%2B7SGgN9S0k%2BctXCImWwrWKOeRJB5VhR3aItgnbN8W6281F6EflwqnTAPPhPT0K4O7Vct4BjOoHLgMR6aBjjy0EmdL%2FkOWIexJdz&X-Amz-Signature=1c316df9806a2de8b38cb8a564c87b27472060f9156e5d515d42fd331de5d3af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
