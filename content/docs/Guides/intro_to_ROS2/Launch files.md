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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AROPTO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCow6pIysTRKWtGrtYEhL7NcbWJLdkcJnCYhmJy%2FA42pwIhAJpW9QtbC5JVkCX%2F8jiaor1a8a99MbXV794WhdTVU8wyKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjovaJtwHmrbjAqfQq3ANFwGKDsQFhuscrauE%2BeVxshcE%2B%2FvAMgroUdxaL4SAqgBso22xpMMsTS40Rk9PQcR4ZlCnndSXwb1s3d3O4AUFhm56Nbi9jYmG2BQAUcCLkcLB8E6FcYOaiZNv%2FWFhgNKK%2BIhwNPtobpKmjDIIG8Z91cBHbL%2BY%2BWGgX3kAV%2FbpoB3h6k%2FijRnPusypXtnYDMWHkWbmOvUvq3WEKSxmCyAUaJu201kTEeCvaSqfisXI56nRZ%2BGjXpOe30kK87qQazj1%2FsaSQ7HMIh3ZoppE6RSJjYmRwQK7QBtF8Mb6ooHcmFVsnrtdN%2FjTMxx%2FegsZeBaOlRr%2BZd2GnJGPHSeWc8sv4%2B7DphidYho%2FDghiaqXwB4zHXW2Kjrfoklnxm%2F22J%2FeFWjtqmPL38xEpqq9tNfAnI%2FNmuKXljgI5hVOTlmIrZIbuhAZXEzNVEZvJWaYkOAgFqwAP9bCqAfMVDJaCIn5xJ7YkeWZ4yZbO6FmoCJWOCzSuYijEVd29vQFkHRkkFF7whK77UoC5Elzf9%2BFHJPIQd4CYJoAF%2F7bBX9Gy6MQQkYM%2BOsmWhTBM4E3Ek6zuiz5f1m33Plr05or7qebRvMAYEAjLiR3QnQZbWIWQX8ZSD76uZJogdEwnU9TVggzCj7dDEBjqkAUr60txwANUkvEnpeUdKJps0FW8SCp0H8ZmOLDe8kYu0sb99cmRUbxmxY%2FSI6iE1MUFYBrNDZ0jFkILLA3cs5qOg6UQ1J6AY9MHgE54HlYFHzZuHlV7uzh1wZxma9S8FCPDTi4jbzJHW9B5018llWuThfMpk4gBvoht8X%2BG%2FiAenRb7gA2hQd7E3uUP%2BXYGpNcO7fub%2FKagcQ%2F6GSnMWPFJDdBLK&X-Amz-Signature=3d5e30833d628e618fa8c920032c5ee1af1ae1de7b87ae0fc18fe61c06db9edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AROPTO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCow6pIysTRKWtGrtYEhL7NcbWJLdkcJnCYhmJy%2FA42pwIhAJpW9QtbC5JVkCX%2F8jiaor1a8a99MbXV794WhdTVU8wyKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjovaJtwHmrbjAqfQq3ANFwGKDsQFhuscrauE%2BeVxshcE%2B%2FvAMgroUdxaL4SAqgBso22xpMMsTS40Rk9PQcR4ZlCnndSXwb1s3d3O4AUFhm56Nbi9jYmG2BQAUcCLkcLB8E6FcYOaiZNv%2FWFhgNKK%2BIhwNPtobpKmjDIIG8Z91cBHbL%2BY%2BWGgX3kAV%2FbpoB3h6k%2FijRnPusypXtnYDMWHkWbmOvUvq3WEKSxmCyAUaJu201kTEeCvaSqfisXI56nRZ%2BGjXpOe30kK87qQazj1%2FsaSQ7HMIh3ZoppE6RSJjYmRwQK7QBtF8Mb6ooHcmFVsnrtdN%2FjTMxx%2FegsZeBaOlRr%2BZd2GnJGPHSeWc8sv4%2B7DphidYho%2FDghiaqXwB4zHXW2Kjrfoklnxm%2F22J%2FeFWjtqmPL38xEpqq9tNfAnI%2FNmuKXljgI5hVOTlmIrZIbuhAZXEzNVEZvJWaYkOAgFqwAP9bCqAfMVDJaCIn5xJ7YkeWZ4yZbO6FmoCJWOCzSuYijEVd29vQFkHRkkFF7whK77UoC5Elzf9%2BFHJPIQd4CYJoAF%2F7bBX9Gy6MQQkYM%2BOsmWhTBM4E3Ek6zuiz5f1m33Plr05or7qebRvMAYEAjLiR3QnQZbWIWQX8ZSD76uZJogdEwnU9TVggzCj7dDEBjqkAUr60txwANUkvEnpeUdKJps0FW8SCp0H8ZmOLDe8kYu0sb99cmRUbxmxY%2FSI6iE1MUFYBrNDZ0jFkILLA3cs5qOg6UQ1J6AY9MHgE54HlYFHzZuHlV7uzh1wZxma9S8FCPDTi4jbzJHW9B5018llWuThfMpk4gBvoht8X%2BG%2FiAenRb7gA2hQd7E3uUP%2BXYGpNcO7fub%2FKagcQ%2F6GSnMWPFJDdBLK&X-Amz-Signature=91e71932253ab5cd087da610f42c60458ed898439f3b4ecf4863e3658b83a5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AROPTO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCow6pIysTRKWtGrtYEhL7NcbWJLdkcJnCYhmJy%2FA42pwIhAJpW9QtbC5JVkCX%2F8jiaor1a8a99MbXV794WhdTVU8wyKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjovaJtwHmrbjAqfQq3ANFwGKDsQFhuscrauE%2BeVxshcE%2B%2FvAMgroUdxaL4SAqgBso22xpMMsTS40Rk9PQcR4ZlCnndSXwb1s3d3O4AUFhm56Nbi9jYmG2BQAUcCLkcLB8E6FcYOaiZNv%2FWFhgNKK%2BIhwNPtobpKmjDIIG8Z91cBHbL%2BY%2BWGgX3kAV%2FbpoB3h6k%2FijRnPusypXtnYDMWHkWbmOvUvq3WEKSxmCyAUaJu201kTEeCvaSqfisXI56nRZ%2BGjXpOe30kK87qQazj1%2FsaSQ7HMIh3ZoppE6RSJjYmRwQK7QBtF8Mb6ooHcmFVsnrtdN%2FjTMxx%2FegsZeBaOlRr%2BZd2GnJGPHSeWc8sv4%2B7DphidYho%2FDghiaqXwB4zHXW2Kjrfoklnxm%2F22J%2FeFWjtqmPL38xEpqq9tNfAnI%2FNmuKXljgI5hVOTlmIrZIbuhAZXEzNVEZvJWaYkOAgFqwAP9bCqAfMVDJaCIn5xJ7YkeWZ4yZbO6FmoCJWOCzSuYijEVd29vQFkHRkkFF7whK77UoC5Elzf9%2BFHJPIQd4CYJoAF%2F7bBX9Gy6MQQkYM%2BOsmWhTBM4E3Ek6zuiz5f1m33Plr05or7qebRvMAYEAjLiR3QnQZbWIWQX8ZSD76uZJogdEwnU9TVggzCj7dDEBjqkAUr60txwANUkvEnpeUdKJps0FW8SCp0H8ZmOLDe8kYu0sb99cmRUbxmxY%2FSI6iE1MUFYBrNDZ0jFkILLA3cs5qOg6UQ1J6AY9MHgE54HlYFHzZuHlV7uzh1wZxma9S8FCPDTi4jbzJHW9B5018llWuThfMpk4gBvoht8X%2BG%2FiAenRb7gA2hQd7E3uUP%2BXYGpNcO7fub%2FKagcQ%2F6GSnMWPFJDdBLK&X-Amz-Signature=3f7d532c6ff7e3ee4a59384715b74a6340b0a3889daa5ea1ab5190ebf2b90482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
