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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666722DQ3Z%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCH0xAycUo6iVb%2Bzc04mQ3TFfUbv2UMo4ky6r1UfbLIesCIQDaYd8bTtosCMQoqCdI8FldfUbI4xcau1YbNyIPk4233ir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMZYN2eYip6l50QF%2B7KtwDgVOisdXjHeo5x428okkI2XdGpVWwOOP1IFrIRTFrC7ntrFm0p%2FjkJOrSpju2ZrpTK%2F%2BQbM43qdA6ukNE2gZvf4GGwXIV4yax2jkAAyAS2X6WV5D%2FrA5%2FJAgkjA%2Fa2WMqWg5S%2BC%2FNoCOuZqf2gM6mGgBVtQ1K6F3CP9P3iIdWx4YoYM6O7G0jdbp%2Fws9SybfWAktDGN7FYIG2HH37XWWXCGPiMBLtegynfNNxTojN7jkwVrBZeAU38anLfceKkzpPEm2%2BGYHl4g0mD4EX9UsQnOrERRdqx%2BXQ%2BH3hleOzgQI4FsvcewKQBWt%2FpWGUzkcpy2UCl7Un7CtnGHMiqpqFefFfTrQemRPV3AQR1Se2c6PX9LjqcvIJxSdTx0ECH9I49YF7rC%2FpC1AfjPfSoQmABCbqBPn4NgRZT6IHQiUZtBqiUFtWYsSR48%2B0czXkaeI5ewjRJCffiK4Z6xjg1aTYqFnEfbXdnlweif1zUM6SC0tZW1ZAF4Gvl9m%2FuGBMxxWXzsnU7A9XxqNa48Oi5pdrlVsABFvyoEZcu6LK2tzLYoB8QjTAQpuFqu2GDbhxLg4mUgrkBAJPnLT5jU9C5dqs%2BRN7FgSesFf90yffDjHpRJggXHEGjiweLkMEnt0woL7dwwY6pgFcaDSqvx1qnIn4ddwUfIHQROZtsBqv3f6k%2FDTdfp6zEwinG7W8dQjDowAD2mUEmxPod3Q28SGftheoFpQHsp%2FsGV0aOhY7hAcAMgKH600jtHEs82kjEHgWcqfl9qmf1O3JZAnh7ZWsx7O6h45uPRQYpvWdDGV3enrHJ3Jmlaz7CauiHYdBAV9tSGwOcz51ajBrBCfX3C3xXH0NcMGQRkn8bh1d24vM&X-Amz-Signature=7ca480580f13a3717c22d4b3903014911857e77266c462230f8227602571567e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666722DQ3Z%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCH0xAycUo6iVb%2Bzc04mQ3TFfUbv2UMo4ky6r1UfbLIesCIQDaYd8bTtosCMQoqCdI8FldfUbI4xcau1YbNyIPk4233ir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMZYN2eYip6l50QF%2B7KtwDgVOisdXjHeo5x428okkI2XdGpVWwOOP1IFrIRTFrC7ntrFm0p%2FjkJOrSpju2ZrpTK%2F%2BQbM43qdA6ukNE2gZvf4GGwXIV4yax2jkAAyAS2X6WV5D%2FrA5%2FJAgkjA%2Fa2WMqWg5S%2BC%2FNoCOuZqf2gM6mGgBVtQ1K6F3CP9P3iIdWx4YoYM6O7G0jdbp%2Fws9SybfWAktDGN7FYIG2HH37XWWXCGPiMBLtegynfNNxTojN7jkwVrBZeAU38anLfceKkzpPEm2%2BGYHl4g0mD4EX9UsQnOrERRdqx%2BXQ%2BH3hleOzgQI4FsvcewKQBWt%2FpWGUzkcpy2UCl7Un7CtnGHMiqpqFefFfTrQemRPV3AQR1Se2c6PX9LjqcvIJxSdTx0ECH9I49YF7rC%2FpC1AfjPfSoQmABCbqBPn4NgRZT6IHQiUZtBqiUFtWYsSR48%2B0czXkaeI5ewjRJCffiK4Z6xjg1aTYqFnEfbXdnlweif1zUM6SC0tZW1ZAF4Gvl9m%2FuGBMxxWXzsnU7A9XxqNa48Oi5pdrlVsABFvyoEZcu6LK2tzLYoB8QjTAQpuFqu2GDbhxLg4mUgrkBAJPnLT5jU9C5dqs%2BRN7FgSesFf90yffDjHpRJggXHEGjiweLkMEnt0woL7dwwY6pgFcaDSqvx1qnIn4ddwUfIHQROZtsBqv3f6k%2FDTdfp6zEwinG7W8dQjDowAD2mUEmxPod3Q28SGftheoFpQHsp%2FsGV0aOhY7hAcAMgKH600jtHEs82kjEHgWcqfl9qmf1O3JZAnh7ZWsx7O6h45uPRQYpvWdDGV3enrHJ3Jmlaz7CauiHYdBAV9tSGwOcz51ajBrBCfX3C3xXH0NcMGQRkn8bh1d24vM&X-Amz-Signature=36f354b5c510fe3e570cd2c5c6f7f9d150363b3e3c757dce0e161425e7a77711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666722DQ3Z%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCH0xAycUo6iVb%2Bzc04mQ3TFfUbv2UMo4ky6r1UfbLIesCIQDaYd8bTtosCMQoqCdI8FldfUbI4xcau1YbNyIPk4233ir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMZYN2eYip6l50QF%2B7KtwDgVOisdXjHeo5x428okkI2XdGpVWwOOP1IFrIRTFrC7ntrFm0p%2FjkJOrSpju2ZrpTK%2F%2BQbM43qdA6ukNE2gZvf4GGwXIV4yax2jkAAyAS2X6WV5D%2FrA5%2FJAgkjA%2Fa2WMqWg5S%2BC%2FNoCOuZqf2gM6mGgBVtQ1K6F3CP9P3iIdWx4YoYM6O7G0jdbp%2Fws9SybfWAktDGN7FYIG2HH37XWWXCGPiMBLtegynfNNxTojN7jkwVrBZeAU38anLfceKkzpPEm2%2BGYHl4g0mD4EX9UsQnOrERRdqx%2BXQ%2BH3hleOzgQI4FsvcewKQBWt%2FpWGUzkcpy2UCl7Un7CtnGHMiqpqFefFfTrQemRPV3AQR1Se2c6PX9LjqcvIJxSdTx0ECH9I49YF7rC%2FpC1AfjPfSoQmABCbqBPn4NgRZT6IHQiUZtBqiUFtWYsSR48%2B0czXkaeI5ewjRJCffiK4Z6xjg1aTYqFnEfbXdnlweif1zUM6SC0tZW1ZAF4Gvl9m%2FuGBMxxWXzsnU7A9XxqNa48Oi5pdrlVsABFvyoEZcu6LK2tzLYoB8QjTAQpuFqu2GDbhxLg4mUgrkBAJPnLT5jU9C5dqs%2BRN7FgSesFf90yffDjHpRJggXHEGjiweLkMEnt0woL7dwwY6pgFcaDSqvx1qnIn4ddwUfIHQROZtsBqv3f6k%2FDTdfp6zEwinG7W8dQjDowAD2mUEmxPod3Q28SGftheoFpQHsp%2FsGV0aOhY7hAcAMgKH600jtHEs82kjEHgWcqfl9qmf1O3JZAnh7ZWsx7O6h45uPRQYpvWdDGV3enrHJ3Jmlaz7CauiHYdBAV9tSGwOcz51ajBrBCfX3C3xXH0NcMGQRkn8bh1d24vM&X-Amz-Signature=260e0529fa04128ce57779c30530ee2746fca887f4831cf9da28b959c545dc8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
