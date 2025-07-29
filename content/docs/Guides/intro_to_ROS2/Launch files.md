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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHXTAS3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc2BnjGZYdo%2FI3sKzps7R0WWqlJKzUekVbgnnB%2F%2BQsUAIhALUcQJLuKsGzAYpAb2xmJXK3HezipylyOwtOoYVIt9zGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFEj7I1K8UlnAbCQgq3APwqpr1ArMaQpA1cseFMnZz7xH%2BQF21FKmqTDVtug3mNAzlQIt1dPYpP1GHkmLlh45FUiOt5GjaUxsJkIz7%2FFCgb8BcQvLTqV7vLBecuzBdjqs8yFb%2BAXLsXKuErZACkobllDfPe6VQWhmK%2Byh3q4jU7As0xMRUZF5awddol5%2B6MANYgiKi%2BHGKauJryzrjtn0oyceZhEunkMqxHmU8s2mDI3T7DZUF7DcSEqZh1MKGWgrBUSlOrIL0lpGCUpjMhnIkwyyosaUbL1%2FUBsBllfXgFYSAcFzuPjatQZkOFLF3iJb3ZjCjWxGJmgET2QiRW%2FxrxWu0b4gdnIUsrjau2cm5lf9XS%2BuW3KIU7v0OdXQ55bg224t00BG9OxKmmqX0RQmp6OHniCsNV7n2JGD20dEAG3obk7EP0QlRSaY%2BdasY%2FU9KXwGB8osbckamPiRHgAUPrVzQKGfh9o3oHvavMLQLd%2FN9r%2FqGEbWRYDF5TjKELxbc3PFc9EZ08JJRlfiy7kNI2QitX0qJf6V2doriyklknXpovCxMkSDg918O2RH48XXfVtUC6OyEE%2FMjFn9wqdXArxjvNRJG6swBKfyWPMW%2FTscUr2zmjzLXcutZ2NAMWajZENPGlyGF1X%2BqpjCNsaLEBjqkAUHE4cqOOlSW%2BrZHjsq39XC9KqjViZKuBSb6d5kuEU9QxL8MhYITw68Id7VhrO%2F3DrNkJ3tqf3ifGDC%2Fhs%2FpGxAmaw%2FEC9zUsSLSMvSuiFWDvCdhPtf0ibLm2E2dO7gw4KKAF%2FanOLYG0UhZuF%2FxbiAC2OEDCsIT00gyxTJ8Rl%2Bz%2FanhQbvvbLdYZJufbJ564LfCGBWUph7u0M83wWQ%2FWVfTg9sL&X-Amz-Signature=c4418827b9bba3897b894e7cdabd507cf193085d17207d85303b722650ab5f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHXTAS3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc2BnjGZYdo%2FI3sKzps7R0WWqlJKzUekVbgnnB%2F%2BQsUAIhALUcQJLuKsGzAYpAb2xmJXK3HezipylyOwtOoYVIt9zGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFEj7I1K8UlnAbCQgq3APwqpr1ArMaQpA1cseFMnZz7xH%2BQF21FKmqTDVtug3mNAzlQIt1dPYpP1GHkmLlh45FUiOt5GjaUxsJkIz7%2FFCgb8BcQvLTqV7vLBecuzBdjqs8yFb%2BAXLsXKuErZACkobllDfPe6VQWhmK%2Byh3q4jU7As0xMRUZF5awddol5%2B6MANYgiKi%2BHGKauJryzrjtn0oyceZhEunkMqxHmU8s2mDI3T7DZUF7DcSEqZh1MKGWgrBUSlOrIL0lpGCUpjMhnIkwyyosaUbL1%2FUBsBllfXgFYSAcFzuPjatQZkOFLF3iJb3ZjCjWxGJmgET2QiRW%2FxrxWu0b4gdnIUsrjau2cm5lf9XS%2BuW3KIU7v0OdXQ55bg224t00BG9OxKmmqX0RQmp6OHniCsNV7n2JGD20dEAG3obk7EP0QlRSaY%2BdasY%2FU9KXwGB8osbckamPiRHgAUPrVzQKGfh9o3oHvavMLQLd%2FN9r%2FqGEbWRYDF5TjKELxbc3PFc9EZ08JJRlfiy7kNI2QitX0qJf6V2doriyklknXpovCxMkSDg918O2RH48XXfVtUC6OyEE%2FMjFn9wqdXArxjvNRJG6swBKfyWPMW%2FTscUr2zmjzLXcutZ2NAMWajZENPGlyGF1X%2BqpjCNsaLEBjqkAUHE4cqOOlSW%2BrZHjsq39XC9KqjViZKuBSb6d5kuEU9QxL8MhYITw68Id7VhrO%2F3DrNkJ3tqf3ifGDC%2Fhs%2FpGxAmaw%2FEC9zUsSLSMvSuiFWDvCdhPtf0ibLm2E2dO7gw4KKAF%2FanOLYG0UhZuF%2FxbiAC2OEDCsIT00gyxTJ8Rl%2Bz%2FanhQbvvbLdYZJufbJ564LfCGBWUph7u0M83wWQ%2FWVfTg9sL&X-Amz-Signature=d98be10bc237c35bb553b38cacc79d03fb2a7487198e9d467435c3656346eefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHXTAS3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc2BnjGZYdo%2FI3sKzps7R0WWqlJKzUekVbgnnB%2F%2BQsUAIhALUcQJLuKsGzAYpAb2xmJXK3HezipylyOwtOoYVIt9zGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFEj7I1K8UlnAbCQgq3APwqpr1ArMaQpA1cseFMnZz7xH%2BQF21FKmqTDVtug3mNAzlQIt1dPYpP1GHkmLlh45FUiOt5GjaUxsJkIz7%2FFCgb8BcQvLTqV7vLBecuzBdjqs8yFb%2BAXLsXKuErZACkobllDfPe6VQWhmK%2Byh3q4jU7As0xMRUZF5awddol5%2B6MANYgiKi%2BHGKauJryzrjtn0oyceZhEunkMqxHmU8s2mDI3T7DZUF7DcSEqZh1MKGWgrBUSlOrIL0lpGCUpjMhnIkwyyosaUbL1%2FUBsBllfXgFYSAcFzuPjatQZkOFLF3iJb3ZjCjWxGJmgET2QiRW%2FxrxWu0b4gdnIUsrjau2cm5lf9XS%2BuW3KIU7v0OdXQ55bg224t00BG9OxKmmqX0RQmp6OHniCsNV7n2JGD20dEAG3obk7EP0QlRSaY%2BdasY%2FU9KXwGB8osbckamPiRHgAUPrVzQKGfh9o3oHvavMLQLd%2FN9r%2FqGEbWRYDF5TjKELxbc3PFc9EZ08JJRlfiy7kNI2QitX0qJf6V2doriyklknXpovCxMkSDg918O2RH48XXfVtUC6OyEE%2FMjFn9wqdXArxjvNRJG6swBKfyWPMW%2FTscUr2zmjzLXcutZ2NAMWajZENPGlyGF1X%2BqpjCNsaLEBjqkAUHE4cqOOlSW%2BrZHjsq39XC9KqjViZKuBSb6d5kuEU9QxL8MhYITw68Id7VhrO%2F3DrNkJ3tqf3ifGDC%2Fhs%2FpGxAmaw%2FEC9zUsSLSMvSuiFWDvCdhPtf0ibLm2E2dO7gw4KKAF%2FanOLYG0UhZuF%2FxbiAC2OEDCsIT00gyxTJ8Rl%2Bz%2FanhQbvvbLdYZJufbJ564LfCGBWUph7u0M83wWQ%2FWVfTg9sL&X-Amz-Signature=da83ddec19c6744a95c680a35191ad515fc7e6bc4bc209187e446869b69815cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
