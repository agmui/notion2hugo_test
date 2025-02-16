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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25EEPXL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAZ9V2ZYsuIdllkrsjKnEbdU4w%2FCM7mVkSJLPEpjIzlaAiEAmxwMrOgmMM3%2FIbOAC3H5LTnZRwj%2F7jrmAQrHg5%2B6k%2BIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJywh6OnJdLBIZKW0ircAyagFtgp%2FWORKF9gU3dsk63%2FwCa1UHufF4CbBfdIMNepqvv5Y9Ebu0Ugb7%2F99PgnkRMTuhicPnx5F%2BxpfsuVxuCzbLJV7dt4zCEwq0aXTPTIy11Owzn7IQte8gOusAJu8I17ti4g6MJedojKxizRKECet8FLp%2FvL7IHjM3ZIIZcCpOLqpj7ykT66SQ2d%2BLi5CEJqsSnMAizLFLD3TK%2B3z8Ebr1KSfi8KgDwPihpzbJuOr%2B6xqkU%2F88sQdvg8WxXf0t%2BpuPUK7YIv02T5FVmevqhUYqT4e8LqK%2B54zmwVNr32sO3kjZbYWyfgjSkCN9V8R0EIFg6ZV1TYDciXOBwDd9HrLtDWwh5bEbQy%2F5A2ILcdFw6iE7%2BbqfImjE%2FE6gNXi9KuNe4GwahERaGMWvHf75qXPLjmKkG27aNQzcFVUQav%2BPYXx9WPmMQoivbL%2FmpDT07QJ19mARS9gfE3%2F%2FJR2ZksNRVENYTXqpA9U15tqnSkBrA9F0Q6ymQRh7iIkEGsW1tFCYbPtxtFUDGEMlBGmz5YG3Z0tgHwgNSRI3XFW9bQPj4%2BgaqnOEAX03dXuVaqFNQOOrfcvUAsDSWW4zLZd%2F4UhfXOWtr2qSBDVYjHo3wO4L4VhQes0et2bg%2F1MOr9xb0GOqUBiBpYAhRQ1fFrsOeifz9JKcahIabHdbyHhYm6ryDx%2B0B%2Fadzt0b7hV7ICw5alPY0RW6KynfUGt6aju0nghNCPugAtRV5ZVEv%2FOcSb4NtlqmVLkCC3f5vWNv1ZkW2IxNOWcce6z149f1PmoAJOmGtfIQXygKpRA5PvVgov4j28Ux3TamTOcXbfHRRpWSsL0sMEIekAk9SYpdyJ2ciP895i0K8Xtd8o&X-Amz-Signature=d358d9c27e93e95e3f56ec3e8d197844d79ae8603e4cb517a32be468fe8fba2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25EEPXL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAZ9V2ZYsuIdllkrsjKnEbdU4w%2FCM7mVkSJLPEpjIzlaAiEAmxwMrOgmMM3%2FIbOAC3H5LTnZRwj%2F7jrmAQrHg5%2B6k%2BIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJywh6OnJdLBIZKW0ircAyagFtgp%2FWORKF9gU3dsk63%2FwCa1UHufF4CbBfdIMNepqvv5Y9Ebu0Ugb7%2F99PgnkRMTuhicPnx5F%2BxpfsuVxuCzbLJV7dt4zCEwq0aXTPTIy11Owzn7IQte8gOusAJu8I17ti4g6MJedojKxizRKECet8FLp%2FvL7IHjM3ZIIZcCpOLqpj7ykT66SQ2d%2BLi5CEJqsSnMAizLFLD3TK%2B3z8Ebr1KSfi8KgDwPihpzbJuOr%2B6xqkU%2F88sQdvg8WxXf0t%2BpuPUK7YIv02T5FVmevqhUYqT4e8LqK%2B54zmwVNr32sO3kjZbYWyfgjSkCN9V8R0EIFg6ZV1TYDciXOBwDd9HrLtDWwh5bEbQy%2F5A2ILcdFw6iE7%2BbqfImjE%2FE6gNXi9KuNe4GwahERaGMWvHf75qXPLjmKkG27aNQzcFVUQav%2BPYXx9WPmMQoivbL%2FmpDT07QJ19mARS9gfE3%2F%2FJR2ZksNRVENYTXqpA9U15tqnSkBrA9F0Q6ymQRh7iIkEGsW1tFCYbPtxtFUDGEMlBGmz5YG3Z0tgHwgNSRI3XFW9bQPj4%2BgaqnOEAX03dXuVaqFNQOOrfcvUAsDSWW4zLZd%2F4UhfXOWtr2qSBDVYjHo3wO4L4VhQes0et2bg%2F1MOr9xb0GOqUBiBpYAhRQ1fFrsOeifz9JKcahIabHdbyHhYm6ryDx%2B0B%2Fadzt0b7hV7ICw5alPY0RW6KynfUGt6aju0nghNCPugAtRV5ZVEv%2FOcSb4NtlqmVLkCC3f5vWNv1ZkW2IxNOWcce6z149f1PmoAJOmGtfIQXygKpRA5PvVgov4j28Ux3TamTOcXbfHRRpWSsL0sMEIekAk9SYpdyJ2ciP895i0K8Xtd8o&X-Amz-Signature=21d574f87b45afa06fa3435768bfce5ebec771305f156a5f60d77f321d44f634&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25EEPXL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAZ9V2ZYsuIdllkrsjKnEbdU4w%2FCM7mVkSJLPEpjIzlaAiEAmxwMrOgmMM3%2FIbOAC3H5LTnZRwj%2F7jrmAQrHg5%2B6k%2BIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJywh6OnJdLBIZKW0ircAyagFtgp%2FWORKF9gU3dsk63%2FwCa1UHufF4CbBfdIMNepqvv5Y9Ebu0Ugb7%2F99PgnkRMTuhicPnx5F%2BxpfsuVxuCzbLJV7dt4zCEwq0aXTPTIy11Owzn7IQte8gOusAJu8I17ti4g6MJedojKxizRKECet8FLp%2FvL7IHjM3ZIIZcCpOLqpj7ykT66SQ2d%2BLi5CEJqsSnMAizLFLD3TK%2B3z8Ebr1KSfi8KgDwPihpzbJuOr%2B6xqkU%2F88sQdvg8WxXf0t%2BpuPUK7YIv02T5FVmevqhUYqT4e8LqK%2B54zmwVNr32sO3kjZbYWyfgjSkCN9V8R0EIFg6ZV1TYDciXOBwDd9HrLtDWwh5bEbQy%2F5A2ILcdFw6iE7%2BbqfImjE%2FE6gNXi9KuNe4GwahERaGMWvHf75qXPLjmKkG27aNQzcFVUQav%2BPYXx9WPmMQoivbL%2FmpDT07QJ19mARS9gfE3%2F%2FJR2ZksNRVENYTXqpA9U15tqnSkBrA9F0Q6ymQRh7iIkEGsW1tFCYbPtxtFUDGEMlBGmz5YG3Z0tgHwgNSRI3XFW9bQPj4%2BgaqnOEAX03dXuVaqFNQOOrfcvUAsDSWW4zLZd%2F4UhfXOWtr2qSBDVYjHo3wO4L4VhQes0et2bg%2F1MOr9xb0GOqUBiBpYAhRQ1fFrsOeifz9JKcahIabHdbyHhYm6ryDx%2B0B%2Fadzt0b7hV7ICw5alPY0RW6KynfUGt6aju0nghNCPugAtRV5ZVEv%2FOcSb4NtlqmVLkCC3f5vWNv1ZkW2IxNOWcce6z149f1PmoAJOmGtfIQXygKpRA5PvVgov4j28Ux3TamTOcXbfHRRpWSsL0sMEIekAk9SYpdyJ2ciP895i0K8Xtd8o&X-Amz-Signature=9323344df1e7c63f48d0bb2a02e4545f5d355a51f1e0f7290e87873dc3bd9a22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
