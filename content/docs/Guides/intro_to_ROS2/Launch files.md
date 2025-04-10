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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TZEYMW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDtjghKqUnrgE%2F%2Bwjz5oqqN%2BOVLUmSwXzK7u%2BALdBGs7QIgCKqxTioLn2z3xBO4Jh9kTKQGZRMXx0JNCm2TO9TCVpwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6sIPYMPWleQtTtOyrcA0aWO1P64femkqZrCgiWft6AtEneKcjdbY43kJamz2L2ubC1cZHoC8%2Fkq5PdruU%2FrTYCBfqnwSKIqrWq5SYooHlhEUolL8ZrywVpCRyJHXfpEH2GEwdYGDgmVje4FtK6pQ7ORg3qLSYmfwuqG6QhnrPtZjHKja2o6p94USZtNTBPCbP7nNOYrP0DrtCuPKTavielSy4ENGAEIPfpOYMkBl2%2Fk4%2BW2po2szdsLeuRNAoPDauvREVAOFxOm7FhlaC%2Fy1F1Xdh7PxY2XqCCmjCZqnlyjqCrO9%2BjL7kse77QqD1Vqo7C1xCtl6DuwObfpj48yWpFizFq9p3wAo97Yb4LmBUW3lY5bSpwaIWya%2BPxkHBZAmKUeexX2WaoPoyafizl089mAiG8uFSyQpiPbPyN1ZEtHSzzptbpgsd7t9GhLX1b2pUdXXxtgDT%2B0Olh9p8bpsHWExWQXSHq%2BPraeSOOPujdxnuvwvt1DQO6ox4aVLXfHTd%2FIktDImI23hsPlTTEWuvE%2F5xVrCHi2nMNuU0Ji1PpqrTIRMqNUTHvrgj0D2KxgmE7nlNQciXTOnu4oMRTdw5HI%2F%2FmOx1gVUHdmfErAsh5uifTOkU6ZxaTh6siqCy9M%2Fp73WIH%2FEz9brR7MOLU378GOqUBCr7QhBesQaqxl8I2r%2BwK7wsXgyh5AWFkyT%2FxfroBu2FpVaAd5kgTogZ55dkPyAr3Ai%2Fe5RkIIK3Qjm4B5G19EjxDQCTxHihOEhd5mzngaUBLNDtmKVGQXKYWmnMoC3GA%2FP%2B6Q4jvCnfvp60CDf7v3YY5v5HLMfpNHcGd%2FpPqsuimODiRgWB%2FTBJFgGsyttL5CAybhmpreV2shlrf6ufWvUVuba6q&X-Amz-Signature=5cbeed6c43d04f3c255e7f0347d1b1105670c8ed806e2723d0eaa26f5646090d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TZEYMW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDtjghKqUnrgE%2F%2Bwjz5oqqN%2BOVLUmSwXzK7u%2BALdBGs7QIgCKqxTioLn2z3xBO4Jh9kTKQGZRMXx0JNCm2TO9TCVpwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6sIPYMPWleQtTtOyrcA0aWO1P64femkqZrCgiWft6AtEneKcjdbY43kJamz2L2ubC1cZHoC8%2Fkq5PdruU%2FrTYCBfqnwSKIqrWq5SYooHlhEUolL8ZrywVpCRyJHXfpEH2GEwdYGDgmVje4FtK6pQ7ORg3qLSYmfwuqG6QhnrPtZjHKja2o6p94USZtNTBPCbP7nNOYrP0DrtCuPKTavielSy4ENGAEIPfpOYMkBl2%2Fk4%2BW2po2szdsLeuRNAoPDauvREVAOFxOm7FhlaC%2Fy1F1Xdh7PxY2XqCCmjCZqnlyjqCrO9%2BjL7kse77QqD1Vqo7C1xCtl6DuwObfpj48yWpFizFq9p3wAo97Yb4LmBUW3lY5bSpwaIWya%2BPxkHBZAmKUeexX2WaoPoyafizl089mAiG8uFSyQpiPbPyN1ZEtHSzzptbpgsd7t9GhLX1b2pUdXXxtgDT%2B0Olh9p8bpsHWExWQXSHq%2BPraeSOOPujdxnuvwvt1DQO6ox4aVLXfHTd%2FIktDImI23hsPlTTEWuvE%2F5xVrCHi2nMNuU0Ji1PpqrTIRMqNUTHvrgj0D2KxgmE7nlNQciXTOnu4oMRTdw5HI%2F%2FmOx1gVUHdmfErAsh5uifTOkU6ZxaTh6siqCy9M%2Fp73WIH%2FEz9brR7MOLU378GOqUBCr7QhBesQaqxl8I2r%2BwK7wsXgyh5AWFkyT%2FxfroBu2FpVaAd5kgTogZ55dkPyAr3Ai%2Fe5RkIIK3Qjm4B5G19EjxDQCTxHihOEhd5mzngaUBLNDtmKVGQXKYWmnMoC3GA%2FP%2B6Q4jvCnfvp60CDf7v3YY5v5HLMfpNHcGd%2FpPqsuimODiRgWB%2FTBJFgGsyttL5CAybhmpreV2shlrf6ufWvUVuba6q&X-Amz-Signature=61437adf1cfafad4684c82ff200de3cb3c6f0b7a32b39b1310d5b8bb2b723859&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TZEYMW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDtjghKqUnrgE%2F%2Bwjz5oqqN%2BOVLUmSwXzK7u%2BALdBGs7QIgCKqxTioLn2z3xBO4Jh9kTKQGZRMXx0JNCm2TO9TCVpwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6sIPYMPWleQtTtOyrcA0aWO1P64femkqZrCgiWft6AtEneKcjdbY43kJamz2L2ubC1cZHoC8%2Fkq5PdruU%2FrTYCBfqnwSKIqrWq5SYooHlhEUolL8ZrywVpCRyJHXfpEH2GEwdYGDgmVje4FtK6pQ7ORg3qLSYmfwuqG6QhnrPtZjHKja2o6p94USZtNTBPCbP7nNOYrP0DrtCuPKTavielSy4ENGAEIPfpOYMkBl2%2Fk4%2BW2po2szdsLeuRNAoPDauvREVAOFxOm7FhlaC%2Fy1F1Xdh7PxY2XqCCmjCZqnlyjqCrO9%2BjL7kse77QqD1Vqo7C1xCtl6DuwObfpj48yWpFizFq9p3wAo97Yb4LmBUW3lY5bSpwaIWya%2BPxkHBZAmKUeexX2WaoPoyafizl089mAiG8uFSyQpiPbPyN1ZEtHSzzptbpgsd7t9GhLX1b2pUdXXxtgDT%2B0Olh9p8bpsHWExWQXSHq%2BPraeSOOPujdxnuvwvt1DQO6ox4aVLXfHTd%2FIktDImI23hsPlTTEWuvE%2F5xVrCHi2nMNuU0Ji1PpqrTIRMqNUTHvrgj0D2KxgmE7nlNQciXTOnu4oMRTdw5HI%2F%2FmOx1gVUHdmfErAsh5uifTOkU6ZxaTh6siqCy9M%2Fp73WIH%2FEz9brR7MOLU378GOqUBCr7QhBesQaqxl8I2r%2BwK7wsXgyh5AWFkyT%2FxfroBu2FpVaAd5kgTogZ55dkPyAr3Ai%2Fe5RkIIK3Qjm4B5G19EjxDQCTxHihOEhd5mzngaUBLNDtmKVGQXKYWmnMoC3GA%2FP%2B6Q4jvCnfvp60CDf7v3YY5v5HLMfpNHcGd%2FpPqsuimODiRgWB%2FTBJFgGsyttL5CAybhmpreV2shlrf6ufWvUVuba6q&X-Amz-Signature=6bc9e8a69e9c0082f8c7861a335bec02ba70736c5d63c3a9679431ed8f0908c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
