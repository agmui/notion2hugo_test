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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLC3YZI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDSI3Q8Lrl4MARucY8x0H5L6xUYEjKf9KkTvEBZuqVnPAIhAOeiU%2FsaL8yDQ0UCx2jYX7rJwMpteDPQK5Uc9dmQYLEaKv8DCFEQABoMNjM3NDIzMTgzODA1IgwbryCSjfcB75rBKYsq3APHNPT%2FslKUtPB%2FDKPdamhBsuCSrduPf6%2BCrnvqGcgazoZj9z5eB0O%2FNKHHprzJdDmb19Ysl6vPOXTB9Q0Y6AahGizYfo%2BUoEer3zUr%2FLvrSNYhFiAc11EFU1ez18NczY%2F0tYk9iK6DrnToxcxikwLx4cKXszjCngi%2BAy2Unwwl96MUsauncLWjBy%2BGng1odCKHSVjGLoSpUoPxRSukLOfC02CZ4rTpVesjoOvBA%2FW4YaIgf8%2FQouriVUJ%2FDODtENIcBMkb9ywGdJWoKlWq9Gp9VQD8btxvD0QsxXtzaFtr2qKYndwoMqRav0LxP3vS%2F9QNoDWSXmUpTX1OHhUfnUJz3Zg8Yrn73KvtX6s5mGyHfX206gPCXSluIujMnY478vioVtjypggGXf77mRJiNVXH8aS2yGJ3RNaOjgLB9jTmTGI8lt2XXBsHUA4UXcruUcmRGaMbP3i8R%2FN3Nza1ije1Ds34b7MzGr1TA6gDsCCYky2S%2BTE2pJxFdOKpYmGMXjVVrDwcSGqlUpnrw6GI0Fnra0ehcSz89RY00EF28182rYYw8QcZuZPVubxj4%2BfqoPOpH%2BUaq1aXl1hN10Dm0zWhGzO8O%2Fky5HzJmLXkFCQ9Efxrq7RKp5p7HgfnVDDM0NvDBjqkAQScQaZV2%2FCj6%2Fv2EIFoCm75y9FafYsnmWfXHAG97Vwrero99IdgSWFrGFbFgilaWksZIJE5RWxmRby6he2sJQvbOazRAhmv2NPCbQEIUCjKFZadjuYCSE02a3PaPJ432DEuNBcOVXRPIAuYI86tm0v6VtwPZZ5UmASaWTcbSeLNwf3B0d%2Frnx%2BNXcU7w3Km2MznBqq4ZoP47OtlQT%2F0lO7vp%2F3U&X-Amz-Signature=cd90dcd353705ce3b8589eac4659827a259ecc228f35c6788cda7582a5410139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLC3YZI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDSI3Q8Lrl4MARucY8x0H5L6xUYEjKf9KkTvEBZuqVnPAIhAOeiU%2FsaL8yDQ0UCx2jYX7rJwMpteDPQK5Uc9dmQYLEaKv8DCFEQABoMNjM3NDIzMTgzODA1IgwbryCSjfcB75rBKYsq3APHNPT%2FslKUtPB%2FDKPdamhBsuCSrduPf6%2BCrnvqGcgazoZj9z5eB0O%2FNKHHprzJdDmb19Ysl6vPOXTB9Q0Y6AahGizYfo%2BUoEer3zUr%2FLvrSNYhFiAc11EFU1ez18NczY%2F0tYk9iK6DrnToxcxikwLx4cKXszjCngi%2BAy2Unwwl96MUsauncLWjBy%2BGng1odCKHSVjGLoSpUoPxRSukLOfC02CZ4rTpVesjoOvBA%2FW4YaIgf8%2FQouriVUJ%2FDODtENIcBMkb9ywGdJWoKlWq9Gp9VQD8btxvD0QsxXtzaFtr2qKYndwoMqRav0LxP3vS%2F9QNoDWSXmUpTX1OHhUfnUJz3Zg8Yrn73KvtX6s5mGyHfX206gPCXSluIujMnY478vioVtjypggGXf77mRJiNVXH8aS2yGJ3RNaOjgLB9jTmTGI8lt2XXBsHUA4UXcruUcmRGaMbP3i8R%2FN3Nza1ije1Ds34b7MzGr1TA6gDsCCYky2S%2BTE2pJxFdOKpYmGMXjVVrDwcSGqlUpnrw6GI0Fnra0ehcSz89RY00EF28182rYYw8QcZuZPVubxj4%2BfqoPOpH%2BUaq1aXl1hN10Dm0zWhGzO8O%2Fky5HzJmLXkFCQ9Efxrq7RKp5p7HgfnVDDM0NvDBjqkAQScQaZV2%2FCj6%2Fv2EIFoCm75y9FafYsnmWfXHAG97Vwrero99IdgSWFrGFbFgilaWksZIJE5RWxmRby6he2sJQvbOazRAhmv2NPCbQEIUCjKFZadjuYCSE02a3PaPJ432DEuNBcOVXRPIAuYI86tm0v6VtwPZZ5UmASaWTcbSeLNwf3B0d%2Frnx%2BNXcU7w3Km2MznBqq4ZoP47OtlQT%2F0lO7vp%2F3U&X-Amz-Signature=9bd9692879704673c0724db61579bb6f7ef7007b8eee0ead3a0bc3d4dbd31268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLC3YZI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDSI3Q8Lrl4MARucY8x0H5L6xUYEjKf9KkTvEBZuqVnPAIhAOeiU%2FsaL8yDQ0UCx2jYX7rJwMpteDPQK5Uc9dmQYLEaKv8DCFEQABoMNjM3NDIzMTgzODA1IgwbryCSjfcB75rBKYsq3APHNPT%2FslKUtPB%2FDKPdamhBsuCSrduPf6%2BCrnvqGcgazoZj9z5eB0O%2FNKHHprzJdDmb19Ysl6vPOXTB9Q0Y6AahGizYfo%2BUoEer3zUr%2FLvrSNYhFiAc11EFU1ez18NczY%2F0tYk9iK6DrnToxcxikwLx4cKXszjCngi%2BAy2Unwwl96MUsauncLWjBy%2BGng1odCKHSVjGLoSpUoPxRSukLOfC02CZ4rTpVesjoOvBA%2FW4YaIgf8%2FQouriVUJ%2FDODtENIcBMkb9ywGdJWoKlWq9Gp9VQD8btxvD0QsxXtzaFtr2qKYndwoMqRav0LxP3vS%2F9QNoDWSXmUpTX1OHhUfnUJz3Zg8Yrn73KvtX6s5mGyHfX206gPCXSluIujMnY478vioVtjypggGXf77mRJiNVXH8aS2yGJ3RNaOjgLB9jTmTGI8lt2XXBsHUA4UXcruUcmRGaMbP3i8R%2FN3Nza1ije1Ds34b7MzGr1TA6gDsCCYky2S%2BTE2pJxFdOKpYmGMXjVVrDwcSGqlUpnrw6GI0Fnra0ehcSz89RY00EF28182rYYw8QcZuZPVubxj4%2BfqoPOpH%2BUaq1aXl1hN10Dm0zWhGzO8O%2Fky5HzJmLXkFCQ9Efxrq7RKp5p7HgfnVDDM0NvDBjqkAQScQaZV2%2FCj6%2Fv2EIFoCm75y9FafYsnmWfXHAG97Vwrero99IdgSWFrGFbFgilaWksZIJE5RWxmRby6he2sJQvbOazRAhmv2NPCbQEIUCjKFZadjuYCSE02a3PaPJ432DEuNBcOVXRPIAuYI86tm0v6VtwPZZ5UmASaWTcbSeLNwf3B0d%2Frnx%2BNXcU7w3Km2MznBqq4ZoP47OtlQT%2F0lO7vp%2F3U&X-Amz-Signature=cbc015e8d91156219aaa2717c41f01edfb47fc4a8ea6f499038044fb056151d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
