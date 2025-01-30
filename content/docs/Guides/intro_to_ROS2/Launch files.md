---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJOFM542%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIh6G7m3qjqrdZ8R9aKgo7Cjqr9A2o%2F3WFjHBETR19gAiEAl16y0FHq0M2AaRLLRjN02U32fbVsd5V2bNgO55xyD7UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSk709%2FccursSu5fyrcA7tOWEtgU7sgk%2F7nVcnGT9o2JGNOVwPviv4R20mYNrlK965Trdp1HlDXws2bYizYFr5FzlSOAek%2ByfrXNm6POBhRV6J1858IUTRTh4BPcYV0BMbsbXiYrUy5Nj7dThZwLQYuKUOw8GOSfXBJ9SjZ5e%2BkadgPmdJsMhYxKZgZGKO%2Btf2bDsc9PYq0KOwXDgCmf3T9GNddvDSjnXkB8%2FId2IkDjJE3WzxkaV62VlCPqQWBHehsyupZjpivNewMgLkJWAW%2B8SA%2FsvYmCw18POw2CgQjaERAhhwvjdAlqcO9Q9881672hnL0ZSWqaN9JI%2BuNQGFlRds3kZafaQTI2fGiOROCLt3y27%2B4BZFH9e37uAKWXRQnRmCC%2FRpynVp6IwYzHRswwpI08LMqLWfsMhi1CrHmqlSeGaF3ZHK%2Bg3n1VtspHxF0WecmpGtB73Xsqf99BA7pEGD1dL0uolAAhlt9W2D4Q0kHde9Ix03muKa5nCyUbfyhTQqWdNsUe83xqykr1NpTs2pCg2IlbEM0SbTBkHU1zPUI5o2KtDx7zFR%2BPZzxhUm6HKUIMJ8hF6KmF331DRUBQNn89PJRguZNEdxOkzUIBqEu%2B1vSVzNiWPrX3ViaPMSpBMkHUW5O%2BRACMMqj7LwGOqUBryOTPLbt0ReKObyOzzjwyMzz3m6LkSokc58RjquQkYnUtAsN6x3umfGV%2Bir7MXkOzAV4xnutIh5R1LT99iKL%2FKaEel%2BMGlhQYdY408hCV%2BZ5YbjQ%2B8z1lY9otR69tQMYF1O5cv1dPP8%2ByWxFAxZBvYT1Ug7dkbZalIODaW7Sfd3BtxZsN6W6lfsgNIFqVKDXu2dvU2CtchJK57BoCIacLRbrZyec&X-Amz-Signature=aca39ba238df82f813c70adfe8bb8e0eca820c573d3655eef3889dcd09babe39&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJOFM542%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIh6G7m3qjqrdZ8R9aKgo7Cjqr9A2o%2F3WFjHBETR19gAiEAl16y0FHq0M2AaRLLRjN02U32fbVsd5V2bNgO55xyD7UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSk709%2FccursSu5fyrcA7tOWEtgU7sgk%2F7nVcnGT9o2JGNOVwPviv4R20mYNrlK965Trdp1HlDXws2bYizYFr5FzlSOAek%2ByfrXNm6POBhRV6J1858IUTRTh4BPcYV0BMbsbXiYrUy5Nj7dThZwLQYuKUOw8GOSfXBJ9SjZ5e%2BkadgPmdJsMhYxKZgZGKO%2Btf2bDsc9PYq0KOwXDgCmf3T9GNddvDSjnXkB8%2FId2IkDjJE3WzxkaV62VlCPqQWBHehsyupZjpivNewMgLkJWAW%2B8SA%2FsvYmCw18POw2CgQjaERAhhwvjdAlqcO9Q9881672hnL0ZSWqaN9JI%2BuNQGFlRds3kZafaQTI2fGiOROCLt3y27%2B4BZFH9e37uAKWXRQnRmCC%2FRpynVp6IwYzHRswwpI08LMqLWfsMhi1CrHmqlSeGaF3ZHK%2Bg3n1VtspHxF0WecmpGtB73Xsqf99BA7pEGD1dL0uolAAhlt9W2D4Q0kHde9Ix03muKa5nCyUbfyhTQqWdNsUe83xqykr1NpTs2pCg2IlbEM0SbTBkHU1zPUI5o2KtDx7zFR%2BPZzxhUm6HKUIMJ8hF6KmF331DRUBQNn89PJRguZNEdxOkzUIBqEu%2B1vSVzNiWPrX3ViaPMSpBMkHUW5O%2BRACMMqj7LwGOqUBryOTPLbt0ReKObyOzzjwyMzz3m6LkSokc58RjquQkYnUtAsN6x3umfGV%2Bir7MXkOzAV4xnutIh5R1LT99iKL%2FKaEel%2BMGlhQYdY408hCV%2BZ5YbjQ%2B8z1lY9otR69tQMYF1O5cv1dPP8%2ByWxFAxZBvYT1Ug7dkbZalIODaW7Sfd3BtxZsN6W6lfsgNIFqVKDXu2dvU2CtchJK57BoCIacLRbrZyec&X-Amz-Signature=8c5ba97484ea0f83245a7d90edd9ff40c14fe9e6146480acca4cd875dea1056f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJOFM542%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIh6G7m3qjqrdZ8R9aKgo7Cjqr9A2o%2F3WFjHBETR19gAiEAl16y0FHq0M2AaRLLRjN02U32fbVsd5V2bNgO55xyD7UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSk709%2FccursSu5fyrcA7tOWEtgU7sgk%2F7nVcnGT9o2JGNOVwPviv4R20mYNrlK965Trdp1HlDXws2bYizYFr5FzlSOAek%2ByfrXNm6POBhRV6J1858IUTRTh4BPcYV0BMbsbXiYrUy5Nj7dThZwLQYuKUOw8GOSfXBJ9SjZ5e%2BkadgPmdJsMhYxKZgZGKO%2Btf2bDsc9PYq0KOwXDgCmf3T9GNddvDSjnXkB8%2FId2IkDjJE3WzxkaV62VlCPqQWBHehsyupZjpivNewMgLkJWAW%2B8SA%2FsvYmCw18POw2CgQjaERAhhwvjdAlqcO9Q9881672hnL0ZSWqaN9JI%2BuNQGFlRds3kZafaQTI2fGiOROCLt3y27%2B4BZFH9e37uAKWXRQnRmCC%2FRpynVp6IwYzHRswwpI08LMqLWfsMhi1CrHmqlSeGaF3ZHK%2Bg3n1VtspHxF0WecmpGtB73Xsqf99BA7pEGD1dL0uolAAhlt9W2D4Q0kHde9Ix03muKa5nCyUbfyhTQqWdNsUe83xqykr1NpTs2pCg2IlbEM0SbTBkHU1zPUI5o2KtDx7zFR%2BPZzxhUm6HKUIMJ8hF6KmF331DRUBQNn89PJRguZNEdxOkzUIBqEu%2B1vSVzNiWPrX3ViaPMSpBMkHUW5O%2BRACMMqj7LwGOqUBryOTPLbt0ReKObyOzzjwyMzz3m6LkSokc58RjquQkYnUtAsN6x3umfGV%2Bir7MXkOzAV4xnutIh5R1LT99iKL%2FKaEel%2BMGlhQYdY408hCV%2BZ5YbjQ%2B8z1lY9otR69tQMYF1O5cv1dPP8%2ByWxFAxZBvYT1Ug7dkbZalIODaW7Sfd3BtxZsN6W6lfsgNIFqVKDXu2dvU2CtchJK57BoCIacLRbrZyec&X-Amz-Signature=d9fa7fc2d6da540950f053019ce74b7a4f14f1a5bd96235e81b3bb55eeea589d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
