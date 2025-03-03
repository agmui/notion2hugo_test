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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGIAK5Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FEqWPMCucY0e0iBR%2F0fFlVAbjnqibvxXAWPfXziOpEQIgGhAVM7y6pdQZTM%2FvW0skbmMrT361WOI7e%2FIDTEo%2F1Y0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhDEOjTeg4T2FwPnyrcA4lTu6YCQMsu4jYUWG2jX4ouJVe0xPa4XsSstrya6EIavbW2P1cdioEP0P9xhv7gDd%2FXOKX%2B64v3lIIvq53BCCJBgAs2fpaS2hN7qXHVgjowjl0YN3Hx8%2FjQr4hB5diCmQIx9wamuDjN5mhIgiosPV8GYKn8Curh8Syl8d8VBxdBH4kOdVZgt6KwrdOrLgbnQ6j8HlrX%2BzzJjE%2BQ8MjgSQqxFl0Ynos2vzFSlaOyg4WH8Eu2XgheAhvomp9iBzEQt3D95ODGQUO9xdDWQsUTmCCiMNjd6KVpeoNu0LVj6baszntXOynwoKJE4SPQukdIlBpkzvjMYgWU1Yoi2vp5b7WEVjDeVpFeJ2x6we95O9fTIuP74aDN6Xjl81ygUWc8HzH6tfodLhhTvATvA19fq5InLFP4u3OxoGThept5IwnyLjeMnp3mlroDJX4G2vAfYVLfJOulympBi0%2F%2FaDScXdN9IyeovYOH%2FCFirCLOIizc1gzoIgWGNfKcLm9nfFGMgmFXMSDkOW3%2Fv%2FJq%2BWBb1%2B92FPaKOjld8B26yuIhRt7Vt1lZZXLTPPS%2F2w91zlUs0tc%2FlGfOd6cDxprgS9GAcWcwH5AXU97%2FVccDo90w%2FcY4enT9Z2whwvwzo9jNMND1lr4GOqUBDY%2Bm3n5PoJdBvTs8yIxKmQUnWLRqRalXnsuI4L8GgrP3v8irOQbbqT7sGOvMaqASkmcuCalCN1hR%2FDd3HPFD8GzuGjLF0KZewTzjXqvn%2F3vXi5uvpUncKx4ed027t7W9Tm2SyJbg2%2Fhtoj%2FxRpELoKNH%2BKfdmhGOxuRpbDYWsvt9ZQSSHddMFPtwTH8p8ayAJvQqeniqfd%2BJaKgAGqEBYO3KAdsi&X-Amz-Signature=5c6e1d3d5274cea91d51847bb87de2abb75f171560ad4c431887c77246326b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGIAK5Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FEqWPMCucY0e0iBR%2F0fFlVAbjnqibvxXAWPfXziOpEQIgGhAVM7y6pdQZTM%2FvW0skbmMrT361WOI7e%2FIDTEo%2F1Y0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhDEOjTeg4T2FwPnyrcA4lTu6YCQMsu4jYUWG2jX4ouJVe0xPa4XsSstrya6EIavbW2P1cdioEP0P9xhv7gDd%2FXOKX%2B64v3lIIvq53BCCJBgAs2fpaS2hN7qXHVgjowjl0YN3Hx8%2FjQr4hB5diCmQIx9wamuDjN5mhIgiosPV8GYKn8Curh8Syl8d8VBxdBH4kOdVZgt6KwrdOrLgbnQ6j8HlrX%2BzzJjE%2BQ8MjgSQqxFl0Ynos2vzFSlaOyg4WH8Eu2XgheAhvomp9iBzEQt3D95ODGQUO9xdDWQsUTmCCiMNjd6KVpeoNu0LVj6baszntXOynwoKJE4SPQukdIlBpkzvjMYgWU1Yoi2vp5b7WEVjDeVpFeJ2x6we95O9fTIuP74aDN6Xjl81ygUWc8HzH6tfodLhhTvATvA19fq5InLFP4u3OxoGThept5IwnyLjeMnp3mlroDJX4G2vAfYVLfJOulympBi0%2F%2FaDScXdN9IyeovYOH%2FCFirCLOIizc1gzoIgWGNfKcLm9nfFGMgmFXMSDkOW3%2Fv%2FJq%2BWBb1%2B92FPaKOjld8B26yuIhRt7Vt1lZZXLTPPS%2F2w91zlUs0tc%2FlGfOd6cDxprgS9GAcWcwH5AXU97%2FVccDo90w%2FcY4enT9Z2whwvwzo9jNMND1lr4GOqUBDY%2Bm3n5PoJdBvTs8yIxKmQUnWLRqRalXnsuI4L8GgrP3v8irOQbbqT7sGOvMaqASkmcuCalCN1hR%2FDd3HPFD8GzuGjLF0KZewTzjXqvn%2F3vXi5uvpUncKx4ed027t7W9Tm2SyJbg2%2Fhtoj%2FxRpELoKNH%2BKfdmhGOxuRpbDYWsvt9ZQSSHddMFPtwTH8p8ayAJvQqeniqfd%2BJaKgAGqEBYO3KAdsi&X-Amz-Signature=372e01fb88c3c22b66e77475d71baaf7d44663a3bc43d20a6aaff050930f5ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGIAK5Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FEqWPMCucY0e0iBR%2F0fFlVAbjnqibvxXAWPfXziOpEQIgGhAVM7y6pdQZTM%2FvW0skbmMrT361WOI7e%2FIDTEo%2F1Y0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhDEOjTeg4T2FwPnyrcA4lTu6YCQMsu4jYUWG2jX4ouJVe0xPa4XsSstrya6EIavbW2P1cdioEP0P9xhv7gDd%2FXOKX%2B64v3lIIvq53BCCJBgAs2fpaS2hN7qXHVgjowjl0YN3Hx8%2FjQr4hB5diCmQIx9wamuDjN5mhIgiosPV8GYKn8Curh8Syl8d8VBxdBH4kOdVZgt6KwrdOrLgbnQ6j8HlrX%2BzzJjE%2BQ8MjgSQqxFl0Ynos2vzFSlaOyg4WH8Eu2XgheAhvomp9iBzEQt3D95ODGQUO9xdDWQsUTmCCiMNjd6KVpeoNu0LVj6baszntXOynwoKJE4SPQukdIlBpkzvjMYgWU1Yoi2vp5b7WEVjDeVpFeJ2x6we95O9fTIuP74aDN6Xjl81ygUWc8HzH6tfodLhhTvATvA19fq5InLFP4u3OxoGThept5IwnyLjeMnp3mlroDJX4G2vAfYVLfJOulympBi0%2F%2FaDScXdN9IyeovYOH%2FCFirCLOIizc1gzoIgWGNfKcLm9nfFGMgmFXMSDkOW3%2Fv%2FJq%2BWBb1%2B92FPaKOjld8B26yuIhRt7Vt1lZZXLTPPS%2F2w91zlUs0tc%2FlGfOd6cDxprgS9GAcWcwH5AXU97%2FVccDo90w%2FcY4enT9Z2whwvwzo9jNMND1lr4GOqUBDY%2Bm3n5PoJdBvTs8yIxKmQUnWLRqRalXnsuI4L8GgrP3v8irOQbbqT7sGOvMaqASkmcuCalCN1hR%2FDd3HPFD8GzuGjLF0KZewTzjXqvn%2F3vXi5uvpUncKx4ed027t7W9Tm2SyJbg2%2Fhtoj%2FxRpELoKNH%2BKfdmhGOxuRpbDYWsvt9ZQSSHddMFPtwTH8p8ayAJvQqeniqfd%2BJaKgAGqEBYO3KAdsi&X-Amz-Signature=34ab33eda473945128e49b1a0c1522891318f37f42638c7e0e42397b262e874f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
