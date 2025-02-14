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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMAUHX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIELlxyJMOUJquFU3h0SNerbNWnGRJ8l%2F%2BTpKgJVYCUB3AiEAiUM%2BAxu%2B5wt2Vymap0RVfebcpauGVYw%2Fl%2FVKBA20y%2BMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIDwpn6MTdqBEFdEIyrcA%2BNYxem1LvmfBK%2FttAvSpYAGJDsG4dRQkzy3nU7w22lCnSExigrTLVHCQI%2BtZi4J%2B85jDrF8ODE1wJXG4Vg1F3A8LAnbWBzXEWcgDBIWXNeEfG%2BAwoI1IJ0u17THSUSnYpBCGEWWr5VTtw8TGR92lDvxBUA7gsuWIGdFClvk2baU2%2FydHsJHFZtHXUH37qjMBgiP42vDzoPk7RVo1ynZIIQe6aQXs1cNHzYNkxtrCaQwuDvFeyf4Ce0Qt5u4skat9tANe9h%2Fwevw9h67stftJs%2BBlz0kS5KZtrHJFvtJXhmZgomy78k1hbiqzHuUxezkxu0QEaKt4tKg7AcLbnprEjXU%2FAaRJC%2BGRb7q%2BC6M5jmrcSNy7pgS3ywSp8GTPS5P41ZOksoZOG44zKeheN99K8c3Q2gdutSPsXJfWEX7peBo6Kl%2BnBMR3T2%2BADgC2nivcVWj91m9q4O%2FsXWpSii2DBTssrdbXSB5yU393nUKeEZ1Q%2Fd4XmmTIHSGu774rseC1P3OXCnLS3pXOkwK6Ym90vdv91tKUc1Z77%2BjV0Bx%2BhzsueddjzVuTMwvVnWInPNXzPVgGGsTKoUBpWoh1sglzO8QuUnmqxCJJPhB79YpNhF50ZYjwQGczSXT1JWVMIidvr0GOqUBNNDGP0iiZ4pVGFwiNA6EX8jptsJXdta2AOSjh7upz8lMh9Qg1t1K8uHuNKejkL6tDCfy5BP9RSyjYCLmu5Yl3B6Fx8eRkORmTs1T0Epj0UOfbkYYhmI71nR631PiKMNaNGdGtiXVq8mXMJzX3YA0RRFfu1DrsmJ%2FJkpcH0GpYGCH%2FeDbKh%2B3Kf6YlVZJfpf35L9QRUJs23j81EL8g7wSG0GQkr8m&X-Amz-Signature=28c5f280ca86794db1fb4758a72d421c45a0a7d6b68c43abeddf7f1af2415320&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMAUHX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIELlxyJMOUJquFU3h0SNerbNWnGRJ8l%2F%2BTpKgJVYCUB3AiEAiUM%2BAxu%2B5wt2Vymap0RVfebcpauGVYw%2Fl%2FVKBA20y%2BMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIDwpn6MTdqBEFdEIyrcA%2BNYxem1LvmfBK%2FttAvSpYAGJDsG4dRQkzy3nU7w22lCnSExigrTLVHCQI%2BtZi4J%2B85jDrF8ODE1wJXG4Vg1F3A8LAnbWBzXEWcgDBIWXNeEfG%2BAwoI1IJ0u17THSUSnYpBCGEWWr5VTtw8TGR92lDvxBUA7gsuWIGdFClvk2baU2%2FydHsJHFZtHXUH37qjMBgiP42vDzoPk7RVo1ynZIIQe6aQXs1cNHzYNkxtrCaQwuDvFeyf4Ce0Qt5u4skat9tANe9h%2Fwevw9h67stftJs%2BBlz0kS5KZtrHJFvtJXhmZgomy78k1hbiqzHuUxezkxu0QEaKt4tKg7AcLbnprEjXU%2FAaRJC%2BGRb7q%2BC6M5jmrcSNy7pgS3ywSp8GTPS5P41ZOksoZOG44zKeheN99K8c3Q2gdutSPsXJfWEX7peBo6Kl%2BnBMR3T2%2BADgC2nivcVWj91m9q4O%2FsXWpSii2DBTssrdbXSB5yU393nUKeEZ1Q%2Fd4XmmTIHSGu774rseC1P3OXCnLS3pXOkwK6Ym90vdv91tKUc1Z77%2BjV0Bx%2BhzsueddjzVuTMwvVnWInPNXzPVgGGsTKoUBpWoh1sglzO8QuUnmqxCJJPhB79YpNhF50ZYjwQGczSXT1JWVMIidvr0GOqUBNNDGP0iiZ4pVGFwiNA6EX8jptsJXdta2AOSjh7upz8lMh9Qg1t1K8uHuNKejkL6tDCfy5BP9RSyjYCLmu5Yl3B6Fx8eRkORmTs1T0Epj0UOfbkYYhmI71nR631PiKMNaNGdGtiXVq8mXMJzX3YA0RRFfu1DrsmJ%2FJkpcH0GpYGCH%2FeDbKh%2B3Kf6YlVZJfpf35L9QRUJs23j81EL8g7wSG0GQkr8m&X-Amz-Signature=7fb9ef3df1bfff6c6d9f4e817abec49d89efc4976944822d4809ca8ad92db296&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DMAUHX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIELlxyJMOUJquFU3h0SNerbNWnGRJ8l%2F%2BTpKgJVYCUB3AiEAiUM%2BAxu%2B5wt2Vymap0RVfebcpauGVYw%2Fl%2FVKBA20y%2BMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIDwpn6MTdqBEFdEIyrcA%2BNYxem1LvmfBK%2FttAvSpYAGJDsG4dRQkzy3nU7w22lCnSExigrTLVHCQI%2BtZi4J%2B85jDrF8ODE1wJXG4Vg1F3A8LAnbWBzXEWcgDBIWXNeEfG%2BAwoI1IJ0u17THSUSnYpBCGEWWr5VTtw8TGR92lDvxBUA7gsuWIGdFClvk2baU2%2FydHsJHFZtHXUH37qjMBgiP42vDzoPk7RVo1ynZIIQe6aQXs1cNHzYNkxtrCaQwuDvFeyf4Ce0Qt5u4skat9tANe9h%2Fwevw9h67stftJs%2BBlz0kS5KZtrHJFvtJXhmZgomy78k1hbiqzHuUxezkxu0QEaKt4tKg7AcLbnprEjXU%2FAaRJC%2BGRb7q%2BC6M5jmrcSNy7pgS3ywSp8GTPS5P41ZOksoZOG44zKeheN99K8c3Q2gdutSPsXJfWEX7peBo6Kl%2BnBMR3T2%2BADgC2nivcVWj91m9q4O%2FsXWpSii2DBTssrdbXSB5yU393nUKeEZ1Q%2Fd4XmmTIHSGu774rseC1P3OXCnLS3pXOkwK6Ym90vdv91tKUc1Z77%2BjV0Bx%2BhzsueddjzVuTMwvVnWInPNXzPVgGGsTKoUBpWoh1sglzO8QuUnmqxCJJPhB79YpNhF50ZYjwQGczSXT1JWVMIidvr0GOqUBNNDGP0iiZ4pVGFwiNA6EX8jptsJXdta2AOSjh7upz8lMh9Qg1t1K8uHuNKejkL6tDCfy5BP9RSyjYCLmu5Yl3B6Fx8eRkORmTs1T0Epj0UOfbkYYhmI71nR631PiKMNaNGdGtiXVq8mXMJzX3YA0RRFfu1DrsmJ%2FJkpcH0GpYGCH%2FeDbKh%2B3Kf6YlVZJfpf35L9QRUJs23j81EL8g7wSG0GQkr8m&X-Amz-Signature=2fa472842f2f97e5b61d22c6266ed185f19ce0432aca1c70a79d441d5d274637&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
