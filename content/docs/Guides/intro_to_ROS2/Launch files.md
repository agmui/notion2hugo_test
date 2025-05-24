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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UPDZJO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGehERkxTvzVwFDk%2F5EKJczhLsCjDKXi8uC%2Btgbma7UVAiEAprpn8pNwO%2Bp0dB2ib1pxF8HyfmjQjDkQZy0xoLL0UiYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLHAlMJxuc7Ye1tzJyrcA8tZyrNUaGVs1B%2Btzg%2BUR4BzdhIAkjdHHQTHp656v6YfYxt8WxdMVhvQoA9ah5SqcOpO83uWOQRamAmfZScG1%2B5enb7Uf5ML1jdpgrRmZSt1f%2Bg5WxzsT1owOtsWx58cPp%2FwV4zi8q5T4ootEoqU9c3h4c8lsmKXSW33I%2F5z%2FwZA3IVJ4MO5bWtFdK8fkLPjGy51UiJgndQlFe%2BKT8aak0TV7OdA%2FnfDV1r9RIhM28iy6qDoL8mMGx65iX3Pi8vCWGkBAzyTanWnsFiwgTuWqt5QUXZCyxAt1gOR%2BaDcGJC33ppLT6cNptDW6%2FZJjmm7q%2BrY2qOfBgnOPUcUMEuMmRp5LR3pk%2FpsqkuG8b%2BzLoJFUEAePsywMzKPElQV330pzCbLjeUqcaPgwlzFCVUTRkWjvH5QikkN3wgCcF5ZqnVJLeNETCP%2BJB%2Fm20Vp4BjqlFNWl%2FnQKkMz2K6QjRjdt2Uk7UfGPcreujbURlWZQEX9Q%2BQy2%2FRNcZ9qriy9Q16hty3Ia5Q66ARTikt0XX3cKxpwO9Fs9HTg38A3A5cYHG%2Fp9tjmBAobhEBMlwcT84PetegEMV6Q2BQyojdxGHblwDhQ4CMdfPMMib%2FPU8HGQHpKZnSUPSOhx17dUCM3MIXNx8EGOqUBXN7LromitKKfsApmO3HEEfolCLjgkC9qh4lQwPdmbIpw6%2BXgVocNXEN3L9iR702Q1h269Gn9HE5qmokhpCgJNa%2BH70M%2FFWZx7pZJcEfSSAy7on4tlhber4nuYvf9JPSzHb7vBZoxKpK3EckZufvT86kO6w1L1RjRiCkVfwuNTQPItyiERoJfG2ilUsao6uU775FKJPbpN6orGyjzktSw52FkCary&X-Amz-Signature=f1f71130c4c6ee12fa67c1600294c2b5c3d2312c7ec7ecef455fa68f26a002bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UPDZJO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGehERkxTvzVwFDk%2F5EKJczhLsCjDKXi8uC%2Btgbma7UVAiEAprpn8pNwO%2Bp0dB2ib1pxF8HyfmjQjDkQZy0xoLL0UiYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLHAlMJxuc7Ye1tzJyrcA8tZyrNUaGVs1B%2Btzg%2BUR4BzdhIAkjdHHQTHp656v6YfYxt8WxdMVhvQoA9ah5SqcOpO83uWOQRamAmfZScG1%2B5enb7Uf5ML1jdpgrRmZSt1f%2Bg5WxzsT1owOtsWx58cPp%2FwV4zi8q5T4ootEoqU9c3h4c8lsmKXSW33I%2F5z%2FwZA3IVJ4MO5bWtFdK8fkLPjGy51UiJgndQlFe%2BKT8aak0TV7OdA%2FnfDV1r9RIhM28iy6qDoL8mMGx65iX3Pi8vCWGkBAzyTanWnsFiwgTuWqt5QUXZCyxAt1gOR%2BaDcGJC33ppLT6cNptDW6%2FZJjmm7q%2BrY2qOfBgnOPUcUMEuMmRp5LR3pk%2FpsqkuG8b%2BzLoJFUEAePsywMzKPElQV330pzCbLjeUqcaPgwlzFCVUTRkWjvH5QikkN3wgCcF5ZqnVJLeNETCP%2BJB%2Fm20Vp4BjqlFNWl%2FnQKkMz2K6QjRjdt2Uk7UfGPcreujbURlWZQEX9Q%2BQy2%2FRNcZ9qriy9Q16hty3Ia5Q66ARTikt0XX3cKxpwO9Fs9HTg38A3A5cYHG%2Fp9tjmBAobhEBMlwcT84PetegEMV6Q2BQyojdxGHblwDhQ4CMdfPMMib%2FPU8HGQHpKZnSUPSOhx17dUCM3MIXNx8EGOqUBXN7LromitKKfsApmO3HEEfolCLjgkC9qh4lQwPdmbIpw6%2BXgVocNXEN3L9iR702Q1h269Gn9HE5qmokhpCgJNa%2BH70M%2FFWZx7pZJcEfSSAy7on4tlhber4nuYvf9JPSzHb7vBZoxKpK3EckZufvT86kO6w1L1RjRiCkVfwuNTQPItyiERoJfG2ilUsao6uU775FKJPbpN6orGyjzktSw52FkCary&X-Amz-Signature=0a7e01862676b658cc771cf0fd44374769399e5664bc7dc46fb2a33db8a6dc4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UPDZJO%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGehERkxTvzVwFDk%2F5EKJczhLsCjDKXi8uC%2Btgbma7UVAiEAprpn8pNwO%2Bp0dB2ib1pxF8HyfmjQjDkQZy0xoLL0UiYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLHAlMJxuc7Ye1tzJyrcA8tZyrNUaGVs1B%2Btzg%2BUR4BzdhIAkjdHHQTHp656v6YfYxt8WxdMVhvQoA9ah5SqcOpO83uWOQRamAmfZScG1%2B5enb7Uf5ML1jdpgrRmZSt1f%2Bg5WxzsT1owOtsWx58cPp%2FwV4zi8q5T4ootEoqU9c3h4c8lsmKXSW33I%2F5z%2FwZA3IVJ4MO5bWtFdK8fkLPjGy51UiJgndQlFe%2BKT8aak0TV7OdA%2FnfDV1r9RIhM28iy6qDoL8mMGx65iX3Pi8vCWGkBAzyTanWnsFiwgTuWqt5QUXZCyxAt1gOR%2BaDcGJC33ppLT6cNptDW6%2FZJjmm7q%2BrY2qOfBgnOPUcUMEuMmRp5LR3pk%2FpsqkuG8b%2BzLoJFUEAePsywMzKPElQV330pzCbLjeUqcaPgwlzFCVUTRkWjvH5QikkN3wgCcF5ZqnVJLeNETCP%2BJB%2Fm20Vp4BjqlFNWl%2FnQKkMz2K6QjRjdt2Uk7UfGPcreujbURlWZQEX9Q%2BQy2%2FRNcZ9qriy9Q16hty3Ia5Q66ARTikt0XX3cKxpwO9Fs9HTg38A3A5cYHG%2Fp9tjmBAobhEBMlwcT84PetegEMV6Q2BQyojdxGHblwDhQ4CMdfPMMib%2FPU8HGQHpKZnSUPSOhx17dUCM3MIXNx8EGOqUBXN7LromitKKfsApmO3HEEfolCLjgkC9qh4lQwPdmbIpw6%2BXgVocNXEN3L9iR702Q1h269Gn9HE5qmokhpCgJNa%2BH70M%2FFWZx7pZJcEfSSAy7on4tlhber4nuYvf9JPSzHb7vBZoxKpK3EckZufvT86kO6w1L1RjRiCkVfwuNTQPItyiERoJfG2ilUsao6uU775FKJPbpN6orGyjzktSw52FkCary&X-Amz-Signature=9b065ea712a3457ab5a778f2d46dddc09a1631f8343c8d13b3b46a9d87cd9452&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
