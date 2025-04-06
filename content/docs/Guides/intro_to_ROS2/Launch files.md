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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5YDR4L%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH0ZPNJPq6MQx05cJZfvZxE1Y2vOqB2AUIBlBY4VLS0MCICGHwNxvcgCMH7cRIDyPnKcGvgqJ0LZNfO2gNcsOEDoPKv8DCEwQABoMNjM3NDIzMTgzODA1Igz3ZkGDixNy0%2BC6FI4q3APLBefKZx7tbEVNHn%2FW7W3ktj1LITGRKJ%2Bu3UXpP8%2Bx9SASITvkz0G%2FpGcyi%2BoB2qbRAiTf0nhGdDZ0oKKD8QKErsZ%2BudknvYpuPCi4vsceZAIhqrlG9RY6C8ZgZMEv%2BVML6mXfZYuUo%2BW5LDrFug83P6rPzsqJnlKsj9oIA0R0%2FIBCFXEOGZ9FZW8S9J0HrvvfHaFbObJPTUGrqxv3shYIM1Xqh2L9xb57dtpCRq7jklv4SATueI4B5kZgB7fqJeDLYRkhyXapI3qWbBvPh3GgWLRdV9b18bZE9QNw4fn95wVp4ySNhJybdoWiuTxapQCemrK2hREBcpfgEO62k%2FTG4m1Oak6ogXPTldJY4agjYH4uDC6vWUQOIVcX3cq75OMAZfRk67G6BvKb2YdahAtgQcTWSKjerajYZCLPK3A%2FZibX2fWPnK1lr5d3JHW6RFM%2Frqf5LCvDRjjMsyBARB%2BWV9d5qwFMWK9LUYlDGs02hVrdbSSWTxdgqAUNpHx4SWRxROGjUIbCCH%2BGsWPon%2Fw3MZTtJCpdO3I9bSTAV6hudgK9WCMUGxTOZxjaXbeQbLVOdmB81riPPa8oA5xx14U6G3PakPLJTEhni8mWndPWezIje3niEOqR9ZI1MzCRnsu%2FBjqnAY%2B5HHf6VU18S%2ByPijxUt2aPhEjbVM%2BszXXSeyr1mLc78C34v6aQCpHHPmPEhlbuV%2BM1rQFNDfiurP41bNvFDQ4UyzD9eYDO%2BLU30Jl8aZ1CUacafk6Hcp%2FFwqsXd6IvSgrdA5UPQFs6BAJE04PXFGHpD70wCCEHPOMo8O8YWIpqJ3a7cB9bkwf7D6ks4dp8embmL55p%2BQtVZvtgrPoP7XJqKC0SgQcP&X-Amz-Signature=c4a0d67258e44c03ad1446b6286140fbb30e25ae353dfdfd3c11ea2a60ab3b69&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5YDR4L%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH0ZPNJPq6MQx05cJZfvZxE1Y2vOqB2AUIBlBY4VLS0MCICGHwNxvcgCMH7cRIDyPnKcGvgqJ0LZNfO2gNcsOEDoPKv8DCEwQABoMNjM3NDIzMTgzODA1Igz3ZkGDixNy0%2BC6FI4q3APLBefKZx7tbEVNHn%2FW7W3ktj1LITGRKJ%2Bu3UXpP8%2Bx9SASITvkz0G%2FpGcyi%2BoB2qbRAiTf0nhGdDZ0oKKD8QKErsZ%2BudknvYpuPCi4vsceZAIhqrlG9RY6C8ZgZMEv%2BVML6mXfZYuUo%2BW5LDrFug83P6rPzsqJnlKsj9oIA0R0%2FIBCFXEOGZ9FZW8S9J0HrvvfHaFbObJPTUGrqxv3shYIM1Xqh2L9xb57dtpCRq7jklv4SATueI4B5kZgB7fqJeDLYRkhyXapI3qWbBvPh3GgWLRdV9b18bZE9QNw4fn95wVp4ySNhJybdoWiuTxapQCemrK2hREBcpfgEO62k%2FTG4m1Oak6ogXPTldJY4agjYH4uDC6vWUQOIVcX3cq75OMAZfRk67G6BvKb2YdahAtgQcTWSKjerajYZCLPK3A%2FZibX2fWPnK1lr5d3JHW6RFM%2Frqf5LCvDRjjMsyBARB%2BWV9d5qwFMWK9LUYlDGs02hVrdbSSWTxdgqAUNpHx4SWRxROGjUIbCCH%2BGsWPon%2Fw3MZTtJCpdO3I9bSTAV6hudgK9WCMUGxTOZxjaXbeQbLVOdmB81riPPa8oA5xx14U6G3PakPLJTEhni8mWndPWezIje3niEOqR9ZI1MzCRnsu%2FBjqnAY%2B5HHf6VU18S%2ByPijxUt2aPhEjbVM%2BszXXSeyr1mLc78C34v6aQCpHHPmPEhlbuV%2BM1rQFNDfiurP41bNvFDQ4UyzD9eYDO%2BLU30Jl8aZ1CUacafk6Hcp%2FFwqsXd6IvSgrdA5UPQFs6BAJE04PXFGHpD70wCCEHPOMo8O8YWIpqJ3a7cB9bkwf7D6ks4dp8embmL55p%2BQtVZvtgrPoP7XJqKC0SgQcP&X-Amz-Signature=d73869bc04461071f380a66ee983b293f849d9e7420156a1c5046371ccd7b019&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5YDR4L%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH0ZPNJPq6MQx05cJZfvZxE1Y2vOqB2AUIBlBY4VLS0MCICGHwNxvcgCMH7cRIDyPnKcGvgqJ0LZNfO2gNcsOEDoPKv8DCEwQABoMNjM3NDIzMTgzODA1Igz3ZkGDixNy0%2BC6FI4q3APLBefKZx7tbEVNHn%2FW7W3ktj1LITGRKJ%2Bu3UXpP8%2Bx9SASITvkz0G%2FpGcyi%2BoB2qbRAiTf0nhGdDZ0oKKD8QKErsZ%2BudknvYpuPCi4vsceZAIhqrlG9RY6C8ZgZMEv%2BVML6mXfZYuUo%2BW5LDrFug83P6rPzsqJnlKsj9oIA0R0%2FIBCFXEOGZ9FZW8S9J0HrvvfHaFbObJPTUGrqxv3shYIM1Xqh2L9xb57dtpCRq7jklv4SATueI4B5kZgB7fqJeDLYRkhyXapI3qWbBvPh3GgWLRdV9b18bZE9QNw4fn95wVp4ySNhJybdoWiuTxapQCemrK2hREBcpfgEO62k%2FTG4m1Oak6ogXPTldJY4agjYH4uDC6vWUQOIVcX3cq75OMAZfRk67G6BvKb2YdahAtgQcTWSKjerajYZCLPK3A%2FZibX2fWPnK1lr5d3JHW6RFM%2Frqf5LCvDRjjMsyBARB%2BWV9d5qwFMWK9LUYlDGs02hVrdbSSWTxdgqAUNpHx4SWRxROGjUIbCCH%2BGsWPon%2Fw3MZTtJCpdO3I9bSTAV6hudgK9WCMUGxTOZxjaXbeQbLVOdmB81riPPa8oA5xx14U6G3PakPLJTEhni8mWndPWezIje3niEOqR9ZI1MzCRnsu%2FBjqnAY%2B5HHf6VU18S%2ByPijxUt2aPhEjbVM%2BszXXSeyr1mLc78C34v6aQCpHHPmPEhlbuV%2BM1rQFNDfiurP41bNvFDQ4UyzD9eYDO%2BLU30Jl8aZ1CUacafk6Hcp%2FFwqsXd6IvSgrdA5UPQFs6BAJE04PXFGHpD70wCCEHPOMo8O8YWIpqJ3a7cB9bkwf7D6ks4dp8embmL55p%2BQtVZvtgrPoP7XJqKC0SgQcP&X-Amz-Signature=ee391d59adada91335a849820fe8822508579e03b8b58bf42834ef160a4d9852&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
