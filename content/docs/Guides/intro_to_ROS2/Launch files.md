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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUKB5LW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfI4ggGWVw9y2VEGJWSVp2%2BsVC6H6r2Ka16%2Fxj4vSsQAiA2JzRcHH5HMF84ttQBLcjXCbkm5FipAAmu1LY6JGH5hyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sIhLqrAOZwp2V%2F5KtwDKAR9nBBrHFJfrwqGQSai%2FXpwak1jPUUBmhnoaiRzyEhqtaNd5ikXcbcK%2FlDjNU3bcRqTmIhK1gczNN5CJGu1F6fe5RVvFxeXTPoStn5iZsZA%2BJalS0PvKlMY2%2Bg9e56bm8ztJADDsnvVndUAuTxogY81WO%2FDNjZbSPoYJ7dlyMBGO9skPWro9YRb7NPJNnbO%2F96s4IkN61kOAG3TeAFpYwqU%2Fa27St%2BE7OTRdIOwjc5zKrlWtvBwW2yl8ZJnnW6tDcOqCGhcG0N%2BN1JJ7PNqD5a%2B97ITKFbU7rKsYuGe2q7SxJFentaRf46%2B1llH0SgSaH9IAycCr2xFlGG9K9FOdkefO%2Fg3T9istZ1CB%2FrFrWVDBTLpZUWlXqRPPjkcoVTLfRm%2FeRSD4jJM%2FdMSq6Xr6HqdaiMYqAtNd7EhLAqwVpdAdwDXgJaPk20XOYhptH%2FM%2FUAGU26RSpeT1lhhBRELV2UC%2FrshWlpPqSQBjpPIKJa5ckSbqie0oYk4w7A7NYdjmsSBrm6SE1eI8zHpQ1JP039Jgx5B2DzTErn052xNjImJFYrH3UTHliKKTw%2F%2BOJt0Akvh6oHB0m3OgoMvLXNm21rQ4qpsbkUEYSRcJKUzaWFINxCeFT2HpzQCjXMw8J38vAY6pgFRTIHlf0VQsSGCXNblkd%2BoI2jzML%2BFjRo0lbRxNA6eB0BF1iKNq3cEEMhf7iK%2BGyQER7nnX2Y2809pb4ycHjnwl4FmNpE%2BANggNDZitACYiX1rcblfHAu3p2G8x6AYAxHUvycMgkCDGiPAqUya4lraOLiKXKcbLbaERgvvb7jbN829zlMUHlOOQ1UQiS1DkPDt9cc3MUo%2B32SYFNFMlOitw2B3yD2I&X-Amz-Signature=c351789d5df0b97361d4656cd6683d08e4f4fa63d1658acaf66d9f910dc1dee0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUKB5LW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfI4ggGWVw9y2VEGJWSVp2%2BsVC6H6r2Ka16%2Fxj4vSsQAiA2JzRcHH5HMF84ttQBLcjXCbkm5FipAAmu1LY6JGH5hyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sIhLqrAOZwp2V%2F5KtwDKAR9nBBrHFJfrwqGQSai%2FXpwak1jPUUBmhnoaiRzyEhqtaNd5ikXcbcK%2FlDjNU3bcRqTmIhK1gczNN5CJGu1F6fe5RVvFxeXTPoStn5iZsZA%2BJalS0PvKlMY2%2Bg9e56bm8ztJADDsnvVndUAuTxogY81WO%2FDNjZbSPoYJ7dlyMBGO9skPWro9YRb7NPJNnbO%2F96s4IkN61kOAG3TeAFpYwqU%2Fa27St%2BE7OTRdIOwjc5zKrlWtvBwW2yl8ZJnnW6tDcOqCGhcG0N%2BN1JJ7PNqD5a%2B97ITKFbU7rKsYuGe2q7SxJFentaRf46%2B1llH0SgSaH9IAycCr2xFlGG9K9FOdkefO%2Fg3T9istZ1CB%2FrFrWVDBTLpZUWlXqRPPjkcoVTLfRm%2FeRSD4jJM%2FdMSq6Xr6HqdaiMYqAtNd7EhLAqwVpdAdwDXgJaPk20XOYhptH%2FM%2FUAGU26RSpeT1lhhBRELV2UC%2FrshWlpPqSQBjpPIKJa5ckSbqie0oYk4w7A7NYdjmsSBrm6SE1eI8zHpQ1JP039Jgx5B2DzTErn052xNjImJFYrH3UTHliKKTw%2F%2BOJt0Akvh6oHB0m3OgoMvLXNm21rQ4qpsbkUEYSRcJKUzaWFINxCeFT2HpzQCjXMw8J38vAY6pgFRTIHlf0VQsSGCXNblkd%2BoI2jzML%2BFjRo0lbRxNA6eB0BF1iKNq3cEEMhf7iK%2BGyQER7nnX2Y2809pb4ycHjnwl4FmNpE%2BANggNDZitACYiX1rcblfHAu3p2G8x6AYAxHUvycMgkCDGiPAqUya4lraOLiKXKcbLbaERgvvb7jbN829zlMUHlOOQ1UQiS1DkPDt9cc3MUo%2B32SYFNFMlOitw2B3yD2I&X-Amz-Signature=9286d52b24239d1efc82126083df8b0dc6c8f1071ef5d0f9a843ed48c1835ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUKB5LW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfI4ggGWVw9y2VEGJWSVp2%2BsVC6H6r2Ka16%2Fxj4vSsQAiA2JzRcHH5HMF84ttQBLcjXCbkm5FipAAmu1LY6JGH5hyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2sIhLqrAOZwp2V%2F5KtwDKAR9nBBrHFJfrwqGQSai%2FXpwak1jPUUBmhnoaiRzyEhqtaNd5ikXcbcK%2FlDjNU3bcRqTmIhK1gczNN5CJGu1F6fe5RVvFxeXTPoStn5iZsZA%2BJalS0PvKlMY2%2Bg9e56bm8ztJADDsnvVndUAuTxogY81WO%2FDNjZbSPoYJ7dlyMBGO9skPWro9YRb7NPJNnbO%2F96s4IkN61kOAG3TeAFpYwqU%2Fa27St%2BE7OTRdIOwjc5zKrlWtvBwW2yl8ZJnnW6tDcOqCGhcG0N%2BN1JJ7PNqD5a%2B97ITKFbU7rKsYuGe2q7SxJFentaRf46%2B1llH0SgSaH9IAycCr2xFlGG9K9FOdkefO%2Fg3T9istZ1CB%2FrFrWVDBTLpZUWlXqRPPjkcoVTLfRm%2FeRSD4jJM%2FdMSq6Xr6HqdaiMYqAtNd7EhLAqwVpdAdwDXgJaPk20XOYhptH%2FM%2FUAGU26RSpeT1lhhBRELV2UC%2FrshWlpPqSQBjpPIKJa5ckSbqie0oYk4w7A7NYdjmsSBrm6SE1eI8zHpQ1JP039Jgx5B2DzTErn052xNjImJFYrH3UTHliKKTw%2F%2BOJt0Akvh6oHB0m3OgoMvLXNm21rQ4qpsbkUEYSRcJKUzaWFINxCeFT2HpzQCjXMw8J38vAY6pgFRTIHlf0VQsSGCXNblkd%2BoI2jzML%2BFjRo0lbRxNA6eB0BF1iKNq3cEEMhf7iK%2BGyQER7nnX2Y2809pb4ycHjnwl4FmNpE%2BANggNDZitACYiX1rcblfHAu3p2G8x6AYAxHUvycMgkCDGiPAqUya4lraOLiKXKcbLbaERgvvb7jbN829zlMUHlOOQ1UQiS1DkPDt9cc3MUo%2B32SYFNFMlOitw2B3yD2I&X-Amz-Signature=8e833944e3ee0e7f1dbc0b1d4b1109b233157e7676c35683d22c67ab1b52a4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
