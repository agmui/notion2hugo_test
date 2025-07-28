---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWW5RDC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDpRglCkaqav%2FqvmvBsFodvcNrg4Od%2BsrDE0w51iIKWbwIgMV4MnV2%2BZikEj%2FvQO%2FSAvNcAew9M2H%2F7oSRd8rvBE1YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJX1MnGEOdq%2BL2%2Fy5SrcA56eLk5%2B3XNP%2Fnl8Q0wsA8jq32yhO27P5kUGMMv6qsaAaMnZ9qZ54kUl7aYgxnQVXb4glq9339zgO16E6ou23l4wGlY%2Fs96QCQM8K%2BBNm%2FNDQ5g7L9g8UmBHkQUKpuQNPLChLX2KF5TzOL89KwlIIVOUJ0rZRg%2FKcqZl%2FAeOm95Zrm2YL3Sh1%2Bbdne2TzjagAKY9REyAatR8ieHiTgolSXLtuKWuJxKGf8Y9eFLdDj1YGSOCRXN%2BA6BVbdp0rZ6x6qjt%2BeMJoa0lssYaRzc00VDuUUq9xl1dU1Rj5hbvVuOy9MdI4AF7LI53ZM8C04xdGpu4SH5GodwgZ4T1dbPH6ujTlQFltba9gD5zMVAwezzbUJ7kRrfGJMwMfMqcST8LCRN%2BuyQfiVKuQF4XE3TSRJI%2FNAFcBfrmr%2B1YUT1CdTISMM8zDdwmHqOkvvEyEf%2Fy4Ql8gsah1GxpygbFHTCocli28qU%2FgdbKp3NVGxQxNmBkiwQOXFffdSCR16lcONFbe67SSW3s%2BPUux4bFl1GaqSBQOtVJvJtCy6CC5jbCwLx8AkQYzKgmvhaR3YSPTQObxAebFZvZJ4%2FH9rXY4AeR784oRkR%2Bl6DSQaTfIow%2Bfv3F6FQryJH%2F0Ky%2Brgd%2BMLm5n8QGOqUBVY4SklSUW1vp%2F6Co7SyQ2URRrWEH11WPZ2rE5tRyUyo0COIYWWbYQcf8agO9HvmiFmpQSIp3mX51dDi%2BgpRuSvwTskOG6YuV0Ft2PSLBvnvaoYFzc%2Fzq%2FzL2nbLVyHpOx0f8hhG8WolEPgrOa%2FgGMsEk0Dl7qIkqGVK9SqvxmTlPiLuxfbkzbr4%2Bt8hf4Dt7%2FOoYK2JGnyY%2BgcwH3pfFxv9F4erV&X-Amz-Signature=458006ff63eea8eb42b171b63e1d5df8e1e603cf92b9c176e775c730f14b8e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWW5RDC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDpRglCkaqav%2FqvmvBsFodvcNrg4Od%2BsrDE0w51iIKWbwIgMV4MnV2%2BZikEj%2FvQO%2FSAvNcAew9M2H%2F7oSRd8rvBE1YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJX1MnGEOdq%2BL2%2Fy5SrcA56eLk5%2B3XNP%2Fnl8Q0wsA8jq32yhO27P5kUGMMv6qsaAaMnZ9qZ54kUl7aYgxnQVXb4glq9339zgO16E6ou23l4wGlY%2Fs96QCQM8K%2BBNm%2FNDQ5g7L9g8UmBHkQUKpuQNPLChLX2KF5TzOL89KwlIIVOUJ0rZRg%2FKcqZl%2FAeOm95Zrm2YL3Sh1%2Bbdne2TzjagAKY9REyAatR8ieHiTgolSXLtuKWuJxKGf8Y9eFLdDj1YGSOCRXN%2BA6BVbdp0rZ6x6qjt%2BeMJoa0lssYaRzc00VDuUUq9xl1dU1Rj5hbvVuOy9MdI4AF7LI53ZM8C04xdGpu4SH5GodwgZ4T1dbPH6ujTlQFltba9gD5zMVAwezzbUJ7kRrfGJMwMfMqcST8LCRN%2BuyQfiVKuQF4XE3TSRJI%2FNAFcBfrmr%2B1YUT1CdTISMM8zDdwmHqOkvvEyEf%2Fy4Ql8gsah1GxpygbFHTCocli28qU%2FgdbKp3NVGxQxNmBkiwQOXFffdSCR16lcONFbe67SSW3s%2BPUux4bFl1GaqSBQOtVJvJtCy6CC5jbCwLx8AkQYzKgmvhaR3YSPTQObxAebFZvZJ4%2FH9rXY4AeR784oRkR%2Bl6DSQaTfIow%2Bfv3F6FQryJH%2F0Ky%2Brgd%2BMLm5n8QGOqUBVY4SklSUW1vp%2F6Co7SyQ2URRrWEH11WPZ2rE5tRyUyo0COIYWWbYQcf8agO9HvmiFmpQSIp3mX51dDi%2BgpRuSvwTskOG6YuV0Ft2PSLBvnvaoYFzc%2Fzq%2FzL2nbLVyHpOx0f8hhG8WolEPgrOa%2FgGMsEk0Dl7qIkqGVK9SqvxmTlPiLuxfbkzbr4%2Bt8hf4Dt7%2FOoYK2JGnyY%2BgcwH3pfFxv9F4erV&X-Amz-Signature=12921236e981b3d367276bd069420e34035e7d7fe019aa2a6fc6a1694283a9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JWW5RDC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDpRglCkaqav%2FqvmvBsFodvcNrg4Od%2BsrDE0w51iIKWbwIgMV4MnV2%2BZikEj%2FvQO%2FSAvNcAew9M2H%2F7oSRd8rvBE1YqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJX1MnGEOdq%2BL2%2Fy5SrcA56eLk5%2B3XNP%2Fnl8Q0wsA8jq32yhO27P5kUGMMv6qsaAaMnZ9qZ54kUl7aYgxnQVXb4glq9339zgO16E6ou23l4wGlY%2Fs96QCQM8K%2BBNm%2FNDQ5g7L9g8UmBHkQUKpuQNPLChLX2KF5TzOL89KwlIIVOUJ0rZRg%2FKcqZl%2FAeOm95Zrm2YL3Sh1%2Bbdne2TzjagAKY9REyAatR8ieHiTgolSXLtuKWuJxKGf8Y9eFLdDj1YGSOCRXN%2BA6BVbdp0rZ6x6qjt%2BeMJoa0lssYaRzc00VDuUUq9xl1dU1Rj5hbvVuOy9MdI4AF7LI53ZM8C04xdGpu4SH5GodwgZ4T1dbPH6ujTlQFltba9gD5zMVAwezzbUJ7kRrfGJMwMfMqcST8LCRN%2BuyQfiVKuQF4XE3TSRJI%2FNAFcBfrmr%2B1YUT1CdTISMM8zDdwmHqOkvvEyEf%2Fy4Ql8gsah1GxpygbFHTCocli28qU%2FgdbKp3NVGxQxNmBkiwQOXFffdSCR16lcONFbe67SSW3s%2BPUux4bFl1GaqSBQOtVJvJtCy6CC5jbCwLx8AkQYzKgmvhaR3YSPTQObxAebFZvZJ4%2FH9rXY4AeR784oRkR%2Bl6DSQaTfIow%2Bfv3F6FQryJH%2F0Ky%2Brgd%2BMLm5n8QGOqUBVY4SklSUW1vp%2F6Co7SyQ2URRrWEH11WPZ2rE5tRyUyo0COIYWWbYQcf8agO9HvmiFmpQSIp3mX51dDi%2BgpRuSvwTskOG6YuV0Ft2PSLBvnvaoYFzc%2Fzq%2FzL2nbLVyHpOx0f8hhG8WolEPgrOa%2FgGMsEk0Dl7qIkqGVK9SqvxmTlPiLuxfbkzbr4%2Bt8hf4Dt7%2FOoYK2JGnyY%2BgcwH3pfFxv9F4erV&X-Amz-Signature=786dbd7edf926405482267c51b8c4330c1fa244833e792a1b092af7571027236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
