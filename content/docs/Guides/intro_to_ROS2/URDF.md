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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNBUGEC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjlvwc1BalMjePU%2FZCGh6DFEW1h6s7bO7j30NjSLqypAiAKy5RxTp4ShND%2FH7%2FA2OhpG27m2ugdqz8LDi5lMkxtZiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyuZcMb%2F7%2BgCLSssDKtwDa0k1T%2FVCiRpQoPdoslqXcJTzQSeR%2Fno0w6U%2BrNEMSzGM%2BTz7TKKuUAFLKg73aDU69IcRl0NsklMUj7cbPIq5xf27samESHtEuW2aZJCINZklNH6tPSsVGznCETNfHdPD9LKlFqqyhkTCaS7wzdxNVjx5xcXbW9oEHOgbtGmRAiU21uSgsj0TVfOyAPJ3nP9H%2FoeykAtnIrvdTzlBwb3yHxPD3I5wxIZoC0IcZcWwV90Mr8tuRu8TtMlkS6Ca9mmw8LLj65gHKZidjNmxcl4hnFK%2Fr%2BwA1Bo51%2FwBzYBYE9RxqbPr9abqs6b3j7iYjpLyh26iesb3i4drZXc7xdS6sr7zoIQfRK11E9tCiyTmfpOcBRibQmuHjpRbYCIqk%2BHgR8Mcyd%2FXRpoaka6W8vXFwXjx7viYAHDRV6XySndZSqGnMa%2F5lr%2ByqIcUsd%2Bvkae0p9YM9W05x48fyBnRJjsD1T5ZO0SJQbfLC%2F%2BAySjqtMZdsQ74oRPNA7RYzJcgaywzHgTX%2BIDM2Yxug63iwu8pxmTPl9w6F8Aknom8ZTPAq0IiQAkd8GDINEsx8wstBry%2FFwYjHXPWY4VrQv9DWhiQxtf9X7xucVdiBLwf9q6127xGr3KG4u8%2FlmoPjUQw1fKlxAY6pgFoK38nj3dkw1iz6FiLaxe0PMbvwLJ3brat8iTY88I1xLtir7ZYsGy6swSw2fDyYo8wxsodTpX2DVPXDqsCXduJ2zA7JijeI99KSCQKhtpDJYETvPTnZUgbH51IXyh3wxiseZuUD4ZSCqGaEKEmSyzuZzrv2MeQRP%2BnZd%2BlcqA0F6ADbFkjXkhUzqdDIdPrnPryZRvZH1bZqglKpGCxKV12ULCXjsFB&X-Amz-Signature=7beb9f4ba8ad96267c85fa9cdee33e43a67badcf13649c97ff66532bec534fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNBUGEC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjlvwc1BalMjePU%2FZCGh6DFEW1h6s7bO7j30NjSLqypAiAKy5RxTp4ShND%2FH7%2FA2OhpG27m2ugdqz8LDi5lMkxtZiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyuZcMb%2F7%2BgCLSssDKtwDa0k1T%2FVCiRpQoPdoslqXcJTzQSeR%2Fno0w6U%2BrNEMSzGM%2BTz7TKKuUAFLKg73aDU69IcRl0NsklMUj7cbPIq5xf27samESHtEuW2aZJCINZklNH6tPSsVGznCETNfHdPD9LKlFqqyhkTCaS7wzdxNVjx5xcXbW9oEHOgbtGmRAiU21uSgsj0TVfOyAPJ3nP9H%2FoeykAtnIrvdTzlBwb3yHxPD3I5wxIZoC0IcZcWwV90Mr8tuRu8TtMlkS6Ca9mmw8LLj65gHKZidjNmxcl4hnFK%2Fr%2BwA1Bo51%2FwBzYBYE9RxqbPr9abqs6b3j7iYjpLyh26iesb3i4drZXc7xdS6sr7zoIQfRK11E9tCiyTmfpOcBRibQmuHjpRbYCIqk%2BHgR8Mcyd%2FXRpoaka6W8vXFwXjx7viYAHDRV6XySndZSqGnMa%2F5lr%2ByqIcUsd%2Bvkae0p9YM9W05x48fyBnRJjsD1T5ZO0SJQbfLC%2F%2BAySjqtMZdsQ74oRPNA7RYzJcgaywzHgTX%2BIDM2Yxug63iwu8pxmTPl9w6F8Aknom8ZTPAq0IiQAkd8GDINEsx8wstBry%2FFwYjHXPWY4VrQv9DWhiQxtf9X7xucVdiBLwf9q6127xGr3KG4u8%2FlmoPjUQw1fKlxAY6pgFoK38nj3dkw1iz6FiLaxe0PMbvwLJ3brat8iTY88I1xLtir7ZYsGy6swSw2fDyYo8wxsodTpX2DVPXDqsCXduJ2zA7JijeI99KSCQKhtpDJYETvPTnZUgbH51IXyh3wxiseZuUD4ZSCqGaEKEmSyzuZzrv2MeQRP%2BnZd%2BlcqA0F6ADbFkjXkhUzqdDIdPrnPryZRvZH1bZqglKpGCxKV12ULCXjsFB&X-Amz-Signature=a70b502852a5ce28474148ac902709b372a85e6c76095dde28af01965dd6daa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
