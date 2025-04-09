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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZAKGREV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDedUZZw9Ui1ptlkVMIx82pZHA2hzgEaPG6kQR7FYXVxgIgGuPpLst%2BlZ35oLbzfLO5jLA52X7HA1Shh6Zx5k5RLV0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbRIuS3ovKrjTyNKSrcAyvZoOmyBoceZVC5%2BdD%2B43eFUachRKGPXXLA06bd%2Bfnmv3GCpw8TFZqErsIKX4fD6XZiLoevtxgKK5GFcC0Syv63hWsPeyFNrD66jZyDfeMiI6Nl317AhxyBuwE0rf2VgO4KQJihl3OwOsPiPv8f2P4SqfOCUxgIaqI9V9HJLk7pJy0J8oMwGy2K6psUcLpcozss7onMIRvrhz%2FSOM3aEf0rijffUwK3R0lhmrMiOchJkqjsADHgbNBNqVmYtkFVy63Muj9ZToiAfTfewgXMOpwub%2FHwjRrDuF%2BNT0n9jmZpRqB%2F%2BtPJKCyNGnLUU%2F5edPTPErKD7An%2FTBqAwSJheaIr2DJ8Y%2BndTH4%2BzPy7dgwNeurL7%2BWUuzESFhON38wquA5xbQk4s68SwJ0BTXDkJzsMRQSMzIozc1rPMbjlez%2B6Y%2Bc%2BcvoIdd6jbXBYDcXv8cinTS0WtjLXk4s3Uf300FQNlATPNvtQaA5ZrBhPCnlaKVW2ne5G%2Femr1pUDSQzcZbynx3%2BFydqkkTh01PRjIMGB5S5qess4v5VSL0lAg0P%2FluiOcdRSMIbn3AxbWg7iP2tmnS8tq1vNZYQEFRBYaEOSJaJuzBXbKva4pSp3X6OVW5iOEzLbBd7Np7C1ML%2FW178GOqUBCJ%2Fd9aSJRKP%2F0ha58Rz126OVnUy9FVxFo%2B%2FnwB6JN2JDbOgFnF0NUuIxCqSsZotn%2BDH7dpdAYiHItD3Vd95%2BjVihfdcqlik3w%2B%2F1uo9RftUfulym9V8YODWBnXG1MZXaexk8qSXiqk8X%2BB%2BuqxvDfKwmjeYKj8cuEacPj7iWBWtuiYycCrmmnWXB0eH3R%2BkEqlp95hdMqwqkin6H7e4Osqb6qO%2Bb&X-Amz-Signature=6cc785a9d72cc1acd4a0e78019984f57100eed6dd12461d6789fa0d8a4a10bca&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZAKGREV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDedUZZw9Ui1ptlkVMIx82pZHA2hzgEaPG6kQR7FYXVxgIgGuPpLst%2BlZ35oLbzfLO5jLA52X7HA1Shh6Zx5k5RLV0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbRIuS3ovKrjTyNKSrcAyvZoOmyBoceZVC5%2BdD%2B43eFUachRKGPXXLA06bd%2Bfnmv3GCpw8TFZqErsIKX4fD6XZiLoevtxgKK5GFcC0Syv63hWsPeyFNrD66jZyDfeMiI6Nl317AhxyBuwE0rf2VgO4KQJihl3OwOsPiPv8f2P4SqfOCUxgIaqI9V9HJLk7pJy0J8oMwGy2K6psUcLpcozss7onMIRvrhz%2FSOM3aEf0rijffUwK3R0lhmrMiOchJkqjsADHgbNBNqVmYtkFVy63Muj9ZToiAfTfewgXMOpwub%2FHwjRrDuF%2BNT0n9jmZpRqB%2F%2BtPJKCyNGnLUU%2F5edPTPErKD7An%2FTBqAwSJheaIr2DJ8Y%2BndTH4%2BzPy7dgwNeurL7%2BWUuzESFhON38wquA5xbQk4s68SwJ0BTXDkJzsMRQSMzIozc1rPMbjlez%2B6Y%2Bc%2BcvoIdd6jbXBYDcXv8cinTS0WtjLXk4s3Uf300FQNlATPNvtQaA5ZrBhPCnlaKVW2ne5G%2Femr1pUDSQzcZbynx3%2BFydqkkTh01PRjIMGB5S5qess4v5VSL0lAg0P%2FluiOcdRSMIbn3AxbWg7iP2tmnS8tq1vNZYQEFRBYaEOSJaJuzBXbKva4pSp3X6OVW5iOEzLbBd7Np7C1ML%2FW178GOqUBCJ%2Fd9aSJRKP%2F0ha58Rz126OVnUy9FVxFo%2B%2FnwB6JN2JDbOgFnF0NUuIxCqSsZotn%2BDH7dpdAYiHItD3Vd95%2BjVihfdcqlik3w%2B%2F1uo9RftUfulym9V8YODWBnXG1MZXaexk8qSXiqk8X%2BB%2BuqxvDfKwmjeYKj8cuEacPj7iWBWtuiYycCrmmnWXB0eH3R%2BkEqlp95hdMqwqkin6H7e4Osqb6qO%2Bb&X-Amz-Signature=0c8e2fffee59fb33a90c438227577bb252ab448495215ab2f1374d80d9014d90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZAKGREV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDedUZZw9Ui1ptlkVMIx82pZHA2hzgEaPG6kQR7FYXVxgIgGuPpLst%2BlZ35oLbzfLO5jLA52X7HA1Shh6Zx5k5RLV0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbRIuS3ovKrjTyNKSrcAyvZoOmyBoceZVC5%2BdD%2B43eFUachRKGPXXLA06bd%2Bfnmv3GCpw8TFZqErsIKX4fD6XZiLoevtxgKK5GFcC0Syv63hWsPeyFNrD66jZyDfeMiI6Nl317AhxyBuwE0rf2VgO4KQJihl3OwOsPiPv8f2P4SqfOCUxgIaqI9V9HJLk7pJy0J8oMwGy2K6psUcLpcozss7onMIRvrhz%2FSOM3aEf0rijffUwK3R0lhmrMiOchJkqjsADHgbNBNqVmYtkFVy63Muj9ZToiAfTfewgXMOpwub%2FHwjRrDuF%2BNT0n9jmZpRqB%2F%2BtPJKCyNGnLUU%2F5edPTPErKD7An%2FTBqAwSJheaIr2DJ8Y%2BndTH4%2BzPy7dgwNeurL7%2BWUuzESFhON38wquA5xbQk4s68SwJ0BTXDkJzsMRQSMzIozc1rPMbjlez%2B6Y%2Bc%2BcvoIdd6jbXBYDcXv8cinTS0WtjLXk4s3Uf300FQNlATPNvtQaA5ZrBhPCnlaKVW2ne5G%2Femr1pUDSQzcZbynx3%2BFydqkkTh01PRjIMGB5S5qess4v5VSL0lAg0P%2FluiOcdRSMIbn3AxbWg7iP2tmnS8tq1vNZYQEFRBYaEOSJaJuzBXbKva4pSp3X6OVW5iOEzLbBd7Np7C1ML%2FW178GOqUBCJ%2Fd9aSJRKP%2F0ha58Rz126OVnUy9FVxFo%2B%2FnwB6JN2JDbOgFnF0NUuIxCqSsZotn%2BDH7dpdAYiHItD3Vd95%2BjVihfdcqlik3w%2B%2F1uo9RftUfulym9V8YODWBnXG1MZXaexk8qSXiqk8X%2BB%2BuqxvDfKwmjeYKj8cuEacPj7iWBWtuiYycCrmmnWXB0eH3R%2BkEqlp95hdMqwqkin6H7e4Osqb6qO%2Bb&X-Amz-Signature=d792b7052577152ddf2a23a05b13ac6d79eaa948670823f35093bfe6b8d6ec11&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
