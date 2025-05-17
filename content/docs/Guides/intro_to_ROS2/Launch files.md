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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GWINDK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4u7s72TgOh6EuWAxgK4NpkBmdnUOoapIFKl1efV4d3AiA2X7MN1vW909yvFq81l5NurFnAMxV%2F8rvOq206SY1QwSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMnUIQ7zpQtEiq7FBJKtwDBg4eXl86GfJig2dTaNBL2STHu6V6jyMurpz3JnZlX4qOP5t8VtnzNzGwu9X92rN4gIswZNLp%2BEXs8InyPR0kYegv6HWSrk5YsKADRO31Ck5qQCGQ3XWDHyiPp2U3J5T%2FQne51HUnhh5F5v06%2FeV%2B9xPvEYRZwbFYcLsEgmmsjMcl2niL4k5QchzZtSYElXTwrnfCZMgTTE8ekLiUTOLu0eCVNUFCfIKuGYhrZ2zyf3XphTRaxxJm2SJd5DJnVQqpj6btZEBLfLf4C7hAP9xuHhMVaeOGpnjD5fHHjxZP%2BH7M%2BCgElx1mtl%2B5SQ20PgJwm37AWpbNInKLrqp7I8el7yH1tpCkLMUQJG425m%2FA32TG4FUczbBTlzEsCmsUmsFcN43C5boxeUjgwGKhEU33qPIQ47az01PavRxpXZfYy4hXsingmTBLycnorH5HBaKsxjEZnR%2FzigOO6%2BgCWxHg2HZURFQZ5eH7lb96FQmMs2aOqXwK3FMEf93r0vO30vBxpZOE%2B0c8vFEucUooNIulODFBsgPI9QCEg9L4qDxuSQg7sb1dGUQ32PIaYgR8KvkBKsTAWydHmUlkne%2FnbJy998YrbE33Y0duVCZrYC1MtMsQRvlAu2ZT6ZSGBk4wkMujwQY6pgFSAy7mqHsgOBSlDJDxHHzYPFV4xYaMnXrHwbMaIsoL82%2FZELP%2Bd4qBEqhLvKyf264qsSr32ywqv5%2BnpctVz0QMSBp7lEi%2BrYglAdRMV6X8DYHdUZ4FCVzyf2qAxejddjdvdbbPAVL0ti6sB1NAUV5GnUNSo1MvlRV1i3mnlIC20e119fvPQNKrXxRDNqytlaZnELmdygHD9OJIZ6HBHIX%2FJX956qJY&X-Amz-Signature=e04c335f9a84f7d284164f283787c05eea73781e55ad48edab1f99d4488d47dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GWINDK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4u7s72TgOh6EuWAxgK4NpkBmdnUOoapIFKl1efV4d3AiA2X7MN1vW909yvFq81l5NurFnAMxV%2F8rvOq206SY1QwSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMnUIQ7zpQtEiq7FBJKtwDBg4eXl86GfJig2dTaNBL2STHu6V6jyMurpz3JnZlX4qOP5t8VtnzNzGwu9X92rN4gIswZNLp%2BEXs8InyPR0kYegv6HWSrk5YsKADRO31Ck5qQCGQ3XWDHyiPp2U3J5T%2FQne51HUnhh5F5v06%2FeV%2B9xPvEYRZwbFYcLsEgmmsjMcl2niL4k5QchzZtSYElXTwrnfCZMgTTE8ekLiUTOLu0eCVNUFCfIKuGYhrZ2zyf3XphTRaxxJm2SJd5DJnVQqpj6btZEBLfLf4C7hAP9xuHhMVaeOGpnjD5fHHjxZP%2BH7M%2BCgElx1mtl%2B5SQ20PgJwm37AWpbNInKLrqp7I8el7yH1tpCkLMUQJG425m%2FA32TG4FUczbBTlzEsCmsUmsFcN43C5boxeUjgwGKhEU33qPIQ47az01PavRxpXZfYy4hXsingmTBLycnorH5HBaKsxjEZnR%2FzigOO6%2BgCWxHg2HZURFQZ5eH7lb96FQmMs2aOqXwK3FMEf93r0vO30vBxpZOE%2B0c8vFEucUooNIulODFBsgPI9QCEg9L4qDxuSQg7sb1dGUQ32PIaYgR8KvkBKsTAWydHmUlkne%2FnbJy998YrbE33Y0duVCZrYC1MtMsQRvlAu2ZT6ZSGBk4wkMujwQY6pgFSAy7mqHsgOBSlDJDxHHzYPFV4xYaMnXrHwbMaIsoL82%2FZELP%2Bd4qBEqhLvKyf264qsSr32ywqv5%2BnpctVz0QMSBp7lEi%2BrYglAdRMV6X8DYHdUZ4FCVzyf2qAxejddjdvdbbPAVL0ti6sB1NAUV5GnUNSo1MvlRV1i3mnlIC20e119fvPQNKrXxRDNqytlaZnELmdygHD9OJIZ6HBHIX%2FJX956qJY&X-Amz-Signature=43be7c231a63f72663b03fc15a18f3f206de44a6b30b7e0001664d7ae6112ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GWINDK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4u7s72TgOh6EuWAxgK4NpkBmdnUOoapIFKl1efV4d3AiA2X7MN1vW909yvFq81l5NurFnAMxV%2F8rvOq206SY1QwSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMnUIQ7zpQtEiq7FBJKtwDBg4eXl86GfJig2dTaNBL2STHu6V6jyMurpz3JnZlX4qOP5t8VtnzNzGwu9X92rN4gIswZNLp%2BEXs8InyPR0kYegv6HWSrk5YsKADRO31Ck5qQCGQ3XWDHyiPp2U3J5T%2FQne51HUnhh5F5v06%2FeV%2B9xPvEYRZwbFYcLsEgmmsjMcl2niL4k5QchzZtSYElXTwrnfCZMgTTE8ekLiUTOLu0eCVNUFCfIKuGYhrZ2zyf3XphTRaxxJm2SJd5DJnVQqpj6btZEBLfLf4C7hAP9xuHhMVaeOGpnjD5fHHjxZP%2BH7M%2BCgElx1mtl%2B5SQ20PgJwm37AWpbNInKLrqp7I8el7yH1tpCkLMUQJG425m%2FA32TG4FUczbBTlzEsCmsUmsFcN43C5boxeUjgwGKhEU33qPIQ47az01PavRxpXZfYy4hXsingmTBLycnorH5HBaKsxjEZnR%2FzigOO6%2BgCWxHg2HZURFQZ5eH7lb96FQmMs2aOqXwK3FMEf93r0vO30vBxpZOE%2B0c8vFEucUooNIulODFBsgPI9QCEg9L4qDxuSQg7sb1dGUQ32PIaYgR8KvkBKsTAWydHmUlkne%2FnbJy998YrbE33Y0duVCZrYC1MtMsQRvlAu2ZT6ZSGBk4wkMujwQY6pgFSAy7mqHsgOBSlDJDxHHzYPFV4xYaMnXrHwbMaIsoL82%2FZELP%2Bd4qBEqhLvKyf264qsSr32ywqv5%2BnpctVz0QMSBp7lEi%2BrYglAdRMV6X8DYHdUZ4FCVzyf2qAxejddjdvdbbPAVL0ti6sB1NAUV5GnUNSo1MvlRV1i3mnlIC20e119fvPQNKrXxRDNqytlaZnELmdygHD9OJIZ6HBHIX%2FJX956qJY&X-Amz-Signature=1db68bb5e0da7c003a59ef3bb5bf53debb205c8aa0ef9f9c1a7719d03293cc75&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
