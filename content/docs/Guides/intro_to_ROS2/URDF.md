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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YI5MRD6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLWN%2FUbJ7ZIh1qt%2BMFMNBooAu7OmEhVonP3UH5ljO8uwIhALbCWGfCiqdT4iEGj20TOz0ivkqJBPPqBKcopeEcOxYpKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaYijqPBiLcuTOt6wq3ANe19c8yvS5%2BUVRS4HxOBl23%2BUwR6vOFpL1YkjwV4EQTwi8JQ3%2F%2B1Zi8XBL%2BktBsxhaADrIzI46O83jr0hVnOuPVdMgX4IUWGi8%2ByrumIJq7QoAVxgl%2BFYPI9MahtdaVUxowdf9CnqCZFcwfGuBMY8NSIwunMBiY%2FozzWNWMKSEvLhTqurXyooEiKu6s6ASioL35E5llJo1cCysstZ8fY9%2FkpkeGOsozZxDZaSi7E%2FP1Tk1%2BT%2B5wNb%2FSwqDBrSS6O4JtlX46vQfvDY1bV8RTQ7%2BaZJzDO8nhmgpm1KLELxdk0zMGFjLMsIDmgeH1xGZbI8M5wwZxXlj5OQmtsBtFWfKS8tguAnwOZSK7Q445bfxRZJaWciQUy4LLRmVmh8UeSa6c%2BIr84RMkoRMAtKPHKsswgxpn69Sr2IgNkaeVQLpi3cw497f5n9vvynd%2Fx8mw5HP3X6CdhMDnJCU5pkunoHUB%2BfXm%2Ft%2F3yFkz8nD102dke5HH6ZXAyoRacuGnNnhvs5%2BQvSPbMKccA4pz3ENoYAtUQxyVagOvpuNTcdJNXdXSDMbS7WZBcav%2Ftm59AbvxcyerReALMFVpG0zz36KYc6WsKcp9knesk8SePiVmDroOPmSkrWPsDXIcprO1jDJocjCBjqkAWoEoQbDVZj9igV3GqCzEaF245o6QhhcHyH1Uo1%2FrWYuN4%2BpFttyoePg2L8cs5iAUoKteeAtpS7qQ%2BFN6Ybwn9ZP57A%2BGo2QWM5R9YK7DrUV02XmE3cywphe3GMig%2FpUv1cjkCIRhV5YJPvje1kLKWcA3kj8WSpjkHhaBdN5bI6UF61tYb9edh7w2WRV5Yg8u0y8yCIB7%2FfdilhFUPcA51vl1LBF&X-Amz-Signature=ca160333edaeab905eb95f6a7fc9e9e0db9a1c661dcf4e725d6c917e39a75551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YI5MRD6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLWN%2FUbJ7ZIh1qt%2BMFMNBooAu7OmEhVonP3UH5ljO8uwIhALbCWGfCiqdT4iEGj20TOz0ivkqJBPPqBKcopeEcOxYpKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaYijqPBiLcuTOt6wq3ANe19c8yvS5%2BUVRS4HxOBl23%2BUwR6vOFpL1YkjwV4EQTwi8JQ3%2F%2B1Zi8XBL%2BktBsxhaADrIzI46O83jr0hVnOuPVdMgX4IUWGi8%2ByrumIJq7QoAVxgl%2BFYPI9MahtdaVUxowdf9CnqCZFcwfGuBMY8NSIwunMBiY%2FozzWNWMKSEvLhTqurXyooEiKu6s6ASioL35E5llJo1cCysstZ8fY9%2FkpkeGOsozZxDZaSi7E%2FP1Tk1%2BT%2B5wNb%2FSwqDBrSS6O4JtlX46vQfvDY1bV8RTQ7%2BaZJzDO8nhmgpm1KLELxdk0zMGFjLMsIDmgeH1xGZbI8M5wwZxXlj5OQmtsBtFWfKS8tguAnwOZSK7Q445bfxRZJaWciQUy4LLRmVmh8UeSa6c%2BIr84RMkoRMAtKPHKsswgxpn69Sr2IgNkaeVQLpi3cw497f5n9vvynd%2Fx8mw5HP3X6CdhMDnJCU5pkunoHUB%2BfXm%2Ft%2F3yFkz8nD102dke5HH6ZXAyoRacuGnNnhvs5%2BQvSPbMKccA4pz3ENoYAtUQxyVagOvpuNTcdJNXdXSDMbS7WZBcav%2Ftm59AbvxcyerReALMFVpG0zz36KYc6WsKcp9knesk8SePiVmDroOPmSkrWPsDXIcprO1jDJocjCBjqkAWoEoQbDVZj9igV3GqCzEaF245o6QhhcHyH1Uo1%2FrWYuN4%2BpFttyoePg2L8cs5iAUoKteeAtpS7qQ%2BFN6Ybwn9ZP57A%2BGo2QWM5R9YK7DrUV02XmE3cywphe3GMig%2FpUv1cjkCIRhV5YJPvje1kLKWcA3kj8WSpjkHhaBdN5bI6UF61tYb9edh7w2WRV5Yg8u0y8yCIB7%2FfdilhFUPcA51vl1LBF&X-Amz-Signature=84c443b935bb38adac9fb759b370f3c4bf621480b07ca2a420a74011358a707c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
