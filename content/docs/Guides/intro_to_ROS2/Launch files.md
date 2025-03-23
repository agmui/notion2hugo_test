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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRBRYTD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL3IPGV0PFJvybmQNsuBtln6HOxncBbwrLkVxC%2B1MjMAiEA5zqK62gEyHtVvImO2ctEtPyQG6KrNdhndwdpyQ16TQgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEvjccQ7MtkIBT3wSrcA3SziFfMgGgYJCrfBwDvwZQwsox5wqbJDu02abFxYqs%2F7ebhYJZapoi%2BEoqZ%2BVxJz3F7UyYP7%2BKV28nOTFcUYzDQR2VJ9TABXrz%2F1vf%2B1usLdmFClmEPiVhTvFstvwfp2GToLI%2FA8Ks1FnUzcJP%2BnLBnlzayPbTe0YZL%2BoBlcIlwIjfcDqIfgwPJETmpDaW6zxpFtU78%2F%2BUkCcExewFKJFSQqXMHYd1XkWCeF3cJ2qZS5FDDf8RidXGmziHzCY5exUQF9WWqu4nJ5meG1TAzFCknhdEJ4lIm55p6uJ4ufr8ZaCfNViw34Qa4DAQ9324wr%2BoNC2u2yNwexQDJQkUWIQ2DvhGZ2UIjZsKAHG4ZDVXxuSEa6S3z1DH8tBpDvH0CoewqxPSb1a5XtYb3iPAMa9m5DvPixtfw4y6oyUMf9HZqIuhd1nleb9FT0hLCy9WQaH5h%2FpqY4633jhlIgabSMDUmm0Xs9KY%2B6rAWYPgTxbxkamNiXRzOe3Bu5R%2BnLGVo4WZ2hWWOLFKHKaIwIMvPx3q1gudpvDz30B4Pj%2F6beiudKSM2JYehrUKt2nx8TJbJVWWfcHjVJiQt4jzXhixSTuhDXBDCWVqyum8Q1xVFpPGZ06t2yDiuH8U43j3HMITLgb8GOqUBsB63ObzkIQz%2FvHLFSiqwPAzrf5a0UWM52cStqYO3PagUy7P0t7NoSJ41liqUd8g04VXWu0rQI%2BHuKpVrsbRyUMgFznT9A%2BISk7GIU1nluTs9a9DSkPYynecB7CdLYd3%2B%2BKpFd1xB%2BvgHH7zc%2BJ63QVnuOsBc9XxjTT7lyZ34qeuaz5nBN%2F3M07j5aA2EkaBQykbuWZ5pZW9qT9uvk7NMuprBYWT7&X-Amz-Signature=6f813993895b6859044153edfc1b2639c8dcc91657ec0cefb1c8157d72b0b641&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRBRYTD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL3IPGV0PFJvybmQNsuBtln6HOxncBbwrLkVxC%2B1MjMAiEA5zqK62gEyHtVvImO2ctEtPyQG6KrNdhndwdpyQ16TQgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEvjccQ7MtkIBT3wSrcA3SziFfMgGgYJCrfBwDvwZQwsox5wqbJDu02abFxYqs%2F7ebhYJZapoi%2BEoqZ%2BVxJz3F7UyYP7%2BKV28nOTFcUYzDQR2VJ9TABXrz%2F1vf%2B1usLdmFClmEPiVhTvFstvwfp2GToLI%2FA8Ks1FnUzcJP%2BnLBnlzayPbTe0YZL%2BoBlcIlwIjfcDqIfgwPJETmpDaW6zxpFtU78%2F%2BUkCcExewFKJFSQqXMHYd1XkWCeF3cJ2qZS5FDDf8RidXGmziHzCY5exUQF9WWqu4nJ5meG1TAzFCknhdEJ4lIm55p6uJ4ufr8ZaCfNViw34Qa4DAQ9324wr%2BoNC2u2yNwexQDJQkUWIQ2DvhGZ2UIjZsKAHG4ZDVXxuSEa6S3z1DH8tBpDvH0CoewqxPSb1a5XtYb3iPAMa9m5DvPixtfw4y6oyUMf9HZqIuhd1nleb9FT0hLCy9WQaH5h%2FpqY4633jhlIgabSMDUmm0Xs9KY%2B6rAWYPgTxbxkamNiXRzOe3Bu5R%2BnLGVo4WZ2hWWOLFKHKaIwIMvPx3q1gudpvDz30B4Pj%2F6beiudKSM2JYehrUKt2nx8TJbJVWWfcHjVJiQt4jzXhixSTuhDXBDCWVqyum8Q1xVFpPGZ06t2yDiuH8U43j3HMITLgb8GOqUBsB63ObzkIQz%2FvHLFSiqwPAzrf5a0UWM52cStqYO3PagUy7P0t7NoSJ41liqUd8g04VXWu0rQI%2BHuKpVrsbRyUMgFznT9A%2BISk7GIU1nluTs9a9DSkPYynecB7CdLYd3%2B%2BKpFd1xB%2BvgHH7zc%2BJ63QVnuOsBc9XxjTT7lyZ34qeuaz5nBN%2F3M07j5aA2EkaBQykbuWZ5pZW9qT9uvk7NMuprBYWT7&X-Amz-Signature=490d06881ae9f3ed444f963de1fe691a08c96b0d7e53b2e3a1c58a8c2910cb21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRBRYTD%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGL3IPGV0PFJvybmQNsuBtln6HOxncBbwrLkVxC%2B1MjMAiEA5zqK62gEyHtVvImO2ctEtPyQG6KrNdhndwdpyQ16TQgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEvjccQ7MtkIBT3wSrcA3SziFfMgGgYJCrfBwDvwZQwsox5wqbJDu02abFxYqs%2F7ebhYJZapoi%2BEoqZ%2BVxJz3F7UyYP7%2BKV28nOTFcUYzDQR2VJ9TABXrz%2F1vf%2B1usLdmFClmEPiVhTvFstvwfp2GToLI%2FA8Ks1FnUzcJP%2BnLBnlzayPbTe0YZL%2BoBlcIlwIjfcDqIfgwPJETmpDaW6zxpFtU78%2F%2BUkCcExewFKJFSQqXMHYd1XkWCeF3cJ2qZS5FDDf8RidXGmziHzCY5exUQF9WWqu4nJ5meG1TAzFCknhdEJ4lIm55p6uJ4ufr8ZaCfNViw34Qa4DAQ9324wr%2BoNC2u2yNwexQDJQkUWIQ2DvhGZ2UIjZsKAHG4ZDVXxuSEa6S3z1DH8tBpDvH0CoewqxPSb1a5XtYb3iPAMa9m5DvPixtfw4y6oyUMf9HZqIuhd1nleb9FT0hLCy9WQaH5h%2FpqY4633jhlIgabSMDUmm0Xs9KY%2B6rAWYPgTxbxkamNiXRzOe3Bu5R%2BnLGVo4WZ2hWWOLFKHKaIwIMvPx3q1gudpvDz30B4Pj%2F6beiudKSM2JYehrUKt2nx8TJbJVWWfcHjVJiQt4jzXhixSTuhDXBDCWVqyum8Q1xVFpPGZ06t2yDiuH8U43j3HMITLgb8GOqUBsB63ObzkIQz%2FvHLFSiqwPAzrf5a0UWM52cStqYO3PagUy7P0t7NoSJ41liqUd8g04VXWu0rQI%2BHuKpVrsbRyUMgFznT9A%2BISk7GIU1nluTs9a9DSkPYynecB7CdLYd3%2B%2BKpFd1xB%2BvgHH7zc%2BJ63QVnuOsBc9XxjTT7lyZ34qeuaz5nBN%2F3M07j5aA2EkaBQykbuWZ5pZW9qT9uvk7NMuprBYWT7&X-Amz-Signature=9be2ec58e4e1cdd8809038fa77de0ff1f77955252baee79d497e9acda2b19212&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
