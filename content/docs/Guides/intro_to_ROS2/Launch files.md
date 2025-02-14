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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWZG5BY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCID9AEkP2jsTvpLvCXcpR0%2BpfceQKpjM4xCefSpdNIUCQAiEA0SFApdiaq6nhnh83GYxwn6HyqWqnouWJlhpJJa9CrLMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVlkLCPbO%2BAx1OGPCrcAyaFUdO%2FrGjsvnYYIZPJnwlL8HVBUi78GpjuGXVrlZMxLsBzpys%2BwRoBPFMe1u1q5jT1Y0VUCIWQBakOdD8ZABXVrQATcX9R8eI%2FdS%2F3iCCiF%2FLKIckkBa2f54HBqzCjrmLxIUEF0P%2FGgjyaK4WpTsCAfIr3v8UZ4AK1y1ulITNHDm60%2BX0Y8H2PL8X%2Bo1JtjbkwQL%2FYatENHzwCWeSmliA0G%2FdeKEiEtDjCbqcVY%2F%2FVcPeSjroNmxzFmfPA4w70QwhliVVHKa66Q5WNs%2B%2F%2BpeRwmInwdlx%2BC5zE%2F25myO%2BxsHbmrjp1iZSga0uTJB8ONuK%2FyoSuPdLVZHKTlrFRUm6q%2BcQq4m0glTijgF%2BkbMkon%2B%2F8E6DnP1gX9YD7qcewPKTk%2BYcZVco3SSpT5A1Yprvo4kynPTg1vJlbPwSWf89caH20EsjvKI20l0N91lvmPg%2FdlDDlC%2BGK3B2vMqhbuwLaTQKouYvKJx7kjH58b1ScHftXSbj14MDOAu3B03vZpe1Op4B4lfSjgjX0OUCnZThsBdSVTSBS7FKPyY0SjbhrTCdomo3mk4kS73I%2BpEQ2eh%2BZKwiNFhauoBSlJ7xvvLbwr1dlCPxCQ2kA6tyIVQ8gB5evnLRLWpuN3w5hMMKRvL0GOqUBk%2BcosO1BFNZTwAtZDvANecsIbZQf5Q4jTBbYvvx%2BBPpEyLnABdCbTyem9HpxbP%2FNxfC0XF4h9NliOPFJmp85j1Of6jSm2TIySMTyZx9cP5C%2BQrgBFJTbBpYRiSqtcasQALbPG8n2fEk4XQE6FEb2bi9%2FvXPjjisAvoWmEEMZHpxXredhS7Qd%2B5c2hgtHg7pMv0tsYVcsRzE78Ms8wzxex%2FknjJza&X-Amz-Signature=e8a7bf451d94c491ad5b5d4e253140f943cd0fd24c7aeda93717d511b5dc9488&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWZG5BY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCID9AEkP2jsTvpLvCXcpR0%2BpfceQKpjM4xCefSpdNIUCQAiEA0SFApdiaq6nhnh83GYxwn6HyqWqnouWJlhpJJa9CrLMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVlkLCPbO%2BAx1OGPCrcAyaFUdO%2FrGjsvnYYIZPJnwlL8HVBUi78GpjuGXVrlZMxLsBzpys%2BwRoBPFMe1u1q5jT1Y0VUCIWQBakOdD8ZABXVrQATcX9R8eI%2FdS%2F3iCCiF%2FLKIckkBa2f54HBqzCjrmLxIUEF0P%2FGgjyaK4WpTsCAfIr3v8UZ4AK1y1ulITNHDm60%2BX0Y8H2PL8X%2Bo1JtjbkwQL%2FYatENHzwCWeSmliA0G%2FdeKEiEtDjCbqcVY%2F%2FVcPeSjroNmxzFmfPA4w70QwhliVVHKa66Q5WNs%2B%2F%2BpeRwmInwdlx%2BC5zE%2F25myO%2BxsHbmrjp1iZSga0uTJB8ONuK%2FyoSuPdLVZHKTlrFRUm6q%2BcQq4m0glTijgF%2BkbMkon%2B%2F8E6DnP1gX9YD7qcewPKTk%2BYcZVco3SSpT5A1Yprvo4kynPTg1vJlbPwSWf89caH20EsjvKI20l0N91lvmPg%2FdlDDlC%2BGK3B2vMqhbuwLaTQKouYvKJx7kjH58b1ScHftXSbj14MDOAu3B03vZpe1Op4B4lfSjgjX0OUCnZThsBdSVTSBS7FKPyY0SjbhrTCdomo3mk4kS73I%2BpEQ2eh%2BZKwiNFhauoBSlJ7xvvLbwr1dlCPxCQ2kA6tyIVQ8gB5evnLRLWpuN3w5hMMKRvL0GOqUBk%2BcosO1BFNZTwAtZDvANecsIbZQf5Q4jTBbYvvx%2BBPpEyLnABdCbTyem9HpxbP%2FNxfC0XF4h9NliOPFJmp85j1Of6jSm2TIySMTyZx9cP5C%2BQrgBFJTbBpYRiSqtcasQALbPG8n2fEk4XQE6FEb2bi9%2FvXPjjisAvoWmEEMZHpxXredhS7Qd%2B5c2hgtHg7pMv0tsYVcsRzE78Ms8wzxex%2FknjJza&X-Amz-Signature=b09fabf6e758a8621074b938b11b6aef9b7ae8011959831cce1c0cd99155639d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTWZG5BY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCID9AEkP2jsTvpLvCXcpR0%2BpfceQKpjM4xCefSpdNIUCQAiEA0SFApdiaq6nhnh83GYxwn6HyqWqnouWJlhpJJa9CrLMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVlkLCPbO%2BAx1OGPCrcAyaFUdO%2FrGjsvnYYIZPJnwlL8HVBUi78GpjuGXVrlZMxLsBzpys%2BwRoBPFMe1u1q5jT1Y0VUCIWQBakOdD8ZABXVrQATcX9R8eI%2FdS%2F3iCCiF%2FLKIckkBa2f54HBqzCjrmLxIUEF0P%2FGgjyaK4WpTsCAfIr3v8UZ4AK1y1ulITNHDm60%2BX0Y8H2PL8X%2Bo1JtjbkwQL%2FYatENHzwCWeSmliA0G%2FdeKEiEtDjCbqcVY%2F%2FVcPeSjroNmxzFmfPA4w70QwhliVVHKa66Q5WNs%2B%2F%2BpeRwmInwdlx%2BC5zE%2F25myO%2BxsHbmrjp1iZSga0uTJB8ONuK%2FyoSuPdLVZHKTlrFRUm6q%2BcQq4m0glTijgF%2BkbMkon%2B%2F8E6DnP1gX9YD7qcewPKTk%2BYcZVco3SSpT5A1Yprvo4kynPTg1vJlbPwSWf89caH20EsjvKI20l0N91lvmPg%2FdlDDlC%2BGK3B2vMqhbuwLaTQKouYvKJx7kjH58b1ScHftXSbj14MDOAu3B03vZpe1Op4B4lfSjgjX0OUCnZThsBdSVTSBS7FKPyY0SjbhrTCdomo3mk4kS73I%2BpEQ2eh%2BZKwiNFhauoBSlJ7xvvLbwr1dlCPxCQ2kA6tyIVQ8gB5evnLRLWpuN3w5hMMKRvL0GOqUBk%2BcosO1BFNZTwAtZDvANecsIbZQf5Q4jTBbYvvx%2BBPpEyLnABdCbTyem9HpxbP%2FNxfC0XF4h9NliOPFJmp85j1Of6jSm2TIySMTyZx9cP5C%2BQrgBFJTbBpYRiSqtcasQALbPG8n2fEk4XQE6FEb2bi9%2FvXPjjisAvoWmEEMZHpxXredhS7Qd%2B5c2hgtHg7pMv0tsYVcsRzE78Ms8wzxex%2FknjJza&X-Amz-Signature=ce2f0b498cdb951b7e56c84aedcc65efd5a1f06623b8ea3ed818cb01b7fd0a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
