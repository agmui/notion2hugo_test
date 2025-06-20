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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7AQU2FP%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtXRmVhDYU0z%2BuVWPkYvTQZROS1tMa1Z%2Bo3atoBbLcXAiEAvSP22OYcR6gGwNLWvvdWjfrK4N0hEyNQhaTXQHbL11IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWO55xL%2Fxaoi1UxYircAw9jSC0v0CyhSTFDxsiwCSrSTdZoHhKLyDm7jCZSVVzNqCqxv2b%2By%2FN37LW%2BVmbPxUI5CUp9ZslIkGh20xD15mO7gt2SBWynGIJmfHX5ExhFnbFc9brBPzQbPvZpf%2B0F6E1zY2Hin5tGeq5FPt7DWIzmuImbKY14XxhgLv0RL3N3IlNmICMCUW2MPxr1zh7XONVstbAsJKoQRInx%2Bxo1UAFrrfC8islgPvachggQsG%2FmWs3C2pbB9X8BrQedGuQsZULnd9UaQ7pAHlMmm1t4NXIwTmWU8nQZsm88HZh8i8LufSvTosV9B56dLXlx2wCc7bywShgQtUlhdwm3ZkXmJLIP9tKiOleubOcxJIZ2E4N7aV4Q6wpaaBYvTrEP9pJHFo5XUafvrRHOTKGAzK6qGaXzRbd5gbj6EkUtiGnR1Oj6KV4rIXQXiFSZ0YfAzV2e%2Bo0vQOnoHASEaOGOijhTCJFXjwBUA4VFQCO%2BPna%2BpQozIsWrRJKvVSE9Q7PqjVoZa%2FlbCuz334h8CH7OR12K9WkeJR6Gk7FiUifvhXAX5D3aC%2FPePevYjq5Pr8OvK7q4vLjmCRDPYMnhrNzqarqaDcIkkoPkTHT7UqgDIIZ9uJEjMW1q20jPwMazlnacMOyj1cIGOqUBuXvh8zJmU3yLII0%2FecFc5mE80MzPzWvBozJ6rcNyyhwkbIM5%2FVNWjBT2vJVLc2pbS9j6TZM2ScQGfQsdCaNQDqw7ofQtD3S8TJ4cnjan7OemD645WlBIcCE1bHVzsquvi4bbBzigSAKXIFzBziAcKjeNpJ6vl0a0mctnAGolaWf8ngRh1L5NIZg13ZBhyx5wzNDgpMYiOLLi3LiVHJnfq3hIbex5&X-Amz-Signature=759a3e38691f999084a5445ac2aeb866957af8b195bbc180702ad103ae014cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7AQU2FP%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtXRmVhDYU0z%2BuVWPkYvTQZROS1tMa1Z%2Bo3atoBbLcXAiEAvSP22OYcR6gGwNLWvvdWjfrK4N0hEyNQhaTXQHbL11IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWO55xL%2Fxaoi1UxYircAw9jSC0v0CyhSTFDxsiwCSrSTdZoHhKLyDm7jCZSVVzNqCqxv2b%2By%2FN37LW%2BVmbPxUI5CUp9ZslIkGh20xD15mO7gt2SBWynGIJmfHX5ExhFnbFc9brBPzQbPvZpf%2B0F6E1zY2Hin5tGeq5FPt7DWIzmuImbKY14XxhgLv0RL3N3IlNmICMCUW2MPxr1zh7XONVstbAsJKoQRInx%2Bxo1UAFrrfC8islgPvachggQsG%2FmWs3C2pbB9X8BrQedGuQsZULnd9UaQ7pAHlMmm1t4NXIwTmWU8nQZsm88HZh8i8LufSvTosV9B56dLXlx2wCc7bywShgQtUlhdwm3ZkXmJLIP9tKiOleubOcxJIZ2E4N7aV4Q6wpaaBYvTrEP9pJHFo5XUafvrRHOTKGAzK6qGaXzRbd5gbj6EkUtiGnR1Oj6KV4rIXQXiFSZ0YfAzV2e%2Bo0vQOnoHASEaOGOijhTCJFXjwBUA4VFQCO%2BPna%2BpQozIsWrRJKvVSE9Q7PqjVoZa%2FlbCuz334h8CH7OR12K9WkeJR6Gk7FiUifvhXAX5D3aC%2FPePevYjq5Pr8OvK7q4vLjmCRDPYMnhrNzqarqaDcIkkoPkTHT7UqgDIIZ9uJEjMW1q20jPwMazlnacMOyj1cIGOqUBuXvh8zJmU3yLII0%2FecFc5mE80MzPzWvBozJ6rcNyyhwkbIM5%2FVNWjBT2vJVLc2pbS9j6TZM2ScQGfQsdCaNQDqw7ofQtD3S8TJ4cnjan7OemD645WlBIcCE1bHVzsquvi4bbBzigSAKXIFzBziAcKjeNpJ6vl0a0mctnAGolaWf8ngRh1L5NIZg13ZBhyx5wzNDgpMYiOLLi3LiVHJnfq3hIbex5&X-Amz-Signature=c749e59242c75bf42815e4d35777a31fbf1948a7a154e83d6e5733183d485297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7AQU2FP%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtXRmVhDYU0z%2BuVWPkYvTQZROS1tMa1Z%2Bo3atoBbLcXAiEAvSP22OYcR6gGwNLWvvdWjfrK4N0hEyNQhaTXQHbL11IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWO55xL%2Fxaoi1UxYircAw9jSC0v0CyhSTFDxsiwCSrSTdZoHhKLyDm7jCZSVVzNqCqxv2b%2By%2FN37LW%2BVmbPxUI5CUp9ZslIkGh20xD15mO7gt2SBWynGIJmfHX5ExhFnbFc9brBPzQbPvZpf%2B0F6E1zY2Hin5tGeq5FPt7DWIzmuImbKY14XxhgLv0RL3N3IlNmICMCUW2MPxr1zh7XONVstbAsJKoQRInx%2Bxo1UAFrrfC8islgPvachggQsG%2FmWs3C2pbB9X8BrQedGuQsZULnd9UaQ7pAHlMmm1t4NXIwTmWU8nQZsm88HZh8i8LufSvTosV9B56dLXlx2wCc7bywShgQtUlhdwm3ZkXmJLIP9tKiOleubOcxJIZ2E4N7aV4Q6wpaaBYvTrEP9pJHFo5XUafvrRHOTKGAzK6qGaXzRbd5gbj6EkUtiGnR1Oj6KV4rIXQXiFSZ0YfAzV2e%2Bo0vQOnoHASEaOGOijhTCJFXjwBUA4VFQCO%2BPna%2BpQozIsWrRJKvVSE9Q7PqjVoZa%2FlbCuz334h8CH7OR12K9WkeJR6Gk7FiUifvhXAX5D3aC%2FPePevYjq5Pr8OvK7q4vLjmCRDPYMnhrNzqarqaDcIkkoPkTHT7UqgDIIZ9uJEjMW1q20jPwMazlnacMOyj1cIGOqUBuXvh8zJmU3yLII0%2FecFc5mE80MzPzWvBozJ6rcNyyhwkbIM5%2FVNWjBT2vJVLc2pbS9j6TZM2ScQGfQsdCaNQDqw7ofQtD3S8TJ4cnjan7OemD645WlBIcCE1bHVzsquvi4bbBzigSAKXIFzBziAcKjeNpJ6vl0a0mctnAGolaWf8ngRh1L5NIZg13ZBhyx5wzNDgpMYiOLLi3LiVHJnfq3hIbex5&X-Amz-Signature=9edf9c3fecc36023b2eacf61d05d5acbeda5749e6a0396d6340c0429de6a015a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
