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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YADZNFL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIECZvNM7x941Y1h9l2an3nsQv2uid5lyjKiLw3PfD7g3AiBiDCxVQlGJvguarytek0fPVBmF4kQsqF%2Bhm7zSMxv5jSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nkFuGzS2t1ojL7hKtwDQ1PyXakMInEDsRbNqfOX5WPy3jAUI9eaGzVmc3HDJMBBSXvrdiQYhOdQwtKyxclhnqrVHrqggIvROJcBDKxdBPDMf3EI%2F11V8CZO9DMlgvtY9aY72XesL8Gogzh0ZeZ8sqA0eEcmWMQ5Gc3nWOsgyoxeXxJh5%2F7SSf2cyGioJAUvX3sJpn%2FiWqead2BzDGEL4b8piXGgVfBPgnLuFyeppON3BO7%2BTN5qIE3TRsb6FxNNdB7Nw65rjs0Lzc8RSHiPxu4k9%2FdaLNMzsnggtbxXG%2BPl%2B7rmuuhJtXt1r%2BtWyRgkIi8ey4T4GOrjnVcuqLqTWoAFJ7OGxRgFrZwuuWlg4%2FtEW3Ynuz%2FlouvCYsH1Sq3GyQzL45CHrhZzA9ZD%2BonfAJxHcduZXi96lpkGyZML%2BwAvjf365tJflnI%2BDc%2B5W%2BZhPbdZGW6635mf2GDIP95odP2rudm5jF00SosxLoxeNepm0w%2BplDK6mxBrEaG5rTD6w0Xrt92WRoxzE0%2B%2B5jiI%2FtrJNZQNFJ447UA9udgMFbUUWYJu5iAfMKRdRYBXbCT08sAGQAnuf5xa7CEnf0s6pQiDJ5RpMkun8hF7kl1kh1gfd90Ji02z7k5jjp%2FsJzwJ0oCCvcUh913dMiQwy6XwvgY6pgEJ1gho68Wi8ODUw%2Fb0k1HiLSPgRUoUzXEYmbneoc9pLH6YGsDg%2BHXPSJDNt%2FtVK9Z4oLt4Czju32eHztRGo%2F0jMjBqC9yXrSu8JVqrqVx4xIxOgmVd912qYlRbWd9Skfq3yvE5APLYFwhjgkrNGtjCNrK4jkXydWqCovyiahXrRGY4dRVZwwlxB0AMJ%2FCn6jVBxIhoNbCiIfNBq2LQpZ9PrYPT423Z&X-Amz-Signature=875bf6eac09cc5e2496c306102c84142c5f9b970923d336190434f0a58d2c3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YADZNFL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIECZvNM7x941Y1h9l2an3nsQv2uid5lyjKiLw3PfD7g3AiBiDCxVQlGJvguarytek0fPVBmF4kQsqF%2Bhm7zSMxv5jSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nkFuGzS2t1ojL7hKtwDQ1PyXakMInEDsRbNqfOX5WPy3jAUI9eaGzVmc3HDJMBBSXvrdiQYhOdQwtKyxclhnqrVHrqggIvROJcBDKxdBPDMf3EI%2F11V8CZO9DMlgvtY9aY72XesL8Gogzh0ZeZ8sqA0eEcmWMQ5Gc3nWOsgyoxeXxJh5%2F7SSf2cyGioJAUvX3sJpn%2FiWqead2BzDGEL4b8piXGgVfBPgnLuFyeppON3BO7%2BTN5qIE3TRsb6FxNNdB7Nw65rjs0Lzc8RSHiPxu4k9%2FdaLNMzsnggtbxXG%2BPl%2B7rmuuhJtXt1r%2BtWyRgkIi8ey4T4GOrjnVcuqLqTWoAFJ7OGxRgFrZwuuWlg4%2FtEW3Ynuz%2FlouvCYsH1Sq3GyQzL45CHrhZzA9ZD%2BonfAJxHcduZXi96lpkGyZML%2BwAvjf365tJflnI%2BDc%2B5W%2BZhPbdZGW6635mf2GDIP95odP2rudm5jF00SosxLoxeNepm0w%2BplDK6mxBrEaG5rTD6w0Xrt92WRoxzE0%2B%2B5jiI%2FtrJNZQNFJ447UA9udgMFbUUWYJu5iAfMKRdRYBXbCT08sAGQAnuf5xa7CEnf0s6pQiDJ5RpMkun8hF7kl1kh1gfd90Ji02z7k5jjp%2FsJzwJ0oCCvcUh913dMiQwy6XwvgY6pgEJ1gho68Wi8ODUw%2Fb0k1HiLSPgRUoUzXEYmbneoc9pLH6YGsDg%2BHXPSJDNt%2FtVK9Z4oLt4Czju32eHztRGo%2F0jMjBqC9yXrSu8JVqrqVx4xIxOgmVd912qYlRbWd9Skfq3yvE5APLYFwhjgkrNGtjCNrK4jkXydWqCovyiahXrRGY4dRVZwwlxB0AMJ%2FCn6jVBxIhoNbCiIfNBq2LQpZ9PrYPT423Z&X-Amz-Signature=57146c7b1ac5d12209d74b392f50ffe41dda63616f90435cb3aa6d02b1b871cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YADZNFL%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIECZvNM7x941Y1h9l2an3nsQv2uid5lyjKiLw3PfD7g3AiBiDCxVQlGJvguarytek0fPVBmF4kQsqF%2Bhm7zSMxv5jSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5nkFuGzS2t1ojL7hKtwDQ1PyXakMInEDsRbNqfOX5WPy3jAUI9eaGzVmc3HDJMBBSXvrdiQYhOdQwtKyxclhnqrVHrqggIvROJcBDKxdBPDMf3EI%2F11V8CZO9DMlgvtY9aY72XesL8Gogzh0ZeZ8sqA0eEcmWMQ5Gc3nWOsgyoxeXxJh5%2F7SSf2cyGioJAUvX3sJpn%2FiWqead2BzDGEL4b8piXGgVfBPgnLuFyeppON3BO7%2BTN5qIE3TRsb6FxNNdB7Nw65rjs0Lzc8RSHiPxu4k9%2FdaLNMzsnggtbxXG%2BPl%2B7rmuuhJtXt1r%2BtWyRgkIi8ey4T4GOrjnVcuqLqTWoAFJ7OGxRgFrZwuuWlg4%2FtEW3Ynuz%2FlouvCYsH1Sq3GyQzL45CHrhZzA9ZD%2BonfAJxHcduZXi96lpkGyZML%2BwAvjf365tJflnI%2BDc%2B5W%2BZhPbdZGW6635mf2GDIP95odP2rudm5jF00SosxLoxeNepm0w%2BplDK6mxBrEaG5rTD6w0Xrt92WRoxzE0%2B%2B5jiI%2FtrJNZQNFJ447UA9udgMFbUUWYJu5iAfMKRdRYBXbCT08sAGQAnuf5xa7CEnf0s6pQiDJ5RpMkun8hF7kl1kh1gfd90Ji02z7k5jjp%2FsJzwJ0oCCvcUh913dMiQwy6XwvgY6pgEJ1gho68Wi8ODUw%2Fb0k1HiLSPgRUoUzXEYmbneoc9pLH6YGsDg%2BHXPSJDNt%2FtVK9Z4oLt4Czju32eHztRGo%2F0jMjBqC9yXrSu8JVqrqVx4xIxOgmVd912qYlRbWd9Skfq3yvE5APLYFwhjgkrNGtjCNrK4jkXydWqCovyiahXrRGY4dRVZwwlxB0AMJ%2FCn6jVBxIhoNbCiIfNBq2LQpZ9PrYPT423Z&X-Amz-Signature=74c6548d90c27926696c9439838076d43eaec6c3ab190ef1ce984e01722019f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
