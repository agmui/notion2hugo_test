---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47447GC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDEsFXzW%2BoOKw0iTr36DbwmA%2FRj8pA02WOnCaZFLqTO%2FAiBDHZpg00D0eaO7l%2BBvQncm3e2AZtQYYgN7NTNxMJbHOiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7JwnlU%2BeeeHFnxKDKtwDdcXsiE2JnEm0aX3zoPeYjjp%2FxiL80QermR72xIjqlxj27BzSyXoKa%2FGfvFVVDpTZNvjE1GcKhAF2E89wpeDBO0jwiCgb02TT3g9dqIiScrwI0HXeM3iqm74eK4d5RR%2FARKLk0i9qzLyouSB2Y9L%2FzqZ2IZuBq8r7OsucRxR%2FZnSOgM8IotcpZTOLnLgLHZozucytVjy5a3%2BTVBYNierGcm%2F8KcDZYofyyRNTN97NM6VEyn5fQCO9uI4xfCeR8c4jqr4ZBS86AwLsNb6I%2Fnc%2BNla8jobRBTmcVqcWcQqN5hF4cXpuTHU0mAIV%2BmMLsCSHtsWS3FEGuTvKcIMhxg6Qg6teoH7aHSjV56ef0LryR31UoPmQqeE1pRK8u5YAkdg9wGsJDAqZE6fHRY2eLaMmixFYqbQU1fAAHT%2BFpNNW8vzxAbb6fJpduQuOKtnIwHRhXXP%2BpDur7muE1EtQU3QEyRX%2BxdTjeu6ayYew8l8FaFJQUx22LWwCa44Tz0iuun%2BRzGwyME%2FygNwJbot%2BR502YHTaNt93WWiktNOaPwx2d5%2FsT%2FrnuOiDIPOcpWFMKVPirsXPuoUKM6%2FLxO63HaOQBe5reJCqnDlnjbp%2B7MIDd0lmv9qa13NXtS4fdkswx5LZxAY6pgHQ5YoZUypnZpztxqWF%2BrNGOqh8JMHVCiQE6afD%2FhmLBI98uDoY9diKZoeZceY7lnLc48akduSXugnEgDqtIq2lZWlpXJMA%2BjNYie9%2FiZUQspjkKFhESk6p1tkRVyYP59S6XACw%2Fr2GABQ5l07v8kL8p4eAO4xviGo5LW9E37C96bUdYW5alG6YpOZliZrtrRKGDouNVjYian3TDYLuyzN2fNPod7ay&X-Amz-Signature=5adfe0891f0af8642eb86497842b5a1987a9a9ed9dfe669314845856ac7a36ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47447GC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDEsFXzW%2BoOKw0iTr36DbwmA%2FRj8pA02WOnCaZFLqTO%2FAiBDHZpg00D0eaO7l%2BBvQncm3e2AZtQYYgN7NTNxMJbHOiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7JwnlU%2BeeeHFnxKDKtwDdcXsiE2JnEm0aX3zoPeYjjp%2FxiL80QermR72xIjqlxj27BzSyXoKa%2FGfvFVVDpTZNvjE1GcKhAF2E89wpeDBO0jwiCgb02TT3g9dqIiScrwI0HXeM3iqm74eK4d5RR%2FARKLk0i9qzLyouSB2Y9L%2FzqZ2IZuBq8r7OsucRxR%2FZnSOgM8IotcpZTOLnLgLHZozucytVjy5a3%2BTVBYNierGcm%2F8KcDZYofyyRNTN97NM6VEyn5fQCO9uI4xfCeR8c4jqr4ZBS86AwLsNb6I%2Fnc%2BNla8jobRBTmcVqcWcQqN5hF4cXpuTHU0mAIV%2BmMLsCSHtsWS3FEGuTvKcIMhxg6Qg6teoH7aHSjV56ef0LryR31UoPmQqeE1pRK8u5YAkdg9wGsJDAqZE6fHRY2eLaMmixFYqbQU1fAAHT%2BFpNNW8vzxAbb6fJpduQuOKtnIwHRhXXP%2BpDur7muE1EtQU3QEyRX%2BxdTjeu6ayYew8l8FaFJQUx22LWwCa44Tz0iuun%2BRzGwyME%2FygNwJbot%2BR502YHTaNt93WWiktNOaPwx2d5%2FsT%2FrnuOiDIPOcpWFMKVPirsXPuoUKM6%2FLxO63HaOQBe5reJCqnDlnjbp%2B7MIDd0lmv9qa13NXtS4fdkswx5LZxAY6pgHQ5YoZUypnZpztxqWF%2BrNGOqh8JMHVCiQE6afD%2FhmLBI98uDoY9diKZoeZceY7lnLc48akduSXugnEgDqtIq2lZWlpXJMA%2BjNYie9%2FiZUQspjkKFhESk6p1tkRVyYP59S6XACw%2Fr2GABQ5l07v8kL8p4eAO4xviGo5LW9E37C96bUdYW5alG6YpOZliZrtrRKGDouNVjYian3TDYLuyzN2fNPod7ay&X-Amz-Signature=9a23a74fd0e7e66ef297c7e0e545ed55ee55bbd6851b7a0254b391426ddd6ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47447GC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDEsFXzW%2BoOKw0iTr36DbwmA%2FRj8pA02WOnCaZFLqTO%2FAiBDHZpg00D0eaO7l%2BBvQncm3e2AZtQYYgN7NTNxMJbHOiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7JwnlU%2BeeeHFnxKDKtwDdcXsiE2JnEm0aX3zoPeYjjp%2FxiL80QermR72xIjqlxj27BzSyXoKa%2FGfvFVVDpTZNvjE1GcKhAF2E89wpeDBO0jwiCgb02TT3g9dqIiScrwI0HXeM3iqm74eK4d5RR%2FARKLk0i9qzLyouSB2Y9L%2FzqZ2IZuBq8r7OsucRxR%2FZnSOgM8IotcpZTOLnLgLHZozucytVjy5a3%2BTVBYNierGcm%2F8KcDZYofyyRNTN97NM6VEyn5fQCO9uI4xfCeR8c4jqr4ZBS86AwLsNb6I%2Fnc%2BNla8jobRBTmcVqcWcQqN5hF4cXpuTHU0mAIV%2BmMLsCSHtsWS3FEGuTvKcIMhxg6Qg6teoH7aHSjV56ef0LryR31UoPmQqeE1pRK8u5YAkdg9wGsJDAqZE6fHRY2eLaMmixFYqbQU1fAAHT%2BFpNNW8vzxAbb6fJpduQuOKtnIwHRhXXP%2BpDur7muE1EtQU3QEyRX%2BxdTjeu6ayYew8l8FaFJQUx22LWwCa44Tz0iuun%2BRzGwyME%2FygNwJbot%2BR502YHTaNt93WWiktNOaPwx2d5%2FsT%2FrnuOiDIPOcpWFMKVPirsXPuoUKM6%2FLxO63HaOQBe5reJCqnDlnjbp%2B7MIDd0lmv9qa13NXtS4fdkswx5LZxAY6pgHQ5YoZUypnZpztxqWF%2BrNGOqh8JMHVCiQE6afD%2FhmLBI98uDoY9diKZoeZceY7lnLc48akduSXugnEgDqtIq2lZWlpXJMA%2BjNYie9%2FiZUQspjkKFhESk6p1tkRVyYP59S6XACw%2Fr2GABQ5l07v8kL8p4eAO4xviGo5LW9E37C96bUdYW5alG6YpOZliZrtrRKGDouNVjYian3TDYLuyzN2fNPod7ay&X-Amz-Signature=8438d090ede7da183e2891bc80d80e00078d724f4c75e9d1f53b6e3d7bf36f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
