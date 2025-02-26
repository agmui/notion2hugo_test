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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMNX5UF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDEHmnQxfGmR9eHmRDPFd9CxStVdUXFtFUTZjz5kj9z1QIhALMzGpXbg2xZ%2F6psgoK3xUFkCT%2B91zSxKOMJPyT8UWRnKv8DCF0QABoMNjM3NDIzMTgzODA1IgwkZSgICuGU%2Ff2fFOQq3APfGDtJaPr4jiX0p3FKmf%2Bqsp6pavht5Q3NvJrLLPVdW6lJ912%2BBPu15luViiBIhieUJn5lr0CdSK7C7hK4q5lgM1zxXaDlsi9rokrOIgpU8MVAwR38O%2FVOCiwkfXQbHipX8UKTTDNPJ42nNyKTpD9c9DLs5vSXfRyXFM6loIiSoPqA%2B0IsbUlv%2FCPwkW34H3VhOc6XuY7XjUiHm2z9q3caa9crhlO8XkCqOs%2BTfQ1UFOXSUkTKAoBYmJi7%2FpWIn7rj6JC3GzGGsRZmfxkWVCIzRcypLc6N9USlOhX4j1dcYQbSa%2BS2zyf1ZyNZu60BTaWxAAbYirp1DK9KjUUIi8FbDz2UEssLJ3VLJoSF773IV9dPhyOyuUYh%2Fa9%2F3TAK6SyPwnA0GnAil5giUbxm1lhkjf1%2FiBcDPoAgSjZD8p35eexu18%2F%2BQCvUAU23J9f%2BoP9jtwtwmIGtcNaUz%2FwQNKVX%2FEfjJjIu9g%2BKjVJYotE0EyC98BlD3pN%2Brz0MyN4T6ms2vS9%2BAgz0KCW%2Bgt7nmnkwIa7jp2iRnrSnsJ1%2B7Z%2FnTry%2B3B3qHrW5FbDrmfZwtryHK1JqSlDjZp0SenUh%2BJqqOnOj75vP0%2FgEb6A2KXqtuRBrqO5it1941m3kcjD7h%2Fy9BjqkAXL98gW1r0oYiQGISYVKBAbCZBPKGzWA9btBcUoFGmha9rKXFcs6VLOZ9f5ZVCRLhW52fw2QlfGQJTqx6khXNOEBd19cMy6ZHLV0fSdwFltXI%2FtFC7htnrr8kIUk5mdCPnAtZph8t2d3yPHogwox%2Fgy4gwD50FTtXQEr%2BA3FyjczoUDF3xCor5D%2BpX9p%2BBvJ0kHU%2Bw1BAWby8k%2BbDnkaz%2BC9n4OD&X-Amz-Signature=26c4557eeb17c8adf83638a7970193b8b51dd626c01788ab110cb1e9a19cefb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMNX5UF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDEHmnQxfGmR9eHmRDPFd9CxStVdUXFtFUTZjz5kj9z1QIhALMzGpXbg2xZ%2F6psgoK3xUFkCT%2B91zSxKOMJPyT8UWRnKv8DCF0QABoMNjM3NDIzMTgzODA1IgwkZSgICuGU%2Ff2fFOQq3APfGDtJaPr4jiX0p3FKmf%2Bqsp6pavht5Q3NvJrLLPVdW6lJ912%2BBPu15luViiBIhieUJn5lr0CdSK7C7hK4q5lgM1zxXaDlsi9rokrOIgpU8MVAwR38O%2FVOCiwkfXQbHipX8UKTTDNPJ42nNyKTpD9c9DLs5vSXfRyXFM6loIiSoPqA%2B0IsbUlv%2FCPwkW34H3VhOc6XuY7XjUiHm2z9q3caa9crhlO8XkCqOs%2BTfQ1UFOXSUkTKAoBYmJi7%2FpWIn7rj6JC3GzGGsRZmfxkWVCIzRcypLc6N9USlOhX4j1dcYQbSa%2BS2zyf1ZyNZu60BTaWxAAbYirp1DK9KjUUIi8FbDz2UEssLJ3VLJoSF773IV9dPhyOyuUYh%2Fa9%2F3TAK6SyPwnA0GnAil5giUbxm1lhkjf1%2FiBcDPoAgSjZD8p35eexu18%2F%2BQCvUAU23J9f%2BoP9jtwtwmIGtcNaUz%2FwQNKVX%2FEfjJjIu9g%2BKjVJYotE0EyC98BlD3pN%2Brz0MyN4T6ms2vS9%2BAgz0KCW%2Bgt7nmnkwIa7jp2iRnrSnsJ1%2B7Z%2FnTry%2B3B3qHrW5FbDrmfZwtryHK1JqSlDjZp0SenUh%2BJqqOnOj75vP0%2FgEb6A2KXqtuRBrqO5it1941m3kcjD7h%2Fy9BjqkAXL98gW1r0oYiQGISYVKBAbCZBPKGzWA9btBcUoFGmha9rKXFcs6VLOZ9f5ZVCRLhW52fw2QlfGQJTqx6khXNOEBd19cMy6ZHLV0fSdwFltXI%2FtFC7htnrr8kIUk5mdCPnAtZph8t2d3yPHogwox%2Fgy4gwD50FTtXQEr%2BA3FyjczoUDF3xCor5D%2BpX9p%2BBvJ0kHU%2Bw1BAWby8k%2BbDnkaz%2BC9n4OD&X-Amz-Signature=d8690bf7fe7de55cdc3dcc1f7af9b0ea98b115fd1392991bdb605223a2e1d03c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMNX5UF%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDEHmnQxfGmR9eHmRDPFd9CxStVdUXFtFUTZjz5kj9z1QIhALMzGpXbg2xZ%2F6psgoK3xUFkCT%2B91zSxKOMJPyT8UWRnKv8DCF0QABoMNjM3NDIzMTgzODA1IgwkZSgICuGU%2Ff2fFOQq3APfGDtJaPr4jiX0p3FKmf%2Bqsp6pavht5Q3NvJrLLPVdW6lJ912%2BBPu15luViiBIhieUJn5lr0CdSK7C7hK4q5lgM1zxXaDlsi9rokrOIgpU8MVAwR38O%2FVOCiwkfXQbHipX8UKTTDNPJ42nNyKTpD9c9DLs5vSXfRyXFM6loIiSoPqA%2B0IsbUlv%2FCPwkW34H3VhOc6XuY7XjUiHm2z9q3caa9crhlO8XkCqOs%2BTfQ1UFOXSUkTKAoBYmJi7%2FpWIn7rj6JC3GzGGsRZmfxkWVCIzRcypLc6N9USlOhX4j1dcYQbSa%2BS2zyf1ZyNZu60BTaWxAAbYirp1DK9KjUUIi8FbDz2UEssLJ3VLJoSF773IV9dPhyOyuUYh%2Fa9%2F3TAK6SyPwnA0GnAil5giUbxm1lhkjf1%2FiBcDPoAgSjZD8p35eexu18%2F%2BQCvUAU23J9f%2BoP9jtwtwmIGtcNaUz%2FwQNKVX%2FEfjJjIu9g%2BKjVJYotE0EyC98BlD3pN%2Brz0MyN4T6ms2vS9%2BAgz0KCW%2Bgt7nmnkwIa7jp2iRnrSnsJ1%2B7Z%2FnTry%2B3B3qHrW5FbDrmfZwtryHK1JqSlDjZp0SenUh%2BJqqOnOj75vP0%2FgEb6A2KXqtuRBrqO5it1941m3kcjD7h%2Fy9BjqkAXL98gW1r0oYiQGISYVKBAbCZBPKGzWA9btBcUoFGmha9rKXFcs6VLOZ9f5ZVCRLhW52fw2QlfGQJTqx6khXNOEBd19cMy6ZHLV0fSdwFltXI%2FtFC7htnrr8kIUk5mdCPnAtZph8t2d3yPHogwox%2Fgy4gwD50FTtXQEr%2BA3FyjczoUDF3xCor5D%2BpX9p%2BBvJ0kHU%2Bw1BAWby8k%2BbDnkaz%2BC9n4OD&X-Amz-Signature=f4789336ad8848e7c9af340ca1402c9d8ce94d325fa7818b349f1ed29a71a167&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
