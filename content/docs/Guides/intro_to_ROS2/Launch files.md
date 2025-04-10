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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5YYFRT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHmtUirjP%2F%2F%2FkbSTq6gU%2Fb9YPf6RaIqp21YTMWa0YCNuAiEAnI05MA0CNI0fa7RaPpjGcLT45vLv5L3Cz2vgVjgLKgcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBSZXQ8b3D0Vd7YbircA86yPr%2BoZ7YTws7z6qM4i%2BZDkCbLxZ2eyuj9up1dh%2FkaqJ4pf5hhNpCjpcvqHaZnPJj4b%2FlrJxGpy9oZkbF8Me4hpiSUFBj3HLx7HERs6G89v2W46oaS2tSMWPus%2BYYxuLrkE1iCLueVv0t60VrAKX00SbdwActkALj05CY%2BoicpOvRxXqNA3r6BtDZRJWgrMq2KOIjZ1OsGLelTQuM%2B2PMno6HA9eQoHf8KN07msrTEbcGUmZ2riCs7rq%2BwaLjSOynQRs8abblnw7mXhP5Sk0rDfruul6odvDQD0xx9nrZvqqijzWiyQEXow3Q%2FNRyMuNoqhYk2XwkChrKyKc600vuVfiudjTYXQEu0RoLxhXiSFEpXpkv36%2BagKxISQ7G0hwqsywEltW2CToPuINobsHKUPW8Fq2eyBUzSOkbLxExy7GJAWLBW3%2BfrawaStoQ9l8tlR0196%2FpM4ys%2Fems%2BRoMRfj6gyBuWNGkUBaNbec67wINP0UujUOgwNh%2B00Lv%2FpqHtTxAeieHHp%2FrrsOLOyFVwF%2F2KgGdlciedLvVaZ1d11aA9nmzQy6uYp2HfFYkPqLvErUNMmQSUaFeVo0qZLTsKtx49z8bqmQMIp4wPrDjsPXQsapsO%2FH%2B4sCpCMLjF3L8GOqUBmfoG8Kye8A3mtsQOdo6lvmsT463xF5GYrdpno%2FkR6wmwQHV5X3d7e%2Ffq%2B6AbdI7SqiRAGtqnvkGgGzdmdG%2FGBR9vxA6jyQD36cWYxxoa%2BJ1CiJIHjl1SJ9GovkLiLnj9nWg0OCKIZd1RwAiXEeOl%2BsulHK9HLMZUKJaHhtlrDfDl3confnUN7e5nVXdRV1v1zkW23B5XLwHcNdv%2FdhPvfEspzhoE&X-Amz-Signature=3ef6870da43e658952dfe6fc842932ac95ee8e8801e1f1edfb4860a7a5e1fb2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5YYFRT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHmtUirjP%2F%2F%2FkbSTq6gU%2Fb9YPf6RaIqp21YTMWa0YCNuAiEAnI05MA0CNI0fa7RaPpjGcLT45vLv5L3Cz2vgVjgLKgcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBSZXQ8b3D0Vd7YbircA86yPr%2BoZ7YTws7z6qM4i%2BZDkCbLxZ2eyuj9up1dh%2FkaqJ4pf5hhNpCjpcvqHaZnPJj4b%2FlrJxGpy9oZkbF8Me4hpiSUFBj3HLx7HERs6G89v2W46oaS2tSMWPus%2BYYxuLrkE1iCLueVv0t60VrAKX00SbdwActkALj05CY%2BoicpOvRxXqNA3r6BtDZRJWgrMq2KOIjZ1OsGLelTQuM%2B2PMno6HA9eQoHf8KN07msrTEbcGUmZ2riCs7rq%2BwaLjSOynQRs8abblnw7mXhP5Sk0rDfruul6odvDQD0xx9nrZvqqijzWiyQEXow3Q%2FNRyMuNoqhYk2XwkChrKyKc600vuVfiudjTYXQEu0RoLxhXiSFEpXpkv36%2BagKxISQ7G0hwqsywEltW2CToPuINobsHKUPW8Fq2eyBUzSOkbLxExy7GJAWLBW3%2BfrawaStoQ9l8tlR0196%2FpM4ys%2Fems%2BRoMRfj6gyBuWNGkUBaNbec67wINP0UujUOgwNh%2B00Lv%2FpqHtTxAeieHHp%2FrrsOLOyFVwF%2F2KgGdlciedLvVaZ1d11aA9nmzQy6uYp2HfFYkPqLvErUNMmQSUaFeVo0qZLTsKtx49z8bqmQMIp4wPrDjsPXQsapsO%2FH%2B4sCpCMLjF3L8GOqUBmfoG8Kye8A3mtsQOdo6lvmsT463xF5GYrdpno%2FkR6wmwQHV5X3d7e%2Ffq%2B6AbdI7SqiRAGtqnvkGgGzdmdG%2FGBR9vxA6jyQD36cWYxxoa%2BJ1CiJIHjl1SJ9GovkLiLnj9nWg0OCKIZd1RwAiXEeOl%2BsulHK9HLMZUKJaHhtlrDfDl3confnUN7e5nVXdRV1v1zkW23B5XLwHcNdv%2FdhPvfEspzhoE&X-Amz-Signature=690e376fe2c38acb03b8a8b1c14be0e7f8089286343e5c5f900d0b4ab610a8b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5YYFRT%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHmtUirjP%2F%2F%2FkbSTq6gU%2Fb9YPf6RaIqp21YTMWa0YCNuAiEAnI05MA0CNI0fa7RaPpjGcLT45vLv5L3Cz2vgVjgLKgcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBSZXQ8b3D0Vd7YbircA86yPr%2BoZ7YTws7z6qM4i%2BZDkCbLxZ2eyuj9up1dh%2FkaqJ4pf5hhNpCjpcvqHaZnPJj4b%2FlrJxGpy9oZkbF8Me4hpiSUFBj3HLx7HERs6G89v2W46oaS2tSMWPus%2BYYxuLrkE1iCLueVv0t60VrAKX00SbdwActkALj05CY%2BoicpOvRxXqNA3r6BtDZRJWgrMq2KOIjZ1OsGLelTQuM%2B2PMno6HA9eQoHf8KN07msrTEbcGUmZ2riCs7rq%2BwaLjSOynQRs8abblnw7mXhP5Sk0rDfruul6odvDQD0xx9nrZvqqijzWiyQEXow3Q%2FNRyMuNoqhYk2XwkChrKyKc600vuVfiudjTYXQEu0RoLxhXiSFEpXpkv36%2BagKxISQ7G0hwqsywEltW2CToPuINobsHKUPW8Fq2eyBUzSOkbLxExy7GJAWLBW3%2BfrawaStoQ9l8tlR0196%2FpM4ys%2Fems%2BRoMRfj6gyBuWNGkUBaNbec67wINP0UujUOgwNh%2B00Lv%2FpqHtTxAeieHHp%2FrrsOLOyFVwF%2F2KgGdlciedLvVaZ1d11aA9nmzQy6uYp2HfFYkPqLvErUNMmQSUaFeVo0qZLTsKtx49z8bqmQMIp4wPrDjsPXQsapsO%2FH%2B4sCpCMLjF3L8GOqUBmfoG8Kye8A3mtsQOdo6lvmsT463xF5GYrdpno%2FkR6wmwQHV5X3d7e%2Ffq%2B6AbdI7SqiRAGtqnvkGgGzdmdG%2FGBR9vxA6jyQD36cWYxxoa%2BJ1CiJIHjl1SJ9GovkLiLnj9nWg0OCKIZd1RwAiXEeOl%2BsulHK9HLMZUKJaHhtlrDfDl3confnUN7e5nVXdRV1v1zkW23B5XLwHcNdv%2FdhPvfEspzhoE&X-Amz-Signature=58b5372651bc67f1d9c6876d995a8c5f62d4cf3261b50d1f51560ba82ac557ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
