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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGA5J45S%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9vXWjRN712n55yjt8nxOOPHPGcoLPqCBMjeXfcAlj5AIgefogqLoGuub57XyRMz8v5e%2BRXigGF91MvxjRLanClLEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjYnL59IR3IBtQTFCrcA1ZjGCxBa17tULDj2bavLabA0YZrnWANrLF3CFMyIydpbMaPeonyPqF05vVJghPLWv%2BeREzf0wtFE%2F2CjT3PxD%2FSpnKdu%2FXgEL7AYaAefmWQRSO4h%2FHaRQw6QAOWB7xRQMtlR0Ols%2Bi0IMi7n5uZbDNVq382VCxI%2FB3zGmt0BZ9yIJdBvGBqIv09LTjcai96taTF%2F5wKK25%2F9ULo3BAbXAaW%2FWpeQ97zDgcmG8CipXZOfSy1PnroQbD7MDUmA6nJnqdqd2RusWcoErlcwqUahW9drMot6x%2Bv15X47BaRCt5B%2BO0CMQvbCkW8sc7PTAsJy8ZAmg28RrVgYUJbTHSuhsHa%2B1i5sQpp2cFfCBnt5qjuoJICN%2BiQJWmJxeFaDOMk37egvf%2BAAyjPoGv7ZEp7jJow5jWtfQcvbJQbBqXhTzYHC86WgD2%2FyObicENEQ%2BbXS6KqxN7WSHORUOhnW82%2FOtP6mfduTsH%2BvlnBTzKT%2Fa26jmcGHuCko3hvi3Qkhc97GcO5UNvva49eAA1i52V6cLOZdBlUYCgXyarxvcRRhh5ZbYCtrkJc%2Bpb9SZ%2B%2Bn%2FsATrX4YTU3V2zKM%2BB0LwQfg1wAUbvyLq2bA30X7zXQCj7Hr7o5G7aIVI%2B8pFqHMPGTlMMGOqUB165xsZIKA5UWiN%2Foy4IrFI0Qj3W%2Bze2%2BN0nm7ytWCHwp0T%2BUWZLtGO6tBjoyBYP6yQjgJ4St82FFo7JDbPJTV7fKPxyvsJzFthxKUYlmeZAQnIneM3AsumCZTbFB2V6lhhN%2FTBFbAln45maz44eiHBPR7JxcZk93BhiRd9fBDSwMxPZsKDRrkcAd3ly4qaN5oDWSzijbJW3nzk4wqf%2BlzVlPUAR6&X-Amz-Signature=9f389cf685bf4838ce2b0f760b103c2e77832ceb903bc43767d1ac53cf2a5c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGA5J45S%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9vXWjRN712n55yjt8nxOOPHPGcoLPqCBMjeXfcAlj5AIgefogqLoGuub57XyRMz8v5e%2BRXigGF91MvxjRLanClLEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjYnL59IR3IBtQTFCrcA1ZjGCxBa17tULDj2bavLabA0YZrnWANrLF3CFMyIydpbMaPeonyPqF05vVJghPLWv%2BeREzf0wtFE%2F2CjT3PxD%2FSpnKdu%2FXgEL7AYaAefmWQRSO4h%2FHaRQw6QAOWB7xRQMtlR0Ols%2Bi0IMi7n5uZbDNVq382VCxI%2FB3zGmt0BZ9yIJdBvGBqIv09LTjcai96taTF%2F5wKK25%2F9ULo3BAbXAaW%2FWpeQ97zDgcmG8CipXZOfSy1PnroQbD7MDUmA6nJnqdqd2RusWcoErlcwqUahW9drMot6x%2Bv15X47BaRCt5B%2BO0CMQvbCkW8sc7PTAsJy8ZAmg28RrVgYUJbTHSuhsHa%2B1i5sQpp2cFfCBnt5qjuoJICN%2BiQJWmJxeFaDOMk37egvf%2BAAyjPoGv7ZEp7jJow5jWtfQcvbJQbBqXhTzYHC86WgD2%2FyObicENEQ%2BbXS6KqxN7WSHORUOhnW82%2FOtP6mfduTsH%2BvlnBTzKT%2Fa26jmcGHuCko3hvi3Qkhc97GcO5UNvva49eAA1i52V6cLOZdBlUYCgXyarxvcRRhh5ZbYCtrkJc%2Bpb9SZ%2B%2Bn%2FsATrX4YTU3V2zKM%2BB0LwQfg1wAUbvyLq2bA30X7zXQCj7Hr7o5G7aIVI%2B8pFqHMPGTlMMGOqUB165xsZIKA5UWiN%2Foy4IrFI0Qj3W%2Bze2%2BN0nm7ytWCHwp0T%2BUWZLtGO6tBjoyBYP6yQjgJ4St82FFo7JDbPJTV7fKPxyvsJzFthxKUYlmeZAQnIneM3AsumCZTbFB2V6lhhN%2FTBFbAln45maz44eiHBPR7JxcZk93BhiRd9fBDSwMxPZsKDRrkcAd3ly4qaN5oDWSzijbJW3nzk4wqf%2BlzVlPUAR6&X-Amz-Signature=732e79d7d5d831dcdc4b1315e49a2922977df04ad6b39fcb6050d04d177c8b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGA5J45S%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9vXWjRN712n55yjt8nxOOPHPGcoLPqCBMjeXfcAlj5AIgefogqLoGuub57XyRMz8v5e%2BRXigGF91MvxjRLanClLEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjYnL59IR3IBtQTFCrcA1ZjGCxBa17tULDj2bavLabA0YZrnWANrLF3CFMyIydpbMaPeonyPqF05vVJghPLWv%2BeREzf0wtFE%2F2CjT3PxD%2FSpnKdu%2FXgEL7AYaAefmWQRSO4h%2FHaRQw6QAOWB7xRQMtlR0Ols%2Bi0IMi7n5uZbDNVq382VCxI%2FB3zGmt0BZ9yIJdBvGBqIv09LTjcai96taTF%2F5wKK25%2F9ULo3BAbXAaW%2FWpeQ97zDgcmG8CipXZOfSy1PnroQbD7MDUmA6nJnqdqd2RusWcoErlcwqUahW9drMot6x%2Bv15X47BaRCt5B%2BO0CMQvbCkW8sc7PTAsJy8ZAmg28RrVgYUJbTHSuhsHa%2B1i5sQpp2cFfCBnt5qjuoJICN%2BiQJWmJxeFaDOMk37egvf%2BAAyjPoGv7ZEp7jJow5jWtfQcvbJQbBqXhTzYHC86WgD2%2FyObicENEQ%2BbXS6KqxN7WSHORUOhnW82%2FOtP6mfduTsH%2BvlnBTzKT%2Fa26jmcGHuCko3hvi3Qkhc97GcO5UNvva49eAA1i52V6cLOZdBlUYCgXyarxvcRRhh5ZbYCtrkJc%2Bpb9SZ%2B%2Bn%2FsATrX4YTU3V2zKM%2BB0LwQfg1wAUbvyLq2bA30X7zXQCj7Hr7o5G7aIVI%2B8pFqHMPGTlMMGOqUB165xsZIKA5UWiN%2Foy4IrFI0Qj3W%2Bze2%2BN0nm7ytWCHwp0T%2BUWZLtGO6tBjoyBYP6yQjgJ4St82FFo7JDbPJTV7fKPxyvsJzFthxKUYlmeZAQnIneM3AsumCZTbFB2V6lhhN%2FTBFbAln45maz44eiHBPR7JxcZk93BhiRd9fBDSwMxPZsKDRrkcAd3ly4qaN5oDWSzijbJW3nzk4wqf%2BlzVlPUAR6&X-Amz-Signature=22df4d1e1cd0a37dcf2af08e1bd0b75dc43ffd55632ae35f385b876e0ce4b766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
