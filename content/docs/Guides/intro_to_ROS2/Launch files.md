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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QABSXEHU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBHBXp0%2F3kwoeS1UXSL9sAGsJ4uGuhjbVzOSjjmICf1AiAwjo3TMWSysa8HBhQWKpG4rBSZw4ln2N9xJKQuDPExyir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMWAKyCpkp1ogtNh65KtwDVKansC1fkjwOvvfNjtj%2BItaqtRNCx4YehyC4KvrsVNUSPh%2B0USeB9XnoCfYGd03%2BZZ37xP5ayJTwFsDMeZ2FKPwaNX1o0ftApu6CaKYbyLbuv9WKTbkl00a7X8LdMIGMBlXxmTih%2FwrFHdxYdc%2BxQ2WZ3roREJ2LT%2BCgX4AjFT2q3jb3p3kZEoA6CBLghk73hor%2FVNop9BBSd6Uar3ONsWEDqCscLFgTJOJSDxJ0GMSFz%2Feiv%2B38E9tMDRVf%2FrVvUEmVw%2FPnY%2F7OBy73yxIlJHmy0Oy9%2Fcn0igVtQGlm82dvNz74zjxTOUxL2T3s0ucqZ8NQHIpYopszGXlAXiDwwKrQkycRhBjuW1cDmicgHuwxX66ePD491M1KNUfrCFMlhGObKt%2Ff4XZ%2BxmGCAuhLFuJ0pq2IiEdbsV%2FeuAKIrgoxqdmWVYREBpIOUbzuGMeRc%2FdFD1I6lkVN7y3TVWNUVxQaVGw%2F6snLulE91Nd4k%2Bn0biHeiFKaHPw%2FvOXLpiXwZ8Scu6PwPEvapZ1341D0amynlz8Z9don4bP5IOzpGCvuRnM85dDOJ709WCvHtnNVNbeXeO7yTZf3m7roAXOUOJEKMQ5bWj76OEEVTSioJsf8DQdAI9ad8sRpLUkwjsDzvwY6pgGXY7gy3tEoHBXUMaQee9t9wAnImEWNSr9e18%2F0SLRHPvqZMdpNMK%2BOUdT5ecO0Gdf%2BGh5LEE3pWibqlGWHzCtQNmhe2gE3XUq2UxPGGw2CGpYxlejz4uSxd7%2FJdFaO1T1xKit4OqArcEPO3JV0NaI1i6YUGnOYhMQDd91cS46sQYPGey3hwTdvdg%2FiIyNjNPGHZMN5t1zQFnjHkizy2940ZHyc2XYH&X-Amz-Signature=52433402225b9d34386a97cbc5f90a4a0a34e8942bac82cdb5c25f93055b5680&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QABSXEHU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBHBXp0%2F3kwoeS1UXSL9sAGsJ4uGuhjbVzOSjjmICf1AiAwjo3TMWSysa8HBhQWKpG4rBSZw4ln2N9xJKQuDPExyir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMWAKyCpkp1ogtNh65KtwDVKansC1fkjwOvvfNjtj%2BItaqtRNCx4YehyC4KvrsVNUSPh%2B0USeB9XnoCfYGd03%2BZZ37xP5ayJTwFsDMeZ2FKPwaNX1o0ftApu6CaKYbyLbuv9WKTbkl00a7X8LdMIGMBlXxmTih%2FwrFHdxYdc%2BxQ2WZ3roREJ2LT%2BCgX4AjFT2q3jb3p3kZEoA6CBLghk73hor%2FVNop9BBSd6Uar3ONsWEDqCscLFgTJOJSDxJ0GMSFz%2Feiv%2B38E9tMDRVf%2FrVvUEmVw%2FPnY%2F7OBy73yxIlJHmy0Oy9%2Fcn0igVtQGlm82dvNz74zjxTOUxL2T3s0ucqZ8NQHIpYopszGXlAXiDwwKrQkycRhBjuW1cDmicgHuwxX66ePD491M1KNUfrCFMlhGObKt%2Ff4XZ%2BxmGCAuhLFuJ0pq2IiEdbsV%2FeuAKIrgoxqdmWVYREBpIOUbzuGMeRc%2FdFD1I6lkVN7y3TVWNUVxQaVGw%2F6snLulE91Nd4k%2Bn0biHeiFKaHPw%2FvOXLpiXwZ8Scu6PwPEvapZ1341D0amynlz8Z9don4bP5IOzpGCvuRnM85dDOJ709WCvHtnNVNbeXeO7yTZf3m7roAXOUOJEKMQ5bWj76OEEVTSioJsf8DQdAI9ad8sRpLUkwjsDzvwY6pgGXY7gy3tEoHBXUMaQee9t9wAnImEWNSr9e18%2F0SLRHPvqZMdpNMK%2BOUdT5ecO0Gdf%2BGh5LEE3pWibqlGWHzCtQNmhe2gE3XUq2UxPGGw2CGpYxlejz4uSxd7%2FJdFaO1T1xKit4OqArcEPO3JV0NaI1i6YUGnOYhMQDd91cS46sQYPGey3hwTdvdg%2FiIyNjNPGHZMN5t1zQFnjHkizy2940ZHyc2XYH&X-Amz-Signature=e897430e8f6f1552889ed4a25277a7ae73773100a2be91a573b09fb5d4c8a887&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QABSXEHU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBHBXp0%2F3kwoeS1UXSL9sAGsJ4uGuhjbVzOSjjmICf1AiAwjo3TMWSysa8HBhQWKpG4rBSZw4ln2N9xJKQuDPExyir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMWAKyCpkp1ogtNh65KtwDVKansC1fkjwOvvfNjtj%2BItaqtRNCx4YehyC4KvrsVNUSPh%2B0USeB9XnoCfYGd03%2BZZ37xP5ayJTwFsDMeZ2FKPwaNX1o0ftApu6CaKYbyLbuv9WKTbkl00a7X8LdMIGMBlXxmTih%2FwrFHdxYdc%2BxQ2WZ3roREJ2LT%2BCgX4AjFT2q3jb3p3kZEoA6CBLghk73hor%2FVNop9BBSd6Uar3ONsWEDqCscLFgTJOJSDxJ0GMSFz%2Feiv%2B38E9tMDRVf%2FrVvUEmVw%2FPnY%2F7OBy73yxIlJHmy0Oy9%2Fcn0igVtQGlm82dvNz74zjxTOUxL2T3s0ucqZ8NQHIpYopszGXlAXiDwwKrQkycRhBjuW1cDmicgHuwxX66ePD491M1KNUfrCFMlhGObKt%2Ff4XZ%2BxmGCAuhLFuJ0pq2IiEdbsV%2FeuAKIrgoxqdmWVYREBpIOUbzuGMeRc%2FdFD1I6lkVN7y3TVWNUVxQaVGw%2F6snLulE91Nd4k%2Bn0biHeiFKaHPw%2FvOXLpiXwZ8Scu6PwPEvapZ1341D0amynlz8Z9don4bP5IOzpGCvuRnM85dDOJ709WCvHtnNVNbeXeO7yTZf3m7roAXOUOJEKMQ5bWj76OEEVTSioJsf8DQdAI9ad8sRpLUkwjsDzvwY6pgGXY7gy3tEoHBXUMaQee9t9wAnImEWNSr9e18%2F0SLRHPvqZMdpNMK%2BOUdT5ecO0Gdf%2BGh5LEE3pWibqlGWHzCtQNmhe2gE3XUq2UxPGGw2CGpYxlejz4uSxd7%2FJdFaO1T1xKit4OqArcEPO3JV0NaI1i6YUGnOYhMQDd91cS46sQYPGey3hwTdvdg%2FiIyNjNPGHZMN5t1zQFnjHkizy2940ZHyc2XYH&X-Amz-Signature=98157ba55d142a0589b8ee3e466006ca885aae83aca7aa6a6375d7b41103f101&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
