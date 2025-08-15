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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKASFOFG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQClv%2Fm8yH723uXHXH4%2Fova5SpxfsZ9zfU5W1HXzYmXE3gIgC01yF3eDeAJFWD0gwHiljMcRDIcpCAy3gxfZ6rntJVcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAJOb6TdCPPuILaMbCrcA%2FxjufKMP1VxnCcvxKBqyvdD6eehmkwOGgcSt6r%2BqpX%2B8HfHMJTE8KTWo0xzogppcA%2BJ4N4PMWMzkgQc%2FPnRS4yvjWNdl6emq9lgRIOnSGr4SO2UJbGvNKmuRVEy2PjlsQ%2BjaTGCMuK6t391%2F39FS%2BV2Os43gg9iGIYr7gBxPVo5mBU6NoGTHzsZ2x2%2FYH9azIhX%2FzgTM4AWbWJB6ck0WeEyUnlyyJBfHridM4f1OvRoC2vFodQTjxkhfC6sXtFISylJna6YLRA87zvQ0NzIHF3Y6zQi%2F8wmfsoqNXe9xr3zj2B9ki7xYiVccggc1gn3%2FGvsYJKOGzWjnLagiE2%2Ffgthme5e8K93u4KfD4b8Q0IvxExuktWx9VMepaK4dy0ZahLLEwAc3ncQ9lnT7GkIuRjLt%2BggjrXsn7%2Frm7wqsiLF%2FsQRvRph0rxQNZnnRAUalfwqevB7puJJaZTVE8HTReltnwEwhkSn2kGm9AQbo0mci0hTZvSPzUjrRKkjykGeNCZXhybkILPhHV5u0SVKrksZHfSmG3RSSs2MReOwd8iInm5NKffqb00EnedsCN6ts6QmJCjLS9hbl9DJ5pyEnRRiBG4zU6KJsG%2FEKsNoqDxsZMkJU1WAFpCxHb1KMMTa%2FcQGOqUB9NX%2FpYQTR0ZyXCffKJ7yjicuR1JdO6hOGEpzc%2FfDN9Ml1vxB%2FI1ygYaZnbQP2Y5JKWmQsCyEk2CM3vzOC%2BOmDms7p%2F622u5TGzNXaOyZ9DDtx%2BMHdjl6hPirjW7NW96S1HI8CgkD89xoi8BLz22z7IEitk%2Bp7h7tS9nDJJeA7LNeV%2Bg%2B9rlhhvY%2BXzWjAr17QGiChvcCOlgz2CHxtQVeHe8eihSS&X-Amz-Signature=c4a9af3abb37ab69dd79f67aaa7ca6ea34bf05a153eb8c8d873d1db8d4a489f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKASFOFG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQClv%2Fm8yH723uXHXH4%2Fova5SpxfsZ9zfU5W1HXzYmXE3gIgC01yF3eDeAJFWD0gwHiljMcRDIcpCAy3gxfZ6rntJVcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAJOb6TdCPPuILaMbCrcA%2FxjufKMP1VxnCcvxKBqyvdD6eehmkwOGgcSt6r%2BqpX%2B8HfHMJTE8KTWo0xzogppcA%2BJ4N4PMWMzkgQc%2FPnRS4yvjWNdl6emq9lgRIOnSGr4SO2UJbGvNKmuRVEy2PjlsQ%2BjaTGCMuK6t391%2F39FS%2BV2Os43gg9iGIYr7gBxPVo5mBU6NoGTHzsZ2x2%2FYH9azIhX%2FzgTM4AWbWJB6ck0WeEyUnlyyJBfHridM4f1OvRoC2vFodQTjxkhfC6sXtFISylJna6YLRA87zvQ0NzIHF3Y6zQi%2F8wmfsoqNXe9xr3zj2B9ki7xYiVccggc1gn3%2FGvsYJKOGzWjnLagiE2%2Ffgthme5e8K93u4KfD4b8Q0IvxExuktWx9VMepaK4dy0ZahLLEwAc3ncQ9lnT7GkIuRjLt%2BggjrXsn7%2Frm7wqsiLF%2FsQRvRph0rxQNZnnRAUalfwqevB7puJJaZTVE8HTReltnwEwhkSn2kGm9AQbo0mci0hTZvSPzUjrRKkjykGeNCZXhybkILPhHV5u0SVKrksZHfSmG3RSSs2MReOwd8iInm5NKffqb00EnedsCN6ts6QmJCjLS9hbl9DJ5pyEnRRiBG4zU6KJsG%2FEKsNoqDxsZMkJU1WAFpCxHb1KMMTa%2FcQGOqUB9NX%2FpYQTR0ZyXCffKJ7yjicuR1JdO6hOGEpzc%2FfDN9Ml1vxB%2FI1ygYaZnbQP2Y5JKWmQsCyEk2CM3vzOC%2BOmDms7p%2F622u5TGzNXaOyZ9DDtx%2BMHdjl6hPirjW7NW96S1HI8CgkD89xoi8BLz22z7IEitk%2Bp7h7tS9nDJJeA7LNeV%2Bg%2B9rlhhvY%2BXzWjAr17QGiChvcCOlgz2CHxtQVeHe8eihSS&X-Amz-Signature=aaa9951f75778697a5ed9dad12ae7983a0348850ccc90ca8371c3fef990acd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKASFOFG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQClv%2Fm8yH723uXHXH4%2Fova5SpxfsZ9zfU5W1HXzYmXE3gIgC01yF3eDeAJFWD0gwHiljMcRDIcpCAy3gxfZ6rntJVcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAJOb6TdCPPuILaMbCrcA%2FxjufKMP1VxnCcvxKBqyvdD6eehmkwOGgcSt6r%2BqpX%2B8HfHMJTE8KTWo0xzogppcA%2BJ4N4PMWMzkgQc%2FPnRS4yvjWNdl6emq9lgRIOnSGr4SO2UJbGvNKmuRVEy2PjlsQ%2BjaTGCMuK6t391%2F39FS%2BV2Os43gg9iGIYr7gBxPVo5mBU6NoGTHzsZ2x2%2FYH9azIhX%2FzgTM4AWbWJB6ck0WeEyUnlyyJBfHridM4f1OvRoC2vFodQTjxkhfC6sXtFISylJna6YLRA87zvQ0NzIHF3Y6zQi%2F8wmfsoqNXe9xr3zj2B9ki7xYiVccggc1gn3%2FGvsYJKOGzWjnLagiE2%2Ffgthme5e8K93u4KfD4b8Q0IvxExuktWx9VMepaK4dy0ZahLLEwAc3ncQ9lnT7GkIuRjLt%2BggjrXsn7%2Frm7wqsiLF%2FsQRvRph0rxQNZnnRAUalfwqevB7puJJaZTVE8HTReltnwEwhkSn2kGm9AQbo0mci0hTZvSPzUjrRKkjykGeNCZXhybkILPhHV5u0SVKrksZHfSmG3RSSs2MReOwd8iInm5NKffqb00EnedsCN6ts6QmJCjLS9hbl9DJ5pyEnRRiBG4zU6KJsG%2FEKsNoqDxsZMkJU1WAFpCxHb1KMMTa%2FcQGOqUB9NX%2FpYQTR0ZyXCffKJ7yjicuR1JdO6hOGEpzc%2FfDN9Ml1vxB%2FI1ygYaZnbQP2Y5JKWmQsCyEk2CM3vzOC%2BOmDms7p%2F622u5TGzNXaOyZ9DDtx%2BMHdjl6hPirjW7NW96S1HI8CgkD89xoi8BLz22z7IEitk%2Bp7h7tS9nDJJeA7LNeV%2Bg%2B9rlhhvY%2BXzWjAr17QGiChvcCOlgz2CHxtQVeHe8eihSS&X-Amz-Signature=e33e538d3c312f02f17509b518c091405cb5194a57115c358ad14bda49aef37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
