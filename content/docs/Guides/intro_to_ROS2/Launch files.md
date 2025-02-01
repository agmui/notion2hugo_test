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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKSU27I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLSpmz8lxeoDWH%2F3NFa2uu%2By9quyf5Bt6EzOJGp9f71wIhALUgZaoWr1wSUZdviqx1kIGvuSYuKDSF3p%2BKKY29me%2FWKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRJolHEv7XAri2Ssoq3APsaWVKRRHdTQwEtSRxk3YRC4L6PWndcpYHya6rBB9glG6FJFxeTN2qbiEpuRvYnKq%2Flwp3zGeCsiaIV86gAt03WSDmIPEewtPF0mvtttJLQzt4Y1v8Ku3vviQzJxvnIKX%2BqDga87Lu21IrHrguvATms3Hd3OIl2N%2BrnW%2FObXolW9jbXZaUmuatlIWAOemlvPOHL3KbpoiGSt0PqCoYyRh%2Bl4xzOLgXgw12GBMS%2B3ubuHvN2u0q9Z%2Fq26Wwz5mNz5so2l7R%2Fb9puZjkfQDVE%2Fbb6Ejq2kUIy3x3GszLEkjl9whGc77zC1TK4q3ftdusqABV5j82t2dfUvKV1rWSCw1KdkDnnumgQZcOp5%2FYxbEJvbJO%2BVDj%2BWcsMzEcO2Vcb7S0yh6BcewF55t6UKcF54GuAwedHYUX7LoDxy6ratGOyOBRgegA7WVlvufAKUh1fgF1rYZJQasIc4AJVDl3rlzoEW478eZMb%2FBStvAD%2B1bXwTMRKcGu9q3ythv68UL%2Bmkhyq%2FeYROpXNMvS0u2n1QJdM%2F%2FldgLM7gqJ98JqbMQYfoDUVE50jiQL6KrOaizcjxnXNiZOrcgYXDPs%2F%2BxkG31ytBdaoJzxDr%2Fk56k9NwCTdU3zFgYNf%2Fm3vcGOMzD7xfi8BjqkAdWks275Jg%2Fb%2BVXB5PZDhLm7GRBWE0I%2FIt3YLHrjKZ02wb80fcxW6ArxMCBEQIpT7wowPTAXSaKaroI6sd%2FDjTuwRjux8PNfjDxpgP2G9bxsgy22pNfrpMoFj2XXbcxEi6GU9Nnu9su2B%2FySlIVvZdE4RGBsuJCvnHbgX76w1m72uIm4R%2B%2Bfu9dDRpS92GFxVTTzf0U2so%2Fb2gxtCJCQiNiYX8fc&X-Amz-Signature=e4255810c861a12fe2f6d7092d1c49972cc00811fc0ba8d2813430d3e60a64f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKSU27I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLSpmz8lxeoDWH%2F3NFa2uu%2By9quyf5Bt6EzOJGp9f71wIhALUgZaoWr1wSUZdviqx1kIGvuSYuKDSF3p%2BKKY29me%2FWKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRJolHEv7XAri2Ssoq3APsaWVKRRHdTQwEtSRxk3YRC4L6PWndcpYHya6rBB9glG6FJFxeTN2qbiEpuRvYnKq%2Flwp3zGeCsiaIV86gAt03WSDmIPEewtPF0mvtttJLQzt4Y1v8Ku3vviQzJxvnIKX%2BqDga87Lu21IrHrguvATms3Hd3OIl2N%2BrnW%2FObXolW9jbXZaUmuatlIWAOemlvPOHL3KbpoiGSt0PqCoYyRh%2Bl4xzOLgXgw12GBMS%2B3ubuHvN2u0q9Z%2Fq26Wwz5mNz5so2l7R%2Fb9puZjkfQDVE%2Fbb6Ejq2kUIy3x3GszLEkjl9whGc77zC1TK4q3ftdusqABV5j82t2dfUvKV1rWSCw1KdkDnnumgQZcOp5%2FYxbEJvbJO%2BVDj%2BWcsMzEcO2Vcb7S0yh6BcewF55t6UKcF54GuAwedHYUX7LoDxy6ratGOyOBRgegA7WVlvufAKUh1fgF1rYZJQasIc4AJVDl3rlzoEW478eZMb%2FBStvAD%2B1bXwTMRKcGu9q3ythv68UL%2Bmkhyq%2FeYROpXNMvS0u2n1QJdM%2F%2FldgLM7gqJ98JqbMQYfoDUVE50jiQL6KrOaizcjxnXNiZOrcgYXDPs%2F%2BxkG31ytBdaoJzxDr%2Fk56k9NwCTdU3zFgYNf%2Fm3vcGOMzD7xfi8BjqkAdWks275Jg%2Fb%2BVXB5PZDhLm7GRBWE0I%2FIt3YLHrjKZ02wb80fcxW6ArxMCBEQIpT7wowPTAXSaKaroI6sd%2FDjTuwRjux8PNfjDxpgP2G9bxsgy22pNfrpMoFj2XXbcxEi6GU9Nnu9su2B%2FySlIVvZdE4RGBsuJCvnHbgX76w1m72uIm4R%2B%2Bfu9dDRpS92GFxVTTzf0U2so%2Fb2gxtCJCQiNiYX8fc&X-Amz-Signature=0b899a827e8aea3c2867def501175541844c50bce0ada8705a0f54793a8a98a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKSU27I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLSpmz8lxeoDWH%2F3NFa2uu%2By9quyf5Bt6EzOJGp9f71wIhALUgZaoWr1wSUZdviqx1kIGvuSYuKDSF3p%2BKKY29me%2FWKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRJolHEv7XAri2Ssoq3APsaWVKRRHdTQwEtSRxk3YRC4L6PWndcpYHya6rBB9glG6FJFxeTN2qbiEpuRvYnKq%2Flwp3zGeCsiaIV86gAt03WSDmIPEewtPF0mvtttJLQzt4Y1v8Ku3vviQzJxvnIKX%2BqDga87Lu21IrHrguvATms3Hd3OIl2N%2BrnW%2FObXolW9jbXZaUmuatlIWAOemlvPOHL3KbpoiGSt0PqCoYyRh%2Bl4xzOLgXgw12GBMS%2B3ubuHvN2u0q9Z%2Fq26Wwz5mNz5so2l7R%2Fb9puZjkfQDVE%2Fbb6Ejq2kUIy3x3GszLEkjl9whGc77zC1TK4q3ftdusqABV5j82t2dfUvKV1rWSCw1KdkDnnumgQZcOp5%2FYxbEJvbJO%2BVDj%2BWcsMzEcO2Vcb7S0yh6BcewF55t6UKcF54GuAwedHYUX7LoDxy6ratGOyOBRgegA7WVlvufAKUh1fgF1rYZJQasIc4AJVDl3rlzoEW478eZMb%2FBStvAD%2B1bXwTMRKcGu9q3ythv68UL%2Bmkhyq%2FeYROpXNMvS0u2n1QJdM%2F%2FldgLM7gqJ98JqbMQYfoDUVE50jiQL6KrOaizcjxnXNiZOrcgYXDPs%2F%2BxkG31ytBdaoJzxDr%2Fk56k9NwCTdU3zFgYNf%2Fm3vcGOMzD7xfi8BjqkAdWks275Jg%2Fb%2BVXB5PZDhLm7GRBWE0I%2FIt3YLHrjKZ02wb80fcxW6ArxMCBEQIpT7wowPTAXSaKaroI6sd%2FDjTuwRjux8PNfjDxpgP2G9bxsgy22pNfrpMoFj2XXbcxEi6GU9Nnu9su2B%2FySlIVvZdE4RGBsuJCvnHbgX76w1m72uIm4R%2B%2Bfu9dDRpS92GFxVTTzf0U2so%2Fb2gxtCJCQiNiYX8fc&X-Amz-Signature=dfe36b2a0a4a1dc314d29fbf25a229f93c19b7bc862405fcc3b2c59c06ef2968&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
