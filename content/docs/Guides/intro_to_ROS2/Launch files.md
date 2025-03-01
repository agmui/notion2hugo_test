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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5L2C3K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBIVNsygWZHFAuUpnYA9WaDincN2pkVc3KiOy4gq9IWQIhAIim3OKtIJOjMqlWDl2gs%2FXX4Mk%2BYgiR8l965tWqi%2FJgKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycpDOw6QPd3lQ7jeEq3APsEthO4240hxnnOcr4FtACARzm2%2BNUypf%2B3Fjr29TkJMaaPfm8VRvpvFKnt7oACaBFKuUalYI%2F8wT%2Fc4gDIAmSoHbiVuXMzez7%2B7iRiN9xvCm37VeKkXNpRXJZGnG3p4gF0dm7sDVQLCH7I6N%2FSdyoBAqfxC%2FHhikS8CjxvPxWp3kKYT2g0KrBFFSrXWXVgbx2E6p%2FVuZNO0Bd2pEwRRsKTy8g0BppgcaoeUgbS0MfrVFVM0MtoQRMxedGvNd9pfDjgYIg%2FEqppBTm8K6%2BksWUDQprQ5Zr983lHfKQdECJf5CXjpdM94WixvDs%2FD20%2F5Cty9HgkSbggLUisVh5L1tkSBc4bB5GGikxASfM9CF8ZeLF1ULGe0okynUq0mCY26KyYSKvHWfU13scoRKPytCDCXalY7NdhsuiMnOGBsAS%2BbWurVhGLTTfgPQdUTwvuNYkTzYH%2BSaNlVbANUdKurPlBABqSHdZ4obVkJECKB3%2F2y8EeQT2MsqYIBmzLtxXpDTGBEfmGWRDkNJ5nR3zycxqZcRJqmu%2FOmSBrSFO9MfBoNA7FPqkY6YnhMNo0QZJ3PafInE%2FZWte0Tr%2F7I1VQ6kSgfQAP%2FSlo9hADY0XIbbvmEaCibi63wfDE2PJlDD3lIy%2BBjqkAX06ViyzcfXjcIq0vW4g8gWCWEPmth8uf31IrQ8F79RsucnD6e2%2BXRn4742PuqiYitJU1umw81L513sPXkoO5GIdSmVb5miP37SkkfsBv8DXWUBSx7kI4V1j7LMSx60%2BPsixwZpR0SBweL4UKUXMb7hv6mrXeYWoudybUChang6cMLLlqHwtU1b7m0F6B9NKhAhufS3UdJshj%2FAc%2BabZjSpHMwKF&X-Amz-Signature=1c11f80e90ec431350f5c983e229fa7a3501b6bf3d9f3a7ae7ce563ee51e6a46&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5L2C3K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBIVNsygWZHFAuUpnYA9WaDincN2pkVc3KiOy4gq9IWQIhAIim3OKtIJOjMqlWDl2gs%2FXX4Mk%2BYgiR8l965tWqi%2FJgKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycpDOw6QPd3lQ7jeEq3APsEthO4240hxnnOcr4FtACARzm2%2BNUypf%2B3Fjr29TkJMaaPfm8VRvpvFKnt7oACaBFKuUalYI%2F8wT%2Fc4gDIAmSoHbiVuXMzez7%2B7iRiN9xvCm37VeKkXNpRXJZGnG3p4gF0dm7sDVQLCH7I6N%2FSdyoBAqfxC%2FHhikS8CjxvPxWp3kKYT2g0KrBFFSrXWXVgbx2E6p%2FVuZNO0Bd2pEwRRsKTy8g0BppgcaoeUgbS0MfrVFVM0MtoQRMxedGvNd9pfDjgYIg%2FEqppBTm8K6%2BksWUDQprQ5Zr983lHfKQdECJf5CXjpdM94WixvDs%2FD20%2F5Cty9HgkSbggLUisVh5L1tkSBc4bB5GGikxASfM9CF8ZeLF1ULGe0okynUq0mCY26KyYSKvHWfU13scoRKPytCDCXalY7NdhsuiMnOGBsAS%2BbWurVhGLTTfgPQdUTwvuNYkTzYH%2BSaNlVbANUdKurPlBABqSHdZ4obVkJECKB3%2F2y8EeQT2MsqYIBmzLtxXpDTGBEfmGWRDkNJ5nR3zycxqZcRJqmu%2FOmSBrSFO9MfBoNA7FPqkY6YnhMNo0QZJ3PafInE%2FZWte0Tr%2F7I1VQ6kSgfQAP%2FSlo9hADY0XIbbvmEaCibi63wfDE2PJlDD3lIy%2BBjqkAX06ViyzcfXjcIq0vW4g8gWCWEPmth8uf31IrQ8F79RsucnD6e2%2BXRn4742PuqiYitJU1umw81L513sPXkoO5GIdSmVb5miP37SkkfsBv8DXWUBSx7kI4V1j7LMSx60%2BPsixwZpR0SBweL4UKUXMb7hv6mrXeYWoudybUChang6cMLLlqHwtU1b7m0F6B9NKhAhufS3UdJshj%2FAc%2BabZjSpHMwKF&X-Amz-Signature=ef80e4268419fe892642776c3f691d927ee1776f578c0e575efa81cf48776366&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5L2C3K%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDBIVNsygWZHFAuUpnYA9WaDincN2pkVc3KiOy4gq9IWQIhAIim3OKtIJOjMqlWDl2gs%2FXX4Mk%2BYgiR8l965tWqi%2FJgKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycpDOw6QPd3lQ7jeEq3APsEthO4240hxnnOcr4FtACARzm2%2BNUypf%2B3Fjr29TkJMaaPfm8VRvpvFKnt7oACaBFKuUalYI%2F8wT%2Fc4gDIAmSoHbiVuXMzez7%2B7iRiN9xvCm37VeKkXNpRXJZGnG3p4gF0dm7sDVQLCH7I6N%2FSdyoBAqfxC%2FHhikS8CjxvPxWp3kKYT2g0KrBFFSrXWXVgbx2E6p%2FVuZNO0Bd2pEwRRsKTy8g0BppgcaoeUgbS0MfrVFVM0MtoQRMxedGvNd9pfDjgYIg%2FEqppBTm8K6%2BksWUDQprQ5Zr983lHfKQdECJf5CXjpdM94WixvDs%2FD20%2F5Cty9HgkSbggLUisVh5L1tkSBc4bB5GGikxASfM9CF8ZeLF1ULGe0okynUq0mCY26KyYSKvHWfU13scoRKPytCDCXalY7NdhsuiMnOGBsAS%2BbWurVhGLTTfgPQdUTwvuNYkTzYH%2BSaNlVbANUdKurPlBABqSHdZ4obVkJECKB3%2F2y8EeQT2MsqYIBmzLtxXpDTGBEfmGWRDkNJ5nR3zycxqZcRJqmu%2FOmSBrSFO9MfBoNA7FPqkY6YnhMNo0QZJ3PafInE%2FZWte0Tr%2F7I1VQ6kSgfQAP%2FSlo9hADY0XIbbvmEaCibi63wfDE2PJlDD3lIy%2BBjqkAX06ViyzcfXjcIq0vW4g8gWCWEPmth8uf31IrQ8F79RsucnD6e2%2BXRn4742PuqiYitJU1umw81L513sPXkoO5GIdSmVb5miP37SkkfsBv8DXWUBSx7kI4V1j7LMSx60%2BPsixwZpR0SBweL4UKUXMb7hv6mrXeYWoudybUChang6cMLLlqHwtU1b7m0F6B9NKhAhufS3UdJshj%2FAc%2BabZjSpHMwKF&X-Amz-Signature=643428b6183adbcf29ec3eea36e74db7c37c2ca600fabf947dadb832847b3e53&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
