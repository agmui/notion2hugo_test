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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNMTFD4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGLdjYx%2BDGDV%2BSZyp5Ldd9sU6b0E0Rt7wS%2FXYn35XXR9AiA9gPjoFIyxv3%2FhYtEkBmJHPjTt2nl2CD2ApnpIrMv34CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwn%2BsQeHBdujYoYULKtwDrnoXFZw0SkqlUG0yB0VTgOsXHUxp6rkK8Bhht0r3RVYbIgywlAzxzYRZTN5Z5o7E1AZ99JX%2BDfh4D70BavMVAJ1S0PctTzx8FqP%2FRJcOAmcYPNMscrHP07zZDEnzUgy%2F8EK5%2BoO00Kg8kCXUNtCQwehiM1LkreHLufQg4yA36qDNb9lPx6oxOtXbm4or5BQ04jePU8O%2BKf1KFsGWj2Uz125HiyRyi76AJvXyw5%2F6FbWQRXfbmYVlS7PJUDEQIDrQb4vvF7zw1SUUHi1B9GR6WreW6Z82tJbwBMpqBTXxgGRS80GhaG1hWvmUIP7%2FinhemTamiijtgOPqX289Eb5UMTez28N6aXO5t6kSDvY2XlIDZRgfff71dF5tgWkpdS%2Bd59aORPJfsmSKOs6YdbqeEdVORV0EQUBSvKBAmJjVvLOYTiiQCa5Chlk%2FLCDGyE2sKdSinBQ1a5f5J0Hox%2F76eya%2BxDdEIEb%2BbvFe%2BKaIZUaVnwKh9KgH8DbjhAy5RofWy1P8fdO%2BT9wykYlcn8cN7I2jK%2F2hvWUx4yJf909EErR0IHAhgfjYco5JpLihfFIh24SCHhqwcJxrr7BSzy6WWiwHTKmBQiq8IY699%2FFJqye6wEbhRZdX1zEQxsMwsYSGwQY6pgEXt9xzxfn4QOPH%2F0FclOZP6uOeKJwyS8CmS9VNjmFjJw%2FtTwgAMyCzAh4ksTyxeP4sI%2FmLnd3gw5KzE5U4B12DZ7ECU132MwSkbMlN8hvxmRy9VaPHUQJwpqbEZ3fhcqgztIz28SkhfDOWXZVsoJigEbZ5lAwL9AAXyiizfpWLVmbc2JCv0MtA6%2Fot9R9NN77JTQ91spWUd7X%2Btle6EVlGy5r3c6DI&X-Amz-Signature=3114f0c96a19b36a994d41edcdcac0f558a26f76d9f30511372090515f568df4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNMTFD4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGLdjYx%2BDGDV%2BSZyp5Ldd9sU6b0E0Rt7wS%2FXYn35XXR9AiA9gPjoFIyxv3%2FhYtEkBmJHPjTt2nl2CD2ApnpIrMv34CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwn%2BsQeHBdujYoYULKtwDrnoXFZw0SkqlUG0yB0VTgOsXHUxp6rkK8Bhht0r3RVYbIgywlAzxzYRZTN5Z5o7E1AZ99JX%2BDfh4D70BavMVAJ1S0PctTzx8FqP%2FRJcOAmcYPNMscrHP07zZDEnzUgy%2F8EK5%2BoO00Kg8kCXUNtCQwehiM1LkreHLufQg4yA36qDNb9lPx6oxOtXbm4or5BQ04jePU8O%2BKf1KFsGWj2Uz125HiyRyi76AJvXyw5%2F6FbWQRXfbmYVlS7PJUDEQIDrQb4vvF7zw1SUUHi1B9GR6WreW6Z82tJbwBMpqBTXxgGRS80GhaG1hWvmUIP7%2FinhemTamiijtgOPqX289Eb5UMTez28N6aXO5t6kSDvY2XlIDZRgfff71dF5tgWkpdS%2Bd59aORPJfsmSKOs6YdbqeEdVORV0EQUBSvKBAmJjVvLOYTiiQCa5Chlk%2FLCDGyE2sKdSinBQ1a5f5J0Hox%2F76eya%2BxDdEIEb%2BbvFe%2BKaIZUaVnwKh9KgH8DbjhAy5RofWy1P8fdO%2BT9wykYlcn8cN7I2jK%2F2hvWUx4yJf909EErR0IHAhgfjYco5JpLihfFIh24SCHhqwcJxrr7BSzy6WWiwHTKmBQiq8IY699%2FFJqye6wEbhRZdX1zEQxsMwsYSGwQY6pgEXt9xzxfn4QOPH%2F0FclOZP6uOeKJwyS8CmS9VNjmFjJw%2FtTwgAMyCzAh4ksTyxeP4sI%2FmLnd3gw5KzE5U4B12DZ7ECU132MwSkbMlN8hvxmRy9VaPHUQJwpqbEZ3fhcqgztIz28SkhfDOWXZVsoJigEbZ5lAwL9AAXyiizfpWLVmbc2JCv0MtA6%2Fot9R9NN77JTQ91spWUd7X%2Btle6EVlGy5r3c6DI&X-Amz-Signature=37eacde95296e1215f94c643c0f696111af19e4c6bd82b377f60043c4ba1853d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNMTFD4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGLdjYx%2BDGDV%2BSZyp5Ldd9sU6b0E0Rt7wS%2FXYn35XXR9AiA9gPjoFIyxv3%2FhYtEkBmJHPjTt2nl2CD2ApnpIrMv34CqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwn%2BsQeHBdujYoYULKtwDrnoXFZw0SkqlUG0yB0VTgOsXHUxp6rkK8Bhht0r3RVYbIgywlAzxzYRZTN5Z5o7E1AZ99JX%2BDfh4D70BavMVAJ1S0PctTzx8FqP%2FRJcOAmcYPNMscrHP07zZDEnzUgy%2F8EK5%2BoO00Kg8kCXUNtCQwehiM1LkreHLufQg4yA36qDNb9lPx6oxOtXbm4or5BQ04jePU8O%2BKf1KFsGWj2Uz125HiyRyi76AJvXyw5%2F6FbWQRXfbmYVlS7PJUDEQIDrQb4vvF7zw1SUUHi1B9GR6WreW6Z82tJbwBMpqBTXxgGRS80GhaG1hWvmUIP7%2FinhemTamiijtgOPqX289Eb5UMTez28N6aXO5t6kSDvY2XlIDZRgfff71dF5tgWkpdS%2Bd59aORPJfsmSKOs6YdbqeEdVORV0EQUBSvKBAmJjVvLOYTiiQCa5Chlk%2FLCDGyE2sKdSinBQ1a5f5J0Hox%2F76eya%2BxDdEIEb%2BbvFe%2BKaIZUaVnwKh9KgH8DbjhAy5RofWy1P8fdO%2BT9wykYlcn8cN7I2jK%2F2hvWUx4yJf909EErR0IHAhgfjYco5JpLihfFIh24SCHhqwcJxrr7BSzy6WWiwHTKmBQiq8IY699%2FFJqye6wEbhRZdX1zEQxsMwsYSGwQY6pgEXt9xzxfn4QOPH%2F0FclOZP6uOeKJwyS8CmS9VNjmFjJw%2FtTwgAMyCzAh4ksTyxeP4sI%2FmLnd3gw5KzE5U4B12DZ7ECU132MwSkbMlN8hvxmRy9VaPHUQJwpqbEZ3fhcqgztIz28SkhfDOWXZVsoJigEbZ5lAwL9AAXyiizfpWLVmbc2JCv0MtA6%2Fot9R9NN77JTQ91spWUd7X%2Btle6EVlGy5r3c6DI&X-Amz-Signature=0f834a6e126c62fafa59db3a88c222d252f8aaf97dd179b8b57809e807c67ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
