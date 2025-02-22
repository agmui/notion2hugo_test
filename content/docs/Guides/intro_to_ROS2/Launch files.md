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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVQPZKOP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpNju8Hr3b9%2BmCGIposjVBjMMTYDPCyvWTuXxysa64AIhAKcd%2F6qKb3fkwzCZLw%2FzDeD066rmv2Mcko6uXNz5ZA6uKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJBw%2B4mDZKT9Pc5zsq3APJF9jpDATNnaYJQ2FsSXVN80wnZB8ZM08OQthuqGkkb780%2BuvrvAo4lZ2RKBjkM9hR0mPUM%2BtqAaT0Zkj5zd2xo7p%2FOCZ6lPKO9CRuFPgZglF4GSSekZzGFrv2RnWZFp%2Brd06%2FAhHfW%2F%2BUNfYWd6INjU%2Fo1lv99WAX3x0L1aFUD0hbQ8t3X%2Fe7NPV18JMhtFI9EAu51iv0hgG0YQCQRjD1qwsDqt94XcmS8LkP1JQ%2Fo06Jh8lQyRIimmBn9ErVZ9AGs7nfLxp6EcjGQDNCTuqRQbLia36doJTUKb%2FCJHYuZePjT9Lt%2Ftq%2Ft70e4vOIDKzo3sr4ysphNz%2FfzzoZUbDXfzpAmfCMCPbEhdwBmxyDMxptMH40i0HOMcEla%2BfTRcs4XvYimVXgo0LnqRXET8%2Bb%2Bm1kbi45k75v6U1BT6%2BtnCm6AWgSrvUDntjAUsSG1D49rRRUBxjRptufMlx9p%2BPlyKoQ3knmvwfZXbEeQayEIBKqzpdNQ4S3bMfpccxco8xhFq1QHYI%2FOQcjU5uiMd7BJ3cVXWXJ2LM%2F3eSxSwhGjosf5htTR7nIak2h3AeDcrfl1kk%2FVtBQDMSe9g3a48S6423RePjk1D%2Fb6dFV2WI7an9Ri3sE1WPrMNSynTCL3ue9BjqkAVReFSgXGFVQtihoCcCquOs2h0gMtYUpBq2JJ1QUPpH9KVodgjRoriVw9TA%2Fl%2FuzgA1ETELiaVwpLIy2Q%2F28vEeLYBmVfw1La6Mh8qzppSwEGpitUxNvWH61QrpAYrFEnG4FuZEkuRzW%2BjzBETGDmSYMggFmXln2jsboTA4fkiT%2FEhO0XhP7x0tkey9CXIdrMa3wwFYyXiUi7cNJoZGePHpXlfzi&X-Amz-Signature=1e5eb1ea353358506a325ea428edc95c6747502770d68d73f5bf8c5c604afcef&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVQPZKOP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpNju8Hr3b9%2BmCGIposjVBjMMTYDPCyvWTuXxysa64AIhAKcd%2F6qKb3fkwzCZLw%2FzDeD066rmv2Mcko6uXNz5ZA6uKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJBw%2B4mDZKT9Pc5zsq3APJF9jpDATNnaYJQ2FsSXVN80wnZB8ZM08OQthuqGkkb780%2BuvrvAo4lZ2RKBjkM9hR0mPUM%2BtqAaT0Zkj5zd2xo7p%2FOCZ6lPKO9CRuFPgZglF4GSSekZzGFrv2RnWZFp%2Brd06%2FAhHfW%2F%2BUNfYWd6INjU%2Fo1lv99WAX3x0L1aFUD0hbQ8t3X%2Fe7NPV18JMhtFI9EAu51iv0hgG0YQCQRjD1qwsDqt94XcmS8LkP1JQ%2Fo06Jh8lQyRIimmBn9ErVZ9AGs7nfLxp6EcjGQDNCTuqRQbLia36doJTUKb%2FCJHYuZePjT9Lt%2Ftq%2Ft70e4vOIDKzo3sr4ysphNz%2FfzzoZUbDXfzpAmfCMCPbEhdwBmxyDMxptMH40i0HOMcEla%2BfTRcs4XvYimVXgo0LnqRXET8%2Bb%2Bm1kbi45k75v6U1BT6%2BtnCm6AWgSrvUDntjAUsSG1D49rRRUBxjRptufMlx9p%2BPlyKoQ3knmvwfZXbEeQayEIBKqzpdNQ4S3bMfpccxco8xhFq1QHYI%2FOQcjU5uiMd7BJ3cVXWXJ2LM%2F3eSxSwhGjosf5htTR7nIak2h3AeDcrfl1kk%2FVtBQDMSe9g3a48S6423RePjk1D%2Fb6dFV2WI7an9Ri3sE1WPrMNSynTCL3ue9BjqkAVReFSgXGFVQtihoCcCquOs2h0gMtYUpBq2JJ1QUPpH9KVodgjRoriVw9TA%2Fl%2FuzgA1ETELiaVwpLIy2Q%2F28vEeLYBmVfw1La6Mh8qzppSwEGpitUxNvWH61QrpAYrFEnG4FuZEkuRzW%2BjzBETGDmSYMggFmXln2jsboTA4fkiT%2FEhO0XhP7x0tkey9CXIdrMa3wwFYyXiUi7cNJoZGePHpXlfzi&X-Amz-Signature=cea352b9fd74fb83406ae2056502711f038d4d7d0d384e83cb689072f2911c16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVQPZKOP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxpNju8Hr3b9%2BmCGIposjVBjMMTYDPCyvWTuXxysa64AIhAKcd%2F6qKb3fkwzCZLw%2FzDeD066rmv2Mcko6uXNz5ZA6uKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJBw%2B4mDZKT9Pc5zsq3APJF9jpDATNnaYJQ2FsSXVN80wnZB8ZM08OQthuqGkkb780%2BuvrvAo4lZ2RKBjkM9hR0mPUM%2BtqAaT0Zkj5zd2xo7p%2FOCZ6lPKO9CRuFPgZglF4GSSekZzGFrv2RnWZFp%2Brd06%2FAhHfW%2F%2BUNfYWd6INjU%2Fo1lv99WAX3x0L1aFUD0hbQ8t3X%2Fe7NPV18JMhtFI9EAu51iv0hgG0YQCQRjD1qwsDqt94XcmS8LkP1JQ%2Fo06Jh8lQyRIimmBn9ErVZ9AGs7nfLxp6EcjGQDNCTuqRQbLia36doJTUKb%2FCJHYuZePjT9Lt%2Ftq%2Ft70e4vOIDKzo3sr4ysphNz%2FfzzoZUbDXfzpAmfCMCPbEhdwBmxyDMxptMH40i0HOMcEla%2BfTRcs4XvYimVXgo0LnqRXET8%2Bb%2Bm1kbi45k75v6U1BT6%2BtnCm6AWgSrvUDntjAUsSG1D49rRRUBxjRptufMlx9p%2BPlyKoQ3knmvwfZXbEeQayEIBKqzpdNQ4S3bMfpccxco8xhFq1QHYI%2FOQcjU5uiMd7BJ3cVXWXJ2LM%2F3eSxSwhGjosf5htTR7nIak2h3AeDcrfl1kk%2FVtBQDMSe9g3a48S6423RePjk1D%2Fb6dFV2WI7an9Ri3sE1WPrMNSynTCL3ue9BjqkAVReFSgXGFVQtihoCcCquOs2h0gMtYUpBq2JJ1QUPpH9KVodgjRoriVw9TA%2Fl%2FuzgA1ETELiaVwpLIy2Q%2F28vEeLYBmVfw1La6Mh8qzppSwEGpitUxNvWH61QrpAYrFEnG4FuZEkuRzW%2BjzBETGDmSYMggFmXln2jsboTA4fkiT%2FEhO0XhP7x0tkey9CXIdrMa3wwFYyXiUi7cNJoZGePHpXlfzi&X-Amz-Signature=07b0d7e047bfb9dea1c74abb6d5a18f79b68ec2c8a29c842ca4684ec16b5c288&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
