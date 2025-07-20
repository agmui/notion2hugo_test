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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4R6VFYW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK2LkxrZjXvEYVBP7VMLn%2BMGxhvzK5zyUESaR%2BacXSBAiAB0DQ5nPU3umObjQO3zlX4eW5fN8KlIpGcxCnNU%2FZtciqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeNr8MlKDsbU50TDQKtwD4w2%2FVlCBBphMSZ8noAEwqw1klbceutqOabLFhP644hrH6MJo%2FytAQwTld6RpS%2Bj6H5pthU9iZXe7UCk3pltDxXg29iLjPL11z3BFP469ksUsfCXdEjil%2FjbPNIZ9bRvJ7XvbJxFGu3ZDpyRFQ0TayX14ZjdAxnumMUZGuWVdX1U77flpygegwEbBzvoyoqWUQk0meDzvVlxPDEuH0LWilBOLJD3mkcPTcmXWa21CU2TLKlmO7PoyKelLGE89tOpGKVV7%2F37cpmSQP6jkHsWjV7BxLLdKG31TZgu%2B%2FxshrKyrnc9IHTNmZMECdm48ojWRB9veswZZUGQWUWbcqb9g5OXpUr8QRg%2BHwVm9ui32K9Gw%2B7wJ9%2B%2B9hpqWtJKh5Jz5npFxMJtfrvvI%2FxuEmQuCuYD7A95ifEmmSkxALkgcdZuH7TGKHsCFtxiAnfnNTaQSRF11HbexhVPLBw%2Fb3merfkAd%2B%2FHtgeHepLWrtBQk8lk8%2F61uguBsMp7vNCRptHLp50HHLBeLdXeS68tGhAYjqAFAngZHUh2i6IgKkPd5um9tkcgCuGPJIb6KdUYXVuVWqa9B8wujewUa%2FT%2FTE2sGdu3W%2B1rvvF5z%2Fs4wXMehQMT3ObSb0bMG7FnQitQwvbjywwY6pgFfRw1aV27hdUbPx07q5Am1j3vrP3BP5km%2BlGXZlPcRBMH0skQGo57112%2B8%2Fw0FBbHPyrcpduGAgEpjtE7KtKmwUOtom6%2BQil2jFAfdSULc9MmlSR6ZkIp6Ir1HkKdTqaLXI3%2FD8hHJP%2Fr%2FI7q0DOOvr7UkMsH4bIxz%2BSNVejkRrbpOLL9h1tD9hw0MsWnjDXavXjMyl%2BWLJdiTCr1%2Bayl4tWJL9YeI&X-Amz-Signature=4a6c6a5f3c04311b519c5e7a8261ae6e05a20f710cbba9307cf4c4636e3eb2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4R6VFYW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK2LkxrZjXvEYVBP7VMLn%2BMGxhvzK5zyUESaR%2BacXSBAiAB0DQ5nPU3umObjQO3zlX4eW5fN8KlIpGcxCnNU%2FZtciqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeNr8MlKDsbU50TDQKtwD4w2%2FVlCBBphMSZ8noAEwqw1klbceutqOabLFhP644hrH6MJo%2FytAQwTld6RpS%2Bj6H5pthU9iZXe7UCk3pltDxXg29iLjPL11z3BFP469ksUsfCXdEjil%2FjbPNIZ9bRvJ7XvbJxFGu3ZDpyRFQ0TayX14ZjdAxnumMUZGuWVdX1U77flpygegwEbBzvoyoqWUQk0meDzvVlxPDEuH0LWilBOLJD3mkcPTcmXWa21CU2TLKlmO7PoyKelLGE89tOpGKVV7%2F37cpmSQP6jkHsWjV7BxLLdKG31TZgu%2B%2FxshrKyrnc9IHTNmZMECdm48ojWRB9veswZZUGQWUWbcqb9g5OXpUr8QRg%2BHwVm9ui32K9Gw%2B7wJ9%2B%2B9hpqWtJKh5Jz5npFxMJtfrvvI%2FxuEmQuCuYD7A95ifEmmSkxALkgcdZuH7TGKHsCFtxiAnfnNTaQSRF11HbexhVPLBw%2Fb3merfkAd%2B%2FHtgeHepLWrtBQk8lk8%2F61uguBsMp7vNCRptHLp50HHLBeLdXeS68tGhAYjqAFAngZHUh2i6IgKkPd5um9tkcgCuGPJIb6KdUYXVuVWqa9B8wujewUa%2FT%2FTE2sGdu3W%2B1rvvF5z%2Fs4wXMehQMT3ObSb0bMG7FnQitQwvbjywwY6pgFfRw1aV27hdUbPx07q5Am1j3vrP3BP5km%2BlGXZlPcRBMH0skQGo57112%2B8%2Fw0FBbHPyrcpduGAgEpjtE7KtKmwUOtom6%2BQil2jFAfdSULc9MmlSR6ZkIp6Ir1HkKdTqaLXI3%2FD8hHJP%2Fr%2FI7q0DOOvr7UkMsH4bIxz%2BSNVejkRrbpOLL9h1tD9hw0MsWnjDXavXjMyl%2BWLJdiTCr1%2Bayl4tWJL9YeI&X-Amz-Signature=d4dc9f56ef7830b1af84bd4a0ca12b272ecae5bffbcd68da613f81346192661b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4R6VFYW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK2LkxrZjXvEYVBP7VMLn%2BMGxhvzK5zyUESaR%2BacXSBAiAB0DQ5nPU3umObjQO3zlX4eW5fN8KlIpGcxCnNU%2FZtciqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeNr8MlKDsbU50TDQKtwD4w2%2FVlCBBphMSZ8noAEwqw1klbceutqOabLFhP644hrH6MJo%2FytAQwTld6RpS%2Bj6H5pthU9iZXe7UCk3pltDxXg29iLjPL11z3BFP469ksUsfCXdEjil%2FjbPNIZ9bRvJ7XvbJxFGu3ZDpyRFQ0TayX14ZjdAxnumMUZGuWVdX1U77flpygegwEbBzvoyoqWUQk0meDzvVlxPDEuH0LWilBOLJD3mkcPTcmXWa21CU2TLKlmO7PoyKelLGE89tOpGKVV7%2F37cpmSQP6jkHsWjV7BxLLdKG31TZgu%2B%2FxshrKyrnc9IHTNmZMECdm48ojWRB9veswZZUGQWUWbcqb9g5OXpUr8QRg%2BHwVm9ui32K9Gw%2B7wJ9%2B%2B9hpqWtJKh5Jz5npFxMJtfrvvI%2FxuEmQuCuYD7A95ifEmmSkxALkgcdZuH7TGKHsCFtxiAnfnNTaQSRF11HbexhVPLBw%2Fb3merfkAd%2B%2FHtgeHepLWrtBQk8lk8%2F61uguBsMp7vNCRptHLp50HHLBeLdXeS68tGhAYjqAFAngZHUh2i6IgKkPd5um9tkcgCuGPJIb6KdUYXVuVWqa9B8wujewUa%2FT%2FTE2sGdu3W%2B1rvvF5z%2Fs4wXMehQMT3ObSb0bMG7FnQitQwvbjywwY6pgFfRw1aV27hdUbPx07q5Am1j3vrP3BP5km%2BlGXZlPcRBMH0skQGo57112%2B8%2Fw0FBbHPyrcpduGAgEpjtE7KtKmwUOtom6%2BQil2jFAfdSULc9MmlSR6ZkIp6Ir1HkKdTqaLXI3%2FD8hHJP%2Fr%2FI7q0DOOvr7UkMsH4bIxz%2BSNVejkRrbpOLL9h1tD9hw0MsWnjDXavXjMyl%2BWLJdiTCr1%2Bayl4tWJL9YeI&X-Amz-Signature=1364f5e515b03094d03e32b278072ec5768c6d6b74019ecd1c8242a0b9be1015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
