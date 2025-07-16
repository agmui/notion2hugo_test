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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWPSRDG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDuZ0UCaFnWQcIXvQ9jFiQzH7nIrJcEbZ3iJ04t5GjyTwIhAIy5Nvji6gRl4jLYPCAxefP%2Bym2letPdkCKNjbuE8HlPKv8DCGQQABoMNjM3NDIzMTgzODA1IgzD9KEsMjx7PbY6SWoq3APbo7ETgIu%2F9WgVCrrf2YWHXbWg8500%2BlI3mJaogGxbiYgTjwqWmKpLUBpwKjt679m0DNSDx6DQPwo2ZC3nYxVRa5%2FCD5QfwIlOtjb7ZqxBNF%2BeYOj%2BHD2NguwNt4wLJhSHaIIg83DLgI%2F%2FoLB%2Fi9qzIk2a0DBYOJkOsJy8JrnzDhkHuVtIRNc1G5tIlgkqDBxeTGu98SjzAXQol5eofvnHEWTxCyQbIQOd37dVtznfXKzD7h%2BRySgZJor%2B0ZveRBV7h6d2%2BYoF2ruRgMV1M8jcIHh4sZrJ8Kt8BYzsGD28Y4DcX4nSJcEg1hNaNWn2Ael2dCP0PCMXKB7DbEViBSHSvV4u%2BS4tzv26PdAxVsmtMuoWdTbjDv%2BhydCNw%2FlqG6Lv3DPJkWB1uRSPHGPLf1tvpigiQg0q642n23n0Byz9hawsUvJiGAKVAJtblVmVKzYUdNqralBOS1JXOZQ9Gmn9XaHsNSgMiGtoyIbdFXBLk%2BfMxdkUZo3sxJJO0mI%2BWe314BdGTC%2Fk9uIb1ht8R%2BG3iq3zOXO7Rns2GuIJsX97CV%2FrtgFPiLgzsGgdADTbw13h7Le5%2BPqDau4I7qK8C4Hrk%2BeUqkj4%2FaXB9MIguJTJuf0N2hunz%2BtAxkcy6jCY4N%2FDBjqkAcS2ARMlFUPc23kcaKCv2SyRPl4G0mS%2Bx9KWJIJgEwt%2F8VtFbAtEGHFE3A1F8nmTYfWJfQiRu8mm4AySQqt4RW8%2FWqPSWeMDxhIcX5XN8uNXga5JWX2cWL8p3lHvsHzryk1uMsoHSVjOlGcre1cpf0FL7BNw1%2FKfXtoT2X2M0WRgGeZq3UvrrdfOOGreUy8WTLhJdNwGDmyW1ccGeKFCnzxAIZqS&X-Amz-Signature=8843e59358ca97a7ef29fce580b78621aa5137d72bc7d16bd482f8536dee52d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWPSRDG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDuZ0UCaFnWQcIXvQ9jFiQzH7nIrJcEbZ3iJ04t5GjyTwIhAIy5Nvji6gRl4jLYPCAxefP%2Bym2letPdkCKNjbuE8HlPKv8DCGQQABoMNjM3NDIzMTgzODA1IgzD9KEsMjx7PbY6SWoq3APbo7ETgIu%2F9WgVCrrf2YWHXbWg8500%2BlI3mJaogGxbiYgTjwqWmKpLUBpwKjt679m0DNSDx6DQPwo2ZC3nYxVRa5%2FCD5QfwIlOtjb7ZqxBNF%2BeYOj%2BHD2NguwNt4wLJhSHaIIg83DLgI%2F%2FoLB%2Fi9qzIk2a0DBYOJkOsJy8JrnzDhkHuVtIRNc1G5tIlgkqDBxeTGu98SjzAXQol5eofvnHEWTxCyQbIQOd37dVtznfXKzD7h%2BRySgZJor%2B0ZveRBV7h6d2%2BYoF2ruRgMV1M8jcIHh4sZrJ8Kt8BYzsGD28Y4DcX4nSJcEg1hNaNWn2Ael2dCP0PCMXKB7DbEViBSHSvV4u%2BS4tzv26PdAxVsmtMuoWdTbjDv%2BhydCNw%2FlqG6Lv3DPJkWB1uRSPHGPLf1tvpigiQg0q642n23n0Byz9hawsUvJiGAKVAJtblVmVKzYUdNqralBOS1JXOZQ9Gmn9XaHsNSgMiGtoyIbdFXBLk%2BfMxdkUZo3sxJJO0mI%2BWe314BdGTC%2Fk9uIb1ht8R%2BG3iq3zOXO7Rns2GuIJsX97CV%2FrtgFPiLgzsGgdADTbw13h7Le5%2BPqDau4I7qK8C4Hrk%2BeUqkj4%2FaXB9MIguJTJuf0N2hunz%2BtAxkcy6jCY4N%2FDBjqkAcS2ARMlFUPc23kcaKCv2SyRPl4G0mS%2Bx9KWJIJgEwt%2F8VtFbAtEGHFE3A1F8nmTYfWJfQiRu8mm4AySQqt4RW8%2FWqPSWeMDxhIcX5XN8uNXga5JWX2cWL8p3lHvsHzryk1uMsoHSVjOlGcre1cpf0FL7BNw1%2FKfXtoT2X2M0WRgGeZq3UvrrdfOOGreUy8WTLhJdNwGDmyW1ccGeKFCnzxAIZqS&X-Amz-Signature=fe0f391d483e2880f5f8dea2d5f8a6b385b27025e5a51f2c19c853cf269ab558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWPSRDG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDuZ0UCaFnWQcIXvQ9jFiQzH7nIrJcEbZ3iJ04t5GjyTwIhAIy5Nvji6gRl4jLYPCAxefP%2Bym2letPdkCKNjbuE8HlPKv8DCGQQABoMNjM3NDIzMTgzODA1IgzD9KEsMjx7PbY6SWoq3APbo7ETgIu%2F9WgVCrrf2YWHXbWg8500%2BlI3mJaogGxbiYgTjwqWmKpLUBpwKjt679m0DNSDx6DQPwo2ZC3nYxVRa5%2FCD5QfwIlOtjb7ZqxBNF%2BeYOj%2BHD2NguwNt4wLJhSHaIIg83DLgI%2F%2FoLB%2Fi9qzIk2a0DBYOJkOsJy8JrnzDhkHuVtIRNc1G5tIlgkqDBxeTGu98SjzAXQol5eofvnHEWTxCyQbIQOd37dVtznfXKzD7h%2BRySgZJor%2B0ZveRBV7h6d2%2BYoF2ruRgMV1M8jcIHh4sZrJ8Kt8BYzsGD28Y4DcX4nSJcEg1hNaNWn2Ael2dCP0PCMXKB7DbEViBSHSvV4u%2BS4tzv26PdAxVsmtMuoWdTbjDv%2BhydCNw%2FlqG6Lv3DPJkWB1uRSPHGPLf1tvpigiQg0q642n23n0Byz9hawsUvJiGAKVAJtblVmVKzYUdNqralBOS1JXOZQ9Gmn9XaHsNSgMiGtoyIbdFXBLk%2BfMxdkUZo3sxJJO0mI%2BWe314BdGTC%2Fk9uIb1ht8R%2BG3iq3zOXO7Rns2GuIJsX97CV%2FrtgFPiLgzsGgdADTbw13h7Le5%2BPqDau4I7qK8C4Hrk%2BeUqkj4%2FaXB9MIguJTJuf0N2hunz%2BtAxkcy6jCY4N%2FDBjqkAcS2ARMlFUPc23kcaKCv2SyRPl4G0mS%2Bx9KWJIJgEwt%2F8VtFbAtEGHFE3A1F8nmTYfWJfQiRu8mm4AySQqt4RW8%2FWqPSWeMDxhIcX5XN8uNXga5JWX2cWL8p3lHvsHzryk1uMsoHSVjOlGcre1cpf0FL7BNw1%2FKfXtoT2X2M0WRgGeZq3UvrrdfOOGreUy8WTLhJdNwGDmyW1ccGeKFCnzxAIZqS&X-Amz-Signature=5c3dbb3acc30ddbf22ce0df9357c7a511b2193108a377da7b36137792af369d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
