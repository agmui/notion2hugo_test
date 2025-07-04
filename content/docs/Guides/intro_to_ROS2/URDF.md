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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMNHA3P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIC1MyX1vk12mNUwzWyTvPos2tucDNjxMpEwEk6jpKOosAiBtHkfhp3BuYrzQteGwoGmKRh6RBtm0acIsL%2FKhaeS4Syr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMfqTelhlUkwmyompQKtwDIfPx59yspa02lBprmnxD3TXoD28iI%2FiwTYl6ZdzbbHHgNPSjYhntPO4cL98SCkwHS4KE0mapxKntnKJYkX%2BZbyHigJ85s%2BMmXtXagze07XaMqUTvHgnNL7L8eqZJzNc0oeEV7MSUcrXHMoWhANrAVbrMzujj%2B8MtsIsS%2FuecbOwGXlNyH88VvEWKtExPEZDYMMy6vl1gLBv4oS1yLmQ9PpuKPEWv0V5hQxu9BBb5%2FbikvaYz1KBXm3%2FLLaib%2BzRkDlRSr5llFgfnYgA2aYVPPQld%2Bm83YhXSYs3Np2dNKCdVxTb06dwETAE53wbBFTRr3OnG5rDRBTvmLFPTEBZLiTx6QehV9cs3v5HI86DLd6NuxxgQIktQhDQnTc9Z%2BtljtbDUtJp32cCcmRpFVglUKxS9SThwDnVQk1JORLKdUSr4gFMcABJn2%2FIp3Lsh6KB8nDWCEL9KjP15Q0M6n91agzJe1ImH1FPXnNWh3zfA0ZWf0Wko%2BsKrt5H6lysrg6PurQGQGYM2GFXAzHY2%2Bojr7yvaIY6qhPQM0BbPBQWhbNHZcrW9KDaGkCjKlvW%2FB95324DtGkBkmOOVIBHd1aFhX7Tr1vjViON5WuACFHBeUhF3JMKAjBKtamlWl94wkL%2BgwwY6pgG1IPUYK2en%2FWMY7f0NVw3I5y%2FA6Knnxu549bgEEoMNNMCTAMyNhVI6RfN6g8Hd50IGIkbQEiBQXbOxJ2SMrNlIqCeMk1ns9CqsGPOqj6lKoTC%2BchT%2FxFog38l1CaF3qjVvP6HspSj2VrpDuUazUbsbxfJOsAR9hCy9M7y78mI2IGcNkqUPNO3OszLhyLNwZ0kFXqjffZe1eOQ9T2hdMw5DIwC9wBI3&X-Amz-Signature=5a3d8ce378bfb65aa7e59aa3c0bbe023e31715ee374209f0dd2b744208cb45e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNMNHA3P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIC1MyX1vk12mNUwzWyTvPos2tucDNjxMpEwEk6jpKOosAiBtHkfhp3BuYrzQteGwoGmKRh6RBtm0acIsL%2FKhaeS4Syr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMfqTelhlUkwmyompQKtwDIfPx59yspa02lBprmnxD3TXoD28iI%2FiwTYl6ZdzbbHHgNPSjYhntPO4cL98SCkwHS4KE0mapxKntnKJYkX%2BZbyHigJ85s%2BMmXtXagze07XaMqUTvHgnNL7L8eqZJzNc0oeEV7MSUcrXHMoWhANrAVbrMzujj%2B8MtsIsS%2FuecbOwGXlNyH88VvEWKtExPEZDYMMy6vl1gLBv4oS1yLmQ9PpuKPEWv0V5hQxu9BBb5%2FbikvaYz1KBXm3%2FLLaib%2BzRkDlRSr5llFgfnYgA2aYVPPQld%2Bm83YhXSYs3Np2dNKCdVxTb06dwETAE53wbBFTRr3OnG5rDRBTvmLFPTEBZLiTx6QehV9cs3v5HI86DLd6NuxxgQIktQhDQnTc9Z%2BtljtbDUtJp32cCcmRpFVglUKxS9SThwDnVQk1JORLKdUSr4gFMcABJn2%2FIp3Lsh6KB8nDWCEL9KjP15Q0M6n91agzJe1ImH1FPXnNWh3zfA0ZWf0Wko%2BsKrt5H6lysrg6PurQGQGYM2GFXAzHY2%2Bojr7yvaIY6qhPQM0BbPBQWhbNHZcrW9KDaGkCjKlvW%2FB95324DtGkBkmOOVIBHd1aFhX7Tr1vjViON5WuACFHBeUhF3JMKAjBKtamlWl94wkL%2BgwwY6pgG1IPUYK2en%2FWMY7f0NVw3I5y%2FA6Knnxu549bgEEoMNNMCTAMyNhVI6RfN6g8Hd50IGIkbQEiBQXbOxJ2SMrNlIqCeMk1ns9CqsGPOqj6lKoTC%2BchT%2FxFog38l1CaF3qjVvP6HspSj2VrpDuUazUbsbxfJOsAR9hCy9M7y78mI2IGcNkqUPNO3OszLhyLNwZ0kFXqjffZe1eOQ9T2hdMw5DIwC9wBI3&X-Amz-Signature=0e5a3e3ed4412fa3da2e4e531acd424b44e488caa1907c3ceecce2fa2a724449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
