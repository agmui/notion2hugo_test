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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BVUFO44%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBnEumRA6OovH237HuRhA7FklzkKZPgJ8k%2BbkwDoeTObAiEA7lI2OX%2BflYAeqLK1DR4AXRhjjviBh60AMV05TtSZ4dQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBKHSx%2FhyuJWVe%2FcsircA4sLWQjq4c%2FWsfw8Pu4S66wlKTWEfcOpJO%2FqzaGYaUJOvS2Lu%2FRqoMy%2F0Cfw6y0HOzCm1ZpB%2Beyb%2FOdXRMc3Px4HOJYg5a5Zq3jWZcVvf%2B7CEesuaAYbhH9htKMoFPFSPiLtMwRQaBaQWY9mbzvSyVL77gYRNjmVQ0Cja6upt3ak9q3hS7tD2%2B8X%2FyFB9PpGnfN5V2Z%2Fy9mxFvfpCFZ%2FGWeYqTXpSPpbIsm9fyBHOVlgiCgDd2H57%2BLed05%2F8nVD8xqEm6T4S%2FCeJbcubeF6Q1j7PjUJKff%2FBg0sxyBUwm6lapKilOJdFrmDsFqzb6Nx6u5r1cHaVlynZ%2B%2FSGLzvH%2FIbIYuWQE0oMQbGQM2GLL0aBy9zmOoZZu52wYpgfxPzVvkhtDjitw9nZ%2B7xehANXAVOS7WkoIjm0oH1%2FmaqLEr10oEkXpK%2FwcqN8mWtENxS6EDMFFRzp7ffcnN66lWEQo%2BM6K9cZiWFY4ByK4GPgmW5wg4ghjFmu9EbKKOsh%2B7NlOCYMMqWPBb%2Bm50nlH8C6xwL4l%2Bi%2FDTGCHKvW6a1E9H9IT7TKLrFUEXohSDrCrpig6ngD2dYK1f%2FVOjFv4wnWXr1YIVw569So1yvje3GpAMOFIkQgxnDAy3qR5A8MJKsqMMGOqUBuFfYuGqBAHzGwMSKiqgquJdZ5Q4h2tbdJseMrZzkvJcMdks3%2BLXJEEjGNN6h4pFg85EpDvJYjF6x98sM7KZu00RAauSLoeZ2UH06zkDEIO2pLXiVXJPoMKbYSIyqnyzztm1M7jGLu3YtjYls%2BzodkTroXyEqt%2Ftzho9r%2BH1fsDlQeTn1z6B8sZ1TI4%2Bv8I4IeN%2Ba7JtMfjJ9rEqg3PNOVIwSHUMw&X-Amz-Signature=75449a48179376100e19790034410dd3d5ca1aad69b92f94d96cf7e7a4b8d459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BVUFO44%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBnEumRA6OovH237HuRhA7FklzkKZPgJ8k%2BbkwDoeTObAiEA7lI2OX%2BflYAeqLK1DR4AXRhjjviBh60AMV05TtSZ4dQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBKHSx%2FhyuJWVe%2FcsircA4sLWQjq4c%2FWsfw8Pu4S66wlKTWEfcOpJO%2FqzaGYaUJOvS2Lu%2FRqoMy%2F0Cfw6y0HOzCm1ZpB%2Beyb%2FOdXRMc3Px4HOJYg5a5Zq3jWZcVvf%2B7CEesuaAYbhH9htKMoFPFSPiLtMwRQaBaQWY9mbzvSyVL77gYRNjmVQ0Cja6upt3ak9q3hS7tD2%2B8X%2FyFB9PpGnfN5V2Z%2Fy9mxFvfpCFZ%2FGWeYqTXpSPpbIsm9fyBHOVlgiCgDd2H57%2BLed05%2F8nVD8xqEm6T4S%2FCeJbcubeF6Q1j7PjUJKff%2FBg0sxyBUwm6lapKilOJdFrmDsFqzb6Nx6u5r1cHaVlynZ%2B%2FSGLzvH%2FIbIYuWQE0oMQbGQM2GLL0aBy9zmOoZZu52wYpgfxPzVvkhtDjitw9nZ%2B7xehANXAVOS7WkoIjm0oH1%2FmaqLEr10oEkXpK%2FwcqN8mWtENxS6EDMFFRzp7ffcnN66lWEQo%2BM6K9cZiWFY4ByK4GPgmW5wg4ghjFmu9EbKKOsh%2B7NlOCYMMqWPBb%2Bm50nlH8C6xwL4l%2Bi%2FDTGCHKvW6a1E9H9IT7TKLrFUEXohSDrCrpig6ngD2dYK1f%2FVOjFv4wnWXr1YIVw569So1yvje3GpAMOFIkQgxnDAy3qR5A8MJKsqMMGOqUBuFfYuGqBAHzGwMSKiqgquJdZ5Q4h2tbdJseMrZzkvJcMdks3%2BLXJEEjGNN6h4pFg85EpDvJYjF6x98sM7KZu00RAauSLoeZ2UH06zkDEIO2pLXiVXJPoMKbYSIyqnyzztm1M7jGLu3YtjYls%2BzodkTroXyEqt%2Ftzho9r%2BH1fsDlQeTn1z6B8sZ1TI4%2Bv8I4IeN%2Ba7JtMfjJ9rEqg3PNOVIwSHUMw&X-Amz-Signature=6288fb801e74cb92154f88e650f416eec53fb10a93801cd15a35c831f4f9d3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BVUFO44%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBnEumRA6OovH237HuRhA7FklzkKZPgJ8k%2BbkwDoeTObAiEA7lI2OX%2BflYAeqLK1DR4AXRhjjviBh60AMV05TtSZ4dQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBKHSx%2FhyuJWVe%2FcsircA4sLWQjq4c%2FWsfw8Pu4S66wlKTWEfcOpJO%2FqzaGYaUJOvS2Lu%2FRqoMy%2F0Cfw6y0HOzCm1ZpB%2Beyb%2FOdXRMc3Px4HOJYg5a5Zq3jWZcVvf%2B7CEesuaAYbhH9htKMoFPFSPiLtMwRQaBaQWY9mbzvSyVL77gYRNjmVQ0Cja6upt3ak9q3hS7tD2%2B8X%2FyFB9PpGnfN5V2Z%2Fy9mxFvfpCFZ%2FGWeYqTXpSPpbIsm9fyBHOVlgiCgDd2H57%2BLed05%2F8nVD8xqEm6T4S%2FCeJbcubeF6Q1j7PjUJKff%2FBg0sxyBUwm6lapKilOJdFrmDsFqzb6Nx6u5r1cHaVlynZ%2B%2FSGLzvH%2FIbIYuWQE0oMQbGQM2GLL0aBy9zmOoZZu52wYpgfxPzVvkhtDjitw9nZ%2B7xehANXAVOS7WkoIjm0oH1%2FmaqLEr10oEkXpK%2FwcqN8mWtENxS6EDMFFRzp7ffcnN66lWEQo%2BM6K9cZiWFY4ByK4GPgmW5wg4ghjFmu9EbKKOsh%2B7NlOCYMMqWPBb%2Bm50nlH8C6xwL4l%2Bi%2FDTGCHKvW6a1E9H9IT7TKLrFUEXohSDrCrpig6ngD2dYK1f%2FVOjFv4wnWXr1YIVw569So1yvje3GpAMOFIkQgxnDAy3qR5A8MJKsqMMGOqUBuFfYuGqBAHzGwMSKiqgquJdZ5Q4h2tbdJseMrZzkvJcMdks3%2BLXJEEjGNN6h4pFg85EpDvJYjF6x98sM7KZu00RAauSLoeZ2UH06zkDEIO2pLXiVXJPoMKbYSIyqnyzztm1M7jGLu3YtjYls%2BzodkTroXyEqt%2Ftzho9r%2BH1fsDlQeTn1z6B8sZ1TI4%2Bv8I4IeN%2Ba7JtMfjJ9rEqg3PNOVIwSHUMw&X-Amz-Signature=2320c2b741906e85fa2cec66efa5f0d650a79ec36a3623867d3042cbba3030c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
