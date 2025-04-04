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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ3XVIJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI4xC30pGVO8FTRxAlL537gwuTv1Eqf0CBpTDeJG%2B3cAiEA%2F%2B%2BDdnNbO5M0XRsAcTqo7f6g8UlcgDSIuxoZB3TjdI8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBliSHVKR36RUnctJircA8sj9w2%2FzE1Y2g%2Fp08wkcAwDdpeu7N%2FLIlpMxW4TtOTCHlz5d1Y5kJKjw3id7iDkm7LnxSDmqVKbVlDX1zr39FKFWxZlpf4uH3JuCXWVE2Jovw6IbFjutDwHzDFJmFVMyQoceF5Od9PL18lCYFscL7E91m9py72d%2BRsXu7qlttpqTh2t5Ck%2BVINzXO1YGMlz7RbugVdFeaKhsaf0OmwV%2F%2B7OSkVkuGmmPVavapR8iHg8QcwV1Q1Vw5XfarQuNagxJ%2BcCUVfT0ZvIQSY0m4nyW%2FqpxFdqf7d0gEhfibK6fqA0ITZzloEC7RoscP0grOHnjcdYbSlgvEmJTKxi1tJdzWXp%2Be0KSwEVr0hHXHeWxf7vNeMK2%2Bfwt5MW2aogmP1WP5Lek9mYsebiZYhlARVVi3vXAg9h%2FSz%2FBMQlOI61OdD8dIp3tBeaR2OTTwpY6rXMuKSwKQMiykrm1uxh60OK5colM2I6ltpKZmJ1DOlxCT2Fw4TumQriIPu3kNSNGmpMRQH8Fba67h59avg3cZBIMPvZWYQ6m2g5a%2FwusC3d1b3u%2Bs0XvZOrPDdtocaSmQUHeiSUUfVWkrI2CR9ygROQGq3lOMPCPTuujELfCdR%2Bl7%2FjV7UnuKiGqJgSXOq9MOXSwL8GOqUB5Lfj6mdDwGjl7Hae2Xynnp9s1eBG4sk1kTYKTtHKNrXkWncowO%2FZ1H%2BbiOIn88fwWBTBqJIS8dYgCYUxgQBk6j8wDU3kSmgFcQmDFsr7Fq4mmPxPZeyJFxv9n1FaV2yHyN5mTZM2QcEB7RdwZyEnV6OI0mk%2BISOlEJf3Qa5vLO67SxTX%2FAewCXvjrHRiWGFPKv%2BRcVadvhIy%2BSxXXrQra8Q3ElPl&X-Amz-Signature=70f60d61e0a9cafe0a325e1d432a5c0a042a9cdb1cc6f0cc2d6b2851a6d9acac&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ3XVIJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI4xC30pGVO8FTRxAlL537gwuTv1Eqf0CBpTDeJG%2B3cAiEA%2F%2B%2BDdnNbO5M0XRsAcTqo7f6g8UlcgDSIuxoZB3TjdI8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBliSHVKR36RUnctJircA8sj9w2%2FzE1Y2g%2Fp08wkcAwDdpeu7N%2FLIlpMxW4TtOTCHlz5d1Y5kJKjw3id7iDkm7LnxSDmqVKbVlDX1zr39FKFWxZlpf4uH3JuCXWVE2Jovw6IbFjutDwHzDFJmFVMyQoceF5Od9PL18lCYFscL7E91m9py72d%2BRsXu7qlttpqTh2t5Ck%2BVINzXO1YGMlz7RbugVdFeaKhsaf0OmwV%2F%2B7OSkVkuGmmPVavapR8iHg8QcwV1Q1Vw5XfarQuNagxJ%2BcCUVfT0ZvIQSY0m4nyW%2FqpxFdqf7d0gEhfibK6fqA0ITZzloEC7RoscP0grOHnjcdYbSlgvEmJTKxi1tJdzWXp%2Be0KSwEVr0hHXHeWxf7vNeMK2%2Bfwt5MW2aogmP1WP5Lek9mYsebiZYhlARVVi3vXAg9h%2FSz%2FBMQlOI61OdD8dIp3tBeaR2OTTwpY6rXMuKSwKQMiykrm1uxh60OK5colM2I6ltpKZmJ1DOlxCT2Fw4TumQriIPu3kNSNGmpMRQH8Fba67h59avg3cZBIMPvZWYQ6m2g5a%2FwusC3d1b3u%2Bs0XvZOrPDdtocaSmQUHeiSUUfVWkrI2CR9ygROQGq3lOMPCPTuujELfCdR%2Bl7%2FjV7UnuKiGqJgSXOq9MOXSwL8GOqUB5Lfj6mdDwGjl7Hae2Xynnp9s1eBG4sk1kTYKTtHKNrXkWncowO%2FZ1H%2BbiOIn88fwWBTBqJIS8dYgCYUxgQBk6j8wDU3kSmgFcQmDFsr7Fq4mmPxPZeyJFxv9n1FaV2yHyN5mTZM2QcEB7RdwZyEnV6OI0mk%2BISOlEJf3Qa5vLO67SxTX%2FAewCXvjrHRiWGFPKv%2BRcVadvhIy%2BSxXXrQra8Q3ElPl&X-Amz-Signature=45f38fe1335d14c0b1c14ae71f623d541356788a787bab2f567f068d3af043af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ3XVIJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHI4xC30pGVO8FTRxAlL537gwuTv1Eqf0CBpTDeJG%2B3cAiEA%2F%2B%2BDdnNbO5M0XRsAcTqo7f6g8UlcgDSIuxoZB3TjdI8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBliSHVKR36RUnctJircA8sj9w2%2FzE1Y2g%2Fp08wkcAwDdpeu7N%2FLIlpMxW4TtOTCHlz5d1Y5kJKjw3id7iDkm7LnxSDmqVKbVlDX1zr39FKFWxZlpf4uH3JuCXWVE2Jovw6IbFjutDwHzDFJmFVMyQoceF5Od9PL18lCYFscL7E91m9py72d%2BRsXu7qlttpqTh2t5Ck%2BVINzXO1YGMlz7RbugVdFeaKhsaf0OmwV%2F%2B7OSkVkuGmmPVavapR8iHg8QcwV1Q1Vw5XfarQuNagxJ%2BcCUVfT0ZvIQSY0m4nyW%2FqpxFdqf7d0gEhfibK6fqA0ITZzloEC7RoscP0grOHnjcdYbSlgvEmJTKxi1tJdzWXp%2Be0KSwEVr0hHXHeWxf7vNeMK2%2Bfwt5MW2aogmP1WP5Lek9mYsebiZYhlARVVi3vXAg9h%2FSz%2FBMQlOI61OdD8dIp3tBeaR2OTTwpY6rXMuKSwKQMiykrm1uxh60OK5colM2I6ltpKZmJ1DOlxCT2Fw4TumQriIPu3kNSNGmpMRQH8Fba67h59avg3cZBIMPvZWYQ6m2g5a%2FwusC3d1b3u%2Bs0XvZOrPDdtocaSmQUHeiSUUfVWkrI2CR9ygROQGq3lOMPCPTuujELfCdR%2Bl7%2FjV7UnuKiGqJgSXOq9MOXSwL8GOqUB5Lfj6mdDwGjl7Hae2Xynnp9s1eBG4sk1kTYKTtHKNrXkWncowO%2FZ1H%2BbiOIn88fwWBTBqJIS8dYgCYUxgQBk6j8wDU3kSmgFcQmDFsr7Fq4mmPxPZeyJFxv9n1FaV2yHyN5mTZM2QcEB7RdwZyEnV6OI0mk%2BISOlEJf3Qa5vLO67SxTX%2FAewCXvjrHRiWGFPKv%2BRcVadvhIy%2BSxXXrQra8Q3ElPl&X-Amz-Signature=c221c3caf7d42e24b23a17a874690edf10734da2c373e54c70bc3430dfcfdc4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
