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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTGMC37%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJFMEMCHzhLTK2cttbnEoop0znYSI47bpTDN%2B%2BKVsf6uav3JFsCIDuMV8cf6d1tG7W57GzunQ6dMFrIlqMd%2FwuoB5nUhGS8KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO9OJNmA6wJeeAu5sq3ANbW%2BVczsO31g192JlrGSJWlUMTAPyUsW%2B22GSbPlM6qKTz7%2B5RoFSYrl6RF%2BoynEmh4xMLjnkIxXJNcjyWIfqai0k%2FaiAnG0wQKf0RMSFRHp8cvADxLqostACZ7AphNdyW5xsv2pP%2FJj9%2FGFdE%2BmaWx7up%2Fm4huk2mL5tMJfAg8EfHw0H1XlKGcGsTKnbnm1vu7vQzObBqYioBblsuzzBAAq6j9CWYctD7%2FjSmcGSULJARqt7UtSbdjW0KMYZsvX1oatpsW4nglidW5TeXPUBZtXORt%2BS1JPYvY9uCefsOG%2FDp89Dzan5eeC41M2AyzmRXLANqStNVApqURsYEQT%2FbOw4e4Qei0ZgbcfS1KPQpP8D%2BW0fxHkLtN1dOlPfe0ENuMfiUoD6SwH%2FTxYD5s9es6k8sQ6K4HmKTezjvzjnJXAHVxMXep%2FnDnYIrxXsuX5mzg%2BaMce5%2FeLZjjKwzq7nGwz371HeEwOwMHugPpg36Kjt9fMUFr3vnLRZRID9lAZPAGQJd3VCe0PwV%2BYO9%2Fwbi3iSVhGW7ytAU6HjrHddzAAidIvxVZxV2A%2BEUD8g1toxv4Ik6LI8Xc9XysKPwEI%2Fg3dJWr8j2gY8AN1%2FzcYYeBUpshWH5SJaF%2BdIpETDa%2Bta9BjqnAYJnvCQdLuy3Gg9zp2Du0bPef9U%2BrwRuFPHyMf2xlIy3mDlJx4ypzrcFXpMAaH99R3CccRNe%2BCHUd%2FYDErLcNDMV14TYDhk02wZhtDvWRfxGP1pW6fo9NM58gUEaJJRu0iKf9Q%2BPHB5EQEvguyeaSJldnB4JesskVv1in3cOGcOU0Z9yURVf5P876ZbJf9Bd56mNbQV2%2FDfP5D0F3KZXIGKUOBk%2FRgZl&X-Amz-Signature=cba7a92e61fb2cdddd51dbc87b6be0dde54fe6d88670be91bf419b6c21bea0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTGMC37%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJFMEMCHzhLTK2cttbnEoop0znYSI47bpTDN%2B%2BKVsf6uav3JFsCIDuMV8cf6d1tG7W57GzunQ6dMFrIlqMd%2FwuoB5nUhGS8KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO9OJNmA6wJeeAu5sq3ANbW%2BVczsO31g192JlrGSJWlUMTAPyUsW%2B22GSbPlM6qKTz7%2B5RoFSYrl6RF%2BoynEmh4xMLjnkIxXJNcjyWIfqai0k%2FaiAnG0wQKf0RMSFRHp8cvADxLqostACZ7AphNdyW5xsv2pP%2FJj9%2FGFdE%2BmaWx7up%2Fm4huk2mL5tMJfAg8EfHw0H1XlKGcGsTKnbnm1vu7vQzObBqYioBblsuzzBAAq6j9CWYctD7%2FjSmcGSULJARqt7UtSbdjW0KMYZsvX1oatpsW4nglidW5TeXPUBZtXORt%2BS1JPYvY9uCefsOG%2FDp89Dzan5eeC41M2AyzmRXLANqStNVApqURsYEQT%2FbOw4e4Qei0ZgbcfS1KPQpP8D%2BW0fxHkLtN1dOlPfe0ENuMfiUoD6SwH%2FTxYD5s9es6k8sQ6K4HmKTezjvzjnJXAHVxMXep%2FnDnYIrxXsuX5mzg%2BaMce5%2FeLZjjKwzq7nGwz371HeEwOwMHugPpg36Kjt9fMUFr3vnLRZRID9lAZPAGQJd3VCe0PwV%2BYO9%2Fwbi3iSVhGW7ytAU6HjrHddzAAidIvxVZxV2A%2BEUD8g1toxv4Ik6LI8Xc9XysKPwEI%2Fg3dJWr8j2gY8AN1%2FzcYYeBUpshWH5SJaF%2BdIpETDa%2Bta9BjqnAYJnvCQdLuy3Gg9zp2Du0bPef9U%2BrwRuFPHyMf2xlIy3mDlJx4ypzrcFXpMAaH99R3CccRNe%2BCHUd%2FYDErLcNDMV14TYDhk02wZhtDvWRfxGP1pW6fo9NM58gUEaJJRu0iKf9Q%2BPHB5EQEvguyeaSJldnB4JesskVv1in3cOGcOU0Z9yURVf5P876ZbJf9Bd56mNbQV2%2FDfP5D0F3KZXIGKUOBk%2FRgZl&X-Amz-Signature=0910450d7fdcaca33f39679fb9e56b985ed0bd5cd0bfd9939d281d4a03cec7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTGMC37%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJFMEMCHzhLTK2cttbnEoop0znYSI47bpTDN%2B%2BKVsf6uav3JFsCIDuMV8cf6d1tG7W57GzunQ6dMFrIlqMd%2FwuoB5nUhGS8KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO9OJNmA6wJeeAu5sq3ANbW%2BVczsO31g192JlrGSJWlUMTAPyUsW%2B22GSbPlM6qKTz7%2B5RoFSYrl6RF%2BoynEmh4xMLjnkIxXJNcjyWIfqai0k%2FaiAnG0wQKf0RMSFRHp8cvADxLqostACZ7AphNdyW5xsv2pP%2FJj9%2FGFdE%2BmaWx7up%2Fm4huk2mL5tMJfAg8EfHw0H1XlKGcGsTKnbnm1vu7vQzObBqYioBblsuzzBAAq6j9CWYctD7%2FjSmcGSULJARqt7UtSbdjW0KMYZsvX1oatpsW4nglidW5TeXPUBZtXORt%2BS1JPYvY9uCefsOG%2FDp89Dzan5eeC41M2AyzmRXLANqStNVApqURsYEQT%2FbOw4e4Qei0ZgbcfS1KPQpP8D%2BW0fxHkLtN1dOlPfe0ENuMfiUoD6SwH%2FTxYD5s9es6k8sQ6K4HmKTezjvzjnJXAHVxMXep%2FnDnYIrxXsuX5mzg%2BaMce5%2FeLZjjKwzq7nGwz371HeEwOwMHugPpg36Kjt9fMUFr3vnLRZRID9lAZPAGQJd3VCe0PwV%2BYO9%2Fwbi3iSVhGW7ytAU6HjrHddzAAidIvxVZxV2A%2BEUD8g1toxv4Ik6LI8Xc9XysKPwEI%2Fg3dJWr8j2gY8AN1%2FzcYYeBUpshWH5SJaF%2BdIpETDa%2Bta9BjqnAYJnvCQdLuy3Gg9zp2Du0bPef9U%2BrwRuFPHyMf2xlIy3mDlJx4ypzrcFXpMAaH99R3CccRNe%2BCHUd%2FYDErLcNDMV14TYDhk02wZhtDvWRfxGP1pW6fo9NM58gUEaJJRu0iKf9Q%2BPHB5EQEvguyeaSJldnB4JesskVv1in3cOGcOU0Z9yURVf5P876ZbJf9Bd56mNbQV2%2FDfP5D0F3KZXIGKUOBk%2FRgZl&X-Amz-Signature=e1077e21a888edbc14ce0adf15ef3001892a5d6b5e6e0800d9496ed863c95de6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
