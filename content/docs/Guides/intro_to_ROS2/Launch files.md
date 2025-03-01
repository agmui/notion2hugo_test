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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H6EWG5H%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnFNl5mmMspgxs22g%2BsWPB7ReeK4nWXwViDkhe1ecdtwIhAIk268vdOclOvtj1O%2BOK%2FJDhezd42cTImJDqJhd31h3VKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGDv6uqdsD%2FW3T4W4q3APKZbxwPvNf2PaDbXgPXnI7Tt7L6jDkuhePRKNg9v1eGv2ZUWtqcvIKPsORxfbHEZAMm9FeLIKTOmbhq%2FpwdA1Un3TaqV1q17ORpLZqB3g56Bi638SzkiRfDiGI5%2BD9ecYb4F%2Be7TduhUSCe2P%2FPxHQvWdWc8kgYHkKTVuiyE658PYWjALTCsJKGxy391MWpQYjvUb1VeYyKCqvzlNz2xwrS7HzM1V8vXKKiX7sHTPLehTK8jpNXAFrzVyX8NSaA2G4shrIYs0Jl9kUz6ZN8DSKBGAoHpoVNFsKCT6p9oJgJZhpUpJ04y1xWRN82IKSArtAWsScXmh0DH%2BMdlP%2Fpaqbu2g7o8BM%2Bh%2F3jkDyV8v1jyPSk0Tn%2BxMrnVrQGI59ixV9lykMxheh%2Bweqy0B1EH2cOlJg28UYaXEmI63SFh0qf9LvzOsdy9NM%2FX%2FpXINp7Rne5bxdhIZ%2Fvi3D522RgPacmiqOL7JtOQgtBYi5gleZneOBSUzcFwbKq%2Fnpa5lecNcQ0e8p9ES%2B%2B0jdLZjBt3aq9E%2BjzBZpauXg3eeTGLDXoH57uhAbh9FxLPZ5N4Y90M2xM%2FL5FeJs3UZUArVkGBMG4LtN6%2Fc2evRJiXUthhPXVYbFQ3%2F34GLGffRFEzCJuou%2BBjqkAVORmAbZAE370w%2FLPaQ3l2NpkluOQlRBBc1aHUPN8xC3MWyLa1%2FkFGXleX9wLAmcFoujgvsk67eNQKOTt40bvWn8aENJX%2BNLreCxEhZEdE8loe%2FEqQST79r86bJlt0a1QDSS%2Bguqqq2V2yBh4UMQtBRbueeUqcWNGw26XepGbId1GD%2Bmiv%2BEATLDcRpOgVLDXhc3DoIO380qOWoANZ26f6PgwQrd&X-Amz-Signature=9d31d2b64bfaabf639aa7103ac66d103665b37eb9c22e40c6e5e16176f43dc19&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H6EWG5H%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnFNl5mmMspgxs22g%2BsWPB7ReeK4nWXwViDkhe1ecdtwIhAIk268vdOclOvtj1O%2BOK%2FJDhezd42cTImJDqJhd31h3VKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGDv6uqdsD%2FW3T4W4q3APKZbxwPvNf2PaDbXgPXnI7Tt7L6jDkuhePRKNg9v1eGv2ZUWtqcvIKPsORxfbHEZAMm9FeLIKTOmbhq%2FpwdA1Un3TaqV1q17ORpLZqB3g56Bi638SzkiRfDiGI5%2BD9ecYb4F%2Be7TduhUSCe2P%2FPxHQvWdWc8kgYHkKTVuiyE658PYWjALTCsJKGxy391MWpQYjvUb1VeYyKCqvzlNz2xwrS7HzM1V8vXKKiX7sHTPLehTK8jpNXAFrzVyX8NSaA2G4shrIYs0Jl9kUz6ZN8DSKBGAoHpoVNFsKCT6p9oJgJZhpUpJ04y1xWRN82IKSArtAWsScXmh0DH%2BMdlP%2Fpaqbu2g7o8BM%2Bh%2F3jkDyV8v1jyPSk0Tn%2BxMrnVrQGI59ixV9lykMxheh%2Bweqy0B1EH2cOlJg28UYaXEmI63SFh0qf9LvzOsdy9NM%2FX%2FpXINp7Rne5bxdhIZ%2Fvi3D522RgPacmiqOL7JtOQgtBYi5gleZneOBSUzcFwbKq%2Fnpa5lecNcQ0e8p9ES%2B%2B0jdLZjBt3aq9E%2BjzBZpauXg3eeTGLDXoH57uhAbh9FxLPZ5N4Y90M2xM%2FL5FeJs3UZUArVkGBMG4LtN6%2Fc2evRJiXUthhPXVYbFQ3%2F34GLGffRFEzCJuou%2BBjqkAVORmAbZAE370w%2FLPaQ3l2NpkluOQlRBBc1aHUPN8xC3MWyLa1%2FkFGXleX9wLAmcFoujgvsk67eNQKOTt40bvWn8aENJX%2BNLreCxEhZEdE8loe%2FEqQST79r86bJlt0a1QDSS%2Bguqqq2V2yBh4UMQtBRbueeUqcWNGw26XepGbId1GD%2Bmiv%2BEATLDcRpOgVLDXhc3DoIO380qOWoANZ26f6PgwQrd&X-Amz-Signature=202c8f39617123fe6da05d398d9b24000cddeae5f020ae62319dcce09fb051b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H6EWG5H%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnFNl5mmMspgxs22g%2BsWPB7ReeK4nWXwViDkhe1ecdtwIhAIk268vdOclOvtj1O%2BOK%2FJDhezd42cTImJDqJhd31h3VKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGDv6uqdsD%2FW3T4W4q3APKZbxwPvNf2PaDbXgPXnI7Tt7L6jDkuhePRKNg9v1eGv2ZUWtqcvIKPsORxfbHEZAMm9FeLIKTOmbhq%2FpwdA1Un3TaqV1q17ORpLZqB3g56Bi638SzkiRfDiGI5%2BD9ecYb4F%2Be7TduhUSCe2P%2FPxHQvWdWc8kgYHkKTVuiyE658PYWjALTCsJKGxy391MWpQYjvUb1VeYyKCqvzlNz2xwrS7HzM1V8vXKKiX7sHTPLehTK8jpNXAFrzVyX8NSaA2G4shrIYs0Jl9kUz6ZN8DSKBGAoHpoVNFsKCT6p9oJgJZhpUpJ04y1xWRN82IKSArtAWsScXmh0DH%2BMdlP%2Fpaqbu2g7o8BM%2Bh%2F3jkDyV8v1jyPSk0Tn%2BxMrnVrQGI59ixV9lykMxheh%2Bweqy0B1EH2cOlJg28UYaXEmI63SFh0qf9LvzOsdy9NM%2FX%2FpXINp7Rne5bxdhIZ%2Fvi3D522RgPacmiqOL7JtOQgtBYi5gleZneOBSUzcFwbKq%2Fnpa5lecNcQ0e8p9ES%2B%2B0jdLZjBt3aq9E%2BjzBZpauXg3eeTGLDXoH57uhAbh9FxLPZ5N4Y90M2xM%2FL5FeJs3UZUArVkGBMG4LtN6%2Fc2evRJiXUthhPXVYbFQ3%2F34GLGffRFEzCJuou%2BBjqkAVORmAbZAE370w%2FLPaQ3l2NpkluOQlRBBc1aHUPN8xC3MWyLa1%2FkFGXleX9wLAmcFoujgvsk67eNQKOTt40bvWn8aENJX%2BNLreCxEhZEdE8loe%2FEqQST79r86bJlt0a1QDSS%2Bguqqq2V2yBh4UMQtBRbueeUqcWNGw26XepGbId1GD%2Bmiv%2BEATLDcRpOgVLDXhc3DoIO380qOWoANZ26f6PgwQrd&X-Amz-Signature=d33a52264fbc7f336c4bc7bdebb429e8c0b7173fc604ae467b3c4cb3d8d35cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
