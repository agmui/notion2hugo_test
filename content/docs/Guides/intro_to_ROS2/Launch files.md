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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUQME33%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDTxMwvlF5XsqtvD%2BFMTFtwglbl0Drd4niXXCKhMyPPAiA0C%2B7G6o%2Bu%2FJxbKGArJSSLfC9%2BX71kOOyCm0Sw8AbpwiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbZC2W1u8yDoZazwNKtwDOnrD7%2B6Z%2Flw0ez1qMa7CykpwBfKm6rgXLga0et%2B1Fogm9CRjhU6wxwKQo6roIWUHlsuf9eLUf%2B%2FtW2EcNSJA6zTUDg%2BZCcgMLJ3r2nEsCqgLKclBMx6lec%2FUpQEYy%2FeJexE9pSUg6x9JSXUEDe%2FtLtl%2BksvS%2F4t%2By9G4BodCBGa7MCaMzexjWj%2F6N%2FTujUV7nJcpqPs770CKSJsq8QkGfguA0kS%2FJcFgAnvh%2B1vqADuKQQq1AXBzVm8jtLxc73no98B8JdSEyeHQqZrqE9qSxzZMM0L3hgkBs0bZKkEHy9Ik0V2JmZCSlj1nSYWnWBsBzM5o3trxhvBPFPfDphRXB780VRKd6qNAOYppTseKd5zTyJ3AobbznRVJx7OsFnf3WGU%2Fa81ZJSY%2Fehu5IFsjBburrr%2FQUzNuucX4JOEcKPxsUAJAq5x2XCO7uU09At5kb188XcRCSKZbTD2fPy7IUdlpgBj4Yhw5fbOv%2B4c1Sdk801acMtlc%2FZ7zM13yydEUdUGdBg0HdzcmPH2UVi0FK9fUf450CxBzygyWex0HX2YoUOZTGuNtbQqemWCcKl%2Bnc5D5Oic904FfpPD2Xh%2FUibjG9VCXOf30hHbMNKr6vGcNeSzpd0NNr0gZYi8wo8jIwgY6pgGj1BXeiOEVa%2FwaiszweYWEzIBZUs3qPxg8zc87zfPfOnsDtcETfawdvSVOLxnWTsf6j3VVqym8h9WJdWG60Xd5Hvbyd5IL%2BtRTkeRcirNwS%2BIPXzfhzJPiNgoKdtb1%2BlABUiShY%2B0AYsHwgiqMCGcjebNcAjg24ZEdP6I2pm626q4EXwSIS%2F0E3XIbf6bR4KzHFWHBbFHoYMYV2U1wf3pHtcY2ks0%2F&X-Amz-Signature=6cb42088886273c836341ba9f1236be2c775f2c916fb18d3b7ed1d02b7f7456e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUQME33%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDTxMwvlF5XsqtvD%2BFMTFtwglbl0Drd4niXXCKhMyPPAiA0C%2B7G6o%2Bu%2FJxbKGArJSSLfC9%2BX71kOOyCm0Sw8AbpwiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbZC2W1u8yDoZazwNKtwDOnrD7%2B6Z%2Flw0ez1qMa7CykpwBfKm6rgXLga0et%2B1Fogm9CRjhU6wxwKQo6roIWUHlsuf9eLUf%2B%2FtW2EcNSJA6zTUDg%2BZCcgMLJ3r2nEsCqgLKclBMx6lec%2FUpQEYy%2FeJexE9pSUg6x9JSXUEDe%2FtLtl%2BksvS%2F4t%2By9G4BodCBGa7MCaMzexjWj%2F6N%2FTujUV7nJcpqPs770CKSJsq8QkGfguA0kS%2FJcFgAnvh%2B1vqADuKQQq1AXBzVm8jtLxc73no98B8JdSEyeHQqZrqE9qSxzZMM0L3hgkBs0bZKkEHy9Ik0V2JmZCSlj1nSYWnWBsBzM5o3trxhvBPFPfDphRXB780VRKd6qNAOYppTseKd5zTyJ3AobbznRVJx7OsFnf3WGU%2Fa81ZJSY%2Fehu5IFsjBburrr%2FQUzNuucX4JOEcKPxsUAJAq5x2XCO7uU09At5kb188XcRCSKZbTD2fPy7IUdlpgBj4Yhw5fbOv%2B4c1Sdk801acMtlc%2FZ7zM13yydEUdUGdBg0HdzcmPH2UVi0FK9fUf450CxBzygyWex0HX2YoUOZTGuNtbQqemWCcKl%2Bnc5D5Oic904FfpPD2Xh%2FUibjG9VCXOf30hHbMNKr6vGcNeSzpd0NNr0gZYi8wo8jIwgY6pgGj1BXeiOEVa%2FwaiszweYWEzIBZUs3qPxg8zc87zfPfOnsDtcETfawdvSVOLxnWTsf6j3VVqym8h9WJdWG60Xd5Hvbyd5IL%2BtRTkeRcirNwS%2BIPXzfhzJPiNgoKdtb1%2BlABUiShY%2B0AYsHwgiqMCGcjebNcAjg24ZEdP6I2pm626q4EXwSIS%2F0E3XIbf6bR4KzHFWHBbFHoYMYV2U1wf3pHtcY2ks0%2F&X-Amz-Signature=573524f81ba567c4224bb58fe0b64b7dbd2846a7521c0ed302ab7d3b3b3573b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUQME33%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDTxMwvlF5XsqtvD%2BFMTFtwglbl0Drd4niXXCKhMyPPAiA0C%2B7G6o%2Bu%2FJxbKGArJSSLfC9%2BX71kOOyCm0Sw8AbpwiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbZC2W1u8yDoZazwNKtwDOnrD7%2B6Z%2Flw0ez1qMa7CykpwBfKm6rgXLga0et%2B1Fogm9CRjhU6wxwKQo6roIWUHlsuf9eLUf%2B%2FtW2EcNSJA6zTUDg%2BZCcgMLJ3r2nEsCqgLKclBMx6lec%2FUpQEYy%2FeJexE9pSUg6x9JSXUEDe%2FtLtl%2BksvS%2F4t%2By9G4BodCBGa7MCaMzexjWj%2F6N%2FTujUV7nJcpqPs770CKSJsq8QkGfguA0kS%2FJcFgAnvh%2B1vqADuKQQq1AXBzVm8jtLxc73no98B8JdSEyeHQqZrqE9qSxzZMM0L3hgkBs0bZKkEHy9Ik0V2JmZCSlj1nSYWnWBsBzM5o3trxhvBPFPfDphRXB780VRKd6qNAOYppTseKd5zTyJ3AobbznRVJx7OsFnf3WGU%2Fa81ZJSY%2Fehu5IFsjBburrr%2FQUzNuucX4JOEcKPxsUAJAq5x2XCO7uU09At5kb188XcRCSKZbTD2fPy7IUdlpgBj4Yhw5fbOv%2B4c1Sdk801acMtlc%2FZ7zM13yydEUdUGdBg0HdzcmPH2UVi0FK9fUf450CxBzygyWex0HX2YoUOZTGuNtbQqemWCcKl%2Bnc5D5Oic904FfpPD2Xh%2FUibjG9VCXOf30hHbMNKr6vGcNeSzpd0NNr0gZYi8wo8jIwgY6pgGj1BXeiOEVa%2FwaiszweYWEzIBZUs3qPxg8zc87zfPfOnsDtcETfawdvSVOLxnWTsf6j3VVqym8h9WJdWG60Xd5Hvbyd5IL%2BtRTkeRcirNwS%2BIPXzfhzJPiNgoKdtb1%2BlABUiShY%2B0AYsHwgiqMCGcjebNcAjg24ZEdP6I2pm626q4EXwSIS%2F0E3XIbf6bR4KzHFWHBbFHoYMYV2U1wf3pHtcY2ks0%2F&X-Amz-Signature=a8e5c48705aaa6ef98d1c21e56f1cf7bf72295bece0f6157b2784b174409de38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
