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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVEKL6EK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEyuQm3%2FmC8QkrjQFgpvzVgssLwlzzXuSB%2FHdiqr2fbPAiBp%2B70cflxASlsD644RAhhU6Vtx3ruxFkSh2ZLyql2QxSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMzQXTmjEkQdTd7VcdKtwDk%2FSpuFqeCpLMIlFtdCaNvHchGJUWG3zO6FYlPk6iGwq54Xw%2FjE8ZfaKyYC3TpugVvsnzn5uiHyefWjBOV8%2FrAUEHQRWnA7uW2DqK1gJBAMirvT%2FWB%2Bjx9n%2B04TC1xtjBx0aJptHEt1vi2wana7%2FI%2B%2Bx1MSFtb%2B1H9%2FaQePFVWdXW5OHMVWgEhGkFg36UxLZU92nqFXNqECFA%2F0HehLCxdeOin45Fa0nqqiWmJt4AhBwfcoBeU89Y7o2%2BLZBDqrGQWFV6mISxapDvXWMD%2BaDevVE8fzn5KgrXcTZBgIjs0sIyv%2FMgaiHWUVsGmqccTNvYJwRWbSE%2FfEaS841GJ3ems4pksrrDALfSnCVj9UTNaeNObaywu4qunL4GcETg%2BcpsL6BF5k4s90Av4J5XPTf5qjmjSaYDb2PiRq%2FDhcU%2Bga14ist7W4I05JNYfLDJpVflfBIqqEvNakndlCViyVIafvrX2u22uTkEt6CH6zWpiU5ciL1Mgr0MILvnN%2FcEPIG1rvYF7MrwkAN3pq6w6sZyNj2qRvx%2BEaOw%2F30fc1x9tvQD0fmboeDZa%2BQ%2B0m68DvuBBeuFmKo%2Fo5TtFteebTG4B%2BxuQBeC%2FlSyvBZGsYLshfos%2BnR40dvwrztlAS0wiPXlvgY6pgHjEHL98TYqqPck450uC8GNYQOjGWEeHA8fl%2BB9uDBVfeEzaO2dTNAoBaSRUvKJuMUt%2BqD%2B6CS2lxzjWAlOlawkut%2FESsCYMrlJmPXy8aJlbE4IvtTdJF0FH%2BsKzQ4CY6bkHgjGdmTmwVaXv%2F9EGYJoQWWYZH63Swn0v3ZytxUC6KZtr3oh0AQ3x3h1dQVxfKZDF3jcQxo7XPVGGrSjzsJ5HJowQ7HO&X-Amz-Signature=68c2a278a2f6fadd4dd76d8411a45afc5ee887f37de4aa4735694587a6e6db20&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVEKL6EK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEyuQm3%2FmC8QkrjQFgpvzVgssLwlzzXuSB%2FHdiqr2fbPAiBp%2B70cflxASlsD644RAhhU6Vtx3ruxFkSh2ZLyql2QxSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMzQXTmjEkQdTd7VcdKtwDk%2FSpuFqeCpLMIlFtdCaNvHchGJUWG3zO6FYlPk6iGwq54Xw%2FjE8ZfaKyYC3TpugVvsnzn5uiHyefWjBOV8%2FrAUEHQRWnA7uW2DqK1gJBAMirvT%2FWB%2Bjx9n%2B04TC1xtjBx0aJptHEt1vi2wana7%2FI%2B%2Bx1MSFtb%2B1H9%2FaQePFVWdXW5OHMVWgEhGkFg36UxLZU92nqFXNqECFA%2F0HehLCxdeOin45Fa0nqqiWmJt4AhBwfcoBeU89Y7o2%2BLZBDqrGQWFV6mISxapDvXWMD%2BaDevVE8fzn5KgrXcTZBgIjs0sIyv%2FMgaiHWUVsGmqccTNvYJwRWbSE%2FfEaS841GJ3ems4pksrrDALfSnCVj9UTNaeNObaywu4qunL4GcETg%2BcpsL6BF5k4s90Av4J5XPTf5qjmjSaYDb2PiRq%2FDhcU%2Bga14ist7W4I05JNYfLDJpVflfBIqqEvNakndlCViyVIafvrX2u22uTkEt6CH6zWpiU5ciL1Mgr0MILvnN%2FcEPIG1rvYF7MrwkAN3pq6w6sZyNj2qRvx%2BEaOw%2F30fc1x9tvQD0fmboeDZa%2BQ%2B0m68DvuBBeuFmKo%2Fo5TtFteebTG4B%2BxuQBeC%2FlSyvBZGsYLshfos%2BnR40dvwrztlAS0wiPXlvgY6pgHjEHL98TYqqPck450uC8GNYQOjGWEeHA8fl%2BB9uDBVfeEzaO2dTNAoBaSRUvKJuMUt%2BqD%2B6CS2lxzjWAlOlawkut%2FESsCYMrlJmPXy8aJlbE4IvtTdJF0FH%2BsKzQ4CY6bkHgjGdmTmwVaXv%2F9EGYJoQWWYZH63Swn0v3ZytxUC6KZtr3oh0AQ3x3h1dQVxfKZDF3jcQxo7XPVGGrSjzsJ5HJowQ7HO&X-Amz-Signature=39c76386410791de3dc1a02d72a263cfda97b9a2903b127949c6449f30732c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVEKL6EK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEyuQm3%2FmC8QkrjQFgpvzVgssLwlzzXuSB%2FHdiqr2fbPAiBp%2B70cflxASlsD644RAhhU6Vtx3ruxFkSh2ZLyql2QxSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMzQXTmjEkQdTd7VcdKtwDk%2FSpuFqeCpLMIlFtdCaNvHchGJUWG3zO6FYlPk6iGwq54Xw%2FjE8ZfaKyYC3TpugVvsnzn5uiHyefWjBOV8%2FrAUEHQRWnA7uW2DqK1gJBAMirvT%2FWB%2Bjx9n%2B04TC1xtjBx0aJptHEt1vi2wana7%2FI%2B%2Bx1MSFtb%2B1H9%2FaQePFVWdXW5OHMVWgEhGkFg36UxLZU92nqFXNqECFA%2F0HehLCxdeOin45Fa0nqqiWmJt4AhBwfcoBeU89Y7o2%2BLZBDqrGQWFV6mISxapDvXWMD%2BaDevVE8fzn5KgrXcTZBgIjs0sIyv%2FMgaiHWUVsGmqccTNvYJwRWbSE%2FfEaS841GJ3ems4pksrrDALfSnCVj9UTNaeNObaywu4qunL4GcETg%2BcpsL6BF5k4s90Av4J5XPTf5qjmjSaYDb2PiRq%2FDhcU%2Bga14ist7W4I05JNYfLDJpVflfBIqqEvNakndlCViyVIafvrX2u22uTkEt6CH6zWpiU5ciL1Mgr0MILvnN%2FcEPIG1rvYF7MrwkAN3pq6w6sZyNj2qRvx%2BEaOw%2F30fc1x9tvQD0fmboeDZa%2BQ%2B0m68DvuBBeuFmKo%2Fo5TtFteebTG4B%2BxuQBeC%2FlSyvBZGsYLshfos%2BnR40dvwrztlAS0wiPXlvgY6pgHjEHL98TYqqPck450uC8GNYQOjGWEeHA8fl%2BB9uDBVfeEzaO2dTNAoBaSRUvKJuMUt%2BqD%2B6CS2lxzjWAlOlawkut%2FESsCYMrlJmPXy8aJlbE4IvtTdJF0FH%2BsKzQ4CY6bkHgjGdmTmwVaXv%2F9EGYJoQWWYZH63Swn0v3ZytxUC6KZtr3oh0AQ3x3h1dQVxfKZDF3jcQxo7XPVGGrSjzsJ5HJowQ7HO&X-Amz-Signature=90bbbf9d99c7a8336be97250711de1f0402f0ce097cafde556dbb7cb81d836d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
