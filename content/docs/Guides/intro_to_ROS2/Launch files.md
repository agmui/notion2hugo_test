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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFTA4GD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL3Fr2hD3%2F%2BRFzhyshD58XYFV6DQmx%2BDzcQAfK2UzcyAiEAoo7JkPlVVqrIrLZV%2Bu44RDRDzK8%2BaJHqMNUQWvak8MUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHsE2pTuA1B2r9quUyrcA1mFG6ji%2F%2BsLRk1oS8mOslb1QiNky03t7WW21zl5BJNR5OPE6UVQ9x7C7A0RkXKS1xfqCKttjXpW2JKyrG90bWFTe0cntYAKNI5ddbAiw%2F3DVlWki9fXAeCt8mm4bRoHcY2qwMVDJ7h2IP6BC2meYJdB2%2BnYCsvXSrTze%2BFbwGhIhJ6gDRVqEgFQx59icuYOSqcWk2tB8TDWBjoLsBV8CyCm%2Fd3BssDfvK6F1o8e4IuP%2Bio7oxBIsoFQr8F6cG43ddqTTYRoKADkZJvgTzpTwHyWs2sn3lJKoClXqCUGFDWBxL%2FCSVS%2F0aUvHhfAMjRpjVsKiztbp0%2BNNkmJ0NuM%2BXixrwPiDTnnxSii4Do4HYsXndPDxxLbS54hsmkf267dyFDgsBYcovIVPbq6b%2B9RBr9c8B%2BcJnMLw5fp7u96X9Sz18qV1jH1%2F6rBUxuiwhYKHloYKF5fTvhIatw5r3Nyh%2BO66sbmyMkDKXTe%2ByI3qeOWvXP6caKupff2CQVVaJgvfkO5NSdVeg5Zac6qX4vmMs9O72Uiqc6lHJsiM0seAlYUE4beEySOwFNkOsQZQkhD1aMcB9o6TrleeSVzZmeJkgTHAPgNqFhZVTD2Ago901JqdDaYoKGg6guiUFSdML2jo74GOqUBHbI%2BOJyctT%2Ba8qxmiSckE%2BYzsAFZq8e9pfVvQfpZO86GCe9Cl9vnzxccunAkuma8G5IfQOLk9nHalPulFi4oMiQqkDdW%2BhHKQTEFBZxpSLqr7PPn32%2BWdwDEMgVc7A53oH0PKVaSKo852FXAQNIrHT%2FnBT8xhtJRSAwrXXe9tUH1oqxwhNaCfuOn%2FMRrS4LEJ2KHZR20PbrF2jiqiVFJO%2BI0OXK2&X-Amz-Signature=8f2d3624d343a4c9d3edb0a33cf1e3accc71b8e7af042eb124c4e053daff6b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFTA4GD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL3Fr2hD3%2F%2BRFzhyshD58XYFV6DQmx%2BDzcQAfK2UzcyAiEAoo7JkPlVVqrIrLZV%2Bu44RDRDzK8%2BaJHqMNUQWvak8MUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHsE2pTuA1B2r9quUyrcA1mFG6ji%2F%2BsLRk1oS8mOslb1QiNky03t7WW21zl5BJNR5OPE6UVQ9x7C7A0RkXKS1xfqCKttjXpW2JKyrG90bWFTe0cntYAKNI5ddbAiw%2F3DVlWki9fXAeCt8mm4bRoHcY2qwMVDJ7h2IP6BC2meYJdB2%2BnYCsvXSrTze%2BFbwGhIhJ6gDRVqEgFQx59icuYOSqcWk2tB8TDWBjoLsBV8CyCm%2Fd3BssDfvK6F1o8e4IuP%2Bio7oxBIsoFQr8F6cG43ddqTTYRoKADkZJvgTzpTwHyWs2sn3lJKoClXqCUGFDWBxL%2FCSVS%2F0aUvHhfAMjRpjVsKiztbp0%2BNNkmJ0NuM%2BXixrwPiDTnnxSii4Do4HYsXndPDxxLbS54hsmkf267dyFDgsBYcovIVPbq6b%2B9RBr9c8B%2BcJnMLw5fp7u96X9Sz18qV1jH1%2F6rBUxuiwhYKHloYKF5fTvhIatw5r3Nyh%2BO66sbmyMkDKXTe%2ByI3qeOWvXP6caKupff2CQVVaJgvfkO5NSdVeg5Zac6qX4vmMs9O72Uiqc6lHJsiM0seAlYUE4beEySOwFNkOsQZQkhD1aMcB9o6TrleeSVzZmeJkgTHAPgNqFhZVTD2Ago901JqdDaYoKGg6guiUFSdML2jo74GOqUBHbI%2BOJyctT%2Ba8qxmiSckE%2BYzsAFZq8e9pfVvQfpZO86GCe9Cl9vnzxccunAkuma8G5IfQOLk9nHalPulFi4oMiQqkDdW%2BhHKQTEFBZxpSLqr7PPn32%2BWdwDEMgVc7A53oH0PKVaSKo852FXAQNIrHT%2FnBT8xhtJRSAwrXXe9tUH1oqxwhNaCfuOn%2FMRrS4LEJ2KHZR20PbrF2jiqiVFJO%2BI0OXK2&X-Amz-Signature=c67c366bcba996432e7ea7eb556338221044a69c0daee834e252ffd8dd8e7916&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QFTA4GD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEL3Fr2hD3%2F%2BRFzhyshD58XYFV6DQmx%2BDzcQAfK2UzcyAiEAoo7JkPlVVqrIrLZV%2Bu44RDRDzK8%2BaJHqMNUQWvak8MUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHsE2pTuA1B2r9quUyrcA1mFG6ji%2F%2BsLRk1oS8mOslb1QiNky03t7WW21zl5BJNR5OPE6UVQ9x7C7A0RkXKS1xfqCKttjXpW2JKyrG90bWFTe0cntYAKNI5ddbAiw%2F3DVlWki9fXAeCt8mm4bRoHcY2qwMVDJ7h2IP6BC2meYJdB2%2BnYCsvXSrTze%2BFbwGhIhJ6gDRVqEgFQx59icuYOSqcWk2tB8TDWBjoLsBV8CyCm%2Fd3BssDfvK6F1o8e4IuP%2Bio7oxBIsoFQr8F6cG43ddqTTYRoKADkZJvgTzpTwHyWs2sn3lJKoClXqCUGFDWBxL%2FCSVS%2F0aUvHhfAMjRpjVsKiztbp0%2BNNkmJ0NuM%2BXixrwPiDTnnxSii4Do4HYsXndPDxxLbS54hsmkf267dyFDgsBYcovIVPbq6b%2B9RBr9c8B%2BcJnMLw5fp7u96X9Sz18qV1jH1%2F6rBUxuiwhYKHloYKF5fTvhIatw5r3Nyh%2BO66sbmyMkDKXTe%2ByI3qeOWvXP6caKupff2CQVVaJgvfkO5NSdVeg5Zac6qX4vmMs9O72Uiqc6lHJsiM0seAlYUE4beEySOwFNkOsQZQkhD1aMcB9o6TrleeSVzZmeJkgTHAPgNqFhZVTD2Ago901JqdDaYoKGg6guiUFSdML2jo74GOqUBHbI%2BOJyctT%2Ba8qxmiSckE%2BYzsAFZq8e9pfVvQfpZO86GCe9Cl9vnzxccunAkuma8G5IfQOLk9nHalPulFi4oMiQqkDdW%2BhHKQTEFBZxpSLqr7PPn32%2BWdwDEMgVc7A53oH0PKVaSKo852FXAQNIrHT%2FnBT8xhtJRSAwrXXe9tUH1oqxwhNaCfuOn%2FMRrS4LEJ2KHZR20PbrF2jiqiVFJO%2BI0OXK2&X-Amz-Signature=9de20712109ea9141aa765ba3ee4d68e328a1a48405516514cb07dba7176c99d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
