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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAG2IZF7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBnu1aaxIR5v6nbMQ4EIAqtgC%2BqjKsJ4xZorJX%2BQ%2BJQlAiEA3Arw2J34IBVt2gRu5khY1Y765WzQaWvquVWKAqWjtKwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHBMH51hi4gibcUxICrcA4qDqonSGuxAUq%2Bv7pQdAGGN72dHUWyeoA8trq7MpvRN8azHRhjn6SNUvcYiD5hdOksxdoS%2BpHEiRE9rk6xXMGK6zuN7M0bG2rQ7tPK%2Bjvm4vWVteR0W6pMwnSDVTwNuCLVj6a%2FeshWgf1yeX7L%2FD31QMGO%2BItUL2JwDYOSPTiy3LLCKtCsBH%2FcLYwsHN0X%2FcHJ8fyynJd5lI%2FpQR5MefbulzRoOB2BAqoQEsRklBsUYcMQKIKJYWcb22Cig34rlrV65ibl%2BnvCKXxxo3OqV2Od2k3tQjDss9RorrbrduSOdCgzKTc2jQM5HOczv6yUIsSzHtRt7LZIl9fJ2BvT3VXvXgPGMKCa%2BTtteamDKhCQHHCQ4cdRokOpx4Xl3ahHBnLk4xpeqoIaNbpj7XbZ0eRV10kY2K9rEzzJIo9kO3TDEbPGA9unVdi8%2B0pshqjE%2FjJj81VKpho0ZF20FxSeWSanxD3TOJ1llAgftexk4lh0d6aZuCHIc1lTqz1Huwg6I13cWXN%2BqzvxJt0nGVwVa6g3kRTay%2BjBQuDZYcTK5qJfh4Kksuc5eGi70rE6la9hMh06Z96YjshK8TPesrUQmTtQfglqGm6QO9riZaf%2BptwoXAu3FxBMLRC2YuuCFMKiK5MMGOqUBDPAFYvjhtwDGVY%2BOVec99%2F4REEZDk6jO6DU6DkiXmdL5fhYpTzxjthopn%2BJE0HlcrtXuW5V8ucOJ06TJn1G90dxes%2ByEySB2%2FWAWJHIWCDyil1kXTk0c%2BANieq7vdpxYXV3zcdPC4b3Uc8di4xFyIKG5MT0DtE1p7kgYvmlgnP8RrcrasSAPjgnToSBFH%2BJnEY7PbVMbNQUO%2B%2FIgDxByL6ZTDrzM&X-Amz-Signature=1ff26bc9be2acb7c058c85e5ca64b52983807cf56b953aaaf5b9c31c088783dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAG2IZF7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBnu1aaxIR5v6nbMQ4EIAqtgC%2BqjKsJ4xZorJX%2BQ%2BJQlAiEA3Arw2J34IBVt2gRu5khY1Y765WzQaWvquVWKAqWjtKwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHBMH51hi4gibcUxICrcA4qDqonSGuxAUq%2Bv7pQdAGGN72dHUWyeoA8trq7MpvRN8azHRhjn6SNUvcYiD5hdOksxdoS%2BpHEiRE9rk6xXMGK6zuN7M0bG2rQ7tPK%2Bjvm4vWVteR0W6pMwnSDVTwNuCLVj6a%2FeshWgf1yeX7L%2FD31QMGO%2BItUL2JwDYOSPTiy3LLCKtCsBH%2FcLYwsHN0X%2FcHJ8fyynJd5lI%2FpQR5MefbulzRoOB2BAqoQEsRklBsUYcMQKIKJYWcb22Cig34rlrV65ibl%2BnvCKXxxo3OqV2Od2k3tQjDss9RorrbrduSOdCgzKTc2jQM5HOczv6yUIsSzHtRt7LZIl9fJ2BvT3VXvXgPGMKCa%2BTtteamDKhCQHHCQ4cdRokOpx4Xl3ahHBnLk4xpeqoIaNbpj7XbZ0eRV10kY2K9rEzzJIo9kO3TDEbPGA9unVdi8%2B0pshqjE%2FjJj81VKpho0ZF20FxSeWSanxD3TOJ1llAgftexk4lh0d6aZuCHIc1lTqz1Huwg6I13cWXN%2BqzvxJt0nGVwVa6g3kRTay%2BjBQuDZYcTK5qJfh4Kksuc5eGi70rE6la9hMh06Z96YjshK8TPesrUQmTtQfglqGm6QO9riZaf%2BptwoXAu3FxBMLRC2YuuCFMKiK5MMGOqUBDPAFYvjhtwDGVY%2BOVec99%2F4REEZDk6jO6DU6DkiXmdL5fhYpTzxjthopn%2BJE0HlcrtXuW5V8ucOJ06TJn1G90dxes%2ByEySB2%2FWAWJHIWCDyil1kXTk0c%2BANieq7vdpxYXV3zcdPC4b3Uc8di4xFyIKG5MT0DtE1p7kgYvmlgnP8RrcrasSAPjgnToSBFH%2BJnEY7PbVMbNQUO%2B%2FIgDxByL6ZTDrzM&X-Amz-Signature=1260dfe62d16ca8e12fc4ed19d9a446d553deea34e54a88bbcbb08b5cc8b87ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAG2IZF7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBnu1aaxIR5v6nbMQ4EIAqtgC%2BqjKsJ4xZorJX%2BQ%2BJQlAiEA3Arw2J34IBVt2gRu5khY1Y765WzQaWvquVWKAqWjtKwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHBMH51hi4gibcUxICrcA4qDqonSGuxAUq%2Bv7pQdAGGN72dHUWyeoA8trq7MpvRN8azHRhjn6SNUvcYiD5hdOksxdoS%2BpHEiRE9rk6xXMGK6zuN7M0bG2rQ7tPK%2Bjvm4vWVteR0W6pMwnSDVTwNuCLVj6a%2FeshWgf1yeX7L%2FD31QMGO%2BItUL2JwDYOSPTiy3LLCKtCsBH%2FcLYwsHN0X%2FcHJ8fyynJd5lI%2FpQR5MefbulzRoOB2BAqoQEsRklBsUYcMQKIKJYWcb22Cig34rlrV65ibl%2BnvCKXxxo3OqV2Od2k3tQjDss9RorrbrduSOdCgzKTc2jQM5HOczv6yUIsSzHtRt7LZIl9fJ2BvT3VXvXgPGMKCa%2BTtteamDKhCQHHCQ4cdRokOpx4Xl3ahHBnLk4xpeqoIaNbpj7XbZ0eRV10kY2K9rEzzJIo9kO3TDEbPGA9unVdi8%2B0pshqjE%2FjJj81VKpho0ZF20FxSeWSanxD3TOJ1llAgftexk4lh0d6aZuCHIc1lTqz1Huwg6I13cWXN%2BqzvxJt0nGVwVa6g3kRTay%2BjBQuDZYcTK5qJfh4Kksuc5eGi70rE6la9hMh06Z96YjshK8TPesrUQmTtQfglqGm6QO9riZaf%2BptwoXAu3FxBMLRC2YuuCFMKiK5MMGOqUBDPAFYvjhtwDGVY%2BOVec99%2F4REEZDk6jO6DU6DkiXmdL5fhYpTzxjthopn%2BJE0HlcrtXuW5V8ucOJ06TJn1G90dxes%2ByEySB2%2FWAWJHIWCDyil1kXTk0c%2BANieq7vdpxYXV3zcdPC4b3Uc8di4xFyIKG5MT0DtE1p7kgYvmlgnP8RrcrasSAPjgnToSBFH%2BJnEY7PbVMbNQUO%2B%2FIgDxByL6ZTDrzM&X-Amz-Signature=66cfdbe79f9252e2390fdc686efa0eb519323baa102b2e4aa8ba53b062782d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
