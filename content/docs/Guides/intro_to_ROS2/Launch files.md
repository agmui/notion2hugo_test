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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM56THEN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD9dfTPpTEaP4a8EFAM%2FeJB8GEXtjZGhxKoRIQ8cW552QIgQARxvB5Uk56r3Erb8AhfmWW7uUR1KOAqwTQ7USjty8kqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFkJd2GAdsWfLnpRyrcA9%2Bv2sSn%2FyIPb61MCb9KQplB1o4XSmWgade3kM2352JvVV1ZGgbwA9IDdH1RGyJGKvfbIVMeqHw%2B62aROnCExpyi%2BOC%2FMzeQTLkbLOVd9BDtNSDTXKpfSpksJl1zE5wpUbHuvfi7LD7uGgZtl%2By%2F3T8IoAKq8sd1h3lhkDqgfMc1Nz8cjHxJBpylrS4zHbikPPMV9M5w2aYFs8jwE0%2BOD5%2BJaRaOpysT1Wbor4x9uXlmEEUmptUFyLVc6mrqGhZ2e%2BWHJ5vj0fWRZ28uUW6N%2F2HzrqNTfn6J76hzOM1cL7uA4CY%2FdGv7eut80Dg0SWTYlnBocRHgT99mjGXzNCXrSBn9FG0GIASXP0hfj3W1S53K3o%2B1f4Fu6TkBoswB2RlmaLHrXuORC3zawaxdyV7VceoGlgLAEs3SnkjBx2iuOV8HJWPqnehlnYRhiVo7pLIfwiE4m0DO1wPWEdDBkxAK9FPtBUnKZtesX%2BW1elg0XFnst7nHw5afLJNg7GMhkSk6UY5lhLJo%2FfGiA3UOr2M5tMGrKk7RaDqYwfMC9ngsYfX6jEKrPNPwr6WP2DS2IOJLl1aZn%2BTsUVtpOE9tL446eUBy1gPJaUflmnk2F29EJP9zAs4zouAySBUB3QvNMPLyoMAGOqUBBW6lzrI4HEdzvng9gEB%2FYiOP%2BmkuFCGJzwQq4MzFmYewLTb3Qp%2FAaJqgMCPh946lbAVraAas4dhBaQSg7vGpcowkYdH7lPZu1fzYnsqPvojXdMcwqc1Ff9FrhlPsvU5Lz1q6TRYfqAEY1fgQAzYyvbyHxhL6XTvDmbM1yI17r%2FTt8ypfY8kNgoiIM4ymgwqthpSXdAerQed7hgf8bvUcHc62BLCL&X-Amz-Signature=cb92f5d054f45a20861e9a231b1dd121a76572fba45cc83e693467cf0ec96c90&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM56THEN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD9dfTPpTEaP4a8EFAM%2FeJB8GEXtjZGhxKoRIQ8cW552QIgQARxvB5Uk56r3Erb8AhfmWW7uUR1KOAqwTQ7USjty8kqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFkJd2GAdsWfLnpRyrcA9%2Bv2sSn%2FyIPb61MCb9KQplB1o4XSmWgade3kM2352JvVV1ZGgbwA9IDdH1RGyJGKvfbIVMeqHw%2B62aROnCExpyi%2BOC%2FMzeQTLkbLOVd9BDtNSDTXKpfSpksJl1zE5wpUbHuvfi7LD7uGgZtl%2By%2F3T8IoAKq8sd1h3lhkDqgfMc1Nz8cjHxJBpylrS4zHbikPPMV9M5w2aYFs8jwE0%2BOD5%2BJaRaOpysT1Wbor4x9uXlmEEUmptUFyLVc6mrqGhZ2e%2BWHJ5vj0fWRZ28uUW6N%2F2HzrqNTfn6J76hzOM1cL7uA4CY%2FdGv7eut80Dg0SWTYlnBocRHgT99mjGXzNCXrSBn9FG0GIASXP0hfj3W1S53K3o%2B1f4Fu6TkBoswB2RlmaLHrXuORC3zawaxdyV7VceoGlgLAEs3SnkjBx2iuOV8HJWPqnehlnYRhiVo7pLIfwiE4m0DO1wPWEdDBkxAK9FPtBUnKZtesX%2BW1elg0XFnst7nHw5afLJNg7GMhkSk6UY5lhLJo%2FfGiA3UOr2M5tMGrKk7RaDqYwfMC9ngsYfX6jEKrPNPwr6WP2DS2IOJLl1aZn%2BTsUVtpOE9tL446eUBy1gPJaUflmnk2F29EJP9zAs4zouAySBUB3QvNMPLyoMAGOqUBBW6lzrI4HEdzvng9gEB%2FYiOP%2BmkuFCGJzwQq4MzFmYewLTb3Qp%2FAaJqgMCPh946lbAVraAas4dhBaQSg7vGpcowkYdH7lPZu1fzYnsqPvojXdMcwqc1Ff9FrhlPsvU5Lz1q6TRYfqAEY1fgQAzYyvbyHxhL6XTvDmbM1yI17r%2FTt8ypfY8kNgoiIM4ymgwqthpSXdAerQed7hgf8bvUcHc62BLCL&X-Amz-Signature=2d50f33077373b0efe4c56e23ae7fb04e9917955c3d5cb29b322c48d076237d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM56THEN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD9dfTPpTEaP4a8EFAM%2FeJB8GEXtjZGhxKoRIQ8cW552QIgQARxvB5Uk56r3Erb8AhfmWW7uUR1KOAqwTQ7USjty8kqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFkJd2GAdsWfLnpRyrcA9%2Bv2sSn%2FyIPb61MCb9KQplB1o4XSmWgade3kM2352JvVV1ZGgbwA9IDdH1RGyJGKvfbIVMeqHw%2B62aROnCExpyi%2BOC%2FMzeQTLkbLOVd9BDtNSDTXKpfSpksJl1zE5wpUbHuvfi7LD7uGgZtl%2By%2F3T8IoAKq8sd1h3lhkDqgfMc1Nz8cjHxJBpylrS4zHbikPPMV9M5w2aYFs8jwE0%2BOD5%2BJaRaOpysT1Wbor4x9uXlmEEUmptUFyLVc6mrqGhZ2e%2BWHJ5vj0fWRZ28uUW6N%2F2HzrqNTfn6J76hzOM1cL7uA4CY%2FdGv7eut80Dg0SWTYlnBocRHgT99mjGXzNCXrSBn9FG0GIASXP0hfj3W1S53K3o%2B1f4Fu6TkBoswB2RlmaLHrXuORC3zawaxdyV7VceoGlgLAEs3SnkjBx2iuOV8HJWPqnehlnYRhiVo7pLIfwiE4m0DO1wPWEdDBkxAK9FPtBUnKZtesX%2BW1elg0XFnst7nHw5afLJNg7GMhkSk6UY5lhLJo%2FfGiA3UOr2M5tMGrKk7RaDqYwfMC9ngsYfX6jEKrPNPwr6WP2DS2IOJLl1aZn%2BTsUVtpOE9tL446eUBy1gPJaUflmnk2F29EJP9zAs4zouAySBUB3QvNMPLyoMAGOqUBBW6lzrI4HEdzvng9gEB%2FYiOP%2BmkuFCGJzwQq4MzFmYewLTb3Qp%2FAaJqgMCPh946lbAVraAas4dhBaQSg7vGpcowkYdH7lPZu1fzYnsqPvojXdMcwqc1Ff9FrhlPsvU5Lz1q6TRYfqAEY1fgQAzYyvbyHxhL6XTvDmbM1yI17r%2FTt8ypfY8kNgoiIM4ymgwqthpSXdAerQed7hgf8bvUcHc62BLCL&X-Amz-Signature=24736f649084f3fc9569f2c97e23ad109b12357822905ac27686579cf4238fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
