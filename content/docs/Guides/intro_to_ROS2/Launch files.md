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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGEKXL3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsjb4ynCM%2BTLg%2FhqeItG7NoPk4L%2BRzxrIwjpCw75A5tAiEA43LL%2FXEaHGcNreh5M%2FhnVZav3dp4c6tzxUCIP6hJdMIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJfhhXXy%2F3i8Rll%2FTSrcA4iXDy9Mz6wfew49VoMnmZ2m41V4niVUtZ8M6bUOYdfwvw6dBH%2FDJkb78OS0BD8MpHF%2BiL%2BWsz8FObLGckUP2eGw%2FNWDEeap%2BblTMN842vFWcuh%2FDX4S7nu%2Bu4GaOWTUumeGJRSzW6FlQ62RmSB0t%2BplW%2FBegQji7CYJ9GHZw6X9bajApqqgVsJp5YxGfnCN1%2FW3gsysEaj1K485ApwktfOgwCCsBZvtBIhJARus1MuUUd%2BjrlwjVtx5JyLtcMRMMM3%2BJ3%2BtfW25d6TFkijDh0G8sPti2w3j4qr6BWcbrhmqXRAbjnPUYeQPYg85bopk%2BBQMA4v6SnGKvgYUqgW0Dtq5tOjVBUSm3krbyXCATUj0EcV5vRYe1tc1orpEzviGnZKaotrMYlSdcWatcXy11gth%2Fq0s3fQzzNmZ27IEilqzyv01%2FMK1jnA1CYDV3DZ1TZ9xacC%2Fz6K2sEt8kWrOpKprFZADRJBHSIC1yXKLZWFpZIy0AYypyAKRdS5qNspYdroHiBmaxIqxZ7aib9YBs8ZMq7gosw0URh%2Bs6qSI%2Brr9i5CIXY6ZUwMqfUJyj7UC90U3RVaisTbro1D9Yuy1kq7bV7sJkuDV2k%2Bw4VIo6ABO494KNKUwpcr%2B9vuJMIDxhcIGOqUB9ek0T6FAAZxfNSJlw6V57nE%2FOJiWANk9yd3xHTAdrFKRaDbOuTGr2KoIrKhp9%2FMWGzBqyiRl%2FrsQChWZPOvfZ5E7RDOcTy9xglC%2Fn7xVO%2F8msZsPqXnSTvR8HLS8TkSZKQXIKr4knyKYgDSNnEDtu3Dmhf7Vq%2FNQFZNjD3Rrltd0ewsw5V8xjqcd9t3gPa9sIeNu8p65bqNf91cXoi33Gy%2FEsiCX&X-Amz-Signature=63999efa430eeebd69ddfc5923451465dba3e395c7451674ea96a717fa5434e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGEKXL3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsjb4ynCM%2BTLg%2FhqeItG7NoPk4L%2BRzxrIwjpCw75A5tAiEA43LL%2FXEaHGcNreh5M%2FhnVZav3dp4c6tzxUCIP6hJdMIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJfhhXXy%2F3i8Rll%2FTSrcA4iXDy9Mz6wfew49VoMnmZ2m41V4niVUtZ8M6bUOYdfwvw6dBH%2FDJkb78OS0BD8MpHF%2BiL%2BWsz8FObLGckUP2eGw%2FNWDEeap%2BblTMN842vFWcuh%2FDX4S7nu%2Bu4GaOWTUumeGJRSzW6FlQ62RmSB0t%2BplW%2FBegQji7CYJ9GHZw6X9bajApqqgVsJp5YxGfnCN1%2FW3gsysEaj1K485ApwktfOgwCCsBZvtBIhJARus1MuUUd%2BjrlwjVtx5JyLtcMRMMM3%2BJ3%2BtfW25d6TFkijDh0G8sPti2w3j4qr6BWcbrhmqXRAbjnPUYeQPYg85bopk%2BBQMA4v6SnGKvgYUqgW0Dtq5tOjVBUSm3krbyXCATUj0EcV5vRYe1tc1orpEzviGnZKaotrMYlSdcWatcXy11gth%2Fq0s3fQzzNmZ27IEilqzyv01%2FMK1jnA1CYDV3DZ1TZ9xacC%2Fz6K2sEt8kWrOpKprFZADRJBHSIC1yXKLZWFpZIy0AYypyAKRdS5qNspYdroHiBmaxIqxZ7aib9YBs8ZMq7gosw0URh%2Bs6qSI%2Brr9i5CIXY6ZUwMqfUJyj7UC90U3RVaisTbro1D9Yuy1kq7bV7sJkuDV2k%2Bw4VIo6ABO494KNKUwpcr%2B9vuJMIDxhcIGOqUB9ek0T6FAAZxfNSJlw6V57nE%2FOJiWANk9yd3xHTAdrFKRaDbOuTGr2KoIrKhp9%2FMWGzBqyiRl%2FrsQChWZPOvfZ5E7RDOcTy9xglC%2Fn7xVO%2F8msZsPqXnSTvR8HLS8TkSZKQXIKr4knyKYgDSNnEDtu3Dmhf7Vq%2FNQFZNjD3Rrltd0ewsw5V8xjqcd9t3gPa9sIeNu8p65bqNf91cXoi33Gy%2FEsiCX&X-Amz-Signature=96c2a0d17bd0a18321e24421f6d83005bf4b809d25dce653e8b7f34b1a192f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGEKXL3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsjb4ynCM%2BTLg%2FhqeItG7NoPk4L%2BRzxrIwjpCw75A5tAiEA43LL%2FXEaHGcNreh5M%2FhnVZav3dp4c6tzxUCIP6hJdMIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJfhhXXy%2F3i8Rll%2FTSrcA4iXDy9Mz6wfew49VoMnmZ2m41V4niVUtZ8M6bUOYdfwvw6dBH%2FDJkb78OS0BD8MpHF%2BiL%2BWsz8FObLGckUP2eGw%2FNWDEeap%2BblTMN842vFWcuh%2FDX4S7nu%2Bu4GaOWTUumeGJRSzW6FlQ62RmSB0t%2BplW%2FBegQji7CYJ9GHZw6X9bajApqqgVsJp5YxGfnCN1%2FW3gsysEaj1K485ApwktfOgwCCsBZvtBIhJARus1MuUUd%2BjrlwjVtx5JyLtcMRMMM3%2BJ3%2BtfW25d6TFkijDh0G8sPti2w3j4qr6BWcbrhmqXRAbjnPUYeQPYg85bopk%2BBQMA4v6SnGKvgYUqgW0Dtq5tOjVBUSm3krbyXCATUj0EcV5vRYe1tc1orpEzviGnZKaotrMYlSdcWatcXy11gth%2Fq0s3fQzzNmZ27IEilqzyv01%2FMK1jnA1CYDV3DZ1TZ9xacC%2Fz6K2sEt8kWrOpKprFZADRJBHSIC1yXKLZWFpZIy0AYypyAKRdS5qNspYdroHiBmaxIqxZ7aib9YBs8ZMq7gosw0URh%2Bs6qSI%2Brr9i5CIXY6ZUwMqfUJyj7UC90U3RVaisTbro1D9Yuy1kq7bV7sJkuDV2k%2Bw4VIo6ABO494KNKUwpcr%2B9vuJMIDxhcIGOqUB9ek0T6FAAZxfNSJlw6V57nE%2FOJiWANk9yd3xHTAdrFKRaDbOuTGr2KoIrKhp9%2FMWGzBqyiRl%2FrsQChWZPOvfZ5E7RDOcTy9xglC%2Fn7xVO%2F8msZsPqXnSTvR8HLS8TkSZKQXIKr4knyKYgDSNnEDtu3Dmhf7Vq%2FNQFZNjD3Rrltd0ewsw5V8xjqcd9t3gPa9sIeNu8p65bqNf91cXoi33Gy%2FEsiCX&X-Amz-Signature=9a66773ebc048684a0fa5104d6f02a888801fbad26067890ba5fae9af0ae1a52&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
