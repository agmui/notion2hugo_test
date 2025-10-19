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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRU5GFK%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCKe3RevTm83xgvAH9sTjKLcB0SMMPhAb2rG854udGYiAIhAKLdN7KmqI7QPr%2F9LGu0gFNOwSNFUofj%2FVecm%2Fy5pgwtKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz3Ld6InWkLDhPqR4q3AMFtTZrNnk73HhjrswMe6gjgqxPzZ69BTQVsUO%2FASdjB3AazlF6t0%2FMyoCdGw9TyuHifgzXtcLjQr%2B%2FPi6gZiIT3srSZExGM%2FOZo2OtkFzzBP3WfHAx1s9Yn5EhYtwRvMt22AloaQnM5WEdyhCklWZjRpKoOKKxI5ZruOoNippk%2Fry5ooAhLaFVxNYKN3xmjGD300NZzVZ3B8cxqllK671iQKMrXoPZctiyexn7OMD1QrMwuL8Q3SqMJ0E3OMVwZJeDcY8eRs4yOzs%2BepAwVwSYTp5xSKVhOubNYSNF2KGqE3IULmdr8I2yoEyWRy2qAM%2BpCLYd5mNfLvujqCivdgpM8Zxgy4Eb76uPxHG%2BZaGy3oDPQxsLY5FiKhXCuSnHZxG6pBmXwSMcjfDu725FO6BIE6vO43Fk2vEgUc09a1fmFG%2FRDmqVVrMez2DHaGtTOJxdiJKG%2FH2LIv42nsfPxCha03IuCbGKQkQCQHuJGoaUXSu%2F%2FrJjQeH9%2BjRYSgO1sYp1BBvWUxoEolaP%2BfF3ZjSFlbaFeNRyZNu3FRdEyeHtRhuUQsHZ2QkNZf6wIfarcyrGomtmA7R6gxhEioHjb9vMBo%2BsqyxXJCe8Fdewv3AoUfpL1nBAqb9kanR0czCm3s%2FHBjqkAeymFyprlfaOMAa5k7xr6oIVt3OtJ2B7kgvo8sqOBY9IVuTU7%2BfZUSf4wsQnv3WRpe3N7jQ6e67%2BlmhXUxy2UFCCzNlE22tW3Bz%2BdMqfpqg%2FkKWe6id0H0ikyrbTlniuZp0KiYPlLDe57XtcJqlYPohKxo7mu8svKjynLkOSeBfavIlnpVcAUzNtftGjv2z6%2B4m6seXYBE6iW9u%2BwA8cx9GOo3ye&X-Amz-Signature=b9f39b7e67f23cf683b5f3306310fba10b5586c281d5172ad4a724af5567b8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRU5GFK%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCKe3RevTm83xgvAH9sTjKLcB0SMMPhAb2rG854udGYiAIhAKLdN7KmqI7QPr%2F9LGu0gFNOwSNFUofj%2FVecm%2Fy5pgwtKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz3Ld6InWkLDhPqR4q3AMFtTZrNnk73HhjrswMe6gjgqxPzZ69BTQVsUO%2FASdjB3AazlF6t0%2FMyoCdGw9TyuHifgzXtcLjQr%2B%2FPi6gZiIT3srSZExGM%2FOZo2OtkFzzBP3WfHAx1s9Yn5EhYtwRvMt22AloaQnM5WEdyhCklWZjRpKoOKKxI5ZruOoNippk%2Fry5ooAhLaFVxNYKN3xmjGD300NZzVZ3B8cxqllK671iQKMrXoPZctiyexn7OMD1QrMwuL8Q3SqMJ0E3OMVwZJeDcY8eRs4yOzs%2BepAwVwSYTp5xSKVhOubNYSNF2KGqE3IULmdr8I2yoEyWRy2qAM%2BpCLYd5mNfLvujqCivdgpM8Zxgy4Eb76uPxHG%2BZaGy3oDPQxsLY5FiKhXCuSnHZxG6pBmXwSMcjfDu725FO6BIE6vO43Fk2vEgUc09a1fmFG%2FRDmqVVrMez2DHaGtTOJxdiJKG%2FH2LIv42nsfPxCha03IuCbGKQkQCQHuJGoaUXSu%2F%2FrJjQeH9%2BjRYSgO1sYp1BBvWUxoEolaP%2BfF3ZjSFlbaFeNRyZNu3FRdEyeHtRhuUQsHZ2QkNZf6wIfarcyrGomtmA7R6gxhEioHjb9vMBo%2BsqyxXJCe8Fdewv3AoUfpL1nBAqb9kanR0czCm3s%2FHBjqkAeymFyprlfaOMAa5k7xr6oIVt3OtJ2B7kgvo8sqOBY9IVuTU7%2BfZUSf4wsQnv3WRpe3N7jQ6e67%2BlmhXUxy2UFCCzNlE22tW3Bz%2BdMqfpqg%2FkKWe6id0H0ikyrbTlniuZp0KiYPlLDe57XtcJqlYPohKxo7mu8svKjynLkOSeBfavIlnpVcAUzNtftGjv2z6%2B4m6seXYBE6iW9u%2BwA8cx9GOo3ye&X-Amz-Signature=951c4c0f216045942d0db40396e2a403d1f39ca5f275b8c5a286ad067d691ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRU5GFK%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCKe3RevTm83xgvAH9sTjKLcB0SMMPhAb2rG854udGYiAIhAKLdN7KmqI7QPr%2F9LGu0gFNOwSNFUofj%2FVecm%2Fy5pgwtKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz3Ld6InWkLDhPqR4q3AMFtTZrNnk73HhjrswMe6gjgqxPzZ69BTQVsUO%2FASdjB3AazlF6t0%2FMyoCdGw9TyuHifgzXtcLjQr%2B%2FPi6gZiIT3srSZExGM%2FOZo2OtkFzzBP3WfHAx1s9Yn5EhYtwRvMt22AloaQnM5WEdyhCklWZjRpKoOKKxI5ZruOoNippk%2Fry5ooAhLaFVxNYKN3xmjGD300NZzVZ3B8cxqllK671iQKMrXoPZctiyexn7OMD1QrMwuL8Q3SqMJ0E3OMVwZJeDcY8eRs4yOzs%2BepAwVwSYTp5xSKVhOubNYSNF2KGqE3IULmdr8I2yoEyWRy2qAM%2BpCLYd5mNfLvujqCivdgpM8Zxgy4Eb76uPxHG%2BZaGy3oDPQxsLY5FiKhXCuSnHZxG6pBmXwSMcjfDu725FO6BIE6vO43Fk2vEgUc09a1fmFG%2FRDmqVVrMez2DHaGtTOJxdiJKG%2FH2LIv42nsfPxCha03IuCbGKQkQCQHuJGoaUXSu%2F%2FrJjQeH9%2BjRYSgO1sYp1BBvWUxoEolaP%2BfF3ZjSFlbaFeNRyZNu3FRdEyeHtRhuUQsHZ2QkNZf6wIfarcyrGomtmA7R6gxhEioHjb9vMBo%2BsqyxXJCe8Fdewv3AoUfpL1nBAqb9kanR0czCm3s%2FHBjqkAeymFyprlfaOMAa5k7xr6oIVt3OtJ2B7kgvo8sqOBY9IVuTU7%2BfZUSf4wsQnv3WRpe3N7jQ6e67%2BlmhXUxy2UFCCzNlE22tW3Bz%2BdMqfpqg%2FkKWe6id0H0ikyrbTlniuZp0KiYPlLDe57XtcJqlYPohKxo7mu8svKjynLkOSeBfavIlnpVcAUzNtftGjv2z6%2B4m6seXYBE6iW9u%2BwA8cx9GOo3ye&X-Amz-Signature=b5a3609bcabe417cc8fa9ff7a548bce7fe5928ec76f74a23957c8ee05bc8acac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
