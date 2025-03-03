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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5CRDPQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbzshd9SpGFiCafgDOuZj1SjbRlR1fjdn%2B2vmLyEWfpAiB4F0dzY5wV9y5WbI56zSZNSVvSVdZ3nc3Ep5qwNGXlYSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEIRpX6VAq37Jk%2FrKtwDseYOnfFNkEfqoYx%2FACj1YKLcBgzbkV%2B58xsnBUsEszlA%2F7aIda3rlGros%2FGLpe8im22B%2FW605mQki3lOB2Uqgwz6hv0IHqankhPGTd3gfUD5e8427gIeeLS3QAqdilVNPDyAT8c7TJfJCoTSPdNWwxRPrsRu7eoHG9b0Hc61w1OWhxlB916MIslfZi20%2BxDZj%2Bw1YJTcVUEprPYTuB4xiUV2QqAMppzenEyPFgjV1qhsBAQ8qWLpzXg3wEhZN%2Fj9suljg0%2FwZZR1Vqch3Wqy8HqJ6W3IvVzN7F9c7CfAEgGWKIjYrSlMCKhVJi25nu%2Bl7CItMymoqhe%2BVT0Dgt%2FjTU2EpNIXztb5NV7HobWNkVYAdwXWqJCKR9%2FwT6pBOR%2BgbIqbvYoRnjMC0H3Xk9SxtEClcv0qDawnCt80wLSKzaZwofH7%2FMEnDt8eIAPJkgLQKFuMIupLpdlQp1zVFS1OcLFU5OlNwQPwIWtc6onC4JunsNNf8Y1Z30PKs5pevq3%2BG8t3afc%2F8alGKHzu%2BE31HQCx12w24dcTlRcHfZW4%2BAwrQEYVxyAvBdtU%2BhIS3V4V5w8SBaxXHdTJ1oHIefHKCMaTlPqifO6bPXCc9shIu6iuWU%2FFvD8VYDkEFdAwnaCUvgY6pgEEv9HL%2FAHAj66MMLnRgp8YVVd0xsNW6y7GAwuiy44wT%2Fd96OStVA9dO7S2Ss7ElNQLX5F%2Bb0yFnj6m%2BviMttbxogDtTimt7%2BT3AbDRQ5fHcIflWnUtj9R03Z0ICuUslm6m4y57EUO2jDsJHlOXvb%2FUHNottzJAacv8wAKesb3WM9HFb0MyM7ZJciPzZIpUhgPdd75COxuhYG8e1e5XYfdMIZjzlawl&X-Amz-Signature=af55a4f1335cbec195481417fa5a69621cb731137b7bb478a8a5d1b2b72327bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5CRDPQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbzshd9SpGFiCafgDOuZj1SjbRlR1fjdn%2B2vmLyEWfpAiB4F0dzY5wV9y5WbI56zSZNSVvSVdZ3nc3Ep5qwNGXlYSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEIRpX6VAq37Jk%2FrKtwDseYOnfFNkEfqoYx%2FACj1YKLcBgzbkV%2B58xsnBUsEszlA%2F7aIda3rlGros%2FGLpe8im22B%2FW605mQki3lOB2Uqgwz6hv0IHqankhPGTd3gfUD5e8427gIeeLS3QAqdilVNPDyAT8c7TJfJCoTSPdNWwxRPrsRu7eoHG9b0Hc61w1OWhxlB916MIslfZi20%2BxDZj%2Bw1YJTcVUEprPYTuB4xiUV2QqAMppzenEyPFgjV1qhsBAQ8qWLpzXg3wEhZN%2Fj9suljg0%2FwZZR1Vqch3Wqy8HqJ6W3IvVzN7F9c7CfAEgGWKIjYrSlMCKhVJi25nu%2Bl7CItMymoqhe%2BVT0Dgt%2FjTU2EpNIXztb5NV7HobWNkVYAdwXWqJCKR9%2FwT6pBOR%2BgbIqbvYoRnjMC0H3Xk9SxtEClcv0qDawnCt80wLSKzaZwofH7%2FMEnDt8eIAPJkgLQKFuMIupLpdlQp1zVFS1OcLFU5OlNwQPwIWtc6onC4JunsNNf8Y1Z30PKs5pevq3%2BG8t3afc%2F8alGKHzu%2BE31HQCx12w24dcTlRcHfZW4%2BAwrQEYVxyAvBdtU%2BhIS3V4V5w8SBaxXHdTJ1oHIefHKCMaTlPqifO6bPXCc9shIu6iuWU%2FFvD8VYDkEFdAwnaCUvgY6pgEEv9HL%2FAHAj66MMLnRgp8YVVd0xsNW6y7GAwuiy44wT%2Fd96OStVA9dO7S2Ss7ElNQLX5F%2Bb0yFnj6m%2BviMttbxogDtTimt7%2BT3AbDRQ5fHcIflWnUtj9R03Z0ICuUslm6m4y57EUO2jDsJHlOXvb%2FUHNottzJAacv8wAKesb3WM9HFb0MyM7ZJciPzZIpUhgPdd75COxuhYG8e1e5XYfdMIZjzlawl&X-Amz-Signature=a0224fe7879fdc8bfdec6f2e600716fc369c660f390bbf5ef0c16ec20bb5aec6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR5CRDPQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T041114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbzshd9SpGFiCafgDOuZj1SjbRlR1fjdn%2B2vmLyEWfpAiB4F0dzY5wV9y5WbI56zSZNSVvSVdZ3nc3Ep5qwNGXlYSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEIRpX6VAq37Jk%2FrKtwDseYOnfFNkEfqoYx%2FACj1YKLcBgzbkV%2B58xsnBUsEszlA%2F7aIda3rlGros%2FGLpe8im22B%2FW605mQki3lOB2Uqgwz6hv0IHqankhPGTd3gfUD5e8427gIeeLS3QAqdilVNPDyAT8c7TJfJCoTSPdNWwxRPrsRu7eoHG9b0Hc61w1OWhxlB916MIslfZi20%2BxDZj%2Bw1YJTcVUEprPYTuB4xiUV2QqAMppzenEyPFgjV1qhsBAQ8qWLpzXg3wEhZN%2Fj9suljg0%2FwZZR1Vqch3Wqy8HqJ6W3IvVzN7F9c7CfAEgGWKIjYrSlMCKhVJi25nu%2Bl7CItMymoqhe%2BVT0Dgt%2FjTU2EpNIXztb5NV7HobWNkVYAdwXWqJCKR9%2FwT6pBOR%2BgbIqbvYoRnjMC0H3Xk9SxtEClcv0qDawnCt80wLSKzaZwofH7%2FMEnDt8eIAPJkgLQKFuMIupLpdlQp1zVFS1OcLFU5OlNwQPwIWtc6onC4JunsNNf8Y1Z30PKs5pevq3%2BG8t3afc%2F8alGKHzu%2BE31HQCx12w24dcTlRcHfZW4%2BAwrQEYVxyAvBdtU%2BhIS3V4V5w8SBaxXHdTJ1oHIefHKCMaTlPqifO6bPXCc9shIu6iuWU%2FFvD8VYDkEFdAwnaCUvgY6pgEEv9HL%2FAHAj66MMLnRgp8YVVd0xsNW6y7GAwuiy44wT%2Fd96OStVA9dO7S2Ss7ElNQLX5F%2Bb0yFnj6m%2BviMttbxogDtTimt7%2BT3AbDRQ5fHcIflWnUtj9R03Z0ICuUslm6m4y57EUO2jDsJHlOXvb%2FUHNottzJAacv8wAKesb3WM9HFb0MyM7ZJciPzZIpUhgPdd75COxuhYG8e1e5XYfdMIZjzlawl&X-Amz-Signature=630916db9fe177e627e7465097653fd29fd72ff5d27e5b2b853386c39fcef00c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
