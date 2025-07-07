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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26OJ3V6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHU6c0bNkq3%2FVMU28BOiKgI8QVRqlzd2NKFr8vkvE0IzAiEAl7c6ZyeC3KXAcDVKipdLczLb9sYOrJm97wu4z%2FII%2BqYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGjBxwWjy6H4gk%2BhRCrcA7aakglHC5CFsaoQdYFp%2Br3dJUnYa77IiezPrYVqpbVFW13MI6T4oMKWciLHaZkVmFB5XAPYh%2FjR3KTr9CHwkz4CsvoxClttnbT20SwzDi6Rt68k4fxS7cyj4rj7S8EG39ASyaWOhLCjXDbigyZOKU21TUK86cHcN8G2b4%2FDAF92zkr6hrYhZY%2B9TZAttFNXPdZ1mpFmtCruGBRWWrNO90Kms%2FP1iCCe2RuCO62dw29fDEKeMkeiP0hRHfWuUaIe%2FIqlhKMv5mqL6nTn0pOyHCuHGY1l2BOril1QeVMEm69E4pOx722fUysjq2Sm9KNptFRiO8RdtBN2yPsi4i9l7K4aiSM3vkQp4M6Ee%2FYJ1bI69UbwVYOibpbPRU9pwUkVP%2FJQmM7y150GLx826McsMvsV8Dlive2%2BQGu588iUAdGMdMSFjeiPcoSaekrQm6wS0kHLqPFUivZqcy5DWN2mZ1ud2RFb4qqEQqLagSsdMvsob72o8%2FNcrWBWrfJ0sO4SMLoNcN68TlM7MSI3RRZZRm%2BKGV1WuR%2FxDGXkFxVaipQdDB3XBq6ZTC%2F6%2FMyea6ygEaC1Dkmc93hxEjHu5cU5uc%2B4c%2FS6vQOGuS2aoK2czo29v7etQOx861OmMts7MNO5r8MGOqUByHtS5bCFtC6wS8Ddshf6Q3R29awyf4%2BcsVgjyphPyEegO74YbzI8Pbvu5WXUhOHXkJwqgoxNht7QINDdX2LLbSqy5ral8d4MQB555eDHceWuYqrnbi98UlbjfELdk0pZTvyJzlroSdXw4g%2BiHwWeAqgqTryxF47nutpTqWAmWhU2ut4YsjTR4ROako%2FxP%2Bgyb7nVSKW3wnr%2BuizBB7mRcU%2Ffn0eF&X-Amz-Signature=325cda1793e96fdf16c9630e316950fc3b8f90ed8fdca6b5fd129d9d709b6205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26OJ3V6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHU6c0bNkq3%2FVMU28BOiKgI8QVRqlzd2NKFr8vkvE0IzAiEAl7c6ZyeC3KXAcDVKipdLczLb9sYOrJm97wu4z%2FII%2BqYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGjBxwWjy6H4gk%2BhRCrcA7aakglHC5CFsaoQdYFp%2Br3dJUnYa77IiezPrYVqpbVFW13MI6T4oMKWciLHaZkVmFB5XAPYh%2FjR3KTr9CHwkz4CsvoxClttnbT20SwzDi6Rt68k4fxS7cyj4rj7S8EG39ASyaWOhLCjXDbigyZOKU21TUK86cHcN8G2b4%2FDAF92zkr6hrYhZY%2B9TZAttFNXPdZ1mpFmtCruGBRWWrNO90Kms%2FP1iCCe2RuCO62dw29fDEKeMkeiP0hRHfWuUaIe%2FIqlhKMv5mqL6nTn0pOyHCuHGY1l2BOril1QeVMEm69E4pOx722fUysjq2Sm9KNptFRiO8RdtBN2yPsi4i9l7K4aiSM3vkQp4M6Ee%2FYJ1bI69UbwVYOibpbPRU9pwUkVP%2FJQmM7y150GLx826McsMvsV8Dlive2%2BQGu588iUAdGMdMSFjeiPcoSaekrQm6wS0kHLqPFUivZqcy5DWN2mZ1ud2RFb4qqEQqLagSsdMvsob72o8%2FNcrWBWrfJ0sO4SMLoNcN68TlM7MSI3RRZZRm%2BKGV1WuR%2FxDGXkFxVaipQdDB3XBq6ZTC%2F6%2FMyea6ygEaC1Dkmc93hxEjHu5cU5uc%2B4c%2FS6vQOGuS2aoK2czo29v7etQOx861OmMts7MNO5r8MGOqUByHtS5bCFtC6wS8Ddshf6Q3R29awyf4%2BcsVgjyphPyEegO74YbzI8Pbvu5WXUhOHXkJwqgoxNht7QINDdX2LLbSqy5ral8d4MQB555eDHceWuYqrnbi98UlbjfELdk0pZTvyJzlroSdXw4g%2BiHwWeAqgqTryxF47nutpTqWAmWhU2ut4YsjTR4ROako%2FxP%2Bgyb7nVSKW3wnr%2BuizBB7mRcU%2Ffn0eF&X-Amz-Signature=4d4c2a27fbaa3c2a1b8f195f78f03076e5a1bf5957ad54b92b4917588241668a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26OJ3V6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHU6c0bNkq3%2FVMU28BOiKgI8QVRqlzd2NKFr8vkvE0IzAiEAl7c6ZyeC3KXAcDVKipdLczLb9sYOrJm97wu4z%2FII%2BqYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGjBxwWjy6H4gk%2BhRCrcA7aakglHC5CFsaoQdYFp%2Br3dJUnYa77IiezPrYVqpbVFW13MI6T4oMKWciLHaZkVmFB5XAPYh%2FjR3KTr9CHwkz4CsvoxClttnbT20SwzDi6Rt68k4fxS7cyj4rj7S8EG39ASyaWOhLCjXDbigyZOKU21TUK86cHcN8G2b4%2FDAF92zkr6hrYhZY%2B9TZAttFNXPdZ1mpFmtCruGBRWWrNO90Kms%2FP1iCCe2RuCO62dw29fDEKeMkeiP0hRHfWuUaIe%2FIqlhKMv5mqL6nTn0pOyHCuHGY1l2BOril1QeVMEm69E4pOx722fUysjq2Sm9KNptFRiO8RdtBN2yPsi4i9l7K4aiSM3vkQp4M6Ee%2FYJ1bI69UbwVYOibpbPRU9pwUkVP%2FJQmM7y150GLx826McsMvsV8Dlive2%2BQGu588iUAdGMdMSFjeiPcoSaekrQm6wS0kHLqPFUivZqcy5DWN2mZ1ud2RFb4qqEQqLagSsdMvsob72o8%2FNcrWBWrfJ0sO4SMLoNcN68TlM7MSI3RRZZRm%2BKGV1WuR%2FxDGXkFxVaipQdDB3XBq6ZTC%2F6%2FMyea6ygEaC1Dkmc93hxEjHu5cU5uc%2B4c%2FS6vQOGuS2aoK2czo29v7etQOx861OmMts7MNO5r8MGOqUByHtS5bCFtC6wS8Ddshf6Q3R29awyf4%2BcsVgjyphPyEegO74YbzI8Pbvu5WXUhOHXkJwqgoxNht7QINDdX2LLbSqy5ral8d4MQB555eDHceWuYqrnbi98UlbjfELdk0pZTvyJzlroSdXw4g%2BiHwWeAqgqTryxF47nutpTqWAmWhU2ut4YsjTR4ROako%2FxP%2Bgyb7nVSKW3wnr%2BuizBB7mRcU%2Ffn0eF&X-Amz-Signature=ca377e60cacf76e48d2c0d71de2ee6114ef8652ac2f18dea5e244eee11e3fc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
