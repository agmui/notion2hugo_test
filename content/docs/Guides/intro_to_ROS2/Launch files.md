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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKAMWBZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE60o3JVqd2bQ6BUiMMoQaYTfyZlHB0o2CERuY8CWoaJAiB%2FE8mArz8v245dLYZkP6jVNoAToiuPtutROxABwWl3iSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDvO%2F6Dgo4mI8ezpeKtwDAFx%2BfYu0Q5m1EeMXBgocUcncMQWlAl37rj1pB5aJHPZ3F%2B9CXush4WqQCrdKkpWVSmPvu4RuaSBCs30oFRtTQgszyjiND3oajK9xlUyoQZDqaR0vdwM5vbJxt7O5AdCf7mkwIR4EwCOIxCPQMQZo2qoyeqxPEPG1eXC89AWXLQmbWeANz18rN%2FLbQhk%2FOyCh0WhBgczsjwXIFblRIAr%2BHN9hruKUV3qIzfcMXazqjd0UzYNWLPWpi0uIRcidW%2F8Bl%2FKLFwqL3UHYwjcsN0C3StJQ4gM0qh7IOzo8MhVWzCpXjsO8JE%2FnphGW2OhuiUTAZeP20kH%2FJ%2B0T%2F50ls%2F%2FPN10EivJkPnlVen9Ze8hov6m9CVFNM0vUWJndroGKdYKGCN2OADI9GR9q1ad%2FTST9r%2BNN1CegKUVwtly5s5cwVuqmhOe144CiCGq52tPYAdLRc%2B8AOuNxhdVTLUqbaGlCqQWRa3h7Hjqo%2FDzyc032m8ERa078azRDvUD34WlGMJtU9GSZc8YCwsPxkB%2FqcRe6FVRIjxfXjbsRcVqvYC1%2Ba9MTzxfCA%2Fw9r7AVN0XuGaa3XnfyrBnYdTFxrpk2WEtZURLgVUbqcvuoaJawyyPNaaGxF1241%2Fcjk5MR1FAw5uaowQY6pgGSHO7ePovfsswMvpyW143TASORbtWNZxe%2FO0%2BoZ3dtGtSVo5WtSQUxIa%2F3GR0tVXbTwyg%2FwaG5HzloRWGRzhCjToV%2BYdZ0fRx3Qp61aSkNQXXAH4ckfmqKpoA3GPtKapfW901lzPtEDuGXsq2msFGS1YJiG%2FGw6UqwqEnhT0vuTxdprvxTy4GWdNgwKYtRtLbc79IfVhn5hj9Fb9P82XnbskgDDytC&X-Amz-Signature=c1e0fdf43585e17babaf3f7f29ff1fc6a6c780f7488913ccc619a915e4955b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKAMWBZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE60o3JVqd2bQ6BUiMMoQaYTfyZlHB0o2CERuY8CWoaJAiB%2FE8mArz8v245dLYZkP6jVNoAToiuPtutROxABwWl3iSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDvO%2F6Dgo4mI8ezpeKtwDAFx%2BfYu0Q5m1EeMXBgocUcncMQWlAl37rj1pB5aJHPZ3F%2B9CXush4WqQCrdKkpWVSmPvu4RuaSBCs30oFRtTQgszyjiND3oajK9xlUyoQZDqaR0vdwM5vbJxt7O5AdCf7mkwIR4EwCOIxCPQMQZo2qoyeqxPEPG1eXC89AWXLQmbWeANz18rN%2FLbQhk%2FOyCh0WhBgczsjwXIFblRIAr%2BHN9hruKUV3qIzfcMXazqjd0UzYNWLPWpi0uIRcidW%2F8Bl%2FKLFwqL3UHYwjcsN0C3StJQ4gM0qh7IOzo8MhVWzCpXjsO8JE%2FnphGW2OhuiUTAZeP20kH%2FJ%2B0T%2F50ls%2F%2FPN10EivJkPnlVen9Ze8hov6m9CVFNM0vUWJndroGKdYKGCN2OADI9GR9q1ad%2FTST9r%2BNN1CegKUVwtly5s5cwVuqmhOe144CiCGq52tPYAdLRc%2B8AOuNxhdVTLUqbaGlCqQWRa3h7Hjqo%2FDzyc032m8ERa078azRDvUD34WlGMJtU9GSZc8YCwsPxkB%2FqcRe6FVRIjxfXjbsRcVqvYC1%2Ba9MTzxfCA%2Fw9r7AVN0XuGaa3XnfyrBnYdTFxrpk2WEtZURLgVUbqcvuoaJawyyPNaaGxF1241%2Fcjk5MR1FAw5uaowQY6pgGSHO7ePovfsswMvpyW143TASORbtWNZxe%2FO0%2BoZ3dtGtSVo5WtSQUxIa%2F3GR0tVXbTwyg%2FwaG5HzloRWGRzhCjToV%2BYdZ0fRx3Qp61aSkNQXXAH4ckfmqKpoA3GPtKapfW901lzPtEDuGXsq2msFGS1YJiG%2FGw6UqwqEnhT0vuTxdprvxTy4GWdNgwKYtRtLbc79IfVhn5hj9Fb9P82XnbskgDDytC&X-Amz-Signature=123d3080a239179524d02c69336f77448a47ccd9c26c84e29d4f0bee1b03b610&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKAMWBZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE60o3JVqd2bQ6BUiMMoQaYTfyZlHB0o2CERuY8CWoaJAiB%2FE8mArz8v245dLYZkP6jVNoAToiuPtutROxABwWl3iSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDvO%2F6Dgo4mI8ezpeKtwDAFx%2BfYu0Q5m1EeMXBgocUcncMQWlAl37rj1pB5aJHPZ3F%2B9CXush4WqQCrdKkpWVSmPvu4RuaSBCs30oFRtTQgszyjiND3oajK9xlUyoQZDqaR0vdwM5vbJxt7O5AdCf7mkwIR4EwCOIxCPQMQZo2qoyeqxPEPG1eXC89AWXLQmbWeANz18rN%2FLbQhk%2FOyCh0WhBgczsjwXIFblRIAr%2BHN9hruKUV3qIzfcMXazqjd0UzYNWLPWpi0uIRcidW%2F8Bl%2FKLFwqL3UHYwjcsN0C3StJQ4gM0qh7IOzo8MhVWzCpXjsO8JE%2FnphGW2OhuiUTAZeP20kH%2FJ%2B0T%2F50ls%2F%2FPN10EivJkPnlVen9Ze8hov6m9CVFNM0vUWJndroGKdYKGCN2OADI9GR9q1ad%2FTST9r%2BNN1CegKUVwtly5s5cwVuqmhOe144CiCGq52tPYAdLRc%2B8AOuNxhdVTLUqbaGlCqQWRa3h7Hjqo%2FDzyc032m8ERa078azRDvUD34WlGMJtU9GSZc8YCwsPxkB%2FqcRe6FVRIjxfXjbsRcVqvYC1%2Ba9MTzxfCA%2Fw9r7AVN0XuGaa3XnfyrBnYdTFxrpk2WEtZURLgVUbqcvuoaJawyyPNaaGxF1241%2Fcjk5MR1FAw5uaowQY6pgGSHO7ePovfsswMvpyW143TASORbtWNZxe%2FO0%2BoZ3dtGtSVo5WtSQUxIa%2F3GR0tVXbTwyg%2FwaG5HzloRWGRzhCjToV%2BYdZ0fRx3Qp61aSkNQXXAH4ckfmqKpoA3GPtKapfW901lzPtEDuGXsq2msFGS1YJiG%2FGw6UqwqEnhT0vuTxdprvxTy4GWdNgwKYtRtLbc79IfVhn5hj9Fb9P82XnbskgDDytC&X-Amz-Signature=9239b89ea6d83e9be1e4747dafa98a7135ec3817f35d7b63fe8575d733a0e0e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
