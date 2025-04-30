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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HBMZDT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCx0GxPmJozmtW2d0TAjg%2BB7gLQ6EBknZBBbVcJgaTl5wIgW9LNVmRTyVAHlLazcbOLDIaj%2FAHM%2FP9BJcAW0tcNCgEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFDHUbe8RG6PQoxYircAyUsAlTx93SGYRAt9nSZd%2F%2FAoFa%2BkpDK9q%2Bv1VTzQWDDI%2BjDT51l657h7HpIK5qkyS1IfWVMX72yjat3ZX%2Fsxmw5voNL1MheUF7UBLPx5V1hMuEDGqfhkCnMbbleSZsmNswp5EHgbS8p405Bks9al7pFgOnZXQFL2D3jlcVfdx2PhyKJz8yMPd4kqwuUxxevMhYZnpxUpfb03a7dUUw8GiKT%2FRWJCDWql1Xqbn1Zu09hODbQvFzhe%2FFiItAGR6KXrJb5FRi27AmuZrSVIW7Jlb64%2Bf%2FaPXpR1sTNe%2Bcp9doCJkqJ13FgbeAhC0eo8YjEXOCFE%2B9PgQKGW1PsqK1mXcHG3H96agxRg5LnvgLFkbbAmwMyT3vUXBieaT1LlIZzdoPMFyfI22nSRqC%2FKZurYtvfVLgNpUO1hgbD5jcb2McLZrwVubDAXy7FDZ%2BNMIvP4ZIO0XQXU8lQBJoPQmoLypQzrCxje8u%2FxjuxV7i%2BtL2EYRNeXECSlP%2Fli0kyhSWUuX5uukzB%2FJwGmOmbv7rH8OmxW2Uhtqpf5NfVXwHDaCMWBFrBlSoH3c8egZ0rt4aQMUUl1eT8zxGF114Is0WyT7jMICEEVnM7kUAdAEIDNTPLS7HINM%2F7SxiIRHjyMKanyMAGOqUBW6Go50kCkGM7TR9p6vDv0Pa1pLfqAAPzbOkbn4mtY8UIfBTbg3a8uA29vRPkW0F4J8K8i51fkHKwcsM70FVYeczHEh45nJ1O8rrWXlquAYqSA65gXoBGFj4xFj%2BXbi5Hpd0YbNqfRSp4VC%2BA0KhgYQtT%2FcQbrWuqH585s9LHp0lHuzwZymc73mjxsip%2F4nHlyoYlrhkMMlIRknJvVLTmdlRHAZYL&X-Amz-Signature=56698cf5ea28ab2f7062a9a65dcb20e6e70bc02d5d17451d519ec482e04d3411&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HBMZDT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCx0GxPmJozmtW2d0TAjg%2BB7gLQ6EBknZBBbVcJgaTl5wIgW9LNVmRTyVAHlLazcbOLDIaj%2FAHM%2FP9BJcAW0tcNCgEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFDHUbe8RG6PQoxYircAyUsAlTx93SGYRAt9nSZd%2F%2FAoFa%2BkpDK9q%2Bv1VTzQWDDI%2BjDT51l657h7HpIK5qkyS1IfWVMX72yjat3ZX%2Fsxmw5voNL1MheUF7UBLPx5V1hMuEDGqfhkCnMbbleSZsmNswp5EHgbS8p405Bks9al7pFgOnZXQFL2D3jlcVfdx2PhyKJz8yMPd4kqwuUxxevMhYZnpxUpfb03a7dUUw8GiKT%2FRWJCDWql1Xqbn1Zu09hODbQvFzhe%2FFiItAGR6KXrJb5FRi27AmuZrSVIW7Jlb64%2Bf%2FaPXpR1sTNe%2Bcp9doCJkqJ13FgbeAhC0eo8YjEXOCFE%2B9PgQKGW1PsqK1mXcHG3H96agxRg5LnvgLFkbbAmwMyT3vUXBieaT1LlIZzdoPMFyfI22nSRqC%2FKZurYtvfVLgNpUO1hgbD5jcb2McLZrwVubDAXy7FDZ%2BNMIvP4ZIO0XQXU8lQBJoPQmoLypQzrCxje8u%2FxjuxV7i%2BtL2EYRNeXECSlP%2Fli0kyhSWUuX5uukzB%2FJwGmOmbv7rH8OmxW2Uhtqpf5NfVXwHDaCMWBFrBlSoH3c8egZ0rt4aQMUUl1eT8zxGF114Is0WyT7jMICEEVnM7kUAdAEIDNTPLS7HINM%2F7SxiIRHjyMKanyMAGOqUBW6Go50kCkGM7TR9p6vDv0Pa1pLfqAAPzbOkbn4mtY8UIfBTbg3a8uA29vRPkW0F4J8K8i51fkHKwcsM70FVYeczHEh45nJ1O8rrWXlquAYqSA65gXoBGFj4xFj%2BXbi5Hpd0YbNqfRSp4VC%2BA0KhgYQtT%2FcQbrWuqH585s9LHp0lHuzwZymc73mjxsip%2F4nHlyoYlrhkMMlIRknJvVLTmdlRHAZYL&X-Amz-Signature=c8d429828f38f0bffb567f447fc7f90d4ad7e1c55876df7180a33c4265feac1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637HBMZDT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCx0GxPmJozmtW2d0TAjg%2BB7gLQ6EBknZBBbVcJgaTl5wIgW9LNVmRTyVAHlLazcbOLDIaj%2FAHM%2FP9BJcAW0tcNCgEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFDHUbe8RG6PQoxYircAyUsAlTx93SGYRAt9nSZd%2F%2FAoFa%2BkpDK9q%2Bv1VTzQWDDI%2BjDT51l657h7HpIK5qkyS1IfWVMX72yjat3ZX%2Fsxmw5voNL1MheUF7UBLPx5V1hMuEDGqfhkCnMbbleSZsmNswp5EHgbS8p405Bks9al7pFgOnZXQFL2D3jlcVfdx2PhyKJz8yMPd4kqwuUxxevMhYZnpxUpfb03a7dUUw8GiKT%2FRWJCDWql1Xqbn1Zu09hODbQvFzhe%2FFiItAGR6KXrJb5FRi27AmuZrSVIW7Jlb64%2Bf%2FaPXpR1sTNe%2Bcp9doCJkqJ13FgbeAhC0eo8YjEXOCFE%2B9PgQKGW1PsqK1mXcHG3H96agxRg5LnvgLFkbbAmwMyT3vUXBieaT1LlIZzdoPMFyfI22nSRqC%2FKZurYtvfVLgNpUO1hgbD5jcb2McLZrwVubDAXy7FDZ%2BNMIvP4ZIO0XQXU8lQBJoPQmoLypQzrCxje8u%2FxjuxV7i%2BtL2EYRNeXECSlP%2Fli0kyhSWUuX5uukzB%2FJwGmOmbv7rH8OmxW2Uhtqpf5NfVXwHDaCMWBFrBlSoH3c8egZ0rt4aQMUUl1eT8zxGF114Is0WyT7jMICEEVnM7kUAdAEIDNTPLS7HINM%2F7SxiIRHjyMKanyMAGOqUBW6Go50kCkGM7TR9p6vDv0Pa1pLfqAAPzbOkbn4mtY8UIfBTbg3a8uA29vRPkW0F4J8K8i51fkHKwcsM70FVYeczHEh45nJ1O8rrWXlquAYqSA65gXoBGFj4xFj%2BXbi5Hpd0YbNqfRSp4VC%2BA0KhgYQtT%2FcQbrWuqH585s9LHp0lHuzwZymc73mjxsip%2F4nHlyoYlrhkMMlIRknJvVLTmdlRHAZYL&X-Amz-Signature=9430303559b981c6c868f6d1f23545490683e6fa097bbdb115f0bbfcdcb68c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
