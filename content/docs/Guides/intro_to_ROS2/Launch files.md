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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYK54EI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCLwpbIcJI%2BpdcUXSBbbpfgsIeH9ht19y6zvKIIVw7FfAIgDUL0IHm82VD63ZvM2yw%2BL4hDSbwIJugh5OapR50jM3sqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2F7W1fS%2FnNngZ3tyrcAzuyTptsQYfaH%2F8Fg0POw8feKZhK%2F0GgfGpTDkYze521DSHIZU3mZ9Hx5i5ilJv8qktmEG1g8C9WYn1u6eWjqTrAOuyl8KWqdbeuOdhBI%2B1Q5eCb4GQs7x27C3s8RF7FjfvfteHADiS4Lo913AW%2BX8pAAXp2fgJ0lXFgkzJ%2BERxpUovnuSQUes43EA39OU7767G7giWBnA4GHxF6Is4wEQ8VaqrEyKBqLQ6y3y6WBJCwyh773bqb3GoLx%2FmHJP8jehqlJuP8ngQPF1gClua3b257xLG5OYR7TgoRV8syYjOsl6w7%2FQ7LUC1gRxRWM1tfeqB2hzUo70tsYZCN8CJdi1w%2Bz5T43R3Zq%2FRimRTZYVJQW3N4TL%2BnCJqUGR3TyyBERKtHinqxQCgdvzVTCCWP3dIuV8n3fDHx1haRzLMEugOeXXiC5PDMpQadSE%2B8lDkba8U%2FMQ0bLysAJFRyPQCtSUWFlaEwqcH%2FvD22Moy1glmNJABtGRfYPZU8bnNgd8%2BbPMoLzEYGVhwPvQ4XCWogaxabbGrpWIJ4NCx8MlIX%2FD2ClG8v8HsHd5caYLR1%2B2kiKQtWV9HJgUc6Sag34Onxa7HZkZ8zvFHIadA9BLf1b6fXbx%2ByyITtb9HVAFjFMKbegcEGOqUBmM6cAaiC21D3eEs89zsYD6XY06XmdBzfR8eXQ9CH7okal7q%2BesfIRKCbnN92NPCzp81L3vcGyFBwS2z%2BtmIbSA4xuo9a8IZSfYXio%2Fzt8JgDsqEcGKam3K2XfN8ALG6XIQWdeRLHIgvnWxd1C2yALr%2F%2FLKLqG9aO6PT3JlXCNLkgV5hJXv6nX9iqrwB8hJ1pU3riST2kk4P791CMU2ubR99GJycC&X-Amz-Signature=6552ba9305c559af8168c836a5944bd8184c80ad32a5120e9916645fc3cd5baa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYK54EI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCLwpbIcJI%2BpdcUXSBbbpfgsIeH9ht19y6zvKIIVw7FfAIgDUL0IHm82VD63ZvM2yw%2BL4hDSbwIJugh5OapR50jM3sqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2F7W1fS%2FnNngZ3tyrcAzuyTptsQYfaH%2F8Fg0POw8feKZhK%2F0GgfGpTDkYze521DSHIZU3mZ9Hx5i5ilJv8qktmEG1g8C9WYn1u6eWjqTrAOuyl8KWqdbeuOdhBI%2B1Q5eCb4GQs7x27C3s8RF7FjfvfteHADiS4Lo913AW%2BX8pAAXp2fgJ0lXFgkzJ%2BERxpUovnuSQUes43EA39OU7767G7giWBnA4GHxF6Is4wEQ8VaqrEyKBqLQ6y3y6WBJCwyh773bqb3GoLx%2FmHJP8jehqlJuP8ngQPF1gClua3b257xLG5OYR7TgoRV8syYjOsl6w7%2FQ7LUC1gRxRWM1tfeqB2hzUo70tsYZCN8CJdi1w%2Bz5T43R3Zq%2FRimRTZYVJQW3N4TL%2BnCJqUGR3TyyBERKtHinqxQCgdvzVTCCWP3dIuV8n3fDHx1haRzLMEugOeXXiC5PDMpQadSE%2B8lDkba8U%2FMQ0bLysAJFRyPQCtSUWFlaEwqcH%2FvD22Moy1glmNJABtGRfYPZU8bnNgd8%2BbPMoLzEYGVhwPvQ4XCWogaxabbGrpWIJ4NCx8MlIX%2FD2ClG8v8HsHd5caYLR1%2B2kiKQtWV9HJgUc6Sag34Onxa7HZkZ8zvFHIadA9BLf1b6fXbx%2ByyITtb9HVAFjFMKbegcEGOqUBmM6cAaiC21D3eEs89zsYD6XY06XmdBzfR8eXQ9CH7okal7q%2BesfIRKCbnN92NPCzp81L3vcGyFBwS2z%2BtmIbSA4xuo9a8IZSfYXio%2Fzt8JgDsqEcGKam3K2XfN8ALG6XIQWdeRLHIgvnWxd1C2yALr%2F%2FLKLqG9aO6PT3JlXCNLkgV5hJXv6nX9iqrwB8hJ1pU3riST2kk4P791CMU2ubR99GJycC&X-Amz-Signature=1236421039ea9bed9e6e1bd092e33d475e7132e79ddfddc4d78a433135d501f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGYK54EI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCLwpbIcJI%2BpdcUXSBbbpfgsIeH9ht19y6zvKIIVw7FfAIgDUL0IHm82VD63ZvM2yw%2BL4hDSbwIJugh5OapR50jM3sqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn%2F7W1fS%2FnNngZ3tyrcAzuyTptsQYfaH%2F8Fg0POw8feKZhK%2F0GgfGpTDkYze521DSHIZU3mZ9Hx5i5ilJv8qktmEG1g8C9WYn1u6eWjqTrAOuyl8KWqdbeuOdhBI%2B1Q5eCb4GQs7x27C3s8RF7FjfvfteHADiS4Lo913AW%2BX8pAAXp2fgJ0lXFgkzJ%2BERxpUovnuSQUes43EA39OU7767G7giWBnA4GHxF6Is4wEQ8VaqrEyKBqLQ6y3y6WBJCwyh773bqb3GoLx%2FmHJP8jehqlJuP8ngQPF1gClua3b257xLG5OYR7TgoRV8syYjOsl6w7%2FQ7LUC1gRxRWM1tfeqB2hzUo70tsYZCN8CJdi1w%2Bz5T43R3Zq%2FRimRTZYVJQW3N4TL%2BnCJqUGR3TyyBERKtHinqxQCgdvzVTCCWP3dIuV8n3fDHx1haRzLMEugOeXXiC5PDMpQadSE%2B8lDkba8U%2FMQ0bLysAJFRyPQCtSUWFlaEwqcH%2FvD22Moy1glmNJABtGRfYPZU8bnNgd8%2BbPMoLzEYGVhwPvQ4XCWogaxabbGrpWIJ4NCx8MlIX%2FD2ClG8v8HsHd5caYLR1%2B2kiKQtWV9HJgUc6Sag34Onxa7HZkZ8zvFHIadA9BLf1b6fXbx%2ByyITtb9HVAFjFMKbegcEGOqUBmM6cAaiC21D3eEs89zsYD6XY06XmdBzfR8eXQ9CH7okal7q%2BesfIRKCbnN92NPCzp81L3vcGyFBwS2z%2BtmIbSA4xuo9a8IZSfYXio%2Fzt8JgDsqEcGKam3K2XfN8ALG6XIQWdeRLHIgvnWxd1C2yALr%2F%2FLKLqG9aO6PT3JlXCNLkgV5hJXv6nX9iqrwB8hJ1pU3riST2kk4P791CMU2ubR99GJycC&X-Amz-Signature=b6a4c9f3c094ab2319e7b31207559f4562a7784d34450b3590bda526e9a5afd2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
