---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT7U2FEF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDU0PEa00qkMVQNSwHsD9BLygBampQoLDvC1iU0ReQpfAIge%2FfRii5ObGZ4oq4J1PxSWEl%2FEV2WX3cLEJ6w3s4DhRIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAQS%2FLVUIHQ8%2BvSTNCrcA2FWCASnPUfllX%2BIUbSI2eDTYlzvDzXAXhQTs3p1MlJUc0fGohGGbf6kaB%2BS4n8irxs6RRuzXrQeyK3HP96%2B8fbuYp5SEr3NUAnGl1%2FY3bpM8ELgKn8a2ref80cqxaie5Q8oRW11i6GxFnPMDFUu%2BQhZdLsYS6baBNAWDEk0%2BLJ4fsKfZHFTYO2UxIgFp%2F%2FCY9kBkioDY3zLpjy9GhgAehKOYWTYfuxUWF9W2aycDQP60%2B5SspYW7CKHAU6EUHupVQrl5usOsRgSxKZE0hOwLPzdFDjXiKixgSKV1uT0FO%2BBuwNLVvlCm1S4xtE2VCOuC8Wm3ibdWlHEUmwV7HfXC2Ww0jZno0FYbQ7eFXnoqERKYJn8GBk5yYdR%2FjMgyB48RS%2B4dpV3UwbWSMCRgynmYWXZ0B3NjXNMqX7HKh0%2BMFYdOG4YvRGxYbaT%2FWfsKB1aqBaTTK17GUxDk8ilZ55v1yhU0uqDAqWWHEtohr4M%2BtTpt1MOBUuplwzXT1vfbFrsHeO8ZkAcr6qi8wtrDQ0GpyS0ZoyF2IBaw8FizXZulp2NtVHvZbp1L9o9UNMkQ3i%2FKHM3AwAiumk7HqzM7sI05ybFFn7Uk2m0sgdyVZBjtCvEDKkQzQ1DfvqGXLiAMJPxkMQGOqUBFcUgbuIzThMBLlpLOrNPOyOuotrIicTUCVRn46bqVmcRp9rb3wYrUKXvgjSUi8dTLqnhjfx2lZZdVTo1uglp%2BZAGy8KruG2xVehWkg%2BolI5kVxCUG59k2LoujIR%2BekPD3u2O3d%2BqES8qDDiWg3Yi%2FMvaxMg1O5MX%2F%2FgjwqS66TWCzVElAI9qS%2B%2FYTUP%2BgldWQ6307hOGF5ryULh%2FkBKOGqsxJ%2FAQ&X-Amz-Signature=fad61c7498676298f2a3dca9555e7813b4ef738cf069ca025ff20f0f5c0ab4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT7U2FEF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDU0PEa00qkMVQNSwHsD9BLygBampQoLDvC1iU0ReQpfAIge%2FfRii5ObGZ4oq4J1PxSWEl%2FEV2WX3cLEJ6w3s4DhRIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAQS%2FLVUIHQ8%2BvSTNCrcA2FWCASnPUfllX%2BIUbSI2eDTYlzvDzXAXhQTs3p1MlJUc0fGohGGbf6kaB%2BS4n8irxs6RRuzXrQeyK3HP96%2B8fbuYp5SEr3NUAnGl1%2FY3bpM8ELgKn8a2ref80cqxaie5Q8oRW11i6GxFnPMDFUu%2BQhZdLsYS6baBNAWDEk0%2BLJ4fsKfZHFTYO2UxIgFp%2F%2FCY9kBkioDY3zLpjy9GhgAehKOYWTYfuxUWF9W2aycDQP60%2B5SspYW7CKHAU6EUHupVQrl5usOsRgSxKZE0hOwLPzdFDjXiKixgSKV1uT0FO%2BBuwNLVvlCm1S4xtE2VCOuC8Wm3ibdWlHEUmwV7HfXC2Ww0jZno0FYbQ7eFXnoqERKYJn8GBk5yYdR%2FjMgyB48RS%2B4dpV3UwbWSMCRgynmYWXZ0B3NjXNMqX7HKh0%2BMFYdOG4YvRGxYbaT%2FWfsKB1aqBaTTK17GUxDk8ilZ55v1yhU0uqDAqWWHEtohr4M%2BtTpt1MOBUuplwzXT1vfbFrsHeO8ZkAcr6qi8wtrDQ0GpyS0ZoyF2IBaw8FizXZulp2NtVHvZbp1L9o9UNMkQ3i%2FKHM3AwAiumk7HqzM7sI05ybFFn7Uk2m0sgdyVZBjtCvEDKkQzQ1DfvqGXLiAMJPxkMQGOqUBFcUgbuIzThMBLlpLOrNPOyOuotrIicTUCVRn46bqVmcRp9rb3wYrUKXvgjSUi8dTLqnhjfx2lZZdVTo1uglp%2BZAGy8KruG2xVehWkg%2BolI5kVxCUG59k2LoujIR%2BekPD3u2O3d%2BqES8qDDiWg3Yi%2FMvaxMg1O5MX%2F%2FgjwqS66TWCzVElAI9qS%2B%2FYTUP%2BgldWQ6307hOGF5ryULh%2FkBKOGqsxJ%2FAQ&X-Amz-Signature=e859e1219c83421374fc74900b4c03b1af7a97f19611ff655fd1c0b024dad60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT7U2FEF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDU0PEa00qkMVQNSwHsD9BLygBampQoLDvC1iU0ReQpfAIge%2FfRii5ObGZ4oq4J1PxSWEl%2FEV2WX3cLEJ6w3s4DhRIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAQS%2FLVUIHQ8%2BvSTNCrcA2FWCASnPUfllX%2BIUbSI2eDTYlzvDzXAXhQTs3p1MlJUc0fGohGGbf6kaB%2BS4n8irxs6RRuzXrQeyK3HP96%2B8fbuYp5SEr3NUAnGl1%2FY3bpM8ELgKn8a2ref80cqxaie5Q8oRW11i6GxFnPMDFUu%2BQhZdLsYS6baBNAWDEk0%2BLJ4fsKfZHFTYO2UxIgFp%2F%2FCY9kBkioDY3zLpjy9GhgAehKOYWTYfuxUWF9W2aycDQP60%2B5SspYW7CKHAU6EUHupVQrl5usOsRgSxKZE0hOwLPzdFDjXiKixgSKV1uT0FO%2BBuwNLVvlCm1S4xtE2VCOuC8Wm3ibdWlHEUmwV7HfXC2Ww0jZno0FYbQ7eFXnoqERKYJn8GBk5yYdR%2FjMgyB48RS%2B4dpV3UwbWSMCRgynmYWXZ0B3NjXNMqX7HKh0%2BMFYdOG4YvRGxYbaT%2FWfsKB1aqBaTTK17GUxDk8ilZ55v1yhU0uqDAqWWHEtohr4M%2BtTpt1MOBUuplwzXT1vfbFrsHeO8ZkAcr6qi8wtrDQ0GpyS0ZoyF2IBaw8FizXZulp2NtVHvZbp1L9o9UNMkQ3i%2FKHM3AwAiumk7HqzM7sI05ybFFn7Uk2m0sgdyVZBjtCvEDKkQzQ1DfvqGXLiAMJPxkMQGOqUBFcUgbuIzThMBLlpLOrNPOyOuotrIicTUCVRn46bqVmcRp9rb3wYrUKXvgjSUi8dTLqnhjfx2lZZdVTo1uglp%2BZAGy8KruG2xVehWkg%2BolI5kVxCUG59k2LoujIR%2BekPD3u2O3d%2BqES8qDDiWg3Yi%2FMvaxMg1O5MX%2F%2FgjwqS66TWCzVElAI9qS%2B%2FYTUP%2BgldWQ6307hOGF5ryULh%2FkBKOGqsxJ%2FAQ&X-Amz-Signature=6c1585be104ed091a75d164b2376330cfe9ddadc1af73a6fabdbeb8a606513dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
