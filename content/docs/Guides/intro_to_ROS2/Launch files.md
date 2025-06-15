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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STTOZEOS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDXc2eaHXfE8hc%2F%2BeFtXyAtfkbZAZgUNtINePEpLvgrDgIgbVQjhRmJHA1XedaK2%2FbjpxGrnThLMULKOD%2BtMnDMcZUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDMe1NEZVHxDMy4fttCrcA5s1BdocMUesRhbyy9FE2JdC9jKQvTnNqP6dCPZYXi1%2BcaxEPf60aYUVf%2BIEQBZWnLDdcDpPK9eEgNM%2BRwFVaz4N0WHPP7r5Agt6gmH6YGyckKzlUShFZYWgYFqCwMIZNbGKFKy2YuD9lIp%2F%2FVN10dY7%2BYJZBwx2FPJAVXRtHcij2Q8Yk0rVSXTbk6e9hcZgckNBe%2F2KjEnX3bMnJEYzRm0RovhtXzSrP9mwFrAgxSYPrTJYxosbHITb7EcRpjEBlfEIiRMO4t3mj%2FIU70XNHNLrvJwuqEG3VPr9YZr9kPUcaQ1uENvtf%2FlB5xIpdUMqgqKeZFBZJf1KGVmLShg%2BqSqC%2BKhwiocWJ6yZ1QViLGQ8A0%2BVrDUFLqanbGB5PiAUHEzJ28cEft2i4pJPw7%2FUpSwQ1%2BfAxmSYrE41lvCW%2FTK%2BhAVOoXUXf3LR4UYIbhZ34UCyrsn5jEvogkwlMKpaqQyFVDbkn7Z9RZRXawe3VkkDyZtdu6ppuVQWRh8SKEhzwgcUXi1A7NzV1NS0rgCxVhTiC2r3RHvBPeCxiySdHGMFGW23BbLiVm9XX6GTZDDCLK49NKVAz%2BPFVXP0IfzkCzYNXh%2FTF71gB1QIFt4AlAsHe1f8m%2F7RYGzLVI56MKTPvMIGOqUBObArFP%2B5aaKLQmgWo3xoTLoO%2B3fktRyXPXLHaRJwQjGbJvp1M3LHQxZgxFA3MvAZDeIN1HuwLjhHMnWS1%2B4jKBfMxu8gdIEOiqFlrmLXdhemfqfq0WVAmHbJ1ejMik%2Bk6vVvKhcA8KBg7DqY520Bl7bXTlVWkCNaJBWEAjRWdye5in5fcPkLKTnKWonpz9f0UnvQRwc4EfWzzIGJqausTIh9zQwQ&X-Amz-Signature=06a268ec169bd101ea53d3b6fede8c9579d9c58e0264a30a627ecd4c6706b4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STTOZEOS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDXc2eaHXfE8hc%2F%2BeFtXyAtfkbZAZgUNtINePEpLvgrDgIgbVQjhRmJHA1XedaK2%2FbjpxGrnThLMULKOD%2BtMnDMcZUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDMe1NEZVHxDMy4fttCrcA5s1BdocMUesRhbyy9FE2JdC9jKQvTnNqP6dCPZYXi1%2BcaxEPf60aYUVf%2BIEQBZWnLDdcDpPK9eEgNM%2BRwFVaz4N0WHPP7r5Agt6gmH6YGyckKzlUShFZYWgYFqCwMIZNbGKFKy2YuD9lIp%2F%2FVN10dY7%2BYJZBwx2FPJAVXRtHcij2Q8Yk0rVSXTbk6e9hcZgckNBe%2F2KjEnX3bMnJEYzRm0RovhtXzSrP9mwFrAgxSYPrTJYxosbHITb7EcRpjEBlfEIiRMO4t3mj%2FIU70XNHNLrvJwuqEG3VPr9YZr9kPUcaQ1uENvtf%2FlB5xIpdUMqgqKeZFBZJf1KGVmLShg%2BqSqC%2BKhwiocWJ6yZ1QViLGQ8A0%2BVrDUFLqanbGB5PiAUHEzJ28cEft2i4pJPw7%2FUpSwQ1%2BfAxmSYrE41lvCW%2FTK%2BhAVOoXUXf3LR4UYIbhZ34UCyrsn5jEvogkwlMKpaqQyFVDbkn7Z9RZRXawe3VkkDyZtdu6ppuVQWRh8SKEhzwgcUXi1A7NzV1NS0rgCxVhTiC2r3RHvBPeCxiySdHGMFGW23BbLiVm9XX6GTZDDCLK49NKVAz%2BPFVXP0IfzkCzYNXh%2FTF71gB1QIFt4AlAsHe1f8m%2F7RYGzLVI56MKTPvMIGOqUBObArFP%2B5aaKLQmgWo3xoTLoO%2B3fktRyXPXLHaRJwQjGbJvp1M3LHQxZgxFA3MvAZDeIN1HuwLjhHMnWS1%2B4jKBfMxu8gdIEOiqFlrmLXdhemfqfq0WVAmHbJ1ejMik%2Bk6vVvKhcA8KBg7DqY520Bl7bXTlVWkCNaJBWEAjRWdye5in5fcPkLKTnKWonpz9f0UnvQRwc4EfWzzIGJqausTIh9zQwQ&X-Amz-Signature=ffdd442718b5048ed21cdfc3b46fb25e65597f64f94990d1d7cccf70495f24fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STTOZEOS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDXc2eaHXfE8hc%2F%2BeFtXyAtfkbZAZgUNtINePEpLvgrDgIgbVQjhRmJHA1XedaK2%2FbjpxGrnThLMULKOD%2BtMnDMcZUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDMe1NEZVHxDMy4fttCrcA5s1BdocMUesRhbyy9FE2JdC9jKQvTnNqP6dCPZYXi1%2BcaxEPf60aYUVf%2BIEQBZWnLDdcDpPK9eEgNM%2BRwFVaz4N0WHPP7r5Agt6gmH6YGyckKzlUShFZYWgYFqCwMIZNbGKFKy2YuD9lIp%2F%2FVN10dY7%2BYJZBwx2FPJAVXRtHcij2Q8Yk0rVSXTbk6e9hcZgckNBe%2F2KjEnX3bMnJEYzRm0RovhtXzSrP9mwFrAgxSYPrTJYxosbHITb7EcRpjEBlfEIiRMO4t3mj%2FIU70XNHNLrvJwuqEG3VPr9YZr9kPUcaQ1uENvtf%2FlB5xIpdUMqgqKeZFBZJf1KGVmLShg%2BqSqC%2BKhwiocWJ6yZ1QViLGQ8A0%2BVrDUFLqanbGB5PiAUHEzJ28cEft2i4pJPw7%2FUpSwQ1%2BfAxmSYrE41lvCW%2FTK%2BhAVOoXUXf3LR4UYIbhZ34UCyrsn5jEvogkwlMKpaqQyFVDbkn7Z9RZRXawe3VkkDyZtdu6ppuVQWRh8SKEhzwgcUXi1A7NzV1NS0rgCxVhTiC2r3RHvBPeCxiySdHGMFGW23BbLiVm9XX6GTZDDCLK49NKVAz%2BPFVXP0IfzkCzYNXh%2FTF71gB1QIFt4AlAsHe1f8m%2F7RYGzLVI56MKTPvMIGOqUBObArFP%2B5aaKLQmgWo3xoTLoO%2B3fktRyXPXLHaRJwQjGbJvp1M3LHQxZgxFA3MvAZDeIN1HuwLjhHMnWS1%2B4jKBfMxu8gdIEOiqFlrmLXdhemfqfq0WVAmHbJ1ejMik%2Bk6vVvKhcA8KBg7DqY520Bl7bXTlVWkCNaJBWEAjRWdye5in5fcPkLKTnKWonpz9f0UnvQRwc4EfWzzIGJqausTIh9zQwQ&X-Amz-Signature=cbbf607bd873d41c5f169e529b446836a87152436b3d9230e701994ce823e188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
