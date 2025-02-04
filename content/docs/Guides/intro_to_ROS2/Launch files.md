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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5KLXT7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCF8SwFpxhdZQZvLsHCCvwx7Qn6puV2v6p3z8MnL5Si6AIhALtSJxMM6a6PUbekfrFyuYMhrsjv2m4xM2f6BpwkqU5NKv8DCCYQABoMNjM3NDIzMTgzODA1Igx4fEK6rQTamY4vL8Uq3AOUypmmfTwNYhaKQz9C08dbLjnrbYi7y4%2BWgYf6oBupdvIY4SaqcDUoSMHlUTOta02LeB5NPPwmrc4ui4y1XpDPeOq44ZPALHdze%2BcIvrCASW2IvmlDwAo%2FDDoSXgJFr4Ht%2FDkKjJ7ztEOsSZNstaYLTRMb6RP9%2BAobTPOnc9xAJxWjsQB%2FtuxA6hef1jC%2Bi3t0X%2FRnkuShHh5NC3i0phDnsShwlwkb2vqg4OyuWAhZFAd0bAWwYX4e17ufNbxO%2BVvr6RAx6EyZoJXEXhj6zNjySQI7hjm2LGZk%2F38U1JQICwigq%2FUYK4RjCl8vB88Lg0JNB8Y3FUv7cd%2FOwxxYFlr1FVDc3x8kPB2%2FQzhA5NJn1NgRZ31MxbPIJtzEGNuE7yGgVM919QeAjTPjLh6U0Q7H7JP6NfA9aSYgW71eFpUpP%2BS07jPZycmrNWp6oZcKbctN8k6g%2F6ObxQ%2B706UnXyAckCTEhPfFqb6ot3z8AL7GDmbiigaCyN0%2Ba16Mt058nOSh3SIHDrhBGT3klJDwnzG2kzOevBO6v9JKZyMCNLiaYdQbxtZuIZLF4aJP6LwsePz7PgDE5FRMZw8Sw5nIfVYEOuoQ2RHjPkG2dYiyhzORXqhRYaqIIMAZIHMOcTC%2FwIa9BjqkAfNrf%2Bse9B5K7WxbDwZ%2Br1FEN13%2F2726AuVfcfPj5xzfn7msPVEDf3HhxJO%2BiCVOcI%2FUNrTOABiGmSgU%2FjGAWCjCZV1GJuxI923A3CnWXEX5R0u5biWXduKtvS5th8qpG29FJHeiCocUaLXDrx%2Be9Y04JO9JBa9nXrXJkZ7M7uFJQnHTWpyROfiKgU%2FY%2FHuIjqPuMJ9G71%2BU1ivD40tHZZMdF9pc&X-Amz-Signature=79e228af587e9da31dd3cc906741764ede3af7fb7c7b544d03f770c35322bca8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5KLXT7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCF8SwFpxhdZQZvLsHCCvwx7Qn6puV2v6p3z8MnL5Si6AIhALtSJxMM6a6PUbekfrFyuYMhrsjv2m4xM2f6BpwkqU5NKv8DCCYQABoMNjM3NDIzMTgzODA1Igx4fEK6rQTamY4vL8Uq3AOUypmmfTwNYhaKQz9C08dbLjnrbYi7y4%2BWgYf6oBupdvIY4SaqcDUoSMHlUTOta02LeB5NPPwmrc4ui4y1XpDPeOq44ZPALHdze%2BcIvrCASW2IvmlDwAo%2FDDoSXgJFr4Ht%2FDkKjJ7ztEOsSZNstaYLTRMb6RP9%2BAobTPOnc9xAJxWjsQB%2FtuxA6hef1jC%2Bi3t0X%2FRnkuShHh5NC3i0phDnsShwlwkb2vqg4OyuWAhZFAd0bAWwYX4e17ufNbxO%2BVvr6RAx6EyZoJXEXhj6zNjySQI7hjm2LGZk%2F38U1JQICwigq%2FUYK4RjCl8vB88Lg0JNB8Y3FUv7cd%2FOwxxYFlr1FVDc3x8kPB2%2FQzhA5NJn1NgRZ31MxbPIJtzEGNuE7yGgVM919QeAjTPjLh6U0Q7H7JP6NfA9aSYgW71eFpUpP%2BS07jPZycmrNWp6oZcKbctN8k6g%2F6ObxQ%2B706UnXyAckCTEhPfFqb6ot3z8AL7GDmbiigaCyN0%2Ba16Mt058nOSh3SIHDrhBGT3klJDwnzG2kzOevBO6v9JKZyMCNLiaYdQbxtZuIZLF4aJP6LwsePz7PgDE5FRMZw8Sw5nIfVYEOuoQ2RHjPkG2dYiyhzORXqhRYaqIIMAZIHMOcTC%2FwIa9BjqkAfNrf%2Bse9B5K7WxbDwZ%2Br1FEN13%2F2726AuVfcfPj5xzfn7msPVEDf3HhxJO%2BiCVOcI%2FUNrTOABiGmSgU%2FjGAWCjCZV1GJuxI923A3CnWXEX5R0u5biWXduKtvS5th8qpG29FJHeiCocUaLXDrx%2Be9Y04JO9JBa9nXrXJkZ7M7uFJQnHTWpyROfiKgU%2FY%2FHuIjqPuMJ9G71%2BU1ivD40tHZZMdF9pc&X-Amz-Signature=03f4ff64d5768cb9805642e71429065bb1095c2d563aacd3d4a9ba3aa8c2dd18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5KLXT7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCF8SwFpxhdZQZvLsHCCvwx7Qn6puV2v6p3z8MnL5Si6AIhALtSJxMM6a6PUbekfrFyuYMhrsjv2m4xM2f6BpwkqU5NKv8DCCYQABoMNjM3NDIzMTgzODA1Igx4fEK6rQTamY4vL8Uq3AOUypmmfTwNYhaKQz9C08dbLjnrbYi7y4%2BWgYf6oBupdvIY4SaqcDUoSMHlUTOta02LeB5NPPwmrc4ui4y1XpDPeOq44ZPALHdze%2BcIvrCASW2IvmlDwAo%2FDDoSXgJFr4Ht%2FDkKjJ7ztEOsSZNstaYLTRMb6RP9%2BAobTPOnc9xAJxWjsQB%2FtuxA6hef1jC%2Bi3t0X%2FRnkuShHh5NC3i0phDnsShwlwkb2vqg4OyuWAhZFAd0bAWwYX4e17ufNbxO%2BVvr6RAx6EyZoJXEXhj6zNjySQI7hjm2LGZk%2F38U1JQICwigq%2FUYK4RjCl8vB88Lg0JNB8Y3FUv7cd%2FOwxxYFlr1FVDc3x8kPB2%2FQzhA5NJn1NgRZ31MxbPIJtzEGNuE7yGgVM919QeAjTPjLh6U0Q7H7JP6NfA9aSYgW71eFpUpP%2BS07jPZycmrNWp6oZcKbctN8k6g%2F6ObxQ%2B706UnXyAckCTEhPfFqb6ot3z8AL7GDmbiigaCyN0%2Ba16Mt058nOSh3SIHDrhBGT3klJDwnzG2kzOevBO6v9JKZyMCNLiaYdQbxtZuIZLF4aJP6LwsePz7PgDE5FRMZw8Sw5nIfVYEOuoQ2RHjPkG2dYiyhzORXqhRYaqIIMAZIHMOcTC%2FwIa9BjqkAfNrf%2Bse9B5K7WxbDwZ%2Br1FEN13%2F2726AuVfcfPj5xzfn7msPVEDf3HhxJO%2BiCVOcI%2FUNrTOABiGmSgU%2FjGAWCjCZV1GJuxI923A3CnWXEX5R0u5biWXduKtvS5th8qpG29FJHeiCocUaLXDrx%2Be9Y04JO9JBa9nXrXJkZ7M7uFJQnHTWpyROfiKgU%2FY%2FHuIjqPuMJ9G71%2BU1ivD40tHZZMdF9pc&X-Amz-Signature=bfe02f981b365e2faaba843e5fc8ad7cb9f927ec176753e213adaf2d3ed3b9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
