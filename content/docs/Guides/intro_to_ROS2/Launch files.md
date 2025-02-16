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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCHKYN4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFv3mGyJ9oKJfWi5BXer5h5cV2ndSULAyzYUE1mGphBKAiAxFniTAIJD80tqgks1ISUxImLptwER7M%2B28Pfq5mFK4ir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM6BAYMKxv2AN%2BBg04KtwD923WwIOPiZ35gykqJ43%2BVFp5jXsJYdwTkwbRGjuygw1RkM6C8tiB%2BM4vOAhybr4NeAjIBsnJSddYCjZ2K2W9z2XW%2BMJiXpNZyqOWxzeOunMiRfiQK4aWmY3mCBCDuZGnRiNc6N9pfj1fI%2BLNKnOSq1kelOohskSBS72WtnxDhG3kIfcrzVk%2Ftb8e9tGmdf9YozGzfncXBx%2Bzmdk9mw5w5CajVzU7cGs9W%2Bu%2BhHIF50CrRdJ45oAR3oTfdUeYjzX6beCYKwfx8%2F1R0My%2BSqKz3UcsUmjCQNLc4kaeWSj1ucCvT%2B3VYC9lssewwxmsoPDojx1H5mGR1I4%2Fq5ZNI%2FmuJrN0BFVRh%2FPIszFJHbpzZH5xCbnHjN8GlSmveHQSbBdGYuWqRZDSG9BqlmWas%2BLpM5%2BDq0zsfcBcgOfqPXa%2FMXKYd5zZJ%2FcNYkTwlJeGOQ8sO0zkFE5XunjsrYMPjQuxHg7RdJU%2BXT5sjN8pFulg1xYveY%2BcbODcC%2F%2F3xuCSagMNQJaiQQItQIkEh1EwDo%2FWom3wtIDifV8qVx29BpQUNnxoOjTOsYpgqR2Ob0Dmej5wnjV5xT631EFzjq4TdJNggEdXJJ8x%2BSwT8phoNFxMABs3dmTYg8tcJvjjSy8wpojJvQY6pgGcuIwqybKBLY9PD8RfIR9xly9cjewfvVkeof%2BPxPEn40a2DDdXcjIqBzGdMF2lkI0i8x5LMdqby70wzmyDozFfQp%2BxpZgm2eXpMi%2BaKanIkSzova6D6%2BjhQZ0YofbSCZYfTh6DCxMPUWPpHzulm30%2BF%2Fz0AtXvtRZt4cFocHQ15cinMf1T2jcnBjh%2FX8Gw5AThJovv0hmJ011nSDC7g07dK8oPw9zI&X-Amz-Signature=2718c907e089f26fa4363773612f5138830f1fd250706605742edd4747118218&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCHKYN4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFv3mGyJ9oKJfWi5BXer5h5cV2ndSULAyzYUE1mGphBKAiAxFniTAIJD80tqgks1ISUxImLptwER7M%2B28Pfq5mFK4ir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM6BAYMKxv2AN%2BBg04KtwD923WwIOPiZ35gykqJ43%2BVFp5jXsJYdwTkwbRGjuygw1RkM6C8tiB%2BM4vOAhybr4NeAjIBsnJSddYCjZ2K2W9z2XW%2BMJiXpNZyqOWxzeOunMiRfiQK4aWmY3mCBCDuZGnRiNc6N9pfj1fI%2BLNKnOSq1kelOohskSBS72WtnxDhG3kIfcrzVk%2Ftb8e9tGmdf9YozGzfncXBx%2Bzmdk9mw5w5CajVzU7cGs9W%2Bu%2BhHIF50CrRdJ45oAR3oTfdUeYjzX6beCYKwfx8%2F1R0My%2BSqKz3UcsUmjCQNLc4kaeWSj1ucCvT%2B3VYC9lssewwxmsoPDojx1H5mGR1I4%2Fq5ZNI%2FmuJrN0BFVRh%2FPIszFJHbpzZH5xCbnHjN8GlSmveHQSbBdGYuWqRZDSG9BqlmWas%2BLpM5%2BDq0zsfcBcgOfqPXa%2FMXKYd5zZJ%2FcNYkTwlJeGOQ8sO0zkFE5XunjsrYMPjQuxHg7RdJU%2BXT5sjN8pFulg1xYveY%2BcbODcC%2F%2F3xuCSagMNQJaiQQItQIkEh1EwDo%2FWom3wtIDifV8qVx29BpQUNnxoOjTOsYpgqR2Ob0Dmej5wnjV5xT631EFzjq4TdJNggEdXJJ8x%2BSwT8phoNFxMABs3dmTYg8tcJvjjSy8wpojJvQY6pgGcuIwqybKBLY9PD8RfIR9xly9cjewfvVkeof%2BPxPEn40a2DDdXcjIqBzGdMF2lkI0i8x5LMdqby70wzmyDozFfQp%2BxpZgm2eXpMi%2BaKanIkSzova6D6%2BjhQZ0YofbSCZYfTh6DCxMPUWPpHzulm30%2BF%2Fz0AtXvtRZt4cFocHQ15cinMf1T2jcnBjh%2FX8Gw5AThJovv0hmJ011nSDC7g07dK8oPw9zI&X-Amz-Signature=92b8c0cc6dcd653287d3cea32235c70dcded5c68f2aef43814d972af053c7f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MCHKYN4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFv3mGyJ9oKJfWi5BXer5h5cV2ndSULAyzYUE1mGphBKAiAxFniTAIJD80tqgks1ISUxImLptwER7M%2B28Pfq5mFK4ir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM6BAYMKxv2AN%2BBg04KtwD923WwIOPiZ35gykqJ43%2BVFp5jXsJYdwTkwbRGjuygw1RkM6C8tiB%2BM4vOAhybr4NeAjIBsnJSddYCjZ2K2W9z2XW%2BMJiXpNZyqOWxzeOunMiRfiQK4aWmY3mCBCDuZGnRiNc6N9pfj1fI%2BLNKnOSq1kelOohskSBS72WtnxDhG3kIfcrzVk%2Ftb8e9tGmdf9YozGzfncXBx%2Bzmdk9mw5w5CajVzU7cGs9W%2Bu%2BhHIF50CrRdJ45oAR3oTfdUeYjzX6beCYKwfx8%2F1R0My%2BSqKz3UcsUmjCQNLc4kaeWSj1ucCvT%2B3VYC9lssewwxmsoPDojx1H5mGR1I4%2Fq5ZNI%2FmuJrN0BFVRh%2FPIszFJHbpzZH5xCbnHjN8GlSmveHQSbBdGYuWqRZDSG9BqlmWas%2BLpM5%2BDq0zsfcBcgOfqPXa%2FMXKYd5zZJ%2FcNYkTwlJeGOQ8sO0zkFE5XunjsrYMPjQuxHg7RdJU%2BXT5sjN8pFulg1xYveY%2BcbODcC%2F%2F3xuCSagMNQJaiQQItQIkEh1EwDo%2FWom3wtIDifV8qVx29BpQUNnxoOjTOsYpgqR2Ob0Dmej5wnjV5xT631EFzjq4TdJNggEdXJJ8x%2BSwT8phoNFxMABs3dmTYg8tcJvjjSy8wpojJvQY6pgGcuIwqybKBLY9PD8RfIR9xly9cjewfvVkeof%2BPxPEn40a2DDdXcjIqBzGdMF2lkI0i8x5LMdqby70wzmyDozFfQp%2BxpZgm2eXpMi%2BaKanIkSzova6D6%2BjhQZ0YofbSCZYfTh6DCxMPUWPpHzulm30%2BF%2Fz0AtXvtRZt4cFocHQ15cinMf1T2jcnBjh%2FX8Gw5AThJovv0hmJ011nSDC7g07dK8oPw9zI&X-Amz-Signature=823b836e5f32dbc9add7f19ccedddac41eb4105be6782c0155f96e4894474951&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
