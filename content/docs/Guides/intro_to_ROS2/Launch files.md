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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4THDTD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICov9sGRlENbC0WKFtppSlKPHZykL3mhbgt0oowz40JWAiARNwAmOTJcWEXnEqaSX5FiAEkMErdYbGMhlxjy8fSzECqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPrZkRnXVrCxO5cEKtwDG8TstgRTcwJDacT3LL4w%2B%2B9BGfP1nC864eXqtqUHZq2y12BK9JxtLC3JloQSvBIli94DJkpCsogyo9P%2BdcPOXDbbVyZAgxKhhCrepb26DgAqbb1%2B9QaxhMR9y8vnYkl%2BB8KybOdKSyUi98OUOPY8sMMBwmhDRlOLDUMdWqX9Zul2%2BahL4B9LFxeiwwh3bTC42zz%2F4GyVQOpFkYrJaMzJ8%2BdkPmlxhWIEMuhOA21ssbXT594i6yWRgNywQ6Tr%2B9NAfz6PJ932Y0ZAkeOmId19wxK%2BMYDj2j2NsBgTByzC3TyDJd9BcEzQuOGQL%2FRoTagm4NaPJ2p%2FdtZ6rxNxp1IYuFQH0bR39I%2FebplXgYLRxKu1q%2F8zEfJDtln5jLfQTHdmSJg9RTKW3FF5m4wQn9n8Quhl0NEnq1lIt55CHd9XC0wE3ZNtVI9GR7jTyPRX8WCjq3YQOLPqtUZVGqCzUC%2FXxv3aEafbszn6vhWeGJumMwZwQ8aodTbWgWhgWEGyZ%2B1S%2FuI5gtm3xWbIeU848wgzuAa%2FNbX9S40Rsfs1voySjZK6d%2FpQhdL6XwaEI9h1DDDtJHqn94eKjd%2FXx%2Bn8zQFiXKUzSmr58fNjkXqa%2F%2Bsuq%2FaSW%2F3t3y6nLv7aJKwwuKTGwAY6pgGLb9MOPpKTHqVZkbK3J3Kf6lBpkGnncV4hbt%2FSX2Kpwv8ea040A%2F%2B%2FXswU89whCI8IFca7lGKR8WqWAc0fospcHw9oiLhRWeIuJyEi8qmkoMHFmOqwhzve2F5eLT55Y6Mz19rTR6PA4cF9lIhCufZheXqCpIwAD4Po4JyQUf%2FG4CyeSw7oR9BT7SmNH0yqldtawU79fgA9fuJ5xMJLruJfy1tm7vrz&X-Amz-Signature=9f436fe484556d4bc259c5572728b5b0d50794f639d2b37a081abd520bb15021&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4THDTD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICov9sGRlENbC0WKFtppSlKPHZykL3mhbgt0oowz40JWAiARNwAmOTJcWEXnEqaSX5FiAEkMErdYbGMhlxjy8fSzECqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPrZkRnXVrCxO5cEKtwDG8TstgRTcwJDacT3LL4w%2B%2B9BGfP1nC864eXqtqUHZq2y12BK9JxtLC3JloQSvBIli94DJkpCsogyo9P%2BdcPOXDbbVyZAgxKhhCrepb26DgAqbb1%2B9QaxhMR9y8vnYkl%2BB8KybOdKSyUi98OUOPY8sMMBwmhDRlOLDUMdWqX9Zul2%2BahL4B9LFxeiwwh3bTC42zz%2F4GyVQOpFkYrJaMzJ8%2BdkPmlxhWIEMuhOA21ssbXT594i6yWRgNywQ6Tr%2B9NAfz6PJ932Y0ZAkeOmId19wxK%2BMYDj2j2NsBgTByzC3TyDJd9BcEzQuOGQL%2FRoTagm4NaPJ2p%2FdtZ6rxNxp1IYuFQH0bR39I%2FebplXgYLRxKu1q%2F8zEfJDtln5jLfQTHdmSJg9RTKW3FF5m4wQn9n8Quhl0NEnq1lIt55CHd9XC0wE3ZNtVI9GR7jTyPRX8WCjq3YQOLPqtUZVGqCzUC%2FXxv3aEafbszn6vhWeGJumMwZwQ8aodTbWgWhgWEGyZ%2B1S%2FuI5gtm3xWbIeU848wgzuAa%2FNbX9S40Rsfs1voySjZK6d%2FpQhdL6XwaEI9h1DDDtJHqn94eKjd%2FXx%2Bn8zQFiXKUzSmr58fNjkXqa%2F%2Bsuq%2FaSW%2F3t3y6nLv7aJKwwuKTGwAY6pgGLb9MOPpKTHqVZkbK3J3Kf6lBpkGnncV4hbt%2FSX2Kpwv8ea040A%2F%2B%2FXswU89whCI8IFca7lGKR8WqWAc0fospcHw9oiLhRWeIuJyEi8qmkoMHFmOqwhzve2F5eLT55Y6Mz19rTR6PA4cF9lIhCufZheXqCpIwAD4Po4JyQUf%2FG4CyeSw7oR9BT7SmNH0yqldtawU79fgA9fuJ5xMJLruJfy1tm7vrz&X-Amz-Signature=5a4281afae87c8253b3c65002884ef6799eebfcab2acad6dffef3ec9574b37ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4THDTD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICov9sGRlENbC0WKFtppSlKPHZykL3mhbgt0oowz40JWAiARNwAmOTJcWEXnEqaSX5FiAEkMErdYbGMhlxjy8fSzECqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPrZkRnXVrCxO5cEKtwDG8TstgRTcwJDacT3LL4w%2B%2B9BGfP1nC864eXqtqUHZq2y12BK9JxtLC3JloQSvBIli94DJkpCsogyo9P%2BdcPOXDbbVyZAgxKhhCrepb26DgAqbb1%2B9QaxhMR9y8vnYkl%2BB8KybOdKSyUi98OUOPY8sMMBwmhDRlOLDUMdWqX9Zul2%2BahL4B9LFxeiwwh3bTC42zz%2F4GyVQOpFkYrJaMzJ8%2BdkPmlxhWIEMuhOA21ssbXT594i6yWRgNywQ6Tr%2B9NAfz6PJ932Y0ZAkeOmId19wxK%2BMYDj2j2NsBgTByzC3TyDJd9BcEzQuOGQL%2FRoTagm4NaPJ2p%2FdtZ6rxNxp1IYuFQH0bR39I%2FebplXgYLRxKu1q%2F8zEfJDtln5jLfQTHdmSJg9RTKW3FF5m4wQn9n8Quhl0NEnq1lIt55CHd9XC0wE3ZNtVI9GR7jTyPRX8WCjq3YQOLPqtUZVGqCzUC%2FXxv3aEafbszn6vhWeGJumMwZwQ8aodTbWgWhgWEGyZ%2B1S%2FuI5gtm3xWbIeU848wgzuAa%2FNbX9S40Rsfs1voySjZK6d%2FpQhdL6XwaEI9h1DDDtJHqn94eKjd%2FXx%2Bn8zQFiXKUzSmr58fNjkXqa%2F%2Bsuq%2FaSW%2F3t3y6nLv7aJKwwuKTGwAY6pgGLb9MOPpKTHqVZkbK3J3Kf6lBpkGnncV4hbt%2FSX2Kpwv8ea040A%2F%2B%2FXswU89whCI8IFca7lGKR8WqWAc0fospcHw9oiLhRWeIuJyEi8qmkoMHFmOqwhzve2F5eLT55Y6Mz19rTR6PA4cF9lIhCufZheXqCpIwAD4Po4JyQUf%2FG4CyeSw7oR9BT7SmNH0yqldtawU79fgA9fuJ5xMJLruJfy1tm7vrz&X-Amz-Signature=2ed1579665189f756cb1d4c9733ff1ec483ab503aabe7ccab526a9bf9b6f3cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
