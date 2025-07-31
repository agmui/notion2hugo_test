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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV247XOS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkg%2B46c884uiLOgKlbfFnd5ZLQGuzEeYz%2B3SWK2jDzlwIhAOUFN845iXLXwQrHmvRyMpVqrbMFhsB3WLU7POuoGTDgKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpMW5WvOpPdZCfieAq3ANkZHMAoLOOmsYYkfdMqtoSaStmVGmnAqBvUe8F%2FXNwxTtg58J4Qgyub3hB6X3U5zJEcTc3Rh0n49yCIoCgk%2F0QbM8EhTpAQ1KlJHvAes8VNUOt9Ca%2Bo16IHrVJnZwW%2FsJVIWiz9l0pnEc3nZHZ5w4FCKTfO16tt5C%2BygwzzoEba8kmnlI6EXvNcxnMQ6AyUuHrPqcAHpSQahh3C4G1CB7qhKxj03AXSkrXaWvsF%2F7jtM4o1eBJzQIEdRGvfdWw0Xo2vVBLHMPSulXk76h4nYcsbffI32uJ5qIStrNp0Q%2FgXHkfA0OmqBiZt043dOGvNiUjG3%2FYAbpGDGGI6r4asomYor9k%2F7iE0phZpzmxNe8XWtl8ETN6rfxcR7WBJwYmn7NqUvRMH1nIx7AbMVM87LWL7xwCSPSUq8VqhrjePszAp9OjG3YV%2FiSDhmHskZbhx1EdAL6HMBfIjt0UHdxh07mvWoQ8U6SOXvAmcsAL4py2E6Kqy0ZNVf6Xi%2FdkD4zmkkintdcQ%2ByTugTyG7Y3dmPYnqTtmZ1ZCs%2FonoBqr%2BKJTlPYpJDzzdwba28j6VAxqjWxTtONpldrIjS1M4sP1xGp8tg0oM4mZo4b8snALueeDX%2BDL4CQsSeHEIOGIaTC9y6vEBjqkAX6OLYCMqBO46T8aeKLZ1BEOpbIFIfR7YrrGWkclJbaPheL42BIzd3Gj08WgszzC3CWgQLYd1PpeWohyAAY6ItaG8Apzhupij4kjSfjbZzdunFDSeZrV1uljbEaeP9%2FjF%2BGssTG11InQ7s9XWGaSc25%2FAtJ7%2BddtDatQg204dF9y46GogyVHmLvPvF%2FUaBKoQ1i0x0LfO3Jv1tWsWIp7Db3jyqbM&X-Amz-Signature=a92167a3c9126e44f04604302fc94f8ba02ff9842e706534f6eab398668bce15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV247XOS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkg%2B46c884uiLOgKlbfFnd5ZLQGuzEeYz%2B3SWK2jDzlwIhAOUFN845iXLXwQrHmvRyMpVqrbMFhsB3WLU7POuoGTDgKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpMW5WvOpPdZCfieAq3ANkZHMAoLOOmsYYkfdMqtoSaStmVGmnAqBvUe8F%2FXNwxTtg58J4Qgyub3hB6X3U5zJEcTc3Rh0n49yCIoCgk%2F0QbM8EhTpAQ1KlJHvAes8VNUOt9Ca%2Bo16IHrVJnZwW%2FsJVIWiz9l0pnEc3nZHZ5w4FCKTfO16tt5C%2BygwzzoEba8kmnlI6EXvNcxnMQ6AyUuHrPqcAHpSQahh3C4G1CB7qhKxj03AXSkrXaWvsF%2F7jtM4o1eBJzQIEdRGvfdWw0Xo2vVBLHMPSulXk76h4nYcsbffI32uJ5qIStrNp0Q%2FgXHkfA0OmqBiZt043dOGvNiUjG3%2FYAbpGDGGI6r4asomYor9k%2F7iE0phZpzmxNe8XWtl8ETN6rfxcR7WBJwYmn7NqUvRMH1nIx7AbMVM87LWL7xwCSPSUq8VqhrjePszAp9OjG3YV%2FiSDhmHskZbhx1EdAL6HMBfIjt0UHdxh07mvWoQ8U6SOXvAmcsAL4py2E6Kqy0ZNVf6Xi%2FdkD4zmkkintdcQ%2ByTugTyG7Y3dmPYnqTtmZ1ZCs%2FonoBqr%2BKJTlPYpJDzzdwba28j6VAxqjWxTtONpldrIjS1M4sP1xGp8tg0oM4mZo4b8snALueeDX%2BDL4CQsSeHEIOGIaTC9y6vEBjqkAX6OLYCMqBO46T8aeKLZ1BEOpbIFIfR7YrrGWkclJbaPheL42BIzd3Gj08WgszzC3CWgQLYd1PpeWohyAAY6ItaG8Apzhupij4kjSfjbZzdunFDSeZrV1uljbEaeP9%2FjF%2BGssTG11InQ7s9XWGaSc25%2FAtJ7%2BddtDatQg204dF9y46GogyVHmLvPvF%2FUaBKoQ1i0x0LfO3Jv1tWsWIp7Db3jyqbM&X-Amz-Signature=6fc784fab854192a5623388b340e182b7bed3cd61523bb8b5db540a307f9a022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
