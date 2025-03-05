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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVQGZAB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4JPLKqcKRpZUM3Vovo%2BmaiL6xnzCVlY1g1K7AEI6pQAiA%2FKX%2FuQsnB9tu2n2cjLouPR2uVzLfrHeTmUauQ7J3VPSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMW25Q4FlEiDOnLWuLKtwDn99ZelX%2FdAHG%2BVeU09cjuvCrJiQ%2FldYyx7Ltx1zOobVi%2FvmbiJhssq2sY4uggFToeag9h%2FIw9ooreaNcGbJ9RPX%2BZ7DrDhzeYvaT3osOKK2fRXfjY1EgLn%2FZbez8LiHtj1lryORU1CzADTajBczcTfDeWjvZWcJsnLsSp%2B7BCU9BCrsuwlwMPVmveJa744gvD6KidWBNenRPBUb2LFKt%2Bu%2BNozUrsMc2xr1%2Fa%2Fql7YJITqiMplVvlu%2B1i0q63ypU3%2B2gpuFy0XK8zMDIl9R5C1C84SwnoVsIMAiNO7zKogpLPe51jjfdnajm%2FqvRgfAq8Vm5TMH7FjYYrKpHHNDePlY9Cz26ACQZ9bBSzv7YDwFoc7EAa0htisxiS5UoR5W2sYyUhkM5wCN4xNw4psmDOBNprw3HAHdXDY76lDG4hWJ%2BbA1ymVgAUgsxldYABvX4l0x8r94gpkVwR4btE0rSh29hq0OWQnPFkVJhoUp44OcNtUWervCOo%2B%2BuQOd3zLAUMqyJ4%2BnhQ3lHPoaxvgvnIYPcuQdPgYF%2BVZwbD%2B14EPeN5tos9JixhZdGo99FSdRU6yLcYdcP%2BQH7Ey%2FEFll96izYutzu06eW775ISGIZfdUEAkOBwCTA1YQqvv8wy7ihvgY6pgGBXtzrfCce6HkGkUrjkcK9ENfIPIcV0FqtADAodfVcv0CHKM3XjQedMjXD1AJ7VF6B3cOgMS36%2B4xHCzaTdqt%2FMYuQhjd%2F9GGwc3%2Bh55Y8FTx5dW901Xv8MWL%2F4hjfQQVvvSFW9GhXwSpNB6YDbLJfxYIqOxGwXF7uXg%2BluuH0W3LKI7x0gCz8X7cj9Ncx%2Ff6Jggdu2xoaHexgvGGuiitvLbyBWASD&X-Amz-Signature=58cc11a1039368e0b117de6bf52e3a3a4f1e4cb906ebe8768efc6297597ba057&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVQGZAB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4JPLKqcKRpZUM3Vovo%2BmaiL6xnzCVlY1g1K7AEI6pQAiA%2FKX%2FuQsnB9tu2n2cjLouPR2uVzLfrHeTmUauQ7J3VPSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMW25Q4FlEiDOnLWuLKtwDn99ZelX%2FdAHG%2BVeU09cjuvCrJiQ%2FldYyx7Ltx1zOobVi%2FvmbiJhssq2sY4uggFToeag9h%2FIw9ooreaNcGbJ9RPX%2BZ7DrDhzeYvaT3osOKK2fRXfjY1EgLn%2FZbez8LiHtj1lryORU1CzADTajBczcTfDeWjvZWcJsnLsSp%2B7BCU9BCrsuwlwMPVmveJa744gvD6KidWBNenRPBUb2LFKt%2Bu%2BNozUrsMc2xr1%2Fa%2Fql7YJITqiMplVvlu%2B1i0q63ypU3%2B2gpuFy0XK8zMDIl9R5C1C84SwnoVsIMAiNO7zKogpLPe51jjfdnajm%2FqvRgfAq8Vm5TMH7FjYYrKpHHNDePlY9Cz26ACQZ9bBSzv7YDwFoc7EAa0htisxiS5UoR5W2sYyUhkM5wCN4xNw4psmDOBNprw3HAHdXDY76lDG4hWJ%2BbA1ymVgAUgsxldYABvX4l0x8r94gpkVwR4btE0rSh29hq0OWQnPFkVJhoUp44OcNtUWervCOo%2B%2BuQOd3zLAUMqyJ4%2BnhQ3lHPoaxvgvnIYPcuQdPgYF%2BVZwbD%2B14EPeN5tos9JixhZdGo99FSdRU6yLcYdcP%2BQH7Ey%2FEFll96izYutzu06eW775ISGIZfdUEAkOBwCTA1YQqvv8wy7ihvgY6pgGBXtzrfCce6HkGkUrjkcK9ENfIPIcV0FqtADAodfVcv0CHKM3XjQedMjXD1AJ7VF6B3cOgMS36%2B4xHCzaTdqt%2FMYuQhjd%2F9GGwc3%2Bh55Y8FTx5dW901Xv8MWL%2F4hjfQQVvvSFW9GhXwSpNB6YDbLJfxYIqOxGwXF7uXg%2BluuH0W3LKI7x0gCz8X7cj9Ncx%2Ff6Jggdu2xoaHexgvGGuiitvLbyBWASD&X-Amz-Signature=6290b97dd49e32ec3af87669dbb6e60aaae8ab745ae32c228e077667482d1937&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVQGZAB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4JPLKqcKRpZUM3Vovo%2BmaiL6xnzCVlY1g1K7AEI6pQAiA%2FKX%2FuQsnB9tu2n2cjLouPR2uVzLfrHeTmUauQ7J3VPSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMW25Q4FlEiDOnLWuLKtwDn99ZelX%2FdAHG%2BVeU09cjuvCrJiQ%2FldYyx7Ltx1zOobVi%2FvmbiJhssq2sY4uggFToeag9h%2FIw9ooreaNcGbJ9RPX%2BZ7DrDhzeYvaT3osOKK2fRXfjY1EgLn%2FZbez8LiHtj1lryORU1CzADTajBczcTfDeWjvZWcJsnLsSp%2B7BCU9BCrsuwlwMPVmveJa744gvD6KidWBNenRPBUb2LFKt%2Bu%2BNozUrsMc2xr1%2Fa%2Fql7YJITqiMplVvlu%2B1i0q63ypU3%2B2gpuFy0XK8zMDIl9R5C1C84SwnoVsIMAiNO7zKogpLPe51jjfdnajm%2FqvRgfAq8Vm5TMH7FjYYrKpHHNDePlY9Cz26ACQZ9bBSzv7YDwFoc7EAa0htisxiS5UoR5W2sYyUhkM5wCN4xNw4psmDOBNprw3HAHdXDY76lDG4hWJ%2BbA1ymVgAUgsxldYABvX4l0x8r94gpkVwR4btE0rSh29hq0OWQnPFkVJhoUp44OcNtUWervCOo%2B%2BuQOd3zLAUMqyJ4%2BnhQ3lHPoaxvgvnIYPcuQdPgYF%2BVZwbD%2B14EPeN5tos9JixhZdGo99FSdRU6yLcYdcP%2BQH7Ey%2FEFll96izYutzu06eW775ISGIZfdUEAkOBwCTA1YQqvv8wy7ihvgY6pgGBXtzrfCce6HkGkUrjkcK9ENfIPIcV0FqtADAodfVcv0CHKM3XjQedMjXD1AJ7VF6B3cOgMS36%2B4xHCzaTdqt%2FMYuQhjd%2F9GGwc3%2Bh55Y8FTx5dW901Xv8MWL%2F4hjfQQVvvSFW9GhXwSpNB6YDbLJfxYIqOxGwXF7uXg%2BluuH0W3LKI7x0gCz8X7cj9Ncx%2Ff6Jggdu2xoaHexgvGGuiitvLbyBWASD&X-Amz-Signature=a684eb0ded3b5dd310abcbc93aacf19a9e1cb31a9393ed1baea7a58258fdbac3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
