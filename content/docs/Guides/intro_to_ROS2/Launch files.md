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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJCWBNR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZcEM9Y00Kv6ubugmzH7cmX3T2fc2xEQOGOVbMqtg16AiBTbsojEypebdUtnu5Uxm2l%2BD%2B1R%2FG3lSEU55vs2yF87CqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVokk9HdAc9qHZrlYKtwDsKCdG4%2FUUYKk6PGVo0Bpd7AhzBLsMi2ELeVXWz6zkQ%2BjoGnPgI%2Fvlm7fcco%2FAuGEGbR3jK2veXnnGHCKeDHsXY9k%2BW%2FBj%2F1EpyfRTCaAXSjAHBs6KgLaYntoxK8DxCGvb1LdQBhbK0GHsQsbe%2Fp9WV7aCbWCOtDWY8t4GClDsYXBsrLjEHtBe%2F51yTVhK03qeg5XR0JxfmdjzzG%2Bbix8GsU1JOSuxJs9nD1hyU%2BOelj5sLWeW25zwUih46W%2FlLKHT3VmSlJ%2F19IMrtM22XA%2B6IcK970GHxNUrGeEX3%2FLKgTeap1hgg5E%2FslrxISaMPBRjBFYSSoRtF3qL0A%2FhTC48ATv7uC0U9ffJorndpB%2FmLwNDUIcroKYjfIXR6AHYGt0b5Jql%2B%2BpGyl3qQ9fXAMKewv%2FA2kY0kPKf7KHgAnXAa%2Fih8jX8G5VD98Fmk77XPStqSJLTBBS0jx7KoilNFphlUebjh9KIupmDsq2Ozg4wWYtQByiml8KVEbNifdJyG4kXny%2BJED%2F%2B0HOrhDZ9BTl9PE4XRJrmyYQMcc5fZIDiAZ0SlneJa4vFDS2%2B8u0qkkvCeyGuRmo5zVmRLMC4q1GSzRQp%2Fm%2B81CXUPZYAUBT5ESJpg9QQJc0elwgVxEwtYDzwQY6pgHsdcWJRQiPr22KPT2Kbu4PZjfXVSsKIjN8HcyB1SMx3VqywaUQV4VfDqxV5mOS2BlS6178iRU225wm3AUaqkiXcwduhlK3WrzeupS3M4YxKzdAKhF6FQMg950Bn8jbNHwTo0OHFMVveM4ZoWsho09nSgmr1QvVeAQxTRuCR0hDOgiqO1iJc8H8ticinI8VWf1EemkSENwNEjeg11oL%2B1EjiIRvdrV%2B&X-Amz-Signature=002c13a5934d6b64045a67767cb117523061201af4ce2b5e95f6c9eb1a9ac9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJCWBNR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZcEM9Y00Kv6ubugmzH7cmX3T2fc2xEQOGOVbMqtg16AiBTbsojEypebdUtnu5Uxm2l%2BD%2B1R%2FG3lSEU55vs2yF87CqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVokk9HdAc9qHZrlYKtwDsKCdG4%2FUUYKk6PGVo0Bpd7AhzBLsMi2ELeVXWz6zkQ%2BjoGnPgI%2Fvlm7fcco%2FAuGEGbR3jK2veXnnGHCKeDHsXY9k%2BW%2FBj%2F1EpyfRTCaAXSjAHBs6KgLaYntoxK8DxCGvb1LdQBhbK0GHsQsbe%2Fp9WV7aCbWCOtDWY8t4GClDsYXBsrLjEHtBe%2F51yTVhK03qeg5XR0JxfmdjzzG%2Bbix8GsU1JOSuxJs9nD1hyU%2BOelj5sLWeW25zwUih46W%2FlLKHT3VmSlJ%2F19IMrtM22XA%2B6IcK970GHxNUrGeEX3%2FLKgTeap1hgg5E%2FslrxISaMPBRjBFYSSoRtF3qL0A%2FhTC48ATv7uC0U9ffJorndpB%2FmLwNDUIcroKYjfIXR6AHYGt0b5Jql%2B%2BpGyl3qQ9fXAMKewv%2FA2kY0kPKf7KHgAnXAa%2Fih8jX8G5VD98Fmk77XPStqSJLTBBS0jx7KoilNFphlUebjh9KIupmDsq2Ozg4wWYtQByiml8KVEbNifdJyG4kXny%2BJED%2F%2B0HOrhDZ9BTl9PE4XRJrmyYQMcc5fZIDiAZ0SlneJa4vFDS2%2B8u0qkkvCeyGuRmo5zVmRLMC4q1GSzRQp%2Fm%2B81CXUPZYAUBT5ESJpg9QQJc0elwgVxEwtYDzwQY6pgHsdcWJRQiPr22KPT2Kbu4PZjfXVSsKIjN8HcyB1SMx3VqywaUQV4VfDqxV5mOS2BlS6178iRU225wm3AUaqkiXcwduhlK3WrzeupS3M4YxKzdAKhF6FQMg950Bn8jbNHwTo0OHFMVveM4ZoWsho09nSgmr1QvVeAQxTRuCR0hDOgiqO1iJc8H8ticinI8VWf1EemkSENwNEjeg11oL%2B1EjiIRvdrV%2B&X-Amz-Signature=68ac7ca5f7e9cedfb6ad253fa606c17d68bf9bac049a6db313fb3a7815e7d75d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJCWBNR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZcEM9Y00Kv6ubugmzH7cmX3T2fc2xEQOGOVbMqtg16AiBTbsojEypebdUtnu5Uxm2l%2BD%2B1R%2FG3lSEU55vs2yF87CqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVokk9HdAc9qHZrlYKtwDsKCdG4%2FUUYKk6PGVo0Bpd7AhzBLsMi2ELeVXWz6zkQ%2BjoGnPgI%2Fvlm7fcco%2FAuGEGbR3jK2veXnnGHCKeDHsXY9k%2BW%2FBj%2F1EpyfRTCaAXSjAHBs6KgLaYntoxK8DxCGvb1LdQBhbK0GHsQsbe%2Fp9WV7aCbWCOtDWY8t4GClDsYXBsrLjEHtBe%2F51yTVhK03qeg5XR0JxfmdjzzG%2Bbix8GsU1JOSuxJs9nD1hyU%2BOelj5sLWeW25zwUih46W%2FlLKHT3VmSlJ%2F19IMrtM22XA%2B6IcK970GHxNUrGeEX3%2FLKgTeap1hgg5E%2FslrxISaMPBRjBFYSSoRtF3qL0A%2FhTC48ATv7uC0U9ffJorndpB%2FmLwNDUIcroKYjfIXR6AHYGt0b5Jql%2B%2BpGyl3qQ9fXAMKewv%2FA2kY0kPKf7KHgAnXAa%2Fih8jX8G5VD98Fmk77XPStqSJLTBBS0jx7KoilNFphlUebjh9KIupmDsq2Ozg4wWYtQByiml8KVEbNifdJyG4kXny%2BJED%2F%2B0HOrhDZ9BTl9PE4XRJrmyYQMcc5fZIDiAZ0SlneJa4vFDS2%2B8u0qkkvCeyGuRmo5zVmRLMC4q1GSzRQp%2Fm%2B81CXUPZYAUBT5ESJpg9QQJc0elwgVxEwtYDzwQY6pgHsdcWJRQiPr22KPT2Kbu4PZjfXVSsKIjN8HcyB1SMx3VqywaUQV4VfDqxV5mOS2BlS6178iRU225wm3AUaqkiXcwduhlK3WrzeupS3M4YxKzdAKhF6FQMg950Bn8jbNHwTo0OHFMVveM4ZoWsho09nSgmr1QvVeAQxTRuCR0hDOgiqO1iJc8H8ticinI8VWf1EemkSENwNEjeg11oL%2B1EjiIRvdrV%2B&X-Amz-Signature=890d3c93d53518c112d01d1a63ab0b03ec5063b6e13e6c267961587878a4cdc1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
