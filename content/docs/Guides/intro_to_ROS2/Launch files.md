---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2ZPACN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC243kPtRvbQmAiV7j0Bu8rIsP6gMoMzPpqQ3OnwJCK9AiAaM%2Bs3fPJP6KeYlL76qURJyYCBiT2SI3vdpxlu7yRDmiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPUr%2B6Qqx7Z83AjceKtwDEW%2BFbWTBJZmYcEM6mL3eWYkWCNe%2B6ntVMtQcaaAhU55ZAOH0oitKJPkBl9ldCwlfGam6tTVZ8erreQWKdm8I8X3aDlbmFTfAKa7%2B0StAtmGRAEUw21n0cEJl6vrdDCiA5ouwejsZbbt4ybpOyghb1fYK%2FLqcZgF%2FVcedtUNhBlk45%2BDqmwIFd9JmbTIpVHj4qGMbeO3s%2FMePLlgBbwwo%2BZdmf%2F%2BzWfCHk9mDR1m%2BGzcPm1g5PyBo17FoT%2FcdUTWB6rkrZDZ7QQ6gevoMW2uzy%2BcR1oCztJgch2C3jsEPeCrcT1R9bY7MQqZ5O9KNPu%2BwLfty3XKUL9Omk7qJC%2BMPiE7FF8mGFMH0T02%2BnDkz2Ix6x9wGsH9oH8t82UH1iU5vQBsJMscgyqUMAC5DFC4%2FaEbPcMbuLO4sRbWGPr904wGy0nQAoxwsqIW6MU8vEOy8%2F018r8Izzp9K%2FucJNCoBo3SFcbEydA7N2usOBU0jYYWP%2BXx1tfIIQss%2FiMm1IuZnDGAAZKTagUX1yYNKE0CwVuJTLV8uws7%2FSceLw7c6JYH0LvHF9%2FR%2F4IYQEPLpGFnZQqWecDYfVBSW9xpWlu3nLs8cW3ujzEKD0uFaUAwlkf3%2BwguBbfolq2z8EbwwyNyuxAY6pgEvXC6%2FV1iAF2rCMKgusyvDBdKsCW83GF9eLmpCX2EqLSoY%2Fk14ufjuIluu2qUF5NRpZwsZsru4HVJNDOjvhqjcFzNwT2OO7Rf0OCPxTXUpZBBe6t35pza7sIM7i7tSuteurYm8Of4Yr%2Bh0m1I7JJhpi0%2Bl%2Bk%2FFm6aL1MasVqS%2BEN%2FDdMZhx99CpuM7USB1hc5a7HorejCzYBtp1ujF%2FgeLfxbaNjs%2F&X-Amz-Signature=e7341152bbf58a34ddff49a1ebff10908964e7be08602c18c0fa36043087dd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2ZPACN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC243kPtRvbQmAiV7j0Bu8rIsP6gMoMzPpqQ3OnwJCK9AiAaM%2Bs3fPJP6KeYlL76qURJyYCBiT2SI3vdpxlu7yRDmiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPUr%2B6Qqx7Z83AjceKtwDEW%2BFbWTBJZmYcEM6mL3eWYkWCNe%2B6ntVMtQcaaAhU55ZAOH0oitKJPkBl9ldCwlfGam6tTVZ8erreQWKdm8I8X3aDlbmFTfAKa7%2B0StAtmGRAEUw21n0cEJl6vrdDCiA5ouwejsZbbt4ybpOyghb1fYK%2FLqcZgF%2FVcedtUNhBlk45%2BDqmwIFd9JmbTIpVHj4qGMbeO3s%2FMePLlgBbwwo%2BZdmf%2F%2BzWfCHk9mDR1m%2BGzcPm1g5PyBo17FoT%2FcdUTWB6rkrZDZ7QQ6gevoMW2uzy%2BcR1oCztJgch2C3jsEPeCrcT1R9bY7MQqZ5O9KNPu%2BwLfty3XKUL9Omk7qJC%2BMPiE7FF8mGFMH0T02%2BnDkz2Ix6x9wGsH9oH8t82UH1iU5vQBsJMscgyqUMAC5DFC4%2FaEbPcMbuLO4sRbWGPr904wGy0nQAoxwsqIW6MU8vEOy8%2F018r8Izzp9K%2FucJNCoBo3SFcbEydA7N2usOBU0jYYWP%2BXx1tfIIQss%2FiMm1IuZnDGAAZKTagUX1yYNKE0CwVuJTLV8uws7%2FSceLw7c6JYH0LvHF9%2FR%2F4IYQEPLpGFnZQqWecDYfVBSW9xpWlu3nLs8cW3ujzEKD0uFaUAwlkf3%2BwguBbfolq2z8EbwwyNyuxAY6pgEvXC6%2FV1iAF2rCMKgusyvDBdKsCW83GF9eLmpCX2EqLSoY%2Fk14ufjuIluu2qUF5NRpZwsZsru4HVJNDOjvhqjcFzNwT2OO7Rf0OCPxTXUpZBBe6t35pza7sIM7i7tSuteurYm8Of4Yr%2Bh0m1I7JJhpi0%2Bl%2Bk%2FFm6aL1MasVqS%2BEN%2FDdMZhx99CpuM7USB1hc5a7HorejCzYBtp1ujF%2FgeLfxbaNjs%2F&X-Amz-Signature=03f291e70e7f1887719925c1e6f9f81c5b00384fce3a3343e5205e71e3b1ee8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2ZPACN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC243kPtRvbQmAiV7j0Bu8rIsP6gMoMzPpqQ3OnwJCK9AiAaM%2Bs3fPJP6KeYlL76qURJyYCBiT2SI3vdpxlu7yRDmiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPUr%2B6Qqx7Z83AjceKtwDEW%2BFbWTBJZmYcEM6mL3eWYkWCNe%2B6ntVMtQcaaAhU55ZAOH0oitKJPkBl9ldCwlfGam6tTVZ8erreQWKdm8I8X3aDlbmFTfAKa7%2B0StAtmGRAEUw21n0cEJl6vrdDCiA5ouwejsZbbt4ybpOyghb1fYK%2FLqcZgF%2FVcedtUNhBlk45%2BDqmwIFd9JmbTIpVHj4qGMbeO3s%2FMePLlgBbwwo%2BZdmf%2F%2BzWfCHk9mDR1m%2BGzcPm1g5PyBo17FoT%2FcdUTWB6rkrZDZ7QQ6gevoMW2uzy%2BcR1oCztJgch2C3jsEPeCrcT1R9bY7MQqZ5O9KNPu%2BwLfty3XKUL9Omk7qJC%2BMPiE7FF8mGFMH0T02%2BnDkz2Ix6x9wGsH9oH8t82UH1iU5vQBsJMscgyqUMAC5DFC4%2FaEbPcMbuLO4sRbWGPr904wGy0nQAoxwsqIW6MU8vEOy8%2F018r8Izzp9K%2FucJNCoBo3SFcbEydA7N2usOBU0jYYWP%2BXx1tfIIQss%2FiMm1IuZnDGAAZKTagUX1yYNKE0CwVuJTLV8uws7%2FSceLw7c6JYH0LvHF9%2FR%2F4IYQEPLpGFnZQqWecDYfVBSW9xpWlu3nLs8cW3ujzEKD0uFaUAwlkf3%2BwguBbfolq2z8EbwwyNyuxAY6pgEvXC6%2FV1iAF2rCMKgusyvDBdKsCW83GF9eLmpCX2EqLSoY%2Fk14ufjuIluu2qUF5NRpZwsZsru4HVJNDOjvhqjcFzNwT2OO7Rf0OCPxTXUpZBBe6t35pza7sIM7i7tSuteurYm8Of4Yr%2Bh0m1I7JJhpi0%2Bl%2Bk%2FFm6aL1MasVqS%2BEN%2FDdMZhx99CpuM7USB1hc5a7HorejCzYBtp1ujF%2FgeLfxbaNjs%2F&X-Amz-Signature=7abbcf1350d4dcf67799b15a228b002474caac0e3a90ebfd5e29511c0f209e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
