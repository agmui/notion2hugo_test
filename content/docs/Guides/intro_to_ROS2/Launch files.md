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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMA63UF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbE3snJWpThHyl%2Buh52k82QrpR6wlh6FCQgbtNf7kYsAIhAIECPX15inO1huZRYQEgbaFOfqZLHGIqyotW68IzMWJrKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxADaaJ4mdnGr%2FC0lMq3APzRBfWey8%2FPQJmRSf8pz8%2ByqJj3apc9X6VYoM4TwArNYAGBj7jBXcmV1Y2MmfWI7g258Z%2FFfGOOvm4T64J%2B7LMmmGI%2B1PSkoF1VAerMBrHVPC9cUiEvAhivpLhPhnt8byyeq01rn7l8qx%2BKP876FLmwjHCJxkX3hUvccItvU%2FxmmhuwMLSwgnD%2FCFonh2jBwD%2BHhquvC8HnCpxmG6UxBnx4STc58y6n9pUwZJn2l3KqktFBpArxE7ACQamQwlBLnsGLaLUtClIeY4AaX8BHIPmtO7H0B8wgGMlY%2BMTN0tJldcBcV3uGpWtQlbCdaufw%2F9B%2FUy4bCTsQQpu3oS%2FOcwyIGK%2Ff%2FsG8%2FoiCoAzGjGYO5a%2BHn6TEqEejEFY9vCLlK00xPE3LFH6uFx12bdFVtxtmmwEaHvWStLHvBPDxSLiL9%2F3xDDFBUNHqxC%2BHqQ%2B7Aj3s3X1I6ebs3yjMJ9qIYDK4E4vOXkc3dikz3uU2FrfgYxSqbCPfZfrl3Go1kCn3TFvqX%2F56akiCDIlOTaxDkWpivQfsFrl22EdW1EyxYxhyiTxPWFEvDe%2BQ1kU5x%2B%2BKuawkCRftRcUsXCC9i88Oy1x3osMxpEV%2FMAVCxqRwoWtJIjkv0HVdFlP2rh2UTCk%2B8vCBjqkAW5%2FloDPJgkhSd5I2hRQrA%2Fc5ozyPaA2ROHiSm4jgMk6Efd6rPDpPAtt0OzOLVyiGVriHk9WdHyYJYeWramytZVt6nc2lX%2BzQxSx%2B%2B6a4o19K2qJENOioDfV64BvBwrBaKTGmDv9N7R5BqEWxlqc%2F9DnJWkwy9RcezcalxAxJqVQCbrFsaXzd2oNK6sbrUlOr1EWDdjKPqsysvm2UXxS44VrYreG&X-Amz-Signature=0c66e401de2a75387fdc338522e425e94059b4461da165e7d7c189a40412e988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMA63UF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbE3snJWpThHyl%2Buh52k82QrpR6wlh6FCQgbtNf7kYsAIhAIECPX15inO1huZRYQEgbaFOfqZLHGIqyotW68IzMWJrKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxADaaJ4mdnGr%2FC0lMq3APzRBfWey8%2FPQJmRSf8pz8%2ByqJj3apc9X6VYoM4TwArNYAGBj7jBXcmV1Y2MmfWI7g258Z%2FFfGOOvm4T64J%2B7LMmmGI%2B1PSkoF1VAerMBrHVPC9cUiEvAhivpLhPhnt8byyeq01rn7l8qx%2BKP876FLmwjHCJxkX3hUvccItvU%2FxmmhuwMLSwgnD%2FCFonh2jBwD%2BHhquvC8HnCpxmG6UxBnx4STc58y6n9pUwZJn2l3KqktFBpArxE7ACQamQwlBLnsGLaLUtClIeY4AaX8BHIPmtO7H0B8wgGMlY%2BMTN0tJldcBcV3uGpWtQlbCdaufw%2F9B%2FUy4bCTsQQpu3oS%2FOcwyIGK%2Ff%2FsG8%2FoiCoAzGjGYO5a%2BHn6TEqEejEFY9vCLlK00xPE3LFH6uFx12bdFVtxtmmwEaHvWStLHvBPDxSLiL9%2F3xDDFBUNHqxC%2BHqQ%2B7Aj3s3X1I6ebs3yjMJ9qIYDK4E4vOXkc3dikz3uU2FrfgYxSqbCPfZfrl3Go1kCn3TFvqX%2F56akiCDIlOTaxDkWpivQfsFrl22EdW1EyxYxhyiTxPWFEvDe%2BQ1kU5x%2B%2BKuawkCRftRcUsXCC9i88Oy1x3osMxpEV%2FMAVCxqRwoWtJIjkv0HVdFlP2rh2UTCk%2B8vCBjqkAW5%2FloDPJgkhSd5I2hRQrA%2Fc5ozyPaA2ROHiSm4jgMk6Efd6rPDpPAtt0OzOLVyiGVriHk9WdHyYJYeWramytZVt6nc2lX%2BzQxSx%2B%2B6a4o19K2qJENOioDfV64BvBwrBaKTGmDv9N7R5BqEWxlqc%2F9DnJWkwy9RcezcalxAxJqVQCbrFsaXzd2oNK6sbrUlOr1EWDdjKPqsysvm2UXxS44VrYreG&X-Amz-Signature=2906208566627d3906f9be407daaae8548a85717466ab02ec2e35bc7a3aee597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMA63UF%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbE3snJWpThHyl%2Buh52k82QrpR6wlh6FCQgbtNf7kYsAIhAIECPX15inO1huZRYQEgbaFOfqZLHGIqyotW68IzMWJrKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxADaaJ4mdnGr%2FC0lMq3APzRBfWey8%2FPQJmRSf8pz8%2ByqJj3apc9X6VYoM4TwArNYAGBj7jBXcmV1Y2MmfWI7g258Z%2FFfGOOvm4T64J%2B7LMmmGI%2B1PSkoF1VAerMBrHVPC9cUiEvAhivpLhPhnt8byyeq01rn7l8qx%2BKP876FLmwjHCJxkX3hUvccItvU%2FxmmhuwMLSwgnD%2FCFonh2jBwD%2BHhquvC8HnCpxmG6UxBnx4STc58y6n9pUwZJn2l3KqktFBpArxE7ACQamQwlBLnsGLaLUtClIeY4AaX8BHIPmtO7H0B8wgGMlY%2BMTN0tJldcBcV3uGpWtQlbCdaufw%2F9B%2FUy4bCTsQQpu3oS%2FOcwyIGK%2Ff%2FsG8%2FoiCoAzGjGYO5a%2BHn6TEqEejEFY9vCLlK00xPE3LFH6uFx12bdFVtxtmmwEaHvWStLHvBPDxSLiL9%2F3xDDFBUNHqxC%2BHqQ%2B7Aj3s3X1I6ebs3yjMJ9qIYDK4E4vOXkc3dikz3uU2FrfgYxSqbCPfZfrl3Go1kCn3TFvqX%2F56akiCDIlOTaxDkWpivQfsFrl22EdW1EyxYxhyiTxPWFEvDe%2BQ1kU5x%2B%2BKuawkCRftRcUsXCC9i88Oy1x3osMxpEV%2FMAVCxqRwoWtJIjkv0HVdFlP2rh2UTCk%2B8vCBjqkAW5%2FloDPJgkhSd5I2hRQrA%2Fc5ozyPaA2ROHiSm4jgMk6Efd6rPDpPAtt0OzOLVyiGVriHk9WdHyYJYeWramytZVt6nc2lX%2BzQxSx%2B%2B6a4o19K2qJENOioDfV64BvBwrBaKTGmDv9N7R5BqEWxlqc%2F9DnJWkwy9RcezcalxAxJqVQCbrFsaXzd2oNK6sbrUlOr1EWDdjKPqsysvm2UXxS44VrYreG&X-Amz-Signature=953448112a0a6e5a5fb7be26a26f00fe0eb67a36187f5d0b96fcf38c3b131c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
