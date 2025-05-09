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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTTQPBK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPV9u9j8n9Fc7H1vwE55z5pgHQf6NbSDbWNj1HRL%2Bm8wIgOOq17spmfDgqXHuH5X0bHsJsJCMWF10xdFYT90Co%2F5UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjIffD%2B%2Bv1T4CKapircAzoVxguPpkP5XRO6FdSWqhN%2FETOAWLHlAAUhXu05TC8z5epV13JT3A4EjaSLyNurLBBZfanzOnrutrpRMnM%2B9P4qJXUHge2ldpc0ozNYJM6y2UrMl9R648zq6P4UUBvbyQXY6%2FEbwOO%2FQOJVWklZAynBtzRKVO3QuY6Vb7EE0hiOW%2FMYBFGB4cvleGeTCRm8CLu3czHA0o4CEdYOlHH%2Bmnsxoaltg8T1j8lc%2F%2FIRt4KuHLAeUSlcMDgk%2FE3ReixuBJnY364i9Qnt0Ijjj6PQPHjI9BtJvcTfpmI4qMpEMSyoDD9oPfbDeKU5jeGjUTDHtnwl67boFGNc3eNJdrTf8UVusS%2BeK7s0WIpUgr512Q5Ed90dNwuelKzn3y3z4CZPYET8dRdYcQDDNSRAoVeBRqUtfAke3VE92KYoen%2Bo%2F1%2FyZ2BNUhsmGRl2z%2BCkM0n%2F1d%2F%2B8TMH5kwjDJcthJZI7Vftc1XkxoRoXNMtZ%2FFguIrWkaIeV3FJqVxFx8KRJ3iSmp0LPOZlvSU4lw%2FWvV2iUhNp3JuY2LlTz%2F601LWQfHvtKEYi0aO6OgThDm16DuHk%2F2BiBj9xP7xldE469ktmwSX7H8m4%2BHH9dHBPTCcCSOHQAb4ed%2B2WtA7WqNJOMP6T98AGOqUBCiuEvRP52Jq7C6fH%2BY3t5hkzeaKz%2FlfnUf1pXv%2BhfMrz2qZmYJ8u2bJ%2Fp4BC6Jf3C9QKY3SO5YuLT7b2SE%2FqIN7B%2FOYE175zw7lpOeUbeZEF6jq7a8sbeYJvvpxpwqjP2mt7pchMGUE70i6se6Oq6aiToqFtx4%2BDX86hhhvDDSz3JTSTMfHFahUPMT%2FxBhyOF1B0vOumy1Bhxq3%2F%2FZh5RaKDcg5E&X-Amz-Signature=67faf0cf1c278d266e6fe08032494f355cafbd64605827960c54d9d4f03f1440&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTTQPBK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPV9u9j8n9Fc7H1vwE55z5pgHQf6NbSDbWNj1HRL%2Bm8wIgOOq17spmfDgqXHuH5X0bHsJsJCMWF10xdFYT90Co%2F5UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjIffD%2B%2Bv1T4CKapircAzoVxguPpkP5XRO6FdSWqhN%2FETOAWLHlAAUhXu05TC8z5epV13JT3A4EjaSLyNurLBBZfanzOnrutrpRMnM%2B9P4qJXUHge2ldpc0ozNYJM6y2UrMl9R648zq6P4UUBvbyQXY6%2FEbwOO%2FQOJVWklZAynBtzRKVO3QuY6Vb7EE0hiOW%2FMYBFGB4cvleGeTCRm8CLu3czHA0o4CEdYOlHH%2Bmnsxoaltg8T1j8lc%2F%2FIRt4KuHLAeUSlcMDgk%2FE3ReixuBJnY364i9Qnt0Ijjj6PQPHjI9BtJvcTfpmI4qMpEMSyoDD9oPfbDeKU5jeGjUTDHtnwl67boFGNc3eNJdrTf8UVusS%2BeK7s0WIpUgr512Q5Ed90dNwuelKzn3y3z4CZPYET8dRdYcQDDNSRAoVeBRqUtfAke3VE92KYoen%2Bo%2F1%2FyZ2BNUhsmGRl2z%2BCkM0n%2F1d%2F%2B8TMH5kwjDJcthJZI7Vftc1XkxoRoXNMtZ%2FFguIrWkaIeV3FJqVxFx8KRJ3iSmp0LPOZlvSU4lw%2FWvV2iUhNp3JuY2LlTz%2F601LWQfHvtKEYi0aO6OgThDm16DuHk%2F2BiBj9xP7xldE469ktmwSX7H8m4%2BHH9dHBPTCcCSOHQAb4ed%2B2WtA7WqNJOMP6T98AGOqUBCiuEvRP52Jq7C6fH%2BY3t5hkzeaKz%2FlfnUf1pXv%2BhfMrz2qZmYJ8u2bJ%2Fp4BC6Jf3C9QKY3SO5YuLT7b2SE%2FqIN7B%2FOYE175zw7lpOeUbeZEF6jq7a8sbeYJvvpxpwqjP2mt7pchMGUE70i6se6Oq6aiToqFtx4%2BDX86hhhvDDSz3JTSTMfHFahUPMT%2FxBhyOF1B0vOumy1Bhxq3%2F%2FZh5RaKDcg5E&X-Amz-Signature=16bd814ad88866aadf762befb875a8b49b4ba87224f11b1231a324e09bcc5fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTTQPBK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPV9u9j8n9Fc7H1vwE55z5pgHQf6NbSDbWNj1HRL%2Bm8wIgOOq17spmfDgqXHuH5X0bHsJsJCMWF10xdFYT90Co%2F5UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjIffD%2B%2Bv1T4CKapircAzoVxguPpkP5XRO6FdSWqhN%2FETOAWLHlAAUhXu05TC8z5epV13JT3A4EjaSLyNurLBBZfanzOnrutrpRMnM%2B9P4qJXUHge2ldpc0ozNYJM6y2UrMl9R648zq6P4UUBvbyQXY6%2FEbwOO%2FQOJVWklZAynBtzRKVO3QuY6Vb7EE0hiOW%2FMYBFGB4cvleGeTCRm8CLu3czHA0o4CEdYOlHH%2Bmnsxoaltg8T1j8lc%2F%2FIRt4KuHLAeUSlcMDgk%2FE3ReixuBJnY364i9Qnt0Ijjj6PQPHjI9BtJvcTfpmI4qMpEMSyoDD9oPfbDeKU5jeGjUTDHtnwl67boFGNc3eNJdrTf8UVusS%2BeK7s0WIpUgr512Q5Ed90dNwuelKzn3y3z4CZPYET8dRdYcQDDNSRAoVeBRqUtfAke3VE92KYoen%2Bo%2F1%2FyZ2BNUhsmGRl2z%2BCkM0n%2F1d%2F%2B8TMH5kwjDJcthJZI7Vftc1XkxoRoXNMtZ%2FFguIrWkaIeV3FJqVxFx8KRJ3iSmp0LPOZlvSU4lw%2FWvV2iUhNp3JuY2LlTz%2F601LWQfHvtKEYi0aO6OgThDm16DuHk%2F2BiBj9xP7xldE469ktmwSX7H8m4%2BHH9dHBPTCcCSOHQAb4ed%2B2WtA7WqNJOMP6T98AGOqUBCiuEvRP52Jq7C6fH%2BY3t5hkzeaKz%2FlfnUf1pXv%2BhfMrz2qZmYJ8u2bJ%2Fp4BC6Jf3C9QKY3SO5YuLT7b2SE%2FqIN7B%2FOYE175zw7lpOeUbeZEF6jq7a8sbeYJvvpxpwqjP2mt7pchMGUE70i6se6Oq6aiToqFtx4%2BDX86hhhvDDSz3JTSTMfHFahUPMT%2FxBhyOF1B0vOumy1Bhxq3%2F%2FZh5RaKDcg5E&X-Amz-Signature=fb2503008d69dede509fb7c7f7a87bac65e321249acb4e0b1a54d5c87745896c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
