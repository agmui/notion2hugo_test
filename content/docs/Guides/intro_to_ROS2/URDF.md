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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGX2MQD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJeggfUeb9UoM96HdI9tdMyLre%2Fb2GkNx8e73VKONwuAiBjhKXtfQAOFXtydsA4Jzpql1mf5KKcGjIN66P4C4aocSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMtnn%2FNfynjdKjNd6oKtwDDOoYjK9oYv4Yz8l2gtXaCCq%2FK4Areeq%2BvIt8dMJvUo0jvDelrUIiNBw7O9Su1EcJUzIK349v6PLgfjhECftzJ2ZM7GnvCQomdLott7%2BJHa0jBpa0dxGLtHtZTuyTX6IPZQmgQe7kyX9TT5bAv4LmnNm9bIAos1oXH8jM2THxSb%2BOSmiFPJ%2B0LiDomQtxqCSt4K%2B3Gn0YmyyzdqS6AK8nzDQCrCTV%2FCQY7TDqDxI%2FIMSoe%2FVIFCyd3td%2BqB9lOHQQfNX0z%2F8bo7hjBdwSimBhmeGL5g98vZCnPyO4tkWj3dOl0LHLuZi%2Fx2HbR1IyDfSwlvZuQryy3RJd9dVA8yIb1wQyhSrObJN0d5tYQBqQILqUBC24XUplkwHLRO5%2Bq9WbdGgLlO2W90HdJvSED5sud0FupACmYSWooR6sJDABCEQPNMyLuo7FyoeapDeEkXD9TTVpqz2yseCNuLSaxPq0o6pin9pJyhh%2FfmEFekuNMDv1%2FJjXbjKFJyyygvMQgSjeNfQK0ogIyivXRN94bqsSdzHMIY0Gzb%2BxW3uXpOByIccPPo5V0l33LRYq5djRQwsmRAwIcxDw49jPWFjWVuaN%2BDoGSiMx%2Fsl7lzhbZXlp%2BcnUPlQ87RQ0jZv%2BzgYw1evwvQY6pgHvJQpIjUoifb1wTjLp894ij6qw8ctaa8jvZh%2FInErZDE4BuWKr1sJeoyH6tUp4OvPyuFj2Is3cADqW%2FREdm1b5q6f%2BVPSoKYaoI6vRgMpt6Jzd%2BMm2B797F1YlEYyBaS4Tyu3kfza8Lggnvr1zI5BzCcJ6tO3vSQYZs49cuuuvr09tjLYJsWYGiSFqT8Wm8BdQDHMNrwG0mneQ%2Fj%2BdRIFGeCJVc5Q7&X-Amz-Signature=c63837e1f6a06fc250b59aede56a487fd9d482e3d9f36d4993cf0820bdf52686&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KGX2MQD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJeggfUeb9UoM96HdI9tdMyLre%2Fb2GkNx8e73VKONwuAiBjhKXtfQAOFXtydsA4Jzpql1mf5KKcGjIN66P4C4aocSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMtnn%2FNfynjdKjNd6oKtwDDOoYjK9oYv4Yz8l2gtXaCCq%2FK4Areeq%2BvIt8dMJvUo0jvDelrUIiNBw7O9Su1EcJUzIK349v6PLgfjhECftzJ2ZM7GnvCQomdLott7%2BJHa0jBpa0dxGLtHtZTuyTX6IPZQmgQe7kyX9TT5bAv4LmnNm9bIAos1oXH8jM2THxSb%2BOSmiFPJ%2B0LiDomQtxqCSt4K%2B3Gn0YmyyzdqS6AK8nzDQCrCTV%2FCQY7TDqDxI%2FIMSoe%2FVIFCyd3td%2BqB9lOHQQfNX0z%2F8bo7hjBdwSimBhmeGL5g98vZCnPyO4tkWj3dOl0LHLuZi%2Fx2HbR1IyDfSwlvZuQryy3RJd9dVA8yIb1wQyhSrObJN0d5tYQBqQILqUBC24XUplkwHLRO5%2Bq9WbdGgLlO2W90HdJvSED5sud0FupACmYSWooR6sJDABCEQPNMyLuo7FyoeapDeEkXD9TTVpqz2yseCNuLSaxPq0o6pin9pJyhh%2FfmEFekuNMDv1%2FJjXbjKFJyyygvMQgSjeNfQK0ogIyivXRN94bqsSdzHMIY0Gzb%2BxW3uXpOByIccPPo5V0l33LRYq5djRQwsmRAwIcxDw49jPWFjWVuaN%2BDoGSiMx%2Fsl7lzhbZXlp%2BcnUPlQ87RQ0jZv%2BzgYw1evwvQY6pgHvJQpIjUoifb1wTjLp894ij6qw8ctaa8jvZh%2FInErZDE4BuWKr1sJeoyH6tUp4OvPyuFj2Is3cADqW%2FREdm1b5q6f%2BVPSoKYaoI6vRgMpt6Jzd%2BMm2B797F1YlEYyBaS4Tyu3kfza8Lggnvr1zI5BzCcJ6tO3vSQYZs49cuuuvr09tjLYJsWYGiSFqT8Wm8BdQDHMNrwG0mneQ%2Fj%2BdRIFGeCJVc5Q7&X-Amz-Signature=08b48b2ad4fd0c0de5284ae02335c7e82be11f37c9bacecc62d6ef12de2ba4f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
