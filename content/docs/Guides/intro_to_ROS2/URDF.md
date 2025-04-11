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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKCA2SV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCrf5k3m0uXL%2F6k%2FDNuvqR142haZJrY3MlknxSw2ePz4AIhAO6%2BEBSj4yrC0lG8yR%2BYFJa8saLnX6sJDDGMWLmps3UzKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAhfEGdBjQTKng%2Fi8q3ANssK4hr1LnxYXmHFWyiLiLwMidHRjTmmFNiaLSjzBO5ZenUlU3%2BS42qoTLxpaRp8TDysCBqhv%2F5ZYCHF8GlkzDzS4bhIUq4P4AngcGwGasydfmeJDZv00Dj22sWY9X%2Frs0mN6yWR8ryr7h3kepF7vCq4mUcIDUk%2FBU3BlCXPxX123zUNwFvpkF9%2Bk4NkDMWsxM5duwLZyGjmo0tVvIFKx92D1ER49FoZr57U1SCeSS9RWumdHEUfXCgV51EvOqm%2BOy%2Frpul7%2BbEuyj%2BcXb4AIDXfSTw1MhLx%2FUIYl7ZSpflODZ2Zyq85ZraCag75cPps6MBMF4%2Fb%2BZsSkt2Tb76EIcQMMzrtTp0MsLI6iIlMvWBrQsHTUTHLiERhKJC%2B%2FCzUHFGu3wcJmUx%2BcJzXweDxlixY%2FjqHqPyO3e4lpYqzxKgYrfQCihkCbRWQS%2BRLHrFRLAGxUbkardO9CWv5MPKzBXbnFWp16qZkua8Iff4VzaF%2BIIhYixCWkX5apfPpBy8rTZd8TYa85Uw7UYzHjpgLk5eJspAs3fYIIucEt9iCFrGPh7UE52mhNnt%2FWVOv%2FxrrTtJ9ZRpVMpWICOcfqXysDBG8O3FH6WRUaFsVk9O6ojEXx65dbSYrfp%2FdVXHzDV9uK%2FBjqkATww6oySI%2F1WErXUrScDPJ95ICDR6EcUGspB5lGfM6thSANIXkfG7OcIYEaosVrsORQ1t37%2BvkR3PT26pq3XsbXGSoOqnUcbfQUHp5dhx4%2BtPibGJ0C1anwDJ58dFrWDWh9w%2BGXi9z6i0NKP7g3RjmifiRjrfrnW3lQZeFAZh1WfH6%2F%2F%2F0Lpzj2Ko1bxDdhpX5a8GQ%2FL%2B%2FcIpuH%2BE8QkdIiGm%2Bhl&X-Amz-Signature=2675818e18dfc3a8541695d658a5ae01180be811a7e596c5c8fea6d04be2f23e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKCA2SV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCrf5k3m0uXL%2F6k%2FDNuvqR142haZJrY3MlknxSw2ePz4AIhAO6%2BEBSj4yrC0lG8yR%2BYFJa8saLnX6sJDDGMWLmps3UzKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAhfEGdBjQTKng%2Fi8q3ANssK4hr1LnxYXmHFWyiLiLwMidHRjTmmFNiaLSjzBO5ZenUlU3%2BS42qoTLxpaRp8TDysCBqhv%2F5ZYCHF8GlkzDzS4bhIUq4P4AngcGwGasydfmeJDZv00Dj22sWY9X%2Frs0mN6yWR8ryr7h3kepF7vCq4mUcIDUk%2FBU3BlCXPxX123zUNwFvpkF9%2Bk4NkDMWsxM5duwLZyGjmo0tVvIFKx92D1ER49FoZr57U1SCeSS9RWumdHEUfXCgV51EvOqm%2BOy%2Frpul7%2BbEuyj%2BcXb4AIDXfSTw1MhLx%2FUIYl7ZSpflODZ2Zyq85ZraCag75cPps6MBMF4%2Fb%2BZsSkt2Tb76EIcQMMzrtTp0MsLI6iIlMvWBrQsHTUTHLiERhKJC%2B%2FCzUHFGu3wcJmUx%2BcJzXweDxlixY%2FjqHqPyO3e4lpYqzxKgYrfQCihkCbRWQS%2BRLHrFRLAGxUbkardO9CWv5MPKzBXbnFWp16qZkua8Iff4VzaF%2BIIhYixCWkX5apfPpBy8rTZd8TYa85Uw7UYzHjpgLk5eJspAs3fYIIucEt9iCFrGPh7UE52mhNnt%2FWVOv%2FxrrTtJ9ZRpVMpWICOcfqXysDBG8O3FH6WRUaFsVk9O6ojEXx65dbSYrfp%2FdVXHzDV9uK%2FBjqkATww6oySI%2F1WErXUrScDPJ95ICDR6EcUGspB5lGfM6thSANIXkfG7OcIYEaosVrsORQ1t37%2BvkR3PT26pq3XsbXGSoOqnUcbfQUHp5dhx4%2BtPibGJ0C1anwDJ58dFrWDWh9w%2BGXi9z6i0NKP7g3RjmifiRjrfrnW3lQZeFAZh1WfH6%2F%2F%2F0Lpzj2Ko1bxDdhpX5a8GQ%2FL%2B%2FcIpuH%2BE8QkdIiGm%2Bhl&X-Amz-Signature=d9f8d2cdc3d8b98b4e91be2a64d587bd7b30858be612640bdc5870d28e698ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
