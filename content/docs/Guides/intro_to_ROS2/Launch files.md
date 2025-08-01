---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC47S2WY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5yGrMIgHve98h0qgWvSl%2FFDeEfJ4qZC2MJ85LGyFl%2FAIhAIsnwhtsF4HKk1RWDE81JqdDnlU4RwdecG8AXt68imVnKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FQNdyeayN6OLm%2FL4q3AO%2FFT1n%2BOPcLk9ua%2BYHo0dWeoNUgG7SGNymeE%2FL%2FduvoFqfIZ%2BTQojiidt%2FTRoPbDpxFSIqpCuMgH8FyVAVUQW%2FCe1OtEnLW6e%2FV%2BZn5UiOCbJv8zlac0L4F79TKQJ1jOzF%2FcDXTBs3zh7iKqhrH%2BEogTJf0L5csE9JZ0R3alqRUzz7dUldt8XQ1g7SvgpSGRpX%2Buf4X9hCQXvur5wZb7t%2BhgBCXPBbqFXT%2FRui5dUSeAHFPpLeUegauUwGCK8J%2B6UTLzVJ93N9FKqf7d6kIR78NBtAgQqEEVwH4nd9Z4CJWWk5gceEB8Cqq%2Fku3Ms1GnLkay4fxbb8rnsX3HEjx17gegPaEGNjWdtmMrqtbRF03qQRZIX6rJPTf5cG7ly1wXJrP6Bc52wjCP3bSthKFEE0DDgQ0A7OREg1bSiOqvNsEpWKrwJIg%2B8R9tptNc0NShVSYGQXFHBR2c9m0Z2wvyePgCBi43q%2Fo2w%2BLtDYfGdwZHBk260OgEZViXaz70Uklw%2BvRT1Rhd%2Fxq%2F2jI0OSHSNWYxouOBErjQRd3FgrPbOSuRK2yfRQahkYNR1yyDilLB9w5obKc78tGHZtpQ3Y9IktnqdBDeXnjTsoSj%2Fraywsxd17M5zyc4Dd%2B6OsGzDMsLPEBjqkAQfyPkiF1tzhUHlSHfNnwbfjVWgeym%2FHjP7iXn4HWYTBhYk5tIDmnkadXo9KRekiff7pu1JNwl%2BRbZFP%2Bcsp0MyQauOBi9SR7kg1hzpnOStVvnUdyMOMNQemzDzZAQNep175sSG82UyoviOPvHjo8bhmOcXvJ5NdrI7O%2F6miHcOGUhfm%2BCYhupOAtJn8O33wF3AIYPtvhGP7wf1UjVpV1tlr97Vw&X-Amz-Signature=cadf5335b702f34d016169a556f78af75114bda38d7f3aa00ec6fff092b036df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC47S2WY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5yGrMIgHve98h0qgWvSl%2FFDeEfJ4qZC2MJ85LGyFl%2FAIhAIsnwhtsF4HKk1RWDE81JqdDnlU4RwdecG8AXt68imVnKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FQNdyeayN6OLm%2FL4q3AO%2FFT1n%2BOPcLk9ua%2BYHo0dWeoNUgG7SGNymeE%2FL%2FduvoFqfIZ%2BTQojiidt%2FTRoPbDpxFSIqpCuMgH8FyVAVUQW%2FCe1OtEnLW6e%2FV%2BZn5UiOCbJv8zlac0L4F79TKQJ1jOzF%2FcDXTBs3zh7iKqhrH%2BEogTJf0L5csE9JZ0R3alqRUzz7dUldt8XQ1g7SvgpSGRpX%2Buf4X9hCQXvur5wZb7t%2BhgBCXPBbqFXT%2FRui5dUSeAHFPpLeUegauUwGCK8J%2B6UTLzVJ93N9FKqf7d6kIR78NBtAgQqEEVwH4nd9Z4CJWWk5gceEB8Cqq%2Fku3Ms1GnLkay4fxbb8rnsX3HEjx17gegPaEGNjWdtmMrqtbRF03qQRZIX6rJPTf5cG7ly1wXJrP6Bc52wjCP3bSthKFEE0DDgQ0A7OREg1bSiOqvNsEpWKrwJIg%2B8R9tptNc0NShVSYGQXFHBR2c9m0Z2wvyePgCBi43q%2Fo2w%2BLtDYfGdwZHBk260OgEZViXaz70Uklw%2BvRT1Rhd%2Fxq%2F2jI0OSHSNWYxouOBErjQRd3FgrPbOSuRK2yfRQahkYNR1yyDilLB9w5obKc78tGHZtpQ3Y9IktnqdBDeXnjTsoSj%2Fraywsxd17M5zyc4Dd%2B6OsGzDMsLPEBjqkAQfyPkiF1tzhUHlSHfNnwbfjVWgeym%2FHjP7iXn4HWYTBhYk5tIDmnkadXo9KRekiff7pu1JNwl%2BRbZFP%2Bcsp0MyQauOBi9SR7kg1hzpnOStVvnUdyMOMNQemzDzZAQNep175sSG82UyoviOPvHjo8bhmOcXvJ5NdrI7O%2F6miHcOGUhfm%2BCYhupOAtJn8O33wF3AIYPtvhGP7wf1UjVpV1tlr97Vw&X-Amz-Signature=050e341b3a86bfbbb7be1d63eb39a2d34ac41414c98afffa231a1d948daf4b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC47S2WY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5yGrMIgHve98h0qgWvSl%2FFDeEfJ4qZC2MJ85LGyFl%2FAIhAIsnwhtsF4HKk1RWDE81JqdDnlU4RwdecG8AXt68imVnKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FQNdyeayN6OLm%2FL4q3AO%2FFT1n%2BOPcLk9ua%2BYHo0dWeoNUgG7SGNymeE%2FL%2FduvoFqfIZ%2BTQojiidt%2FTRoPbDpxFSIqpCuMgH8FyVAVUQW%2FCe1OtEnLW6e%2FV%2BZn5UiOCbJv8zlac0L4F79TKQJ1jOzF%2FcDXTBs3zh7iKqhrH%2BEogTJf0L5csE9JZ0R3alqRUzz7dUldt8XQ1g7SvgpSGRpX%2Buf4X9hCQXvur5wZb7t%2BhgBCXPBbqFXT%2FRui5dUSeAHFPpLeUegauUwGCK8J%2B6UTLzVJ93N9FKqf7d6kIR78NBtAgQqEEVwH4nd9Z4CJWWk5gceEB8Cqq%2Fku3Ms1GnLkay4fxbb8rnsX3HEjx17gegPaEGNjWdtmMrqtbRF03qQRZIX6rJPTf5cG7ly1wXJrP6Bc52wjCP3bSthKFEE0DDgQ0A7OREg1bSiOqvNsEpWKrwJIg%2B8R9tptNc0NShVSYGQXFHBR2c9m0Z2wvyePgCBi43q%2Fo2w%2BLtDYfGdwZHBk260OgEZViXaz70Uklw%2BvRT1Rhd%2Fxq%2F2jI0OSHSNWYxouOBErjQRd3FgrPbOSuRK2yfRQahkYNR1yyDilLB9w5obKc78tGHZtpQ3Y9IktnqdBDeXnjTsoSj%2Fraywsxd17M5zyc4Dd%2B6OsGzDMsLPEBjqkAQfyPkiF1tzhUHlSHfNnwbfjVWgeym%2FHjP7iXn4HWYTBhYk5tIDmnkadXo9KRekiff7pu1JNwl%2BRbZFP%2Bcsp0MyQauOBi9SR7kg1hzpnOStVvnUdyMOMNQemzDzZAQNep175sSG82UyoviOPvHjo8bhmOcXvJ5NdrI7O%2F6miHcOGUhfm%2BCYhupOAtJn8O33wF3AIYPtvhGP7wf1UjVpV1tlr97Vw&X-Amz-Signature=9f59820281b99eb62695441d44828c95f117a94bf56fc8255eedaff49e4d007d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
