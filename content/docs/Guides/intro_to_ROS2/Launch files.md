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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOB4N2SM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9piD5qkGUmsxYIJH7C5yxqiJ8fNL62RMeBQ1Gq0D4wAiEAl1fBrrCQF0Pem3syhoYis%2BJiuXTZepo5yN7NHZcSZDEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDP5wTeEfOjGX6RrACSrcA2zO3GP9mAkZaNxeXT%2FQS5uEPk5qP8nPcFbbQeu2JKXrmp7f9Cms2jx2sIsXL3sDqTTSnVbKwWFgYduOR%2Bhde6XGvetkyu3p9VuxRR25s81qe7H26VoiwdDDB70gOOOlm7tWiVgeK9tvg1790HUmGnpH4BTRUm3tFLeUZrng%2Fom1BuNkrVHgZHbUSuBV%2BU1REzWgcsFqkILDCvSBLtvxXG07NtZZHumE0FS3SpuMogYLo6rCmSwipCaqRuQqF2SRpj9wdeCi24u%2BLbw%2FYM4VtPxmqhDF3f83Z3S45NvaV5okry1igkcth3zrWbBBSWBakLWNjBWXKVACLqI8aS9QxkXhMuznbECwDm6s7%2Bj09E8%2BwqvgWvDxc2HhimNCE4oItWF%2BeX72j0Mk7EHp0Z65ZNwa8okirw%2Fp%2FzfM4uA2kperFx6Tj7hkKGYRXWPq8nyyO3o2Q63GyR8oyh%2Fq9P8NWFIUvAQRDuqBcwthA9wfE8cNcZbYQuAU2ZuTCVpQ22JACczAJpzXu1nkgJQaM3MnHsKkJsyUqbLuqFlH1QW7LlKdV3OHpbxv2FrtP9SC0AloFXxJEZ%2B0Iq3xVLZ%2Bh73GV1089qJs4pBtupdWAnibUyZ38QCncjb6nQEsWX03MMuMuMAGOqUBozr1AZD4EmzcuS4m8t1Ctl707l8mFHkoyJHlAZFkzIKUiNB1%2BMuBVZr44au40K2dDkiSH2Bky7oHHr7Yy%2BSDANxc68UDBBgrPSOET6M22UgS6iDKGPjdlWQ4dsDZkB51iavfumZ9q5B9hz0EsBNOGtTMl108B1NmzyRL4QqxhKCLKo%2FTErXkRrGTxfQluT6Mes%2Bqeze5B97HKfWT%2F5X1ePo1iNW%2B&X-Amz-Signature=111f3fc0de834c6f8c145b7f83c0cf2eac1efa3895ce0f69acf58fa6ee367cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOB4N2SM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9piD5qkGUmsxYIJH7C5yxqiJ8fNL62RMeBQ1Gq0D4wAiEAl1fBrrCQF0Pem3syhoYis%2BJiuXTZepo5yN7NHZcSZDEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDP5wTeEfOjGX6RrACSrcA2zO3GP9mAkZaNxeXT%2FQS5uEPk5qP8nPcFbbQeu2JKXrmp7f9Cms2jx2sIsXL3sDqTTSnVbKwWFgYduOR%2Bhde6XGvetkyu3p9VuxRR25s81qe7H26VoiwdDDB70gOOOlm7tWiVgeK9tvg1790HUmGnpH4BTRUm3tFLeUZrng%2Fom1BuNkrVHgZHbUSuBV%2BU1REzWgcsFqkILDCvSBLtvxXG07NtZZHumE0FS3SpuMogYLo6rCmSwipCaqRuQqF2SRpj9wdeCi24u%2BLbw%2FYM4VtPxmqhDF3f83Z3S45NvaV5okry1igkcth3zrWbBBSWBakLWNjBWXKVACLqI8aS9QxkXhMuznbECwDm6s7%2Bj09E8%2BwqvgWvDxc2HhimNCE4oItWF%2BeX72j0Mk7EHp0Z65ZNwa8okirw%2Fp%2FzfM4uA2kperFx6Tj7hkKGYRXWPq8nyyO3o2Q63GyR8oyh%2Fq9P8NWFIUvAQRDuqBcwthA9wfE8cNcZbYQuAU2ZuTCVpQ22JACczAJpzXu1nkgJQaM3MnHsKkJsyUqbLuqFlH1QW7LlKdV3OHpbxv2FrtP9SC0AloFXxJEZ%2B0Iq3xVLZ%2Bh73GV1089qJs4pBtupdWAnibUyZ38QCncjb6nQEsWX03MMuMuMAGOqUBozr1AZD4EmzcuS4m8t1Ctl707l8mFHkoyJHlAZFkzIKUiNB1%2BMuBVZr44au40K2dDkiSH2Bky7oHHr7Yy%2BSDANxc68UDBBgrPSOET6M22UgS6iDKGPjdlWQ4dsDZkB51iavfumZ9q5B9hz0EsBNOGtTMl108B1NmzyRL4QqxhKCLKo%2FTErXkRrGTxfQluT6Mes%2Bqeze5B97HKfWT%2F5X1ePo1iNW%2B&X-Amz-Signature=a37869f2c934cbbbbd5fe5d2dfdb6fe415c9b9c945202f8ace0895a628f33bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOB4N2SM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9piD5qkGUmsxYIJH7C5yxqiJ8fNL62RMeBQ1Gq0D4wAiEAl1fBrrCQF0Pem3syhoYis%2BJiuXTZepo5yN7NHZcSZDEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDP5wTeEfOjGX6RrACSrcA2zO3GP9mAkZaNxeXT%2FQS5uEPk5qP8nPcFbbQeu2JKXrmp7f9Cms2jx2sIsXL3sDqTTSnVbKwWFgYduOR%2Bhde6XGvetkyu3p9VuxRR25s81qe7H26VoiwdDDB70gOOOlm7tWiVgeK9tvg1790HUmGnpH4BTRUm3tFLeUZrng%2Fom1BuNkrVHgZHbUSuBV%2BU1REzWgcsFqkILDCvSBLtvxXG07NtZZHumE0FS3SpuMogYLo6rCmSwipCaqRuQqF2SRpj9wdeCi24u%2BLbw%2FYM4VtPxmqhDF3f83Z3S45NvaV5okry1igkcth3zrWbBBSWBakLWNjBWXKVACLqI8aS9QxkXhMuznbECwDm6s7%2Bj09E8%2BwqvgWvDxc2HhimNCE4oItWF%2BeX72j0Mk7EHp0Z65ZNwa8okirw%2Fp%2FzfM4uA2kperFx6Tj7hkKGYRXWPq8nyyO3o2Q63GyR8oyh%2Fq9P8NWFIUvAQRDuqBcwthA9wfE8cNcZbYQuAU2ZuTCVpQ22JACczAJpzXu1nkgJQaM3MnHsKkJsyUqbLuqFlH1QW7LlKdV3OHpbxv2FrtP9SC0AloFXxJEZ%2B0Iq3xVLZ%2Bh73GV1089qJs4pBtupdWAnibUyZ38QCncjb6nQEsWX03MMuMuMAGOqUBozr1AZD4EmzcuS4m8t1Ctl707l8mFHkoyJHlAZFkzIKUiNB1%2BMuBVZr44au40K2dDkiSH2Bky7oHHr7Yy%2BSDANxc68UDBBgrPSOET6M22UgS6iDKGPjdlWQ4dsDZkB51iavfumZ9q5B9hz0EsBNOGtTMl108B1NmzyRL4QqxhKCLKo%2FTErXkRrGTxfQluT6Mes%2Bqeze5B97HKfWT%2F5X1ePo1iNW%2B&X-Amz-Signature=d28fb2a8705352d68dcd5c685c190b2669f3fc084f293b51fcf442dd09baef8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
