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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQQ3YJD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCICb%2FUaQ6lHoIcFZb8qN6yzRuF5f7konrOWaNIcjYYR1OAiA0vWBbTYnJ5P5NEfVdSSyGo9ZzHc1QOUjxMWR7w3rekSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2F4LSd5j0dKLv16KNKtwD30Ld9LVH%2F3R4F%2BYrHRANexBpdBUVB4yYUMlcXecdViPnnDdYGNssMmz7gamHoK9k4tlygAw3rh3kZl49rpa75Lcpyj%2FEntlNr1iHujPhrxFqm7jmGFHcmvQL%2Bf3QQE2%2Bf8PfwWfaEaUlN9wRbLl5nsg61PQi4nD%2FHRkn1LBZNt1s6jA4jyTeDsIkuel5EtxswSqzILrG%2FqsjCmVMNubaJ9v7O6vTHRxw6oO9k3L9zv6j7Nl%2FF4smXDYyJQ5q18hGeToib4B7RBemJ6MTnKpcVn%2FAoMLbAPjQT66pf1ZQOS0JmkpB8rar2v21Y%2FocItedlDmeKGQDSVgiKjNnVkggawJD29NBEUhQ0LrcHQLz7WB3QBYW6YvwQsHWbacGnoBCUn0TX1V1vvv3guwjc20d7l73rXCu3Xc%2Fr0QGo%2FpO2lw5i0hZAF2bl37cHOZPrX75ddzI%2FEC6%2BLnZxCz2zfzyc3rxuAPSXWC2oPSscUn5LTNVyIahAygAWbNOzoujYmNoE2L0ZHgkDdgFMDJNNZsKIg778dnBmPJCIClG4EQR5OQCCw2humNNwc%2FoS8GUATZIwjce%2B0NFbYpVlA%2FzQqMI%2BltHkK4A3SeJoIN7Kp0G5muvGtekHneB982U2DYw5J%2BjwwY6pgEvGTMOpWPE5hdSiHN6sIPj%2FtTbdxjPLCwTKf2UX0N7YFqgAPbt6IKoiobvbLU8kNVWJq%2BOIzsHasPZ4%2FrgWT1OU1dF91IxqwDnohJdo8Y4f%2BcOZ7KpQvYVCHdAlmKQgNgedPFDdXAIaJnjMj2tTmgP6SMtIbkc%2B4coHhnNQrm5hy8%2FWgUIv9tyzCmoa3UexGsV%2FRT%2BEkAT9EpUlXYh9%2FVxHpfiG%2FOQ&X-Amz-Signature=fbc060a3faa973ae27fb17898010c04920dc05c06e710fea149adbd6043a50c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQQ3YJD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCICb%2FUaQ6lHoIcFZb8qN6yzRuF5f7konrOWaNIcjYYR1OAiA0vWBbTYnJ5P5NEfVdSSyGo9ZzHc1QOUjxMWR7w3rekSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2F4LSd5j0dKLv16KNKtwD30Ld9LVH%2F3R4F%2BYrHRANexBpdBUVB4yYUMlcXecdViPnnDdYGNssMmz7gamHoK9k4tlygAw3rh3kZl49rpa75Lcpyj%2FEntlNr1iHujPhrxFqm7jmGFHcmvQL%2Bf3QQE2%2Bf8PfwWfaEaUlN9wRbLl5nsg61PQi4nD%2FHRkn1LBZNt1s6jA4jyTeDsIkuel5EtxswSqzILrG%2FqsjCmVMNubaJ9v7O6vTHRxw6oO9k3L9zv6j7Nl%2FF4smXDYyJQ5q18hGeToib4B7RBemJ6MTnKpcVn%2FAoMLbAPjQT66pf1ZQOS0JmkpB8rar2v21Y%2FocItedlDmeKGQDSVgiKjNnVkggawJD29NBEUhQ0LrcHQLz7WB3QBYW6YvwQsHWbacGnoBCUn0TX1V1vvv3guwjc20d7l73rXCu3Xc%2Fr0QGo%2FpO2lw5i0hZAF2bl37cHOZPrX75ddzI%2FEC6%2BLnZxCz2zfzyc3rxuAPSXWC2oPSscUn5LTNVyIahAygAWbNOzoujYmNoE2L0ZHgkDdgFMDJNNZsKIg778dnBmPJCIClG4EQR5OQCCw2humNNwc%2FoS8GUATZIwjce%2B0NFbYpVlA%2FzQqMI%2BltHkK4A3SeJoIN7Kp0G5muvGtekHneB982U2DYw5J%2BjwwY6pgEvGTMOpWPE5hdSiHN6sIPj%2FtTbdxjPLCwTKf2UX0N7YFqgAPbt6IKoiobvbLU8kNVWJq%2BOIzsHasPZ4%2FrgWT1OU1dF91IxqwDnohJdo8Y4f%2BcOZ7KpQvYVCHdAlmKQgNgedPFDdXAIaJnjMj2tTmgP6SMtIbkc%2B4coHhnNQrm5hy8%2FWgUIv9tyzCmoa3UexGsV%2FRT%2BEkAT9EpUlXYh9%2FVxHpfiG%2FOQ&X-Amz-Signature=4643c3b1528a051aec1f78dbfab4668ca327a6a953a31502c395d038d55ae16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQQ3YJD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCICb%2FUaQ6lHoIcFZb8qN6yzRuF5f7konrOWaNIcjYYR1OAiA0vWBbTYnJ5P5NEfVdSSyGo9ZzHc1QOUjxMWR7w3rekSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2F4LSd5j0dKLv16KNKtwD30Ld9LVH%2F3R4F%2BYrHRANexBpdBUVB4yYUMlcXecdViPnnDdYGNssMmz7gamHoK9k4tlygAw3rh3kZl49rpa75Lcpyj%2FEntlNr1iHujPhrxFqm7jmGFHcmvQL%2Bf3QQE2%2Bf8PfwWfaEaUlN9wRbLl5nsg61PQi4nD%2FHRkn1LBZNt1s6jA4jyTeDsIkuel5EtxswSqzILrG%2FqsjCmVMNubaJ9v7O6vTHRxw6oO9k3L9zv6j7Nl%2FF4smXDYyJQ5q18hGeToib4B7RBemJ6MTnKpcVn%2FAoMLbAPjQT66pf1ZQOS0JmkpB8rar2v21Y%2FocItedlDmeKGQDSVgiKjNnVkggawJD29NBEUhQ0LrcHQLz7WB3QBYW6YvwQsHWbacGnoBCUn0TX1V1vvv3guwjc20d7l73rXCu3Xc%2Fr0QGo%2FpO2lw5i0hZAF2bl37cHOZPrX75ddzI%2FEC6%2BLnZxCz2zfzyc3rxuAPSXWC2oPSscUn5LTNVyIahAygAWbNOzoujYmNoE2L0ZHgkDdgFMDJNNZsKIg778dnBmPJCIClG4EQR5OQCCw2humNNwc%2FoS8GUATZIwjce%2B0NFbYpVlA%2FzQqMI%2BltHkK4A3SeJoIN7Kp0G5muvGtekHneB982U2DYw5J%2BjwwY6pgEvGTMOpWPE5hdSiHN6sIPj%2FtTbdxjPLCwTKf2UX0N7YFqgAPbt6IKoiobvbLU8kNVWJq%2BOIzsHasPZ4%2FrgWT1OU1dF91IxqwDnohJdo8Y4f%2BcOZ7KpQvYVCHdAlmKQgNgedPFDdXAIaJnjMj2tTmgP6SMtIbkc%2B4coHhnNQrm5hy8%2FWgUIv9tyzCmoa3UexGsV%2FRT%2BEkAT9EpUlXYh9%2FVxHpfiG%2FOQ&X-Amz-Signature=c29fa8b6c1326bcd9c3237e63fb3364ecb17b7cb63e7fccf1eb2282c79a327e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
