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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGGGLP3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhDZ84fmDyxcSO6G65VOHrkKeYm0CiwEYq8h9oKb4Q4AiBMGcwmv64gqvwNDb7v%2BCu506DHdQaIXJ4j%2BlpSzDg5xCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLAX6KjlyGuypZzJpKtwDZqLw9qGB%2Fl%2F7LEGr522dxk6QY48K0Lp0DxtCDh6HpxICbkqS2FPZrEUKPvxQyZ0eU3HplzMvjQoeziw6pODkbeSyhh9Ey%2FRp5w2CRxQUHffTeBDebRr4Zb8Ku49p5KkW2Z%2BWOhmpYsCHkwfjadncV9FVFhZ8a1kPjwi3cmwZeQlhpPhnqYCGK4ucVY2R8hWkJNWLZMWduMn97Af4EghoRAzu4UARLL%2BGjMz4DBycdFo5ir%2BG%2BHTY%2FN0kyiuxXp7%2Ff0mAPhUR1%2Fd%2FVQkiwWwbzN4r184ooCVXb6H43P2K6G8mojyUTm5xQ9X3Agh0XZNCLozpCGGLtjdLG%2Fc8rQfkwrZPdbyHeqrKnrxpzMUn8KFdL%2F0uOqyvlGoIUyaM2u3JWbnhZMlIWUo4DCxrB0voRo7NknAEoLYxJ%2BFKTUjS41HW0zd7dvSHmWPI8NGEWulJUiRXEVQL6XHOZkWcjRfyWIBxRlf9eCKraVZOPcA1%2F4OPJ%2B7uvHwCQdyD2Tn71J5UOBGNhBdC12yPCUW%2BqPirry5gi770u8yXuMf0M7rVtm2ADsy4PVmgJlITnZDt3c91QskKX1pZCT7nYgmkshtQJQcP8ouiwICcUGaEVrAFJAriqJtuKGD4rTHl4%2FQwj5zKvwY6pgG7KG4RogBgbX6OMD1%2Bfmt9q4cZvN3OuuS6fvgEG5hizK5I0xu9AvQC51C2ZbXjPZYEoE7cN5ejwIgjxztuPxi2oQe7FCjRc2fBuV%2B2qS3RbicbOt%2BP4hLrvM3hVnRo3a9jIxkrbGR29KN9IbI%2F07L6CyAPiSrdfmtD8oHKmBMhiKjrhGp39xHB8dY%2BEeb9Szs5qLDE6bxqF433LF1UURuRLLeTNoX2&X-Amz-Signature=cc41aade7663952246a83ea063844486930cca60661ebc5e855138ede1732bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGGGLP3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhDZ84fmDyxcSO6G65VOHrkKeYm0CiwEYq8h9oKb4Q4AiBMGcwmv64gqvwNDb7v%2BCu506DHdQaIXJ4j%2BlpSzDg5xCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLAX6KjlyGuypZzJpKtwDZqLw9qGB%2Fl%2F7LEGr522dxk6QY48K0Lp0DxtCDh6HpxICbkqS2FPZrEUKPvxQyZ0eU3HplzMvjQoeziw6pODkbeSyhh9Ey%2FRp5w2CRxQUHffTeBDebRr4Zb8Ku49p5KkW2Z%2BWOhmpYsCHkwfjadncV9FVFhZ8a1kPjwi3cmwZeQlhpPhnqYCGK4ucVY2R8hWkJNWLZMWduMn97Af4EghoRAzu4UARLL%2BGjMz4DBycdFo5ir%2BG%2BHTY%2FN0kyiuxXp7%2Ff0mAPhUR1%2Fd%2FVQkiwWwbzN4r184ooCVXb6H43P2K6G8mojyUTm5xQ9X3Agh0XZNCLozpCGGLtjdLG%2Fc8rQfkwrZPdbyHeqrKnrxpzMUn8KFdL%2F0uOqyvlGoIUyaM2u3JWbnhZMlIWUo4DCxrB0voRo7NknAEoLYxJ%2BFKTUjS41HW0zd7dvSHmWPI8NGEWulJUiRXEVQL6XHOZkWcjRfyWIBxRlf9eCKraVZOPcA1%2F4OPJ%2B7uvHwCQdyD2Tn71J5UOBGNhBdC12yPCUW%2BqPirry5gi770u8yXuMf0M7rVtm2ADsy4PVmgJlITnZDt3c91QskKX1pZCT7nYgmkshtQJQcP8ouiwICcUGaEVrAFJAriqJtuKGD4rTHl4%2FQwj5zKvwY6pgG7KG4RogBgbX6OMD1%2Bfmt9q4cZvN3OuuS6fvgEG5hizK5I0xu9AvQC51C2ZbXjPZYEoE7cN5ejwIgjxztuPxi2oQe7FCjRc2fBuV%2B2qS3RbicbOt%2BP4hLrvM3hVnRo3a9jIxkrbGR29KN9IbI%2F07L6CyAPiSrdfmtD8oHKmBMhiKjrhGp39xHB8dY%2BEeb9Szs5qLDE6bxqF433LF1UURuRLLeTNoX2&X-Amz-Signature=a608ec62370be72e6b9fba5d3d07f7dd5188bf563545e820941da4ede072c773&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGGGLP3%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhDZ84fmDyxcSO6G65VOHrkKeYm0CiwEYq8h9oKb4Q4AiBMGcwmv64gqvwNDb7v%2BCu506DHdQaIXJ4j%2BlpSzDg5xCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMLAX6KjlyGuypZzJpKtwDZqLw9qGB%2Fl%2F7LEGr522dxk6QY48K0Lp0DxtCDh6HpxICbkqS2FPZrEUKPvxQyZ0eU3HplzMvjQoeziw6pODkbeSyhh9Ey%2FRp5w2CRxQUHffTeBDebRr4Zb8Ku49p5KkW2Z%2BWOhmpYsCHkwfjadncV9FVFhZ8a1kPjwi3cmwZeQlhpPhnqYCGK4ucVY2R8hWkJNWLZMWduMn97Af4EghoRAzu4UARLL%2BGjMz4DBycdFo5ir%2BG%2BHTY%2FN0kyiuxXp7%2Ff0mAPhUR1%2Fd%2FVQkiwWwbzN4r184ooCVXb6H43P2K6G8mojyUTm5xQ9X3Agh0XZNCLozpCGGLtjdLG%2Fc8rQfkwrZPdbyHeqrKnrxpzMUn8KFdL%2F0uOqyvlGoIUyaM2u3JWbnhZMlIWUo4DCxrB0voRo7NknAEoLYxJ%2BFKTUjS41HW0zd7dvSHmWPI8NGEWulJUiRXEVQL6XHOZkWcjRfyWIBxRlf9eCKraVZOPcA1%2F4OPJ%2B7uvHwCQdyD2Tn71J5UOBGNhBdC12yPCUW%2BqPirry5gi770u8yXuMf0M7rVtm2ADsy4PVmgJlITnZDt3c91QskKX1pZCT7nYgmkshtQJQcP8ouiwICcUGaEVrAFJAriqJtuKGD4rTHl4%2FQwj5zKvwY6pgG7KG4RogBgbX6OMD1%2Bfmt9q4cZvN3OuuS6fvgEG5hizK5I0xu9AvQC51C2ZbXjPZYEoE7cN5ejwIgjxztuPxi2oQe7FCjRc2fBuV%2B2qS3RbicbOt%2BP4hLrvM3hVnRo3a9jIxkrbGR29KN9IbI%2F07L6CyAPiSrdfmtD8oHKmBMhiKjrhGp39xHB8dY%2BEeb9Szs5qLDE6bxqF433LF1UURuRLLeTNoX2&X-Amz-Signature=8fa36bb3aa2a1c1402ded399bc8db9dbb620f1aaad77ae319a099bb6e36e205d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
