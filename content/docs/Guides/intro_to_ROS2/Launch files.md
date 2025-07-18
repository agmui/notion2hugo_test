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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYXYLML%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEh2fKKaotMk%2BlJrzGBqK7sUQqECAXd8lwEnBeqXh7YZAiEA7GI7Dbo45eEw%2FRJ%2FOEy5UYA5MKJJYrZdo7CSQnUzXGIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpg1s108%2FHA3uv%2B8SrcA%2BE2ohlEuD7bZ9YHqgA%2BrhG58aFsjnmaF7cIT7QiOc2cvX2LzqhZlzj9zbDzxPyQhD5bsNUwmpFjfHncJWa8kinsA1aEmqA9Mvd%2FDahpx2elzbaujtgSWV79tYrA%2Bjjf6HGx1niRlrf9HUEeG1INr%2FLx%2BxI4GNvrlRbJnBclkugIQXJj1j296o1yZhNZHhc2W6maYIJUYDiAZxx0oUnNskWQiliPCnx620b%2BLIDYXXFt8bTKYIUTA5g3CxgrSzsAhFusGkI5rhMAd7LA3KN5p8hMucgh37inhuPqkiPJ4C3tNsSQdYwW0aqTCxR1lzyYjvYTjymwCmAKpde2kv4%2BNOuP2QlcnWGv8QuYA%2Bl3AxpBoS0DZb7jHMhsjxRAuAnozTNAtfX0vsyC0pGaH%2FgPMgNkK2NSvOzzwzpXMk6WAYq4B6e3VCnWbMMTRX9GRb8TRTz5CASjWJeUdedhY%2BwOfs4NZiHjMNr8xG6x9%2Fek9G73YFyBbCEOfcc%2BCnkzDsRFf4tyzckc5vHDBQxNUrc37y4hUwxfwDUEbE5X6edJXHzF4qWZFvcKhuAxBxMyOvJBS8vHFNipZF494FqSQxYVo48HSb0w8oP3vHx7QOh8X4wY8aOU7RH9Xa2q0tUUMPyv58MGOqUBh8vvojD7ZVwXA4v3no8%2Fdk1mm%2BpGWitRhKiVPBItA7M%2BJZxfm60wD7kIMzIW2C5rBV37j40tKPTLUVBt%2FT3rmZunqEpwTwknJ%2BEqAXgYtdPTTfB78AHWGZDiIFzUXvF%2BYon2A1luo2CprjRjb9s8zji9zFPARNZQN%2Flw57Bph4n1T8et2VTEk6xH3T26cvaI0BWizdKZWO0o0OIS%2BGnpAswkWrlI&X-Amz-Signature=29b37bf8aea2a1a5779ef38f02cb54e16a8fdf7643bb6973b4f99a622b0f2b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYXYLML%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEh2fKKaotMk%2BlJrzGBqK7sUQqECAXd8lwEnBeqXh7YZAiEA7GI7Dbo45eEw%2FRJ%2FOEy5UYA5MKJJYrZdo7CSQnUzXGIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpg1s108%2FHA3uv%2B8SrcA%2BE2ohlEuD7bZ9YHqgA%2BrhG58aFsjnmaF7cIT7QiOc2cvX2LzqhZlzj9zbDzxPyQhD5bsNUwmpFjfHncJWa8kinsA1aEmqA9Mvd%2FDahpx2elzbaujtgSWV79tYrA%2Bjjf6HGx1niRlrf9HUEeG1INr%2FLx%2BxI4GNvrlRbJnBclkugIQXJj1j296o1yZhNZHhc2W6maYIJUYDiAZxx0oUnNskWQiliPCnx620b%2BLIDYXXFt8bTKYIUTA5g3CxgrSzsAhFusGkI5rhMAd7LA3KN5p8hMucgh37inhuPqkiPJ4C3tNsSQdYwW0aqTCxR1lzyYjvYTjymwCmAKpde2kv4%2BNOuP2QlcnWGv8QuYA%2Bl3AxpBoS0DZb7jHMhsjxRAuAnozTNAtfX0vsyC0pGaH%2FgPMgNkK2NSvOzzwzpXMk6WAYq4B6e3VCnWbMMTRX9GRb8TRTz5CASjWJeUdedhY%2BwOfs4NZiHjMNr8xG6x9%2Fek9G73YFyBbCEOfcc%2BCnkzDsRFf4tyzckc5vHDBQxNUrc37y4hUwxfwDUEbE5X6edJXHzF4qWZFvcKhuAxBxMyOvJBS8vHFNipZF494FqSQxYVo48HSb0w8oP3vHx7QOh8X4wY8aOU7RH9Xa2q0tUUMPyv58MGOqUBh8vvojD7ZVwXA4v3no8%2Fdk1mm%2BpGWitRhKiVPBItA7M%2BJZxfm60wD7kIMzIW2C5rBV37j40tKPTLUVBt%2FT3rmZunqEpwTwknJ%2BEqAXgYtdPTTfB78AHWGZDiIFzUXvF%2BYon2A1luo2CprjRjb9s8zji9zFPARNZQN%2Flw57Bph4n1T8et2VTEk6xH3T26cvaI0BWizdKZWO0o0OIS%2BGnpAswkWrlI&X-Amz-Signature=ba3c57a9549a31ffb1fbf4fae9818d57d27a65bc48389a02b5ded486339458cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYXYLML%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEh2fKKaotMk%2BlJrzGBqK7sUQqECAXd8lwEnBeqXh7YZAiEA7GI7Dbo45eEw%2FRJ%2FOEy5UYA5MKJJYrZdo7CSQnUzXGIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpg1s108%2FHA3uv%2B8SrcA%2BE2ohlEuD7bZ9YHqgA%2BrhG58aFsjnmaF7cIT7QiOc2cvX2LzqhZlzj9zbDzxPyQhD5bsNUwmpFjfHncJWa8kinsA1aEmqA9Mvd%2FDahpx2elzbaujtgSWV79tYrA%2Bjjf6HGx1niRlrf9HUEeG1INr%2FLx%2BxI4GNvrlRbJnBclkugIQXJj1j296o1yZhNZHhc2W6maYIJUYDiAZxx0oUnNskWQiliPCnx620b%2BLIDYXXFt8bTKYIUTA5g3CxgrSzsAhFusGkI5rhMAd7LA3KN5p8hMucgh37inhuPqkiPJ4C3tNsSQdYwW0aqTCxR1lzyYjvYTjymwCmAKpde2kv4%2BNOuP2QlcnWGv8QuYA%2Bl3AxpBoS0DZb7jHMhsjxRAuAnozTNAtfX0vsyC0pGaH%2FgPMgNkK2NSvOzzwzpXMk6WAYq4B6e3VCnWbMMTRX9GRb8TRTz5CASjWJeUdedhY%2BwOfs4NZiHjMNr8xG6x9%2Fek9G73YFyBbCEOfcc%2BCnkzDsRFf4tyzckc5vHDBQxNUrc37y4hUwxfwDUEbE5X6edJXHzF4qWZFvcKhuAxBxMyOvJBS8vHFNipZF494FqSQxYVo48HSb0w8oP3vHx7QOh8X4wY8aOU7RH9Xa2q0tUUMPyv58MGOqUBh8vvojD7ZVwXA4v3no8%2Fdk1mm%2BpGWitRhKiVPBItA7M%2BJZxfm60wD7kIMzIW2C5rBV37j40tKPTLUVBt%2FT3rmZunqEpwTwknJ%2BEqAXgYtdPTTfB78AHWGZDiIFzUXvF%2BYon2A1luo2CprjRjb9s8zji9zFPARNZQN%2Flw57Bph4n1T8et2VTEk6xH3T26cvaI0BWizdKZWO0o0OIS%2BGnpAswkWrlI&X-Amz-Signature=5e246f5475cb4c734cecb9b35d1cc1ac527475920b3082ae96a5f9ab6e322f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
