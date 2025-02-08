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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK3HSVZF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICMyG%2B62MQPxgLZP%2BhfjlqJt%2BkK%2FNUqJjoKN%2BiDdjnOcAiB3CCxkw6gSXNeR0PE63UyrtRJu277qljdpYlpxt4F6RCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg2uEHTtl51zhQfjiKtwD8daka98YHLWq4nEVlwnTAcBZ38Ur%2B2BtYPEMGCK1Kt8runM0RXPDTIb5AzIGUUm5umSAlvl1PcsXYKyJTT%2FTbIUnpe7FB3jQYYN7Nlj6mclfnMawd02lXUjU4rVFjf%2FeSbUWkavoHzyjf%2BCCt4hxvrWBT6VnroswhqxqA8mrRc9Xii90HrrWG2BRX%2BW8z09qtqJnQKLWoNS37VcwKe5xJkTkGAa5kgW%2B89cLL9qbQ3IbPcDFGfRiG2y9mmmMuIDp3cSigCLUv5l3Ft2as6cXa%2BT0xTFf2xo5kxpA7b1S6QqJhin1PoK5AAn2KCqVTvcB7xYYlb2lBEnaQ88izAEqYItiWU0BRW01Z%2BIDU9dSOzr0VuoLKAmrW5UK9RXyxwngZD2K8lRC%2BS99B2xABm7K0yOJr8aM4xnVYf6m%2FSoFaMGKZ6tuk2NLjJhRuS%2Bq613blDZ%2FuSjsYbjc0yeg3snAaSc63goJMA0NdQuGOZ6vKUEQlHhHunzyvdOIx%2F6kM5JwLbGbT3jqNvMJKOqmFLzEwXvfF85o9o%2BnqT00g8HGRPtHLMe9I0cErAmzm9%2BKbNI6BvgQAFF7wXuByiiTB%2FCYFdE%2FZvnYjd79bAXER%2Fk4PEiiiw0YZgrdxTcT%2BrgwroadvQY6pgF1z5etiCjtOItgc1PtqEFHFeIi%2BDDyZKS81VMc%2FFx9%2B%2BOcqbrn0VPMT6FtJawrXyqjotX0lq28pERehGzdamqchMbmMDiLZ8NWGRTdAwTxQ0MQjTALGvp64bIsN2HVzVjVeUx4gbdb7Hb6Vkb%2B5S92I%2BrV8vknjRuIfpfJB8qT5Y5QqmBQ3GOimi8crApkiSusXP%2FeotNzxXqophRiTCLWVxTENx6B&X-Amz-Signature=a3611148816d05b894ba4528a254f8f3e2ca80a35536041e766cb0cb1fd4ada8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK3HSVZF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICMyG%2B62MQPxgLZP%2BhfjlqJt%2BkK%2FNUqJjoKN%2BiDdjnOcAiB3CCxkw6gSXNeR0PE63UyrtRJu277qljdpYlpxt4F6RCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg2uEHTtl51zhQfjiKtwD8daka98YHLWq4nEVlwnTAcBZ38Ur%2B2BtYPEMGCK1Kt8runM0RXPDTIb5AzIGUUm5umSAlvl1PcsXYKyJTT%2FTbIUnpe7FB3jQYYN7Nlj6mclfnMawd02lXUjU4rVFjf%2FeSbUWkavoHzyjf%2BCCt4hxvrWBT6VnroswhqxqA8mrRc9Xii90HrrWG2BRX%2BW8z09qtqJnQKLWoNS37VcwKe5xJkTkGAa5kgW%2B89cLL9qbQ3IbPcDFGfRiG2y9mmmMuIDp3cSigCLUv5l3Ft2as6cXa%2BT0xTFf2xo5kxpA7b1S6QqJhin1PoK5AAn2KCqVTvcB7xYYlb2lBEnaQ88izAEqYItiWU0BRW01Z%2BIDU9dSOzr0VuoLKAmrW5UK9RXyxwngZD2K8lRC%2BS99B2xABm7K0yOJr8aM4xnVYf6m%2FSoFaMGKZ6tuk2NLjJhRuS%2Bq613blDZ%2FuSjsYbjc0yeg3snAaSc63goJMA0NdQuGOZ6vKUEQlHhHunzyvdOIx%2F6kM5JwLbGbT3jqNvMJKOqmFLzEwXvfF85o9o%2BnqT00g8HGRPtHLMe9I0cErAmzm9%2BKbNI6BvgQAFF7wXuByiiTB%2FCYFdE%2FZvnYjd79bAXER%2Fk4PEiiiw0YZgrdxTcT%2BrgwroadvQY6pgF1z5etiCjtOItgc1PtqEFHFeIi%2BDDyZKS81VMc%2FFx9%2B%2BOcqbrn0VPMT6FtJawrXyqjotX0lq28pERehGzdamqchMbmMDiLZ8NWGRTdAwTxQ0MQjTALGvp64bIsN2HVzVjVeUx4gbdb7Hb6Vkb%2B5S92I%2BrV8vknjRuIfpfJB8qT5Y5QqmBQ3GOimi8crApkiSusXP%2FeotNzxXqophRiTCLWVxTENx6B&X-Amz-Signature=b95730b6606a1b99410324609cf70c6e75c6db7bca35e848b8a893fdfaee3472&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK3HSVZF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICMyG%2B62MQPxgLZP%2BhfjlqJt%2BkK%2FNUqJjoKN%2BiDdjnOcAiB3CCxkw6gSXNeR0PE63UyrtRJu277qljdpYlpxt4F6RCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg2uEHTtl51zhQfjiKtwD8daka98YHLWq4nEVlwnTAcBZ38Ur%2B2BtYPEMGCK1Kt8runM0RXPDTIb5AzIGUUm5umSAlvl1PcsXYKyJTT%2FTbIUnpe7FB3jQYYN7Nlj6mclfnMawd02lXUjU4rVFjf%2FeSbUWkavoHzyjf%2BCCt4hxvrWBT6VnroswhqxqA8mrRc9Xii90HrrWG2BRX%2BW8z09qtqJnQKLWoNS37VcwKe5xJkTkGAa5kgW%2B89cLL9qbQ3IbPcDFGfRiG2y9mmmMuIDp3cSigCLUv5l3Ft2as6cXa%2BT0xTFf2xo5kxpA7b1S6QqJhin1PoK5AAn2KCqVTvcB7xYYlb2lBEnaQ88izAEqYItiWU0BRW01Z%2BIDU9dSOzr0VuoLKAmrW5UK9RXyxwngZD2K8lRC%2BS99B2xABm7K0yOJr8aM4xnVYf6m%2FSoFaMGKZ6tuk2NLjJhRuS%2Bq613blDZ%2FuSjsYbjc0yeg3snAaSc63goJMA0NdQuGOZ6vKUEQlHhHunzyvdOIx%2F6kM5JwLbGbT3jqNvMJKOqmFLzEwXvfF85o9o%2BnqT00g8HGRPtHLMe9I0cErAmzm9%2BKbNI6BvgQAFF7wXuByiiTB%2FCYFdE%2FZvnYjd79bAXER%2Fk4PEiiiw0YZgrdxTcT%2BrgwroadvQY6pgF1z5etiCjtOItgc1PtqEFHFeIi%2BDDyZKS81VMc%2FFx9%2B%2BOcqbrn0VPMT6FtJawrXyqjotX0lq28pERehGzdamqchMbmMDiLZ8NWGRTdAwTxQ0MQjTALGvp64bIsN2HVzVjVeUx4gbdb7Hb6Vkb%2B5S92I%2BrV8vknjRuIfpfJB8qT5Y5QqmBQ3GOimi8crApkiSusXP%2FeotNzxXqophRiTCLWVxTENx6B&X-Amz-Signature=7cc7630dcf7779d095a3a4e6ec50f4ed0dec5bb626e6002230f44632e99db746&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
