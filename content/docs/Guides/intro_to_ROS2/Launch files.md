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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUEAKDO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZNs69UdBYPNLsxXhDRqmqAQBChs8fGFI%2FK1jatqO5gIhAMwOP7F08mbqxjLFbs%2BPCvrtKagrS%2FxM4FsVONLgDkCQKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsnMTmMosl%2Bq2p5O4q3ANukAVJ6UrxRt70bMLmxCCWWhWnpVKWoiwofPTwr93F0Nr8OZUvb2Ve0Hv5tskmsS87bB3vUirhsPNQwtd6h1nwioiUwrPOGDa00M%2FsEw7SY%2FRiXx9fmE0ReKJFSF5oBHoSGChvw1f3Ou%2BpUHrwSNTc4CqHLAdclZjsxL4qkeCMVxWmEhedIFGKnahwX1%2F%2B5v41a6Sapt9%2FMTAJQ8n2514MZAVEpe9pdMnfSphoolMz%2FzU%2FUbPGsN956y69qlAdre%2BNlhzqhSRo7QYY1caoW2Fpbo8EgQouRJlHMJLe%2B8OEONujMzD4aFghmunxvKDcROtMm0vGr5jTbuaC33gYkO9crmsvbKxYLlsIYYewNFb3Lr0KKAZ2%2FRHtHmY4K6%2FsbpKHiqONPKTqPSRPQnOWHcrIo9ep%2FovvGws%2F%2Fp1k23HFqahVHEzxpjApSDf68c%2BxYMmMj29aDKQwmf7PmSU73fZ4%2BKgrFd9WyM7KfaMDMCS7xI%2FZ5UkLUqdUYFFeqCEBBTHcjChRpDXTpP%2Bh2PyOxJbOoS6z18nQgSPUBge3GRyHDBlOTN57%2F7Bm3vGrQ9mF44wi9DaO%2BHouqrpV7xgwe7akoVnMVquaKh%2F2ahr0d7MAG4haRudr05pML6oWIjD96ZXDBjqkAbvkPfIZYL5auJknK9IUEE2XjPJEf5yCYCG0XbOJYFlTS9%2BXqSE9cU%2BW56wI54vG4lue3Zm%2FNYXcLtnaYYzeygr1hKeslZlXvIQN6MllOiywjMNRZmXvEfr45cyg4K%2BZT3Zmf3GtmSxTFr2%2BLj5%2B46e7fpg%2FBUR2NqvLzTRnELZSNoB0NegEnGFbFB4uGobGys%2FGNifI8BuwbDcMPcVGxxj9naGP&X-Amz-Signature=e8b9a336c32f194ff5125c27d342aadc0ad4e56ffea52df7720230db8489c4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUEAKDO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZNs69UdBYPNLsxXhDRqmqAQBChs8fGFI%2FK1jatqO5gIhAMwOP7F08mbqxjLFbs%2BPCvrtKagrS%2FxM4FsVONLgDkCQKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsnMTmMosl%2Bq2p5O4q3ANukAVJ6UrxRt70bMLmxCCWWhWnpVKWoiwofPTwr93F0Nr8OZUvb2Ve0Hv5tskmsS87bB3vUirhsPNQwtd6h1nwioiUwrPOGDa00M%2FsEw7SY%2FRiXx9fmE0ReKJFSF5oBHoSGChvw1f3Ou%2BpUHrwSNTc4CqHLAdclZjsxL4qkeCMVxWmEhedIFGKnahwX1%2F%2B5v41a6Sapt9%2FMTAJQ8n2514MZAVEpe9pdMnfSphoolMz%2FzU%2FUbPGsN956y69qlAdre%2BNlhzqhSRo7QYY1caoW2Fpbo8EgQouRJlHMJLe%2B8OEONujMzD4aFghmunxvKDcROtMm0vGr5jTbuaC33gYkO9crmsvbKxYLlsIYYewNFb3Lr0KKAZ2%2FRHtHmY4K6%2FsbpKHiqONPKTqPSRPQnOWHcrIo9ep%2FovvGws%2F%2Fp1k23HFqahVHEzxpjApSDf68c%2BxYMmMj29aDKQwmf7PmSU73fZ4%2BKgrFd9WyM7KfaMDMCS7xI%2FZ5UkLUqdUYFFeqCEBBTHcjChRpDXTpP%2Bh2PyOxJbOoS6z18nQgSPUBge3GRyHDBlOTN57%2F7Bm3vGrQ9mF44wi9DaO%2BHouqrpV7xgwe7akoVnMVquaKh%2F2ahr0d7MAG4haRudr05pML6oWIjD96ZXDBjqkAbvkPfIZYL5auJknK9IUEE2XjPJEf5yCYCG0XbOJYFlTS9%2BXqSE9cU%2BW56wI54vG4lue3Zm%2FNYXcLtnaYYzeygr1hKeslZlXvIQN6MllOiywjMNRZmXvEfr45cyg4K%2BZT3Zmf3GtmSxTFr2%2BLj5%2B46e7fpg%2FBUR2NqvLzTRnELZSNoB0NegEnGFbFB4uGobGys%2FGNifI8BuwbDcMPcVGxxj9naGP&X-Amz-Signature=93424cafffec8a7c3cac7dda17a19e1152100de2df763838973dfc968f808256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUEAKDO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeZNs69UdBYPNLsxXhDRqmqAQBChs8fGFI%2FK1jatqO5gIhAMwOP7F08mbqxjLFbs%2BPCvrtKagrS%2FxM4FsVONLgDkCQKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsnMTmMosl%2Bq2p5O4q3ANukAVJ6UrxRt70bMLmxCCWWhWnpVKWoiwofPTwr93F0Nr8OZUvb2Ve0Hv5tskmsS87bB3vUirhsPNQwtd6h1nwioiUwrPOGDa00M%2FsEw7SY%2FRiXx9fmE0ReKJFSF5oBHoSGChvw1f3Ou%2BpUHrwSNTc4CqHLAdclZjsxL4qkeCMVxWmEhedIFGKnahwX1%2F%2B5v41a6Sapt9%2FMTAJQ8n2514MZAVEpe9pdMnfSphoolMz%2FzU%2FUbPGsN956y69qlAdre%2BNlhzqhSRo7QYY1caoW2Fpbo8EgQouRJlHMJLe%2B8OEONujMzD4aFghmunxvKDcROtMm0vGr5jTbuaC33gYkO9crmsvbKxYLlsIYYewNFb3Lr0KKAZ2%2FRHtHmY4K6%2FsbpKHiqONPKTqPSRPQnOWHcrIo9ep%2FovvGws%2F%2Fp1k23HFqahVHEzxpjApSDf68c%2BxYMmMj29aDKQwmf7PmSU73fZ4%2BKgrFd9WyM7KfaMDMCS7xI%2FZ5UkLUqdUYFFeqCEBBTHcjChRpDXTpP%2Bh2PyOxJbOoS6z18nQgSPUBge3GRyHDBlOTN57%2F7Bm3vGrQ9mF44wi9DaO%2BHouqrpV7xgwe7akoVnMVquaKh%2F2ahr0d7MAG4haRudr05pML6oWIjD96ZXDBjqkAbvkPfIZYL5auJknK9IUEE2XjPJEf5yCYCG0XbOJYFlTS9%2BXqSE9cU%2BW56wI54vG4lue3Zm%2FNYXcLtnaYYzeygr1hKeslZlXvIQN6MllOiywjMNRZmXvEfr45cyg4K%2BZT3Zmf3GtmSxTFr2%2BLj5%2B46e7fpg%2FBUR2NqvLzTRnELZSNoB0NegEnGFbFB4uGobGys%2FGNifI8BuwbDcMPcVGxxj9naGP&X-Amz-Signature=25ad855204e5fd44556ff429227c8776c8c96adc3b4b7e46301d7f28c9736f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
