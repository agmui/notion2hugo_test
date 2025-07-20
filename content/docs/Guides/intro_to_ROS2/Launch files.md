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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLOVLOL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3frEL6HvMYlejif97xhW%2FJNApkLK6Tnr3L50LdHqKZAiA1a5HskkQ2DeZ8AgPXzfaI1GTrhyTaf%2BU0Nk1lNt2uwCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmRoHX12rrOxTsibmKtwD51HDJ2aLSsxS4y7b4ijGvx3nJX0nFSISejLucns5nufRz9CW8NQsTbgp8hY0J8JY5YFuD7vvtufBuOPVtVSJtYCxt%2FRkQEwas2Niz5jx50vaJ5VdOcCf0PU2liXJa%2Fp54puNoawU4qhNUauuNVVF5XDmFQDjoEeDBHbAslYp6dg9Wj5g071vi1GPQl1vnvtD1qKPSgEwcxXPZgwhEAE%2FV%2BqXy5be6cvh3EqsUKyU7fRhdQxprNUI9L6FMVw209Protxxh8R%2B9X7%2BCFCg4fA7t8jMURRWJYa6ckQgcXM7k%2BqWPBL98UT4VqrcxqhHz46BnmnsAoKTxmnLzYy0s0Pe2W%2FlmiCrxt4UTz5wqiwE7I%2BVfs%2FLD9%2FUfHC0rjyfRnRopvifo4xtBc8B7nxrLBuDgEe2xYaFza0JUCJlZcHJTd2c2OzH3ByT326Af%2B7YgeKzOpTlTf0VLX5%2Fp8S9BBBE5JZQUEbSsibjQcAPyxma8dupkRZZ84rNGz2WJamsIQxRUEIUuTwtjd0hJoHMZWlYIwm%2Bwpf86IEJyFGzs6r8p%2FW40%2Bbt9E1PNB4gJd08i0ElJfJhm2GioMsV0yejf4M5maQgLYDtP9hTkx8wC4VngA%2BLy7UbFC%2F%2BYzLaJfcws9vzwwY6pgELu22AqaHvAX8mC5UL7QOhaKsNSEXVAQ3I4V%2BLaA9oc7tE8sMI28FKARfHRd9wPV0%2FASQa3kUcrF3jsmRgovMIKDaFkIXWM%2FaKhc9qIcWGqDJsGvw1kRvIH4mFcu6JEB4Gxkp5nyyYZcQbXiumPkE37W6cGphN7TTtyD55QuCDMz%2F56W0GP%2BujsJ3zuh%2BH9%2BLRxiW6X4DHgZb%2FO%2FCi9CkqU1ysDS7P&X-Amz-Signature=895d1a846f73cb2f22bec98af1549340b9eed0e279a2a0da67f57f88b2b25753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLOVLOL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3frEL6HvMYlejif97xhW%2FJNApkLK6Tnr3L50LdHqKZAiA1a5HskkQ2DeZ8AgPXzfaI1GTrhyTaf%2BU0Nk1lNt2uwCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmRoHX12rrOxTsibmKtwD51HDJ2aLSsxS4y7b4ijGvx3nJX0nFSISejLucns5nufRz9CW8NQsTbgp8hY0J8JY5YFuD7vvtufBuOPVtVSJtYCxt%2FRkQEwas2Niz5jx50vaJ5VdOcCf0PU2liXJa%2Fp54puNoawU4qhNUauuNVVF5XDmFQDjoEeDBHbAslYp6dg9Wj5g071vi1GPQl1vnvtD1qKPSgEwcxXPZgwhEAE%2FV%2BqXy5be6cvh3EqsUKyU7fRhdQxprNUI9L6FMVw209Protxxh8R%2B9X7%2BCFCg4fA7t8jMURRWJYa6ckQgcXM7k%2BqWPBL98UT4VqrcxqhHz46BnmnsAoKTxmnLzYy0s0Pe2W%2FlmiCrxt4UTz5wqiwE7I%2BVfs%2FLD9%2FUfHC0rjyfRnRopvifo4xtBc8B7nxrLBuDgEe2xYaFza0JUCJlZcHJTd2c2OzH3ByT326Af%2B7YgeKzOpTlTf0VLX5%2Fp8S9BBBE5JZQUEbSsibjQcAPyxma8dupkRZZ84rNGz2WJamsIQxRUEIUuTwtjd0hJoHMZWlYIwm%2Bwpf86IEJyFGzs6r8p%2FW40%2Bbt9E1PNB4gJd08i0ElJfJhm2GioMsV0yejf4M5maQgLYDtP9hTkx8wC4VngA%2BLy7UbFC%2F%2BYzLaJfcws9vzwwY6pgELu22AqaHvAX8mC5UL7QOhaKsNSEXVAQ3I4V%2BLaA9oc7tE8sMI28FKARfHRd9wPV0%2FASQa3kUcrF3jsmRgovMIKDaFkIXWM%2FaKhc9qIcWGqDJsGvw1kRvIH4mFcu6JEB4Gxkp5nyyYZcQbXiumPkE37W6cGphN7TTtyD55QuCDMz%2F56W0GP%2BujsJ3zuh%2BH9%2BLRxiW6X4DHgZb%2FO%2FCi9CkqU1ysDS7P&X-Amz-Signature=042c536f5800222a7c88124379f18970940e3ef9fb3d42a5fa1e88a314124bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLOVLOL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3frEL6HvMYlejif97xhW%2FJNApkLK6Tnr3L50LdHqKZAiA1a5HskkQ2DeZ8AgPXzfaI1GTrhyTaf%2BU0Nk1lNt2uwCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmRoHX12rrOxTsibmKtwD51HDJ2aLSsxS4y7b4ijGvx3nJX0nFSISejLucns5nufRz9CW8NQsTbgp8hY0J8JY5YFuD7vvtufBuOPVtVSJtYCxt%2FRkQEwas2Niz5jx50vaJ5VdOcCf0PU2liXJa%2Fp54puNoawU4qhNUauuNVVF5XDmFQDjoEeDBHbAslYp6dg9Wj5g071vi1GPQl1vnvtD1qKPSgEwcxXPZgwhEAE%2FV%2BqXy5be6cvh3EqsUKyU7fRhdQxprNUI9L6FMVw209Protxxh8R%2B9X7%2BCFCg4fA7t8jMURRWJYa6ckQgcXM7k%2BqWPBL98UT4VqrcxqhHz46BnmnsAoKTxmnLzYy0s0Pe2W%2FlmiCrxt4UTz5wqiwE7I%2BVfs%2FLD9%2FUfHC0rjyfRnRopvifo4xtBc8B7nxrLBuDgEe2xYaFza0JUCJlZcHJTd2c2OzH3ByT326Af%2B7YgeKzOpTlTf0VLX5%2Fp8S9BBBE5JZQUEbSsibjQcAPyxma8dupkRZZ84rNGz2WJamsIQxRUEIUuTwtjd0hJoHMZWlYIwm%2Bwpf86IEJyFGzs6r8p%2FW40%2Bbt9E1PNB4gJd08i0ElJfJhm2GioMsV0yejf4M5maQgLYDtP9hTkx8wC4VngA%2BLy7UbFC%2F%2BYzLaJfcws9vzwwY6pgELu22AqaHvAX8mC5UL7QOhaKsNSEXVAQ3I4V%2BLaA9oc7tE8sMI28FKARfHRd9wPV0%2FASQa3kUcrF3jsmRgovMIKDaFkIXWM%2FaKhc9qIcWGqDJsGvw1kRvIH4mFcu6JEB4Gxkp5nyyYZcQbXiumPkE37W6cGphN7TTtyD55QuCDMz%2F56W0GP%2BujsJ3zuh%2BH9%2BLRxiW6X4DHgZb%2FO%2FCi9CkqU1ysDS7P&X-Amz-Signature=ed68e506a2b067853e8e6ea90d763f5333a7ab17b49b57c43e3746db37b6deec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
