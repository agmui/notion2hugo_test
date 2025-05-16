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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOC5TBS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5qD%2F%2BBfICe34P3n13r5gyKu%2BNXMShwawqg09sNyqkrgIhAIR3%2FhOjnUmYVdtbaEHLMx2vRINyG%2BBlJYkC%2Fu9qnT%2F7Kv8DCE4QABoMNjM3NDIzMTgzODA1IgwDI0MNDYglBtjAA94q3AO2HpSZGZGun24wxBM7srVVpJEIH3E9tfTTqUOGNNje5pwdJKNl7p7eTGI2NSn59WKMGYf5U7Rz%2BMPeop2nmhtZPhJ%2B7nHJmAPW4MwWyoQvJAptPQNp2UJiWa2AnDDxJzRmh1MXnjd7FA4N8igvLDMmG2gxEPg8Ha5gTDcTWOxIPTPFepefCrgg91gPqJvQ7z7OKFxaSigENx%2FyZv5pEt8qhMtlBxweXkzGC0u3BtAQZB3G7fBQon%2F21Tqs%2FJaMP9R4xedtNjAM%2BQNF4U3qNNClh6JZyDG4C1qG9iOlf8GFfbIf%2BAC4zERtqbUVNWDnGjtMnnKXbRRRPniPAjyOKK6VB4CKCNLrctFALA5V97yTCiHXyGqVudU6TPsB3tsBrbS2yVfwps0vdUFelkU2dPqJt5NuQcR0kCMGpi6uX44A4AT1eWeAQkn9PgDmncSuDl1VCso%2BUCUS5R4o25HrKim%2BmtrdVH7GOCTvxrrjWdiUvO3rAyw7HObjoFhGDALv9koSKQLxryVuL6Z0pds7P2tZEJ08PksdF4xGJ2CZtqmQzeRxuI2QKEMsykFVACDAuW30JWFWLAs45v1qnAeObOVSpmEkRRPHOpBqEKaKT1L5F75xGlWjgTDtSxVj6zDoxJ7BBjqkAX1tVuLNy%2BIQmMix6iOptHaZaMIDyrxR%2FAaGiddgJgJg%2BbBWUCmfYUGYgg8BKJ4YY9dC0ElND%2F0avXoMGhDJjSm1JiEhll2HZt%2FVcWx6kMzZJR1ltTgMZCmJujKTvV7NTPg9rkIzvf8JwFTAs7IpVK5XN8U6DxRIYNeZY08mfCCVX87mBwvmRshlhVpiKEMZrMmA2ntT1clZILx6VA0I%2BFDP8CkH&X-Amz-Signature=ec4a3b7ea2f30781168bed0d35df831d117349d259d4c04e3914b7109a1784ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOC5TBS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5qD%2F%2BBfICe34P3n13r5gyKu%2BNXMShwawqg09sNyqkrgIhAIR3%2FhOjnUmYVdtbaEHLMx2vRINyG%2BBlJYkC%2Fu9qnT%2F7Kv8DCE4QABoMNjM3NDIzMTgzODA1IgwDI0MNDYglBtjAA94q3AO2HpSZGZGun24wxBM7srVVpJEIH3E9tfTTqUOGNNje5pwdJKNl7p7eTGI2NSn59WKMGYf5U7Rz%2BMPeop2nmhtZPhJ%2B7nHJmAPW4MwWyoQvJAptPQNp2UJiWa2AnDDxJzRmh1MXnjd7FA4N8igvLDMmG2gxEPg8Ha5gTDcTWOxIPTPFepefCrgg91gPqJvQ7z7OKFxaSigENx%2FyZv5pEt8qhMtlBxweXkzGC0u3BtAQZB3G7fBQon%2F21Tqs%2FJaMP9R4xedtNjAM%2BQNF4U3qNNClh6JZyDG4C1qG9iOlf8GFfbIf%2BAC4zERtqbUVNWDnGjtMnnKXbRRRPniPAjyOKK6VB4CKCNLrctFALA5V97yTCiHXyGqVudU6TPsB3tsBrbS2yVfwps0vdUFelkU2dPqJt5NuQcR0kCMGpi6uX44A4AT1eWeAQkn9PgDmncSuDl1VCso%2BUCUS5R4o25HrKim%2BmtrdVH7GOCTvxrrjWdiUvO3rAyw7HObjoFhGDALv9koSKQLxryVuL6Z0pds7P2tZEJ08PksdF4xGJ2CZtqmQzeRxuI2QKEMsykFVACDAuW30JWFWLAs45v1qnAeObOVSpmEkRRPHOpBqEKaKT1L5F75xGlWjgTDtSxVj6zDoxJ7BBjqkAX1tVuLNy%2BIQmMix6iOptHaZaMIDyrxR%2FAaGiddgJgJg%2BbBWUCmfYUGYgg8BKJ4YY9dC0ElND%2F0avXoMGhDJjSm1JiEhll2HZt%2FVcWx6kMzZJR1ltTgMZCmJujKTvV7NTPg9rkIzvf8JwFTAs7IpVK5XN8U6DxRIYNeZY08mfCCVX87mBwvmRshlhVpiKEMZrMmA2ntT1clZILx6VA0I%2BFDP8CkH&X-Amz-Signature=61e59ef210234bdd2c4e147ec94d50d94925e940983aec3ee31ef482c08e12a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOC5TBS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5qD%2F%2BBfICe34P3n13r5gyKu%2BNXMShwawqg09sNyqkrgIhAIR3%2FhOjnUmYVdtbaEHLMx2vRINyG%2BBlJYkC%2Fu9qnT%2F7Kv8DCE4QABoMNjM3NDIzMTgzODA1IgwDI0MNDYglBtjAA94q3AO2HpSZGZGun24wxBM7srVVpJEIH3E9tfTTqUOGNNje5pwdJKNl7p7eTGI2NSn59WKMGYf5U7Rz%2BMPeop2nmhtZPhJ%2B7nHJmAPW4MwWyoQvJAptPQNp2UJiWa2AnDDxJzRmh1MXnjd7FA4N8igvLDMmG2gxEPg8Ha5gTDcTWOxIPTPFepefCrgg91gPqJvQ7z7OKFxaSigENx%2FyZv5pEt8qhMtlBxweXkzGC0u3BtAQZB3G7fBQon%2F21Tqs%2FJaMP9R4xedtNjAM%2BQNF4U3qNNClh6JZyDG4C1qG9iOlf8GFfbIf%2BAC4zERtqbUVNWDnGjtMnnKXbRRRPniPAjyOKK6VB4CKCNLrctFALA5V97yTCiHXyGqVudU6TPsB3tsBrbS2yVfwps0vdUFelkU2dPqJt5NuQcR0kCMGpi6uX44A4AT1eWeAQkn9PgDmncSuDl1VCso%2BUCUS5R4o25HrKim%2BmtrdVH7GOCTvxrrjWdiUvO3rAyw7HObjoFhGDALv9koSKQLxryVuL6Z0pds7P2tZEJ08PksdF4xGJ2CZtqmQzeRxuI2QKEMsykFVACDAuW30JWFWLAs45v1qnAeObOVSpmEkRRPHOpBqEKaKT1L5F75xGlWjgTDtSxVj6zDoxJ7BBjqkAX1tVuLNy%2BIQmMix6iOptHaZaMIDyrxR%2FAaGiddgJgJg%2BbBWUCmfYUGYgg8BKJ4YY9dC0ElND%2F0avXoMGhDJjSm1JiEhll2HZt%2FVcWx6kMzZJR1ltTgMZCmJujKTvV7NTPg9rkIzvf8JwFTAs7IpVK5XN8U6DxRIYNeZY08mfCCVX87mBwvmRshlhVpiKEMZrMmA2ntT1clZILx6VA0I%2BFDP8CkH&X-Amz-Signature=da4b9996f589eec8c14eab0d3ccf747a88f185ca9011c189335747b544c4687f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
