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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EJEBVD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDlSwRf59dqLqevgoMnTlsUdZyCInmmV%2BYggVCbo3nnxQIhAJiE1ja8lYlyFDAeLCzIq1PpiroJwihmdwUkxftbE7gkKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTYZT7ekA8WNSRMBsq3ANPQ8YPx5A2m8HgZaSKfT7yzRNTmlF7oqkha3hqAntvsAR33bI8ElKiaOe9ufA7%2BPDdMVyASwipUevgDBD0t%2FdM4G%2BpvMNXFVHyaPL0y4sOgvqrEGcr33%2BfcOkc2WpJ0KbJoMy%2B3Rb0sNc90%2Fty93IrhL%2FzWP5UdnGT4eLCaN4oQC0J5iTmFtGk6AHCcLOfefkfnZrKwj2oJ6X8Z5HCwq0EYl7OgfpbwoYPSg4tQ1acupjeIh0HDx2uUm8xUBs00Zd1qkmvMLEdfUyCvC3wwRJTUrIGqup9ZFMjgpDsfQnOJLIT11nrT3wPf2rsfD9mDs5eINxHcVZVFY29rkPPoEeB%2FEF8eVthqqsINA2ZTa7JpUrxUcbGefDDbOc%2FIj3v8JeFa6aa%2BbfxIoRNABxh8OLRgEfnkhcOn4Vmru07vEX3GPp%2BnHUEYipr3n6vyO0K0868TjI4BnISIp0PmHDqCjoe7KgwbZFY%2BUABsr4aOV5MwuJiJ3zuHWHbZyLSli4KZdrgCqJjyLX9r5l074jyG3JA4snYo%2BYRsop9adasiHm8ALrh9%2BwLsS2Lwl5iLFTxdfNwA6TpRHUPNnenSPG6u%2B1P1Uzsq5yq%2BIgJqGxNIm22te4Kqkz9uZNmx6AjxjCc34nBBjqkAV6SmD74NxXyP0qfewt%2FQNlQDQBxsMbLTq%2FW3Ta1aAA%2BtcSXShc9OHiys9opwwlYw%2FeFvPCUBiIqoVdH6GK%2BgEFYKJdiOZHR1Xu2mXW9VgTEfQkVuqzdyMOW9lGXFnu2bLZ8einNKzPeb6McsPBt9kcsrSabrU5jzWZeLDKFDE27XdFsU1T8vSCoVy1w9n3quB7t3V1yjrHFY9%2FEg8OaHGLU09xG&X-Amz-Signature=e33e8cd7470017003f9a004f0e48d02e40cb6c8cb41f51100309f2d25622af26&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EJEBVD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDlSwRf59dqLqevgoMnTlsUdZyCInmmV%2BYggVCbo3nnxQIhAJiE1ja8lYlyFDAeLCzIq1PpiroJwihmdwUkxftbE7gkKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTYZT7ekA8WNSRMBsq3ANPQ8YPx5A2m8HgZaSKfT7yzRNTmlF7oqkha3hqAntvsAR33bI8ElKiaOe9ufA7%2BPDdMVyASwipUevgDBD0t%2FdM4G%2BpvMNXFVHyaPL0y4sOgvqrEGcr33%2BfcOkc2WpJ0KbJoMy%2B3Rb0sNc90%2Fty93IrhL%2FzWP5UdnGT4eLCaN4oQC0J5iTmFtGk6AHCcLOfefkfnZrKwj2oJ6X8Z5HCwq0EYl7OgfpbwoYPSg4tQ1acupjeIh0HDx2uUm8xUBs00Zd1qkmvMLEdfUyCvC3wwRJTUrIGqup9ZFMjgpDsfQnOJLIT11nrT3wPf2rsfD9mDs5eINxHcVZVFY29rkPPoEeB%2FEF8eVthqqsINA2ZTa7JpUrxUcbGefDDbOc%2FIj3v8JeFa6aa%2BbfxIoRNABxh8OLRgEfnkhcOn4Vmru07vEX3GPp%2BnHUEYipr3n6vyO0K0868TjI4BnISIp0PmHDqCjoe7KgwbZFY%2BUABsr4aOV5MwuJiJ3zuHWHbZyLSli4KZdrgCqJjyLX9r5l074jyG3JA4snYo%2BYRsop9adasiHm8ALrh9%2BwLsS2Lwl5iLFTxdfNwA6TpRHUPNnenSPG6u%2B1P1Uzsq5yq%2BIgJqGxNIm22te4Kqkz9uZNmx6AjxjCc34nBBjqkAV6SmD74NxXyP0qfewt%2FQNlQDQBxsMbLTq%2FW3Ta1aAA%2BtcSXShc9OHiys9opwwlYw%2FeFvPCUBiIqoVdH6GK%2BgEFYKJdiOZHR1Xu2mXW9VgTEfQkVuqzdyMOW9lGXFnu2bLZ8einNKzPeb6McsPBt9kcsrSabrU5jzWZeLDKFDE27XdFsU1T8vSCoVy1w9n3quB7t3V1yjrHFY9%2FEg8OaHGLU09xG&X-Amz-Signature=d89ad51bfaeb03ea72bc0079c01a48baa44c6abfa8cbdb412c02a12dca19c500&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2EJEBVD%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDlSwRf59dqLqevgoMnTlsUdZyCInmmV%2BYggVCbo3nnxQIhAJiE1ja8lYlyFDAeLCzIq1PpiroJwihmdwUkxftbE7gkKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTYZT7ekA8WNSRMBsq3ANPQ8YPx5A2m8HgZaSKfT7yzRNTmlF7oqkha3hqAntvsAR33bI8ElKiaOe9ufA7%2BPDdMVyASwipUevgDBD0t%2FdM4G%2BpvMNXFVHyaPL0y4sOgvqrEGcr33%2BfcOkc2WpJ0KbJoMy%2B3Rb0sNc90%2Fty93IrhL%2FzWP5UdnGT4eLCaN4oQC0J5iTmFtGk6AHCcLOfefkfnZrKwj2oJ6X8Z5HCwq0EYl7OgfpbwoYPSg4tQ1acupjeIh0HDx2uUm8xUBs00Zd1qkmvMLEdfUyCvC3wwRJTUrIGqup9ZFMjgpDsfQnOJLIT11nrT3wPf2rsfD9mDs5eINxHcVZVFY29rkPPoEeB%2FEF8eVthqqsINA2ZTa7JpUrxUcbGefDDbOc%2FIj3v8JeFa6aa%2BbfxIoRNABxh8OLRgEfnkhcOn4Vmru07vEX3GPp%2BnHUEYipr3n6vyO0K0868TjI4BnISIp0PmHDqCjoe7KgwbZFY%2BUABsr4aOV5MwuJiJ3zuHWHbZyLSli4KZdrgCqJjyLX9r5l074jyG3JA4snYo%2BYRsop9adasiHm8ALrh9%2BwLsS2Lwl5iLFTxdfNwA6TpRHUPNnenSPG6u%2B1P1Uzsq5yq%2BIgJqGxNIm22te4Kqkz9uZNmx6AjxjCc34nBBjqkAV6SmD74NxXyP0qfewt%2FQNlQDQBxsMbLTq%2FW3Ta1aAA%2BtcSXShc9OHiys9opwwlYw%2FeFvPCUBiIqoVdH6GK%2BgEFYKJdiOZHR1Xu2mXW9VgTEfQkVuqzdyMOW9lGXFnu2bLZ8einNKzPeb6McsPBt9kcsrSabrU5jzWZeLDKFDE27XdFsU1T8vSCoVy1w9n3quB7t3V1yjrHFY9%2FEg8OaHGLU09xG&X-Amz-Signature=a6058e0743c9c2f4033c1056867151497946198bb473708fd6654924720acf49&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
