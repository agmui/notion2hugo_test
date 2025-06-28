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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DFVAQW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBa00yTGcuwcTTC1rrYE7hE3ArPtLOzuxSBvLw14k19UAiBK9wSKsBWPREic%2Bq8mUU%2BQkBJe%2FWZsW0r83DmzeVvGJiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIpPQvv4ZYFKtevrKtwDgeBQ44a6xH7pSBlnP5UR4uTpgWjcpRhFxoGHRCwIYSe4pJmZ67AqKsjuMHuYB9lSK1qbUxnzeQnZwzQ5BODAYJRcnRVOW5Y1gJ5T01DNqD64mRzkYoA5OjYJdxgtQ7NoePiYhTI7zTaNtMC8wpkLmXDbVT9dGlewyH0vJc9xzbSeUycL8qsXGx311B%2Fmu3OdfU8LOvvs5hyBnZrsoZfpIMQGad0hwQtY5flSToGzuRKU3Rvq8pKrhojYuJKEDqszZTsEbgDkspNjDpHzgdqHlRCvkJigCABrBSKcNDuLGOhzKKR6N1H72bCY39177KtrkLf4Mq2kEB42LdVmwKG4qzw2cucrNduHCdmpiqbH6qw4iRISIRu1HMu0WvbD%2Bm6Y55H4VaEGRgtwKYhmBubW%2BkH3fDBKuNGChGeGTVXThH4E7gNSOgWxKRFq4lPw50QdHQx0nGmElGepU1D9r4sgR8SYw4wj8nx6dHqJ8uo7wykQkBX8tswuuPz%2BsvWGYnXhl1I2u%2Balt29jnzZfcp0g8ZgCupZxqi8G2x0%2F4E5XqtWMyS9qtRYWQi8kOfOHw%2BczDQmTcfIyDpn4jN9FqsB2MPa%2F4VSzV6c7irZIHdyBbeImrPjjJfyBEqptuskwkNL9wgY6pgEz1o7VL2PH%2BBwuuJw%2FLSwQy0YAiaazv%2BaOmW3ul0U%2BjRAiDooNDkSBF0eePCDW%2FDybog5QQ7NzzPMZAxiEEZQZZTP1mfmFxGPmaNDcDki%2BH6UpYsTA7DVlYw2UBUI%2FQIV9FhP3fB0BgCkYenRnhR%2FjB2P3yA1Ud14fgxxIEnY%2B0h2UgHP6RsVWZgeSaZBTEoyEFEOHsFMfEhXSClsa1jPzDr8%2FmsLO&X-Amz-Signature=f3140a82f93ca09a0f69a5016144fd1119b2c24ded2979acf022da8b5c66d003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DFVAQW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBa00yTGcuwcTTC1rrYE7hE3ArPtLOzuxSBvLw14k19UAiBK9wSKsBWPREic%2Bq8mUU%2BQkBJe%2FWZsW0r83DmzeVvGJiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIpPQvv4ZYFKtevrKtwDgeBQ44a6xH7pSBlnP5UR4uTpgWjcpRhFxoGHRCwIYSe4pJmZ67AqKsjuMHuYB9lSK1qbUxnzeQnZwzQ5BODAYJRcnRVOW5Y1gJ5T01DNqD64mRzkYoA5OjYJdxgtQ7NoePiYhTI7zTaNtMC8wpkLmXDbVT9dGlewyH0vJc9xzbSeUycL8qsXGx311B%2Fmu3OdfU8LOvvs5hyBnZrsoZfpIMQGad0hwQtY5flSToGzuRKU3Rvq8pKrhojYuJKEDqszZTsEbgDkspNjDpHzgdqHlRCvkJigCABrBSKcNDuLGOhzKKR6N1H72bCY39177KtrkLf4Mq2kEB42LdVmwKG4qzw2cucrNduHCdmpiqbH6qw4iRISIRu1HMu0WvbD%2Bm6Y55H4VaEGRgtwKYhmBubW%2BkH3fDBKuNGChGeGTVXThH4E7gNSOgWxKRFq4lPw50QdHQx0nGmElGepU1D9r4sgR8SYw4wj8nx6dHqJ8uo7wykQkBX8tswuuPz%2BsvWGYnXhl1I2u%2Balt29jnzZfcp0g8ZgCupZxqi8G2x0%2F4E5XqtWMyS9qtRYWQi8kOfOHw%2BczDQmTcfIyDpn4jN9FqsB2MPa%2F4VSzV6c7irZIHdyBbeImrPjjJfyBEqptuskwkNL9wgY6pgEz1o7VL2PH%2BBwuuJw%2FLSwQy0YAiaazv%2BaOmW3ul0U%2BjRAiDooNDkSBF0eePCDW%2FDybog5QQ7NzzPMZAxiEEZQZZTP1mfmFxGPmaNDcDki%2BH6UpYsTA7DVlYw2UBUI%2FQIV9FhP3fB0BgCkYenRnhR%2FjB2P3yA1Ud14fgxxIEnY%2B0h2UgHP6RsVWZgeSaZBTEoyEFEOHsFMfEhXSClsa1jPzDr8%2FmsLO&X-Amz-Signature=c524c0ce0884c64d1d5f0f2c3f0c52682188769f2598ed675f29fbb071202e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DFVAQW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBa00yTGcuwcTTC1rrYE7hE3ArPtLOzuxSBvLw14k19UAiBK9wSKsBWPREic%2Bq8mUU%2BQkBJe%2FWZsW0r83DmzeVvGJiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIpPQvv4ZYFKtevrKtwDgeBQ44a6xH7pSBlnP5UR4uTpgWjcpRhFxoGHRCwIYSe4pJmZ67AqKsjuMHuYB9lSK1qbUxnzeQnZwzQ5BODAYJRcnRVOW5Y1gJ5T01DNqD64mRzkYoA5OjYJdxgtQ7NoePiYhTI7zTaNtMC8wpkLmXDbVT9dGlewyH0vJc9xzbSeUycL8qsXGx311B%2Fmu3OdfU8LOvvs5hyBnZrsoZfpIMQGad0hwQtY5flSToGzuRKU3Rvq8pKrhojYuJKEDqszZTsEbgDkspNjDpHzgdqHlRCvkJigCABrBSKcNDuLGOhzKKR6N1H72bCY39177KtrkLf4Mq2kEB42LdVmwKG4qzw2cucrNduHCdmpiqbH6qw4iRISIRu1HMu0WvbD%2Bm6Y55H4VaEGRgtwKYhmBubW%2BkH3fDBKuNGChGeGTVXThH4E7gNSOgWxKRFq4lPw50QdHQx0nGmElGepU1D9r4sgR8SYw4wj8nx6dHqJ8uo7wykQkBX8tswuuPz%2BsvWGYnXhl1I2u%2Balt29jnzZfcp0g8ZgCupZxqi8G2x0%2F4E5XqtWMyS9qtRYWQi8kOfOHw%2BczDQmTcfIyDpn4jN9FqsB2MPa%2F4VSzV6c7irZIHdyBbeImrPjjJfyBEqptuskwkNL9wgY6pgEz1o7VL2PH%2BBwuuJw%2FLSwQy0YAiaazv%2BaOmW3ul0U%2BjRAiDooNDkSBF0eePCDW%2FDybog5QQ7NzzPMZAxiEEZQZZTP1mfmFxGPmaNDcDki%2BH6UpYsTA7DVlYw2UBUI%2FQIV9FhP3fB0BgCkYenRnhR%2FjB2P3yA1Ud14fgxxIEnY%2B0h2UgHP6RsVWZgeSaZBTEoyEFEOHsFMfEhXSClsa1jPzDr8%2FmsLO&X-Amz-Signature=408e1bef29fad4c679b5d33350b839aff3491f5b77ae26ae653b8085f968534e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
