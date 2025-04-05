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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFJRKWH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa6A%2FGOLRxtJPEskAmeBAIGbLq0E9pXrDq8ameQ%2FKDMAiA0A%2F%2FJ%2BVuIjYoj86YdDBjAKq9A1SzF7JvDUr%2F%2FrYTYhSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMBnozAtbffhW9evwlKtwDzT5dHArWAIeWtjoLjhbr309l2fzz3noPXEQib6LH79%2FZ%2BTbaYBfd83zTPVfKwevQn7Jyeakcmy%2B0sHdU63aFoQetTbNnns8Zrzd1hq02i9RioW51%2F2Sar3Ijvacp1gy39NrOHv2cz5oEKMv%2Ffw510kTlkMX8T5fqLy9BgK8dEe8Yl%2Bk8herb8Xc2y9UmmsdAPzW15Oh3aUAlYkm8UQXkPDKlffbYfQfQzVgzw%2FgkrvI%2BmZfyiDE9E%2FF3aQ%2BZdLwod1Z%2BziTLWfwLfb0VQfjYlz16gqEwwLUnFc9uT2ec6pn6S5fpJ6e5L4dM3lkkKaQsH5bWnUPtIZUxg3oCngpsGmwvshCqbQ%2BckvmPJCXXaX5i6iE45HQwPL3N30mtdQ7lvLmzKNcNzBn%2BdVkknbvPpYJyOE0D3izANBqqKsloKFRDE9EHnWAO%2F007i81cNCphR%2FI6uhyDgKp6htsMh0Hl0qjdIpJVUSXGjKl5pweJx1g2At37a262MnDQdpOcr1JpoTvtZr%2BGVRbNPYvio%2BDUaRzU1CaCOvmz2wqoI303Y7JoMBcJwgogI%2FcrPEFq%2B9rk9bWMgSiyv5ilhvchCN9WI91nSZuQWiirz%2FZnp4%2BA3abOdU6WkjIqbht5NyEw%2F%2B%2FCvwY6pgGRAGAfoy7bpOgDWWugkRdOSsAMs3Ph96GkvwLMbU4C2wBOkzq9U8IZYuWMfOvbvZePK09AXoE4uenNWF6QN2t6YUznIjVIv%2F4aobtED%2BGcsRh5bKaWp6qUb583VUekszob%2B8NMOXH5IiY2wCx8TY0bwdDLmXS8Dbd%2BZFzQgNjQrlAI71QxBteU4yhzS6RQnIGVNOusyWosn58MXEMYaB%2FCdsgOWgRS&X-Amz-Signature=41b5cf9b8cf4061e32643e48dbc85093a5d60f02ef8ead4544564e54deff4972&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOFJRKWH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa6A%2FGOLRxtJPEskAmeBAIGbLq0E9pXrDq8ameQ%2FKDMAiA0A%2F%2FJ%2BVuIjYoj86YdDBjAKq9A1SzF7JvDUr%2F%2FrYTYhSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMBnozAtbffhW9evwlKtwDzT5dHArWAIeWtjoLjhbr309l2fzz3noPXEQib6LH79%2FZ%2BTbaYBfd83zTPVfKwevQn7Jyeakcmy%2B0sHdU63aFoQetTbNnns8Zrzd1hq02i9RioW51%2F2Sar3Ijvacp1gy39NrOHv2cz5oEKMv%2Ffw510kTlkMX8T5fqLy9BgK8dEe8Yl%2Bk8herb8Xc2y9UmmsdAPzW15Oh3aUAlYkm8UQXkPDKlffbYfQfQzVgzw%2FgkrvI%2BmZfyiDE9E%2FF3aQ%2BZdLwod1Z%2BziTLWfwLfb0VQfjYlz16gqEwwLUnFc9uT2ec6pn6S5fpJ6e5L4dM3lkkKaQsH5bWnUPtIZUxg3oCngpsGmwvshCqbQ%2BckvmPJCXXaX5i6iE45HQwPL3N30mtdQ7lvLmzKNcNzBn%2BdVkknbvPpYJyOE0D3izANBqqKsloKFRDE9EHnWAO%2F007i81cNCphR%2FI6uhyDgKp6htsMh0Hl0qjdIpJVUSXGjKl5pweJx1g2At37a262MnDQdpOcr1JpoTvtZr%2BGVRbNPYvio%2BDUaRzU1CaCOvmz2wqoI303Y7JoMBcJwgogI%2FcrPEFq%2B9rk9bWMgSiyv5ilhvchCN9WI91nSZuQWiirz%2FZnp4%2BA3abOdU6WkjIqbht5NyEw%2F%2B%2FCvwY6pgGRAGAfoy7bpOgDWWugkRdOSsAMs3Ph96GkvwLMbU4C2wBOkzq9U8IZYuWMfOvbvZePK09AXoE4uenNWF6QN2t6YUznIjVIv%2F4aobtED%2BGcsRh5bKaWp6qUb583VUekszob%2B8NMOXH5IiY2wCx8TY0bwdDLmXS8Dbd%2BZFzQgNjQrlAI71QxBteU4yhzS6RQnIGVNOusyWosn58MXEMYaB%2FCdsgOWgRS&X-Amz-Signature=8a4335a64dec606d565b72096250d0b115462251769c8bc96d439972d3dbd7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
