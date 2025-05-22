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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYEFDCG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF5BAkVZy5RNx57MAFB4oFuKmNtA8NoMi1u54C0ogo%2F3AiEAiHi%2FEVdgCPQtCX3AYkANTjdvAtF3EpknaS5WIwb9PvMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbY3KHChNc0KlN9OSrcA8nU1vCu2X1rvjmR1P%2BQ1tT7qIHSI928wCEtlKCra5arsyf42IzSCJV3iT2zBmZ85SApdyr0FKDW%2F63tQ4f3kZQfXkdD82iYMZ6tZ%2BCyJv1VOetQMufydbbDlmvuAP4Sct%2FRTH6c7oA4TS3Q31pnxFswcQpGmi%2BTvuWqkIIjYvEKzddnECHRdrcLASuPWJQtoZX309bkr4363hJHhTlNW9cfj8h6wgRvMtsO6AWOBnEsmcO%2F5xtZamlw7hCUgztCqFmf00i42WgcOEB0wIeRot22%2FVYwnf9o3HRs6bPtD0SNVR5M18lJ4srJIeKyZpuO9jl5cP8TodSV2Kepjy6hyhTX%2BkK1DtTNS7zPXAsBsE3LYiVnZt2J%2FTEmQfu%2B%2FhykHkTJhd6H4Iplig1AsuGGlRE2dhO%2FVG9T3yKO8uxMBRq%2B%2FDmNkFoNE2%2FQ1odg6N3p%2FxzHpNL7N6a8qst0OmxtFSOHiGTYJV6bRdsqDTPJTcQ9MNs%2FX9dtwvqTgz3BepIJNnmvCJRsRXFZTof5Vnh7fMNGhPf3KLYnU5dDediE9bhposvN2m99vVE5qgS%2BLgaywF0MgBjycNybeM3J0ZRxswrtdNcYU5ZzrCZxRVR5ob2izbwZHDFJeRAFxKt4MI3FvMEGOqUBO34%2BcpBGco2llFJIvGOhsBYsTJPkf5TQd13rAEFRzQ1zVWnmCDWrO9UOJpCDBPpWeSXr%2FAZz2bYtZpfOK2TJIrnrIrBcv1KMxtuIA27wwlXJEIucaEAWL6zMb1I1i2k%2FHOTjgHpgd1x6BLUfz1zEv8TLs%2BoLfV2GE2er8P0cuv5HP9GEPlP3FBaubg5LfbWaHSFvjDsfZte7eOHVc1GZ8JeL16qE&X-Amz-Signature=24d54537c77d864e6c9f6d6befef557a853c75b6528a922b0dedc94bfd8c42af&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYEFDCG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF5BAkVZy5RNx57MAFB4oFuKmNtA8NoMi1u54C0ogo%2F3AiEAiHi%2FEVdgCPQtCX3AYkANTjdvAtF3EpknaS5WIwb9PvMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbY3KHChNc0KlN9OSrcA8nU1vCu2X1rvjmR1P%2BQ1tT7qIHSI928wCEtlKCra5arsyf42IzSCJV3iT2zBmZ85SApdyr0FKDW%2F63tQ4f3kZQfXkdD82iYMZ6tZ%2BCyJv1VOetQMufydbbDlmvuAP4Sct%2FRTH6c7oA4TS3Q31pnxFswcQpGmi%2BTvuWqkIIjYvEKzddnECHRdrcLASuPWJQtoZX309bkr4363hJHhTlNW9cfj8h6wgRvMtsO6AWOBnEsmcO%2F5xtZamlw7hCUgztCqFmf00i42WgcOEB0wIeRot22%2FVYwnf9o3HRs6bPtD0SNVR5M18lJ4srJIeKyZpuO9jl5cP8TodSV2Kepjy6hyhTX%2BkK1DtTNS7zPXAsBsE3LYiVnZt2J%2FTEmQfu%2B%2FhykHkTJhd6H4Iplig1AsuGGlRE2dhO%2FVG9T3yKO8uxMBRq%2B%2FDmNkFoNE2%2FQ1odg6N3p%2FxzHpNL7N6a8qst0OmxtFSOHiGTYJV6bRdsqDTPJTcQ9MNs%2FX9dtwvqTgz3BepIJNnmvCJRsRXFZTof5Vnh7fMNGhPf3KLYnU5dDediE9bhposvN2m99vVE5qgS%2BLgaywF0MgBjycNybeM3J0ZRxswrtdNcYU5ZzrCZxRVR5ob2izbwZHDFJeRAFxKt4MI3FvMEGOqUBO34%2BcpBGco2llFJIvGOhsBYsTJPkf5TQd13rAEFRzQ1zVWnmCDWrO9UOJpCDBPpWeSXr%2FAZz2bYtZpfOK2TJIrnrIrBcv1KMxtuIA27wwlXJEIucaEAWL6zMb1I1i2k%2FHOTjgHpgd1x6BLUfz1zEv8TLs%2BoLfV2GE2er8P0cuv5HP9GEPlP3FBaubg5LfbWaHSFvjDsfZte7eOHVc1GZ8JeL16qE&X-Amz-Signature=87334cd6ec3a01b5ff7590302ae2b6423d8bd92611b5e8a43e87723a8a3856d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYEFDCG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF5BAkVZy5RNx57MAFB4oFuKmNtA8NoMi1u54C0ogo%2F3AiEAiHi%2FEVdgCPQtCX3AYkANTjdvAtF3EpknaS5WIwb9PvMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbY3KHChNc0KlN9OSrcA8nU1vCu2X1rvjmR1P%2BQ1tT7qIHSI928wCEtlKCra5arsyf42IzSCJV3iT2zBmZ85SApdyr0FKDW%2F63tQ4f3kZQfXkdD82iYMZ6tZ%2BCyJv1VOetQMufydbbDlmvuAP4Sct%2FRTH6c7oA4TS3Q31pnxFswcQpGmi%2BTvuWqkIIjYvEKzddnECHRdrcLASuPWJQtoZX309bkr4363hJHhTlNW9cfj8h6wgRvMtsO6AWOBnEsmcO%2F5xtZamlw7hCUgztCqFmf00i42WgcOEB0wIeRot22%2FVYwnf9o3HRs6bPtD0SNVR5M18lJ4srJIeKyZpuO9jl5cP8TodSV2Kepjy6hyhTX%2BkK1DtTNS7zPXAsBsE3LYiVnZt2J%2FTEmQfu%2B%2FhykHkTJhd6H4Iplig1AsuGGlRE2dhO%2FVG9T3yKO8uxMBRq%2B%2FDmNkFoNE2%2FQ1odg6N3p%2FxzHpNL7N6a8qst0OmxtFSOHiGTYJV6bRdsqDTPJTcQ9MNs%2FX9dtwvqTgz3BepIJNnmvCJRsRXFZTof5Vnh7fMNGhPf3KLYnU5dDediE9bhposvN2m99vVE5qgS%2BLgaywF0MgBjycNybeM3J0ZRxswrtdNcYU5ZzrCZxRVR5ob2izbwZHDFJeRAFxKt4MI3FvMEGOqUBO34%2BcpBGco2llFJIvGOhsBYsTJPkf5TQd13rAEFRzQ1zVWnmCDWrO9UOJpCDBPpWeSXr%2FAZz2bYtZpfOK2TJIrnrIrBcv1KMxtuIA27wwlXJEIucaEAWL6zMb1I1i2k%2FHOTjgHpgd1x6BLUfz1zEv8TLs%2BoLfV2GE2er8P0cuv5HP9GEPlP3FBaubg5LfbWaHSFvjDsfZte7eOHVc1GZ8JeL16qE&X-Amz-Signature=77f50fbc1ff6b793e8dab91ae84ac53a2c4d1dc5e0b3f71fb0eaab713bfe6361&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
