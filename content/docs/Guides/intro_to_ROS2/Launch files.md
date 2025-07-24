---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADKVO7J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCdotUt00h6%2FEaGVe2uSE2m9%2BgR3FFlZmPbrDQAntzOLwIhANtYToT0zwSnGu1yWTNVpKl2w23Zf8uUeWHk6ia%2FaMguKv8DCDIQABoMNjM3NDIzMTgzODA1IgwZkikwrbPLHrgDjZAq3AMPYKO8DvqkhuXNPXkwU9AZFFjW5I1dz9PioGDbKJJYc%2BXu8ozuaaTOCw%2FNt2xUPlDx6uWm8K27qbCbK0oETP59l4DASXXdxxw%2F%2FbCUYOB4RhhUX%2BN%2Bpa5l7JXxjC0i2Xq2NLMC7ko%2F75DUvmamSEloMdtx8qP%2BLWm7cwQVITLf493S3ci22dI6J4CO0P28RBZ8hsUJuorHk6nLv5xEVQVb1RqVVMBw0ZxVVDY1nm5QRX2k3GVelcTrDPm%2FUFaLkmDsQ55Cvu77mxByMsY%2F4IOV1tU0YqHcGb4a7kph1bI61VM3sWb1yE4jqJkB6t6zvEGFKWw14tuzetFvKYh%2Bc8KY1PP7gHVyK2Wfz6FXomD42OMwAwKrBhonWeCORyQX0ZNCnh4j7pbNwzPxl5SX5mN4z3fpEImtuVaTu8y8eF19P80m0nI8sytcVuhs4jEWpnSYL63y6%2FnZ%2B3bTOyWMxkgwnEG5lhHfDPHhY2wZLgNQE112JlSSkNShQ8XocrDKIRB%2BvC8QFPw%2BJtqB7Yv6H4M6F%2FNYz7M3HIFB5r2MrsdGs1mLcPD1acWGRoJEiZZWKxOw7afIW9JM40pjlZM5%2FnPPQOnqtEhrWtYgCTLTGJNIAgumtQ1RrIaN8%2BPE5DDQ04nEBjqkAcQ03AGXoSnlPc7muPWT1FxgEUhxdz9C8panTndg7GTk04vcnTzK6pgC5mxhDQZkSe6SZB6E5oaG6ZkhqgT%2Brszzc7cfbwBEB9LtGSQE3vawc5hFwuqS3GX2zMJRv5fzN3UVrlkhDonasTQnJoHt6g7bfXBVy4uXVSQ2Bc%2BKY%2B54XWGhQnDfOYMlrh%2BWU9omHrGBHCNbpRJnJXozJY7JVHEBk%2BMQ&X-Amz-Signature=c075c56ed945ca59042e397f96c4f4f2358a24a53f1c50aae116c815e05139d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADKVO7J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCdotUt00h6%2FEaGVe2uSE2m9%2BgR3FFlZmPbrDQAntzOLwIhANtYToT0zwSnGu1yWTNVpKl2w23Zf8uUeWHk6ia%2FaMguKv8DCDIQABoMNjM3NDIzMTgzODA1IgwZkikwrbPLHrgDjZAq3AMPYKO8DvqkhuXNPXkwU9AZFFjW5I1dz9PioGDbKJJYc%2BXu8ozuaaTOCw%2FNt2xUPlDx6uWm8K27qbCbK0oETP59l4DASXXdxxw%2F%2FbCUYOB4RhhUX%2BN%2Bpa5l7JXxjC0i2Xq2NLMC7ko%2F75DUvmamSEloMdtx8qP%2BLWm7cwQVITLf493S3ci22dI6J4CO0P28RBZ8hsUJuorHk6nLv5xEVQVb1RqVVMBw0ZxVVDY1nm5QRX2k3GVelcTrDPm%2FUFaLkmDsQ55Cvu77mxByMsY%2F4IOV1tU0YqHcGb4a7kph1bI61VM3sWb1yE4jqJkB6t6zvEGFKWw14tuzetFvKYh%2Bc8KY1PP7gHVyK2Wfz6FXomD42OMwAwKrBhonWeCORyQX0ZNCnh4j7pbNwzPxl5SX5mN4z3fpEImtuVaTu8y8eF19P80m0nI8sytcVuhs4jEWpnSYL63y6%2FnZ%2B3bTOyWMxkgwnEG5lhHfDPHhY2wZLgNQE112JlSSkNShQ8XocrDKIRB%2BvC8QFPw%2BJtqB7Yv6H4M6F%2FNYz7M3HIFB5r2MrsdGs1mLcPD1acWGRoJEiZZWKxOw7afIW9JM40pjlZM5%2FnPPQOnqtEhrWtYgCTLTGJNIAgumtQ1RrIaN8%2BPE5DDQ04nEBjqkAcQ03AGXoSnlPc7muPWT1FxgEUhxdz9C8panTndg7GTk04vcnTzK6pgC5mxhDQZkSe6SZB6E5oaG6ZkhqgT%2Brszzc7cfbwBEB9LtGSQE3vawc5hFwuqS3GX2zMJRv5fzN3UVrlkhDonasTQnJoHt6g7bfXBVy4uXVSQ2Bc%2BKY%2B54XWGhQnDfOYMlrh%2BWU9omHrGBHCNbpRJnJXozJY7JVHEBk%2BMQ&X-Amz-Signature=f6f37ebcebb2e328e2a5e996aef8c49199110cec783b5a8493061f60538227d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADKVO7J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCdotUt00h6%2FEaGVe2uSE2m9%2BgR3FFlZmPbrDQAntzOLwIhANtYToT0zwSnGu1yWTNVpKl2w23Zf8uUeWHk6ia%2FaMguKv8DCDIQABoMNjM3NDIzMTgzODA1IgwZkikwrbPLHrgDjZAq3AMPYKO8DvqkhuXNPXkwU9AZFFjW5I1dz9PioGDbKJJYc%2BXu8ozuaaTOCw%2FNt2xUPlDx6uWm8K27qbCbK0oETP59l4DASXXdxxw%2F%2FbCUYOB4RhhUX%2BN%2Bpa5l7JXxjC0i2Xq2NLMC7ko%2F75DUvmamSEloMdtx8qP%2BLWm7cwQVITLf493S3ci22dI6J4CO0P28RBZ8hsUJuorHk6nLv5xEVQVb1RqVVMBw0ZxVVDY1nm5QRX2k3GVelcTrDPm%2FUFaLkmDsQ55Cvu77mxByMsY%2F4IOV1tU0YqHcGb4a7kph1bI61VM3sWb1yE4jqJkB6t6zvEGFKWw14tuzetFvKYh%2Bc8KY1PP7gHVyK2Wfz6FXomD42OMwAwKrBhonWeCORyQX0ZNCnh4j7pbNwzPxl5SX5mN4z3fpEImtuVaTu8y8eF19P80m0nI8sytcVuhs4jEWpnSYL63y6%2FnZ%2B3bTOyWMxkgwnEG5lhHfDPHhY2wZLgNQE112JlSSkNShQ8XocrDKIRB%2BvC8QFPw%2BJtqB7Yv6H4M6F%2FNYz7M3HIFB5r2MrsdGs1mLcPD1acWGRoJEiZZWKxOw7afIW9JM40pjlZM5%2FnPPQOnqtEhrWtYgCTLTGJNIAgumtQ1RrIaN8%2BPE5DDQ04nEBjqkAcQ03AGXoSnlPc7muPWT1FxgEUhxdz9C8panTndg7GTk04vcnTzK6pgC5mxhDQZkSe6SZB6E5oaG6ZkhqgT%2Brszzc7cfbwBEB9LtGSQE3vawc5hFwuqS3GX2zMJRv5fzN3UVrlkhDonasTQnJoHt6g7bfXBVy4uXVSQ2Bc%2BKY%2B54XWGhQnDfOYMlrh%2BWU9omHrGBHCNbpRJnJXozJY7JVHEBk%2BMQ&X-Amz-Signature=0ecb83f2d000ca22be56aaaae248d63d98bcba59c0ac50964ea8fd9bfb94ba10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
