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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHN37WQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSJNZTEar253y3V0VE9vCZkGv9sVFC6Tc6xlaMAefjsAiB2XUZpCL5baCWCoOpRzaJZglCNwX2z4ETvYwHpD%2BDRWyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMUitHqkYVAedOYS4JKtwD5kBeW8JF5qN9RSXRTRA7OkfWMEXzaClig%2BH7vNr%2BRNbK%2FzGweWSUm3RRIkiVoSZICP7PE07eYEfy9C60PJJXwIgauDa4dj%2BTg%2BMYXUvP3BbwUhkrQl3Jl7DDCliu0xDDibSmdeU2cDWYYLNBZJj%2F8k51i6EJvdGYWJXZrVP8zx3RwMMB8wWKph1gc0fr%2FxwTL3RhucZxj2ANorBTl4nMY8LzfpW6oifl8s5%2FVyyeNs0IXqe%2FIgCc7KoYGHT1RsrTXy%2BD380ye2sKOk7H9Hi%2FnaTRt9qsnC%2B11RGt8koDgxqdmoX5MaiPCrBkoeR%2B1zWyvN4J0WU6CQPm6N%2B%2FXDHTXcP1Ama054%2BmAvZ2zGx%2BqEKOEwL8TKtr0UW0zn84UjEAxnTBAWHvWHvTFdP20LlDSWFMezPE8k2xUeaa%2B7zNrnb4hGjPsjoYg%2Bqjh7iEJ5c3Zd8t1V9l2S4HbmEn4x1YYM%2BGh%2BxqB9ZdwwW8OFRGHQsy%2Bv1TNFzQp9GTfhUtE%2FzEtzp2ZuJLpAC5cpkJVumwn3JE1d20qdwouU8pIQX1o4b6F8DV52REg6drfir1%2FcQwHqY5GysuDhXRgag9GjDCbBVQr6CC8yk5OMt0QOC%2BJFdLg1rWqtUSUZsmL0MwqqGUvwY6pgGLvEGDlzOCLUGb9Zzl8rGxHJnDeG3KTmSDlYg4uCQANYRt%2BcVsYRnwv9iwExgCRz2HfWCU0tAFQlEcjydrDQfs55%2BSh8o5vP0%2F%2Fgcm0MY43%2BzrCSxFFxT5im0n1BIe3eV0aq%2F3O%2FRGoZw91P4sVq5dOAwMm8Vm9uDPhoYII1avuVsmgJARdox%2BBbt6cJIeo72qLmuKIF5nOaxktjIm4ATL53qKfjAZ&X-Amz-Signature=915a3fc64ca9924b197135f6831a5b0ed9c6bac15868f62d22be64cf15e8cef2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHN37WQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSJNZTEar253y3V0VE9vCZkGv9sVFC6Tc6xlaMAefjsAiB2XUZpCL5baCWCoOpRzaJZglCNwX2z4ETvYwHpD%2BDRWyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMUitHqkYVAedOYS4JKtwD5kBeW8JF5qN9RSXRTRA7OkfWMEXzaClig%2BH7vNr%2BRNbK%2FzGweWSUm3RRIkiVoSZICP7PE07eYEfy9C60PJJXwIgauDa4dj%2BTg%2BMYXUvP3BbwUhkrQl3Jl7DDCliu0xDDibSmdeU2cDWYYLNBZJj%2F8k51i6EJvdGYWJXZrVP8zx3RwMMB8wWKph1gc0fr%2FxwTL3RhucZxj2ANorBTl4nMY8LzfpW6oifl8s5%2FVyyeNs0IXqe%2FIgCc7KoYGHT1RsrTXy%2BD380ye2sKOk7H9Hi%2FnaTRt9qsnC%2B11RGt8koDgxqdmoX5MaiPCrBkoeR%2B1zWyvN4J0WU6CQPm6N%2B%2FXDHTXcP1Ama054%2BmAvZ2zGx%2BqEKOEwL8TKtr0UW0zn84UjEAxnTBAWHvWHvTFdP20LlDSWFMezPE8k2xUeaa%2B7zNrnb4hGjPsjoYg%2Bqjh7iEJ5c3Zd8t1V9l2S4HbmEn4x1YYM%2BGh%2BxqB9ZdwwW8OFRGHQsy%2Bv1TNFzQp9GTfhUtE%2FzEtzp2ZuJLpAC5cpkJVumwn3JE1d20qdwouU8pIQX1o4b6F8DV52REg6drfir1%2FcQwHqY5GysuDhXRgag9GjDCbBVQr6CC8yk5OMt0QOC%2BJFdLg1rWqtUSUZsmL0MwqqGUvwY6pgGLvEGDlzOCLUGb9Zzl8rGxHJnDeG3KTmSDlYg4uCQANYRt%2BcVsYRnwv9iwExgCRz2HfWCU0tAFQlEcjydrDQfs55%2BSh8o5vP0%2F%2Fgcm0MY43%2BzrCSxFFxT5im0n1BIe3eV0aq%2F3O%2FRGoZw91P4sVq5dOAwMm8Vm9uDPhoYII1avuVsmgJARdox%2BBbt6cJIeo72qLmuKIF5nOaxktjIm4ATL53qKfjAZ&X-Amz-Signature=26438ff669ab59768dd4bfea54a75ab18a8f03f1eeb131acac39a64c8939660a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHN37WQ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSJNZTEar253y3V0VE9vCZkGv9sVFC6Tc6xlaMAefjsAiB2XUZpCL5baCWCoOpRzaJZglCNwX2z4ETvYwHpD%2BDRWyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMUitHqkYVAedOYS4JKtwD5kBeW8JF5qN9RSXRTRA7OkfWMEXzaClig%2BH7vNr%2BRNbK%2FzGweWSUm3RRIkiVoSZICP7PE07eYEfy9C60PJJXwIgauDa4dj%2BTg%2BMYXUvP3BbwUhkrQl3Jl7DDCliu0xDDibSmdeU2cDWYYLNBZJj%2F8k51i6EJvdGYWJXZrVP8zx3RwMMB8wWKph1gc0fr%2FxwTL3RhucZxj2ANorBTl4nMY8LzfpW6oifl8s5%2FVyyeNs0IXqe%2FIgCc7KoYGHT1RsrTXy%2BD380ye2sKOk7H9Hi%2FnaTRt9qsnC%2B11RGt8koDgxqdmoX5MaiPCrBkoeR%2B1zWyvN4J0WU6CQPm6N%2B%2FXDHTXcP1Ama054%2BmAvZ2zGx%2BqEKOEwL8TKtr0UW0zn84UjEAxnTBAWHvWHvTFdP20LlDSWFMezPE8k2xUeaa%2B7zNrnb4hGjPsjoYg%2Bqjh7iEJ5c3Zd8t1V9l2S4HbmEn4x1YYM%2BGh%2BxqB9ZdwwW8OFRGHQsy%2Bv1TNFzQp9GTfhUtE%2FzEtzp2ZuJLpAC5cpkJVumwn3JE1d20qdwouU8pIQX1o4b6F8DV52REg6drfir1%2FcQwHqY5GysuDhXRgag9GjDCbBVQr6CC8yk5OMt0QOC%2BJFdLg1rWqtUSUZsmL0MwqqGUvwY6pgGLvEGDlzOCLUGb9Zzl8rGxHJnDeG3KTmSDlYg4uCQANYRt%2BcVsYRnwv9iwExgCRz2HfWCU0tAFQlEcjydrDQfs55%2BSh8o5vP0%2F%2Fgcm0MY43%2BzrCSxFFxT5im0n1BIe3eV0aq%2F3O%2FRGoZw91P4sVq5dOAwMm8Vm9uDPhoYII1avuVsmgJARdox%2BBbt6cJIeo72qLmuKIF5nOaxktjIm4ATL53qKfjAZ&X-Amz-Signature=29c55a45634c771609e9c3b5b6697cd7b90327bad79cbcbcf475a376c69fcf42&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
