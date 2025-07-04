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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPVVQWZ4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIB0Lx4M8rowF8xvdqVsmDy402BHcJlvIwaCRRjGMNJ8CAiAphkS1REnq6yBSPOGFliee5FwYSrgU4uExwgV30XJPUSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkRVwBOTXjFHS2DpqKtwDGgN34gR8qdmFwY%2FJ3sYYwnUBPe5J8zvz502d%2BXaFpfJJE2VSd1QZKt%2FoyZK4FFPzQ35Q1e5QBfXNbwBfE20vVDrBgnT006TAhDB%2Fe5LzsKqY%2FwfG07Jc3mSElET4wgCaRdIAHcdhD42FvDSJHnoXGZlPhabMTpCl4c0GVIQS6g3%2FmuhqZRTkWOPmO1kLv1XqAPNN0CmUcXq0JtMzMcSMrh%2F3bI5YRkzW7qS%2B390FaXu9cAw7e3rLPA7jxZkKewrRrTJRcX30b6ZxkUF0GiGp3ZIjQnss4ApCTGWvs62laWyCg8Hbo6fr7T0oxOOfn0EA%2BjzcibQgYSsMhPkvu7dgNjve1ofqQplhxOyhh7lyTwRC3IJKMYMZR0y%2FJmMKskiS%2Fm4qN4EyFtcU%2FGND%2F%2FuqiCAjJJjXX6y%2Ftyb%2F6XoMxNl1Zb%2BGbdqyIvjRsPrBgL6IvQSWJXy%2F4y5VYmnaF4jvzltl1VNjQhJEN0Z%2FuytvseOzrNXiXccTfyQC2gtQyRmGg2T6bq3qBtt7XBUoRQozLafDv9DH51TIKM6vDFze5Ah0eqU6b6pgQ8jhfLZ6hLUPo9ThRhMEtoUNQbpHe%2BntbepKiis3wbj5Fo5q87Zw9dg6N2EMbwVcjcDGM8Qw2OegwwY6pgGVnfKBxDs%2BhvHTt7tx9%2BuWf5L02HundTu1F0NfIjD3cJP9fyJovC0IfWLYcAvH8bHObzNKbzhOQdYhVvI2GGVheOQOrFXsT8rNtfdnkU%2Bastcrb3sSDH1O8jC%2Fbw3p%2FRTSmii8U6SMw%2BQGgWkaSxv8iRbr1zKl0P0NlJL4HMkflquwOpPQ7pMG6%2Bq%2FsYCDsvpaxCioKFXId4ZtxgDBcp9eIB6J1Fek&X-Amz-Signature=d2294eee9ceafbbd8b936adf60d6dedad76d2c10c8d1aa2544f79257d89a9398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPVVQWZ4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIB0Lx4M8rowF8xvdqVsmDy402BHcJlvIwaCRRjGMNJ8CAiAphkS1REnq6yBSPOGFliee5FwYSrgU4uExwgV30XJPUSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkRVwBOTXjFHS2DpqKtwDGgN34gR8qdmFwY%2FJ3sYYwnUBPe5J8zvz502d%2BXaFpfJJE2VSd1QZKt%2FoyZK4FFPzQ35Q1e5QBfXNbwBfE20vVDrBgnT006TAhDB%2Fe5LzsKqY%2FwfG07Jc3mSElET4wgCaRdIAHcdhD42FvDSJHnoXGZlPhabMTpCl4c0GVIQS6g3%2FmuhqZRTkWOPmO1kLv1XqAPNN0CmUcXq0JtMzMcSMrh%2F3bI5YRkzW7qS%2B390FaXu9cAw7e3rLPA7jxZkKewrRrTJRcX30b6ZxkUF0GiGp3ZIjQnss4ApCTGWvs62laWyCg8Hbo6fr7T0oxOOfn0EA%2BjzcibQgYSsMhPkvu7dgNjve1ofqQplhxOyhh7lyTwRC3IJKMYMZR0y%2FJmMKskiS%2Fm4qN4EyFtcU%2FGND%2F%2FuqiCAjJJjXX6y%2Ftyb%2F6XoMxNl1Zb%2BGbdqyIvjRsPrBgL6IvQSWJXy%2F4y5VYmnaF4jvzltl1VNjQhJEN0Z%2FuytvseOzrNXiXccTfyQC2gtQyRmGg2T6bq3qBtt7XBUoRQozLafDv9DH51TIKM6vDFze5Ah0eqU6b6pgQ8jhfLZ6hLUPo9ThRhMEtoUNQbpHe%2BntbepKiis3wbj5Fo5q87Zw9dg6N2EMbwVcjcDGM8Qw2OegwwY6pgGVnfKBxDs%2BhvHTt7tx9%2BuWf5L02HundTu1F0NfIjD3cJP9fyJovC0IfWLYcAvH8bHObzNKbzhOQdYhVvI2GGVheOQOrFXsT8rNtfdnkU%2Bastcrb3sSDH1O8jC%2Fbw3p%2FRTSmii8U6SMw%2BQGgWkaSxv8iRbr1zKl0P0NlJL4HMkflquwOpPQ7pMG6%2Bq%2FsYCDsvpaxCioKFXId4ZtxgDBcp9eIB6J1Fek&X-Amz-Signature=acd4eeada05d1e38a03f12f78bbb286ca224c0ea8176544e23d43202920d3750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPVVQWZ4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIB0Lx4M8rowF8xvdqVsmDy402BHcJlvIwaCRRjGMNJ8CAiAphkS1REnq6yBSPOGFliee5FwYSrgU4uExwgV30XJPUSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMkRVwBOTXjFHS2DpqKtwDGgN34gR8qdmFwY%2FJ3sYYwnUBPe5J8zvz502d%2BXaFpfJJE2VSd1QZKt%2FoyZK4FFPzQ35Q1e5QBfXNbwBfE20vVDrBgnT006TAhDB%2Fe5LzsKqY%2FwfG07Jc3mSElET4wgCaRdIAHcdhD42FvDSJHnoXGZlPhabMTpCl4c0GVIQS6g3%2FmuhqZRTkWOPmO1kLv1XqAPNN0CmUcXq0JtMzMcSMrh%2F3bI5YRkzW7qS%2B390FaXu9cAw7e3rLPA7jxZkKewrRrTJRcX30b6ZxkUF0GiGp3ZIjQnss4ApCTGWvs62laWyCg8Hbo6fr7T0oxOOfn0EA%2BjzcibQgYSsMhPkvu7dgNjve1ofqQplhxOyhh7lyTwRC3IJKMYMZR0y%2FJmMKskiS%2Fm4qN4EyFtcU%2FGND%2F%2FuqiCAjJJjXX6y%2Ftyb%2F6XoMxNl1Zb%2BGbdqyIvjRsPrBgL6IvQSWJXy%2F4y5VYmnaF4jvzltl1VNjQhJEN0Z%2FuytvseOzrNXiXccTfyQC2gtQyRmGg2T6bq3qBtt7XBUoRQozLafDv9DH51TIKM6vDFze5Ah0eqU6b6pgQ8jhfLZ6hLUPo9ThRhMEtoUNQbpHe%2BntbepKiis3wbj5Fo5q87Zw9dg6N2EMbwVcjcDGM8Qw2OegwwY6pgGVnfKBxDs%2BhvHTt7tx9%2BuWf5L02HundTu1F0NfIjD3cJP9fyJovC0IfWLYcAvH8bHObzNKbzhOQdYhVvI2GGVheOQOrFXsT8rNtfdnkU%2Bastcrb3sSDH1O8jC%2Fbw3p%2FRTSmii8U6SMw%2BQGgWkaSxv8iRbr1zKl0P0NlJL4HMkflquwOpPQ7pMG6%2Bq%2FsYCDsvpaxCioKFXId4ZtxgDBcp9eIB6J1Fek&X-Amz-Signature=a6c81e86b5c276a30d0d2d0aaa816de1bcbe81a6edfb32f900d5bed3f381b8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
