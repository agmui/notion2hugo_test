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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVHV75X%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGh6bUHSCMflFeWFWArkTiL8GCto%2BfF9rWxQSObt09i7AiEAi9zWIY1lUKwl0z3FS3r739e71%2FdlBqhRpe3aVsnOfjIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2GXc%2F0oysOVcAo1yrcA4tRsoZaa38CVRvp2ucMyDHmtnjZC8PRC7lisN9rxW7NCnDMypOkfYZRIcg96UmgGkY18CEyJc9j9yUe%2BvBMQHesvqq9rcYoTWPgPHpzi7cCpdQv7cyePkNAJT3NieXpnAS1UzdXnctvj6RmZ3qkw9uuSQpWdUCAEuthQttwM7htHIPXXLDPC6C%2FFH36UfCtNr3sNERoLBjdVVtJ1wVb4Nrt24qKdNz9no0feZAtnN7T%2FNSECVxeV8VJ91gqWd5FmDxK1VRFjrtbYRA%2FXtmA5GP2EZNZfQyslMXRMCCtiWaxRvxew1jvvMAAaNPj5SXlDafKn%2BqLbZh6Qq%2FYxkUUK8BbMrULhbwpoK3YPnCuC4G4rQeG0uprLtgzhwuaSkNMjk4PvmZ6IixxfFhAHhqqYlaUsw1VqPsZcdpDwLhGKcK1DYqllV0pkOjUO3EpFrG6Ag7Dfk92B5gyreSPeaekRiOsWqD7nNGKkwy22Ypt%2FD8j6Nhk5fWHXTx1%2BwCj7G6VAXTWeuINq3hm5YnJWMwLPAKdktAxDiLFieQzuPUUUSJZqqBMfavzj44IgPR6yqrSuw916DdS%2BUuR2%2F7nKF8q%2BY7c%2B4OomF2ieHclYW4SiSjGKXJAa%2FAICya8gKIFMLbg7b8GOqUBG7BWCSqvrNAnWhVjlbQqbN%2FCAvUOug43J3FwQhIhy4JP9RdKthQVEBabGAE2e6wsiFUt%2FCv%2FZBOLNQTbCdaEmjyZpKJQJD2OlIE9lC2hV%2Fvx3pC4PuI27Sy9BY2MaVUbQviqOlsfElKYIe1DppJlfEm%2Br3aZnJL6rHQjVhlMs%2FbGT%2B%2Bbn5TDIDfVrnUZPFJWvEYsir0b0uVC4DB8yVjWRpn4YX%2B5&X-Amz-Signature=02a2c887297e48a6480d70881238e11658b13d385fe1b5c32f884b8a82511ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVHV75X%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGh6bUHSCMflFeWFWArkTiL8GCto%2BfF9rWxQSObt09i7AiEAi9zWIY1lUKwl0z3FS3r739e71%2FdlBqhRpe3aVsnOfjIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2GXc%2F0oysOVcAo1yrcA4tRsoZaa38CVRvp2ucMyDHmtnjZC8PRC7lisN9rxW7NCnDMypOkfYZRIcg96UmgGkY18CEyJc9j9yUe%2BvBMQHesvqq9rcYoTWPgPHpzi7cCpdQv7cyePkNAJT3NieXpnAS1UzdXnctvj6RmZ3qkw9uuSQpWdUCAEuthQttwM7htHIPXXLDPC6C%2FFH36UfCtNr3sNERoLBjdVVtJ1wVb4Nrt24qKdNz9no0feZAtnN7T%2FNSECVxeV8VJ91gqWd5FmDxK1VRFjrtbYRA%2FXtmA5GP2EZNZfQyslMXRMCCtiWaxRvxew1jvvMAAaNPj5SXlDafKn%2BqLbZh6Qq%2FYxkUUK8BbMrULhbwpoK3YPnCuC4G4rQeG0uprLtgzhwuaSkNMjk4PvmZ6IixxfFhAHhqqYlaUsw1VqPsZcdpDwLhGKcK1DYqllV0pkOjUO3EpFrG6Ag7Dfk92B5gyreSPeaekRiOsWqD7nNGKkwy22Ypt%2FD8j6Nhk5fWHXTx1%2BwCj7G6VAXTWeuINq3hm5YnJWMwLPAKdktAxDiLFieQzuPUUUSJZqqBMfavzj44IgPR6yqrSuw916DdS%2BUuR2%2F7nKF8q%2BY7c%2B4OomF2ieHclYW4SiSjGKXJAa%2FAICya8gKIFMLbg7b8GOqUBG7BWCSqvrNAnWhVjlbQqbN%2FCAvUOug43J3FwQhIhy4JP9RdKthQVEBabGAE2e6wsiFUt%2FCv%2FZBOLNQTbCdaEmjyZpKJQJD2OlIE9lC2hV%2Fvx3pC4PuI27Sy9BY2MaVUbQviqOlsfElKYIe1DppJlfEm%2Br3aZnJL6rHQjVhlMs%2FbGT%2B%2Bbn5TDIDfVrnUZPFJWvEYsir0b0uVC4DB8yVjWRpn4YX%2B5&X-Amz-Signature=9617e23bfc4e29e5abe9104a8c3266fe747a429b23f7ff7b6cf426b7c9a1882c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVHV75X%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIGh6bUHSCMflFeWFWArkTiL8GCto%2BfF9rWxQSObt09i7AiEAi9zWIY1lUKwl0z3FS3r739e71%2FdlBqhRpe3aVsnOfjIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2GXc%2F0oysOVcAo1yrcA4tRsoZaa38CVRvp2ucMyDHmtnjZC8PRC7lisN9rxW7NCnDMypOkfYZRIcg96UmgGkY18CEyJc9j9yUe%2BvBMQHesvqq9rcYoTWPgPHpzi7cCpdQv7cyePkNAJT3NieXpnAS1UzdXnctvj6RmZ3qkw9uuSQpWdUCAEuthQttwM7htHIPXXLDPC6C%2FFH36UfCtNr3sNERoLBjdVVtJ1wVb4Nrt24qKdNz9no0feZAtnN7T%2FNSECVxeV8VJ91gqWd5FmDxK1VRFjrtbYRA%2FXtmA5GP2EZNZfQyslMXRMCCtiWaxRvxew1jvvMAAaNPj5SXlDafKn%2BqLbZh6Qq%2FYxkUUK8BbMrULhbwpoK3YPnCuC4G4rQeG0uprLtgzhwuaSkNMjk4PvmZ6IixxfFhAHhqqYlaUsw1VqPsZcdpDwLhGKcK1DYqllV0pkOjUO3EpFrG6Ag7Dfk92B5gyreSPeaekRiOsWqD7nNGKkwy22Ypt%2FD8j6Nhk5fWHXTx1%2BwCj7G6VAXTWeuINq3hm5YnJWMwLPAKdktAxDiLFieQzuPUUUSJZqqBMfavzj44IgPR6yqrSuw916DdS%2BUuR2%2F7nKF8q%2BY7c%2B4OomF2ieHclYW4SiSjGKXJAa%2FAICya8gKIFMLbg7b8GOqUBG7BWCSqvrNAnWhVjlbQqbN%2FCAvUOug43J3FwQhIhy4JP9RdKthQVEBabGAE2e6wsiFUt%2FCv%2FZBOLNQTbCdaEmjyZpKJQJD2OlIE9lC2hV%2Fvx3pC4PuI27Sy9BY2MaVUbQviqOlsfElKYIe1DppJlfEm%2Br3aZnJL6rHQjVhlMs%2FbGT%2B%2Bbn5TDIDfVrnUZPFJWvEYsir0b0uVC4DB8yVjWRpn4YX%2B5&X-Amz-Signature=6bde314de1a022b8d9b15e3cc246fb1ecb402ae6cf7981ab745a9a728de9a3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
