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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFZNIPH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClRIc3AlfwEb6cwJJOLHku9UK%2FihhzSBR5CTzmS52fmQIhAM4j4xk15QsFV3XhEX9E%2Fd%2BOxKI4P0MOH1VjgwirSeh0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAn4TuHM6yw89cjYUq3AM%2FFunwCpmSIprj4P2pRlEaWIM8VQAAdKu6m%2FiYcYIf2nWHG3ruPLX%2BvvyhF%2F9nmBmpkiXY7p0QEL%2FRbEtn7iUz3RtmebQCq2Vx%2B3s6eseZRutTODimkqBDIIZFjFVDoASrk5DIaOTL4csSePFBHu%2F2F3iZg1im2QrZbqI%2FdAgJPX3UtYSEICTusgbKZfpoiujhnc7XaNK4MWz3ZF2acSokH4zCw%2FeTul6Q9mEeQqoKXdFAaC4cK3B0k7BBBAbv1HE8x2PXYon29GNWUDLciqMLri7VvsCe8ZDqT6LM6r9xs1CSFQ2rwTCatxYMqulWNYj2eOR4IlmG%2B4lPT%2FT%2FyWFW3WC5eaQmsOQff%2B0ki%2F3acFma3qGWsOumPbAJIiBrvXwYELJR4AJhfmbtiBTvpmhJ%2B6yQpBt%2F3JBbcx23GX8NNjfHzhSoVoHnTJO%2ByUS3jC5YALgBk3n7zdCkupSB2F12sTvCWc8eRdKSQrl93Vss%2FY90%2FK%2FZmIWzH9C4y1CYxqYVNaM9f4osecp9C%2FuedxrdcgrJ0pwnzBT5FIOK%2F6p372Hh2VqqYdvLP7%2Fe%2Fnd5R99NQ5WpIySLWRiQ%2BaHHqrMAjqw89J%2BohePSLrECYkciFmKEU2WYPsva9O1UEzDopM3DBjqkAV8vGkQbsqA3Twvezgm%2FdVYd9iEzBIspV9hQoJQvpbifHFqSL%2FNp7U4%2Fyifirq6vBiR6hH%2BRGWrOveGmTnsNcX0Tdw9K2IjcTF4qeR5r5zJu7Zt8pnRDY80CxNw2nskYbmNMP3WGxKPP9QsRarHNCq%2FRBRwAY4ICDorNbVdgLNCxX%2Fm2OUrp8SA0NYEI1JT6cQuDGFZTmvjICXHUD8ae1NqWCoGp&X-Amz-Signature=0657efe354918671d652de8096fad55aa38f43dcd9f926a8e03ea86517e4e115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFZNIPH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClRIc3AlfwEb6cwJJOLHku9UK%2FihhzSBR5CTzmS52fmQIhAM4j4xk15QsFV3XhEX9E%2Fd%2BOxKI4P0MOH1VjgwirSeh0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAn4TuHM6yw89cjYUq3AM%2FFunwCpmSIprj4P2pRlEaWIM8VQAAdKu6m%2FiYcYIf2nWHG3ruPLX%2BvvyhF%2F9nmBmpkiXY7p0QEL%2FRbEtn7iUz3RtmebQCq2Vx%2B3s6eseZRutTODimkqBDIIZFjFVDoASrk5DIaOTL4csSePFBHu%2F2F3iZg1im2QrZbqI%2FdAgJPX3UtYSEICTusgbKZfpoiujhnc7XaNK4MWz3ZF2acSokH4zCw%2FeTul6Q9mEeQqoKXdFAaC4cK3B0k7BBBAbv1HE8x2PXYon29GNWUDLciqMLri7VvsCe8ZDqT6LM6r9xs1CSFQ2rwTCatxYMqulWNYj2eOR4IlmG%2B4lPT%2FT%2FyWFW3WC5eaQmsOQff%2B0ki%2F3acFma3qGWsOumPbAJIiBrvXwYELJR4AJhfmbtiBTvpmhJ%2B6yQpBt%2F3JBbcx23GX8NNjfHzhSoVoHnTJO%2ByUS3jC5YALgBk3n7zdCkupSB2F12sTvCWc8eRdKSQrl93Vss%2FY90%2FK%2FZmIWzH9C4y1CYxqYVNaM9f4osecp9C%2FuedxrdcgrJ0pwnzBT5FIOK%2F6p372Hh2VqqYdvLP7%2Fe%2Fnd5R99NQ5WpIySLWRiQ%2BaHHqrMAjqw89J%2BohePSLrECYkciFmKEU2WYPsva9O1UEzDopM3DBjqkAV8vGkQbsqA3Twvezgm%2FdVYd9iEzBIspV9hQoJQvpbifHFqSL%2FNp7U4%2Fyifirq6vBiR6hH%2BRGWrOveGmTnsNcX0Tdw9K2IjcTF4qeR5r5zJu7Zt8pnRDY80CxNw2nskYbmNMP3WGxKPP9QsRarHNCq%2FRBRwAY4ICDorNbVdgLNCxX%2Fm2OUrp8SA0NYEI1JT6cQuDGFZTmvjICXHUD8ae1NqWCoGp&X-Amz-Signature=0819ee421839347beef6196b0af2aee3ff0014810d43c6af6fb15d1571c29165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFZNIPH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClRIc3AlfwEb6cwJJOLHku9UK%2FihhzSBR5CTzmS52fmQIhAM4j4xk15QsFV3XhEX9E%2Fd%2BOxKI4P0MOH1VjgwirSeh0KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAn4TuHM6yw89cjYUq3AM%2FFunwCpmSIprj4P2pRlEaWIM8VQAAdKu6m%2FiYcYIf2nWHG3ruPLX%2BvvyhF%2F9nmBmpkiXY7p0QEL%2FRbEtn7iUz3RtmebQCq2Vx%2B3s6eseZRutTODimkqBDIIZFjFVDoASrk5DIaOTL4csSePFBHu%2F2F3iZg1im2QrZbqI%2FdAgJPX3UtYSEICTusgbKZfpoiujhnc7XaNK4MWz3ZF2acSokH4zCw%2FeTul6Q9mEeQqoKXdFAaC4cK3B0k7BBBAbv1HE8x2PXYon29GNWUDLciqMLri7VvsCe8ZDqT6LM6r9xs1CSFQ2rwTCatxYMqulWNYj2eOR4IlmG%2B4lPT%2FT%2FyWFW3WC5eaQmsOQff%2B0ki%2F3acFma3qGWsOumPbAJIiBrvXwYELJR4AJhfmbtiBTvpmhJ%2B6yQpBt%2F3JBbcx23GX8NNjfHzhSoVoHnTJO%2ByUS3jC5YALgBk3n7zdCkupSB2F12sTvCWc8eRdKSQrl93Vss%2FY90%2FK%2FZmIWzH9C4y1CYxqYVNaM9f4osecp9C%2FuedxrdcgrJ0pwnzBT5FIOK%2F6p372Hh2VqqYdvLP7%2Fe%2Fnd5R99NQ5WpIySLWRiQ%2BaHHqrMAjqw89J%2BohePSLrECYkciFmKEU2WYPsva9O1UEzDopM3DBjqkAV8vGkQbsqA3Twvezgm%2FdVYd9iEzBIspV9hQoJQvpbifHFqSL%2FNp7U4%2Fyifirq6vBiR6hH%2BRGWrOveGmTnsNcX0Tdw9K2IjcTF4qeR5r5zJu7Zt8pnRDY80CxNw2nskYbmNMP3WGxKPP9QsRarHNCq%2FRBRwAY4ICDorNbVdgLNCxX%2Fm2OUrp8SA0NYEI1JT6cQuDGFZTmvjICXHUD8ae1NqWCoGp&X-Amz-Signature=3cf412f9d8da430c02b896940e1f5082843872a7ed7a6e8bc34a1d79fa94e963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
