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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45KW2TJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErANBAYv4yNUeT9jsS%2FLQ5bmZd1xyWBTVjO4gBzs5cyAiEAn3FREKCRWbsQQMqx0UswMyC7T3zbxJbVTZGuT6ncvkYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDChjAmK47PPkcMAAHSrcA2sFMSQmkV%2B%2FdM4nT5PyaywS9wyH%2Fyd6GBYZ0neEUgQQJMjcmJnl4%2FKRqW8Ymik881wKRTO2qwcO%2FiCed8PJY1WXL1FG1OUWmEL%2FWqkLclx8T%2B2U2iaVl%2FeFNvq7tlI0y8ICnInXkFUt%2F5CYB0iOM%2FbJ33kOA%2B5Y0IHTh5T3aptuTdffC7E1i1oyhKoLEr%2BBgbE9RU%2FfSUygALFIFfNxYKGjPHUVYN7EUq%2FnVcSXCMCwj89ZEB5Isd8LB8fpafJLrL1NXzYEhq85pPbckMxq9x99gV1w5fbQmW0kpLuqYnN1oNdem6MAzHIedjEKKOUUQrHW7%2FC8hdstThocYCSVA4dI2iD61E5hUFY3BYAi%2Fsa9XSIalb0qW%2F6ax5rB%2Byt89hxTz7bD4bk3nmUkH3zcv80EqOrJnvaQkvCqvWzf0dx2R4f2%2FBd8ISHVy8RV3g20FtUqmZ%2BaEmARQuJfHTdLSmwl2oMLyURh6cia4SHUyQheJQiRiCslnGI0LojqNYSLE0f6V5sorPXQ82rIzZ5F2cJLBYUe4kQIpBlNUm0lM5Nl5xCn3quIT4mC3ri3MJJRuoQGaEs9Gjge6EOD8LY7i8n%2Fx8t8uY9oqyLPqKZM%2FlHITwi9KhWoOVRX0IKyMPCW1MEGOqUBi0lI%2BrNsn4bR01y%2BGjrN44F%2B6yQqsBx67PKT82bfLU9YsyLChws5TDd4XZDPJbVRAIgfpJvcuouVg7pJFk5t01v04QOJsGwAbRjHcGrv60d4sC6HqTvcCR8N0kThnFc%2BsZtEsw4wJJWcxavN62uXOfrTicqcKdXaSRgu50hRXzop2VLEutudaXvcpFemdJo%2BKQhNA32C5fZLe72z%2ByrJcCih0mH1&X-Amz-Signature=ef860b0dcc1944dc416e304b800bd8c64a4a1d430b16565ba540f8149d3458da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45KW2TJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErANBAYv4yNUeT9jsS%2FLQ5bmZd1xyWBTVjO4gBzs5cyAiEAn3FREKCRWbsQQMqx0UswMyC7T3zbxJbVTZGuT6ncvkYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDChjAmK47PPkcMAAHSrcA2sFMSQmkV%2B%2FdM4nT5PyaywS9wyH%2Fyd6GBYZ0neEUgQQJMjcmJnl4%2FKRqW8Ymik881wKRTO2qwcO%2FiCed8PJY1WXL1FG1OUWmEL%2FWqkLclx8T%2B2U2iaVl%2FeFNvq7tlI0y8ICnInXkFUt%2F5CYB0iOM%2FbJ33kOA%2B5Y0IHTh5T3aptuTdffC7E1i1oyhKoLEr%2BBgbE9RU%2FfSUygALFIFfNxYKGjPHUVYN7EUq%2FnVcSXCMCwj89ZEB5Isd8LB8fpafJLrL1NXzYEhq85pPbckMxq9x99gV1w5fbQmW0kpLuqYnN1oNdem6MAzHIedjEKKOUUQrHW7%2FC8hdstThocYCSVA4dI2iD61E5hUFY3BYAi%2Fsa9XSIalb0qW%2F6ax5rB%2Byt89hxTz7bD4bk3nmUkH3zcv80EqOrJnvaQkvCqvWzf0dx2R4f2%2FBd8ISHVy8RV3g20FtUqmZ%2BaEmARQuJfHTdLSmwl2oMLyURh6cia4SHUyQheJQiRiCslnGI0LojqNYSLE0f6V5sorPXQ82rIzZ5F2cJLBYUe4kQIpBlNUm0lM5Nl5xCn3quIT4mC3ri3MJJRuoQGaEs9Gjge6EOD8LY7i8n%2Fx8t8uY9oqyLPqKZM%2FlHITwi9KhWoOVRX0IKyMPCW1MEGOqUBi0lI%2BrNsn4bR01y%2BGjrN44F%2B6yQqsBx67PKT82bfLU9YsyLChws5TDd4XZDPJbVRAIgfpJvcuouVg7pJFk5t01v04QOJsGwAbRjHcGrv60d4sC6HqTvcCR8N0kThnFc%2BsZtEsw4wJJWcxavN62uXOfrTicqcKdXaSRgu50hRXzop2VLEutudaXvcpFemdJo%2BKQhNA32C5fZLe72z%2ByrJcCih0mH1&X-Amz-Signature=553454c99541e26fb792850a8d12c527406d6b79d463249053d72c29f8ba23ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U45KW2TJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErANBAYv4yNUeT9jsS%2FLQ5bmZd1xyWBTVjO4gBzs5cyAiEAn3FREKCRWbsQQMqx0UswMyC7T3zbxJbVTZGuT6ncvkYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDChjAmK47PPkcMAAHSrcA2sFMSQmkV%2B%2FdM4nT5PyaywS9wyH%2Fyd6GBYZ0neEUgQQJMjcmJnl4%2FKRqW8Ymik881wKRTO2qwcO%2FiCed8PJY1WXL1FG1OUWmEL%2FWqkLclx8T%2B2U2iaVl%2FeFNvq7tlI0y8ICnInXkFUt%2F5CYB0iOM%2FbJ33kOA%2B5Y0IHTh5T3aptuTdffC7E1i1oyhKoLEr%2BBgbE9RU%2FfSUygALFIFfNxYKGjPHUVYN7EUq%2FnVcSXCMCwj89ZEB5Isd8LB8fpafJLrL1NXzYEhq85pPbckMxq9x99gV1w5fbQmW0kpLuqYnN1oNdem6MAzHIedjEKKOUUQrHW7%2FC8hdstThocYCSVA4dI2iD61E5hUFY3BYAi%2Fsa9XSIalb0qW%2F6ax5rB%2Byt89hxTz7bD4bk3nmUkH3zcv80EqOrJnvaQkvCqvWzf0dx2R4f2%2FBd8ISHVy8RV3g20FtUqmZ%2BaEmARQuJfHTdLSmwl2oMLyURh6cia4SHUyQheJQiRiCslnGI0LojqNYSLE0f6V5sorPXQ82rIzZ5F2cJLBYUe4kQIpBlNUm0lM5Nl5xCn3quIT4mC3ri3MJJRuoQGaEs9Gjge6EOD8LY7i8n%2Fx8t8uY9oqyLPqKZM%2FlHITwi9KhWoOVRX0IKyMPCW1MEGOqUBi0lI%2BrNsn4bR01y%2BGjrN44F%2B6yQqsBx67PKT82bfLU9YsyLChws5TDd4XZDPJbVRAIgfpJvcuouVg7pJFk5t01v04QOJsGwAbRjHcGrv60d4sC6HqTvcCR8N0kThnFc%2BsZtEsw4wJJWcxavN62uXOfrTicqcKdXaSRgu50hRXzop2VLEutudaXvcpFemdJo%2BKQhNA32C5fZLe72z%2ByrJcCih0mH1&X-Amz-Signature=ad758a04dc43aa00521d4a945184c01e026d7145b74944a560cdab1c4edc47ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
