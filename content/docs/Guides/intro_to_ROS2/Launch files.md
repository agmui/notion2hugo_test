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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDM3S57%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEv8bja0TqTk%2FEewGo6FtPzW0F%2FegsmZcGBaR8MAC4AUAiA%2BU%2BD0xDAZYSnpOLjAT0Ce9yG3OV4%2Bw0WpqbBSJ1w2jCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMduMom3qeUDrgnzN%2BKtwDChwhnXaMzz5jCTJk7KDZURjdCnGJEtUDOhswh0InhRE8zDko0nA0znm7abcn0R4h65F0LaN2bPgcnUqUlAoxTJSVm5zmoM9ZMapaC%2BNS39QnRkHRPMny%2FV7B0dVYEysPmWjulxerGS4dazgWCS3H02dEK8O6EY5AW%2FCZ3Tu8jjGwdkCXPejpNQbaeFoqL%2BOw56pbKxdz4NeGPDO4VgimhupGLY5DFxVSPJl0B8Un9NUEOlrOUXKT54ODZs3e28%2FddP06h6q5%2FspDU2UM4LtdF4go5fwgEHiv8u8wB3jZQrS3KmhzJ04KTTajnJg9NU8frHDl5jeaoNvomptP4h%2Fn3BdPTiaSlGd69FK8pwpbfOK1f9U0GvlRkU7DUmGw7uCcXTUYlscTfERCxLkY9KQI1lknnEphzkKS9Qv%2Fkc3mQZiKBuOIQrgSe%2BcLO1RK53I%2FC8pWLrdtvkY8%2Fos6Tvg5zL3XYXArXughNPeTg2sHekt1MNnukLlfcuG6tx33j5rVAgWSbZOJZFRBxzp06xZ5dRQ%2BAPiFtBy%2B0uHM5PxB4Lzq6D2WNl3iXHIoprpzJhsVNRmDiaPkoEXMT3YqjyS9xShX1CiybqgrAG38LLfck0Pqer7klBE6DuQpKUYw%2F%2BGdwwY6pgFzFrM8%2FweWRT%2BfeXW5I0G2Rdl56RPSg%2BRomXyI3kJJ3MlPVSABVFmZ2KV%2FvMKYswhKFOvPI8ggT3m1fQDhz92X6g%2BHe%2FPBgA5%2BkwProcr5SltCXolpvGlHDV61fqrEIWNc4fkgly2Vy%2FmUBkC6N%2Ba%2FXOzcJLeNN9MoHO5IehiLjaBgCiVs3nbrZ3HiVAVQjdktTanMec3qQxkC%2BtF%2FwsgV0RT0sl52&X-Amz-Signature=92f59bdcd81cbaab143424020c577449e92b497ea02476c8fd795ed09b764fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDM3S57%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEv8bja0TqTk%2FEewGo6FtPzW0F%2FegsmZcGBaR8MAC4AUAiA%2BU%2BD0xDAZYSnpOLjAT0Ce9yG3OV4%2Bw0WpqbBSJ1w2jCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMduMom3qeUDrgnzN%2BKtwDChwhnXaMzz5jCTJk7KDZURjdCnGJEtUDOhswh0InhRE8zDko0nA0znm7abcn0R4h65F0LaN2bPgcnUqUlAoxTJSVm5zmoM9ZMapaC%2BNS39QnRkHRPMny%2FV7B0dVYEysPmWjulxerGS4dazgWCS3H02dEK8O6EY5AW%2FCZ3Tu8jjGwdkCXPejpNQbaeFoqL%2BOw56pbKxdz4NeGPDO4VgimhupGLY5DFxVSPJl0B8Un9NUEOlrOUXKT54ODZs3e28%2FddP06h6q5%2FspDU2UM4LtdF4go5fwgEHiv8u8wB3jZQrS3KmhzJ04KTTajnJg9NU8frHDl5jeaoNvomptP4h%2Fn3BdPTiaSlGd69FK8pwpbfOK1f9U0GvlRkU7DUmGw7uCcXTUYlscTfERCxLkY9KQI1lknnEphzkKS9Qv%2Fkc3mQZiKBuOIQrgSe%2BcLO1RK53I%2FC8pWLrdtvkY8%2Fos6Tvg5zL3XYXArXughNPeTg2sHekt1MNnukLlfcuG6tx33j5rVAgWSbZOJZFRBxzp06xZ5dRQ%2BAPiFtBy%2B0uHM5PxB4Lzq6D2WNl3iXHIoprpzJhsVNRmDiaPkoEXMT3YqjyS9xShX1CiybqgrAG38LLfck0Pqer7klBE6DuQpKUYw%2F%2BGdwwY6pgFzFrM8%2FweWRT%2BfeXW5I0G2Rdl56RPSg%2BRomXyI3kJJ3MlPVSABVFmZ2KV%2FvMKYswhKFOvPI8ggT3m1fQDhz92X6g%2BHe%2FPBgA5%2BkwProcr5SltCXolpvGlHDV61fqrEIWNc4fkgly2Vy%2FmUBkC6N%2Ba%2FXOzcJLeNN9MoHO5IehiLjaBgCiVs3nbrZ3HiVAVQjdktTanMec3qQxkC%2BtF%2FwsgV0RT0sl52&X-Amz-Signature=211e542af6be6cccda21c547403141b8c7c0a6fe556617d1f85bc3cc45750cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDM3S57%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEv8bja0TqTk%2FEewGo6FtPzW0F%2FegsmZcGBaR8MAC4AUAiA%2BU%2BD0xDAZYSnpOLjAT0Ce9yG3OV4%2Bw0WpqbBSJ1w2jCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMduMom3qeUDrgnzN%2BKtwDChwhnXaMzz5jCTJk7KDZURjdCnGJEtUDOhswh0InhRE8zDko0nA0znm7abcn0R4h65F0LaN2bPgcnUqUlAoxTJSVm5zmoM9ZMapaC%2BNS39QnRkHRPMny%2FV7B0dVYEysPmWjulxerGS4dazgWCS3H02dEK8O6EY5AW%2FCZ3Tu8jjGwdkCXPejpNQbaeFoqL%2BOw56pbKxdz4NeGPDO4VgimhupGLY5DFxVSPJl0B8Un9NUEOlrOUXKT54ODZs3e28%2FddP06h6q5%2FspDU2UM4LtdF4go5fwgEHiv8u8wB3jZQrS3KmhzJ04KTTajnJg9NU8frHDl5jeaoNvomptP4h%2Fn3BdPTiaSlGd69FK8pwpbfOK1f9U0GvlRkU7DUmGw7uCcXTUYlscTfERCxLkY9KQI1lknnEphzkKS9Qv%2Fkc3mQZiKBuOIQrgSe%2BcLO1RK53I%2FC8pWLrdtvkY8%2Fos6Tvg5zL3XYXArXughNPeTg2sHekt1MNnukLlfcuG6tx33j5rVAgWSbZOJZFRBxzp06xZ5dRQ%2BAPiFtBy%2B0uHM5PxB4Lzq6D2WNl3iXHIoprpzJhsVNRmDiaPkoEXMT3YqjyS9xShX1CiybqgrAG38LLfck0Pqer7klBE6DuQpKUYw%2F%2BGdwwY6pgFzFrM8%2FweWRT%2BfeXW5I0G2Rdl56RPSg%2BRomXyI3kJJ3MlPVSABVFmZ2KV%2FvMKYswhKFOvPI8ggT3m1fQDhz92X6g%2BHe%2FPBgA5%2BkwProcr5SltCXolpvGlHDV61fqrEIWNc4fkgly2Vy%2FmUBkC6N%2Ba%2FXOzcJLeNN9MoHO5IehiLjaBgCiVs3nbrZ3HiVAVQjdktTanMec3qQxkC%2BtF%2FwsgV0RT0sl52&X-Amz-Signature=d69990be2738cc5b11da4ee962e0db65b44445573fa11d43ccf73ffeba54fa40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
