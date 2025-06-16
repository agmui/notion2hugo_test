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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZL7VS7L%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDR6mkjxgmCgMJUSbCcaqaL9YvJcnVLksDDtT5RIPEEMwIgDPG49%2BqPzA9WfaiTwlMwFkpEF3oPpTcXQXCzhU1yPKcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMd6T3tJ%2F6HzsBuIfCrcA1de3vsRIIBee0KW7ugu3ZoWOAHjgKGTvWUNn5DBRXKul1xKoe2GFlM06Pe3GL%2B%2FjpUrdrujaV4l3OvujnWRJMVHRDdLCOeSH4EFBMTYYwplGkaFe0xPkS4lePVWKa2MrTQOKDSI3Byl5e0bKl7hL6a1K%2BN5daHuVNGdJmHmqSPn%2B5kf0oyNEFYWdQr2JZ3Sw%2B9v5ziPW%2BhHuXVVKjqdR0iN4kk%2Ftv3Q4fsgF%2BsjyZbBbOIY%2Boi9mlGHNB9BZNHZGIjHv79s8EqWS830myrwPis3U3CszZ3ybP7sCIBNfr67MCYp0fS8%2FkmOopi7evLqBtFuAJxkiNxt79kFZQe17Z7PFzHDqapXU3Jq1ugPJ%2FBAsjOwapFY89qKeXGPx%2F2EFmXoZT4DnqDi07CWh5KFo1pPUNwfSQ%2F%2BTlZQ8zhz4gO8gYu0tbKDpxESPRcOLnC1BUEiaFG3JIPvTNXKWEwQ%2Fnh0equKUxhRxrvld48MWccy1Lf7k4WuJ4l8y91poXyZXYGiOJjdQoX5z%2B7TW1cTMYtrWm%2BVrbaRzghjC%2FAg6Za4K1VpzlOR7gBjp%2Fdjg%2F9vwBNFKcsJfwXZ3l82rQSbJNvarjLZwd7k7TdwFKipXIpwuqn5F1pUPsRINljrMIHJwMIGOqUBQ4ItJI6B09E%2Bk%2BaCFdjrpyIfPYc%2BKYnHUUGlE38NlOg9scGqMi1k04mtyULf5R1FMcTuHpZmF2AjeCwCO0JBtm2gBYbcAz82SXAYZQziGKFZcFKoUSOV8K%2BoeS7BPySz0uOwi3JEYc%2F4NUZWQTogKvTGWooLIo49IRkPgkdKXcE6Q1npLPxvtWoGQ8rEGswhIOovmYJJaNpXj7LR0VXQbPnze6Ze&X-Amz-Signature=ab9a94208c6d87357ea9378927ef9823506a3fdaf514fdb7723aa73c291a0504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZL7VS7L%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDR6mkjxgmCgMJUSbCcaqaL9YvJcnVLksDDtT5RIPEEMwIgDPG49%2BqPzA9WfaiTwlMwFkpEF3oPpTcXQXCzhU1yPKcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMd6T3tJ%2F6HzsBuIfCrcA1de3vsRIIBee0KW7ugu3ZoWOAHjgKGTvWUNn5DBRXKul1xKoe2GFlM06Pe3GL%2B%2FjpUrdrujaV4l3OvujnWRJMVHRDdLCOeSH4EFBMTYYwplGkaFe0xPkS4lePVWKa2MrTQOKDSI3Byl5e0bKl7hL6a1K%2BN5daHuVNGdJmHmqSPn%2B5kf0oyNEFYWdQr2JZ3Sw%2B9v5ziPW%2BhHuXVVKjqdR0iN4kk%2Ftv3Q4fsgF%2BsjyZbBbOIY%2Boi9mlGHNB9BZNHZGIjHv79s8EqWS830myrwPis3U3CszZ3ybP7sCIBNfr67MCYp0fS8%2FkmOopi7evLqBtFuAJxkiNxt79kFZQe17Z7PFzHDqapXU3Jq1ugPJ%2FBAsjOwapFY89qKeXGPx%2F2EFmXoZT4DnqDi07CWh5KFo1pPUNwfSQ%2F%2BTlZQ8zhz4gO8gYu0tbKDpxESPRcOLnC1BUEiaFG3JIPvTNXKWEwQ%2Fnh0equKUxhRxrvld48MWccy1Lf7k4WuJ4l8y91poXyZXYGiOJjdQoX5z%2B7TW1cTMYtrWm%2BVrbaRzghjC%2FAg6Za4K1VpzlOR7gBjp%2Fdjg%2F9vwBNFKcsJfwXZ3l82rQSbJNvarjLZwd7k7TdwFKipXIpwuqn5F1pUPsRINljrMIHJwMIGOqUBQ4ItJI6B09E%2Bk%2BaCFdjrpyIfPYc%2BKYnHUUGlE38NlOg9scGqMi1k04mtyULf5R1FMcTuHpZmF2AjeCwCO0JBtm2gBYbcAz82SXAYZQziGKFZcFKoUSOV8K%2BoeS7BPySz0uOwi3JEYc%2F4NUZWQTogKvTGWooLIo49IRkPgkdKXcE6Q1npLPxvtWoGQ8rEGswhIOovmYJJaNpXj7LR0VXQbPnze6Ze&X-Amz-Signature=a0316cf1cd31291f2cc88654f899000e07d2bcddf168128328de446e5ccb4ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZL7VS7L%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDR6mkjxgmCgMJUSbCcaqaL9YvJcnVLksDDtT5RIPEEMwIgDPG49%2BqPzA9WfaiTwlMwFkpEF3oPpTcXQXCzhU1yPKcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMd6T3tJ%2F6HzsBuIfCrcA1de3vsRIIBee0KW7ugu3ZoWOAHjgKGTvWUNn5DBRXKul1xKoe2GFlM06Pe3GL%2B%2FjpUrdrujaV4l3OvujnWRJMVHRDdLCOeSH4EFBMTYYwplGkaFe0xPkS4lePVWKa2MrTQOKDSI3Byl5e0bKl7hL6a1K%2BN5daHuVNGdJmHmqSPn%2B5kf0oyNEFYWdQr2JZ3Sw%2B9v5ziPW%2BhHuXVVKjqdR0iN4kk%2Ftv3Q4fsgF%2BsjyZbBbOIY%2Boi9mlGHNB9BZNHZGIjHv79s8EqWS830myrwPis3U3CszZ3ybP7sCIBNfr67MCYp0fS8%2FkmOopi7evLqBtFuAJxkiNxt79kFZQe17Z7PFzHDqapXU3Jq1ugPJ%2FBAsjOwapFY89qKeXGPx%2F2EFmXoZT4DnqDi07CWh5KFo1pPUNwfSQ%2F%2BTlZQ8zhz4gO8gYu0tbKDpxESPRcOLnC1BUEiaFG3JIPvTNXKWEwQ%2Fnh0equKUxhRxrvld48MWccy1Lf7k4WuJ4l8y91poXyZXYGiOJjdQoX5z%2B7TW1cTMYtrWm%2BVrbaRzghjC%2FAg6Za4K1VpzlOR7gBjp%2Fdjg%2F9vwBNFKcsJfwXZ3l82rQSbJNvarjLZwd7k7TdwFKipXIpwuqn5F1pUPsRINljrMIHJwMIGOqUBQ4ItJI6B09E%2Bk%2BaCFdjrpyIfPYc%2BKYnHUUGlE38NlOg9scGqMi1k04mtyULf5R1FMcTuHpZmF2AjeCwCO0JBtm2gBYbcAz82SXAYZQziGKFZcFKoUSOV8K%2BoeS7BPySz0uOwi3JEYc%2F4NUZWQTogKvTGWooLIo49IRkPgkdKXcE6Q1npLPxvtWoGQ8rEGswhIOovmYJJaNpXj7LR0VXQbPnze6Ze&X-Amz-Signature=68a7932a7992b67f3651ccbe876bd135b5fdac37822e2529472de732ed8d3f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
