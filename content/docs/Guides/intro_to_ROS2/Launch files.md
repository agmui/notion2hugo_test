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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUY7XVK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWBKr2n%2F%2B13X27yrvoZp718%2FSPWC4s2EbOs1NOvcYskAiBscW3g0LaOvBP1vMKKklQIBeXBs1fLp0ZPuAQq7qyZfir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMnxCAs8GG6HCBJYqVKtwDRLVyurJ2dpILuQbNfHyX%2FV88Ndk99Gd%2Fzm0w21eH1Zh7AfKnZJZ0LoUqlK2WyuVkE05dvC1wLBaheTHrPLnsC6HNfdiLFHT244z1jLvZism3iNICNoWpnGMRPw26Jsg285MBw3q9TAs4J0VFcGSK0%2Fo5mPXG90Hj8Av7nRq96BcDDsESy6czKISHqIk3tYMKnhwQciNy0Wjjb6R5GtiRC%2FMogP9cbSP8oSCOzA2iz%2Fm3npED%2B2EB%2BdhXWA6xu7YA82ovjX9uzN1mr0E4pB0VhH8e7%2FpUqNep41VpXmMC79DF1ygmJiRpe8yiyfBQ1GBpMvB340erjUbiX8ja6tijwSP0t%2F523NRqOyv1dklxFzXfRKCpVTPhEZ9QScfvr2HNTwy73l3Dy%2Btl4ctkDIFkVOwu3yjYqhtiYyZfpcWA8ekZF6stejkLZYHxOxPVxgrb6uM%2FN%2F7cH9YLOcX3iaHu9%2FRpQfesjDXZmIavz%2F9vM27JplFyNE%2B8EzHqe6ifEVeGmDGLwzLM2sxumZupgYvB2xqnCvjUQVoL57jaMHWfl4SiNQP2vUDSyihbht5Hqw9tuoK58Drsv6FgQy1b82YNEnm86afFYK204qnSzo9NIw32dCbQSxeAlRPMkyUwwaLKvwY6pgEN5fSOtDC1XqKcvyf2%2FwHronKvBMBzjeyW2TAZRjGqGsujgtHeqDLjr7xsCVA9rhclLAIy8Ih51rGKCWy1CC3MDfLcDgLyXMmWrAPLhvY0IBk%2BYR6fUk8MHujadCnnz78Jnzxv4OvZ3UfHzKIh%2FBJK2Wu67tYT1VJjosNtfu83KPucr6I1ECrGd5UYEd9oOApngWw%2BWAvtRc9RCRem9DYE3y4XMMFf&X-Amz-Signature=cbe8d6cd18421ce79be2bf7cb5ea385a6a685cc99eec0007c39068cc2e54ef5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUY7XVK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWBKr2n%2F%2B13X27yrvoZp718%2FSPWC4s2EbOs1NOvcYskAiBscW3g0LaOvBP1vMKKklQIBeXBs1fLp0ZPuAQq7qyZfir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMnxCAs8GG6HCBJYqVKtwDRLVyurJ2dpILuQbNfHyX%2FV88Ndk99Gd%2Fzm0w21eH1Zh7AfKnZJZ0LoUqlK2WyuVkE05dvC1wLBaheTHrPLnsC6HNfdiLFHT244z1jLvZism3iNICNoWpnGMRPw26Jsg285MBw3q9TAs4J0VFcGSK0%2Fo5mPXG90Hj8Av7nRq96BcDDsESy6czKISHqIk3tYMKnhwQciNy0Wjjb6R5GtiRC%2FMogP9cbSP8oSCOzA2iz%2Fm3npED%2B2EB%2BdhXWA6xu7YA82ovjX9uzN1mr0E4pB0VhH8e7%2FpUqNep41VpXmMC79DF1ygmJiRpe8yiyfBQ1GBpMvB340erjUbiX8ja6tijwSP0t%2F523NRqOyv1dklxFzXfRKCpVTPhEZ9QScfvr2HNTwy73l3Dy%2Btl4ctkDIFkVOwu3yjYqhtiYyZfpcWA8ekZF6stejkLZYHxOxPVxgrb6uM%2FN%2F7cH9YLOcX3iaHu9%2FRpQfesjDXZmIavz%2F9vM27JplFyNE%2B8EzHqe6ifEVeGmDGLwzLM2sxumZupgYvB2xqnCvjUQVoL57jaMHWfl4SiNQP2vUDSyihbht5Hqw9tuoK58Drsv6FgQy1b82YNEnm86afFYK204qnSzo9NIw32dCbQSxeAlRPMkyUwwaLKvwY6pgEN5fSOtDC1XqKcvyf2%2FwHronKvBMBzjeyW2TAZRjGqGsujgtHeqDLjr7xsCVA9rhclLAIy8Ih51rGKCWy1CC3MDfLcDgLyXMmWrAPLhvY0IBk%2BYR6fUk8MHujadCnnz78Jnzxv4OvZ3UfHzKIh%2FBJK2Wu67tYT1VJjosNtfu83KPucr6I1ECrGd5UYEd9oOApngWw%2BWAvtRc9RCRem9DYE3y4XMMFf&X-Amz-Signature=67442e53ad2bd046bc628451f67fa2054d47b97aca0e4d321860b9a3239eb931&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUY7XVK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWBKr2n%2F%2B13X27yrvoZp718%2FSPWC4s2EbOs1NOvcYskAiBscW3g0LaOvBP1vMKKklQIBeXBs1fLp0ZPuAQq7qyZfir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMnxCAs8GG6HCBJYqVKtwDRLVyurJ2dpILuQbNfHyX%2FV88Ndk99Gd%2Fzm0w21eH1Zh7AfKnZJZ0LoUqlK2WyuVkE05dvC1wLBaheTHrPLnsC6HNfdiLFHT244z1jLvZism3iNICNoWpnGMRPw26Jsg285MBw3q9TAs4J0VFcGSK0%2Fo5mPXG90Hj8Av7nRq96BcDDsESy6czKISHqIk3tYMKnhwQciNy0Wjjb6R5GtiRC%2FMogP9cbSP8oSCOzA2iz%2Fm3npED%2B2EB%2BdhXWA6xu7YA82ovjX9uzN1mr0E4pB0VhH8e7%2FpUqNep41VpXmMC79DF1ygmJiRpe8yiyfBQ1GBpMvB340erjUbiX8ja6tijwSP0t%2F523NRqOyv1dklxFzXfRKCpVTPhEZ9QScfvr2HNTwy73l3Dy%2Btl4ctkDIFkVOwu3yjYqhtiYyZfpcWA8ekZF6stejkLZYHxOxPVxgrb6uM%2FN%2F7cH9YLOcX3iaHu9%2FRpQfesjDXZmIavz%2F9vM27JplFyNE%2B8EzHqe6ifEVeGmDGLwzLM2sxumZupgYvB2xqnCvjUQVoL57jaMHWfl4SiNQP2vUDSyihbht5Hqw9tuoK58Drsv6FgQy1b82YNEnm86afFYK204qnSzo9NIw32dCbQSxeAlRPMkyUwwaLKvwY6pgEN5fSOtDC1XqKcvyf2%2FwHronKvBMBzjeyW2TAZRjGqGsujgtHeqDLjr7xsCVA9rhclLAIy8Ih51rGKCWy1CC3MDfLcDgLyXMmWrAPLhvY0IBk%2BYR6fUk8MHujadCnnz78Jnzxv4OvZ3UfHzKIh%2FBJK2Wu67tYT1VJjosNtfu83KPucr6I1ECrGd5UYEd9oOApngWw%2BWAvtRc9RCRem9DYE3y4XMMFf&X-Amz-Signature=80c5c89420f6275927c90c46e2bafdce3a38b02c4b788e0bd44dda178a89f4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
