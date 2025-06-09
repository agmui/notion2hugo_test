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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRH22T7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnVb%2Fj0QV5d1GXTvddHzGTvOIEl2Onuf4mUWf1ZqJKZQIgIOnFMsI5QVa6GZZoqQDDjlNdpEpvnEp9aHI1qI1eL1UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcIVHrR%2F38ISpY%2BqyrcA0TRxxSEifq5NyJMjCMAzxcacapX4J1M0qn3aBafKMWqDuyc%2BJ7e4xA1Whf%2F9rQ6VB3UCW5hwq9ifZBLwbN1TYD5W2%2FpQH6N61mDPSXzK6eiSO9U7%2BJLQ5igvNCPD7enRmD7psZLtLDijBTCGdqdUxtf76uXq8oE14164LAnz3YVrMC65JeZbymD9k6UMuFYXmfr3gQtBwZ6bVM035oXegJ9ugcCY0evnJqh58o53QZRIoXLPsZ70w%2BvhYzpykZBV1iNOynU8wWmrNifn7yHrQ%2FUNymonU4LasgC4JWqvRQkfdvDjBNQppMsZbT%2Fa8HTeHzPgylA%2B6ufpE6Ho3%2FJ4aqP44%2BXDab5C7ZZCpqNsmYc61Uawe27%2F0U2kZ%2BCtow8zxioWZ%2F6jlhKs6ax%2Fqs3OsSnAtAnXack9ItoxPaTwEpYF3iEoHeoPBeqrtYu%2BK5NUbWIg%2FbZbqAsIzl7GTklQ%2BRCBS1x7V46xyMttYagQ04R2CJKLsjY%2FeBuygDou6VEg1mFpl9znjT0vC0m01DO0i6KhRac2oKnw2AfNXqTcVsRKNB5MwHrFFfEWDJbMW2Mx06AugWHQQxAZrwhWrqGRFyGn7cO96EbF0P6O0oxhHbZgiUqfFNHjrRSUCISMNfWm8IGOqUBM3%2FIMPOGfebN2oq%2BlfGF%2F7vvVnfZT%2FrmKva741%2Bg4CtUON30ryLlfc0vhmX%2Fksa%2Fe9ry24RQxkzUkRu9NP%2BF8K78DqdlrBRCDkmyQgCqmy0K7br6A9406ZXdCqCCB7vgDTCq3aHiDnAVsK8WCCq46GEkIZnc936%2Bjb2o4iOZsWY9G1bGNvYK70NK%2BI5i91smTjke7hvlfbMLmERFft0jIErBffXB&X-Amz-Signature=58402dcc861c2c4d80b4dae7d46304e362ec036ef6f51e3f2d588b759e63c8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRH22T7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnVb%2Fj0QV5d1GXTvddHzGTvOIEl2Onuf4mUWf1ZqJKZQIgIOnFMsI5QVa6GZZoqQDDjlNdpEpvnEp9aHI1qI1eL1UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcIVHrR%2F38ISpY%2BqyrcA0TRxxSEifq5NyJMjCMAzxcacapX4J1M0qn3aBafKMWqDuyc%2BJ7e4xA1Whf%2F9rQ6VB3UCW5hwq9ifZBLwbN1TYD5W2%2FpQH6N61mDPSXzK6eiSO9U7%2BJLQ5igvNCPD7enRmD7psZLtLDijBTCGdqdUxtf76uXq8oE14164LAnz3YVrMC65JeZbymD9k6UMuFYXmfr3gQtBwZ6bVM035oXegJ9ugcCY0evnJqh58o53QZRIoXLPsZ70w%2BvhYzpykZBV1iNOynU8wWmrNifn7yHrQ%2FUNymonU4LasgC4JWqvRQkfdvDjBNQppMsZbT%2Fa8HTeHzPgylA%2B6ufpE6Ho3%2FJ4aqP44%2BXDab5C7ZZCpqNsmYc61Uawe27%2F0U2kZ%2BCtow8zxioWZ%2F6jlhKs6ax%2Fqs3OsSnAtAnXack9ItoxPaTwEpYF3iEoHeoPBeqrtYu%2BK5NUbWIg%2FbZbqAsIzl7GTklQ%2BRCBS1x7V46xyMttYagQ04R2CJKLsjY%2FeBuygDou6VEg1mFpl9znjT0vC0m01DO0i6KhRac2oKnw2AfNXqTcVsRKNB5MwHrFFfEWDJbMW2Mx06AugWHQQxAZrwhWrqGRFyGn7cO96EbF0P6O0oxhHbZgiUqfFNHjrRSUCISMNfWm8IGOqUBM3%2FIMPOGfebN2oq%2BlfGF%2F7vvVnfZT%2FrmKva741%2Bg4CtUON30ryLlfc0vhmX%2Fksa%2Fe9ry24RQxkzUkRu9NP%2BF8K78DqdlrBRCDkmyQgCqmy0K7br6A9406ZXdCqCCB7vgDTCq3aHiDnAVsK8WCCq46GEkIZnc936%2Bjb2o4iOZsWY9G1bGNvYK70NK%2BI5i91smTjke7hvlfbMLmERFft0jIErBffXB&X-Amz-Signature=448d486cf6224ef435ea1b7e5d37b7174890a05bf09eab494b6ae57d65a149f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRH22T7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnVb%2Fj0QV5d1GXTvddHzGTvOIEl2Onuf4mUWf1ZqJKZQIgIOnFMsI5QVa6GZZoqQDDjlNdpEpvnEp9aHI1qI1eL1UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcIVHrR%2F38ISpY%2BqyrcA0TRxxSEifq5NyJMjCMAzxcacapX4J1M0qn3aBafKMWqDuyc%2BJ7e4xA1Whf%2F9rQ6VB3UCW5hwq9ifZBLwbN1TYD5W2%2FpQH6N61mDPSXzK6eiSO9U7%2BJLQ5igvNCPD7enRmD7psZLtLDijBTCGdqdUxtf76uXq8oE14164LAnz3YVrMC65JeZbymD9k6UMuFYXmfr3gQtBwZ6bVM035oXegJ9ugcCY0evnJqh58o53QZRIoXLPsZ70w%2BvhYzpykZBV1iNOynU8wWmrNifn7yHrQ%2FUNymonU4LasgC4JWqvRQkfdvDjBNQppMsZbT%2Fa8HTeHzPgylA%2B6ufpE6Ho3%2FJ4aqP44%2BXDab5C7ZZCpqNsmYc61Uawe27%2F0U2kZ%2BCtow8zxioWZ%2F6jlhKs6ax%2Fqs3OsSnAtAnXack9ItoxPaTwEpYF3iEoHeoPBeqrtYu%2BK5NUbWIg%2FbZbqAsIzl7GTklQ%2BRCBS1x7V46xyMttYagQ04R2CJKLsjY%2FeBuygDou6VEg1mFpl9znjT0vC0m01DO0i6KhRac2oKnw2AfNXqTcVsRKNB5MwHrFFfEWDJbMW2Mx06AugWHQQxAZrwhWrqGRFyGn7cO96EbF0P6O0oxhHbZgiUqfFNHjrRSUCISMNfWm8IGOqUBM3%2FIMPOGfebN2oq%2BlfGF%2F7vvVnfZT%2FrmKva741%2Bg4CtUON30ryLlfc0vhmX%2Fksa%2Fe9ry24RQxkzUkRu9NP%2BF8K78DqdlrBRCDkmyQgCqmy0K7br6A9406ZXdCqCCB7vgDTCq3aHiDnAVsK8WCCq46GEkIZnc936%2Bjb2o4iOZsWY9G1bGNvYK70NK%2BI5i91smTjke7hvlfbMLmERFft0jIErBffXB&X-Amz-Signature=021cb223cbc6023a744a267bafc4344cac5f44dd7b910f1cd891b8b70e6ac60b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
