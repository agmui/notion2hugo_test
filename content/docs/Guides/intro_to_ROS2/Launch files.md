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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOJZHWE%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD4w3gD2QX0sheOT17WtNBJL8evfHhd%2FJ3tHW402aX07wIhAJlwkN8qSdtIuhHpfLQXcqaVnynzysznQoK2SfwTH8urKv8DCH0QABoMNjM3NDIzMTgzODA1IgzC9Xcxb2Zl%2BDFilBMq3ANKbr3ejYFewo7%2BIrfPSQjJ33m6gU5mGUL7nycHcux7SqBvXECoIF4baSteFvDmpZGlh3UIyLZDHSJrq52PmcTUMx4tgXBFQmxoyeW4ZI8pt3STLYd3rD5RDwS3XtuhzwXmf7XtjhPjbZcA8fOhGGuukZFJ6xPgaYSk3LsXKGy4i3bnmfZoLMv9whDBIst%2FnrfPJu6Km%2BA%2BqB%2FUzt9xf8YqskxQ%2F7ofkPdOBeht4OtsLsqV6vro%2B0oO9T2GX5v2m1gjjUkg3gnNJMHyyYKMRI4BWzqw%2BB6BKLkqmCIZqwgIgbebja6OmwTExlQTu2CCZ%2FutYlKt3ay93ZGF%2FIqhzaLdGGYm1UkydfQd%2F%2FvIW7fiPsZvePkQXhBOZb83GzoStOzKo6H%2B95XuNhZMKdpGF0ShPtoocjlgtfofsZYysHdzluVlbB6uHXrnv8vVTiaHAhAL2mbaCYMzVn6skkcKtc29UTL7DWOIP83oA4SqMttXWonzUfR%2BBuevMWIMMe0sniL4e0do4Gz5UETtfCQQ4CoUQYUY7YrMevwNW6xk6jQKlogKFA7S%2FTSP9xSmuG9EGEVVsj%2BI18WkJYcJhPWDBMJQR2nXkKdfBMxvpXbiqhZe9jnXiFkPjFX8fSeZYzCE3%2BS8BjqkAeg%2F0tjH8LPITV8iOmfVUBrmt9k%2BQmv0bRtAh9t4tM2eJqqp3G9KHVSu%2BCiF4%2FfeEOpoofCtaTionmedjEVPIvCtK4X8ICm7s63B%2BtaoEZ93PKjKC81d5%2BY8B9VejwAUqdVJzN1uacOytg7MHQnAwhMvpkhmB4IyZVxO%2F8mrkoIOXVY1UhC0Xc7BL0OgNXWmlnfJJxL0wSDUqqEYZUWjvz5EuGA8&X-Amz-Signature=f7d79bd90b979f9c91fc6ddbdd6db5c5bfdf1029718385c90c48f8d4bd6caaf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOJZHWE%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD4w3gD2QX0sheOT17WtNBJL8evfHhd%2FJ3tHW402aX07wIhAJlwkN8qSdtIuhHpfLQXcqaVnynzysznQoK2SfwTH8urKv8DCH0QABoMNjM3NDIzMTgzODA1IgzC9Xcxb2Zl%2BDFilBMq3ANKbr3ejYFewo7%2BIrfPSQjJ33m6gU5mGUL7nycHcux7SqBvXECoIF4baSteFvDmpZGlh3UIyLZDHSJrq52PmcTUMx4tgXBFQmxoyeW4ZI8pt3STLYd3rD5RDwS3XtuhzwXmf7XtjhPjbZcA8fOhGGuukZFJ6xPgaYSk3LsXKGy4i3bnmfZoLMv9whDBIst%2FnrfPJu6Km%2BA%2BqB%2FUzt9xf8YqskxQ%2F7ofkPdOBeht4OtsLsqV6vro%2B0oO9T2GX5v2m1gjjUkg3gnNJMHyyYKMRI4BWzqw%2BB6BKLkqmCIZqwgIgbebja6OmwTExlQTu2CCZ%2FutYlKt3ay93ZGF%2FIqhzaLdGGYm1UkydfQd%2F%2FvIW7fiPsZvePkQXhBOZb83GzoStOzKo6H%2B95XuNhZMKdpGF0ShPtoocjlgtfofsZYysHdzluVlbB6uHXrnv8vVTiaHAhAL2mbaCYMzVn6skkcKtc29UTL7DWOIP83oA4SqMttXWonzUfR%2BBuevMWIMMe0sniL4e0do4Gz5UETtfCQQ4CoUQYUY7YrMevwNW6xk6jQKlogKFA7S%2FTSP9xSmuG9EGEVVsj%2BI18WkJYcJhPWDBMJQR2nXkKdfBMxvpXbiqhZe9jnXiFkPjFX8fSeZYzCE3%2BS8BjqkAeg%2F0tjH8LPITV8iOmfVUBrmt9k%2BQmv0bRtAh9t4tM2eJqqp3G9KHVSu%2BCiF4%2FfeEOpoofCtaTionmedjEVPIvCtK4X8ICm7s63B%2BtaoEZ93PKjKC81d5%2BY8B9VejwAUqdVJzN1uacOytg7MHQnAwhMvpkhmB4IyZVxO%2F8mrkoIOXVY1UhC0Xc7BL0OgNXWmlnfJJxL0wSDUqqEYZUWjvz5EuGA8&X-Amz-Signature=9edb82bb3ed55f1ec7a9445a4e748d8267bf3cdfc615acb0cac620ba43707a47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOJZHWE%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD4w3gD2QX0sheOT17WtNBJL8evfHhd%2FJ3tHW402aX07wIhAJlwkN8qSdtIuhHpfLQXcqaVnynzysznQoK2SfwTH8urKv8DCH0QABoMNjM3NDIzMTgzODA1IgzC9Xcxb2Zl%2BDFilBMq3ANKbr3ejYFewo7%2BIrfPSQjJ33m6gU5mGUL7nycHcux7SqBvXECoIF4baSteFvDmpZGlh3UIyLZDHSJrq52PmcTUMx4tgXBFQmxoyeW4ZI8pt3STLYd3rD5RDwS3XtuhzwXmf7XtjhPjbZcA8fOhGGuukZFJ6xPgaYSk3LsXKGy4i3bnmfZoLMv9whDBIst%2FnrfPJu6Km%2BA%2BqB%2FUzt9xf8YqskxQ%2F7ofkPdOBeht4OtsLsqV6vro%2B0oO9T2GX5v2m1gjjUkg3gnNJMHyyYKMRI4BWzqw%2BB6BKLkqmCIZqwgIgbebja6OmwTExlQTu2CCZ%2FutYlKt3ay93ZGF%2FIqhzaLdGGYm1UkydfQd%2F%2FvIW7fiPsZvePkQXhBOZb83GzoStOzKo6H%2B95XuNhZMKdpGF0ShPtoocjlgtfofsZYysHdzluVlbB6uHXrnv8vVTiaHAhAL2mbaCYMzVn6skkcKtc29UTL7DWOIP83oA4SqMttXWonzUfR%2BBuevMWIMMe0sniL4e0do4Gz5UETtfCQQ4CoUQYUY7YrMevwNW6xk6jQKlogKFA7S%2FTSP9xSmuG9EGEVVsj%2BI18WkJYcJhPWDBMJQR2nXkKdfBMxvpXbiqhZe9jnXiFkPjFX8fSeZYzCE3%2BS8BjqkAeg%2F0tjH8LPITV8iOmfVUBrmt9k%2BQmv0bRtAh9t4tM2eJqqp3G9KHVSu%2BCiF4%2FfeEOpoofCtaTionmedjEVPIvCtK4X8ICm7s63B%2BtaoEZ93PKjKC81d5%2BY8B9VejwAUqdVJzN1uacOytg7MHQnAwhMvpkhmB4IyZVxO%2F8mrkoIOXVY1UhC0Xc7BL0OgNXWmlnfJJxL0wSDUqqEYZUWjvz5EuGA8&X-Amz-Signature=33318cd1f57d3c102a0b92df8dc6c80835425d2457cc5f88a6f8aaa15630c52b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
