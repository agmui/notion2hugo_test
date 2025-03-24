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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFCKKDN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy%2BTVgMyszXRaoXXHYk4vQqDXFkaq3DNjguA0XB3PDAIhAM5JGhcNjMaDb%2Byj%2FB%2FiCpN4ZVd6o5FtTG7fLZVTy678KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ3dTEZx8p5DCJz9Uq3AO5sX%2BjUE46IWKl0ACA1avgPO2UYEB6uINfUuaDTQj9jgsJX7ecYZbZ6qnaopK1r0y%2F0QWmFQCMLPBruorrUicPAj5SNzNzLEZF%2ByLHEw1QSJjuXmTiCaEOK7Dt%2FNO6cCjIhxTBjyn43%2BbliUbxudTeZw9Uzoc48dGXl1s91KPrB%2BufW8Nj72gGvbr7OEMTkRwo7j8O0xquHuKhJ230P6CDwnxfxjekD61%2FDCXY8h%2B1DDzQNIbo9AvMS%2Fk3GyuBN3w4hC7yLXanfHa3EIRNTGsE1jgTeIZ19Kc0MVQxhE6H2dSK4LgGnF2L2UXWUU4nTvvXi5hl4f9JPTBadVvDxUxzdHcvA0foLEOmVKDmJGKMwoe69fKwSijHLyVMxHg0gmHRRyRWr5Phazct8WHqW9Nl4%2BzO9M5LPA39W5x%2FbDlzSTgkzATC1RpvBCApiU7p%2B4dOd6PXHaNnNCqSPAKhfJ0fvICZYYdaHJgLlSHiIwOZGtGpuHF%2FiO%2BnPqGtIhHqa%2B5p3TkFmdJ%2B%2FSJ%2Fqwtx9of6kSfJE2FA8fXO%2FjrXVT%2Bi2Ut1wmzz4tISYy9wXPcFjJqfnEh4Xhy1gSByQwsKzF%2FYqcjtNDpPoweci%2F8ZH%2BZB8gd5jXbe%2Fd8Dqcz0jTDdvoW%2FBjqkAf3aDBcADu9Q90RCo%2BvlgnXjqmU4JzCI4BUFz9336irtaehzuGsQJLT9gbnOvw%2Bpo6ElYUOIPmmZzBW9icgvExWvIzYHysZOUyxP8NmsN4oaLmq6dSXgUdG2FNQexzZ2qtjg1nrdZKwbcCRsrNXU0LtHBboowNrDgsltiFJg5DGWAY%2FVxOjA9z83oj79B4YZetI3mpT7bXaBj8AEJyT6UFMhOQy1&X-Amz-Signature=de1b83cea703f8c133c06989859919e983590a20669def48933682d452d0f1e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFCKKDN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy%2BTVgMyszXRaoXXHYk4vQqDXFkaq3DNjguA0XB3PDAIhAM5JGhcNjMaDb%2Byj%2FB%2FiCpN4ZVd6o5FtTG7fLZVTy678KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ3dTEZx8p5DCJz9Uq3AO5sX%2BjUE46IWKl0ACA1avgPO2UYEB6uINfUuaDTQj9jgsJX7ecYZbZ6qnaopK1r0y%2F0QWmFQCMLPBruorrUicPAj5SNzNzLEZF%2ByLHEw1QSJjuXmTiCaEOK7Dt%2FNO6cCjIhxTBjyn43%2BbliUbxudTeZw9Uzoc48dGXl1s91KPrB%2BufW8Nj72gGvbr7OEMTkRwo7j8O0xquHuKhJ230P6CDwnxfxjekD61%2FDCXY8h%2B1DDzQNIbo9AvMS%2Fk3GyuBN3w4hC7yLXanfHa3EIRNTGsE1jgTeIZ19Kc0MVQxhE6H2dSK4LgGnF2L2UXWUU4nTvvXi5hl4f9JPTBadVvDxUxzdHcvA0foLEOmVKDmJGKMwoe69fKwSijHLyVMxHg0gmHRRyRWr5Phazct8WHqW9Nl4%2BzO9M5LPA39W5x%2FbDlzSTgkzATC1RpvBCApiU7p%2B4dOd6PXHaNnNCqSPAKhfJ0fvICZYYdaHJgLlSHiIwOZGtGpuHF%2FiO%2BnPqGtIhHqa%2B5p3TkFmdJ%2B%2FSJ%2Fqwtx9of6kSfJE2FA8fXO%2FjrXVT%2Bi2Ut1wmzz4tISYy9wXPcFjJqfnEh4Xhy1gSByQwsKzF%2FYqcjtNDpPoweci%2F8ZH%2BZB8gd5jXbe%2Fd8Dqcz0jTDdvoW%2FBjqkAf3aDBcADu9Q90RCo%2BvlgnXjqmU4JzCI4BUFz9336irtaehzuGsQJLT9gbnOvw%2Bpo6ElYUOIPmmZzBW9icgvExWvIzYHysZOUyxP8NmsN4oaLmq6dSXgUdG2FNQexzZ2qtjg1nrdZKwbcCRsrNXU0LtHBboowNrDgsltiFJg5DGWAY%2FVxOjA9z83oj79B4YZetI3mpT7bXaBj8AEJyT6UFMhOQy1&X-Amz-Signature=b9f4112de6c88abb098c180562fd12797bd87aee7e534a0ec6c74add63ddd7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFCKKDN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsy%2BTVgMyszXRaoXXHYk4vQqDXFkaq3DNjguA0XB3PDAIhAM5JGhcNjMaDb%2Byj%2FB%2FiCpN4ZVd6o5FtTG7fLZVTy678KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ3dTEZx8p5DCJz9Uq3AO5sX%2BjUE46IWKl0ACA1avgPO2UYEB6uINfUuaDTQj9jgsJX7ecYZbZ6qnaopK1r0y%2F0QWmFQCMLPBruorrUicPAj5SNzNzLEZF%2ByLHEw1QSJjuXmTiCaEOK7Dt%2FNO6cCjIhxTBjyn43%2BbliUbxudTeZw9Uzoc48dGXl1s91KPrB%2BufW8Nj72gGvbr7OEMTkRwo7j8O0xquHuKhJ230P6CDwnxfxjekD61%2FDCXY8h%2B1DDzQNIbo9AvMS%2Fk3GyuBN3w4hC7yLXanfHa3EIRNTGsE1jgTeIZ19Kc0MVQxhE6H2dSK4LgGnF2L2UXWUU4nTvvXi5hl4f9JPTBadVvDxUxzdHcvA0foLEOmVKDmJGKMwoe69fKwSijHLyVMxHg0gmHRRyRWr5Phazct8WHqW9Nl4%2BzO9M5LPA39W5x%2FbDlzSTgkzATC1RpvBCApiU7p%2B4dOd6PXHaNnNCqSPAKhfJ0fvICZYYdaHJgLlSHiIwOZGtGpuHF%2FiO%2BnPqGtIhHqa%2B5p3TkFmdJ%2B%2FSJ%2Fqwtx9of6kSfJE2FA8fXO%2FjrXVT%2Bi2Ut1wmzz4tISYy9wXPcFjJqfnEh4Xhy1gSByQwsKzF%2FYqcjtNDpPoweci%2F8ZH%2BZB8gd5jXbe%2Fd8Dqcz0jTDdvoW%2FBjqkAf3aDBcADu9Q90RCo%2BvlgnXjqmU4JzCI4BUFz9336irtaehzuGsQJLT9gbnOvw%2Bpo6ElYUOIPmmZzBW9icgvExWvIzYHysZOUyxP8NmsN4oaLmq6dSXgUdG2FNQexzZ2qtjg1nrdZKwbcCRsrNXU0LtHBboowNrDgsltiFJg5DGWAY%2FVxOjA9z83oj79B4YZetI3mpT7bXaBj8AEJyT6UFMhOQy1&X-Amz-Signature=e2330791cb3459fe551efbf1b67078d08e5614d147f4855e9ba2c630065f278a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
