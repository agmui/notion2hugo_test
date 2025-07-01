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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPPMNFT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzrIhvITkAqgVFLltcceV%2F%2FVsCEzpFzqpUxElXujV52gIgU1u1aIoQwjgmZ8Cqxy82OYfBTb4H4vmT6PNVWDQKfU8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBxgapsM45v3p1w1yrcA5kVcN7gNnzzIoCwIV1j1rpdagE%2BpXZy0MAbCf7wYVnxlrlXtXtsCkBooRGgnKHZW4RBaGagvNGQtG%2BpaxsLLohtjCj%2BQfIwhiMTtS7fYOGGdP0rtQxdfy93WuOxNKNjnmcvMu5BF%2BqMZvVZ%2FIgWeJCAl6m7OqGVqF6%2BW5f8U19SCvOUiuLRyaZZU8jRnB73CzssmjzsJ5CecPaFCaDqYSwK72FjEW9C4rV7hBqLPB2yRKkLJj14vyZyeeGDw8diRWMwT9CuXW7Siod2w97YIL6iB9Kku6hwQyfnFfwuMRz1QoojVjqNIfcK%2B2iFYrv6BewMDx4FeBqJ11g4ePCeuc%2BiWmruWldt2W01Ddmf74eUMcRbqCrlxRc%2BfQjn063uspsA25DhrDlSa5C0Kq3a49h%2BjGDs2c0qEaG3chBWNNKriDdtgdX9%2BrGZKjPyXSv%2FBdwgPIjrDYUsGmU8ltGK%2BPVFaKT%2Bh6ML3yaMKC8qLcNieFWfGBA7vdQD4GYsHheOS3Ma0AfBsmfJ9MZKdYxxUoRmURR69iRB1o6UZrpyO6MMrDJc8l1jgbuqESGHmxmwW7jx0OwT5TSdEjWa6oxScTVgF6YNm4TJKX2hWvqH5bs1TTsx1FT9JgWH4RsTMP%2FLjcMGOqUBG3AoEq0luEn3QihGIN%2FKWKwCvNbDscOdWWeNkjHhJzWytXH9lUVjE6HApI%2FPCJAuncFQDIYfpC7eZRdAxgECY5qqCR051436Fkgq%2FiTA3iSYdwGFeUPNNSgRT9WcHK6tYjNOrfekcwg5t9OFvoZ8XIhhzJXISG4CgbXZEPUQJAycrRZapAeDbLX2vOjCT7Y7bp4tDpop75aFnLYwVq4971mSbGIN&X-Amz-Signature=1cb1c184e1d43f1bd05c008c77ee9e5de91a93e44438606cce4f15c487e2c142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPPMNFT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzrIhvITkAqgVFLltcceV%2F%2FVsCEzpFzqpUxElXujV52gIgU1u1aIoQwjgmZ8Cqxy82OYfBTb4H4vmT6PNVWDQKfU8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBxgapsM45v3p1w1yrcA5kVcN7gNnzzIoCwIV1j1rpdagE%2BpXZy0MAbCf7wYVnxlrlXtXtsCkBooRGgnKHZW4RBaGagvNGQtG%2BpaxsLLohtjCj%2BQfIwhiMTtS7fYOGGdP0rtQxdfy93WuOxNKNjnmcvMu5BF%2BqMZvVZ%2FIgWeJCAl6m7OqGVqF6%2BW5f8U19SCvOUiuLRyaZZU8jRnB73CzssmjzsJ5CecPaFCaDqYSwK72FjEW9C4rV7hBqLPB2yRKkLJj14vyZyeeGDw8diRWMwT9CuXW7Siod2w97YIL6iB9Kku6hwQyfnFfwuMRz1QoojVjqNIfcK%2B2iFYrv6BewMDx4FeBqJ11g4ePCeuc%2BiWmruWldt2W01Ddmf74eUMcRbqCrlxRc%2BfQjn063uspsA25DhrDlSa5C0Kq3a49h%2BjGDs2c0qEaG3chBWNNKriDdtgdX9%2BrGZKjPyXSv%2FBdwgPIjrDYUsGmU8ltGK%2BPVFaKT%2Bh6ML3yaMKC8qLcNieFWfGBA7vdQD4GYsHheOS3Ma0AfBsmfJ9MZKdYxxUoRmURR69iRB1o6UZrpyO6MMrDJc8l1jgbuqESGHmxmwW7jx0OwT5TSdEjWa6oxScTVgF6YNm4TJKX2hWvqH5bs1TTsx1FT9JgWH4RsTMP%2FLjcMGOqUBG3AoEq0luEn3QihGIN%2FKWKwCvNbDscOdWWeNkjHhJzWytXH9lUVjE6HApI%2FPCJAuncFQDIYfpC7eZRdAxgECY5qqCR051436Fkgq%2FiTA3iSYdwGFeUPNNSgRT9WcHK6tYjNOrfekcwg5t9OFvoZ8XIhhzJXISG4CgbXZEPUQJAycrRZapAeDbLX2vOjCT7Y7bp4tDpop75aFnLYwVq4971mSbGIN&X-Amz-Signature=4d2efd2f712bed281b560d69d476a8703dd086b6d6e1e483e6e4830d89d42436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPPMNFT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzrIhvITkAqgVFLltcceV%2F%2FVsCEzpFzqpUxElXujV52gIgU1u1aIoQwjgmZ8Cqxy82OYfBTb4H4vmT6PNVWDQKfU8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBxgapsM45v3p1w1yrcA5kVcN7gNnzzIoCwIV1j1rpdagE%2BpXZy0MAbCf7wYVnxlrlXtXtsCkBooRGgnKHZW4RBaGagvNGQtG%2BpaxsLLohtjCj%2BQfIwhiMTtS7fYOGGdP0rtQxdfy93WuOxNKNjnmcvMu5BF%2BqMZvVZ%2FIgWeJCAl6m7OqGVqF6%2BW5f8U19SCvOUiuLRyaZZU8jRnB73CzssmjzsJ5CecPaFCaDqYSwK72FjEW9C4rV7hBqLPB2yRKkLJj14vyZyeeGDw8diRWMwT9CuXW7Siod2w97YIL6iB9Kku6hwQyfnFfwuMRz1QoojVjqNIfcK%2B2iFYrv6BewMDx4FeBqJ11g4ePCeuc%2BiWmruWldt2W01Ddmf74eUMcRbqCrlxRc%2BfQjn063uspsA25DhrDlSa5C0Kq3a49h%2BjGDs2c0qEaG3chBWNNKriDdtgdX9%2BrGZKjPyXSv%2FBdwgPIjrDYUsGmU8ltGK%2BPVFaKT%2Bh6ML3yaMKC8qLcNieFWfGBA7vdQD4GYsHheOS3Ma0AfBsmfJ9MZKdYxxUoRmURR69iRB1o6UZrpyO6MMrDJc8l1jgbuqESGHmxmwW7jx0OwT5TSdEjWa6oxScTVgF6YNm4TJKX2hWvqH5bs1TTsx1FT9JgWH4RsTMP%2FLjcMGOqUBG3AoEq0luEn3QihGIN%2FKWKwCvNbDscOdWWeNkjHhJzWytXH9lUVjE6HApI%2FPCJAuncFQDIYfpC7eZRdAxgECY5qqCR051436Fkgq%2FiTA3iSYdwGFeUPNNSgRT9WcHK6tYjNOrfekcwg5t9OFvoZ8XIhhzJXISG4CgbXZEPUQJAycrRZapAeDbLX2vOjCT7Y7bp4tDpop75aFnLYwVq4971mSbGIN&X-Amz-Signature=9d39f6082a4b0a7dca7a2c18238a1f807f7166ae13411f770bb5564d349a9457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
