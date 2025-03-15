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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3WUPY3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC77XqVYS0H2Qoeu4QcVCX27lpDQjNBaBGnvn3nehcoLQIhAJ5tsBFYLxEuLRh3fqstbgfI1%2FNAaWTEOCg3ad%2FJBQKtKv8DCBAQABoMNjM3NDIzMTgzODA1Igw3473qCgagpqyMnLYq3ANJ0D%2Bj0zjrv5VcQbedKwNbX85UhDIo4KbRZ9qt9LhBBMjeAfdY5uXgiGdM9TiH1tde5BMhuawFTuSvMJcNrQEyu3R%2F2DNGKe9otVZBrEmD1qLIejOm7CCjdS1dAMKAJ5ZFFBO8UBtkxO7%2FsTWdtTh9qh978gLrN3jrMMGiCI18Zp3IgU9%2Bpvo4yeGAY6KeLvDEwOIgwOC34CYo2teC%2F5IWQDJ3mPK5Pa1VR6h%2Fe8DZYeju5WVTIHBzUZq%2B3ildjIhBjTTiEkbwUSeAJW0CI9K6iHRV1wtCrDoU9Cb5a1BYQTjGRVTb7Iet2IKTMFji8YwLVt%2BOHpq1v%2FmsttFg5XguX%2FA34dShwJMymMphXS608T7xGkzPFez6uoUTuS05yxDqtzH%2BmdMbjJU2FX1kaLnKBqlBB95ecG60XU81FRq8iK9paN094LmL5R15p1OpneO%2ByIu48rH1kE7FTZvcKrxX%2FcqCjBn%2FnH1PHlR%2BbFIvYFwHYv9dvI7HbmYaoydD1Q4r21yfYmC3x7b%2BNnLU7sbUpyIbV1S4VtOi5uAaLLanuPZh8%2FhnmPg0LwMCpeOqRJTkoXjf%2F%2BQQ0DII13zw9E7LHWWGV99XY4VT6P91RoW3fjwFU4CK1e07mcs%2FNzCxxNS%2BBjqkAb%2BxIhDYDUQ3gI6cpxCLuqn9H47zpeABF8H6wvW18ktb9hfuHChX%2BECuO3Ftjqt5UUfnx%2B7%2B3XMZduaIrRE6IQddOG7jCQ62Mgy7fVE8%2FUwGi5ndleyMrr%2BTlCN49%2FfxxHBiuQRhEw3aVDaosDt5jK0tpJ9W5CMinbLfUEbPHOGuyHcOD0%2FOMHkgbPqoj3R8FkYg2QkGr0qMjZTJrKu2tmVvso0k&X-Amz-Signature=6b611ada7c0292c5ea984383884eff28e01c2d12b65a4c2c690182194eb6939d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3WUPY3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC77XqVYS0H2Qoeu4QcVCX27lpDQjNBaBGnvn3nehcoLQIhAJ5tsBFYLxEuLRh3fqstbgfI1%2FNAaWTEOCg3ad%2FJBQKtKv8DCBAQABoMNjM3NDIzMTgzODA1Igw3473qCgagpqyMnLYq3ANJ0D%2Bj0zjrv5VcQbedKwNbX85UhDIo4KbRZ9qt9LhBBMjeAfdY5uXgiGdM9TiH1tde5BMhuawFTuSvMJcNrQEyu3R%2F2DNGKe9otVZBrEmD1qLIejOm7CCjdS1dAMKAJ5ZFFBO8UBtkxO7%2FsTWdtTh9qh978gLrN3jrMMGiCI18Zp3IgU9%2Bpvo4yeGAY6KeLvDEwOIgwOC34CYo2teC%2F5IWQDJ3mPK5Pa1VR6h%2Fe8DZYeju5WVTIHBzUZq%2B3ildjIhBjTTiEkbwUSeAJW0CI9K6iHRV1wtCrDoU9Cb5a1BYQTjGRVTb7Iet2IKTMFji8YwLVt%2BOHpq1v%2FmsttFg5XguX%2FA34dShwJMymMphXS608T7xGkzPFez6uoUTuS05yxDqtzH%2BmdMbjJU2FX1kaLnKBqlBB95ecG60XU81FRq8iK9paN094LmL5R15p1OpneO%2ByIu48rH1kE7FTZvcKrxX%2FcqCjBn%2FnH1PHlR%2BbFIvYFwHYv9dvI7HbmYaoydD1Q4r21yfYmC3x7b%2BNnLU7sbUpyIbV1S4VtOi5uAaLLanuPZh8%2FhnmPg0LwMCpeOqRJTkoXjf%2F%2BQQ0DII13zw9E7LHWWGV99XY4VT6P91RoW3fjwFU4CK1e07mcs%2FNzCxxNS%2BBjqkAb%2BxIhDYDUQ3gI6cpxCLuqn9H47zpeABF8H6wvW18ktb9hfuHChX%2BECuO3Ftjqt5UUfnx%2B7%2B3XMZduaIrRE6IQddOG7jCQ62Mgy7fVE8%2FUwGi5ndleyMrr%2BTlCN49%2FfxxHBiuQRhEw3aVDaosDt5jK0tpJ9W5CMinbLfUEbPHOGuyHcOD0%2FOMHkgbPqoj3R8FkYg2QkGr0qMjZTJrKu2tmVvso0k&X-Amz-Signature=4d3a9fdb47711210aef3d66f186ba4975a8175697712946d7866f0a9560bdde0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3WUPY3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC77XqVYS0H2Qoeu4QcVCX27lpDQjNBaBGnvn3nehcoLQIhAJ5tsBFYLxEuLRh3fqstbgfI1%2FNAaWTEOCg3ad%2FJBQKtKv8DCBAQABoMNjM3NDIzMTgzODA1Igw3473qCgagpqyMnLYq3ANJ0D%2Bj0zjrv5VcQbedKwNbX85UhDIo4KbRZ9qt9LhBBMjeAfdY5uXgiGdM9TiH1tde5BMhuawFTuSvMJcNrQEyu3R%2F2DNGKe9otVZBrEmD1qLIejOm7CCjdS1dAMKAJ5ZFFBO8UBtkxO7%2FsTWdtTh9qh978gLrN3jrMMGiCI18Zp3IgU9%2Bpvo4yeGAY6KeLvDEwOIgwOC34CYo2teC%2F5IWQDJ3mPK5Pa1VR6h%2Fe8DZYeju5WVTIHBzUZq%2B3ildjIhBjTTiEkbwUSeAJW0CI9K6iHRV1wtCrDoU9Cb5a1BYQTjGRVTb7Iet2IKTMFji8YwLVt%2BOHpq1v%2FmsttFg5XguX%2FA34dShwJMymMphXS608T7xGkzPFez6uoUTuS05yxDqtzH%2BmdMbjJU2FX1kaLnKBqlBB95ecG60XU81FRq8iK9paN094LmL5R15p1OpneO%2ByIu48rH1kE7FTZvcKrxX%2FcqCjBn%2FnH1PHlR%2BbFIvYFwHYv9dvI7HbmYaoydD1Q4r21yfYmC3x7b%2BNnLU7sbUpyIbV1S4VtOi5uAaLLanuPZh8%2FhnmPg0LwMCpeOqRJTkoXjf%2F%2BQQ0DII13zw9E7LHWWGV99XY4VT6P91RoW3fjwFU4CK1e07mcs%2FNzCxxNS%2BBjqkAb%2BxIhDYDUQ3gI6cpxCLuqn9H47zpeABF8H6wvW18ktb9hfuHChX%2BECuO3Ftjqt5UUfnx%2B7%2B3XMZduaIrRE6IQddOG7jCQ62Mgy7fVE8%2FUwGi5ndleyMrr%2BTlCN49%2FfxxHBiuQRhEw3aVDaosDt5jK0tpJ9W5CMinbLfUEbPHOGuyHcOD0%2FOMHkgbPqoj3R8FkYg2QkGr0qMjZTJrKu2tmVvso0k&X-Amz-Signature=1fc9a6de507d9a6e9c1013c3b6422529dc8c2fe633190d4c9144f1ee64f239c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
