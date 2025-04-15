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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4CKUES%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChYRxr%2FyKfDnj4Nfsi03zGLNjM2m6ZbBbUQrblxDcbeQIgd3HL3H%2F6UQbbGQZIM6%2FEeTDYpyQg6vCjzAzk%2FWVOEa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNfW3O2H5k%2BsWCLMGSrcA2vMcejg%2B7vEb%2FSXcoJ9HKijMFi2ZJOqBrss6Rm%2Fw0SsOmn%2Bp35LhCAWIRqT9fhQnW54j42PHfrnB2JANV2C6AtbawyZ%2BUVitWwNSLClFuZpnQ6N5wocJpmzBRz4G6CFkYNAr0%2Bx71tUt0%2FMjIwqXr2irfaCqSzT2Mqw9T8yxMeujISz%2FMZQy5I7becJ5sqM%2Fr2IVyHG5yNrcuQsPjxFUNFjEFHMEFR%2Fkllnb0diP%2BjZoTDmKKsb1tEWkJzM0LO2A288COTwOZy677vhO6cNixK8efib9EJXf3EfTW9ojXBW5tahRMvaT1Lsml15Mzy%2B9EFLZ6Acobvs8S6WaK95rrFVJf41B9Dg3c3ewbAtl2J7Cb28TOf1BW5YCHNq6J3XXWwtoqkIVx%2BBqK2f4KURPHpNcDhcb87PXoKqQOoky6gaKfyw9VGT3ZKqA2CJWw2pGLwIFPP%2BY%2BYzJpedheI96BK5XHCWFmluPlSaKJ%2F2Rjc27zwVgd3b2W9zSRXZSYGRg0GxTmHP8A21YzUJxOfdWIurp8xCBCKYvCNpjr%2B7pi8gp87O6IsRoYo01ZOQv%2BtPLgMRwBBGdvyVxnYx%2FIJOQlBlj8hCbWeOP%2B3AKo473%2F8caFI3Td2GcT0yisYQMMjd%2Bb8GOqUBSrsWY%2FPexm9UZSjlPuXOQbuy%2Fu22jGlknPdsIVuCHQqZB5BhfWq02bhqnOhJQoHIkHEhSTJ6KCozPrGmOjxSkpQCdsqZgjVSwO%2B5leGW4wckFAWhyhbup7Mf8sr1zgtBYTzP000254WXnxvT8xYOasaEj%2Bxda4fD8MCUcFoLpAZYG23nr%2FEIgySWOAsptpeGF1yfc3Z0Op08MbAJ8%2Fw%2F8NJhrak1&X-Amz-Signature=f1123b75eafc59fb3a8047aa124a452126d69abe1f405e32567667eb33a830c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4CKUES%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChYRxr%2FyKfDnj4Nfsi03zGLNjM2m6ZbBbUQrblxDcbeQIgd3HL3H%2F6UQbbGQZIM6%2FEeTDYpyQg6vCjzAzk%2FWVOEa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNfW3O2H5k%2BsWCLMGSrcA2vMcejg%2B7vEb%2FSXcoJ9HKijMFi2ZJOqBrss6Rm%2Fw0SsOmn%2Bp35LhCAWIRqT9fhQnW54j42PHfrnB2JANV2C6AtbawyZ%2BUVitWwNSLClFuZpnQ6N5wocJpmzBRz4G6CFkYNAr0%2Bx71tUt0%2FMjIwqXr2irfaCqSzT2Mqw9T8yxMeujISz%2FMZQy5I7becJ5sqM%2Fr2IVyHG5yNrcuQsPjxFUNFjEFHMEFR%2Fkllnb0diP%2BjZoTDmKKsb1tEWkJzM0LO2A288COTwOZy677vhO6cNixK8efib9EJXf3EfTW9ojXBW5tahRMvaT1Lsml15Mzy%2B9EFLZ6Acobvs8S6WaK95rrFVJf41B9Dg3c3ewbAtl2J7Cb28TOf1BW5YCHNq6J3XXWwtoqkIVx%2BBqK2f4KURPHpNcDhcb87PXoKqQOoky6gaKfyw9VGT3ZKqA2CJWw2pGLwIFPP%2BY%2BYzJpedheI96BK5XHCWFmluPlSaKJ%2F2Rjc27zwVgd3b2W9zSRXZSYGRg0GxTmHP8A21YzUJxOfdWIurp8xCBCKYvCNpjr%2B7pi8gp87O6IsRoYo01ZOQv%2BtPLgMRwBBGdvyVxnYx%2FIJOQlBlj8hCbWeOP%2B3AKo473%2F8caFI3Td2GcT0yisYQMMjd%2Bb8GOqUBSrsWY%2FPexm9UZSjlPuXOQbuy%2Fu22jGlknPdsIVuCHQqZB5BhfWq02bhqnOhJQoHIkHEhSTJ6KCozPrGmOjxSkpQCdsqZgjVSwO%2B5leGW4wckFAWhyhbup7Mf8sr1zgtBYTzP000254WXnxvT8xYOasaEj%2Bxda4fD8MCUcFoLpAZYG23nr%2FEIgySWOAsptpeGF1yfc3Z0Op08MbAJ8%2Fw%2F8NJhrak1&X-Amz-Signature=f552a1ccd330e10d6764355c703d2b03b64d3afd5fb256dd04fdf89a93f32598&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN4CKUES%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChYRxr%2FyKfDnj4Nfsi03zGLNjM2m6ZbBbUQrblxDcbeQIgd3HL3H%2F6UQbbGQZIM6%2FEeTDYpyQg6vCjzAzk%2FWVOEa0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDNfW3O2H5k%2BsWCLMGSrcA2vMcejg%2B7vEb%2FSXcoJ9HKijMFi2ZJOqBrss6Rm%2Fw0SsOmn%2Bp35LhCAWIRqT9fhQnW54j42PHfrnB2JANV2C6AtbawyZ%2BUVitWwNSLClFuZpnQ6N5wocJpmzBRz4G6CFkYNAr0%2Bx71tUt0%2FMjIwqXr2irfaCqSzT2Mqw9T8yxMeujISz%2FMZQy5I7becJ5sqM%2Fr2IVyHG5yNrcuQsPjxFUNFjEFHMEFR%2Fkllnb0diP%2BjZoTDmKKsb1tEWkJzM0LO2A288COTwOZy677vhO6cNixK8efib9EJXf3EfTW9ojXBW5tahRMvaT1Lsml15Mzy%2B9EFLZ6Acobvs8S6WaK95rrFVJf41B9Dg3c3ewbAtl2J7Cb28TOf1BW5YCHNq6J3XXWwtoqkIVx%2BBqK2f4KURPHpNcDhcb87PXoKqQOoky6gaKfyw9VGT3ZKqA2CJWw2pGLwIFPP%2BY%2BYzJpedheI96BK5XHCWFmluPlSaKJ%2F2Rjc27zwVgd3b2W9zSRXZSYGRg0GxTmHP8A21YzUJxOfdWIurp8xCBCKYvCNpjr%2B7pi8gp87O6IsRoYo01ZOQv%2BtPLgMRwBBGdvyVxnYx%2FIJOQlBlj8hCbWeOP%2B3AKo473%2F8caFI3Td2GcT0yisYQMMjd%2Bb8GOqUBSrsWY%2FPexm9UZSjlPuXOQbuy%2Fu22jGlknPdsIVuCHQqZB5BhfWq02bhqnOhJQoHIkHEhSTJ6KCozPrGmOjxSkpQCdsqZgjVSwO%2B5leGW4wckFAWhyhbup7Mf8sr1zgtBYTzP000254WXnxvT8xYOasaEj%2Bxda4fD8MCUcFoLpAZYG23nr%2FEIgySWOAsptpeGF1yfc3Z0Op08MbAJ8%2Fw%2F8NJhrak1&X-Amz-Signature=dbc38cba3f9d87159e5efa3bcf13828216f3f1b60bdf85839040a0b5a997aff7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
