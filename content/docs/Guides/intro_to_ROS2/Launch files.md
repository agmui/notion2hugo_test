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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665TXXXBZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDIpYeAcvCIOxFxHV4yuzgu0R6Qz%2F1B3pSWyzggrbldFwIhAIKrBZpX4AjfMlpIRpLhHxZ%2FAqMXqqHKlMXj5Vnx8p%2FoKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyxr3%2FedQHlRbArHfkq3APmA%2BTf7CfS4oIGExQtkCGkxoQla6cnfIxcRzzThcS88LQgFech1dKt3yupoQOApxC9CPaWX3h9YO6oE452wPmyktvvrRuii5LShm%2FwljH7CzFLaD5LDqGLuEzWy9VCD5cPTdXWOuMYJsmbSH20wG%2BcQXQ%2FjkkmyMfKFKgDvPiXuFQqF4whnG48VMl6%2Fng6YWWAoYCOsZXptrFtorRF7TsxKapVTtJdqG1S31fgsCgXTI5nK28KlRFEKPpadSNcGIhJUFQ757H34m4qayHazip4sIRjWd9vtiORvrkkfuIPY9NmNhw%2FmR3mUTSn%2BJMEz339cag7BAl795cPh5Fba3OlTvlVqqvNO3sMQsLFt0gBWsTU3RXC3UZ%2Fynq86rwVpMx5%2FVIwRUt6exUe7mURc6QM4%2BU8HKPjyRAYPMUdxkCNsmvKDhqQsT9UdcVRofCyoUMNKxXSF%2FKhzaUbO%2FwdNeXK%2FRKpC11dyz06LUbgUz1O6R4TduopRRQjlWvVot9Vo4mFRawW4%2BIO6hUzVzqcPKMUfqQSngndEvQNacZWJWPDh95COG00%2FvF15fCcNiBmlwqfpxbseZTAmirH5%2Fpgr8jvW%2FJvGkPHZJUSX6GpUXJh2BXnb7gkSoF0nJt%2FvTDMiru%2BBjqkAW5ShpgbKHGUugGqHMZm6TUnFx5jwWkkAfMoYwTqZJWM7kjm8J6PX9ZWjBhnxcvfcf7GU5J%2FvOf5aabtWADZ4ZV%2BY6vPLXZp0272IjELyMtjzYwoGyqObMrAXgqQKn%2F5LZd2eGpT09iZH3%2B1D%2FqnllAEwpkb%2BXByLhSd3modaFIBIiO5419GRPAdbvYGEZ1xAIUcnCorsWXa6Mp1oAIobp6hTbFb&X-Amz-Signature=faa33b705a62f31fd3cdc03b129c95b9fa2833423fc8a9843cdb3047395042d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665TXXXBZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDIpYeAcvCIOxFxHV4yuzgu0R6Qz%2F1B3pSWyzggrbldFwIhAIKrBZpX4AjfMlpIRpLhHxZ%2FAqMXqqHKlMXj5Vnx8p%2FoKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyxr3%2FedQHlRbArHfkq3APmA%2BTf7CfS4oIGExQtkCGkxoQla6cnfIxcRzzThcS88LQgFech1dKt3yupoQOApxC9CPaWX3h9YO6oE452wPmyktvvrRuii5LShm%2FwljH7CzFLaD5LDqGLuEzWy9VCD5cPTdXWOuMYJsmbSH20wG%2BcQXQ%2FjkkmyMfKFKgDvPiXuFQqF4whnG48VMl6%2Fng6YWWAoYCOsZXptrFtorRF7TsxKapVTtJdqG1S31fgsCgXTI5nK28KlRFEKPpadSNcGIhJUFQ757H34m4qayHazip4sIRjWd9vtiORvrkkfuIPY9NmNhw%2FmR3mUTSn%2BJMEz339cag7BAl795cPh5Fba3OlTvlVqqvNO3sMQsLFt0gBWsTU3RXC3UZ%2Fynq86rwVpMx5%2FVIwRUt6exUe7mURc6QM4%2BU8HKPjyRAYPMUdxkCNsmvKDhqQsT9UdcVRofCyoUMNKxXSF%2FKhzaUbO%2FwdNeXK%2FRKpC11dyz06LUbgUz1O6R4TduopRRQjlWvVot9Vo4mFRawW4%2BIO6hUzVzqcPKMUfqQSngndEvQNacZWJWPDh95COG00%2FvF15fCcNiBmlwqfpxbseZTAmirH5%2Fpgr8jvW%2FJvGkPHZJUSX6GpUXJh2BXnb7gkSoF0nJt%2FvTDMiru%2BBjqkAW5ShpgbKHGUugGqHMZm6TUnFx5jwWkkAfMoYwTqZJWM7kjm8J6PX9ZWjBhnxcvfcf7GU5J%2FvOf5aabtWADZ4ZV%2BY6vPLXZp0272IjELyMtjzYwoGyqObMrAXgqQKn%2F5LZd2eGpT09iZH3%2B1D%2FqnllAEwpkb%2BXByLhSd3modaFIBIiO5419GRPAdbvYGEZ1xAIUcnCorsWXa6Mp1oAIobp6hTbFb&X-Amz-Signature=9000331aacb154d92e3331708e7c65559cf6da7d9c5b2233908c1a0cf0ed306e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665TXXXBZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDIpYeAcvCIOxFxHV4yuzgu0R6Qz%2F1B3pSWyzggrbldFwIhAIKrBZpX4AjfMlpIRpLhHxZ%2FAqMXqqHKlMXj5Vnx8p%2FoKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyxr3%2FedQHlRbArHfkq3APmA%2BTf7CfS4oIGExQtkCGkxoQla6cnfIxcRzzThcS88LQgFech1dKt3yupoQOApxC9CPaWX3h9YO6oE452wPmyktvvrRuii5LShm%2FwljH7CzFLaD5LDqGLuEzWy9VCD5cPTdXWOuMYJsmbSH20wG%2BcQXQ%2FjkkmyMfKFKgDvPiXuFQqF4whnG48VMl6%2Fng6YWWAoYCOsZXptrFtorRF7TsxKapVTtJdqG1S31fgsCgXTI5nK28KlRFEKPpadSNcGIhJUFQ757H34m4qayHazip4sIRjWd9vtiORvrkkfuIPY9NmNhw%2FmR3mUTSn%2BJMEz339cag7BAl795cPh5Fba3OlTvlVqqvNO3sMQsLFt0gBWsTU3RXC3UZ%2Fynq86rwVpMx5%2FVIwRUt6exUe7mURc6QM4%2BU8HKPjyRAYPMUdxkCNsmvKDhqQsT9UdcVRofCyoUMNKxXSF%2FKhzaUbO%2FwdNeXK%2FRKpC11dyz06LUbgUz1O6R4TduopRRQjlWvVot9Vo4mFRawW4%2BIO6hUzVzqcPKMUfqQSngndEvQNacZWJWPDh95COG00%2FvF15fCcNiBmlwqfpxbseZTAmirH5%2Fpgr8jvW%2FJvGkPHZJUSX6GpUXJh2BXnb7gkSoF0nJt%2FvTDMiru%2BBjqkAW5ShpgbKHGUugGqHMZm6TUnFx5jwWkkAfMoYwTqZJWM7kjm8J6PX9ZWjBhnxcvfcf7GU5J%2FvOf5aabtWADZ4ZV%2BY6vPLXZp0272IjELyMtjzYwoGyqObMrAXgqQKn%2F5LZd2eGpT09iZH3%2B1D%2FqnllAEwpkb%2BXByLhSd3modaFIBIiO5419GRPAdbvYGEZ1xAIUcnCorsWXa6Mp1oAIobp6hTbFb&X-Amz-Signature=4cb14af6b2066bb06879fee69c05b32f710d7c1281f817d49b4956bd6d827c26&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
