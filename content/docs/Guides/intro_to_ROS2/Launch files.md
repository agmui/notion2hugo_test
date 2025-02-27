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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JELALAL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDyZ5v7ECaCZApQOXefoFoHjJz3%2Fugj%2BlaqDMxzyY98KAIhANm1Wq3FnKI0s1TyJ5v2707nb3udqXm2HNSkf0caMrsZKv8DCHwQABoMNjM3NDIzMTgzODA1IgwyXf0bP0fLi41gSpYq3AOd75NBBW1B0APmJaqTnMuROaK1kx7mZkMwamiIkdhbbGYNFhI4rOfmCQXPJGW8fN8jN3ZT5cDLjMbB0TnLCWupjta1cM0s84Fe%2B%2FmMVrhpzrJDW6qIIB0DTX9fwZzbhJF2fOOfhL%2BF6To0nPU7j78nthuTSQhN9ZGFrizjoOYsjuuDuthelnEAtPuPHeGy7DZXlH4230A8Db6qmI1Hf4VHIdyMfy%2BepQykGPacW1kydJwSYf3pjeGi9MFUgzMDbHkXbDkYawIb9%2BKwSnuATwyWGnNG15e0WEk3WVNVTyy22r5jPDbhwILI6dUDiaf6JozaCAV3xi39UqouUHsc3Cq4l0%2FVdA4POWOKgTMnDEA8l8BD%2BgLPttw5v2nEeGUctK4wG%2FkawFTljBaYDMBWk45MYizdoJWXx3R33CAt%2FqUPVYD%2BdQQobrglLtzAlRG6nWEphl0ZuVZDcMVxCz14H5Xsku2CJFvYgddWgxucngWuy0wQyoj1s%2FGmMVjv6t%2F3PCWCjG%2Fup2WA3KaW5IQipYlbThDocWceAOrrQ%2BDcvRlrodKlRfMqSIPT%2F2hpSBLygq2N%2FvCdamsypdk5%2FOijOF0nHcCdYQKlpSWXJs92kYEoWJNLW4C42oJ6M1JznjD28IK%2BBjqkAeMDFMGG73Ot%2F3qkCXXhgrBkDNX7OtWLRnh9uL7ahzVEkA57MhOjRh3C5pTNPOnEG4SkAPWrZsZUKOEI2MsQbFbyriIHELdLNt1iIJhXSapYW9VPXIDaCMwMMnYtYQBhXMHI4Ij6wP9QULSwS7qa1DIzQmDytY3k7ZnLJWgNEHLjhnXv0kxz1upsISr3kyss%2BA%2FkR%2BPWGhmuUfBzkP1M6OXaC1jN&X-Amz-Signature=4f8ed0ddc0084fae3cc38f163a608d1c1d5f58d7969d76557065dfd62a098911&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JELALAL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDyZ5v7ECaCZApQOXefoFoHjJz3%2Fugj%2BlaqDMxzyY98KAIhANm1Wq3FnKI0s1TyJ5v2707nb3udqXm2HNSkf0caMrsZKv8DCHwQABoMNjM3NDIzMTgzODA1IgwyXf0bP0fLi41gSpYq3AOd75NBBW1B0APmJaqTnMuROaK1kx7mZkMwamiIkdhbbGYNFhI4rOfmCQXPJGW8fN8jN3ZT5cDLjMbB0TnLCWupjta1cM0s84Fe%2B%2FmMVrhpzrJDW6qIIB0DTX9fwZzbhJF2fOOfhL%2BF6To0nPU7j78nthuTSQhN9ZGFrizjoOYsjuuDuthelnEAtPuPHeGy7DZXlH4230A8Db6qmI1Hf4VHIdyMfy%2BepQykGPacW1kydJwSYf3pjeGi9MFUgzMDbHkXbDkYawIb9%2BKwSnuATwyWGnNG15e0WEk3WVNVTyy22r5jPDbhwILI6dUDiaf6JozaCAV3xi39UqouUHsc3Cq4l0%2FVdA4POWOKgTMnDEA8l8BD%2BgLPttw5v2nEeGUctK4wG%2FkawFTljBaYDMBWk45MYizdoJWXx3R33CAt%2FqUPVYD%2BdQQobrglLtzAlRG6nWEphl0ZuVZDcMVxCz14H5Xsku2CJFvYgddWgxucngWuy0wQyoj1s%2FGmMVjv6t%2F3PCWCjG%2Fup2WA3KaW5IQipYlbThDocWceAOrrQ%2BDcvRlrodKlRfMqSIPT%2F2hpSBLygq2N%2FvCdamsypdk5%2FOijOF0nHcCdYQKlpSWXJs92kYEoWJNLW4C42oJ6M1JznjD28IK%2BBjqkAeMDFMGG73Ot%2F3qkCXXhgrBkDNX7OtWLRnh9uL7ahzVEkA57MhOjRh3C5pTNPOnEG4SkAPWrZsZUKOEI2MsQbFbyriIHELdLNt1iIJhXSapYW9VPXIDaCMwMMnYtYQBhXMHI4Ij6wP9QULSwS7qa1DIzQmDytY3k7ZnLJWgNEHLjhnXv0kxz1upsISr3kyss%2BA%2FkR%2BPWGhmuUfBzkP1M6OXaC1jN&X-Amz-Signature=28b139c02cbdf09bcb8c4af4818ae32a347336597bdeeb87148e3ceb2648cd74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JELALAL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDyZ5v7ECaCZApQOXefoFoHjJz3%2Fugj%2BlaqDMxzyY98KAIhANm1Wq3FnKI0s1TyJ5v2707nb3udqXm2HNSkf0caMrsZKv8DCHwQABoMNjM3NDIzMTgzODA1IgwyXf0bP0fLi41gSpYq3AOd75NBBW1B0APmJaqTnMuROaK1kx7mZkMwamiIkdhbbGYNFhI4rOfmCQXPJGW8fN8jN3ZT5cDLjMbB0TnLCWupjta1cM0s84Fe%2B%2FmMVrhpzrJDW6qIIB0DTX9fwZzbhJF2fOOfhL%2BF6To0nPU7j78nthuTSQhN9ZGFrizjoOYsjuuDuthelnEAtPuPHeGy7DZXlH4230A8Db6qmI1Hf4VHIdyMfy%2BepQykGPacW1kydJwSYf3pjeGi9MFUgzMDbHkXbDkYawIb9%2BKwSnuATwyWGnNG15e0WEk3WVNVTyy22r5jPDbhwILI6dUDiaf6JozaCAV3xi39UqouUHsc3Cq4l0%2FVdA4POWOKgTMnDEA8l8BD%2BgLPttw5v2nEeGUctK4wG%2FkawFTljBaYDMBWk45MYizdoJWXx3R33CAt%2FqUPVYD%2BdQQobrglLtzAlRG6nWEphl0ZuVZDcMVxCz14H5Xsku2CJFvYgddWgxucngWuy0wQyoj1s%2FGmMVjv6t%2F3PCWCjG%2Fup2WA3KaW5IQipYlbThDocWceAOrrQ%2BDcvRlrodKlRfMqSIPT%2F2hpSBLygq2N%2FvCdamsypdk5%2FOijOF0nHcCdYQKlpSWXJs92kYEoWJNLW4C42oJ6M1JznjD28IK%2BBjqkAeMDFMGG73Ot%2F3qkCXXhgrBkDNX7OtWLRnh9uL7ahzVEkA57MhOjRh3C5pTNPOnEG4SkAPWrZsZUKOEI2MsQbFbyriIHELdLNt1iIJhXSapYW9VPXIDaCMwMMnYtYQBhXMHI4Ij6wP9QULSwS7qa1DIzQmDytY3k7ZnLJWgNEHLjhnXv0kxz1upsISr3kyss%2BA%2FkR%2BPWGhmuUfBzkP1M6OXaC1jN&X-Amz-Signature=8dfb102fb873858c268cf0d1c7ff111a4b3f5101fbe17f4a2a514c08676d874f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
