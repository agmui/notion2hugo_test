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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SC7S6T%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCfLHVA7oBSI19jHMDiLHS0%2BFr8fLRkg3nbVYYq0kqFRQIhAMmsODn7xk9W7D3VufRoCreuN1K3oDhsQyrkbI9yQvjtKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHvLIzVT28tBodOR0q3ANZW2mcBQgekkvCE2VBu%2B384TQGZgHfxXKuuPfzXngvTq3GO%2BY0144IZ0Q8s8lV5XLYYxRuNYtCjqImqqvHoHfNDt3Rw7YX5fTGd32LEJv5P88pecnNUj13s%2B6C4venP%2FSZwzsQr%2FM187RrY9Qt6TkOLip65Shzaun3XDycHT7mbkvlvXVRHJfKf%2FlTAUZHjmIM7OmbjF99xikE4rV0NIfDWkWxcnX297D6nYxBfB8ab7T5zvSm77gKS%2FWrr2g9o2W5UbqHjzxXBL0prY5bapnJ6rChPVdQABiUqm44%2F%2BUfeX7cYkytEoYGBYBpxJjhHjVTuNea1coLJU169dvQscv25dVHv%2By9umBVksTUJ5kquK8MyotaifUQt8PFSySpM1FQIP97TvDPicCl3HqU0FwvgjrR2XVzBGAkwlSMD8WRRn0jRw0czGM3dTNjEnAaQuaQtLRQS1uIs7FBrVuL7YfdfETJEzQ3KER5aso%2FcygIeZOsSiM87HHHcI2sdo0jcRUJe6%2FKgQKVHbnv5jdApHYslUnYqcyZg7Ah1%2F69Yl3buXTZsZ0qF7fm%2FLW4q3MZ3hYMZ3iBxH%2BFZvzv4jBmqHzH3NaJtR0blrPTsJGAavQSuLbPfr7Rmxq3pBp3TTDjkIq%2BBjqkAa0CyLlMSu2o5%2FeWmMRuzWx52fIsKTIyUubAqCK7ULcA0I2DPf1a6eEy%2F0Fkid8mSz5jWTBCa735EdBTwhssJrAc%2B9XUQr4lhmotzy7wocD9gI9t%2Bt2z3HU6ROLHUJBz%2FF622orOh1IuzjCwomfvDu2YyOfaWNRzO21U8jDUO7hatbskXzN3hBZ1Q6sGQHjZGqvVZTn8u6sLCpjk4w5mUqZ4gChN&X-Amz-Signature=6385cde18d655e9959427366dba7b3eeaf78bf7b5c294e74ad6a82c55a6eb4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SC7S6T%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCfLHVA7oBSI19jHMDiLHS0%2BFr8fLRkg3nbVYYq0kqFRQIhAMmsODn7xk9W7D3VufRoCreuN1K3oDhsQyrkbI9yQvjtKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHvLIzVT28tBodOR0q3ANZW2mcBQgekkvCE2VBu%2B384TQGZgHfxXKuuPfzXngvTq3GO%2BY0144IZ0Q8s8lV5XLYYxRuNYtCjqImqqvHoHfNDt3Rw7YX5fTGd32LEJv5P88pecnNUj13s%2B6C4venP%2FSZwzsQr%2FM187RrY9Qt6TkOLip65Shzaun3XDycHT7mbkvlvXVRHJfKf%2FlTAUZHjmIM7OmbjF99xikE4rV0NIfDWkWxcnX297D6nYxBfB8ab7T5zvSm77gKS%2FWrr2g9o2W5UbqHjzxXBL0prY5bapnJ6rChPVdQABiUqm44%2F%2BUfeX7cYkytEoYGBYBpxJjhHjVTuNea1coLJU169dvQscv25dVHv%2By9umBVksTUJ5kquK8MyotaifUQt8PFSySpM1FQIP97TvDPicCl3HqU0FwvgjrR2XVzBGAkwlSMD8WRRn0jRw0czGM3dTNjEnAaQuaQtLRQS1uIs7FBrVuL7YfdfETJEzQ3KER5aso%2FcygIeZOsSiM87HHHcI2sdo0jcRUJe6%2FKgQKVHbnv5jdApHYslUnYqcyZg7Ah1%2F69Yl3buXTZsZ0qF7fm%2FLW4q3MZ3hYMZ3iBxH%2BFZvzv4jBmqHzH3NaJtR0blrPTsJGAavQSuLbPfr7Rmxq3pBp3TTDjkIq%2BBjqkAa0CyLlMSu2o5%2FeWmMRuzWx52fIsKTIyUubAqCK7ULcA0I2DPf1a6eEy%2F0Fkid8mSz5jWTBCa735EdBTwhssJrAc%2B9XUQr4lhmotzy7wocD9gI9t%2Bt2z3HU6ROLHUJBz%2FF622orOh1IuzjCwomfvDu2YyOfaWNRzO21U8jDUO7hatbskXzN3hBZ1Q6sGQHjZGqvVZTn8u6sLCpjk4w5mUqZ4gChN&X-Amz-Signature=d303e2c591a525db1583f6de455143b168cbd77b889b32b87ab04d936714e8ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SC7S6T%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCfLHVA7oBSI19jHMDiLHS0%2BFr8fLRkg3nbVYYq0kqFRQIhAMmsODn7xk9W7D3VufRoCreuN1K3oDhsQyrkbI9yQvjtKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHvLIzVT28tBodOR0q3ANZW2mcBQgekkvCE2VBu%2B384TQGZgHfxXKuuPfzXngvTq3GO%2BY0144IZ0Q8s8lV5XLYYxRuNYtCjqImqqvHoHfNDt3Rw7YX5fTGd32LEJv5P88pecnNUj13s%2B6C4venP%2FSZwzsQr%2FM187RrY9Qt6TkOLip65Shzaun3XDycHT7mbkvlvXVRHJfKf%2FlTAUZHjmIM7OmbjF99xikE4rV0NIfDWkWxcnX297D6nYxBfB8ab7T5zvSm77gKS%2FWrr2g9o2W5UbqHjzxXBL0prY5bapnJ6rChPVdQABiUqm44%2F%2BUfeX7cYkytEoYGBYBpxJjhHjVTuNea1coLJU169dvQscv25dVHv%2By9umBVksTUJ5kquK8MyotaifUQt8PFSySpM1FQIP97TvDPicCl3HqU0FwvgjrR2XVzBGAkwlSMD8WRRn0jRw0czGM3dTNjEnAaQuaQtLRQS1uIs7FBrVuL7YfdfETJEzQ3KER5aso%2FcygIeZOsSiM87HHHcI2sdo0jcRUJe6%2FKgQKVHbnv5jdApHYslUnYqcyZg7Ah1%2F69Yl3buXTZsZ0qF7fm%2FLW4q3MZ3hYMZ3iBxH%2BFZvzv4jBmqHzH3NaJtR0blrPTsJGAavQSuLbPfr7Rmxq3pBp3TTDjkIq%2BBjqkAa0CyLlMSu2o5%2FeWmMRuzWx52fIsKTIyUubAqCK7ULcA0I2DPf1a6eEy%2F0Fkid8mSz5jWTBCa735EdBTwhssJrAc%2B9XUQr4lhmotzy7wocD9gI9t%2Bt2z3HU6ROLHUJBz%2FF622orOh1IuzjCwomfvDu2YyOfaWNRzO21U8jDUO7hatbskXzN3hBZ1Q6sGQHjZGqvVZTn8u6sLCpjk4w5mUqZ4gChN&X-Amz-Signature=d261e74ae06b52146e8806e8d0f4523a9918a352c2f1d01cd45a02159a6f5565&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
