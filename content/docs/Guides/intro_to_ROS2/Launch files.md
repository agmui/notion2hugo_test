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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNYUCK7C%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY6pn8i8g1CjrhoAzO5eYuZcFBmcAzzam3lO741TnGPQIgeJXliurPyQ7lNPy1B%2FVgLCwuUiv2EW2FHaVh7upI3boqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiIJzEphDeACG%2FkIircA4C8AKO9P%2FY%2B4%2F6qZmvn1hmt38NQm%2F8s5xy8k2WZEVXg%2FQlwGJn0jkuSGid6IQ8dOWYvvBXOcuLaTEhNNv5xueBR%2B%2FvS7wSb8h4%2B31KGSYhbB2SI3Un1sqocrzAwyp3qaU46huCLbUojP2Y%2FzkH2sLOXqiUE7xnXujsm3geBbxHMw9xLsAWpDo1emQHWbhjIfrQNgQl2FEkixoG2moUJxKW7qi0A2AULpW57D9spPLzxXpRyU%2BC8wMbH0BjpGLetrYjGO48ovHuOFRsEBJA%2FytdTlC%2Fk8IK%2F03j5gBNydTrheQyX5U3%2BapHMZSGCIcgYUCVQqayNSxjplbA7MnUyw0X8n9457xK901k%2FdWiZ82SVOg42s8FWQV6BXZjquVb2PffUpCb%2Bus7OTDA2b00JsEDAQbzFADuiCToTXiP8bahqGXP9HCKqNtXGzq89xxelF20qk0dKLYwT9e0E6rCbKySrGR%2BKg%2BVY%2FYJ8kJShy34kULAzXG8fANTjlTm3pF2vyMNdnO5kptHcDJD33cEKxa6GuABAvSIkKsFYV1MRAr89P7kZxFTGd25ZcerbQrtOKoaxWLxI1qdZEZ%2FXqg9FIru8CmalNwomSJEr%2FRdBn4fBp5rusFQ2Z22TxQE0MMeekr4GOqUB5ip9Ui5nRU%2F8Y%2BaIni1MdXx16DqqI2Rb7Q%2FjEA4IMXUXHskBoYXKr5zvHMX436amoixJudhx%2Bovy2q%2Fl8y5V9Hmt8Wzc%2F8cnw9ldAeEB7UwZL8J6Z96v77QQZ9g1zbVEKsQoHMQnqvMayLYmhC2Q3Xexd5II3IjS7147pDQidJPhRBjBvkoeAxrzIignSKJB6iUkBWaxdMoWr7f3dO2jj682TFT3&X-Amz-Signature=ea728eb640b512d4247c03d9bd556079dbdba9cd9ea4274559e9c3f0f3ab2cba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNYUCK7C%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY6pn8i8g1CjrhoAzO5eYuZcFBmcAzzam3lO741TnGPQIgeJXliurPyQ7lNPy1B%2FVgLCwuUiv2EW2FHaVh7upI3boqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiIJzEphDeACG%2FkIircA4C8AKO9P%2FY%2B4%2F6qZmvn1hmt38NQm%2F8s5xy8k2WZEVXg%2FQlwGJn0jkuSGid6IQ8dOWYvvBXOcuLaTEhNNv5xueBR%2B%2FvS7wSb8h4%2B31KGSYhbB2SI3Un1sqocrzAwyp3qaU46huCLbUojP2Y%2FzkH2sLOXqiUE7xnXujsm3geBbxHMw9xLsAWpDo1emQHWbhjIfrQNgQl2FEkixoG2moUJxKW7qi0A2AULpW57D9spPLzxXpRyU%2BC8wMbH0BjpGLetrYjGO48ovHuOFRsEBJA%2FytdTlC%2Fk8IK%2F03j5gBNydTrheQyX5U3%2BapHMZSGCIcgYUCVQqayNSxjplbA7MnUyw0X8n9457xK901k%2FdWiZ82SVOg42s8FWQV6BXZjquVb2PffUpCb%2Bus7OTDA2b00JsEDAQbzFADuiCToTXiP8bahqGXP9HCKqNtXGzq89xxelF20qk0dKLYwT9e0E6rCbKySrGR%2BKg%2BVY%2FYJ8kJShy34kULAzXG8fANTjlTm3pF2vyMNdnO5kptHcDJD33cEKxa6GuABAvSIkKsFYV1MRAr89P7kZxFTGd25ZcerbQrtOKoaxWLxI1qdZEZ%2FXqg9FIru8CmalNwomSJEr%2FRdBn4fBp5rusFQ2Z22TxQE0MMeekr4GOqUB5ip9Ui5nRU%2F8Y%2BaIni1MdXx16DqqI2Rb7Q%2FjEA4IMXUXHskBoYXKr5zvHMX436amoixJudhx%2Bovy2q%2Fl8y5V9Hmt8Wzc%2F8cnw9ldAeEB7UwZL8J6Z96v77QQZ9g1zbVEKsQoHMQnqvMayLYmhC2Q3Xexd5II3IjS7147pDQidJPhRBjBvkoeAxrzIignSKJB6iUkBWaxdMoWr7f3dO2jj682TFT3&X-Amz-Signature=2885f9f20877945989ed8af19b85dfc8da80bb412d3e2ad377ea442ffbcb6eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNYUCK7C%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY6pn8i8g1CjrhoAzO5eYuZcFBmcAzzam3lO741TnGPQIgeJXliurPyQ7lNPy1B%2FVgLCwuUiv2EW2FHaVh7upI3boqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiIJzEphDeACG%2FkIircA4C8AKO9P%2FY%2B4%2F6qZmvn1hmt38NQm%2F8s5xy8k2WZEVXg%2FQlwGJn0jkuSGid6IQ8dOWYvvBXOcuLaTEhNNv5xueBR%2B%2FvS7wSb8h4%2B31KGSYhbB2SI3Un1sqocrzAwyp3qaU46huCLbUojP2Y%2FzkH2sLOXqiUE7xnXujsm3geBbxHMw9xLsAWpDo1emQHWbhjIfrQNgQl2FEkixoG2moUJxKW7qi0A2AULpW57D9spPLzxXpRyU%2BC8wMbH0BjpGLetrYjGO48ovHuOFRsEBJA%2FytdTlC%2Fk8IK%2F03j5gBNydTrheQyX5U3%2BapHMZSGCIcgYUCVQqayNSxjplbA7MnUyw0X8n9457xK901k%2FdWiZ82SVOg42s8FWQV6BXZjquVb2PffUpCb%2Bus7OTDA2b00JsEDAQbzFADuiCToTXiP8bahqGXP9HCKqNtXGzq89xxelF20qk0dKLYwT9e0E6rCbKySrGR%2BKg%2BVY%2FYJ8kJShy34kULAzXG8fANTjlTm3pF2vyMNdnO5kptHcDJD33cEKxa6GuABAvSIkKsFYV1MRAr89P7kZxFTGd25ZcerbQrtOKoaxWLxI1qdZEZ%2FXqg9FIru8CmalNwomSJEr%2FRdBn4fBp5rusFQ2Z22TxQE0MMeekr4GOqUB5ip9Ui5nRU%2F8Y%2BaIni1MdXx16DqqI2Rb7Q%2FjEA4IMXUXHskBoYXKr5zvHMX436amoixJudhx%2Bovy2q%2Fl8y5V9Hmt8Wzc%2F8cnw9ldAeEB7UwZL8J6Z96v77QQZ9g1zbVEKsQoHMQnqvMayLYmhC2Q3Xexd5II3IjS7147pDQidJPhRBjBvkoeAxrzIignSKJB6iUkBWaxdMoWr7f3dO2jj682TFT3&X-Amz-Signature=d36f295fae6ae91f616de0a63e4448d92c679d3fff60ae0c5b69d884dc6f18ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
