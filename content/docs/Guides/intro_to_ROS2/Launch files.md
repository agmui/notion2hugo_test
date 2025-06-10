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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXS6O3UH%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqqaidP6ajDd8yviD3knI%2Fl4gqd%2FAqt20uYX%2FgWK39MAIgNXyo5fbMc4tG7bjbUNRY4sFl17095XdebTAizKowzEcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSSdqmFqELWUVuezSrcA4Xqm%2B4TxWzsPj83Mm2TWccgNb3whqjOslikh3tfc0%2BSV42rgpnEztpUFnwYht%2Bzy%2BcDiaTihI%2FGK7U2fDFd0iFepUmViLMop45jm27tWd50K3SMtwR88TIbpQxtxA3rlT5XLvbMXQkXd9X4UCMYLNUONo1EpJ2EnUMdMVRwyv8q740pg4jEJseOYoOkciObcnmIA8wkPHDNhVhy%2FL1eUOpJYKzVojiX9B%2FaxY2i%2FOhO2XM61XSsKacaOx5%2B3lOmvyPuBX2dJQSWnM29l5roVDpkipj6GZJCYs7S7Yd1WAb1%2F2lzJY1dGYN2vRVHklaYTbZKObEANTabxzC%2BeI0R%2BA8EzOGeIwi5jrnY810Xznf7oGbL6EAegDUmfUjlquZOtudTkKdS%2FIAgTPk3cgeOIKuCYM%2B%2BjvqOdMSfJDEtgUPLPdopDYFalEPY5CUwrQj8qbWYaodQ%2Bba%2BbcH7dCWOq5qh8gJm9K9EoVCyb%2BO7MWihdXfTe0R95O%2B%2BhT36hNgSx%2FNAUN0uBsi9JxkyrlqEo4DJe%2F1JGG4AglEyDupn2XE8nr6drd%2FtoRd4uBf5YoB1FYnx2UwuKXqlQ8PV0ULCVpyiQd4E1d9%2FP%2BfUpAh3erDBb%2BDLAmG%2B2YSAap8JMMTOocIGOqUBzzyvggUswAl7JSbpFhBtdoLGShGqfGymD%2BZ%2FDEkGuTDTYfKNvMBleaHYkTO39CM3lPvJhVOdR4wphudnEyCMT1RtgxkTAMRW0kCO4%2BbzZGDfmaco51MIBzMlrAru60wVCDeZXfe1BwejXsofsQkBDrrjazduVVqbRD8%2Bfex20jfg0dKB86z3Woaa8M8IJQG%2FPzja5mOYWYCifLhGxD6BUrwT2%2BT6&X-Amz-Signature=92e46b10fd1e40b9eedf70290841757410fdda575894808c864cf7b4678e7f90&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXS6O3UH%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqqaidP6ajDd8yviD3knI%2Fl4gqd%2FAqt20uYX%2FgWK39MAIgNXyo5fbMc4tG7bjbUNRY4sFl17095XdebTAizKowzEcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSSdqmFqELWUVuezSrcA4Xqm%2B4TxWzsPj83Mm2TWccgNb3whqjOslikh3tfc0%2BSV42rgpnEztpUFnwYht%2Bzy%2BcDiaTihI%2FGK7U2fDFd0iFepUmViLMop45jm27tWd50K3SMtwR88TIbpQxtxA3rlT5XLvbMXQkXd9X4UCMYLNUONo1EpJ2EnUMdMVRwyv8q740pg4jEJseOYoOkciObcnmIA8wkPHDNhVhy%2FL1eUOpJYKzVojiX9B%2FaxY2i%2FOhO2XM61XSsKacaOx5%2B3lOmvyPuBX2dJQSWnM29l5roVDpkipj6GZJCYs7S7Yd1WAb1%2F2lzJY1dGYN2vRVHklaYTbZKObEANTabxzC%2BeI0R%2BA8EzOGeIwi5jrnY810Xznf7oGbL6EAegDUmfUjlquZOtudTkKdS%2FIAgTPk3cgeOIKuCYM%2B%2BjvqOdMSfJDEtgUPLPdopDYFalEPY5CUwrQj8qbWYaodQ%2Bba%2BbcH7dCWOq5qh8gJm9K9EoVCyb%2BO7MWihdXfTe0R95O%2B%2BhT36hNgSx%2FNAUN0uBsi9JxkyrlqEo4DJe%2F1JGG4AglEyDupn2XE8nr6drd%2FtoRd4uBf5YoB1FYnx2UwuKXqlQ8PV0ULCVpyiQd4E1d9%2FP%2BfUpAh3erDBb%2BDLAmG%2B2YSAap8JMMTOocIGOqUBzzyvggUswAl7JSbpFhBtdoLGShGqfGymD%2BZ%2FDEkGuTDTYfKNvMBleaHYkTO39CM3lPvJhVOdR4wphudnEyCMT1RtgxkTAMRW0kCO4%2BbzZGDfmaco51MIBzMlrAru60wVCDeZXfe1BwejXsofsQkBDrrjazduVVqbRD8%2Bfex20jfg0dKB86z3Woaa8M8IJQG%2FPzja5mOYWYCifLhGxD6BUrwT2%2BT6&X-Amz-Signature=f8b4216f03ae36c9b75790e1fce7bcdff09a3f045d48a2d71dc78ea55ce1ec71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXS6O3UH%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqqaidP6ajDd8yviD3knI%2Fl4gqd%2FAqt20uYX%2FgWK39MAIgNXyo5fbMc4tG7bjbUNRY4sFl17095XdebTAizKowzEcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSSdqmFqELWUVuezSrcA4Xqm%2B4TxWzsPj83Mm2TWccgNb3whqjOslikh3tfc0%2BSV42rgpnEztpUFnwYht%2Bzy%2BcDiaTihI%2FGK7U2fDFd0iFepUmViLMop45jm27tWd50K3SMtwR88TIbpQxtxA3rlT5XLvbMXQkXd9X4UCMYLNUONo1EpJ2EnUMdMVRwyv8q740pg4jEJseOYoOkciObcnmIA8wkPHDNhVhy%2FL1eUOpJYKzVojiX9B%2FaxY2i%2FOhO2XM61XSsKacaOx5%2B3lOmvyPuBX2dJQSWnM29l5roVDpkipj6GZJCYs7S7Yd1WAb1%2F2lzJY1dGYN2vRVHklaYTbZKObEANTabxzC%2BeI0R%2BA8EzOGeIwi5jrnY810Xznf7oGbL6EAegDUmfUjlquZOtudTkKdS%2FIAgTPk3cgeOIKuCYM%2B%2BjvqOdMSfJDEtgUPLPdopDYFalEPY5CUwrQj8qbWYaodQ%2Bba%2BbcH7dCWOq5qh8gJm9K9EoVCyb%2BO7MWihdXfTe0R95O%2B%2BhT36hNgSx%2FNAUN0uBsi9JxkyrlqEo4DJe%2F1JGG4AglEyDupn2XE8nr6drd%2FtoRd4uBf5YoB1FYnx2UwuKXqlQ8PV0ULCVpyiQd4E1d9%2FP%2BfUpAh3erDBb%2BDLAmG%2B2YSAap8JMMTOocIGOqUBzzyvggUswAl7JSbpFhBtdoLGShGqfGymD%2BZ%2FDEkGuTDTYfKNvMBleaHYkTO39CM3lPvJhVOdR4wphudnEyCMT1RtgxkTAMRW0kCO4%2BbzZGDfmaco51MIBzMlrAru60wVCDeZXfe1BwejXsofsQkBDrrjazduVVqbRD8%2Bfex20jfg0dKB86z3Woaa8M8IJQG%2FPzja5mOYWYCifLhGxD6BUrwT2%2BT6&X-Amz-Signature=19af4707ba414a8b4f5adc84517f1be8c24a5887079eaee1120d4fbfa50b39de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
