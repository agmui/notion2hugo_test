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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VT5XGMZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPNtZROs7bHgYQHDrD6YgUMgZ7zBlwXixEzQeOEBBuSAiEApIZVmvKJnN7VyoJ54cq7rx4SwYgk5p2xKTx0Cnoyp%2BIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6tvTiN02Nf3yY0RCrcAxlWTz22Znc3taPTG3YCNWrNoTzqJCbrq%2BQt6XD0Wd71Wq6MQaonsLpMKenYa1KfLeqvdCq7fJuU%2BJeh8uR0P6eG9grsJYeKL2w6i9S3TsNNXRz7MhX7Ch5fYboSfYWeLolEmf5GKbfvs7H9dibMn1hDShQ%2BLxwsLDaLt7DWJUDN2MngKCfgOzHyQxCf9CtWFxVaH%2BS%2F9zDgiDofpimX2luIw9LfhC%2B%2Fw8N%2BD5eIU2r%2B44GuBwXi8YIUt9VPKmcBiyhFHwGcFjt64Ee2APueBAf%2B6J2M%2BoieFbyLktF3dA1hLHEIu3c1LASNuiFMJon9aG3gkfI19bgIOerMSvIHROn9blMZt7xwS4LtYSgJGM3J6DQxpKcAKJbbr6iVdgWmfMqO33GTwbdbqtdAXmuw8r28ww22AYp1RTufU3GbH0KMnIx1XV4eOzs77zAMBVf2N7%2BmLheIHQRziHFMJKbNvFiL1kRGCMQzIcs8Ky%2Bo889cYM54Ke0lf6o0M%2BkxEGMyrMPpWr6GU0bKzjg0zES55TWhw%2B%2FOXUToazin%2FjlsBCoEMt%2BjjKm5zmfPyVJk4IK3GquK%2FJOCwyvyEt6cAgHPKteJWzFnfENPntv8rPnpU2PRjGwScK%2BCZpLvgwQ5MLCji8MGOqUB7btcKphdgD1NYLI4w6OkoJPKW%2B6ZZ%2B0BQlixnbqFAORPIuum1y%2F4tyjpKoqN5osjCHBfXb2i%2BXcwZq6nt9ot9WyqW08l5M%2BG1PbhGXxYYy0meV%2FBjEhNZudjicdsRLRGVsfG5NWLdLXpXOBH3Wdnid%2B9LEQzF3sCYUthoO7qwtjwayhBE2hTfeHa45mYyAtTROAPhUxwYZeIzVuMTPIaWJU%2BaMkc&X-Amz-Signature=7e3d14d09d4dc0f5f32def7fffa8bdbaf189e8f6013ef0f5f1555a86f79c8d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VT5XGMZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPNtZROs7bHgYQHDrD6YgUMgZ7zBlwXixEzQeOEBBuSAiEApIZVmvKJnN7VyoJ54cq7rx4SwYgk5p2xKTx0Cnoyp%2BIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6tvTiN02Nf3yY0RCrcAxlWTz22Znc3taPTG3YCNWrNoTzqJCbrq%2BQt6XD0Wd71Wq6MQaonsLpMKenYa1KfLeqvdCq7fJuU%2BJeh8uR0P6eG9grsJYeKL2w6i9S3TsNNXRz7MhX7Ch5fYboSfYWeLolEmf5GKbfvs7H9dibMn1hDShQ%2BLxwsLDaLt7DWJUDN2MngKCfgOzHyQxCf9CtWFxVaH%2BS%2F9zDgiDofpimX2luIw9LfhC%2B%2Fw8N%2BD5eIU2r%2B44GuBwXi8YIUt9VPKmcBiyhFHwGcFjt64Ee2APueBAf%2B6J2M%2BoieFbyLktF3dA1hLHEIu3c1LASNuiFMJon9aG3gkfI19bgIOerMSvIHROn9blMZt7xwS4LtYSgJGM3J6DQxpKcAKJbbr6iVdgWmfMqO33GTwbdbqtdAXmuw8r28ww22AYp1RTufU3GbH0KMnIx1XV4eOzs77zAMBVf2N7%2BmLheIHQRziHFMJKbNvFiL1kRGCMQzIcs8Ky%2Bo889cYM54Ke0lf6o0M%2BkxEGMyrMPpWr6GU0bKzjg0zES55TWhw%2B%2FOXUToazin%2FjlsBCoEMt%2BjjKm5zmfPyVJk4IK3GquK%2FJOCwyvyEt6cAgHPKteJWzFnfENPntv8rPnpU2PRjGwScK%2BCZpLvgwQ5MLCji8MGOqUB7btcKphdgD1NYLI4w6OkoJPKW%2B6ZZ%2B0BQlixnbqFAORPIuum1y%2F4tyjpKoqN5osjCHBfXb2i%2BXcwZq6nt9ot9WyqW08l5M%2BG1PbhGXxYYy0meV%2FBjEhNZudjicdsRLRGVsfG5NWLdLXpXOBH3Wdnid%2B9LEQzF3sCYUthoO7qwtjwayhBE2hTfeHa45mYyAtTROAPhUxwYZeIzVuMTPIaWJU%2BaMkc&X-Amz-Signature=2e7b1a54473fb5ba5d35d1337b3ad8c16c9058f51ebf112e45ddb089b3d96076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VT5XGMZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPNtZROs7bHgYQHDrD6YgUMgZ7zBlwXixEzQeOEBBuSAiEApIZVmvKJnN7VyoJ54cq7rx4SwYgk5p2xKTx0Cnoyp%2BIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6tvTiN02Nf3yY0RCrcAxlWTz22Znc3taPTG3YCNWrNoTzqJCbrq%2BQt6XD0Wd71Wq6MQaonsLpMKenYa1KfLeqvdCq7fJuU%2BJeh8uR0P6eG9grsJYeKL2w6i9S3TsNNXRz7MhX7Ch5fYboSfYWeLolEmf5GKbfvs7H9dibMn1hDShQ%2BLxwsLDaLt7DWJUDN2MngKCfgOzHyQxCf9CtWFxVaH%2BS%2F9zDgiDofpimX2luIw9LfhC%2B%2Fw8N%2BD5eIU2r%2B44GuBwXi8YIUt9VPKmcBiyhFHwGcFjt64Ee2APueBAf%2B6J2M%2BoieFbyLktF3dA1hLHEIu3c1LASNuiFMJon9aG3gkfI19bgIOerMSvIHROn9blMZt7xwS4LtYSgJGM3J6DQxpKcAKJbbr6iVdgWmfMqO33GTwbdbqtdAXmuw8r28ww22AYp1RTufU3GbH0KMnIx1XV4eOzs77zAMBVf2N7%2BmLheIHQRziHFMJKbNvFiL1kRGCMQzIcs8Ky%2Bo889cYM54Ke0lf6o0M%2BkxEGMyrMPpWr6GU0bKzjg0zES55TWhw%2B%2FOXUToazin%2FjlsBCoEMt%2BjjKm5zmfPyVJk4IK3GquK%2FJOCwyvyEt6cAgHPKteJWzFnfENPntv8rPnpU2PRjGwScK%2BCZpLvgwQ5MLCji8MGOqUB7btcKphdgD1NYLI4w6OkoJPKW%2B6ZZ%2B0BQlixnbqFAORPIuum1y%2F4tyjpKoqN5osjCHBfXb2i%2BXcwZq6nt9ot9WyqW08l5M%2BG1PbhGXxYYy0meV%2FBjEhNZudjicdsRLRGVsfG5NWLdLXpXOBH3Wdnid%2B9LEQzF3sCYUthoO7qwtjwayhBE2hTfeHa45mYyAtTROAPhUxwYZeIzVuMTPIaWJU%2BaMkc&X-Amz-Signature=722f7b7a571c1c144e537c602f756d4c518f6bfe2e82a09db87615e668f10160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
