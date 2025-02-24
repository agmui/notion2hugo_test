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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK6J43ZX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz028iuuQcIsEJaXjKcsGy%2FGKqrPb%2FhVIgVOKtd4IBhAiACDK6QeIlp%2FPmQQKk9ANsyOrWodPqr2RdMawsqWu%2Fr8ir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmDRR47wj0zmebG5AKtwDihlmeABTcY86mrnGu2PKfJcK536glC6EEmzjDok6NN1wLRbqEEgn72%2FB9ShbLePNHv6WbM3yo15Y2eHPyQbAH8KZksTODBaVwOQvfKGGXwGo8VBJNTo2rdEcdm95rwvCPfTVhz4LIkVQw8O5DUp%2BEfgBO3MztSpOhXxT0bACM0RTp0A8Bk5OxyNcshmXOtv80PLx30CoHnAwKUgD8OpH41P5jiyxz37PFrG1NXJ9AHQ%2FHBqcPrWyc1RuXXiMXHgP%2BiP7VntRix8A%2BOsAnUrh%2BpcjrPz5J7mm%2FmGeEjbdZetSh%2Fu4WEQZjtPkTOorPrdWMGGvpP0U9QG5jLUSO6h3GloqRMYSm6EJJbyOmuSdECzpNC6jsJZfpoTjWLWFA7wY0eNDYmSAzolW06p2cqJ0PkG%2FM6X1qy7tzk49BTLSh45oTk4OxJGcricH7MiIx6mZ%2BnTunKF0mHAQ2C2WD8K%2Bn%2FZIEIWW7MEHX%2B7UKZwmPK6uVtN5GkGF%2FhfYfDI1WiEv%2Fbj6ImryYGSIK58jNRrarV6ZeavshN%2Fi4O%2Ffn%2FBnpFI4kjoBNGAyj%2FiTn38LpG6gMFUe27aEv1a9J52zL1CEXTc2J8JwnGXXVjQ9i2MQ5WVOM1LBrbmofOlOcdEwldbzvQY6pgEPKqFgwx%2FN0xKhlmOQKnGBk2yB6JPNWW1RGMh3aYKwEeaxiaQZ4zIknm%2B6cY9o9lLtDYczgF9iHatyTprbOdf2bHLyMbIbKfVsckagXDj%2FU7VJuEubZgufF691GLBm33OiKOUxv28lhScW%2FT5BZ%2FBoG9q3MXVDN7LWQLLYk1XfPRN8pn7SSNCpmzCySiA4RQ%2BPMGKXIlDiTiy%2BQc39m7P9ExDt6sgk&X-Amz-Signature=74eff64605ee632408d95890f291a5e6b4b42131d8cef4b441f805f4ea896dde&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK6J43ZX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz028iuuQcIsEJaXjKcsGy%2FGKqrPb%2FhVIgVOKtd4IBhAiACDK6QeIlp%2FPmQQKk9ANsyOrWodPqr2RdMawsqWu%2Fr8ir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmDRR47wj0zmebG5AKtwDihlmeABTcY86mrnGu2PKfJcK536glC6EEmzjDok6NN1wLRbqEEgn72%2FB9ShbLePNHv6WbM3yo15Y2eHPyQbAH8KZksTODBaVwOQvfKGGXwGo8VBJNTo2rdEcdm95rwvCPfTVhz4LIkVQw8O5DUp%2BEfgBO3MztSpOhXxT0bACM0RTp0A8Bk5OxyNcshmXOtv80PLx30CoHnAwKUgD8OpH41P5jiyxz37PFrG1NXJ9AHQ%2FHBqcPrWyc1RuXXiMXHgP%2BiP7VntRix8A%2BOsAnUrh%2BpcjrPz5J7mm%2FmGeEjbdZetSh%2Fu4WEQZjtPkTOorPrdWMGGvpP0U9QG5jLUSO6h3GloqRMYSm6EJJbyOmuSdECzpNC6jsJZfpoTjWLWFA7wY0eNDYmSAzolW06p2cqJ0PkG%2FM6X1qy7tzk49BTLSh45oTk4OxJGcricH7MiIx6mZ%2BnTunKF0mHAQ2C2WD8K%2Bn%2FZIEIWW7MEHX%2B7UKZwmPK6uVtN5GkGF%2FhfYfDI1WiEv%2Fbj6ImryYGSIK58jNRrarV6ZeavshN%2Fi4O%2Ffn%2FBnpFI4kjoBNGAyj%2FiTn38LpG6gMFUe27aEv1a9J52zL1CEXTc2J8JwnGXXVjQ9i2MQ5WVOM1LBrbmofOlOcdEwldbzvQY6pgEPKqFgwx%2FN0xKhlmOQKnGBk2yB6JPNWW1RGMh3aYKwEeaxiaQZ4zIknm%2B6cY9o9lLtDYczgF9iHatyTprbOdf2bHLyMbIbKfVsckagXDj%2FU7VJuEubZgufF691GLBm33OiKOUxv28lhScW%2FT5BZ%2FBoG9q3MXVDN7LWQLLYk1XfPRN8pn7SSNCpmzCySiA4RQ%2BPMGKXIlDiTiy%2BQc39m7P9ExDt6sgk&X-Amz-Signature=02a6e4624e3bfe7542e88416ec7876e7276cd356a65e7a3bedb642f1f282a1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK6J43ZX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz028iuuQcIsEJaXjKcsGy%2FGKqrPb%2FhVIgVOKtd4IBhAiACDK6QeIlp%2FPmQQKk9ANsyOrWodPqr2RdMawsqWu%2Fr8ir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmDRR47wj0zmebG5AKtwDihlmeABTcY86mrnGu2PKfJcK536glC6EEmzjDok6NN1wLRbqEEgn72%2FB9ShbLePNHv6WbM3yo15Y2eHPyQbAH8KZksTODBaVwOQvfKGGXwGo8VBJNTo2rdEcdm95rwvCPfTVhz4LIkVQw8O5DUp%2BEfgBO3MztSpOhXxT0bACM0RTp0A8Bk5OxyNcshmXOtv80PLx30CoHnAwKUgD8OpH41P5jiyxz37PFrG1NXJ9AHQ%2FHBqcPrWyc1RuXXiMXHgP%2BiP7VntRix8A%2BOsAnUrh%2BpcjrPz5J7mm%2FmGeEjbdZetSh%2Fu4WEQZjtPkTOorPrdWMGGvpP0U9QG5jLUSO6h3GloqRMYSm6EJJbyOmuSdECzpNC6jsJZfpoTjWLWFA7wY0eNDYmSAzolW06p2cqJ0PkG%2FM6X1qy7tzk49BTLSh45oTk4OxJGcricH7MiIx6mZ%2BnTunKF0mHAQ2C2WD8K%2Bn%2FZIEIWW7MEHX%2B7UKZwmPK6uVtN5GkGF%2FhfYfDI1WiEv%2Fbj6ImryYGSIK58jNRrarV6ZeavshN%2Fi4O%2Ffn%2FBnpFI4kjoBNGAyj%2FiTn38LpG6gMFUe27aEv1a9J52zL1CEXTc2J8JwnGXXVjQ9i2MQ5WVOM1LBrbmofOlOcdEwldbzvQY6pgEPKqFgwx%2FN0xKhlmOQKnGBk2yB6JPNWW1RGMh3aYKwEeaxiaQZ4zIknm%2B6cY9o9lLtDYczgF9iHatyTprbOdf2bHLyMbIbKfVsckagXDj%2FU7VJuEubZgufF691GLBm33OiKOUxv28lhScW%2FT5BZ%2FBoG9q3MXVDN7LWQLLYk1XfPRN8pn7SSNCpmzCySiA4RQ%2BPMGKXIlDiTiy%2BQc39m7P9ExDt6sgk&X-Amz-Signature=f1fb6d00b35b924c09e28cd09a72ef511fa8611717a67a2cc5f3d5038c3d51bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
