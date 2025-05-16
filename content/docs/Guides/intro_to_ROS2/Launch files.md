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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKRDQ2CM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyzV4c1aW5OCVVTlapb9bJaaOXPVPSintiZ%2Bu3oYGuIgIhAKMDzX4q9fSwjZUjlp%2BNfGzL0svg9LAhM0m3MT8ZL5CWKv8DCDwQABoMNjM3NDIzMTgzODA1IgyaECtu%2BoJhhC9vKGAq3AMKA2eN0ALtv1QX9%2FmS5UkZBqSTw6Qa9RskinnQbmpWOK0MIFg%2B%2BbPToH8utUuAjQB5iCmSr17J9ZRhEbzjdrBj08qZCDlc%2FUeHHVsY%2FxkXuGw2KQmcpgvBUDcpxN7hCRKIV33%2B4noo3cHCdhX%2FXO8sMqLLxJFOGkWNLkqYzwXSCuEAu81lZSORQm5UrCfYijhf7lzgk%2FYf0gmwsA3bXxhDFuZ3mINVI1aJr%2F6oodLaAA7kPh7pFBv6hGsaRpo20DcDygQQIUcP1imdFBIkwNU%2BQCW9TPJMB%2BA3lwL2DY6Y%2BhYzQU72qcCUXDu33mhXYL0XQTQ1Ssr%2BeIxENIhcmi6u4VqjsDaWeRcu8Pqn1%2FbCOBFLHccFxi9HYqU6U%2Bt3mYEZjdKS2vg6sn1CZtTTqgvzJuNQIk%2F9w7kOwfEaxYGrPSsIzBR%2BSNASDP9LQRInnBXDTyTKnIKgs5QnYXOTiLsV4tKxKEDJM%2BF7hyjbSANgYgqRBHzA43C%2BB7rsLQip%2FR4gyJoriAC0Cm9tZJGUahlQLRK3lHvqYMiJ1fUY6cyEKtR9NHoruRc5JAhHRQ7aezLFrM63TaEsdMWLmGRPqfAXClfulv1BSDYMkumZzx4M2NqpoFD6mxgeZSh6ZDCq05rBBjqkAf649BuU9ha0Lb8k6d%2F%2FN40zoKVqGdxjDbaHmlUWl6SwYX9taLMfOC4NatKw9JjThp7nVCQvgQU%2FoC5260SWbBQs9IIgxsCXbXaEWsKC2bItG7G1a2KmKBoxyEbxvZppPwTdqw9VaLmOBXq%2Bh%2FntEthv4NDyfpjsTZlSMqVEVLurd7WWD4xIkMnC4DX5zTmqM9h6W1mYbsA8P1FTivU4N13Bm9Jx&X-Amz-Signature=055d850354866a362ff4400114a9c6f45a69ff27496645ac473f8a9c4a38070e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKRDQ2CM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyzV4c1aW5OCVVTlapb9bJaaOXPVPSintiZ%2Bu3oYGuIgIhAKMDzX4q9fSwjZUjlp%2BNfGzL0svg9LAhM0m3MT8ZL5CWKv8DCDwQABoMNjM3NDIzMTgzODA1IgyaECtu%2BoJhhC9vKGAq3AMKA2eN0ALtv1QX9%2FmS5UkZBqSTw6Qa9RskinnQbmpWOK0MIFg%2B%2BbPToH8utUuAjQB5iCmSr17J9ZRhEbzjdrBj08qZCDlc%2FUeHHVsY%2FxkXuGw2KQmcpgvBUDcpxN7hCRKIV33%2B4noo3cHCdhX%2FXO8sMqLLxJFOGkWNLkqYzwXSCuEAu81lZSORQm5UrCfYijhf7lzgk%2FYf0gmwsA3bXxhDFuZ3mINVI1aJr%2F6oodLaAA7kPh7pFBv6hGsaRpo20DcDygQQIUcP1imdFBIkwNU%2BQCW9TPJMB%2BA3lwL2DY6Y%2BhYzQU72qcCUXDu33mhXYL0XQTQ1Ssr%2BeIxENIhcmi6u4VqjsDaWeRcu8Pqn1%2FbCOBFLHccFxi9HYqU6U%2Bt3mYEZjdKS2vg6sn1CZtTTqgvzJuNQIk%2F9w7kOwfEaxYGrPSsIzBR%2BSNASDP9LQRInnBXDTyTKnIKgs5QnYXOTiLsV4tKxKEDJM%2BF7hyjbSANgYgqRBHzA43C%2BB7rsLQip%2FR4gyJoriAC0Cm9tZJGUahlQLRK3lHvqYMiJ1fUY6cyEKtR9NHoruRc5JAhHRQ7aezLFrM63TaEsdMWLmGRPqfAXClfulv1BSDYMkumZzx4M2NqpoFD6mxgeZSh6ZDCq05rBBjqkAf649BuU9ha0Lb8k6d%2F%2FN40zoKVqGdxjDbaHmlUWl6SwYX9taLMfOC4NatKw9JjThp7nVCQvgQU%2FoC5260SWbBQs9IIgxsCXbXaEWsKC2bItG7G1a2KmKBoxyEbxvZppPwTdqw9VaLmOBXq%2Bh%2FntEthv4NDyfpjsTZlSMqVEVLurd7WWD4xIkMnC4DX5zTmqM9h6W1mYbsA8P1FTivU4N13Bm9Jx&X-Amz-Signature=0afe2535315081b9998c5d85451ade6b253dac440e779f571d3316dfd9f0aa4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKRDQ2CM%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyzV4c1aW5OCVVTlapb9bJaaOXPVPSintiZ%2Bu3oYGuIgIhAKMDzX4q9fSwjZUjlp%2BNfGzL0svg9LAhM0m3MT8ZL5CWKv8DCDwQABoMNjM3NDIzMTgzODA1IgyaECtu%2BoJhhC9vKGAq3AMKA2eN0ALtv1QX9%2FmS5UkZBqSTw6Qa9RskinnQbmpWOK0MIFg%2B%2BbPToH8utUuAjQB5iCmSr17J9ZRhEbzjdrBj08qZCDlc%2FUeHHVsY%2FxkXuGw2KQmcpgvBUDcpxN7hCRKIV33%2B4noo3cHCdhX%2FXO8sMqLLxJFOGkWNLkqYzwXSCuEAu81lZSORQm5UrCfYijhf7lzgk%2FYf0gmwsA3bXxhDFuZ3mINVI1aJr%2F6oodLaAA7kPh7pFBv6hGsaRpo20DcDygQQIUcP1imdFBIkwNU%2BQCW9TPJMB%2BA3lwL2DY6Y%2BhYzQU72qcCUXDu33mhXYL0XQTQ1Ssr%2BeIxENIhcmi6u4VqjsDaWeRcu8Pqn1%2FbCOBFLHccFxi9HYqU6U%2Bt3mYEZjdKS2vg6sn1CZtTTqgvzJuNQIk%2F9w7kOwfEaxYGrPSsIzBR%2BSNASDP9LQRInnBXDTyTKnIKgs5QnYXOTiLsV4tKxKEDJM%2BF7hyjbSANgYgqRBHzA43C%2BB7rsLQip%2FR4gyJoriAC0Cm9tZJGUahlQLRK3lHvqYMiJ1fUY6cyEKtR9NHoruRc5JAhHRQ7aezLFrM63TaEsdMWLmGRPqfAXClfulv1BSDYMkumZzx4M2NqpoFD6mxgeZSh6ZDCq05rBBjqkAf649BuU9ha0Lb8k6d%2F%2FN40zoKVqGdxjDbaHmlUWl6SwYX9taLMfOC4NatKw9JjThp7nVCQvgQU%2FoC5260SWbBQs9IIgxsCXbXaEWsKC2bItG7G1a2KmKBoxyEbxvZppPwTdqw9VaLmOBXq%2Bh%2FntEthv4NDyfpjsTZlSMqVEVLurd7WWD4xIkMnC4DX5zTmqM9h6W1mYbsA8P1FTivU4N13Bm9Jx&X-Amz-Signature=242166663ff6db69b18c9ebf2e51d07803be1ae40a63328ba73f05fe0c559e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
