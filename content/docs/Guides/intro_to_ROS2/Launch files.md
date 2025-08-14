---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662435L25K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFClGFPB%2F5sJ6adjEWV%2FQsyS5qgKCnZc4JBTzc6HWOOQAiAwbqQrVN4kK8DaLOTDwEhR%2FdfD5HDRPr8tJ30c%2B%2BJkwCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjm37tc2C8rkxNYerKtwDgvkesz35kTMUwu9nLTqPjQz7sr72BE5FYpC72hNs1kmcSziPNoR8RS6UgVD9nBQ5oo6lIUue2bQD5zbJW07vaQY%2BBxP1uavm6bBCh5%2Bop%2B4XWHPuyGPQ9ZmwVRm1dZplFyVTKdfV3cOgtiGfPfl0wm9iTKjNv09RaBsGYB6mqxxj6LZ8c9Q1cAUHjJjAcZitaIllPN1GCgw2t01Jriy2n04T7JT8DYQIv599DrpHBM5WGg1OBlNDU2L9m9DmxdSuTUV1h7dnhgKIIs6rSmWvDjObFcmSizx2pWatf2tIPreE4QtkwWKy0%2F49njvjPfyxBdomPzOQQK%2BSOy0lCHQT%2BN3RwFsDawEUPL%2FteP3%2BiQpkLparL3JU6NwtDD1s3BA9%2BCbWKQsKDgoFJb50ruwnnvww5uJxKwCiqFwf9Yd4MhCqNgPm5XDq2qr2mO84NWbDrvcTvFw3qUj97BgswILlk7t00ZbP7n7x9U1KL4V8wS%2FwLiMYQbhc0FwbaGfKQCl2RmX3lqj2WJPWUodzR3NM7U%2FegtsQDkTzjN0MFrlw8KC7EkU8T4ZfhQ8EAmWZxhRlAwPFrcXbpoDJPRt4KKJ9FMf%2BqWAIFRe4pBAJiVNVbuB47kRYWEOtFIiqWqYwpsL4xAY6pgEVBD2jSmXdOYRfiFzdWlkTFnWd9ZOckwA4OUhj4WeplG0gW0mMfWAsHGN1vIqEQH7VB5J8Ax%2BTnkN9mi6HFRSVi4WublVFr0C6CPwbATBJWp43e9vMj23Nnr1qfYLppctYuO0vj8rANvex21TJcfBwP2AGwv5DZN4FP4A79Aham1W%2B2V7cGYcDdAJp85uoNNs9FO1RdbfdDgim7hI8NDQL8QQoVGQ4&X-Amz-Signature=401f2ca5f57a343370c52324edb05a35c2e9eff0072d07efa02dca759376dede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662435L25K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFClGFPB%2F5sJ6adjEWV%2FQsyS5qgKCnZc4JBTzc6HWOOQAiAwbqQrVN4kK8DaLOTDwEhR%2FdfD5HDRPr8tJ30c%2B%2BJkwCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjm37tc2C8rkxNYerKtwDgvkesz35kTMUwu9nLTqPjQz7sr72BE5FYpC72hNs1kmcSziPNoR8RS6UgVD9nBQ5oo6lIUue2bQD5zbJW07vaQY%2BBxP1uavm6bBCh5%2Bop%2B4XWHPuyGPQ9ZmwVRm1dZplFyVTKdfV3cOgtiGfPfl0wm9iTKjNv09RaBsGYB6mqxxj6LZ8c9Q1cAUHjJjAcZitaIllPN1GCgw2t01Jriy2n04T7JT8DYQIv599DrpHBM5WGg1OBlNDU2L9m9DmxdSuTUV1h7dnhgKIIs6rSmWvDjObFcmSizx2pWatf2tIPreE4QtkwWKy0%2F49njvjPfyxBdomPzOQQK%2BSOy0lCHQT%2BN3RwFsDawEUPL%2FteP3%2BiQpkLparL3JU6NwtDD1s3BA9%2BCbWKQsKDgoFJb50ruwnnvww5uJxKwCiqFwf9Yd4MhCqNgPm5XDq2qr2mO84NWbDrvcTvFw3qUj97BgswILlk7t00ZbP7n7x9U1KL4V8wS%2FwLiMYQbhc0FwbaGfKQCl2RmX3lqj2WJPWUodzR3NM7U%2FegtsQDkTzjN0MFrlw8KC7EkU8T4ZfhQ8EAmWZxhRlAwPFrcXbpoDJPRt4KKJ9FMf%2BqWAIFRe4pBAJiVNVbuB47kRYWEOtFIiqWqYwpsL4xAY6pgEVBD2jSmXdOYRfiFzdWlkTFnWd9ZOckwA4OUhj4WeplG0gW0mMfWAsHGN1vIqEQH7VB5J8Ax%2BTnkN9mi6HFRSVi4WublVFr0C6CPwbATBJWp43e9vMj23Nnr1qfYLppctYuO0vj8rANvex21TJcfBwP2AGwv5DZN4FP4A79Aham1W%2B2V7cGYcDdAJp85uoNNs9FO1RdbfdDgim7hI8NDQL8QQoVGQ4&X-Amz-Signature=f9b7bb2f56eab8acee2e797297c380db4331a280a297291310d53880199ca392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662435L25K%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFClGFPB%2F5sJ6adjEWV%2FQsyS5qgKCnZc4JBTzc6HWOOQAiAwbqQrVN4kK8DaLOTDwEhR%2FdfD5HDRPr8tJ30c%2B%2BJkwCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMjm37tc2C8rkxNYerKtwDgvkesz35kTMUwu9nLTqPjQz7sr72BE5FYpC72hNs1kmcSziPNoR8RS6UgVD9nBQ5oo6lIUue2bQD5zbJW07vaQY%2BBxP1uavm6bBCh5%2Bop%2B4XWHPuyGPQ9ZmwVRm1dZplFyVTKdfV3cOgtiGfPfl0wm9iTKjNv09RaBsGYB6mqxxj6LZ8c9Q1cAUHjJjAcZitaIllPN1GCgw2t01Jriy2n04T7JT8DYQIv599DrpHBM5WGg1OBlNDU2L9m9DmxdSuTUV1h7dnhgKIIs6rSmWvDjObFcmSizx2pWatf2tIPreE4QtkwWKy0%2F49njvjPfyxBdomPzOQQK%2BSOy0lCHQT%2BN3RwFsDawEUPL%2FteP3%2BiQpkLparL3JU6NwtDD1s3BA9%2BCbWKQsKDgoFJb50ruwnnvww5uJxKwCiqFwf9Yd4MhCqNgPm5XDq2qr2mO84NWbDrvcTvFw3qUj97BgswILlk7t00ZbP7n7x9U1KL4V8wS%2FwLiMYQbhc0FwbaGfKQCl2RmX3lqj2WJPWUodzR3NM7U%2FegtsQDkTzjN0MFrlw8KC7EkU8T4ZfhQ8EAmWZxhRlAwPFrcXbpoDJPRt4KKJ9FMf%2BqWAIFRe4pBAJiVNVbuB47kRYWEOtFIiqWqYwpsL4xAY6pgEVBD2jSmXdOYRfiFzdWlkTFnWd9ZOckwA4OUhj4WeplG0gW0mMfWAsHGN1vIqEQH7VB5J8Ax%2BTnkN9mi6HFRSVi4WublVFr0C6CPwbATBJWp43e9vMj23Nnr1qfYLppctYuO0vj8rANvex21TJcfBwP2AGwv5DZN4FP4A79Aham1W%2B2V7cGYcDdAJp85uoNNs9FO1RdbfdDgim7hI8NDQL8QQoVGQ4&X-Amz-Signature=ab3825153061a4420c1613ff9e9990984ee106042f981df50f71ae80e21dda03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
