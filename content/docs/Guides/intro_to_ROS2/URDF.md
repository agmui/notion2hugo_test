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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NQ4EA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDualxY215xIIt7k0N8QfmM%2BlzS9tiSBZfFSjht%2FkRpBAiEAzdwHzBISaRVXubu3RgWbhraMqWATDY888O104Eex9moq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAVN3i71XUg5hUFFwyrcA9KgulQfVF1XxvZyq5UX%2FFkhH9jS%2F%2FDrzhHW5MZQkTv4CV1Vq8s3g2RDkcqKdMoltD8hCYcNpWtezVL6wfVTpXXeNa3K4TCfVhgRvA4ubqtNPFwQel80p1%2FrhgVxBmsf0G59pg30RdF%2FUtgNZfMUUiwRdi5OkUE7KTErSprkIn14TqqPyuIAdSAEwnK8XEszPwaIOHAGHa%2Fg%2Bs7oCg5aKX2QRP7X1iwV43i9wlipvF27yaZ9qEVow7fEzrHq42hrEhHGQTTY1EwwgEJRWh71snFY%2FvT0CzrULynWSRXOVwp8mvP88MtUrj4Y2qnSCEuzdDmqrwgv55fZPHmk7XURLzVISRAMaG7ipMMLxEYdzLnsasGzme7e%2FoMFcvHoZ39c2cCzEtfGotrwt7vM%2F%2F%2FoXvMA8E9t6QxOgxHfF6znfUqCvnCJs9C19OjgHjMW1lNI1oq7JMSxRzLk2BqyYb9CmXDeNpbhyqotMbreNgXpnmndVxKOrXb73XOv0aIAl31sbxxHcNZYUNYCj9w0n85x%2BuEXY79xMHF7%2FrseEzcbbWeb8m6PsuMyoYQtPqKdmdHsK1cLwG6wB9txZEyj8BIdCxpqyfvP2Da94gcM%2B9M7iKbi3Unh4qZic1Ekbb1pMMG7jr0GOqUBibL8POwspecldAT9WKYRIqCGGgmgqusNUuAwSbLrab2TvJcXxkSosd1YuzPpmoSNd1XAxEQDGfCJeffr26OoAiy15zOhtGeskK2Q8dKtu7XIR13pUjrJ1gwyId6fLEeJuGHJdlZCcIfB%2Ft0tLY5GUKrgNx6aUucxNGy0EOd0%2FUBuRvhHppxUqUpKbLdaotWGHmZJ%2FTfFRR5%2BBanvikhKxkN4J93l&X-Amz-Signature=ce924e1df0b402cb048cff8740fa06a3f3c074ef5d15bc4987906994fd09b986&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6NQ4EA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIDualxY215xIIt7k0N8QfmM%2BlzS9tiSBZfFSjht%2FkRpBAiEAzdwHzBISaRVXubu3RgWbhraMqWATDY888O104Eex9moq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAVN3i71XUg5hUFFwyrcA9KgulQfVF1XxvZyq5UX%2FFkhH9jS%2F%2FDrzhHW5MZQkTv4CV1Vq8s3g2RDkcqKdMoltD8hCYcNpWtezVL6wfVTpXXeNa3K4TCfVhgRvA4ubqtNPFwQel80p1%2FrhgVxBmsf0G59pg30RdF%2FUtgNZfMUUiwRdi5OkUE7KTErSprkIn14TqqPyuIAdSAEwnK8XEszPwaIOHAGHa%2Fg%2Bs7oCg5aKX2QRP7X1iwV43i9wlipvF27yaZ9qEVow7fEzrHq42hrEhHGQTTY1EwwgEJRWh71snFY%2FvT0CzrULynWSRXOVwp8mvP88MtUrj4Y2qnSCEuzdDmqrwgv55fZPHmk7XURLzVISRAMaG7ipMMLxEYdzLnsasGzme7e%2FoMFcvHoZ39c2cCzEtfGotrwt7vM%2F%2F%2FoXvMA8E9t6QxOgxHfF6znfUqCvnCJs9C19OjgHjMW1lNI1oq7JMSxRzLk2BqyYb9CmXDeNpbhyqotMbreNgXpnmndVxKOrXb73XOv0aIAl31sbxxHcNZYUNYCj9w0n85x%2BuEXY79xMHF7%2FrseEzcbbWeb8m6PsuMyoYQtPqKdmdHsK1cLwG6wB9txZEyj8BIdCxpqyfvP2Da94gcM%2B9M7iKbi3Unh4qZic1Ekbb1pMMG7jr0GOqUBibL8POwspecldAT9WKYRIqCGGgmgqusNUuAwSbLrab2TvJcXxkSosd1YuzPpmoSNd1XAxEQDGfCJeffr26OoAiy15zOhtGeskK2Q8dKtu7XIR13pUjrJ1gwyId6fLEeJuGHJdlZCcIfB%2Ft0tLY5GUKrgNx6aUucxNGy0EOd0%2FUBuRvhHppxUqUpKbLdaotWGHmZJ%2FTfFRR5%2BBanvikhKxkN4J93l&X-Amz-Signature=98bfa5ba724e66317d2bc5919c16a52cfd282f68186e0dfe34ba91dff5022622&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
