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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCYXHJV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDndBTM9DARnJr14fnclbkAuXE93fYeAHo67pzzZAa2pAiEAql05BxowM7owwBzD7fqk4uH%2F87p4TNK8i0lQiVZL4xgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKxmRALx%2B2dd3XPyrcA8uO6QqlOGngYcqxILj5yzbcCUHyfQY3ZmE9fUm55zU7lKK9jO%2B2s44ds7Sk5yhb73JO5KlS7mhy7cq5B7FW%2BfZZtyuvNkqDnT6MXWRUnqxmO%2FMhJthuE%2FUtEk0nN7n7arJ9QCdk0PiX%2Bpxni0QzvwGa0NB8peEIBGLzIpV9X4uztLUfWlOjQrYbHLi4%2Bm3iOuQnQqc%2BW%2BzptDqEA%2B1eE1aNWTT89lxk%2BUlE3bSd15Q1%2B%2BjB4t1VBaFXcjYNU799Z%2Bs%2F4921dBbvcAOC9qSjzbnblrnLKXG9W5s%2Fz%2Bp6e9eBvItlxg7nisMH8mRS8dG3oQomVnphsGpOy0lZFAM13mw7qH1UOF%2FuEkwTMZkn1OJoTtYY0yvsRctRGILOQ3sZ%2BZNE%2FGljWh3aJmJrhKJYNqyW2sY5IgipMxbLmTGurSDlLTQP9DjgkcCqHDwUud5yDnFlcqHzhulLysM4dAcBkGlxprkRUZRVcUXvvkGi5ZjjGdx2jjd6kKPIljLPLi5j3BqBbyJBZGFRdO%2F5utMN0p5lLf3voWcwylJqwL0UV5q3NZU%2BfEeqfRGt2Htnq69fMcF6dvf6wkHwAKMDUXI9VbIjTCahpj%2BLwofgWyXBzahnL6eeUc0%2FEKAW6cbgMLLLysAGOqUBkcbEOzeDGzhkp9smXuAl2K7g8Sol1LoXQvQduBKbxrrv9%2FSq92m3Q3LcGnm4GMNRyND6U%2Fk99FRE4yq%2BfLiNoLtXRZQ5m9d07t%2Fp4KChGfo1f99pERvem27WCmIoySl%2B8rMamrDZctMP22f5cbSeQ%2BesIJ6wjL%2F85wYrrhPwx5fcST0tRwXIZXR8V7glmNulbJk%2BXYXlwrBenis9jl011S2Ykl86&X-Amz-Signature=37f6cdce4f1e315b7b62cc5390f72c0ab5f12e03630ab6ee4b51f940c111c8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCYXHJV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDndBTM9DARnJr14fnclbkAuXE93fYeAHo67pzzZAa2pAiEAql05BxowM7owwBzD7fqk4uH%2F87p4TNK8i0lQiVZL4xgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKxmRALx%2B2dd3XPyrcA8uO6QqlOGngYcqxILj5yzbcCUHyfQY3ZmE9fUm55zU7lKK9jO%2B2s44ds7Sk5yhb73JO5KlS7mhy7cq5B7FW%2BfZZtyuvNkqDnT6MXWRUnqxmO%2FMhJthuE%2FUtEk0nN7n7arJ9QCdk0PiX%2Bpxni0QzvwGa0NB8peEIBGLzIpV9X4uztLUfWlOjQrYbHLi4%2Bm3iOuQnQqc%2BW%2BzptDqEA%2B1eE1aNWTT89lxk%2BUlE3bSd15Q1%2B%2BjB4t1VBaFXcjYNU799Z%2Bs%2F4921dBbvcAOC9qSjzbnblrnLKXG9W5s%2Fz%2Bp6e9eBvItlxg7nisMH8mRS8dG3oQomVnphsGpOy0lZFAM13mw7qH1UOF%2FuEkwTMZkn1OJoTtYY0yvsRctRGILOQ3sZ%2BZNE%2FGljWh3aJmJrhKJYNqyW2sY5IgipMxbLmTGurSDlLTQP9DjgkcCqHDwUud5yDnFlcqHzhulLysM4dAcBkGlxprkRUZRVcUXvvkGi5ZjjGdx2jjd6kKPIljLPLi5j3BqBbyJBZGFRdO%2F5utMN0p5lLf3voWcwylJqwL0UV5q3NZU%2BfEeqfRGt2Htnq69fMcF6dvf6wkHwAKMDUXI9VbIjTCahpj%2BLwofgWyXBzahnL6eeUc0%2FEKAW6cbgMLLLysAGOqUBkcbEOzeDGzhkp9smXuAl2K7g8Sol1LoXQvQduBKbxrrv9%2FSq92m3Q3LcGnm4GMNRyND6U%2Fk99FRE4yq%2BfLiNoLtXRZQ5m9d07t%2Fp4KChGfo1f99pERvem27WCmIoySl%2B8rMamrDZctMP22f5cbSeQ%2BesIJ6wjL%2F85wYrrhPwx5fcST0tRwXIZXR8V7glmNulbJk%2BXYXlwrBenis9jl011S2Ykl86&X-Amz-Signature=5a5395b6710ab9777a97d5db6cd6deeb16aad6ce21ba7ea99269a4abd6c756b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCYXHJV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDndBTM9DARnJr14fnclbkAuXE93fYeAHo67pzzZAa2pAiEAql05BxowM7owwBzD7fqk4uH%2F87p4TNK8i0lQiVZL4xgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKxmRALx%2B2dd3XPyrcA8uO6QqlOGngYcqxILj5yzbcCUHyfQY3ZmE9fUm55zU7lKK9jO%2B2s44ds7Sk5yhb73JO5KlS7mhy7cq5B7FW%2BfZZtyuvNkqDnT6MXWRUnqxmO%2FMhJthuE%2FUtEk0nN7n7arJ9QCdk0PiX%2Bpxni0QzvwGa0NB8peEIBGLzIpV9X4uztLUfWlOjQrYbHLi4%2Bm3iOuQnQqc%2BW%2BzptDqEA%2B1eE1aNWTT89lxk%2BUlE3bSd15Q1%2B%2BjB4t1VBaFXcjYNU799Z%2Bs%2F4921dBbvcAOC9qSjzbnblrnLKXG9W5s%2Fz%2Bp6e9eBvItlxg7nisMH8mRS8dG3oQomVnphsGpOy0lZFAM13mw7qH1UOF%2FuEkwTMZkn1OJoTtYY0yvsRctRGILOQ3sZ%2BZNE%2FGljWh3aJmJrhKJYNqyW2sY5IgipMxbLmTGurSDlLTQP9DjgkcCqHDwUud5yDnFlcqHzhulLysM4dAcBkGlxprkRUZRVcUXvvkGi5ZjjGdx2jjd6kKPIljLPLi5j3BqBbyJBZGFRdO%2F5utMN0p5lLf3voWcwylJqwL0UV5q3NZU%2BfEeqfRGt2Htnq69fMcF6dvf6wkHwAKMDUXI9VbIjTCahpj%2BLwofgWyXBzahnL6eeUc0%2FEKAW6cbgMLLLysAGOqUBkcbEOzeDGzhkp9smXuAl2K7g8Sol1LoXQvQduBKbxrrv9%2FSq92m3Q3LcGnm4GMNRyND6U%2Fk99FRE4yq%2BfLiNoLtXRZQ5m9d07t%2Fp4KChGfo1f99pERvem27WCmIoySl%2B8rMamrDZctMP22f5cbSeQ%2BesIJ6wjL%2F85wYrrhPwx5fcST0tRwXIZXR8V7glmNulbJk%2BXYXlwrBenis9jl011S2Ykl86&X-Amz-Signature=b5c6e9823c363a993ee2be7e76ba46b0a59b6a75fe5e05f3c196a5243991abba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
