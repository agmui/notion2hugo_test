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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYTNTZ4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDiuOWQn%2BF5reZIcm2cOUGiu3zgWQ%2FQ16NtL1jNbK7qKQIgL%2BWFc5Z7U7FLj2IArZNfTFMBFA3jlvO6535tExyQczwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ5ezL8VJMHW%2B5jaBircA6ATlaP284TVWaAF5KcrNI%2FalRZV67WFlNYDWPAf%2FYZzwJcFeNuMkCwP7wvxUUJv9HN6wAlCrZhSandaG602h0yrdpYvflE8587zyqYwbu%2B6um7Xbc90KESQOUJlWDbOHyd9VrC5ynfKRF%2BUBSTgqrrEubWLIX91Lb8r%2FyKMNTXzP3KXH4Wt0S21APN88WCHn3DAUpHs6RzYl1jMdlMvgk2T0gP6OwJG7c117Uv%2FMtJwFApFmZcChHOLO6SzpFv564RMYipr%2FV%2Bs82doyOYXCL2KFpQlNFuT%2BaNkRC%2F3FWZ%2Bjf2ocGzSOYVZOrzSfeXAKZw4pDaCqei609yUsy4GpsJicOYV2sTnTgEQz3WjzjVEArK83gMzdzmLEZjIxgEf8tIYTw4c2ZYctoxvJqjTFI1JSk5dQJxVpQL6IW8PJJurQT7AC4nybqVs3qoyuLY9ow5NVZ5%2BfE1ugE32PoMYlDHTMbQ5guwU9zAEwLA8z6jZ7fN4aDDj3gHf65DYeIvIlCh1me2K%2BN15UxEoJVvICmf0Lb9tPjQF8iFJ5GGrhfh1999059TkiGnB2%2FLOAkXhY6jcC2Dj7Pjmn5CBeE7%2BmyfQWBdmlfJogzAiTsW7iyFqG%2Fv%2B5E3bX9jfylaLMMC1jL0GOqUBZtheDi%2Bygkh1Jpxux5oYRsKoMGAA7ClZ4AimrVZKIJVOIwA3LzPzUEnMBN%2FzzXrLG5f%2BAOEhk7HMnbBgF7Cy%2BMpLVpz3BKU%2BA2tW7bEjYSpMDYde3iaQA1RuDWvs8cXEe8nCGVVm%2Ba5BrJkRexPbNH6MfR%2BGLGHXSQuCuh4E9YesMhY9xYXLptfvYo1GtMfl0IEGND1v9Zoo8mxvBdwsMajSDlUy&X-Amz-Signature=e781e88f8124e240531d44bb586b6f3a979c15db23eb598d087f9c8bce53ae5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYTNTZ4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDiuOWQn%2BF5reZIcm2cOUGiu3zgWQ%2FQ16NtL1jNbK7qKQIgL%2BWFc5Z7U7FLj2IArZNfTFMBFA3jlvO6535tExyQczwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ5ezL8VJMHW%2B5jaBircA6ATlaP284TVWaAF5KcrNI%2FalRZV67WFlNYDWPAf%2FYZzwJcFeNuMkCwP7wvxUUJv9HN6wAlCrZhSandaG602h0yrdpYvflE8587zyqYwbu%2B6um7Xbc90KESQOUJlWDbOHyd9VrC5ynfKRF%2BUBSTgqrrEubWLIX91Lb8r%2FyKMNTXzP3KXH4Wt0S21APN88WCHn3DAUpHs6RzYl1jMdlMvgk2T0gP6OwJG7c117Uv%2FMtJwFApFmZcChHOLO6SzpFv564RMYipr%2FV%2Bs82doyOYXCL2KFpQlNFuT%2BaNkRC%2F3FWZ%2Bjf2ocGzSOYVZOrzSfeXAKZw4pDaCqei609yUsy4GpsJicOYV2sTnTgEQz3WjzjVEArK83gMzdzmLEZjIxgEf8tIYTw4c2ZYctoxvJqjTFI1JSk5dQJxVpQL6IW8PJJurQT7AC4nybqVs3qoyuLY9ow5NVZ5%2BfE1ugE32PoMYlDHTMbQ5guwU9zAEwLA8z6jZ7fN4aDDj3gHf65DYeIvIlCh1me2K%2BN15UxEoJVvICmf0Lb9tPjQF8iFJ5GGrhfh1999059TkiGnB2%2FLOAkXhY6jcC2Dj7Pjmn5CBeE7%2BmyfQWBdmlfJogzAiTsW7iyFqG%2Fv%2B5E3bX9jfylaLMMC1jL0GOqUBZtheDi%2Bygkh1Jpxux5oYRsKoMGAA7ClZ4AimrVZKIJVOIwA3LzPzUEnMBN%2FzzXrLG5f%2BAOEhk7HMnbBgF7Cy%2BMpLVpz3BKU%2BA2tW7bEjYSpMDYde3iaQA1RuDWvs8cXEe8nCGVVm%2Ba5BrJkRexPbNH6MfR%2BGLGHXSQuCuh4E9YesMhY9xYXLptfvYo1GtMfl0IEGND1v9Zoo8mxvBdwsMajSDlUy&X-Amz-Signature=ce8b4f7a3b530e70aed6b3789cc6e803b9824e723bdcc4ddd10093f3921ee930&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYTNTZ4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDiuOWQn%2BF5reZIcm2cOUGiu3zgWQ%2FQ16NtL1jNbK7qKQIgL%2BWFc5Z7U7FLj2IArZNfTFMBFA3jlvO6535tExyQczwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ5ezL8VJMHW%2B5jaBircA6ATlaP284TVWaAF5KcrNI%2FalRZV67WFlNYDWPAf%2FYZzwJcFeNuMkCwP7wvxUUJv9HN6wAlCrZhSandaG602h0yrdpYvflE8587zyqYwbu%2B6um7Xbc90KESQOUJlWDbOHyd9VrC5ynfKRF%2BUBSTgqrrEubWLIX91Lb8r%2FyKMNTXzP3KXH4Wt0S21APN88WCHn3DAUpHs6RzYl1jMdlMvgk2T0gP6OwJG7c117Uv%2FMtJwFApFmZcChHOLO6SzpFv564RMYipr%2FV%2Bs82doyOYXCL2KFpQlNFuT%2BaNkRC%2F3FWZ%2Bjf2ocGzSOYVZOrzSfeXAKZw4pDaCqei609yUsy4GpsJicOYV2sTnTgEQz3WjzjVEArK83gMzdzmLEZjIxgEf8tIYTw4c2ZYctoxvJqjTFI1JSk5dQJxVpQL6IW8PJJurQT7AC4nybqVs3qoyuLY9ow5NVZ5%2BfE1ugE32PoMYlDHTMbQ5guwU9zAEwLA8z6jZ7fN4aDDj3gHf65DYeIvIlCh1me2K%2BN15UxEoJVvICmf0Lb9tPjQF8iFJ5GGrhfh1999059TkiGnB2%2FLOAkXhY6jcC2Dj7Pjmn5CBeE7%2BmyfQWBdmlfJogzAiTsW7iyFqG%2Fv%2B5E3bX9jfylaLMMC1jL0GOqUBZtheDi%2Bygkh1Jpxux5oYRsKoMGAA7ClZ4AimrVZKIJVOIwA3LzPzUEnMBN%2FzzXrLG5f%2BAOEhk7HMnbBgF7Cy%2BMpLVpz3BKU%2BA2tW7bEjYSpMDYde3iaQA1RuDWvs8cXEe8nCGVVm%2Ba5BrJkRexPbNH6MfR%2BGLGHXSQuCuh4E9YesMhY9xYXLptfvYo1GtMfl0IEGND1v9Zoo8mxvBdwsMajSDlUy&X-Amz-Signature=e2b2f1e812e0bdb48a1065d58eadfee7b2b8c1d83913db6d4ec337eaf2b38ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
