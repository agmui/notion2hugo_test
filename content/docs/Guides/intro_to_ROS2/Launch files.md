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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4JYY3I%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQo9ZGXXkyeXEeAZ2UTrFc%2BDmvSJuPgQDTyp94ATN8gIhAM7wkutGhtrgNJwWHb01wZ5Z%2BEJqgDOfWCxBN7lnm5yiKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3ERJlznVtF21dquIq3AMCsV014m25x4BjsLrzKdsT9jcKKyNzukFC9yKwYYSe%2Fy1bmNAq64vpkS%2F3%2Bz1d8DzfBqdy2fzhRoPTMvDG8F%2FOISaCMilU97Xg5iw8BfbfB5jLi5omMIaT1VwhZF6y%2Bs1FXAcNZb0iNQOKLc6qee%2BoxCM1hrhM9mpA7uc2CdZq8Ymt%2BrXrfX84nRmRO01UK6yOa%2FYUoX%2FV8QtgAArPvVtNVDHlTZkUUt2B%2BLCHpkLWnmpx1DhZTKdXNUVeX%2BpkqnTnaApb%2FP46jG2h66oalD2NrObB08TNRz1qMZRBrv%2Fs9FcL%2FO%2Fd9u8%2FqXPQ4SPxN2sXCXtaIHV0otdfGxhPBuLhqZgcIyjDCqTK2VCss%2F%2BJVgk6VDqXhXDLM%2FjmBL2%2BhEQjQA%2F66Zbn69HRX6CdO29dAE8fvEiWCDQ11tHzUAIuzs0%2B4i%2FCby0zmbo%2FPCr%2B9UJr21neBOENI4jWl3PaeKlEVgRqJLyKAeOzwzFKCqxamn8UpkBoxzqabQdV0kZqhB94xPKAK52UXVf0GIpjBOWlrIzMMdxUSsVpKBQgjLA9e8PPQPrD3%2FJQFtfqoTwGZmC5bIrrY0FJXbDeZF2D7qGIuYh0s9ooVwX3L1xIc%2BZIi2OU8Yk%2B8vrNd9FDvDClo7jDBjqkAchNcNc6y4bE1bavs6T5hCbrucGz5FN2YOAVielIf5J9pvYnCZTogf85FQoE%2FZZHimMFbWjadFdxSK3vLdvbim4hx%2FwAp1LgbcBf8S3IRkQl0Vg4zvOVBvXZCz2Ofib9Zb1qGnL6aT5w999Pm8lWVwGcIBcHdwdAME2U3qn%2FrqQH%2F5OvFNZKsV4K23u8kDLo6emXiMWKk0F05LV9HT5ZZ%2FJA9EgI&X-Amz-Signature=45343ca481a11f828ed15ccbb1c0ff0dc1a43d7631db433e70d07160062fcb85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4JYY3I%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQo9ZGXXkyeXEeAZ2UTrFc%2BDmvSJuPgQDTyp94ATN8gIhAM7wkutGhtrgNJwWHb01wZ5Z%2BEJqgDOfWCxBN7lnm5yiKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3ERJlznVtF21dquIq3AMCsV014m25x4BjsLrzKdsT9jcKKyNzukFC9yKwYYSe%2Fy1bmNAq64vpkS%2F3%2Bz1d8DzfBqdy2fzhRoPTMvDG8F%2FOISaCMilU97Xg5iw8BfbfB5jLi5omMIaT1VwhZF6y%2Bs1FXAcNZb0iNQOKLc6qee%2BoxCM1hrhM9mpA7uc2CdZq8Ymt%2BrXrfX84nRmRO01UK6yOa%2FYUoX%2FV8QtgAArPvVtNVDHlTZkUUt2B%2BLCHpkLWnmpx1DhZTKdXNUVeX%2BpkqnTnaApb%2FP46jG2h66oalD2NrObB08TNRz1qMZRBrv%2Fs9FcL%2FO%2Fd9u8%2FqXPQ4SPxN2sXCXtaIHV0otdfGxhPBuLhqZgcIyjDCqTK2VCss%2F%2BJVgk6VDqXhXDLM%2FjmBL2%2BhEQjQA%2F66Zbn69HRX6CdO29dAE8fvEiWCDQ11tHzUAIuzs0%2B4i%2FCby0zmbo%2FPCr%2B9UJr21neBOENI4jWl3PaeKlEVgRqJLyKAeOzwzFKCqxamn8UpkBoxzqabQdV0kZqhB94xPKAK52UXVf0GIpjBOWlrIzMMdxUSsVpKBQgjLA9e8PPQPrD3%2FJQFtfqoTwGZmC5bIrrY0FJXbDeZF2D7qGIuYh0s9ooVwX3L1xIc%2BZIi2OU8Yk%2B8vrNd9FDvDClo7jDBjqkAchNcNc6y4bE1bavs6T5hCbrucGz5FN2YOAVielIf5J9pvYnCZTogf85FQoE%2FZZHimMFbWjadFdxSK3vLdvbim4hx%2FwAp1LgbcBf8S3IRkQl0Vg4zvOVBvXZCz2Ofib9Zb1qGnL6aT5w999Pm8lWVwGcIBcHdwdAME2U3qn%2FrqQH%2F5OvFNZKsV4K23u8kDLo6emXiMWKk0F05LV9HT5ZZ%2FJA9EgI&X-Amz-Signature=9b169e34e0b28695f7ec21080fe76bee0e610a32631defb3bd25dfc9200b6575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD4JYY3I%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQo9ZGXXkyeXEeAZ2UTrFc%2BDmvSJuPgQDTyp94ATN8gIhAM7wkutGhtrgNJwWHb01wZ5Z%2BEJqgDOfWCxBN7lnm5yiKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3ERJlznVtF21dquIq3AMCsV014m25x4BjsLrzKdsT9jcKKyNzukFC9yKwYYSe%2Fy1bmNAq64vpkS%2F3%2Bz1d8DzfBqdy2fzhRoPTMvDG8F%2FOISaCMilU97Xg5iw8BfbfB5jLi5omMIaT1VwhZF6y%2Bs1FXAcNZb0iNQOKLc6qee%2BoxCM1hrhM9mpA7uc2CdZq8Ymt%2BrXrfX84nRmRO01UK6yOa%2FYUoX%2FV8QtgAArPvVtNVDHlTZkUUt2B%2BLCHpkLWnmpx1DhZTKdXNUVeX%2BpkqnTnaApb%2FP46jG2h66oalD2NrObB08TNRz1qMZRBrv%2Fs9FcL%2FO%2Fd9u8%2FqXPQ4SPxN2sXCXtaIHV0otdfGxhPBuLhqZgcIyjDCqTK2VCss%2F%2BJVgk6VDqXhXDLM%2FjmBL2%2BhEQjQA%2F66Zbn69HRX6CdO29dAE8fvEiWCDQ11tHzUAIuzs0%2B4i%2FCby0zmbo%2FPCr%2B9UJr21neBOENI4jWl3PaeKlEVgRqJLyKAeOzwzFKCqxamn8UpkBoxzqabQdV0kZqhB94xPKAK52UXVf0GIpjBOWlrIzMMdxUSsVpKBQgjLA9e8PPQPrD3%2FJQFtfqoTwGZmC5bIrrY0FJXbDeZF2D7qGIuYh0s9ooVwX3L1xIc%2BZIi2OU8Yk%2B8vrNd9FDvDClo7jDBjqkAchNcNc6y4bE1bavs6T5hCbrucGz5FN2YOAVielIf5J9pvYnCZTogf85FQoE%2FZZHimMFbWjadFdxSK3vLdvbim4hx%2FwAp1LgbcBf8S3IRkQl0Vg4zvOVBvXZCz2Ofib9Zb1qGnL6aT5w999Pm8lWVwGcIBcHdwdAME2U3qn%2FrqQH%2F5OvFNZKsV4K23u8kDLo6emXiMWKk0F05LV9HT5ZZ%2FJA9EgI&X-Amz-Signature=882caff8106be84c57ee43bc445c923f957908b3b866bdb83a1df21b0af4b710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
