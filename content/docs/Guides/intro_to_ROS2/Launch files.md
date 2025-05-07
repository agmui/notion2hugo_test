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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZC7PNO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnIT%2BjRH6OUkKscD3wLknQ4bI47H%2BjuKPnbVQ9YKubRAiBrW07sbz%2FmSUdN%2FqGqWEHAPXSYNv8kLGjvG44zUyHfESr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMRCkkUhQrWnhEDH%2BzKtwDK9uTKadfNY3ZEIr%2BDhwyR%2FMpnCyo1ySIb3hPq0WmWfBt0LjUGaeCEl9CYecILx4By0F8%2BgfI5anQmxb1NFV1OW4BcrKskT6yeufhHBXL0fDDa0myehFqszJFpAnYKMBfJrLlgRdDNMqvwv%2FXTx9hXG60VUSbvI1zghjoiUJjtR6mhYHYLxd9%2BahLOQtpDYmP4cXnTSjeGZoEj%2BeFQXrqJVdF2MIhBJqJcuYiPo129PMBpjea73MRnfZfFDbqOhWTDtAJzFiqB7BoyfB7hJZlvq38Ii6gVJ8fw734zzmOqeCGC3bmshKAUu1eqeXmmKWImfKuvDsMrulEkdjyKx5ustYzFhMMaSpDCS727ieHXvNUZ4PFXZipLFrdEOMWd9rwJItw8ENksRbFnnSEv5zlX29IgVPJushefaUShAfznuhKjVMHoS2AHZETpl9%2F5gEh4le%2Bwfc7fcxHgkF5JAkdvLzf9z1rFhvHF6IKDzvrvWAZyrE0dhTsFeuIucfegy5wALdrMO2aaAUUnL518KMBDkluQi6cd7eqvPeYaMMambkiuArk3FdKm1qELvo6Y58%2FO1bUElArrj4pTupw3PE6JpjiVeSLG3SBVdj5ADOZVNPpfm5N6CHEzGZHY%2FMwgJvtwAY6pgG%2BVqy8MbK7xv7RYSeewD17CmplM6GdQSvthVue2SWNqmjhAi5OT53JIICvNUj49rptNO1%2Fb5wVbTphkeu3I4rXPAmK3gWTAWP0y%2BAUzsfpMRMT%2BzuI3gcEwtW8IkbCwPsJjLlCVNO4MLRv3oR20xF3DhXcXZZBUUqbvwFRF8X3juD9nBUFZB0GRVofVmZngS%2FzRs15IEcJIJmlfrzp7EV2EeIzLWXU&X-Amz-Signature=5611e39f6c6a3fafb08adaddced04df59aa268b410583abda30159708004b575&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZC7PNO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnIT%2BjRH6OUkKscD3wLknQ4bI47H%2BjuKPnbVQ9YKubRAiBrW07sbz%2FmSUdN%2FqGqWEHAPXSYNv8kLGjvG44zUyHfESr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMRCkkUhQrWnhEDH%2BzKtwDK9uTKadfNY3ZEIr%2BDhwyR%2FMpnCyo1ySIb3hPq0WmWfBt0LjUGaeCEl9CYecILx4By0F8%2BgfI5anQmxb1NFV1OW4BcrKskT6yeufhHBXL0fDDa0myehFqszJFpAnYKMBfJrLlgRdDNMqvwv%2FXTx9hXG60VUSbvI1zghjoiUJjtR6mhYHYLxd9%2BahLOQtpDYmP4cXnTSjeGZoEj%2BeFQXrqJVdF2MIhBJqJcuYiPo129PMBpjea73MRnfZfFDbqOhWTDtAJzFiqB7BoyfB7hJZlvq38Ii6gVJ8fw734zzmOqeCGC3bmshKAUu1eqeXmmKWImfKuvDsMrulEkdjyKx5ustYzFhMMaSpDCS727ieHXvNUZ4PFXZipLFrdEOMWd9rwJItw8ENksRbFnnSEv5zlX29IgVPJushefaUShAfznuhKjVMHoS2AHZETpl9%2F5gEh4le%2Bwfc7fcxHgkF5JAkdvLzf9z1rFhvHF6IKDzvrvWAZyrE0dhTsFeuIucfegy5wALdrMO2aaAUUnL518KMBDkluQi6cd7eqvPeYaMMambkiuArk3FdKm1qELvo6Y58%2FO1bUElArrj4pTupw3PE6JpjiVeSLG3SBVdj5ADOZVNPpfm5N6CHEzGZHY%2FMwgJvtwAY6pgG%2BVqy8MbK7xv7RYSeewD17CmplM6GdQSvthVue2SWNqmjhAi5OT53JIICvNUj49rptNO1%2Fb5wVbTphkeu3I4rXPAmK3gWTAWP0y%2BAUzsfpMRMT%2BzuI3gcEwtW8IkbCwPsJjLlCVNO4MLRv3oR20xF3DhXcXZZBUUqbvwFRF8X3juD9nBUFZB0GRVofVmZngS%2FzRs15IEcJIJmlfrzp7EV2EeIzLWXU&X-Amz-Signature=f6b05be936a3e5c5ebb5f55bfe03de27cd2a4ad8628a69b7f13dd69cb4830bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZC7PNO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnIT%2BjRH6OUkKscD3wLknQ4bI47H%2BjuKPnbVQ9YKubRAiBrW07sbz%2FmSUdN%2FqGqWEHAPXSYNv8kLGjvG44zUyHfESr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMRCkkUhQrWnhEDH%2BzKtwDK9uTKadfNY3ZEIr%2BDhwyR%2FMpnCyo1ySIb3hPq0WmWfBt0LjUGaeCEl9CYecILx4By0F8%2BgfI5anQmxb1NFV1OW4BcrKskT6yeufhHBXL0fDDa0myehFqszJFpAnYKMBfJrLlgRdDNMqvwv%2FXTx9hXG60VUSbvI1zghjoiUJjtR6mhYHYLxd9%2BahLOQtpDYmP4cXnTSjeGZoEj%2BeFQXrqJVdF2MIhBJqJcuYiPo129PMBpjea73MRnfZfFDbqOhWTDtAJzFiqB7BoyfB7hJZlvq38Ii6gVJ8fw734zzmOqeCGC3bmshKAUu1eqeXmmKWImfKuvDsMrulEkdjyKx5ustYzFhMMaSpDCS727ieHXvNUZ4PFXZipLFrdEOMWd9rwJItw8ENksRbFnnSEv5zlX29IgVPJushefaUShAfznuhKjVMHoS2AHZETpl9%2F5gEh4le%2Bwfc7fcxHgkF5JAkdvLzf9z1rFhvHF6IKDzvrvWAZyrE0dhTsFeuIucfegy5wALdrMO2aaAUUnL518KMBDkluQi6cd7eqvPeYaMMambkiuArk3FdKm1qELvo6Y58%2FO1bUElArrj4pTupw3PE6JpjiVeSLG3SBVdj5ADOZVNPpfm5N6CHEzGZHY%2FMwgJvtwAY6pgG%2BVqy8MbK7xv7RYSeewD17CmplM6GdQSvthVue2SWNqmjhAi5OT53JIICvNUj49rptNO1%2Fb5wVbTphkeu3I4rXPAmK3gWTAWP0y%2BAUzsfpMRMT%2BzuI3gcEwtW8IkbCwPsJjLlCVNO4MLRv3oR20xF3DhXcXZZBUUqbvwFRF8X3juD9nBUFZB0GRVofVmZngS%2FzRs15IEcJIJmlfrzp7EV2EeIzLWXU&X-Amz-Signature=4e101dc27a9e951253309fe0b566d0c8bd295f786b33a4819e79c16dd6054fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
