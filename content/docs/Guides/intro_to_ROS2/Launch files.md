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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOTXNA2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFYzK0s3o2wgq%2FeyetGEZVzb1yc6nOpNPF5ERJFj1C6TAiA%2FhJXYOwBOrCf4aHZr3nUok2MNAXx6OpVVZOJGspcgpyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMVD8If3SwPrfi%2Fs%2BnKtwDzRmjmEAscRNByK%2Bi4GrD4%2BTP57XEjS4%2Fi6WvHDm1dLjSEyty9GshdkOwzSqcfLWFqnFa5Q8JIvnjzpah0aD4SDgADDu6K8VHvGOWga8i5c%2FIoKvD85t9kdgtxVxmSNZ%2FUhhQtxDy9xyPL6qY%2BKy2gOqC%2BqBMFWuQNT0arBzgZhn2VcEFQDxHSea205hWo5Hhr93r1ajYcTouhdyjpJ9EOJsRYY9S7DxOdZnrTkHr0GxnS4HiNUjhd8AiNtk3Q7Lwunye3x38HU1u2icAld2f3P1sZGoqD4oOpVg9i2zplMj5%2Fhfe7aOAR%2FykXxZqOrnI7UxK56hm0PudBEMZO4PsuvcOrm4IdzxT4%2FQqOstlIxq%2Blw5vzBdGvhtEVIFK%2B5v0dYd0NkiSSU9DvG7eClrgSqpzyxVVPhYlyKcE1lJck4qaN76V8DKWJ6BJtA%2FzdWKf6w9Ei0PKuhAALG1YnQZabxTns7vV0XYJ3XT57nKlDyLDLY5UfMTIBwTPQgijesBWBKWkfDzRd8r7h%2B933Xpk5Ajyz%2FR%2FkqJt5io3yAXeEoPqinTuNfTMF0Ft%2BZEZxcZsX%2B3nM63W%2FMT7YmqcyCe2iswH2CpG8NXoAqEoaAHHSc%2F2C8leTBX0yCo8PkkwjtDNvQY6pgEFt6fBVEdx5Sb4Z7JLMpNkBoCLpOqURmc43KBZCyCuE1lgRlqo%2BRhIh7CUtX4QMYZjQy0HO1itHiTP7i2KsG1Mn0ubkBq2lk9ucD7jC564bLPPcTrMWlhC5kANiiwsUiPCooRfsXnW63M8oAL5yR7Ul%2BPTmPoinwZlZOoHxm5Vv4y2nkGILhyip4%2F%2FXB1EQx%2BDLbNV3RAlKKS5ar7GARiVq7Gp3HcB&X-Amz-Signature=8970c73cc410d2f2fd9aa0b1072450b3829e9460d398b29626c7e9cd6466134c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOTXNA2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFYzK0s3o2wgq%2FeyetGEZVzb1yc6nOpNPF5ERJFj1C6TAiA%2FhJXYOwBOrCf4aHZr3nUok2MNAXx6OpVVZOJGspcgpyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMVD8If3SwPrfi%2Fs%2BnKtwDzRmjmEAscRNByK%2Bi4GrD4%2BTP57XEjS4%2Fi6WvHDm1dLjSEyty9GshdkOwzSqcfLWFqnFa5Q8JIvnjzpah0aD4SDgADDu6K8VHvGOWga8i5c%2FIoKvD85t9kdgtxVxmSNZ%2FUhhQtxDy9xyPL6qY%2BKy2gOqC%2BqBMFWuQNT0arBzgZhn2VcEFQDxHSea205hWo5Hhr93r1ajYcTouhdyjpJ9EOJsRYY9S7DxOdZnrTkHr0GxnS4HiNUjhd8AiNtk3Q7Lwunye3x38HU1u2icAld2f3P1sZGoqD4oOpVg9i2zplMj5%2Fhfe7aOAR%2FykXxZqOrnI7UxK56hm0PudBEMZO4PsuvcOrm4IdzxT4%2FQqOstlIxq%2Blw5vzBdGvhtEVIFK%2B5v0dYd0NkiSSU9DvG7eClrgSqpzyxVVPhYlyKcE1lJck4qaN76V8DKWJ6BJtA%2FzdWKf6w9Ei0PKuhAALG1YnQZabxTns7vV0XYJ3XT57nKlDyLDLY5UfMTIBwTPQgijesBWBKWkfDzRd8r7h%2B933Xpk5Ajyz%2FR%2FkqJt5io3yAXeEoPqinTuNfTMF0Ft%2BZEZxcZsX%2B3nM63W%2FMT7YmqcyCe2iswH2CpG8NXoAqEoaAHHSc%2F2C8leTBX0yCo8PkkwjtDNvQY6pgEFt6fBVEdx5Sb4Z7JLMpNkBoCLpOqURmc43KBZCyCuE1lgRlqo%2BRhIh7CUtX4QMYZjQy0HO1itHiTP7i2KsG1Mn0ubkBq2lk9ucD7jC564bLPPcTrMWlhC5kANiiwsUiPCooRfsXnW63M8oAL5yR7Ul%2BPTmPoinwZlZOoHxm5Vv4y2nkGILhyip4%2F%2FXB1EQx%2BDLbNV3RAlKKS5ar7GARiVq7Gp3HcB&X-Amz-Signature=a6f9d8ca61467d19adeafabfc3acd8820e0125e908ef9d0fd2054a92b53de1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IOTXNA2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFYzK0s3o2wgq%2FeyetGEZVzb1yc6nOpNPF5ERJFj1C6TAiA%2FhJXYOwBOrCf4aHZr3nUok2MNAXx6OpVVZOJGspcgpyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMVD8If3SwPrfi%2Fs%2BnKtwDzRmjmEAscRNByK%2Bi4GrD4%2BTP57XEjS4%2Fi6WvHDm1dLjSEyty9GshdkOwzSqcfLWFqnFa5Q8JIvnjzpah0aD4SDgADDu6K8VHvGOWga8i5c%2FIoKvD85t9kdgtxVxmSNZ%2FUhhQtxDy9xyPL6qY%2BKy2gOqC%2BqBMFWuQNT0arBzgZhn2VcEFQDxHSea205hWo5Hhr93r1ajYcTouhdyjpJ9EOJsRYY9S7DxOdZnrTkHr0GxnS4HiNUjhd8AiNtk3Q7Lwunye3x38HU1u2icAld2f3P1sZGoqD4oOpVg9i2zplMj5%2Fhfe7aOAR%2FykXxZqOrnI7UxK56hm0PudBEMZO4PsuvcOrm4IdzxT4%2FQqOstlIxq%2Blw5vzBdGvhtEVIFK%2B5v0dYd0NkiSSU9DvG7eClrgSqpzyxVVPhYlyKcE1lJck4qaN76V8DKWJ6BJtA%2FzdWKf6w9Ei0PKuhAALG1YnQZabxTns7vV0XYJ3XT57nKlDyLDLY5UfMTIBwTPQgijesBWBKWkfDzRd8r7h%2B933Xpk5Ajyz%2FR%2FkqJt5io3yAXeEoPqinTuNfTMF0Ft%2BZEZxcZsX%2B3nM63W%2FMT7YmqcyCe2iswH2CpG8NXoAqEoaAHHSc%2F2C8leTBX0yCo8PkkwjtDNvQY6pgEFt6fBVEdx5Sb4Z7JLMpNkBoCLpOqURmc43KBZCyCuE1lgRlqo%2BRhIh7CUtX4QMYZjQy0HO1itHiTP7i2KsG1Mn0ubkBq2lk9ucD7jC564bLPPcTrMWlhC5kANiiwsUiPCooRfsXnW63M8oAL5yR7Ul%2BPTmPoinwZlZOoHxm5Vv4y2nkGILhyip4%2F%2FXB1EQx%2BDLbNV3RAlKKS5ar7GARiVq7Gp3HcB&X-Amz-Signature=275eeb281328d514d7bcb80c387dba095a37ef6cd014f107c3044108d374f6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
