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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC5L2S%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCJ7OVGVC0Il96h3O3V%2FUMX4U%2BJhI2z1ziW7SoSgQa%2FBgIgL2hjbIQUnrTagDCPMkq02DE7goUEQB33CwMwRDTH%2BAAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOKba1uzjBwgbgazECrcA%2Buz6Sqi3g6UcOLoDnW8KiYPnT0aRnFUv2JDx4pILwJZ%2B1hvgKtD4zgOU0i3wS8uBLpwdLDQF39IHtFWG0LelrDPRX7aFbeVeaoqvryHjH%2Bl6Mn%2BxgmceicNpjcMgatg0g7c11MaqB%2FmE1MB8EK0JCVOZRyYRDjJ3Lql52%2FzSdidjwnh6JQ4FIMYx6so2wR84kX4%2FZU3wsv0a3wVkJkku%2F1wrQfb5DoFJUIQXwBklwpz7QNtnDCp%2F%2BcPlqXvsh%2FdTlHRnuQlw89Avr9dEHzGs6ngBbneBDrvc9dyJDyqzwJ3E0mmqXVf0MITG0cc1FX8xaLYtcf%2FJwMyLOaTBYws4%2B%2BbRtZ38SKjpPLGBsr1M23c%2FC%2FBehLrrzI94AqJ9mvoxYogLRYIJjMgSkKgMznNqAWnPXgN1WTQkt6%2Fv81HGyzCuQHYG7UmttysXIgyVqlPoevu2vnQ%2FxsV7Mle5hy%2FzayVJJhHA98H6GjgR53hkJ7IXZPmZZfTcAf9cxjVtQPedajCwK4%2BhGqMNkojDOgRqbY%2FjqEnhxcs8Wuxyyf8hx9Evqkc3%2Bb%2Fi5OLV%2BQ6wTvwyP4sEMDB24%2Fi3MuVz9PKoJ%2BYlVyoMlPSgLEFW7Zc5TpLnPn%2F3hIeQL28GAUzMJycn8MGOqUBJAQpDoYaR1A01vLmnjcDRyVObFL43KTgdEd1sq%2F7SHwbCEnq65gLnNBl2P5v6LGU8sSXsMYy7jxw3uAkjRZC9w7advIVqNa1XU3OQZWcQHIZgKEkF0U%2F%2BHnoEeuKyGkqniFMs9kx271nVqsJ0ANyUsVytOwCS9EEkZUkuMrdnLKNInJuLV%2FXnfoyEQPcDjqdXG6iICIaT7zTWHpZi1cnTV2IbYK1&X-Amz-Signature=ca31822c832733d83070ff8ec2507d815e208bf04087ddfc994e2521cf193197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC5L2S%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCJ7OVGVC0Il96h3O3V%2FUMX4U%2BJhI2z1ziW7SoSgQa%2FBgIgL2hjbIQUnrTagDCPMkq02DE7goUEQB33CwMwRDTH%2BAAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOKba1uzjBwgbgazECrcA%2Buz6Sqi3g6UcOLoDnW8KiYPnT0aRnFUv2JDx4pILwJZ%2B1hvgKtD4zgOU0i3wS8uBLpwdLDQF39IHtFWG0LelrDPRX7aFbeVeaoqvryHjH%2Bl6Mn%2BxgmceicNpjcMgatg0g7c11MaqB%2FmE1MB8EK0JCVOZRyYRDjJ3Lql52%2FzSdidjwnh6JQ4FIMYx6so2wR84kX4%2FZU3wsv0a3wVkJkku%2F1wrQfb5DoFJUIQXwBklwpz7QNtnDCp%2F%2BcPlqXvsh%2FdTlHRnuQlw89Avr9dEHzGs6ngBbneBDrvc9dyJDyqzwJ3E0mmqXVf0MITG0cc1FX8xaLYtcf%2FJwMyLOaTBYws4%2B%2BbRtZ38SKjpPLGBsr1M23c%2FC%2FBehLrrzI94AqJ9mvoxYogLRYIJjMgSkKgMznNqAWnPXgN1WTQkt6%2Fv81HGyzCuQHYG7UmttysXIgyVqlPoevu2vnQ%2FxsV7Mle5hy%2FzayVJJhHA98H6GjgR53hkJ7IXZPmZZfTcAf9cxjVtQPedajCwK4%2BhGqMNkojDOgRqbY%2FjqEnhxcs8Wuxyyf8hx9Evqkc3%2Bb%2Fi5OLV%2BQ6wTvwyP4sEMDB24%2Fi3MuVz9PKoJ%2BYlVyoMlPSgLEFW7Zc5TpLnPn%2F3hIeQL28GAUzMJycn8MGOqUBJAQpDoYaR1A01vLmnjcDRyVObFL43KTgdEd1sq%2F7SHwbCEnq65gLnNBl2P5v6LGU8sSXsMYy7jxw3uAkjRZC9w7advIVqNa1XU3OQZWcQHIZgKEkF0U%2F%2BHnoEeuKyGkqniFMs9kx271nVqsJ0ANyUsVytOwCS9EEkZUkuMrdnLKNInJuLV%2FXnfoyEQPcDjqdXG6iICIaT7zTWHpZi1cnTV2IbYK1&X-Amz-Signature=af45f75cd2655eaf88888e05b151800323a49343c340daabdf01e126e319b7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC5L2S%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCJ7OVGVC0Il96h3O3V%2FUMX4U%2BJhI2z1ziW7SoSgQa%2FBgIgL2hjbIQUnrTagDCPMkq02DE7goUEQB33CwMwRDTH%2BAAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOKba1uzjBwgbgazECrcA%2Buz6Sqi3g6UcOLoDnW8KiYPnT0aRnFUv2JDx4pILwJZ%2B1hvgKtD4zgOU0i3wS8uBLpwdLDQF39IHtFWG0LelrDPRX7aFbeVeaoqvryHjH%2Bl6Mn%2BxgmceicNpjcMgatg0g7c11MaqB%2FmE1MB8EK0JCVOZRyYRDjJ3Lql52%2FzSdidjwnh6JQ4FIMYx6so2wR84kX4%2FZU3wsv0a3wVkJkku%2F1wrQfb5DoFJUIQXwBklwpz7QNtnDCp%2F%2BcPlqXvsh%2FdTlHRnuQlw89Avr9dEHzGs6ngBbneBDrvc9dyJDyqzwJ3E0mmqXVf0MITG0cc1FX8xaLYtcf%2FJwMyLOaTBYws4%2B%2BbRtZ38SKjpPLGBsr1M23c%2FC%2FBehLrrzI94AqJ9mvoxYogLRYIJjMgSkKgMznNqAWnPXgN1WTQkt6%2Fv81HGyzCuQHYG7UmttysXIgyVqlPoevu2vnQ%2FxsV7Mle5hy%2FzayVJJhHA98H6GjgR53hkJ7IXZPmZZfTcAf9cxjVtQPedajCwK4%2BhGqMNkojDOgRqbY%2FjqEnhxcs8Wuxyyf8hx9Evqkc3%2Bb%2Fi5OLV%2BQ6wTvwyP4sEMDB24%2Fi3MuVz9PKoJ%2BYlVyoMlPSgLEFW7Zc5TpLnPn%2F3hIeQL28GAUzMJycn8MGOqUBJAQpDoYaR1A01vLmnjcDRyVObFL43KTgdEd1sq%2F7SHwbCEnq65gLnNBl2P5v6LGU8sSXsMYy7jxw3uAkjRZC9w7advIVqNa1XU3OQZWcQHIZgKEkF0U%2F%2BHnoEeuKyGkqniFMs9kx271nVqsJ0ANyUsVytOwCS9EEkZUkuMrdnLKNInJuLV%2FXnfoyEQPcDjqdXG6iICIaT7zTWHpZi1cnTV2IbYK1&X-Amz-Signature=493101437fffc567e67112936cb3fc40567ca6811ecb846b3efdc7b1852f3d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
