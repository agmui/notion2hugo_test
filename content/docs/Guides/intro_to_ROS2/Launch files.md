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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG23MQZA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBemtF5sLu3RyaBB7x5ahUy3cN0j6BPG5GxMPqnu7qT9AiEArau8T35GgCM0P1CVOv4UsxrHaMqekZw8neGh8bEWH5QqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWyZ4FavRKapdKKLCrcA64PfhjhszNAu5q3Z0Yzt6SULmkUr2taeN7MKv%2BPNOU1SCaeg349A3g26yfX3wuMD6oNHMW63%2B67Qj8DByI2Qo5%2BBLrM25298ySFiAvJgEi3xqVPGVjvyhSaZxzz3sfTBLRir3aGrUBcG%2By1Nel5WhK87ngwoPM9ggEu98H7P3NjkmXq%2BBnZf1wL%2FPa%2FzOVbaN3i7oG5wzNS%2FJVwsbMY4TGnxvj%2BEJF8OGO1fTjDWXKR%2BGrFJKEdmJkv9fnvIVx6%2FqVIWEdf6XTaN0UzAYGRiLwQCLCNcgMzEdTaSlmG6nIkL3%2FEPzMzE8WOALtVWYZZbYS%2B0IWcxMvd7DpMBfABmmSCHsvQyA9SuH7bs4b6QLkQOtleyyFSIKb5U3XJ5b%2BX2bWnUKnObDYXpKlj6VwJuVQpHWlMSOjUw4AuTczFsbbZnskV74332mYC%2FVuSJvvm4H7kw1cIyBg%2Bp9%2F09m1IPCAyqzTMdYo4eoXCJYk9BUJ%2FFUQHjs18pu92DOtCpZss1OMaeufMnQVzmLkkdX1Pn9KsLspHSCiz5S7%2BNA8M3716bElalYlCWh5aB%2FeHxZlo4zdiglr3eFd5CP0W9JgVDHMAvUXikhNIxlMQFXKsX4uKxRtP%2BcvtHm9nNSV4MNCM7bwGOqUBAttY6e1v3lNZZyWpftCi8bE6E18LZAOwn7n3o1vkM4P4unjtLk%2BFN8ySCZqF%2BPsZfAtL%2B9xYw35JOalmApNqm2C9rCsrXqNX%2Bjqs4h4DrceQIIcFr2U26JFxEnbuj8XUo8dT8Mre0Wb1mgMhRcU%2BleUzX9DG18EUXxxxDYIZ0mTPerOh83lKMmbNNFxt%2B9ittT3W9uuA4KbREkUQFRjaE504bQ6a&X-Amz-Signature=04a06d1ec01b72846e5dd56be4b783a683b91a6721134b83c9ae45c2e794f4f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG23MQZA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBemtF5sLu3RyaBB7x5ahUy3cN0j6BPG5GxMPqnu7qT9AiEArau8T35GgCM0P1CVOv4UsxrHaMqekZw8neGh8bEWH5QqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWyZ4FavRKapdKKLCrcA64PfhjhszNAu5q3Z0Yzt6SULmkUr2taeN7MKv%2BPNOU1SCaeg349A3g26yfX3wuMD6oNHMW63%2B67Qj8DByI2Qo5%2BBLrM25298ySFiAvJgEi3xqVPGVjvyhSaZxzz3sfTBLRir3aGrUBcG%2By1Nel5WhK87ngwoPM9ggEu98H7P3NjkmXq%2BBnZf1wL%2FPa%2FzOVbaN3i7oG5wzNS%2FJVwsbMY4TGnxvj%2BEJF8OGO1fTjDWXKR%2BGrFJKEdmJkv9fnvIVx6%2FqVIWEdf6XTaN0UzAYGRiLwQCLCNcgMzEdTaSlmG6nIkL3%2FEPzMzE8WOALtVWYZZbYS%2B0IWcxMvd7DpMBfABmmSCHsvQyA9SuH7bs4b6QLkQOtleyyFSIKb5U3XJ5b%2BX2bWnUKnObDYXpKlj6VwJuVQpHWlMSOjUw4AuTczFsbbZnskV74332mYC%2FVuSJvvm4H7kw1cIyBg%2Bp9%2F09m1IPCAyqzTMdYo4eoXCJYk9BUJ%2FFUQHjs18pu92DOtCpZss1OMaeufMnQVzmLkkdX1Pn9KsLspHSCiz5S7%2BNA8M3716bElalYlCWh5aB%2FeHxZlo4zdiglr3eFd5CP0W9JgVDHMAvUXikhNIxlMQFXKsX4uKxRtP%2BcvtHm9nNSV4MNCM7bwGOqUBAttY6e1v3lNZZyWpftCi8bE6E18LZAOwn7n3o1vkM4P4unjtLk%2BFN8ySCZqF%2BPsZfAtL%2B9xYw35JOalmApNqm2C9rCsrXqNX%2Bjqs4h4DrceQIIcFr2U26JFxEnbuj8XUo8dT8Mre0Wb1mgMhRcU%2BleUzX9DG18EUXxxxDYIZ0mTPerOh83lKMmbNNFxt%2B9ittT3W9uuA4KbREkUQFRjaE504bQ6a&X-Amz-Signature=dc92d353b793edcb0ebd968869cfc901506ca0d5521ef67b7522f523eda968a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG23MQZA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBemtF5sLu3RyaBB7x5ahUy3cN0j6BPG5GxMPqnu7qT9AiEArau8T35GgCM0P1CVOv4UsxrHaMqekZw8neGh8bEWH5QqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWyZ4FavRKapdKKLCrcA64PfhjhszNAu5q3Z0Yzt6SULmkUr2taeN7MKv%2BPNOU1SCaeg349A3g26yfX3wuMD6oNHMW63%2B67Qj8DByI2Qo5%2BBLrM25298ySFiAvJgEi3xqVPGVjvyhSaZxzz3sfTBLRir3aGrUBcG%2By1Nel5WhK87ngwoPM9ggEu98H7P3NjkmXq%2BBnZf1wL%2FPa%2FzOVbaN3i7oG5wzNS%2FJVwsbMY4TGnxvj%2BEJF8OGO1fTjDWXKR%2BGrFJKEdmJkv9fnvIVx6%2FqVIWEdf6XTaN0UzAYGRiLwQCLCNcgMzEdTaSlmG6nIkL3%2FEPzMzE8WOALtVWYZZbYS%2B0IWcxMvd7DpMBfABmmSCHsvQyA9SuH7bs4b6QLkQOtleyyFSIKb5U3XJ5b%2BX2bWnUKnObDYXpKlj6VwJuVQpHWlMSOjUw4AuTczFsbbZnskV74332mYC%2FVuSJvvm4H7kw1cIyBg%2Bp9%2F09m1IPCAyqzTMdYo4eoXCJYk9BUJ%2FFUQHjs18pu92DOtCpZss1OMaeufMnQVzmLkkdX1Pn9KsLspHSCiz5S7%2BNA8M3716bElalYlCWh5aB%2FeHxZlo4zdiglr3eFd5CP0W9JgVDHMAvUXikhNIxlMQFXKsX4uKxRtP%2BcvtHm9nNSV4MNCM7bwGOqUBAttY6e1v3lNZZyWpftCi8bE6E18LZAOwn7n3o1vkM4P4unjtLk%2BFN8ySCZqF%2BPsZfAtL%2B9xYw35JOalmApNqm2C9rCsrXqNX%2Bjqs4h4DrceQIIcFr2U26JFxEnbuj8XUo8dT8Mre0Wb1mgMhRcU%2BleUzX9DG18EUXxxxDYIZ0mTPerOh83lKMmbNNFxt%2B9ittT3W9uuA4KbREkUQFRjaE504bQ6a&X-Amz-Signature=48f2a34ade6572478e6358ac75d389450d5ec1ee46545e1eec6549916ffab886&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
