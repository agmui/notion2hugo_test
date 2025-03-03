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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT5VAZTN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt5nrj2D8rr5CTvKneSQCrc%2FfqUym5oIuNEN65863mWAiAE%2FcgZekgTfFX84Bn3n6Jts8tfT82kpaQ3hL2H%2B7TNriqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPgDLs%2Ft%2BefpJA1cnKtwDuU924lr%2FeBhmyYVuLQa4EHp%2Bxn3MC1O9WnH%2FcbaAEV5g6BwoW0mQlw%2Fa3qN7uP6eiHFhsfYruqUMMva4PdSSkEVaGYzo3vfWR%2B%2FMKKCemgLCR%2FTxC6x3JG1iFHhs%2Fv%2B57Fw9aI2qX2cv5xTHInkUSNLTkeR0ZXj5irXdNguoCBltPrH0WM5UQeKKBZVNsKIEESI4GDHUuA9%2BhnkpakMkd%2FfWyoia%2FPuf62IGl3%2B9wcZe%2FnmuSFBB0BnOMOQKNob3G7JVn%2F32bjdjFIStoJc%2Bw4Yc5%2ByHNcqCxy%2FyyWO7V1B5tiJ2pi9VLgoQqMHjxWjXGYboKLw83wgtwCgTRewu4y2KuPy2YyLdNjl06qSj5vo89xVFMl76gx5KXnPy%2BPsxAKtRzaxcPNrMZSXJFBTAK0lHQiShvjEjeo%2BoYnpWdqbodxTz4pb8irEXYoG7MmgIjT1NwPc%2BODgpNV%2FJM%2BM9Fan8VlUnbc5%2FRhFR7MIoO7gD3UBAtT%2Bf4xxL2FfjvzOZisPGSX%2FA%2Bb52BcCNmL2eR2ANhP3wui925wFGyARRqyQIqL2%2FctlAUxyMy5JWMdJZE%2FwJ7r1euWZzi8NdY3HGkRmhJgdJ0gA3fq%2BN9Nsm0NjxjDRpXoIyiSPSFaQwtJ%2BUvgY6pgF3TfCw6HgIR6LWZ6Km7QX8YhXJby5dwQyONZeHkCD%2Fr2nuPGcijUH0QT0EQihLaH9fI43%2FRSDL3%2FRjR17Yuu1191So%2BMQkVZiVYpy8kxdXenKX2j36LDREE2pQwkuqX6Jv4OTIJbBvK%2BnAdy2OHxUmNQkN2njfEHaer7ptqlBwM%2BoRuqraPqDEiWLnK0zZIb5nlq6XgItO0MLnzwDh0XHopTt9TDwq&X-Amz-Signature=f361119c6af7c2284376e5217387891976542d03f14826cc1a96c3179f905d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT5VAZTN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt5nrj2D8rr5CTvKneSQCrc%2FfqUym5oIuNEN65863mWAiAE%2FcgZekgTfFX84Bn3n6Jts8tfT82kpaQ3hL2H%2B7TNriqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPgDLs%2Ft%2BefpJA1cnKtwDuU924lr%2FeBhmyYVuLQa4EHp%2Bxn3MC1O9WnH%2FcbaAEV5g6BwoW0mQlw%2Fa3qN7uP6eiHFhsfYruqUMMva4PdSSkEVaGYzo3vfWR%2B%2FMKKCemgLCR%2FTxC6x3JG1iFHhs%2Fv%2B57Fw9aI2qX2cv5xTHInkUSNLTkeR0ZXj5irXdNguoCBltPrH0WM5UQeKKBZVNsKIEESI4GDHUuA9%2BhnkpakMkd%2FfWyoia%2FPuf62IGl3%2B9wcZe%2FnmuSFBB0BnOMOQKNob3G7JVn%2F32bjdjFIStoJc%2Bw4Yc5%2ByHNcqCxy%2FyyWO7V1B5tiJ2pi9VLgoQqMHjxWjXGYboKLw83wgtwCgTRewu4y2KuPy2YyLdNjl06qSj5vo89xVFMl76gx5KXnPy%2BPsxAKtRzaxcPNrMZSXJFBTAK0lHQiShvjEjeo%2BoYnpWdqbodxTz4pb8irEXYoG7MmgIjT1NwPc%2BODgpNV%2FJM%2BM9Fan8VlUnbc5%2FRhFR7MIoO7gD3UBAtT%2Bf4xxL2FfjvzOZisPGSX%2FA%2Bb52BcCNmL2eR2ANhP3wui925wFGyARRqyQIqL2%2FctlAUxyMy5JWMdJZE%2FwJ7r1euWZzi8NdY3HGkRmhJgdJ0gA3fq%2BN9Nsm0NjxjDRpXoIyiSPSFaQwtJ%2BUvgY6pgF3TfCw6HgIR6LWZ6Km7QX8YhXJby5dwQyONZeHkCD%2Fr2nuPGcijUH0QT0EQihLaH9fI43%2FRSDL3%2FRjR17Yuu1191So%2BMQkVZiVYpy8kxdXenKX2j36LDREE2pQwkuqX6Jv4OTIJbBvK%2BnAdy2OHxUmNQkN2njfEHaer7ptqlBwM%2BoRuqraPqDEiWLnK0zZIb5nlq6XgItO0MLnzwDh0XHopTt9TDwq&X-Amz-Signature=154558da45f32956ce2ea24e704a999a657321a64a9ace88b57486841e373beb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT5VAZTN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt5nrj2D8rr5CTvKneSQCrc%2FfqUym5oIuNEN65863mWAiAE%2FcgZekgTfFX84Bn3n6Jts8tfT82kpaQ3hL2H%2B7TNriqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPgDLs%2Ft%2BefpJA1cnKtwDuU924lr%2FeBhmyYVuLQa4EHp%2Bxn3MC1O9WnH%2FcbaAEV5g6BwoW0mQlw%2Fa3qN7uP6eiHFhsfYruqUMMva4PdSSkEVaGYzo3vfWR%2B%2FMKKCemgLCR%2FTxC6x3JG1iFHhs%2Fv%2B57Fw9aI2qX2cv5xTHInkUSNLTkeR0ZXj5irXdNguoCBltPrH0WM5UQeKKBZVNsKIEESI4GDHUuA9%2BhnkpakMkd%2FfWyoia%2FPuf62IGl3%2B9wcZe%2FnmuSFBB0BnOMOQKNob3G7JVn%2F32bjdjFIStoJc%2Bw4Yc5%2ByHNcqCxy%2FyyWO7V1B5tiJ2pi9VLgoQqMHjxWjXGYboKLw83wgtwCgTRewu4y2KuPy2YyLdNjl06qSj5vo89xVFMl76gx5KXnPy%2BPsxAKtRzaxcPNrMZSXJFBTAK0lHQiShvjEjeo%2BoYnpWdqbodxTz4pb8irEXYoG7MmgIjT1NwPc%2BODgpNV%2FJM%2BM9Fan8VlUnbc5%2FRhFR7MIoO7gD3UBAtT%2Bf4xxL2FfjvzOZisPGSX%2FA%2Bb52BcCNmL2eR2ANhP3wui925wFGyARRqyQIqL2%2FctlAUxyMy5JWMdJZE%2FwJ7r1euWZzi8NdY3HGkRmhJgdJ0gA3fq%2BN9Nsm0NjxjDRpXoIyiSPSFaQwtJ%2BUvgY6pgF3TfCw6HgIR6LWZ6Km7QX8YhXJby5dwQyONZeHkCD%2Fr2nuPGcijUH0QT0EQihLaH9fI43%2FRSDL3%2FRjR17Yuu1191So%2BMQkVZiVYpy8kxdXenKX2j36LDREE2pQwkuqX6Jv4OTIJbBvK%2BnAdy2OHxUmNQkN2njfEHaer7ptqlBwM%2BoRuqraPqDEiWLnK0zZIb5nlq6XgItO0MLnzwDh0XHopTt9TDwq&X-Amz-Signature=866b51fc5c5feaa3d537adce1f9a09efc5e1086b8ea89054841f9fdb78f828c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
