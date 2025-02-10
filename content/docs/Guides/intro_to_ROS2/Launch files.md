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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CFP5OZ4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaHkgdA%2B6FxeG3gd3AcbF9rF2X83%2BT%2FpMdDEwMnXxmYwIhAKokV9ZX%2FCWPg0NCiFXh6B8FGAiiYWC4Q91G98EVb88KKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO3QR7Wd4fHaAW8uwq3APIrDLtYaV0d%2Bxfu8Kn23IDByBIh4FHh%2BB%2F49Q5jkycNM04pQb6A6p88%2BF8FZk0TP2lqsjUdCW6xyXenpeEhrwXRqkADfIRKm1to5l8liJaDPFXuDV696fDn7GQhHVdAZlTyJ%2BOqcdNDtrHpYJFbUnQXYVqjB1p3tpRdZJd%2BAUFr9ZV6p2j039wO0M5EAFL1oOhcExxNffS%2F3y9rVRLZrcRrzPL20ev6GktsvEv2xjiXuiZYmwuYD52KlyWa1OjG6AqaQuKkIHTU6XMeURAVC1rYsJIWx5Imqbm0XIMQmWNnmIX0W%2FzsHOhbOdvqQcW9HgDfcnfnFgJlNE%2BsErQmaW5jdR030RcbPF16Dg0HwcuHZul789P8V2fTggKmgBfp7H2DpNASQcGkmgKZUzm6m%2F%2B2JMdiWDIbYoJEmT6tkwZLC0K4NnDa%2Fh3FWBV0ZPMTa5gDCB3Q9Wcl8YoRpNN4iFymFF1BDeY%2Fjb0jj%2F5Bwlwau97eF6nbDg3kUasbbt%2BDcq57rvSpUMqTspPwHGMnOdh8wSPzpR5gieMkVQDmmuN1MkOYRUUi8vJITgTwgxgDOGKsJ0sAA1Cgrf8XVqcx%2BtqK9ein9zYaRQdRrvVTiKmfggrCfGSWuWXqmJWiDCB%2BqW9BjqkAWbyYl9X%2BuwKe%2F855JE6RYrws%2FvixQKdG%2FDpG7SNfESDomlmCjYl6jrz3tZe1B%2FI%2FZpXWT%2BQrgAA5fNYVD1oNRXFhtr9B9DlZhgs8PcexuNY%2BRscrfDFzWinE5d6KeHMczUNVNT7xmxZ4TdyDPYXk3KDvNzp887i2z8h8yPSc2R2ysH4Y8Pjpt%2B8PPRp8eYGcQthQBXr8N3EDKjqFMXQ%2FpinOnRo&X-Amz-Signature=c68f50ec3773e92f56ecc53b7e8e458f9fe7008c9b2e5bd45f3a22edd7725542&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CFP5OZ4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaHkgdA%2B6FxeG3gd3AcbF9rF2X83%2BT%2FpMdDEwMnXxmYwIhAKokV9ZX%2FCWPg0NCiFXh6B8FGAiiYWC4Q91G98EVb88KKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO3QR7Wd4fHaAW8uwq3APIrDLtYaV0d%2Bxfu8Kn23IDByBIh4FHh%2BB%2F49Q5jkycNM04pQb6A6p88%2BF8FZk0TP2lqsjUdCW6xyXenpeEhrwXRqkADfIRKm1to5l8liJaDPFXuDV696fDn7GQhHVdAZlTyJ%2BOqcdNDtrHpYJFbUnQXYVqjB1p3tpRdZJd%2BAUFr9ZV6p2j039wO0M5EAFL1oOhcExxNffS%2F3y9rVRLZrcRrzPL20ev6GktsvEv2xjiXuiZYmwuYD52KlyWa1OjG6AqaQuKkIHTU6XMeURAVC1rYsJIWx5Imqbm0XIMQmWNnmIX0W%2FzsHOhbOdvqQcW9HgDfcnfnFgJlNE%2BsErQmaW5jdR030RcbPF16Dg0HwcuHZul789P8V2fTggKmgBfp7H2DpNASQcGkmgKZUzm6m%2F%2B2JMdiWDIbYoJEmT6tkwZLC0K4NnDa%2Fh3FWBV0ZPMTa5gDCB3Q9Wcl8YoRpNN4iFymFF1BDeY%2Fjb0jj%2F5Bwlwau97eF6nbDg3kUasbbt%2BDcq57rvSpUMqTspPwHGMnOdh8wSPzpR5gieMkVQDmmuN1MkOYRUUi8vJITgTwgxgDOGKsJ0sAA1Cgrf8XVqcx%2BtqK9ein9zYaRQdRrvVTiKmfggrCfGSWuWXqmJWiDCB%2BqW9BjqkAWbyYl9X%2BuwKe%2F855JE6RYrws%2FvixQKdG%2FDpG7SNfESDomlmCjYl6jrz3tZe1B%2FI%2FZpXWT%2BQrgAA5fNYVD1oNRXFhtr9B9DlZhgs8PcexuNY%2BRscrfDFzWinE5d6KeHMczUNVNT7xmxZ4TdyDPYXk3KDvNzp887i2z8h8yPSc2R2ysH4Y8Pjpt%2B8PPRp8eYGcQthQBXr8N3EDKjqFMXQ%2FpinOnRo&X-Amz-Signature=36009327e2d1b6d9828cc80d21e6822cdef0c68e95f7a51e121f138e82a8ea7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CFP5OZ4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaHkgdA%2B6FxeG3gd3AcbF9rF2X83%2BT%2FpMdDEwMnXxmYwIhAKokV9ZX%2FCWPg0NCiFXh6B8FGAiiYWC4Q91G98EVb88KKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO3QR7Wd4fHaAW8uwq3APIrDLtYaV0d%2Bxfu8Kn23IDByBIh4FHh%2BB%2F49Q5jkycNM04pQb6A6p88%2BF8FZk0TP2lqsjUdCW6xyXenpeEhrwXRqkADfIRKm1to5l8liJaDPFXuDV696fDn7GQhHVdAZlTyJ%2BOqcdNDtrHpYJFbUnQXYVqjB1p3tpRdZJd%2BAUFr9ZV6p2j039wO0M5EAFL1oOhcExxNffS%2F3y9rVRLZrcRrzPL20ev6GktsvEv2xjiXuiZYmwuYD52KlyWa1OjG6AqaQuKkIHTU6XMeURAVC1rYsJIWx5Imqbm0XIMQmWNnmIX0W%2FzsHOhbOdvqQcW9HgDfcnfnFgJlNE%2BsErQmaW5jdR030RcbPF16Dg0HwcuHZul789P8V2fTggKmgBfp7H2DpNASQcGkmgKZUzm6m%2F%2B2JMdiWDIbYoJEmT6tkwZLC0K4NnDa%2Fh3FWBV0ZPMTa5gDCB3Q9Wcl8YoRpNN4iFymFF1BDeY%2Fjb0jj%2F5Bwlwau97eF6nbDg3kUasbbt%2BDcq57rvSpUMqTspPwHGMnOdh8wSPzpR5gieMkVQDmmuN1MkOYRUUi8vJITgTwgxgDOGKsJ0sAA1Cgrf8XVqcx%2BtqK9ein9zYaRQdRrvVTiKmfggrCfGSWuWXqmJWiDCB%2BqW9BjqkAWbyYl9X%2BuwKe%2F855JE6RYrws%2FvixQKdG%2FDpG7SNfESDomlmCjYl6jrz3tZe1B%2FI%2FZpXWT%2BQrgAA5fNYVD1oNRXFhtr9B9DlZhgs8PcexuNY%2BRscrfDFzWinE5d6KeHMczUNVNT7xmxZ4TdyDPYXk3KDvNzp887i2z8h8yPSc2R2ysH4Y8Pjpt%2B8PPRp8eYGcQthQBXr8N3EDKjqFMXQ%2FpinOnRo&X-Amz-Signature=abe238fb85c7dc56c43abb7cfd2749a53e9ce8bf27527c6655ba420f569e013d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
