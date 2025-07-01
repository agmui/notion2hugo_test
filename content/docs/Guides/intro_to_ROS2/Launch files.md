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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWYLUVW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkGUQ2BD%2FVPEL%2FCeVqgnbFbv%2BAq6lLWnEZBnZnFTzeYAiAcNtmLvPz3nLUGhiWbWeTL2b5%2FCqDIcNh6ojG2YPp2CyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhq4m8PJqlrd%2FQ3hKtwDq%2BzVEwzMFHfe1yJB7PmZh1RtoJ9NEPKXUDlIeKisSyO1FeQd%2FsgUOIjaPrbjwjVAKjn66bGLHTuMpxBb8OGDKrkIC5pcT%2Fyi%2BEda9InChggWn%2B7rcwL8Lo6AaWuimHDRQ89AOIyvEOWrMbVolpjvQdh80vQBiF1drhiBOFWDTcikJ1EajEYgfC935oanFtI9NsvZTlSxLKtDJ15vQhkM%2FWx%2BBoUnu7NNoqxwoZeYwcVH7c4Fkg64d6%2F5esNoa11ClGIQ%2BQqT2sN1%2FGErbY%2Bk8QkYdOmcW%2FiS%2BFkYLHvq9B%2B4aa1S4M46e%2Fs6N8M2kJqjLVJq%2BqwAaOJnPIMYbgt8TuWJZbaEM4cFNK5hIE3EBEBlOFjj1woQPQllLCpoLtMNN4reGLtAZTwpr%2BzuZLNAeMujpAtE3%2F1QW%2F0DrvT%2BtXJgajAeWocDgrbkw944u3t%2Ftg6neLVDoou3gazPNN37dSByuwBfChO6m5c8WGPkEoWKVMwxRCh0l8tohK8nxs8fxhKnBZK9ONW6555Z1ncgKNVjxP8lgbV%2BNdvJy1FIwmi7KotLz4guUIMQ4C8BVQQ8oxb3jVqoKx1S1HF9XZoyAPSTzauP3MyUuOpYas%2B1uGxHNvZE825Y334BcrMwo4eQwwY6pgENjQjGa5dsWTqy6vdzd4r1Sz40ecckadhpePKCE16MjmJuIKF%2Bg8USJG4Qc3uUUNbfnAr9GyGfTCVpcV8qa3eDop%2FEylI28iIBSsgWwzUCk9CGmopk9bEZnmXYiLDq0OiIlvGHgiAUAy9UwmGsb%2BxIPI3od24qiGnvzl69484h2lUgnJkerkAKwVT%2BJHCta%2FueY10MlHuhSZ4KebcshZ05e%2Fu%2B9smt&X-Amz-Signature=4dadd277dd435459a2fb3cabbb2b1dd9aa60368385d6070a71a475493f9a4345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWYLUVW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkGUQ2BD%2FVPEL%2FCeVqgnbFbv%2BAq6lLWnEZBnZnFTzeYAiAcNtmLvPz3nLUGhiWbWeTL2b5%2FCqDIcNh6ojG2YPp2CyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhq4m8PJqlrd%2FQ3hKtwDq%2BzVEwzMFHfe1yJB7PmZh1RtoJ9NEPKXUDlIeKisSyO1FeQd%2FsgUOIjaPrbjwjVAKjn66bGLHTuMpxBb8OGDKrkIC5pcT%2Fyi%2BEda9InChggWn%2B7rcwL8Lo6AaWuimHDRQ89AOIyvEOWrMbVolpjvQdh80vQBiF1drhiBOFWDTcikJ1EajEYgfC935oanFtI9NsvZTlSxLKtDJ15vQhkM%2FWx%2BBoUnu7NNoqxwoZeYwcVH7c4Fkg64d6%2F5esNoa11ClGIQ%2BQqT2sN1%2FGErbY%2Bk8QkYdOmcW%2FiS%2BFkYLHvq9B%2B4aa1S4M46e%2Fs6N8M2kJqjLVJq%2BqwAaOJnPIMYbgt8TuWJZbaEM4cFNK5hIE3EBEBlOFjj1woQPQllLCpoLtMNN4reGLtAZTwpr%2BzuZLNAeMujpAtE3%2F1QW%2F0DrvT%2BtXJgajAeWocDgrbkw944u3t%2Ftg6neLVDoou3gazPNN37dSByuwBfChO6m5c8WGPkEoWKVMwxRCh0l8tohK8nxs8fxhKnBZK9ONW6555Z1ncgKNVjxP8lgbV%2BNdvJy1FIwmi7KotLz4guUIMQ4C8BVQQ8oxb3jVqoKx1S1HF9XZoyAPSTzauP3MyUuOpYas%2B1uGxHNvZE825Y334BcrMwo4eQwwY6pgENjQjGa5dsWTqy6vdzd4r1Sz40ecckadhpePKCE16MjmJuIKF%2Bg8USJG4Qc3uUUNbfnAr9GyGfTCVpcV8qa3eDop%2FEylI28iIBSsgWwzUCk9CGmopk9bEZnmXYiLDq0OiIlvGHgiAUAy9UwmGsb%2BxIPI3od24qiGnvzl69484h2lUgnJkerkAKwVT%2BJHCta%2FueY10MlHuhSZ4KebcshZ05e%2Fu%2B9smt&X-Amz-Signature=90d02e2f6f28f3330885ce9851b38db61dbb60d8a076b0279ebe9fd87a6599d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWYLUVW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T170915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkGUQ2BD%2FVPEL%2FCeVqgnbFbv%2BAq6lLWnEZBnZnFTzeYAiAcNtmLvPz3nLUGhiWbWeTL2b5%2FCqDIcNh6ojG2YPp2CyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzhq4m8PJqlrd%2FQ3hKtwDq%2BzVEwzMFHfe1yJB7PmZh1RtoJ9NEPKXUDlIeKisSyO1FeQd%2FsgUOIjaPrbjwjVAKjn66bGLHTuMpxBb8OGDKrkIC5pcT%2Fyi%2BEda9InChggWn%2B7rcwL8Lo6AaWuimHDRQ89AOIyvEOWrMbVolpjvQdh80vQBiF1drhiBOFWDTcikJ1EajEYgfC935oanFtI9NsvZTlSxLKtDJ15vQhkM%2FWx%2BBoUnu7NNoqxwoZeYwcVH7c4Fkg64d6%2F5esNoa11ClGIQ%2BQqT2sN1%2FGErbY%2Bk8QkYdOmcW%2FiS%2BFkYLHvq9B%2B4aa1S4M46e%2Fs6N8M2kJqjLVJq%2BqwAaOJnPIMYbgt8TuWJZbaEM4cFNK5hIE3EBEBlOFjj1woQPQllLCpoLtMNN4reGLtAZTwpr%2BzuZLNAeMujpAtE3%2F1QW%2F0DrvT%2BtXJgajAeWocDgrbkw944u3t%2Ftg6neLVDoou3gazPNN37dSByuwBfChO6m5c8WGPkEoWKVMwxRCh0l8tohK8nxs8fxhKnBZK9ONW6555Z1ncgKNVjxP8lgbV%2BNdvJy1FIwmi7KotLz4guUIMQ4C8BVQQ8oxb3jVqoKx1S1HF9XZoyAPSTzauP3MyUuOpYas%2B1uGxHNvZE825Y334BcrMwo4eQwwY6pgENjQjGa5dsWTqy6vdzd4r1Sz40ecckadhpePKCE16MjmJuIKF%2Bg8USJG4Qc3uUUNbfnAr9GyGfTCVpcV8qa3eDop%2FEylI28iIBSsgWwzUCk9CGmopk9bEZnmXYiLDq0OiIlvGHgiAUAy9UwmGsb%2BxIPI3od24qiGnvzl69484h2lUgnJkerkAKwVT%2BJHCta%2FueY10MlHuhSZ4KebcshZ05e%2Fu%2B9smt&X-Amz-Signature=683004e729ab12af84a023e8ac682ba2b0648c7793dc5cca0d6a5243b0d907b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
