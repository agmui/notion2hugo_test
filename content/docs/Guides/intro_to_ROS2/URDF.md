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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCWFUSG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMvMbK9dut60yvsae6esZ6jjZru%2BC2UFABxWM%2BlBMzAiEAylD%2B%2BBC%2BECZrBXqPvZvX86G8R8qpNSJKNLZntUZIHhoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3ce0ksWhhfiaJQHyrcA7UYkugI%2FIoaAnO3NNdb%2Fj%2BdV1WuOzHMJj9HGNwDrXyXf01LmhT9Pc6pQteV8T6QOgCgL7uMJl1bXhOajO8v4PcxvQOVsjCmFJTFZaNalnEZFl6y5U%2BaM4iczw63yO2MhMDUDxLLt5FgCbNVrZdj6tuiGapgLKQGYgolAy12%2FAyCC%2B7DnpKff8y2ARaunmWdHkER%2BgQ71NsPrLx1RlS7zHTYBWFny81yj2560tOIinKxd1O02vEWH86SZtTg3bXzVi9HmtDXdWkHfz%2FJd%2FuuA5Slgz5CZy%2B7xIHMotHcN3wzo64gGzNY2wFl6p5mtIccQcjYkYIVw0QDw7pCB2oGoUY44XXpJhRUdr8B7uOG2SVLtIgVzflPxhFBTIdPLKlOoBJQD6eOvj7eN4uH4ZzbffeEjthlzXBOlX8hzaviWbH9gIWu27T%2BWPtJSKK2UZ5iyMYOrTmlrV4KL6%2B2rHSic4gyjQfqxyUQ%2BX%2BAJIVUzgCHgdMx5SogCHcKnmBkXPoIvaSEeVprns%2B8Bff9xtq1jfj%2F6vVzkeiVPSKM0JTBHvOWWoAU7VnZktHF7O%2FcGAq1FFPB%2BI3NiGLiUKgcJxA60wWp0xC4AprXHHPcVp6rjATTUWSx3qnYO%2FLfZ7YPMM%2FHrsEGOqUBti0mjCz3LdBqfmfbiLy8u5GqD0kuUwzfx%2BOK40nrq1ZrAl3LbeszbHy2JWwt1wwg3uaKlyWfnPsNdhrvnFJU8XAwFKFX5zyc%2FzzcJjBLGwuCGrhOcSZ%2FHhgOulFEwfd8IU27HvTVktd3b8NQCfkd76au23nHIvGr0sS5E04zvs5uD5WGOu3x3N0O7lpWiiN1rf81TYFOCFULjuTQoPls4yeJA410&X-Amz-Signature=44e7db3427b07999616c939c6b9fb7205aadad6b4100b3d8072cba270380d597&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCWFUSG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyMvMbK9dut60yvsae6esZ6jjZru%2BC2UFABxWM%2BlBMzAiEAylD%2B%2BBC%2BECZrBXqPvZvX86G8R8qpNSJKNLZntUZIHhoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3ce0ksWhhfiaJQHyrcA7UYkugI%2FIoaAnO3NNdb%2Fj%2BdV1WuOzHMJj9HGNwDrXyXf01LmhT9Pc6pQteV8T6QOgCgL7uMJl1bXhOajO8v4PcxvQOVsjCmFJTFZaNalnEZFl6y5U%2BaM4iczw63yO2MhMDUDxLLt5FgCbNVrZdj6tuiGapgLKQGYgolAy12%2FAyCC%2B7DnpKff8y2ARaunmWdHkER%2BgQ71NsPrLx1RlS7zHTYBWFny81yj2560tOIinKxd1O02vEWH86SZtTg3bXzVi9HmtDXdWkHfz%2FJd%2FuuA5Slgz5CZy%2B7xIHMotHcN3wzo64gGzNY2wFl6p5mtIccQcjYkYIVw0QDw7pCB2oGoUY44XXpJhRUdr8B7uOG2SVLtIgVzflPxhFBTIdPLKlOoBJQD6eOvj7eN4uH4ZzbffeEjthlzXBOlX8hzaviWbH9gIWu27T%2BWPtJSKK2UZ5iyMYOrTmlrV4KL6%2B2rHSic4gyjQfqxyUQ%2BX%2BAJIVUzgCHgdMx5SogCHcKnmBkXPoIvaSEeVprns%2B8Bff9xtq1jfj%2F6vVzkeiVPSKM0JTBHvOWWoAU7VnZktHF7O%2FcGAq1FFPB%2BI3NiGLiUKgcJxA60wWp0xC4AprXHHPcVp6rjATTUWSx3qnYO%2FLfZ7YPMM%2FHrsEGOqUBti0mjCz3LdBqfmfbiLy8u5GqD0kuUwzfx%2BOK40nrq1ZrAl3LbeszbHy2JWwt1wwg3uaKlyWfnPsNdhrvnFJU8XAwFKFX5zyc%2FzzcJjBLGwuCGrhOcSZ%2FHhgOulFEwfd8IU27HvTVktd3b8NQCfkd76au23nHIvGr0sS5E04zvs5uD5WGOu3x3N0O7lpWiiN1rf81TYFOCFULjuTQoPls4yeJA410&X-Amz-Signature=769adb7a688e325d13384feb24b81b86c525af0b20cae59f50a6bdd0b78e3c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
