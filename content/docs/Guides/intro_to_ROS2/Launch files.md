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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MWWBW5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCKHFcBncLWEz%2F139ejYQFa9rqWtfm6jy1kht3H04BUoQIhANBcS5w0HUcePfd9cWVYhOGZYMOVFVRYAb6cxSTGU94DKv8DCHAQABoMNjM3NDIzMTgzODA1Igyu%2F8i7NwFlzw04nJQq3ANPTqctchuLEmZrbwGpoFkm%2BpAfS7%2B70fVpWcqxtaQuzW%2FmPxl7qfNVH3eyHLuHqnVTSAZIhWSBe1V2ct9nVKc0dS7mjshG%2F4Btj3W0U8QWASpQFQZ29g%2BI8K1IR71DFe4dnbdvTLvykhtvXx27%2FPGit%2FvQpXaWSPNauM0u0UoCcsXbcUy%2Fny7Na%2FSnyxx8PrsiBuXnXRtZSu2fK1fhsMBVKyFTEQryj4vIwP0y3qN587uv54h17%2BMRlHTvKtKeNicsYgaIBOt6yjH7iA0E1QuDugo3B7CEGll9X1jwsGKtKI33s3fV0ck0Wpht61Gv8Iico35MZYVA%2FSP3F3FbSyETnsQmJTOaTDaSgH8vMuCWJRURBRdXwVYbz0%2B61OW0p7adC2KCI9YkvnUD7lVHSJP%2BX4l%2BEjt87ddaoMxL7s69WD6S0m2PTUX3OFthxXPOmgD5etNfwx3PhrLaYxjhasRvHt6n1GACpghGwtO3M2tBsBmY1vNchY1oeYJipU4R4OF2WWKp8nS0L0jSNYkUEYj2vSxR6EfbOMY0JRk1z5pq3ew5tzDk9yeCDPZbshuvmF6qkR9qi5UFyMFAplMijgvAmdLnMEK4Ro1P6GrflKtQyYHBMAZrZ6AjTKyVXjCer8u9BjqkAUw%2FkhT%2Fb3EGaJQ0rX7LEb3rjmZ8VF1Ffn08a%2FuI03ji2Ad%2FnK0mVXSEPoYCrql%2BwB1yS0PZoMxkmOf1Hk%2Bg0EwFCxJgsRVinZR2uZGdet7tclm6F6OMDJ2DUAzJ4JfJn2SQUKtM%2F%2BfMMZlf91q8GCfTs8LkHO3Ky9ynZ%2ByPsvaCekOohr5EXYZeyefiR4qIKUpSiztXYlb7gMhZ1XsdnlfD73hS&X-Amz-Signature=10ea4195869950dcc44be3740e5f7797255ac8da69c14ed9bc352ed6a98e1a65&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MWWBW5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCKHFcBncLWEz%2F139ejYQFa9rqWtfm6jy1kht3H04BUoQIhANBcS5w0HUcePfd9cWVYhOGZYMOVFVRYAb6cxSTGU94DKv8DCHAQABoMNjM3NDIzMTgzODA1Igyu%2F8i7NwFlzw04nJQq3ANPTqctchuLEmZrbwGpoFkm%2BpAfS7%2B70fVpWcqxtaQuzW%2FmPxl7qfNVH3eyHLuHqnVTSAZIhWSBe1V2ct9nVKc0dS7mjshG%2F4Btj3W0U8QWASpQFQZ29g%2BI8K1IR71DFe4dnbdvTLvykhtvXx27%2FPGit%2FvQpXaWSPNauM0u0UoCcsXbcUy%2Fny7Na%2FSnyxx8PrsiBuXnXRtZSu2fK1fhsMBVKyFTEQryj4vIwP0y3qN587uv54h17%2BMRlHTvKtKeNicsYgaIBOt6yjH7iA0E1QuDugo3B7CEGll9X1jwsGKtKI33s3fV0ck0Wpht61Gv8Iico35MZYVA%2FSP3F3FbSyETnsQmJTOaTDaSgH8vMuCWJRURBRdXwVYbz0%2B61OW0p7adC2KCI9YkvnUD7lVHSJP%2BX4l%2BEjt87ddaoMxL7s69WD6S0m2PTUX3OFthxXPOmgD5etNfwx3PhrLaYxjhasRvHt6n1GACpghGwtO3M2tBsBmY1vNchY1oeYJipU4R4OF2WWKp8nS0L0jSNYkUEYj2vSxR6EfbOMY0JRk1z5pq3ew5tzDk9yeCDPZbshuvmF6qkR9qi5UFyMFAplMijgvAmdLnMEK4Ro1P6GrflKtQyYHBMAZrZ6AjTKyVXjCer8u9BjqkAUw%2FkhT%2Fb3EGaJQ0rX7LEb3rjmZ8VF1Ffn08a%2FuI03ji2Ad%2FnK0mVXSEPoYCrql%2BwB1yS0PZoMxkmOf1Hk%2Bg0EwFCxJgsRVinZR2uZGdet7tclm6F6OMDJ2DUAzJ4JfJn2SQUKtM%2F%2BfMMZlf91q8GCfTs8LkHO3Ky9ynZ%2ByPsvaCekOohr5EXYZeyefiR4qIKUpSiztXYlb7gMhZ1XsdnlfD73hS&X-Amz-Signature=a12105b34055552c231798f40730370479282cd015627a737311ebf248832380&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672MWWBW5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCKHFcBncLWEz%2F139ejYQFa9rqWtfm6jy1kht3H04BUoQIhANBcS5w0HUcePfd9cWVYhOGZYMOVFVRYAb6cxSTGU94DKv8DCHAQABoMNjM3NDIzMTgzODA1Igyu%2F8i7NwFlzw04nJQq3ANPTqctchuLEmZrbwGpoFkm%2BpAfS7%2B70fVpWcqxtaQuzW%2FmPxl7qfNVH3eyHLuHqnVTSAZIhWSBe1V2ct9nVKc0dS7mjshG%2F4Btj3W0U8QWASpQFQZ29g%2BI8K1IR71DFe4dnbdvTLvykhtvXx27%2FPGit%2FvQpXaWSPNauM0u0UoCcsXbcUy%2Fny7Na%2FSnyxx8PrsiBuXnXRtZSu2fK1fhsMBVKyFTEQryj4vIwP0y3qN587uv54h17%2BMRlHTvKtKeNicsYgaIBOt6yjH7iA0E1QuDugo3B7CEGll9X1jwsGKtKI33s3fV0ck0Wpht61Gv8Iico35MZYVA%2FSP3F3FbSyETnsQmJTOaTDaSgH8vMuCWJRURBRdXwVYbz0%2B61OW0p7adC2KCI9YkvnUD7lVHSJP%2BX4l%2BEjt87ddaoMxL7s69WD6S0m2PTUX3OFthxXPOmgD5etNfwx3PhrLaYxjhasRvHt6n1GACpghGwtO3M2tBsBmY1vNchY1oeYJipU4R4OF2WWKp8nS0L0jSNYkUEYj2vSxR6EfbOMY0JRk1z5pq3ew5tzDk9yeCDPZbshuvmF6qkR9qi5UFyMFAplMijgvAmdLnMEK4Ro1P6GrflKtQyYHBMAZrZ6AjTKyVXjCer8u9BjqkAUw%2FkhT%2Fb3EGaJQ0rX7LEb3rjmZ8VF1Ffn08a%2FuI03ji2Ad%2FnK0mVXSEPoYCrql%2BwB1yS0PZoMxkmOf1Hk%2Bg0EwFCxJgsRVinZR2uZGdet7tclm6F6OMDJ2DUAzJ4JfJn2SQUKtM%2F%2BfMMZlf91q8GCfTs8LkHO3Ky9ynZ%2ByPsvaCekOohr5EXYZeyefiR4qIKUpSiztXYlb7gMhZ1XsdnlfD73hS&X-Amz-Signature=cf3d4aa00e0c3d31978428d5bd222badf92e9bac498f3c4ad7031cf3ce4dcb74&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
